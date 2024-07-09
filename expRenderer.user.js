// ==UserScript==
// @name         ALEI Renderer
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  try to take over the world!
// @author       Lisandra
// @match        *://*.plazmaburst2.com/level_editor/map_edit.php*
// @icon         https://github.com/LisABC/ALEI/blob/main/icon.png?raw=true
// @grant        none
// ==/UserScript==

"use strict";

let draw_rect;
let draw_rect_edges;
let draw_gridlines;

let ctx;
let canvasHeight;
let canvasWidth;
let gridOpacity;

let w2s_x;
let w2s_y;
let s2w_x;
let s2w_y;
let w2s_h;
let w2s_w;
let s2w_h;
let s2w_w;


let themes = {
    0: { // THEME_BLUE
        backgroundColor: "#5880AB",
        gridColor: "#FFFFFF"
    },
    1: { // THEME_DARK
        backgroundColor: "#222222",
        gridColor: "#888888"
    },
    2: { // THEME_GREEN
        backgroundColor: "#222222",
        gridColor: "#FFFFFF"
    },
    3: { // THEME_PURPLE
        backgroundColor: "#222222",
        gridColor: "#FFFFFF"
    },
    4: { // ALEI Black Theme
        backgroundColor: "#222222",
        gridColor: "#FFFFFF"
    }
}
let currentTheme;

function RenderGrid() {
    // Background.
    ctx.fillStyle = currentTheme.backgroundColor;
    draw_rect(0, 0, canvasWidth, canvasHeight);

    // Grid lines.
    if(gridOpacity <= 0) return;
    ctx.fillStyle = currentTheme.gridColor;

    //           Step - Alpha
    draw_gridlines(10 , 0.08 * gridOpacity);
    draw_gridlines(100, 0.32 * gridOpacity);
    draw_gridlines(300, 0.64 * gridOpacity);

    ctx.globalAlpha = 0.7 * gridOpacity;
    draw_rect(0, w2s_y(0), canvasWidth, 1);  // Center Grid - Horizontal
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
    ctx.fillStyle = color;
    ctx.globalAlpha = opacity;
    if(edge) draw_rect_edges(x, y, w, h)
    else draw_rect(x, y, w, h);
}
// Function responsible for rendering resizable objects. (Region, door, box, pusher, water)
function RenderSingleResizableObject(index, element) {
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
        window.MyDrawImage(
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

    _DrawRectangle(color, layerAlpha * opacityFactor, x, y, w, h, false); // Object itself.
    _DrawRectangle(edgeColor, layerAlpha * edgeOpacityFactor, x, y, w, h, true); // Edge.
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
function RenderSingleNonResizableObject(index, element) {
    let elemClass = element._class;
    let layerAlpha = window.MatchLayer(element) ? 1: 0.3;
    let pm = element.pm;
    let x = pm.x;
    let y = pm.y;

    RenderNRObjectBox(element, "#000", layerAlpha * 0.1);

    ctx.globalAlpha = layerAlpha;
    let transformedDecor = false;

    if(elemClass == "decor") { // Rotation & scaling, also fetching decor if needed..
        let model = pm.model;
        if(window.special_values_table.decor_model[model] == undefined) window.ServerRequest(`a=get_images&for_class=decor_model&update_const=${model}`, 'request_consts');
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
        window.MyDrawImage(window.img_chars_full[pm.char], w2s_x(pm.x - 36), w2s_y(pm.y - 104), w2s_w(110), w2s_h(130));
    } else if ((elemClass == "decor") && (window.CACHED_DECORS[pm.model] !== undefined) && (!window.CACHED_DECORS[pm.model].native)) {
        let image = window.CACHED_DECORS[pm.model];
        window.MyDrawImage(
            image,
            w2s_x(pm.x + pm.u),
            w2s_y(pm.y + pm.v),
            w2s_w(image.width),
            w2s_h(image.height)
        );
    } else {
        window.MyDrawImage(window.img_decide(element), objX, objY, objW, objH);
    }

    if(factor == -1) ctx.restore();
    if(transformedDecor) ctx.restore();
}

function RenderSingleObject(index, element) {
    if(element._isresizable) RenderSingleResizableObject(index, element);
    else RenderSingleNonResizableObject(index, element);
}

function RenderAllObjects() {
    let focusX = s2w_x(0);
    let focusY = s2w_y(0);
    let canvasW = s2w_w(canvasWidth);
    let canvasH = s2w_h(canvasHeight);

    for(let i = 0; i < window.es.length; i++) {
        let element = window.es[i];

        // TODO: Does ALE already do this? Doing it just incase.
        let w = element.pm.w ? element.pm.w : 0;
        let h = element.pm.h ? element.pm.h : 0;
        if((element.pm.x + w) < focusX) continue;
        if((element.pm.y + h) < focusY) continue;
        if((focusX + canvasW) < element.pm.x) continue;
        if((focusY + canvasH) < element.pm.y) continue;

        if(!element.exists) continue;
        if(!element._isphysical) continue;

        RenderSingleObject(i, element);
    }
}

function Renderer() {
    canvasWidth = window.lsu;
    canvasHeight = window.lsv;
    currentTheme = themes[window.THEME];
    gridOpacity = window.GRID_ALPHA;

    ctx.globalAlpha = 1;
    RenderGrid();
    RenderAllObjects();
}

(function() {
    draw_rect = window.lmfr;
    draw_rect_edges = window.ldb;
    draw_gridlines = window.lg;
    // Those are just so tampermonkey does not give warning without us using window (exception being "es").
    w2s_x = window.w2s_x;
    w2s_y = window.w2s_y;
    s2w_x = window.s2w_x;
    s2w_y = window.s2w_y;
    w2s_h = window.w2s_h;
    w2s_w = window.w2s_w;
    s2w_h = window.s2w_h;
    s2w_w = window.s2w_w;


    ctx = window.ctx;
    window.Render = Renderer;
    console.log(`[ALEI Renderer]: Active.`);
})();
