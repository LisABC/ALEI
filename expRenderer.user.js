// ==UserScript==
// @name         ALEI Renderer
// @namespace    http://tampermonkey.net/
// @version      3.9
// @description  try to take over the world!
// @author       Lisandra
// @match        *://*.plazmaburst2.com/level_editor/map_edit.php*
// @icon         https://github.com/LisABC/ALEI/blob/main/icon.png?raw=true
// @grant        none
// ==/UserScript==

"use strict";

// Variables that Renderer actively uses.
let decorRequestsOnProgress = [];
let backgroundRequestsOnProgress = [];
let boxModelImages = {};
// Statistic purposes.
let displayFPS = 0;
let fpsAccumulator = 0;
let totalRenderedObjects = 0;
let lastTime = 0;

// Drawing functions.
let draw_rect;
let draw_rect_edges;
let draw_gridlines;
let draw_image;

// Context, grid, canvas
let ctx;
let canvasHeight;
let canvasWidth;
let gridOpacity;

// Mouse.
let mClickX;
let mClickY;
let mCurrentX;
let mCurrentY;

// World and Screen conversion functions
let w2s_x;
let w2s_y;
let s2w_x;
let s2w_y;
let w2s_h;
let w2s_w;
let s2w_h;
let s2w_w;

// For Preview mode.
let previewBackground = "1";

// Settings, themes.
let toggles = {
    cartoonishEdges: false,
    originalSelectOverlay: false,
    boxRendering: true
}
let themes = {
    0: { // THEME_BLUE
        // Grid colors.
        backgroundColor: "#5880AB",
        gridColor: "#FFFFFF",
        // Object select colors.
        selectOutlineColor: "#A5A500",
        selectEdgeOpacityFactor: 1,
        selectTextColor: "#FF0",
        // Selection area colors.
        selectionColor: "#FFF",
        selectionCtrlColor: "#AFA",
        selectionAltColor: "#FAA",
        selectionOpacity: 0.1, // Note that this and below is NOT opacity FACTOR
        selectionEdgeOpacity: 0.8,
        // Highlighted object edge color. (When included in selection area)
        highLightedObjEdgeColor: window.selgrd3, // NOTE: #FFFF00 seems nice. Bright but it is clearly noticeable.
        highLightedObjEdgeOpacity: 1

    },
    1: { // THEME_DARK
        backgroundColor: "#222222",
        gridColor: "#888888",
        selectOutlineColor: "#FFFF00",
        selectEdgeOpacityFactor: 1,
        selectTextColor: "#FF0",
        selectionColor: "#FFF",
        selectionCtrlColor: "#AFA",
        selectionAltColor: "#FAA",
        selectionOpacity: 0.1,
        selectionEdgeOpacity: 0.8,
        highLightedObjEdgeColor: window.selgrd3,
        highLightedObjEdgeOpacity: 1
    },
    2: { // THEME_GREEN
        backgroundColor: "#222222",
        gridColor: "#FFFFFF",
        selectOutlineColor: "#FFFF00",
        selectEdgeOpacityFactor: 1,
        selectTextColor: "#FF0",
        selectionColor: "#FFF",
        selectionCtrlColor: "#AFA",
        selectionAltColor: "#FAA",
        selectionOpacity: 0.1,
        selectionEdgeOpacity: 0.8,
        highLightedObjEdgeColor: window.selgrd3,
        highLightedObjEdgeOpacity: 1
    },
    3: { // THEME_PURPLE
        backgroundColor: "#222222",
        gridColor: "#FFFFFF",
        selectOutlineColor: "#FFFF00",
        selectEdgeOpacityFactor: 1,
        selectTextColor: "#FF0",
        selectionColor: "#FFF",
        selectionCtrlColor: "#AFA",
        selectionAltColor: "#FAA",
        selectionOpacity: 0.1,
        selectionEdgeOpacity: 0.8,
        highLightedObjEdgeColor: window.selgrd3,
        highLightedObjEdgeOpacity: 1
    },
    4: { // ALEI Black Theme
        backgroundColor: "#222222",
        gridColor: "#FFFFFF",
        selectOutlineColor: "#FFFF00",
        selectEdgeOpacityFactor: 1,
        selectTextColor: "#FF0",
        selectionColor: "#FFF",
        selectionCtrlColor: "#AFA",
        selectionAltColor: "#FAA",
        selectionOpacity: 0.1,
        selectionEdgeOpacity: 0.8,
        highLightedObjEdgeColor: window.selgrd3,
        highLightedObjEdgeOpacity: 1
    }
}
let currentTheme;

