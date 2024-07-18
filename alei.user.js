// ==UserScript==
// @name         ALE Improvements
// @version      18.9
// @description  Changes to make ALE better.
// @author       mici1234, wanted2001, gcp5o
// @match        *://www.plazmaburst2.com/level_editor/map_edit.php*
// @run-at       document-start
// @icon         https://github.com/LisABC/ALEI/blob/main/icon.png?raw=true
// @updateURL    https://github.com/LisABC/ALEI/raw/main/alei.user.js
// @downloadURL  https://github.com/LisABC/ALEI/raw/main/alei.user.js
// @connect      github.com
// @connect      githubusercontent.com
// @grant        GM.xmlHttpRequest
// ==/UserScript==

"use strict";

let window = unsafeWindow;
let isNative;
try {
    GM_info
    isNative = true;
    window["nativeALEIRunning"] = true;
} catch (e) {
    isNative = false
};

if(!isNative && (window["nativeALEIRunning"] == true)) {
    Hello_IgnoreThisError_ItIsIntentional // hope this is not defined
}
window["ALEI_Active"] = true;

// Shorthand things
function $id(id) {
    return document.getElementById(id);
}
function $query(selector) {
    return document.querySelector(selector);
}

let ROOT_ELEMENT = document.documentElement;
let stylesheets = document.styleSheets;
let VAL_TABLE = {}; // Will be filled later.
let displayOperationCompleteNotes = true;
let REGION_EXECUTE_PARAM_ID; // Will be set later.
let OCM_LOADED = true; // Assume empty map.

const INFO = 0;
const DEBUG = 1;
const DEBUG2 = 2;
const VERBOSE = DEBUG2; // Alias.
const WARN = -1;
const SWARN = -2;
const __OCM_CHECKED_KEYS = ["target", "attach", "use_target", "incar", "ondeath", "callback"]; // OCM = Object Connection Mapping

// Just for styling.
const ANSI_RESET = "\x1B[0m"
const ANSI_RED = "\x1B[31m"
const ANSI_GREY = "\x1B[37m"
const ANSI_YELLOW = "\x1B[93m"
const ANSI_GREEN = "\x1B[92m"
const ANSI_CYAN = "\x1B[96m"

function readStorage(key, defaultValue, func) {
    let val = localStorage[key];
    if (val === undefined) return defaultValue;
    return func(localStorage[key])
}

if (localStorage['RIGHT_PANEL_WIDTH'] != undefined) {
    localStorage["ALEI_RightPanelWidth"] = localStorage["RIGHT_PANEL_WIDTH"];
    localStorage.removeItem("RIGHT_PANEL_WIDTH");
}

let aleiSettings = {
    rightPanelSize:     readStorage("ALEI_RightPanelWidth",         "30vw",  (val) => val         ),
    triggerEditTextSize:readStorage("ALEI_EditTextSize",            "12px",  (val) => val + "px"  ),
    starsImage:         readStorage("ALEI_StarImage",               "stars2.jpg", (val) => val    ),
    logLevel:           readStorage("ALEI_LogLevel",                0,     parseInt               ),
    showTriggerIDs:     readStorage("ALEI_ShowTriggerIDs",          false, (val) => val === "true"),
    enableTooltips:     readStorage("ALEI_ShowTooltips",            false, (val) => val === "true"),
    showSameParameters: readStorage("ALEI_ShowSameParameters",      true , (val) => val === "true"),
    rematchUID:         readStorage("ALEI_RemapUID",                false, (val) => val === "true"),
    //showIDs:            readStorage("ALEI_ShowIDs",               false, (val) => val === "true"),
    blackTheme:         readStorage("ALEI_BlackTheme",              false, (val) => val === "true"),
    gridBasedOnSnapping:readStorage("ALEI_gridBasedOnSnapping",     true,  (val) => val === "true"),
    //showZIndex:         readStorage("ALEI_ShowZIndex",              false, (val) => val === "true"),
    renderObjectNames:  readStorage("ALEI_RenderObjectNames",       true,  (val) => val === "true"),
    //ocmEnabled:         readStorage("ALEI_OCMEnabled",              false, (val) => val === "true"),
    ocmEnabled:         true,
    extendedTriggers:   readStorage("ALEI_ExtendedTriggersEnabled", true,  (val) => val === "true"),
    customRenderer:     readStorage("ALEI_Renderer_Enabled",        true,  (val) => val === "true"),
    orderedNaming:      readStorage("ALEI_orderedNaming",           true,  (val) => val === "true")
}
window.aleiSettings = aleiSettings;

function writeStorage(key, value) {
    try {
        localStorage[key] = value;
    } catch (e) {
        NewNote("ALEI: There was some issue trying to save into storage. You might need to clear your datas.", note_bad);
        console.error(e);
    }
}

let levelToNameMap = {
    0: `${ANSI_CYAN}INFO${ANSI_RESET}`,
    1: `${ANSI_GREEN}DEBUG${ANSI_RESET}`,
    2: `${ANSI_GREEN}VERBOSE${ANSI_RESET}`
}

function aleiLog(level, text) {
    if (level <= WARN) {
        console.warn(`[ALEI:WARNING]: ${text}`);
        if(level === WARN) NewNote(`ALEI: Please check console.`, "#FFFF00");
    }else if (level <= aleiSettings.logLevel)
        console.log(`[${ANSI_GREEN}ALEI:${levelToNameMap[level]}]: ${text}`)
}
aleiLog(INFO, "Starting up...");

// Original functions, globally saved here if needed
// JS_ prefix for JavaScript ones, ALE_ for ALE ones
let JS_setTimeout = window.setTimeout;
let JS_eval = window.eval;
let ALE_Render;

let aleiSessionID = null; // ID of this session
let aleiSessionList = []; // Set of known session IDs

function updateParameters() {
    // Does things to parameters depending on purpose.
    function add(key, type, name, objType) {
        param_type[param_type.length] = [key, type, name, "", objType];
    }
    // Adding parameters that the game accepts but ALE does not have.
    add("moving", "bool", "Is Moving?", "door");
    add("tarx", "value", "Target X", "door");
    add("tary", "value", "Target Y", "door");
    // Adding our own parameter.
    add("__id", "value", "Object ID", "*");
    add("__priority", "value", "Object priority", "*");
    add("execute", "bool", "Executes directly?", "trigger");
    add("uses_timer", "bool", "Calls timer?", "region");
    add("text", "string", "Placeholder text", "decor");
    add("attach", "door+none", "Attach to", "water");

    // add("extended", "bool", "Extended?", "trigger");
    // add("totalNumOfActions", "value", "Total No. Of Actions: ", "trigger");
    // add("nextTrigger", "trigger+none", "Next trigger", "trigger");

    // Patching parameters
    param_type[0] = ['uid', 'string', 'Name', 'Object Name', '*'];

    // Setting global variables for future use
    for(let i = 0; i < param_type.length; i++) {
        let param = param_type[i];
        let key = param[0];
        let selector = param[4];

        if((key == "use_target") && (selector == "region")) {
            REGION_EXECUTE_PARAM_ID = i;
            continue;
        }
        if(["w", "h"].indexOf(key) != -1) { // Enables height and width parameters to be able to have negative height and width.
            param_type[i][1] = "value+round10";
            continue;
        }
    }
    VAL_TABLE["timer+none"] = new Array();
    VAL_TABLE["timer+none"][-1] = "- No timer -";
    VAL_TABLE["timer+none"]["[listof]"] = "timer"; // Somebody save me.
}

function updateSounds() {
    // Adds sounds that exist in game but not in ALE
    let SVTS = VAL_TABLE["sound"];
    SVTS['am_base'] = 'Indoor Ambience';
    SVTS['am_wind'] = 'Outdoor Ambience';
    SVTS['android2_die'] = 'DT-148 - Death';
    SVTS['android2_hurt'] = 'DT-148 - Hurt';
    SVTS['android2_welcome2'] = 'DT-148 - Alerted';
    SVTS['arrin_death1'] = 'Arrin - Death';
    SVTS['arrin_dying'] = 'Arrin - Dying';
    SVTS['arrin_hurt1'] = 'Arrin - Hurt 1';
    SVTS['arrin_hurt2'] = 'Arrin - Hurt 2';
    SVTS['arrin_welcome1'] = 'Arrin - Alerted 1';
    SVTS['arrin_welcome2'] = 'Arrin - Alerted 2';
    SVTS['arrin_welcome3'] = 'Arrin - Alerted 3';
    SVTS['bounce_bullet'] = 'Falkonian PSI Cutter - Shot Bounce';
    SVTS['dart4'] = 'Medic Pistol';
    SVTS['exp_event_stop'] = 'EXP - Stop';
    SVTS['exp_level'] = 'EXP - Level Up';
    SVTS['exp_tick'] = 'EXP - Gain';
    SVTS['gameplay_song'] = 'Katharsys - Erges';
    SVTS['gravitator2'] = 'Floor gravitator noice';
    SVTS['helm_proxy_alert_over_hereB'] = 'Proxy - Over here!';
    SVTS['helm_proxy_alert_take_coverB'] = 'Proxy - Take cover!';
    SVTS['helm_proxy_alert_up_thereA'] = 'Proxy - Up there!';
    SVTS['helm_proxy_death3'] = 'Proxy - Death 1';
    SVTS['helm_proxy_death4'] = 'Proxy - Death 2';
    SVTS['helm_proxy_death5'] = 'Proxy - Death 3';
    SVTS['helm_proxy_death6'] = 'Proxy - Death 4';
    SVTS['helm_proxy_dyingC'] = 'Proxy - Help! 1';
    SVTS['helm_proxy_dyingF'] = 'Proxy - Help! 2';
    SVTS['helm_proxy_enemy_down_fantasticA'] = 'Proxy - Fantastic.';
    SVTS['helm_proxy_enemy_down_got_oneD'] = 'Proxy - Got one.';
    SVTS['helm_proxy_enemy_down_niceA'] = 'Proxy - Nice. 1';
    SVTS['helm_proxy_enemy_down_niceC'] = 'Proxy - Nice. 2';
    SVTS['helm_proxy_hurt11'] = 'Proxy - Hurt 1';
    SVTS['helm_proxy_hurt12'] = 'Proxy - Hurt 2';
    SVTS['helm_proxy_hurt13'] = 'Proxy - Hurt 3';
    SVTS['helm_proxy_hurt14'] = 'Proxy - Hurt 4';
    SVTS['helm_proxy_hurt15'] = 'Proxy - Hurt 5';
    SVTS['helm_proxy_hurt17'] = 'Proxy - Hurt 6';
    SVTS['helm_proxy_hurt4'] = 'Proxy - Hurt 7';
    SVTS['helm_proxy_hurt5'] = 'Proxy - Hurt 8';
    SVTS['helm_proxy_hurt8'] = 'Proxy - Hurt 9';
    SVTS['helm_proxy_hurt9'] = 'Proxy - Hurt 10';
    SVTS['hexagon_death1'] = 'Hexagon - Death 1';
    SVTS['hexagon_death2'] = 'Hexagon - Death 2';
    SVTS['hexagon_pain1'] = 'Hexagon - Hurt 1';
    SVTS['hexagon_pain2'] = 'Hexagon - Hurt 2';
    SVTS['hexagon_pain3'] = 'Hexagon - Hurt 3';
    SVTS['hexagon_pain4'] = 'Hexagon - Hurt 4';
    SVTS['hexagon_welcome1'] = 'Hexagon - Alerted 1';
    SVTS['hexagon_welcome2'] = 'Hexagon - Alerted 2';
    SVTS['hexagon_welcome3'] = 'Hexagon - Alerted 3';
    SVTS['main_song'] = 'NPhonix - Antigravity';
    SVTS['orakin_death1'] = 'Orakin - Death 1';
    SVTS['orakin_death2'] = 'Orakin - Death 2';
    SVTS['orakin_hurt'] = 'Orakin - Hurt';
    SVTS['orakin_welcome'] = 'Orakin - Alerted';
    SVTS['proxy_alert_over_hereB'] = 'No Helm Proxy - Over here!';
    SVTS['proxy_alert_take_coverB'] = 'No Helm Proxy - Take cover!';
    SVTS['proxy_alert_up_thereA'] = 'No Helm Proxy - Up there!';
    SVTS['proxy_death3'] = 'No Helm Proxy - Death 1';
    SVTS['proxy_death4'] = 'No Helm Proxy - Death 2';
    SVTS['proxy_death5'] = 'No Helm Proxy - Death 3';
    SVTS['proxy_death6'] = 'No Helm Proxy - Death 4';
    SVTS['proxy_dyingC'] = 'No Helm Proxy - Help! 1';
    SVTS['proxy_dyingF'] = 'No Helm Proxy - Help! 2 ';
    SVTS['proxy_enemy_down_fantasticA'] = 'No Helm Proxy - Fantastic.';
    SVTS['proxy_enemy_down_got_oneD'] = 'No Helm Proxy - Got one.';
    SVTS['proxy_enemy_down_niceA'] = 'No Helm Proxy - Nice. 1';
    SVTS['proxy_enemy_down_niceC'] = 'No Helm Proxy - Nice. 2';
    SVTS['proxy_hurt11'] = 'No Helm Proxy - Hurt 1';
    SVTS['proxy_hurt12'] = 'No Helm Proxy - Hurt 2';
    SVTS['proxy_hurt13'] = 'No Helm Proxy - Hurt 3';
    SVTS['proxy_hurt14'] = 'No Helm Proxy - Hurt 4';
    SVTS['proxy_hurt15'] = 'No Helm Proxy - Hurt 5';
    SVTS['proxy_hurt17'] = 'No Helm Proxy - Hurt 6';
    SVTS['proxy_hurt4'] = 'No Helm Proxy - Hurt 7';
    SVTS['proxy_hurt5'] = 'No Helm Proxy - Hurt 8';
    SVTS['proxy_hurt8'] = 'No Helm Proxy - Hurt 9';
    SVTS['proxy_hurt9'] = 'No Helm Proxy - Hurt 10';
    SVTS['silk_alert_contactA'] = 'Silk - Contact!';
    SVTS['silk_alert_i_see_oneA'] = 'Silk - I see one.';
    SVTS['silk_alert_there_is_oneA'] = 'Silk - There is one...!';
    SVTS['silk_death1B'] = 'Silk - Death 1';
    SVTS['silk_death2B'] = 'Silk - Death 2';
    SVTS['silk_dyingB'] = 'Silk - Not good...';
    SVTS['silk_enemy_down_brilliantC'] = 'Silk - Brilliant.';
    SVTS['silk_enemy_down_eliminatedB'] = 'Silk - Eliminated.';
    SVTS['silk_enemy_down_hell_yeahB'] = 'Silk - Hell yeah!';
    SVTS['silk_enemy_down_ive_got_oneB'] = 'Silk - I got one!';
    SVTS['silk_enemy_down_minus_oneB'] = 'Silk - -1.';
    SVTS['silk_enemy_down_no_kicking_for_youB'] = 'Silk - No kicking for you.';
    SVTS['silk_hurt1B'] = 'Silk - Hurt 1';
    SVTS['silk_hurt2B'] = 'Silk - Hurt 2';
    SVTS['silk_hurt5'] = 'Silk - Hurt 3';
    SVTS['silk_hurt6'] = 'Silk - Hurt 4';
    SVTS['silk_hurt9B'] = 'Silk - Hurt 5';
    SVTS['wea_crossfire2'] = 'Crossfire CR-145 Vortex';
    SVTS['wea_ditzy_cs_ik'] = 'Assault Rifle CS-IK';
    SVTS['wea_glhf'] = 'Grenade Launcher CS-GLHF';
    SVTS['wea_incompetence_archetype_27xx_fire'] = 'Archetype 27XX';
    SVTS['wea_lazyrain_gravy_rl'] = 'Falkonian Anti-Grav Rocket Launcher';
    SVTS['wea_m202'] = 'Rocket Launcher CS-Barrage';
    SVTS['wea_moonhawk_railgun'] = 'Crossfire CR-34 Marauder';
    SVTS['wea_ph01'] = 'Crossfire CR-54 Viper';
    SVTS['wea_plasma_shotgun'] = 'Plasma Shotgun';
    SVTS['wea_rail_alt2'] = 'Falkonian PSI Cutter';
    SVTS['wea_thetoppestkek_shotgun_nxs25'] = 'Shotgun NXS-25';
    SVTS['xin_celebrate'] = 'Xin - Celebrating';
    SVTS['xin_death'] = 'Xin - Death';
    SVTS['xin_enemy_spotted'] = 'Xin - Alerted';
    SVTS['xin_hit'] = 'Xin - Hurt';
    let voices = {
        Grosk: [
            "Grosk",
            ["death", "Death", 2],
            ["dying", "Dying", 2],
            ["edown", "Celebrating", 3],
            ["welcome", "Alerted", 5],
            ["hurt", "Hurt", 3]
        ],
        drohnentroop: [
            "Drohnen Trooper",
            ["welcome", "Alerted", 3],
            ["hurt", "Hurt", 3],
            ["edown", "Celebrating", 3],
            ["dying", "Dying", 1],
            ["death", "Death", 3]
        ],
        drohnenfem: [
            "Drohnen Female",
            ["welcome", "Alerted", 3],
            ["hurt", "Hurt", 3],
            ["edown", "Celebrating", 3],
            ["dying", "Dying", 1],
            ["death", "Death", 3]
        ],
        elurra: [
            "Elurra",
            ["welcome", "Alerted", 3],
            ["hurt", "Hurt", 2],
            ["edown", "Celebrating", 2],
            ["dying", "Dying", 1],
            ["death", "Death", 1]
        ],
        ferro: [
            "Lt. Ferro",
            ["welcome", "Alerted", 3],
            ["hurt", "Hurt", 2],
            ["edown", "Celebrating", 3],
            ["death", "Death", 2]
        ],
        serkova: [
            "Serkova",
            ["welcome", "Alerted", 3],
            ["hurt", "Hurt", 1],
            ["edown", "Celebrating", 2],
            ["death", "Death", 1]
        ],
        phantom: [
            "Phantom",
            ["edown", "Celebrating", 1],
            ["welcome", "Alerted", 2],
            ["death", "Death", 1]
        ]
    };
    for (let entry of Object.entries(voices)) {
        let character = entry[0];
        let charVoices = entry[1];
        let charName = charVoices[0];

        for (let i = 1; i < charVoices.length; i++) {
            let voice = charVoices[i];
            for (let j = 1; j <= voice[2]; j++) {
                SVTS[`${character}_${voice[0]}${j}`] = `${charName} - ${voice[1]} ${j}`
            }
        }
    }
}

function updateVoicePresets() {
    // Adds voice presets that exist in game but not in ALE
    let VP = VAL_TABLE['voice_preset'];
    VP['proxy_helmetless'] = 'Proxy (helmetless)';
    VP['silk'] = 'Silk';
    VP['orakin'] = 'Orakin';
    VP['arrin'] = 'Arrin';
    VP['civilian_male'] = 'Civilian Male';
    VP['vulture'] = 'Vulture';
    VP['crossfire_sentinel'] = 'Crossfire Sentinel';
    VP['xin'] = 'Xin';
    VP["grosk"] = "Grosk";

    VP["elurra"] = "Elurra";
    VP["drohnenfem"] = "Drohnen Female";
    VP["serkova"] = "Serkova";
    VP["ferro"] = "Lt. Ferro";
    VP["drohnentroop"] = "Drohnen Trooper";
    VP["phantom"] = "Phantom";
}

function updateStyles() {
    // Changes some stylesheets to open up to things like resizable right panel.
    for(let i1 = 0; i1 < stylesheets.length; i1++) {
        let styleSheet = stylesheets[i1];
        for (let i2 = 0; i2 < styleSheet.rules.length; i2++) {
            let rule = styleSheet.rules[i2];
            switch(rule.selectorText) {
                case ".p_i":
                    rule.style.setProperty("display", "flex");
                    break;
                case ".rightui":
                    rule.style.setProperty("width", aleiSettings.rightPanelSize);
                    break;
                case ".pa1":
                    rule.style.setProperty("flex-grow", 0);
                    rule.style.setProperty("flex-shrink", 0);
                    break;
                case ".pa2":
                    rule.style.setProperty("width", "100%");
                    break;
                case ".opcode_field":
                    rule.style.setProperty("font-size", aleiSettings.triggerEditTextSize);
                    break;
                case "#rparams":
                    rule.style.setProperty("height", "var(--ALEI_RPARAMS_HEIGHT)");
                    break;
                default:
                    break;
            }
        }
    }
    $id("stars").style.setProperty("background-image", `url(${aleiSettings.starsImage})`)
    let _th = THEME;
    ThemeSet(THEME_BLUE);
    ThemeSet(_th);
}

function updateSkins() {
    // Adds skins that exist in game but not in ALE.
    let charlists = [
        [10, "Head Gib"],
        [20, "Arm Gib"],
        [30, "Leg Gib"],
        [50, "Heavy Hero (Only Head and Arms)"],
        [60, "Proxy (Only Head and Arms)"],
        [62, "Proxy (No Limbs)"],

        [38, "GoldenKnife Noir Lime"],
        [39, "RootZ Noir Lime"],

        [151, "Purple Xin"],
        [152, "Golden Xin"],
        [153, "Blue Xin"],
        [154, "Red Xin"],
        [155, "Amber Xin"],

        [156, "Nirvana Noir Lime"],

        [157, "Purple Gallynew"],
        [158, "Golden Gallynew"],
        [159, "Blue Gallynew"],
        [160, "Red Gallynew"],
        [161, "Amber Gallynew"],

        [162, "Pinkine"],
        [163, "Raider (by Serpent)"],
        [164, "Blue Heavy Hero"],
        [165, "Red Heavy Hero"],
        [166, "Orakin"],
        [167, "Husk"],
        [168, "Hex"],
        [169, "Arrin"],
        [170, "Heavy Usurpation Soldier"],

        [171, "Cyber Grub by S1lk"],
        [172, "Grosk"],
        [173, "Futuristic Knight"],
        [174, "Uncivil Proxy"],

        [175, "Serkova Insertion Unit"],
        [176, "Xenos Scout"],

        [177, "Armored Trooper"],

        [178, "New Generation Marine"],
        [179, "Elurra (by Lin)"],
        [180, "Dark Proxy (by littlekk)"],
        [181, "Huntsman (Night)"],
        [182, "Huntsman (Swamp)"],
        [183, "Lt. Ferro (by Serpent)"],
        [184, "Xenos Titan"],
        [185, "Elurra (Masked) (by Lin)"],
        [186, "Drohnen Heavy (by Ark633)"],
        [187, "Cromastakan"],
        [188, "Sgt. Davais"],
        [189, "Maroon (by Francis localhost)"],
        [190, "Drohnen Skirmisher (by Ark633)"],
        [191, "Serkova Recon Unit"],
        [192, "Drohnen Drifter (by Ark633)"],
        [193, "Xenos Marine"],
        [194, "Dark Android SLC-56 (by littlekk)"],
        [195, "Wraith (by Ark633)"],
        [196, "Serkova Armored Unit"],
        [197, "Phantom"],
        [198, "Blue Civil Security Heavy"],
        [199, "Red Civil Security Heavy"],
        [200, "Xenos Welder"],
        [201, "Xenos Special Unit"],
        [202, "Serkova Assault Unit"],
        [203, "Serkova Gunner Unit"],
        [204, "Serkova Grenader Unit"],
        [205, "Serkova Team Leader"],
        [206, "Serkova Resource Unit"],
        [207, "Serkova Technician Unit"],
        [208, "Serkova Grub"],
        [209, "Serkova Reinforced Grub"],
        [210, "Serkova Devastator Grub"],
        [211, "XBT-117 Android"],
        [212, "Teneguilae"],
        [213, "Walker (by Serpent)"],
        [214, "Space Grub (by Broforce1)"],
        [215, "Phantom (Blue)"],
        [216, "Phantom (Red)"]
    ]
    for(let li = 0; li < charlists.length; li++) {
        let charID = charlists[li][0];
        let paddedCharID = charID.toString().padStart(4, "0")
        let charName = charlists[li][1];
        let src = "https://www.plazmaburst2.com/level_editor/chars_full/char" + paddedCharID + ".png"
        VAL_TABLE['char'][charID] = _turnLinkIntoSkinSpan(src, charName);
        img_chars_full[charID] = new Image();
        img_chars_full[charID].src = 'chars_full/char' + paddedCharID + '.png';
    }

    let ids = Object.keys(VAL_TABLE["char"]);
    ids = ids.map(str => parseInt(str));
    let fromID = Math.max(...ids) + 1;
    fetchSkinsFrom(fromID);
}

function _turnLinkIntoSkinSpan(src, charName) {
    return '<span style=\'background:url(' + src + '); width: 16px; height: 16px; display: inline-block; background-position: center; background-position-x: 30%; background-position-y: 26%; background-size: 67px;vertical-align: -4px;\'></span> ' + charName;
}

async function fetchSkinsFrom(startingID) {
    if(!isNative) return;
    const requestsAtOnce = 5;
    let requestsRunning = true;
    let skinsAdded = [];

    async function requestSkin(id) {
        let paddedCharID = id.toString().padStart(4, "0");
        let src = "https://www.plazmaburst2.com/level_editor/chars_full/char" + paddedCharID + ".png"
        let response = await GM.xmlHttpRequest({ url: src }).catch(e => console.error(e));
        if(response.status == 404) {
            requestsRunning = false;
            return;
        }
        VAL_TABLE["char"][id] = _turnLinkIntoSkinSpan(src, `Unknown Skin #${id}`);
        skinsAdded.push(id);
    }
    async function requestBatch(id) {
        let promises = [];
        for (let i = 0; i < requestsAtOnce; i++) {
            promises.push(requestSkin(id + i));
        }
        await Promise.all(promises);
    }
    let fromID = startingID;
    while(requestsRunning) {
        await requestBatch(fromID);
        fromID += requestsAtOnce;
    }
    if(skinsAdded.length > 0) {
        NewNote(`ALEI: There are ${skinsAdded.length} unregistered skins, please inform ALEI developer(s) about this. Check logs for more information`, `#00FFFF`);
        aleiLog(INFO, `Unregistered skins: ${skinsAdded}`);
    }
}

function optimize() {
    // VSync.
    window.setTimeout = (f, ms) => {
        if (f == ani) {window.requestAnimationFrame(ani)}
        else return JS_setTimeout(f, ms);
    }
    let _browseImages = window.BrowseImages;
    let ogImageLists = {};
    // Image caching.
    window.BrowseImages = function(for_class = 'bg_model', current_value = '', callback = null) {
        // If cache doesn't have the class we are looking for, we will just set default value.
        if (ogImageLists[for_class] == undefined) {
            ogImageLists[for_class] = "[ALEI] Loading...";
            aleiLog(INFO, `Will cache response of ${for_class}`);
        }
        // Overwrite setTimeout temporarily, as BrowseImages calls setTimeout for ServerRequest which sets the innerHTML of image_list
        let ost = window.setTimeout;
        window.setTimeout = (f, ms) => {
            window.setTimeout = ost; // Assign original setTimeout
            window.ServerRequest = (req, op, callback = null) => {
                window.ServerRequest = ALEI_ServerRequest; // Assign original ServerRequest
                // We made ServerRequest an async function, so we can just register on it
                ServerRequest(req, op, callback).then(() => {
                    ogImageLists[for_class] = image_list.innerHTML;
                });
            };
            f();
        }
        _browseImages(for_class, current_value, callback);
        image_list.innerHTML = ogImageLists[for_class]; // Show what is in cache. (If cache didn't have the class, it will just show the previously set default value)
    }
}

