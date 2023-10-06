// ==UserScript==
// @name         ALE Improvements
// @version      0.4
// @description  Changes to make ALE better.
// @author       mici1234
// @match        *://www.plazmaburst2.com/level_editor/map_edit.php*
// @grant        none
// ==/UserScript==

function updateSounds() {
    // This adds sounds that exist in game but doesn't exist in ALE
    // Currently the display name is just ID
    let SVTS = special_values_table["sound"];
    SVTS['am_base'] = 'am_base';
    SVTS['am_wind'] = 'am_wind';
    SVTS['android2_die'] = 'android2_die';
    SVTS['android2_hurt'] = 'android2_hurt';
    SVTS['android2_welcome2'] = 'android2_welcome2';
    SVTS['arrin_death1'] = 'arrin_death1';
    SVTS['arrin_dying'] = 'arrin_dying';
    SVTS['arrin_hurt1'] = 'arrin_hurt1';
    SVTS['arrin_hurt2'] = 'arrin_hurt2';
    SVTS['arrin_welcome1'] = 'arrin_welcome1';
    SVTS['arrin_welcome2'] = 'arrin_welcome2';
    SVTS['arrin_welcome3'] = 'arrin_welcome3';
    SVTS['bounce_bullet'] = 'bounce_bullet';
    SVTS['dart4'] = 'dart4';
    SVTS['exp_event_stop'] = 'exp_event_stop';
    SVTS['exp_level'] = 'exp_level';
    SVTS['exp_tick'] = 'exp_tick';
    SVTS['gameplay_song'] = 'gameplay_song';
    SVTS['gravitator2'] = 'gravitator2';
    SVTS['helm_proxy_alert_over_hereB'] = 'helm_proxy_alert_over_hereB';
    SVTS['helm_proxy_alert_take_coverB'] = 'helm_proxy_alert_take_coverB';
    SVTS['helm_proxy_alert_up_thereA'] = 'helm_proxy_alert_up_thereA';
    SVTS['helm_proxy_death3'] = 'helm_proxy_death3';
    SVTS['helm_proxy_death4'] = 'helm_proxy_death4';
    SVTS['helm_proxy_death5'] = 'helm_proxy_death5';
    SVTS['helm_proxy_death6'] = 'helm_proxy_death6';
    SVTS['helm_proxy_dyingC'] = 'helm_proxy_dyingC';
    SVTS['helm_proxy_dyingF'] = 'helm_proxy_dyingF';
    SVTS['helm_proxy_enemy_down_fantasticA'] = 'helm_proxy_enemy_down_fantasticA';
    SVTS['helm_proxy_enemy_down_got_oneD'] = 'helm_proxy_enemy_down_got_oneD';
    SVTS['helm_proxy_enemy_down_niceA'] = 'helm_proxy_enemy_down_niceA';
    SVTS['helm_proxy_enemy_down_niceC'] = 'helm_proxy_enemy_down_niceC';
    SVTS['helm_proxy_hurt11'] = 'helm_proxy_hurt11';
    SVTS['helm_proxy_hurt12'] = 'helm_proxy_hurt12';
    SVTS['helm_proxy_hurt13'] = 'helm_proxy_hurt13';
    SVTS['helm_proxy_hurt14'] = 'helm_proxy_hurt14';
    SVTS['helm_proxy_hurt15'] = 'helm_proxy_hurt15';
    SVTS['helm_proxy_hurt17'] = 'helm_proxy_hurt17';
    SVTS['helm_proxy_hurt4'] = 'helm_proxy_hurt4';
    SVTS['helm_proxy_hurt5'] = 'helm_proxy_hurt5';
    SVTS['helm_proxy_hurt8'] = 'helm_proxy_hurt8';
    SVTS['helm_proxy_hurt9'] = 'helm_proxy_hurt9';
    SVTS['hexagon_death1'] = 'hexagon_death1';
    SVTS['hexagon_death2'] = 'hexagon_death2';
    SVTS['hexagon_pain1'] = 'hexagon_pain1';
    SVTS['hexagon_pain2'] = 'hexagon_pain2';
    SVTS['hexagon_pain3'] = 'hexagon_pain3';
    SVTS['hexagon_pain4'] = 'hexagon_pain4';
    SVTS['hexagon_welcome1'] = 'hexagon_welcome1';
    SVTS['hexagon_welcome2'] = 'hexagon_welcome2';
    SVTS['hexagon_welcome3'] = 'hexagon_welcome3';
    SVTS['main_song'] = 'main_song';
    SVTS['orakin_death1'] = 'orakin_death1';
    SVTS['orakin_death2'] = 'orakin_death2';
    SVTS['orakin_hurt'] = 'orakin_hurt';
    SVTS['orakin_welcome'] = 'orakin_welcome';
    SVTS['proxy_alert_over_hereB'] = 'proxy_alert_over_hereB';
    SVTS['proxy_alert_take_coverB'] = 'proxy_alert_take_coverB';
    SVTS['proxy_alert_up_thereA'] = 'proxy_alert_up_thereA';
    SVTS['proxy_death3'] = 'proxy_death3';
    SVTS['proxy_death4'] = 'proxy_death4';
    SVTS['proxy_death5'] = 'proxy_death5';
    SVTS['proxy_death6'] = 'proxy_death6';
    SVTS['proxy_dyingC'] = 'proxy_dyingC';
    SVTS['proxy_dyingF'] = 'proxy_dyingF';
    SVTS['proxy_enemy_down_fantasticA'] = 'proxy_enemy_down_fantasticA';
    SVTS['proxy_enemy_down_got_oneD'] = 'proxy_enemy_down_got_oneD';
    SVTS['proxy_enemy_down_niceA'] = 'proxy_enemy_down_niceA';
    SVTS['proxy_enemy_down_niceC'] = 'proxy_enemy_down_niceC';
    SVTS['proxy_hurt11'] = 'proxy_hurt11';
    SVTS['proxy_hurt12'] = 'proxy_hurt12';
    SVTS['proxy_hurt13'] = 'proxy_hurt13';
    SVTS['proxy_hurt14'] = 'proxy_hurt14';
    SVTS['proxy_hurt15'] = 'proxy_hurt15';
    SVTS['proxy_hurt17'] = 'proxy_hurt17';
    SVTS['proxy_hurt4'] = 'proxy_hurt4';
    SVTS['proxy_hurt5'] = 'proxy_hurt5';
    SVTS['proxy_hurt8'] = 'proxy_hurt8';
    SVTS['proxy_hurt9'] = 'proxy_hurt9';
    SVTS['silk_alert_contactA'] = 'silk_alert_contactA';
    SVTS['silk_alert_i_see_oneA'] = 'silk_alert_i_see_oneA';
    SVTS['silk_alert_there_is_oneA'] = 'silk_alert_there_is_oneA';
    SVTS['silk_death1B'] = 'silk_death1B';
    SVTS['silk_death2B'] = 'silk_death2B';
    SVTS['silk_dyingB'] = 'silk_dyingB';
    SVTS['silk_enemy_down_brilliantC'] = 'silk_enemy_down_brilliantC';
    SVTS['silk_enemy_down_eliminatedB'] = 'silk_enemy_down_eliminatedB';
    SVTS['silk_enemy_down_hell_yeahB'] = 'silk_enemy_down_hell_yeahB';
    SVTS['silk_enemy_down_ive_got_oneB'] = 'silk_enemy_down_ive_got_oneB';
    SVTS['silk_enemy_down_minus_oneB'] = 'silk_enemy_down_minus_oneB';
    SVTS['silk_enemy_down_no_kicking_for_youB'] = 'silk_enemy_down_no_kicking_for_youB';
    SVTS['silk_hurt1B'] = 'silk_hurt1B';
    SVTS['silk_hurt2B'] = 'silk_hurt2B';
    SVTS['silk_hurt5'] = 'silk_hurt5';
    SVTS['silk_hurt6'] = 'silk_hurt6';
    SVTS['silk_hurt9B'] = 'silk_hurt9B';
    SVTS['wea_crossfire2'] = 'wea_crossfire2';
    SVTS['wea_ditzy_cs_ik'] = 'wea_ditzy_cs_ik';
    SVTS['wea_glhf'] = 'wea_glhf';
    SVTS['wea_incompetence_archetype_27xx_fire'] = 'wea_incompetence_archetype_27xx_fire';
    SVTS['wea_lazyrain_gravy_rl'] = 'wea_lazyrain_gravy_rl';
    SVTS['wea_m202'] = 'wea_m202';
    SVTS['wea_moonhawk_railgun'] = 'wea_moonhawk_railgun';
    SVTS['wea_ph01'] = 'wea_ph01';
    SVTS['wea_plasma_shotgun'] = 'wea_plasma_shotgun';
    SVTS['wea_rail_alt2'] = 'wea_rail_alt2';
    SVTS['wea_thetoppestkek_shotgun_nxs25'] = 'wea_thetoppestkek_shotgun_nxs25';
    SVTS['xin_celebrate'] = 'xin_celebrate';
    SVTS['xin_death'] = 'xin_death';
    SVTS['xin_enemy_spotted'] = 'xin_enemy_spotted';
    SVTS['xin_hit'] = 'xin_hit';
}
function updateStyles() {
    // Updates right panel to make it bigger.
    var style = document.createElement("style");
    style.innerHTML = `
    .pa2 {
        width: 100%;
    }
    .rightui {
        width: 60vh;
    }
    .opcode_field {
        font-size: 12px;
    }
    `
    document.head.appendChild(style);
}
function updateSkins() {
    // This adds skins that exist in-game but doesn't exist in ALE.
    let charlists = [
        [38, "GoldenKnife Noir"],
        [39, "RootZ Noir"],

        [151, "Purple Xin"],
        [152, "Golden Xin"],
        [153, "Blue Xin"],
        [154, "Red Xin"],
        [155, "Amber Xin"],

        [156, "Nirvana Noir"],

        [157, "Purple Gallynew"],
        [158, "Golden Gallynew"],
        [159, "Blue Gallynew"],
        [160, "Red Gallynew"],
        [161, "Amber Gallynew"],

        [162, "Pinkine"],
        [163, "Oryx"],
        [164, "Blue Heavy Battlesuit"],
        [165, "Red Heavy Battlesuit"],
        [166, "Orakin"],
        [167, "Husk"],
        [168, "Hex"],
        [169, "Arrin"],
        [170, "Usurpation McDonald's Lover"]

    ]
    for(let li = 0; li < charlists.length; li++) {
        let charID = charlists[li][0];
        let paddedCharID = charID.toString().padStart(4, "0")
        let charName = charlists[li][1];
        let src = "https://www.plazmaburst2.com/level_editor/chars_full/char" + paddedCharID + ".png"
        special_values_table['char'][charID] = '<span style=\'background:url(' + src + '); width: 16px; height: 16px; display: inline-block; background-position: center; background-position-x: 30%; background-position-y: 26%; background-size: 67px;vertical-align: -4px;\'></span> ' + charName;
        img_chars_full[charID] = new Image();
        img_chars_full[charID].src = 'chars_full/char' + paddedCharID + '.png';
    }
}

(function() {
    'use strict';

    setTimeout(function() {
        // Patches letedit and letover functions to make it work well while selecting things
        // In right panel
        let _letedit = letedit;
        window.letedit = function(obj, enablemode) {
            obj.style.width = "calc(60vh - 126px)";
            _letedit(obj, enablemode);
        }
        let _letover = letover;
        window.letover = function(obj, enablemode) {
            obj.style.width = "calc(60vh - 126px)";
            _letover(obj, enablemode);
        }
        // Calling rest of things
        updateStyles()
        updateSkins()
        updateSounds()
    }, 2000)
})();