function RenderGrid() {
    // Grid lines.
    if(gridOpacity <= 0) return;
    ctx.fillStyle = currentTheme.gridColor;

    //           Step - Alpha
    draw_gridlines(10 , 0.08 * gridOpacity);
    draw_gridlines(100, 0.32 * gridOpacity);
    draw_gridlines(300, 0.64 * gridOpacity);

    ctx.globalAlpha = 0.7 * gridOpacity;
    draw_rect(0, w2s_y(0), canvasWidth, 1); // Center Grid - Horizontal
    draw_rect(w2s_x(0), 0, 1, canvasHeight); // Center Grid - Vertical
}

let objectColors = {
    box: {col: "#FFF", edgeCol: "#FFF"},
    door: {col: "#000", edgeCol: "#000", invisibleOpacityFactor: 0.05},
    water: {
        col: "#3592B9", edgeCol: "#91EAFF", opacityFactor: 0.24,
        acidCol: "#BBFB59", acidEdgeCol: "#91EAFF", acidOpacityFactor: 0.81
    },
    pushf: {col: "#2BFF40", edgeCol: "#3CFF4F"},
    region: {col: "#FFD52B", edgeCol: "#FFB03C", edgeOpacityFactor: 0.5, buttonOpacityFactor: 0.5},
    bg: {col: "#000", edgeCol: "#910000", edgeOpacityFactor: 0.3, coloredOpacityFactor: 0.22}
}
let regionImages = {
    1: window.img_region,
    9: window.img_region_red,
    10: window.img_region_blue
}

function _DrawRectangle(color, opacity, x, y, w, h, edge) {
    ctx.globalAlpha = opacity;
    if(edge) {
        if(toggles.cartoonishEdges) ctx.strokeColor = color;
        else ctx.strokeStyle = color;
        draw_rect_edges(x, y, w, h)
    }else {
        ctx.fillStyle = color;
        draw_rect(x, y, w, h);
    }
}
// Checks if given object is in selection area.
function ObjIsHighlighted(cns) {
    if(!window.m_drag_selection) return; // If we are not dragging.
    if(window.lmd) return; // If the selection just started

    let rx = w2s_x(Math.min(mClickX, mCurrentX));
    let ry = w2s_y(Math.min(mClickY, mCurrentY));
    let rw = w2s_w(Math.abs(mCurrentX - mClickX));
    let rh = w2s_h(Math.abs(mCurrentY - mClickY));

    let x = cns.x;
    let y = cns.y;
    let w = cns.w;
    let h = cns.h;

    if( ((x+w) < rx) || ((rx+rw) < x) ) return false;
    if( ((y+h) < ry) || (ry+rh) < y ) return false;

    return true;
}