function updateVehicles() {
    // Adding vehicles that exist in game but not in ALE. Currently only veh_hh, which is grabbable ledge.
    let _SVTV = VAL_TABLE["vehicle_model"];
    let vehicles = [
        ["veh_hh", "Grabbable Ledge", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACLSURBVEhLYxhxgBFE2M3/r/vvH0MQWISGgImJYd2hRMbLIDbYYpu5/+t/MzEEf2diuALi0wJw/mPQYf3HsPZIMmMjiA+3+BMLg/olIYblID4tgN47hki+Pww3YRYzgUUHAIxaTDcwajHdwKjFdAOjFtMNjFpMNzBqMd3AqMV0AwPbrh6InsQAAQYGAA8CLDKAAcpOAAAAAElFTkSuQmCC"]
    ]
    for(let i = 0; i < vehicles.length; i++) {
        let vehicle = vehicles[i];
        let model = vehicle[0];
        let name = vehicle[1];
        let image = vehicle[2];
        _SVTV[model] = `<img src='${image}' border=0 height=12 style=vertical-align:middle title='${name}' > ${name}`
        img_vehicles[model] = new Image();
        img_vehicles[model].src = image;
    }
}

function updateGuns() {
    // Adds guns that exist in game but not in ALE. Currently only one isn't visible in ALE, and that is joke weapon: NARL
    let guns = [
        ["gun_rl0", "BETA Rocket Launcher", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAUCAYAAAAa2LrXAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAfeSURBVFhH3VhZaJVHFD53+++SxCRmM4nBmLhUTYtCbCJaSpF0sRTqVmn7UAptsdQuIKXYQqlQ2of60Idai+BToVQNcQNBqCZQipQEEqNRq8E1MYlZzXKT3Nyl33e8c3u9GputCx49mZnzzz9z5pvvnJn/2mQKsnHjxtxQKGSPNsXhcEScTmfH/v37Q1HTlGX9+vXO/v7+0MmTJyNR0/9aJgXgpk2bfDab7QtUt9rt9lAkEhG0JRwOe2D78ODBg3u14xRkw4YNpRjnc4xXhHFHYBpFGWAJDZi6y+UaxdyBkZGRAIXPEhVjBJKSkgLsNzY2FsBmj8E2hmfUIMYIYNMbDhw4MID2tGTCAAK8jSi+xEIey83NFSoBhJNy+/ZtuX79+u+ofwxbCM7qIuH4qNZt9oCtKxySiITEDrVBsRBbj4xFFjlyRkdHd1iW9c68efNcs2fP5obo2Hg/Vjft1tZWGRgYkCVLlkhqaqoEg0HtY/pSaWtpaZGhoSHtg+i4ZxyAzz5vVVZW7tPFTUNiAG7evDkdg2ZigiAWzfAJox7AbuWjvhO2F71er05eUFAg+fn56hTs6mhjY6M6SoE9Ag0BxCDHg9tBABcEP0L4F5Qg2linDZawL5KVnZ+TWVRUpIt9mHAuv98vly5dUsBWrVol9ImgUEx57do1OXPmjMyfP1/95CabZxT6io14/+jRo99FTVMWBXDLli0uOFQNWpehyZAxAIYBahKAcaWkpChAfX19UlhYKDk5OQoghc6dO3dOEDbCfsPDw9LR0SF5eXkSDobk1p0O6fs0S0KznGIbQ9iHMTz+24Jh8e3rlLKkJyQ7L0dB+TshiJzv5s2bcvXqVW0bO4U+0Y/FixfLrFmztK8Bz/RpaGjg+9uOHTu2Ww3TEAf/LFq0aIPP59u+dOlS+5w5cyyAY2VnZ7tRepKTkx0EhDvPnUROkYyMDHXSOAbglZlkIgFkP4YZxgRDfOJvGZDBCq8MF/oklOqUYJpLgukuCWS4xe4IiXXKL1kF2TrWRCUtLU3mzp2ryoiIr5N1Ho8n5l+icHNxUB0Hk2ujpimLOUk/IqMICiemMjSotJeUlAjyk4KHfKWAxQsd5YIINFnE5263WwG12W3i9XjFavJHe5P2YCHesSOOA4+nSIejW/wD6BtlyESEczIikGLuU8PSf0McuDa8AOB2MF8k5goK2wSEzDLMYz0eRDrMNg8TAocDQW0MJ7Iw7IyIv7lH3F2j4qsDM09Df4P+2i/e2kEJtY6K1+WVjMwMHY9+8P14nUlAZpKBjmXLln0PphUTGDpOIFgmitlxE6KJwvfION4syFyCaMLI6XKKNeyU1GanpLVYktrultQuj6T1eiV9AKx3e6S3t1dzFt8nkznW4OAgF6olNyJ+XoJqhHU+mwjI7EsA79y5MzMAIjz9cNoO9iR1d3enMXdxEZyIoMQDSgfHc5J9yLjOzk4FObGfx+sRd4pHrGQwNAnqs8TltcTpcSnYWJBePdra2lTJZo4Fn/TqQn94xaEwTTDnGqYTYL5PEjxM6CM3hwcQUtHxixcvThvA2DbiIpuCRZdAn0bzGbBtBZiUxZ1nWOJQ0ZJO0OlEMGkna86ePatMNX0ops4+3H0CoCd09BSn8O7G8XGIaX8KSyrzLsFdvny55mSysra2VkpLS/Xq09PTo+2ysjJtx49L4byc89atW9Lc3Ezwq+DjNlyk26JdpizjZm0Amo2JV3R1dT1XU1Pz3rp163g6K7sYagSWDDCAkhF0DtecaoD1DYaIoYs+e1AcB5t/xhXiycuXL+8qLy9XdhuQWc/MzNRTNPEE5fhkGJUgcW7eBcnOlStX6oZxbrLWtPm+2QhevaLPm2H75NChQ1X6YAZkXAATZA+uBlsXLFigLKFyEbjixG760cRciVPwDexs7MjFBd2L4gr0VXzq1ahR5DRO9XICZoAia7hBZCbZnigEg6HNeclE9ifrOMbChQuVwfX19cILOQ87jkvm8q5448aNEdwgvsWGfw0f+qNDzojcex8ZX5qQG98EMzx0ND7BkwVHjhxh3vylurr6paamJn5vxgSH1BoUr0F3nj9/fkiNIkNY0CYu1DCYyjDj5jCX8ToSL3xO8Nrb27VO4BgJyGOSlZWlrGX48wDjmLxy1dXVMX+eQP9XDh8+/BPm50fCjMpEAeyDpkCfSk9PVwOBZNgyKXPR+BJJhvkItEc7RAUAfobCj53/4a5FwbiEBb4MBucQlKhNxzSntzkQaKdSGOYECN/dynxuANnKd8hIHn48BJF29KBAbuwDmGuqqqpu6AD/gEw0hClZ0DP4RMp90CnL8EKSPoHq83ctGr7FKBqhDN+javxL3gZQewlCPEgEiKctP8VYp5jnRpkLWfLuyk0kaIwK1MnsNjC5Ga/9AWBPPWDeGZXJAEjZjp3fVVxcrGESLww/JnYsZBuauwEeGVsN7cIiYqAaAZt8eOcDVDOhHIwxS+UvElZFRYULc1lglgWwLNpMH8xtYQNdAKsb5QXYzkEvwH4FfdtxSAyj/a/IZAFkmNZj5xfwAIlnIRnBnIjw6l27du1XYNa7eM6E/SwA7Lzba/qCsW0A1o4NsGPce/LtfyGTBZDyOpQ/AwWh98QxQQRoztWrVw/gOvIjGMZTzxwcj6RMBUAKP1rv/56DIO/YcEXpx12Pvyo/4iLyJ69VPj0rzLmtAAAAAElFTkSuQmCC"]
    ];
    for(let i = 0; i < guns.length; i++) {
        let gun = guns[i];
        let gun_model = gun[0];
        let gun_name = gun[1];
        let gun_image = gun[2];
        VAL_TABLE["gun_model"][gun_model] = `<img src='${gun_image}' border=0 width=80 height=20 style=vertical-align:baseline title='${gun_name}'>`
        img_guns[gun_model] = new Image();
        img_guns[gun_model].src = gun_image;
    }
}

function updateDecors() {
    // Adds decors that exist in game, but not in ALE. Currently only hakase easter egg is known.
    window.img_decors = CACHED_DECORS; // For some reason img_decors gets resetted
    let decors = [
        ["hakase", "Hakase", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAA8CAYAAAAUufjgAAANHklEQVRogbVaa1Bb17X+AIEOQoID6HF4SjyFEQ+Zh3jJIAdbJo7t2I6duGlm6mkTO1Pf22ZuMxP3TtMbT6ZN2rm5cW+SGbuZTBqTNnHnkga75pmCTYFYAhzAxpYAywjzEAakIxDiiEe4PwgKAvES7jejH2evtdf+ztp7r732OgI8BwEgdxv9NwWfTeiQAOQA4gFIlv24JXlpb/YOjEwB0P2L+IG1jkwSygsoOli08+XdmTuSBCSPXBLQNjsGHln6RCGBpDSaoj6taAoan5yqBmB63AS91mgnfrgvt/LHhwpViuTYdQ3QNjs+udbE1LXcrapru/dLeO7NJQfQyxu93ZF7fm/uu+dOHdmQHACQXA5K8lIJQTCP8pDYoh0y8EfBwUHPrWxftQYzpZIz77xy4tVIYch60++C+fl59A2PR5I8TmR3v6kaALNFfvJ/f/H5PwUH8ubudhvKlgtcPCgRheb8+qWn35CE8YmtWBeFBEEYEojUuMjDebL417ZIDgJBiFQSFUFyeQFJAFRrESSKFcln81PjSXiAg8p0sP1YyEwWn8T34YdMiJOcLszP+i8ASW66EQByY8WRuUX52ZBJ46nnnznwFhajBIBluzgsJLDo5MFdJYSfryf8IAoJwi55IvpN49TebNnPa1u6cOzg3reSpfEqaXwMGppbb+D7DUQASHr2+LNvHTt2rAQAqm9o8YOjT1Fmi5XGsiXiJJieKD6RJA7bcGr/2d6N7OQYMDOzILkcl/bGXgvg7YOMrKzD7/7Pb08kJcSiuq4RxsFhGoshiAQgV6vVp4ufKFZxOByKYBNQq9X48I+D0Pc+QI+hz4Rl4WqJoHynNFq1lvc6ex+C/Z2suXcMI5ZJsH198Mg6jQN5ydDefYCBb/k49YufgaIolF76E2EcGEZSQiykCTH4c9k1XWhoaI6qUHVy/1P75coCJSkWi8EwDN57/z1IpVIcPHQEH13831Vj+wAgCtIT3vzJoUJVhCDYKaBtdnT3L77IFU0PHI5ZWG122Hy4GJ2cgWloCA4iFG0dXZgNScCpf/sFSHJx+YrFElTUfAV+EAf3+wYwbJmxnT798gtnzpyJV2QriCU9FosFFouF+4b7yMzMBD1hQ+lfPjtvoa2aJR7eAHLZLBY5PEa7hIbbvQMYMU/g71/fRUScFMzcPHpME3A4ZiBPT4UXOwAL8zPw4cfAi83FyMiIsy9Jkjj49HGU1zTCzLDw+9//d9KRw0ecxJZDmiiFXq//rl8wDH39Hcvl3gDap5lZnTxR7LL+Ou8PouXuA4zPsUEJ+Og3jcPbnweRIBQ5menw4YYgWroTL/70P3D82HGUfloKk+n7k04qlSIhJRsR0XFul83ylyFJEu9/8D79+uuvnwfQt3KKGUkYX9n9cITi+rP5VpsdtG0aHQNWePn4ouRJNby8vNBn7MfBA/sRHxONy3+vQ97u/Th0+Ci4XC64XC4AoPnrZsiSZWCxFpc2wzBo+6YDWZkZbsnRNI3Kqkqm4lpF4+eXPz+r79ZfBDC2kiD6R8ZH+oZGTTwuoaxoun2TCg2SmOcJ5OZkQ1WQA4LNhi/bH1PTDK636HDwyHPIzMx0GUwsFuPWrVtwMA6IxWJ0dHTgi/IrKChQIioy3EWXYRg0NzfjwoUL7e+8+86rrW2tv5mamuoAMLfyJZZ2sc5iszNf1reRk1OMSZ4YpQoURiE3S44bzS3oezgIeHnDvuCPF0+fgbu1BADqvWqUfloKhmFQ39CIYvWTUGTtdNExGo24VHqp77PPPztvMBjKV07pSrjLZiSnDqv+xqci5BGxUphGxwAvb6Rm5EGt3geCWD9UXv7rZdzreYCCXbuRk5GKwGWxsqqqivn444+ryq+W/w7AzXUNfQd3CYHpPr3Q98NXTsm1Wi0W/AJx/NhxSKXSDY3V1ddjxDyJpw49g5hIkZMcwzCovlaOrqZKWttUf2Gz5AD36ZZcnpGlamhogNVqhThavClyZV98gRHLFPIKihAuDAE/ONApu3L1Crp7eyGPpajXfnTgPIBNp2ar0q1CZeFPjh49WlL8RDGkiVIkJyc7d6k7MAyDT0pL4U0EIj5BClEoiagwvouOTCaDLCUNlXUNKE6N5FOhgUrdg6GxKWZGv2WC4mix6qWXXlKJxWLw+fx1yZlMJnz40Ufw45BIS5NDEiFEmDDErS5BEOAGC1FZU4sX9mRG8gL8VZ09/QN2x0zXegRXrUEWi7VhsknTNG5qNPiq/joysvORlpaG2EgKHH/2uv3S09Oh16nQ2Pk1Xny6iAJw/t2/VGHUaru8Vp9VHnzQ98BXvVd9Mi5u9QnAMAwqKivwRfkVmCemsEe9H1k70xAbRcHXd3MJeFx8Amr/qYGQmEeEMJhLT03Hd/Y+vIEVAXpNggCY8LDwPcXFxc6FbDQa0dnZiabaq7jdqkG2qgT7S/ZBGhftEkY2AxaLBT4VgasVlViYZeg/fF5zwTE7dwNrXBPcEbSNPBohwsPDVWFUGKumtga1tbXQtmh1ucI5fiSHhTadAcV79sLPz29L5JbA5/Nhts/hYW8XwfLBmN44/Oe1dN1e3C0WS8c333xD375zmxwZGZkbHBrUXbp06eILasWBqFA+ent6YbLPISUl1SOCACCWxOBWVzcGDD1jOuPwJ2vprbVwGIPB8AeDwXAZi+k5g2V3CmVyHGpvVKIhPBKFhYUeESQIAk8fex632jsJoI3EivvwEjYqfdi+62gDIHlhX+5JHsHBt/MLCA0gUNvQCEFUDCjKsysxSZII4Qsjm5qbTBaLReNOx91J4haZ0uh0UQjP+RwayMXueBH++uH7MBqNG/ZnGPfRS6FQYHfR7hNY43TZTPEIAIididG/OlKUET/j+BYzs/MAAA7bDz5zDOo0tyBNSYONmcW9+wMYemTGyBgNPx+gtbUFDQ0NqKyqhEKhcOaKS2CxWJiZneGXlZVVw01ms1mCkcVZO159RpVBmulpJ0Fg0ZPm4UEYrdPYpSzApNWM/7v8KXp0t9HVdQdcLhc5ihyo96rXzIS8vbxZGq1GZzKZmlbKNlvekPACCMJoGsf8/AKau3oZti8LbD8WkRBBYWDCzpzIUhAAkJSYgDfPnduk2UWIRCIIBAK5O9lmCdJldbfeTowQvjH8aAqXahrPRwlDVQAQwg0gO4fM1w87mFe2xGoZSJIEL8B98WmzBNsNw6PtvymtZCYmp2izbbq8d+hRdVy4QFzffu+GQCAocjAOT/kBAFLTUqmyv5VRWFFj3HQFCwD6hscuLnu8eX9o9CYAyGQylVgshl6vB8MwSE9P3zLBwMBAAosx1wWbDjPrgKQoSg4sJqZr3Vc2QmxMLAU3oeaxEExNSaU0Wg3Ue9UQi8UeGeFwOP8yD0pSU1Il3d3dHk3tRtg2wYSEBGkQGQSBQOgsYTxObJtgmCiMokQUZLIU/KOu7nFwcsG2CQoEApVIJIKyIB8GYz9o2m1S4jG2S5AA4DzCJJJYaLXa7XJywXYJUgXKAsnSQ3p6OjQtLR4ZstvtbtOdx7GLnUhJToZj9lt0dHRsrLwChgcGE9xkM9v2oEgockbm4CAuYuISUH/9ultlmqah1+vR0NCwSjY4MOhSPF/Clo46NyAEAoHL0fGEqhB/vHgBer3epWTy27ffhs0+DS6PBF8gQk7urLPuTdM02jvb++DmW992Ca5CuEgAaXIarl67BrFY7NxA/3n2LO70GDHNzCA+OsxJDgC0Wi3a29u/dGfvsezi5WD7+aJwlxITUw5UVVe7yGIjKfh4eyM4aLGccuXqFQBAU1OTbnx8fHt3EncoVBbmuDt7I0ShyN+lwtfaVtTU1DjbOf5syBKiAQAarQZ9xoegaRo6nU6HNb6SPvYpBha9mLojEQBQ/1Ul7NPTKNm3WPxcmlqNthUZGZmwWq2wWCzta9l6rGFmOSJEoYiMCEfRnifRfuce3vvgA+dZ3dHRgUdjZqSlpW1oZzsepLxZ3hSbvXZFKzaSwjQzg6cOPQOrZcyZilXV1CJaEodALgeW8fUH8diDOdk5r51749zL613aOf5sZzFTIKRAEARu3rwJy4QNu3erAABsNhvcQK5kLRsee5CiKAkZtBgCvywvh51xIC9fCT8/Nhwzs5iZdf2iMDM7h1/+6teYnZvHnpIDYPv6LtnBDukOeUVFhQTbuBevwsTkBB0QELBHqVRyKYqCwdCLiqoq9D8cxNQ0A9o6AT/C34WoMCwCSckpIMlgTE0zGHpkhp1xgMcNoNraWnVms7lt5Tgee5DL5Ury8/IpYPHa+Nyzz2Gfmoa+W487XXexsLAAVYHCqT8zO4dwYQgmp6adbT4+3ogQhiJKtAvZWdklPT09F1eO4zFBXgAvVyQSubSRJIkcRQ5yFDlbsqXRajA/N+82kVzrbykbIiwsbF9+bv5ZkiQJWYpsy+WtiYkJ5nbnbRMAjI6OXm9obLgIN2exxwSXgcAWvnssA4NN/BHo/wEN3ae6aBBdhgAAAABJRU5ErkJggg=="]
    ];
    for(let i = 0; i < decors.length; i++) {
        let decor = decors[i];
        let decor_model = decor[0];
        let decor_name = decor[1];
        let decor_image = decor[2];
        VAL_TABLE["decor_model"][decor_model] = decor_name; // Add to known decors.
        img_decors[decor_model] = new Image();
        img_decors[decor_model].src = decor_image;
        img_decors[decor_model].native = true;
        CACHED_DECORS[decor_model] = img_decors[decor_model];
        CUSTOM_IMAGES_APPROVED[decor_model] = true; // Since it's obviously vanilla, and other vanilla decors are approved, it's only natural if we approve added decors too
    }
    window.ALEI_decors = decors;
}

function updateOffsets() {
    // Because hakase decor and grabbable ledge image is made with hand manually and doesn't come from website, and that there is no
    // inbuilt offset, we have to offset those to make sure they show up in ALE correctly.
    let toosc = window.ThinkOfOffsetClass;
    window.ThinkOfOffsetClass = function(tc, esi) {
        if (tc == "vehicle" && offsets[esi.pm.model] != undefined) {
            return "alei_" + esi.pm.model;
        } else if (tc == "decor" && offsets[esi.pm.model] != undefined) {
            return "alei_" + esi.pm.model;
        } else if (tc == "gun" && (esi.pm.model == "gun_rl0")) {
            return "alei_gun_rl0";
        } else return toosc(tc, esi);
    }
    let offsets = {
        veh_hh: {x: -15, y: -15, w: 30, h: 30},
        hakase: {x: -18, y: -57, w: 40, h: 60},
        gun_rl0: {x: -24, y: -6, w: 61, h: 13}
    }
    for (let key in offsets) {
        let off = offsets[key];
        lo_x["alei_" + key] = off.x;
        lo_y["alei_" + key] = off.y;
        lo_w["alei_" + key] = off.w;
        lo_h["alei_" + key] = off.h;
    }
}

function updateTriggers() {
    // This is where we will rename some triggers.
    // For now it's only 378, but we got more triggers like renaming 328
    addTrigger(175, "Gun &#8250; Change gun 'A' projectile model to 'B'", "gun", "ALEI_projectileModels");
    addTrigger(378, "Gun &#8250; Add hex color 'B' to gun 'A'", "gun", "string");
    addTrigger(332, "Var &#8250; Set variable 'A' to value 1 if Gun 'B' is in owner's active slot, set to value 0 in else case", "string", "gun");
}

function updateObjects() {
    // Shorthand for object-related functions as to not clutter console.
    updateGuns();
    updateVehicles();
    updateDecors();
    updateTriggers();
}

function updateButtons() {
    let topPanel = $id("top_panel");
    let childs = topPanel.children;

    // We redirect the manual page to EaglePB2's.
    childs[16].value = "Eagle's Manual";
    childs[16].setAttribute("onclick", "window.open('https://eaglepb2.gitbook.io/pb2-editor-manual/', '_blank');")

    // We dont want our new buttons to appear after "rights", so we will store "rights" beforehand and remove them, we'll add them back once we are done
    let appendBack = (topPanel.removeChild(childs[childs.length - 1])).outerHTML;
    appendBack = (topPanel.removeChild(childs[childs.length - 1])).outerHTML + appendBack;

    // Remove pad (we will add our own later).
    topPanel.removeChild(childs[childs.length - 1])

    window.aleiButtonClicks = {};

    // Convenience function for doing easy top panel buttons
    function createButton(text, internalName, onClick) {
        let button = document.createElement("input");
        button.setAttribute("class", "field_btn");
        button.setAttribute("type", "button");
        button.setAttribute("value", text);
        button.setAttribute("onclick", `aleiButtonClicks['${internalName}']()`);
        window.aleiButtonClicks[internalName] = onClick;

        let pad = document.createElement("div");
        pad.setAttribute("class", "q");

        topPanel.appendChild(button);
        topPanel.appendChild(pad);
    }
    let bigPad = document.createElement("div");
    bigPad.setAttribute("class", "q3");
    topPanel.appendChild(bigPad);

    // "Download XML" button.
    createButton("Download XML", "downloadXMLButton", exportXML);
    // "Insert XML" button.
    createButton("Insert XML", "insertXMLButton", () => {
        let file = confirm("File (OK) or text (Cancel) ?");

        if (file) {
            let fileInput = document.createElement("input");

            fileInput.type = "file";

            fileInput.onchange = function() {
                if (fileInput.files[0]) {
                    if (fileInput.files[0].name.split(".")[1] == "xml") {
                        let reader = new FileReader();

                        reader.onload = function() {
                            insertXML(reader.result);

                            fileInput.remove();
                        }

                        reader.readAsText(fileInput.files[0]);
                    } else {
                        alert("Invalid file extension.");
                    }
                }
            }

            fileInput.click();
        } else {
            let xml = prompt("Enter XML:", "");

            if (xml !== null) {
                insertXML(xml);
            }
        }
    });
    createButton("ALEI Settings", "openALEISettings", showSettings);
    // Readd 'rights' back.
    topPanel.innerHTML += appendBack;
    // Update original reference
    window.mapid_field = $id("mapid_field");
    mapid_field.value = mapid; // And update map id field value manually.
}

function addClipboardSync() {
    let clipboard_channel = new BroadcastChannel("ale_clipboard");

    ///////////////
    // Receiving //
    ///////////////
    clipboard_channel.onmessage = (msg) => {
        let data = msg.data;
        let kind = data.kind;
        if (kind == "send") {
            let recipient = data.recipient;
            let clip_name  = data.clip_name;
            let clip_data  = data.clip_data;

            if (recipient == undefined || recipient == aleiSessionID) {
                aleiLog(DEBUG, '/ale_clipboard/ got data for ' + clip_name);
                sessionStorage[clip_name] = clip_data;
            }
        }
        if (kind == "get") {
            if (aleiSessionID > Math.min(...aleiSessionList)) return;

            let session_id = data.session_id;
            aleiLog(DEBUG, '/ale_clipboard/ syncing to ' + session_id);
            for (let i = 0; i <= 10; i++) {
                let clip_name = "clipboard" + (i == 0 ? "" : ("_slot" + (i-1)));
                let clip_data = sessionStorage[clip_name];
                if (clip_data == undefined) continue;
                clipboard_channel.postMessage({kind: "send", recipient: session_id, clip_name, clip_data});
            }
        }
    }

    // Initial Sync
    aleiLog(DEBUG, '/ale_clipboard/ requesting');
    clipboard_channel.postMessage({kind: "get", session_id: aleiSessionID});

    /////////////
    // Sending //
    /////////////
    let ALE_CopyToClipBoard = window.CopyToClipBoard;
    window.CopyToClipBoard = (clip_name) => {
        ALE_CopyToClipBoard(clip_name);
        let clip_data = sessionStorage[clip_name];
        clipboard_channel.postMessage({kind: "send", clip_name, clip_data});
    }
}

async function addSessionSync() {
    // This function registers some events, as to talk with other tabs
    // For now, this is useful for clipboard sync, but we probably can have more.
    const PROBE_TIMEOUT_MS = 200;
    let session_channel = new BroadcastChannel("ale_session");

    // Receive data
    session_channel.onmessage = (msg) => {
        let data = msg.data;
        let kind = data.kind;
        // New ALEI instance started up.
        if (kind == "start") {
            if (aleiSessionID == null) return;
            session_channel.postMessage({kind: "greet", id: aleiSessionID});
            aleiLog(DEBUG, "/ale_session/ recieved start");
        }
        // An ALEI instance responded to new ALEI instance, registering the ALEI instance
        if (kind == "greet") {
            let session_id = data.id;
            if (!aleiSessionList.includes(session_id))
                aleiSessionList.push(session_id);
            aleiLog(DEBUG, "/ale_session/ received greet by " + session_id);
        }
        // An ALEI instance is closing
        if (kind == "close") {
            let session_id = data.id;
            aleiSessionList.splice(aleiSessionList.indexOf(session_id), 1);
            aleiLog(DEBUG, "/ale_session/ received close by " + session_id);
        }
    }

    // Probe for other sessions
    session_channel.postMessage({kind: "start"});
    aleiLog(DEBUG, "/ale_session/ probing");
    await new Promise(resolve => {
        JS_setTimeout(resolve, PROBE_TIMEOUT_MS);
    });

    // Assign own session ID
    if (aleiSessionList.length == 0)
        aleiSessionID = 0;
    else
        aleiSessionID = Math.max(...aleiSessionList) + 1;

    aleiLog(DEBUG, "/ale_session/ session ID " + aleiSessionID);

    // Tell other sessions that this one is done
    window.addEventListener('beforeunload', (event) => {
        session_channel.postMessage({kind: "close", id: aleiSessionID});
    });

    addClipboardSync();
}

function addPropertyPanelResize() {
    // Gives right panel ability to be resized.

    let splitter_is_down = false;
    const splitter = document.createElement("div");
    const root = document.documentElement;

    splitter.style.position = "absolute";
    splitter.style.width = "5px";
    splitter.style.top = "50px";
    splitter.style.height = "100%";
    splitter.style.cursor = "w-resize";
    // splitter.style["background-color"] = "black";
    $id('floattag').appendChild(splitter);

    function splitter_resize(e) {
        let new_width = Math.min(root.clientWidth - 100, Math.max(100, root.clientWidth - e.clientX));
        right_panel.style.width = new_width + 'px';
        splitter.style.right = new_width + 'px';
        ROOT_ELEMENT.style.setProperty("--param_panel_size", splitter.style.right);
        updateBoxSplitterSize();
    }

    splitter.addEventListener('mousedown', (e) => {
        splitter_is_down = true;
    });

    root.addEventListener('mouseup', (e) => {
        splitter_is_down = false;
        writeStorage('ALEI_RightPanelWidth', right_panel.clientWidth + 'px');
    });

    root.addEventListener('mousemove', (e) => {
        if (splitter_is_down) splitter_resize(e);
    });

    splitter.style.right = aleiSettings.rightPanelSize;
    ROOT_ELEMENT.style.setProperty("--param_panel_size", splitter.style.right);
    window.splitter = splitter;
}

function addTriggerIDs() {
    if (!aleiSettings.showTriggerIDs) return;

    let SVTTP = VAL_TABLE['trigger_type'];
    for (let i in SVTTP) {
        SVTTP[i] = i + " " + SVTTP[i];
    }
}

function patchShowHideButton() {
    let og = window.ShowHideObjectBox;
    window.ShowHideObjectBox = function() {
        og();
        let rparams = $id("rparams");
        let heightOffset = {true: 270, false: 155}[ObjectBox_visible];
        if (rparams != null) {
            heightOffset = Math.round(rparams.getBoundingClientRect().top + 13);
        }
        // We then set variable and call original function.
        document.documentElement.style.setProperty("--ALEI_RPARAMS_HEIGHT", `calc(100vh - ${heightOffset}px)`);
        //og();
    }
    ShowHideObjectBox();
    ShowHideObjectBox(); // Hacky way to fix bug
}

window.ALEI_CustomSnapping = () => {
    let snapping = prompt("Enter snapping:", "");

    if(!snapping) return;
    if(isNaN(Number(snapping))) {NewNote("Invalid snapping.", "#FF0000"); return};

    if (snapping < 0.1) {
        snapping = 0.1;
        NewNote("ALEI: Snapping can't be less than 0.1", "#FF0000");
        return;
    }

    if (snapping > 100) {
        snapping = 100;
        NewNote("ALEI: Snapping can't be greater than 100", "#FF0000");
        return;
    }

    GridSnappingSet(Math.round(snapping * 10));
}

function addSnappingOptions_helper() {
    // Remove default snapping options except for "1", we will replace it them later
    $query(`a[onmousedown="GridSnappingSet(50);"]`).remove();
    $query(`a[onmousedown="GridSnappingSet(100);"]`).remove();

    let newHTML = ""
    let snappingOptions = [
        1, 2, 5,
        10, 20, 40,
        50, 100, "C"
    ];

    for (let snappingIndex in snappingOptions) {
        let snapping = snappingOptions[snappingIndex];

        if ((snappingIndex % 3 == 0) && (snappingIndex != 0)) {
            // We have to break into new row.
            newHTML += "<br>";
        }

        let element = document.createElement("a");
        // Set relevant attributes.

        if (snapping != "C") {
            element.innerHTML = snapping / 10;
        } else {
            element.innerHTML = "C";
        }

        let toolClass = "tool_btn";
        if (GRID_SNAPPING == snapping) {
            toolClass = "tool_btn2";
        }

        if (!snappingOptions.includes(GRID_SNAPPING) && snapping == "C") {
            toolClass = "tool_btn2";
        }

        element.setAttribute("class", `${toolClass} tool_wid`);
        element.setAttribute("style", "width: 21px;");

        if (snapping != "C") {
            element.setAttribute("onmousedown", `GridSnappingSet(${snapping}); Render();`);
        } else {
            element.setAttribute("onmousedown", "ALEI_CustomSnapping(); Render();");
        }

        newHTML += element.outerHTML;
        // Add to main HTML.
    }
    // Replace original `1` snapping with new HTML.
    $query(`a[onmousedown="GridSnappingSet(10);"]`).outerHTML = newHTML;
}

window.ALEI_UpdateRematchUIDSetting = function(value) {
    if(value && !OCM_LOADED && aleiSettings.ocmEnabled) CreateConnectionMapping(); // To create OCM.
    if(!value && OCM_LOADED && aleiSettings.ocmEnabled) CreateConnectionMapping(); // To clear OCM. (As it might be already outdated by the time rematch UID gets enabled)

    aleiSettings.rematchUID = value;
    writeStorage("ALEI_RemapUID", value);
    UpdateTools();
}

function addRematchUIOptions_helper() {
    $query(`a[onmousedown="EvalSet('param_panel_size',800);SaveBrowserSettings();UpdateCSS();"]`).remove();

    let result = document.evaluate("//span[contains(., 'Param')]", left_panel, null, XPathResult.ANY_TYPE, null);
    result.iterateNext();
    result.iterateNext().innerHTML = "Remap UID";

    for (let value of [[true, "Yes", 0], [false, "No", 200]]) {
        let element = document.createElement("a");
        element.innerHTML = value[1];

        let toolClass = "tool_btn";
        if(aleiSettings.rematchUID == value[0]) toolClass = "tool_btn2";

        element.setAttribute("class", `${toolClass} tool_wid`);
        element.setAttribute("style", "width: 64px;");
        element.setAttribute("onmousedown", `ALEI_UpdateRematchUIDSetting(${value[0]})`);

        $query(`a[onmousedown="EvalSet('param_panel_size',${value[2]});SaveBrowserSettings();UpdateCSS();"]`).outerHTML = element.outerHTML;
    }

}

window.ALEI_UpdateNameRenderSetting = function(status) { // TODO: we should have mixin function lol, check: <#1245454955477729382>
    window.ENABLE_TEXT = status;
    aleiSettings.renderObjectNames = status;
    writeStorage("ALEI_RenderObjectNames", status);
    UpdateTools();
    need_redraw = 1;
}

function addPreviewNamesOptions_helper() {
    let prevElement = $query(`a[onmousedown="ShowTexturesSet(true);"]`);

    function space() {
        let spacer = document.createElement("div");
        spacer.setAttribute("class", "q");
        prevElement.outerHTML += spacer.outerHTML;
    }

    let headerText = document.createElement("span");
    headerText.setAttribute("class", "gui_sel_info");
    headerText.innerHTML = "Object Names";

    let buttonHTML = "";

    function addButton(text, status) {
        let button = document.createElement("a");
        let _class = "tool_btn";

        if(status == aleiSettings.renderObjectNames) _class = "tool_btn2";

        button.setAttribute("class", `tool_wid ${_class}`);
        button.setAttribute("style", "width: 32px");
        button.setAttribute("onmousedown", `ALEI_UpdateNameRenderSetting(${status});`);
        button.innerHTML = text;
        buttonHTML += button.outerHTML;
    }

    addButton("Show", true);
    addButton("Hide", false);

    prevElement.outerHTML += `<br><div class="q"></div><br>` + headerText.outerHTML + "<br>" + buttonHTML;

}

function onToolUpdate() {
    addSnappingOptions_helper();
    addRematchUIOptions_helper();
    addPreviewNamesOptions_helper();
}

function patchUpdateTools() {
    let ut = UpdateTools;
    window.UpdateTools = function() {
        ut();
        onToolUpdate();
    }
    UpdateTools();
    aleiLog(DEBUG, "Patched updateTools.");
}

function tryToNumber(x) {
    if (!isNaN(Number(x))) {
        return Number(x);
    } else {
        return x;
    }
}

function insertXML(xml) {
    xml = "<map>" + xml.replaceAll("&", "[__Amp]") + "</map>";

    let parser = new DOMParser();
    let map = parser.parseFromString(xml, "application/xml");
    let objects = map.querySelectorAll("*");

    for (let i = 1; i < objects.length; i++) {
        let object = objects[i];
        if (object.tagName == "map") continue;

        let eo = new E(object.tagName);
        eo.pm = {};

        for (let j = 0; j < object.attributes.length; j++) {
            let name = object.attributes[j].name;
            let value = object.attributes[j].value;

            eo.pm[name] = tryToNumber(value.replaceAll("[__Amp]", "&"));
        }

        es.push(eo);
    }

    need_redraw = 1;
    need_GUIParams_update = 1;
}

function exportXML() {
    let exportSelection = 0;
    let newstr = "";
    let download = document.createElement("a");

    for (let i = 0; i < es.length; i++) {
        if (es[i].selected) {
            exportSelection = 1;
        }
    }

    if (exportSelection) {
        if(!confirm("Only selection will be exported.")) return;
        for (let i = 0; i < es.length; i++) {
            if (es[i].selected) {
                newstr += compi_obj(i);
            }
        }

        if (mapid) {
            download.download = mapid + " (selection).xml";
        } else {
            download.download = "newmap (selection).xml";
        }
    } else {
        for (let i = 0; i < es.length; i++) {
            if (es[i].exists) {
                newstr += compi_obj(i);
            }
        }

        if (mapid) {
            download.download = mapid + ".xml";
        } else {
            download.download = "newmap.xml";
        }
    }

    download.href = "data:text," + escape(newstr);

    if (newstr != "") {
        download.href = "data:text," + escape(newstr);

        download.click();
    } else {
        alert("Map is empty.");
    }

    download.remove();
}
///////////////////////////////
const _ignoredKeys = [
    // Numbers obviously cannot have texts.
    "x",
    "y",
    "w",
    "h",
    "maxcalls",
    "command",
    "upg",
    "tox",
    "toy",
    "stab",
    "damage",
    "u",
    "v",
    "sx",
    "sy",
    "r",
    "f",
    "power",
    // Booleans obviously cannot have texts.
    "enabled",
    "flare",
    // We are obviously not going to change UID
    "uid",
    // We are obviously not going to change models
    "gun_model",
    "model",
];

/*
 * UUIDR_Replace
 * This is function that handles replacing name part.
 * Is meant to be used in UpdateUIDReferences below.

 * @param  {string}  value    Value to be replaced.
 * @param  {string}  oldName  Previous name to be replaced from.
 * @param  {string}  newName  New name to be replaced to.
*/
function UUIDR_Replace(value, oldName, newName) {
    if ((typeof(value) !== "string")) return value;
    if(value.indexOf(oldName) === -1) return value;
    if(value == oldName) return newName;

    let splt = value.split(",");
    for (let i = 0; i < splt.length; i++) {
        let item = splt[i];
        if (item.trim() == oldName) {
            splt[i] = item.replace(oldName, newName);
        }
    }
    return splt.join(",");

}

function updateUIDReferences(oldName, newName) {
    aleiLog(DEBUG2, `Updating UID references from ${ANSI_CYAN}${oldName}${ANSI_RESET} to ${ANSI_CYAN}${newName}${ANSI_RESET}`);
    for (let i = 0; i < es.length; i++) {
        let element = es[i];
        if (!element.exists) continue;
        let properties = element.pm;

        for (let entry of Object.entries(properties)) {
            let key = entry[0];
            let value = entry[1];

            if (_ignoredKeys.indexOf(key) !== -1) continue;

            if(["additionalParamA", "additionalParamB"].indexOf(key) !== -1) {
                // This is extended action.
                for(let i = 0; i < value.length; i++) {
                    value[i] = UUIDR_Replace(value[i], oldName, newName);
                }
                continue;
            }

            properties[key] = UUIDR_Replace(value, oldName, newName);
        }
    }
    window.need_GUIParams_update = true;
}

/*
 * __OCM_EnsureValidReferences
 * This function is called in UpdatePhysicalParam(AFTER parameter was set.) to keep integrity of OCM (Object Connection Mapping)
 * Essentially just a function making sure the structure is valid on each parameter change.
 *
 * @param {E}     obj    PB2 Object to ensure validity of references of.
*/
function __OCM_EnsureValidReferences(obj) {
    let ocm = window.ObjectConnectionMapping;
    let utem = window.uidToElementMap;

    let pm = obj.pm;
    if(ocm[pm.uid] === undefined) return;

    let newReferences = [];
    function addReference(value) {
        if(newReferences.indexOf(value) === -1) newReferences.push(value);
    }

    for(let key of Object.keys(pm)) {
        if(__OCM_CHECKED_KEYS.indexOf(key) === -1) continue;
        let value = pm[key];

        if(utem[value] !== undefined) {
            addReference(value);
            continue;
        }
    }

    function Trigger_HandleParameter(trigger, parameter) {
        if(typeof(parameter) !== "string") return;

        if(utem[parameter] !== undefined) { // Simple case where parameter is simply reference to object.
            addReference(parameter);
            return;
        }
        if(!parameter.includes(",")) return;
        // A little complex case where multiple objects are referenced
        // As in Parameter B: #region*1,#region*2
        let splt = parameter.split(",");
        for(let value of splt) {
            let val = value.trim();
            if(utem[val] !== undefined) addReference(val);
        }
    }

    if(obj._class == "trigger") {
        // Vanilla trigger case (10 actions, extended triggers will run this too)
        for(let i = 1; i < 11; i++) {
            if(pm[`actions_${i}_type`] == -1) continue;
            if(pm[`actions_${i}_type`] === undefined) continue;
            Trigger_HandleParameter(pm.uid, pm[`actions_${i}_targetA`]);
            Trigger_HandleParameter(pm.uid, pm[`actions_${i}_targetB`]);
        }
        // Extended triggers.
        if(pm.extended) {
            let actions = pm.additionalActions;
            let paramA = pm.additionalParamA;
            let paramB = pm.additionalParamB;

            for(let i = 0; i < actions.length; i++) {
                if(actions[i] === -1) continue;
                Trigger_HandleParameter(pm.uid, paramA[i]);
                Trigger_HandleParameter(pm.uid, paramB[i]);
            }
        };


    }

    let oldReferences = ocm[pm.uid]["to"];
    // let newReferences
    for(let ref of newReferences) {
        if(oldReferences.indexOf(ref) !== -1) continue; // No change.
        // This wasn't in old reference, but is now, so added.
        __OCM_AddReference(pm.uid, ref);
    }
    for(let ref of oldReferences) {
        if(newReferences.indexOf(ref) !== -1) continue; // No change.
        // This was in old reference, but not anymore, so removed.
        __OCM_RemoveReference(pm.uid, ref);

    }

}

/**
 *  This function updates the actual entity class's pm property based on selection.
 *  This function is invoked from setletedit().
 *
 *  @param {*}          paramname            Property to update   Eg: actions_1_type
 *  @param {*}          chvalue              Value to update with Eg: 0
 *  @param {boolean}    toShowNote           Default parameter (true). Indicates whether to show confirmation note.
 */
function UpdatePhysicalParam(paramname, chvalue, toShowNote = true) {
    lcz();

    var layer_mismatch = false;
    var list_changes = '';

    // Finds selection.
    let ogES = window.es;
    window.es = SelectedObjects;
    for (var elems = 0; elems < es.length; elems++) {
        if (!es[elems].exists)                                                    continue;
        if (!es[elems].selected)                                                  continue;
        if (!es[elems].pm.hasOwnProperty(paramname) && !es[elems].pm["extended"]) continue;
        if (!MatchLayer(es[elems])) {
            layer_mismatch = true;
            continue;
        }

        // For extended triggers.
        // Find action_XX_YYYY, where XX is the number representing trigger action 12 for example and YYYY is either targetA, targetB or type.
        let regex = /actions_(\d+)_(targetA|targetB|type)/g;
        let match = Array.from(paramname.matchAll(regex))[0];

        // For undo and redo.
        let lup = (typeof (paramname) == 'string') ? '"' + paramname + '"' : paramname;
        chvalue = (typeof (chvalue) == 'number' || chvalue == 0) ? chvalue : _encodeXMLChars(`${chvalue}`);

        // Not a trigger or below action10 and below. Proceed with the usual Eric's implementation.
        if(!match || Number(match[1]) - 11 < 0){
            lnd('es[' + elems + '].pm[' + lup + '] = ' + es[elems].pm[paramname] + ';');
            ldn('es[' + elems + '].pm[' + lup + '] = ' + chvalue + ';');

            // Rematch UID
            if((paramname == "uid") && aleiSettings.rematchUID) {
                let oldName = es[elems].pm[paramname]; // Note: don't do this after getting original ES, otherwise id isn't valid lmao
                window.es = ogES;
                // Making sure we keep names unique for OCM structure
                if(window.uidToElementMap[chvalue] !== undefined) {
                    NewNote(`ALEI: Object with name ${chvalue} already exists, consider naming it differently.`, "#FFFF00");
                    return;
                }
                updateUIDReferences(oldName, chvalue);

                if(aleiSettings.ocmEnabled) {
                    let ocm = window.ObjectConnectionMapping;
                    ocm[chvalue] = ocm[oldName];
                    delete ocm[oldName];

                    function redirectConnections(obj, oldName, newName) {
                        let index = ocm[obj]["to"].indexOf(oldName);
                        if(index !== -1) ocm[obj]["to"][index] = newName;
                        index = ocm[obj]["by"].indexOf(oldName);
                        if(index !== -1) ocm[obj]["by"][index] = newName;
                    }
                    ocm[chvalue]["by"].map(v => redirectConnections(v, oldName, chvalue));
                    ocm[chvalue]["to"].map(v => redirectConnections(v, oldName, chvalue));
                }

                ogES = window.es;
                window.es = SelectedObjects;
            }

            if(paramname == "__id") {
                NewNote(`ALEI: Changing Object ID does not do anything, don't expect that to apply.`, "#FFFFFF");
            }
            // Saves the value to the class.
            es[elems].pm[paramname] = chvalue;

            if(paramname == "__priority") {
                ApplyObjectProperties(es[elems]);
            }
        }
        // Handling extended trigger's >10 trigger action.
        else{
            let index = Number(match[1]) - 11;      // action_11_... starts at element 0.

            let propertyName = '';
            if(match[2] === "type"){
                propertyName = "additionalActions";
            }
            else if(match[2] === "targetA"){
                propertyName = "additionalParamA";
            }
            else if(match[2] === "targetB"){
                propertyName = "additionalParamB";
            }
            else{
                aleiLog(WARN, "Something went wrong with regex. " + match[2]);
                return;
            }

            lnd(`es["${elems}"].pm["${propertyName}"][${index}] = ${es[elems].pm[propertyName][index]};`);
            ldn(`es["${elems}"].pm["${propertyName}"][${index}] = ${chvalue};`);

            es[elems].pm[propertyName][index] = chvalue;


        }
        if(aleiSettings.ocmEnabled) __OCM_EnsureValidReferences(es[elems]);
        if(paramname == "uses_timer") { // I do not have to do this, but i will for convenience
            if([true, "true"].indexOf(es[elems].pm.uses_timer) != -1) {
                param_type[REGION_EXECUTE_PARAM_ID][1] = "timer+none";
            } else {
                param_type[REGION_EXECUTE_PARAM_ID][1] = "trigger+none";
            }
            need_GUIParams_update = true;
        }

        list_changes += 'Parameter "' + paramname + '" of object "' + (es[elems].pm.uid != null ? es[elems].pm.uid : es[elems]._class) + '" was set to "' + chvalue + '"<br>';
    }

    need_redraw = true;

    if(toShowNote) {
        NewNote('Operation complete:<br><br>' + list_changes, note_passive);
    }

    if (layer_mismatch) {
        NewNote('Note: Some changes weren\'t made due to missmatch of active layer and class of selected objects', note_neutral);
    }
    lfz(false);
    window.es = ogES;
}

let imageContextMap = {};
window.aleiContextRenameImage = function(id) {
    var v = prompt('New name:', imageContextMap[id]);
    CloseImageContext();
    if ( v !== null ) {
        ServerRequest(`a=get_images&for_class=${last_for_class}&set_title_for=${id}&value=${v}`, "rename_image");
    }
}
window.aleiContextDeleteImage = function(id) {
    let v = confirm(`Are you sure you want to delete ${imageContextMap[id]} ?`);
    CloseImageContext();
    if ( v ) {
        last_element.style.opacity = '0.5';
        ServerRequest(`a=get_images&for_class=${last_for_class}&delete=${id}`, 'delete_image' );
    }
}

function ImageContext(id, e, old_name, element, moderator_menu, awaiting_approval=false, login='?', approver='?', is_fav_menu = false) {
    imageContextMap[id] = old_name;
    last_element = element;
    last_login = login;
    e.preventDefault();

    var image_context = document.getElementById('image_context');

    var str = '';

    if (moderator_menu) {
        str += `<div onclick="CloseImageContext(); setTimeout( function() { ServerRequest('a=get_images&for_class='+last_for_class+'&approve_for=${id}', 'approve_image' ); }, 1 );">Approve <img src="../images/ap.png" width="11" height="11"></div>`;
        str += `<div onclick="CloseImageContext(); setTimeout( function() { ServerRequest('a=get_images&for_class='+last_for_class+'&reset_status_for=${id}', 'reset_approval_image' ); }, 1 );">Reset approval status</div>`;
        str += `<div onclick="CloseImageContext(); setTimeout( function() { open_approved_decor_model = true; SaveFiltering(); search_phrase = '*by_login*'+last_login; UpdateImageList(); }, 1 );">Search for other approved images from &quot;${login}&quot;</div>`;
        str += `<div onclick="" style="color:rgba(0,0,0,0.3)">Last status change by ${approver}</div>`;
        str += `<div onclick="CloseImageContext(); setTimeout( function() { ServerRequest('a=get_images&for_class='+last_for_class+'&disapprove_for_all='+last_login, 'disapprove_image' ); }, 1 );">Disapprove all unreviewed from &quot;${login}&quot; <img src="../images/noap.png" width="11" height="11"><img src="../images/noap.png" width="11" height="11"><img src="../images/noap.png" width="11" height="11"></div>`;
        str += `<div onclick="CloseImageContext(); setTimeout( function() { ServerRequest('a=get_images&for_class='+last_for_class+'&disapprove_for=${id}', 'disapprove_image' ); }, 1 );">Disapprove <img src="../images/noap.png" width="11" height="11"></div>`;

    } else {
        //console.log( login, curlogin );

        if (login == curlogin && approver != '!') {
            str += `<div onclick="aleiContextRenameImage(${id})">Rename</div>`; // We overwrite rename action to our own.

            if (awaiting_approval) {
                str += `<div onclick="" style="color:rgba(0,0,0,0.3)">Request Approval (already done)</div>`;
                str += `<div onclick="CloseImageContext();  setTimeout( function() { ServerRequest('a=get_images&for_class='+last_for_class+'&deawait_approval_for=${id}', 'await_approval_status' ); }, 1 ); ">Exclude from approval review queue</div>`;
            } else {
                if (old_name == 'Untitled') {
                    str += `<div onclick="alert('Proper name required for custom image - you will not be available to change name once image is approved.');" style="color:rgba(0,0,0,0.3)">Request Approval (proper name required)</div>`;
                } else {
                    str += `<div onclick="CloseImageContext();  setTimeout( function() { ServerRequest('a=get_images&for_class='+last_for_class+'&await_approval_for=${id}', 'await_approval_status' ); }, 1 ); ">Request Approval <img src="../images/ap.png" width="11" height="11"></div>`;
                }
                str += `<div onclick="" style="color:rgba(0,0,0,0.3)">Exclude from approval review queue (not in queue)</div>`;
            }

            str += `<div onclick="aleiContextDeleteImage(${id})">Delete <img src="../images/noap.png" width="11" height="11"></div>`;
        } else {
            str += `<div onclick="CloseImageContext(); setTimeout( function() { open_approved_decor_model = true; SaveFiltering(); search_phrase = '*by_login*'+last_login; UpdateImageList(); }, 1 );">Search for other approved images from &quot;${login}&quot;</div>`;
        }

        str += `<span style="display:block;">&nbsp;</span>`;
        if (is_fav_menu) {
            str += `<div onclick="CloseImageContext();  setTimeout( function() { ServerRequest('a=get_images&for_class='+last_for_class+'&favorite_del=${id}', 'favorite_status' ); }, 1 ); ">Remove from favorites</div>`;
        } else {
            str += `<div onclick="CloseImageContext();  setTimeout( function() { ServerRequest('a=get_images&for_class='+last_for_class+'&favorite_add=${id}', 'favorite_status' ); }, 1 ); ">Add to favorites</div>`;
        }

    }

    image_context.innerHTML = str;

    image_context.style.left = e.clientX;
    image_context.style.top = e.clientY;
    image_context.style.display = 'block';

    image_context_cancel_pad.style.display = 'block';

    return false;
}

function findObjects(name) {
    let exact = confirm("Exact name?");
    let notFound = 1;

    function pred(d) {
        if (exact) {return d == name;}
        else {return d.includes(name)}
    }

    for (let i = 0; i < es.length; i++) {
        es[i].selected = 0;

        if (es[i].pm.uid) {
            if (pred(es[i].pm.uid) && MatchLayer(es[i])) {
                es[i].selected = 1;
                notFound = 0;
            }
        }
    }

    need_GUIParams_update = 1;
    need_redraw = 1;

    return notFound;
}

function rotateObjects() {
    let selected = SelectedObjects;
    let distX = [];
    let distY = [];
    let minX;
    let minY;

    for (let i = 0; i < selected.length; i++) {
        if (selected[i].pm.w && selected[i].pm.h) {
            let save = selected[i].pm.w;

            selected[i].pm.w = selected[i].pm.h;
            selected[i].pm.h = save;
        }

        distX.push(selected[i].pm.x);
        distY.push(selected[i].pm.y);
    }

    minX = Math.min(...distX);
    minY = Math.min(...distY);

    for (let i = 0; i < selected.length; i++) {
        distX[i] -= minX;
        distY[i] -= minY;

        selected[i].pm.x = minX + distY[i];
        selected[i].pm.y = minY + distX[i];
    }
}

function RandomizeName(oldName) {
    let takenUids = es.filter(e => e.exists).map(o => o.pm.uid);
    let actualName = oldName;
    if(oldName.indexOf("*") !== -1) actualName = oldName.slice(0, oldName.indexOf("*"));

    let current = 1;
    while(takenUids.indexOf(`${actualName}*${current}`) !== -1) current++;

    return `${actualName}*${current}`;
}

function patchRandomizeName() {
    window.RandomizeName = RandomizeName;
}

function patchAllowedCharacters() {
    allowed_string_chars += "<>";
}

function getRuleBySelector(selector) {
    let rules = document.styleSheets[0].rules;
    let rule;

    for (let i = 0; i < rules.length; i++) {
        if (rules[i].selectorText == selector) {
            rule = rules[i];
        }
    }

    return rule;
}

window.blackThemeUndos = [];

function setStyle(selector, style, value, isUndo = false) {
    if(!isUndo) blackThemeUndos.push([
        selector,
        style,
        getRuleBySelector(selector).style[style]
    ]);
    getRuleBySelector(selector).style[style] = value;
}

function UndoBlackTheme() {
    ThemeSet(0);
    for(let undo of blackThemeUndos) {
        setStyle(undo[0], undo[1], undo[2], true);
    }
}

function blackTheme() {
    ThemeSet(0);

    window.THEME = 4;

    setStyle(".topui", "backgroundSize", "0px"); // removes top ui detail
    setStyle(".leftui", "backgroundSize", "0px"); // removes left ui detail
    setStyle(".rightui", "backgroundSize", "0px"); // removes right ui detail
    setStyle(".topui", "backgroundColor", "#0A0A0A");
    setStyle(".leftui", "backgroundColor", "#0A0A0A");
    setStyle(".rightui", "backgroundColor", "#0A0A0A");
    setStyle(".field_btn", "backgroundColor", "#1E1E1E");
    setStyle(".tool_btn", "backgroundColor", "#1E1E1E");
    setStyle(".tool_btn", "border", ""); // tool button outline
    setStyle(".tool_btn2", "backgroundColor", "#4566AB");
    setStyle(".tool_btn2", "border", "1px solid #FFFFFF20");
    setStyle(".field_btn", "color", "#FFFFFFD0");
    setStyle(".tool_btn", "color", "#FFFFFFD0");
    setStyle(".tool_btn2", "color", "#FFFFFFD0");
    setStyle(".gui_sel_info", "color", "#FFFFFFD0");
    setStyle(".c", "color", "#FFFFFF20");
    setStyle(".pa1", "color", "#808080");
    setStyle(".pa2", "color", "#FFFFFFD0");
    setStyle(".field_dis_left", "color", "#FFFFFFD0");
    setStyle(".field_dis_right", "color", "#FFFFFFD0");
    setStyle(".p_u1", "border", "");
    setStyle(".p_u2", "border", "");
    setStyle(".pa1", "backgroundColor", "#101010");
    setStyle(".pa2", "backgroundColor", "#1B1B1B");
    setStyle(".objbox", "backgroundColor", "#131313");
    setStyle(".field_dis_left", "backgroundColor", "#1E1E1E");
    setStyle(".field_dis_right", "backgroundColor", "#131313");
    setStyle(".selline1", "backgroundColor", "#7A1314"); // selected object/current map
    setStyle(".tool_btn:hover", "backgroundColor", "#5f8dd3");
    setStyle(".tool_btn:hover", "border", "1px solid #FFFFFF20");
    setStyle(".tool_btn:hover", "color", "#FFFFFFD0");
    setStyle(".tool_btn2:hover", "backgroundColor", "#5077C4");
    setStyle(".tool_btn2:hover", "border", "1px solid #FFFFFF20");
    setStyle(".tool_btn2:hover", "color", "#FFFFFFD0");
    setStyle(".field_btn:hover", "backgroundColor", "#353535");
    setStyle(".field_btn:hover", "color", "#FFFFFFD0");
    setStyle(".tool_btn:active", "backgroundColor", "#151515"); // object list hold fill
    setStyle(".tool_btn:active", "border", "1px solid #FFFFFF20"); // object list hold outline
    setStyle(".tool_btn:active", "color", "#FFFFFFD0"); // object list hold text
    setStyle(".tool_btn2:active", "backgroundColor", "#39558C"); // toggled active button hold fill
    setStyle(".tool_btn2:active", "border", "1px solid #FFFFFF20"); // toggled active button hold outline
    setStyle(".tool_btn2:active", "color", "#FFFFFFD0"); // toggled active button hold text
    setStyle(".field_btn:active", "backgroundColor", "#151515"); // field button hold fill
    setStyle(".field_btn:active", "color", "#CCC"); // field button hold text
    setStyle("#mrtitle", "backgroundColor", "#1E1E1E"); // map list overhead
    setStyle("#mrbox", "backgroundColor", "#0A0A0A"); // maplist border fill
    setStyle(".field_input", "backgroundColor", "#131313"); // map id field
    setStyle(".field_input", "color", "#CCC"); // what
    setStyle(".btn", "backgroundColor", "#1E1E1E"); // map button
    setStyle(".btn", "color", "#CCC"); // what
    setStyle(".btn:hover", "backgroundColor", "#353535"); // map button hover
    setStyle(".btn:hover", "color", "#CCC"); // what is this 8
    setStyle(".btn:active", "backgroundColor", "#151515"); // map button hold
    setStyle(".btn:active", "color", "#CCC"); // what is this 10
    setStyle("closebox", "backgroundColor", "#353535"); // decor list close button
    setStyle("closebox", "color", "#CCC"); // what
    setStyle(".list_group", "backgroundColor", "#1E1E1E"); // decor list category
    setStyle(".list_group", "borderBottom", ""); // what is this 14
    setStyle(".list_group:hover", "backgroundColor", "#353535"); // decor list category hover
    setStyle(".list_group:active", "backgroundColor", "#0A0A0A"); // decor list category hold
    setStyle(".image_list_collapsable", "backgroundColor", "#0A0A0A"); // decor list background
    setStyle(".img_option_selected", "backgroundColor", "#4566AB40"); // current decor
    setStyle(".rightui", "borderLeft", ""); // removes right ui border
    setStyle(".leftui", "borderRight", ""); // removes left ui order
    setStyle("::-webkit-scrollbar-thumb", "backgroundColor", "#888"); // what is this
    setStyle("#rparams, #gui_objbox, #tools_box, #parambox", "scrollbarColor", ""); // what is this
    setStyle("#rparams, #gui_objbox, #tools_box, #parambox", "scrollbarWidth", ""); // what is this
    setStyle("#tools_box", "overflow-y", "hidden"); // what is this
    setStyle("#tools_box", "overflow-y", "auto"); // what is this
}

function isNumber(str) {
    let number = 0;

    if ((!isNaN(Number(str)) && str !== " ") || str == ".") {
        number = 1;
    }

    return number;
}

function isOperator(str) {
    return "+-*/%^SCANRF".includes(str);
}

function isGroup(str) {
    return "()".includes(str);
}

function split(str) {
    return str.replaceAll(" ", "").split("");
}

function concatNumbers(str) {
    let num = "";

    for (let i = 0; i < str.length; i++) {
        if (isNumber(str[i])) {
            num += str[i];
        } else if (num.length != 0) {
            str.splice(i - num.length, num.length, num);
            i -= (num.length - 1);
            num = "";
        }
    }

    if (num.length != 0) {
        str.splice(str.length - num.length, num.length, num);
    }
}

function convertToObjects(str) {
    for (let i = 0; i < str.length; i++) {
        str[i] = {
            chr: str[i]
        }
    }
}

function createGroupOrders(str) {
    let order = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i].chr == "(") {
            order++;
        }

        if (str[i].chr == ")") {
            order--;
        }

        str[i].groupOrder = order;
    }
}

