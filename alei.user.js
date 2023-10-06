// ==UserScript==
// @name         ALE Improvements
// @version      0.1
// @description  Changes to make ALE better.
// @author       mici1234
// @match        *://www.plazmaburst2.com/level_editor/map_edit.php*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setTimeout(function() {
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
    }, 2000)
})();