// Function responsible for rendering resizable objects. (Region, door, box, pusher, water)
function RenderSingleResizableObject(element, cns) {
    let elemClass = element._class;
    let objectColor = objectColors[elemClass];
    if(objectColor === undefined) return;

    let layerAlpha = window.MatchLayer(element) ? 1: 0.3;

    let pm = element.pm;
    let x = w2s_x(pm.x);
    let y = w2s_y(pm.y);
    let w = w2s_w(pm.w);
    let h = w2s_h(pm.h);

    let color = objectColor.col;
    let edgeColor = objectColor.edgeCol;
    let opacityFactor = objectColor.opacityFactor ? objectColor.opacityFactor : 0.2;
    let edgeOpacityFactor = objectColor.edgeOpacityFactor ? objectColor.edgeOpacityFactor : 1;

    if((elemClass == "bg") && (window.CACHED_BGS[pm.m] == undefined) && (backgroundRequestsOnProgress.indexOf(pm.m) == -1)) {
        window.ServerRequest(`a=get_images&for_class=bg_model&update_const=${pm.m}`, 'request_consts');
        backgroundRequestsOnProgress.push(pm.m);
    }

    if(
        (elemClass == "door") && (
            (pm.vis === 0) ||
            (pm.vis === false) ||
            (pm.vis === "false")
        ) ) { // Setting opacity factor when door is invisible.
        opacityFactor = objectColor.invisibleOpacityFactor;
    }
    else if ((elemClass == "water") && (element.pm.damage > 0)) { // Swapping out properties when it is acid.
        color = objectColor.acidCol;
        edgeColor = objectColor.acidEdgeCol;
        opacityFactor = objectColor.acidOpacityFactor;
    }
    else if ((elemClass == "region") && ([1, 9, 10].indexOf(parseInt(pm.use_on)) !== -1)) {
        ctx.globalAlpha = layerAlpha * objectColor.buttonOpacityFactor;
        let image = regionImages[pm.use_on];
        draw_image(
            image,
            w2s_x(pm.x + Math.round((pm.w - 41)/2)),
            w2s_y(pm.y + Math.round((pm.h - 51)/2)),
            w2s_w(41),
            w2s_h(31)
        )
    }
    else if ((elemClass == "bg") && (pm.c.length == 7)) {
        color = pm.c;
        opacityFactor = objectColor.coloredOpacityFactor;
    }

    if(window.SHOW_TEXTURES) {
        if((elemClass == "box") && !(toggles.boxRendering)) {
            color = "#000";
            opacityFactor = 1;
            edgeColor = "#333";
        }
        else if((elemClass == "box") && (toggles.boxRendering)) {
            let image = boxModelImages[pm.m];
            if(image == undefined) {
                image = new Image();
                boxModelImages[pm.m] = image;

                image.src = `pic.php?c=3&m=${pm.m}`;
                image.width = 16;
                image.height = 16;
            }
            if(image.pattern == undefined) image.pattern = ctx.createPattern(image, "repeat-x"); // Create repeat pattern if not already done.
            ctx.globalAlpha = 1;


            ctx.save();
            // Getting a working rectangle for us in order to work.
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x+w, y);
            ctx.lineTo(x+w, y+h);
            ctx.lineTo(x, y+h);
            ctx.closePath();
            ctx.clip();

            // Ensuring that background is offsetted properly and takes all the rectangle.
            ctx.translate(w2s_x(0), w2s_y(0));
            ctx.scale(w2s_x(1) - w2s_x(0), w2s_y(1) - w2s_y(0));

            // Actual background rendering.
            ctx.beginPath();
            ctx.fillStyle = image.pattern;
            ctx.rect(s2w_x(0), s2w_y(0), s2w_w(canvasWidth), s2w_h(canvasHeight));
            ctx.fill();

            ctx.restore();


        }
        else if ((elemClass == "bg") && (window.CACHED_BGS[pm.m] !== undefined) && (window.CACHED_BGS[pm.m].loaded)) {
            if(backgroundRequestsOnProgress.indexOf(pm.m) !== -1) {
                backgroundRequestsOnProgress.splice(backgroundRequestsOnProgress.indexOf(pm.m), 1);
            }
            ctx.globalAlpha = 1;
            let img = window.CACHED_BGS[pm.m];
            if(img.pattern == undefined) img.pattern = ctx.createPattern(img, "repeat"); // Create repeat pattern if not already done.

            ctx.save();
            // Getting a working rectangle for us in order to work.
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x+w, y);
            ctx.lineTo(x+w, y+h);
            ctx.lineTo(x, y+h);
            ctx.closePath();
            ctx.clip();

            // Ensuring that background is offsetted properly and takes all the rectangle.
            ctx.translate(w2s_x(0), w2s_y(0));
            ctx.scale(w2s_x(1) - w2s_x(0), w2s_y(1) - w2s_y(0));
            ctx.translate(pm.u, pm.v);

            // Actual background rendering.
            ctx.beginPath();
            ctx.fillStyle = img.pattern;
            ctx.rect(s2w_x(0), s2w_y(0), s2w_w(canvasWidth), s2w_h(canvasHeight));
            ctx.fill();

            ctx.restore();

            // Color multiplying.
            if(pm.c.length == 7) {
                let comp = ctx.globalCompositeOperation;

                ctx.globalCompositeOperation = "multiply"; // We multiply the rectangle.
                _DrawRectangle(pm.c, 1, x, y, w, h, false);
                //ctx.globalCompositeOperation = "lighter";
                //ctx.drawImage(ctx.canvas, x, y, w, h, x, y, w, h); // We then overlay the rectangle on backgroud itself.

                ctx.globalCompositeOperation = comp;
            }
        }
    }

    if(ObjIsHighlighted(cns)) {
        edgeColor = currentTheme.highLightedObjEdgeColor;
        edgeOpacityFactor = currentTheme.highLightedObjEdgeOpacity / layerAlpha;
    }

    if(element.selected && !toggles.originalSelectOverlay) {
        edgeColor = currentTheme.selectOutlineColor;
        edgeOpacityFactor = currentTheme.selectEdgeOpacityFactor;
    }

    if(!( (window.SHOW_TEXTURES) && ( (elemClass == "bg") || ((elemClass == "box") && toggles.boxRendering) ) )) _DrawRectangle(color, layerAlpha * opacityFactor, x, y, w, h, false); // Object itself.
    if(!window.SHOW_TEXTURES) _DrawRectangle(edgeColor, layerAlpha * edgeOpacityFactor, x, y, w, h, true); // Edge.
}