function removeGroupChars(str) {
    for (let i = 0; i < str.length; i++) {
        if (isGroup(str[i].chr)) {
            str.splice(i, 1);
            i--;
        }
    }
}

function operatorOrder(str) {
    let order = 0;

    if ("+-".includes(str)) {
        order = 1;
    }

    if ("*/%".includes(str)) {
        order = 2;
    }

    if ("^SCANRF".includes(str)) {
        order = 3;
    }

    return order;
}

function createOperatorOrders(str) {
    for (let i = 0; i < str.length; i++) {
        if (isOperator(str[i].chr)) {
            let order = operatorOrder(str[i].chr);

            str[i].operatorOrder = order;

            if (str[i + 1].groupOrder == str[i].groupOrder) {
                str[i + 1].operatorOrder = order;
            }

            if (!str[i - 1].operatorOrder || (str[i - 1].operatorOrder < str[i].operatorOrder && str[i - 1].groupOrder == str[i].groupOrder)) {
                str[i - 1].operatorOrder = order;
            }
        }
    }
}

function createOrders(str) {
    for (let i = 0; i < str.length; i++) {
        str[i].order = str[i].groupOrder * 10 + str[i].operatorOrder;
    }
}

function getOrders(str) {
    let orders = [];

    for (let i = 0; i < str.length; i++) {
        orders.push(str[i].order);
    }

    return orders;
}

function simplifyOrders(orders) {
    let arr = [];
    let order = 1;

    orders.sort((x, y) => {
        return y - x;
    });

    arr.push({
        from: orders[0],
        to: order
    });

    for (let i = 1; i < orders.length; i++) {
        if (orders[i] != orders[i - 1]) {
            order++;
        }

        arr.push({
            from: orders[i],
            to: order
        });
    }

    return arr;
}

function replaceOrders(str) {
    let orders = getOrders(str);
    let arr = simplifyOrders(orders);

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (str[i].order == arr[j].from) {
                str[i].order = arr[j].to;
            }
        }
    }
}

