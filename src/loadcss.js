import "./static/aleistyles.css";
import "./static/themes.css";

/*
for some reason the vanilla ThemeSet function does this:
"
for (var i = 1; i < document.styleSheets.length - 1; i++)
    document.styleSheets[i].disabled = true;
"
I have no idea why that exists but it breaks webpack's stylesheets because they get disabled.
fixWebpackStyleSheets fixes that.
*/

const webpackStylesheetName = "style-from-webpack";

const themes = {
    0: "blueTheme",
    1: "darkTheme",
    2: "purpleTheme",
    3: "greenTheme",
    4: "aleidarkTheme",
}

export function patchThemeSet() {
    const origThemeSet = unsafeWindow.ThemeSet;

    unsafeWindow.ThemeSet = function(value) {
        const oldTheme = themes[THEME];
        const newTheme = themes[value];
        document.body.classList.remove(oldTheme);
        document.body.classList.add(newTheme);
        console.log("changed theme: " + oldTheme + " -> " + newTheme);

        origThemeSet(value);
    }
}

export function fixWebpackStyleSheets() {
    for (let i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].title == webpackStylesheetName) {
            document.styleSheets[i].disabled = false;
        }
    }
    fixBullshitInThemeSet();
}

function fixBullshitInThemeSet() {
    let oldCodeSnippet = "document.styleSheets[ i ].disabled = \ntrue;";
    let newCodeSnippet = `if (document.styleSheets[i].title != "${webpackStylesheetName}") { ` + 
                            "document.styleSheets[i].disabled = true; " + 
                         "}";
    let code = unsafeWindow.ThemeSet.toString().replace(oldCodeSnippet, newCodeSnippet);
    code = "(" + code + ")";
    unsafeWindow.ThemeSet = eval(code);
}