// Function responsible for drawing edges of non-resizable objects. To be used below.
function RenderNRObjectBox(element, color, opacity) {
    let pm = element.pm;
    let objX = pm.x;
    let objY = pm.y;

    let oClass = window.ThinkOfBBoxClass(element._class, element);

    let classX = window.bo_x[oClass];
    let classY = window.bo_y[oClass];
    let classW = window.bo_w[oClass];
    let classH = window.bo_h[oClass];

    let x;
    let y = w2s_y(objY + classY);
    let w;
    let h = w2s_h(classH);

    if(pm.side != -1) {
        x = w2s_x(objX + classX);
        w = w2s_w(classW);
    } else {
        x = w2s_x(objX - classX);
        w = w2s_w(-classW);
        x += w;
        w = -w;
    }
    _DrawRectangle(color, opacity, x, y, w, h, true);

}

// Function responsible for rendering non-resizable objects (Everything else aside from ones mentioned above.)
function RenderSingleNonResizableObject(element, cns) {
    let elemClass = element._class;
    let layerAlpha = window.MatchLayer(element) ? 1: 0.3;
    let pm = element.pm;
    let x = pm.x;
    let y = pm.y;

    let color = "#000";
    let opacityFactor = 0.1;

    if(ObjIsHighlighted(cns)) {
        color = currentTheme.highLightedObjEdgeColor;
        opacityFactor = currentTheme.highLightedObjEdgeOpacity / layerAlpha;
    }

    if(element.selected && !toggles.originalSelectOverlay) {
        color = currentTheme.selectOutlineColor;
        opacityFactor = currentTheme.selectEdgeOpacityFactor;
    }

    RenderNRObjectBox(element, color, layerAlpha * opacityFactor);

    ctx.globalAlpha = layerAlpha;
    let transformedDecor = false;

    if(elemClass == "decor") { // Rotation & scaling, also fetching decor if needed..
        let model = pm.model;
        if( (window.special_values_table.decor_model[model] == undefined) && (decorRequestsOnProgress.indexOf(model) == -1)) {
            window.ServerRequest(`a=get_images&for_class=decor_model&update_const=${model}`, 'request_consts');
            decorRequestsOnProgress.push(model);
        }
        if((pm.r != 0) || (pm.sx != 1) || (pm.sy != 1)) {
            ctx.save();
            ctx.translate(w2s_x(x), w2s_y(y));
            ctx.rotate(pm.r / 180 * Math.PI);
            ctx.scale(pm.sx, pm.sy);
            ctx.translate(-w2s_x(x), -w2s_y(y));
            transformedDecor = true;
        }
    }

    let offsetClass = window.ThinkOfOffsetClass(elemClass, element);
    let factor = (pm.side != -1) ? 1: -1;

    let objX = w2s_x(x + factor * window.lo_x[offsetClass]);
    let objY = w2s_y(y + window.lo_y[offsetClass]);
    let objW = w2s_w(factor * window.lo_w[offsetClass]);
    let objH = w2s_h(window.lo_h[offsetClass]);

    if(factor == -1) {
        ctx.save();
        ctx.translate(2 * objX + objW, 0);
        ctx.scale(-1, 1);
    }

    if(["player", "enemy"].indexOf(elemClass) !== -1) {
        draw_image(window.img_chars_full[pm.char], w2s_x(pm.x - 36), w2s_y(pm.y - 104), w2s_w(110), w2s_h(130));
    } else if ((elemClass == "decor") && (window.CACHED_DECORS[pm.model] !== undefined) && (!window.CACHED_DECORS[pm.model].native)) {
        if(decorRequestsOnProgress.indexOf(pm.model) !== -1) {
            decorRequestsOnProgress.splice(decorRequestsOnProgress.indexOf(pm.model), 1);
        }
        let image = window.CACHED_DECORS[pm.model];
        draw_image(
            image,
            w2s_x(pm.x + pm.u),
            w2s_y(pm.y + pm.v),
            w2s_w(image.width),
            w2s_h(image.height)
        );
    } else {
        draw_image(window.img_decide(element), objX, objY, objW, objH);
    }

    if(factor == -1) ctx.restore();
    if(transformedDecor) ctx.restore();
}