function calc(x, y, z) {
    let result;

    x = Number(x);
    z = Number(z);

    if (y == "+") {
        result = x + z;
    }

    if (y == "-") {
        result = x - z;
    }

    if (y == "*") {
        result = x * z;
    }

    if (y == "/") {
        result = x / z;
    }

    if (y == "%") {
        result = x % z;
    }

    if (y == "^") {
        result = x ** z;
    }

    if (y == "S") {
        result = Math.sin(x) * z;
    }

    if (y == "C") {
        result = Math.cos(x) * z;
    }

    if (y == "A") {
        result = Math.atan2(x, z);
    }

    if (y == "N") {
        if (z) {
            result = Math.floor(Math.random() * x);
        } else {
            result = Math.random() * x;
        }
    }

    if (y == "R") {
        result = Math.round(x / z) * z;
    }

    if (y == "F") {
        result = Math.floor(x / z) * z;
    }

    return result;
}

function getMaxOrder(str) {
    let order = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i].order > order) {
            order = str[i].order;
        }
    }

    return order;
}

function exec(str) {
    let maxOrder = getMaxOrder(str);

    for (let order = 1; order <= maxOrder; order++) {
        let i = 0;
        let loop = 1;

        while (loop) {
            loop = 0;

            let newstr = [];
            let length;
            let saveOrder;
            let index = -1;

            for (; i < str.length; i++) {
                if (str[i].order == order) {
                    newstr.push(str[i]);

                    if (index == -1) {
                        index = i;
                    }
                } else if (newstr.length != 0) {
                    loop = 1;
                    break;
                }
            }

            length = newstr.length;

            if (length) {
                while (newstr.length != 1) {
                    newstr.splice(0, 3, {
                        chr: calc(newstr[0].chr, newstr[1].chr, newstr[2].chr)
                    });
                }

                saveOrder = str[index].order;

                str.splice(index, length, newstr[0]);
                i -= (length - 1);

                str[index] = {
                    chr: str[index].chr,
                    order: saveOrder + 1
                }
            }
        }
    }
}

function replace(str, arr) {
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (str[i] == arr[j].from) {
                str[i] = arr[j].to;
            }
        }
    }
}

function negativeNumbers(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "-" && str[i - 1] == "(") {
            str.splice(i, 0, "0");
        }
    }
}

function simpleGroups(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i - 1] == "(" && str[i + 1] == ")") {
            str.splice(i, 0, "0", "+");
        }
    }
}

function parse(str, vars) {
    if (str == "") {
        str = "0";
    }

    if (str[0] == "-") {
        str = "0" + str;
    }

    str = split(str);
    concatNumbers(str);

    replace(str, [
        {
            from: "p",
            to: String(Math.PI)
        },

        {
            from: "x",
            to: String(vars[0])
        },

        {
            from: "y",
            to: String(vars[1])
        },

        {
            from: "w",
            to: String(vars[2])
        },

        {
            from: "h",
            to: String(vars[3])
        },

        {
            from: "i",
            to: String(vars[4])
        }
    ]);

    try {
        negativeNumbers(str);
        simpleGroups(str);
        convertToObjects(str);
        createGroupOrders(str);
        removeGroupChars(str);
        createOperatorOrders(str);
        createOrders(str);
        replaceOrders(str);
        exec(str);
    } catch {
        return "error";
    }

    return Number(Number(str[0].chr).toFixed(10));
}

function getObjectBox(obj) {
    let x = 0;
    let y = 0;
    let w = obj.pm.w;
    let h = obj.pm.h;

    if (!"box door region pushf bg water".includes(obj._class)) {
        x = bo_x[obj._class];
        y = bo_y[obj._class];
        w = bo_w[obj._class];
        h = bo_h[obj._class];
    }

    if ("player enemy".includes(obj._class)) {
        x = -15;
        y = -81;
        w = 30;
        h = 80;
    }

    if (obj._class == "vehicle") {
        x = bo_x["vehicle_" + obj.pm.model];
        y = bo_y["vehicle_" + obj.pm.model];
        w = bo_w["vehicle_" + obj.pm.model];
        h = bo_h["vehicle_" + obj.pm.model];

        if (obj.pm.model == "veh_hh") {
            x = lo_x["alei_veh_hh"];
            y = lo_y["alei_veh_hh"];
            w = lo_w["alei_veh_hh"];
            h = lo_h["alei_veh_hh"];
        }
    }

    return {
        x: x,
        y: y,
        w: w,
        h: h
    }
}

function getSelectionImage() {
    let selection = SelectedObjects;
    let arr1 = [];
    let arr2 = [];
    let minX = +Infinity;
    let minY = +Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;

    for (let i = 0; i < selection.length; i++) {
        let box = getObjectBox(selection[i]);
        let x = selection[i].pm.x + box.x;
        let y = selection[i].pm.y + box.y;
        let w = box.w;
        let h = box.h;

        if (x < minX) {
            minX = x;
        }

        if (x + w > maxX) {
            maxX = x + w;
        }

        if (y < minY) {
            minY = y;
        }

        if (y + h > maxY) {
            maxY = y + h;
        }
    }

    window.es = [];
    for (let e of selection) {
        es.push(e);
    }



    THEME = 4;
    GRID_ALPHA = 0;
    SHOW_CONNECTIONS = 0;
    zoom = 1;
    zoom_validate();

    let sw = dis_to_x - dis_from_x;
    let sh = dis_to_y - dis_from_y;

    dis_from_x = minX - 10;
    dis_from_y = minY - 10;
    dis_to_x = minX + sw - 10;
    dis_to_y = minY + sh - 10;

    ConsoleTraceMessages = [];

    Render();

    let w = maxX - minX + 20;
    let h = maxY - minY + 20;

    aleiLog(DEBUG2, "Before GID");
    let data = ctx.getImageData(0, 0, w, h);
    aleiLog(DEBUG2, "After GID");

    let canvas = document.createElement("canvas");
    let ctx2 = canvas.getContext("2d");

    let canvas2 = document.createElement("canvas");
    let ctx3 = canvas2.getContext("2d");

    canvas.width = w;
    canvas.height = h;

    ctx2.beginPath();
    ctx2.putImageData(data, 0, 0);
    ctx2.closePath();

    let prevW = w;
    let prevH = h;

    if (w > 100 || h > 100) {
        let divide = w / h;

        if (divide >= 1) {
            w = 100;
            h = w / divide;
        } else {
            h = 100;
            w = h * divide;
        }
    }

    canvas2.width = w;
    canvas2.height = h;

    ctx3.beginPath();
    ctx3.scale(w / prevW, h / prevH);
    ctx3.drawImage(canvas, 0, 0);
    ctx3.closePath();

    let result = canvas2.toDataURL();

    canvas.remove();
    canvas = undefined;

    return result;
}

function createClipboardDiv() {
    let clipboardDiv = document.createElement("div");
    let mrdimlights = document.getElementById("mrdimlights");

    clipboardDiv.id = "clipboardDiv";
    clipboardDiv.className = "mrpopup";
    clipboardDiv.style = "width: calc(100% - 280px); height: 100%; margin: 0px; padding: 0px; top: 50%; transform: translate(0px, -50%); display: none;";

    clipboardDiv.addEventListener("contextmenu", e => {
        e.preventDefault();
    });

    mrdimlights.addEventListener("click", e => {
        clipboardDiv.style.display = "none";
    });

    document.body.append(clipboardDiv);
}

function clipboardItemAction(i) {
    let items = JSON.parse(localStorage.clipboardItems);
    let action = confirm("Rename (OK) or delete (Cancel) ?");

    if (action) {
        let name = prompt("Enter name:", items[i].name);

        if (name) {
            items[i].name = name;

            localStorage.clipboardItems = JSON.stringify(items);

            updateClipboardDiv();
        }
    } else {
        if (confirm("Are you sure you want to delete?")) {
            items.splice(i, 1);

            localStorage.clipboardItems = JSON.stringify(items);

            updateClipboardDiv();
        }
    }
}

function registerClipboardItemAction() {
    window.clipboardItemAction = clipboardItemAction;
    aleiLog(DEBUG, "Registered Clipboard Item Action");
}

function updateClipboardDiv() {
    if (!localStorage.clipboardItems) {
        localStorage.clipboardItems = "[]";
    }

    let items = JSON.parse(localStorage.clipboardItems);
    let clipboardDiv = document.getElementById("clipboardDiv");
    let mrdimlights = document.getElementById("mrdimlights");

    clipboardDiv.style.display = "block";
    mrdimlights.style.display = "block";

    let html = `
		<div id="mrtitle">
			<span>Object clipboard</span>
			<closebox onclick="document.getElementById('clipboardDiv').style.display = 'none'; document.getElementById('mrdimlights').style.display = 'none';">x</closebox>
		</div>

		<div id="mrbox" class="objbox" style="height: calc(100% - 32px); box-sizing: border-box;">
	`;

    let originalES = window.es;
    let cs = {} // CS: Current Settings, because we will change settings for rendering images
    cs.theme = THEME;
    cs.grid_opacity = GRID_ALPHA;
    cs.showConnections = SHOW_CONNECTIONS;
    //
    cs.dtx = dis_to_x;
    cs.dty = dis_to_y;
    //
    cs.dfx = dis_from_x;
    cs.dfy = dis_from_y;
    //
    cs.ctm = ConsoleTraceMessages;
    cs.zoom = zoom;

    window.es = [];
    for (let i = 0; i < items.length; i++) {
        __pasteObjectClipboard(items[i]);
        html += `
			<div class="img_option" style="width: auto;" oncontextmenu="clipboardItemAction(` + i + `)" onclick="pasteFromPermanentClipboard(` + i + `);">
				<img src="` + getSelectionImage() + `" style="max-width: 100px; max-height: 100px;">
				<div>` + items[i].name + `</div>
			</div>
		`;
    }

    clipboardDiv.innerHTML = html + "</div>";
    window.es = originalES;
    THEME = cs.theme;
    GRID_ALPHA = cs.grid_opacity;
    SHOW_CONNECTIONS = cs.showConnections;
    dis_to_x = cs.dtx;
    dis_to_y = cs.dty;
    dis_from_x = cs.dfx;
    dis_from_y = cs.dfy;
    ConsoleTraceMessages = cs.ctm;
    zoom = cs.zoom;
    need_redraw = 1;
    zoom_validate();
}

function __pasteObjectClipboard(item) {
    sessionStorage.permanent_clipboard = item.data;
    PasteFromClipBoard("permanent_clipboard");
}

function pasteFromPermanentClipboard(i) {
    let items = JSON.parse(localStorage.clipboardItems);

    sessionStorage.permanent_clipboard = items[i].data;

    PasteFromClipBoard("permanent_clipboard");

    let clipboardDiv = document.getElementById("clipboardDiv");
    let mrdimlights = document.getElementById("mrdimlights");

    clipboardDiv.style.display = "none";
    mrdimlights.style.display = "none";

    NewNote("Objects pasted from permanent clipboard.", note_passive);
}

function copyToPermanentClipboard() {
    try {
        let selection = SelectedObjects;

        if (selection.length != 0) {
            CopyToClipBoard("permanent_clipboard");

            let items = JSON.parse(localStorage.clipboardItems);

            items.push({
                name: "Selection",
                data: sessionStorage.permanent_clipboard
            });

            localStorage.clipboardItems = JSON.stringify(items);

            NewNote("Objects copied to permanent clipboard.", note_passive);
        } else {
            updateClipboardDiv();
        }
    } catch (err) {
        console.error(err);
        NewNote("Can't copy objects to permanent clipboard.<br>LocalStorage error?", note_bad);
    }
}

function changeTopRightText() {
    let containerElem = document.getElementById("version_rights");
    let elem = containerElem.childNodes[0];

    containerElem.style.width = "170px";
    elem.style.width = "160px";

    let version = "";
    if(isNative) version = " v" + GM_info.script.version;

    elem.innerHTML = elem.innerHTML.replaceAll("<br>", " ") + "<br>ALE Improvements" + version;
}

// Adds additional button
function addAdditionalButtons() {
    const rparams = document.getElementById("rparams");
    const selection = SelectedObjects;

    // Param list not loaded or selection is not 1.
    if (!rparams || selection.length != 1) {
        return;
    }

    const getImageSize_button = '<a onclick="getImageSize();" class="tool_btn tool_wid" style="display: block; width: 100%; margin-top: 4px;">Get image size</a>';
    const centerDecorationX_button = '<a onclick="centerImageX();" class="tool_btn tool_wid" style="display: block; width: 100%; margin-top: 4px;">Center decoration X</a>';
    const centerDecorationY_button = '<a onclick="centerImageY();" class="tool_btn tool_wid" style="display: block; width: 100%; margin-top: 4px;">Center decoration Y</a>';

    if (selection[0]._class == "bg") {
        rparams.innerHTML += getImageSize_button;
    }

    if (selection[0]._class == "decor") {
        rparams.innerHTML += getImageSize_button;
        rparams.innerHTML += centerDecorationX_button;
        rparams.innerHTML += centerDecorationY_button;
    }

    if(!edit_triggers_as_text && selection[0]._class == "trigger" && aleiSettings.extendedTriggers){
        const extendTriggerAction_button = `
            <div class="two-element-grid">
                <a onclick="addTriggerActionCount(1)" class="tool_btn tool_wid" style="display: block; width: 95%; margin-top: 4px;">(+) Extend trigger action list.</a>
                <a onclick="addTriggerActionCount(-1)" class="tool_btn tool_wid" style="display: block; width: 95%; margin-top: 4px;">(-) Shrink trigger action list.</a>
            </div>

            <div class="two-element-grid">
                <div class="two-element-grid">
                    <a onclick="addTriggerActionCount(5)" class="tool_btn tool_wid" style="display: block; width: 90%; margin-top: 4px;">(+5)</a>
                    <a onclick="addTriggerActionCount(10)" class="tool_btn tool_wid" style="display: block; width: 90%; margin-top: 4px;">(+10)</a>
                </div>

                <div class="two-element-grid">
                    <a onclick="addTriggerActionCount(-5)" class="tool_btn tool_wid" style="display: block; width: 90%; margin-top: 4px;">(-5)</a>
                    <a onclick="addTriggerActionCount(-10)" class="tool_btn tool_wid" style="display: block; width: 90%; margin-top: 4px;">(-10)</a>
                </div>
            </div>
        `;
        rparams.innerHTML += extendTriggerAction_button;

        // Update GUI to change parameter type based on trigger action.
        StreetMagic();
    }
}

/**
 * This function is invoked whenever users pressed the "Extend trigger action list." or the "Shrink trigger action list" buttons.
 * This function is responsible for creating and maintaining extended triggers.
 *
 * @param {Number} value    The amount of trigger actions to add or subtract from the currently selected trigger,
 */
function addTriggerActionCount(value){

    const selection = SelectedObjects;

    if (selection.length != 1 || value === 0) {
        return;
    }

    const selectedTrigger = selection[0];

    // Subtracting trigger actions from normal triggers is a no-op.
    if(!selectedTrigger.pm["extended"] && value < 0){
        return;
    }

    // It is a normal trigger, let's convert it to an extended trigger.
    if(!selectedTrigger.pm["extended"]){
        selectedTrigger.pm["additionalActions"] = new Array();
        selectedTrigger.pm["additionalParamA"] = new Array();
        selectedTrigger.pm["additionalParamB"] = new Array();
        selectedTrigger.pm["totalNumOfActions"] = 10;
        selectedTrigger.pm["extended"] = true;

        NewNote("Converted this to an extended trigger.", note_passive);
        NewNote("Be mindful about your number of triggers.", note_neutral);
        NewNote("Behind the scenes, this creates 1 trigger for every additional 9 trigger actions.", note_neutral);
    }

    selectedTrigger.pm["totalNumOfActions"] += value;

    // It has less than 10 trigger actions, let's convert this extended trigger back to a normal trigger.
    if(selectedTrigger.pm["totalNumOfActions"] <= 10 || isNaN(selectedTrigger.pm["totalNumOfActions"])){
        delete selectedTrigger.pm["additionalActions"];
        delete selectedTrigger.pm["additionalParamA"];
        delete selectedTrigger.pm["additionalParamB"];
        delete selectedTrigger.pm["totalNumOfActions"];
        delete selectedTrigger.pm["extended"];
    }
    // Resize arrays according to the new change in totalNumOfTriggers.
    else{
        if(value > 0){
            selectedTrigger.pm["additionalActions"].push(...Array(value).fill(-1));
            selectedTrigger.pm["additionalParamA"].push(...Array(value).fill(0));
            selectedTrigger.pm["additionalParamB"].push(...Array(value).fill(0));
        }
        else{
            selectedTrigger.pm["additionalActions"].length += value;
            selectedTrigger.pm["additionalParamA"].length += value;
            selectedTrigger.pm["additionalParamB"].length += value;
        }
    }

    UpdateGUIParams();

    // Scroll to the bottom of the trigger list.
    let divElement = document.getElementById('rparams');
    divElement.scrollTop = divElement.scrollHeight;
}

function getImageSize() {
    let selection = SelectedObjects;
    let id;

    if (selection[0]._class == "bg") {
        id = selection[0].pm.m;
    }

    if (selection[0]._class == "decor") {
        id = selection[0].pm.model;
    }

    if (typeof id == "string") {
        let img = document.createElement("img");

        img.onload = function() {
            let w = img.width;
            let h = img.height;

            img.remove();

            alert("W: " + w + "\nH: " + h);
        }

        img.onerror = function() {
            img.remove();

            alert("Image not found.");
        }

        img.src = "https://www.plazmaburst2.com/mimage_cache.php?image_id=" + id.slice(1);
    } else {
        alert("Image not found.");
    }
}

function getImageData() {
    return new Promise((res, err) => {
        let selection = SelectedObjects;
        let id;

        if (selection[0]._class == "bg") {
            id = selection[0].pm.m;
        }

        if (selection[0]._class == "decor") {
            id = selection[0].pm.model;
        }

        if (typeof id == "string") {
            let img = document.createElement("img");

            img.onload = function() {
                let w = img.width;
                let h = img.height;

                let canvas = document.createElement("canvas");
                let ctx = canvas.getContext("2d");

                canvas.width = img.width;
                canvas.height = img.height;

                ctx.beginPath();
                ctx.drawImage(img, 0, 0);
                ctx.closePath();

                res([ctx.getImageData(0, 0, w, h).data, w]);
            }

            img.onerror = function() {
                img.remove();

                alert("Image not found.");

                res(1);
            }

            img.src = "https://www.plazmaburst2.com/mimage_cache.php?image_id=" + id.slice(1);
        } else {
            alert("Image not found.");

            res(1);
        }
    });
}

function arrMin(arr) {
    let min = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}