function GetObjectCoordAndSize(element) {
    let pm = element.pm;

    let x, y, w, h;
    if(element._isresizable) {
        x = w2s_x(pm.x);
        y = w2s_y(pm.y);
        w = w2s_w(pm.w);
        h = w2s_h(pm.h);
    } else {
        let boxClass = window.ThinkOfBBoxClass(element._class, element);
        y = w2s_y(pm.y + window.bo_y[boxClass]);
        h = w2s_h(window.bo_h[boxClass]);
        if(pm.side != -1) {
            x = w2s_x(pm.x + window.bo_x[boxClass]);
            w = w2s_w(window.bo_w[boxClass]);
        } else {
            x = w2s_x(pm.x - window.bo_x[boxClass]);
            w = w2s_w(-window.bo_w[boxClass]);
            x += w;
            w = -w;
        }
    }

    return {x: x, y: y, w: w, h: h}
}

function RenderObjectMarkAndName(element, cns) {
    if(!window.ENABLE_TEXT) return;
    if(element.pm.uid == undefined) return;
    if(!window.MatchLayer(element)) return;

    if(window.last_title_density == undefined) window.last_title_density = 0;

    let capx = cns.x + cns.w / 2;
    let capy = cns.y + cns.h / 2;

    let gothit = (element.selected && element.hit(false));
    ctx.font = "normal 10px Arial";
    let fillText = element.pm.uid;
    let dim = ctx.measureText(fillText);
    dim.height = 10;
    if (gothit)
        dim.height = 12;
    if (window.mouse_x > capx - 30)
        if (window.mouse_x < capx + 30)
            if (window.mouse_y > capy - 30)
                if (window.mouse_y < capy + 30) {
                    title_density++;
                }

    ctx.globalAlpha = 1;
    if (window.last_title_density > 1 && !gothit) {
        let di = Math.sqrt(Math.pow(window.mouse_x - capx, 2) + Math.pow(window.mouse_y - capy, 2));
        if (di < 60) {
            if (!element.selected) {
                capx = capx - (window.mouse_x - capx) * Math.pow((60 - di) / 60, 2) * (4 + Math.min(6, window.last_title_density * 0.1));
                capy = capy - (window.mouse_y - capy) * Math.pow((60 - di) / 60, 2) * (4 + Math.min(6, window.last_title_density * 0.1));
                if (window.last_title_density > 1) {
                    ctx.globalAlpha = Math.max(0.4, 1 - window.last_title_density * 0.1);
                }
            } else {
                ctx.globalAlpha = Math.max(0.3, 1 / window.last_title_density);
            }
        }
    }
    let x3 = Math.round(capx - dim.width / 2);
    let y3 = Math.round(capy - dim.height / 2);
    if (window.ENABLE_SHADOWS) {
        ctx.fillStyle = 'rgba(0,0,0,0.1)';
        ctx.fillRect(x3 - 2, y3 - 2, dim.width + 4, dim.height + 4);
        ctx.fillRect(x3 - 4, y3 - 4, dim.width + 8, dim.height + 8);
    }
    ctx.fillStyle = "#FFF";
    if (gothit) ctx.fillStyle = '#fffb91';
    if (element.selected) ctx.fillStyle = currentTheme.selectTextColor;
    ctx.fillText(fillText, x3, y3 + 8 + (dim.height - 10) / 2);
    window.last_title_density = window.title_density;
}

function RenderSelectOverlay(element, cns) {
    if(!element.selected) return;
    if(!toggles.originalSelectOverlay) return;

    ctx.globalAlpha = 0.2;
    ctx.fillStyle = window.selgrd2;
    draw_rect(cns.x, cns.y, cns.w, cns.h);

    ctx.globalAlpha = 1;
    ctx.fillStyle = "#FFF";
    window.MyDrawSelection(cns.x-2, cns.y-2, cns.w+4, cns.h+4)
}

function ChangeCursorIfHitsBorder(element, cns) {
    if(!element.selected) return;
    if(!window.MatchLayer(element)) return;

    let cx = cns.x;
    let cy = cns.y;
    let cw = cns.w;
    let ch = cns.h;

    let x = element.pm.x;
    let y = element.pm.y;
    let w = element.pm.w;
    let h = element.pm.h;

    let mx = mCurrentX;
    let my = mCurrentY;

    let borderwidth = window.borderwidth;

    // Do elimination if checking is not necessary.
    if(mx < (x - borderwidth)) return;
    if((x + w + borderwidth) < mx) return;
    if(my < (y - borderwidth)) return;
    if((y+h+borderwidth) < my) return;

    let DOQuad = (x, y, w, h) => {
        if( (x < mx) && (mx < (x+w)) ) {
            if( (y < my) && (my < (y+h)) ) {
                return true;
            }
        }
        return false;
    };

    let cursor = "default";
    // TODO: Optimize this crap...
    if (DOQuad(x - borderwidth, y - borderwidth, borderwidth * 2, borderwidth * 2)) cursor = 'se-resize';
    if (DOQuad(x + w - borderwidth, y - borderwidth, borderwidth * 2, borderwidth * 2)) cursor = 'ne-resize';
    if (DOQuad(x - borderwidth, y + h - borderwidth, borderwidth * 2, borderwidth * 2)) cursor = 'ne-resize';
    if (DOQuad(x + w - borderwidth, y + h - borderwidth, borderwidth * 2, borderwidth * 2)) cursor = 'se-resize';
    if (DOQuad(x + borderwidth, y - borderwidth, w - borderwidth * 2, borderwidth * 2)) cursor = 'n-resize';
    if (DOQuad(x + borderwidth, y + h - borderwidth, w - borderwidth * 2, borderwidth * 2)) cursor = 'n-resize';
    if (DOQuad(x - borderwidth, y + borderwidth, borderwidth * 2, h - borderwidth * 2)) cursor = 'e-resize';
    if (DOQuad(x + w - borderwidth, y + borderwidth, borderwidth * 2, h - borderwidth * 2)) cursor = 'e-resize';
    if(window.canv.style.cursor != cursor) window.canv.style.cursor = cursor;

}