function arrMax(arr) {
    let max = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

function getImagePosition(data, w) {
    let arrX = [];
    let arrY = [];

    let minX;
    let minY;
    let maxX;
    let maxY;

    let centerX = 0;
    let centerY = 0;

    if (data != 1) {
        for (let i = 0; i < data.length; i += 4) {
            if (data[i + 3] >= 3) {
                let x = (i / 4) % w;
                let y = Math.floor(i / 4 / w);

                arrX.push(x);
                arrY.push(y);
            }
        }

        minX = arrMin(arrX);
        minY = arrMin(arrY);
        maxX = arrMax(arrX);
        maxY = arrMax(arrY);

        centerX = (minX + maxX) / 2;
        centerY = (minY + maxY) / 2;
    }

    return {
        x: centerX,
        y: centerY
    }
}

function setDecorOffset(x, y) {
    let selection = SelectedObjects;

    selection[0].pm.u = x;
    selection[0].pm.v = y;
}

function centerImageX() {
    let selection = SelectedObjects;

    if (selection.length == 1) {
        if (selection[0]._class == "decor") {
            getImageData().then(res => {
                if (res != 1) {
                    let center = getImagePosition(res[0], res[1]);
                    let x = center.x;

                    setDecorOffset(-x, selection[0].pm.v);
                }
            });
        }
    }

    need_redraw = 1;
    need_GUIParams_update = 1;
}

function centerImageY() {
    let selection = SelectedObjects;

    if (selection.length == 1) {
        if (selection[0]._class == "decor") {
            getImageData().then(res => {
                if (res != 1) {
                    let center = getImagePosition(res[0], res[1]);
                    let y = center.y;

                    setDecorOffset(selection[0].pm.u, -y);
                }
            });
        }
    }

    need_redraw = 1;
    need_GUIParams_update = 1;
}

function addFunctionToWindow() {
    window.getImageSize = getImageSize;
    window.centerImageX = centerImageX;
    window.centerImageY = centerImageY;
    window.addTriggerActionCount = addTriggerActionCount;
}

let newUpdate = 0;

let targetElement;

document.addEventListener("mousedown", e => {
    targetElement = e.target;
});

document.addEventListener("keydown", e => {
    if(e.ctrlKey && e.code == "KeyA" && canvas_focus) {
        window.es.map(e => {
            if((e.exists) && (e._isphysical) && (MatchLayer(e))) {
                e.selected = true;
            }
            window.need_redraw = true;
            window.need_GUIParams_update = true;
        });
    }
    if (e.ctrlKey && e.code == "KeyS" && canvas_focus) {
        e.preventDefault();
        document.getElementsByClassName("field_btn")[0].click();
    }

    if (e.ctrlKey && e.code == "KeyF" && canvas_focus) {
        e.preventDefault();

        let name = prompt("Find objects:", "");

        if (name !== null && name !== "") {
            let notFound = findObjects(name);

            if (notFound) {
                alert("Nothing found.");
            }
        }
    }

    if (e.code == "KeyR" && targetElement != "[object HTMLInputElement]" && targetElement.id != "opcode_field") {
        if (!isOnlyTriggerSelected()) {
            rotateObjects();
        }
    }

    if (e.ctrlKey && e.code == "KeyR" && canvas_focus) {
        if (isOnlyTriggerSelected() && !isNothingSelected()) {
            e.preventDefault();

            reverseTriggerActions();
            unselectTriggerActions();
        }
    }

    if ((e.code == "Minus" || e.code == "NumpadSubtract") && e.ctrlKey && canvas_focus) {
        e.preventDefault();

        zoom *= 2;
        zoom_validate();
        need_redraw = 1;
    }

    if ((e.code == "Equal" || e.code == "NumpadAdd") && e.ctrlKey && canvas_focus) {
        e.preventDefault();

        zoom *= 0.5;
        zoom_validate();
        need_redraw = 1;
    }

    if (e.ctrlKey && e.altKey) {
        e.preventDefault();

        zoom = 1;
        zoom_validate();
        need_redraw = 1;
    }

    if (e.code == "KeyH" && e.ctrlKey) {
        e.preventDefault();

        if (targetElement.id === "opcode_field") {
            let value = targetElement.value;

            let str1 = prompt("Enter string to replace from:", "");
            if (!str1) return;

            let str2 = prompt("Enter string to replace to:", str1);
            if (!str2) return;

            targetElement.value = value.replaceAll(str1, str2);
        }
    }

    if (e.code == "Enter" && targetElement != "[object HTMLInputElement]" && targetElement.id != "opcode_field" && canvas_focus) {
        let selected = SelectedObjects;

        if (selected.length != 0) {
            let param = prompt("Enter parameter name:", "");

            if (param) {
                let expression = prompt("Enter expression:", "");

                if (expression) {
                    param = param.toLowerCase().replace("width", "w").replace("height", "h");

                    for (let i = 0; i < selected.length; i++) {
                        let x = selected[i].pm.x;
                        let y = selected[i].pm.y;
                        let w = selected[i].pm.w;
                        let h = selected[i].pm.h;

                        if (x === undefined) {
                            x = 0;
                        }

                        if (y === undefined) {
                            y = 0;
                        }

                        if (w === undefined) {
                            w = 0;
                        }

                        if (h === undefined) {
                            h = 0;
                        }

                        if (selected[i].pm[param] !== undefined) {
                            let parsed = parse(expression, [x, y, w, h, i]);

                            if (typeof parsed == "number") {
                                for (let j = 0; j < selected.length; j++) {
                                    selected[j].selected = 0;
                                }

                                selected[i].selected = 1;

                                UpdatePhysicalParam(param, parsed);
                            }

                            for (let j = 0; j < selected.length; j++) {
                                selected[j].selected = 1;
                            }
                        }
                    }

                    need_GUIParams_update = 1;
                }
            }
        }
    }

    if (e.altKey) {
        e.preventDefault();
    }

    if (e.altKey && targetElement == "[object HTMLInputElement]") {
        let selected = SelectedObjects;

        if (selected.length == 1) {
            let x = selected[0].pm.x;
            let y = selected[0].pm.y;
            let w = selected[0].pm.w;
            let h = selected[0].pm.h;

            if (x === undefined) {
                x = 0;
            }

            if (y === undefined) {
                y = 0;
            }

            if (w === undefined) {
                w = 0;
            }

            if (h === undefined) {
                h = 0;
            }

            let parsed = parse(targetElement.value, [x, y, w, h, i]);

            if (typeof parsed == "number") {
                targetElement.value = parsed;
            }
        }
    }

    if (e.ctrlKey && e.code == "KeyP") {
        e.preventDefault();

        copyToPermanentClipboard();
    }

    if (e.ctrlKey && e.shiftKey) {
        if (newUpdate) {
            window.open("https://github.com/LisABC/ALEI/raw/main/alei.user.js");
            newUpdate = false;
        }
    }
});

function doTooltip() {
    let tooltip = document.createElement("p");

    tooltip.style.fontSize = "16px";
    tooltip.style.fontFamily = "monospace";
    tooltip.style.color = "#eee";
    tooltip.style.backgroundColor = "#000";
    tooltip.style.padding = "10px";
    tooltip.style.width = "fit-content";
    tooltip.style.borderRadius = "4px";
    tooltip.style.wordBreak = "break-all";
    tooltip.style.position = "absolute";
    tooltip.style.left = "100px";
    tooltip.style.top = "-100px";

    document.body.append(tooltip);

    document.addEventListener("mousemove", e => {
        if (e.target.title) {
            e.target.dataset.title = e.target.title;
            e.target.title = "";
        }

        if (e.target.parentElement.title) {
            e.target.parentElement.dataset.title = e.target.parentElement.title;
            e.target.parentElement.title = "";
        }
        let leftOffset = 150

        if (e.target.dataset.title) {
            let to = e.target.dataset.title.length
            tooltip.style.left = to + leftOffset + e.clientX + 20 + "px";
            tooltip.innerHTML = e.target.dataset.title;

            if (tooltip.getBoundingClientRect().height != 31) {
                tooltip.style.left = to + leftOffset + e.clientX - 20 - tooltip.getBoundingClientRect().width + "px";
            }
        } else if (e.target.parentElement.dataset.title) {
            let to = e.target.parentElement.dataset.title.length
            tooltip.style.left = to + leftOffset + e.clientX + 20 + "px";
            tooltip.style.top = e.clientY + "px";
            tooltip.innerHTML = e.target.parentElement.dataset.title;

            if (tooltip.getBoundingClientRect().height != 31) {
                tooltip.style.left = to + leftOffset + e.clientX - 20 - tooltip.getBoundingClientRect().width + "px";
            }
        } else {
            tooltip.style.left = -100 + leftOffset + "px";
            tooltip.style.top = "-100px";
        }
    });
    aleiLog(DEBUG, "Added tooltip.")
}

function patchDecorUpload() {
    // Allows for multiple uploads.
    let imageLoader = $id("imageLoader");
    // First we make it allow multiple files and remove original event listener.
    imageLoader.setAttribute("multiple", true);
    imageLoader.removeEventListener("change", handleImage);
    // Then we register our own.
    imageLoader.addEventListener("change", function(e) {
        let files = e.target.files;
        NewNote(`ALEI: Will upload ${files.length} bg/decor(s).`, "#2595FF");
        for (let file of files) {
            let arg = {target: {files: [file]}};
            handleImage(arg); // Call original function
        }
    }, false)
}

function setParameter(index, value) {
    let rightParams = document.getElementById("rparams");
    if(rightParams == undefined) return;
    if(rightParams == null) return;

    if(index > 13) {
        let isAllTrigger = SelectedObjects.map(o => (o._class == "trigger"));
        if(isAllTrigger.indexOf(false) !== -1) return;
        function getActionCount(elem) {
            if(elem.isExtended) return elem.pm.totalNumOfActions;
            else return 10;
        }
        let minimumActionCount = Math.min(...SelectedObjects.map(o => getActionCount(o)));
        if(index >= (minimumActionCount * 3 + Trigger_getSeparatorStart(SelectedObjects.length) - 1)) return;
    }

    let actualIndex = 0; // We will bruteforce.
    let i = 0;
    while(i < index) {
        i++;
        actualIndex++;

        if(rightParams.childNodes[actualIndex] == undefined) continue;
        if(rightParams.childNodes[actualIndex].childNodes[1] === undefined) actualIndex++;
    }

    if (actualIndex < rightParams.childNodes.length) {
        rightParams.childNodes[actualIndex].childNodes[1].innerHTML = value;
    }
}

function getSelection() { // DEPRECATED! USE SelectedObjects DIRECTLY!
    return SelectedObjects;
}

function areObjectsOfSameType(objects) {
    let same = 1;

    for (let i = 0; i < objects.length; i++) {
        if (objects[i]._class != objects[0]._class) {
            same = 0;
        }
    }

    return same;
}

function removeSameItems(array) {
    return Array.from(new Set(array));
}

function removeItems(array, items) {
    let copy = JSON.parse(JSON.stringify(array));

    for (let i = 0; i < items.length; i++) {
        copy.splice(copy.indexOf(items[i]), 1);
    }

    return copy;
}

function parameterNamesToIndexes(parameters, objectParameters) {
    let indexes = [];

    for (let i = 0; i < parameters.length; i++) {
        indexes.push(objectParameters.indexOf(parameters[i]));
    }

    return indexes;
}

function getSameParameters(objects) {
    let differentParameters = [];
    let parameters = Object.keys(objects[0].pm);

    for (let i = 0; i < objects.length; i++) {
        for (let j = 0; j < parameters.length; j++) {
            if (objects[i].pm[parameters[j]] != objects[0].pm[parameters[j]]) {
                differentParameters.push(parameters[j]);
            }
        }
    }

    differentParameters = removeSameItems(differentParameters);
    differentParameters = removeItems(parameters, differentParameters);

    return parameterNamesToIndexes(differentParameters, parameters);
}

function toBoolean(str) {
    if (isNaN(Number(str))) {
        return str == "true";
    } else {
        return Boolean(str);
    }
}

const parameterMap = {
    "box": {"m": "box_model"},
    "door": {
        "moving": "bool",
        "vis": "bool"
    },
    "region": {"use_on": "region_activation"},
    "decor": {
        "f": "draw_in_front",
        "model": "decor_model"
    },
    "bg": {
        "s": "bool",
        "f": "draw_in_front",
        "m": "bg_model"
    },
    "water": {"friction": "bool"},
    "trigger": {"enabled": "bool"},
    "timer": {"enabled": "bool"},
    "gun": {
        "command": "team+any",
        "upg": "gun_upgrade",
        "model": "gun_model"
    },
    "barrel": {"model": "barrel_model"},
    "lamp": {"flare": "bool"},
    "vehicle": {"model": "vehicle_model"}
}

function fixParameterValue(name, value, objectType) {
    let fixedValue;

    if (VAL_TABLE[name]) {
        fixedValue = VAL_TABLE[name][value];
    } else {
        if (parameterMap[objectType] && parameterMap[objectType][name]) {
            fixedValue = VAL_TABLE[ parameterMap[objectType][name] ][value];
        }else if (name.slice(0, 8) == "actions_" && name.slice(-5) == "_type") {
            fixedValue = VAL_TABLE["trigger_type"][value];
        }else {
            fixedValue = value;
        }
    }

    return fixedValue;
}

function setSameParameters() {
    let objects = getSelection();

    if (areObjectsOfSameType(objects) && objects.length >= 2) {
        let indexes = getSameParameters(objects);
        let parameters = Object.keys(objects[0].pm);

        for (let i = 0; i < indexes.length; i++) {
            let name = parameters[indexes[i]];
            let value = objects[0].pm[parameters[indexes[i]]];
            let objectType = objects[0]._class;

            setParameter(indexes[i], fixParameterValue(name, value, objectType));
        }
    }
}

function patchANI() {
    let oldAni = ani;
    window.ani = function() {
        let ngpu = need_GUIParams_update;
        oldAni();
        if (ngpu) {
            if (aleiSettings.showSameParameters) setSameParameters();
        }
    }
    aleiLog(DEBUG, "Patched ANI");
}

///////////////////////////////

function updateBoxSplitterSize() {
    let obj = $id("gui_objbox");
    let rect = obj.getBoundingClientRect();
    let style = splitter2.style;
    style.setProperty("width", rect.width);
    style.setProperty("left", rect.x);
    style.setProperty("top", rect.bottom);
}

function addObjBoxResize() {
    let obj = $id("gui_objbox");
    let splitter = document.createElement("div");
    window.splitter2 = splitter;
    let style = splitter.style;
    $id("floattag").appendChild(splitter);

    style.setProperty("position", "absolute");
    style.setProperty("height", "5px");
    style.setProperty("cursor", "s-resize");

    updateBoxSplitterSize();

    let splitterClicking = false;
    splitter.onmousedown = ((e) => {splitterClicking = true});
    ROOT_ELEMENT.addEventListener("mouseup", (e) => {splitterClicking = false});
    ROOT_ELEMENT.addEventListener("mousemove", (e) => {
        if (!splitterClicking) return;

        let new_height = e.clientY - 90;
        obj.style.height = new_height;
        updateBoxSplitterSize();
        ShowHideObjectBox();
        ShowHideObjectBox();
    });
    aleiLog(DEBUG, "Added splitter for object box.");
}

function patch_m_down() {
    let og_mdown = window.m_down;
    window.m_down = function(e) {
        let previousEsLength = parseInt(JSON.stringify(es.length));
        og_mdown(e);

        let ocm = ObjectConnectionMapping;
        let utem = uidToElementMap;
        let addedObjects = [];

        if (es.length > previousEsLength) { // New element is made.
            let element = es[es.length - 1];
            if (!("x" in element.pm)) return;
            // We now have to do job of fixPos, we cannot set fixPos to have it argument-based directly because of scoping
            // So we have to do it ourselves.
            let pm = element.pm;
            let round = function(num) {
                return Math.round(num / GRID_SNAPPING) * GRID_SNAPPING
            }
            pm.x = round(pm.x);
            pm.y = round(pm.y);
            if (element._isresizable) {
                pm.w = round(pm.w);
                pm.h = round(pm.h);
            }
            // OCM mapping.
            if(aleiSettings.ocmEnabled) {
                for(let i = previousEsLength; i < es.length; i++) {
                    ocm[es[i].pm.uid] = {"by": [], "to": []};
                    utem[es[i].pm.uid] = es[i];
                    addedObjects.push(es[i]);
                }
            }
            // Now we just update.
            window.need_GUIParams_update = true;
            UpdateGUIObjectsList();
        }
        for(let obj of addedObjects) __OCM_HandleObject(obj); // I know I don't have to do this but I am careless right now.
    }
}

function ReorderTriggerProperty(result) {
    let execute = result.pm.execute;
    execute = execute ? execute : false;

    delete result.pm.execute;

    let entries = Object.entries(result.pm);
    entries.splice(5, 0, ["execute", execute]);
    result.pm = Object.fromEntries(entries);
}

window.SelectedObjects = [];

function patchEntityClass() {
    function cleanUpSO() {
        setTimeout(cleanUpSO, 5 * 1000);
        // Manually trigger select change if required.
        for(let i = 0; i < SelectedObjects.length; i++) {
            let e = SelectedObjects[i];
            if(!e.selected) {
                e.selectChange(false, true);
            }
        }
    }
    // For some reason, there can be unselected objects in SelectedObjects, still, and sometimes indexes can be off bound, we have to fix it too.
    setTimeout(cleanUpSO, 5 * 1000);

    let og_E = E;
    window.E = function(_class) {
        let result = new og_E(_class);

        // Adding property.
        if(_class == "water") result.pm.attach = -1;
        else if(_class == "decor") result.pm.text = "Hello World!";
        else if(_class == "trigger") {
            ReorderTriggerProperty(result);
        }
        else if(_class == "region") result.pm.uses_timer = false;

        result.fixPos = function() {}; // For proper snapping.
        result.selectChange = function(isSelected, force = false) {
            if((isSelected && (!result.selected || force))) {
                SelectedObjects.push(result);
                result.selected = true;
            } else if(!isSelected && (result.selected || force)) {
                SelectedObjects.splice(SelectedObjects.indexOf(result), 1);
                result.selected = false;
            }
        }

        function ProxySet(_, key, value) {
            if(key == "selected") result.selectChange(value);
            else result[key] = value;
            return true;
        }

        result.Remove = () => { // Better be safe...
            NewNote(`ALEI: This absolutely should not happen, please report to ALEI developers, error: E.Remove got called when it shouldn't be`, `#FF0000`);
            debugger;
        };

        let proxy = new Proxy(result, {
            set: ProxySet
        })
        return proxy;
    }
    aleiLog(DEBUG, "Patched entity.");
}

function PasteFromClipBoard(ClipName) {
    var clipboard = new Object();
    if (sessionStorage[ClipName] == undefined) {
        return false;
    }
    clipboard = unserialize(sessionStorage[ClipName]);
    lcz();
    for (var i = 0; i < es.length; i++)
        if (es[i].exists) {
            if (es[i].selected) {
                ldn('es[' + i + '].selected=false;');
                lnd('es[' + i + '].selected=true;');
                es[i].selected = false;
            }
        } var min_x = 0;
    var max_x = 0;
    var min_y = 0;
    var max_y = 0;
    i = 0;
    var from_obj = es.length;
    while (typeof(clipboard[i]) !== 'undefined') {
        var newparam = es.length;
        ldn('es[' + newparam + '].exists=true;');
        lnd('es[' + newparam + '].exists=false;');
        es[newparam] = new E(clipboard[i]._class);
        for (let param in clipboard[i]) {
            es[newparam][param] = clipboard[i][param];
        }
        if (typeof(es[newparam].pm.x) !== 'undefined')
            if (typeof(es[newparam].pm.y) !== 'undefined') {
                if (i == 0) {
                    min_x = es[newparam].pm.x;
                    min_y = es[newparam].pm.y;
                    max_x = es[newparam].pm.x;
                    max_y = es[newparam].pm.y;
                    if (typeof(es[newparam].pm.w) !== 'undefined')
                        if (typeof(es[newparam].pm.h) !== 'undefined') {
                            min_x += es[newparam].pm.w / 2;
                            max_x += es[newparam].pm.w / 2;
                            min_y += es[newparam].pm.h / 2;
                            max_y += es[newparam].pm.h / 2;
                        }
                } else {
                    min_x = Math.min(min_x, es[newparam].pm.x);
                    min_y = Math.min(min_y, es[newparam].pm.y);
                    max_x = Math.max(max_x, es[newparam].pm.x);
                    max_y = Math.max(max_y, es[newparam].pm.y);
                    if (typeof(es[newparam].pm.w) !== 'undefined')
                        if (typeof(es[newparam].pm.h) !== 'undefined') {
                            max_x = Math.max(max_x, es[newparam].pm.x + es[newparam].pm.w);
                            max_y = Math.max(max_y, es[newparam].pm.y + es[newparam].pm.h);
                        }
                }
            } i++;
    }
    ldn('m_drag_selected=true;');
    ldn('paint_draw_mode=true;');
    ldn('quick_pick_ignore_one_click=true;');
    lnd('m_drag_selected=false;');
    lnd('paint_draw_mode=false;');
    lnd('quick_pick_ignore_one_click=false;');
    ldis = true;
    paint_draw_mode = true;
    quick_pick_ignore_one_click = true;
    lmdrwa = lmwa;
    lmdrwb = lmwb;
    // Original code by Prosu
    let m_pos_x = lmwa;
    let m_pos_y = lmwb;

    m_drag_x = mouse_x;
    m_drag_y = mouse_y;
    let  m_down_x = m_pos_x;
    let m_down_y = m_pos_y;
    var x1 = Math.round((m_pos_x) / GRID_SNAPPING) * GRID_SNAPPING;
    var y1 = Math.round((m_pos_y) / GRID_SNAPPING) * GRID_SNAPPING;
    var lo_x = Math.round((x1 - (min_x + max_x) / 2) / GRID_SNAPPING) * GRID_SNAPPING;
    var lo_y = Math.round((y1 - (min_y + max_y) / 2) / GRID_SNAPPING) * GRID_SNAPPING;

    let ocm = ObjectConnectionMapping;
    let utem = uidToElementMap;

    let addedObjects = [];

    for (var i2 = from_obj; i2 < es.length; i2++) {
        if (typeof(es[i2].pm.uid) !== 'undefined') {
            var old_uid = es[i2].pm.uid;
            es[i2].exists = true;
            es[i2].pm.uid = RandomizeName(es[i2].pm.uid);


            for (var i3 = from_obj; i3 < es.length; i3++) {
                for (let param in es[i3].pm) {
                    es[i3].pm[param] = UUIDR_Replace(es[i3].pm[param], old_uid, es[i2].pm.uid);
                }
            }

            if(aleiSettings.ocmEnabled) {
                ocm[es[i2].pm.uid] = {"by": [], "to": []};
                utem[es[i2].pm.uid] = es[i2];
                addedObjects.push(es[i2]);
            }
        }
        if (typeof(es[i2].pm.x) !== 'undefined')
            if (typeof(es[i2].pm.y) !== 'undefined') {
                lnd('es[' + i2 + '].pm.x=' + es[i2].pm.x + ';');
                lnd('es[' + i2 + '].pm.y=' + es[i2].pm.y + ';');
                es[i2].pm.x += lo_x;
                es[i2].pm.y += lo_y;
                es[i2].fixPos();
                ldn('es[' + i2 + '].pm.x=' + es[i2].pm.x + ';');
                ldn('es[' + i2 + '].pm.y=' + es[i2].pm.y + ';');
            }
    }
    // Again by Prosu
    x1 = Math.round((m_pos_x - m_down_x) / GRID_SNAPPING) * GRID_SNAPPING;
    y1 = Math.round((m_pos_y - m_down_y) / GRID_SNAPPING) * GRID_SNAPPING;
    for (var i = 0; i < es.length; i++) {
        if (es[i]._isphysical && es[i].exists && es[i].selected && (MatchLayer(es[i]) || paint_draw_mode)) {
            es[i].pm.x += x1;
            es[i].pm.y += y1;
        }
    }
    m_down_x += x1;
    m_down_y += y1;
    lfz(false);
    for(let obj of addedObjects) __OCM_HandleObject(obj);
    assignObjectIDs();
    assignObjectPriority();
    window.need_redraw = true;
    window.need_GUIParams_update = true;
    return true;
}

function ServerRequest_handleMapData(mapCode) {
    // Branch of patchServerRequest
    // Made to deal with map source related things.
    aleiLog(DEBUG, "Parsing map source now.");

    const objectKeyValueRegex = /(\w+)=((-?\d+(\.\d+)?)|("[ -~]*")|true|false)/;
    const objectCreationRegex = /q=es\[\d+\]=new E\("(\w+)"\)/;

    let expressions = mapCode.split(";\n");

    let currentElement = null;

    window.es = new Array(); // clear.
    let index = 2; // We skip var q; and es = new Array();
    for (;index < expressions.length; index++) {
        let expression = expressions[index];

        // Skip if it's just only tab or newlines
        if(expression.replaceAll("\n", "").replaceAll("\t", "").length == 0) {continue};

        // Map ID related stuff.
        if (expression.indexOf("mapid = '") != -1) {
            window.mapid = expression.split(" = ")[1].slice(1, -1);
            mapid_field.value = mapid;
            continue;
        }
        else if (expression == "\t\tmapid_field.value = mapid") {continue;}
        else if (expression.indexOf("maprights.innerHTML='") != -1) {
            let rights = expression.split(";")[0].split(".innerHTML=")[1].slice(1, -1);
            maprights.value = rights;
            NewNote(`Map '${mapid}' has been successfully loaded.`, note_good);
            continue
        }
        // Actual mapdata.
        if(expression.indexOf(";q=q.pm;") != -1) { // Creation which is q=es[...]=new E(...);q=q.pm;q.(...)=(...);
            let creation = objectCreationRegex.exec(expression);
            currentElement = new E(creation[1]);
            es[es.length] = currentElement;

            let splt = expression.split(";");
            if (splt.length > 3) {
                // There is supposed to be only 3 ;'s
                // initializing;setting;firstProperty
                // Assuming that server only gives first property and does not send more than 1 in creation line
                aleiLog(WARN, `Expected 3 items, got ${splt.length} - ${splt}`);
                continue;
            }
            expression = splt[2];
        };
        // Key value
        // In format of q.(___)=(___);
        let matchKeyValue = objectKeyValueRegex.exec(expression);

        if (matchKeyValue === null) {
            aleiLog(WARN, `Unable to figure out what kind of code is "${expression}", you MIGHT have issues.`);
            continue;
        }
        let key = matchKeyValue[1];
        let value = matchKeyValue[2].replaceAll("\\/", "/");
        if (value[0] != '"') { // Not a string.
            if (value == "true") value = true;
            else if(value == "false") value = false;
            else if(value.indexOf(".") != -1) value = parseFloat(value);
            else value = parseInt(value);
        } else {
            // Is a string. We just strip quotation marks and fix apostrophes.
            value = value.slice(1, -1).replaceAll("\\'", "'");
        }
        currentElement.pm[key] = value;

    }
    if(aleiSettings.extendedTriggers) parseExtendedTriggers();
}

function handleServerRequestResponse(request, operation, response) {
    if (response.indexOf("var es = new Array();") != -1) {
        window.SelectedObjects = [];
        OCM_LOADED = false;
        ServerRequest_handleMapData(response);
        CreateConnectionMapping();
    }else if (response.indexOf("knownmaps = [") !== -1) {
        window.knownmaps = [];
        for (let map of response.match(/"(.*?)"/g)) {
            knownmaps.push(map.slice(1, -1))
        }
        aleiLog(DEBUG, `Updated knownmaps with ${knownmaps.length} maps`);
    }else {
        aleiLog(DEBUG2, `Evaling for request ${ANSI_YELLOW}"${request}"${ANSI_RESET} with operation of ${ANSI_YELLOW}"${operation}"${ANSI_RESET}: ${response}`)
        try {JS_eval(response);}
        catch(e) {NewNote("Eval error!", note_bad); console.error(e); aleiLog(INFO, `Eval Error from ${request}, for op ${operation} whose response is ${response}`)}
    };
}

function makeRequest(method, url, data) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve({status: 200, response: xhr.response});
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send(data);
    });
}

function updateDecorList() {
    try {
        let list_native = $id("list_native");
        for(let i = 0; i < ALEI_decors.length; i++) {
            let decor = ALEI_decors[i];
            let decor_model = decor[0];
            let decor_name = decor[1];
            let decor_image = decor[2];
            list_native.innerHTML += `
                    <div class="img_option" onClick="CustomImageSelected('${decor_model}', '${decor_name}' )">
                       <div class="imgdiv" style="background:url(${decor_image})"></div>
                       <div>
                         ${decor_name}
                       </div>
                    </div>
                    `
        }
        aleiLog(DEBUG, "Updated decor list.");
    }
    catch(e) {} // We assume we are not in decor list yet.
}

async function ALEI_ServerRequest(request, operation, callback = null) {
    let response = await makeRequest("POST", `e_server.php?a=${request_a}`, request);

    if (response.status != 200) {
        if (operation == 'save') NewNote('Oops! Error occoured during saving. Usually it may be happening due to connection problems. Map will be temporary saved to your computer\'s LocalStorage', note_bad);
        else if (operation == 'load') NewNote('Oops! Error occoured durning loading. Usually it may be happening due to connection problems.', note_bad)
        return;
    }

    try {
        handleServerRequestResponse(request, operation, response.response);
        if (request.indexOf("a=get_images") != -1 && request.indexOf("for_class=decor_model") != -1) {
            updateDecorList();
        }
        window.ImageContext = ImageContext;
        if (operation == 'save' || operation == 'load') {
            changes_made = false;
            if (operation == 'load') {
                need_redraw = true;
                need_GUIParams_update = true;
                ClearUndos();
            }
        }
    } catch (e) {
        console.error(e);
        NewNote('Server responds with unclear message. Looks like one of recent actions wasn\'t successful.', note_bad);
        debugger;
    }

    if (callback != null) {
        callback();
    }
}

let _serverRequestPatched = false;
function patchServerRequest() {
    // This code just exists to prevent logging more than once
    if (_serverRequestPatched) return;
    _serverRequestPatched = true;
    // Patches ServerRequest function.
    // vanilla ServerRequest function literally eval()'s every single thing that server sends.
    // Which opens up to expected vulnerabilities.
    // Hopefully in future, ALEI will completely get rid of eval.
    window.ServerRequest = ALEI_ServerRequest;
    aleiLog(DEBUG, "Patched ServerRequest");
}

window.eval = function(code) { // Temporarily overriding eval so we can patch ServerRequest as early as possible
    if (window.ServerRequest !== undefined) { // ServerRequest is defined.
        handleServerRequestResponse(null, null, code);
        patchServerRequest();
        // We are pretty much done, we have patched ServerRequest, so just roll with old eval.
        // Oh and a note for myself incase i confuse myself: vanilla ServerRequest is synchronous
        window.eval = JS_eval;
    } else {
        // Is not defined.
        // Is this even possible in normal circumstances?
        console.log(code);
        debugger;
    }
};

function assignObjectIDs() {
    // TODO: Refactor
    let idmap = {};
    for (let element of es) {
        if (!element.exists) continue;
        if (idmap[element._class] === undefined) idmap[element._class] = -1;

        idmap[element._class] += 1;
        element.aleiID = idmap[element._class];
    }
}
function assignObjectPriority() {
    // TODO: Refactor
    for (let element of es) {
        if (!element.exists) continue;
        if(element.aleiPriority == undefined) element.aleiPriority = 1;
    }
}

let propertyAppliedObjects = [];
function AssignObjectProperties(e) {
    if(e.aleiID == undefined) assignObjectIDs();
    if(e.aleiPriority == undefined) assignObjectPriority();

    if(propertyAppliedObjects.indexOf(e) == -1) propertyAppliedObjects.push(e);

    let entries = Object.entries(e.pm);
    entries.splice(0, 0, ["__id", e.aleiID]);

    if(["bg", "decor"].indexOf(e._class) !== -1) {
        entries.splice(1, 0, ["__priority", e.aleiPriority]);
    };

    e.pm = Object.fromEntries(entries);
}

let sortRequired = false;
function SortObjectsByPriority() {
    function getPriority(a, b) {
        return b.aleiPriority - a.aleiPriority;
    }
    window.es = es.sort(getPriority);
}


function ApplyObjectProperties(e) {
    if(["bg", "decor"].indexOf(e._class) == -1) return;
    if(e.aleiPriority !== e.pm.__priority) {
        e.aleiPriority = e.pm.__priority;
        sortRequired = true;

        // TODO: How can I force update GUI object list?
        // UpdateGUIObjectsList does not do it.
    }
}

function RemoveObjectProperties(e) {
    delete e.pm.__id;
    delete e.pm.__priority;
}

function patchUpdateGUIParams() {
    let origUGP = window.UpdateGUIParams;
    let origGPV = window.GenParamVal;

    window.UpdateGUIParams = function() {

        window.GenParamVal = function(base, value) {
            let resp = origGPV(base, value);

            if (base == "nochange") {
                resp = `${value}`.replaceAll('"', "&quot;");
                resp = `<pvalue real="${resp}">- not used -</pvalue>`
            }
            return resp;
        }

        // Represents all the selected entity class.
        let selected = SelectedObjects;
        selected.filter(e => e._class == "trigger").map(e => ReorderTriggerProperty(e));

        //selected.map(o => ApplyObjectProperties(o));

        for(let element of propertyAppliedObjects) {
            if(selected.indexOf(element) !== -1) continue;
            RemoveObjectProperties(element);
            propertyAppliedObjects.splice(propertyAppliedObjects.indexOf(element), 1);
        }
        selected.map(o => AssignObjectProperties(o));

        // This code handles transition between timer and trigger values depending on region's "executes" parameter
        if((selected.length == 1) && (selected[0]._class == "region")) {
            if([true, "true"].indexOf(selected[0].pm.uses_timer) != -1) {
                param_type[REGION_EXECUTE_PARAM_ID][1] = "timer+none";
            } else {
                param_type[REGION_EXECUTE_PARAM_ID][1] = "trigger+none";
            }
        }

        let toCall = origUGP;
        if(!aleiSettings.extendedTriggers) {
            let sep = Trigger_getSeparatorStart(selected.length);
            let fn = origUGP.toString();
            fn = fn.replace("i >= 4 && (i-4)", `i >= ${sep} && (i-${sep})`);
            toCall = eval(`(${fn})`);
        }
        toCall();
        addAdditionalButtons();

        window.GenParamVal = origGPV;
        if(sortRequired) SortObjectsByPriority();
    }
    aleiLog(DEBUG, "Patched UpdateGUIParams");
}

function patchEvalSet() {
    window.EvalSet = function(key, value) {
        // No evaling. Death to eval! (except for when i want to use it...)
        window[key] = value;
        UpdateTools();
    }
    aleiLog(DEBUG, "Patched EvalSet");
}

window.ALEI_settingsMenu = undefined;


/*
TODO: Text field for those.
let aleiSettings = {
    triggerEditTextSize:readStorage("ALEI_EditTextSize",      "12px",  (val) => val + "px"  ),
    starsImage:         readStorage("ALEI_StarImage",    "stars2.jpg", (val) => val         ),
}
*/

function createALEISettingsMenu() {
    let mainWindow = document.createElement("div");
    mainWindow.setAttribute("class", "mrpopup");

    let title = document.createElement("div");
    title.innerHTML = "ALEI Setting";
    title.setAttribute("id", "mrtitle"); // Eric, what is this crap ?
    mainWindow.appendChild(title);


    let box = document.createElement("div");
    box.setAttribute("id", "mrbox");
    mainWindow.appendChild(box);

    // Style class.
    let aleiStyles = document.createElement("style");
    aleiStyles.innerHTML = `
    .ALEI_settingMenuText {
        font-size: 14px;
        width: 150px;
        height: 20px;
        background-color: #476082;
        color: #bfcad9;
        border-radius: 4px;
        text-align: center;
        display: inline-block;
    }
    .ALEI_settingsMenuButton {
        background-color: #26354a;
        color: #c1c9d3;
        border-radius: 5px;
        border: 1px solid #26354a;
        width: 80px;
        height: 20px;
        font-size: 14px;
        text-align: center;
        display: inline-block;
        margin-right: 4px;
    }
    .ALEI_settingsMenuButton:hover {
        background-color: #596a83;
        color: #f5faff;
    }
    .ALEI_settingMenuButtonClicked {
        background-color: #91a5c1;
        color: #fbfbfb;
    }
    `
    document.head.appendChild(aleiStyles);

    // Convenience functions.
    let usableHeight = 240;
    let currentHeight = 300;

    function addText(text, requiresRestart = false) {
        let div = document.createElement("div");
        div.innerHTML = text;
        if (requiresRestart) {
            div.style.setProperty("color", "#FFFF00");
        }
        div.setAttribute("class", "ALEI_settingMenuText");
        box.innerHTML += "<br>";
        box.innerHTML += div.outerHTML;

        usableHeight -= 20;
        if(usableHeight <= 0) {
            currentHeight += 20;
            usableHeight += 20;
            box.style.height = `${currentHeight}px`;
        }
    }
    function registerButton(general, values, key) {
        aleiSettingButtonsMap[general] = [values, aleiSettings, key];
    }
    function newRegisterButton(general, values, dict, key) {
        aleiSettingButtonsMap[general] = [values, dict, key];
    }
    function addButton(display, identifier, callback, style = "") {
        aleiButtonClicks["setting_" + identifier] = callback;

        let button = document.createElement("input");
        button.setAttribute("type", "button");
        button.setAttribute("id", "ALEI_" + identifier);
        button.setAttribute("value", display);
        button.setAttribute("onclick", `aleiButtonClicks['setting_${identifier}'](); ALEI_settingUpdateButtons(); triggerActionsPreventError();`);
        button.setAttribute("class", "ALEI_settingsMenuButton");
        button.setAttribute("style", style);

        box.innerHTML += button.outerHTML;
    }
    function addBinaryOption(truthyVal, falsyVal, storage, key, internalName, callback = () => {}) {
        function _apply(val) {
            writeStorage(storage, val);
            aleiSettings[key] = val;
        }
        addButton(truthyVal, `${internalName}_true`, () => {_apply(true); callback(true)});
        addButton(falsyVal, `${internalName}_false`, () => {_apply(false); callback(false)});
    }

    // Log level.
    function logApply(val) {
        writeStorage("ALEI_LogLevel", val);
        aleiSettings.logLevel = val;
    }
    box.innerHTML += "NOTE: Settings in yellow text requires page refresh to be applied.<br>";
    addButton("Clear Backup", "clearMapBackups", () => {
        let removed = [];
        for (let key of Object.keys(localStorage)) {
            if(!(key.slice(0, "pb2_map".length) == "pb2_map")) continue;
            removed.push(key);
            localStorage.removeItem(key);
        }
        NewNote(`ALEI: Cleared backup, removed total ${removed.length} backups.`, "#00FFFF");
        aleiLog(DEBUG2, `Removed backup of: ${removed}`);
    }, "width: 100px");
    box.innerHTML += "<br>";

    let identifier = 0;

    function MakeSettingButtons(storage, dict, dictKey, valueMap) {
        identifier++;
        newRegisterButton(
            identifier,
            valueMap.map(o => o[1]),
            dict,
            dictKey
        );
        function _apply(value) {
            writeStorage(storage, value);
            dict[dictKey] = value;
        }
        for(let map of valueMap) {
            addButton(map[0], `${identifier}_${map[1]}`, () => _apply(map[1]));
        }
    }

    window.ALEIAPI.settings = {};
    window.ALEIAPI.settings.addText = addText;
    window.ALEIAPI.settings.createButtons = MakeSettingButtons;

    function aleiMakeSettingButtons(text, requireRefresh, storage, dictKey, valueMap) {
        addText(text, requireRefresh);
        MakeSettingButtons(storage, aleiSettings, dictKey, valueMap);
    }

    let PR_ShowHide = [["Show", true], ["Hide", false]];

    aleiMakeSettingButtons(
        "Log Level:",
        false,
        "ALEI_LogLevel", // Storage key.
        "logLevel", // Dictionary key.
        [
            ["INFO", 0], // Value maps.
            ["DEBUG", 1],
            ["VERBOSE", 2]
        ]
    )

    aleiMakeSettingButtons(
        "Action IDs:",
        true,
        "ALEI_ShowTriggerIDs",
        "showTriggerIDs",
        PR_ShowHide
    );

    aleiMakeSettingButtons(
        "Tooltips:",
        false,
        "ALEI_ShowTooltips",
        "enableTooltips",
        PR_ShowHide
    )

    // Object ID.
    /*registerButton("showids", [true, false], "showIDs");
    addText("Object IDs:")
    addBinaryOption("Show", "Hide", "ALEI_ShowIDs", "showIDs", "showids")
*/

    /*aleiMakeSettingButtons(
        "Z-Index:",
        false,
        "ALEI_ShowZIndex",
        "showZIndex",
        PR_ShowHide
    );*/

    aleiMakeSettingButtons(
        "Same Parameters:",
        false,
        "ALEI_ShowSameParameters",
        "showSameParameters",
        PR_ShowHide
    );

    // Black theme.
    registerButton("blackTheme", [true, false], "blackTheme");
    addText("Black theme:", false);
    addBinaryOption("Yes", "No", "ALEI_BlackTheme", "blackTheme", "blackTheme", (status) => {
        if(status) blackTheme()
        else UndoBlackTheme();
    });

    aleiMakeSettingButtons(
        "Grid by snap:",
        false,
        "ALEI_gridBasedOnSnapping",
        "gridBasedOnSnapping",
        [["Yes", true], ["No", false]]
    );

    // Render object names
    registerButton("showObjectNames", [true, false], "renderObjectNames");
    addText("Show object names: ");
    addBinaryOption("Yes", "No", "ALEI_RenderObjectNames", "renderObjectNames", "showObjectNames", (status) => ALEI_UpdateNameRenderSetting(status));

    // Remap UID
    registerButton("remapUID", [true, false], "rematchUID");
    addText("Remap UID: ");
    addBinaryOption("Enabled", "Disabled", "ALEI_RemapUID", "rematchUID", "remapUID", (status) => ALEI_UpdateRematchUIDSetting(status));

    aleiMakeSettingButtons(
        "Extended triggers:",
        false,
        "ALEI_ExtendedTriggersEnabled",
        "extendedTriggers",
        [["Enabled", true], ["Disabled", false]]
    );

    aleiMakeSettingButtons(
        "Ordered Naming:",
        true,
        "ALEI_orderedNaming",
        "orderedNaming",
        [["Yes (Slow)", true], ["No (Fast)", false]]
    );

    aleiMakeSettingButtons(
        "Custom Renderer:",
        true,
        "ALEI_Renderer_Enabled",
        "customRenderer",
        [["Enabled", true], ["Disabled", false]]
    );

    window.ALEI_settingsMenu = mainWindow;
    document.body.appendChild(mainWindow);
    ALEI_settingUpdateButtons();
    aleiLog(DEBUG, "Created settings window.");
}