function RenderSingleObject(element) {
    let cns = GetObjectCoordAndSize(element);
    if(element._isresizable) RenderSingleResizableObject(element, cns);
    else RenderSingleNonResizableObject(element, cns);
    RenderSelectOverlay(element, cns);
    RenderObjectMarkAndName(element, cns);
    ChangeCursorIfHitsBorder(element, cns);
}

function RenderAllObjects() {
    totalRenderedObjects = 0;

    let lp = window.left_panel.getBoundingClientRect();
    let rp = window.right_panel.getBoundingClientRect();
    let tp = window.top_panel.getBoundingClientRect();

    let cx = Math.round(s2w_x(lp.width + lp.x));
    let cy = Math.round(s2w_y(tp.height + tp.y));
    let cw = Math.round(s2w_w(rp.x - (lp.width + lp.x)));
    let ch = Math.round(s2w_h(canvasHeight - (tp.height + tp.y)));

    for(let element of window.es) {
        let pm = element.pm;
        let x = pm.x;
        let y = pm.y;
        let w = pm.w ? pm.w : 0;
        let h = pm.h ? pm.h : 0;

        // Actual culling
        if( (x+w) < cx ) continue;
        if( (y+h) < cy ) continue;
        if( (cx+cw) < x ) continue;
        if( (cy+ch) < y ) continue;


        if(!element.exists) continue;
        if(!element._isphysical) continue;

        RenderSingleObject(element);
        totalRenderedObjects++;
    }
}

function RenderSelectionBox() {
    if(!window.m_drag_selection) return; // If we are not dragging.
    if(window.lmd) return; // If the selection just started


    let x = w2s_x(mClickX); // Start X for rectangle
    let y = w2s_y(mClickY); // Start Y for rectangle
    let w = w2s_w(mCurrentX - mClickX); // Width for rectangle.
    let h = w2s_h(mCurrentY - mClickY); // Height for rectangle.

    let color = currentTheme.selectionColor;
    if(window.ctrl) color = currentTheme.selectionCtrlColor;
    else if(window.alt) color = currentTheme.selectionAltColor;

    _DrawRectangle(color, currentTheme.selectionOpacity, x, y, w, h);
    _DrawRectangle(color, currentTheme.selectionEdgeOpacity, x, y, w, h, true);
}

function RenderBackground() {
    if(!window.SHOW_TEXTURES) {
        ctx.fillStyle = currentTheme.backgroundColor;
        draw_rect(0, 0, canvasWidth, canvasHeight);
    } else {
        draw_image(window.CACHED_SKY[previewBackground], 0, 0, canvasWidth, canvasHeight);
    }
}

function RenderFrame() {
    if(!window.need_redraw) return;
    canvasWidth = window.lsu;
    canvasHeight = window.lsv;
    currentTheme = themes[window.THEME];
    gridOpacity = window.GRID_ALPHA;

    mClickX = window.lmdrwa;
    mClickY = window.lmdrwb;
    mCurrentX = window.lmwa;
    mCurrentY = window.lmwb;

    window.canv.style.cursor = "default";
    ctx.globalAlpha = 1;

    RenderBackground();
    RenderGrid();
    RenderAllObjects();
    RenderSelectionBox();
}

function DisplayStatistics() {
    let element = document.getElementById("gui_renderInfo");
    if(element == undefined) {
        element = document.createElement("div");
        element.id = "gui_renderInfo";
        element.innerHTML = "Waiting for data...";
        window.right_panel.childNodes[0].insertBefore(element, document.getElementById("gui_params"));
    }
    let text = `
    Renderer FPS: ${displayFPS}
    Rendered Object: ${totalRenderedObjects} / ${window.es.length}
    `
    element.innerHTML = text.slice(1).replaceAll("\n", "<br>");
}

function getTimeMs() {return (new Date()).getTime()}

function RequestRedrawIfGridMoved() {
    let speedFactor = window.k_shift ? 5 : 1;

    function triggerMove() {
        window.zoom_validate();
        window.need_redraw = true;
        window.lmd = false;
        window.lmwa = s2w_x(window.mouse_x);
        window.lmwb = s2w_x(window.mouse_y);
        //window.m_move();
    }

    let didMove = false;
    // X.
    if(window.speed_x !== 0) {
        let toAdd = window.zoom * 10 * speedFactor * window.speed_x;
        window.dis_from_x += toAdd;
        window.dis_to_x += toAdd;
        didMove = true;
    }
    // Y.
    if(window.speed_y !== 0) {
        let toAdd = window.zoom * 10 * speedFactor * window.speed_y;
        window.dis_from_y += toAdd;
        window.dis_to_y += toAdd;
        didMove = true;
    }

    if(didMove) triggerMove();
}

function HandleSingleFrame() {
    window.requestAnimationFrame(HandleSingleFrame);

    RequestRedrawIfGridMoved();
    RenderFrame();
    if(window.need_GUIParams_update) {
        window.need_GUIParams_update = false;
        window.UpdateGUIParams();
        window.UpdateGUIObjectsList();
    }

    fpsAccumulator++;
    if((getTimeMs() - lastTime) >= 1000) {
        lastTime = getTimeMs();
        displayFPS = fpsAccumulator;
        fpsAccumulator = 0;
    }

    DisplayStatistics();
}

function PreviewModeUpdateVariables(val) {
    if(!val) return;
    for(let element of window.es) {
        if(!(element._class == "inf")) continue;
        let pm = element.pm;
        if(pm.mark == "sky") {
            previewBackground = pm.forteam;
            return;
        }
    }
}

(function() {
    ctx = window.ctx;

    // Draw functions.
    draw_rect_edges = (x, y, w, h) => ctx.strokeRect(x, y, w, h);
    draw_rect = window.lmfr;
    draw_gridlines = window.lg;
    draw_image = (img, x, y, w, h) => window.MyDrawImage(img, x, y, w, h);

    // Storing functions into our scope. (To avoid tampermonkey warning)
    w2s_x = window.w2s_x;
    w2s_y = window.w2s_y;
    s2w_x = window.s2w_x;
    s2w_y = window.s2w_y;
    w2s_h = window.w2s_h;
    w2s_w = window.w2s_w;
    s2w_h = window.s2w_h;
    s2w_w = window.s2w_w;
    // Patching.
    let osts = window.ShowTexturesSet;
    window.ShowTexturesSet = (val) => {PreviewModeUpdateVariables(val); osts(val)}
    window.Render = () => {}; // Make Render function do nothing.
    window.ani = () => {}; // Make ani function do nothing.
    window.requestAnimationFrame(HandleSingleFrame);

    // Setting default values.
    lastTime = getTimeMs();

    // Logging.
    console.log(`[ALEI Renderer]: Active.`);
})();