let aleiSettingButtonsMap = {}

window.ALEI_settingUpdateButtons = () => {
    let defaultClass = "ALEI_settingsMenuButton";
    let clickedClass = "ALEI_settingsMenuButton ALEI_settingMenuButtonClicked";

    for (let entry of Object.entries(aleiSettingButtonsMap)) {
        let identity = entry[0];
        let values = entry[1][0];
        let dict = entry[1][1];
        let key = entry[1][2];

        let currentVal = dict[key];
        for (let value of values) {
            $query(`#ALEI_${identity}_${value}`).setAttribute("class", defaultClass);
        }
        $query(`#ALEI_${identity}_${currentVal}`).setAttribute("class", clickedClass);
    }
}


function showSettings() {
    if (ALEI_settingsMenu === undefined) createALEISettingsMenu();

    mrdimlights.style.display = 'block';
    ALEI_settingsMenu.style.display = 'block';
    dim_undo = "ALEI_settingsMenu.style.display = 'none'";
};

function patchTeamList() {
    for (let entry of Object.entries(VAL_TABLE["team"])) {
        let teamID = parseInt(entry[0]);
        let teamName = entry[1];

        if (teamID < 0) {
            teamName = teamName.replace("(no friendly fire)", "(No collision, Yes friendly fire)")
            VAL_TABLE["team"][teamID] = teamName;
        }

        if (teamID === -1) continue;
        VAL_TABLE["team+any"][teamID] = teamName;
    }
    aleiLog(DEBUG, "Edited team list..");
}

function addProjectileModels() {
    let projectileModels = VAL_TABLE["ALEI_projectileModels"] = {
        1: "https://static.miraheze.org/plazmaburstwiki/6/6a/Lazer_1.png",
        2: "https://static.miraheze.org/plazmaburstwiki/a/ae/Lazer_2.png",
        3: "https://static.miraheze.org/plazmaburstwiki/0/06/Lazer_3.png",
        4: "https://static.miraheze.org/plazmaburstwiki/d/de/Lazer_4.png",
        5: "https://static.miraheze.org/plazmaburstwiki/8/8f/Lazer_5.png",
        6: "https://static.miraheze.org/plazmaburstwiki/a/a0/Lazer_6.png",
        7: "https://static.miraheze.org/plazmaburstwiki/7/71/Lazer_7.png",
        8: "https://static.miraheze.org/plazmaburstwiki/c/c6/Lazer_8.png",
        9: "https://static.miraheze.org/plazmaburstwiki/d/d2/Lazer_9.png",
        10: "https://static.miraheze.org/plazmaburstwiki/5/5b/Lazer_10.png",
        11: "https://static.miraheze.org/plazmaburstwiki/d/d2/Lazer_11.png",
        12: "https://static.miraheze.org/plazmaburstwiki/2/2d/Lazer_12.png",
        13: "https://static.miraheze.org/plazmaburstwiki/b/be/Lazer_13.png",
        14: "https://static.miraheze.org/plazmaburstwiki/1/14/Lazer_14.png",
        15: "", // Empty projectile.
        16: "https://static.miraheze.org/plazmaburstwiki/7/7f/Lazer_16.png",
        17: "https://static.miraheze.org/plazmaburstwiki/3/31/Lazer_17.png",
        18: "https://static.miraheze.org/plazmaburstwiki/8/89/Lazer_18.png",
        19: "https://static.miraheze.org/plazmaburstwiki/f/fe/Lazer_19.png",
        20: "https://static.miraheze.org/plazmaburstwiki/1/1a/Lazer_20.png",
        21: "https://static.miraheze.org/plazmaburstwiki/4/42/Lazer_21.png",
        22: "https://static.miraheze.org/plazmaburstwiki/c/c0/Lazer_22.png",
        23: "https://static.miraheze.org/plazmaburstwiki/d/d9/Lazer_23.png",
        24: "https://static.miraheze.org/plazmaburstwiki/f/f5/Lazer_24.png",
        25: "https://static.miraheze.org/plazmaburstwiki/7/7c/Lazer_25.png",
        26: "https://static.miraheze.org/plazmaburstwiki/a/a7/Lazer_26.png",
        27: "https://static.miraheze.org/plazmaburstwiki/3/30/Lazer_27.png",
        28: "https://static.miraheze.org/plazmaburstwiki/3/3a/Lazer_28.png",
        29: "https://static.miraheze.org/plazmaburstwiki/9/90/Lazer_29.png",
        30: "https://static.miraheze.org/plazmaburstwiki/2/23/Lazer_30.png",
        31: "https://static.miraheze.org/plazmaburstwiki/3/3a/Lazer_31.png",
        32: "https://static.miraheze.org/plazmaburstwiki/f/f0/Lazer_32.png",
        33: "https://static.miraheze.org/plazmaburstwiki/0/0d/Lazer_33.png",
        34: "https://static.miraheze.org/plazmaburstwiki/c/c8/Lazer_34.png",
        35: "https://static.miraheze.org/plazmaburstwiki/3/38/Lazer_35.png",
        36: "https://static.miraheze.org/plazmaburstwiki/6/6d/Lazer_36.png",
        37: "https://static.miraheze.org/plazmaburstwiki/a/a9/Lazer_37.png",
        38: "https://static.miraheze.org/plazmaburstwiki/e/e7/Lazer_38.png",
        39: "https://static.miraheze.org/plazmaburstwiki/6/6c/Lazer_39.png",
        40: "https://static.miraheze.org/plazmaburstwiki/d/d4/Lazer_40.png",
        41: "https://static.miraheze.org/plazmaburstwiki/5/5d/Lazer_41.png",
        42: "https://static.miraheze.org/plazmaburstwiki/9/9d/Lazer_42.png",
        43: "https://static.miraheze.org/plazmaburstwiki/7/79/Lazer_43.png",
        44: "https://static.miraheze.org/plazmaburstwiki/6/6d/Lazer_44.png",
        45: "https://static.miraheze.org/plazmaburstwiki/4/44/Lazer_45.png",
        46: "https://static.miraheze.org/plazmaburstwiki/3/3b/Lazer_46.png",
        47: "https://static.miraheze.org/plazmaburstwiki/8/84/Lazer_47.png",
        48: "https://static.miraheze.org/plazmaburstwiki/7/75/Lazer_48.png",
        49: "https://static.miraheze.org/plazmaburstwiki/0/08/Lazer_49.png",
        50: "https://static.miraheze.org/plazmaburstwiki/4/41/Lazer_50.png",
        51: "https://static.miraheze.org/plazmaburstwiki/9/92/Lazer_51.png",
        52: "https://static.miraheze.org/plazmaburstwiki/9/92/Lazer_52.png",
        53: "https://static.miraheze.org/plazmaburstwiki/7/70/Lazer_53.png",
        54: "https://static.miraheze.org/plazmaburstwiki/e/ee/Lazer_54.png",
        55: "https://static.miraheze.org/plazmaburstwiki/d/d1/Lazer_55.png"
    };
    for (let i = 1; i < 56; i++) {
        projectileModels[i] = `<img src=\'${projectileModels[i]}\' style=\'width: 60px; height: 20px\'/>`;
    }
    aleiLog(DEBUG, "Loaded projectile models.");
}

function patchSpecialValue() {
    let _OG = window.special_value;
    window.special_value = (base, value) => {
        if (["ALEI_projectileModels"].indexOf(base) !== -1) {
            let returning = VAL_TABLE[base][value];
            if (returning === undefined) return ERROR_VALUE;
            else return returning;
        } else if(base == "trigger+none") { // I actually do not have to do this, but i will do it to get rid of annoyance
            if(value == -1) return VAL_TABLE["trigger+none"][-1];
            return special_value("trigger", value);
        }else if(base == "timer+none") {
            if(value == -1) return VAL_TABLE["timer+none"][-1];
            return special_value("timer", value);
        }else return _OG(base, value);
    }
    aleiLog(DEBUG, "Patched SpecialValue");
}

function notifyUpdate(version) {
    newUpdate = 1;

    aleiLog(INFO, `New update: ${version}`);
    NewNote(`ALEI: There is new update: ${version}, you are currently in ${GM_info.script.version}<br>Press Ctrl + Shift to update`, "#FFFFFF");
}

function notifyIfTheresUpdate(script) {
    let lines = script.split("\n");
    let version;
    for(let i = 0; i < lines.length; i++) {
        let line = lines[i];
        if(line.indexOf("@version") == -1) continue;

        let parts = line.split(" ");
        version = parts[parts.length - 1];
        break;
    }

    let latestVersion = parseInt(version.replaceAll(".", ""));
    let currentVersion = parseInt(GM_info.script.version.replaceAll(".", ""));

    if(latestVersion > currentVersion) return notifyUpdate(version);

    aleiLog(INFO, `REMOTE: ${version}, LOCAL: ${GM_info.script.version} => No update detected.`);
}

async function checkForUpdates() {
    let resp = await GM.xmlHttpRequest({  url: GM_info.script.updateURL  }).catch(e => console.error(e));
    notifyIfTheresUpdate(resp.responseText);
}

function ALEI_DoWorldScale() {
    var newscale = prompt('Multiply selection size by % (percents)', 100);
    if (newscale == null || newscale == 100) {} else {
        var factor = Math.floor(newscale) / 100;
        {
            let snappingScript = `/GRID_SNAPPING)*GRID_SNAPPING;`
            var roundwell = true;
            lcz();
            for (i = 0; i < es.length; i++)
                if (es[i].exists)
                    if (es[i].selected)
                        if (MatchLayer(es[i])) {
                            if (es[i].pm.w != undefined) {
                                ldn('es[' + i + '].pm.w=Math.round(es[' + i + '].pm.w*' + factor + snappingScript);
                                lnd('es[' + i + '].pm.w=' + es[i].pm.w + ';');
                                if (es[i].pm.w * factor != Math.round(es[i].pm.w * factor / GRID_SNAPPING) * GRID_SNAPPING)
                                    roundwell = false;
                            }
                            if (es[i].pm.h != undefined) {
                                ldn('es[' + i + '].pm.h=Math.round(es[' + i + '].pm.h*' + factor + snappingScript);
                                lnd('es[' + i + '].pm.h=' + es[i].pm.h + ';');
                                if (es[i].pm.h * factor != Math.round(es[i].pm.h * factor / GRID_SNAPPING) * GRID_SNAPPING)
                                    roundwell = false;
                            }
                            if (es[i].pm.x != undefined) {
                                ldn('es[' + i + '].pm.x=Math.round(es[' + i + '].pm.x*' + factor + snappingScript);
                                lnd('es[' + i + '].pm.x=' + es[i].pm.x + ';');
                                if (es[i].pm.x * factor != Math.round(es[i].pm.x * factor / GRID_SNAPPING) * GRID_SNAPPING)
                                    roundwell = false;
                            }
                            if (es[i].pm.y != undefined) {
                                ldn('es[' + i + '].pm.y=Math.round(es[' + i + '].pm.y*' + factor + snappingScript);
                                lnd('es[' + i + '].pm.y=' + es[i].pm.y + ';');
                                if (es[i].pm.y * factor != Math.round(es[i].pm.y * factor / GRID_SNAPPING) * GRID_SNAPPING)
                                    roundwell = false;
                            }
                        }
            lfz(true);
            NewNote('Operation complete:<br><br>Selected objects scaled by ' + factor + ' (' + newscale + '% of original size)', note_passive);
            if (!roundwell)
                NewNote('Note: Position and/or dimensions of some objects were not scaled properly due to Level Editor rounding rules', note_neutral);
            need_GUIParams_update = true;
            need_redraw = true;
            UpdateTools();
        }
    }
}
function patchPercentageTool() {
    window.DoWorldScale = ALEI_DoWorldScale;
    aleiLog(DEBUG, "Patched percentage tool");
}

function _encodeXMLChars(value) {
    return value.replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;")
}

function patchCompileTrigger() {
    let _og = window.CompileTrigger;

    window.CompileTrigger = () => {
        let result = _og();
        let selected = SelectedObjects;
        for (let i = 0; i < selected.length; i++) {
            let obj = selected[i];
            let keys = Object.keys(obj.pm);

            for (let j = 0; j < keys.length; j++) {
                if (typeof obj.pm[keys[j]] == "string") {
                    obj.pm[keys[j]] = _encodeXMLChars(obj.pm[keys[j]]);
                }
            }
        }
        return result;
    }
    aleiLog(DEBUG, "Patched CompileTrigger");
}

function addPasteFromPermanentClipboard() {
    window.pasteFromPermanentClipboard = pasteFromPermanentClipboard;
}

let selectedTriggerActions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let hoveredTriggerAction = -1;
let triggerActionsClipboard = [];

function getTriggerActionElements() {
    let arr = [];
    let elems = document.getElementsByClassName("p_i");
    let i = 7;

    for (; i < elems.length; i++) {
        arr.push(elems[i].childNodes[0]);
    }

    return arr;
}

function addEventListeners() {
    let elems = getTriggerActionElements();

    for (let i = 0; i < elems.length; i++) {
        let elem = elems[i];

        elem.onmousedown = function() {
            selectedTriggerActions[Math.floor(i / 3)] ^= 1;
            updateTriggerActionElements();
        }

        elem.onmouseenter = function() {
            hoveredTriggerAction = Math.floor(i / 3);
            updateTriggerActionElements();
        }

        elem.onmouseleave = function() {
            hoveredTriggerAction = -1;
            updateTriggerActionElements();
        }
    }
}

function updateTriggerActionElements() {
    let elems = getTriggerActionElements();

    // TODO: Make those colors not hardcoded, prolly never will do.
    for (let i = 0; i < 10; i++) {
        // Not selected
        let color = "";

        // Selected.
        if (selectedTriggerActions[i]) {
            color = "rgb(45, 65, 95)";
            if (THEME != 0) color = "rgb(27, 27, 27)"; // rgb(37, 37, 37)
        }

        elems[i * 3 + 0].style.backgroundColor = color;
        elems[i * 3 + 1].style.backgroundColor = color;
        elems[i * 3 + 2].style.backgroundColor = color;
    }

    // Hover.
    if (hoveredTriggerAction != -1) {
        if (!selectedTriggerActions[hoveredTriggerAction]) {
            let color = "rgb(65, 85, 130)";

            if (THEME != 0) color = "rgb(47, 47, 47)"

            elems[hoveredTriggerAction * 3 + 0].style.backgroundColor = color;
            elems[hoveredTriggerAction * 3 + 1].style.backgroundColor = color;
            elems[hoveredTriggerAction * 3 + 2].style.backgroundColor = color;
        }
    }
}

function isOnlyTriggerSelected() {
    let result = 0;
    let selection = getSelection();

    if (selection.length == 1 && selection[0]._class == "trigger") {
        result = 1;
    }

    return result;
}

function getTriggerActions() {
    edit_triggers_as_text = 1;

    UpdateGUIParams();

    let textarea = document.getElementById("opcode_field");
    let arr = textarea.value.split("\n").slice(4);

    while (arr.length < 10) {
        arr.push("");
    }

    edit_triggers_as_text = 0;
    UpdateGUIParams();

    return arr;
}

function copyTriggerActions() {
    let actions = getTriggerActions();

    triggerActionsClipboard = [];

    for (let i = 0; i < 10; i++) {
        if (selectedTriggerActions[i]) {
            triggerActionsClipboard.push(actions[i]);
        }
    }
}

function isNothingSelected() {
    return !selectedTriggerActions.includes(1);
}

function isOnlyOneTriggerActionSelected() {
    return selectedTriggerActions.indexOf(1) == selectedTriggerActions.lastIndexOf(1) && !isNothingSelected();
}

function getSelectedTriggerAction() {
    return selectedTriggerActions.indexOf(1);
}

function getTriggerInfo() {
    edit_triggers_as_text = 1;
    UpdateGUIParams();

    let textarea = document.getElementById("opcode_field");
    let arr = textarea.value.split("\n").slice(0, 3);

    return arr;
}

function pasteTriggerActions() {
    // TODO: Make this bit more specific
    // As in, if i copy 2 actions, and i select another 2 actions, it should paste to those 2 actions i selected
    // And not add to end of it.
    let actions = getTriggerActions();
    let index = getSelectedTriggerAction();
    let clipboard = triggerActionsClipboard.join("\n");
    let info = getTriggerInfo();

    edit_triggers_as_text = 1;
    UpdateGUIParams();

    if (isNothingSelected()) { // Adds action at end of no action was selected.
        index = actions.length - 1;
        actions[index] = actions[index] + "\n" + clipboard;
    }

    if (isOnlyOneTriggerActionSelected()) { // Adds action before the action that was selected.
        actions[index] = clipboard + "\n" + actions[index];
    }

    let textarea = document.getElementById("opcode_field");

    textarea.value = info.concat(actions).join("\n");

    CompileTrigger();

    edit_triggers_as_text = 0;
    UpdateGUIParams();
}

function deleteTriggerActions() {
    let actions = getTriggerActions();
    let info = getTriggerInfo();

    edit_triggers_as_text = 1;
    UpdateGUIParams();

    for (let i = 0; i < 10; i++) {
        if (selectedTriggerActions[i]) {
            actions[i] = "";
        }
    }

    let textarea = document.getElementById("opcode_field");

    textarea.value = info.concat(actions).join("\n");

    CompileTrigger();

    edit_triggers_as_text = 0;
    UpdateGUIParams();
}

function reverseTriggerActions() {
    let actions1 = getTriggerActions();
    let actions2 = [];
    let indexes = [];
    let info = getTriggerInfo();

    edit_triggers_as_text = 1;
    UpdateGUIParams();

    for (let i = 0; i < 10; i++) {
        if (selectedTriggerActions[i]) {
            actions2.push(actions1[i]);
            indexes.push(i);
        }
    }

    indexes.reverse();

    for (let i = 0; i < actions2.length; i++) {
        let index = indexes[i];
        let action = actions2[i];

        actions1[index] = action;
    }

    let textarea = document.getElementById("opcode_field");

    textarea.value = info.concat(actions1).join("\n");

    displayOperationCompleteNotes = false;
    CompileTrigger();
    displayOperationCompleteNotes = true;
    NewNote("Reversed actions.", "#FFFFFF");

    edit_triggers_as_text = 0;
    UpdateGUIParams();
}

function unselectTriggerActions() {
    selectedTriggerActions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    hoveredTriggerAction = -1;
    updateTriggerActionElements();
}

window.triggerActionsPreventError = () => {
    selectedTriggerActions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    hoveredTriggerAction = -1;
    UpdateGUIParams();
}

function patchClipboardFunctions() {
    let old_CopyToClipBoard = CopyToClipBoard;
    let old_PasteFromClipBoard = PasteFromClipBoard;
    let old_DeleteSelection = DeleteSelection;
    let old_UpdateGUIParams = UpdateGUIParams;
    let old_DO_UNDO = DO_UNDO;
    let old_DO_REDO = DO_REDO;

    window.CopyToClipBoard = function(param) {
        if (isNothingSelected()) {
            let result = old_CopyToClipBoard(param);
            triggerActionsClipboard = [];
            return result;
        } else {
            copyTriggerActions();
            unselectTriggerActions();
            return true;
        }
    }

    window.PasteFromClipBoard = function(param) {
        if (triggerActionsClipboard.length == 0) {
            let result = old_PasteFromClipBoard(param);
            UpdateGUIParams();
            return result;
        } else {
            displayOperationCompleteNotes = false;
            pasteTriggerActions();
            unselectTriggerActions();
            displayOperationCompleteNotes = true;
            return true;
        }
    }

    window.DeleteSelection = function() {
        if (isNothingSelected()) {
            old_DeleteSelection();
        } else {
            displayOperationCompleteNotes = false;
            deleteTriggerActions();
            unselectTriggerActions();
            NewNote("Deleted trigger actions.", "#FFFFFF");
            displayOperationCompleteNotes = true;
        }
    }

    window.UpdateGUIParams = function() {
        old_UpdateGUIParams();

        if (!isOnlyTriggerSelected()) {
            selectedTriggerActions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            hoveredTriggerAction = -1;
        } else if (!edit_triggers_as_text) {
            addEventListeners();
            updateTriggerActionElements();
        }
    }

    window.DO_UNDO = function() {
        try {
            old_DO_UNDO();
        } catch (err) {
            NewNote("Can't undo action.", note_bad);
        }
    }

    window.DO_REDO = function() {
        try {
            old_DO_REDO();
        } catch (err) {
            NewNote("Can't redo action.", note_bad);
        }
    }

    window.triggerActionsPreventError = triggerActionsPreventError;
    aleiLog(DEBUG, "Patched clipboard related functions.");
}

function patchDrawGrid() {
    let old_lg = lg;

    window.lg = function(param1, param2) {
        if(aleiSettings.gridBasedOnSnapping) {
            old_lg(param1 * (GRID_SNAPPING / 10), Math.min(param2 * Math.max(GRID_SNAPPING / 10, 1), 1));
        } else {
            old_lg(param1, param2)
        }
    }
    aleiLog(DEBUG, "Patched LG");
}

function patchNewNote() {
    let old = NewNote;
    window.NewNote = (text, color) => {
        if (displayOperationCompleteNotes) return old(text, color);
        if (text.slice(0, "Operation complete:<br><br>".length) != "Operation complete:<br><br>") return old(text, color);
    }
}

/**
 * Trigger_getSeparatorStart(selectionCount) gives number which determines where does trigger's separator line starts from.
 * This is used for fixIndex and PatchGUIParams;
*/
function Trigger_getSeparatorStart(selectionCount) {
    let startSeparatorFrom = 6; // Name + X + Y + Max Calls + Enabled + Executes Directly + ID
    return startSeparatorFrom;
}

/**
 *  extendTriggerList() is responsible for patching many of the original functions to support the
 *  implementation of extended triggers.
 *
 *  Extended triggers are triggers that can hold more than 10 trigger actions, and is compatible with the vanilla ALE.
 *  They are implemented similar to a linked list, with the main extended trigger pointing to the next trigger via the
 *  10th trigger action.
 *
 *  View addTriggerActionCount to see what unique properties an extended trigger has (class invariant).
 *  View SaveThisMap to see the structe of the linked list.
 */
function extendTriggerList() {

    /** Modifies the original UpdateGUIParams to provide support for trigger extension.
    */
    function newUpdateGUIParams() {
        // Get current GUI scroll percentage. This is so we can reset the GUI scroll percentage after reupdating the GUI.
        let guiHTMLElement = document.getElementById("rparams");
        let amountToScroll = 0;
        if(guiHTMLElement){
            amountToScroll = guiHTMLElement.scrollTop;
        }

        current_gui_params = new Array();
        unfocusedit();
        ff.style.display = 'none';
        var str = '';
        var selects = 0;
        var sel_by_class = new Array();
        for (i = 0; i < known_class.length; i++) {
            sel_by_class[i] = 0;
        }
        var uids_list = '';
        for (i = 0; i < es.length; i++)
            if (es[i].exists)
                if (es[i].selected) {
                    selects++;
                    sel_by_class[known_class.indexOf(es[i]._class)]++;
                    if (es[i].pm.uid != undefined) {
                        if (uids_list.length > 0)
                            uids_list += ', ';
                        uids_list += '"' + es[i].pm.uid + '"';
                    }
                }
        var full_list = '';
        var classes_selected = 0;
        for (i = 0; i < known_class.length; i++)
            if (sel_by_class[i] > 0) {
                if (full_list.length > 0)
                    full_list += ', ';
                classes_selected++;
                full_list += sel_by_class[i] + ' ' + tonumerous(known_class_title[i], sel_by_class[i]);
            }
        if (classes_selected > 0) {
            if (classes_selected == 1)
                if (uids_list.length > 0) {
                    full_list += ': ' + uids_list;
                }
            full_list = ' (' + full_list + ')';
            full_list += ' <a href="#" onclick="ForceDeselect()"><img src="noap.png" width="11" height="11" border="0"></a>';
        }
        if (selects == 0)
            str += '<div id="gui_sel_info" class="gui_sel_info">Nothing selected</div><br><div class="q"></div><br>';
        else if (selects == 1)
            str += '<div id="gui_sel_info" class="gui_sel_info">' + selects + ' object selected' + full_list + '</div><br><div class="q"></div><br>';
        else
            str += '<div id="gui_sel_info" class="gui_sel_info">' + selects + ' objects selected' + full_list + '</div><br><div class="q"></div><br>';
        var first_selected_object = null;
        var params_to_display = new Array();
        var paramscount_to_display = new Array();
        var paramsvalue_to_display = new Array();
        var param_associated = new Array();

        // Code to change the starting point of the gap between trigger actions.
        let startSeparatorFrom = Trigger_getSeparatorStart(selects);

        for (var i = 0; i < es.length; i++) {
            if (!es[i].exists) continue;
            if (!es[i].selected) continue;

            // Selects the first object if not already selected.
            if (first_selected_object == null)
                first_selected_object = es[i];


            // Iterate through all entity's properties names. (__z_Index, actions_10_targetA, etc..)
            for (let parameter in es[i].pm) {
                // Find the ID associated with that property. Eg: __z_Index: 98.
                // This ID is the same as the index to retrieve this property in param_type.
                var ind2 = FindMachingParameterID(parameter, es[i]._class);

                // Find any potential duplicate.
                var ind = params_to_display.indexOf(ind2);
                if (ind == -1 && ind2 != -1) {
                    params_to_display.push(ind2);   // params_to_display contains all the ID of properties
                    paramscount_to_display.push(1);
                    paramsvalue_to_display.push(es[i].pm[parameter]);
                    param_associated.push(parameter);

                } else {
                    paramscount_to_display[ind]++;
                }
            }
        }

        if (edit_triggers_as_text && selects == 1 && first_selected_object._class == 'trigger') {
            // TRIGGER GUI PARAMS IN TEXT EDIT MODE
            str += '<div id="rparams">';
            str += '<div style="width:220px;white-space:normal;">This feature should not give you much more freedom, yet you might find it useful to copy/paste/cut trigger actions here.</div><br>';
            str += '<textarea id="opcode_field" class="opcode_field" style="display:block;width:100%;height:400px" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
            var code_lines = '';
            code_lines += 'uid: ' + first_selected_object.pm.uid + '\n';
            code_lines += 'enabled: ' + first_selected_object.pm.enabled + '\n';
            code_lines += 'maxcalls: ' + first_selected_object.pm.maxcalls + '\n';
            code_lines += 'execute: ' + first_selected_object.pm.execute + '\n';
            code_lines += '\n';

            for (let i = 1; i <= 10; i++) {
                if (first_selected_object.pm['actions_' + i + '_type'] == -1) {
                    continue;
                }

                if (trigger_opcode_aliases[first_selected_object.pm['actions_' + i + '_type']] == undefined)
                    code_lines += 'op' + first_selected_object.pm['actions_' + i + '_type'];
                else
                    code_lines += trigger_opcode_aliases[first_selected_object.pm['actions_' + i + '_type']];

                code_lines += '( ';
                code_lines += '"' + first_selected_object.pm['actions_' + i + '_targetA'] + '"';
                code_lines += ', ';
                code_lines += '"' + first_selected_object.pm['actions_' + i + '_targetB'] + '"';
                code_lines += ' );\n';
            }

            for(let i = 0; first_selected_object.pm.extended && i + 11 <= first_selected_object.pm["totalNumOfActions"]; ++i){
                if (first_selected_object.pm["additionalActions"][i] == -1) {
                    continue;
                }

                if (trigger_opcode_aliases[first_selected_object.pm["additionalActions"][i]] == undefined)
                    code_lines += 'op' + first_selected_object.pm["additionalActions"][i];
                else
                    code_lines += trigger_opcode_aliases[first_selected_object.pm["additionalActions"][i]];

                code_lines += '( ';
                code_lines += '"' + first_selected_object.pm["additionalParamA"][i] + '"';
                code_lines += ', ';
                code_lines += '"' + first_selected_object.pm["additionalParamB"][i] + '"';
                code_lines += ' );\n';
            }

            str += code_lines.split('<').join('&lt;').split('>').join('&gt;');
            str += '</textarea>';
            str += '<a class="tool_btn tool_wid" style="width:100%;height:50px;display:block;line-height:50px;" onmousedown="if ( CompileTrigger() ) UpdateGUIParams();">Apply</a><br>';
        } else {
            // Normal GUI
            var pre_temp = '<div id="rparams"><div class="p_i"><span class="pa1 p_u1 r_lt">';   // Start off with rounded corners
            var post_temp = ':</span><span class="pa2 p_u2 r_rt" onclick="letedit(this, \'';
            var last_i = params_to_display.length - 2;                                          // Index to keep track of last row.
            var value;

            // Iterate through all the params to display.
            for (i = 0; i < params_to_display.length; i++) {
                if (paramscount_to_display[i] == 1) {
                    value = GenParamVal(param_type[params_to_display[i]][1], paramsvalue_to_display[i]);
                } else
                    value = '<nochange>...</nochange>';

                current_gui_params.push(param_associated[i]);

                // Creating the actual row
                str +=
                    pre_temp +
                    param_type[params_to_display[i]][2] +       // Label of the row. Eg: Name
                    post_temp +
                    param_type[params_to_display[i]][1]         // Type of input. Eg: string
                    + '\')" onMouseOver="letover(this, \'' +
                    param_type[params_to_display[i]][1]
                    + '\')" id="' + 'pm_' +
                    param_type[params_to_display[i]][0]         // Name of property. Eg: __z_Index
                    + '">' +
                    value +                                     // Value of proerty. Eg: 1
                    '</span></div>';

                // Add a tiny gap to split every trigger action.
                if (first_selected_object._class == 'trigger') {

                    if (i >= startSeparatorFrom && (i - startSeparatorFrom) % 3 == 0) {
                        str += '<div style="height:2px"></div>';
                    }
                }

                // Last row will have bottom rounded corners 'r_lb', except for triggers.
                if (first_selected_object._class != 'trigger' && i == last_i) {
                    pre_temp = '<div class="p_i"><span class="pa1 p_u0 r_lb">';
                    post_temp = ':</span><span class="pa2 p_u0 r_rb" onclick="letedit(this, \'';

                    // First row has top rounded corners, now change it to no rounded corners.
                } else if (i == 0) {
                    pre_temp = '<div class="p_i"><span class="pa1 p_u1">';
                    post_temp = ':</span><span class="pa2 p_u2" onclick="letedit(this, \'';
                }
            }

            // Display additional trigger actions for extended triggers.
            if (selects == 1 && first_selected_object._class == 'trigger' && first_selected_object.pm["extended"]) {
                //selectingAExtendedTrigger = true;
                for(let i = 10; i < first_selected_object.pm["totalNumOfActions"]; ++i){
                    let triggerAction = first_selected_object.pm["additionalActions"][i - 10] === undefined ? -1 : first_selected_object.pm["additionalActions"][i - 10];
                    let paramA        = first_selected_object.pm["additionalParamA"][i - 10]  === undefined ? 0  : first_selected_object.pm["additionalParamA"][i - 10];
                    let paramB        = first_selected_object.pm["additionalParamB"][i - 10]  === undefined ? 0  : first_selected_object.pm["additionalParamB"][i - 10];

                    // rowHTML represents all the HTML to display a set of triggers and parameters (3 rows).
                    let rowHtml = `
                        <div class="p_i"><span class="pa1 p_u1">
                        Action '${i + 1}' type:
                        </span><span class="pa2 p_u2 r_rt" onclick="letedit(this, 'trigger_type')" onmouseover="letover(this, 'trigger_type')" id='pm_actions_${i + 1}_type'>
                            <pvalue real='${triggerAction}'>
                            ${special_values_table['trigger_type'][triggerAction]}
                            </pvalue>
                        </span></div>

                        <div class="p_i"><span class="pa1 p_u1">
                        - parameter A:
                        </span><span class="pa2 p_u2 r_rt" onclick="letedit(this, 'no_change')" onmouseover="letover(this, 'no_change')" id='pm_actions_${i + 1}_targetA'>
                            <pvalue real='${paramA}'>
                            '${paramA}'
                            </pvalue>
                        </span></div>

                        <div class="p_i"><span class="pa1 p_u1">
                        - parameter B:
                        </span><span class="pa2 p_u2 r_rt" onclick="letedit(this, 'no_change')" onmouseover="letover(this, 'no_change')" id='pm_actions_${i + 1}_targetB'>
                            <pvalue real='${paramB}'>
                            '${paramB}'
                            </pvalue>
                        </span></div>

                        <div style="height:2px"></div>
                    `

                    // Creating the actual row
                    str += rowHtml;
                }
            }
        }

        // Add edit text button.
        if (selects == 1 && first_selected_object._class == 'trigger') {
            if (edit_triggers_as_text)
                str += '<a class="tool_btn tool_wid" style="width:100%;display:block;" onmousedown="edit_triggers_as_text=!edit_triggers_as_text;UpdateGUIParams()">Edit triggers as param list</a>';
            else
                str += '<a class="tool_btn tool_wid" style="width:100%;display:block;" onmousedown="edit_triggers_as_text=!edit_triggers_as_text;UpdateGUIParams()">Edit triggers as text</a>';
        }
        str += '</div>';
        gui_params.innerHTML = str;

        // Update the GUI to it's original scroll.
        guiHTMLElement = document.getElementById("rparams");

        if(guiHTMLElement){
            guiHTMLElement.scrollTop = amountToScroll;
        }

        StreetMagic();
    }

    /**
     *  This function is invoked whenever someone clicks on an option in the dropdown menu of parameter values.
     *  For example, clicking on "Force Movable 'A' move to Region 'B'"
     *
     *  Prompts for further input if required and updates the GUI.
     *
     *  @param {string} val1    The real actual value.
     *  @param {string} val2    Name / Label of the value clicked.
     *  @param {string} defval  Previous real value.
     */
    function setletedit(val1, val2, defval) {
        const skipTriggerActions = [123, 361, 364, 365];

        // Get the number and trigger type.
        let regex = /actions_(\d+)_(targetA|targetB|type)/g;
        let match = Array.from(lettarget.id.replace('pm_', '').matchAll(regex))[0];

        // Disallow skip trigger actions every 9th trigger action for triggers.
        if(
            Number(match && match[1]) % 9 === 0 && match[2] === 'type' && skipTriggerActions.includes(Number(val1))
        ){
            NewNote("Due to how extended triggers is implemented, skip trigger actions are disabled every 9th trigger action. Leave a 'Do Nothing' trigger action here instead.", note_bad);
            return;
        }

        quick_pick = false;
        quick_pick_ignore_one_click = false;

        // Clicked on a value that prompts for a number. Like number of trigger calls.
        if (val1.indexOf('[val]') != -1) {
            defval = Math.abs(Number(defval));
            var txt = prompt('Enter value:', defval);
            var gotval;

            if (txt == null || txt == '') {
                gotval = Math.abs(defval);
            } else {
                gotval = Math.abs(txt);
            }
            val1 = eval(val1.replace('[val]', gotval));
            val2 = val2.replace('#', gotval);
        }

        // Clicked on a value that prompts for a hex colour code.
        else if (val1.indexOf('[color]') != -1) {
            defval = Math.abs(Number(defval));
            var gotval = prompt('Enter value in format #XXXXXX:', defval);
            if (gotval.charAt(0) != '#') {
                gotval = '#' + gotval;
            }
            if (gotval.length != 7)
                alert('Value ' + gotval + ' is not correct. Valid value must be in format #XXXXXX. Read about "hex color codes" for more information.');
            val1 = val1.replace('[color]', gotval);
            val2 = val2.replace('#', gotval);
        }

        // Updates the GUI with new value.
        ff.value = '<pvalue real="' + val1 + '">' + val2 + '</pvalue>';

        lettarget.innerHTML = ff.value;
        ff.style.display = 'none';
        ff_drop.style.display = 'none';
        letediting = false;

        UpdatePhysicalParam((lettarget.id.replace('pm_', '')), val1);

        var parameter_updated = lettarget.id.replace('pm_', '');

        if (parameter_updated == 'mark' || (parameter_updated.indexOf('actions_') != -1 && parameter_updated.indexOf('_type') != -1))
            StreetMagic();
    }

    /**
     * Patches the current implementation of StreetMagic to support the implementation of extended trigger list.
     * StreetMagic allows the parameter to change it's type "trigger+none to value for an example".
     */
    function StreetMagic() {
        var mark_obj = document.getElementById('pm_mark');

        // Finds engine mark.
        if (mark_obj != null) {
            var our_case = mark_pairs['mark_' + innerHTML_to_value(mark_obj.innerHTML)];
            var valobj = document.getElementById("pm_forteam");
            if (our_case == undefined)
                our_case = 'nochange';
            eval('valobj.onclick = function(e){letedit(this, \'' + our_case + '\');}');
            eval('valobj.onmouseover = function(e){letover(this, \'' + our_case + '\');}');
            valobj.innerHTML = GenParamVal(our_case, innerHTML_to_value(valobj.innerHTML));

            // Early exit, we are done here with engine mark.
            return;
        }

        // Get current selection and check if it's an trigger.
        let selected = SelectedObjects;
        let totalNumOfActions = 10;
        let isTrigger = false;
        if(selected.length == 1 && selected[0]._class == "trigger"){
            isTrigger = true;

            // Check if it's an extended trigger.
            if(selected[0].pm["extended"]){
                totalNumOfActions = selected[0].pm["totalNumOfActions"];
            }
        }

        // Early exit if it's not a trigger.
        if(!isTrigger){
            return;
        }

        // Iterate through all the trigger actions and modify their parameter type to reflect on the respective trigger actions.
        for (var i = 1; i <= totalNumOfActions; i++) {
            var mark_obj = document.getElementById('pm_actions_' + i + '_type');
            if (mark_obj == null) {
                aleiLog(SWARN, "Failed to retrieve HTML element of property to dynamically apply property type.");
                break;
            }

            var cases = 'A';
            // Alternate through parameter A and B.
            for (var i2 = 0; i2 < 2; i2++) {
                // Retrieve the corresponding parameter type based on trigger action.
                var our_case = mark_pairs['trigger_type_' + cases + innerHTML_to_value(mark_obj.innerHTML)];

                // Retrieve the corresponding HTML element.
                var valobj = document.getElementById('pm_actions_' + i + '_target' + cases);

                if (our_case == undefined) {
                    our_case = 'nochange';
                }

                eval('valobj.onclick = function(e){letedit(this, \'' + our_case + '\');}');
                eval('valobj.onmouseover = function(e){letover(this, \'' + our_case + '\');}');

                valobj.innerHTML = GenParamVal(our_case, innerHTML_to_value(valobj.innerHTML));
                cases = 'B';
            }
        }
    }

    let oldSaveThisMap = window.SaveThisMap;
    /**
     *  This function extends the SaveThisMap functionality by first parsing all instances of extended triggers into a linked list of normal triggers.
     *
     *  [FROM]                       |    [TO]
     *  trigger*1                    |    trigger*1                             trigger*3                             trigger*3
     *  extended:           true     |    extended:           true              *deleted*                             *deleted*
     *  totalNumOfActions:  25       |    totalNumOfActions:  25                *deleted*                             *deleted*
     *  additionalActions:  [..]     |    *deleted*                             *deleted*                             *deleted*
     *  additionalParamA:   [..]     |    *deleted*                             *deleted*                             *deleted*
     *  additionalParamB:   [..]     |    *deleted*                             *deleted*                             *deleted*
     *  actions1-10         [..]     |    actions1-9          [..]              actions1-9   [..]                     actions1-7    [..]
     *                               |    actions10           trigger*2         actions10    trigger*3                actions8-10   Do nothing.
     *
     *
     *  @param {*} temp_to_real_compile_data     Parameters that the old SaveThisMap uses. (no idea what it is tbh)
     *  @param {*} callback                      Parameters that the old SaveThisMap uses. (no idea what it is tbh)
     */
    function SaveThisMap(temp_to_real_compile_data='', callback=null) {
        const gapBetweenTrigger = 40;
        const switchExecutionAction = 363;

        // Keep a reference to all the newly generated triggers, so we can delete them in the end.
        let allGeneratedTriggers = new Array();

        // Keep a copy of the properties all extended triggers. We will temporarily delete these additional properties before
        // file save then restore them back to the respective triggers.
        let allAdditionalActions = new Array();
        let allAdditionalParamA = new Array();
        let allAdditionalParamB = new Array();

        // For every extended trigger..
        for(const entity of es){
            if(!entity.exists)              continue;
            if(entity._class !== "trigger") continue;
            if(!entity.pm["extended"])      continue;

            // The first trigger can only store 9 actions, as the last one is required to execute the next one.
            // Let's push the 10th one to the front of respective arrays.
            entity.pm["additionalActions"].unshift(entity.pm["actions_10_type"]);
            entity.pm["additionalParamA"].unshift(entity.pm["actions_10_targetA"]);
            entity.pm["additionalParamB"].unshift(entity.pm["actions_10_targetB"]);

            // Calculate and create the number of triggers we need.
            const triggersToCreate = Math.floor((entity.pm["totalNumOfActions"] - 1) / 9);
            let   startX = entity.pm["x"] + gapBetweenTrigger;
            const startY = entity.pm["y"];

            // Auto generate all the necessary triggers. Space them out evenly.
            for(let i = 0; i < triggersToCreate; i++){
                let name = `${entity.pm["uid"]}'s extended trigger no: ${i}.`
                let newTrigger = new E("trigger");

                // Set properties.
                newTrigger.pm["x"] = startX;
                newTrigger.pm["y"] = startY;
                newTrigger.pm["uid"] = name;

                // If it's the first trigger, let the main extended trigger point to this.
                if(i == 0){
                    entity.pm[`actions_10_type`] = switchExecutionAction;
                    entity.pm[`actions_10_targetA`] = name;
                }

                // If not the last trigger, point to the next trigger.
                if(i < triggersToCreate - 1){
                    name = `${entity.pm["uid"]}'s extended trigger no: ${i + 1}.`
                    newTrigger.pm[`actions_10_type`] = switchExecutionAction;
                    newTrigger.pm[`actions_10_targetA`] = name;
                }

                // Set trigger action and parameters
                for(let actionNum = 1; actionNum < 10; actionNum++){
                    let index = i * 9 + (actionNum - 1);    // 0-8, 9-17, 18-26, ...

                    newTrigger.pm[`actions_${actionNum}_type`]    = entity.pm["additionalActions"][index] === undefined ? -1 : entity.pm["additionalActions"][index];
                    newTrigger.pm[`actions_${actionNum}_targetA`] = entity.pm["additionalParamA"][index]  === undefined ? 0 :  entity.pm["additionalParamA"][index];
                    newTrigger.pm[`actions_${actionNum}_targetB`] = entity.pm["additionalParamB"][index]  === undefined ? 0 :  entity.pm["additionalParamB"][index];
                }

                es.push(newTrigger);
                allGeneratedTriggers.push(newTrigger);
                startX += gapBetweenTrigger;
            }

            // Delete additional properties, and save a copy to prepare for saving.
            allAdditionalActions.push(JSON.parse(JSON.stringify(entity.pm["additionalActions"])));
            allAdditionalParamA.push(JSON.parse(JSON.stringify(entity.pm["additionalParamA"])));
            allAdditionalParamB.push(JSON.parse(JSON.stringify(entity.pm["additionalParamB"])));

            delete entity.pm["additionalActions"];
            delete entity.pm["additionalParamA"];
            delete entity.pm["additionalParamB"];
        }

        // Save this map!
        oldSaveThisMap(temp_to_real_compile_data, callback);

        let index = 0;

        // Post clean up.
        for(const entity of es){
            if(!entity.exists)              continue;
            if(entity._class !== "trigger") continue;
            if(!entity.pm["extended"])      continue;

            // Restore deleted additional properties.
            entity.pm["additionalActions"] = allAdditionalActions[index];
            entity.pm["additionalParamA"] = allAdditionalParamA[index];
            entity.pm["additionalParamB"] = allAdditionalParamB[index];

            // Restore the 10th trigger action from arrays
            entity.pm[`actions_10_type`]    = entity.pm["additionalActions"].shift();
            entity.pm[`actions_10_targetA`] = entity.pm["additionalParamA"].shift();
            entity.pm["additionalParamB"].shift();
            index++;
        }

        // Delete all generated triggers.
        for(const newTrigger of allGeneratedTriggers){
            newTrigger.exists = false;
        }

        UpdateGUIObjectsList();
    }

    /**
     *  This function is responsible for compiling the text portion of the trigger action when saved.
     *  It is further patched to support more than 10 triggers.
     */
    function CompileTrigger() {
        const skipTriggerActions = [123, 361, 364, 365];
        const selection = SelectedObjects;

        if(selection.length != 1){
            return;
        }

        const selectedTrigger = selection[0];

        var opcode_field = document.getElementById('opcode_field');
        var code = opcode_field.value;
        var code_lines = code.split('\n');
        var new_trigger_actions = [];
        var direct_update_params = [];
        var direct_update_values = [];

        function ScheduleParamSet(a, b) {
            direct_update_params.push(a);
            direct_update_values.push(b);
        }

        for (var i = 0; i < code_lines.length; i++) {
            var line = code_lines[i];

            let paramA_start = line.indexOf('( "');
            let separator = line.indexOf('", "');
            let end = line.indexOf('" );');
            let semicolon = line.indexOf(':');

            // Parsing list of trigger actions
            if (paramA_start != -1 && separator != -1 && end != -1) {
                var first_c = line.indexOf('(');
                var opcode = line.substring(0, first_c);
                var action_type = -1;
                if (opcode.substring(0, 2) == 'op' && !isNaN(opcode.slice(2)))
                    action_type = parseInt(opcode.slice(2));
                else {
                    action_type = trigger_opcode_aliases.indexOf(opcode);
                    if (action_type == -1) {
                        NewNote('Error: Changes were not applied because &quot;' + opcode + '&quot; seems to be an unknown operation code.', note_neutral);
                        return;
                    }
                }
                var valueA = '';
                var valueB = '';
                if (action_type != -1) {
                    valueA = line.substring(paramA_start + 3, separator);
                    valueB = line.substring(separator + 4, end);
                }

                new_trigger_actions.push([action_type, valueA, valueB]);

            }
            // Parsing the header portion..
            else if (semicolon != -1) {
                var left_part = line.substring(0, semicolon);
                var right_part = line.slice(semicolon + 1);
                while (left_part.charAt(0) == ' ')
                    left_part = left_part.slice(1);
                while (left_part.charAt(left_part.length - 1) == ' ')
                    left_part = left_part.slice(0, -1);
                while (right_part.charAt(0) == ' ')
                    right_part = right_part.slice(1);
                while (right_part.charAt(right_part.length - 1) == ' ')
                    right_part = right_part.slice(0, -1);
                if (left_part == 'uid' || left_part == 'enabled' || left_part == 'maxcalls' || left_part == 'execute')
                    ScheduleParamSet(left_part, right_part);
                else {
                    NewNote('Error: Changes were not applied because &quot;' + left_part + '&quot; seems to be not a default property.', note_neutral);
                    return false;
                }
            } else if (line != '') {
                NewNote('Error: Changes were not applied because line &quot;' + line + '&quot; wasn\'t recognized or contains unsupported syntax.', note_neutral);
                return false;
            }
        }

        let hasEncounteredSkipTrigger = false;
        // Retrieve all the trigger action.
        for (let i = 0; i < new_trigger_actions.length; i++) {
            // A skip trigger action for every 9th trigger action. Add a do nothing trigger action.
            if((i + 1) % 9 === 0 && skipTriggerActions.includes(new_trigger_actions[i][0])){
                new_trigger_actions.splice(i, 0, [-1, 0, 0]);
                hasEncounteredSkipTrigger = true;
            }

            ScheduleParamSet('actions_' + (i + 1) + '_type', new_trigger_actions[i][0]);
            ScheduleParamSet('actions_' + (i + 1) + '_targetA', new_trigger_actions[i][1]);
            ScheduleParamSet('actions_' + (i + 1) + '_targetB', new_trigger_actions[i][2]);
        }

        // Populate the rest with empty trigger actions if it's lesser than 10.
        for(let i = new_trigger_actions.length + 1; i <= 10; i++){
            ScheduleParamSet('actions_' + i + '_type', -1);
            ScheduleParamSet('actions_' + i + '_targetA', 0);
            ScheduleParamSet('actions_' + i + '_targetB', 0);
        }

        if(hasEncounteredSkipTrigger){
            NewNote("Skip trigger actions encountered in every 9th trigger action. Inserted an 'Do Nothing' trigger action.", note_neutral);
        }

        // Convert it back to a normal trigger if it doesnt have more than 10 actions
        if(new_trigger_actions.length <= 10 && selectedTrigger.pm["extended"]){
            addTriggerActionCount(-selectedTrigger.pm["totalNumOfActions"]);
        }
        else{
            // Adjust extended trigger's size
            if(selectedTrigger.pm["extended"]){
                let difference = new_trigger_actions.length - selectedTrigger.pm["totalNumOfActions"] ;
                addTriggerActionCount(difference);
            }
            // Convert normal trigger to extended trigger.
            else{
                let addOn = new_trigger_actions.length - 10;
                addTriggerActionCount(addOn);
            }
        }

        for(let i = 0; i < direct_update_params.length; ++i){
            UpdatePhysicalParam(direct_update_params[i], direct_update_values[i], false);
        }

        NewNote("Trigger updated successfully.", note_good);
        return true;
    }

    window.setletedit = setletedit;
    window.StreetMagic = StreetMagic;
    window.SaveThisMap = SaveThisMap;
    window.CompileTrigger = CompileTrigger;

    // the current serialisation and unserialisation used is an external library Eric used
    // it is currently used by the Copy and Paste clipboard functions
    // however, it does not work with arrays, turning them into objects instead.
    // therefore, Nyove has decided to overwrite these library
    window.serialize = JSON.stringify;
    window.unserialize = JSON.parse;
    window.UpdateGUIParams = newUpdateGUIParams;

    // Patch the render function's connection line to work with >10 trigger actions.
    /*let RenderInString = window.Render.toString().replaceAll(
        /es\[(i2?)\]\.pm\[ property \];/g,
        `es[$1].pm[ property ];
        let array;
        if(Array.isArray(value)) {
            array = value;
        }
        else {
            array = [value];
        }

        for(let index = 0, value = array[index]; index < array.length; ++index, value = array[index])
        `
    );

    // Patch function for strict mode compliance
    RenderInString = RenderInString.toString().replaceAll(
        `for ( property in`,
        `for ( let property in`
    );

    window.Render = eval(`(${RenderInString})`);*/
}

/** This function is invoked whenever the map loads.
 *
 *  It looks for potential triggers configured in a linked list manner and converts it to an extended trigger.
 */
function parseExtendedTriggers(){
    const maxIteration = 1000;
    const switchExecutionAction = 363;

    // Find all extended triggers.
    for(const entity of es){
        if(!entity.exists)              continue;
        if(entity._class !== "trigger") continue;
        if(!entity.pm["extended"])      continue;

        let iterationCount = 1;
        let previousTotalNumOfActions = entity.pm["totalNumOfActions"];

        // Create extended trigger's additional properties.
        entity.pm["totalNumOfActions"] = 9;
        entity.pm["additionalActions"] = new Array();
        entity.pm["additionalParamA"] = new Array();
        entity.pm["additionalParamB"] = new Array();

        let currentTrigger = entity;

        // Iterate through the linked list, pointed by the 10th trigger action.
        let nextTriggerIndex = es.findIndex(e => e.pm["uid"] === currentTrigger.pm["actions_10_targetA"] && currentTrigger.pm["actions_10_type"] === switchExecutionAction);

        while(nextTriggerIndex !== -1){
            let nextTrigger = es[nextTriggerIndex];

            // Retrieve all trigger actions.
            for(let i = 1; i <= 9; ++i){
                // The very first entry of additional actions and parameters belongs to action 10
                if(i === 1 && iterationCount === 1){
                    entity.pm["actions_10_type"] = nextTrigger.pm[`actions_1_type`];
                    entity.pm["actions_10_targetA"] = nextTrigger.pm[`actions_1_targetA`];
                    entity.pm["actions_10_targetB"] = nextTrigger.pm[`actions_1_targetB`];
                    continue;
                }

                entity.pm["additionalActions"].push(nextTrigger.pm[`actions_${i}_type`]);
                entity.pm["additionalParamA"].push(nextTrigger.pm[`actions_${i}_targetA`]);
                entity.pm["additionalParamB"].push(nextTrigger.pm[`actions_${i}_targetB`]);
            }

            entity.pm["totalNumOfActions"] += 9;

            // Remove those auto generated triggers
            es.splice(nextTriggerIndex, 1);

            // Continue iterating
            currentTrigger = nextTrigger;
            nextTriggerIndex = es.findIndex(e => e.pm["uid"] === currentTrigger.pm["actions_10_targetA"] && currentTrigger.pm["actions_10_type"] === switchExecutionAction);

            // Protect users from potential infinite iteration.
            iterationCount++;
            if(iterationCount > maxIteration){
                aleiLog(note_bad, "When parsing extended triggers, potentially reached an infinite loop.");
                break;
            }
        }

        // Shrink extended trigger to previously saved size if the last few trigger actions is empty.
        if(previousTotalNumOfActions){
            const doNothingTriggerAction = -1;
            let isAllEmpty = true;

            for(let i = previousTotalNumOfActions + 1; i < entity.pm["totalNumOfActions"]; i++){
                if(entity.pm["additionalActions"][i - 11] != doNothingTriggerAction){
                    isAllEmpty = false;
                    break;
                }
            }

            // Shrink the trigger action.
            if(isAllEmpty){
                let difference = entity.pm["totalNumOfActions"] - previousTotalNumOfActions;
                entity.pm["additionalActions"].length -= difference;
                entity.pm["additionalParamA"].length -= difference;
                entity.pm["additionalParamB"].length -= difference;
                entity.pm["totalNumOfActions"] = previousTotalNumOfActions;
            }
        }
    }
}

/**
 * Function that adds new CSS style to ALE.
 * - Add style rule for 2 side by side button
 *
 * This function is run once in ALE_Start.
 */
function updateCSSFile() {
    const cssFile = document.styleSheets[0];

    if(!cssFile){
        aleiLog(WARN, "Failed to update CSS file.");
        return;
    }

    // Creates a new rule for class two-element-grid, useful as a parent div.
    cssFile.insertRule(".two-element-grid{ display: grid; justify-content: center; grid-template-columns: 50% 50%; }", 0);
}

// Creates mapping of object connections so that we don't recreate line mapping everytime.
// This will be used in Render function for when we are drawing object connection lines.
function __OCM_AddReference(from, to) {
    let ocm = ObjectConnectionMapping;
    if(ocm[from]["to"].indexOf(to) === -1) ocm[from]["to"].push(to);
    if(ocm[to]["by"].indexOf(from) === -1) ocm[to]["by"].push(from);
}
function __OCM_RemoveReference(from, to) {
    let ocm = ObjectConnectionMapping;
    if(ocm[from]["to"].indexOf(to) !== -1) ocm[from]["to"].splice(ocm[from]["to"].indexOf(to), 1);
    if(ocm[to]["by"].indexOf(from) !== -1) ocm[to]["by"].splice(ocm[to]["by"].indexOf(from), 1);
}

/*
 * __OCM_HandleObject
 * Function responsible for internal registration of object mappings.
 *
 *@param {E}   element   PB2 object to create connection mapping of.
*/

function __OCM_HandleObject(element) {
    let ocm = ObjectConnectionMapping;
    let utem = uidToElementMap;


    if(element.pm.uid === undefined) return;
    if(element.pm.uid === "#water") {
        element.pm.uid = RandomizeName(element.pm.uid); // I don't see why not
    };

    function Trigger_HandleParameter(trigger, parameter) {
        if(typeof(parameter) !== "string") return;

        if(utem[parameter] !== undefined) { // Simple case where parameter is simply reference to object.
            __OCM_AddReference(trigger, parameter);
            return;
        }
        if(parameter.includes(",") == false) return;
        // A little complex case where multiple objects are referenced
        // As in Parameter B: #region*1,#region*2
        let splt = parameter.split(",");
        for(let value of splt) {
            let val = value.trim();
            if(utem[val] !== undefined) __OCM_AddReference(trigger, val);
        }
    }

    // Eliminating parameters we don't need to look at.
    for(let key of Object.keys(element.pm)) {
        if(__OCM_CHECKED_KEYS.indexOf(key) === -1) continue;
        let value = element.pm[key];
        if(utem[value] === undefined) continue; // Not valid object, just skip.

        __OCM_AddReference(element.pm.uid, value);
    }
    // Special case for trigger actions.
    if(element._class !== "trigger") return;
    let pm = element.pm;
    // Vanilla trigger case (10 actions, extended triggers will run this too)
    for(let i = 1; i < 11; i++) {
        if(pm[`actions_${i}_type`] == -1) continue;
        if(pm[`actions_${i}_type`] === undefined) continue;
        Trigger_HandleParameter(pm.uid, pm[`actions_${i}_targetA`]);
        Trigger_HandleParameter(pm.uid, pm[`actions_${i}_targetB`]);
    }
    // Extended triggers.
    if(pm.extended === undefined) return;

    let actions = pm.additionalActions;
    let paramA = pm.additionalParamA;
    let paramB = pm.additionalParamB;

    for(let i = 0; i < actions.length; i++) {
        if(actions[i] === -1) continue;
        Trigger_HandleParameter(pm.uid, paramA[i]);
        Trigger_HandleParameter(pm.uid, paramB[i]);
    }
}

/*
 * OCM_onObjectDelete
 * Function that gets called in DeleteSelection.
 * This just keeps Object Connection Map with latest data.

 * @param {E} element   PB2 element that got deleted.
*/
function OCM_onObjectDelete(element) {
    if(!(aleiSettings.rematchUID && aleiSettings.ocmEnabled)) return;
    if(element.pm.uid == undefined) return;
    if(!OCM_LOADED) return;

    let uid = element.pm.uid;
    let ocm = window.ObjectConnectionMapping;
    let utem = window.uidToElementMap;

    let referredBy = ocm[uid].by;
    let referringTo = ocm[uid].to;

    // TODO: Make this bit safer? Some hard limit?
    while(ocm[uid].by.length != 0) __OCM_RemoveReference(ocm[uid].by[0], uid);
    while(ocm[uid].to.length != 0) __OCM_RemoveReference(uid, ocm[uid].to[0]);

    // This cannot happen anymore
    if((ocm[uid].by.length != 0) || (ocm[uid].to.length != 0)) {
        NewNote(`ALEI: Something is wrong with Object Connection Map. Please regenerate map by loading the map again.`, `#FF0000`);
        debugger;
    }

    delete utem[uid];
    delete ocm[uid];

}

function CreateConnectionMapping() {
    OCM_LOADED = false;
    window.ObjectConnectionMapping = {};
    window.uidToElementMap = {};

    if(!aleiSettings.rematchUID) return; // Rematch UID is not necessarily a requirement for OCM but it is requirement if I wanna be lazy
    if(!aleiSettings.ocmEnabled) return;

    let ocm = ObjectConnectionMapping;
    let utem = uidToElementMap;

    for(let element of es) {
        if(!element.exists) continue;
        if(element.pm.uid === undefined) continue;
        if(element.pm.uid === "#water") continue;

        if(ocm[element.pm.uid] !== undefined) {
            NewNote(`ALEI: 2+ objects share name ${element.pm.uid}, going to stop constructing object connection map.`, "#FF0000");
            window.ObjectConnectionMapping = {};
            return;
        }

        ocm[element.pm.uid] = {"by": [], "to": []};
        utem[element.pm.uid] = element;
    }

    for(let element of es) __OCM_HandleObject(element);
    OCM_LOADED = true;
    aleiLog(DEBUG, "Built object connection map.");
}

function patchRender() {
    // This is where Render will be patched.
    // Due to nature of this function, maybe it'll be better to call this function each time a patch is needed.
    // And to support that, this function will strictly work on ALE_Render than current Render
    if(aleiSettings.customRenderer) {
        // Check https://github.com/LisABC/ALEI/blob/main/expRenderer.user.js
        // This is simply minified version of that file.
        // Minified with https://www.toptal.com/developers/javascript-minifier
        "use strict";let decorRequestsOnProgress=[],backgroundRequestsOnProgress=[],boxModelImages={},aleiRunning=!1,haveForcedRecalculation=!1,displayFPS=0,fpsAccumulator=0,totalRenderedObjects=0,lastTime=0,draw_rect,draw_rect_edges,draw_gridlines,draw_image,ctx,canvasHeight,canvasWidth,gridOpacity,mClickX,mClickY,mCurrentX,mCurrentY,w2s_x,w2s_y,s2w_x,s2w_y,w2s_h,w2s_w,s2w_h,s2w_w,previewBackground="1";function _readStorage(e,t,o){let r=`ALEI_Renderer_${e}`;return void 0===localStorage[r]?t:o(localStorage[r])}let toggles={cartoonishEdges:_readStorage("CartoonishEdges",!1,e=>"true"===e),originalSelectOverlay:_readStorage("OriginalSelectOverlay",!1,e=>"true"===e),boxRendering:_readStorage("PreviewWalls",!1,e=>"true"===e)},themes={0:{backgroundColor:"#5880AB",gridColor:"#FFFFFF",selectOutlineColor:"#A5A500",selectEdgeOpacityFactor:1,selectTextColor:"#FF0",selectionColor:"#FFF",selectionCtrlColor:"#AFA",selectionAltColor:"#FAA",selectionOpacity:.1,selectionEdgeOpacity:.8,highLightedObjEdgeColor:window.selgrd3,highLightedObjEdgeOpacity:1,objectConnectionDash:[4,4],objectConnectionToColor:"#66ff66",objectConnectionFromColor:"#ffffff",objectConnectionOpacityFactor:1},1:{backgroundColor:"#222222",gridColor:"#888888",selectOutlineColor:"#FFFF00",selectEdgeOpacityFactor:1,selectTextColor:"#FF0",selectionColor:"#FFF",selectionCtrlColor:"#AFA",selectionAltColor:"#FAA",selectionOpacity:.1,selectionEdgeOpacity:.8,highLightedObjEdgeColor:window.selgrd3,highLightedObjEdgeOpacity:1,objectConnectionDash:[4,4],objectConnectionToColor:"#66ff66",objectConnectionFromColor:"#ffffff",objectConnectionOpacityFactor:1},2:{backgroundColor:"#222222",gridColor:"#FFFFFF",selectOutlineColor:"#FFFF00",selectEdgeOpacityFactor:1,selectTextColor:"#FF0",selectionColor:"#FFF",selectionCtrlColor:"#AFA",selectionAltColor:"#FAA",selectionOpacity:.1,selectionEdgeOpacity:.8,highLightedObjEdgeColor:window.selgrd3,highLightedObjEdgeOpacity:1,objectConnectionDash:[4,4],objectConnectionToColor:"#66ff66",objectConnectionFromColor:"#ffffff",objectConnectionOpacityFactor:1},3:{backgroundColor:"#222222",gridColor:"#FFFFFF",selectOutlineColor:"#FFFF00",selectEdgeOpacityFactor:1,selectTextColor:"#FF0",selectionColor:"#FFF",selectionCtrlColor:"#AFA",selectionAltColor:"#FAA",selectionOpacity:.1,selectionEdgeOpacity:.8,highLightedObjEdgeColor:window.selgrd3,highLightedObjEdgeOpacity:1,objectConnectionDash:[4,4],objectConnectionToColor:"#66ff66",objectConnectionFromColor:"#ffffff",objectConnectionOpacityFactor:1},4:{backgroundColor:"#222222",gridColor:"#FFFFFF",selectOutlineColor:"#FFFF00",selectEdgeOpacityFactor:1,selectTextColor:"#FF0",selectionColor:"#FFF",selectionCtrlColor:"#AFA",selectionAltColor:"#FAA",selectionOpacity:.1,selectionEdgeOpacity:.8,highLightedObjEdgeColor:window.selgrd3,highLightedObjEdgeOpacity:1,objectConnectionDash:[4,4],objectConnectionToColor:"#66ff66",objectConnectionFromColor:"#ffffff",objectConnectionOpacityFactor:1}},currentTheme;function RenderGrid(){gridOpacity<=0||(ctx.fillStyle=currentTheme.gridColor,draw_gridlines(10,.08*gridOpacity),draw_gridlines(100,.32*gridOpacity),draw_gridlines(300,.64*gridOpacity),ctx.globalAlpha=.7*gridOpacity,draw_rect(0,w2s_y(0),canvasWidth,1),draw_rect(w2s_x(0),0,1,canvasHeight))}let objectColors={box:{col:"#FFF",edgeCol:"#FFF"},door:{col:"#000",edgeCol:"#000",invisibleOpacityFactor:.05},water:{col:"#3592B9",edgeCol:"#91EAFF",opacityFactor:.24,acidCol:"#BBFB59",acidEdgeCol:"#91EAFF",acidOpacityFactor:.81},pushf:{col:"#2BFF40",edgeCol:"#3CFF4F"},region:{col:"#FFD52B",edgeCol:"#FFB03C",edgeOpacityFactor:.5,buttonOpacityFactor:.5},bg:{col:"#000",edgeCol:"#910000",edgeOpacityFactor:.3,coloredOpacityFactor:.22}},regionImages={1:window.img_region,9:window.img_region_red,10:window.img_region_blue};function _DrawRectangle(e,t,o,r,i,l,c){ctx.globalAlpha=t,c?(toggles.cartoonishEdges?ctx.strokeColor=e:ctx.strokeStyle=e,draw_rect_edges(o,r,i,l)):(ctx.fillStyle=e,draw_rect(o,r,i,l))}function ObjIsHighlighted(e,t){if(!window.m_drag_selection||window.lmd||!window.MatchLayer(e))return;let o=w2s_x(Math.min(mClickX,mCurrentX)),r=w2s_y(Math.min(mClickY,mCurrentY)),i=w2s_w(Math.abs(mCurrentX-mClickX)),l=w2s_h(Math.abs(mCurrentY-mClickY)),c=t.x,n=t.y,s=t.w,a=t.h;return!(c+s<o)&&!(o+i<c)&&!(n+a<r)&&!(r+l<n)}function RenderSingleResizableObject(e,t){let o=e._class,r=objectColors[o];if(void 0===r)return;let i=window.MatchLayer(e)?1:.3,l=e.pm,c=w2s_x(l.x),n=w2s_y(l.y),s=w2s_w(l.w),a=w2s_h(l.h),d=r.col,g=r.edgeCol,h=r.opacityFactor?r.opacityFactor:.2,u=r.edgeOpacityFactor?r.edgeOpacityFactor:1;if("bg"==o&&void 0==window.CACHED_BGS[l.m]&&-1==backgroundRequestsOnProgress.indexOf(l.m)&&(window.ServerRequest(`a=get_images&for_class=bg_model&update_const=${l.m}`,"request_consts"),backgroundRequestsOnProgress.push(l.m)),"door"==o&&(0===l.vis||!1===l.vis||"false"===l.vis))h=r.invisibleOpacityFactor;else if("water"==o&&e.pm.damage>0)d=r.acidCol,g=r.acidEdgeCol,h=r.acidOpacityFactor;else if("region"==o&&-1!==[1,9,10].indexOf(parseInt(l.use_on))){ctx.globalAlpha=i*r.buttonOpacityFactor;draw_image(regionImages[l.use_on],w2s_x(l.x+Math.round((l.w-41)/2)),w2s_y(l.y+Math.round((l.h-51)/2)),w2s_w(41),w2s_h(31))}else"bg"==o&&7==l.c.length&&(d=l.c,h=r.coloredOpacityFactor);if(window.SHOW_TEXTURES){if("box"!=o||toggles.boxRendering){if("box"==o&&toggles.boxRendering){let w=boxModelImages[l.m];void 0==w&&(w=new Image,boxModelImages[l.m]=w,w.src=`pic.php?c=3&m=${l.m}`,w.width=16,w.height=16),void 0==w.pattern&&(w.pattern=ctx.createPattern(w,"repeat-x")),ctx.globalAlpha=1,ctx.save(),ctx.beginPath(),ctx.rect(c,n,s,a),ctx.closePath(),ctx.clip(),ctx.translate(w2s_x(0),w2s_y(0)),ctx.scale(w2s_x(1)-w2s_x(0),w2s_y(1)-w2s_y(0)),ctx.beginPath(),ctx.fillStyle=w.pattern,ctx.rect(s2w_x(0),s2w_y(0),s2w_w(canvasWidth),s2w_h(canvasHeight)),ctx.fill(),ctx.restore()}else if("bg"==o&&void 0!==window.CACHED_BGS[l.m]&&window.CACHED_BGS[l.m].loaded){-1!==backgroundRequestsOnProgress.indexOf(l.m)&&backgroundRequestsOnProgress.splice(backgroundRequestsOnProgress.indexOf(l.m),1),ctx.globalAlpha=1;let x=window.CACHED_BGS[l.m];if(void 0==x.pattern&&(x.pattern=ctx.createPattern(x,"repeat")),ctx.save(),ctx.beginPath(),ctx.rect(c,n,s,a),ctx.closePath(),ctx.clip(),ctx.translate(w2s_x(0),w2s_y(0)),ctx.scale(w2s_x(1)-w2s_x(0),w2s_y(1)-w2s_y(0)),ctx.translate(l.u,l.v),ctx.beginPath(),ctx.fillStyle=x.pattern,ctx.rect(s2w_x(0),s2w_y(0),s2w_w(canvasWidth),s2w_h(canvasHeight)),ctx.fill(),ctx.restore(),7==l.c.length){let m=ctx.globalCompositeOperation;ctx.globalCompositeOperation="multiply",_DrawRectangle(l.c,1,c,n,s,a,!1),ctx.globalCompositeOperation=m}}}else d="#000",h=1,g="#333"}ObjIsHighlighted(e,t)&&(g=currentTheme.highLightedObjEdgeColor,u=currentTheme.highLightedObjEdgeOpacity/i),e.selected&&!toggles.originalSelectOverlay&&(g=currentTheme.selectOutlineColor,u=currentTheme.selectEdgeOpacityFactor),window.SHOW_TEXTURES&&("bg"==o||"box"==o&&toggles.boxRendering)||_DrawRectangle(d,i*h,c,n,s,a,!1),window.SHOW_TEXTURES||_DrawRectangle(g,i*u,c,n,s,a,!0)}function RenderNRObjectBox(e,t,o){let r=e.pm,i=r.x,l=r.y,c=window.ThinkOfBBoxClass(e._class,e),n=window.bo_x[c],s=window.bo_y[c],a=window.bo_w[c],d=window.bo_h[c],g,h=w2s_y(l+s),u,w=w2s_h(d);-1!=r.side?(g=w2s_x(i+n),u=w2s_w(a)):(g=w2s_x(i-n),g+=u=w2s_w(-a),u=-u),_DrawRectangle(t,o,g,h,u,w,!0)}function RenderSingleNonResizableObject(e,t){let o=e._class,r=window.MatchLayer(e)?1:.3,i=e.pm,l=i.x,c=i.y,n="#000",s=.1;ObjIsHighlighted(e,t)&&(n=currentTheme.highLightedObjEdgeColor,s=currentTheme.highLightedObjEdgeOpacity/r),e.selected&&!toggles.originalSelectOverlay&&(n=currentTheme.selectOutlineColor,s=currentTheme.selectEdgeOpacityFactor),RenderNRObjectBox(e,n,r*s),ctx.globalAlpha=r;let a=!1;if("decor"==o){let d=i.model;void 0==window.special_values_table.decor_model[d]&&-1==decorRequestsOnProgress.indexOf(d)&&(window.ServerRequest(`a=get_images&for_class=decor_model&update_const=${d}`,"request_consts"),decorRequestsOnProgress.push(d)),(0!=i.r||1!=i.sx||1!=i.sy)&&(ctx.save(),ctx.translate(w2s_x(l),w2s_y(c)),ctx.rotate(i.r/180*Math.PI),ctx.scale(i.sx,i.sy),ctx.translate(-w2s_x(l),-w2s_y(c)),a=!0)}let g=window.ThinkOfOffsetClass(o,e),h=-1!=i.side?1:-1,u=w2s_x(l+h*window.lo_x[g]),w=w2s_y(c+window.lo_y[g]),x=w2s_w(h*window.lo_w[g]),m=w2s_h(window.lo_h[g]);if(-1==h&&(ctx.save(),ctx.translate(2*u+x,0),ctx.scale(-1,1)),-1!==["player","enemy"].indexOf(o))draw_image(window.img_chars_full[i.char],w2s_x(i.x-36),w2s_y(i.y-104),w2s_w(110),w2s_h(130));else if("decor"!=o||void 0===window.CACHED_DECORS[i.model]||window.CACHED_DECORS[i.model].native)draw_image(window.img_decide(e),u,w,x,m);else{-1!==decorRequestsOnProgress.indexOf(i.model)&&decorRequestsOnProgress.splice(decorRequestsOnProgress.indexOf(i.model),1);let C=window.CACHED_DECORS[i.model];draw_image(C,w2s_x(i.x+i.u),w2s_y(i.y+i.v),w2s_w(C.width),w2s_h(C.height))}-1==h&&ctx.restore(),a&&ctx.restore()}function GetObjectCoordAndSize(e){let t=e.pm,o,r,i,l;if(e._isresizable)o=w2s_x(t.x),r=w2s_y(t.y),i=w2s_w(t.w),l=w2s_h(t.h);else{let c=window.ThinkOfBBoxClass(e._class,e);r=w2s_y(t.y+window.bo_y[c]),l=w2s_h(window.bo_h[c]),-1!=t.side?(o=w2s_x(t.x+window.bo_x[c]),i=w2s_w(window.bo_w[c])):(o=w2s_x(t.x-window.bo_x[c]),o+=i=w2s_w(-window.bo_w[c]),i=-i)}return{x:o,y:r,w:i,h:l}}function RenderObjectMarkAndName(e,t){if(!window.ENABLE_TEXT||void 0==e.pm.uid||!window.MatchLayer(e))return;void 0==window.last_title_density&&(window.last_title_density=0);let o=t.x+t.w/2,r=t.y+t.h/2,i=e.selected&&e.hit(!1);ctx.font="normal 10px Arial";let l=e.pm.uid,c=ctx.measureText(l);if(c.height=10,i&&(c.height=12),window.mouse_x>o-30&&window.mouse_x<o+30&&window.mouse_y>r-30&&window.mouse_y<r+30&&title_density++,ctx.globalAlpha=1,window.last_title_density>1&&!i){let n=Math.sqrt(Math.pow(window.mouse_x-o,2)+Math.pow(window.mouse_y-r,2));n<60&&(e.selected?ctx.globalAlpha=Math.max(.3,1/window.last_title_density):(o-=(window.mouse_x-o)*Math.pow((60-n)/60,2)*(4+Math.min(6,.1*window.last_title_density)),r-=(window.mouse_y-r)*Math.pow((60-n)/60,2)*(4+Math.min(6,.1*window.last_title_density)),window.last_title_density>1&&(ctx.globalAlpha=Math.max(.4,1-.1*window.last_title_density))))}let s=Math.round(o-c.width/2),a=Math.round(r-c.height/2);window.ENABLE_SHADOWS&&(ctx.fillStyle="rgba(0,0,0,0.1)",ctx.fillRect(s-2,a-2,c.width+4,c.height+4),ctx.fillRect(s-4,a-4,c.width+8,c.height+8)),ctx.fillStyle="#FFF",i&&(ctx.fillStyle="#fffb91"),e.selected&&(ctx.fillStyle=currentTheme.selectTextColor),ctx.fillText(l,s,a+8+(c.height-10)/2),window.last_title_density=window.title_density}function RenderSelectOverlay(e,t){e.selected&&toggles.originalSelectOverlay&&(ctx.globalAlpha=.2,ctx.fillStyle=window.selgrd2,draw_rect(t.x,t.y,t.w,t.h),ctx.globalAlpha=1,ctx.fillStyle="#FFF",window.MyDrawSelection(t.x-2,t.y-2,t.w+4,t.h+4))}function ChangeCursorIfHitsBorder(e,t){if(!e.selected||!e._isresizable||!window.MatchLayer(e))return;t.x,t.y,t.w,t.h;let o=e.pm.x,r=e.pm.y,i=e.pm.w,l=e.pm.h,c=mCurrentX,n=mCurrentY,s=window.borderwidth;if(c<o-s||o+i+s<c||n<r-s||r+l+s<n)return;let a,d,g,h=!1;o-s<=c&&c<=o+s&&(g=!0),o+i-s<=c&&c<=o+i+s&&(h=!0),r-s<=n&&n<=r+s&&(a=!0),r+l-s<=n&&n<=r+l+s&&(d=!0);let u="default";a&&g||d&&h?u="nwse-resize":a&&h||d&&g?u="nesw-resize":a||d?u="ns-resize":(g||h)&&(u="ew-resize"),window.canv.style.cursor!=u&&(window.canv.style.cursor=u)}function RenderQuickPick(e,t){if(!(window.quick_pick&&-1!=window.lqpc.indexOf(e._class))||!window.MatchLayer(e))return;let o=t.x,r=t.y,i=t.w,l=t.h,c=o+i/2,n=r+l/2,s=Math.sin(new Date().getTime()/100);ctx.globalAlpha=.75-s/4;let a=27+5*s,d=!1;window.es[window.quick_pick_fake_over]==e?d=!0:window.Dist2D(c,n,window.mouse_x,window.mouse_y)<20*window.quick_pick_hit_scale&&(d=!0),draw_image(d?window.img_quickpick2:window.img_quickpick,c-a,n-a,2*a,2*a)}function RenderConnectionLines(e,t){if(!window.SHOW_CONNECTIONS||!e.selected||!aleiRunning)return;let o=window.MatchLayer(e)?1:.3,r=window.ObjectConnectionMapping,i=window.uidToElementMap,l=e.pm.uid;if(void 0==l||0==r.length||void 0==r[l]||0==r[l].by.length&&0==r[l].to.length)return;let c=r[l].by,n=r[l].to,s,a,d,g;for(let h of(s=t.x+t.w/2,d=t.y+t.h/2,ctx.globalAlpha=o*currentTheme.objectConnectionOpacityFactor,ctx.lineWidth=1,ctx.strokeStyle=currentTheme.objectConnectionToColor,ctx.setLineDash(currentTheme.objectConnectionDash),n)){let u=GetObjectCoordAndSize(i[h]);a=u.x+u.w/2,g=u.y+u.h/2,ctx.beginPath(),ctx.moveTo(s,d),ctx.lineTo(a,g),ctx.stroke()}for(let w of(ctx.strokeStyle=currentTheme.objectConnectionFromColor,a=s,g=d,c)){let x=GetObjectCoordAndSize(i[w]);s=x.x+x.w/2,d=x.y+x.h/2,ctx.beginPath(),ctx.moveTo(s,d),ctx.lineTo(a,g),ctx.stroke()}ctx.setLineDash([])}function RenderSingleObject(e,t){e._isresizable?RenderSingleResizableObject(e,t):RenderSingleNonResizableObject(e,t),RenderSelectOverlay(e,t),RenderQuickPick(e,t),RenderObjectMarkAndName(e,t),RenderConnectionLines(e,t),ChangeCursorIfHitsBorder(e,t)}function RenderAllObjects(){totalRenderedObjects=0;let e=window.left_panel.getBoundingClientRect(),t=window.right_panel.getBoundingClientRect(),o=window.top_panel.getBoundingClientRect(),r=Math.round(s2w_x(e.width+e.x)),i=Math.round(s2w_y(o.height+o.y)),l=Math.round(s2w_w(t.x-(e.width+e.x))),c=Math.round(s2w_h(canvasHeight-(o.height+o.y)));for(let n of window.es){let s=n.pm,a=s.x,d=s.y,g=s.w?s.w:0,h=s.h?s.h:0;if(!n.exists||!n._isphysical)continue;let u;n.selected&&(u=GetObjectCoordAndSize(n),RenderConnectionLines(n,u)),!(a+g<r)&&!(d+h<i)&&!(r+l<a)&&!(i+c<d)&&(void 0==u&&(u=GetObjectCoordAndSize(n)),RenderSingleObject(n,u),totalRenderedObjects++)}}function RenderSelectionBox(){if(!window.m_drag_selection||window.lmd)return;let e=w2s_x(mClickX),t=w2s_y(mClickY),o=w2s_w(mCurrentX-mClickX),r=w2s_h(mCurrentY-mClickY),i=currentTheme.selectionColor;window.ctrl?i=currentTheme.selectionCtrlColor:window.alt&&(i=currentTheme.selectionAltColor),_DrawRectangle(i,currentTheme.selectionOpacity,e,t,o,r),_DrawRectangle(i,currentTheme.selectionEdgeOpacity,e,t,o,r,!0)}function RenderBackground(){window.SHOW_TEXTURES?draw_image(window.CACHED_SKY[previewBackground],0,0,canvasWidth,canvasHeight):(ctx.fillStyle=currentTheme.backgroundColor,draw_rect(0,0,canvasWidth,canvasHeight))}function SnapToGrid(e){return Math.round(e/window.GRID_SNAPPING)*window.GRID_SNAPPING}function RenderCrossCursor(){"edit"!=window.active_tool&&(ctx.globalAlpha=1,draw_image(window.img_put,w2s_x(SnapToGrid(mCurrentX))-15,w2s_y(SnapToGrid(mCurrentY))-15,31,31))}function RenderFrame(){window.need_redraw&&(canvasWidth=window.lsu,canvasHeight=window.lsv,currentTheme=themes[window.THEME],gridOpacity=window.GRID_ALPHA,mClickX=window.lmdrwa,mClickY=window.lmdrwb,mCurrentX=window.lmwa,mCurrentY=window.lmwb,window.canv.style.cursor="default",ctx.globalAlpha=1,RenderBackground(),RenderGrid(),RenderAllObjects(),RenderSelectionBox(),RenderCrossCursor())}function DisplayStatistics(){let e=document.getElementById("gui_renderInfo");void 0==e&&((e=document.createElement("div")).id="gui_renderInfo",e.innerHTML="Waiting for data...",window.right_panel.childNodes[0].insertBefore(e,document.getElementById("gui_params")));let t=" ";t+=`Renderer FPS: ${displayFPS} <br>`,t+=`Rendered Object: ${totalRenderedObjects} / ${window.es.length}`,e.innerHTML=t.slice(1).replaceAll("\n","<br>")}function getTimeMs(){return new Date().getTime()}function RequestRedrawIfGridMoved(){let e=window.k_shift?5:1,t=!1;if(0!==window.speed_x){let o=10*window.zoom*e*window.speed_x;window.dis_from_x+=o,window.dis_to_x+=o,t=!0}if(0!==window.speed_y){let r=10*window.zoom*e*window.speed_y;window.dis_from_y+=r,window.dis_to_y+=r,t=!0}t&&(window.zoom_validate(),window.need_redraw=!0,window.lmd=!1,window.lmwa=s2w_x(window.mouse_x),window.lmwb=s2w_x(window.mouse_y))}function HandleSingleFrame(){window.requestAnimationFrame(HandleSingleFrame),RequestRedrawIfGridMoved(),RenderFrame(),window.need_GUIParams_update&&(window.need_GUIParams_update=!1,window.UpdateGUIParams(),window.UpdateGUIObjectsList()),fpsAccumulator++,getTimeMs()-lastTime>=1e3&&(lastTime=getTimeMs(),displayFPS=fpsAccumulator,fpsAccumulator=0),DisplayStatistics(),aleiRunning&&!haveForcedRecalculation&&void 0!=document.getElementById("rparams")&&(window.ShowHideObjectBox(),window.ShowHideObjectBox(),haveForcedRecalculation=!0)}function PreviewModeUpdateVariables(e){if(e)for(let t of window.es){if("inf"!=t._class)continue;let o=t.pm;if("sky"==o.mark){previewBackground=o.forteam;return}}}function RegisterSettingsToALEI(){if(!window.ALEI_Active)return;aleiRunning=!0;let e=window.ALEIAPI.settings;e.addText("[R] Cartoonish Edges:",!1),e.createButtons("ALEI_Renderer_CartoonishEdges",toggles,"cartoonishEdges",[["Yes",!0],["No",!1]]),e.addText("[R] Original Select:",!1),e.createButtons("ALEI_Renderer_OriginalSelectOverlay",toggles,"originalSelectOverlay",[["Yes",!0],["No",!1]]),e.addText("[R] Preview walls:",!1),e.createButtons("ALEI_Renderer_PreviewWalls",toggles,"boxRendering",[["Yes",!0],["No",!1]]),window.ALEI_settingUpdateButtons()}!function(){ctx=window.ctx,draw_rect_edges=(e,t,o,r)=>ctx.strokeRect(e,t,o,r),draw_rect=window.lmfr,draw_gridlines=window.lg,draw_image=(e,t,o,r,i)=>window.MyDrawImage(e,t,o,r,i),w2s_x=window.w2s_x,w2s_y=window.w2s_y,s2w_x=window.s2w_x,s2w_y=window.s2w_y,w2s_h=window.w2s_h,w2s_w=window.w2s_w,s2w_h=window.s2w_h,s2w_w=window.s2w_w;let e=window.ShowTexturesSet;window.ShowTexturesSet=t=>{PreviewModeUpdateVariables(t),e(t)},window.Render=()=>{},window.ani=()=>{},window.requestAnimationFrame(HandleSingleFrame),lastTime=getTimeMs(),RegisterSettingsToALEI(),aleiRunning||window.NewNote("ALEI Renderer: You are not running with ALEI. Don't expect feature completeness as renderer depends on ALEI giving some informations.","#FFFF00"),console.log("[ALEI Renderer]: Active.")}();
        return;
    };
    if(!aleiSettings.blackTheme) return;
    // We should only patch for black theme, because setting render makes things lag for no apparent reason.

    let fn = ALE_Render.toString();
    fn = fn.replaceAll("for ( property", "for ( let property");

    // Noname & Xeden's black theme
    let GridColor = "#222222";
    let GridLineColor = "#FFFFFF50";

    fn = fn.replace("if ( THEME === THEME_BLUE )", `if (THEME === 4) ctx.fillStyle = '${GridColor}';\n else if (THEME === THEME_BLUE)`);
    fn = fn.replace("if ( THEME !== THEME_DARK )", `if (THEME === 4) ctx.fillStyle = '${GridLineColor}';\n else if (THEME !== THEME_DARK)`);

    window.Render = eval(`(${fn})`);
}

function patchDeleteSelection() {
    let og = window.DeleteSelection;
    window.DeleteSelection = () => {
        for(let selected of SelectedObjects) OCM_onObjectDelete(selected);
        og();
    };
}

let ALE_start = (async function() {
    'use strict';

    window.ALEIAPI = {};

    VAL_TABLE = special_values_table;
    ROOT_ELEMENT = document.documentElement;
    stylesheets = document.styleSheets;
    ALE_Render = Render;
    window.ObjectConnectionMapping = {};
    window.uidToElementMap = {};

    // Updates the current CSS stylesheet.
    updateCSSFile();

    // Handling rest of things
    addPropertyPanelResize();
    addObjBoxResize();

    updateStyles();
    updateSkins();
    updateSounds();
    updateVoicePresets();
    updateParameters();
    updateOffsets();
    updateObjects();
    updateButtons();
    patch_m_down();
    addSessionSync();
    addTriggerIDs();
    patchShowHideButton();
    optimize();
    patchUpdateTools();
    patchDecorUpload();
    patchEntityClass();
    patchNewNote();
    patchEvalSet();
    // Allowing for spaces in parameters.
    window.UpdatePhysicalParam = UpdatePhysicalParam;
    window.PasteFromClipBoard = PasteFromClipBoard;
    patchANI();
    // Tooltip.
    if(aleiSettings.enableTooltips) {
        doTooltip();
    }
    patchServerRequest();
    if (aleiSettings.extendedTriggers) extendTriggerList();
    patchUpdateGUIParams();
    patchTeamList();
    if(aleiSettings.orderedNaming) patchRandomizeName();
    patchAllowedCharacters();
    if (aleiSettings.blackTheme) {
        blackTheme();
    }
    addProjectileModels();
    patchSpecialValue();
    UpdateTools();
    patchPercentageTool();
    patchCompileTrigger();
    createClipboardDiv();
    addPasteFromPermanentClipboard();

    if (!aleiSettings.extendedTriggers) {
		registerClipboardItemAction();
		patchClipboardFunctions();
	}

    patchDrawGrid();
    addFunctionToWindow();
    createALEISettingsMenu();
    patchDeleteSelection();

    if(isNative) {
        checkForUpdates();
    } else {
        // load this map twice to parse extended triggers.
        if(mapid !== "" && aleiSettings.extendedTriggers) LoadThisMap();
    }
    changeTopRightText();

    aleiLog(DEBUG2, "Settings: " + JSON.stringify(aleiSettings));
    ALEI_UpdateNameRenderSetting(aleiSettings.renderObjectNames);

    let ALE_PreviewQualitySet = window.PreviewQualitySet;
    window.PreviewQualitySet = (val) => {
        ALE_PreviewQualitySet(val);
        writeStorage("ALEI_PreviewQualitySet", val);
    };

    window.PreviewQualitySet(
        readStorage(
            "ALEI_PreviewQualitySet",
            false,
            (val) => val === "true")
    );

    patchRender();

    NewNote("ALEI: Welcome!", "#7777FF");
    NewNote(`Don't forget to join discord server! discord.gg/K5jcNEvZ85`, "#7777FF");
    aleiLog(INFO, `Welcome!`);
    if(isNative) {
        aleiLog(INFO, `TamperMonkey Version: ${GM_info.version} ALEI Version: ${GM_info.script.version}`);
    } else {
        let message = "You are running ALEI not under tampermonkey, this is not native ALEI, please load ALEI by tampermonkey when possible.";
        NewNote(`ALEI: ${message}`, "#FFFF00");
        NewNote(`ALEI: Check https://github.com/LisABC/ALEI for more details.`, "#FFFF00");
        aleiLog(INFO, message);
    }
});

document.addEventListener("DOMContentLoaded", () => ALE_start());
