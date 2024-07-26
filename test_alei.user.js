// ==UserScript==
// @name ALE Improvements
// @description Changes to make ALE better.
// @version 19.1
// @author mici1234, wanted2001, gcp5o
// @match *://www.plazmaburst2.com/level_editor/map_edit.php*
// @connect github.com
// @connect githubusercontent.com
// @downloadURL https://github.com/LisABC/ALEI/raw/main/alei.user.js
// @grant GM.xmlHttpRequest
// @icon https://github.com/LisABC/ALEI/blob/main/icon.png?raw=true
// @run-at document-start
// @updateURL https://github.com/LisABC/ALEI/raw/main/alei.user.js
// ==/UserScript==

/******/ (() => { // webpackBootstrap
/******/  "use strict";
/******/  var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/static/aleistyles.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/static/aleistyles.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.ALEI_settingMenuText {
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

#ALEI_tooltip {
    font-size: 16px;
    font-family: monospace;
    color: #eee;
    background-color: #000;
    padding: 10px;
    width: fit-content;
    border-radius: 4px;
    word-break: break-all;
    position: absolute;
    left: 100px;
    top: -100px;
}`, "",{"version":3,"sources":["webpack://./src/static/aleistyles.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,YAAY;IACZ,YAAY;IACZ,yBAAyB;IACzB,cAAc;IACd,kBAAkB;IAClB,kBAAkB;IAClB,qBAAqB;AACzB;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,kBAAkB;IAClB,yBAAyB;IACzB,WAAW;IACX,YAAY;IACZ,eAAe;IACf,kBAAkB;IAClB,qBAAqB;IACrB,iBAAiB;AACrB;;AAEA;IACI,yBAAyB;IACzB,cAAc;AAClB;;AAEA;IACI,yBAAyB;IACzB,cAAc;AAClB;;AAEA;IACI,eAAe;IACf,sBAAsB;IACtB,WAAW;IACX,sBAAsB;IACtB,aAAa;IACb,kBAAkB;IAClB,kBAAkB;IAClB,qBAAqB;IACrB,kBAAkB;IAClB,WAAW;IACX,WAAW;AACf","sourcesContent":[".ALEI_settingMenuText {\r\n    font-size: 14px;\r\n    width: 150px;\r\n    height: 20px;\r\n    background-color: #476082;\r\n    color: #bfcad9;\r\n    border-radius: 4px;\r\n    text-align: center;\r\n    display: inline-block;\r\n}\r\n\r\n.ALEI_settingsMenuButton {\r\n    background-color: #26354a;\r\n    color: #c1c9d3;\r\n    border-radius: 5px;\r\n    border: 1px solid #26354a;\r\n    width: 80px;\r\n    height: 20px;\r\n    font-size: 14px;\r\n    text-align: center;\r\n    display: inline-block;\r\n    margin-right: 4px;\r\n}\r\n\r\n.ALEI_settingsMenuButton:hover {\r\n    background-color: #596a83;\r\n    color: #f5faff;\r\n}\r\n\r\n.ALEI_settingMenuButtonClicked {\r\n    background-color: #91a5c1;\r\n    color: #fbfbfb;\r\n}\r\n\r\n#ALEI_tooltip {\r\n    font-size: 16px;\r\n    font-family: monospace;\r\n    color: #eee;\r\n    background-color: #000;\r\n    padding: 10px;\r\n    width: fit-content;\r\n    border-radius: 4px;\r\n    word-break: break-all;\r\n    position: absolute;\r\n    left: 100px;\r\n    top: -100px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/static/themes.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/static/themes.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* css variables go in these. */

:root, .blueTheme {
    --warning-go-away-pls: 0;
}

.darkTheme, .purpleTheme, .greenTheme {
    --warning-go-away-pls: 0;
}

/*this is unused cuz theme changing needs to be reworked first*/
.aleidarkTheme {
    --warning-go-away-pls: 0;
}`, "",{"version":3,"sources":["webpack://./src/static/themes.css"],"names":[],"mappings":"AAAA,+BAA+B;;AAE/B;IACI,wBAAwB;AAC5B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA,+DAA+D;AAC/D;IACI,wBAAwB;AAC5B","sourcesContent":["/* css variables go in these. */\r\n\r\n:root, .blueTheme {\r\n    --warning-go-away-pls: 0;\r\n}\r\n\r\n.darkTheme, .purpleTheme, .greenTheme {\r\n    --warning-go-away-pls: 0;\r\n}\r\n\r\n/*this is unused cuz theme changing needs to be reworked first*/\r\n.aleidarkTheme {\r\n    --warning-go-away-pls: 0;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/static/aleistyles.css":
/*!***********************************!*\
  !*** ./src/static/aleistyles.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_aleistyles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./aleistyles.css */ "./node_modules/css-loader/dist/cjs.js!./src/static/aleistyles.css");

      
      
      
      
      
      
      
      
      

var options = {"attributes":{"title":"style-from-webpack"}};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_aleistyles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_aleistyles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_aleistyles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_aleistyles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/static/themes.css":
/*!*******************************!*\
  !*** ./src/static/themes.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_themes_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./themes.css */ "./node_modules/css-loader/dist/cjs.js!./src/static/themes.css");

      
      
      
      
      
      
      
      
      

var options = {"attributes":{"title":"style-from-webpack"}};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_themes_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_themes_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_themes_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_themes_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js ***!
  \***************************************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement, attributes) {
  Object.keys(attributes).forEach(function (key) {
    styleElement.setAttribute(key, attributes[key]);
  });
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/alescript.js":
/*!**************************!*\
  !*** ./src/alescript.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parse: () => (/* binding */ parse)
/* harmony export */ });
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

/***/ }),

/***/ "./src/loadcss.js":
/*!************************!*\
  !*** ./src/loadcss.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fixWebpackStyleSheets: () => (/* binding */ fixWebpackStyleSheets),
/* harmony export */   patchThemeSet: () => (/* binding */ patchThemeSet)
/* harmony export */ });
/* harmony import */ var _static_aleistyles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./static/aleistyles.css */ "./src/static/aleistyles.css");
/* harmony import */ var _static_themes_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./static/themes.css */ "./src/static/themes.css");



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

function patchThemeSet() {
    const origThemeSet = unsafeWindow.ThemeSet;

    debugger;

    unsafeWindow.ThemeSet = function(value) {
        const oldTheme = themes[THEME];
        const newTheme = themes[value];
        document.body.classList.remove(oldTheme);
        document.body.classList.add(newTheme);
        //console.log("changed theme: " + oldTheme + " -> " + newTheme);

        origThemeSet(value);
    }
}

function fixWebpackStyleSheets() {
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

/***/ }),

/***/ "./src/renderer.user.js":
/*!******************************!*\
  !*** ./src/renderer.user.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ALEI_Renderer_OnDocumentLoad: () => (/* binding */ ALEI_Renderer_OnDocumentLoad)
/* harmony export */ });
// ==UserScript==
// @name         ALEI Renderer
// @namespace    http://tampermonkey.net/
// @version      5.0
// @description  try to take over the world!
// @author       Lisandra
// @match        *://*.plazmaburst2.com/level_editor/map_edit.php*
// @icon         https://github.com/LisABC/ALEI/blob/main/icon.png?raw=true
// @run-at       document-start
// ==/UserScript==



let window = unsafeWindow;

// Variables that Renderer actively uses.
let decorRequestsOnProgress = [];
let backgroundRequestsOnProgress = [];
let boxModelImages = {};
let aleiRunning = false;
let haveForcedRecalculation = false;
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
function _readStorage(key_, defaultValue, func) {
    let key = `ALEI_Renderer_${key_}`;
    let val = localStorage[key];
    if (val === undefined) return defaultValue;
    return func(localStorage[key])
}

let toggles = {
    cartoonishEdges      : _readStorage("CartoonishEdges"      , false, (val) => val === "true"),
    originalSelectOverlay: _readStorage("OriginalSelectOverlay", false, (val) => val === "true"),
    boxRendering         : _readStorage("PreviewWalls"         , false, (val) => val === "true")
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
        highLightedObjEdgeOpacity: 1,
        // Object connection line.
        objectConnectionDash: [4, 4],
        objectConnectionToColor: "#66ff66",
        objectConnectionFromColor: "#ffffff",
        objectConnectionOpacityFactor: 1 // TODO: Should this just be "opacity" and not "opacity factor"?

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
        highLightedObjEdgeOpacity: 1,
        objectConnectionDash: [4, 4],
        objectConnectionToColor: "#66ff66",
        objectConnectionFromColor: "#ffffff",
        objectConnectionOpacityFactor: 1
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
        highLightedObjEdgeOpacity: 1,
        objectConnectionDash: [4, 4],
        objectConnectionToColor: "#66ff66",
        objectConnectionFromColor: "#ffffff",
        objectConnectionOpacityFactor: 1
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
        highLightedObjEdgeOpacity: 1,
        objectConnectionDash: [4, 4],
        objectConnectionToColor: "#66ff66",
        objectConnectionFromColor: "#ffffff",
        objectConnectionOpacityFactor: 1
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
        highLightedObjEdgeOpacity: 1,
        objectConnectionDash: [4, 4],
        objectConnectionToColor: "#66ff66",
        objectConnectionFromColor: "#ffffff",
        objectConnectionOpacityFactor: 1
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
let regionImages = {} // Will be filled later.

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
function ObjIsHighlighted(element, cns) {
    if(!window.m_drag_selection) return; // If we are not dragging.
    if(window.lmd) return; // If the selection just started
    if(!window.MatchLayer(element)) return; // If layers dont match.

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
            ctx.rect(x, y, w, h);
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
            ctx.rect(x, y, w, h);
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

    if(ObjIsHighlighted(element, cns)) {
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

    if(ObjIsHighlighted(element, cns)) {
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
    if(!element._isresizable) return;
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

    let borderWidth = window.borderwidth;

    // Do elimination if checking is not necessary.
    if(mx < (x - borderWidth)) return;
    if((x + w + borderWidth) < mx) return;
    if(my < (y - borderWidth)) return;
    if((y+h+borderWidth) < my) return;

    let isTop, isBottom, isLeft, isRight = false;
    // X
    if( ((x - borderWidth) <= mx) && (mx <= (x+borderWidth)) ) isLeft = true;
    if( ((x+w-borderWidth) <= mx) && (mx <= (x+w+borderWidth)) ) isRight = true;
    // Y
    if( ((y-borderWidth) <= my) && (my <= (y+borderWidth))) isTop = true;
    if( ((y+h-borderWidth) <= my) && (my <= (y+h+borderWidth))) isBottom = true;

    let cursor = "default";
    if( (isTop && isLeft) || (isBottom && isRight) ) cursor = "nwse-resize";
    else if( (isTop && isRight) || (isBottom && isLeft) ) cursor = "nesw-resize";
    else if (isTop || isBottom) cursor = "ns-resize";
    else if (isLeft || isRight) cursor = "ew-resize";

    if(window.canv.style.cursor != cursor) window.canv.style.cursor = cursor;
}

function RenderQuickPick(element, cns) {
    if(!(window.quick_pick && window.lqpc.indexOf(element._class) != -1)) return;
    if(!window.MatchLayer(element)) return;

    let x = cns.x;
    let y = cns.y;
    let w = cns.w;
    let h = cns.h;

    let midX = x + w/2;
    let midY = y + h/2;

    let sinus = Math.sin((new Date()).getTime() / 100);

    ctx.globalAlpha = 0.75 - sinus / 4;
    let size = 27 + sinus * 5;

    let isOver = false;

    if(window.es[window.quick_pick_fake_over] == element) {
        isOver = true
    } else {
        let dist = window.Dist2D(midX, midY, window.mouse_x, window.mouse_y);
        if(dist < (20 * window.quick_pick_hit_scale)) {
            isOver = true;
        }
    }

    draw_image(
        isOver ? window.img_quickpick2 : window.img_quickpick,
        midX - size,
        midY - size,
        size * 2,
        size * 2
    );
}

function RenderConnectionLines(element, cns) {
    if(!window.SHOW_CONNECTIONS) return;
    if(!element.selected) return;
    if(!aleiRunning) return;

    let layerAlpha = window.MatchLayer(element) ? 1: 0.3;

    let ocm = window.ObjectConnectionMapping;
    let utem = window.uidToElementMap;
    let uid = element.pm.uid;

    if(uid == undefined) return;
    if(ocm.length == 0) return;
    if(ocm[uid] == undefined) return;
    if((ocm[uid].by.length == 0) && (ocm[uid].to.length == 0)) return;

    let referredBy = ocm[uid].by;
    let referringTo = ocm[uid].to;

    let fromX, toX;
    let fromY, toY;

    fromX = cns.x + cns.w/2;
    fromY = cns.y + cns.h/2;

    ctx.globalAlpha = layerAlpha * currentTheme.objectConnectionOpacityFactor;
    ctx.lineWidth = 1;
    ctx.strokeStyle = currentTheme.objectConnectionToColor;
    ctx.setLineDash(currentTheme.objectConnectionDash);

    // TODO: How can we batch line draws?
    // All of them will have same color. (By all, I mean every line that a loop handles.)
    // So it's best if we just batch them, but how do we do that?

    for(let to of referringTo) {
        let ocns = GetObjectCoordAndSize(utem[to]);
        toX = ocns.x + ocns.w/2;
        toY = ocns.y + ocns.h/2;

        ctx.beginPath();
        ctx.moveTo(fromX, fromY);
        ctx.lineTo(toX, toY);
        ctx.stroke();
    }

    ctx.strokeStyle = currentTheme.objectConnectionFromColor;
    toX = fromX;
    toY = fromY;

    for(let by of referredBy) {
        let ocns = GetObjectCoordAndSize(utem[by]);
        fromX = ocns.x + ocns.w/2;
        fromY = ocns.y + ocns.h/2;

        ctx.beginPath();
        ctx.moveTo(fromX, fromY);
        ctx.lineTo(toX, toY);
        ctx.stroke();
    }

    ctx.setLineDash([]);
}

function RenderSingleObject(element, cns) {
    if(element._isresizable) RenderSingleResizableObject(element, cns);
    else RenderSingleNonResizableObject(element, cns);
    RenderSelectOverlay(element, cns);
    RenderQuickPick(element, cns);
    RenderObjectMarkAndName(element, cns);
    RenderConnectionLines(element, cns);
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

        if(!element.exists) continue;
        if(!element._isphysical) continue;

        let cns;
        if(element.selected) {
            cns = GetObjectCoordAndSize(element);
            RenderConnectionLines(element, cns);
        }
        // Actual culling
        if( (x+w) < cx ) continue;
        if( (y+h) < cy ) continue;
        if( (cx+cw) < x ) continue;
        if( (cy+ch) < y ) continue;

        if(cns == undefined) cns = GetObjectCoordAndSize(element);
        RenderSingleObject(element, cns);
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

function SnapToGrid(value) {
    return Math.round(value / window.GRID_SNAPPING) * window.GRID_SNAPPING;
}

function RenderCrossCursor() {
    if(window.active_tool == "edit") return;
    ctx.globalAlpha = 1;
    draw_image(
        window.img_put,
        w2s_x(SnapToGrid(mCurrentX)) - 15,
        w2s_y(SnapToGrid(mCurrentY)) - 15,
        31,
        31
    );
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
    RenderCrossCursor();
}

function DisplayStatistics() {
    let element = document.getElementById("gui_renderInfo");
    if(element == undefined) {
        element = document.createElement("div");
        element.id = "gui_renderInfo";
        element.innerHTML = "Waiting for data...";
        window.right_panel.childNodes[0].insertBefore(element, document.getElementById("gui_params"));
    }
    let text = " ";
    text += `Renderer FPS: ${displayFPS} <br>`;
    text += `Rendered Object: ${totalRenderedObjects} / ${window.es.length}`;
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

    if(aleiRunning && !haveForcedRecalculation) {
        let elem = document.getElementById("rparams");
        if(elem == undefined) return;
        window.ShowHideObjectBox();
        window.ShowHideObjectBox();
        haveForcedRecalculation = true;
    }
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

function RegisterSettingsToALEI() {
    if(!window.ALEI_Active) return;
    aleiRunning = true;

    let ALEIAPI = window.ALEIAPI;

    if(ALEIAPI == undefined) {
        setTimeout(RegisterSettingsToALEI, 1000);
        return;
    }

    let settings = ALEIAPI.settings;

    settings.addText("[R] Cartoonish Edges:", false);
    settings.createButtons("ALEI_Renderer_CartoonishEdges", toggles, "cartoonishEdges", [["Yes", true], ["No", false]]);

    settings.addText("[R] Original Select:", false);
    settings.createButtons("ALEI_Renderer_OriginalSelectOverlay", toggles, "originalSelectOverlay", [["Yes", true], ["No", false]]);

    settings.addText("[R] Preview walls:", false);
    settings.createButtons("ALEI_Renderer_PreviewWalls", toggles, "boxRendering", [["Yes", true], ["No", false]]);

    window.ALEI_settingUpdateButtons();
}

function ALEI_Renderer_OnDocumentLoad() {
    ctx = window.ctx;

    // Draw functions.
    draw_rect_edges = (x, y, w, h) => ctx.strokeRect(x, y, w, h);
    draw_rect = window.lmfr;
    draw_gridlines = window.lg;
    draw_image = (img, x, y, w, h) => window.MyDrawImage(img, x, y, w, h);

    // Objects.
    regionImages = {
        1: window.img_region,
        9: window.img_region_red,
        10: window.img_region_blue
    }

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

    RegisterSettingsToALEI();
    if(!aleiRunning) window.NewNote(`ALEI Renderer: You are not running with ALEI. Don't expect feature completeness as renderer depends on ALEI giving some informations.`, "#FFFF00");

    // Logging.
    console.log(`[ALEI Renderer]: Active.`);
}

let isNative;

try {
    GM_info; // If this is running under tampermonkey.
    
    // If ALEI is not running us.
    if(["ALE Improvements", "ALE Improvements Local"].indexOf(GM_info.script.name) == -1) {
       isNative = true;
    } else {
       isNative = false; // Or ALEI is running us.
    };
}
catch(e) {isNative = true;}

// This is to ensure renderer can still run as separate userscript. (Manual work has to be done by removing 'export' from above manually.)
if(isNative) {
    document.addEventListener("DOMContentLoaded", () => ALEI_Renderer_OnDocumentLoad());
}

/***/ })

/******/  });
/************************************************************************/
/******/  // The module cache
/******/  var __webpack_module_cache__ = {};
/******/  
/******/  // The require function
/******/  function __webpack_require__(moduleId) {
/******/    // Check if module is in cache
/******/    var cachedModule = __webpack_module_cache__[moduleId];
/******/    if (cachedModule !== undefined) {
/******/      return cachedModule.exports;
/******/    }
/******/    // Create a new module (and put it into the cache)
/******/    var module = __webpack_module_cache__[moduleId] = {
/******/      id: moduleId,
/******/      // no module.loaded needed
/******/      exports: {}
/******/    };
/******/  
/******/    // Execute the module function
/******/    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/  
/******/    // Return the exports of the module
/******/    return module.exports;
/******/  }
/******/  
/************************************************************************/
/******/  /* webpack/runtime/compat get default export */
/******/  (() => {
/******/    // getDefaultExport function for compatibility with non-harmony modules
/******/    __webpack_require__.n = (module) => {
/******/      var getter = module && module.__esModule ?
/******/        () => (module['default']) :
/******/        () => (module);
/******/      __webpack_require__.d(getter, { a: getter });
/******/      return getter;
/******/    };
/******/  })();
/******/  
/******/  /* webpack/runtime/define property getters */
/******/  (() => {
/******/    // define getter functions for harmony exports
/******/    __webpack_require__.d = (exports, definition) => {
/******/      for(var key in definition) {
/******/        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/          Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/        }
/******/      }
/******/    };
/******/  })();
/******/  
/******/  /* webpack/runtime/hasOwnProperty shorthand */
/******/  (() => {
/******/    __webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/  })();
/******/  
/******/  /* webpack/runtime/make namespace object */
/******/  (() => {
/******/    // define __esModule on exports
/******/    __webpack_require__.r = (exports) => {
/******/      if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/        Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/      }
/******/      Object.defineProperty(exports, '__esModule', { value: true });
/******/    };
/******/  })();
/******/  
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loadcss_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadcss.js */ "./src/loadcss.js");
/* harmony import */ var _alescript_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alescript.js */ "./src/alescript.js");
/* harmony import */ var _renderer_user_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderer.user.js */ "./src/renderer.user.js");




"use strict";

let main_window = unsafeWindow;
let isNative;
try {
    GM_info
    isNative = true;
    main_window["nativeALEIRunning"] = true;
} catch (e) {
    isNative = false
};

if(!isNative && (main_window["nativeALEIRunning"] == true)) {
    Hello_IgnoreThisError_ItIsIntentional // hope this is not defined
}
main_window["ALEI_Active"] = true;

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
let ExtendedTriggersLoaded = false;

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
main_window.aleiSettings = aleiSettings;

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
let JS_setTimeout = main_window.setTimeout;
let JS_eval = main_window.eval;
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
        [18, "Star Defender (play map ID 'eric gurt-star_defenders' to unlock it)"],
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
        [197, "Phantom (play map ID 'therealon3-phantom' to unlock it)"],
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
        [215, "Blue Phantom (play map ID 'therealon3-phantom' to unlock it)"],
        [216, "Red Phantom (play map ID 'therealon3-phantom' to unlock it)"]
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
    main_window.setTimeout = (f, ms) => {
        if (f == ani) {main_window.requestAnimationFrame(ani)}
        else return JS_setTimeout(f, ms);
    }
    let _browseImages = main_window.BrowseImages;
    let ogImageLists = {};
    // Image caching.
    main_window.BrowseImages = function(for_class = 'bg_model', current_value = '', callback = null) {
        // If cache doesn't have the class we are looking for, we will just set default value.
        if (ogImageLists[for_class] == undefined) {
            ogImageLists[for_class] = "[ALEI] Loading...";
            aleiLog(INFO, `Will cache response of ${for_class}`);
        }
        // Overwrite setTimeout temporarily, as BrowseImages calls setTimeout for ServerRequest which sets the innerHTML of image_list
        let ost = main_window.setTimeout;
        main_window.setTimeout = (f, ms) => {
            main_window.setTimeout = ost; // Assign original setTimeout
            main_window.ServerRequest = (req, op, callback = null) => {
                main_window.ServerRequest = ALEI_ServerRequest; // Assign original ServerRequest
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
        ["gun_rl0", "BETA Rocket Launcher", "data:image/png;base64,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"]
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
    main_window.img_decors = CACHED_DECORS; // For some reason img_decors gets resetted
    let decors = [
        ["hakase", "Hakase", "data:image/png;base64,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"]
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
    main_window.ALEI_decors = decors;
}

function updateOffsets() {
    // Because hakase decor and grabbable ledge image is made with hand manually and doesn't come from website, and that there is no
    // inbuilt offset, we have to offset those to make sure they show up in ALE correctly.
    let toosc = main_window.ThinkOfOffsetClass;
    main_window.ThinkOfOffsetClass = function(tc, esi) {
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

    main_window.aleiButtonClicks = {};

    // Convenience function for doing easy top panel buttons
    function createButton(text, internalName, onClick) {
        let button = document.createElement("input");
        button.setAttribute("class", "field_btn");
        button.setAttribute("type", "button");
        button.setAttribute("value", text);
        button.setAttribute("onclick", `aleiButtonClicks['${internalName}']()`);
        main_window.aleiButtonClicks[internalName] = onClick;

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
    main_window.mapid_field = $id("mapid_field");
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
    let ALE_CopyToClipBoard = main_window.CopyToClipBoard;
    main_window.CopyToClipBoard = (clip_name) => {
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
    main_window.addEventListener('beforeunload', (event) => {
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
    main_window.splitter = splitter;
}

function addTriggerIDs() {
    if (!aleiSettings.showTriggerIDs) return;

    let SVTTP = VAL_TABLE['trigger_type'];
    for (let i in SVTTP) {
        SVTTP[i] = i + " " + SVTTP[i];
    }
}

function patchShowHideButton() {
    let og = main_window.ShowHideObjectBox;
    main_window.ShowHideObjectBox = function() {
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

main_window.ALEI_CustomSnapping = () => {
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

main_window.ALEI_UpdateRematchUIDSetting = function(value) {
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

main_window.ALEI_UpdateNameRenderSetting = function(status) { // TODO: we should have mixin function lol, check: <#1245454955477729382>
    main_window.ENABLE_TEXT = status;
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
    main_window.UpdateTools = function() {
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
    main_window.need_GUIParams_update = true;
}

/*
 * __OCM_EnsureValidReferences
 * This function is called in UpdatePhysicalParam(AFTER parameter was set.) to keep integrity of OCM (Object Connection Mapping)
 * Essentially just a function making sure the structure is valid on each parameter change.
 *
 * @param {E}     obj    PB2 Object to ensure validity of references of.
*/
function __OCM_EnsureValidReferences(obj) {
    let ocm = main_window.ObjectConnectionMapping;
    let utem = main_window.uidToElementMap;

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
        if(pm.extended && aleiSettings.extendedTriggers) {
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
    let ogES = main_window.es;
    main_window.es = SelectedObjects;
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
                main_window.es = ogES;
                // Making sure we keep names unique for OCM structure
                if(main_window.uidToElementMap[chvalue] !== undefined) {
                    NewNote(`ALEI: Object with name ${chvalue} already exists, consider naming it differently.`, "#FFFF00");
                    return;
                }
                updateUIDReferences(oldName, chvalue);

                if(aleiSettings.ocmEnabled) {
                    let ocm = main_window.ObjectConnectionMapping;
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

                ogES = main_window.es;
                main_window.es = SelectedObjects;
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
    main_window.es = ogES;
}

let imageContextMap = {};
let last_element;
let last_login;
main_window.aleiContextRenameImage = function(id) {
    var v = prompt('New name:', imageContextMap[id]);
    CloseImageContext();
    if ( v !== null ) {
        ServerRequest(`a=get_images&for_class=${last_for_class}&set_title_for=${id}&value=${v}`, "rename_image");
    }
}
main_window.aleiContextDeleteImage = function(id) {
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
    main_window.RandomizeName = RandomizeName;
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

main_window.blackThemeUndos = [];

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

    main_window.THEME = 4;

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

    main_window.es = [];
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
    main_window.clipboardItemAction = clipboardItemAction;
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

    let originalES = main_window.es;
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

    main_window.es = [];
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
    main_window.es = originalES;
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

    if(!edit_triggers_as_text && selection[0]._class == "trigger" && ExtendedTriggersLoaded){
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
    main_window.getImageSize = getImageSize;
    main_window.centerImageX = centerImageX;
    main_window.centerImageY = centerImageY;
    main_window.addTriggerActionCount = addTriggerActionCount;
}

let newUpdate = 0;

let targetElement;

document.addEventListener("mousedown", e => {
    targetElement = e.target;
});

document.addEventListener("keydown", e => {
    if(e.ctrlKey && e.code == "KeyA" && canvas_focus) {
        main_window.es.map(e => {
            if((e.exists) && (e._isphysical) && (MatchLayer(e))) {
                e.selected = true;
            }
            main_window.need_redraw = true;
            main_window.need_GUIParams_update = true;
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
                            let parsed = (0,_alescript_js__WEBPACK_IMPORTED_MODULE_1__.parse)(expression, [x, y, w, h, i]);

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

            // i is undefined and i'm pretty sure it's not supposed to be like that. so this definitely doesn't work how it should.
            // i'll just leave it cuz idk how it's supposed to be and it doesn't throw an error because of some implicit globals from vanilla ale
            let parsed = (0,_alescript_js__WEBPACK_IMPORTED_MODULE_1__.parse)(targetElement.value, [x, y, w, h, i]);

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
            main_window.open("https://github.com/LisABC/ALEI/raw/main/alei.user.js");
            newUpdate = false;
        }
    }
});

function doTooltip() {
    let tooltip = document.createElement("p");
    tooltip.id = "ALEI_tooltip";

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
    main_window.ani = function() {
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
    main_window.splitter2 = splitter;
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
    let og_mdown = main_window.m_down;
    main_window.m_down = function(e) {
        let previousEsLength = es.length;
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
            main_window.need_GUIParams_update = true;
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

main_window.SelectedObjects = [];

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
    main_window.E = function(_class) {
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
    let m_down_x = m_pos_x;
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
    main_window.need_redraw = true;
    main_window.need_GUIParams_update = true;
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

    main_window.es = new Array(); // clear.
    let index = 2; // We skip var q; and es = new Array();
    for (;index < expressions.length; index++) {
        let expression = expressions[index];

        // Skip if it's just only tab or newlines
        if(expression.replaceAll("\n", "").replaceAll("\t", "").length == 0) {continue};

        // Map ID related stuff.
        if (expression.indexOf("mapid = '") != -1) {
            main_window.mapid = expression.split(" = ")[1].slice(1, -1);
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
        main_window.SelectedObjects = [];
        OCM_LOADED = false;
        ServerRequest_handleMapData(response);
        CreateConnectionMapping();
    }else if (response.indexOf("knownmaps = [") !== -1) {
        main_window.knownmaps = [];
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
        main_window.ImageContext = ImageContext;
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
    main_window.ServerRequest = ALEI_ServerRequest;
    // We are pretty much done, we have patched ServerRequest, so just roll with old eval.
    // Oh and a note for myself incase i confuse myself: vanilla ServerRequest is synchrono
    main_window.eval = JS_eval;
    aleiLog(DEBUG, "Patched ServerRequest");
}

main_window.eval = function(code) { // Temporarily overriding eval so we can patch ServerRequest as early as possible
    if (main_window.ServerRequest !== undefined) { // ServerRequest is defined.
        handleServerRequestResponse(null, null, code);
        patchServerRequest();
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
    main_window.es = es.sort(getPriority);
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
    let oldCodeSnippet = "if ( i >= 4 && (i-4) % 3 == 0 ) {";
    let newCodeSnippet = "if (shouldAddSeparatorInGUIParams(i)) {";
    let code = main_window.UpdateGUIParams.toString().replace(oldCodeSnippet, newCodeSnippet);
    // if extended triggers are enabled, the code replacement from that will cause this code replacement to fail.
    // it won't cause an error assuming that code does more or less the same thing. this thing is a bit of a nightmare
    if (!code.includes(newCodeSnippet)) { 
        //aleiLog(WARN, "UpdateGUIParams direct code replacement failed (separators)");
    }
    code = "(" + code + ")"; //putting it in parentheses to make it a function expression. the function can then be assigned directly from eval
    let origUGP = eval(code);

    let origGPV = main_window.GenParamVal;

    main_window.shouldAddSeparatorInGUIParams = (count) => {
        let sep = Trigger_getSeparatorStart(SelectedObjects.length);
        if((count >= sep) && (count - sep) % 3 == 0) return true;
        return false;
    };

    main_window.GenParamValEscapeDoubleQuotes = false;

    // replaces GenParamVal behaviour of when base == "nochange". only difference is that it escapes double quotes.
    // also it only escapes double quotes when it's used within UpdateGUIParams.
    // the original function would return value if FORCE_TEXT_OPTIONS == true even if base == "nochange". so this works slightly differently, not sure if that's intentional
    main_window.GenParamVal = function(base, value) {
        if (GenParamValEscapeDoubleQuotes && base == "nochange") {
            let valueWithQuotesEscaped = `${value}`.replaceAll('"', "&quot;");
            return `<pvalue real="${valueWithQuotesEscaped}">- not used -</pvalue>`;
        }
        return origGPV(base, value);
    }

    main_window.UpdateGUIParams = function() {
        GenParamValEscapeDoubleQuotes = true;

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

        origUGP();
        addAdditionalButtons();

        GenParamValEscapeDoubleQuotes = false;
        if(sortRequired) SortObjectsByPriority();
    }
    aleiLog(DEBUG, "Patched UpdateGUIParams");
}

function patchEvalSet() {
    main_window.EvalSet = function(key, value) {
        // No evaling. Death to eval! (except for when i want to use it...)
        main_window[key] = value;
        UpdateTools();
    }
    aleiLog(DEBUG, "Patched EvalSet");
}

main_window.ALEI_settingsMenu = undefined;


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

    main_window.ALEIAPI.settings = {};
    main_window.ALEIAPI.settings.addText = addText;
    main_window.ALEIAPI.settings.createButtons = MakeSettingButtons;

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
        true,
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

    main_window.ALEI_settingsMenu = mainWindow;
    document.body.appendChild(mainWindow);
    ALEI_settingUpdateButtons();
    aleiLog(DEBUG, "Created settings window.");
}

let aleiSettingButtonsMap = {}

main_window.ALEI_settingUpdateButtons = () => {
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
        projectileModels[i] = `<img src='${projectileModels[i]}' style='width: 60px; height: 20px'/>`;
    }
    aleiLog(DEBUG, "Loaded projectile models.");
}

function patchSpecialValue() {
    let _OG = main_window.special_value;
    main_window.special_value = (base, value) => {
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
    if (!(newscale == null || newscale == 100)) {
        var factor = Math.floor(newscale) / 100;
        {
            let snappingScript = `/GRID_SNAPPING)*GRID_SNAPPING;`
            var roundwell = true;
            lcz();
            for (let i = 0; i < es.length; i++)
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
    main_window.DoWorldScale = ALEI_DoWorldScale;
    aleiLog(DEBUG, "Patched percentage tool");
}

function _encodeXMLChars(value) {
    return value.replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;")
}

function patchCompileTrigger() {
    let _og = main_window.CompileTrigger;

    main_window.CompileTrigger = () => {
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
    main_window.pasteFromPermanentClipboard = pasteFromPermanentClipboard;
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

main_window.triggerActionsPreventError = () => {
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

    main_window.CopyToClipBoard = function(param) {
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

    main_window.PasteFromClipBoard = function(param) {
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

    main_window.DeleteSelection = function() {
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

    main_window.UpdateGUIParams = function() {
        old_UpdateGUIParams();

        if (!isOnlyTriggerSelected()) {
            selectedTriggerActions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            hoveredTriggerAction = -1;
        } else if (!edit_triggers_as_text) {
            addEventListeners();
            updateTriggerActionElements();
        }
    }

    main_window.DO_UNDO = function() {
        try {
            old_DO_UNDO();
        } catch (err) {
            NewNote("Can't undo action.", note_bad);
        }
    }

    main_window.DO_REDO = function() {
        try {
            old_DO_REDO();
        } catch (err) {
            NewNote("Can't redo action.", note_bad);
        }
    }

    main_window.triggerActionsPreventError = triggerActionsPreventError;
    aleiLog(DEBUG, "Patched clipboard related functions.");
}

function patchDrawGrid() {
    let old_lg = lg;

    main_window.lg = function(param1, param2) {
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
    main_window.NewNote = (text, color) => {
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

            for(let i = 0; aleiSettings.extendedTriggers && first_selected_object.pm.extended && i + 11 <= first_selected_object.pm["totalNumOfActions"]; ++i){
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

    let oldSaveThisMap = main_window.SaveThisMap;
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
        const executeTriggerAction = 99; // Required for main -> child if we want main trigger's maxcalls be in effect.
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
                    entity.pm[`actions_10_type`] = executeTriggerAction;
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

    main_window.setletedit = setletedit;
    main_window.StreetMagic = StreetMagic;
    main_window.SaveThisMap = SaveThisMap;
    main_window.CompileTrigger = CompileTrigger;

    // the current serialisation and unserialisation used is an external library Eric used
    // it is currently used by the Copy and Paste clipboard functions
    // however, it does not work with arrays, turning them into objects instead.
    // therefore, Nyove has decided to overwrite these library
    main_window.serialize = JSON.stringify;
    main_window.unserialize = JSON.parse;
    main_window.UpdateGUIParams = newUpdateGUIParams;

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
    const executeTriggerAction = 99;
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
        let nextTriggerIndex = es.findIndex(e => 
            (e.pm["uid"] === currentTrigger.pm["actions_10_targetA"]) && 
            (
                (currentTrigger.pm["actions_10_type"] == switchExecutionAction) || // Backwards compatibility
                (currentTrigger.pm["actions_10_type"] == executeTriggerAction)     // Current system now
            )
        )
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
    if(!aleiSettings.extendedTriggers) return;

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
    let ocm = main_window.ObjectConnectionMapping;
    let utem = main_window.uidToElementMap;

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
    main_window.ObjectConnectionMapping = {};
    main_window.uidToElementMap = {};

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
            main_window.ObjectConnectionMapping = {};
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
        (0,_renderer_user_js__WEBPACK_IMPORTED_MODULE_2__.ALEI_Renderer_OnDocumentLoad)();
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

    main_window.Render = eval(`(${fn})`);
}

function patchDeleteSelection() {
    let og = main_window.DeleteSelection;
    main_window.DeleteSelection = () => {
        for(let selected of SelectedObjects) OCM_onObjectDelete(selected);
        og();
    };
}

let ALE_start = (async function() {
    'use strict';

    main_window.ALEIAPI = {};

    VAL_TABLE = special_values_table;
    ROOT_ELEMENT = document.documentElement;
    stylesheets = document.styleSheets;
    ALE_Render = Render;
    main_window.ObjectConnectionMapping = {};
    main_window.uidToElementMap = {};

    // Updates the current CSS stylesheet.
    updateCSSFile();

    // Handling rest of things
    addPropertyPanelResize();
    addObjBoxResize();

    patchServerRequest();

    _loadcss_js__WEBPACK_IMPORTED_MODULE_0__.fixWebpackStyleSheets();
    _loadcss_js__WEBPACK_IMPORTED_MODULE_0__.patchThemeSet();

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
    main_window.UpdatePhysicalParam = UpdatePhysicalParam;
    main_window.PasteFromClipBoard = PasteFromClipBoard;
    patchANI();
    // Tooltip.
    if(aleiSettings.enableTooltips) {
        doTooltip();
    }
    if (aleiSettings.extendedTriggers) {
        extendTriggerList();
        ExtendedTriggersLoaded = true;
    }
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

    let ALE_PreviewQualitySet = main_window.PreviewQualitySet;
    main_window.PreviewQualitySet = (val) => {
        ALE_PreviewQualitySet(val);
        writeStorage("ALEI_PreviewQualitySet", val);
    };

    main_window.PreviewQualitySet(
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixLQUFLO0FBQzdGLHNFQUFzRTtBQUN0RSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixLQUFLO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQSxVQUFVLDZCQUE2QjtBQUN2QyxXQUFXLDJEQUEyRDtBQUN0RTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsWUFBWSxtQ0FBbUM7QUFDL0MsYUFBYSxxRkFBcUY7QUFDbEcsU0FBUztBQUNUO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QywyQkFBMkI7QUFDM0IsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkVBQTZFLEtBQUs7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0Esa0VBQWtFO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsS0FBSztBQUNsRDtBQUNBO0FBQ0E7QUFDQSxpR0FBaUc7QUFDakc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUZBQXlGO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0E7QUFDQSxxRUFBcUU7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1TEFBdUw7QUFDdkwsMkdBQTJHO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0Esb0ZBQW9GLE1BQU07QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QywyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLDRCQUE0QjtBQUM1Qiw0QkFBNEI7QUFDNUIsd0NBQXdDO0FBQ3hDLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsWUFBWTtBQUN6QyxnQ0FBZ0Msc0JBQXNCLElBQUksaUJBQWlCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Es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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQSw0QkFBNEIsZUFBZTtBQUMzQyx3QkFBd0IsVUFBVSxHQUFHLFNBQVMsRUFBRSxFQUFFLFFBQVEsVUFBVSxJQUFJLFVBQVUsRUFBRSxFQUFFO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxXQUFNO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixTQUFTLEdBQUcsTUFBTTtBQUM5QztBQUNBLHdCQUF3QixTQUFTLEdBQUcsV0FBVztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUIsMkNBQTJDLG9CQUFvQixzQkFBc0I7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsV0FBTTtBQUNwQixJQUFJLFdBQU07QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsa0NBQWtDO0FBQzVDO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxRQUFRO0FBQ3pDLDBDQUEwQyxRQUFRLHlCQUF5Qix1QkFBdUI7QUFDbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsUUFBUSxXQUFXLHdCQUF3QjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0U7QUFDaEU7QUFDQTtBQUNBLDRCQUE0QixlQUFlO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxXQUFNO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0Msd0JBQXdCLDBCQUEwQjtBQUN4RjtBQUNBO0FBQ0E7QUFDQSxjQUFjLFdBQU07QUFDcEI7QUFDQSxJQUFJLFdBQU07QUFDVjtBQUNBO0FBQ0Esd0JBQXdCLHFCQUFxQjtBQUM3QztBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsaUJBQWlCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLFdBQU07QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxrQkFBa0I7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IscUJBQXFCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxXQUFNO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxXQUFNO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksV0FBTTtBQUNWO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksV0FBTTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksV0FBTTtBQUNWO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLFdBQU07QUFDVjtBQUNBO0FBQ0EsVUFBVTtB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QUNBO0FBQ0E7QUFDQSwrQ0FBK0MsaUJBQWlCLGdCQUFnQix1QkFBdUI7QUFDdkcsTUFBTTtBQUNOO0FBQ0EseUJBQXlCLFFBQVE7QUFDakM7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsaUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbGVpLy4vc3JjL3N0YXRpYy9hbGVpc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9hbGVpLy4vc3JjL3N0YXRpYy90aGVtZXMuY3NzIiwid2VicGFjazovL2FsZWkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2FsZWkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9hbGVpLy4vc3JjL3N0YXRpYy9hbGVpc3R5bGVzLmNzcz81OGY4Iiwid2VicGFjazovL2FsZWkvLi9zcmMvc3RhdGljL3RoZW1lcy5jc3M/OWE4NSIsIndlYnBhY2s6Ly9hbGVpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2FsZWkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2FsZWkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYWxlaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRoQXR0cmlidXRlc0FuZE5vbmNlLmpzIiwid2VicGFjazovL2FsZWkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9hbGVpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYWxlaS8uL3NyYy9hbGVzY3JpcHQuanMiLCJ3ZWJwYWNrOi8vYWxlaS8uL3NyYy9sb2FkY3NzLmpzIiwid2VicGFjazovL2FsZWkvLi9zcmMvcmVuZGVyZXIudXNlci5qcyIsIndlYnBhY2s6Ly9hbGVpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FsZWkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYWxlaS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYWxlaS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FsZWkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hbGVpLy4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5BTEVJX3NldHRpbmdNZW51VGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc2MDgyO1xyXG4gICAgY29sb3I6ICNiZmNhZDk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5BTEVJX3NldHRpbmdzTWVudUJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYzNTRhO1xyXG4gICAgY29sb3I6ICNjMWM5ZDM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjYzNTRhO1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxufVxyXG5cclxuLkFMRUlfc2V0dGluZ3NNZW51QnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1OTZhODM7XHJcbiAgICBjb2xvcjogI2Y1ZmFmZjtcclxufVxyXG5cclxuLkFMRUlfc2V0dGluZ01lbnVCdXR0b25DbGlja2VkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MWE1YzE7XHJcbiAgICBjb2xvcjogI2ZiZmJmYjtcclxufVxyXG5cclxuI0FMRUlfdG9vbHRpcCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgY29sb3I6ICNlZWU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDEwMHB4O1xyXG4gICAgdG9wOiAtMTAwcHg7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdGF0aWMvYWxlaXN0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLkFMRUlfc2V0dGluZ01lbnVUZXh0IHtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICB3aWR0aDogMTUwcHg7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NjA4MjtcXHJcXG4gICAgY29sb3I6ICNiZmNhZDk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5BTEVJX3NldHRpbmdzTWVudUJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjM1NGE7XFxyXFxuICAgIGNvbG9yOiAjYzFjOWQzO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyNjM1NGE7XFxyXFxuICAgIHdpZHRoOiA4MHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uQUxFSV9zZXR0aW5nc01lbnVCdXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTk2YTgzO1xcclxcbiAgICBjb2xvcjogI2Y1ZmFmZjtcXHJcXG59XFxyXFxuXFxyXFxuLkFMRUlfc2V0dGluZ01lbnVCdXR0b25DbGlja2VkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkxYTVjMTtcXHJcXG4gICAgY29sb3I6ICNmYmZiZmI7XFxyXFxufVxcclxcblxcclxcbiNBTEVJX3Rvb2x0aXAge1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxuICAgIGNvbG9yOiAjZWVlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDEwMHB4O1xcclxcbiAgICB0b3A6IC0xMDBweDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBjc3MgdmFyaWFibGVzIGdvIGluIHRoZXNlLiAqL1xyXG5cclxuOnJvb3QsIC5ibHVlVGhlbWUge1xyXG4gICAgLS13YXJuaW5nLWdvLWF3YXktcGxzOiAwO1xyXG59XHJcblxyXG4uZGFya1RoZW1lLCAucHVycGxlVGhlbWUsIC5ncmVlblRoZW1lIHtcclxuICAgIC0td2FybmluZy1nby1hd2F5LXBsczogMDtcclxufVxyXG5cclxuLyp0aGlzIGlzIHVudXNlZCBjdXogdGhlbWUgY2hhbmdpbmcgbmVlZHMgdG8gYmUgcmV3b3JrZWQgZmlyc3QqL1xyXG4uYWxlaWRhcmtUaGVtZSB7XHJcbiAgICAtLXdhcm5pbmctZ28tYXdheS1wbHM6IDA7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdGF0aWMvdGhlbWVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwrQkFBK0I7O0FBRS9CO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBLCtEQUErRDtBQUMvRDtJQUNJLHdCQUF3QjtBQUM1QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBjc3MgdmFyaWFibGVzIGdvIGluIHRoZXNlLiAqL1xcclxcblxcclxcbjpyb290LCAuYmx1ZVRoZW1lIHtcXHJcXG4gICAgLS13YXJuaW5nLWdvLWF3YXktcGxzOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFya1RoZW1lLCAucHVycGxlVGhlbWUsIC5ncmVlblRoZW1lIHtcXHJcXG4gICAgLS13YXJuaW5nLWdvLWF3YXktcGxzOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKnRoaXMgaXMgdW51c2VkIGN1eiB0aGVtZSBjaGFuZ2luZyBuZWVkcyB0byBiZSByZXdvcmtlZCBmaXJzdCovXFxyXFxuLmFsZWlkYXJrVGhlbWUge1xcclxcbiAgICAtLXdhcm5pbmctZ28tYXdheS1wbHM6IDA7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhBdHRyaWJ1dGVzQW5kTm9uY2UuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYWxlaXN0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge1wiYXR0cmlidXRlc1wiOntcInRpdGxlXCI6XCJzdHlsZS1mcm9tLXdlYnBhY2tcIn19O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYWxlaXN0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aEF0dHJpYnV0ZXNBbmROb25jZS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90aGVtZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHtcImF0dHJpYnV0ZXNcIjp7XCJ0aXRsZVwiOlwic3R5bGUtZnJvbS13ZWJwYWNrXCJ9fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RoZW1lcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50LCBhdHRyaWJ1dGVzKSB7XG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBpc051bWJlcihzdHIpIHtcclxuICAgIGxldCBudW1iZXIgPSAwO1xyXG5cclxuICAgIGlmICgoIWlzTmFOKE51bWJlcihzdHIpKSAmJiBzdHIgIT09IFwiIFwiKSB8fCBzdHIgPT0gXCIuXCIpIHtcclxuICAgICAgICBudW1iZXIgPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudW1iZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzT3BlcmF0b3Ioc3RyKSB7XHJcbiAgICByZXR1cm4gXCIrLSovJV5TQ0FOUkZcIi5pbmNsdWRlcyhzdHIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0dyb3VwKHN0cikge1xyXG4gICAgcmV0dXJuIFwiKClcIi5pbmNsdWRlcyhzdHIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzcGxpdChzdHIpIHtcclxuICAgIHJldHVybiBzdHIucmVwbGFjZUFsbChcIiBcIiwgXCJcIikuc3BsaXQoXCJcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbmNhdE51bWJlcnMoc3RyKSB7XHJcbiAgICBsZXQgbnVtID0gXCJcIjtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChpc051bWJlcihzdHJbaV0pKSB7XHJcbiAgICAgICAgICAgIG51bSArPSBzdHJbaV07XHJcbiAgICAgICAgfSBlbHNlIGlmIChudW0ubGVuZ3RoICE9IDApIHtcclxuICAgICAgICAgICAgc3RyLnNwbGljZShpIC0gbnVtLmxlbmd0aCwgbnVtLmxlbmd0aCwgbnVtKTtcclxuICAgICAgICAgICAgaSAtPSAobnVtLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICBudW0gPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAobnVtLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgc3RyLnNwbGljZShzdHIubGVuZ3RoIC0gbnVtLmxlbmd0aCwgbnVtLmxlbmd0aCwgbnVtKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY29udmVydFRvT2JqZWN0cyhzdHIpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgc3RyW2ldID0ge1xyXG4gICAgICAgICAgICBjaHI6IHN0cltpXVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlR3JvdXBPcmRlcnMoc3RyKSB7XHJcbiAgICBsZXQgb3JkZXIgPSAxO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHN0cltpXS5jaHIgPT0gXCIoXCIpIHtcclxuICAgICAgICAgICAgb3JkZXIrKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzdHJbaV0uY2hyID09IFwiKVwiKSB7XHJcbiAgICAgICAgICAgIG9yZGVyLS07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdHJbaV0uZ3JvdXBPcmRlciA9IG9yZGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVHcm91cENoYXJzKHN0cikge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoaXNHcm91cChzdHJbaV0uY2hyKSkge1xyXG4gICAgICAgICAgICBzdHIuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICBpLS07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBvcGVyYXRvck9yZGVyKHN0cikge1xyXG4gICAgbGV0IG9yZGVyID0gMDtcclxuXHJcbiAgICBpZiAoXCIrLVwiLmluY2x1ZGVzKHN0cikpIHtcclxuICAgICAgICBvcmRlciA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFwiKi8lXCIuaW5jbHVkZXMoc3RyKSkge1xyXG4gICAgICAgIG9yZGVyID0gMjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoXCJeU0NBTlJGXCIuaW5jbHVkZXMoc3RyKSkge1xyXG4gICAgICAgIG9yZGVyID0gMztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gb3JkZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU9wZXJhdG9yT3JkZXJzKHN0cikge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoaXNPcGVyYXRvcihzdHJbaV0uY2hyKSkge1xyXG4gICAgICAgICAgICBsZXQgb3JkZXIgPSBvcGVyYXRvck9yZGVyKHN0cltpXS5jaHIpO1xyXG5cclxuICAgICAgICAgICAgc3RyW2ldLm9wZXJhdG9yT3JkZXIgPSBvcmRlcjtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdHJbaSArIDFdLmdyb3VwT3JkZXIgPT0gc3RyW2ldLmdyb3VwT3JkZXIpIHtcclxuICAgICAgICAgICAgICAgIHN0cltpICsgMV0ub3BlcmF0b3JPcmRlciA9IG9yZGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXN0cltpIC0gMV0ub3BlcmF0b3JPcmRlciB8fCAoc3RyW2kgLSAxXS5vcGVyYXRvck9yZGVyIDwgc3RyW2ldLm9wZXJhdG9yT3JkZXIgJiYgc3RyW2kgLSAxXS5ncm91cE9yZGVyID09IHN0cltpXS5ncm91cE9yZGVyKSkge1xyXG4gICAgICAgICAgICAgICAgc3RyW2kgLSAxXS5vcGVyYXRvck9yZGVyID0gb3JkZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU9yZGVycyhzdHIpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgc3RyW2ldLm9yZGVyID0gc3RyW2ldLmdyb3VwT3JkZXIgKiAxMCArIHN0cltpXS5vcGVyYXRvck9yZGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRPcmRlcnMoc3RyKSB7XHJcbiAgICBsZXQgb3JkZXJzID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBvcmRlcnMucHVzaChzdHJbaV0ub3JkZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBvcmRlcnM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpbXBsaWZ5T3JkZXJzKG9yZGVycykge1xyXG4gICAgbGV0IGFyciA9IFtdO1xyXG4gICAgbGV0IG9yZGVyID0gMTtcclxuXHJcbiAgICBvcmRlcnMuc29ydCgoeCwgeSkgPT4ge1xyXG4gICAgICAgIHJldHVybiB5IC0geDtcclxuICAgIH0pO1xyXG5cclxuICAgIGFyci5wdXNoKHtcclxuICAgICAgICBmcm9tOiBvcmRlcnNbMF0sXHJcbiAgICAgICAgdG86IG9yZGVyXHJcbiAgICB9KTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IG9yZGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChvcmRlcnNbaV0gIT0gb3JkZXJzW2kgLSAxXSkge1xyXG4gICAgICAgICAgICBvcmRlcisrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXJyLnB1c2goe1xyXG4gICAgICAgICAgICBmcm9tOiBvcmRlcnNbaV0sXHJcbiAgICAgICAgICAgIHRvOiBvcmRlclxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhcnI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlcGxhY2VPcmRlcnMoc3RyKSB7XHJcbiAgICBsZXQgb3JkZXJzID0gZ2V0T3JkZXJzKHN0cik7XHJcbiAgICBsZXQgYXJyID0gc2ltcGxpZnlPcmRlcnMob3JkZXJzKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYXJyLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmIChzdHJbaV0ub3JkZXIgPT0gYXJyW2pdLmZyb20pIHtcclxuICAgICAgICAgICAgICAgIHN0cltpXS5vcmRlciA9IGFycltqXS50bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2FsYyh4LCB5LCB6KSB7XHJcbiAgICBsZXQgcmVzdWx0O1xyXG5cclxuICAgIHggPSBOdW1iZXIoeCk7XHJcbiAgICB6ID0gTnVtYmVyKHopO1xyXG5cclxuICAgIGlmICh5ID09IFwiK1wiKSB7XHJcbiAgICAgICAgcmVzdWx0ID0geCArIHo7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHkgPT0gXCItXCIpIHtcclxuICAgICAgICByZXN1bHQgPSB4IC0gejtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoeSA9PSBcIipcIikge1xyXG4gICAgICAgIHJlc3VsdCA9IHggKiB6O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh5ID09IFwiL1wiKSB7XHJcbiAgICAgICAgcmVzdWx0ID0geCAvIHo7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHkgPT0gXCIlXCIpIHtcclxuICAgICAgICByZXN1bHQgPSB4ICUgejtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoeSA9PSBcIl5cIikge1xyXG4gICAgICAgIHJlc3VsdCA9IHggKiogejtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoeSA9PSBcIlNcIikge1xyXG4gICAgICAgIHJlc3VsdCA9IE1hdGguc2luKHgpICogejtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoeSA9PSBcIkNcIikge1xyXG4gICAgICAgIHJlc3VsdCA9IE1hdGguY29zKHgpICogejtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoeSA9PSBcIkFcIikge1xyXG4gICAgICAgIHJlc3VsdCA9IE1hdGguYXRhbjIoeCwgeik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHkgPT0gXCJOXCIpIHtcclxuICAgICAgICBpZiAoeikge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB4KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBNYXRoLnJhbmRvbSgpICogeDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHkgPT0gXCJSXCIpIHtcclxuICAgICAgICByZXN1bHQgPSBNYXRoLnJvdW5kKHggLyB6KSAqIHo7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHkgPT0gXCJGXCIpIHtcclxuICAgICAgICByZXN1bHQgPSBNYXRoLmZsb29yKHggLyB6KSAqIHo7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TWF4T3JkZXIoc3RyKSB7XHJcbiAgICBsZXQgb3JkZXIgPSAwO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHN0cltpXS5vcmRlciA+IG9yZGVyKSB7XHJcbiAgICAgICAgICAgIG9yZGVyID0gc3RyW2ldLm9yZGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gb3JkZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV4ZWMoc3RyKSB7XHJcbiAgICBsZXQgbWF4T3JkZXIgPSBnZXRNYXhPcmRlcihzdHIpO1xyXG5cclxuICAgIGZvciAobGV0IG9yZGVyID0gMTsgb3JkZXIgPD0gbWF4T3JkZXI7IG9yZGVyKyspIHtcclxuICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgbGV0IGxvb3AgPSAxO1xyXG5cclxuICAgICAgICB3aGlsZSAobG9vcCkge1xyXG4gICAgICAgICAgICBsb29wID0gMDtcclxuXHJcbiAgICAgICAgICAgIGxldCBuZXdzdHIgPSBbXTtcclxuICAgICAgICAgICAgbGV0IGxlbmd0aDtcclxuICAgICAgICAgICAgbGV0IHNhdmVPcmRlcjtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gLTE7XHJcblxyXG4gICAgICAgICAgICBmb3IgKDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0cltpXS5vcmRlciA9PSBvcmRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld3N0ci5wdXNoKHN0cltpXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdzdHIubGVuZ3RoICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsb29wID0gMTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGVuZ3RoID0gbmV3c3RyLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIGlmIChsZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChuZXdzdHIubGVuZ3RoICE9IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdzdHIuc3BsaWNlKDAsIDMsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hyOiBjYWxjKG5ld3N0clswXS5jaHIsIG5ld3N0clsxXS5jaHIsIG5ld3N0clsyXS5jaHIpXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc2F2ZU9yZGVyID0gc3RyW2luZGV4XS5vcmRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICBzdHIuc3BsaWNlKGluZGV4LCBsZW5ndGgsIG5ld3N0clswXSk7XHJcbiAgICAgICAgICAgICAgICBpIC09IChsZW5ndGggLSAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzdHJbaW5kZXhdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNocjogc3RyW2luZGV4XS5jaHIsXHJcbiAgICAgICAgICAgICAgICAgICAgb3JkZXI6IHNhdmVPcmRlciArIDFcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVwbGFjZShzdHIsIGFycikge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFyci5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBpZiAoc3RyW2ldID09IGFycltqXS5mcm9tKSB7XHJcbiAgICAgICAgICAgICAgICBzdHJbaV0gPSBhcnJbal0udG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5lZ2F0aXZlTnVtYmVycyhzdHIpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHN0cltpXSA9PSBcIi1cIiAmJiBzdHJbaSAtIDFdID09IFwiKFwiKSB7XHJcbiAgICAgICAgICAgIHN0ci5zcGxpY2UoaSwgMCwgXCIwXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2ltcGxlR3JvdXBzKHN0cikge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoc3RyW2kgLSAxXSA9PSBcIihcIiAmJiBzdHJbaSArIDFdID09IFwiKVwiKSB7XHJcbiAgICAgICAgICAgIHN0ci5zcGxpY2UoaSwgMCwgXCIwXCIsIFwiK1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZShzdHIsIHZhcnMpIHtcclxuICAgIGlmIChzdHIgPT0gXCJcIikge1xyXG4gICAgICAgIHN0ciA9IFwiMFwiO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzdHJbMF0gPT0gXCItXCIpIHtcclxuICAgICAgICBzdHIgPSBcIjBcIiArIHN0cjtcclxuICAgIH1cclxuXHJcbiAgICBzdHIgPSBzcGxpdChzdHIpO1xyXG4gICAgY29uY2F0TnVtYmVycyhzdHIpO1xyXG5cclxuICAgIHJlcGxhY2Uoc3RyLCBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmcm9tOiBcInBcIixcclxuICAgICAgICAgICAgdG86IFN0cmluZyhNYXRoLlBJKVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZnJvbTogXCJ4XCIsXHJcbiAgICAgICAgICAgIHRvOiBTdHJpbmcodmFyc1swXSlcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZyb206IFwieVwiLFxyXG4gICAgICAgICAgICB0bzogU3RyaW5nKHZhcnNbMV0pXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmcm9tOiBcIndcIixcclxuICAgICAgICAgICAgdG86IFN0cmluZyh2YXJzWzJdKVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZnJvbTogXCJoXCIsXHJcbiAgICAgICAgICAgIHRvOiBTdHJpbmcodmFyc1szXSlcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZyb206IFwiaVwiLFxyXG4gICAgICAgICAgICB0bzogU3RyaW5nKHZhcnNbNF0pXHJcbiAgICAgICAgfVxyXG4gICAgXSk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBuZWdhdGl2ZU51bWJlcnMoc3RyKTtcclxuICAgICAgICBzaW1wbGVHcm91cHMoc3RyKTtcclxuICAgICAgICBjb252ZXJ0VG9PYmplY3RzKHN0cik7XHJcbiAgICAgICAgY3JlYXRlR3JvdXBPcmRlcnMoc3RyKTtcclxuICAgICAgICByZW1vdmVHcm91cENoYXJzKHN0cik7XHJcbiAgICAgICAgY3JlYXRlT3BlcmF0b3JPcmRlcnMoc3RyKTtcclxuICAgICAgICBjcmVhdGVPcmRlcnMoc3RyKTtcclxuICAgICAgICByZXBsYWNlT3JkZXJzKHN0cik7XHJcbiAgICAgICAgZXhlYyhzdHIpO1xyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgICAgcmV0dXJuIFwiZXJyb3JcIjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gTnVtYmVyKE51bWJlcihzdHJbMF0uY2hyKS50b0ZpeGVkKDEwKSk7XHJcbn0iLCJpbXBvcnQgXCIuL3N0YXRpYy9hbGVpc3R5bGVzLmNzc1wiO1xyXG5pbXBvcnQgXCIuL3N0YXRpYy90aGVtZXMuY3NzXCI7XHJcblxyXG4vKlxyXG5mb3Igc29tZSByZWFzb24gdGhlIHZhbmlsbGEgVGhlbWVTZXQgZnVuY3Rpb24gZG9lcyB0aGlzOlxyXG5cIlxyXG5mb3IgKHZhciBpID0gMTsgaSA8IGRvY3VtZW50LnN0eWxlU2hlZXRzLmxlbmd0aCAtIDE7IGkrKylcclxuICAgIGRvY3VtZW50LnN0eWxlU2hlZXRzW2ldLmRpc2FibGVkID0gdHJ1ZTtcclxuXCJcclxuSSBoYXZlIG5vIGlkZWEgd2h5IHRoYXQgZXhpc3RzIGJ1dCBpdCBicmVha3Mgd2VicGFjaydzIHN0eWxlc2hlZXRzIGJlY2F1c2UgdGhleSBnZXQgZGlzYWJsZWQuXHJcbmZpeFdlYnBhY2tTdHlsZVNoZWV0cyBmaXhlcyB0aGF0LlxyXG4qL1xyXG5cclxuY29uc3Qgd2VicGFja1N0eWxlc2hlZXROYW1lID0gXCJzdHlsZS1mcm9tLXdlYnBhY2tcIjtcclxuXHJcbmNvbnN0IHRoZW1lcyA9IHtcclxuICAgIDA6IFwiYmx1ZVRoZW1lXCIsXHJcbiAgICAxOiBcImRhcmtUaGVtZVwiLFxyXG4gICAgMjogXCJwdXJwbGVUaGVtZVwiLFxyXG4gICAgMzogXCJncmVlblRoZW1lXCIsXHJcbiAgICA0OiBcImFsZWlkYXJrVGhlbWVcIixcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoVGhlbWVTZXQoKSB7XHJcbiAgICBjb25zdCBvcmlnVGhlbWVTZXQgPSB1bnNhZmVXaW5kb3cuVGhlbWVTZXQ7XHJcblxyXG4gICAgZGVidWdnZXI7XHJcblxyXG4gICAgdW5zYWZlV2luZG93LlRoZW1lU2V0ID0gZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICBjb25zdCBvbGRUaGVtZSA9IHRoZW1lc1tUSEVNRV07XHJcbiAgICAgICAgY29uc3QgbmV3VGhlbWUgPSB0aGVtZXNbdmFsdWVdO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShvbGRUaGVtZSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKG5ld1RoZW1lKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2hhbmdlZCB0aGVtZTogXCIgKyBvbGRUaGVtZSArIFwiIC0+IFwiICsgbmV3VGhlbWUpO1xyXG5cclxuICAgICAgICBvcmlnVGhlbWVTZXQodmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZml4V2VicGFja1N0eWxlU2hlZXRzKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkb2N1bWVudC5zdHlsZVNoZWV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5zdHlsZVNoZWV0c1tpXS50aXRsZSA9PSB3ZWJwYWNrU3R5bGVzaGVldE5hbWUpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuc3R5bGVTaGVldHNbaV0uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmaXhCdWxsc2hpdEluVGhlbWVTZXQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZml4QnVsbHNoaXRJblRoZW1lU2V0KCkge1xyXG4gICAgbGV0IG9sZENvZGVTbmlwcGV0ID0gXCJkb2N1bWVudC5zdHlsZVNoZWV0c1sgaSBdLmRpc2FibGVkID0gXFxudHJ1ZTtcIjtcclxuICAgIGxldCBuZXdDb2RlU25pcHBldCA9IGBpZiAoZG9jdW1lbnQuc3R5bGVTaGVldHNbaV0udGl0bGUgIT0gXCIke3dlYnBhY2tTdHlsZXNoZWV0TmFtZX1cIikgeyBgICsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRvY3VtZW50LnN0eWxlU2hlZXRzW2ldLmRpc2FibGVkID0gdHJ1ZTsgXCIgKyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIFwifVwiO1xyXG4gICAgbGV0IGNvZGUgPSB1bnNhZmVXaW5kb3cuVGhlbWVTZXQudG9TdHJpbmcoKS5yZXBsYWNlKG9sZENvZGVTbmlwcGV0LCBuZXdDb2RlU25pcHBldCk7XHJcbiAgICBjb2RlID0gXCIoXCIgKyBjb2RlICsgXCIpXCI7XHJcbiAgICB1bnNhZmVXaW5kb3cuVGhlbWVTZXQgPSBldmFsKGNvZGUpO1xyXG59IiwiLy8gPT1Vc2VyU2NyaXB0PT1cclxuLy8gQG5hbWUgICAgICAgICBBTEVJIFJlbmRlcmVyXHJcbi8vIEBuYW1lc3BhY2UgICAgaHR0cDovL3RhbXBlcm1vbmtleS5uZXQvXHJcbi8vIEB2ZXJzaW9uICAgICAgNS4wXHJcbi8vIEBkZXNjcmlwdGlvbiAgdHJ5IHRvIHRha2Ugb3ZlciB0aGUgd29ybGQhXHJcbi8vIEBhdXRob3IgICAgICAgTGlzYW5kcmFcclxuLy8gQG1hdGNoICAgICAgICAqOi8vKi5wbGF6bWFidXJzdDIuY29tL2xldmVsX2VkaXRvci9tYXBfZWRpdC5waHAqXHJcbi8vIEBpY29uICAgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL0xpc0FCQy9BTEVJL2Jsb2IvbWFpbi9pY29uLnBuZz9yYXc9dHJ1ZVxyXG4vLyBAcnVuLWF0ICAgICAgIGRvY3VtZW50LXN0YXJ0XHJcbi8vID09L1VzZXJTY3JpcHQ9PVxyXG5cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5sZXQgd2luZG93ID0gdW5zYWZlV2luZG93O1xyXG5cclxuLy8gVmFyaWFibGVzIHRoYXQgUmVuZGVyZXIgYWN0aXZlbHkgdXNlcy5cclxubGV0IGRlY29yUmVxdWVzdHNPblByb2dyZXNzID0gW107XHJcbmxldCBiYWNrZ3JvdW5kUmVxdWVzdHNPblByb2dyZXNzID0gW107XHJcbmxldCBib3hNb2RlbEltYWdlcyA9IHt9O1xyXG5sZXQgYWxlaVJ1bm5pbmcgPSBmYWxzZTtcclxubGV0IGhhdmVGb3JjZWRSZWNhbGN1bGF0aW9uID0gZmFsc2U7XHJcbi8vIFN0YXRpc3RpYyBwdXJwb3Nlcy5cclxubGV0IGRpc3BsYXlGUFMgPSAwO1xyXG5sZXQgZnBzQWNjdW11bGF0b3IgPSAwO1xyXG5sZXQgdG90YWxSZW5kZXJlZE9iamVjdHMgPSAwO1xyXG5sZXQgbGFzdFRpbWUgPSAwO1xyXG5cclxuLy8gRHJhd2luZyBmdW5jdGlvbnMuXHJcbmxldCBkcmF3X3JlY3Q7XHJcbmxldCBkcmF3X3JlY3RfZWRnZXM7XHJcbmxldCBkcmF3X2dyaWRsaW5lcztcclxubGV0IGRyYXdfaW1hZ2U7XHJcblxyXG4vLyBDb250ZXh0LCBncmlkLCBjYW52YXNcclxubGV0IGN0eDtcclxubGV0IGNhbnZhc0hlaWdodDtcclxubGV0IGNhbnZhc1dpZHRoO1xyXG5sZXQgZ3JpZE9wYWNpdHk7XHJcblxyXG4vLyBNb3VzZS5cclxubGV0IG1DbGlja1g7XHJcbmxldCBtQ2xpY2tZO1xyXG5sZXQgbUN1cnJlbnRYO1xyXG5sZXQgbUN1cnJlbnRZO1xyXG5cclxuLy8gV29ybGQgYW5kIFNjcmVlbiBjb252ZXJzaW9uIGZ1bmN0aW9uc1xyXG5sZXQgdzJzX3g7XHJcbmxldCB3MnNfeTtcclxubGV0IHMyd194O1xyXG5sZXQgczJ3X3k7XHJcbmxldCB3MnNfaDtcclxubGV0IHcyc193O1xyXG5sZXQgczJ3X2g7XHJcbmxldCBzMndfdztcclxuXHJcbi8vIEZvciBQcmV2aWV3IG1vZGUuXHJcbmxldCBwcmV2aWV3QmFja2dyb3VuZCA9IFwiMVwiO1xyXG5cclxuLy8gU2V0dGluZ3MsIHRoZW1lcy5cclxuZnVuY3Rpb24gX3JlYWRTdG9yYWdlKGtleV8sIGRlZmF1bHRWYWx1ZSwgZnVuYykge1xyXG4gICAgbGV0IGtleSA9IGBBTEVJX1JlbmRlcmVyXyR7a2V5X31gO1xyXG4gICAgbGV0IHZhbCA9IGxvY2FsU3RvcmFnZVtrZXldO1xyXG4gICAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG4gICAgcmV0dXJuIGZ1bmMobG9jYWxTdG9yYWdlW2tleV0pXHJcbn1cclxuXHJcbmxldCB0b2dnbGVzID0ge1xyXG4gICAgY2FydG9vbmlzaEVkZ2VzICAgICAgOiBfcmVhZFN0b3JhZ2UoXCJDYXJ0b29uaXNoRWRnZXNcIiAgICAgICwgZmFsc2UsICh2YWwpID0+IHZhbCA9PT0gXCJ0cnVlXCIpLFxyXG4gICAgb3JpZ2luYWxTZWxlY3RPdmVybGF5OiBfcmVhZFN0b3JhZ2UoXCJPcmlnaW5hbFNlbGVjdE92ZXJsYXlcIiwgZmFsc2UsICh2YWwpID0+IHZhbCA9PT0gXCJ0cnVlXCIpLFxyXG4gICAgYm94UmVuZGVyaW5nICAgICAgICAgOiBfcmVhZFN0b3JhZ2UoXCJQcmV2aWV3V2FsbHNcIiAgICAgICAgICwgZmFsc2UsICh2YWwpID0+IHZhbCA9PT0gXCJ0cnVlXCIpXHJcbn1cclxubGV0IHRoZW1lcyA9IHtcclxuICAgIDA6IHsgLy8gVEhFTUVfQkxVRVxyXG4gICAgICAgIC8vIEdyaWQgY29sb3JzLlxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNTg4MEFCXCIsXHJcbiAgICAgICAgZ3JpZENvbG9yOiBcIiNGRkZGRkZcIixcclxuICAgICAgICAvLyBPYmplY3Qgc2VsZWN0IGNvbG9ycy5cclxuICAgICAgICBzZWxlY3RPdXRsaW5lQ29sb3I6IFwiI0E1QTUwMFwiLFxyXG4gICAgICAgIHNlbGVjdEVkZ2VPcGFjaXR5RmFjdG9yOiAxLFxyXG4gICAgICAgIHNlbGVjdFRleHRDb2xvcjogXCIjRkYwXCIsXHJcbiAgICAgICAgLy8gU2VsZWN0aW9uIGFyZWEgY29sb3JzLlxyXG4gICAgICAgIHNlbGVjdGlvbkNvbG9yOiBcIiNGRkZcIixcclxuICAgICAgICBzZWxlY3Rpb25DdHJsQ29sb3I6IFwiI0FGQVwiLFxyXG4gICAgICAgIHNlbGVjdGlvbkFsdENvbG9yOiBcIiNGQUFcIixcclxuICAgICAgICBzZWxlY3Rpb25PcGFjaXR5OiAwLjEsIC8vIE5vdGUgdGhhdCB0aGlzIGFuZCBiZWxvdyBpcyBOT1Qgb3BhY2l0eSBGQUNUT1JcclxuICAgICAgICBzZWxlY3Rpb25FZGdlT3BhY2l0eTogMC44LFxyXG4gICAgICAgIC8vIEhpZ2hsaWdodGVkIG9iamVjdCBlZGdlIGNvbG9yLiAoV2hlbiBpbmNsdWRlZCBpbiBzZWxlY3Rpb24gYXJlYSlcclxuICAgICAgICBoaWdoTGlnaHRlZE9iakVkZ2VDb2xvcjogd2luZG93LnNlbGdyZDMsIC8vIE5PVEU6ICNGRkZGMDAgc2VlbXMgbmljZS4gQnJpZ2h0IGJ1dCBpdCBpcyBjbGVhcmx5IG5vdGljZWFibGUuXHJcbiAgICAgICAgaGlnaExpZ2h0ZWRPYmpFZGdlT3BhY2l0eTogMSxcclxuICAgICAgICAvLyBPYmplY3QgY29ubmVjdGlvbiBsaW5lLlxyXG4gICAgICAgIG9iamVjdENvbm5lY3Rpb25EYXNoOiBbNCwgNF0sXHJcbiAgICAgICAgb2JqZWN0Q29ubmVjdGlvblRvQ29sb3I6IFwiIzY2ZmY2NlwiLFxyXG4gICAgICAgIG9iamVjdENvbm5lY3Rpb25Gcm9tQ29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgIG9iamVjdENvbm5lY3Rpb25PcGFjaXR5RmFjdG9yOiAxIC8vIFRPRE86IFNob3VsZCB0aGlzIGp1c3QgYmUgXCJvcGFjaXR5XCIgYW5kIG5vdCBcIm9wYWNpdHkgZmFjdG9yXCI/XHJcblxyXG4gICAgfSxcclxuICAgIDE6IHsgLy8gVEhFTUVfREFSS1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMjIyMjIyXCIsXHJcbiAgICAgICAgZ3JpZENvbG9yOiBcIiM4ODg4ODhcIixcclxuICAgICAgICBzZWxlY3RPdXRsaW5lQ29sb3I6IFwiI0ZGRkYwMFwiLFxyXG4gICAgICAgIHNlbGVjdEVkZ2VPcGFjaXR5RmFjdG9yOiAxLFxyXG4gICAgICAgIHNlbGVjdFRleHRDb2xvcjogXCIjRkYwXCIsXHJcbiAgICAgICAgc2VsZWN0aW9uQ29sb3I6IFwiI0ZGRlwiLFxyXG4gICAgICAgIHNlbGVjdGlvbkN0cmxDb2xvcjogXCIjQUZBXCIsXHJcbiAgICAgICAgc2VsZWN0aW9uQWx0Q29sb3I6IFwiI0ZBQVwiLFxyXG4gICAgICAgIHNlbGVjdGlvbk9wYWNpdHk6IDAuMSxcclxuICAgICAgICBzZWxlY3Rpb25FZGdlT3BhY2l0eTogMC44LFxyXG4gICAgICAgIGhpZ2hMaWdodGVkT2JqRWRnZUNvbG9yOiB3aW5kb3cuc2VsZ3JkMyxcclxuICAgICAgICBoaWdoTGlnaHRlZE9iakVkZ2VPcGFjaXR5OiAxLFxyXG4gICAgICAgIG9iamVjdENvbm5lY3Rpb25EYXNoOiBbNCwgNF0sXHJcbiAgICAgICAgb2JqZWN0Q29ubmVjdGlvblRvQ29sb3I6IFwiIzY2ZmY2NlwiLFxyXG4gICAgICAgIG9iamVjdENvbm5lY3Rpb25Gcm9tQ29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgIG9iamVjdENvbm5lY3Rpb25PcGFjaXR5RmFjdG9yOiAxXHJcbiAgICB9LFxyXG4gICAgMjogeyAvLyBUSEVNRV9HUkVFTlxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMjIyMjIyXCIsXHJcbiAgICAgICAgZ3JpZENvbG9yOiBcIiNGRkZGRkZcIixcclxuICAgICAgICBzZWxlY3RPdXRsaW5lQ29sb3I6IFwiI0ZGRkYwMFwiLFxyXG4gICAgICAgIHNlbGVjdEVkZ2VPcGFjaXR5RmFjdG9yOiAxLFxyXG4gICAgICAgIHNlbGVjdFRleHRDb2xvcjogXCIjRkYwXCIsXHJcbiAgICAgICAgc2VsZWN0aW9uQ29sb3I6IFwiI0ZGRlwiLFxyXG4gICAgICAgIHNlbGVjdGlvbkN0cmxDb2xvcjogXCIjQUZBXCIsXHJcbiAgICAgICAgc2VsZWN0aW9uQWx0Q29sb3I6IFwiI0ZBQVwiLFxyXG4gICAgICAgIHNlbGVjdGlvbk9wYWNpdHk6IDAuMSxcclxuICAgICAgICBzZWxlY3Rpb25FZGdlT3BhY2l0eTogMC44LFxyXG4gICAgICAgIGhpZ2hMaWdodGVkT2JqRWRnZUNvbG9yOiB3aW5kb3cuc2VsZ3JkMyxcclxuICAgICAgICBoaWdoTGlnaHRlZE9iakVkZ2VPcGFjaXR5OiAxLFxyXG4gICAgICAgIG9iamVjdENvbm5lY3Rpb25EYXNoOiBbNCwgNF0sXHJcbiAgICAgICAgb2JqZWN0Q29ubmVjdGlvblRvQ29sb3I6IFwiIzY2ZmY2NlwiLFxyXG4gICAgICAgIG9iamVjdENvbm5lY3Rpb25Gcm9tQ29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgIG9iamVjdENvbm5lY3Rpb25PcGFjaXR5RmFjdG9yOiAxXHJcbiAgICB9LFxyXG4gICAgMzogeyAvLyBUSEVNRV9QVVJQTEVcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzIyMjIyMlwiLFxyXG4gICAgICAgIGdyaWRDb2xvcjogXCIjRkZGRkZGXCIsXHJcbiAgICAgICAgc2VsZWN0T3V0bGluZUNvbG9yOiBcIiNGRkZGMDBcIixcclxuICAgICAgICBzZWxlY3RFZGdlT3BhY2l0eUZhY3RvcjogMSxcclxuICAgICAgICBzZWxlY3RUZXh0Q29sb3I6IFwiI0ZGMFwiLFxyXG4gICAgICAgIHNlbGVjdGlvbkNvbG9yOiBcIiNGRkZcIixcclxuICAgICAgICBzZWxlY3Rpb25DdHJsQ29sb3I6IFwiI0FGQVwiLFxyXG4gICAgICAgIHNlbGVjdGlvbkFsdENvbG9yOiBcIiNGQUFcIixcclxuICAgICAgICBzZWxlY3Rpb25PcGFjaXR5OiAwLjEsXHJcbiAgICAgICAgc2VsZWN0aW9uRWRnZU9wYWNpdHk6IDAuOCxcclxuICAgICAgICBoaWdoTGlnaHRlZE9iakVkZ2VDb2xvcjogd2luZG93LnNlbGdyZDMsXHJcbiAgICAgICAgaGlnaExpZ2h0ZWRPYmpFZGdlT3BhY2l0eTogMSxcclxuICAgICAgICBvYmplY3RDb25uZWN0aW9uRGFzaDogWzQsIDRdLFxyXG4gICAgICAgIG9iamVjdENvbm5lY3Rpb25Ub0NvbG9yOiBcIiM2NmZmNjZcIixcclxuICAgICAgICBvYmplY3RDb25uZWN0aW9uRnJvbUNvbG9yOiBcIiNmZmZmZmZcIixcclxuICAgICAgICBvYmplY3RDb25uZWN0aW9uT3BhY2l0eUZhY3RvcjogMVxyXG4gICAgfSxcclxuICAgIDQ6IHsgLy8gQUxFSSBCbGFjayBUaGVtZVxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMjIyMjIyXCIsXHJcbiAgICAgICAgZ3JpZENvbG9yOiBcIiNGRkZGRkZcIixcclxuICAgICAgICBzZWxlY3RPdXRsaW5lQ29sb3I6IFwiI0ZGRkYwMFwiLFxyXG4gICAgICAgIHNlbGVjdEVkZ2VPcGFjaXR5RmFjdG9yOiAxLFxyXG4gICAgICAgIHNlbGVjdFRleHRDb2xvcjogXCIjRkYwXCIsXHJcbiAgICAgICAgc2VsZWN0aW9uQ29sb3I6IFwiI0ZGRlwiLFxyXG4gICAgICAgIHNlbGVjdGlvbkN0cmxDb2xvcjogXCIjQUZBXCIsXHJcbiAgICAgICAgc2VsZWN0aW9uQWx0Q29sb3I6IFwiI0ZBQVwiLFxyXG4gICAgICAgIHNlbGVjdGlvbk9wYWNpdHk6IDAuMSxcclxuICAgICAgICBzZWxlY3Rpb25FZGdlT3BhY2l0eTogMC44LFxyXG4gICAgICAgIGhpZ2hMaWdodGVkT2JqRWRnZUNvbG9yOiB3aW5kb3cuc2VsZ3JkMyxcclxuICAgICAgICBoaWdoTGlnaHRlZE9iakVkZ2VPcGFjaXR5OiAxLFxyXG4gICAgICAgIG9iamVjdENvbm5lY3Rpb25EYXNoOiBbNCwgNF0sXHJcbiAgICAgICAgb2JqZWN0Q29ubmVjdGlvblRvQ29sb3I6IFwiIzY2ZmY2NlwiLFxyXG4gICAgICAgIG9iamVjdENvbm5lY3Rpb25Gcm9tQ29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgIG9iamVjdENvbm5lY3Rpb25PcGFjaXR5RmFjdG9yOiAxXHJcbiAgICB9XHJcbn1cclxubGV0IGN1cnJlbnRUaGVtZTtcclxuXHJcbmZ1bmN0aW9uIFJlbmRlckdyaWQoKSB7XHJcbiAgICAvLyBHcmlkIGxpbmVzLlxyXG4gICAgaWYoZ3JpZE9wYWNpdHkgPD0gMCkgcmV0dXJuO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IGN1cnJlbnRUaGVtZS5ncmlkQ29sb3I7XHJcblxyXG4gICAgLy8gICAgICAgICAgIFN0ZXAgLSBBbHBoYVxyXG4gICAgZHJhd19ncmlkbGluZXMoMTAgLCAwLjA4ICogZ3JpZE9wYWNpdHkpO1xyXG4gICAgZHJhd19ncmlkbGluZXMoMTAwLCAwLjMyICogZ3JpZE9wYWNpdHkpO1xyXG4gICAgZHJhd19ncmlkbGluZXMoMzAwLCAwLjY0ICogZ3JpZE9wYWNpdHkpO1xyXG5cclxuICAgIGN0eC5nbG9iYWxBbHBoYSA9IDAuNyAqIGdyaWRPcGFjaXR5O1xyXG4gICAgZHJhd19yZWN0KDAsIHcyc195KDApLCBjYW52YXNXaWR0aCwgMSk7IC8vIENlbnRlciBHcmlkIC0gSG9yaXpvbnRhbFxyXG4gICAgZHJhd19yZWN0KHcyc194KDApLCAwLCAxLCBjYW52YXNIZWlnaHQpOyAvLyBDZW50ZXIgR3JpZCAtIFZlcnRpY2FsXHJcbn1cclxuXHJcbmxldCBvYmplY3RDb2xvcnMgPSB7XHJcbiAgICBib3g6IHtjb2w6IFwiI0ZGRlwiLCBlZGdlQ29sOiBcIiNGRkZcIn0sXHJcbiAgICBkb29yOiB7Y29sOiBcIiMwMDBcIiwgZWRnZUNvbDogXCIjMDAwXCIsIGludmlzaWJsZU9wYWNpdHlGYWN0b3I6IDAuMDV9LFxyXG4gICAgd2F0ZXI6IHtcclxuICAgICAgICBjb2w6IFwiIzM1OTJCOVwiLCBlZGdlQ29sOiBcIiM5MUVBRkZcIiwgb3BhY2l0eUZhY3RvcjogMC4yNCxcclxuICAgICAgICBhY2lkQ29sOiBcIiNCQkZCNTlcIiwgYWNpZEVkZ2VDb2w6IFwiIzkxRUFGRlwiLCBhY2lkT3BhY2l0eUZhY3RvcjogMC44MVxyXG4gICAgfSxcclxuICAgIHB1c2hmOiB7Y29sOiBcIiMyQkZGNDBcIiwgZWRnZUNvbDogXCIjM0NGRjRGXCJ9LFxyXG4gICAgcmVnaW9uOiB7Y29sOiBcIiNGRkQ1MkJcIiwgZWRnZUNvbDogXCIjRkZCMDNDXCIsIGVkZ2VPcGFjaXR5RmFjdG9yOiAwLjUsIGJ1dHRvbk9wYWNpdHlGYWN0b3I6IDAuNX0sXHJcbiAgICBiZzoge2NvbDogXCIjMDAwXCIsIGVkZ2VDb2w6IFwiIzkxMDAwMFwiLCBlZGdlT3BhY2l0eUZhY3RvcjogMC4zLCBjb2xvcmVkT3BhY2l0eUZhY3RvcjogMC4yMn1cclxufVxyXG5sZXQgcmVnaW9uSW1hZ2VzID0ge30gLy8gV2lsbCBiZSBmaWxsZWQgbGF0ZXIuXHJcblxyXG5mdW5jdGlvbiBfRHJhd1JlY3RhbmdsZShjb2xvciwgb3BhY2l0eSwgeCwgeSwgdywgaCwgZWRnZSkge1xyXG4gICAgY3R4Lmdsb2JhbEFscGhhID0gb3BhY2l0eTtcclxuICAgIGlmKGVkZ2UpIHtcclxuICAgICAgICBpZih0b2dnbGVzLmNhcnRvb25pc2hFZGdlcykgY3R4LnN0cm9rZUNvbG9yID0gY29sb3I7XHJcbiAgICAgICAgZWxzZSBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICBkcmF3X3JlY3RfZWRnZXMoeCwgeSwgdywgaClcclxuICAgIH1lbHNlIHtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgZHJhd19yZWN0KHgsIHksIHcsIGgpO1xyXG4gICAgfVxyXG59XHJcbi8vIENoZWNrcyBpZiBnaXZlbiBvYmplY3QgaXMgaW4gc2VsZWN0aW9uIGFyZWEuXHJcbmZ1bmN0aW9uIE9iaklzSGlnaGxpZ2h0ZWQoZWxlbWVudCwgY25zKSB7XHJcbiAgICBpZighd2luZG93Lm1fZHJhZ19zZWxlY3Rpb24pIHJldHVybjsgLy8gSWYgd2UgYXJlIG5vdCBkcmFnZ2luZy5cclxuICAgIGlmKHdpbmRvdy5sbWQpIHJldHVybjsgLy8gSWYgdGhlIHNlbGVjdGlvbiBqdXN0IHN0YXJ0ZWRcclxuICAgIGlmKCF3aW5kb3cuTWF0Y2hMYXllcihlbGVtZW50KSkgcmV0dXJuOyAvLyBJZiBsYXllcnMgZG9udCBtYXRjaC5cclxuXHJcbiAgICBsZXQgcnggPSB3MnNfeChNYXRoLm1pbihtQ2xpY2tYLCBtQ3VycmVudFgpKTtcclxuICAgIGxldCByeSA9IHcyc195KE1hdGgubWluKG1DbGlja1ksIG1DdXJyZW50WSkpO1xyXG4gICAgbGV0IHJ3ID0gdzJzX3coTWF0aC5hYnMobUN1cnJlbnRYIC0gbUNsaWNrWCkpO1xyXG4gICAgbGV0IHJoID0gdzJzX2goTWF0aC5hYnMobUN1cnJlbnRZIC0gbUNsaWNrWSkpO1xyXG5cclxuICAgIGxldCB4ID0gY25zLng7XHJcbiAgICBsZXQgeSA9IGNucy55O1xyXG4gICAgbGV0IHcgPSBjbnMudztcclxuICAgIGxldCBoID0gY25zLmg7XHJcblxyXG4gICAgaWYoICgoeCt3KSA8IHJ4KSB8fCAoKHJ4K3J3KSA8IHgpICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgaWYoICgoeStoKSA8IHJ5KSB8fCAocnkrcmgpIDwgeSApIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuLy8gRnVuY3Rpb24gcmVzcG9uc2libGUgZm9yIHJlbmRlcmluZyByZXNpemFibGUgb2JqZWN0cy4gKFJlZ2lvbiwgZG9vciwgYm94LCBwdXNoZXIsIHdhdGVyKVxyXG5mdW5jdGlvbiBSZW5kZXJTaW5nbGVSZXNpemFibGVPYmplY3QoZWxlbWVudCwgY25zKSB7XHJcbiAgICBsZXQgZWxlbUNsYXNzID0gZWxlbWVudC5fY2xhc3M7XHJcbiAgICBsZXQgb2JqZWN0Q29sb3IgPSBvYmplY3RDb2xvcnNbZWxlbUNsYXNzXTtcclxuICAgIGlmKG9iamVjdENvbG9yID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICBsZXQgbGF5ZXJBbHBoYSA9IHdpbmRvdy5NYXRjaExheWVyKGVsZW1lbnQpID8gMTogMC4zO1xyXG5cclxuICAgIGxldCBwbSA9IGVsZW1lbnQucG07XHJcbiAgICBsZXQgeCA9IHcyc194KHBtLngpO1xyXG4gICAgbGV0IHkgPSB3MnNfeShwbS55KTtcclxuICAgIGxldCB3ID0gdzJzX3cocG0udyk7XHJcbiAgICBsZXQgaCA9IHcyc19oKHBtLmgpO1xyXG5cclxuICAgIGxldCBjb2xvciA9IG9iamVjdENvbG9yLmNvbDtcclxuICAgIGxldCBlZGdlQ29sb3IgPSBvYmplY3RDb2xvci5lZGdlQ29sO1xyXG4gICAgbGV0IG9wYWNpdHlGYWN0b3IgPSBvYmplY3RDb2xvci5vcGFjaXR5RmFjdG9yID8gb2JqZWN0Q29sb3Iub3BhY2l0eUZhY3RvciA6IDAuMjtcclxuICAgIGxldCBlZGdlT3BhY2l0eUZhY3RvciA9IG9iamVjdENvbG9yLmVkZ2VPcGFjaXR5RmFjdG9yID8gb2JqZWN0Q29sb3IuZWRnZU9wYWNpdHlGYWN0b3IgOiAxO1xyXG5cclxuICAgIGlmKChlbGVtQ2xhc3MgPT0gXCJiZ1wiKSAmJiAod2luZG93LkNBQ0hFRF9CR1NbcG0ubV0gPT0gdW5kZWZpbmVkKSAmJiAoYmFja2dyb3VuZFJlcXVlc3RzT25Qcm9ncmVzcy5pbmRleE9mKHBtLm0pID09IC0xKSkge1xyXG4gICAgICAgIHdpbmRvdy5TZXJ2ZXJSZXF1ZXN0KGBhPWdldF9pbWFnZXMmZm9yX2NsYXNzPWJnX21vZGVsJnVwZGF0ZV9jb25zdD0ke3BtLm19YCwgJ3JlcXVlc3RfY29uc3RzJyk7XHJcbiAgICAgICAgYmFja2dyb3VuZFJlcXVlc3RzT25Qcm9ncmVzcy5wdXNoKHBtLm0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKFxyXG4gICAgICAgIChlbGVtQ2xhc3MgPT0gXCJkb29yXCIpICYmIChcclxuICAgICAgICAgICAgKHBtLnZpcyA9PT0gMCkgfHxcclxuICAgICAgICAgICAgKHBtLnZpcyA9PT0gZmFsc2UpIHx8XHJcbiAgICAgICAgICAgIChwbS52aXMgPT09IFwiZmFsc2VcIilcclxuICAgICAgICApICkgeyAvLyBTZXR0aW5nIG9wYWNpdHkgZmFjdG9yIHdoZW4gZG9vciBpcyBpbnZpc2libGUuXHJcbiAgICAgICAgb3BhY2l0eUZhY3RvciA9IG9iamVjdENvbG9yLmludmlzaWJsZU9wYWNpdHlGYWN0b3I7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICgoZWxlbUNsYXNzID09IFwid2F0ZXJcIikgJiYgKGVsZW1lbnQucG0uZGFtYWdlID4gMCkpIHsgLy8gU3dhcHBpbmcgb3V0IHByb3BlcnRpZXMgd2hlbiBpdCBpcyBhY2lkLlxyXG4gICAgICAgIGNvbG9yID0gb2JqZWN0Q29sb3IuYWNpZENvbDtcclxuICAgICAgICBlZGdlQ29sb3IgPSBvYmplY3RDb2xvci5hY2lkRWRnZUNvbDtcclxuICAgICAgICBvcGFjaXR5RmFjdG9yID0gb2JqZWN0Q29sb3IuYWNpZE9wYWNpdHlGYWN0b3I7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICgoZWxlbUNsYXNzID09IFwicmVnaW9uXCIpICYmIChbMSwgOSwgMTBdLmluZGV4T2YocGFyc2VJbnQocG0udXNlX29uKSkgIT09IC0xKSkge1xyXG4gICAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IGxheWVyQWxwaGEgKiBvYmplY3RDb2xvci5idXR0b25PcGFjaXR5RmFjdG9yO1xyXG4gICAgICAgIGxldCBpbWFnZSA9IHJlZ2lvbkltYWdlc1twbS51c2Vfb25dO1xyXG4gICAgICAgIGRyYXdfaW1hZ2UoXHJcbiAgICAgICAgICAgIGltYWdlLFxyXG4gICAgICAgICAgICB3MnNfeChwbS54ICsgTWF0aC5yb3VuZCgocG0udyAtIDQxKS8yKSksXHJcbiAgICAgICAgICAgIHcyc195KHBtLnkgKyBNYXRoLnJvdW5kKChwbS5oIC0gNTEpLzIpKSxcclxuICAgICAgICAgICAgdzJzX3coNDEpLFxyXG4gICAgICAgICAgICB3MnNfaCgzMSlcclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICgoZWxlbUNsYXNzID09IFwiYmdcIikgJiYgKHBtLmMubGVuZ3RoID09IDcpKSB7XHJcbiAgICAgICAgY29sb3IgPSBwbS5jO1xyXG4gICAgICAgIG9wYWNpdHlGYWN0b3IgPSBvYmplY3RDb2xvci5jb2xvcmVkT3BhY2l0eUZhY3RvcjtcclxuICAgIH1cclxuXHJcbiAgICBpZih3aW5kb3cuU0hPV19URVhUVVJFUykge1xyXG4gICAgICAgIGlmKChlbGVtQ2xhc3MgPT0gXCJib3hcIikgJiYgISh0b2dnbGVzLmJveFJlbmRlcmluZykpIHtcclxuICAgICAgICAgICAgY29sb3IgPSBcIiMwMDBcIjtcclxuICAgICAgICAgICAgb3BhY2l0eUZhY3RvciA9IDE7XHJcbiAgICAgICAgICAgIGVkZ2VDb2xvciA9IFwiIzMzM1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKChlbGVtQ2xhc3MgPT0gXCJib3hcIikgJiYgKHRvZ2dsZXMuYm94UmVuZGVyaW5nKSkge1xyXG4gICAgICAgICAgICBsZXQgaW1hZ2UgPSBib3hNb2RlbEltYWdlc1twbS5tXTtcclxuICAgICAgICAgICAgaWYoaW1hZ2UgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICAgICAgYm94TW9kZWxJbWFnZXNbcG0ubV0gPSBpbWFnZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSBgcGljLnBocD9jPTMmbT0ke3BtLm19YDtcclxuICAgICAgICAgICAgICAgIGltYWdlLndpZHRoID0gMTY7XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5oZWlnaHQgPSAxNjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihpbWFnZS5wYXR0ZXJuID09IHVuZGVmaW5lZCkgaW1hZ2UucGF0dGVybiA9IGN0eC5jcmVhdGVQYXR0ZXJuKGltYWdlLCBcInJlcGVhdC14XCIpOyAvLyBDcmVhdGUgcmVwZWF0IHBhdHRlcm4gaWYgbm90IGFscmVhZHkgZG9uZS5cclxuICAgICAgICAgICAgY3R4Lmdsb2JhbEFscGhhID0gMTtcclxuXHJcblxyXG4gICAgICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgICAgICAvLyBHZXR0aW5nIGEgd29ya2luZyByZWN0YW5nbGUgZm9yIHVzIGluIG9yZGVyIHRvIHdvcmsuXHJcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgY3R4LnJlY3QoeCwgeSwgdywgaCk7XHJcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuICAgICAgICAgICAgY3R4LmNsaXAoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEVuc3VyaW5nIHRoYXQgYmFja2dyb3VuZCBpcyBvZmZzZXR0ZWQgcHJvcGVybHkgYW5kIHRha2VzIGFsbCB0aGUgcmVjdGFuZ2xlLlxyXG4gICAgICAgICAgICBjdHgudHJhbnNsYXRlKHcyc194KDApLCB3MnNfeSgwKSk7XHJcbiAgICAgICAgICAgIGN0eC5zY2FsZSh3MnNfeCgxKSAtIHcyc194KDApLCB3MnNfeSgxKSAtIHcyc195KDApKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFjdHVhbCBiYWNrZ3JvdW5kIHJlbmRlcmluZy5cclxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gaW1hZ2UucGF0dGVybjtcclxuICAgICAgICAgICAgY3R4LnJlY3QoczJ3X3goMCksIHMyd195KDApLCBzMndfdyhjYW52YXNXaWR0aCksIHMyd19oKGNhbnZhc0hlaWdodCkpO1xyXG4gICAgICAgICAgICBjdHguZmlsbCgpO1xyXG5cclxuICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICgoZWxlbUNsYXNzID09IFwiYmdcIikgJiYgKHdpbmRvdy5DQUNIRURfQkdTW3BtLm1dICE9PSB1bmRlZmluZWQpICYmICh3aW5kb3cuQ0FDSEVEX0JHU1twbS5tXS5sb2FkZWQpKSB7XHJcbiAgICAgICAgICAgIGlmKGJhY2tncm91bmRSZXF1ZXN0c09uUHJvZ3Jlc3MuaW5kZXhPZihwbS5tKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXF1ZXN0c09uUHJvZ3Jlc3Muc3BsaWNlKGJhY2tncm91bmRSZXF1ZXN0c09uUHJvZ3Jlc3MuaW5kZXhPZihwbS5tKSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3R4Lmdsb2JhbEFscGhhID0gMTtcclxuICAgICAgICAgICAgbGV0IGltZyA9IHdpbmRvdy5DQUNIRURfQkdTW3BtLm1dO1xyXG4gICAgICAgICAgICBpZihpbWcucGF0dGVybiA9PSB1bmRlZmluZWQpIGltZy5wYXR0ZXJuID0gY3R4LmNyZWF0ZVBhdHRlcm4oaW1nLCBcInJlcGVhdFwiKTsgLy8gQ3JlYXRlIHJlcGVhdCBwYXR0ZXJuIGlmIG5vdCBhbHJlYWR5IGRvbmUuXHJcblxyXG4gICAgICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgICAgICAvLyBHZXR0aW5nIGEgd29ya2luZyByZWN0YW5nbGUgZm9yIHVzIGluIG9yZGVyIHRvIHdvcmsuXHJcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgY3R4LnJlY3QoeCwgeSwgdywgaCk7XHJcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuICAgICAgICAgICAgY3R4LmNsaXAoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEVuc3VyaW5nIHRoYXQgYmFja2dyb3VuZCBpcyBvZmZzZXR0ZWQgcHJvcGVybHkgYW5kIHRha2VzIGFsbCB0aGUgcmVjdGFuZ2xlLlxyXG4gICAgICAgICAgICBjdHgudHJhbnNsYXRlKHcyc194KDApLCB3MnNfeSgwKSk7XHJcbiAgICAgICAgICAgIGN0eC5zY2FsZSh3MnNfeCgxKSAtIHcyc194KDApLCB3MnNfeSgxKSAtIHcyc195KDApKTtcclxuICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZShwbS51LCBwbS52KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFjdHVhbCBiYWNrZ3JvdW5kIHJlbmRlcmluZy5cclxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gaW1nLnBhdHRlcm47XHJcbiAgICAgICAgICAgIGN0eC5yZWN0KHMyd194KDApLCBzMndfeSgwKSwgczJ3X3coY2FudmFzV2lkdGgpLCBzMndfaChjYW52YXNIZWlnaHQpKTtcclxuICAgICAgICAgICAgY3R4LmZpbGwoKTtcclxuXHJcbiAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBDb2xvciBtdWx0aXBseWluZy5cclxuICAgICAgICAgICAgaWYocG0uYy5sZW5ndGggPT0gNykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbXAgPSBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uO1xyXG5cclxuICAgICAgICAgICAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBcIm11bHRpcGx5XCI7IC8vIFdlIG11bHRpcGx5IHRoZSByZWN0YW5nbGUuXHJcbiAgICAgICAgICAgICAgICBfRHJhd1JlY3RhbmdsZShwbS5jLCAxLCB4LCB5LCB3LCBoLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAvL2N0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBcImxpZ2h0ZXJcIjtcclxuICAgICAgICAgICAgICAgIC8vY3R4LmRyYXdJbWFnZShjdHguY2FudmFzLCB4LCB5LCB3LCBoLCB4LCB5LCB3LCBoKTsgLy8gV2UgdGhlbiBvdmVybGF5IHRoZSByZWN0YW5nbGUgb24gYmFja2dyb3VkIGl0c2VsZi5cclxuXHJcbiAgICAgICAgICAgICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gY29tcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZihPYmpJc0hpZ2hsaWdodGVkKGVsZW1lbnQsIGNucykpIHtcclxuICAgICAgICBlZGdlQ29sb3IgPSBjdXJyZW50VGhlbWUuaGlnaExpZ2h0ZWRPYmpFZGdlQ29sb3I7XHJcbiAgICAgICAgZWRnZU9wYWNpdHlGYWN0b3IgPSBjdXJyZW50VGhlbWUuaGlnaExpZ2h0ZWRPYmpFZGdlT3BhY2l0eSAvIGxheWVyQWxwaGE7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoZWxlbWVudC5zZWxlY3RlZCAmJiAhdG9nZ2xlcy5vcmlnaW5hbFNlbGVjdE92ZXJsYXkpIHtcclxuICAgICAgICBlZGdlQ29sb3IgPSBjdXJyZW50VGhlbWUuc2VsZWN0T3V0bGluZUNvbG9yO1xyXG4gICAgICAgIGVkZ2VPcGFjaXR5RmFjdG9yID0gY3VycmVudFRoZW1lLnNlbGVjdEVkZ2VPcGFjaXR5RmFjdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKCEoICh3aW5kb3cuU0hPV19URVhUVVJFUykgJiYgKCAoZWxlbUNsYXNzID09IFwiYmdcIikgfHwgKChlbGVtQ2xhc3MgPT0gXCJib3hcIikgJiYgdG9nZ2xlcy5ib3hSZW5kZXJpbmcpICkgKSkgX0RyYXdSZWN0YW5nbGUoY29sb3IsIGxheWVyQWxwaGEgKiBvcGFjaXR5RmFjdG9yLCB4LCB5LCB3LCBoLCBmYWxzZSk7IC8vIE9iamVjdCBpdHNlbGYuXHJcbiAgICBpZighd2luZG93LlNIT1dfVEVYVFVSRVMpIF9EcmF3UmVjdGFuZ2xlKGVkZ2VDb2xvciwgbGF5ZXJBbHBoYSAqIGVkZ2VPcGFjaXR5RmFjdG9yLCB4LCB5LCB3LCBoLCB0cnVlKTsgLy8gRWRnZS5cclxufVxyXG5cclxuLy8gRnVuY3Rpb24gcmVzcG9uc2libGUgZm9yIGRyYXdpbmcgZWRnZXMgb2Ygbm9uLXJlc2l6YWJsZSBvYmplY3RzLiBUbyBiZSB1c2VkIGJlbG93LlxyXG5mdW5jdGlvbiBSZW5kZXJOUk9iamVjdEJveChlbGVtZW50LCBjb2xvciwgb3BhY2l0eSkge1xyXG4gICAgbGV0IHBtID0gZWxlbWVudC5wbTtcclxuICAgIGxldCBvYmpYID0gcG0ueDtcclxuICAgIGxldCBvYmpZID0gcG0ueTtcclxuXHJcbiAgICBsZXQgb0NsYXNzID0gd2luZG93LlRoaW5rT2ZCQm94Q2xhc3MoZWxlbWVudC5fY2xhc3MsIGVsZW1lbnQpO1xyXG5cclxuICAgIGxldCBjbGFzc1ggPSB3aW5kb3cuYm9feFtvQ2xhc3NdO1xyXG4gICAgbGV0IGNsYXNzWSA9IHdpbmRvdy5ib195W29DbGFzc107XHJcbiAgICBsZXQgY2xhc3NXID0gd2luZG93LmJvX3dbb0NsYXNzXTtcclxuICAgIGxldCBjbGFzc0ggPSB3aW5kb3cuYm9faFtvQ2xhc3NdO1xyXG5cclxuICAgIGxldCB4O1xyXG4gICAgbGV0IHkgPSB3MnNfeShvYmpZICsgY2xhc3NZKTtcclxuICAgIGxldCB3O1xyXG4gICAgbGV0IGggPSB3MnNfaChjbGFzc0gpO1xyXG5cclxuICAgIGlmKHBtLnNpZGUgIT0gLTEpIHtcclxuICAgICAgICB4ID0gdzJzX3gob2JqWCArIGNsYXNzWCk7XHJcbiAgICAgICAgdyA9IHcyc193KGNsYXNzVyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHggPSB3MnNfeChvYmpYIC0gY2xhc3NYKTtcclxuICAgICAgICB3ID0gdzJzX3coLWNsYXNzVyk7XHJcbiAgICAgICAgeCArPSB3O1xyXG4gICAgICAgIHcgPSAtdztcclxuICAgIH1cclxuICAgIF9EcmF3UmVjdGFuZ2xlKGNvbG9yLCBvcGFjaXR5LCB4LCB5LCB3LCBoLCB0cnVlKTtcclxuXHJcbn1cclxuXHJcbi8vIEZ1bmN0aW9uIHJlc3BvbnNpYmxlIGZvciByZW5kZXJpbmcgbm9uLXJlc2l6YWJsZSBvYmplY3RzIChFdmVyeXRoaW5nIGVsc2UgYXNpZGUgZnJvbSBvbmVzIG1lbnRpb25lZCBhYm92ZS4pXHJcbmZ1bmN0aW9uIFJlbmRlclNpbmdsZU5vblJlc2l6YWJsZU9iamVjdChlbGVtZW50LCBjbnMpIHtcclxuICAgIGxldCBlbGVtQ2xhc3MgPSBlbGVtZW50Ll9jbGFzcztcclxuICAgIGxldCBsYXllckFscGhhID0gd2luZG93Lk1hdGNoTGF5ZXIoZWxlbWVudCkgPyAxOiAwLjM7XHJcbiAgICBsZXQgcG0gPSBlbGVtZW50LnBtO1xyXG4gICAgbGV0IHggPSBwbS54O1xyXG4gICAgbGV0IHkgPSBwbS55O1xyXG5cclxuICAgIGxldCBjb2xvciA9IFwiIzAwMFwiO1xyXG4gICAgbGV0IG9wYWNpdHlGYWN0b3IgPSAwLjE7XHJcblxyXG4gICAgaWYoT2JqSXNIaWdobGlnaHRlZChlbGVtZW50LCBjbnMpKSB7XHJcbiAgICAgICAgY29sb3IgPSBjdXJyZW50VGhlbWUuaGlnaExpZ2h0ZWRPYmpFZGdlQ29sb3I7XHJcbiAgICAgICAgb3BhY2l0eUZhY3RvciA9IGN1cnJlbnRUaGVtZS5oaWdoTGlnaHRlZE9iakVkZ2VPcGFjaXR5IC8gbGF5ZXJBbHBoYTtcclxuICAgIH1cclxuXHJcbiAgICBpZihlbGVtZW50LnNlbGVjdGVkICYmICF0b2dnbGVzLm9yaWdpbmFsU2VsZWN0T3ZlcmxheSkge1xyXG4gICAgICAgIGNvbG9yID0gY3VycmVudFRoZW1lLnNlbGVjdE91dGxpbmVDb2xvcjtcclxuICAgICAgICBvcGFjaXR5RmFjdG9yID0gY3VycmVudFRoZW1lLnNlbGVjdEVkZ2VPcGFjaXR5RmFjdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIFJlbmRlck5ST2JqZWN0Qm94KGVsZW1lbnQsIGNvbG9yLCBsYXllckFscGhhICogb3BhY2l0eUZhY3Rvcik7XHJcblxyXG4gICAgY3R4Lmdsb2JhbEFscGhhID0gbGF5ZXJBbHBoYTtcclxuICAgIGxldCB0cmFuc2Zvcm1lZERlY29yID0gZmFsc2U7XHJcblxyXG4gICAgaWYoZWxlbUNsYXNzID09IFwiZGVjb3JcIikgeyAvLyBSb3RhdGlvbiAmIHNjYWxpbmcsIGFsc28gZmV0Y2hpbmcgZGVjb3IgaWYgbmVlZGVkLi5cclxuICAgICAgICBsZXQgbW9kZWwgPSBwbS5tb2RlbDtcclxuICAgICAgICBpZiggKHdpbmRvdy5zcGVjaWFsX3ZhbHVlc190YWJsZS5kZWNvcl9tb2RlbFttb2RlbF0gPT0gdW5kZWZpbmVkKSAmJiAoZGVjb3JSZXF1ZXN0c09uUHJvZ3Jlc3MuaW5kZXhPZihtb2RlbCkgPT0gLTEpKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5TZXJ2ZXJSZXF1ZXN0KGBhPWdldF9pbWFnZXMmZm9yX2NsYXNzPWRlY29yX21vZGVsJnVwZGF0ZV9jb25zdD0ke21vZGVsfWAsICdyZXF1ZXN0X2NvbnN0cycpO1xyXG4gICAgICAgICAgICBkZWNvclJlcXVlc3RzT25Qcm9ncmVzcy5wdXNoKG1vZGVsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoKHBtLnIgIT0gMCkgfHwgKHBtLnN4ICE9IDEpIHx8IChwbS5zeSAhPSAxKSkge1xyXG4gICAgICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgICAgICBjdHgudHJhbnNsYXRlKHcyc194KHgpLCB3MnNfeSh5KSk7XHJcbiAgICAgICAgICAgIGN0eC5yb3RhdGUocG0uciAvIDE4MCAqIE1hdGguUEkpO1xyXG4gICAgICAgICAgICBjdHguc2NhbGUocG0uc3gsIHBtLnN5KTtcclxuICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSgtdzJzX3goeCksIC13MnNfeSh5KSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybWVkRGVjb3IgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgb2Zmc2V0Q2xhc3MgPSB3aW5kb3cuVGhpbmtPZk9mZnNldENsYXNzKGVsZW1DbGFzcywgZWxlbWVudCk7XHJcbiAgICBsZXQgZmFjdG9yID0gKHBtLnNpZGUgIT0gLTEpID8gMTogLTE7XHJcblxyXG4gICAgbGV0IG9ialggPSB3MnNfeCh4ICsgZmFjdG9yICogd2luZG93LmxvX3hbb2Zmc2V0Q2xhc3NdKTtcclxuICAgIGxldCBvYmpZID0gdzJzX3koeSArIHdpbmRvdy5sb195W29mZnNldENsYXNzXSk7XHJcbiAgICBsZXQgb2JqVyA9IHcyc193KGZhY3RvciAqIHdpbmRvdy5sb193W29mZnNldENsYXNzXSk7XHJcbiAgICBsZXQgb2JqSCA9IHcyc19oKHdpbmRvdy5sb19oW29mZnNldENsYXNzXSk7XHJcblxyXG4gICAgaWYoZmFjdG9yID09IC0xKSB7XHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHgudHJhbnNsYXRlKDIgKiBvYmpYICsgb2JqVywgMCk7XHJcbiAgICAgICAgY3R4LnNjYWxlKC0xLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBpZihbXCJwbGF5ZXJcIiwgXCJlbmVteVwiXS5pbmRleE9mKGVsZW1DbGFzcykgIT09IC0xKSB7XHJcbiAgICAgICAgZHJhd19pbWFnZSh3aW5kb3cuaW1nX2NoYXJzX2Z1bGxbcG0uY2hhcl0sIHcyc194KHBtLnggLSAzNiksIHcyc195KHBtLnkgLSAxMDQpLCB3MnNfdygxMTApLCB3MnNfaCgxMzApKTtcclxuICAgIH0gZWxzZSBpZiAoKGVsZW1DbGFzcyA9PSBcImRlY29yXCIpICYmICh3aW5kb3cuQ0FDSEVEX0RFQ09SU1twbS5tb2RlbF0gIT09IHVuZGVmaW5lZCkgJiYgKCF3aW5kb3cuQ0FDSEVEX0RFQ09SU1twbS5tb2RlbF0ubmF0aXZlKSkge1xyXG4gICAgICAgIGlmKGRlY29yUmVxdWVzdHNPblByb2dyZXNzLmluZGV4T2YocG0ubW9kZWwpICE9PSAtMSkge1xyXG4gICAgICAgICAgICBkZWNvclJlcXVlc3RzT25Qcm9ncmVzcy5zcGxpY2UoZGVjb3JSZXF1ZXN0c09uUHJvZ3Jlc3MuaW5kZXhPZihwbS5tb2RlbCksIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaW1hZ2UgPSB3aW5kb3cuQ0FDSEVEX0RFQ09SU1twbS5tb2RlbF07XHJcbiAgICAgICAgZHJhd19pbWFnZShcclxuICAgICAgICAgICAgaW1hZ2UsXHJcbiAgICAgICAgICAgIHcyc194KHBtLnggKyBwbS51KSxcclxuICAgICAgICAgICAgdzJzX3kocG0ueSArIHBtLnYpLFxyXG4gICAgICAgICAgICB3MnNfdyhpbWFnZS53aWR0aCksXHJcbiAgICAgICAgICAgIHcyc19oKGltYWdlLmhlaWdodClcclxuICAgICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkcmF3X2ltYWdlKHdpbmRvdy5pbWdfZGVjaWRlKGVsZW1lbnQpLCBvYmpYLCBvYmpZLCBvYmpXLCBvYmpIKTtcclxuICAgIH1cclxuXHJcbiAgICBpZihmYWN0b3IgPT0gLTEpIGN0eC5yZXN0b3JlKCk7XHJcbiAgICBpZih0cmFuc2Zvcm1lZERlY29yKSBjdHgucmVzdG9yZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBHZXRPYmplY3RDb29yZEFuZFNpemUoZWxlbWVudCkge1xyXG4gICAgbGV0IHBtID0gZWxlbWVudC5wbTtcclxuXHJcbiAgICBsZXQgeCwgeSwgdywgaDtcclxuICAgIGlmKGVsZW1lbnQuX2lzcmVzaXphYmxlKSB7XHJcbiAgICAgICAgeCA9IHcyc194KHBtLngpO1xyXG4gICAgICAgIHkgPSB3MnNfeShwbS55KTtcclxuICAgICAgICB3ID0gdzJzX3cocG0udyk7XHJcbiAgICAgICAgaCA9IHcyc19oKHBtLmgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgYm94Q2xhc3MgPSB3aW5kb3cuVGhpbmtPZkJCb3hDbGFzcyhlbGVtZW50Ll9jbGFzcywgZWxlbWVudCk7XHJcbiAgICAgICAgeSA9IHcyc195KHBtLnkgKyB3aW5kb3cuYm9feVtib3hDbGFzc10pO1xyXG4gICAgICAgIGggPSB3MnNfaCh3aW5kb3cuYm9faFtib3hDbGFzc10pO1xyXG4gICAgICAgIGlmKHBtLnNpZGUgIT0gLTEpIHtcclxuICAgICAgICAgICAgeCA9IHcyc194KHBtLnggKyB3aW5kb3cuYm9feFtib3hDbGFzc10pO1xyXG4gICAgICAgICAgICB3ID0gdzJzX3cod2luZG93LmJvX3dbYm94Q2xhc3NdKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB4ID0gdzJzX3gocG0ueCAtIHdpbmRvdy5ib194W2JveENsYXNzXSk7XHJcbiAgICAgICAgICAgIHcgPSB3MnNfdygtd2luZG93LmJvX3dbYm94Q2xhc3NdKTtcclxuICAgICAgICAgICAgeCArPSB3O1xyXG4gICAgICAgICAgICB3ID0gLXc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7eDogeCwgeTogeSwgdzogdywgaDogaH1cclxufVxyXG5cclxuZnVuY3Rpb24gUmVuZGVyT2JqZWN0TWFya0FuZE5hbWUoZWxlbWVudCwgY25zKSB7XHJcbiAgICBpZighd2luZG93LkVOQUJMRV9URVhUKSByZXR1cm47XHJcbiAgICBpZihlbGVtZW50LnBtLnVpZCA9PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgIGlmKCF3aW5kb3cuTWF0Y2hMYXllcihlbGVtZW50KSkgcmV0dXJuO1xyXG5cclxuICAgIGlmKHdpbmRvdy5sYXN0X3RpdGxlX2RlbnNpdHkgPT0gdW5kZWZpbmVkKSB3aW5kb3cubGFzdF90aXRsZV9kZW5zaXR5ID0gMDtcclxuXHJcbiAgICBsZXQgY2FweCA9IGNucy54ICsgY25zLncgLyAyO1xyXG4gICAgbGV0IGNhcHkgPSBjbnMueSArIGNucy5oIC8gMjtcclxuXHJcbiAgICBsZXQgZ290aGl0ID0gKGVsZW1lbnQuc2VsZWN0ZWQgJiYgZWxlbWVudC5oaXQoZmFsc2UpKTtcclxuICAgIGN0eC5mb250ID0gXCJub3JtYWwgMTBweCBBcmlhbFwiO1xyXG4gICAgbGV0IGZpbGxUZXh0ID0gZWxlbWVudC5wbS51aWQ7XHJcbiAgICBsZXQgZGltID0gY3R4Lm1lYXN1cmVUZXh0KGZpbGxUZXh0KTtcclxuICAgIGRpbS5oZWlnaHQgPSAxMDtcclxuICAgIGlmIChnb3RoaXQpXHJcbiAgICAgICAgZGltLmhlaWdodCA9IDEyO1xyXG4gICAgaWYgKHdpbmRvdy5tb3VzZV94ID4gY2FweCAtIDMwKVxyXG4gICAgICAgIGlmICh3aW5kb3cubW91c2VfeCA8IGNhcHggKyAzMClcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5tb3VzZV95ID4gY2FweSAtIDMwKVxyXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5tb3VzZV95IDwgY2FweSArIDMwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVfZGVuc2l0eSsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgIGN0eC5nbG9iYWxBbHBoYSA9IDE7XHJcbiAgICBpZiAod2luZG93Lmxhc3RfdGl0bGVfZGVuc2l0eSA+IDEgJiYgIWdvdGhpdCkge1xyXG4gICAgICAgIGxldCBkaSA9IE1hdGguc3FydChNYXRoLnBvdyh3aW5kb3cubW91c2VfeCAtIGNhcHgsIDIpICsgTWF0aC5wb3cod2luZG93Lm1vdXNlX3kgLSBjYXB5LCAyKSk7XHJcbiAgICAgICAgaWYgKGRpIDwgNjApIHtcclxuICAgICAgICAgICAgaWYgKCFlbGVtZW50LnNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICBjYXB4ID0gY2FweCAtICh3aW5kb3cubW91c2VfeCAtIGNhcHgpICogTWF0aC5wb3coKDYwIC0gZGkpIC8gNjAsIDIpICogKDQgKyBNYXRoLm1pbig2LCB3aW5kb3cubGFzdF90aXRsZV9kZW5zaXR5ICogMC4xKSk7XHJcbiAgICAgICAgICAgICAgICBjYXB5ID0gY2FweSAtICh3aW5kb3cubW91c2VfeSAtIGNhcHkpICogTWF0aC5wb3coKDYwIC0gZGkpIC8gNjAsIDIpICogKDQgKyBNYXRoLm1pbig2LCB3aW5kb3cubGFzdF90aXRsZV9kZW5zaXR5ICogMC4xKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAod2luZG93Lmxhc3RfdGl0bGVfZGVuc2l0eSA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdHguZ2xvYmFsQWxwaGEgPSBNYXRoLm1heCgwLjQsIDEgLSB3aW5kb3cubGFzdF90aXRsZV9kZW5zaXR5ICogMC4xKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IE1hdGgubWF4KDAuMywgMSAvIHdpbmRvdy5sYXN0X3RpdGxlX2RlbnNpdHkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IHgzID0gTWF0aC5yb3VuZChjYXB4IC0gZGltLndpZHRoIC8gMik7XHJcbiAgICBsZXQgeTMgPSBNYXRoLnJvdW5kKGNhcHkgLSBkaW0uaGVpZ2h0IC8gMik7XHJcbiAgICBpZiAod2luZG93LkVOQUJMRV9TSEFET1dTKSB7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDAsMCwwLDAuMSknO1xyXG4gICAgICAgIGN0eC5maWxsUmVjdCh4MyAtIDIsIHkzIC0gMiwgZGltLndpZHRoICsgNCwgZGltLmhlaWdodCArIDQpO1xyXG4gICAgICAgIGN0eC5maWxsUmVjdCh4MyAtIDQsIHkzIC0gNCwgZGltLndpZHRoICsgOCwgZGltLmhlaWdodCArIDgpO1xyXG4gICAgfVxyXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiI0ZGRlwiO1xyXG4gICAgaWYgKGdvdGhpdCkgY3R4LmZpbGxTdHlsZSA9ICcjZmZmYjkxJztcclxuICAgIGlmIChlbGVtZW50LnNlbGVjdGVkKSBjdHguZmlsbFN0eWxlID0gY3VycmVudFRoZW1lLnNlbGVjdFRleHRDb2xvcjtcclxuICAgIGN0eC5maWxsVGV4dChmaWxsVGV4dCwgeDMsIHkzICsgOCArIChkaW0uaGVpZ2h0IC0gMTApIC8gMik7XHJcbiAgICB3aW5kb3cubGFzdF90aXRsZV9kZW5zaXR5ID0gd2luZG93LnRpdGxlX2RlbnNpdHk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFJlbmRlclNlbGVjdE92ZXJsYXkoZWxlbWVudCwgY25zKSB7XHJcbiAgICBpZighZWxlbWVudC5zZWxlY3RlZCkgcmV0dXJuO1xyXG4gICAgaWYoIXRvZ2dsZXMub3JpZ2luYWxTZWxlY3RPdmVybGF5KSByZXR1cm47XHJcblxyXG4gICAgY3R4Lmdsb2JhbEFscGhhID0gMC4yO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IHdpbmRvdy5zZWxncmQyO1xyXG4gICAgZHJhd19yZWN0KGNucy54LCBjbnMueSwgY25zLncsIGNucy5oKTtcclxuXHJcbiAgICBjdHguZ2xvYmFsQWxwaGEgPSAxO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiI0ZGRlwiO1xyXG4gICAgd2luZG93Lk15RHJhd1NlbGVjdGlvbihjbnMueC0yLCBjbnMueS0yLCBjbnMudys0LCBjbnMuaCs0KVxyXG59XHJcblxyXG5mdW5jdGlvbiBDaGFuZ2VDdXJzb3JJZkhpdHNCb3JkZXIoZWxlbWVudCwgY25zKSB7XHJcbiAgICBpZighZWxlbWVudC5zZWxlY3RlZCkgcmV0dXJuO1xyXG4gICAgaWYoIWVsZW1lbnQuX2lzcmVzaXphYmxlKSByZXR1cm47XHJcbiAgICBpZighd2luZG93Lk1hdGNoTGF5ZXIoZWxlbWVudCkpIHJldHVybjtcclxuXHJcbiAgICBsZXQgY3ggPSBjbnMueDtcclxuICAgIGxldCBjeSA9IGNucy55O1xyXG4gICAgbGV0IGN3ID0gY25zLnc7XHJcbiAgICBsZXQgY2ggPSBjbnMuaDtcclxuXHJcbiAgICBsZXQgeCA9IGVsZW1lbnQucG0ueDtcclxuICAgIGxldCB5ID0gZWxlbWVudC5wbS55O1xyXG4gICAgbGV0IHcgPSBlbGVtZW50LnBtLnc7XHJcbiAgICBsZXQgaCA9IGVsZW1lbnQucG0uaDtcclxuXHJcbiAgICBsZXQgbXggPSBtQ3VycmVudFg7XHJcbiAgICBsZXQgbXkgPSBtQ3VycmVudFk7XHJcblxyXG4gICAgbGV0IGJvcmRlcldpZHRoID0gd2luZG93LmJvcmRlcndpZHRoO1xyXG5cclxuICAgIC8vIERvIGVsaW1pbmF0aW9uIGlmIGNoZWNraW5nIGlzIG5vdCBuZWNlc3NhcnkuXHJcbiAgICBpZihteCA8ICh4IC0gYm9yZGVyV2lkdGgpKSByZXR1cm47XHJcbiAgICBpZigoeCArIHcgKyBib3JkZXJXaWR0aCkgPCBteCkgcmV0dXJuO1xyXG4gICAgaWYobXkgPCAoeSAtIGJvcmRlcldpZHRoKSkgcmV0dXJuO1xyXG4gICAgaWYoKHkraCtib3JkZXJXaWR0aCkgPCBteSkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBpc1RvcCwgaXNCb3R0b20sIGlzTGVmdCwgaXNSaWdodCA9IGZhbHNlO1xyXG4gICAgLy8gWFxyXG4gICAgaWYoICgoeCAtIGJvcmRlcldpZHRoKSA8PSBteCkgJiYgKG14IDw9ICh4K2JvcmRlcldpZHRoKSkgKSBpc0xlZnQgPSB0cnVlO1xyXG4gICAgaWYoICgoeCt3LWJvcmRlcldpZHRoKSA8PSBteCkgJiYgKG14IDw9ICh4K3crYm9yZGVyV2lkdGgpKSApIGlzUmlnaHQgPSB0cnVlO1xyXG4gICAgLy8gWVxyXG4gICAgaWYoICgoeS1ib3JkZXJXaWR0aCkgPD0gbXkpICYmIChteSA8PSAoeStib3JkZXJXaWR0aCkpKSBpc1RvcCA9IHRydWU7XHJcbiAgICBpZiggKCh5K2gtYm9yZGVyV2lkdGgpIDw9IG15KSAmJiAobXkgPD0gKHkraCtib3JkZXJXaWR0aCkpKSBpc0JvdHRvbSA9IHRydWU7XHJcblxyXG4gICAgbGV0IGN1cnNvciA9IFwiZGVmYXVsdFwiO1xyXG4gICAgaWYoIChpc1RvcCAmJiBpc0xlZnQpIHx8IChpc0JvdHRvbSAmJiBpc1JpZ2h0KSApIGN1cnNvciA9IFwibndzZS1yZXNpemVcIjtcclxuICAgIGVsc2UgaWYoIChpc1RvcCAmJiBpc1JpZ2h0KSB8fCAoaXNCb3R0b20gJiYgaXNMZWZ0KSApIGN1cnNvciA9IFwibmVzdy1yZXNpemVcIjtcclxuICAgIGVsc2UgaWYgKGlzVG9wIHx8IGlzQm90dG9tKSBjdXJzb3IgPSBcIm5zLXJlc2l6ZVwiO1xyXG4gICAgZWxzZSBpZiAoaXNMZWZ0IHx8IGlzUmlnaHQpIGN1cnNvciA9IFwiZXctcmVzaXplXCI7XHJcblxyXG4gICAgaWYod2luZG93LmNhbnYuc3R5bGUuY3Vyc29yICE9IGN1cnNvcikgd2luZG93LmNhbnYuc3R5bGUuY3Vyc29yID0gY3Vyc29yO1xyXG59XHJcblxyXG5mdW5jdGlvbiBSZW5kZXJRdWlja1BpY2soZWxlbWVudCwgY25zKSB7XHJcbiAgICBpZighKHdpbmRvdy5xdWlja19waWNrICYmIHdpbmRvdy5scXBjLmluZGV4T2YoZWxlbWVudC5fY2xhc3MpICE9IC0xKSkgcmV0dXJuO1xyXG4gICAgaWYoIXdpbmRvdy5NYXRjaExheWVyKGVsZW1lbnQpKSByZXR1cm47XHJcblxyXG4gICAgbGV0IHggPSBjbnMueDtcclxuICAgIGxldCB5ID0gY25zLnk7XHJcbiAgICBsZXQgdyA9IGNucy53O1xyXG4gICAgbGV0IGggPSBjbnMuaDtcclxuXHJcbiAgICBsZXQgbWlkWCA9IHggKyB3LzI7XHJcbiAgICBsZXQgbWlkWSA9IHkgKyBoLzI7XHJcblxyXG4gICAgbGV0IHNpbnVzID0gTWF0aC5zaW4oKG5ldyBEYXRlKCkpLmdldFRpbWUoKSAvIDEwMCk7XHJcblxyXG4gICAgY3R4Lmdsb2JhbEFscGhhID0gMC43NSAtIHNpbnVzIC8gNDtcclxuICAgIGxldCBzaXplID0gMjcgKyBzaW51cyAqIDU7XHJcblxyXG4gICAgbGV0IGlzT3ZlciA9IGZhbHNlO1xyXG5cclxuICAgIGlmKHdpbmRvdy5lc1t3aW5kb3cucXVpY2tfcGlja19mYWtlX292ZXJdID09IGVsZW1lbnQpIHtcclxuICAgICAgICBpc092ZXIgPSB0cnVlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBkaXN0ID0gd2luZG93LkRpc3QyRChtaWRYLCBtaWRZLCB3aW5kb3cubW91c2VfeCwgd2luZG93Lm1vdXNlX3kpO1xyXG4gICAgICAgIGlmKGRpc3QgPCAoMjAgKiB3aW5kb3cucXVpY2tfcGlja19oaXRfc2NhbGUpKSB7XHJcbiAgICAgICAgICAgIGlzT3ZlciA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXdfaW1hZ2UoXHJcbiAgICAgICAgaXNPdmVyID8gd2luZG93LmltZ19xdWlja3BpY2syIDogd2luZG93LmltZ19xdWlja3BpY2ssXHJcbiAgICAgICAgbWlkWCAtIHNpemUsXHJcbiAgICAgICAgbWlkWSAtIHNpemUsXHJcbiAgICAgICAgc2l6ZSAqIDIsXHJcbiAgICAgICAgc2l6ZSAqIDJcclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFJlbmRlckNvbm5lY3Rpb25MaW5lcyhlbGVtZW50LCBjbnMpIHtcclxuICAgIGlmKCF3aW5kb3cuU0hPV19DT05ORUNUSU9OUykgcmV0dXJuO1xyXG4gICAgaWYoIWVsZW1lbnQuc2VsZWN0ZWQpIHJldHVybjtcclxuICAgIGlmKCFhbGVpUnVubmluZykgcmV0dXJuO1xyXG5cclxuICAgIGxldCBsYXllckFscGhhID0gd2luZG93Lk1hdGNoTGF5ZXIoZWxlbWVudCkgPyAxOiAwLjM7XHJcblxyXG4gICAgbGV0IG9jbSA9IHdpbmRvdy5PYmplY3RDb25uZWN0aW9uTWFwcGluZztcclxuICAgIGxldCB1dGVtID0gd2luZG93LnVpZFRvRWxlbWVudE1hcDtcclxuICAgIGxldCB1aWQgPSBlbGVtZW50LnBtLnVpZDtcclxuXHJcbiAgICBpZih1aWQgPT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICBpZihvY20ubGVuZ3RoID09IDApIHJldHVybjtcclxuICAgIGlmKG9jbVt1aWRdID09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgaWYoKG9jbVt1aWRdLmJ5Lmxlbmd0aCA9PSAwKSAmJiAob2NtW3VpZF0udG8ubGVuZ3RoID09IDApKSByZXR1cm47XHJcblxyXG4gICAgbGV0IHJlZmVycmVkQnkgPSBvY21bdWlkXS5ieTtcclxuICAgIGxldCByZWZlcnJpbmdUbyA9IG9jbVt1aWRdLnRvO1xyXG5cclxuICAgIGxldCBmcm9tWCwgdG9YO1xyXG4gICAgbGV0IGZyb21ZLCB0b1k7XHJcblxyXG4gICAgZnJvbVggPSBjbnMueCArIGNucy53LzI7XHJcbiAgICBmcm9tWSA9IGNucy55ICsgY25zLmgvMjtcclxuXHJcbiAgICBjdHguZ2xvYmFsQWxwaGEgPSBsYXllckFscGhhICogY3VycmVudFRoZW1lLm9iamVjdENvbm5lY3Rpb25PcGFjaXR5RmFjdG9yO1xyXG4gICAgY3R4LmxpbmVXaWR0aCA9IDE7XHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBjdXJyZW50VGhlbWUub2JqZWN0Q29ubmVjdGlvblRvQ29sb3I7XHJcbiAgICBjdHguc2V0TGluZURhc2goY3VycmVudFRoZW1lLm9iamVjdENvbm5lY3Rpb25EYXNoKTtcclxuXHJcbiAgICAvLyBUT0RPOiBIb3cgY2FuIHdlIGJhdGNoIGxpbmUgZHJhd3M/XHJcbiAgICAvLyBBbGwgb2YgdGhlbSB3aWxsIGhhdmUgc2FtZSBjb2xvci4gKEJ5IGFsbCwgSSBtZWFuIGV2ZXJ5IGxpbmUgdGhhdCBhIGxvb3AgaGFuZGxlcy4pXHJcbiAgICAvLyBTbyBpdCdzIGJlc3QgaWYgd2UganVzdCBiYXRjaCB0aGVtLCBidXQgaG93IGRvIHdlIGRvIHRoYXQ/XHJcblxyXG4gICAgZm9yKGxldCB0byBvZiByZWZlcnJpbmdUbykge1xyXG4gICAgICAgIGxldCBvY25zID0gR2V0T2JqZWN0Q29vcmRBbmRTaXplKHV0ZW1bdG9dKTtcclxuICAgICAgICB0b1ggPSBvY25zLnggKyBvY25zLncvMjtcclxuICAgICAgICB0b1kgPSBvY25zLnkgKyBvY25zLmgvMjtcclxuXHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5tb3ZlVG8oZnJvbVgsIGZyb21ZKTtcclxuICAgICAgICBjdHgubGluZVRvKHRvWCwgdG9ZKTtcclxuICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gY3VycmVudFRoZW1lLm9iamVjdENvbm5lY3Rpb25Gcm9tQ29sb3I7XHJcbiAgICB0b1ggPSBmcm9tWDtcclxuICAgIHRvWSA9IGZyb21ZO1xyXG5cclxuICAgIGZvcihsZXQgYnkgb2YgcmVmZXJyZWRCeSkge1xyXG4gICAgICAgIGxldCBvY25zID0gR2V0T2JqZWN0Q29vcmRBbmRTaXplKHV0ZW1bYnldKTtcclxuICAgICAgICBmcm9tWCA9IG9jbnMueCArIG9jbnMudy8yO1xyXG4gICAgICAgIGZyb21ZID0gb2Nucy55ICsgb2Nucy5oLzI7XHJcblxyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHgubW92ZVRvKGZyb21YLCBmcm9tWSk7XHJcbiAgICAgICAgY3R4LmxpbmVUbyh0b1gsIHRvWSk7XHJcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGN0eC5zZXRMaW5lRGFzaChbXSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFJlbmRlclNpbmdsZU9iamVjdChlbGVtZW50LCBjbnMpIHtcclxuICAgIGlmKGVsZW1lbnQuX2lzcmVzaXphYmxlKSBSZW5kZXJTaW5nbGVSZXNpemFibGVPYmplY3QoZWxlbWVudCwgY25zKTtcclxuICAgIGVsc2UgUmVuZGVyU2luZ2xlTm9uUmVzaXphYmxlT2JqZWN0KGVsZW1lbnQsIGNucyk7XHJcbiAgICBSZW5kZXJTZWxlY3RPdmVybGF5KGVsZW1lbnQsIGNucyk7XHJcbiAgICBSZW5kZXJRdWlja1BpY2soZWxlbWVudCwgY25zKTtcclxuICAgIFJlbmRlck9iamVjdE1hcmtBbmROYW1lKGVsZW1lbnQsIGNucyk7XHJcbiAgICBSZW5kZXJDb25uZWN0aW9uTGluZXMoZWxlbWVudCwgY25zKTtcclxuICAgIENoYW5nZUN1cnNvcklmSGl0c0JvcmRlcihlbGVtZW50LCBjbnMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBSZW5kZXJBbGxPYmplY3RzKCkge1xyXG4gICAgdG90YWxSZW5kZXJlZE9iamVjdHMgPSAwO1xyXG5cclxuICAgIGxldCBscCA9IHdpbmRvdy5sZWZ0X3BhbmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgbGV0IHJwID0gd2luZG93LnJpZ2h0X3BhbmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgbGV0IHRwID0gd2luZG93LnRvcF9wYW5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICBsZXQgY3ggPSBNYXRoLnJvdW5kKHMyd194KGxwLndpZHRoICsgbHAueCkpO1xyXG4gICAgbGV0IGN5ID0gTWF0aC5yb3VuZChzMndfeSh0cC5oZWlnaHQgKyB0cC55KSk7XHJcbiAgICBsZXQgY3cgPSBNYXRoLnJvdW5kKHMyd193KHJwLnggLSAobHAud2lkdGggKyBscC54KSkpO1xyXG4gICAgbGV0IGNoID0gTWF0aC5yb3VuZChzMndfaChjYW52YXNIZWlnaHQgLSAodHAuaGVpZ2h0ICsgdHAueSkpKTtcclxuXHJcbiAgICBmb3IobGV0IGVsZW1lbnQgb2Ygd2luZG93LmVzKSB7XHJcbiAgICAgICAgbGV0IHBtID0gZWxlbWVudC5wbTtcclxuICAgICAgICBsZXQgeCA9IHBtLng7XHJcbiAgICAgICAgbGV0IHkgPSBwbS55O1xyXG4gICAgICAgIGxldCB3ID0gcG0udyA/IHBtLncgOiAwO1xyXG4gICAgICAgIGxldCBoID0gcG0uaCA/IHBtLmggOiAwO1xyXG5cclxuICAgICAgICBpZighZWxlbWVudC5leGlzdHMpIGNvbnRpbnVlO1xyXG4gICAgICAgIGlmKCFlbGVtZW50Ll9pc3BoeXNpY2FsKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgbGV0IGNucztcclxuICAgICAgICBpZihlbGVtZW50LnNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgIGNucyA9IEdldE9iamVjdENvb3JkQW5kU2l6ZShlbGVtZW50KTtcclxuICAgICAgICAgICAgUmVuZGVyQ29ubmVjdGlvbkxpbmVzKGVsZW1lbnQsIGNucyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEFjdHVhbCBjdWxsaW5nXHJcbiAgICAgICAgaWYoICh4K3cpIDwgY3ggKSBjb250aW51ZTtcclxuICAgICAgICBpZiggKHkraCkgPCBjeSApIGNvbnRpbnVlO1xyXG4gICAgICAgIGlmKCAoY3grY3cpIDwgeCApIGNvbnRpbnVlO1xyXG4gICAgICAgIGlmKCAoY3krY2gpIDwgeSApIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICBpZihjbnMgPT0gdW5kZWZpbmVkKSBjbnMgPSBHZXRPYmplY3RDb29yZEFuZFNpemUoZWxlbWVudCk7XHJcbiAgICAgICAgUmVuZGVyU2luZ2xlT2JqZWN0KGVsZW1lbnQsIGNucyk7XHJcbiAgICAgICAgdG90YWxSZW5kZXJlZE9iamVjdHMrKztcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gUmVuZGVyU2VsZWN0aW9uQm94KCkge1xyXG4gICAgaWYoIXdpbmRvdy5tX2RyYWdfc2VsZWN0aW9uKSByZXR1cm47IC8vIElmIHdlIGFyZSBub3QgZHJhZ2dpbmcuXHJcbiAgICBpZih3aW5kb3cubG1kKSByZXR1cm47IC8vIElmIHRoZSBzZWxlY3Rpb24ganVzdCBzdGFydGVkXHJcblxyXG5cclxuICAgIGxldCB4ID0gdzJzX3gobUNsaWNrWCk7IC8vIFN0YXJ0IFggZm9yIHJlY3RhbmdsZVxyXG4gICAgbGV0IHkgPSB3MnNfeShtQ2xpY2tZKTsgLy8gU3RhcnQgWSBmb3IgcmVjdGFuZ2xlXHJcbiAgICBsZXQgdyA9IHcyc193KG1DdXJyZW50WCAtIG1DbGlja1gpOyAvLyBXaWR0aCBmb3IgcmVjdGFuZ2xlLlxyXG4gICAgbGV0IGggPSB3MnNfaChtQ3VycmVudFkgLSBtQ2xpY2tZKTsgLy8gSGVpZ2h0IGZvciByZWN0YW5nbGUuXHJcblxyXG4gICAgbGV0IGNvbG9yID0gY3VycmVudFRoZW1lLnNlbGVjdGlvbkNvbG9yO1xyXG4gICAgaWYod2luZG93LmN0cmwpIGNvbG9yID0gY3VycmVudFRoZW1lLnNlbGVjdGlvbkN0cmxDb2xvcjtcclxuICAgIGVsc2UgaWYod2luZG93LmFsdCkgY29sb3IgPSBjdXJyZW50VGhlbWUuc2VsZWN0aW9uQWx0Q29sb3I7XHJcblxyXG4gICAgX0RyYXdSZWN0YW5nbGUoY29sb3IsIGN1cnJlbnRUaGVtZS5zZWxlY3Rpb25PcGFjaXR5LCB4LCB5LCB3LCBoKTtcclxuICAgIF9EcmF3UmVjdGFuZ2xlKGNvbG9yLCBjdXJyZW50VGhlbWUuc2VsZWN0aW9uRWRnZU9wYWNpdHksIHgsIHksIHcsIGgsIHRydWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBSZW5kZXJCYWNrZ3JvdW5kKCkge1xyXG4gICAgaWYoIXdpbmRvdy5TSE9XX1RFWFRVUkVTKSB7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGN1cnJlbnRUaGVtZS5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgZHJhd19yZWN0KDAsIDAsIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkcmF3X2ltYWdlKHdpbmRvdy5DQUNIRURfU0tZW3ByZXZpZXdCYWNrZ3JvdW5kXSwgMCwgMCwgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNuYXBUb0dyaWQodmFsdWUpIHtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlIC8gd2luZG93LkdSSURfU05BUFBJTkcpICogd2luZG93LkdSSURfU05BUFBJTkc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFJlbmRlckNyb3NzQ3Vyc29yKCkge1xyXG4gICAgaWYod2luZG93LmFjdGl2ZV90b29sID09IFwiZWRpdFwiKSByZXR1cm47XHJcbiAgICBjdHguZ2xvYmFsQWxwaGEgPSAxO1xyXG4gICAgZHJhd19pbWFnZShcclxuICAgICAgICB3aW5kb3cuaW1nX3B1dCxcclxuICAgICAgICB3MnNfeChTbmFwVG9HcmlkKG1DdXJyZW50WCkpIC0gMTUsXHJcbiAgICAgICAgdzJzX3koU25hcFRvR3JpZChtQ3VycmVudFkpKSAtIDE1LFxyXG4gICAgICAgIDMxLFxyXG4gICAgICAgIDMxXHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBSZW5kZXJGcmFtZSgpIHtcclxuICAgIGlmKCF3aW5kb3cubmVlZF9yZWRyYXcpIHJldHVybjtcclxuICAgIGNhbnZhc1dpZHRoID0gd2luZG93LmxzdTtcclxuICAgIGNhbnZhc0hlaWdodCA9IHdpbmRvdy5sc3Y7XHJcbiAgICBjdXJyZW50VGhlbWUgPSB0aGVtZXNbd2luZG93LlRIRU1FXTtcclxuICAgIGdyaWRPcGFjaXR5ID0gd2luZG93LkdSSURfQUxQSEE7XHJcblxyXG4gICAgbUNsaWNrWCA9IHdpbmRvdy5sbWRyd2E7XHJcbiAgICBtQ2xpY2tZID0gd2luZG93LmxtZHJ3YjtcclxuICAgIG1DdXJyZW50WCA9IHdpbmRvdy5sbXdhO1xyXG4gICAgbUN1cnJlbnRZID0gd2luZG93Lmxtd2I7XHJcblxyXG4gICAgd2luZG93LmNhbnYuc3R5bGUuY3Vyc29yID0gXCJkZWZhdWx0XCI7XHJcbiAgICBjdHguZ2xvYmFsQWxwaGEgPSAxO1xyXG5cclxuICAgIFJlbmRlckJhY2tncm91bmQoKTtcclxuICAgIFJlbmRlckdyaWQoKTtcclxuICAgIFJlbmRlckFsbE9iamVjdHMoKTtcclxuICAgIFJlbmRlclNlbGVjdGlvbkJveCgpO1xyXG4gICAgUmVuZGVyQ3Jvc3NDdXJzb3IoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gRGlzcGxheVN0YXRpc3RpY3MoKSB7XHJcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3VpX3JlbmRlckluZm9cIik7XHJcbiAgICBpZihlbGVtZW50ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGVsZW1lbnQuaWQgPSBcImd1aV9yZW5kZXJJbmZvXCI7XHJcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBcIldhaXRpbmcgZm9yIGRhdGEuLi5cIjtcclxuICAgICAgICB3aW5kb3cucmlnaHRfcGFuZWwuY2hpbGROb2Rlc1swXS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJndWlfcGFyYW1zXCIpKTtcclxuICAgIH1cclxuICAgIGxldCB0ZXh0ID0gXCIgXCI7XHJcbiAgICB0ZXh0ICs9IGBSZW5kZXJlciBGUFM6ICR7ZGlzcGxheUZQU30gPGJyPmA7XHJcbiAgICB0ZXh0ICs9IGBSZW5kZXJlZCBPYmplY3Q6ICR7dG90YWxSZW5kZXJlZE9iamVjdHN9IC8gJHt3aW5kb3cuZXMubGVuZ3RofWA7XHJcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IHRleHQuc2xpY2UoMSkucmVwbGFjZUFsbChcIlxcblwiLCBcIjxicj5cIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRpbWVNcygpIHtyZXR1cm4gKG5ldyBEYXRlKCkpLmdldFRpbWUoKX1cclxuXHJcbmZ1bmN0aW9uIFJlcXVlc3RSZWRyYXdJZkdyaWRNb3ZlZCgpIHtcclxuICAgIGxldCBzcGVlZEZhY3RvciA9IHdpbmRvdy5rX3NoaWZ0ID8gNSA6IDE7XHJcblxyXG4gICAgZnVuY3Rpb24gdHJpZ2dlck1vdmUoKSB7XHJcbiAgICAgICAgd2luZG93Lnpvb21fdmFsaWRhdGUoKTtcclxuICAgICAgICB3aW5kb3cubmVlZF9yZWRyYXcgPSB0cnVlO1xyXG4gICAgICAgIHdpbmRvdy5sbWQgPSBmYWxzZTtcclxuICAgICAgICB3aW5kb3cubG13YSA9IHMyd194KHdpbmRvdy5tb3VzZV94KTtcclxuICAgICAgICB3aW5kb3cubG13YiA9IHMyd194KHdpbmRvdy5tb3VzZV95KTtcclxuICAgICAgICAvL3dpbmRvdy5tX21vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZGlkTW92ZSA9IGZhbHNlO1xyXG4gICAgLy8gWC5cclxuICAgIGlmKHdpbmRvdy5zcGVlZF94ICE9PSAwKSB7XHJcbiAgICAgICAgbGV0IHRvQWRkID0gd2luZG93Lnpvb20gKiAxMCAqIHNwZWVkRmFjdG9yICogd2luZG93LnNwZWVkX3g7XHJcbiAgICAgICAgd2luZG93LmRpc19mcm9tX3ggKz0gdG9BZGQ7XHJcbiAgICAgICAgd2luZG93LmRpc190b194ICs9IHRvQWRkO1xyXG4gICAgICAgIGRpZE1vdmUgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgLy8gWS5cclxuICAgIGlmKHdpbmRvdy5zcGVlZF95ICE9PSAwKSB7XHJcbiAgICAgICAgbGV0IHRvQWRkID0gd2luZG93Lnpvb20gKiAxMCAqIHNwZWVkRmFjdG9yICogd2luZG93LnNwZWVkX3k7XHJcbiAgICAgICAgd2luZG93LmRpc19mcm9tX3kgKz0gdG9BZGQ7XHJcbiAgICAgICAgd2luZG93LmRpc190b195ICs9IHRvQWRkO1xyXG4gICAgICAgIGRpZE1vdmUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKGRpZE1vdmUpIHRyaWdnZXJNb3ZlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEhhbmRsZVNpbmdsZUZyYW1lKCkge1xyXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShIYW5kbGVTaW5nbGVGcmFtZSk7XHJcblxyXG4gICAgUmVxdWVzdFJlZHJhd0lmR3JpZE1vdmVkKCk7XHJcbiAgICBSZW5kZXJGcmFtZSgpO1xyXG4gICAgaWYod2luZG93Lm5lZWRfR1VJUGFyYW1zX3VwZGF0ZSkge1xyXG4gICAgICAgIHdpbmRvdy5uZWVkX0dVSVBhcmFtc191cGRhdGUgPSBmYWxzZTtcclxuICAgICAgICB3aW5kb3cuVXBkYXRlR1VJUGFyYW1zKCk7XHJcbiAgICAgICAgd2luZG93LlVwZGF0ZUdVSU9iamVjdHNMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnBzQWNjdW11bGF0b3IrKztcclxuICAgIGlmKChnZXRUaW1lTXMoKSAtIGxhc3RUaW1lKSA+PSAxMDAwKSB7XHJcbiAgICAgICAgbGFzdFRpbWUgPSBnZXRUaW1lTXMoKTtcclxuICAgICAgICBkaXNwbGF5RlBTID0gZnBzQWNjdW11bGF0b3I7XHJcbiAgICAgICAgZnBzQWNjdW11bGF0b3IgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIERpc3BsYXlTdGF0aXN0aWNzKCk7XHJcblxyXG4gICAgaWYoYWxlaVJ1bm5pbmcgJiYgIWhhdmVGb3JjZWRSZWNhbGN1bGF0aW9uKSB7XHJcbiAgICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJwYXJhbXNcIik7XHJcbiAgICAgICAgaWYoZWxlbSA9PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgICAgICB3aW5kb3cuU2hvd0hpZGVPYmplY3RCb3goKTtcclxuICAgICAgICB3aW5kb3cuU2hvd0hpZGVPYmplY3RCb3goKTtcclxuICAgICAgICBoYXZlRm9yY2VkUmVjYWxjdWxhdGlvbiA9IHRydWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFByZXZpZXdNb2RlVXBkYXRlVmFyaWFibGVzKHZhbCkge1xyXG4gICAgaWYoIXZhbCkgcmV0dXJuO1xyXG4gICAgZm9yKGxldCBlbGVtZW50IG9mIHdpbmRvdy5lcykge1xyXG4gICAgICAgIGlmKCEoZWxlbWVudC5fY2xhc3MgPT0gXCJpbmZcIikpIGNvbnRpbnVlO1xyXG4gICAgICAgIGxldCBwbSA9IGVsZW1lbnQucG07XHJcbiAgICAgICAgaWYocG0ubWFyayA9PSBcInNreVwiKSB7XHJcbiAgICAgICAgICAgIHByZXZpZXdCYWNrZ3JvdW5kID0gcG0uZm9ydGVhbTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gUmVnaXN0ZXJTZXR0aW5nc1RvQUxFSSgpIHtcclxuICAgIGlmKCF3aW5kb3cuQUxFSV9BY3RpdmUpIHJldHVybjtcclxuICAgIGFsZWlSdW5uaW5nID0gdHJ1ZTtcclxuXHJcbiAgICBsZXQgQUxFSUFQSSA9IHdpbmRvdy5BTEVJQVBJO1xyXG5cclxuICAgIGlmKEFMRUlBUEkgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgc2V0VGltZW91dChSZWdpc3RlclNldHRpbmdzVG9BTEVJLCAxMDAwKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHNldHRpbmdzID0gQUxFSUFQSS5zZXR0aW5ncztcclxuXHJcbiAgICBzZXR0aW5ncy5hZGRUZXh0KFwiW1JdIENhcnRvb25pc2ggRWRnZXM6XCIsIGZhbHNlKTtcclxuICAgIHNldHRpbmdzLmNyZWF0ZUJ1dHRvbnMoXCJBTEVJX1JlbmRlcmVyX0NhcnRvb25pc2hFZGdlc1wiLCB0b2dnbGVzLCBcImNhcnRvb25pc2hFZGdlc1wiLCBbW1wiWWVzXCIsIHRydWVdLCBbXCJOb1wiLCBmYWxzZV1dKTtcclxuXHJcbiAgICBzZXR0aW5ncy5hZGRUZXh0KFwiW1JdIE9yaWdpbmFsIFNlbGVjdDpcIiwgZmFsc2UpO1xyXG4gICAgc2V0dGluZ3MuY3JlYXRlQnV0dG9ucyhcIkFMRUlfUmVuZGVyZXJfT3JpZ2luYWxTZWxlY3RPdmVybGF5XCIsIHRvZ2dsZXMsIFwib3JpZ2luYWxTZWxlY3RPdmVybGF5XCIsIFtbXCJZZXNcIiwgdHJ1ZV0sIFtcIk5vXCIsIGZhbHNlXV0pO1xyXG5cclxuICAgIHNldHRpbmdzLmFkZFRleHQoXCJbUl0gUHJldmlldyB3YWxsczpcIiwgZmFsc2UpO1xyXG4gICAgc2V0dGluZ3MuY3JlYXRlQnV0dG9ucyhcIkFMRUlfUmVuZGVyZXJfUHJldmlld1dhbGxzXCIsIHRvZ2dsZXMsIFwiYm94UmVuZGVyaW5nXCIsIFtbXCJZZXNcIiwgdHJ1ZV0sIFtcIk5vXCIsIGZhbHNlXV0pO1xyXG5cclxuICAgIHdpbmRvdy5BTEVJX3NldHRpbmdVcGRhdGVCdXR0b25zKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBTEVJX1JlbmRlcmVyX09uRG9jdW1lbnRMb2FkKCkge1xyXG4gICAgY3R4ID0gd2luZG93LmN0eDtcclxuXHJcbiAgICAvLyBEcmF3IGZ1bmN0aW9ucy5cclxuICAgIGRyYXdfcmVjdF9lZGdlcyA9ICh4LCB5LCB3LCBoKSA9PiBjdHguc3Ryb2tlUmVjdCh4LCB5LCB3LCBoKTtcclxuICAgIGRyYXdfcmVjdCA9IHdpbmRvdy5sbWZyO1xyXG4gICAgZHJhd19ncmlkbGluZXMgPSB3aW5kb3cubGc7XHJcbiAgICBkcmF3X2ltYWdlID0gKGltZywgeCwgeSwgdywgaCkgPT4gd2luZG93Lk15RHJhd0ltYWdlKGltZywgeCwgeSwgdywgaCk7XHJcblxyXG4gICAgLy8gT2JqZWN0cy5cclxuICAgIHJlZ2lvbkltYWdlcyA9IHtcclxuICAgICAgICAxOiB3aW5kb3cuaW1nX3JlZ2lvbixcclxuICAgICAgICA5OiB3aW5kb3cuaW1nX3JlZ2lvbl9yZWQsXHJcbiAgICAgICAgMTA6IHdpbmRvdy5pbWdfcmVnaW9uX2JsdWVcclxuICAgIH1cclxuXHJcbiAgICAvLyBTdG9yaW5nIGZ1bmN0aW9ucyBpbnRvIG91ciBzY29wZS4gKFRvIGF2b2lkIHRhbXBlcm1vbmtleSB3YXJuaW5nKVxyXG4gICAgdzJzX3ggPSB3aW5kb3cudzJzX3g7XHJcbiAgICB3MnNfeSA9IHdpbmRvdy53MnNfeTtcclxuICAgIHMyd194ID0gd2luZG93LnMyd194O1xyXG4gICAgczJ3X3kgPSB3aW5kb3cuczJ3X3k7XHJcbiAgICB3MnNfaCA9IHdpbmRvdy53MnNfaDtcclxuICAgIHcyc193ID0gd2luZG93Lncyc193O1xyXG4gICAgczJ3X2ggPSB3aW5kb3cuczJ3X2g7XHJcbiAgICBzMndfdyA9IHdpbmRvdy5zMndfdztcclxuICAgIC8vIFBhdGNoaW5nLlxyXG4gICAgbGV0IG9zdHMgPSB3aW5kb3cuU2hvd1RleHR1cmVzU2V0O1xyXG4gICAgd2luZG93LlNob3dUZXh0dXJlc1NldCA9ICh2YWwpID0+IHtQcmV2aWV3TW9kZVVwZGF0ZVZhcmlhYmxlcyh2YWwpOyBvc3RzKHZhbCl9XHJcbiAgICB3aW5kb3cuUmVuZGVyID0gKCkgPT4ge307IC8vIE1ha2UgUmVuZGVyIGZ1bmN0aW9uIGRvIG5vdGhpbmcuXHJcbiAgICB3aW5kb3cuYW5pID0gKCkgPT4ge307IC8vIE1ha2UgYW5pIGZ1bmN0aW9uIGRvIG5vdGhpbmcuXHJcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKEhhbmRsZVNpbmdsZUZyYW1lKTtcclxuXHJcbiAgICAvLyBTZXR0aW5nIGRlZmF1bHQgdmFsdWVzLlxyXG4gICAgbGFzdFRpbWUgPSBnZXRUaW1lTXMoKTtcclxuXHJcbiAgICBSZWdpc3RlclNldHRpbmdzVG9BTEVJKCk7XHJcbiAgICBpZighYWxlaVJ1bm5pbmcpIHdpbmRvdy5OZXdOb3RlKGBBTEVJIFJlbmRlcmVyOiBZb3UgYXJlIG5vdCBydW5uaW5nIHdpdGggQUxFSS4gRG9uJ3QgZXhwZWN0IGZlYXR1cmUgY29tcGxldGVuZXNzIGFzIHJlbmRlcmVyIGRlcGVuZHMgb24gQUxFSSBnaXZpbmcgc29tZSBpbmZvcm1hdGlvbnMuYCwgXCIjRkZGRjAwXCIpO1xyXG5cclxuICAgIC8vIExvZ2dpbmcuXHJcbiAgICBjb25zb2xlLmxvZyhgW0FMRUkgUmVuZGVyZXJdOiBBY3RpdmUuYCk7XHJcbn1cclxuXHJcbmxldCBpc05hdGl2ZTtcclxuXHJcbnRyeSB7XHJcbiAgICBHTV9pbmZvOyAvLyBJZiB0aGlzIGlzIHJ1bm5pbmcgdW5kZXIgdGFtcGVybW9ua2V5LlxyXG4gICAgXHJcbiAgICAvLyBJZiBBTEVJIGlzIG5vdCBydW5uaW5nIHVzLlxyXG4gICAgaWYoW1wiQUxFIEltcHJvdmVtZW50c1wiLCBcIkFMRSBJbXByb3ZlbWVudHMgTG9jYWxcIl0uaW5kZXhPZihHTV9pbmZvLnNjcmlwdC5uYW1lKSA9PSAtMSkge1xyXG4gICAgICAgaXNOYXRpdmUgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgIGlzTmF0aXZlID0gZmFsc2U7IC8vIE9yIEFMRUkgaXMgcnVubmluZyB1cy5cclxuICAgIH07XHJcbn1cclxuY2F0Y2goZSkge2lzTmF0aXZlID0gdHJ1ZTt9XHJcblxyXG4vLyBUaGlzIGlzIHRvIGVuc3VyZSByZW5kZXJlciBjYW4gc3RpbGwgcnVuIGFzIHNlcGFyYXRlIHVzZXJzY3JpcHQuIChNYW51YWwgd29yayBoYXMgdG8gYmUgZG9uZSBieSByZW1vdmluZyAnZXhwb3J0JyBmcm9tIGFib3ZlIG1hbnVhbGx5LilcclxuaWYoaXNOYXRpdmUpIHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IEFMRUlfUmVuZGVyZXJfT25Eb2N1bWVudExvYWQoKSk7XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICogYXMgbG9hZGNzcyBmcm9tIFwiLi9sb2FkY3NzLmpzXCI7XHJcbmltcG9ydCB7IHBhcnNlIGFzIGFsZXNjcmlwdFBhcnNlIH0gZnJvbSBcIi4vYWxlc2NyaXB0LmpzXCI7XHJcbmltcG9ydCB7QUxFSV9SZW5kZXJlcl9PbkRvY3VtZW50TG9hZCBhcyBSZW5kZXJlcl9pbml0aWFsaXplfSBmcm9tIFwiLi9yZW5kZXJlci51c2VyLmpzXCJcclxuXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxubGV0IHdpbmRvdyA9IHVuc2FmZVdpbmRvdztcclxubGV0IGlzTmF0aXZlO1xyXG50cnkge1xyXG4gICAgR01faW5mb1xyXG4gICAgaXNOYXRpdmUgPSB0cnVlO1xyXG4gICAgd2luZG93W1wibmF0aXZlQUxFSVJ1bm5pbmdcIl0gPSB0cnVlO1xyXG59IGNhdGNoIChlKSB7XHJcbiAgICBpc05hdGl2ZSA9IGZhbHNlXHJcbn07XHJcblxyXG5pZighaXNOYXRpdmUgJiYgKHdpbmRvd1tcIm5hdGl2ZUFMRUlSdW5uaW5nXCJdID09IHRydWUpKSB7XHJcbiAgICBIZWxsb19JZ25vcmVUaGlzRXJyb3JfSXRJc0ludGVudGlvbmFsIC8vIGhvcGUgdGhpcyBpcyBub3QgZGVmaW5lZFxyXG59XHJcbndpbmRvd1tcIkFMRUlfQWN0aXZlXCJdID0gdHJ1ZTtcclxuXHJcbi8vIFNob3J0aGFuZCB0aGluZ3NcclxuZnVuY3Rpb24gJGlkKGlkKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG59XHJcbmZ1bmN0aW9uICRxdWVyeShzZWxlY3Rvcikge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG59XHJcblxyXG5sZXQgUk9PVF9FTEVNRU5UID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG5sZXQgc3R5bGVzaGVldHMgPSBkb2N1bWVudC5zdHlsZVNoZWV0cztcclxubGV0IFZBTF9UQUJMRSA9IHt9OyAvLyBXaWxsIGJlIGZpbGxlZCBsYXRlci5cclxubGV0IGRpc3BsYXlPcGVyYXRpb25Db21wbGV0ZU5vdGVzID0gdHJ1ZTtcclxubGV0IFJFR0lPTl9FWEVDVVRFX1BBUkFNX0lEOyAvLyBXaWxsIGJlIHNldCBsYXRlci5cclxubGV0IE9DTV9MT0FERUQgPSB0cnVlOyAvLyBBc3N1bWUgZW1wdHkgbWFwLlxyXG5sZXQgRXh0ZW5kZWRUcmlnZ2Vyc0xvYWRlZCA9IGZhbHNlO1xyXG5cclxuY29uc3QgSU5GTyA9IDA7XHJcbmNvbnN0IERFQlVHID0gMTtcclxuY29uc3QgREVCVUcyID0gMjtcclxuY29uc3QgVkVSQk9TRSA9IERFQlVHMjsgLy8gQWxpYXMuXHJcbmNvbnN0IFdBUk4gPSAtMTtcclxuY29uc3QgU1dBUk4gPSAtMjtcclxuY29uc3QgX19PQ01fQ0hFQ0tFRF9LRVlTID0gW1widGFyZ2V0XCIsIFwiYXR0YWNoXCIsIFwidXNlX3RhcmdldFwiLCBcImluY2FyXCIsIFwib25kZWF0aFwiLCBcImNhbGxiYWNrXCJdOyAvLyBPQ00gPSBPYmplY3QgQ29ubmVjdGlvbiBNYXBwaW5nXHJcblxyXG4vLyBKdXN0IGZvciBzdHlsaW5nLlxyXG5jb25zdCBBTlNJX1JFU0VUID0gXCJcXHgxQlswbVwiXHJcbmNvbnN0IEFOU0lfUkVEID0gXCJcXHgxQlszMW1cIlxyXG5jb25zdCBBTlNJX0dSRVkgPSBcIlxceDFCWzM3bVwiXHJcbmNvbnN0IEFOU0lfWUVMTE9XID0gXCJcXHgxQls5M21cIlxyXG5jb25zdCBBTlNJX0dSRUVOID0gXCJcXHgxQls5Mm1cIlxyXG5jb25zdCBBTlNJX0NZQU4gPSBcIlxceDFCWzk2bVwiXHJcblxyXG5mdW5jdGlvbiByZWFkU3RvcmFnZShrZXksIGRlZmF1bHRWYWx1ZSwgZnVuYykge1xyXG4gICAgbGV0IHZhbCA9IGxvY2FsU3RvcmFnZVtrZXldO1xyXG4gICAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG4gICAgcmV0dXJuIGZ1bmMobG9jYWxTdG9yYWdlW2tleV0pXHJcbn1cclxuXHJcbmlmIChsb2NhbFN0b3JhZ2VbJ1JJR0hUX1BBTkVMX1dJRFRIJ10gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2VbXCJBTEVJX1JpZ2h0UGFuZWxXaWR0aFwiXSA9IGxvY2FsU3RvcmFnZVtcIlJJR0hUX1BBTkVMX1dJRFRIXCJdO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJSSUdIVF9QQU5FTF9XSURUSFwiKTtcclxufVxyXG5cclxubGV0IGFsZWlTZXR0aW5ncyA9IHtcclxuICAgIHJpZ2h0UGFuZWxTaXplOiAgICAgcmVhZFN0b3JhZ2UoXCJBTEVJX1JpZ2h0UGFuZWxXaWR0aFwiLCAgICAgICAgIFwiMzB2d1wiLCAgKHZhbCkgPT4gdmFsICAgICAgICAgKSxcclxuICAgIHRyaWdnZXJFZGl0VGV4dFNpemU6cmVhZFN0b3JhZ2UoXCJBTEVJX0VkaXRUZXh0U2l6ZVwiLCAgICAgICAgICAgIFwiMTJweFwiLCAgKHZhbCkgPT4gdmFsICsgXCJweFwiICApLFxyXG4gICAgc3RhcnNJbWFnZTogICAgICAgICByZWFkU3RvcmFnZShcIkFMRUlfU3RhckltYWdlXCIsICAgICAgICAgICAgICAgXCJzdGFyczIuanBnXCIsICh2YWwpID0+IHZhbCAgICApLFxyXG4gICAgbG9nTGV2ZWw6ICAgICAgICAgICByZWFkU3RvcmFnZShcIkFMRUlfTG9nTGV2ZWxcIiwgICAgICAgICAgICAgICAgMCwgICAgIHBhcnNlSW50ICAgICAgICAgICAgICAgKSxcclxuICAgIHNob3dUcmlnZ2VySURzOiAgICAgcmVhZFN0b3JhZ2UoXCJBTEVJX1Nob3dUcmlnZ2VySURzXCIsICAgICAgICAgIGZhbHNlLCAodmFsKSA9PiB2YWwgPT09IFwidHJ1ZVwiKSxcclxuICAgIGVuYWJsZVRvb2x0aXBzOiAgICAgcmVhZFN0b3JhZ2UoXCJBTEVJX1Nob3dUb29sdGlwc1wiLCAgICAgICAgICAgIGZhbHNlLCAodmFsKSA9PiB2YWwgPT09IFwidHJ1ZVwiKSxcclxuICAgIHNob3dTYW1lUGFyYW1ldGVyczogcmVhZFN0b3JhZ2UoXCJBTEVJX1Nob3dTYW1lUGFyYW1ldGVyc1wiLCAgICAgIHRydWUgLCAodmFsKSA9PiB2YWwgPT09IFwidHJ1ZVwiKSxcclxuICAgIHJlbWF0Y2hVSUQ6ICAgICAgICAgcmVhZFN0b3JhZ2UoXCJBTEVJX1JlbWFwVUlEXCIsICAgICAgICAgICAgICAgIGZhbHNlLCAodmFsKSA9PiB2YWwgPT09IFwidHJ1ZVwiKSxcclxuICAgIC8vc2hvd0lEczogICAgICAgICAgICByZWFkU3RvcmFnZShcIkFMRUlfU2hvd0lEc1wiLCAgICAgICAgICAgICAgIGZhbHNlLCAodmFsKSA9PiB2YWwgPT09IFwidHJ1ZVwiKSxcclxuICAgIGJsYWNrVGhlbWU6ICAgICAgICAgcmVhZFN0b3JhZ2UoXCJBTEVJX0JsYWNrVGhlbWVcIiwgICAgICAgICAgICAgIGZhbHNlLCAodmFsKSA9PiB2YWwgPT09IFwidHJ1ZVwiKSxcclxuICAgIGdyaWRCYXNlZE9uU25hcHBpbmc6cmVhZFN0b3JhZ2UoXCJBTEVJX2dyaWRCYXNlZE9uU25hcHBpbmdcIiwgICAgIHRydWUsICAodmFsKSA9PiB2YWwgPT09IFwidHJ1ZVwiKSxcclxuICAgIC8vc2hvd1pJbmRleDogICAgICAgICByZWFkU3RvcmFnZShcIkFMRUlfU2hvd1pJbmRleFwiLCAgICAgICAgICAgICAgZmFsc2UsICh2YWwpID0+IHZhbCA9PT0gXCJ0cnVlXCIpLFxyXG4gICAgcmVuZGVyT2JqZWN0TmFtZXM6ICByZWFkU3RvcmFnZShcIkFMRUlfUmVuZGVyT2JqZWN0TmFtZXNcIiwgICAgICAgdHJ1ZSwgICh2YWwpID0+IHZhbCA9PT0gXCJ0cnVlXCIpLFxyXG4gICAgLy9vY21FbmFibGVkOiAgICAgICAgIHJlYWRTdG9yYWdlKFwiQUxFSV9PQ01FbmFibGVkXCIsICAgICAgICAgICAgICBmYWxzZSwgKHZhbCkgPT4gdmFsID09PSBcInRydWVcIiksXHJcbiAgICBvY21FbmFibGVkOiAgICAgICAgIHRydWUsXHJcbiAgICBleHRlbmRlZFRyaWdnZXJzOiAgIHJlYWRTdG9yYWdlKFwiQUxFSV9FeHRlbmRlZFRyaWdnZXJzRW5hYmxlZFwiLCB0cnVlLCAgKHZhbCkgPT4gdmFsID09PSBcInRydWVcIiksXHJcbiAgICBjdXN0b21SZW5kZXJlcjogICAgIHJlYWRTdG9yYWdlKFwiQUxFSV9SZW5kZXJlcl9FbmFibGVkXCIsICAgICAgICB0cnVlLCAgKHZhbCkgPT4gdmFsID09PSBcInRydWVcIiksXHJcbiAgICBvcmRlcmVkTmFtaW5nOiAgICAgIHJlYWRTdG9yYWdlKFwiQUxFSV9vcmRlcmVkTmFtaW5nXCIsICAgICAgICAgICB0cnVlLCAgKHZhbCkgPT4gdmFsID09PSBcInRydWVcIilcclxufVxyXG53aW5kb3cuYWxlaVNldHRpbmdzID0gYWxlaVNldHRpbmdzO1xyXG5cclxuZnVuY3Rpb24gd3JpdGVTdG9yYWdlKGtleSwgdmFsdWUpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlW2tleV0gPSB2YWx1ZTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBOZXdOb3RlKFwiQUxFSTogVGhlcmUgd2FzIHNvbWUgaXNzdWUgdHJ5aW5nIHRvIHNhdmUgaW50byBzdG9yYWdlLiBZb3UgbWlnaHQgbmVlZCB0byBjbGVhciB5b3VyIGRhdGFzLlwiLCBub3RlX2JhZCk7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IGxldmVsVG9OYW1lTWFwID0ge1xyXG4gICAgMDogYCR7QU5TSV9DWUFOfUlORk8ke0FOU0lfUkVTRVR9YCxcclxuICAgIDE6IGAke0FOU0lfR1JFRU59REVCVUcke0FOU0lfUkVTRVR9YCxcclxuICAgIDI6IGAke0FOU0lfR1JFRU59VkVSQk9TRSR7QU5TSV9SRVNFVH1gXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFsZWlMb2cobGV2ZWwsIHRleHQpIHtcclxuICAgIGlmIChsZXZlbCA8PSBXQVJOKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKGBbQUxFSTpXQVJOSU5HXTogJHt0ZXh0fWApO1xyXG4gICAgICAgIGlmKGxldmVsID09PSBXQVJOKSBOZXdOb3RlKGBBTEVJOiBQbGVhc2UgY2hlY2sgY29uc29sZS5gLCBcIiNGRkZGMDBcIik7XHJcbiAgICB9ZWxzZSBpZiAobGV2ZWwgPD0gYWxlaVNldHRpbmdzLmxvZ0xldmVsKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBbJHtBTlNJX0dSRUVOfUFMRUk6JHtsZXZlbFRvTmFtZU1hcFtsZXZlbF19XTogJHt0ZXh0fWApXHJcbn1cclxuYWxlaUxvZyhJTkZPLCBcIlN0YXJ0aW5nIHVwLi4uXCIpO1xyXG5cclxuLy8gT3JpZ2luYWwgZnVuY3Rpb25zLCBnbG9iYWxseSBzYXZlZCBoZXJlIGlmIG5lZWRlZFxyXG4vLyBKU18gcHJlZml4IGZvciBKYXZhU2NyaXB0IG9uZXMsIEFMRV8gZm9yIEFMRSBvbmVzXHJcbmxldCBKU19zZXRUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQ7XHJcbmxldCBKU19ldmFsID0gd2luZG93LmV2YWw7XHJcbmxldCBBTEVfUmVuZGVyO1xyXG5cclxubGV0IGFsZWlTZXNzaW9uSUQgPSBudWxsOyAvLyBJRCBvZiB0aGlzIHNlc3Npb25cclxubGV0IGFsZWlTZXNzaW9uTGlzdCA9IFtdOyAvLyBTZXQgb2Yga25vd24gc2Vzc2lvbiBJRHNcclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVBhcmFtZXRlcnMoKSB7XHJcbiAgICAvLyBEb2VzIHRoaW5ncyB0byBwYXJhbWV0ZXJzIGRlcGVuZGluZyBvbiBwdXJwb3NlLlxyXG4gICAgZnVuY3Rpb24gYWRkKGtleSwgdHlwZSwgbmFtZSwgb2JqVHlwZSkge1xyXG4gICAgICAgIHBhcmFtX3R5cGVbcGFyYW1fdHlwZS5sZW5ndGhdID0gW2tleSwgdHlwZSwgbmFtZSwgXCJcIiwgb2JqVHlwZV07XHJcbiAgICB9XHJcbiAgICAvLyBBZGRpbmcgcGFyYW1ldGVycyB0aGF0IHRoZSBnYW1lIGFjY2VwdHMgYnV0IEFMRSBkb2VzIG5vdCBoYXZlLlxyXG4gICAgYWRkKFwibW92aW5nXCIsIFwiYm9vbFwiLCBcIklzIE1vdmluZz9cIiwgXCJkb29yXCIpO1xyXG4gICAgYWRkKFwidGFyeFwiLCBcInZhbHVlXCIsIFwiVGFyZ2V0IFhcIiwgXCJkb29yXCIpO1xyXG4gICAgYWRkKFwidGFyeVwiLCBcInZhbHVlXCIsIFwiVGFyZ2V0IFlcIiwgXCJkb29yXCIpO1xyXG4gICAgLy8gQWRkaW5nIG91ciBvd24gcGFyYW1ldGVyLlxyXG4gICAgYWRkKFwiX19pZFwiLCBcInZhbHVlXCIsIFwiT2JqZWN0IElEXCIsIFwiKlwiKTtcclxuICAgIGFkZChcIl9fcHJpb3JpdHlcIiwgXCJ2YWx1ZVwiLCBcIk9iamVjdCBwcmlvcml0eVwiLCBcIipcIik7XHJcbiAgICBhZGQoXCJleGVjdXRlXCIsIFwiYm9vbFwiLCBcIkV4ZWN1dGVzIGRpcmVjdGx5P1wiLCBcInRyaWdnZXJcIik7XHJcbiAgICBhZGQoXCJ1c2VzX3RpbWVyXCIsIFwiYm9vbFwiLCBcIkNhbGxzIHRpbWVyP1wiLCBcInJlZ2lvblwiKTtcclxuICAgIGFkZChcInRleHRcIiwgXCJzdHJpbmdcIiwgXCJQbGFjZWhvbGRlciB0ZXh0XCIsIFwiZGVjb3JcIik7XHJcbiAgICBhZGQoXCJhdHRhY2hcIiwgXCJkb29yK25vbmVcIiwgXCJBdHRhY2ggdG9cIiwgXCJ3YXRlclwiKTtcclxuXHJcbiAgICAvLyBhZGQoXCJleHRlbmRlZFwiLCBcImJvb2xcIiwgXCJFeHRlbmRlZD9cIiwgXCJ0cmlnZ2VyXCIpO1xyXG4gICAgLy8gYWRkKFwidG90YWxOdW1PZkFjdGlvbnNcIiwgXCJ2YWx1ZVwiLCBcIlRvdGFsIE5vLiBPZiBBY3Rpb25zOiBcIiwgXCJ0cmlnZ2VyXCIpO1xyXG4gICAgLy8gYWRkKFwibmV4dFRyaWdnZXJcIiwgXCJ0cmlnZ2VyK25vbmVcIiwgXCJOZXh0IHRyaWdnZXJcIiwgXCJ0cmlnZ2VyXCIpO1xyXG5cclxuICAgIC8vIFBhdGNoaW5nIHBhcmFtZXRlcnNcclxuICAgIHBhcmFtX3R5cGVbMF0gPSBbJ3VpZCcsICdzdHJpbmcnLCAnTmFtZScsICdPYmplY3QgTmFtZScsICcqJ107XHJcblxyXG4gICAgLy8gU2V0dGluZyBnbG9iYWwgdmFyaWFibGVzIGZvciBmdXR1cmUgdXNlXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcGFyYW1fdHlwZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBwYXJhbSA9IHBhcmFtX3R5cGVbaV07XHJcbiAgICAgICAgbGV0IGtleSA9IHBhcmFtWzBdO1xyXG4gICAgICAgIGxldCBzZWxlY3RvciA9IHBhcmFtWzRdO1xyXG5cclxuICAgICAgICBpZigoa2V5ID09IFwidXNlX3RhcmdldFwiKSAmJiAoc2VsZWN0b3IgPT0gXCJyZWdpb25cIikpIHtcclxuICAgICAgICAgICAgUkVHSU9OX0VYRUNVVEVfUEFSQU1fSUQgPSBpO1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoW1wid1wiLCBcImhcIl0uaW5kZXhPZihrZXkpICE9IC0xKSB7IC8vIEVuYWJsZXMgaGVpZ2h0IGFuZCB3aWR0aCBwYXJhbWV0ZXJzIHRvIGJlIGFibGUgdG8gaGF2ZSBuZWdhdGl2ZSBoZWlnaHQgYW5kIHdpZHRoLlxyXG4gICAgICAgICAgICBwYXJhbV90eXBlW2ldWzFdID0gXCJ2YWx1ZStyb3VuZDEwXCI7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFZBTF9UQUJMRVtcInRpbWVyK25vbmVcIl0gPSBuZXcgQXJyYXkoKTtcclxuICAgIFZBTF9UQUJMRVtcInRpbWVyK25vbmVcIl1bLTFdID0gXCItIE5vIHRpbWVyIC1cIjtcclxuICAgIFZBTF9UQUJMRVtcInRpbWVyK25vbmVcIl1bXCJbbGlzdG9mXVwiXSA9IFwidGltZXJcIjsgLy8gU29tZWJvZHkgc2F2ZSBtZS5cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlU291bmRzKCkge1xyXG4gICAgLy8gQWRkcyBzb3VuZHMgdGhhdCBleGlzdCBpbiBnYW1lIGJ1dCBub3QgaW4gQUxFXHJcbiAgICBsZXQgU1ZUUyA9IFZBTF9UQUJMRVtcInNvdW5kXCJdO1xyXG4gICAgU1ZUU1snYW1fYmFzZSddID0gJ0luZG9vciBBbWJpZW5jZSc7XHJcbiAgICBTVlRTWydhbV93aW5kJ10gPSAnT3V0ZG9vciBBbWJpZW5jZSc7XHJcbiAgICBTVlRTWydhbmRyb2lkMl9kaWUnXSA9ICdEVC0xNDggLSBEZWF0aCc7XHJcbiAgICBTVlRTWydhbmRyb2lkMl9odXJ0J10gPSAnRFQtMTQ4IC0gSHVydCc7XHJcbiAgICBTVlRTWydhbmRyb2lkMl93ZWxjb21lMiddID0gJ0RULTE0OCAtIEFsZXJ0ZWQnO1xyXG4gICAgU1ZUU1snYXJyaW5fZGVhdGgxJ10gPSAnQXJyaW4gLSBEZWF0aCc7XHJcbiAgICBTVlRTWydhcnJpbl9keWluZyddID0gJ0FycmluIC0gRHlpbmcnO1xyXG4gICAgU1ZUU1snYXJyaW5faHVydDEnXSA9ICdBcnJpbiAtIEh1cnQgMSc7XHJcbiAgICBTVlRTWydhcnJpbl9odXJ0MiddID0gJ0FycmluIC0gSHVydCAyJztcclxuICAgIFNWVFNbJ2FycmluX3dlbGNvbWUxJ10gPSAnQXJyaW4gLSBBbGVydGVkIDEnO1xyXG4gICAgU1ZUU1snYXJyaW5fd2VsY29tZTInXSA9ICdBcnJpbiAtIEFsZXJ0ZWQgMic7XHJcbiAgICBTVlRTWydhcnJpbl93ZWxjb21lMyddID0gJ0FycmluIC0gQWxlcnRlZCAzJztcclxuICAgIFNWVFNbJ2JvdW5jZV9idWxsZXQnXSA9ICdGYWxrb25pYW4gUFNJIEN1dHRlciAtIFNob3QgQm91bmNlJztcclxuICAgIFNWVFNbJ2RhcnQ0J10gPSAnTWVkaWMgUGlzdG9sJztcclxuICAgIFNWVFNbJ2V4cF9ldmVudF9zdG9wJ10gPSAnRVhQIC0gU3RvcCc7XHJcbiAgICBTVlRTWydleHBfbGV2ZWwnXSA9ICdFWFAgLSBMZXZlbCBVcCc7XHJcbiAgICBTVlRTWydleHBfdGljayddID0gJ0VYUCAtIEdhaW4nO1xyXG4gICAgU1ZUU1snZ2FtZXBsYXlfc29uZyddID0gJ0thdGhhcnN5cyAtIEVyZ2VzJztcclxuICAgIFNWVFNbJ2dyYXZpdGF0b3IyJ10gPSAnRmxvb3IgZ3Jhdml0YXRvciBub2ljZSc7XHJcbiAgICBTVlRTWydoZWxtX3Byb3h5X2FsZXJ0X292ZXJfaGVyZUInXSA9ICdQcm94eSAtIE92ZXIgaGVyZSEnO1xyXG4gICAgU1ZUU1snaGVsbV9wcm94eV9hbGVydF90YWtlX2NvdmVyQiddID0gJ1Byb3h5IC0gVGFrZSBjb3ZlciEnO1xyXG4gICAgU1ZUU1snaGVsbV9wcm94eV9hbGVydF91cF90aGVyZUEnXSA9ICdQcm94eSAtIFVwIHRoZXJlISc7XHJcbiAgICBTVlRTWydoZWxtX3Byb3h5X2RlYXRoMyddID0gJ1Byb3h5IC0gRGVhdGggMSc7XHJcbiAgICBTVlRTWydoZWxtX3Byb3h5X2RlYXRoNCddID0gJ1Byb3h5IC0gRGVhdGggMic7XHJcbiAgICBTVlRTWydoZWxtX3Byb3h5X2RlYXRoNSddID0gJ1Byb3h5IC0gRGVhdGggMyc7XHJcbiAgICBTVlRTWydoZWxtX3Byb3h5X2RlYXRoNiddID0gJ1Byb3h5IC0gRGVhdGggNCc7XHJcbiAgICBTVlRTWydoZWxtX3Byb3h5X2R5aW5nQyddID0gJ1Byb3h5IC0gSGVscCEgMSc7XHJcbiAgICBTVlRTWydoZWxtX3Byb3h5X2R5aW5nRiddID0gJ1Byb3h5IC0gSGVscCEgMic7XHJcbiAgICBTVlRTWydoZWxtX3Byb3h5X2VuZW15X2Rvd25fZmFudGFzdGljQSddID0gJ1Byb3h5IC0gRmFudGFzdGljLic7XHJcbiAgICBTVlRTWydoZWxtX3Byb3h5X2VuZW15X2Rvd25fZ290X29uZUQnXSA9ICdQcm94eSAtIEdvdCBvbmUuJztcclxuICAgIFNWVFNbJ2hlbG1fcHJveHlfZW5lbXlfZG93bl9uaWNlQSddID0gJ1Byb3h5IC0gTmljZS4gMSc7XHJcbiAgICBTVlRTWydoZWxtX3Byb3h5X2VuZW15X2Rvd25fbmljZUMnXSA9ICdQcm94eSAtIE5pY2UuIDInO1xyXG4gICAgU1ZUU1snaGVsbV9wcm94eV9odXJ0MTEnXSA9ICdQcm94eSAtIEh1cnQgMSc7XHJcbiAgICBTVlRTWydoZWxtX3Byb3h5X2h1cnQxMiddID0gJ1Byb3h5IC0gSHVydCAyJztcclxuICAgIFNWVFNbJ2hlbG1fcHJveHlfaHVydDEzJ10gPSAnUHJveHkgLSBIdXJ0IDMnO1xyXG4gICAgU1ZUU1snaGVsbV9wcm94eV9odXJ0MTQnXSA9ICdQcm94eSAtIEh1cnQgNCc7XHJcbiAgICBTVlRTWydoZWxtX3Byb3h5X2h1cnQxNSddID0gJ1Byb3h5IC0gSHVydCA1JztcclxuICAgIFNWVFNbJ2hlbG1fcHJveHlfaHVydDE3J10gPSAnUHJveHkgLSBIdXJ0IDYnO1xyXG4gICAgU1ZUU1snaGVsbV9wcm94eV9odXJ0NCddID0gJ1Byb3h5IC0gSHVydCA3JztcclxuICAgIFNWVFNbJ2hlbG1fcHJveHlfaHVydDUnXSA9ICdQcm94eSAtIEh1cnQgOCc7XHJcbiAgICBTVlRTWydoZWxtX3Byb3h5X2h1cnQ4J10gPSAnUHJveHkgLSBIdXJ0IDknO1xyXG4gICAgU1ZUU1snaGVsbV9wcm94eV9odXJ0OSddID0gJ1Byb3h5IC0gSHVydCAxMCc7XHJcbiAgICBTVlRTWydoZXhhZ29uX2RlYXRoMSddID0gJ0hleGFnb24gLSBEZWF0aCAxJztcclxuICAgIFNWVFNbJ2hleGFnb25fZGVhdGgyJ10gPSAnSGV4YWdvbiAtIERlYXRoIDInO1xyXG4gICAgU1ZUU1snaGV4YWdvbl9wYWluMSddID0gJ0hleGFnb24gLSBIdXJ0IDEnO1xyXG4gICAgU1ZUU1snaGV4YWdvbl9wYWluMiddID0gJ0hleGFnb24gLSBIdXJ0IDInO1xyXG4gICAgU1ZUU1snaGV4YWdvbl9wYWluMyddID0gJ0hleGFnb24gLSBIdXJ0IDMnO1xyXG4gICAgU1ZUU1snaGV4YWdvbl9wYWluNCddID0gJ0hleGFnb24gLSBIdXJ0IDQnO1xyXG4gICAgU1ZUU1snaGV4YWdvbl93ZWxjb21lMSddID0gJ0hleGFnb24gLSBBbGVydGVkIDEnO1xyXG4gICAgU1ZUU1snaGV4YWdvbl93ZWxjb21lMiddID0gJ0hleGFnb24gLSBBbGVydGVkIDInO1xyXG4gICAgU1ZUU1snaGV4YWdvbl93ZWxjb21lMyddID0gJ0hleGFnb24gLSBBbGVydGVkIDMnO1xyXG4gICAgU1ZUU1snbWFpbl9zb25nJ10gPSAnTlBob25peCAtIEFudGlncmF2aXR5JztcclxuICAgIFNWVFNbJ29yYWtpbl9kZWF0aDEnXSA9ICdPcmFraW4gLSBEZWF0aCAxJztcclxuICAgIFNWVFNbJ29yYWtpbl9kZWF0aDInXSA9ICdPcmFraW4gLSBEZWF0aCAyJztcclxuICAgIFNWVFNbJ29yYWtpbl9odXJ0J10gPSAnT3Jha2luIC0gSHVydCc7XHJcbiAgICBTVlRTWydvcmFraW5fd2VsY29tZSddID0gJ09yYWtpbiAtIEFsZXJ0ZWQnO1xyXG4gICAgU1ZUU1sncHJveHlfYWxlcnRfb3Zlcl9oZXJlQiddID0gJ05vIEhlbG0gUHJveHkgLSBPdmVyIGhlcmUhJztcclxuICAgIFNWVFNbJ3Byb3h5X2FsZXJ0X3Rha2VfY292ZXJCJ10gPSAnTm8gSGVsbSBQcm94eSAtIFRha2UgY292ZXIhJztcclxuICAgIFNWVFNbJ3Byb3h5X2FsZXJ0X3VwX3RoZXJlQSddID0gJ05vIEhlbG0gUHJveHkgLSBVcCB0aGVyZSEnO1xyXG4gICAgU1ZUU1sncHJveHlfZGVhdGgzJ10gPSAnTm8gSGVsbSBQcm94eSAtIERlYXRoIDEnO1xyXG4gICAgU1ZUU1sncHJveHlfZGVhdGg0J10gPSAnTm8gSGVsbSBQcm94eSAtIERlYXRoIDInO1xyXG4gICAgU1ZUU1sncHJveHlfZGVhdGg1J10gPSAnTm8gSGVsbSBQcm94eSAtIERlYXRoIDMnO1xyXG4gICAgU1ZUU1sncHJveHlfZGVhdGg2J10gPSAnTm8gSGVsbSBQcm94eSAtIERlYXRoIDQnO1xyXG4gICAgU1ZUU1sncHJveHlfZHlpbmdDJ10gPSAnTm8gSGVsbSBQcm94eSAtIEhlbHAhIDEnO1xyXG4gICAgU1ZUU1sncHJveHlfZHlpbmdGJ10gPSAnTm8gSGVsbSBQcm94eSAtIEhlbHAhIDIgJztcclxuICAgIFNWVFNbJ3Byb3h5X2VuZW15X2Rvd25fZmFudGFzdGljQSddID0gJ05vIEhlbG0gUHJveHkgLSBGYW50YXN0aWMuJztcclxuICAgIFNWVFNbJ3Byb3h5X2VuZW15X2Rvd25fZ290X29uZUQnXSA9ICdObyBIZWxtIFByb3h5IC0gR290IG9uZS4nO1xyXG4gICAgU1ZUU1sncHJveHlfZW5lbXlfZG93bl9uaWNlQSddID0gJ05vIEhlbG0gUHJveHkgLSBOaWNlLiAxJztcclxuICAgIFNWVFNbJ3Byb3h5X2VuZW15X2Rvd25fbmljZUMnXSA9ICdObyBIZWxtIFByb3h5IC0gTmljZS4gMic7XHJcbiAgICBTVlRTWydwcm94eV9odXJ0MTEnXSA9ICdObyBIZWxtIFByb3h5IC0gSHVydCAxJztcclxuICAgIFNWVFNbJ3Byb3h5X2h1cnQxMiddID0gJ05vIEhlbG0gUHJveHkgLSBIdXJ0IDInO1xyXG4gICAgU1ZUU1sncHJveHlfaHVydDEzJ10gPSAnTm8gSGVsbSBQcm94eSAtIEh1cnQgMyc7XHJcbiAgICBTVlRTWydwcm94eV9odXJ0MTQnXSA9ICdObyBIZWxtIFByb3h5IC0gSHVydCA0JztcclxuICAgIFNWVFNbJ3Byb3h5X2h1cnQxNSddID0gJ05vIEhlbG0gUHJveHkgLSBIdXJ0IDUnO1xyXG4gICAgU1ZUU1sncHJveHlfaHVydDE3J10gPSAnTm8gSGVsbSBQcm94eSAtIEh1cnQgNic7XHJcbiAgICBTVlRTWydwcm94eV9odXJ0NCddID0gJ05vIEhlbG0gUHJveHkgLSBIdXJ0IDcnO1xyXG4gICAgU1ZUU1sncHJveHlfaHVydDUnXSA9ICdObyBIZWxtIFByb3h5IC0gSHVydCA4JztcclxuICAgIFNWVFNbJ3Byb3h5X2h1cnQ4J10gPSAnTm8gSGVsbSBQcm94eSAtIEh1cnQgOSc7XHJcbiAgICBTVlRTWydwcm94eV9odXJ0OSddID0gJ05vIEhlbG0gUHJveHkgLSBIdXJ0IDEwJztcclxuICAgIFNWVFNbJ3NpbGtfYWxlcnRfY29udGFjdEEnXSA9ICdTaWxrIC0gQ29udGFjdCEnO1xyXG4gICAgU1ZUU1snc2lsa19hbGVydF9pX3NlZV9vbmVBJ10gPSAnU2lsayAtIEkgc2VlIG9uZS4nO1xyXG4gICAgU1ZUU1snc2lsa19hbGVydF90aGVyZV9pc19vbmVBJ10gPSAnU2lsayAtIFRoZXJlIGlzIG9uZS4uLiEnO1xyXG4gICAgU1ZUU1snc2lsa19kZWF0aDFCJ10gPSAnU2lsayAtIERlYXRoIDEnO1xyXG4gICAgU1ZUU1snc2lsa19kZWF0aDJCJ10gPSAnU2lsayAtIERlYXRoIDInO1xyXG4gICAgU1ZUU1snc2lsa19keWluZ0InXSA9ICdTaWxrIC0gTm90IGdvb2QuLi4nO1xyXG4gICAgU1ZUU1snc2lsa19lbmVteV9kb3duX2JyaWxsaWFudEMnXSA9ICdTaWxrIC0gQnJpbGxpYW50Lic7XHJcbiAgICBTVlRTWydzaWxrX2VuZW15X2Rvd25fZWxpbWluYXRlZEInXSA9ICdTaWxrIC0gRWxpbWluYXRlZC4nO1xyXG4gICAgU1ZUU1snc2lsa19lbmVteV9kb3duX2hlbGxfeWVhaEInXSA9ICdTaWxrIC0gSGVsbCB5ZWFoISc7XHJcbiAgICBTVlRTWydzaWxrX2VuZW15X2Rvd25faXZlX2dvdF9vbmVCJ10gPSAnU2lsayAtIEkgZ290IG9uZSEnO1xyXG4gICAgU1ZUU1snc2lsa19lbmVteV9kb3duX21pbnVzX29uZUInXSA9ICdTaWxrIC0gLTEuJztcclxuICAgIFNWVFNbJ3NpbGtfZW5lbXlfZG93bl9ub19raWNraW5nX2Zvcl95b3VCJ10gPSAnU2lsayAtIE5vIGtpY2tpbmcgZm9yIHlvdS4nO1xyXG4gICAgU1ZUU1snc2lsa19odXJ0MUInXSA9ICdTaWxrIC0gSHVydCAxJztcclxuICAgIFNWVFNbJ3NpbGtfaHVydDJCJ10gPSAnU2lsayAtIEh1cnQgMic7XHJcbiAgICBTVlRTWydzaWxrX2h1cnQ1J10gPSAnU2lsayAtIEh1cnQgMyc7XHJcbiAgICBTVlRTWydzaWxrX2h1cnQ2J10gPSAnU2lsayAtIEh1cnQgNCc7XHJcbiAgICBTVlRTWydzaWxrX2h1cnQ5QiddID0gJ1NpbGsgLSBIdXJ0IDUnO1xyXG4gICAgU1ZUU1snd2VhX2Nyb3NzZmlyZTInXSA9ICdDcm9zc2ZpcmUgQ1ItMTQ1IFZvcnRleCc7XHJcbiAgICBTVlRTWyd3ZWFfZGl0enlfY3NfaWsnXSA9ICdBc3NhdWx0IFJpZmxlIENTLUlLJztcclxuICAgIFNWVFNbJ3dlYV9nbGhmJ10gPSAnR3JlbmFkZSBMYXVuY2hlciBDUy1HTEhGJztcclxuICAgIFNWVFNbJ3dlYV9pbmNvbXBldGVuY2VfYXJjaGV0eXBlXzI3eHhfZmlyZSddID0gJ0FyY2hldHlwZSAyN1hYJztcclxuICAgIFNWVFNbJ3dlYV9sYXp5cmFpbl9ncmF2eV9ybCddID0gJ0ZhbGtvbmlhbiBBbnRpLUdyYXYgUm9ja2V0IExhdW5jaGVyJztcclxuICAgIFNWVFNbJ3dlYV9tMjAyJ10gPSAnUm9ja2V0IExhdW5jaGVyIENTLUJhcnJhZ2UnO1xyXG4gICAgU1ZUU1snd2VhX21vb25oYXdrX3JhaWxndW4nXSA9ICdDcm9zc2ZpcmUgQ1ItMzQgTWFyYXVkZXInO1xyXG4gICAgU1ZUU1snd2VhX3BoMDEnXSA9ICdDcm9zc2ZpcmUgQ1ItNTQgVmlwZXInO1xyXG4gICAgU1ZUU1snd2VhX3BsYXNtYV9zaG90Z3VuJ10gPSAnUGxhc21hIFNob3RndW4nO1xyXG4gICAgU1ZUU1snd2VhX3JhaWxfYWx0MiddID0gJ0ZhbGtvbmlhbiBQU0kgQ3V0dGVyJztcclxuICAgIFNWVFNbJ3dlYV90aGV0b3BwZXN0a2VrX3Nob3RndW5fbnhzMjUnXSA9ICdTaG90Z3VuIE5YUy0yNSc7XHJcbiAgICBTVlRTWyd4aW5fY2VsZWJyYXRlJ10gPSAnWGluIC0gQ2VsZWJyYXRpbmcnO1xyXG4gICAgU1ZUU1sneGluX2RlYXRoJ10gPSAnWGluIC0gRGVhdGgnO1xyXG4gICAgU1ZUU1sneGluX2VuZW15X3Nwb3R0ZWQnXSA9ICdYaW4gLSBBbGVydGVkJztcclxuICAgIFNWVFNbJ3hpbl9oaXQnXSA9ICdYaW4gLSBIdXJ0JztcclxuICAgIGxldCB2b2ljZXMgPSB7XHJcbiAgICAgICAgR3Jvc2s6IFtcclxuICAgICAgICAgICAgXCJHcm9za1wiLFxyXG4gICAgICAgICAgICBbXCJkZWF0aFwiLCBcIkRlYXRoXCIsIDJdLFxyXG4gICAgICAgICAgICBbXCJkeWluZ1wiLCBcIkR5aW5nXCIsIDJdLFxyXG4gICAgICAgICAgICBbXCJlZG93blwiLCBcIkNlbGVicmF0aW5nXCIsIDNdLFxyXG4gICAgICAgICAgICBbXCJ3ZWxjb21lXCIsIFwiQWxlcnRlZFwiLCA1XSxcclxuICAgICAgICAgICAgW1wiaHVydFwiLCBcIkh1cnRcIiwgM11cclxuICAgICAgICBdLFxyXG4gICAgICAgIGRyb2huZW50cm9vcDogW1xyXG4gICAgICAgICAgICBcIkRyb2huZW4gVHJvb3BlclwiLFxyXG4gICAgICAgICAgICBbXCJ3ZWxjb21lXCIsIFwiQWxlcnRlZFwiLCAzXSxcclxuICAgICAgICAgICAgW1wiaHVydFwiLCBcIkh1cnRcIiwgM10sXHJcbiAgICAgICAgICAgIFtcImVkb3duXCIsIFwiQ2VsZWJyYXRpbmdcIiwgM10sXHJcbiAgICAgICAgICAgIFtcImR5aW5nXCIsIFwiRHlpbmdcIiwgMV0sXHJcbiAgICAgICAgICAgIFtcImRlYXRoXCIsIFwiRGVhdGhcIiwgM11cclxuICAgICAgICBdLFxyXG4gICAgICAgIGRyb2huZW5mZW06IFtcclxuICAgICAgICAgICAgXCJEcm9obmVuIEZlbWFsZVwiLFxyXG4gICAgICAgICAgICBbXCJ3ZWxjb21lXCIsIFwiQWxlcnRlZFwiLCAzXSxcclxuICAgICAgICAgICAgW1wiaHVydFwiLCBcIkh1cnRcIiwgM10sXHJcbiAgICAgICAgICAgIFtcImVkb3duXCIsIFwiQ2VsZWJyYXRpbmdcIiwgM10sXHJcbiAgICAgICAgICAgIFtcImR5aW5nXCIsIFwiRHlpbmdcIiwgMV0sXHJcbiAgICAgICAgICAgIFtcImRlYXRoXCIsIFwiRGVhdGhcIiwgM11cclxuICAgICAgICBdLFxyXG4gICAgICAgIGVsdXJyYTogW1xyXG4gICAgICAgICAgICBcIkVsdXJyYVwiLFxyXG4gICAgICAgICAgICBbXCJ3ZWxjb21lXCIsIFwiQWxlcnRlZFwiLCAzXSxcclxuICAgICAgICAgICAgW1wiaHVydFwiLCBcIkh1cnRcIiwgMl0sXHJcbiAgICAgICAgICAgIFtcImVkb3duXCIsIFwiQ2VsZWJyYXRpbmdcIiwgMl0sXHJcbiAgICAgICAgICAgIFtcImR5aW5nXCIsIFwiRHlpbmdcIiwgMV0sXHJcbiAgICAgICAgICAgIFtcImRlYXRoXCIsIFwiRGVhdGhcIiwgMV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGZlcnJvOiBbXHJcbiAgICAgICAgICAgIFwiTHQuIEZlcnJvXCIsXHJcbiAgICAgICAgICAgIFtcIndlbGNvbWVcIiwgXCJBbGVydGVkXCIsIDNdLFxyXG4gICAgICAgICAgICBbXCJodXJ0XCIsIFwiSHVydFwiLCAyXSxcclxuICAgICAgICAgICAgW1wiZWRvd25cIiwgXCJDZWxlYnJhdGluZ1wiLCAzXSxcclxuICAgICAgICAgICAgW1wiZGVhdGhcIiwgXCJEZWF0aFwiLCAyXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc2Vya292YTogW1xyXG4gICAgICAgICAgICBcIlNlcmtvdmFcIixcclxuICAgICAgICAgICAgW1wid2VsY29tZVwiLCBcIkFsZXJ0ZWRcIiwgM10sXHJcbiAgICAgICAgICAgIFtcImh1cnRcIiwgXCJIdXJ0XCIsIDFdLFxyXG4gICAgICAgICAgICBbXCJlZG93blwiLCBcIkNlbGVicmF0aW5nXCIsIDJdLFxyXG4gICAgICAgICAgICBbXCJkZWF0aFwiLCBcIkRlYXRoXCIsIDFdXHJcbiAgICAgICAgXSxcclxuICAgICAgICBwaGFudG9tOiBbXHJcbiAgICAgICAgICAgIFwiUGhhbnRvbVwiLFxyXG4gICAgICAgICAgICBbXCJlZG93blwiLCBcIkNlbGVicmF0aW5nXCIsIDFdLFxyXG4gICAgICAgICAgICBbXCJ3ZWxjb21lXCIsIFwiQWxlcnRlZFwiLCAyXSxcclxuICAgICAgICAgICAgW1wiZGVhdGhcIiwgXCJEZWF0aFwiLCAxXVxyXG4gICAgICAgIF1cclxuICAgIH07XHJcbiAgICBmb3IgKGxldCBlbnRyeSBvZiBPYmplY3QuZW50cmllcyh2b2ljZXMpKSB7XHJcbiAgICAgICAgbGV0IGNoYXJhY3RlciA9IGVudHJ5WzBdO1xyXG4gICAgICAgIGxldCBjaGFyVm9pY2VzID0gZW50cnlbMV07XHJcbiAgICAgICAgbGV0IGNoYXJOYW1lID0gY2hhclZvaWNlc1swXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBjaGFyVm9pY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB2b2ljZSA9IGNoYXJWb2ljZXNbaV07XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAxOyBqIDw9IHZvaWNlWzJdOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIFNWVFNbYCR7Y2hhcmFjdGVyfV8ke3ZvaWNlWzBdfSR7an1gXSA9IGAke2NoYXJOYW1lfSAtICR7dm9pY2VbMV19ICR7an1gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVZvaWNlUHJlc2V0cygpIHtcclxuICAgIC8vIEFkZHMgdm9pY2UgcHJlc2V0cyB0aGF0IGV4aXN0IGluIGdhbWUgYnV0IG5vdCBpbiBBTEVcclxuICAgIGxldCBWUCA9IFZBTF9UQUJMRVsndm9pY2VfcHJlc2V0J107XHJcbiAgICBWUFsncHJveHlfaGVsbWV0bGVzcyddID0gJ1Byb3h5IChoZWxtZXRsZXNzKSc7XHJcbiAgICBWUFsnc2lsayddID0gJ1NpbGsnO1xyXG4gICAgVlBbJ29yYWtpbiddID0gJ09yYWtpbic7XHJcbiAgICBWUFsnYXJyaW4nXSA9ICdBcnJpbic7XHJcbiAgICBWUFsnY2l2aWxpYW5fbWFsZSddID0gJ0NpdmlsaWFuIE1hbGUnO1xyXG4gICAgVlBbJ3Z1bHR1cmUnXSA9ICdWdWx0dXJlJztcclxuICAgIFZQWydjcm9zc2ZpcmVfc2VudGluZWwnXSA9ICdDcm9zc2ZpcmUgU2VudGluZWwnO1xyXG4gICAgVlBbJ3hpbiddID0gJ1hpbic7XHJcbiAgICBWUFtcImdyb3NrXCJdID0gXCJHcm9za1wiO1xyXG5cclxuICAgIFZQW1wiZWx1cnJhXCJdID0gXCJFbHVycmFcIjtcclxuICAgIFZQW1wiZHJvaG5lbmZlbVwiXSA9IFwiRHJvaG5lbiBGZW1hbGVcIjtcclxuICAgIFZQW1wic2Vya292YVwiXSA9IFwiU2Vya292YVwiO1xyXG4gICAgVlBbXCJmZXJyb1wiXSA9IFwiTHQuIEZlcnJvXCI7XHJcbiAgICBWUFtcImRyb2huZW50cm9vcFwiXSA9IFwiRHJvaG5lbiBUcm9vcGVyXCI7XHJcbiAgICBWUFtcInBoYW50b21cIl0gPSBcIlBoYW50b21cIjtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlU3R5bGVzKCkge1xyXG4gICAgLy8gQ2hhbmdlcyBzb21lIHN0eWxlc2hlZXRzIHRvIG9wZW4gdXAgdG8gdGhpbmdzIGxpa2UgcmVzaXphYmxlIHJpZ2h0IHBhbmVsLlxyXG4gICAgZm9yKGxldCBpMSA9IDA7IGkxIDwgc3R5bGVzaGVldHMubGVuZ3RoOyBpMSsrKSB7XHJcbiAgICAgICAgbGV0IHN0eWxlU2hlZXQgPSBzdHlsZXNoZWV0c1tpMV07XHJcbiAgICAgICAgZm9yIChsZXQgaTIgPSAwOyBpMiA8IHN0eWxlU2hlZXQucnVsZXMubGVuZ3RoOyBpMisrKSB7XHJcbiAgICAgICAgICAgIGxldCBydWxlID0gc3R5bGVTaGVldC5ydWxlc1tpMl07XHJcbiAgICAgICAgICAgIHN3aXRjaChydWxlLnNlbGVjdG9yVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIi5wX2lcIjpcclxuICAgICAgICAgICAgICAgICAgICBydWxlLnN0eWxlLnNldFByb3BlcnR5KFwiZGlzcGxheVwiLCBcImZsZXhcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiLnJpZ2h0dWlcIjpcclxuICAgICAgICAgICAgICAgICAgICBydWxlLnN0eWxlLnNldFByb3BlcnR5KFwid2lkdGhcIiwgYWxlaVNldHRpbmdzLnJpZ2h0UGFuZWxTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIucGExXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZS5zdHlsZS5zZXRQcm9wZXJ0eShcImZsZXgtZ3Jvd1wiLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICBydWxlLnN0eWxlLnNldFByb3BlcnR5KFwiZmxleC1zaHJpbmtcIiwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiLnBhMlwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGUuc3R5bGUuc2V0UHJvcGVydHkoXCJ3aWR0aFwiLCBcIjEwMCVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiLm9wY29kZV9maWVsZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGUuc3R5bGUuc2V0UHJvcGVydHkoXCJmb250LXNpemVcIiwgYWxlaVNldHRpbmdzLnRyaWdnZXJFZGl0VGV4dFNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIiNycGFyYW1zXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZS5zdHlsZS5zZXRQcm9wZXJ0eShcImhlaWdodFwiLCBcInZhcigtLUFMRUlfUlBBUkFNU19IRUlHSFQpXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICRpZChcInN0YXJzXCIpLnN0eWxlLnNldFByb3BlcnR5KFwiYmFja2dyb3VuZC1pbWFnZVwiLCBgdXJsKCR7YWxlaVNldHRpbmdzLnN0YXJzSW1hZ2V9KWApXHJcbiAgICBsZXQgX3RoID0gVEhFTUU7XHJcbiAgICBUaGVtZVNldChUSEVNRV9CTFVFKTtcclxuICAgIFRoZW1lU2V0KF90aCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVNraW5zKCkge1xyXG4gICAgLy8gQWRkcyBza2lucyB0aGF0IGV4aXN0IGluIGdhbWUgYnV0IG5vdCBpbiBBTEUuXHJcbiAgICBsZXQgY2hhcmxpc3RzID0gW1xyXG4gICAgICAgIFsxMCwgXCJIZWFkIEdpYlwiXSxcclxuICAgICAgICBbMTgsIFwiU3RhciBEZWZlbmRlciAocGxheSBtYXAgSUQgJ2VyaWMgZ3VydC1zdGFyX2RlZmVuZGVycycgdG8gdW5sb2NrIGl0KVwiXSxcclxuICAgICAgICBbMjAsIFwiQXJtIEdpYlwiXSxcclxuICAgICAgICBbMzAsIFwiTGVnIEdpYlwiXSxcclxuICAgICAgICBbNTAsIFwiSGVhdnkgSGVybyAoT25seSBIZWFkIGFuZCBBcm1zKVwiXSxcclxuICAgICAgICBbNjAsIFwiUHJveHkgKE9ubHkgSGVhZCBhbmQgQXJtcylcIl0sXHJcbiAgICAgICAgWzYyLCBcIlByb3h5IChObyBMaW1icylcIl0sXHJcblxyXG4gICAgICAgIFszOCwgXCJHb2xkZW5LbmlmZSBOb2lyIExpbWVcIl0sXHJcbiAgICAgICAgWzM5LCBcIlJvb3RaIE5vaXIgTGltZVwiXSxcclxuXHJcbiAgICAgICAgWzE1MSwgXCJQdXJwbGUgWGluXCJdLFxyXG4gICAgICAgIFsxNTIsIFwiR29sZGVuIFhpblwiXSxcclxuICAgICAgICBbMTUzLCBcIkJsdWUgWGluXCJdLFxyXG4gICAgICAgIFsxNTQsIFwiUmVkIFhpblwiXSxcclxuICAgICAgICBbMTU1LCBcIkFtYmVyIFhpblwiXSxcclxuXHJcbiAgICAgICAgWzE1NiwgXCJOaXJ2YW5hIE5vaXIgTGltZVwiXSxcclxuXHJcbiAgICAgICAgWzE1NywgXCJQdXJwbGUgR2FsbHluZXdcIl0sXHJcbiAgICAgICAgWzE1OCwgXCJHb2xkZW4gR2FsbHluZXdcIl0sXHJcbiAgICAgICAgWzE1OSwgXCJCbHVlIEdhbGx5bmV3XCJdLFxyXG4gICAgICAgIFsxNjAsIFwiUmVkIEdhbGx5bmV3XCJdLFxyXG4gICAgICAgIFsxNjEsIFwiQW1iZXIgR2FsbHluZXdcIl0sXHJcblxyXG4gICAgICAgIFsxNjIsIFwiUGlua2luZVwiXSxcclxuICAgICAgICBbMTYzLCBcIlJhaWRlciAoYnkgU2VycGVudClcIl0sXHJcbiAgICAgICAgWzE2NCwgXCJCbHVlIEhlYXZ5IEhlcm9cIl0sXHJcbiAgICAgICAgWzE2NSwgXCJSZWQgSGVhdnkgSGVyb1wiXSxcclxuICAgICAgICBbMTY2LCBcIk9yYWtpblwiXSxcclxuICAgICAgICBbMTY3LCBcIkh1c2tcIl0sXHJcbiAgICAgICAgWzE2OCwgXCJIZXhcIl0sXHJcbiAgICAgICAgWzE2OSwgXCJBcnJpblwiXSxcclxuICAgICAgICBbMTcwLCBcIkhlYXZ5IFVzdXJwYXRpb24gU29sZGllclwiXSxcclxuXHJcbiAgICAgICAgWzE3MSwgXCJDeWJlciBHcnViIGJ5IFMxbGtcIl0sXHJcbiAgICAgICAgWzE3MiwgXCJHcm9za1wiXSxcclxuICAgICAgICBbMTczLCBcIkZ1dHVyaXN0aWMgS25pZ2h0XCJdLFxyXG4gICAgICAgIFsxNzQsIFwiVW5jaXZpbCBQcm94eVwiXSxcclxuXHJcbiAgICAgICAgWzE3NSwgXCJTZXJrb3ZhIEluc2VydGlvbiBVbml0XCJdLFxyXG4gICAgICAgIFsxNzYsIFwiWGVub3MgU2NvdXRcIl0sXHJcblxyXG4gICAgICAgIFsxNzcsIFwiQXJtb3JlZCBUcm9vcGVyXCJdLFxyXG5cclxuICAgICAgICBbMTc4LCBcIk5ldyBHZW5lcmF0aW9uIE1hcmluZVwiXSxcclxuICAgICAgICBbMTc5LCBcIkVsdXJyYSAoYnkgTGluKVwiXSxcclxuICAgICAgICBbMTgwLCBcIkRhcmsgUHJveHkgKGJ5IGxpdHRsZWtrKVwiXSxcclxuICAgICAgICBbMTgxLCBcIkh1bnRzbWFuIChOaWdodClcIl0sXHJcbiAgICAgICAgWzE4MiwgXCJIdW50c21hbiAoU3dhbXApXCJdLFxyXG4gICAgICAgIFsxODMsIFwiTHQuIEZlcnJvIChieSBTZXJwZW50KVwiXSxcclxuICAgICAgICBbMTg0LCBcIlhlbm9zIFRpdGFuXCJdLFxyXG4gICAgICAgIFsxODUsIFwiRWx1cnJhIChNYXNrZWQpIChieSBMaW4pXCJdLFxyXG4gICAgICAgIFsxODYsIFwiRHJvaG5lbiBIZWF2eSAoYnkgQXJrNjMzKVwiXSxcclxuICAgICAgICBbMTg3LCBcIkNyb21hc3Rha2FuXCJdLFxyXG4gICAgICAgIFsxODgsIFwiU2d0LiBEYXZhaXNcIl0sXHJcbiAgICAgICAgWzE4OSwgXCJNYXJvb24gKGJ5IEZyYW5jaXMgbG9jYWxob3N0KVwiXSxcclxuICAgICAgICBbMTkwLCBcIkRyb2huZW4gU2tpcm1pc2hlciAoYnkgQXJrNjMzKVwiXSxcclxuICAgICAgICBbMTkxLCBcIlNlcmtvdmEgUmVjb24gVW5pdFwiXSxcclxuICAgICAgICBbMTkyLCBcIkRyb2huZW4gRHJpZnRlciAoYnkgQXJrNjMzKVwiXSxcclxuICAgICAgICBbMTkzLCBcIlhlbm9zIE1hcmluZVwiXSxcclxuICAgICAgICBbMTk0LCBcIkRhcmsgQW5kcm9pZCBTTEMtNTYgKGJ5IGxpdHRsZWtrKVwiXSxcclxuICAgICAgICBbMTk1LCBcIldyYWl0aCAoYnkgQXJrNjMzKVwiXSxcclxuICAgICAgICBbMTk2LCBcIlNlcmtvdmEgQXJtb3JlZCBVbml0XCJdLFxyXG4gICAgICAgIFsxOTcsIFwiUGhhbnRvbSAocGxheSBtYXAgSUQgJ3RoZXJlYWxvbjMtcGhhbnRvbScgdG8gdW5sb2NrIGl0KVwiXSxcclxuICAgICAgICBbMTk4LCBcIkJsdWUgQ2l2aWwgU2VjdXJpdHkgSGVhdnlcIl0sXHJcbiAgICAgICAgWzE5OSwgXCJSZWQgQ2l2aWwgU2VjdXJpdHkgSGVhdnlcIl0sXHJcbiAgICAgICAgWzIwMCwgXCJYZW5vcyBXZWxkZXJcIl0sXHJcbiAgICAgICAgWzIwMSwgXCJYZW5vcyBTcGVjaWFsIFVuaXRcIl0sXHJcbiAgICAgICAgWzIwMiwgXCJTZXJrb3ZhIEFzc2F1bHQgVW5pdFwiXSxcclxuICAgICAgICBbMjAzLCBcIlNlcmtvdmEgR3VubmVyIFVuaXRcIl0sXHJcbiAgICAgICAgWzIwNCwgXCJTZXJrb3ZhIEdyZW5hZGVyIFVuaXRcIl0sXHJcbiAgICAgICAgWzIwNSwgXCJTZXJrb3ZhIFRlYW0gTGVhZGVyXCJdLFxyXG4gICAgICAgIFsyMDYsIFwiU2Vya292YSBSZXNvdXJjZSBVbml0XCJdLFxyXG4gICAgICAgIFsyMDcsIFwiU2Vya292YSBUZWNobmljaWFuIFVuaXRcIl0sXHJcbiAgICAgICAgWzIwOCwgXCJTZXJrb3ZhIEdydWJcIl0sXHJcbiAgICAgICAgWzIwOSwgXCJTZXJrb3ZhIFJlaW5mb3JjZWQgR3J1YlwiXSxcclxuICAgICAgICBbMjEwLCBcIlNlcmtvdmEgRGV2YXN0YXRvciBHcnViXCJdLFxyXG4gICAgICAgIFsyMTEsIFwiWEJULTExNyBBbmRyb2lkXCJdLFxyXG4gICAgICAgIFsyMTIsIFwiVGVuZWd1aWxhZVwiXSxcclxuICAgICAgICBbMjEzLCBcIldhbGtlciAoYnkgU2VycGVudClcIl0sXHJcbiAgICAgICAgWzIxNCwgXCJTcGFjZSBHcnViIChieSBCcm9mb3JjZTEpXCJdLFxyXG4gICAgICAgIFsyMTUsIFwiQmx1ZSBQaGFudG9tIChwbGF5IG1hcCBJRCAndGhlcmVhbG9uMy1waGFudG9tJyB0byB1bmxvY2sgaXQpXCJdLFxyXG4gICAgICAgIFsyMTYsIFwiUmVkIFBoYW50b20gKHBsYXkgbWFwIElEICd0aGVyZWFsb24zLXBoYW50b20nIHRvIHVubG9jayBpdClcIl1cclxuICAgIF1cclxuICAgIGZvcihsZXQgbGkgPSAwOyBsaSA8IGNoYXJsaXN0cy5sZW5ndGg7IGxpKyspIHtcclxuICAgICAgICBsZXQgY2hhcklEID0gY2hhcmxpc3RzW2xpXVswXTtcclxuICAgICAgICBsZXQgcGFkZGVkQ2hhcklEID0gY2hhcklELnRvU3RyaW5nKCkucGFkU3RhcnQoNCwgXCIwXCIpXHJcbiAgICAgICAgbGV0IGNoYXJOYW1lID0gY2hhcmxpc3RzW2xpXVsxXTtcclxuICAgICAgICBsZXQgc3JjID0gXCJodHRwczovL3d3dy5wbGF6bWFidXJzdDIuY29tL2xldmVsX2VkaXRvci9jaGFyc19mdWxsL2NoYXJcIiArIHBhZGRlZENoYXJJRCArIFwiLnBuZ1wiXHJcbiAgICAgICAgVkFMX1RBQkxFWydjaGFyJ11bY2hhcklEXSA9IF90dXJuTGlua0ludG9Ta2luU3BhbihzcmMsIGNoYXJOYW1lKTtcclxuICAgICAgICBpbWdfY2hhcnNfZnVsbFtjaGFySURdID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgaW1nX2NoYXJzX2Z1bGxbY2hhcklEXS5zcmMgPSAnY2hhcnNfZnVsbC9jaGFyJyArIHBhZGRlZENoYXJJRCArICcucG5nJztcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaWRzID0gT2JqZWN0LmtleXMoVkFMX1RBQkxFW1wiY2hhclwiXSk7XHJcbiAgICBpZHMgPSBpZHMubWFwKHN0ciA9PiBwYXJzZUludChzdHIpKTtcclxuICAgIGxldCBmcm9tSUQgPSBNYXRoLm1heCguLi5pZHMpICsgMTtcclxuICAgIGZldGNoU2tpbnNGcm9tKGZyb21JRCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF90dXJuTGlua0ludG9Ta2luU3BhbihzcmMsIGNoYXJOYW1lKSB7XHJcbiAgICByZXR1cm4gJzxzcGFuIHN0eWxlPVxcJ2JhY2tncm91bmQ6dXJsKCcgKyBzcmMgKyAnKTsgd2lkdGg6IDE2cHg7IGhlaWdodDogMTZweDsgZGlzcGxheTogaW5saW5lLWJsb2NrOyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IGJhY2tncm91bmQtcG9zaXRpb24teDogMzAlOyBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDI2JTsgYmFja2dyb3VuZC1zaXplOiA2N3B4O3ZlcnRpY2FsLWFsaWduOiAtNHB4O1xcJz48L3NwYW4+ICcgKyBjaGFyTmFtZTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hTa2luc0Zyb20oc3RhcnRpbmdJRCkge1xyXG4gICAgaWYoIWlzTmF0aXZlKSByZXR1cm47XHJcbiAgICBjb25zdCByZXF1ZXN0c0F0T25jZSA9IDU7XHJcbiAgICBsZXQgcmVxdWVzdHNSdW5uaW5nID0gdHJ1ZTtcclxuICAgIGxldCBza2luc0FkZGVkID0gW107XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gcmVxdWVzdFNraW4oaWQpIHtcclxuICAgICAgICBsZXQgcGFkZGVkQ2hhcklEID0gaWQudG9TdHJpbmcoKS5wYWRTdGFydCg0LCBcIjBcIik7XHJcbiAgICAgICAgbGV0IHNyYyA9IFwiaHR0cHM6Ly93d3cucGxhem1hYnVyc3QyLmNvbS9sZXZlbF9lZGl0b3IvY2hhcnNfZnVsbC9jaGFyXCIgKyBwYWRkZWRDaGFySUQgKyBcIi5wbmdcIlxyXG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IEdNLnhtbEh0dHBSZXF1ZXN0KHsgdXJsOiBzcmMgfSkuY2F0Y2goZSA9PiBjb25zb2xlLmVycm9yKGUpKTtcclxuICAgICAgICBpZihyZXNwb25zZS5zdGF0dXMgPT0gNDA0KSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RzUnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFZBTF9UQUJMRVtcImNoYXJcIl1baWRdID0gX3R1cm5MaW5rSW50b1NraW5TcGFuKHNyYywgYFVua25vd24gU2tpbiAjJHtpZH1gKTtcclxuICAgICAgICBza2luc0FkZGVkLnB1c2goaWQpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gcmVxdWVzdEJhdGNoKGlkKSB7XHJcbiAgICAgICAgbGV0IHByb21pc2VzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXF1ZXN0c0F0T25jZTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2gocmVxdWVzdFNraW4oaWQgKyBpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICAgIH1cclxuICAgIGxldCBmcm9tSUQgPSBzdGFydGluZ0lEO1xyXG4gICAgd2hpbGUocmVxdWVzdHNSdW5uaW5nKSB7XHJcbiAgICAgICAgYXdhaXQgcmVxdWVzdEJhdGNoKGZyb21JRCk7XHJcbiAgICAgICAgZnJvbUlEICs9IHJlcXVlc3RzQXRPbmNlO1xyXG4gICAgfVxyXG4gICAgaWYoc2tpbnNBZGRlZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgTmV3Tm90ZShgQUxFSTogVGhlcmUgYXJlICR7c2tpbnNBZGRlZC5sZW5ndGh9IHVucmVnaXN0ZXJlZCBza2lucywgcGxlYXNlIGluZm9ybSBBTEVJIGRldmVsb3BlcihzKSBhYm91dCB0aGlzLiBDaGVjayBsb2dzIGZvciBtb3JlIGluZm9ybWF0aW9uYCwgYCMwMEZGRkZgKTtcclxuICAgICAgICBhbGVpTG9nKElORk8sIGBVbnJlZ2lzdGVyZWQgc2tpbnM6ICR7c2tpbnNBZGRlZH1gKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gb3B0aW1pemUoKSB7XHJcbiAgICAvLyBWU3luYy5cclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0ID0gKGYsIG1zKSA9PiB7XHJcbiAgICAgICAgaWYgKGYgPT0gYW5pKSB7d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmkpfVxyXG4gICAgICAgIGVsc2UgcmV0dXJuIEpTX3NldFRpbWVvdXQoZiwgbXMpO1xyXG4gICAgfVxyXG4gICAgbGV0IF9icm93c2VJbWFnZXMgPSB3aW5kb3cuQnJvd3NlSW1hZ2VzO1xyXG4gICAgbGV0IG9nSW1hZ2VMaXN0cyA9IHt9O1xyXG4gICAgLy8gSW1hZ2UgY2FjaGluZy5cclxuICAgIHdpbmRvdy5Ccm93c2VJbWFnZXMgPSBmdW5jdGlvbihmb3JfY2xhc3MgPSAnYmdfbW9kZWwnLCBjdXJyZW50X3ZhbHVlID0gJycsIGNhbGxiYWNrID0gbnVsbCkge1xyXG4gICAgICAgIC8vIElmIGNhY2hlIGRvZXNuJ3QgaGF2ZSB0aGUgY2xhc3Mgd2UgYXJlIGxvb2tpbmcgZm9yLCB3ZSB3aWxsIGp1c3Qgc2V0IGRlZmF1bHQgdmFsdWUuXHJcbiAgICAgICAgaWYgKG9nSW1hZ2VMaXN0c1tmb3JfY2xhc3NdID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBvZ0ltYWdlTGlzdHNbZm9yX2NsYXNzXSA9IFwiW0FMRUldIExvYWRpbmcuLi5cIjtcclxuICAgICAgICAgICAgYWxlaUxvZyhJTkZPLCBgV2lsbCBjYWNoZSByZXNwb25zZSBvZiAke2Zvcl9jbGFzc31gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gT3ZlcndyaXRlIHNldFRpbWVvdXQgdGVtcG9yYXJpbHksIGFzIEJyb3dzZUltYWdlcyBjYWxscyBzZXRUaW1lb3V0IGZvciBTZXJ2ZXJSZXF1ZXN0IHdoaWNoIHNldHMgdGhlIGlubmVySFRNTCBvZiBpbWFnZV9saXN0XHJcbiAgICAgICAgbGV0IG9zdCA9IHdpbmRvdy5zZXRUaW1lb3V0O1xyXG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0ID0gKGYsIG1zKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0ID0gb3N0OyAvLyBBc3NpZ24gb3JpZ2luYWwgc2V0VGltZW91dFxyXG4gICAgICAgICAgICB3aW5kb3cuU2VydmVyUmVxdWVzdCA9IChyZXEsIG9wLCBjYWxsYmFjayA9IG51bGwpID0+IHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5TZXJ2ZXJSZXF1ZXN0ID0gQUxFSV9TZXJ2ZXJSZXF1ZXN0OyAvLyBBc3NpZ24gb3JpZ2luYWwgU2VydmVyUmVxdWVzdFxyXG4gICAgICAgICAgICAgICAgLy8gV2UgbWFkZSBTZXJ2ZXJSZXF1ZXN0IGFuIGFzeW5jIGZ1bmN0aW9uLCBzbyB3ZSBjYW4ganVzdCByZWdpc3RlciBvbiBpdFxyXG4gICAgICAgICAgICAgICAgU2VydmVyUmVxdWVzdChyZXEsIG9wLCBjYWxsYmFjaykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2dJbWFnZUxpc3RzW2Zvcl9jbGFzc10gPSBpbWFnZV9saXN0LmlubmVySFRNTDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBmKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF9icm93c2VJbWFnZXMoZm9yX2NsYXNzLCBjdXJyZW50X3ZhbHVlLCBjYWxsYmFjayk7XHJcbiAgICAgICAgaW1hZ2VfbGlzdC5pbm5lckhUTUwgPSBvZ0ltYWdlTGlzdHNbZm9yX2NsYXNzXTsgLy8gU2hvdyB3aGF0IGlzIGluIGNhY2hlLiAoSWYgY2FjaGUgZGlkbid0IGhhdmUgdGhlIGNsYXNzLCBpdCB3aWxsIGp1c3Qgc2hvdyB0aGUgcHJldmlvdXNseSBzZXQgZGVmYXVsdCB2YWx1ZSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlVmVoaWNsZXMoKSB7XHJcbiAgICAvLyBBZGRpbmcgdmVoaWNsZXMgdGhhdCBleGlzdCBpbiBnYW1lIGJ1dCBub3QgaW4gQUxFLiBDdXJyZW50bHkgb25seSB2ZWhfaGgsIHdoaWNoIGlzIGdyYWJiYWJsZSBsZWRnZS5cclxuICAgIGxldCBfU1ZUViA9IFZBTF9UQUJMRVtcInZlaGljbGVfbW9kZWxcIl07XHJcbiAgICBsZXQgdmVoaWNsZXMgPSBbXHJcbiAgICAgICAgW1widmVoX2hoXCIsIFwiR3JhYmJhYmxlIExlZGdlXCIsIFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCNEFBQUFlQ0FZQUFBQTdNSzZpQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBQUpjRWhaY3dBQURzTUFBQTdEQWNkdnFHUUFBQUNMU1VSQlZFaExZeGh4Z0JGRTJNMy9yL3Z2SDBNUVdJU0dnSW1KWWQyaFJNYkxJRGJZWXB1NS8rdC9NekVFZjJkaXVBTGkwd0p3L21QUVlmM0hzUFpJTW1NamlBKzMrQk1MZy9vbElZYmxJRDR0Z040N2hraStQd3czWVJZemdVVUhBSXhhVERjd2FqSGR3S2pGZEFPakZ0TU5qRnBNTnpCcU1kM0FxTVYwQXdQYnJoNkluc1FBQVFZR0FBOENMREtBQWNwT0FBQUFBRWxGVGtTdVFtQ0NcIl1cclxuICAgIF1cclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB2ZWhpY2xlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCB2ZWhpY2xlID0gdmVoaWNsZXNbaV07XHJcbiAgICAgICAgbGV0IG1vZGVsID0gdmVoaWNsZVswXTtcclxuICAgICAgICBsZXQgbmFtZSA9IHZlaGljbGVbMV07XHJcbiAgICAgICAgbGV0IGltYWdlID0gdmVoaWNsZVsyXTtcclxuICAgICAgICBfU1ZUVlttb2RlbF0gPSBgPGltZyBzcmM9JyR7aW1hZ2V9JyBib3JkZXI9MCBoZWlnaHQ9MTIgc3R5bGU9dmVydGljYWwtYWxpZ246bWlkZGxlIHRpdGxlPScke25hbWV9JyA+ICR7bmFtZX1gXHJcbiAgICAgICAgaW1nX3ZlaGljbGVzW21vZGVsXSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIGltZ192ZWhpY2xlc1ttb2RlbF0uc3JjID0gaW1hZ2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUd1bnMoKSB7XHJcbiAgICAvLyBBZGRzIGd1bnMgdGhhdCBleGlzdCBpbiBnYW1lIGJ1dCBub3QgaW4gQUxFLiBDdXJyZW50bHkgb25seSBvbmUgaXNuJ3QgdmlzaWJsZSBpbiBBTEUsIGFuZCB0aGF0IGlzIGpva2Ugd2VhcG9uOiBOQVJMXHJcbiAgICBsZXQgZ3VucyA9IFtcclxuICAgICAgICBbXCJndW5fcmwwXCIsIFwiQkVUQSBSb2NrZXQgTGF1bmNoZXJcIiwgXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUZBQUFBQVVDQVlBQUFBYTJMclhBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFBSmNFaFpjd0FBRHNNQUFBN0RBY2R2cUdRQUFBZmVTVVJCVkZoSDNWaFphSlZIRkQ1MysrK1N4Q1JtTTRuQm1MaFVUWXRDYkNKYVNwRjBzUlRxVm1uN1VBcHRzZFF1SUtYWVFxbFEyb2Y2MElkYWkrQlRvVlFOY1FOQnFDWlFpcFFFRXFOUnE4RTFNWWxaelhLVDNOeWwzM2U4YzN1OUdwdXRDeDQ5bVpuenp6OXo1cHZ2bkpuLzJtUUtzbkhqeHR4UUtHU1BOc1hoY0VTY1RtZkgvdjM3UTFIVGxHWDkrdlhPL3Y3KzBNbVRKeU5SMC85YUpnWGdwazJiZkRhYjdRdFV0OXJ0OWxBa0VoRzBKUndPZTJENzhPREJnM3UxNHhSa3c0WU5wUmpuYzR4WGhIRkhZQnBGR1dBSkRaaTZ5K1VheGR5QmtaR1JBSVhQRWhWakJKS1NrZ0xzTnpZMkZzQm1qOEUyaG1mVUlNWUlZTk1iRGh3NE1JRDJ0R1RDQUFLOGpTaSt4RUlleTgzTkZTb0JoSk55Ky9adHVYNzkrdStvZnd4YkNNN3FJdUg0cU5adDlvQ3RLeHlTaUlURURyVkJzUkJiajR4RkZqbHlSa2RIZDFpVzljNjhlZk5jczJmUDVvYm8ySGcvVmpmdDF0WldHUmdZa0NWTGxraHFhcW9FZzBIdFkvcFNhV3RwYVpHaG9TSHRnK2k0Wnh5QXp6NXZWVlpXN3RQRlRVTmlBRzdldkRrZGcyWmlnaUFXemZBSm94N0FidVdqdmhPMkY3MWVyMDVlVUZBZytmbjU2aFRzNm1oalk2TTZTb0U5QWcwQnhDREhnOXRCQUJjRVAwTDRGNVFnMmxpbkRaYXdMNUtWblorVFdWUlVwSXQ5bUhBdXY5OHZseTVkVXNCV3JWb2w5SW1nVUV4NTdkbzFPWFBtak15ZlAxLzk1Q2FiWnhUNmlvMTQvK2pSbzk5RlRWTVdCWERMbGkwdU9GUU5XcGVoeVpBeEFJWUJhaEtBY2FXa3BDaEFmWDE5VWxoWUtEazVPUW9naGM2ZE8zZE9FRGJDZnNQRHc5TFIwU0Y1ZVhrU0RvYmsxcDBPNmZzMFMwS3puR0liUTlpSE1UeisyNEpoOGUzcmxMS2tKeVE3TDBkQitUc2hpSnp2NXMyYmN2WHFWVzBiTzRVKzBZL0ZpeGZMckZtenRLOEJ6L1JwYUdqZys5dU9IVHUyV3czVEVBZi9MRnEwYUlQUDU5dStkT2xTKzV3NWN5eUFZMlZuWjd0UmVwS1RreDBFaER2UG5VUk9rWXlNREhYU09BYmdsWmxrSWdGa1A0WVp4Z1JEZk9KdkdaREJDcThNRi9va2xPcVVZSnBMZ3VrdUNXUzR4ZTRJaVhYS0wxa0YyVHJXUkNVdExVM216cDJyeW9pSXI1TjFIbzhuNWwraWNITnhVQjBIazJ1anBpbUxPVWsvSXFNSUNpZW1NalNvdEplVWxBanlrNEtIZktXQXhRc2Q1WUlJTkZuRTUyNjNXd0cxMlczaTlYakZhdkpIZTVQMllDSGVzU09PQTQrblNJZWpXL3dENkJ0bHlFU0Vjeklpa0dMdVU4UFNmME1jdURhOEFPQjJNRjhrNWdvSzJ3U0V6RExNWXowZVJEck1OZzhUQW9jRFFXME1KN0l3N0l5SXY3bEgzRjJqNHFzRE0wOURmNFArMmkvZTJrRUp0WTZLMStXVmpNd01IWTkrOFAxNG5VbEFacEtCam1YTGxuMFBwaFVUR0RwT0lGZ21pdGx4RTZLSnd2ZklPTjRzeUZ5Q2FNTEk2WEtLTmV5VTFHYW5wTFZZa3RydWx0UXVqNlQxZWlWOUFLeDNlNlMzdDFkekZ0OG5rem5XNE9BZ0Y2b2xOeUorWG9KcWhIVSttd2pJN0VzQTc5eTVNek1BSWp6OWNOb085aVIxZDNlbk1YZHhFWnlJb01RRFNnZkhjNUo5eUxqT3prNEZPYkdmeCtzUmQ0cEhyR1F3TkFucXM4VGx0Y1RwY1NuWVdKQmVQZHJhMmxUSlpvNEZuL1RxUW45NHhhRXdUVERuR3FZVFlMNVBFanhNNkNNM2h3Y1FVdEh4aXhjdlRodkEyRGJpSXB1Q1JaZEFuMGJ6R2JCdEJaaVV4WjFuV09KUTBaSk8wT2xFTUdrbmE4NmVQYXRNTlgwb3BzNCszSDBDb0NkMDlCU244TzdHOFhHSWFYOEtTeXJ6THNGZHZueTU1bVN5c3JhMlZrcExTL1hxMDlQVG8rMnlzakp0eDQ5TDRieWM4OWF0VzlMYzNFendxK0RqTmx5azI2SmRwaXpqWm0wQW1vMkpWM1IxZFQxWFUxUHozcnAxNjNnNks3c1lhZ1NXRERDQWtoRjBEdGVjYW9EMURZYUlvWXMrZTFBY0I1dC94aFhpeWN1WEwrOHFMeTlYZGh1UVdjL016TlJUTlBFRTVmaGtHSlVnY1c3ZUJjbk9sU3RYNm9aeGJyTFd0UG0rMlFoZXZhTFBtMkg3NU5DaFExWDZZQVprWEFBVFpBK3VCbHNYTEZpZ0xLRnlFYmppeEc3NjBjUmNpVlB3RGV4czdNakZCZDJMNGdyMFZYenExYWhSNURSTzlYSUNab0FpYTdoQlpDYlpuaWdFZzZITmVjbEU5aWZyT01iQ2hRdVZ3ZlgxOWNJTE9RODdqa3ZtOHE1NDQ4YU5FZHdndnNXR2Z3MGYrcU5Eem9qY2V4OFpYNXFRRzk4RU16eDBORDdCa3dWSGpoeGgzdnlsdXJyNnBhYW1KbjV2eGdTSDFCb1VyMEYzbmo5L2ZraU5Ja05ZMENZdTFEQ1l5akRqNWpDWDhUb1NMM3hPOE5yYjI3Vk80QmdKeUdPU2xaV2xyR1g0OHdEam1MeHkxZFhWTVgrZVFQOVhEaDgrL0JQbTUwZkNqTXBFQWV5RHBrQ2ZTazlQVndPQlpOZ3lLWFBSK0JKSmh2a0l0RWM3UkFVQWZvYkNqNTMvNGE1RndiaUVCYjRNQnVjUWxLaE54elNudHprUWFLZFNHT1lFQ04vZHlueHVBTm5LZDhoSUhuNDhCSkYyOUtCQWJ1d0RtR3VxcXFwdTZBRC9nRXcwaENsWjBEUDRSTXA5MENuTDhFS1NQb0hxODNjdEdyN0ZLQnFoRE4ramF2eEwzZ1pRZXdsQ1BFZ0VpS2N0UDhWWXA1am5ScGtMV2ZMdXlrMGthSXdLMU1uc05qQzVHYS85QVdCUFBXRGVHWlhKQUVqWmpwM2ZWVnhjckdFU0x3dy9KbllzWkJ1YXV3RWVHVnNON2NJaVlxQWFBWnQ4ZU9jRFZET2hISXd4UytVdkVsWkZSWVVMYzFsZ2xnV3dMTnBNSDh4dFlRTmRBS3NiNVFYWXprRXZ3SDRGZmR0eFNBeWovYS9JWkFGa21OWmo1eGZ3QUlsbklSbkJuSWp3NmwyN2R1MVhZTmE3ZU02RS9Td0E3THpiYS9xQ3NXMEExbzROc0dQY2UvTHRmeUdUQlpEeU9wUS9Bd1doOThReFFRUm96dFdyVncvZ092SWpHTVpUenh3Y2o2Uk1CVUFLUDFydi81NkRJTy9ZY0VYcHgxMlB2eW8vNGlMeUo2OVZQajByekxtdEFBQUFBRWxGVGtTdVFtQ0NcIl1cclxuICAgIF07XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZ3Vucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBndW4gPSBndW5zW2ldO1xyXG4gICAgICAgIGxldCBndW5fbW9kZWwgPSBndW5bMF07XHJcbiAgICAgICAgbGV0IGd1bl9uYW1lID0gZ3VuWzFdO1xyXG4gICAgICAgIGxldCBndW5faW1hZ2UgPSBndW5bMl07XHJcbiAgICAgICAgVkFMX1RBQkxFW1wiZ3VuX21vZGVsXCJdW2d1bl9tb2RlbF0gPSBgPGltZyBzcmM9JyR7Z3VuX2ltYWdlfScgYm9yZGVyPTAgd2lkdGg9ODAgaGVpZ2h0PTIwIHN0eWxlPXZlcnRpY2FsLWFsaWduOmJhc2VsaW5lIHRpdGxlPScke2d1bl9uYW1lfSc+YFxyXG4gICAgICAgIGltZ19ndW5zW2d1bl9tb2RlbF0gPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBpbWdfZ3Vuc1tndW5fbW9kZWxdLnNyYyA9IGd1bl9pbWFnZTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlRGVjb3JzKCkge1xyXG4gICAgLy8gQWRkcyBkZWNvcnMgdGhhdCBleGlzdCBpbiBnYW1lLCBidXQgbm90IGluIEFMRS4gQ3VycmVudGx5IG9ubHkgaGFrYXNlIGVhc3RlciBlZ2cgaXMga25vd24uXHJcbiAgICB3aW5kb3cuaW1nX2RlY29ycyA9IENBQ0hFRF9ERUNPUlM7IC8vIEZvciBzb21lIHJlYXNvbiBpbWdfZGVjb3JzIGdldHMgcmVzZXR0ZWRcclxuICAgIGxldCBkZWNvcnMgPSBbXHJcbiAgICAgICAgW1wiaGFrYXNlXCIsIFwiSGFrYXNlXCIsIFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDZ0FBQUE4Q0FZQUFBQVV1ZmpnQUFBTkhrbEVRVlJvZ2JWYWExQmIxN1grQUlFT1FvSUQ2SEY0U2p5RkVRK1poM2pKSUFkYkpvN3QySTZkdUdsbTZta1RPMVBmMjJadU14UDNUdE1iVDZaTjJybTVjVytTR2J1WlRCcVRObkhua2dhNzVwbUNUWUZZQWh6QXhwWUF5d2p6RUFha0l4RGlpRWU0UHdnS0F2RVM3amVqSDJldnRkZit6dHA3cjczMk9nSThCd0VnZHh2OU53V2ZUZWlRQU9RQTRnRklsdjI0SlhscGIvWU9qRXdCMFAyTCtJRzFqa3dTeWdzb09saTA4K1hkbVR1U0JDU1BYQkxRTmpzR0hsbjZSQ0dCcERTYW9qNnRhQW9hbjV5cUJtQjYzQVM5MW1nbmZyZ3Z0L0xIaHdwVml1VFlkUTNRTmpzK3VkYkUxTFhjcmFwcnUvZExlTzdOSlFmUXl4dTkzWkY3Zm0vdXUrZE9IZG1RSEFDUVhBNUs4bElKUVRDUDhwRFlvaDB5OEVmQndVSFByV3hmdFFZenBaSXo3N3h5NHRWSVljaDYwKytDK2ZsNTlBMlBSNUk4VG1SM3Y2a2FBTE5GZnZKL2YvSDVQd1VIOHVidWRodktsZ3RjUENnUmhlYjgrcVduMzVDRThZbXRXQmVGQkVFWUVvalV1TWpEZWJMNDE3WklEZ0pCaUZRU0ZVRnllUUZKQUZSckVTU0tGY2xuODFQalNYaUFnOHAwc1AxWXlFd1duOFQzNFlkTWlKT2NMc3pQK2k4QVNXNjZFUUJ5WThXUnVVWDUyWkJKNDZubm56bndGaGFqQklCbHV6Z3NKTERvNU1GZEpZU2ZyeWY4SUFvSndpNTVJdnBONDlUZWJOblBhMXU2Y096ZzNyZVNwZkVxYVh3TUdwcGJiK0Q3RFVRQVNIcjIrTE52SFR0MnJBUUFxbTlvOFlPalQxRm1pNVhHc2lYaUpKaWVLRDZSSkE3YmNHci8yZDZON09RWU1ET3pJTGtjbC9iR1hndmc3WU9Nckt6RDcvN1BiMDhrSmNTaXVxNFJ4c0ZoR29zaGlBUWdWNnZWcDR1ZktGWnhPQnlLWUJOUXE5WDQ4SStEMFBjK1FJK2h6NFJsNFdxSm9IeW5ORnExbHZjNmV4K0MvWjJzdVhjTUk1WkpzSDE5OE1nNmpRTjV5ZERlZllDQmIvazQ5WXVmZ2FJb2xGNzZFMkVjR0VaU1FpeWtDVEg0YzlrMVhXaG9hSTZxVUhWeS8xUDc1Y29DSlNrV2k4RXdETjU3L3oxSXBWSWNQSFFFSDEzODMxVmord0FnQ3RJVDN2ekpvVUpWaENEWUthQnRkblQzTDc3SUZVMFBISTVaV0cxMjJIeTRHSjJjZ1dsb0NBNGlGRzBkWFpnTlNjQ3BmL3NGU0hKeCtZckZFbFRVZkFWK0VBZjMrd1l3YkpteG5UNzk4Z3RuenB5SlYyUXJpQ1U5Rm9zRkZvdUYrNGI3eU16TUJEMWhRK2xmUGp0dm9hMmFKUjdlQUhMWkxCWTVQRWE3aEliYnZRTVlNVS9nNzEvZlJVU2NGTXpjUEhwTUUzQTRaaUJQVDRVWE93QUw4elB3NGNmQWk4M0Z5TWlJc3k5SmtqajQ5SEdVMXpUQ3pMRHcrOS8vZDlLUncwZWN4SlpEbWlpRlhxLy9ybDh3REgzOUhjdmwzZ0RhcDVsWm5UeFI3TEwrT3U4UG91WHVBNHpQc1VFSitPZzNqY1BibndlUklCUTVtZW53NFlZZ1dyb1RMLzcwUDNEODJIR1VmbG9LaytuN2swNHFsU0loSlJzUjBYRnVsODN5bHlGSkV1OS84RDc5K3V1dm53ZlF0M0tLR1VrWVg5bjljSVRpK3JQNVZwc2R0RzBhSFFOV2VQbjRvdVJKTmJ5OHZOQm43TWZCQS9zUkh4T055Myt2UTk3dS9UaDArQ2k0WEM2NFhDNEFvUG5yWnNpU1pXQ3hGcGMyd3pCbys2WURXWmtaYnNuUk5JM0txa3FtNGxwRjQrZVhQeityNzlaZkJEQzJraUQ2UjhaSCtvWkdUVHd1b2F4b3VuMlRDZzJTbU9jSjVPWmtRMVdRQTRMTmhpL2JIMVBUREs2MzZIRHd5SFBJek14MEdVd3NGdVBXclZ0d01BNkl4V0owZEhUZ2kvSXJLQ2hRSWlveTNFV1hZUmcwTnpmandvVUw3ZSs4Kzg2cnJXMnR2NW1hbXVvQU1MZnlKWloyc2M1aXN6TmYxcmVSazFPTVNaNFlwUW9VUmlFM1M0NGJ6UzNvZXpnSWVIbkR2dUNQRjArZmdidTFCQURxdldxVWZsb0tobUZRMzlDSVl2V1RVR1R0ZE5FeEdvMjRWSHFwNzdQUFB6dHZNQmpLVjA3cFNyakxaaVNuRHF2K3hxY2k1Qkd4VXBoR3h3QXZiNlJtNUVHdDNnZUNXRDlVWHY3clpkenJlWUNDWGJ1Ums1R0t3R1d4c3FxcWl2bjQ0NCtyeXErVy93N0F6WFVOZlFkM0NZSHBQcjNROThOWFRzbTFXaTBXL0FKeC9OaHhTS1hTRFkzVjFkZGp4RHlKcHc0OWc1aElrWk1jd3pDb3ZsYU9ycVpLV3R0VWYyR3o1QUQzNlpaY25wR2xhbWhvZ05WcWhUaGF2Q2x5WlY5OGdSSExGUElLaWhBdURBRS9PTkFwdTNMMUNycDdleUdQcGFqWGZuVGdQSUJOcDJhcjBxMUNaZUZQamg0OVdsTDhSREdraVZJa0p5YzdkNms3TUF5RFQwcEw0VTBFSWo1QkNsRW9pYWd3dm91T1RDYURMQ1VObFhVTktFNk41Rk9oZ1VyZGc2R3hLV1pHdjJXQzRtaXg2cVdYWGxLSnhXTHcrZngxeVpsTUpuejQwVWZ3NDVCSVM1TkRFaUZFbURERXJTNUJFT0FHQzFGWlU0c1g5bVJHOGdMOFZaMDkvUU4yeDB6WGVnUlhyVUVXaTdWaHNrblRORzVxTlBpcS9qb3lzdk9SbHBhRzJFZ0tISC8ydXYzUzA5T2gxNm5RMlBrMVhueTZpQUp3L3QyL1ZHSFVhcnU4VnA5VkhuelE5OEJYdlZkOU1pNXU5UW5BTUF3cUtpdndSZmtWbUNlbXNFZTlIMWs3MHhBYlJjSFhkM01KZUZ4OEFtci9xWUdRbUVlRU1KaExUMDNIZC9ZK3ZJRVZBWHBOZ2dDWThMRHdQY1hGeGM2RmJEUWEwZG5aaWFiYXE3amRxa0cycWdUN1MvWkJHaGZ0RWtZMkF4YUxCVDRWZ2FzVmxWaVlaZWcvZkY1endURTdkd05yWEJQY0ViU05QQm9od3NQRFZXRlVHS3VtdGdhMXRiWFF0bWgxdWNJNWZpU0hoVGFkQWNWNzlzTFB6MjlMNUpiQTUvTmh0cy9oWVc4WHdmTEJtTjQ0L09lMWROMWUzQzBXUzhjMzMzeEQzNzV6bXh3Wkdaa2JIQnJVWGJwMDZlSUxhc1dCcUZBK2VudDZZYkxQSVNVbDFTT0NBQ0NXeE9CV1Z6Y0dERDFqT3VQd0oydnByYlZ3R0lQQjhBZUR3WEFaaStrNWcyVjNDbVZ5SEdwdlZLSWhQQktGaFlVZUVTUUlBazhmZXg2MzJqc0pvSTNFaXZ2d0VqWXFmZGkrNjJnRElIbGhYKzVKSHNIQnQvTUxDQTBnVU52UUNFRlVEQ2pLc3lzeFNaSUk0UXNqbTVxYlRCYUxSZU5PeDkxSjRoYVowdWgwVVFqUCtSd2F5TVh1ZUJIKyt1SDdNQnFORy9abkdQZlJTNkZRWUhmUjdoTlk0M1RaVFBFSUFJaWRpZEcvT2xLVUVUL2orQll6cy9NQUFBN2JEejV6RE9vMHR5Qk5TWU9ObWNXOSt3TVllbVRHeUJnTlB4K2d0YlVGRFEwTnFLeXFoRUtoY09hS1MyQ3hXSmlabmVHWGxaVlZ3MDFtczFtQ2tjVlpPMTU5UnBWQm11bHBKMEZnMFpQbTRVRVlyZFBZcFN6QXBOV00vN3Y4S1hwMHQ5SFZkUWRjTGhjNWloeW85NnJYeklTOHZieFpHcTFHWnpLWm1sYktObHZla1BBQ0NNSm9Hc2Y4L0FLYXUzb1p0aThMYkQ4V2tSQkJZV0RDenB6SVVoQUFrSlNZZ0RmUG5kdWsyVVdJUkNJSUJBSzVPOWxtQ2RKbGRiZmVUb3dRdmpIOGFBcVhhaHJQUndsRFZRQVF3ZzBnTzRmTTF3ODdtRmUyeEdvWlNKSUVMOEI5OFdtekJOc053NlB0dnltdFpDWW1wMml6YmJxOGQraFJkVnk0UUZ6ZmZ1K0dRQ0FvY2pBT1Qva0JBRkxUVXFteXY1VlJXRkZqM0hRRkN3RDZoc2N1TG51OGVYOW85Q1lBeUdReWxWZ3NobDZ2QjhNd1NFOVAzekxCd01CQUFvc3gxd1diRGpQcmdLUW9TZzRzSnFacjNWYzJRbXhNTEFVM29lYXhFRXhOU2FVMFdnM1VlOVVRaThVZUdlRndPUDh5RDBwU1UxSWwzZDNkSGszdFJ0ZzJ3WVNFQkdrUUdRU0JRT2dzWVR4T2JKdGdtQ2lNb2tRVVpMSVUvS091N25Gd2NzRzJDUW9FQXBWSUpJS3lJQjhHWXo5bzJtMVM0akcyUzVBQTREekNKSkpZYUxYYTdYSnl3WFlKVWdYS0FzblNRM3A2T2pRdExSNFpzdHZ0YnRPZHg3R0xuVWhKVG9aajlsdDBkSFJzckx3Q2hnY0dFOXhrTTl2Mm9FZ29ja2JtNENBdVl1SVNVSC85dWx0bG1xYWgxK3ZSME5Dd1NqWTRNT2hTUEYvQ2xvNDZOeUFFQW9ITDBmR0VxaEIvdkhnQmVyM2VwV1R5MjdmZmhzMCtEUzZQQkY4Z1FrN3VyTFB1VGRNMDJqdmIrK0RtVzk5MkNhNUN1RWdBYVhJYXJsNjdCckZZN054QS8zbjJMTzcwR0RITnpDQStPc3hKRGdDMFdpM2EyOXUvZEdmdnNlemk1V0Q3K2FKd2x4SVRVdzVVVlZlN3lHSWpLZmg0ZXlNNGFMR2NjdVhxRlFCQVUxT1Ribng4Zkh0M0VuY29WQmJtdUR0N0kwU2h5Titsd3RmYVZ0VFUxRGpiT2Y1c3lCS2lBUUFhclFaOXhvZWdhUm82blU2SE5iNlNQdllwQmhhOW1Mb2pFUUJRLzFVbDdOUFRLTm0zV1B4Y21scU50aFVaR1ptd1dxMndXQ3p0YTlsNnJHRm1PU0pFb1lpTUNFZlJuaWZSZnVjZTN2dmdBK2RaM2RIUmdVZGpacVNscFcxb1p6c2VwTHhaM2hTYnZYWkZLemFTd2pRemc2Y09QUU9yWmN5WmlsWFYxQ0phRW9kQUxnZVc4ZlVIOGRpRE9kazVyNTE3NDl6TDYxM2FPZjVzWnpGVElLUkFFQVJ1M3J3Snk0UU51M2VyQUFCc05odmNRSzVrTFJzZWU1Q2lLQWtadEJnQ3Z5d3ZoNTF4SUM5ZkNUOC9OaHd6czVpWmRmMmlNRE03aDEvKzZ0ZVluWnZIbnBJRFlQdjZMdG5CRHVrT2VVVkZoUVRidUJldndzVGtCQjBRRUxCSHFWUnlLWXFDd2RDTGlxb3E5RDhjeE5RMEE5bzZBVC9DMzRXb01Dd0NTY2twSU1sZ1RFMHpHSHBraHAxeGdNY05vTnJhV25WbXM3bHQ1VGdlZTVETDVVcnk4L0lwWVBIYStOeXp6MkdmbW9hK1c0ODdYWGV4c0xBQVZZSENxVDh6TzRkd1lRZ21wNmFkYlQ0KzNvZ1FoaUpLdEF2Wldka2xQVDA5RjFlTzR6RkJYZ0F2VnlRU3ViU1JKSWtjUlE1eUZEbGJzcVhSYWpBL04rODJrVnpyYnlrYklpd3NiRjkrYnY1WmtpUUpXWXBzeStXdGlZa0o1bmJuYlJNQWpJNk9YbTlvYkxnSU4yZXh4d1NYZ2NBV3Zuc3NBNE5OL0JIby93RU4zYWU2YUJCZGhnQUFBQUJKUlU1RXJrSmdnZz09XCJdXHJcbiAgICBdO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGRlY29ycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBkZWNvciA9IGRlY29yc1tpXTtcclxuICAgICAgICBsZXQgZGVjb3JfbW9kZWwgPSBkZWNvclswXTtcclxuICAgICAgICBsZXQgZGVjb3JfbmFtZSA9IGRlY29yWzFdO1xyXG4gICAgICAgIGxldCBkZWNvcl9pbWFnZSA9IGRlY29yWzJdO1xyXG4gICAgICAgIFZBTF9UQUJMRVtcImRlY29yX21vZGVsXCJdW2RlY29yX21vZGVsXSA9IGRlY29yX25hbWU7IC8vIEFkZCB0byBrbm93biBkZWNvcnMuXHJcbiAgICAgICAgaW1nX2RlY29yc1tkZWNvcl9tb2RlbF0gPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBpbWdfZGVjb3JzW2RlY29yX21vZGVsXS5zcmMgPSBkZWNvcl9pbWFnZTtcclxuICAgICAgICBpbWdfZGVjb3JzW2RlY29yX21vZGVsXS5uYXRpdmUgPSB0cnVlO1xyXG4gICAgICAgIENBQ0hFRF9ERUNPUlNbZGVjb3JfbW9kZWxdID0gaW1nX2RlY29yc1tkZWNvcl9tb2RlbF07XHJcbiAgICAgICAgQ1VTVE9NX0lNQUdFU19BUFBST1ZFRFtkZWNvcl9tb2RlbF0gPSB0cnVlOyAvLyBTaW5jZSBpdCdzIG9idmlvdXNseSB2YW5pbGxhLCBhbmQgb3RoZXIgdmFuaWxsYSBkZWNvcnMgYXJlIGFwcHJvdmVkLCBpdCdzIG9ubHkgbmF0dXJhbCBpZiB3ZSBhcHByb3ZlIGFkZGVkIGRlY29ycyB0b29cclxuICAgIH1cclxuICAgIHdpbmRvdy5BTEVJX2RlY29ycyA9IGRlY29ycztcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlT2Zmc2V0cygpIHtcclxuICAgIC8vIEJlY2F1c2UgaGFrYXNlIGRlY29yIGFuZCBncmFiYmFibGUgbGVkZ2UgaW1hZ2UgaXMgbWFkZSB3aXRoIGhhbmQgbWFudWFsbHkgYW5kIGRvZXNuJ3QgY29tZSBmcm9tIHdlYnNpdGUsIGFuZCB0aGF0IHRoZXJlIGlzIG5vXHJcbiAgICAvLyBpbmJ1aWx0IG9mZnNldCwgd2UgaGF2ZSB0byBvZmZzZXQgdGhvc2UgdG8gbWFrZSBzdXJlIHRoZXkgc2hvdyB1cCBpbiBBTEUgY29ycmVjdGx5LlxyXG4gICAgbGV0IHRvb3NjID0gd2luZG93LlRoaW5rT2ZPZmZzZXRDbGFzcztcclxuICAgIHdpbmRvdy5UaGlua09mT2Zmc2V0Q2xhc3MgPSBmdW5jdGlvbih0YywgZXNpKSB7XHJcbiAgICAgICAgaWYgKHRjID09IFwidmVoaWNsZVwiICYmIG9mZnNldHNbZXNpLnBtLm1vZGVsXSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiYWxlaV9cIiArIGVzaS5wbS5tb2RlbDtcclxuICAgICAgICB9IGVsc2UgaWYgKHRjID09IFwiZGVjb3JcIiAmJiBvZmZzZXRzW2VzaS5wbS5tb2RlbF0gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcImFsZWlfXCIgKyBlc2kucG0ubW9kZWw7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0YyA9PSBcImd1blwiICYmIChlc2kucG0ubW9kZWwgPT0gXCJndW5fcmwwXCIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcImFsZWlfZ3VuX3JsMFwiO1xyXG4gICAgICAgIH0gZWxzZSByZXR1cm4gdG9vc2ModGMsIGVzaSk7XHJcbiAgICB9XHJcbiAgICBsZXQgb2Zmc2V0cyA9IHtcclxuICAgICAgICB2ZWhfaGg6IHt4OiAtMTUsIHk6IC0xNSwgdzogMzAsIGg6IDMwfSxcclxuICAgICAgICBoYWthc2U6IHt4OiAtMTgsIHk6IC01NywgdzogNDAsIGg6IDYwfSxcclxuICAgICAgICBndW5fcmwwOiB7eDogLTI0LCB5OiAtNiwgdzogNjEsIGg6IDEzfVxyXG4gICAgfVxyXG4gICAgZm9yIChsZXQga2V5IGluIG9mZnNldHMpIHtcclxuICAgICAgICBsZXQgb2ZmID0gb2Zmc2V0c1trZXldO1xyXG4gICAgICAgIGxvX3hbXCJhbGVpX1wiICsga2V5XSA9IG9mZi54O1xyXG4gICAgICAgIGxvX3lbXCJhbGVpX1wiICsga2V5XSA9IG9mZi55O1xyXG4gICAgICAgIGxvX3dbXCJhbGVpX1wiICsga2V5XSA9IG9mZi53O1xyXG4gICAgICAgIGxvX2hbXCJhbGVpX1wiICsga2V5XSA9IG9mZi5oO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVUcmlnZ2VycygpIHtcclxuICAgIC8vIFRoaXMgaXMgd2hlcmUgd2Ugd2lsbCByZW5hbWUgc29tZSB0cmlnZ2Vycy5cclxuICAgIC8vIEZvciBub3cgaXQncyBvbmx5IDM3OCwgYnV0IHdlIGdvdCBtb3JlIHRyaWdnZXJzIGxpa2UgcmVuYW1pbmcgMzI4XHJcbiAgICBhZGRUcmlnZ2VyKDE3NSwgXCJHdW4gJiM4MjUwOyBDaGFuZ2UgZ3VuICdBJyBwcm9qZWN0aWxlIG1vZGVsIHRvICdCJ1wiLCBcImd1blwiLCBcIkFMRUlfcHJvamVjdGlsZU1vZGVsc1wiKTtcclxuICAgIGFkZFRyaWdnZXIoMzc4LCBcIkd1biAmIzgyNTA7IEFkZCBoZXggY29sb3IgJ0InIHRvIGd1biAnQSdcIiwgXCJndW5cIiwgXCJzdHJpbmdcIik7XHJcbiAgICBhZGRUcmlnZ2VyKDMzMiwgXCJWYXIgJiM4MjUwOyBTZXQgdmFyaWFibGUgJ0EnIHRvIHZhbHVlIDEgaWYgR3VuICdCJyBpcyBpbiBvd25lcidzIGFjdGl2ZSBzbG90LCBzZXQgdG8gdmFsdWUgMCBpbiBlbHNlIGNhc2VcIiwgXCJzdHJpbmdcIiwgXCJndW5cIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZU9iamVjdHMoKSB7XHJcbiAgICAvLyBTaG9ydGhhbmQgZm9yIG9iamVjdC1yZWxhdGVkIGZ1bmN0aW9ucyBhcyB0byBub3QgY2x1dHRlciBjb25zb2xlLlxyXG4gICAgdXBkYXRlR3VucygpO1xyXG4gICAgdXBkYXRlVmVoaWNsZXMoKTtcclxuICAgIHVwZGF0ZURlY29ycygpO1xyXG4gICAgdXBkYXRlVHJpZ2dlcnMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlQnV0dG9ucygpIHtcclxuICAgIGxldCB0b3BQYW5lbCA9ICRpZChcInRvcF9wYW5lbFwiKTtcclxuICAgIGxldCBjaGlsZHMgPSB0b3BQYW5lbC5jaGlsZHJlbjtcclxuXHJcbiAgICAvLyBXZSByZWRpcmVjdCB0aGUgbWFudWFsIHBhZ2UgdG8gRWFnbGVQQjIncy5cclxuICAgIGNoaWxkc1sxNl0udmFsdWUgPSBcIkVhZ2xlJ3MgTWFudWFsXCI7XHJcbiAgICBjaGlsZHNbMTZdLnNldEF0dHJpYnV0ZShcIm9uY2xpY2tcIiwgXCJ3aW5kb3cub3BlbignaHR0cHM6Ly9lYWdsZXBiMi5naXRib29rLmlvL3BiMi1lZGl0b3ItbWFudWFsLycsICdfYmxhbmsnKTtcIilcclxuXHJcbiAgICAvLyBXZSBkb250IHdhbnQgb3VyIG5ldyBidXR0b25zIHRvIGFwcGVhciBhZnRlciBcInJpZ2h0c1wiLCBzbyB3ZSB3aWxsIHN0b3JlIFwicmlnaHRzXCIgYmVmb3JlaGFuZCBhbmQgcmVtb3ZlIHRoZW0sIHdlJ2xsIGFkZCB0aGVtIGJhY2sgb25jZSB3ZSBhcmUgZG9uZVxyXG4gICAgbGV0IGFwcGVuZEJhY2sgPSAodG9wUGFuZWwucmVtb3ZlQ2hpbGQoY2hpbGRzW2NoaWxkcy5sZW5ndGggLSAxXSkpLm91dGVySFRNTDtcclxuICAgIGFwcGVuZEJhY2sgPSAodG9wUGFuZWwucmVtb3ZlQ2hpbGQoY2hpbGRzW2NoaWxkcy5sZW5ndGggLSAxXSkpLm91dGVySFRNTCArIGFwcGVuZEJhY2s7XHJcblxyXG4gICAgLy8gUmVtb3ZlIHBhZCAod2Ugd2lsbCBhZGQgb3VyIG93biBsYXRlcikuXHJcbiAgICB0b3BQYW5lbC5yZW1vdmVDaGlsZChjaGlsZHNbY2hpbGRzLmxlbmd0aCAtIDFdKVxyXG5cclxuICAgIHdpbmRvdy5hbGVpQnV0dG9uQ2xpY2tzID0ge307XHJcblxyXG4gICAgLy8gQ29udmVuaWVuY2UgZnVuY3Rpb24gZm9yIGRvaW5nIGVhc3kgdG9wIHBhbmVsIGJ1dHRvbnNcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbih0ZXh0LCBpbnRlcm5hbE5hbWUsIG9uQ2xpY2spIHtcclxuICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZpZWxkX2J0blwiKTtcclxuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcclxuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgdGV4dCk7XHJcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcIm9uY2xpY2tcIiwgYGFsZWlCdXR0b25DbGlja3NbJyR7aW50ZXJuYWxOYW1lfSddKClgKTtcclxuICAgICAgICB3aW5kb3cuYWxlaUJ1dHRvbkNsaWNrc1tpbnRlcm5hbE5hbWVdID0gb25DbGljaztcclxuXHJcbiAgICAgICAgbGV0IHBhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcGFkLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicVwiKTtcclxuXHJcbiAgICAgICAgdG9wUGFuZWwuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgICAgICB0b3BQYW5lbC5hcHBlbmRDaGlsZChwYWQpO1xyXG4gICAgfVxyXG4gICAgbGV0IGJpZ1BhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBiaWdQYWQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJxM1wiKTtcclxuICAgIHRvcFBhbmVsLmFwcGVuZENoaWxkKGJpZ1BhZCk7XHJcblxyXG4gICAgLy8gXCJEb3dubG9hZCBYTUxcIiBidXR0b24uXHJcbiAgICBjcmVhdGVCdXR0b24oXCJEb3dubG9hZCBYTUxcIiwgXCJkb3dubG9hZFhNTEJ1dHRvblwiLCBleHBvcnRYTUwpO1xyXG4gICAgLy8gXCJJbnNlcnQgWE1MXCIgYnV0dG9uLlxyXG4gICAgY3JlYXRlQnV0dG9uKFwiSW5zZXJ0IFhNTFwiLCBcImluc2VydFhNTEJ1dHRvblwiLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGZpbGUgPSBjb25maXJtKFwiRmlsZSAoT0spIG9yIHRleHQgKENhbmNlbCkgP1wiKTtcclxuXHJcbiAgICAgICAgaWYgKGZpbGUpIHtcclxuICAgICAgICAgICAgbGV0IGZpbGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuXHJcbiAgICAgICAgICAgIGZpbGVJbnB1dC50eXBlID0gXCJmaWxlXCI7XHJcblxyXG4gICAgICAgICAgICBmaWxlSW5wdXQub25jaGFuZ2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGlmIChmaWxlSW5wdXQuZmlsZXNbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmlsZUlucHV0LmZpbGVzWzBdLm5hbWUuc3BsaXQoXCIuXCIpWzFdID09IFwieG1sXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRYTUwocmVhZGVyLnJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZUlucHV0LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlSW5wdXQuZmlsZXNbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiSW52YWxpZCBmaWxlIGV4dGVuc2lvbi5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmaWxlSW5wdXQuY2xpY2soKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgeG1sID0gcHJvbXB0KFwiRW50ZXIgWE1MOlwiLCBcIlwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh4bWwgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGluc2VydFhNTCh4bWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjcmVhdGVCdXR0b24oXCJBTEVJIFNldHRpbmdzXCIsIFwib3BlbkFMRUlTZXR0aW5nc1wiLCBzaG93U2V0dGluZ3MpO1xyXG4gICAgLy8gUmVhZGQgJ3JpZ2h0cycgYmFjay5cclxuICAgIHRvcFBhbmVsLmlubmVySFRNTCArPSBhcHBlbmRCYWNrO1xyXG4gICAgLy8gVXBkYXRlIG9yaWdpbmFsIHJlZmVyZW5jZVxyXG4gICAgd2luZG93Lm1hcGlkX2ZpZWxkID0gJGlkKFwibWFwaWRfZmllbGRcIik7XHJcbiAgICBtYXBpZF9maWVsZC52YWx1ZSA9IG1hcGlkOyAvLyBBbmQgdXBkYXRlIG1hcCBpZCBmaWVsZCB2YWx1ZSBtYW51YWxseS5cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ2xpcGJvYXJkU3luYygpIHtcclxuICAgIGxldCBjbGlwYm9hcmRfY2hhbm5lbCA9IG5ldyBCcm9hZGNhc3RDaGFubmVsKFwiYWxlX2NsaXBib2FyZFwiKTtcclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vIFJlY2VpdmluZyAvL1xyXG4gICAgLy8vLy8vLy8vLy8vLy8vXHJcbiAgICBjbGlwYm9hcmRfY2hhbm5lbC5vbm1lc3NhZ2UgPSAobXNnKSA9PiB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBtc2cuZGF0YTtcclxuICAgICAgICBsZXQga2luZCA9IGRhdGEua2luZDtcclxuICAgICAgICBpZiAoa2luZCA9PSBcInNlbmRcIikge1xyXG4gICAgICAgICAgICBsZXQgcmVjaXBpZW50ID0gZGF0YS5yZWNpcGllbnQ7XHJcbiAgICAgICAgICAgIGxldCBjbGlwX25hbWUgID0gZGF0YS5jbGlwX25hbWU7XHJcbiAgICAgICAgICAgIGxldCBjbGlwX2RhdGEgID0gZGF0YS5jbGlwX2RhdGE7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVjaXBpZW50ID09IHVuZGVmaW5lZCB8fCByZWNpcGllbnQgPT0gYWxlaVNlc3Npb25JRCkge1xyXG4gICAgICAgICAgICAgICAgYWxlaUxvZyhERUJVRywgJy9hbGVfY2xpcGJvYXJkLyBnb3QgZGF0YSBmb3IgJyArIGNsaXBfbmFtZSk7XHJcbiAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZVtjbGlwX25hbWVdID0gY2xpcF9kYXRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChraW5kID09IFwiZ2V0XCIpIHtcclxuICAgICAgICAgICAgaWYgKGFsZWlTZXNzaW9uSUQgPiBNYXRoLm1pbiguLi5hbGVpU2Vzc2lvbkxpc3QpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBsZXQgc2Vzc2lvbl9pZCA9IGRhdGEuc2Vzc2lvbl9pZDtcclxuICAgICAgICAgICAgYWxlaUxvZyhERUJVRywgJy9hbGVfY2xpcGJvYXJkLyBzeW5jaW5nIHRvICcgKyBzZXNzaW9uX2lkKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gMTA7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNsaXBfbmFtZSA9IFwiY2xpcGJvYXJkXCIgKyAoaSA9PSAwID8gXCJcIiA6IChcIl9zbG90XCIgKyAoaS0xKSkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNsaXBfZGF0YSA9IHNlc3Npb25TdG9yYWdlW2NsaXBfbmFtZV07XHJcbiAgICAgICAgICAgICAgICBpZiAoY2xpcF9kYXRhID09IHVuZGVmaW5lZCkgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjbGlwYm9hcmRfY2hhbm5lbC5wb3N0TWVzc2FnZSh7a2luZDogXCJzZW5kXCIsIHJlY2lwaWVudDogc2Vzc2lvbl9pZCwgY2xpcF9uYW1lLCBjbGlwX2RhdGF9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBJbml0aWFsIFN5bmNcclxuICAgIGFsZWlMb2coREVCVUcsICcvYWxlX2NsaXBib2FyZC8gcmVxdWVzdGluZycpO1xyXG4gICAgY2xpcGJvYXJkX2NoYW5uZWwucG9zdE1lc3NhZ2Uoe2tpbmQ6IFwiZ2V0XCIsIHNlc3Npb25faWQ6IGFsZWlTZXNzaW9uSUR9KTtcclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vXHJcbiAgICAvLyBTZW5kaW5nIC8vXHJcbiAgICAvLy8vLy8vLy8vLy8vXHJcbiAgICBsZXQgQUxFX0NvcHlUb0NsaXBCb2FyZCA9IHdpbmRvdy5Db3B5VG9DbGlwQm9hcmQ7XHJcbiAgICB3aW5kb3cuQ29weVRvQ2xpcEJvYXJkID0gKGNsaXBfbmFtZSkgPT4ge1xyXG4gICAgICAgIEFMRV9Db3B5VG9DbGlwQm9hcmQoY2xpcF9uYW1lKTtcclxuICAgICAgICBsZXQgY2xpcF9kYXRhID0gc2Vzc2lvblN0b3JhZ2VbY2xpcF9uYW1lXTtcclxuICAgICAgICBjbGlwYm9hcmRfY2hhbm5lbC5wb3N0TWVzc2FnZSh7a2luZDogXCJzZW5kXCIsIGNsaXBfbmFtZSwgY2xpcF9kYXRhfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGFkZFNlc3Npb25TeW5jKCkge1xyXG4gICAgLy8gVGhpcyBmdW5jdGlvbiByZWdpc3RlcnMgc29tZSBldmVudHMsIGFzIHRvIHRhbGsgd2l0aCBvdGhlciB0YWJzXHJcbiAgICAvLyBGb3Igbm93LCB0aGlzIGlzIHVzZWZ1bCBmb3IgY2xpcGJvYXJkIHN5bmMsIGJ1dCB3ZSBwcm9iYWJseSBjYW4gaGF2ZSBtb3JlLlxyXG4gICAgY29uc3QgUFJPQkVfVElNRU9VVF9NUyA9IDIwMDtcclxuICAgIGxldCBzZXNzaW9uX2NoYW5uZWwgPSBuZXcgQnJvYWRjYXN0Q2hhbm5lbChcImFsZV9zZXNzaW9uXCIpO1xyXG5cclxuICAgIC8vIFJlY2VpdmUgZGF0YVxyXG4gICAgc2Vzc2lvbl9jaGFubmVsLm9ubWVzc2FnZSA9IChtc2cpID0+IHtcclxuICAgICAgICBsZXQgZGF0YSA9IG1zZy5kYXRhO1xyXG4gICAgICAgIGxldCBraW5kID0gZGF0YS5raW5kO1xyXG4gICAgICAgIC8vIE5ldyBBTEVJIGluc3RhbmNlIHN0YXJ0ZWQgdXAuXHJcbiAgICAgICAgaWYgKGtpbmQgPT0gXCJzdGFydFwiKSB7XHJcbiAgICAgICAgICAgIGlmIChhbGVpU2Vzc2lvbklEID09IG51bGwpIHJldHVybjtcclxuICAgICAgICAgICAgc2Vzc2lvbl9jaGFubmVsLnBvc3RNZXNzYWdlKHtraW5kOiBcImdyZWV0XCIsIGlkOiBhbGVpU2Vzc2lvbklEfSk7XHJcbiAgICAgICAgICAgIGFsZWlMb2coREVCVUcsIFwiL2FsZV9zZXNzaW9uLyByZWNpZXZlZCBzdGFydFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQW4gQUxFSSBpbnN0YW5jZSByZXNwb25kZWQgdG8gbmV3IEFMRUkgaW5zdGFuY2UsIHJlZ2lzdGVyaW5nIHRoZSBBTEVJIGluc3RhbmNlXHJcbiAgICAgICAgaWYgKGtpbmQgPT0gXCJncmVldFwiKSB7XHJcbiAgICAgICAgICAgIGxldCBzZXNzaW9uX2lkID0gZGF0YS5pZDtcclxuICAgICAgICAgICAgaWYgKCFhbGVpU2Vzc2lvbkxpc3QuaW5jbHVkZXMoc2Vzc2lvbl9pZCkpXHJcbiAgICAgICAgICAgICAgICBhbGVpU2Vzc2lvbkxpc3QucHVzaChzZXNzaW9uX2lkKTtcclxuICAgICAgICAgICAgYWxlaUxvZyhERUJVRywgXCIvYWxlX3Nlc3Npb24vIHJlY2VpdmVkIGdyZWV0IGJ5IFwiICsgc2Vzc2lvbl9pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEFuIEFMRUkgaW5zdGFuY2UgaXMgY2xvc2luZ1xyXG4gICAgICAgIGlmIChraW5kID09IFwiY2xvc2VcIikge1xyXG4gICAgICAgICAgICBsZXQgc2Vzc2lvbl9pZCA9IGRhdGEuaWQ7XHJcbiAgICAgICAgICAgIGFsZWlTZXNzaW9uTGlzdC5zcGxpY2UoYWxlaVNlc3Npb25MaXN0LmluZGV4T2Yoc2Vzc2lvbl9pZCksIDEpO1xyXG4gICAgICAgICAgICBhbGVpTG9nKERFQlVHLCBcIi9hbGVfc2Vzc2lvbi8gcmVjZWl2ZWQgY2xvc2UgYnkgXCIgKyBzZXNzaW9uX2lkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJvYmUgZm9yIG90aGVyIHNlc3Npb25zXHJcbiAgICBzZXNzaW9uX2NoYW5uZWwucG9zdE1lc3NhZ2Uoe2tpbmQ6IFwic3RhcnRcIn0pO1xyXG4gICAgYWxlaUxvZyhERUJVRywgXCIvYWxlX3Nlc3Npb24vIHByb2JpbmdcIik7XHJcbiAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICBKU19zZXRUaW1lb3V0KHJlc29sdmUsIFBST0JFX1RJTUVPVVRfTVMpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQXNzaWduIG93biBzZXNzaW9uIElEXHJcbiAgICBpZiAoYWxlaVNlc3Npb25MaXN0Lmxlbmd0aCA9PSAwKVxyXG4gICAgICAgIGFsZWlTZXNzaW9uSUQgPSAwO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIGFsZWlTZXNzaW9uSUQgPSBNYXRoLm1heCguLi5hbGVpU2Vzc2lvbkxpc3QpICsgMTtcclxuXHJcbiAgICBhbGVpTG9nKERFQlVHLCBcIi9hbGVfc2Vzc2lvbi8gc2Vzc2lvbiBJRCBcIiArIGFsZWlTZXNzaW9uSUQpO1xyXG5cclxuICAgIC8vIFRlbGwgb3RoZXIgc2Vzc2lvbnMgdGhhdCB0aGlzIG9uZSBpcyBkb25lXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2Vzc2lvbl9jaGFubmVsLnBvc3RNZXNzYWdlKHtraW5kOiBcImNsb3NlXCIsIGlkOiBhbGVpU2Vzc2lvbklEfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBhZGRDbGlwYm9hcmRTeW5jKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFByb3BlcnR5UGFuZWxSZXNpemUoKSB7XHJcbiAgICAvLyBHaXZlcyByaWdodCBwYW5lbCBhYmlsaXR5IHRvIGJlIHJlc2l6ZWQuXHJcblxyXG4gICAgbGV0IHNwbGl0dGVyX2lzX2Rvd24gPSBmYWxzZTtcclxuICAgIGNvbnN0IHNwbGl0dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcblxyXG4gICAgc3BsaXR0ZXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICBzcGxpdHRlci5zdHlsZS53aWR0aCA9IFwiNXB4XCI7XHJcbiAgICBzcGxpdHRlci5zdHlsZS50b3AgPSBcIjUwcHhcIjtcclxuICAgIHNwbGl0dGVyLnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xyXG4gICAgc3BsaXR0ZXIuc3R5bGUuY3Vyc29yID0gXCJ3LXJlc2l6ZVwiO1xyXG4gICAgLy8gc3BsaXR0ZXIuc3R5bGVbXCJiYWNrZ3JvdW5kLWNvbG9yXCJdID0gXCJibGFja1wiO1xyXG4gICAgJGlkKCdmbG9hdHRhZycpLmFwcGVuZENoaWxkKHNwbGl0dGVyKTtcclxuXHJcbiAgICBmdW5jdGlvbiBzcGxpdHRlcl9yZXNpemUoZSkge1xyXG4gICAgICAgIGxldCBuZXdfd2lkdGggPSBNYXRoLm1pbihyb290LmNsaWVudFdpZHRoIC0gMTAwLCBNYXRoLm1heCgxMDAsIHJvb3QuY2xpZW50V2lkdGggLSBlLmNsaWVudFgpKTtcclxuICAgICAgICByaWdodF9wYW5lbC5zdHlsZS53aWR0aCA9IG5ld193aWR0aCArICdweCc7XHJcbiAgICAgICAgc3BsaXR0ZXIuc3R5bGUucmlnaHQgPSBuZXdfd2lkdGggKyAncHgnO1xyXG4gICAgICAgIFJPT1RfRUxFTUVOVC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tcGFyYW1fcGFuZWxfc2l6ZVwiLCBzcGxpdHRlci5zdHlsZS5yaWdodCk7XHJcbiAgICAgICAgdXBkYXRlQm94U3BsaXR0ZXJTaXplKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3BsaXR0ZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGUpID0+IHtcclxuICAgICAgICBzcGxpdHRlcl9pc19kb3duID0gdHJ1ZTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJvb3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChlKSA9PiB7XHJcbiAgICAgICAgc3BsaXR0ZXJfaXNfZG93biA9IGZhbHNlO1xyXG4gICAgICAgIHdyaXRlU3RvcmFnZSgnQUxFSV9SaWdodFBhbmVsV2lkdGgnLCByaWdodF9wYW5lbC5jbGllbnRXaWR0aCArICdweCcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcm9vdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChzcGxpdHRlcl9pc19kb3duKSBzcGxpdHRlcl9yZXNpemUoZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBzcGxpdHRlci5zdHlsZS5yaWdodCA9IGFsZWlTZXR0aW5ncy5yaWdodFBhbmVsU2l6ZTtcclxuICAgIFJPT1RfRUxFTUVOVC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tcGFyYW1fcGFuZWxfc2l6ZVwiLCBzcGxpdHRlci5zdHlsZS5yaWdodCk7XHJcbiAgICB3aW5kb3cuc3BsaXR0ZXIgPSBzcGxpdHRlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkVHJpZ2dlcklEcygpIHtcclxuICAgIGlmICghYWxlaVNldHRpbmdzLnNob3dUcmlnZ2VySURzKSByZXR1cm47XHJcblxyXG4gICAgbGV0IFNWVFRQID0gVkFMX1RBQkxFWyd0cmlnZ2VyX3R5cGUnXTtcclxuICAgIGZvciAobGV0IGkgaW4gU1ZUVFApIHtcclxuICAgICAgICBTVlRUUFtpXSA9IGkgKyBcIiBcIiArIFNWVFRQW2ldO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwYXRjaFNob3dIaWRlQnV0dG9uKCkge1xyXG4gICAgbGV0IG9nID0gd2luZG93LlNob3dIaWRlT2JqZWN0Qm94O1xyXG4gICAgd2luZG93LlNob3dIaWRlT2JqZWN0Qm94ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgb2coKTtcclxuICAgICAgICBsZXQgcnBhcmFtcyA9ICRpZChcInJwYXJhbXNcIik7XHJcbiAgICAgICAgbGV0IGhlaWdodE9mZnNldCA9IHt0cnVlOiAyNzAsIGZhbHNlOiAxNTV9W09iamVjdEJveF92aXNpYmxlXTtcclxuICAgICAgICBpZiAocnBhcmFtcyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGhlaWdodE9mZnNldCA9IE1hdGgucm91bmQocnBhcmFtcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyAxMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFdlIHRoZW4gc2V0IHZhcmlhYmxlIGFuZCBjYWxsIG9yaWdpbmFsIGZ1bmN0aW9uLlxyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tQUxFSV9SUEFSQU1TX0hFSUdIVFwiLCBgY2FsYygxMDB2aCAtICR7aGVpZ2h0T2Zmc2V0fXB4KWApO1xyXG4gICAgICAgIC8vb2coKTtcclxuICAgIH1cclxuICAgIFNob3dIaWRlT2JqZWN0Qm94KCk7XHJcbiAgICBTaG93SGlkZU9iamVjdEJveCgpOyAvLyBIYWNreSB3YXkgdG8gZml4IGJ1Z1xyXG59XHJcblxyXG53aW5kb3cuQUxFSV9DdXN0b21TbmFwcGluZyA9ICgpID0+IHtcclxuICAgIGxldCBzbmFwcGluZyA9IHByb21wdChcIkVudGVyIHNuYXBwaW5nOlwiLCBcIlwiKTtcclxuXHJcbiAgICBpZighc25hcHBpbmcpIHJldHVybjtcclxuICAgIGlmKGlzTmFOKE51bWJlcihzbmFwcGluZykpKSB7TmV3Tm90ZShcIkludmFsaWQgc25hcHBpbmcuXCIsIFwiI0ZGMDAwMFwiKTsgcmV0dXJufTtcclxuXHJcbiAgICBpZiAoc25hcHBpbmcgPCAwLjEpIHtcclxuICAgICAgICBzbmFwcGluZyA9IDAuMTtcclxuICAgICAgICBOZXdOb3RlKFwiQUxFSTogU25hcHBpbmcgY2FuJ3QgYmUgbGVzcyB0aGFuIDAuMVwiLCBcIiNGRjAwMDBcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzbmFwcGluZyA+IDEwMCkge1xyXG4gICAgICAgIHNuYXBwaW5nID0gMTAwO1xyXG4gICAgICAgIE5ld05vdGUoXCJBTEVJOiBTbmFwcGluZyBjYW4ndCBiZSBncmVhdGVyIHRoYW4gMTAwXCIsIFwiI0ZGMDAwMFwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgR3JpZFNuYXBwaW5nU2V0KE1hdGgucm91bmQoc25hcHBpbmcgKiAxMCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTbmFwcGluZ09wdGlvbnNfaGVscGVyKCkge1xyXG4gICAgLy8gUmVtb3ZlIGRlZmF1bHQgc25hcHBpbmcgb3B0aW9ucyBleGNlcHQgZm9yIFwiMVwiLCB3ZSB3aWxsIHJlcGxhY2UgaXQgdGhlbSBsYXRlclxyXG4gICAgJHF1ZXJ5KGBhW29ubW91c2Vkb3duPVwiR3JpZFNuYXBwaW5nU2V0KDUwKTtcIl1gKS5yZW1vdmUoKTtcclxuICAgICRxdWVyeShgYVtvbm1vdXNlZG93bj1cIkdyaWRTbmFwcGluZ1NldCgxMDApO1wiXWApLnJlbW92ZSgpO1xyXG5cclxuICAgIGxldCBuZXdIVE1MID0gXCJcIlxyXG4gICAgbGV0IHNuYXBwaW5nT3B0aW9ucyA9IFtcclxuICAgICAgICAxLCAyLCA1LFxyXG4gICAgICAgIDEwLCAyMCwgNDAsXHJcbiAgICAgICAgNTAsIDEwMCwgXCJDXCJcclxuICAgIF07XHJcblxyXG4gICAgZm9yIChsZXQgc25hcHBpbmdJbmRleCBpbiBzbmFwcGluZ09wdGlvbnMpIHtcclxuICAgICAgICBsZXQgc25hcHBpbmcgPSBzbmFwcGluZ09wdGlvbnNbc25hcHBpbmdJbmRleF07XHJcblxyXG4gICAgICAgIGlmICgoc25hcHBpbmdJbmRleCAlIDMgPT0gMCkgJiYgKHNuYXBwaW5nSW5kZXggIT0gMCkpIHtcclxuICAgICAgICAgICAgLy8gV2UgaGF2ZSB0byBicmVhayBpbnRvIG5ldyByb3cuXHJcbiAgICAgICAgICAgIG5ld0hUTUwgKz0gXCI8YnI+XCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIC8vIFNldCByZWxldmFudCBhdHRyaWJ1dGVzLlxyXG5cclxuICAgICAgICBpZiAoc25hcHBpbmcgIT0gXCJDXCIpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBzbmFwcGluZyAvIDEwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gXCJDXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdG9vbENsYXNzID0gXCJ0b29sX2J0blwiO1xyXG4gICAgICAgIGlmIChHUklEX1NOQVBQSU5HID09IHNuYXBwaW5nKSB7XHJcbiAgICAgICAgICAgIHRvb2xDbGFzcyA9IFwidG9vbF9idG4yXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXNuYXBwaW5nT3B0aW9ucy5pbmNsdWRlcyhHUklEX1NOQVBQSU5HKSAmJiBzbmFwcGluZyA9PSBcIkNcIikge1xyXG4gICAgICAgICAgICB0b29sQ2xhc3MgPSBcInRvb2xfYnRuMlwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBgJHt0b29sQ2xhc3N9IHRvb2xfd2lkYCk7XHJcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIndpZHRoOiAyMXB4O1wiKTtcclxuXHJcbiAgICAgICAgaWYgKHNuYXBwaW5nICE9IFwiQ1wiKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwib25tb3VzZWRvd25cIiwgYEdyaWRTbmFwcGluZ1NldCgke3NuYXBwaW5nfSk7IFJlbmRlcigpO2ApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwib25tb3VzZWRvd25cIiwgXCJBTEVJX0N1c3RvbVNuYXBwaW5nKCk7IFJlbmRlcigpO1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5ld0hUTUwgKz0gZWxlbWVudC5vdXRlckhUTUw7XHJcbiAgICAgICAgLy8gQWRkIHRvIG1haW4gSFRNTC5cclxuICAgIH1cclxuICAgIC8vIFJlcGxhY2Ugb3JpZ2luYWwgYDFgIHNuYXBwaW5nIHdpdGggbmV3IEhUTUwuXHJcbiAgICAkcXVlcnkoYGFbb25tb3VzZWRvd249XCJHcmlkU25hcHBpbmdTZXQoMTApO1wiXWApLm91dGVySFRNTCA9IG5ld0hUTUw7XHJcbn1cclxuXHJcbndpbmRvdy5BTEVJX1VwZGF0ZVJlbWF0Y2hVSURTZXR0aW5nID0gZnVuY3Rpb24odmFsdWUpIHtcclxuICAgIGlmKHZhbHVlICYmICFPQ01fTE9BREVEICYmIGFsZWlTZXR0aW5ncy5vY21FbmFibGVkKSBDcmVhdGVDb25uZWN0aW9uTWFwcGluZygpOyAvLyBUbyBjcmVhdGUgT0NNLlxyXG4gICAgaWYoIXZhbHVlICYmIE9DTV9MT0FERUQgJiYgYWxlaVNldHRpbmdzLm9jbUVuYWJsZWQpIENyZWF0ZUNvbm5lY3Rpb25NYXBwaW5nKCk7IC8vIFRvIGNsZWFyIE9DTS4gKEFzIGl0IG1pZ2h0IGJlIGFscmVhZHkgb3V0ZGF0ZWQgYnkgdGhlIHRpbWUgcmVtYXRjaCBVSUQgZ2V0cyBlbmFibGVkKVxyXG5cclxuICAgIGFsZWlTZXR0aW5ncy5yZW1hdGNoVUlEID0gdmFsdWU7XHJcbiAgICB3cml0ZVN0b3JhZ2UoXCJBTEVJX1JlbWFwVUlEXCIsIHZhbHVlKTtcclxuICAgIFVwZGF0ZVRvb2xzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFJlbWF0Y2hVSU9wdGlvbnNfaGVscGVyKCkge1xyXG4gICAgJHF1ZXJ5KGBhW29ubW91c2Vkb3duPVwiRXZhbFNldCgncGFyYW1fcGFuZWxfc2l6ZScsODAwKTtTYXZlQnJvd3NlclNldHRpbmdzKCk7VXBkYXRlQ1NTKCk7XCJdYCkucmVtb3ZlKCk7XHJcblxyXG4gICAgbGV0IHJlc3VsdCA9IGRvY3VtZW50LmV2YWx1YXRlKFwiLy9zcGFuW2NvbnRhaW5zKC4sICdQYXJhbScpXVwiLCBsZWZ0X3BhbmVsLCBudWxsLCBYUGF0aFJlc3VsdC5BTllfVFlQRSwgbnVsbCk7XHJcbiAgICByZXN1bHQuaXRlcmF0ZU5leHQoKTtcclxuICAgIHJlc3VsdC5pdGVyYXRlTmV4dCgpLmlubmVySFRNTCA9IFwiUmVtYXAgVUlEXCI7XHJcblxyXG4gICAgZm9yIChsZXQgdmFsdWUgb2YgW1t0cnVlLCBcIlllc1wiLCAwXSwgW2ZhbHNlLCBcIk5vXCIsIDIwMF1dKSB7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IHZhbHVlWzFdO1xyXG5cclxuICAgICAgICBsZXQgdG9vbENsYXNzID0gXCJ0b29sX2J0blwiO1xyXG4gICAgICAgIGlmKGFsZWlTZXR0aW5ncy5yZW1hdGNoVUlEID09IHZhbHVlWzBdKSB0b29sQ2xhc3MgPSBcInRvb2xfYnRuMlwiO1xyXG5cclxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGAke3Rvb2xDbGFzc30gdG9vbF93aWRgKTtcclxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwid2lkdGg6IDY0cHg7XCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwib25tb3VzZWRvd25cIiwgYEFMRUlfVXBkYXRlUmVtYXRjaFVJRFNldHRpbmcoJHt2YWx1ZVswXX0pYCk7XHJcblxyXG4gICAgICAgICRxdWVyeShgYVtvbm1vdXNlZG93bj1cIkV2YWxTZXQoJ3BhcmFtX3BhbmVsX3NpemUnLCR7dmFsdWVbMl19KTtTYXZlQnJvd3NlclNldHRpbmdzKCk7VXBkYXRlQ1NTKCk7XCJdYCkub3V0ZXJIVE1MID0gZWxlbWVudC5vdXRlckhUTUw7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG53aW5kb3cuQUxFSV9VcGRhdGVOYW1lUmVuZGVyU2V0dGluZyA9IGZ1bmN0aW9uKHN0YXR1cykgeyAvLyBUT0RPOiB3ZSBzaG91bGQgaGF2ZSBtaXhpbiBmdW5jdGlvbiBsb2wsIGNoZWNrOiA8IzEyNDU0NTQ5NTU0Nzc3MjkzODI+XHJcbiAgICB3aW5kb3cuRU5BQkxFX1RFWFQgPSBzdGF0dXM7XHJcbiAgICBhbGVpU2V0dGluZ3MucmVuZGVyT2JqZWN0TmFtZXMgPSBzdGF0dXM7XHJcbiAgICB3cml0ZVN0b3JhZ2UoXCJBTEVJX1JlbmRlck9iamVjdE5hbWVzXCIsIHN0YXR1cyk7XHJcbiAgICBVcGRhdGVUb29scygpO1xyXG4gICAgbmVlZF9yZWRyYXcgPSAxO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQcmV2aWV3TmFtZXNPcHRpb25zX2hlbHBlcigpIHtcclxuICAgIGxldCBwcmV2RWxlbWVudCA9ICRxdWVyeShgYVtvbm1vdXNlZG93bj1cIlNob3dUZXh0dXJlc1NldCh0cnVlKTtcIl1gKTtcclxuXHJcbiAgICBmdW5jdGlvbiBzcGFjZSgpIHtcclxuICAgICAgICBsZXQgc3BhY2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBzcGFjZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJxXCIpO1xyXG4gICAgICAgIHByZXZFbGVtZW50Lm91dGVySFRNTCArPSBzcGFjZXIub3V0ZXJIVE1MO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBoZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBoZWFkZXJUZXh0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZ3VpX3NlbF9pbmZvXCIpO1xyXG4gICAgaGVhZGVyVGV4dC5pbm5lckhUTUwgPSBcIk9iamVjdCBOYW1lc1wiO1xyXG5cclxuICAgIGxldCBidXR0b25IVE1MID0gXCJcIjtcclxuXHJcbiAgICBmdW5jdGlvbiBhZGRCdXR0b24odGV4dCwgc3RhdHVzKSB7XHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIGxldCBfY2xhc3MgPSBcInRvb2xfYnRuXCI7XHJcblxyXG4gICAgICAgIGlmKHN0YXR1cyA9PSBhbGVpU2V0dGluZ3MucmVuZGVyT2JqZWN0TmFtZXMpIF9jbGFzcyA9IFwidG9vbF9idG4yXCI7XHJcblxyXG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBgdG9vbF93aWQgJHtfY2xhc3N9YCk7XHJcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwid2lkdGg6IDMycHhcIik7XHJcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcIm9ubW91c2Vkb3duXCIsIGBBTEVJX1VwZGF0ZU5hbWVSZW5kZXJTZXR0aW5nKCR7c3RhdHVzfSk7YCk7XHJcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IHRleHQ7XHJcbiAgICAgICAgYnV0dG9uSFRNTCArPSBidXR0b24ub3V0ZXJIVE1MO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEJ1dHRvbihcIlNob3dcIiwgdHJ1ZSk7XHJcbiAgICBhZGRCdXR0b24oXCJIaWRlXCIsIGZhbHNlKTtcclxuXHJcbiAgICBwcmV2RWxlbWVudC5vdXRlckhUTUwgKz0gYDxicj48ZGl2IGNsYXNzPVwicVwiPjwvZGl2Pjxicj5gICsgaGVhZGVyVGV4dC5vdXRlckhUTUwgKyBcIjxicj5cIiArIGJ1dHRvbkhUTUw7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBvblRvb2xVcGRhdGUoKSB7XHJcbiAgICBhZGRTbmFwcGluZ09wdGlvbnNfaGVscGVyKCk7XHJcbiAgICBhZGRSZW1hdGNoVUlPcHRpb25zX2hlbHBlcigpO1xyXG4gICAgYWRkUHJldmlld05hbWVzT3B0aW9uc19oZWxwZXIoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGF0Y2hVcGRhdGVUb29scygpIHtcclxuICAgIGxldCB1dCA9IFVwZGF0ZVRvb2xzO1xyXG4gICAgd2luZG93LlVwZGF0ZVRvb2xzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdXQoKTtcclxuICAgICAgICBvblRvb2xVcGRhdGUoKTtcclxuICAgIH1cclxuICAgIFVwZGF0ZVRvb2xzKCk7XHJcbiAgICBhbGVpTG9nKERFQlVHLCBcIlBhdGNoZWQgdXBkYXRlVG9vbHMuXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0cnlUb051bWJlcih4KSB7XHJcbiAgICBpZiAoIWlzTmFOKE51bWJlcih4KSkpIHtcclxuICAgICAgICByZXR1cm4gTnVtYmVyKHgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4geDtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0WE1MKHhtbCkge1xyXG4gICAgeG1sID0gXCI8bWFwPlwiICsgeG1sLnJlcGxhY2VBbGwoXCImXCIsIFwiW19fQW1wXVwiKSArIFwiPC9tYXA+XCI7XHJcblxyXG4gICAgbGV0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcclxuICAgIGxldCBtYXAgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHhtbCwgXCJhcHBsaWNhdGlvbi94bWxcIik7XHJcbiAgICBsZXQgb2JqZWN0cyA9IG1hcC5xdWVyeVNlbGVjdG9yQWxsKFwiKlwiKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IG9iamVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgb2JqZWN0ID0gb2JqZWN0c1tpXTtcclxuICAgICAgICBpZiAob2JqZWN0LnRhZ05hbWUgPT0gXCJtYXBcIikgY29udGludWU7XHJcblxyXG4gICAgICAgIGxldCBlbyA9IG5ldyBFKG9iamVjdC50YWdOYW1lKTtcclxuICAgICAgICBlby5wbSA9IHt9O1xyXG5cclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG9iamVjdC5hdHRyaWJ1dGVzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGxldCBuYW1lID0gb2JqZWN0LmF0dHJpYnV0ZXNbal0ubmFtZTtcclxuICAgICAgICAgICAgbGV0IHZhbHVlID0gb2JqZWN0LmF0dHJpYnV0ZXNbal0udmFsdWU7XHJcblxyXG4gICAgICAgICAgICBlby5wbVtuYW1lXSA9IHRyeVRvTnVtYmVyKHZhbHVlLnJlcGxhY2VBbGwoXCJbX19BbXBdXCIsIFwiJlwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlcy5wdXNoKGVvKTtcclxuICAgIH1cclxuXHJcbiAgICBuZWVkX3JlZHJhdyA9IDE7XHJcbiAgICBuZWVkX0dVSVBhcmFtc191cGRhdGUgPSAxO1xyXG59XHJcblxyXG5mdW5jdGlvbiBleHBvcnRYTUwoKSB7XHJcbiAgICBsZXQgZXhwb3J0U2VsZWN0aW9uID0gMDtcclxuICAgIGxldCBuZXdzdHIgPSBcIlwiO1xyXG4gICAgbGV0IGRvd25sb2FkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChlc1tpXS5zZWxlY3RlZCkge1xyXG4gICAgICAgICAgICBleHBvcnRTZWxlY3Rpb24gPSAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXhwb3J0U2VsZWN0aW9uKSB7XHJcbiAgICAgICAgaWYoIWNvbmZpcm0oXCJPbmx5IHNlbGVjdGlvbiB3aWxsIGJlIGV4cG9ydGVkLlwiKSkgcmV0dXJuO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGVzW2ldLnNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdzdHIgKz0gY29tcGlfb2JqKGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobWFwaWQpIHtcclxuICAgICAgICAgICAgZG93bmxvYWQuZG93bmxvYWQgPSBtYXBpZCArIFwiIChzZWxlY3Rpb24pLnhtbFwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvd25sb2FkLmRvd25sb2FkID0gXCJuZXdtYXAgKHNlbGVjdGlvbikueG1sXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlc1tpXS5leGlzdHMpIHtcclxuICAgICAgICAgICAgICAgIG5ld3N0ciArPSBjb21waV9vYmooaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtYXBpZCkge1xyXG4gICAgICAgICAgICBkb3dubG9hZC5kb3dubG9hZCA9IG1hcGlkICsgXCIueG1sXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZG93bmxvYWQuZG93bmxvYWQgPSBcIm5ld21hcC54bWxcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZG93bmxvYWQuaHJlZiA9IFwiZGF0YTp0ZXh0LFwiICsgZXNjYXBlKG5ld3N0cik7XHJcblxyXG4gICAgaWYgKG5ld3N0ciAhPSBcIlwiKSB7XHJcbiAgICAgICAgZG93bmxvYWQuaHJlZiA9IFwiZGF0YTp0ZXh0LFwiICsgZXNjYXBlKG5ld3N0cik7XHJcblxyXG4gICAgICAgIGRvd25sb2FkLmNsaWNrKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFsZXJ0KFwiTWFwIGlzIGVtcHR5LlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBkb3dubG9hZC5yZW1vdmUoKTtcclxufVxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNvbnN0IF9pZ25vcmVkS2V5cyA9IFtcclxuICAgIC8vIE51bWJlcnMgb2J2aW91c2x5IGNhbm5vdCBoYXZlIHRleHRzLlxyXG4gICAgXCJ4XCIsXHJcbiAgICBcInlcIixcclxuICAgIFwid1wiLFxyXG4gICAgXCJoXCIsXHJcbiAgICBcIm1heGNhbGxzXCIsXHJcbiAgICBcImNvbW1hbmRcIixcclxuICAgIFwidXBnXCIsXHJcbiAgICBcInRveFwiLFxyXG4gICAgXCJ0b3lcIixcclxuICAgIFwic3RhYlwiLFxyXG4gICAgXCJkYW1hZ2VcIixcclxuICAgIFwidVwiLFxyXG4gICAgXCJ2XCIsXHJcbiAgICBcInN4XCIsXHJcbiAgICBcInN5XCIsXHJcbiAgICBcInJcIixcclxuICAgIFwiZlwiLFxyXG4gICAgXCJwb3dlclwiLFxyXG4gICAgLy8gQm9vbGVhbnMgb2J2aW91c2x5IGNhbm5vdCBoYXZlIHRleHRzLlxyXG4gICAgXCJlbmFibGVkXCIsXHJcbiAgICBcImZsYXJlXCIsXHJcbiAgICAvLyBXZSBhcmUgb2J2aW91c2x5IG5vdCBnb2luZyB0byBjaGFuZ2UgVUlEXHJcbiAgICBcInVpZFwiLFxyXG4gICAgLy8gV2UgYXJlIG9idmlvdXNseSBub3QgZ29pbmcgdG8gY2hhbmdlIG1vZGVsc1xyXG4gICAgXCJndW5fbW9kZWxcIixcclxuICAgIFwibW9kZWxcIixcclxuXTtcclxuXHJcbi8qXHJcbiAqIFVVSURSX1JlcGxhY2VcclxuICogVGhpcyBpcyBmdW5jdGlvbiB0aGF0IGhhbmRsZXMgcmVwbGFjaW5nIG5hbWUgcGFydC5cclxuICogSXMgbWVhbnQgdG8gYmUgdXNlZCBpbiBVcGRhdGVVSURSZWZlcmVuY2VzIGJlbG93LlxyXG5cclxuICogQHBhcmFtICB7c3RyaW5nfSAgdmFsdWUgICAgVmFsdWUgdG8gYmUgcmVwbGFjZWQuXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gIG9sZE5hbWUgIFByZXZpb3VzIG5hbWUgdG8gYmUgcmVwbGFjZWQgZnJvbS5cclxuICogQHBhcmFtICB7c3RyaW5nfSAgbmV3TmFtZSAgTmV3IG5hbWUgdG8gYmUgcmVwbGFjZWQgdG8uXHJcbiovXHJcbmZ1bmN0aW9uIFVVSURSX1JlcGxhY2UodmFsdWUsIG9sZE5hbWUsIG5ld05hbWUpIHtcclxuICAgIGlmICgodHlwZW9mKHZhbHVlKSAhPT0gXCJzdHJpbmdcIikpIHJldHVybiB2YWx1ZTtcclxuICAgIGlmKHZhbHVlLmluZGV4T2Yob2xkTmFtZSkgPT09IC0xKSByZXR1cm4gdmFsdWU7XHJcbiAgICBpZih2YWx1ZSA9PSBvbGROYW1lKSByZXR1cm4gbmV3TmFtZTtcclxuXHJcbiAgICBsZXQgc3BsdCA9IHZhbHVlLnNwbGl0KFwiLFwiKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3BsdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBpdGVtID0gc3BsdFtpXTtcclxuICAgICAgICBpZiAoaXRlbS50cmltKCkgPT0gb2xkTmFtZSkge1xyXG4gICAgICAgICAgICBzcGx0W2ldID0gaXRlbS5yZXBsYWNlKG9sZE5hbWUsIG5ld05hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBzcGx0LmpvaW4oXCIsXCIpO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlVUlEUmVmZXJlbmNlcyhvbGROYW1lLCBuZXdOYW1lKSB7XHJcbiAgICBhbGVpTG9nKERFQlVHMiwgYFVwZGF0aW5nIFVJRCByZWZlcmVuY2VzIGZyb20gJHtBTlNJX0NZQU59JHtvbGROYW1lfSR7QU5TSV9SRVNFVH0gdG8gJHtBTlNJX0NZQU59JHtuZXdOYW1lfSR7QU5TSV9SRVNFVH1gKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgZWxlbWVudCA9IGVzW2ldO1xyXG4gICAgICAgIGlmICghZWxlbWVudC5leGlzdHMpIGNvbnRpbnVlO1xyXG4gICAgICAgIGxldCBwcm9wZXJ0aWVzID0gZWxlbWVudC5wbTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgZW50cnkgb2YgT2JqZWN0LmVudHJpZXMocHJvcGVydGllcykpIHtcclxuICAgICAgICAgICAgbGV0IGtleSA9IGVudHJ5WzBdO1xyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBlbnRyeVsxXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChfaWdub3JlZEtleXMuaW5kZXhPZihrZXkpICE9PSAtMSkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBpZihbXCJhZGRpdGlvbmFsUGFyYW1BXCIsIFwiYWRkaXRpb25hbFBhcmFtQlwiXS5pbmRleE9mKGtleSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGV4dGVuZGVkIGFjdGlvbi5cclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlW2ldID0gVVVJRFJfUmVwbGFjZSh2YWx1ZVtpXSwgb2xkTmFtZSwgbmV3TmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcHJvcGVydGllc1trZXldID0gVVVJRFJfUmVwbGFjZSh2YWx1ZSwgb2xkTmFtZSwgbmV3TmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgd2luZG93Lm5lZWRfR1VJUGFyYW1zX3VwZGF0ZSA9IHRydWU7XHJcbn1cclxuXHJcbi8qXHJcbiAqIF9fT0NNX0Vuc3VyZVZhbGlkUmVmZXJlbmNlc1xyXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBpbiBVcGRhdGVQaHlzaWNhbFBhcmFtKEFGVEVSIHBhcmFtZXRlciB3YXMgc2V0LikgdG8ga2VlcCBpbnRlZ3JpdHkgb2YgT0NNIChPYmplY3QgQ29ubmVjdGlvbiBNYXBwaW5nKVxyXG4gKiBFc3NlbnRpYWxseSBqdXN0IGEgZnVuY3Rpb24gbWFraW5nIHN1cmUgdGhlIHN0cnVjdHVyZSBpcyB2YWxpZCBvbiBlYWNoIHBhcmFtZXRlciBjaGFuZ2UuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RX0gICAgIG9iaiAgICBQQjIgT2JqZWN0IHRvIGVuc3VyZSB2YWxpZGl0eSBvZiByZWZlcmVuY2VzIG9mLlxyXG4qL1xyXG5mdW5jdGlvbiBfX09DTV9FbnN1cmVWYWxpZFJlZmVyZW5jZXMob2JqKSB7XHJcbiAgICBsZXQgb2NtID0gd2luZG93Lk9iamVjdENvbm5lY3Rpb25NYXBwaW5nO1xyXG4gICAgbGV0IHV0ZW0gPSB3aW5kb3cudWlkVG9FbGVtZW50TWFwO1xyXG5cclxuICAgIGxldCBwbSA9IG9iai5wbTtcclxuICAgIGlmKG9jbVtwbS51aWRdID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICBsZXQgbmV3UmVmZXJlbmNlcyA9IFtdO1xyXG4gICAgZnVuY3Rpb24gYWRkUmVmZXJlbmNlKHZhbHVlKSB7XHJcbiAgICAgICAgaWYobmV3UmVmZXJlbmNlcy5pbmRleE9mKHZhbHVlKSA9PT0gLTEpIG5ld1JlZmVyZW5jZXMucHVzaCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yKGxldCBrZXkgb2YgT2JqZWN0LmtleXMocG0pKSB7XHJcbiAgICAgICAgaWYoX19PQ01fQ0hFQ0tFRF9LRVlTLmluZGV4T2Yoa2V5KSA9PT0gLTEpIGNvbnRpbnVlO1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IHBtW2tleV07XHJcblxyXG4gICAgICAgIGlmKHV0ZW1bdmFsdWVdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgYWRkUmVmZXJlbmNlKHZhbHVlKTtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFRyaWdnZXJfSGFuZGxlUGFyYW1ldGVyKHRyaWdnZXIsIHBhcmFtZXRlcikge1xyXG4gICAgICAgIGlmKHR5cGVvZihwYXJhbWV0ZXIpICE9PSBcInN0cmluZ1wiKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmKHV0ZW1bcGFyYW1ldGVyXSAhPT0gdW5kZWZpbmVkKSB7IC8vIFNpbXBsZSBjYXNlIHdoZXJlIHBhcmFtZXRlciBpcyBzaW1wbHkgcmVmZXJlbmNlIHRvIG9iamVjdC5cclxuICAgICAgICAgICAgYWRkUmVmZXJlbmNlKHBhcmFtZXRlcik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIXBhcmFtZXRlci5pbmNsdWRlcyhcIixcIikpIHJldHVybjtcclxuICAgICAgICAvLyBBIGxpdHRsZSBjb21wbGV4IGNhc2Ugd2hlcmUgbXVsdGlwbGUgb2JqZWN0cyBhcmUgcmVmZXJlbmNlZFxyXG4gICAgICAgIC8vIEFzIGluIFBhcmFtZXRlciBCOiAjcmVnaW9uKjEsI3JlZ2lvbioyXHJcbiAgICAgICAgbGV0IHNwbHQgPSBwYXJhbWV0ZXIuc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgIGZvcihsZXQgdmFsdWUgb2Ygc3BsdCkge1xyXG4gICAgICAgICAgICBsZXQgdmFsID0gdmFsdWUudHJpbSgpO1xyXG4gICAgICAgICAgICBpZih1dGVtW3ZhbF0gIT09IHVuZGVmaW5lZCkgYWRkUmVmZXJlbmNlKHZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmKG9iai5fY2xhc3MgPT0gXCJ0cmlnZ2VyXCIpIHtcclxuICAgICAgICAvLyBWYW5pbGxhIHRyaWdnZXIgY2FzZSAoMTAgYWN0aW9ucywgZXh0ZW5kZWQgdHJpZ2dlcnMgd2lsbCBydW4gdGhpcyB0b28pXHJcbiAgICAgICAgZm9yKGxldCBpID0gMTsgaSA8IDExOyBpKyspIHtcclxuICAgICAgICAgICAgaWYocG1bYGFjdGlvbnNfJHtpfV90eXBlYF0gPT0gLTEpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZihwbVtgYWN0aW9uc18ke2l9X3R5cGVgXSA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcclxuICAgICAgICAgICAgVHJpZ2dlcl9IYW5kbGVQYXJhbWV0ZXIocG0udWlkLCBwbVtgYWN0aW9uc18ke2l9X3RhcmdldEFgXSk7XHJcbiAgICAgICAgICAgIFRyaWdnZXJfSGFuZGxlUGFyYW1ldGVyKHBtLnVpZCwgcG1bYGFjdGlvbnNfJHtpfV90YXJnZXRCYF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBFeHRlbmRlZCB0cmlnZ2Vycy5cclxuICAgICAgICBpZihwbS5leHRlbmRlZCAmJiBhbGVpU2V0dGluZ3MuZXh0ZW5kZWRUcmlnZ2Vycykge1xyXG4gICAgICAgICAgICBsZXQgYWN0aW9ucyA9IHBtLmFkZGl0aW9uYWxBY3Rpb25zO1xyXG4gICAgICAgICAgICBsZXQgcGFyYW1BID0gcG0uYWRkaXRpb25hbFBhcmFtQTtcclxuICAgICAgICAgICAgbGV0IHBhcmFtQiA9IHBtLmFkZGl0aW9uYWxQYXJhbUI7XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgYWN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYoYWN0aW9uc1tpXSA9PT0gLTEpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgVHJpZ2dlcl9IYW5kbGVQYXJhbWV0ZXIocG0udWlkLCBwYXJhbUFbaV0pO1xyXG4gICAgICAgICAgICAgICAgVHJpZ2dlcl9IYW5kbGVQYXJhbWV0ZXIocG0udWlkLCBwYXJhbUJbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxldCBvbGRSZWZlcmVuY2VzID0gb2NtW3BtLnVpZF1bXCJ0b1wiXTtcclxuICAgIC8vIGxldCBuZXdSZWZlcmVuY2VzXHJcbiAgICBmb3IobGV0IHJlZiBvZiBuZXdSZWZlcmVuY2VzKSB7XHJcbiAgICAgICAgaWYob2xkUmVmZXJlbmNlcy5pbmRleE9mKHJlZikgIT09IC0xKSBjb250aW51ZTsgLy8gTm8gY2hhbmdlLlxyXG4gICAgICAgIC8vIFRoaXMgd2Fzbid0IGluIG9sZCByZWZlcmVuY2UsIGJ1dCBpcyBub3csIHNvIGFkZGVkLlxyXG4gICAgICAgIF9fT0NNX0FkZFJlZmVyZW5jZShwbS51aWQsIHJlZik7XHJcbiAgICB9XHJcbiAgICBmb3IobGV0IHJlZiBvZiBvbGRSZWZlcmVuY2VzKSB7XHJcbiAgICAgICAgaWYobmV3UmVmZXJlbmNlcy5pbmRleE9mKHJlZikgIT09IC0xKSBjb250aW51ZTsgLy8gTm8gY2hhbmdlLlxyXG4gICAgICAgIC8vIFRoaXMgd2FzIGluIG9sZCByZWZlcmVuY2UsIGJ1dCBub3QgYW55bW9yZSwgc28gcmVtb3ZlZC5cclxuICAgICAgICBfX09DTV9SZW1vdmVSZWZlcmVuY2UocG0udWlkLCByZWYpO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiAgVGhpcyBmdW5jdGlvbiB1cGRhdGVzIHRoZSBhY3R1YWwgZW50aXR5IGNsYXNzJ3MgcG0gcHJvcGVydHkgYmFzZWQgb24gc2VsZWN0aW9uLlxyXG4gKiAgVGhpcyBmdW5jdGlvbiBpcyBpbnZva2VkIGZyb20gc2V0bGV0ZWRpdCgpLlxyXG4gKlxyXG4gKiAgQHBhcmFtIHsqfSAgICAgICAgICBwYXJhbW5hbWUgICAgICAgICAgICBQcm9wZXJ0eSB0byB1cGRhdGUgICBFZzogYWN0aW9uc18xX3R5cGVcclxuICogIEBwYXJhbSB7Kn0gICAgICAgICAgY2h2YWx1ZSAgICAgICAgICAgICAgVmFsdWUgdG8gdXBkYXRlIHdpdGggRWc6IDBcclxuICogIEBwYXJhbSB7Ym9vbGVhbn0gICAgdG9TaG93Tm90ZSAgICAgICAgICAgRGVmYXVsdCBwYXJhbWV0ZXIgKHRydWUpLiBJbmRpY2F0ZXMgd2hldGhlciB0byBzaG93IGNvbmZpcm1hdGlvbiBub3RlLlxyXG4gKi9cclxuZnVuY3Rpb24gVXBkYXRlUGh5c2ljYWxQYXJhbShwYXJhbW5hbWUsIGNodmFsdWUsIHRvU2hvd05vdGUgPSB0cnVlKSB7XHJcbiAgICBsY3ooKTtcclxuXHJcbiAgICB2YXIgbGF5ZXJfbWlzbWF0Y2ggPSBmYWxzZTtcclxuICAgIHZhciBsaXN0X2NoYW5nZXMgPSAnJztcclxuXHJcbiAgICAvLyBGaW5kcyBzZWxlY3Rpb24uXHJcbiAgICBsZXQgb2dFUyA9IHdpbmRvdy5lcztcclxuICAgIHdpbmRvdy5lcyA9IFNlbGVjdGVkT2JqZWN0cztcclxuICAgIGZvciAodmFyIGVsZW1zID0gMDsgZWxlbXMgPCBlcy5sZW5ndGg7IGVsZW1zKyspIHtcclxuICAgICAgICBpZiAoIWVzW2VsZW1zXS5leGlzdHMpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIGlmICghZXNbZWxlbXNdLnNlbGVjdGVkKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgaWYgKCFlc1tlbGVtc10ucG0uaGFzT3duUHJvcGVydHkocGFyYW1uYW1lKSAmJiAhZXNbZWxlbXNdLnBtW1wiZXh0ZW5kZWRcIl0pIGNvbnRpbnVlO1xyXG4gICAgICAgIGlmICghTWF0Y2hMYXllcihlc1tlbGVtc10pKSB7XHJcbiAgICAgICAgICAgIGxheWVyX21pc21hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBGb3IgZXh0ZW5kZWQgdHJpZ2dlcnMuXHJcbiAgICAgICAgLy8gRmluZCBhY3Rpb25fWFhfWVlZWSwgd2hlcmUgWFggaXMgdGhlIG51bWJlciByZXByZXNlbnRpbmcgdHJpZ2dlciBhY3Rpb24gMTIgZm9yIGV4YW1wbGUgYW5kIFlZWVkgaXMgZWl0aGVyIHRhcmdldEEsIHRhcmdldEIgb3IgdHlwZS5cclxuICAgICAgICBsZXQgcmVnZXggPSAvYWN0aW9uc18oXFxkKylfKHRhcmdldEF8dGFyZ2V0Qnx0eXBlKS9nO1xyXG4gICAgICAgIGxldCBtYXRjaCA9IEFycmF5LmZyb20ocGFyYW1uYW1lLm1hdGNoQWxsKHJlZ2V4KSlbMF07XHJcblxyXG4gICAgICAgIC8vIEZvciB1bmRvIGFuZCByZWRvLlxyXG4gICAgICAgIGxldCBsdXAgPSAodHlwZW9mIChwYXJhbW5hbWUpID09ICdzdHJpbmcnKSA/ICdcIicgKyBwYXJhbW5hbWUgKyAnXCInIDogcGFyYW1uYW1lO1xyXG4gICAgICAgIGNodmFsdWUgPSAodHlwZW9mIChjaHZhbHVlKSA9PSAnbnVtYmVyJyB8fCBjaHZhbHVlID09IDApID8gY2h2YWx1ZSA6IF9lbmNvZGVYTUxDaGFycyhgJHtjaHZhbHVlfWApO1xyXG5cclxuICAgICAgICAvLyBOb3QgYSB0cmlnZ2VyIG9yIGJlbG93IGFjdGlvbjEwIGFuZCBiZWxvdy4gUHJvY2VlZCB3aXRoIHRoZSB1c3VhbCBFcmljJ3MgaW1wbGVtZW50YXRpb24uXHJcbiAgICAgICAgaWYoIW1hdGNoIHx8IE51bWJlcihtYXRjaFsxXSkgLSAxMSA8IDApe1xyXG4gICAgICAgICAgICBsbmQoJ2VzWycgKyBlbGVtcyArICddLnBtWycgKyBsdXAgKyAnXSA9ICcgKyBlc1tlbGVtc10ucG1bcGFyYW1uYW1lXSArICc7Jyk7XHJcbiAgICAgICAgICAgIGxkbignZXNbJyArIGVsZW1zICsgJ10ucG1bJyArIGx1cCArICddID0gJyArIGNodmFsdWUgKyAnOycpO1xyXG5cclxuICAgICAgICAgICAgLy8gUmVtYXRjaCBVSURcclxuICAgICAgICAgICAgaWYoKHBhcmFtbmFtZSA9PSBcInVpZFwiKSAmJiBhbGVpU2V0dGluZ3MucmVtYXRjaFVJRCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG9sZE5hbWUgPSBlc1tlbGVtc10ucG1bcGFyYW1uYW1lXTsgLy8gTm90ZTogZG9uJ3QgZG8gdGhpcyBhZnRlciBnZXR0aW5nIG9yaWdpbmFsIEVTLCBvdGhlcndpc2UgaWQgaXNuJ3QgdmFsaWQgbG1hb1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmVzID0gb2dFUztcclxuICAgICAgICAgICAgICAgIC8vIE1ha2luZyBzdXJlIHdlIGtlZXAgbmFtZXMgdW5pcXVlIGZvciBPQ00gc3RydWN0dXJlXHJcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cudWlkVG9FbGVtZW50TWFwW2NodmFsdWVdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBOZXdOb3RlKGBBTEVJOiBPYmplY3Qgd2l0aCBuYW1lICR7Y2h2YWx1ZX0gYWxyZWFkeSBleGlzdHMsIGNvbnNpZGVyIG5hbWluZyBpdCBkaWZmZXJlbnRseS5gLCBcIiNGRkZGMDBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdXBkYXRlVUlEUmVmZXJlbmNlcyhvbGROYW1lLCBjaHZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihhbGVpU2V0dGluZ3Mub2NtRW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBvY20gPSB3aW5kb3cuT2JqZWN0Q29ubmVjdGlvbk1hcHBpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgb2NtW2NodmFsdWVdID0gb2NtW29sZE5hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBvY21bb2xkTmFtZV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHJlZGlyZWN0Q29ubmVjdGlvbnMob2JqLCBvbGROYW1lLCBuZXdOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IG9jbVtvYmpdW1widG9cIl0uaW5kZXhPZihvbGROYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaW5kZXggIT09IC0xKSBvY21bb2JqXVtcInRvXCJdW2luZGV4XSA9IG5ld05hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID0gb2NtW29ial1bXCJieVwiXS5pbmRleE9mKG9sZE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpbmRleCAhPT0gLTEpIG9jbVtvYmpdW1wiYnlcIl1baW5kZXhdID0gbmV3TmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgb2NtW2NodmFsdWVdW1wiYnlcIl0ubWFwKHYgPT4gcmVkaXJlY3RDb25uZWN0aW9ucyh2LCBvbGROYW1lLCBjaHZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgb2NtW2NodmFsdWVdW1widG9cIl0ubWFwKHYgPT4gcmVkaXJlY3RDb25uZWN0aW9ucyh2LCBvbGROYW1lLCBjaHZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgb2dFUyA9IHdpbmRvdy5lcztcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5lcyA9IFNlbGVjdGVkT2JqZWN0cztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYocGFyYW1uYW1lID09IFwiX19pZFwiKSB7XHJcbiAgICAgICAgICAgICAgICBOZXdOb3RlKGBBTEVJOiBDaGFuZ2luZyBPYmplY3QgSUQgZG9lcyBub3QgZG8gYW55dGhpbmcsIGRvbid0IGV4cGVjdCB0aGF0IHRvIGFwcGx5LmAsIFwiI0ZGRkZGRlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBTYXZlcyB0aGUgdmFsdWUgdG8gdGhlIGNsYXNzLlxyXG4gICAgICAgICAgICBlc1tlbGVtc10ucG1bcGFyYW1uYW1lXSA9IGNodmFsdWU7XHJcblxyXG4gICAgICAgICAgICBpZihwYXJhbW5hbWUgPT0gXCJfX3ByaW9yaXR5XCIpIHtcclxuICAgICAgICAgICAgICAgIEFwcGx5T2JqZWN0UHJvcGVydGllcyhlc1tlbGVtc10pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEhhbmRsaW5nIGV4dGVuZGVkIHRyaWdnZXIncyA+MTAgdHJpZ2dlciBhY3Rpb24uXHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gTnVtYmVyKG1hdGNoWzFdKSAtIDExOyAgICAgIC8vIGFjdGlvbl8xMV8uLi4gc3RhcnRzIGF0IGVsZW1lbnQgMC5cclxuXHJcbiAgICAgICAgICAgIGxldCBwcm9wZXJ0eU5hbWUgPSAnJztcclxuICAgICAgICAgICAgaWYobWF0Y2hbMl0gPT09IFwidHlwZVwiKXtcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5TmFtZSA9IFwiYWRkaXRpb25hbEFjdGlvbnNcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKG1hdGNoWzJdID09PSBcInRhcmdldEFcIil7XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWUgPSBcImFkZGl0aW9uYWxQYXJhbUFcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKG1hdGNoWzJdID09PSBcInRhcmdldEJcIil7XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWUgPSBcImFkZGl0aW9uYWxQYXJhbUJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgYWxlaUxvZyhXQVJOLCBcIlNvbWV0aGluZyB3ZW50IHdyb25nIHdpdGggcmVnZXguIFwiICsgbWF0Y2hbMl0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsbmQoYGVzW1wiJHtlbGVtc31cIl0ucG1bXCIke3Byb3BlcnR5TmFtZX1cIl1bJHtpbmRleH1dID0gJHtlc1tlbGVtc10ucG1bcHJvcGVydHlOYW1lXVtpbmRleF19O2ApO1xyXG4gICAgICAgICAgICBsZG4oYGVzW1wiJHtlbGVtc31cIl0ucG1bXCIke3Byb3BlcnR5TmFtZX1cIl1bJHtpbmRleH1dID0gJHtjaHZhbHVlfTtgKTtcclxuXHJcbiAgICAgICAgICAgIGVzW2VsZW1zXS5wbVtwcm9wZXJ0eU5hbWVdW2luZGV4XSA9IGNodmFsdWU7XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoYWxlaVNldHRpbmdzLm9jbUVuYWJsZWQpIF9fT0NNX0Vuc3VyZVZhbGlkUmVmZXJlbmNlcyhlc1tlbGVtc10pO1xyXG4gICAgICAgIGlmKHBhcmFtbmFtZSA9PSBcInVzZXNfdGltZXJcIikgeyAvLyBJIGRvIG5vdCBoYXZlIHRvIGRvIHRoaXMsIGJ1dCBpIHdpbGwgZm9yIGNvbnZlbmllbmNlXHJcbiAgICAgICAgICAgIGlmKFt0cnVlLCBcInRydWVcIl0uaW5kZXhPZihlc1tlbGVtc10ucG0udXNlc190aW1lcikgIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtX3R5cGVbUkVHSU9OX0VYRUNVVEVfUEFSQU1fSURdWzFdID0gXCJ0aW1lcitub25lXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbV90eXBlW1JFR0lPTl9FWEVDVVRFX1BBUkFNX0lEXVsxXSA9IFwidHJpZ2dlcitub25lXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmVlZF9HVUlQYXJhbXNfdXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxpc3RfY2hhbmdlcyArPSAnUGFyYW1ldGVyIFwiJyArIHBhcmFtbmFtZSArICdcIiBvZiBvYmplY3QgXCInICsgKGVzW2VsZW1zXS5wbS51aWQgIT0gbnVsbCA/IGVzW2VsZW1zXS5wbS51aWQgOiBlc1tlbGVtc10uX2NsYXNzKSArICdcIiB3YXMgc2V0IHRvIFwiJyArIGNodmFsdWUgKyAnXCI8YnI+JztcclxuICAgIH1cclxuXHJcbiAgICBuZWVkX3JlZHJhdyA9IHRydWU7XHJcblxyXG4gICAgaWYodG9TaG93Tm90ZSkge1xyXG4gICAgICAgIE5ld05vdGUoJ09wZXJhdGlvbiBjb21wbGV0ZTo8YnI+PGJyPicgKyBsaXN0X2NoYW5nZXMsIG5vdGVfcGFzc2l2ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGxheWVyX21pc21hdGNoKSB7XHJcbiAgICAgICAgTmV3Tm90ZSgnTm90ZTogU29tZSBjaGFuZ2VzIHdlcmVuXFwndCBtYWRlIGR1ZSB0byBtaXNzbWF0Y2ggb2YgYWN0aXZlIGxheWVyIGFuZCBjbGFzcyBvZiBzZWxlY3RlZCBvYmplY3RzJywgbm90ZV9uZXV0cmFsKTtcclxuICAgIH1cclxuICAgIGxmeihmYWxzZSk7XHJcbiAgICB3aW5kb3cuZXMgPSBvZ0VTO1xyXG59XHJcblxyXG5sZXQgaW1hZ2VDb250ZXh0TWFwID0ge307XHJcbmxldCBsYXN0X2VsZW1lbnQ7XHJcbmxldCBsYXN0X2xvZ2luO1xyXG53aW5kb3cuYWxlaUNvbnRleHRSZW5hbWVJbWFnZSA9IGZ1bmN0aW9uKGlkKSB7XHJcbiAgICB2YXIgdiA9IHByb21wdCgnTmV3IG5hbWU6JywgaW1hZ2VDb250ZXh0TWFwW2lkXSk7XHJcbiAgICBDbG9zZUltYWdlQ29udGV4dCgpO1xyXG4gICAgaWYgKCB2ICE9PSBudWxsICkge1xyXG4gICAgICAgIFNlcnZlclJlcXVlc3QoYGE9Z2V0X2ltYWdlcyZmb3JfY2xhc3M9JHtsYXN0X2Zvcl9jbGFzc30mc2V0X3RpdGxlX2Zvcj0ke2lkfSZ2YWx1ZT0ke3Z9YCwgXCJyZW5hbWVfaW1hZ2VcIik7XHJcbiAgICB9XHJcbn1cclxud2luZG93LmFsZWlDb250ZXh0RGVsZXRlSW1hZ2UgPSBmdW5jdGlvbihpZCkge1xyXG4gICAgbGV0IHYgPSBjb25maXJtKGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlICR7aW1hZ2VDb250ZXh0TWFwW2lkXX0gP2ApO1xyXG4gICAgQ2xvc2VJbWFnZUNvbnRleHQoKTtcclxuICAgIGlmICggdiApIHtcclxuICAgICAgICBsYXN0X2VsZW1lbnQuc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xyXG4gICAgICAgIFNlcnZlclJlcXVlc3QoYGE9Z2V0X2ltYWdlcyZmb3JfY2xhc3M9JHtsYXN0X2Zvcl9jbGFzc30mZGVsZXRlPSR7aWR9YCwgJ2RlbGV0ZV9pbWFnZScgKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gSW1hZ2VDb250ZXh0KGlkLCBlLCBvbGRfbmFtZSwgZWxlbWVudCwgbW9kZXJhdG9yX21lbnUsIGF3YWl0aW5nX2FwcHJvdmFsPWZhbHNlLCBsb2dpbj0nPycsIGFwcHJvdmVyPSc/JywgaXNfZmF2X21lbnUgPSBmYWxzZSkge1xyXG4gICAgaW1hZ2VDb250ZXh0TWFwW2lkXSA9IG9sZF9uYW1lO1xyXG4gICAgbGFzdF9lbGVtZW50ID0gZWxlbWVudDtcclxuICAgIGxhc3RfbG9naW4gPSBsb2dpbjtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB2YXIgaW1hZ2VfY29udGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWFnZV9jb250ZXh0Jyk7XHJcblxyXG4gICAgdmFyIHN0ciA9ICcnO1xyXG5cclxuICAgIGlmIChtb2RlcmF0b3JfbWVudSkge1xyXG4gICAgICAgIHN0ciArPSBgPGRpdiBvbmNsaWNrPVwiQ2xvc2VJbWFnZUNvbnRleHQoKTsgc2V0VGltZW91dCggZnVuY3Rpb24oKSB7IFNlcnZlclJlcXVlc3QoJ2E9Z2V0X2ltYWdlcyZmb3JfY2xhc3M9JytsYXN0X2Zvcl9jbGFzcysnJmFwcHJvdmVfZm9yPSR7aWR9JywgJ2FwcHJvdmVfaW1hZ2UnICk7IH0sIDEgKTtcIj5BcHByb3ZlIDxpbWcgc3JjPVwiLi4vaW1hZ2VzL2FwLnBuZ1wiIHdpZHRoPVwiMTFcIiBoZWlnaHQ9XCIxMVwiPjwvZGl2PmA7XHJcbiAgICAgICAgc3RyICs9IGA8ZGl2IG9uY2xpY2s9XCJDbG9zZUltYWdlQ29udGV4dCgpOyBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHsgU2VydmVyUmVxdWVzdCgnYT1nZXRfaW1hZ2VzJmZvcl9jbGFzcz0nK2xhc3RfZm9yX2NsYXNzKycmcmVzZXRfc3RhdHVzX2Zvcj0ke2lkfScsICdyZXNldF9hcHByb3ZhbF9pbWFnZScgKTsgfSwgMSApO1wiPlJlc2V0IGFwcHJvdmFsIHN0YXR1czwvZGl2PmA7XHJcbiAgICAgICAgc3RyICs9IGA8ZGl2IG9uY2xpY2s9XCJDbG9zZUltYWdlQ29udGV4dCgpOyBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHsgb3Blbl9hcHByb3ZlZF9kZWNvcl9tb2RlbCA9IHRydWU7IFNhdmVGaWx0ZXJpbmcoKTsgc2VhcmNoX3BocmFzZSA9ICcqYnlfbG9naW4qJytsYXN0X2xvZ2luOyBVcGRhdGVJbWFnZUxpc3QoKTsgfSwgMSApO1wiPlNlYXJjaCBmb3Igb3RoZXIgYXBwcm92ZWQgaW1hZ2VzIGZyb20gJnF1b3Q7JHtsb2dpbn0mcXVvdDs8L2Rpdj5gO1xyXG4gICAgICAgIHN0ciArPSBgPGRpdiBvbmNsaWNrPVwiXCIgc3R5bGU9XCJjb2xvcjpyZ2JhKDAsMCwwLDAuMylcIj5MYXN0IHN0YXR1cyBjaGFuZ2UgYnkgJHthcHByb3Zlcn08L2Rpdj5gO1xyXG4gICAgICAgIHN0ciArPSBgPGRpdiBvbmNsaWNrPVwiQ2xvc2VJbWFnZUNvbnRleHQoKTsgc2V0VGltZW91dCggZnVuY3Rpb24oKSB7IFNlcnZlclJlcXVlc3QoJ2E9Z2V0X2ltYWdlcyZmb3JfY2xhc3M9JytsYXN0X2Zvcl9jbGFzcysnJmRpc2FwcHJvdmVfZm9yX2FsbD0nK2xhc3RfbG9naW4sICdkaXNhcHByb3ZlX2ltYWdlJyApOyB9LCAxICk7XCI+RGlzYXBwcm92ZSBhbGwgdW5yZXZpZXdlZCBmcm9tICZxdW90OyR7bG9naW59JnF1b3Q7IDxpbWcgc3JjPVwiLi4vaW1hZ2VzL25vYXAucG5nXCIgd2lkdGg9XCIxMVwiIGhlaWdodD1cIjExXCI+PGltZyBzcmM9XCIuLi9pbWFnZXMvbm9hcC5wbmdcIiB3aWR0aD1cIjExXCIgaGVpZ2h0PVwiMTFcIj48aW1nIHNyYz1cIi4uL2ltYWdlcy9ub2FwLnBuZ1wiIHdpZHRoPVwiMTFcIiBoZWlnaHQ9XCIxMVwiPjwvZGl2PmA7XHJcbiAgICAgICAgc3RyICs9IGA8ZGl2IG9uY2xpY2s9XCJDbG9zZUltYWdlQ29udGV4dCgpOyBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHsgU2VydmVyUmVxdWVzdCgnYT1nZXRfaW1hZ2VzJmZvcl9jbGFzcz0nK2xhc3RfZm9yX2NsYXNzKycmZGlzYXBwcm92ZV9mb3I9JHtpZH0nLCAnZGlzYXBwcm92ZV9pbWFnZScgKTsgfSwgMSApO1wiPkRpc2FwcHJvdmUgPGltZyBzcmM9XCIuLi9pbWFnZXMvbm9hcC5wbmdcIiB3aWR0aD1cIjExXCIgaGVpZ2h0PVwiMTFcIj48L2Rpdj5gO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyggbG9naW4sIGN1cmxvZ2luICk7XHJcblxyXG4gICAgICAgIGlmIChsb2dpbiA9PSBjdXJsb2dpbiAmJiBhcHByb3ZlciAhPSAnIScpIHtcclxuICAgICAgICAgICAgc3RyICs9IGA8ZGl2IG9uY2xpY2s9XCJhbGVpQ29udGV4dFJlbmFtZUltYWdlKCR7aWR9KVwiPlJlbmFtZTwvZGl2PmA7IC8vIFdlIG92ZXJ3cml0ZSByZW5hbWUgYWN0aW9uIHRvIG91ciBvd24uXHJcblxyXG4gICAgICAgICAgICBpZiAoYXdhaXRpbmdfYXBwcm92YWwpIHtcclxuICAgICAgICAgICAgICAgIHN0ciArPSBgPGRpdiBvbmNsaWNrPVwiXCIgc3R5bGU9XCJjb2xvcjpyZ2JhKDAsMCwwLDAuMylcIj5SZXF1ZXN0IEFwcHJvdmFsIChhbHJlYWR5IGRvbmUpPC9kaXY+YDtcclxuICAgICAgICAgICAgICAgIHN0ciArPSBgPGRpdiBvbmNsaWNrPVwiQ2xvc2VJbWFnZUNvbnRleHQoKTsgIHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkgeyBTZXJ2ZXJSZXF1ZXN0KCdhPWdldF9pbWFnZXMmZm9yX2NsYXNzPScrbGFzdF9mb3JfY2xhc3MrJyZkZWF3YWl0X2FwcHJvdmFsX2Zvcj0ke2lkfScsICdhd2FpdF9hcHByb3ZhbF9zdGF0dXMnICk7IH0sIDEgKTsgXCI+RXhjbHVkZSBmcm9tIGFwcHJvdmFsIHJldmlldyBxdWV1ZTwvZGl2PmA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob2xkX25hbWUgPT0gJ1VudGl0bGVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0ciArPSBgPGRpdiBvbmNsaWNrPVwiYWxlcnQoJ1Byb3BlciBuYW1lIHJlcXVpcmVkIGZvciBjdXN0b20gaW1hZ2UgLSB5b3Ugd2lsbCBub3QgYmUgYXZhaWxhYmxlIHRvIGNoYW5nZSBuYW1lIG9uY2UgaW1hZ2UgaXMgYXBwcm92ZWQuJyk7XCIgc3R5bGU9XCJjb2xvcjpyZ2JhKDAsMCwwLDAuMylcIj5SZXF1ZXN0IEFwcHJvdmFsIChwcm9wZXIgbmFtZSByZXF1aXJlZCk8L2Rpdj5gO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzdHIgKz0gYDxkaXYgb25jbGljaz1cIkNsb3NlSW1hZ2VDb250ZXh0KCk7ICBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHsgU2VydmVyUmVxdWVzdCgnYT1nZXRfaW1hZ2VzJmZvcl9jbGFzcz0nK2xhc3RfZm9yX2NsYXNzKycmYXdhaXRfYXBwcm92YWxfZm9yPSR7aWR9JywgJ2F3YWl0X2FwcHJvdmFsX3N0YXR1cycgKTsgfSwgMSApOyBcIj5SZXF1ZXN0IEFwcHJvdmFsIDxpbWcgc3JjPVwiLi4vaW1hZ2VzL2FwLnBuZ1wiIHdpZHRoPVwiMTFcIiBoZWlnaHQ9XCIxMVwiPjwvZGl2PmA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzdHIgKz0gYDxkaXYgb25jbGljaz1cIlwiIHN0eWxlPVwiY29sb3I6cmdiYSgwLDAsMCwwLjMpXCI+RXhjbHVkZSBmcm9tIGFwcHJvdmFsIHJldmlldyBxdWV1ZSAobm90IGluIHF1ZXVlKTwvZGl2PmA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHN0ciArPSBgPGRpdiBvbmNsaWNrPVwiYWxlaUNvbnRleHREZWxldGVJbWFnZSgke2lkfSlcIj5EZWxldGUgPGltZyBzcmM9XCIuLi9pbWFnZXMvbm9hcC5wbmdcIiB3aWR0aD1cIjExXCIgaGVpZ2h0PVwiMTFcIj48L2Rpdj5gO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN0ciArPSBgPGRpdiBvbmNsaWNrPVwiQ2xvc2VJbWFnZUNvbnRleHQoKTsgc2V0VGltZW91dCggZnVuY3Rpb24oKSB7IG9wZW5fYXBwcm92ZWRfZGVjb3JfbW9kZWwgPSB0cnVlOyBTYXZlRmlsdGVyaW5nKCk7IHNlYXJjaF9waHJhc2UgPSAnKmJ5X2xvZ2luKicrbGFzdF9sb2dpbjsgVXBkYXRlSW1hZ2VMaXN0KCk7IH0sIDEgKTtcIj5TZWFyY2ggZm9yIG90aGVyIGFwcHJvdmVkIGltYWdlcyBmcm9tICZxdW90OyR7bG9naW59JnF1b3Q7PC9kaXY+YDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0ciArPSBgPHNwYW4gc3R5bGU9XCJkaXNwbGF5OmJsb2NrO1wiPiZuYnNwOzwvc3Bhbj5gO1xyXG4gICAgICAgIGlmIChpc19mYXZfbWVudSkge1xyXG4gICAgICAgICAgICBzdHIgKz0gYDxkaXYgb25jbGljaz1cIkNsb3NlSW1hZ2VDb250ZXh0KCk7ICBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHsgU2VydmVyUmVxdWVzdCgnYT1nZXRfaW1hZ2VzJmZvcl9jbGFzcz0nK2xhc3RfZm9yX2NsYXNzKycmZmF2b3JpdGVfZGVsPSR7aWR9JywgJ2Zhdm9yaXRlX3N0YXR1cycgKTsgfSwgMSApOyBcIj5SZW1vdmUgZnJvbSBmYXZvcml0ZXM8L2Rpdj5gO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN0ciArPSBgPGRpdiBvbmNsaWNrPVwiQ2xvc2VJbWFnZUNvbnRleHQoKTsgIHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkgeyBTZXJ2ZXJSZXF1ZXN0KCdhPWdldF9pbWFnZXMmZm9yX2NsYXNzPScrbGFzdF9mb3JfY2xhc3MrJyZmYXZvcml0ZV9hZGQ9JHtpZH0nLCAnZmF2b3JpdGVfc3RhdHVzJyApOyB9LCAxICk7IFwiPkFkZCB0byBmYXZvcml0ZXM8L2Rpdj5gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaW1hZ2VfY29udGV4dC5pbm5lckhUTUwgPSBzdHI7XHJcblxyXG4gICAgaW1hZ2VfY29udGV4dC5zdHlsZS5sZWZ0ID0gZS5jbGllbnRYO1xyXG4gICAgaW1hZ2VfY29udGV4dC5zdHlsZS50b3AgPSBlLmNsaWVudFk7XHJcbiAgICBpbWFnZV9jb250ZXh0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuICAgIGltYWdlX2NvbnRleHRfY2FuY2VsX3BhZC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbmRPYmplY3RzKG5hbWUpIHtcclxuICAgIGxldCBleGFjdCA9IGNvbmZpcm0oXCJFeGFjdCBuYW1lP1wiKTtcclxuICAgIGxldCBub3RGb3VuZCA9IDE7XHJcblxyXG4gICAgZnVuY3Rpb24gcHJlZChkKSB7XHJcbiAgICAgICAgaWYgKGV4YWN0KSB7cmV0dXJuIGQgPT0gbmFtZTt9XHJcbiAgICAgICAgZWxzZSB7cmV0dXJuIGQuaW5jbHVkZXMobmFtZSl9XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGVzW2ldLnNlbGVjdGVkID0gMDtcclxuXHJcbiAgICAgICAgaWYgKGVzW2ldLnBtLnVpZCkge1xyXG4gICAgICAgICAgICBpZiAocHJlZChlc1tpXS5wbS51aWQpICYmIE1hdGNoTGF5ZXIoZXNbaV0pKSB7XHJcbiAgICAgICAgICAgICAgICBlc1tpXS5zZWxlY3RlZCA9IDE7XHJcbiAgICAgICAgICAgICAgICBub3RGb3VuZCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmVlZF9HVUlQYXJhbXNfdXBkYXRlID0gMTtcclxuICAgIG5lZWRfcmVkcmF3ID0gMTtcclxuXHJcbiAgICByZXR1cm4gbm90Rm91bmQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJvdGF0ZU9iamVjdHMoKSB7XHJcbiAgICBsZXQgc2VsZWN0ZWQgPSBTZWxlY3RlZE9iamVjdHM7XHJcbiAgICBsZXQgZGlzdFggPSBbXTtcclxuICAgIGxldCBkaXN0WSA9IFtdO1xyXG4gICAgbGV0IG1pblg7XHJcbiAgICBsZXQgbWluWTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdGVkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkW2ldLnBtLncgJiYgc2VsZWN0ZWRbaV0ucG0uaCkge1xyXG4gICAgICAgICAgICBsZXQgc2F2ZSA9IHNlbGVjdGVkW2ldLnBtLnc7XHJcblxyXG4gICAgICAgICAgICBzZWxlY3RlZFtpXS5wbS53ID0gc2VsZWN0ZWRbaV0ucG0uaDtcclxuICAgICAgICAgICAgc2VsZWN0ZWRbaV0ucG0uaCA9IHNhdmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXN0WC5wdXNoKHNlbGVjdGVkW2ldLnBtLngpO1xyXG4gICAgICAgIGRpc3RZLnB1c2goc2VsZWN0ZWRbaV0ucG0ueSk7XHJcbiAgICB9XHJcblxyXG4gICAgbWluWCA9IE1hdGgubWluKC4uLmRpc3RYKTtcclxuICAgIG1pblkgPSBNYXRoLm1pbiguLi5kaXN0WSk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3RlZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGRpc3RYW2ldIC09IG1pblg7XHJcbiAgICAgICAgZGlzdFlbaV0gLT0gbWluWTtcclxuXHJcbiAgICAgICAgc2VsZWN0ZWRbaV0ucG0ueCA9IG1pblggKyBkaXN0WVtpXTtcclxuICAgICAgICBzZWxlY3RlZFtpXS5wbS55ID0gbWluWSArIGRpc3RYW2ldO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBSYW5kb21pemVOYW1lKG9sZE5hbWUpIHtcclxuICAgIGxldCB0YWtlblVpZHMgPSBlcy5maWx0ZXIoZSA9PiBlLmV4aXN0cykubWFwKG8gPT4gby5wbS51aWQpO1xyXG4gICAgbGV0IGFjdHVhbE5hbWUgPSBvbGROYW1lO1xyXG4gICAgaWYob2xkTmFtZS5pbmRleE9mKFwiKlwiKSAhPT0gLTEpIGFjdHVhbE5hbWUgPSBvbGROYW1lLnNsaWNlKDAsIG9sZE5hbWUuaW5kZXhPZihcIipcIikpO1xyXG5cclxuICAgIGxldCBjdXJyZW50ID0gMTtcclxuICAgIHdoaWxlKHRha2VuVWlkcy5pbmRleE9mKGAke2FjdHVhbE5hbWV9KiR7Y3VycmVudH1gKSAhPT0gLTEpIGN1cnJlbnQrKztcclxuXHJcbiAgICByZXR1cm4gYCR7YWN0dWFsTmFtZX0qJHtjdXJyZW50fWA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhdGNoUmFuZG9taXplTmFtZSgpIHtcclxuICAgIHdpbmRvdy5SYW5kb21pemVOYW1lID0gUmFuZG9taXplTmFtZTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGF0Y2hBbGxvd2VkQ2hhcmFjdGVycygpIHtcclxuICAgIGFsbG93ZWRfc3RyaW5nX2NoYXJzICs9IFwiPD5cIjtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UnVsZUJ5U2VsZWN0b3Ioc2VsZWN0b3IpIHtcclxuICAgIGxldCBydWxlcyA9IGRvY3VtZW50LnN0eWxlU2hlZXRzWzBdLnJ1bGVzO1xyXG4gICAgbGV0IHJ1bGU7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBydWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChydWxlc1tpXS5zZWxlY3RvclRleHQgPT0gc2VsZWN0b3IpIHtcclxuICAgICAgICAgICAgcnVsZSA9IHJ1bGVzW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcnVsZTtcclxufVxyXG5cclxud2luZG93LmJsYWNrVGhlbWVVbmRvcyA9IFtdO1xyXG5cclxuZnVuY3Rpb24gc2V0U3R5bGUoc2VsZWN0b3IsIHN0eWxlLCB2YWx1ZSwgaXNVbmRvID0gZmFsc2UpIHtcclxuICAgIGlmKCFpc1VuZG8pIGJsYWNrVGhlbWVVbmRvcy5wdXNoKFtcclxuICAgICAgICBzZWxlY3RvcixcclxuICAgICAgICBzdHlsZSxcclxuICAgICAgICBnZXRSdWxlQnlTZWxlY3RvcihzZWxlY3Rvcikuc3R5bGVbc3R5bGVdXHJcbiAgICBdKTtcclxuICAgIGdldFJ1bGVCeVNlbGVjdG9yKHNlbGVjdG9yKS5zdHlsZVtzdHlsZV0gPSB2YWx1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gVW5kb0JsYWNrVGhlbWUoKSB7XHJcbiAgICBUaGVtZVNldCgwKTtcclxuICAgIGZvcihsZXQgdW5kbyBvZiBibGFja1RoZW1lVW5kb3MpIHtcclxuICAgICAgICBzZXRTdHlsZSh1bmRvWzBdLCB1bmRvWzFdLCB1bmRvWzJdLCB0cnVlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYmxhY2tUaGVtZSgpIHtcclxuICAgIFRoZW1lU2V0KDApO1xyXG5cclxuICAgIHdpbmRvdy5USEVNRSA9IDQ7XHJcblxyXG4gICAgc2V0U3R5bGUoXCIudG9wdWlcIiwgXCJiYWNrZ3JvdW5kU2l6ZVwiLCBcIjBweFwiKTsgLy8gcmVtb3ZlcyB0b3AgdWkgZGV0YWlsXHJcbiAgICBzZXRTdHlsZShcIi5sZWZ0dWlcIiwgXCJiYWNrZ3JvdW5kU2l6ZVwiLCBcIjBweFwiKTsgLy8gcmVtb3ZlcyBsZWZ0IHVpIGRldGFpbFxyXG4gICAgc2V0U3R5bGUoXCIucmlnaHR1aVwiLCBcImJhY2tncm91bmRTaXplXCIsIFwiMHB4XCIpOyAvLyByZW1vdmVzIHJpZ2h0IHVpIGRldGFpbFxyXG4gICAgc2V0U3R5bGUoXCIudG9wdWlcIiwgXCJiYWNrZ3JvdW5kQ29sb3JcIiwgXCIjMEEwQTBBXCIpO1xyXG4gICAgc2V0U3R5bGUoXCIubGVmdHVpXCIsIFwiYmFja2dyb3VuZENvbG9yXCIsIFwiIzBBMEEwQVwiKTtcclxuICAgIHNldFN0eWxlKFwiLnJpZ2h0dWlcIiwgXCJiYWNrZ3JvdW5kQ29sb3JcIiwgXCIjMEEwQTBBXCIpO1xyXG4gICAgc2V0U3R5bGUoXCIuZmllbGRfYnRuXCIsIFwiYmFja2dyb3VuZENvbG9yXCIsIFwiIzFFMUUxRVwiKTtcclxuICAgIHNldFN0eWxlKFwiLnRvb2xfYnRuXCIsIFwiYmFja2dyb3VuZENvbG9yXCIsIFwiIzFFMUUxRVwiKTtcclxuICAgIHNldFN0eWxlKFwiLnRvb2xfYnRuXCIsIFwiYm9yZGVyXCIsIFwiXCIpOyAvLyB0b29sIGJ1dHRvbiBvdXRsaW5lXHJcbiAgICBzZXRTdHlsZShcIi50b29sX2J0bjJcIiwgXCJiYWNrZ3JvdW5kQ29sb3JcIiwgXCIjNDU2NkFCXCIpO1xyXG4gICAgc2V0U3R5bGUoXCIudG9vbF9idG4yXCIsIFwiYm9yZGVyXCIsIFwiMXB4IHNvbGlkICNGRkZGRkYyMFwiKTtcclxuICAgIHNldFN0eWxlKFwiLmZpZWxkX2J0blwiLCBcImNvbG9yXCIsIFwiI0ZGRkZGRkQwXCIpO1xyXG4gICAgc2V0U3R5bGUoXCIudG9vbF9idG5cIiwgXCJjb2xvclwiLCBcIiNGRkZGRkZEMFwiKTtcclxuICAgIHNldFN0eWxlKFwiLnRvb2xfYnRuMlwiLCBcImNvbG9yXCIsIFwiI0ZGRkZGRkQwXCIpO1xyXG4gICAgc2V0U3R5bGUoXCIuZ3VpX3NlbF9pbmZvXCIsIFwiY29sb3JcIiwgXCIjRkZGRkZGRDBcIik7XHJcbiAgICBzZXRTdHlsZShcIi5jXCIsIFwiY29sb3JcIiwgXCIjRkZGRkZGMjBcIik7XHJcbiAgICBzZXRTdHlsZShcIi5wYTFcIiwgXCJjb2xvclwiLCBcIiM4MDgwODBcIik7XHJcbiAgICBzZXRTdHlsZShcIi5wYTJcIiwgXCJjb2xvclwiLCBcIiNGRkZGRkZEMFwiKTtcclxuICAgIHNldFN0eWxlKFwiLmZpZWxkX2Rpc19sZWZ0XCIsIFwiY29sb3JcIiwgXCIjRkZGRkZGRDBcIik7XHJcbiAgICBzZXRTdHlsZShcIi5maWVsZF9kaXNfcmlnaHRcIiwgXCJjb2xvclwiLCBcIiNGRkZGRkZEMFwiKTtcclxuICAgIHNldFN0eWxlKFwiLnBfdTFcIiwgXCJib3JkZXJcIiwgXCJcIik7XHJcbiAgICBzZXRTdHlsZShcIi5wX3UyXCIsIFwiYm9yZGVyXCIsIFwiXCIpO1xyXG4gICAgc2V0U3R5bGUoXCIucGExXCIsIFwiYmFja2dyb3VuZENvbG9yXCIsIFwiIzEwMTAxMFwiKTtcclxuICAgIHNldFN0eWxlKFwiLnBhMlwiLCBcImJhY2tncm91bmRDb2xvclwiLCBcIiMxQjFCMUJcIik7XHJcbiAgICBzZXRTdHlsZShcIi5vYmpib3hcIiwgXCJiYWNrZ3JvdW5kQ29sb3JcIiwgXCIjMTMxMzEzXCIpO1xyXG4gICAgc2V0U3R5bGUoXCIuZmllbGRfZGlzX2xlZnRcIiwgXCJiYWNrZ3JvdW5kQ29sb3JcIiwgXCIjMUUxRTFFXCIpO1xyXG4gICAgc2V0U3R5bGUoXCIuZmllbGRfZGlzX3JpZ2h0XCIsIFwiYmFja2dyb3VuZENvbG9yXCIsIFwiIzEzMTMxM1wiKTtcclxuICAgIHNldFN0eWxlKFwiLnNlbGxpbmUxXCIsIFwiYmFja2dyb3VuZENvbG9yXCIsIFwiIzdBMTMxNFwiKTsgLy8gc2VsZWN0ZWQgb2JqZWN0L2N1cnJlbnQgbWFwXHJcbiAgICBzZXRTdHlsZShcIi50b29sX2J0bjpob3ZlclwiLCBcImJhY2tncm91bmRDb2xvclwiLCBcIiM1ZjhkZDNcIik7XHJcbiAgICBzZXRTdHlsZShcIi50b29sX2J0bjpob3ZlclwiLCBcImJvcmRlclwiLCBcIjFweCBzb2xpZCAjRkZGRkZGMjBcIik7XHJcbiAgICBzZXRTdHlsZShcIi50b29sX2J0bjpob3ZlclwiLCBcImNvbG9yXCIsIFwiI0ZGRkZGRkQwXCIpO1xyXG4gICAgc2V0U3R5bGUoXCIudG9vbF9idG4yOmhvdmVyXCIsIFwiYmFja2dyb3VuZENvbG9yXCIsIFwiIzUwNzdDNFwiKTtcclxuICAgIHNldFN0eWxlKFwiLnRvb2xfYnRuMjpob3ZlclwiLCBcImJvcmRlclwiLCBcIjFweCBzb2xpZCAjRkZGRkZGMjBcIik7XHJcbiAgICBzZXRTdHlsZShcIi50b29sX2J0bjI6aG92ZXJcIiwgXCJjb2xvclwiLCBcIiNGRkZGRkZEMFwiKTtcclxuICAgIHNldFN0eWxlKFwiLmZpZWxkX2J0bjpob3ZlclwiLCBcImJhY2tncm91bmRDb2xvclwiLCBcIiMzNTM1MzVcIik7XHJcbiAgICBzZXRTdHlsZShcIi5maWVsZF9idG46aG92ZXJcIiwgXCJjb2xvclwiLCBcIiNGRkZGRkZEMFwiKTtcclxuICAgIHNldFN0eWxlKFwiLnRvb2xfYnRuOmFjdGl2ZVwiLCBcImJhY2tncm91bmRDb2xvclwiLCBcIiMxNTE1MTVcIik7IC8vIG9iamVjdCBsaXN0IGhvbGQgZmlsbFxyXG4gICAgc2V0U3R5bGUoXCIudG9vbF9idG46YWN0aXZlXCIsIFwiYm9yZGVyXCIsIFwiMXB4IHNvbGlkICNGRkZGRkYyMFwiKTsgLy8gb2JqZWN0IGxpc3QgaG9sZCBvdXRsaW5lXHJcbiAgICBzZXRTdHlsZShcIi50b29sX2J0bjphY3RpdmVcIiwgXCJjb2xvclwiLCBcIiNGRkZGRkZEMFwiKTsgLy8gb2JqZWN0IGxpc3QgaG9sZCB0ZXh0XHJcbiAgICBzZXRTdHlsZShcIi50b29sX2J0bjI6YWN0aXZlXCIsIFwiYmFja2dyb3VuZENvbG9yXCIsIFwiIzM5NTU4Q1wiKTsgLy8gdG9nZ2xlZCBhY3RpdmUgYnV0dG9uIGhvbGQgZmlsbFxyXG4gICAgc2V0U3R5bGUoXCIudG9vbF9idG4yOmFjdGl2ZVwiLCBcImJvcmRlclwiLCBcIjFweCBzb2xpZCAjRkZGRkZGMjBcIik7IC8vIHRvZ2dsZWQgYWN0aXZlIGJ1dHRvbiBob2xkIG91dGxpbmVcclxuICAgIHNldFN0eWxlKFwiLnRvb2xfYnRuMjphY3RpdmVcIiwgXCJjb2xvclwiLCBcIiNGRkZGRkZEMFwiKTsgLy8gdG9nZ2xlZCBhY3RpdmUgYnV0dG9uIGhvbGQgdGV4dFxyXG4gICAgc2V0U3R5bGUoXCIuZmllbGRfYnRuOmFjdGl2ZVwiLCBcImJhY2tncm91bmRDb2xvclwiLCBcIiMxNTE1MTVcIik7IC8vIGZpZWxkIGJ1dHRvbiBob2xkIGZpbGxcclxuICAgIHNldFN0eWxlKFwiLmZpZWxkX2J0bjphY3RpdmVcIiwgXCJjb2xvclwiLCBcIiNDQ0NcIik7IC8vIGZpZWxkIGJ1dHRvbiBob2xkIHRleHRcclxuICAgIHNldFN0eWxlKFwiI21ydGl0bGVcIiwgXCJiYWNrZ3JvdW5kQ29sb3JcIiwgXCIjMUUxRTFFXCIpOyAvLyBtYXAgbGlzdCBvdmVyaGVhZFxyXG4gICAgc2V0U3R5bGUoXCIjbXJib3hcIiwgXCJiYWNrZ3JvdW5kQ29sb3JcIiwgXCIjMEEwQTBBXCIpOyAvLyBtYXBsaXN0IGJvcmRlciBmaWxsXHJcbiAgICBzZXRTdHlsZShcIi5maWVsZF9pbnB1dFwiLCBcImJhY2tncm91bmRDb2xvclwiLCBcIiMxMzEzMTNcIik7IC8vIG1hcCBpZCBmaWVsZFxyXG4gICAgc2V0U3R5bGUoXCIuZmllbGRfaW5wdXRcIiwgXCJjb2xvclwiLCBcIiNDQ0NcIik7IC8vIHdoYXRcclxuICAgIHNldFN0eWxlKFwiLmJ0blwiLCBcImJhY2tncm91bmRDb2xvclwiLCBcIiMxRTFFMUVcIik7IC8vIG1hcCBidXR0b25cclxuICAgIHNldFN0eWxlKFwiLmJ0blwiLCBcImNvbG9yXCIsIFwiI0NDQ1wiKTsgLy8gd2hhdFxyXG4gICAgc2V0U3R5bGUoXCIuYnRuOmhvdmVyXCIsIFwiYmFja2dyb3VuZENvbG9yXCIsIFwiIzM1MzUzNVwiKTsgLy8gbWFwIGJ1dHRvbiBob3ZlclxyXG4gICAgc2V0U3R5bGUoXCIuYnRuOmhvdmVyXCIsIFwiY29sb3JcIiwgXCIjQ0NDXCIpOyAvLyB3aGF0IGlzIHRoaXMgOFxyXG4gICAgc2V0U3R5bGUoXCIuYnRuOmFjdGl2ZVwiLCBcImJhY2tncm91bmRDb2xvclwiLCBcIiMxNTE1MTVcIik7IC8vIG1hcCBidXR0b24gaG9sZFxyXG4gICAgc2V0U3R5bGUoXCIuYnRuOmFjdGl2ZVwiLCBcImNvbG9yXCIsIFwiI0NDQ1wiKTsgLy8gd2hhdCBpcyB0aGlzIDEwXHJcbiAgICBzZXRTdHlsZShcImNsb3NlYm94XCIsIFwiYmFja2dyb3VuZENvbG9yXCIsIFwiIzM1MzUzNVwiKTsgLy8gZGVjb3IgbGlzdCBjbG9zZSBidXR0b25cclxuICAgIHNldFN0eWxlKFwiY2xvc2Vib3hcIiwgXCJjb2xvclwiLCBcIiNDQ0NcIik7IC8vIHdoYXRcclxuICAgIHNldFN0eWxlKFwiLmxpc3RfZ3JvdXBcIiwgXCJiYWNrZ3JvdW5kQ29sb3JcIiwgXCIjMUUxRTFFXCIpOyAvLyBkZWNvciBsaXN0IGNhdGVnb3J5XHJcbiAgICBzZXRTdHlsZShcIi5saXN0X2dyb3VwXCIsIFwiYm9yZGVyQm90dG9tXCIsIFwiXCIpOyAvLyB3aGF0IGlzIHRoaXMgMTRcclxuICAgIHNldFN0eWxlKFwiLmxpc3RfZ3JvdXA6aG92ZXJcIiwgXCJiYWNrZ3JvdW5kQ29sb3JcIiwgXCIjMzUzNTM1XCIpOyAvLyBkZWNvciBsaXN0IGNhdGVnb3J5IGhvdmVyXHJcbiAgICBzZXRTdHlsZShcIi5saXN0X2dyb3VwOmFjdGl2ZVwiLCBcImJhY2tncm91bmRDb2xvclwiLCBcIiMwQTBBMEFcIik7IC8vIGRlY29yIGxpc3QgY2F0ZWdvcnkgaG9sZFxyXG4gICAgc2V0U3R5bGUoXCIuaW1hZ2VfbGlzdF9jb2xsYXBzYWJsZVwiLCBcImJhY2tncm91bmRDb2xvclwiLCBcIiMwQTBBMEFcIik7IC8vIGRlY29yIGxpc3QgYmFja2dyb3VuZFxyXG4gICAgc2V0U3R5bGUoXCIuaW1nX29wdGlvbl9zZWxlY3RlZFwiLCBcImJhY2tncm91bmRDb2xvclwiLCBcIiM0NTY2QUI0MFwiKTsgLy8gY3VycmVudCBkZWNvclxyXG4gICAgc2V0U3R5bGUoXCIucmlnaHR1aVwiLCBcImJvcmRlckxlZnRcIiwgXCJcIik7IC8vIHJlbW92ZXMgcmlnaHQgdWkgYm9yZGVyXHJcbiAgICBzZXRTdHlsZShcIi5sZWZ0dWlcIiwgXCJib3JkZXJSaWdodFwiLCBcIlwiKTsgLy8gcmVtb3ZlcyBsZWZ0IHVpIG9yZGVyXHJcbiAgICBzZXRTdHlsZShcIjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJcIiwgXCJiYWNrZ3JvdW5kQ29sb3JcIiwgXCIjODg4XCIpOyAvLyB3aGF0IGlzIHRoaXNcclxuICAgIHNldFN0eWxlKFwiI3JwYXJhbXMsICNndWlfb2JqYm94LCAjdG9vbHNfYm94LCAjcGFyYW1ib3hcIiwgXCJzY3JvbGxiYXJDb2xvclwiLCBcIlwiKTsgLy8gd2hhdCBpcyB0aGlzXHJcbiAgICBzZXRTdHlsZShcIiNycGFyYW1zLCAjZ3VpX29iamJveCwgI3Rvb2xzX2JveCwgI3BhcmFtYm94XCIsIFwic2Nyb2xsYmFyV2lkdGhcIiwgXCJcIik7IC8vIHdoYXQgaXMgdGhpc1xyXG4gICAgc2V0U3R5bGUoXCIjdG9vbHNfYm94XCIsIFwib3ZlcmZsb3cteVwiLCBcImhpZGRlblwiKTsgLy8gd2hhdCBpcyB0aGlzXHJcbiAgICBzZXRTdHlsZShcIiN0b29sc19ib3hcIiwgXCJvdmVyZmxvdy15XCIsIFwiYXV0b1wiKTsgLy8gd2hhdCBpcyB0aGlzXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE9iamVjdEJveChvYmopIHtcclxuICAgIGxldCB4ID0gMDtcclxuICAgIGxldCB5ID0gMDtcclxuICAgIGxldCB3ID0gb2JqLnBtLnc7XHJcbiAgICBsZXQgaCA9IG9iai5wbS5oO1xyXG5cclxuICAgIGlmICghXCJib3ggZG9vciByZWdpb24gcHVzaGYgYmcgd2F0ZXJcIi5pbmNsdWRlcyhvYmouX2NsYXNzKSkge1xyXG4gICAgICAgIHggPSBib194W29iai5fY2xhc3NdO1xyXG4gICAgICAgIHkgPSBib195W29iai5fY2xhc3NdO1xyXG4gICAgICAgIHcgPSBib193W29iai5fY2xhc3NdO1xyXG4gICAgICAgIGggPSBib19oW29iai5fY2xhc3NdO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChcInBsYXllciBlbmVteVwiLmluY2x1ZGVzKG9iai5fY2xhc3MpKSB7XHJcbiAgICAgICAgeCA9IC0xNTtcclxuICAgICAgICB5ID0gLTgxO1xyXG4gICAgICAgIHcgPSAzMDtcclxuICAgICAgICBoID0gODA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9iai5fY2xhc3MgPT0gXCJ2ZWhpY2xlXCIpIHtcclxuICAgICAgICB4ID0gYm9feFtcInZlaGljbGVfXCIgKyBvYmoucG0ubW9kZWxdO1xyXG4gICAgICAgIHkgPSBib195W1widmVoaWNsZV9cIiArIG9iai5wbS5tb2RlbF07XHJcbiAgICAgICAgdyA9IGJvX3dbXCJ2ZWhpY2xlX1wiICsgb2JqLnBtLm1vZGVsXTtcclxuICAgICAgICBoID0gYm9faFtcInZlaGljbGVfXCIgKyBvYmoucG0ubW9kZWxdO1xyXG5cclxuICAgICAgICBpZiAob2JqLnBtLm1vZGVsID09IFwidmVoX2hoXCIpIHtcclxuICAgICAgICAgICAgeCA9IGxvX3hbXCJhbGVpX3ZlaF9oaFwiXTtcclxuICAgICAgICAgICAgeSA9IGxvX3lbXCJhbGVpX3ZlaF9oaFwiXTtcclxuICAgICAgICAgICAgdyA9IGxvX3dbXCJhbGVpX3ZlaF9oaFwiXTtcclxuICAgICAgICAgICAgaCA9IGxvX2hbXCJhbGVpX3ZlaF9oaFwiXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB4OiB4LFxyXG4gICAgICAgIHk6IHksXHJcbiAgICAgICAgdzogdyxcclxuICAgICAgICBoOiBoXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFNlbGVjdGlvbkltYWdlKCkge1xyXG4gICAgbGV0IHNlbGVjdGlvbiA9IFNlbGVjdGVkT2JqZWN0cztcclxuICAgIGxldCBhcnIxID0gW107XHJcbiAgICBsZXQgYXJyMiA9IFtdO1xyXG4gICAgbGV0IG1pblggPSArSW5maW5pdHk7XHJcbiAgICBsZXQgbWluWSA9ICtJbmZpbml0eTtcclxuICAgIGxldCBtYXhYID0gLUluZmluaXR5O1xyXG4gICAgbGV0IG1heFkgPSAtSW5maW5pdHk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgYm94ID0gZ2V0T2JqZWN0Qm94KHNlbGVjdGlvbltpXSk7XHJcbiAgICAgICAgbGV0IHggPSBzZWxlY3Rpb25baV0ucG0ueCArIGJveC54O1xyXG4gICAgICAgIGxldCB5ID0gc2VsZWN0aW9uW2ldLnBtLnkgKyBib3gueTtcclxuICAgICAgICBsZXQgdyA9IGJveC53O1xyXG4gICAgICAgIGxldCBoID0gYm94Lmg7XHJcblxyXG4gICAgICAgIGlmICh4IDwgbWluWCkge1xyXG4gICAgICAgICAgICBtaW5YID0geDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh4ICsgdyA+IG1heFgpIHtcclxuICAgICAgICAgICAgbWF4WCA9IHggKyB3O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHkgPCBtaW5ZKSB7XHJcbiAgICAgICAgICAgIG1pblkgPSB5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHkgKyBoID4gbWF4WSkge1xyXG4gICAgICAgICAgICBtYXhZID0geSArIGg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5lcyA9IFtdO1xyXG4gICAgZm9yIChsZXQgZSBvZiBzZWxlY3Rpb24pIHtcclxuICAgICAgICBlcy5wdXNoKGUpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgVEhFTUUgPSA0O1xyXG4gICAgR1JJRF9BTFBIQSA9IDA7XHJcbiAgICBTSE9XX0NPTk5FQ1RJT05TID0gMDtcclxuICAgIHpvb20gPSAxO1xyXG4gICAgem9vbV92YWxpZGF0ZSgpO1xyXG5cclxuICAgIGxldCBzdyA9IGRpc190b194IC0gZGlzX2Zyb21feDtcclxuICAgIGxldCBzaCA9IGRpc190b195IC0gZGlzX2Zyb21feTtcclxuXHJcbiAgICBkaXNfZnJvbV94ID0gbWluWCAtIDEwO1xyXG4gICAgZGlzX2Zyb21feSA9IG1pblkgLSAxMDtcclxuICAgIGRpc190b194ID0gbWluWCArIHN3IC0gMTA7XHJcbiAgICBkaXNfdG9feSA9IG1pblkgKyBzaCAtIDEwO1xyXG5cclxuICAgIENvbnNvbGVUcmFjZU1lc3NhZ2VzID0gW107XHJcblxyXG4gICAgUmVuZGVyKCk7XHJcblxyXG4gICAgbGV0IHcgPSBtYXhYIC0gbWluWCArIDIwO1xyXG4gICAgbGV0IGggPSBtYXhZIC0gbWluWSArIDIwO1xyXG5cclxuICAgIGFsZWlMb2coREVCVUcyLCBcIkJlZm9yZSBHSURcIik7XHJcbiAgICBsZXQgZGF0YSA9IGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgdywgaCk7XHJcbiAgICBhbGVpTG9nKERFQlVHMiwgXCJBZnRlciBHSURcIik7XHJcblxyXG4gICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICBsZXQgY3R4MiA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG4gICAgbGV0IGNhbnZhczIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgbGV0IGN0eDMgPSBjYW52YXMyLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgICBjYW52YXMud2lkdGggPSB3O1xyXG4gICAgY2FudmFzLmhlaWdodCA9IGg7XHJcblxyXG4gICAgY3R4Mi5iZWdpblBhdGgoKTtcclxuICAgIGN0eDIucHV0SW1hZ2VEYXRhKGRhdGEsIDAsIDApO1xyXG4gICAgY3R4Mi5jbG9zZVBhdGgoKTtcclxuXHJcbiAgICBsZXQgcHJldlcgPSB3O1xyXG4gICAgbGV0IHByZXZIID0gaDtcclxuXHJcbiAgICBpZiAodyA+IDEwMCB8fCBoID4gMTAwKSB7XHJcbiAgICAgICAgbGV0IGRpdmlkZSA9IHcgLyBoO1xyXG5cclxuICAgICAgICBpZiAoZGl2aWRlID49IDEpIHtcclxuICAgICAgICAgICAgdyA9IDEwMDtcclxuICAgICAgICAgICAgaCA9IHcgLyBkaXZpZGU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaCA9IDEwMDtcclxuICAgICAgICAgICAgdyA9IGggKiBkaXZpZGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhbnZhczIud2lkdGggPSB3O1xyXG4gICAgY2FudmFzMi5oZWlnaHQgPSBoO1xyXG5cclxuICAgIGN0eDMuYmVnaW5QYXRoKCk7XHJcbiAgICBjdHgzLnNjYWxlKHcgLyBwcmV2VywgaCAvIHByZXZIKTtcclxuICAgIGN0eDMuZHJhd0ltYWdlKGNhbnZhcywgMCwgMCk7XHJcbiAgICBjdHgzLmNsb3NlUGF0aCgpO1xyXG5cclxuICAgIGxldCByZXN1bHQgPSBjYW52YXMyLnRvRGF0YVVSTCgpO1xyXG5cclxuICAgIGNhbnZhcy5yZW1vdmUoKTtcclxuICAgIGNhbnZhcyA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDbGlwYm9hcmREaXYoKSB7XHJcbiAgICBsZXQgY2xpcGJvYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxldCBtcmRpbWxpZ2h0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXJkaW1saWdodHNcIik7XHJcblxyXG4gICAgY2xpcGJvYXJkRGl2LmlkID0gXCJjbGlwYm9hcmREaXZcIjtcclxuICAgIGNsaXBib2FyZERpdi5jbGFzc05hbWUgPSBcIm1ycG9wdXBcIjtcclxuICAgIGNsaXBib2FyZERpdi5zdHlsZSA9IFwid2lkdGg6IGNhbGMoMTAwJSAtIDI4MHB4KTsgaGVpZ2h0OiAxMDAlOyBtYXJnaW46IDBweDsgcGFkZGluZzogMHB4OyB0b3A6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAtNTAlKTsgZGlzcGxheTogbm9uZTtcIjtcclxuXHJcbiAgICBjbGlwYm9hcmREaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsIGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIG1yZGltbGlnaHRzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcclxuICAgICAgICBjbGlwYm9hcmREaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoY2xpcGJvYXJkRGl2KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xpcGJvYXJkSXRlbUFjdGlvbihpKSB7XHJcbiAgICBsZXQgaXRlbXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5jbGlwYm9hcmRJdGVtcyk7XHJcbiAgICBsZXQgYWN0aW9uID0gY29uZmlybShcIlJlbmFtZSAoT0spIG9yIGRlbGV0ZSAoQ2FuY2VsKSA/XCIpO1xyXG5cclxuICAgIGlmIChhY3Rpb24pIHtcclxuICAgICAgICBsZXQgbmFtZSA9IHByb21wdChcIkVudGVyIG5hbWU6XCIsIGl0ZW1zW2ldLm5hbWUpO1xyXG5cclxuICAgICAgICBpZiAobmFtZSkge1xyXG4gICAgICAgICAgICBpdGVtc1tpXS5uYW1lID0gbmFtZTtcclxuXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGlwYm9hcmRJdGVtcyA9IEpTT04uc3RyaW5naWZ5KGl0ZW1zKTtcclxuXHJcbiAgICAgICAgICAgIHVwZGF0ZUNsaXBib2FyZERpdigpO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlP1wiKSkge1xyXG4gICAgICAgICAgICBpdGVtcy5zcGxpY2UoaSwgMSk7XHJcblxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UuY2xpcGJvYXJkSXRlbXMgPSBKU09OLnN0cmluZ2lmeShpdGVtcyk7XHJcblxyXG4gICAgICAgICAgICB1cGRhdGVDbGlwYm9hcmREaXYoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyQ2xpcGJvYXJkSXRlbUFjdGlvbigpIHtcclxuICAgIHdpbmRvdy5jbGlwYm9hcmRJdGVtQWN0aW9uID0gY2xpcGJvYXJkSXRlbUFjdGlvbjtcclxuICAgIGFsZWlMb2coREVCVUcsIFwiUmVnaXN0ZXJlZCBDbGlwYm9hcmQgSXRlbSBBY3Rpb25cIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUNsaXBib2FyZERpdigpIHtcclxuICAgIGlmICghbG9jYWxTdG9yYWdlLmNsaXBib2FyZEl0ZW1zKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsaXBib2FyZEl0ZW1zID0gXCJbXVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBpdGVtcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmNsaXBib2FyZEl0ZW1zKTtcclxuICAgIGxldCBjbGlwYm9hcmREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsaXBib2FyZERpdlwiKTtcclxuICAgIGxldCBtcmRpbWxpZ2h0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXJkaW1saWdodHNcIik7XHJcblxyXG4gICAgY2xpcGJvYXJkRGl2LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBtcmRpbWxpZ2h0cy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cclxuICAgIGxldCBodG1sID0gYFxyXG4gICAgICAgIDxkaXYgaWQ9XCJtcnRpdGxlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPk9iamVjdCBjbGlwYm9hcmQ8L3NwYW4+XHJcbiAgICAgICAgICAgIDxjbG9zZWJveCBvbmNsaWNrPVwiZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsaXBib2FyZERpdicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtcmRpbWxpZ2h0cycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XCI+eDwvY2xvc2Vib3g+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgaWQ9XCJtcmJveFwiIGNsYXNzPVwib2JqYm94XCIgc3R5bGU9XCJoZWlnaHQ6IGNhbGMoMTAwJSAtIDMycHgpOyBib3gtc2l6aW5nOiBib3JkZXItYm94O1wiPlxyXG4gICAgYDtcclxuXHJcbiAgICBsZXQgb3JpZ2luYWxFUyA9IHdpbmRvdy5lcztcclxuICAgIGxldCBjcyA9IHt9IC8vIENTOiBDdXJyZW50IFNldHRpbmdzLCBiZWNhdXNlIHdlIHdpbGwgY2hhbmdlIHNldHRpbmdzIGZvciByZW5kZXJpbmcgaW1hZ2VzXHJcbiAgICBjcy50aGVtZSA9IFRIRU1FO1xyXG4gICAgY3MuZ3JpZF9vcGFjaXR5ID0gR1JJRF9BTFBIQTtcclxuICAgIGNzLnNob3dDb25uZWN0aW9ucyA9IFNIT1dfQ09OTkVDVElPTlM7XHJcbiAgICAvL1xyXG4gICAgY3MuZHR4ID0gZGlzX3RvX3g7XHJcbiAgICBjcy5kdHkgPSBkaXNfdG9feTtcclxuICAgIC8vXHJcbiAgICBjcy5kZnggPSBkaXNfZnJvbV94O1xyXG4gICAgY3MuZGZ5ID0gZGlzX2Zyb21feTtcclxuICAgIC8vXHJcbiAgICBjcy5jdG0gPSBDb25zb2xlVHJhY2VNZXNzYWdlcztcclxuICAgIGNzLnpvb20gPSB6b29tO1xyXG5cclxuICAgIHdpbmRvdy5lcyA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIF9fcGFzdGVPYmplY3RDbGlwYm9hcmQoaXRlbXNbaV0pO1xyXG4gICAgICAgIGh0bWwgKz0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1nX29wdGlvblwiIHN0eWxlPVwid2lkdGg6IGF1dG87XCIgb25jb250ZXh0bWVudT1cImNsaXBib2FyZEl0ZW1BY3Rpb24oYCArIGkgKyBgKVwiIG9uY2xpY2s9XCJwYXN0ZUZyb21QZXJtYW5lbnRDbGlwYm9hcmQoYCArIGkgKyBgKTtcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYCArIGdldFNlbGVjdGlvbkltYWdlKCkgKyBgXCIgc3R5bGU9XCJtYXgtd2lkdGg6IDEwMHB4OyBtYXgtaGVpZ2h0OiAxMDBweDtcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+YCArIGl0ZW1zW2ldLm5hbWUgKyBgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICB9XHJcblxyXG4gICAgY2xpcGJvYXJkRGl2LmlubmVySFRNTCA9IGh0bWwgKyBcIjwvZGl2PlwiO1xyXG4gICAgd2luZG93LmVzID0gb3JpZ2luYWxFUztcclxuICAgIFRIRU1FID0gY3MudGhlbWU7XHJcbiAgICBHUklEX0FMUEhBID0gY3MuZ3JpZF9vcGFjaXR5O1xyXG4gICAgU0hPV19DT05ORUNUSU9OUyA9IGNzLnNob3dDb25uZWN0aW9ucztcclxuICAgIGRpc190b194ID0gY3MuZHR4O1xyXG4gICAgZGlzX3RvX3kgPSBjcy5kdHk7XHJcbiAgICBkaXNfZnJvbV94ID0gY3MuZGZ4O1xyXG4gICAgZGlzX2Zyb21feSA9IGNzLmRmeTtcclxuICAgIENvbnNvbGVUcmFjZU1lc3NhZ2VzID0gY3MuY3RtO1xyXG4gICAgem9vbSA9IGNzLnpvb207XHJcbiAgICBuZWVkX3JlZHJhdyA9IDE7XHJcbiAgICB6b29tX3ZhbGlkYXRlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9fcGFzdGVPYmplY3RDbGlwYm9hcmQoaXRlbSkge1xyXG4gICAgc2Vzc2lvblN0b3JhZ2UucGVybWFuZW50X2NsaXBib2FyZCA9IGl0ZW0uZGF0YTtcclxuICAgIFBhc3RlRnJvbUNsaXBCb2FyZChcInBlcm1hbmVudF9jbGlwYm9hcmRcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhc3RlRnJvbVBlcm1hbmVudENsaXBib2FyZChpKSB7XHJcbiAgICBsZXQgaXRlbXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5jbGlwYm9hcmRJdGVtcyk7XHJcblxyXG4gICAgc2Vzc2lvblN0b3JhZ2UucGVybWFuZW50X2NsaXBib2FyZCA9IGl0ZW1zW2ldLmRhdGE7XHJcblxyXG4gICAgUGFzdGVGcm9tQ2xpcEJvYXJkKFwicGVybWFuZW50X2NsaXBib2FyZFwiKTtcclxuXHJcbiAgICBsZXQgY2xpcGJvYXJkRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbGlwYm9hcmREaXZcIik7XHJcbiAgICBsZXQgbXJkaW1saWdodHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1yZGltbGlnaHRzXCIpO1xyXG5cclxuICAgIGNsaXBib2FyZERpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBtcmRpbWxpZ2h0cy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblxyXG4gICAgTmV3Tm90ZShcIk9iamVjdHMgcGFzdGVkIGZyb20gcGVybWFuZW50IGNsaXBib2FyZC5cIiwgbm90ZV9wYXNzaXZlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29weVRvUGVybWFuZW50Q2xpcGJvYXJkKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBsZXQgc2VsZWN0aW9uID0gU2VsZWN0ZWRPYmplY3RzO1xyXG5cclxuICAgICAgICBpZiAoc2VsZWN0aW9uLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICAgIENvcHlUb0NsaXBCb2FyZChcInBlcm1hbmVudF9jbGlwYm9hcmRcIik7XHJcblxyXG4gICAgICAgICAgICBsZXQgaXRlbXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5jbGlwYm9hcmRJdGVtcyk7XHJcblxyXG4gICAgICAgICAgICBpdGVtcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiU2VsZWN0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBzZXNzaW9uU3RvcmFnZS5wZXJtYW5lbnRfY2xpcGJvYXJkXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmNsaXBib2FyZEl0ZW1zID0gSlNPTi5zdHJpbmdpZnkoaXRlbXMpO1xyXG5cclxuICAgICAgICAgICAgTmV3Tm90ZShcIk9iamVjdHMgY29waWVkIHRvIHBlcm1hbmVudCBjbGlwYm9hcmQuXCIsIG5vdGVfcGFzc2l2ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdXBkYXRlQ2xpcGJvYXJkRGl2KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIE5ld05vdGUoXCJDYW4ndCBjb3B5IG9iamVjdHMgdG8gcGVybWFuZW50IGNsaXBib2FyZC48YnI+TG9jYWxTdG9yYWdlIGVycm9yP1wiLCBub3RlX2JhZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZVRvcFJpZ2h0VGV4dCgpIHtcclxuICAgIGxldCBjb250YWluZXJFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2ZXJzaW9uX3JpZ2h0c1wiKTtcclxuICAgIGxldCBlbGVtID0gY29udGFpbmVyRWxlbS5jaGlsZE5vZGVzWzBdO1xyXG5cclxuICAgIGNvbnRhaW5lckVsZW0uc3R5bGUud2lkdGggPSBcIjE3MHB4XCI7XHJcbiAgICBlbGVtLnN0eWxlLndpZHRoID0gXCIxNjBweFwiO1xyXG5cclxuICAgIGxldCB2ZXJzaW9uID0gXCJcIjtcclxuICAgIGlmKGlzTmF0aXZlKSB2ZXJzaW9uID0gXCIgdlwiICsgR01faW5mby5zY3JpcHQudmVyc2lvbjtcclxuXHJcbiAgICBlbGVtLmlubmVySFRNTCA9IGVsZW0uaW5uZXJIVE1MLnJlcGxhY2VBbGwoXCI8YnI+XCIsIFwiIFwiKSArIFwiPGJyPkFMRSBJbXByb3ZlbWVudHNcIiArIHZlcnNpb247XHJcbn1cclxuXHJcbi8vIEFkZHMgYWRkaXRpb25hbCBidXR0b25cclxuZnVuY3Rpb24gYWRkQWRkaXRpb25hbEJ1dHRvbnMoKSB7XHJcbiAgICBjb25zdCBycGFyYW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJycGFyYW1zXCIpO1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gU2VsZWN0ZWRPYmplY3RzO1xyXG5cclxuICAgIC8vIFBhcmFtIGxpc3Qgbm90IGxvYWRlZCBvciBzZWxlY3Rpb24gaXMgbm90IDEuXHJcbiAgICBpZiAoIXJwYXJhbXMgfHwgc2VsZWN0aW9uLmxlbmd0aCAhPSAxKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldEltYWdlU2l6ZV9idXR0b24gPSAnPGEgb25jbGljaz1cImdldEltYWdlU2l6ZSgpO1wiIGNsYXNzPVwidG9vbF9idG4gdG9vbF93aWRcIiBzdHlsZT1cImRpc3BsYXk6IGJsb2NrOyB3aWR0aDogMTAwJTsgbWFyZ2luLXRvcDogNHB4O1wiPkdldCBpbWFnZSBzaXplPC9hPic7XHJcbiAgICBjb25zdCBjZW50ZXJEZWNvcmF0aW9uWF9idXR0b24gPSAnPGEgb25jbGljaz1cImNlbnRlckltYWdlWCgpO1wiIGNsYXNzPVwidG9vbF9idG4gdG9vbF93aWRcIiBzdHlsZT1cImRpc3BsYXk6IGJsb2NrOyB3aWR0aDogMTAwJTsgbWFyZ2luLXRvcDogNHB4O1wiPkNlbnRlciBkZWNvcmF0aW9uIFg8L2E+JztcclxuICAgIGNvbnN0IGNlbnRlckRlY29yYXRpb25ZX2J1dHRvbiA9ICc8YSBvbmNsaWNrPVwiY2VudGVySW1hZ2VZKCk7XCIgY2xhc3M9XCJ0b29sX2J0biB0b29sX3dpZFwiIHN0eWxlPVwiZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMDAlOyBtYXJnaW4tdG9wOiA0cHg7XCI+Q2VudGVyIGRlY29yYXRpb24gWTwvYT4nO1xyXG5cclxuICAgIGlmIChzZWxlY3Rpb25bMF0uX2NsYXNzID09IFwiYmdcIikge1xyXG4gICAgICAgIHJwYXJhbXMuaW5uZXJIVE1MICs9IGdldEltYWdlU2l6ZV9idXR0b247XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNlbGVjdGlvblswXS5fY2xhc3MgPT0gXCJkZWNvclwiKSB7XHJcbiAgICAgICAgcnBhcmFtcy5pbm5lckhUTUwgKz0gZ2V0SW1hZ2VTaXplX2J1dHRvbjtcclxuICAgICAgICBycGFyYW1zLmlubmVySFRNTCArPSBjZW50ZXJEZWNvcmF0aW9uWF9idXR0b247XHJcbiAgICAgICAgcnBhcmFtcy5pbm5lckhUTUwgKz0gY2VudGVyRGVjb3JhdGlvbllfYnV0dG9uO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKCFlZGl0X3RyaWdnZXJzX2FzX3RleHQgJiYgc2VsZWN0aW9uWzBdLl9jbGFzcyA9PSBcInRyaWdnZXJcIiAmJiBFeHRlbmRlZFRyaWdnZXJzTG9hZGVkKXtcclxuICAgICAgICBjb25zdCBleHRlbmRUcmlnZ2VyQWN0aW9uX2J1dHRvbiA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInR3by1lbGVtZW50LWdyaWRcIj5cclxuICAgICAgICAgICAgICAgIDxhIG9uY2xpY2s9XCJhZGRUcmlnZ2VyQWN0aW9uQ291bnQoMSlcIiBjbGFzcz1cInRvb2xfYnRuIHRvb2xfd2lkXCIgc3R5bGU9XCJkaXNwbGF5OiBibG9jazsgd2lkdGg6IDk1JTsgbWFyZ2luLXRvcDogNHB4O1wiPigrKSBFeHRlbmQgdHJpZ2dlciBhY3Rpb24gbGlzdC48L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBvbmNsaWNrPVwiYWRkVHJpZ2dlckFjdGlvbkNvdW50KC0xKVwiIGNsYXNzPVwidG9vbF9idG4gdG9vbF93aWRcIiBzdHlsZT1cImRpc3BsYXk6IGJsb2NrOyB3aWR0aDogOTUlOyBtYXJnaW4tdG9wOiA0cHg7XCI+KC0pIFNocmluayB0cmlnZ2VyIGFjdGlvbiBsaXN0LjwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidHdvLWVsZW1lbnQtZ3JpZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInR3by1lbGVtZW50LWdyaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBvbmNsaWNrPVwiYWRkVHJpZ2dlckFjdGlvbkNvdW50KDUpXCIgY2xhc3M9XCJ0b29sX2J0biB0b29sX3dpZFwiIHN0eWxlPVwiZGlzcGxheTogYmxvY2s7IHdpZHRoOiA5MCU7IG1hcmdpbi10b3A6IDRweDtcIj4oKzUpPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIG9uY2xpY2s9XCJhZGRUcmlnZ2VyQWN0aW9uQ291bnQoMTApXCIgY2xhc3M9XCJ0b29sX2J0biB0b29sX3dpZFwiIHN0eWxlPVwiZGlzcGxheTogYmxvY2s7IHdpZHRoOiA5MCU7IG1hcmdpbi10b3A6IDRweDtcIj4oKzEwKTwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0d28tZWxlbWVudC1ncmlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgb25jbGljaz1cImFkZFRyaWdnZXJBY3Rpb25Db3VudCgtNSlcIiBjbGFzcz1cInRvb2xfYnRuIHRvb2xfd2lkXCIgc3R5bGU9XCJkaXNwbGF5OiBibG9jazsgd2lkdGg6IDkwJTsgbWFyZ2luLXRvcDogNHB4O1wiPigtNSk8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgb25jbGljaz1cImFkZFRyaWdnZXJBY3Rpb25Db3VudCgtMTApXCIgY2xhc3M9XCJ0b29sX2J0biB0b29sX3dpZFwiIHN0eWxlPVwiZGlzcGxheTogYmxvY2s7IHdpZHRoOiA5MCU7IG1hcmdpbi10b3A6IDRweDtcIj4oLTEwKTwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgICAgIHJwYXJhbXMuaW5uZXJIVE1MICs9IGV4dGVuZFRyaWdnZXJBY3Rpb25fYnV0dG9uO1xyXG5cclxuICAgICAgICAvLyBVcGRhdGUgR1VJIHRvIGNoYW5nZSBwYXJhbWV0ZXIgdHlwZSBiYXNlZCBvbiB0cmlnZ2VyIGFjdGlvbi5cclxuICAgICAgICBTdHJlZXRNYWdpYygpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogVGhpcyBmdW5jdGlvbiBpcyBpbnZva2VkIHdoZW5ldmVyIHVzZXJzIHByZXNzZWQgdGhlIFwiRXh0ZW5kIHRyaWdnZXIgYWN0aW9uIGxpc3QuXCIgb3IgdGhlIFwiU2hyaW5rIHRyaWdnZXIgYWN0aW9uIGxpc3RcIiBidXR0b25zLlxyXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyBhbmQgbWFpbnRhaW5pbmcgZXh0ZW5kZWQgdHJpZ2dlcnMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSAgICBUaGUgYW1vdW50IG9mIHRyaWdnZXIgYWN0aW9ucyB0byBhZGQgb3Igc3VidHJhY3QgZnJvbSB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHRyaWdnZXIsXHJcbiAqL1xyXG5mdW5jdGlvbiBhZGRUcmlnZ2VyQWN0aW9uQ291bnQodmFsdWUpe1xyXG5cclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IFNlbGVjdGVkT2JqZWN0cztcclxuXHJcbiAgICBpZiAoc2VsZWN0aW9uLmxlbmd0aCAhPSAxIHx8IHZhbHVlID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNlbGVjdGVkVHJpZ2dlciA9IHNlbGVjdGlvblswXTtcclxuXHJcbiAgICAvLyBTdWJ0cmFjdGluZyB0cmlnZ2VyIGFjdGlvbnMgZnJvbSBub3JtYWwgdHJpZ2dlcnMgaXMgYSBuby1vcC5cclxuICAgIGlmKCFzZWxlY3RlZFRyaWdnZXIucG1bXCJleHRlbmRlZFwiXSAmJiB2YWx1ZSA8IDApe1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJdCBpcyBhIG5vcm1hbCB0cmlnZ2VyLCBsZXQncyBjb252ZXJ0IGl0IHRvIGFuIGV4dGVuZGVkIHRyaWdnZXIuXHJcbiAgICBpZighc2VsZWN0ZWRUcmlnZ2VyLnBtW1wiZXh0ZW5kZWRcIl0pe1xyXG4gICAgICAgIHNlbGVjdGVkVHJpZ2dlci5wbVtcImFkZGl0aW9uYWxBY3Rpb25zXCJdID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgc2VsZWN0ZWRUcmlnZ2VyLnBtW1wiYWRkaXRpb25hbFBhcmFtQVwiXSA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHNlbGVjdGVkVHJpZ2dlci5wbVtcImFkZGl0aW9uYWxQYXJhbUJcIl0gPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBzZWxlY3RlZFRyaWdnZXIucG1bXCJ0b3RhbE51bU9mQWN0aW9uc1wiXSA9IDEwO1xyXG4gICAgICAgIHNlbGVjdGVkVHJpZ2dlci5wbVtcImV4dGVuZGVkXCJdID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgTmV3Tm90ZShcIkNvbnZlcnRlZCB0aGlzIHRvIGFuIGV4dGVuZGVkIHRyaWdnZXIuXCIsIG5vdGVfcGFzc2l2ZSk7XHJcbiAgICAgICAgTmV3Tm90ZShcIkJlIG1pbmRmdWwgYWJvdXQgeW91ciBudW1iZXIgb2YgdHJpZ2dlcnMuXCIsIG5vdGVfbmV1dHJhbCk7XHJcbiAgICAgICAgTmV3Tm90ZShcIkJlaGluZCB0aGUgc2NlbmVzLCB0aGlzIGNyZWF0ZXMgMSB0cmlnZ2VyIGZvciBldmVyeSBhZGRpdGlvbmFsIDkgdHJpZ2dlciBhY3Rpb25zLlwiLCBub3RlX25ldXRyYWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdGVkVHJpZ2dlci5wbVtcInRvdGFsTnVtT2ZBY3Rpb25zXCJdICs9IHZhbHVlO1xyXG5cclxuICAgIC8vIEl0IGhhcyBsZXNzIHRoYW4gMTAgdHJpZ2dlciBhY3Rpb25zLCBsZXQncyBjb252ZXJ0IHRoaXMgZXh0ZW5kZWQgdHJpZ2dlciBiYWNrIHRvIGEgbm9ybWFsIHRyaWdnZXIuXHJcbiAgICBpZihzZWxlY3RlZFRyaWdnZXIucG1bXCJ0b3RhbE51bU9mQWN0aW9uc1wiXSA8PSAxMCB8fCBpc05hTihzZWxlY3RlZFRyaWdnZXIucG1bXCJ0b3RhbE51bU9mQWN0aW9uc1wiXSkpe1xyXG4gICAgICAgIGRlbGV0ZSBzZWxlY3RlZFRyaWdnZXIucG1bXCJhZGRpdGlvbmFsQWN0aW9uc1wiXTtcclxuICAgICAgICBkZWxldGUgc2VsZWN0ZWRUcmlnZ2VyLnBtW1wiYWRkaXRpb25hbFBhcmFtQVwiXTtcclxuICAgICAgICBkZWxldGUgc2VsZWN0ZWRUcmlnZ2VyLnBtW1wiYWRkaXRpb25hbFBhcmFtQlwiXTtcclxuICAgICAgICBkZWxldGUgc2VsZWN0ZWRUcmlnZ2VyLnBtW1widG90YWxOdW1PZkFjdGlvbnNcIl07XHJcbiAgICAgICAgZGVsZXRlIHNlbGVjdGVkVHJpZ2dlci5wbVtcImV4dGVuZGVkXCJdO1xyXG4gICAgfVxyXG4gICAgLy8gUmVzaXplIGFycmF5cyBhY2NvcmRpbmcgdG8gdGhlIG5ldyBjaGFuZ2UgaW4gdG90YWxOdW1PZlRyaWdnZXJzLlxyXG4gICAgZWxzZXtcclxuICAgICAgICBpZih2YWx1ZSA+IDApe1xyXG4gICAgICAgICAgICBzZWxlY3RlZFRyaWdnZXIucG1bXCJhZGRpdGlvbmFsQWN0aW9uc1wiXS5wdXNoKC4uLkFycmF5KHZhbHVlKS5maWxsKC0xKSk7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkVHJpZ2dlci5wbVtcImFkZGl0aW9uYWxQYXJhbUFcIl0ucHVzaCguLi5BcnJheSh2YWx1ZSkuZmlsbCgwKSk7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkVHJpZ2dlci5wbVtcImFkZGl0aW9uYWxQYXJhbUJcIl0ucHVzaCguLi5BcnJheSh2YWx1ZSkuZmlsbCgwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkVHJpZ2dlci5wbVtcImFkZGl0aW9uYWxBY3Rpb25zXCJdLmxlbmd0aCArPSB2YWx1ZTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRUcmlnZ2VyLnBtW1wiYWRkaXRpb25hbFBhcmFtQVwiXS5sZW5ndGggKz0gdmFsdWU7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkVHJpZ2dlci5wbVtcImFkZGl0aW9uYWxQYXJhbUJcIl0ubGVuZ3RoICs9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBVcGRhdGVHVUlQYXJhbXMoKTtcclxuXHJcbiAgICAvLyBTY3JvbGwgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdHJpZ2dlciBsaXN0LlxyXG4gICAgbGV0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncnBhcmFtcycpO1xyXG4gICAgZGl2RWxlbWVudC5zY3JvbGxUb3AgPSBkaXZFbGVtZW50LnNjcm9sbEhlaWdodDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SW1hZ2VTaXplKCkge1xyXG4gICAgbGV0IHNlbGVjdGlvbiA9IFNlbGVjdGVkT2JqZWN0cztcclxuICAgIGxldCBpZDtcclxuXHJcbiAgICBpZiAoc2VsZWN0aW9uWzBdLl9jbGFzcyA9PSBcImJnXCIpIHtcclxuICAgICAgICBpZCA9IHNlbGVjdGlvblswXS5wbS5tO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzZWxlY3Rpb25bMF0uX2NsYXNzID09IFwiZGVjb3JcIikge1xyXG4gICAgICAgIGlkID0gc2VsZWN0aW9uWzBdLnBtLm1vZGVsO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgaWQgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG5cclxuICAgICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGxldCB3ID0gaW1nLndpZHRoO1xyXG4gICAgICAgICAgICBsZXQgaCA9IGltZy5oZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICBpbWcucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICBhbGVydChcIlc6IFwiICsgdyArIFwiXFxuSDogXCIgKyBoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGltZy5vbmVycm9yID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGltZy5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgIGFsZXJ0KFwiSW1hZ2Ugbm90IGZvdW5kLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGltZy5zcmMgPSBcImh0dHBzOi8vd3d3LnBsYXptYWJ1cnN0Mi5jb20vbWltYWdlX2NhY2hlLnBocD9pbWFnZV9pZD1cIiArIGlkLnNsaWNlKDEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBhbGVydChcIkltYWdlIG5vdCBmb3VuZC5cIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEltYWdlRGF0YSgpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCBlcnIpID0+IHtcclxuICAgICAgICBsZXQgc2VsZWN0aW9uID0gU2VsZWN0ZWRPYmplY3RzO1xyXG4gICAgICAgIGxldCBpZDtcclxuXHJcbiAgICAgICAgaWYgKHNlbGVjdGlvblswXS5fY2xhc3MgPT0gXCJiZ1wiKSB7XHJcbiAgICAgICAgICAgIGlkID0gc2VsZWN0aW9uWzBdLnBtLm07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2VsZWN0aW9uWzBdLl9jbGFzcyA9PSBcImRlY29yXCIpIHtcclxuICAgICAgICAgICAgaWQgPSBzZWxlY3Rpb25bMF0ucG0ubW9kZWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGlkID09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcblxyXG4gICAgICAgICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdyA9IGltZy53aWR0aDtcclxuICAgICAgICAgICAgICAgIGxldCBoID0gaW1nLmhlaWdodDtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuICAgICAgICAgICAgICAgIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IGltZy53aWR0aDtcclxuICAgICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbWcuaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcclxuICAgICAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXMoW2N0eC5nZXRJbWFnZURhdGEoMCwgMCwgdywgaCkuZGF0YSwgd10pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbWcub25lcnJvciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgaW1nLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiSW1hZ2Ugbm90IGZvdW5kLlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXMoMSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGltZy5zcmMgPSBcImh0dHBzOi8vd3d3LnBsYXptYWJ1cnN0Mi5jb20vbWltYWdlX2NhY2hlLnBocD9pbWFnZV9pZD1cIiArIGlkLnNsaWNlKDEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiSW1hZ2Ugbm90IGZvdW5kLlwiKTtcclxuXHJcbiAgICAgICAgICAgIHJlcygxKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXJyTWluKGFycikge1xyXG4gICAgbGV0IG1pbiA9IEluZmluaXR5O1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGFycltpXSA8IG1pbikge1xyXG4gICAgICAgICAgICBtaW4gPSBhcnJbaV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBtaW47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFyck1heChhcnIpIHtcclxuICAgIGxldCBtYXggPSAtSW5maW5pdHk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoYXJyW2ldID4gbWF4KSB7XHJcbiAgICAgICAgICAgIG1heCA9IGFycltpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1heDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SW1hZ2VQb3NpdGlvbihkYXRhLCB3KSB7XHJcbiAgICBsZXQgYXJyWCA9IFtdO1xyXG4gICAgbGV0IGFyclkgPSBbXTtcclxuXHJcbiAgICBsZXQgbWluWDtcclxuICAgIGxldCBtaW5ZO1xyXG4gICAgbGV0IG1heFg7XHJcbiAgICBsZXQgbWF4WTtcclxuXHJcbiAgICBsZXQgY2VudGVyWCA9IDA7XHJcbiAgICBsZXQgY2VudGVyWSA9IDA7XHJcblxyXG4gICAgaWYgKGRhdGEgIT0gMSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkgKz0gNCkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YVtpICsgM10gPj0gMykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHggPSAoaSAvIDQpICUgdztcclxuICAgICAgICAgICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihpIC8gNCAvIHcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGFyclgucHVzaCh4KTtcclxuICAgICAgICAgICAgICAgIGFyclkucHVzaCh5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWluWCA9IGFyck1pbihhcnJYKTtcclxuICAgICAgICBtaW5ZID0gYXJyTWluKGFyclkpO1xyXG4gICAgICAgIG1heFggPSBhcnJNYXgoYXJyWCk7XHJcbiAgICAgICAgbWF4WSA9IGFyck1heChhcnJZKTtcclxuXHJcbiAgICAgICAgY2VudGVyWCA9IChtaW5YICsgbWF4WCkgLyAyO1xyXG4gICAgICAgIGNlbnRlclkgPSAobWluWSArIG1heFkpIC8gMjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHg6IGNlbnRlclgsXHJcbiAgICAgICAgeTogY2VudGVyWVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXREZWNvck9mZnNldCh4LCB5KSB7XHJcbiAgICBsZXQgc2VsZWN0aW9uID0gU2VsZWN0ZWRPYmplY3RzO1xyXG5cclxuICAgIHNlbGVjdGlvblswXS5wbS51ID0geDtcclxuICAgIHNlbGVjdGlvblswXS5wbS52ID0geTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2VudGVySW1hZ2VYKCkge1xyXG4gICAgbGV0IHNlbGVjdGlvbiA9IFNlbGVjdGVkT2JqZWN0cztcclxuXHJcbiAgICBpZiAoc2VsZWN0aW9uLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgaWYgKHNlbGVjdGlvblswXS5fY2xhc3MgPT0gXCJkZWNvclwiKSB7XHJcbiAgICAgICAgICAgIGdldEltYWdlRGF0YSgpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMgIT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjZW50ZXIgPSBnZXRJbWFnZVBvc2l0aW9uKHJlc1swXSwgcmVzWzFdKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgeCA9IGNlbnRlci54O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXREZWNvck9mZnNldCgteCwgc2VsZWN0aW9uWzBdLnBtLnYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmVlZF9yZWRyYXcgPSAxO1xyXG4gICAgbmVlZF9HVUlQYXJhbXNfdXBkYXRlID0gMTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2VudGVySW1hZ2VZKCkge1xyXG4gICAgbGV0IHNlbGVjdGlvbiA9IFNlbGVjdGVkT2JqZWN0cztcclxuXHJcbiAgICBpZiAoc2VsZWN0aW9uLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgaWYgKHNlbGVjdGlvblswXS5fY2xhc3MgPT0gXCJkZWNvclwiKSB7XHJcbiAgICAgICAgICAgIGdldEltYWdlRGF0YSgpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMgIT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjZW50ZXIgPSBnZXRJbWFnZVBvc2l0aW9uKHJlc1swXSwgcmVzWzFdKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgeSA9IGNlbnRlci55O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXREZWNvck9mZnNldChzZWxlY3Rpb25bMF0ucG0udSwgLXkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmVlZF9yZWRyYXcgPSAxO1xyXG4gICAgbmVlZF9HVUlQYXJhbXNfdXBkYXRlID0gMTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkRnVuY3Rpb25Ub1dpbmRvdygpIHtcclxuICAgIHdpbmRvdy5nZXRJbWFnZVNpemUgPSBnZXRJbWFnZVNpemU7XHJcbiAgICB3aW5kb3cuY2VudGVySW1hZ2VYID0gY2VudGVySW1hZ2VYO1xyXG4gICAgd2luZG93LmNlbnRlckltYWdlWSA9IGNlbnRlckltYWdlWTtcclxuICAgIHdpbmRvdy5hZGRUcmlnZ2VyQWN0aW9uQ291bnQgPSBhZGRUcmlnZ2VyQWN0aW9uQ291bnQ7XHJcbn1cclxuXHJcbmxldCBuZXdVcGRhdGUgPSAwO1xyXG5cclxubGV0IHRhcmdldEVsZW1lbnQ7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGUgPT4ge1xyXG4gICAgdGFyZ2V0RWxlbWVudCA9IGUudGFyZ2V0O1xyXG59KTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGUgPT4ge1xyXG4gICAgaWYoZS5jdHJsS2V5ICYmIGUuY29kZSA9PSBcIktleUFcIiAmJiBjYW52YXNfZm9jdXMpIHtcclxuICAgICAgICB3aW5kb3cuZXMubWFwKGUgPT4ge1xyXG4gICAgICAgICAgICBpZigoZS5leGlzdHMpICYmIChlLl9pc3BoeXNpY2FsKSAmJiAoTWF0Y2hMYXllcihlKSkpIHtcclxuICAgICAgICAgICAgICAgIGUuc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHdpbmRvdy5uZWVkX3JlZHJhdyA9IHRydWU7XHJcbiAgICAgICAgICAgIHdpbmRvdy5uZWVkX0dVSVBhcmFtc191cGRhdGUgPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGUuY3RybEtleSAmJiBlLmNvZGUgPT0gXCJLZXlTXCIgJiYgY2FudmFzX2ZvY3VzKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJmaWVsZF9idG5cIilbMF0uY2xpY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZS5jdHJsS2V5ICYmIGUuY29kZSA9PSBcIktleUZcIiAmJiBjYW52YXNfZm9jdXMpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGxldCBuYW1lID0gcHJvbXB0KFwiRmluZCBvYmplY3RzOlwiLCBcIlwiKTtcclxuXHJcbiAgICAgICAgaWYgKG5hbWUgIT09IG51bGwgJiYgbmFtZSAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICBsZXQgbm90Rm91bmQgPSBmaW5kT2JqZWN0cyhuYW1lKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChub3RGb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJOb3RoaW5nIGZvdW5kLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZS5jb2RlID09IFwiS2V5UlwiICYmIHRhcmdldEVsZW1lbnQgIT0gXCJbb2JqZWN0IEhUTUxJbnB1dEVsZW1lbnRdXCIgJiYgdGFyZ2V0RWxlbWVudC5pZCAhPSBcIm9wY29kZV9maWVsZFwiKSB7XHJcbiAgICAgICAgaWYgKCFpc09ubHlUcmlnZ2VyU2VsZWN0ZWQoKSkge1xyXG4gICAgICAgICAgICByb3RhdGVPYmplY3RzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChlLmN0cmxLZXkgJiYgZS5jb2RlID09IFwiS2V5UlwiICYmIGNhbnZhc19mb2N1cykge1xyXG4gICAgICAgIGlmIChpc09ubHlUcmlnZ2VyU2VsZWN0ZWQoKSAmJiAhaXNOb3RoaW5nU2VsZWN0ZWQoKSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICByZXZlcnNlVHJpZ2dlckFjdGlvbnMoKTtcclxuICAgICAgICAgICAgdW5zZWxlY3RUcmlnZ2VyQWN0aW9ucygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoKGUuY29kZSA9PSBcIk1pbnVzXCIgfHwgZS5jb2RlID09IFwiTnVtcGFkU3VidHJhY3RcIikgJiYgZS5jdHJsS2V5ICYmIGNhbnZhc19mb2N1cykge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgem9vbSAqPSAyO1xyXG4gICAgICAgIHpvb21fdmFsaWRhdGUoKTtcclxuICAgICAgICBuZWVkX3JlZHJhdyA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKChlLmNvZGUgPT0gXCJFcXVhbFwiIHx8IGUuY29kZSA9PSBcIk51bXBhZEFkZFwiKSAmJiBlLmN0cmxLZXkgJiYgY2FudmFzX2ZvY3VzKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICB6b29tICo9IDAuNTtcclxuICAgICAgICB6b29tX3ZhbGlkYXRlKCk7XHJcbiAgICAgICAgbmVlZF9yZWRyYXcgPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlLmN0cmxLZXkgJiYgZS5hbHRLZXkpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHpvb20gPSAxO1xyXG4gICAgICAgIHpvb21fdmFsaWRhdGUoKTtcclxuICAgICAgICBuZWVkX3JlZHJhdyA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGUuY29kZSA9PSBcIktleUhcIiAmJiBlLmN0cmxLZXkpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGlmICh0YXJnZXRFbGVtZW50LmlkID09PSBcIm9wY29kZV9maWVsZFwiKSB7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRhcmdldEVsZW1lbnQudmFsdWU7XHJcblxyXG4gICAgICAgICAgICBsZXQgc3RyMSA9IHByb21wdChcIkVudGVyIHN0cmluZyB0byByZXBsYWNlIGZyb206XCIsIFwiXCIpO1xyXG4gICAgICAgICAgICBpZiAoIXN0cjEpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGxldCBzdHIyID0gcHJvbXB0KFwiRW50ZXIgc3RyaW5nIHRvIHJlcGxhY2UgdG86XCIsIHN0cjEpO1xyXG4gICAgICAgICAgICBpZiAoIXN0cjIpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHRhcmdldEVsZW1lbnQudmFsdWUgPSB2YWx1ZS5yZXBsYWNlQWxsKHN0cjEsIHN0cjIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZS5jb2RlID09IFwiRW50ZXJcIiAmJiB0YXJnZXRFbGVtZW50ICE9IFwiW29iamVjdCBIVE1MSW5wdXRFbGVtZW50XVwiICYmIHRhcmdldEVsZW1lbnQuaWQgIT0gXCJvcGNvZGVfZmllbGRcIiAmJiBjYW52YXNfZm9jdXMpIHtcclxuICAgICAgICBsZXQgc2VsZWN0ZWQgPSBTZWxlY3RlZE9iamVjdHM7XHJcblxyXG4gICAgICAgIGlmIChzZWxlY3RlZC5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgICBsZXQgcGFyYW0gPSBwcm9tcHQoXCJFbnRlciBwYXJhbWV0ZXIgbmFtZTpcIiwgXCJcIik7XHJcblxyXG4gICAgICAgICAgICBpZiAocGFyYW0pIHtcclxuICAgICAgICAgICAgICAgIGxldCBleHByZXNzaW9uID0gcHJvbXB0KFwiRW50ZXIgZXhwcmVzc2lvbjpcIiwgXCJcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGV4cHJlc3Npb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbSA9IHBhcmFtLnRvTG93ZXJDYXNlKCkucmVwbGFjZShcIndpZHRoXCIsIFwid1wiKS5yZXBsYWNlKFwiaGVpZ2h0XCIsIFwiaFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3RlZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgeCA9IHNlbGVjdGVkW2ldLnBtLng7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB5ID0gc2VsZWN0ZWRbaV0ucG0ueTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHcgPSBzZWxlY3RlZFtpXS5wbS53O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaCA9IHNlbGVjdGVkW2ldLnBtLmg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHkgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHcgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkW2ldLnBtW3BhcmFtXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGFyc2VkID0gYWxlc2NyaXB0UGFyc2UoZXhwcmVzc2lvbiwgW3gsIHksIHcsIGgsIGldKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHBhcnNlZCA9PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWxlY3RlZC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFtqXS5zZWxlY3RlZCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFtpXS5zZWxlY3RlZCA9IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVwZGF0ZVBoeXNpY2FsUGFyYW0ocGFyYW0sIHBhcnNlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWxlY3RlZC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkW2pdLnNlbGVjdGVkID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbmVlZF9HVUlQYXJhbXNfdXBkYXRlID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZS5hbHRLZXkpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGUuYWx0S2V5ICYmIHRhcmdldEVsZW1lbnQgPT0gXCJbb2JqZWN0IEhUTUxJbnB1dEVsZW1lbnRdXCIpIHtcclxuICAgICAgICBsZXQgc2VsZWN0ZWQgPSBTZWxlY3RlZE9iamVjdHM7XHJcblxyXG4gICAgICAgIGlmIChzZWxlY3RlZC5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICBsZXQgeCA9IHNlbGVjdGVkWzBdLnBtLng7XHJcbiAgICAgICAgICAgIGxldCB5ID0gc2VsZWN0ZWRbMF0ucG0ueTtcclxuICAgICAgICAgICAgbGV0IHcgPSBzZWxlY3RlZFswXS5wbS53O1xyXG4gICAgICAgICAgICBsZXQgaCA9IHNlbGVjdGVkWzBdLnBtLmg7XHJcblxyXG4gICAgICAgICAgICBpZiAoeCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB4ID0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHkgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgeSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh3ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHcgPSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBoID0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gaSBpcyB1bmRlZmluZWQgYW5kIGknbSBwcmV0dHkgc3VyZSBpdCdzIG5vdCBzdXBwb3NlZCB0byBiZSBsaWtlIHRoYXQuIHNvIHRoaXMgZGVmaW5pdGVseSBkb2Vzbid0IHdvcmsgaG93IGl0IHNob3VsZC5cclxuICAgICAgICAgICAgLy8gaSdsbCBqdXN0IGxlYXZlIGl0IGN1eiBpZGsgaG93IGl0J3Mgc3VwcG9zZWQgdG8gYmUgYW5kIGl0IGRvZXNuJ3QgdGhyb3cgYW4gZXJyb3IgYmVjYXVzZSBvZiBzb21lIGltcGxpY2l0IGdsb2JhbHMgZnJvbSB2YW5pbGxhIGFsZVxyXG4gICAgICAgICAgICBsZXQgcGFyc2VkID0gYWxlc2NyaXB0UGFyc2UodGFyZ2V0RWxlbWVudC52YWx1ZSwgW3gsIHksIHcsIGgsIGldKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcGFyc2VkID09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldEVsZW1lbnQudmFsdWUgPSBwYXJzZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGUuY3RybEtleSAmJiBlLmNvZGUgPT0gXCJLZXlQXCIpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvcHlUb1Blcm1hbmVudENsaXBib2FyZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlLmN0cmxLZXkgJiYgZS5zaGlmdEtleSkge1xyXG4gICAgICAgIGlmIChuZXdVcGRhdGUpIHtcclxuICAgICAgICAgICAgd2luZG93Lm9wZW4oXCJodHRwczovL2dpdGh1Yi5jb20vTGlzQUJDL0FMRUkvcmF3L21haW4vYWxlaS51c2VyLmpzXCIpO1xyXG4gICAgICAgICAgICBuZXdVcGRhdGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gZG9Ub29sdGlwKCkge1xyXG4gICAgbGV0IHRvb2x0aXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHRvb2x0aXAuaWQgPSBcIkFMRUlfdG9vbHRpcFwiO1xyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRvb2x0aXApO1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZSA9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LnRpdGxlKSB7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmRhdGFzZXQudGl0bGUgPSBlLnRhcmdldC50aXRsZTtcclxuICAgICAgICAgICAgZS50YXJnZXQudGl0bGUgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQudGl0bGUpIHtcclxuICAgICAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0LnRpdGxlID0gZS50YXJnZXQucGFyZW50RWxlbWVudC50aXRsZTtcclxuICAgICAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC50aXRsZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBsZWZ0T2Zmc2V0ID0gMTUwXHJcblxyXG4gICAgICAgIGlmIChlLnRhcmdldC5kYXRhc2V0LnRpdGxlKSB7XHJcbiAgICAgICAgICAgIGxldCB0byA9IGUudGFyZ2V0LmRhdGFzZXQudGl0bGUubGVuZ3RoXHJcbiAgICAgICAgICAgIHRvb2x0aXAuc3R5bGUubGVmdCA9IHRvICsgbGVmdE9mZnNldCArIGUuY2xpZW50WCArIDIwICsgXCJweFwiO1xyXG4gICAgICAgICAgICB0b29sdGlwLmlubmVySFRNTCA9IGUudGFyZ2V0LmRhdGFzZXQudGl0bGU7XHJcblxyXG4gICAgICAgICAgICBpZiAodG9vbHRpcC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgIT0gMzEpIHtcclxuICAgICAgICAgICAgICAgIHRvb2x0aXAuc3R5bGUubGVmdCA9IHRvICsgbGVmdE9mZnNldCArIGUuY2xpZW50WCAtIDIwIC0gdG9vbHRpcC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCArIFwicHhcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0LnRpdGxlKSB7XHJcbiAgICAgICAgICAgIGxldCB0byA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC50aXRsZS5sZW5ndGhcclxuICAgICAgICAgICAgdG9vbHRpcC5zdHlsZS5sZWZ0ID0gdG8gKyBsZWZ0T2Zmc2V0ICsgZS5jbGllbnRYICsgMjAgKyBcInB4XCI7XHJcbiAgICAgICAgICAgIHRvb2x0aXAuc3R5bGUudG9wID0gZS5jbGllbnRZICsgXCJweFwiO1xyXG4gICAgICAgICAgICB0b29sdGlwLmlubmVySFRNTCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC50aXRsZTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0b29sdGlwLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCAhPSAzMSkge1xyXG4gICAgICAgICAgICAgICAgdG9vbHRpcC5zdHlsZS5sZWZ0ID0gdG8gKyBsZWZ0T2Zmc2V0ICsgZS5jbGllbnRYIC0gMjAgLSB0b29sdGlwLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoICsgXCJweFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdG9vbHRpcC5zdHlsZS5sZWZ0ID0gLTEwMCArIGxlZnRPZmZzZXQgKyBcInB4XCI7XHJcbiAgICAgICAgICAgIHRvb2x0aXAuc3R5bGUudG9wID0gXCItMTAwcHhcIjtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGFsZWlMb2coREVCVUcsIFwiQWRkZWQgdG9vbHRpcC5cIilcclxufVxyXG5cclxuZnVuY3Rpb24gcGF0Y2hEZWNvclVwbG9hZCgpIHtcclxuICAgIC8vIEFsbG93cyBmb3IgbXVsdGlwbGUgdXBsb2Fkcy5cclxuICAgIGxldCBpbWFnZUxvYWRlciA9ICRpZChcImltYWdlTG9hZGVyXCIpO1xyXG4gICAgLy8gRmlyc3Qgd2UgbWFrZSBpdCBhbGxvdyBtdWx0aXBsZSBmaWxlcyBhbmQgcmVtb3ZlIG9yaWdpbmFsIGV2ZW50IGxpc3RlbmVyLlxyXG4gICAgaW1hZ2VMb2FkZXIuc2V0QXR0cmlidXRlKFwibXVsdGlwbGVcIiwgdHJ1ZSk7XHJcbiAgICBpbWFnZUxvYWRlci5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGhhbmRsZUltYWdlKTtcclxuICAgIC8vIFRoZW4gd2UgcmVnaXN0ZXIgb3VyIG93bi5cclxuICAgIGltYWdlTG9hZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGxldCBmaWxlcyA9IGUudGFyZ2V0LmZpbGVzO1xyXG4gICAgICAgIE5ld05vdGUoYEFMRUk6IFdpbGwgdXBsb2FkICR7ZmlsZXMubGVuZ3RofSBiZy9kZWNvcihzKS5gLCBcIiMyNTk1RkZcIik7XHJcbiAgICAgICAgZm9yIChsZXQgZmlsZSBvZiBmaWxlcykge1xyXG4gICAgICAgICAgICBsZXQgYXJnID0ge3RhcmdldDoge2ZpbGVzOiBbZmlsZV19fTtcclxuICAgICAgICAgICAgaGFuZGxlSW1hZ2UoYXJnKTsgLy8gQ2FsbCBvcmlnaW5hbCBmdW5jdGlvblxyXG4gICAgICAgIH1cclxuICAgIH0sIGZhbHNlKVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRQYXJhbWV0ZXIoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICBsZXQgcmlnaHRQYXJhbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJwYXJhbXNcIik7XHJcbiAgICBpZihyaWdodFBhcmFtcyA9PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgIGlmKHJpZ2h0UGFyYW1zID09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICBpZihpbmRleCA+IDEzKSB7XHJcbiAgICAgICAgbGV0IGlzQWxsVHJpZ2dlciA9IFNlbGVjdGVkT2JqZWN0cy5tYXAobyA9PiAoby5fY2xhc3MgPT0gXCJ0cmlnZ2VyXCIpKTtcclxuICAgICAgICBpZihpc0FsbFRyaWdnZXIuaW5kZXhPZihmYWxzZSkgIT09IC0xKSByZXR1cm47XHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0QWN0aW9uQ291bnQoZWxlbSkge1xyXG4gICAgICAgICAgICBpZihlbGVtLmlzRXh0ZW5kZWQpIHJldHVybiBlbGVtLnBtLnRvdGFsTnVtT2ZBY3Rpb25zO1xyXG4gICAgICAgICAgICBlbHNlIHJldHVybiAxMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG1pbmltdW1BY3Rpb25Db3VudCA9IE1hdGgubWluKC4uLlNlbGVjdGVkT2JqZWN0cy5tYXAobyA9PiBnZXRBY3Rpb25Db3VudChvKSkpO1xyXG4gICAgICAgIGlmKGluZGV4ID49IChtaW5pbXVtQWN0aW9uQ291bnQgKiAzICsgVHJpZ2dlcl9nZXRTZXBhcmF0b3JTdGFydChTZWxlY3RlZE9iamVjdHMubGVuZ3RoKSAtIDEpKSByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGFjdHVhbEluZGV4ID0gMDsgLy8gV2Ugd2lsbCBicnV0ZWZvcmNlLlxyXG4gICAgbGV0IGkgPSAwO1xyXG4gICAgd2hpbGUoaSA8IGluZGV4KSB7XHJcbiAgICAgICAgaSsrO1xyXG4gICAgICAgIGFjdHVhbEluZGV4Kys7XHJcblxyXG4gICAgICAgIGlmKHJpZ2h0UGFyYW1zLmNoaWxkTm9kZXNbYWN0dWFsSW5kZXhdID09IHVuZGVmaW5lZCkgY29udGludWU7XHJcbiAgICAgICAgaWYocmlnaHRQYXJhbXMuY2hpbGROb2Rlc1thY3R1YWxJbmRleF0uY2hpbGROb2Rlc1sxXSA9PT0gdW5kZWZpbmVkKSBhY3R1YWxJbmRleCsrO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChhY3R1YWxJbmRleCA8IHJpZ2h0UGFyYW1zLmNoaWxkTm9kZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgcmlnaHRQYXJhbXMuY2hpbGROb2Rlc1thY3R1YWxJbmRleF0uY2hpbGROb2Rlc1sxXS5pbm5lckhUTUwgPSB2YWx1ZTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0U2VsZWN0aW9uKCkgeyAvLyBERVBSRUNBVEVEISBVU0UgU2VsZWN0ZWRPYmplY3RzIERJUkVDVExZIVxyXG4gICAgcmV0dXJuIFNlbGVjdGVkT2JqZWN0cztcclxufVxyXG5cclxuZnVuY3Rpb24gYXJlT2JqZWN0c09mU2FtZVR5cGUob2JqZWN0cykge1xyXG4gICAgbGV0IHNhbWUgPSAxO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChvYmplY3RzW2ldLl9jbGFzcyAhPSBvYmplY3RzWzBdLl9jbGFzcykge1xyXG4gICAgICAgICAgICBzYW1lID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNhbWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVNhbWVJdGVtcyhhcnJheSkge1xyXG4gICAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldChhcnJheSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVJdGVtcyhhcnJheSwgaXRlbXMpIHtcclxuICAgIGxldCBjb3B5ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShhcnJheSkpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb3B5LnNwbGljZShjb3B5LmluZGV4T2YoaXRlbXNbaV0pLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY29weTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyYW1ldGVyTmFtZXNUb0luZGV4ZXMocGFyYW1ldGVycywgb2JqZWN0UGFyYW1ldGVycykge1xyXG4gICAgbGV0IGluZGV4ZXMgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtZXRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpbmRleGVzLnB1c2gob2JqZWN0UGFyYW1ldGVycy5pbmRleE9mKHBhcmFtZXRlcnNbaV0pKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaW5kZXhlcztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0U2FtZVBhcmFtZXRlcnMob2JqZWN0cykge1xyXG4gICAgbGV0IGRpZmZlcmVudFBhcmFtZXRlcnMgPSBbXTtcclxuICAgIGxldCBwYXJhbWV0ZXJzID0gT2JqZWN0LmtleXMob2JqZWN0c1swXS5wbSk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBwYXJhbWV0ZXJzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmIChvYmplY3RzW2ldLnBtW3BhcmFtZXRlcnNbal1dICE9IG9iamVjdHNbMF0ucG1bcGFyYW1ldGVyc1tqXV0pIHtcclxuICAgICAgICAgICAgICAgIGRpZmZlcmVudFBhcmFtZXRlcnMucHVzaChwYXJhbWV0ZXJzW2pdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkaWZmZXJlbnRQYXJhbWV0ZXJzID0gcmVtb3ZlU2FtZUl0ZW1zKGRpZmZlcmVudFBhcmFtZXRlcnMpO1xyXG4gICAgZGlmZmVyZW50UGFyYW1ldGVycyA9IHJlbW92ZUl0ZW1zKHBhcmFtZXRlcnMsIGRpZmZlcmVudFBhcmFtZXRlcnMpO1xyXG5cclxuICAgIHJldHVybiBwYXJhbWV0ZXJOYW1lc1RvSW5kZXhlcyhkaWZmZXJlbnRQYXJhbWV0ZXJzLCBwYXJhbWV0ZXJzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9Cb29sZWFuKHN0cikge1xyXG4gICAgaWYgKGlzTmFOKE51bWJlcihzdHIpKSkge1xyXG4gICAgICAgIHJldHVybiBzdHIgPT0gXCJ0cnVlXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBCb29sZWFuKHN0cik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHBhcmFtZXRlck1hcCA9IHtcclxuICAgIFwiYm94XCI6IHtcIm1cIjogXCJib3hfbW9kZWxcIn0sXHJcbiAgICBcImRvb3JcIjoge1xyXG4gICAgICAgIFwibW92aW5nXCI6IFwiYm9vbFwiLFxyXG4gICAgICAgIFwidmlzXCI6IFwiYm9vbFwiXHJcbiAgICB9LFxyXG4gICAgXCJyZWdpb25cIjoge1widXNlX29uXCI6IFwicmVnaW9uX2FjdGl2YXRpb25cIn0sXHJcbiAgICBcImRlY29yXCI6IHtcclxuICAgICAgICBcImZcIjogXCJkcmF3X2luX2Zyb250XCIsXHJcbiAgICAgICAgXCJtb2RlbFwiOiBcImRlY29yX21vZGVsXCJcclxuICAgIH0sXHJcbiAgICBcImJnXCI6IHtcclxuICAgICAgICBcInNcIjogXCJib29sXCIsXHJcbiAgICAgICAgXCJmXCI6IFwiZHJhd19pbl9mcm9udFwiLFxyXG4gICAgICAgIFwibVwiOiBcImJnX21vZGVsXCJcclxuICAgIH0sXHJcbiAgICBcIndhdGVyXCI6IHtcImZyaWN0aW9uXCI6IFwiYm9vbFwifSxcclxuICAgIFwidHJpZ2dlclwiOiB7XCJlbmFibGVkXCI6IFwiYm9vbFwifSxcclxuICAgIFwidGltZXJcIjoge1wiZW5hYmxlZFwiOiBcImJvb2xcIn0sXHJcbiAgICBcImd1blwiOiB7XHJcbiAgICAgICAgXCJjb21tYW5kXCI6IFwidGVhbSthbnlcIixcclxuICAgICAgICBcInVwZ1wiOiBcImd1bl91cGdyYWRlXCIsXHJcbiAgICAgICAgXCJtb2RlbFwiOiBcImd1bl9tb2RlbFwiXHJcbiAgICB9LFxyXG4gICAgXCJiYXJyZWxcIjoge1wibW9kZWxcIjogXCJiYXJyZWxfbW9kZWxcIn0sXHJcbiAgICBcImxhbXBcIjoge1wiZmxhcmVcIjogXCJib29sXCJ9LFxyXG4gICAgXCJ2ZWhpY2xlXCI6IHtcIm1vZGVsXCI6IFwidmVoaWNsZV9tb2RlbFwifVxyXG59XHJcblxyXG5mdW5jdGlvbiBmaXhQYXJhbWV0ZXJWYWx1ZShuYW1lLCB2YWx1ZSwgb2JqZWN0VHlwZSkge1xyXG4gICAgbGV0IGZpeGVkVmFsdWU7XHJcblxyXG4gICAgaWYgKFZBTF9UQUJMRVtuYW1lXSkge1xyXG4gICAgICAgIGZpeGVkVmFsdWUgPSBWQUxfVEFCTEVbbmFtZV1bdmFsdWVdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAocGFyYW1ldGVyTWFwW29iamVjdFR5cGVdICYmIHBhcmFtZXRlck1hcFtvYmplY3RUeXBlXVtuYW1lXSkge1xyXG4gICAgICAgICAgICBmaXhlZFZhbHVlID0gVkFMX1RBQkxFWyBwYXJhbWV0ZXJNYXBbb2JqZWN0VHlwZV1bbmFtZV0gXVt2YWx1ZV07XHJcbiAgICAgICAgfWVsc2UgaWYgKG5hbWUuc2xpY2UoMCwgOCkgPT0gXCJhY3Rpb25zX1wiICYmIG5hbWUuc2xpY2UoLTUpID09IFwiX3R5cGVcIikge1xyXG4gICAgICAgICAgICBmaXhlZFZhbHVlID0gVkFMX1RBQkxFW1widHJpZ2dlcl90eXBlXCJdW3ZhbHVlXTtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIGZpeGVkVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZpeGVkVmFsdWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFNhbWVQYXJhbWV0ZXJzKCkge1xyXG4gICAgbGV0IG9iamVjdHMgPSBnZXRTZWxlY3Rpb24oKTtcclxuXHJcbiAgICBpZiAoYXJlT2JqZWN0c09mU2FtZVR5cGUob2JqZWN0cykgJiYgb2JqZWN0cy5sZW5ndGggPj0gMikge1xyXG4gICAgICAgIGxldCBpbmRleGVzID0gZ2V0U2FtZVBhcmFtZXRlcnMob2JqZWN0cyk7XHJcbiAgICAgICAgbGV0IHBhcmFtZXRlcnMgPSBPYmplY3Qua2V5cyhvYmplY3RzWzBdLnBtKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmRleGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBuYW1lID0gcGFyYW1ldGVyc1tpbmRleGVzW2ldXTtcclxuICAgICAgICAgICAgbGV0IHZhbHVlID0gb2JqZWN0c1swXS5wbVtwYXJhbWV0ZXJzW2luZGV4ZXNbaV1dXTtcclxuICAgICAgICAgICAgbGV0IG9iamVjdFR5cGUgPSBvYmplY3RzWzBdLl9jbGFzcztcclxuXHJcbiAgICAgICAgICAgIHNldFBhcmFtZXRlcihpbmRleGVzW2ldLCBmaXhQYXJhbWV0ZXJWYWx1ZShuYW1lLCB2YWx1ZSwgb2JqZWN0VHlwZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcGF0Y2hBTkkoKSB7XHJcbiAgICBsZXQgb2xkQW5pID0gYW5pO1xyXG4gICAgd2luZG93LmFuaSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGxldCBuZ3B1ID0gbmVlZF9HVUlQYXJhbXNfdXBkYXRlO1xyXG4gICAgICAgIG9sZEFuaSgpO1xyXG4gICAgICAgIGlmIChuZ3B1KSB7XHJcbiAgICAgICAgICAgIGlmIChhbGVpU2V0dGluZ3Muc2hvd1NhbWVQYXJhbWV0ZXJzKSBzZXRTYW1lUGFyYW1ldGVycygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFsZWlMb2coREVCVUcsIFwiUGF0Y2hlZCBBTklcIik7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUJveFNwbGl0dGVyU2l6ZSgpIHtcclxuICAgIGxldCBvYmogPSAkaWQoXCJndWlfb2JqYm94XCIpO1xyXG4gICAgbGV0IHJlY3QgPSBvYmouZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBsZXQgc3R5bGUgPSBzcGxpdHRlcjIuc3R5bGU7XHJcbiAgICBzdHlsZS5zZXRQcm9wZXJ0eShcIndpZHRoXCIsIHJlY3Qud2lkdGgpO1xyXG4gICAgc3R5bGUuc2V0UHJvcGVydHkoXCJsZWZ0XCIsIHJlY3QueCk7XHJcbiAgICBzdHlsZS5zZXRQcm9wZXJ0eShcInRvcFwiLCByZWN0LmJvdHRvbSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZE9iakJveFJlc2l6ZSgpIHtcclxuICAgIGxldCBvYmogPSAkaWQoXCJndWlfb2JqYm94XCIpO1xyXG4gICAgbGV0IHNwbGl0dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHdpbmRvdy5zcGxpdHRlcjIgPSBzcGxpdHRlcjtcclxuICAgIGxldCBzdHlsZSA9IHNwbGl0dGVyLnN0eWxlO1xyXG4gICAgJGlkKFwiZmxvYXR0YWdcIikuYXBwZW5kQ2hpbGQoc3BsaXR0ZXIpO1xyXG5cclxuICAgIHN0eWxlLnNldFByb3BlcnR5KFwicG9zaXRpb25cIiwgXCJhYnNvbHV0ZVwiKTtcclxuICAgIHN0eWxlLnNldFByb3BlcnR5KFwiaGVpZ2h0XCIsIFwiNXB4XCIpO1xyXG4gICAgc3R5bGUuc2V0UHJvcGVydHkoXCJjdXJzb3JcIiwgXCJzLXJlc2l6ZVwiKTtcclxuXHJcbiAgICB1cGRhdGVCb3hTcGxpdHRlclNpemUoKTtcclxuXHJcbiAgICBsZXQgc3BsaXR0ZXJDbGlja2luZyA9IGZhbHNlO1xyXG4gICAgc3BsaXR0ZXIub25tb3VzZWRvd24gPSAoKGUpID0+IHtzcGxpdHRlckNsaWNraW5nID0gdHJ1ZX0pO1xyXG4gICAgUk9PVF9FTEVNRU5ULmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIChlKSA9PiB7c3BsaXR0ZXJDbGlja2luZyA9IGZhbHNlfSk7XHJcbiAgICBST09UX0VMRU1FTlQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmICghc3BsaXR0ZXJDbGlja2luZykgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgbmV3X2hlaWdodCA9IGUuY2xpZW50WSAtIDkwO1xyXG4gICAgICAgIG9iai5zdHlsZS5oZWlnaHQgPSBuZXdfaGVpZ2h0O1xyXG4gICAgICAgIHVwZGF0ZUJveFNwbGl0dGVyU2l6ZSgpO1xyXG4gICAgICAgIFNob3dIaWRlT2JqZWN0Qm94KCk7XHJcbiAgICAgICAgU2hvd0hpZGVPYmplY3RCb3goKTtcclxuICAgIH0pO1xyXG4gICAgYWxlaUxvZyhERUJVRywgXCJBZGRlZCBzcGxpdHRlciBmb3Igb2JqZWN0IGJveC5cIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhdGNoX21fZG93bigpIHtcclxuICAgIGxldCBvZ19tZG93biA9IHdpbmRvdy5tX2Rvd247XHJcbiAgICB3aW5kb3cubV9kb3duID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGxldCBwcmV2aW91c0VzTGVuZ3RoID0gZXMubGVuZ3RoO1xyXG4gICAgICAgIG9nX21kb3duKGUpO1xyXG5cclxuICAgICAgICBsZXQgb2NtID0gT2JqZWN0Q29ubmVjdGlvbk1hcHBpbmc7XHJcbiAgICAgICAgbGV0IHV0ZW0gPSB1aWRUb0VsZW1lbnRNYXA7XHJcbiAgICAgICAgbGV0IGFkZGVkT2JqZWN0cyA9IFtdO1xyXG5cclxuICAgICAgICBpZiAoZXMubGVuZ3RoID4gcHJldmlvdXNFc0xlbmd0aCkgeyAvLyBOZXcgZWxlbWVudCBpcyBtYWRlLlxyXG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IGVzW2VzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICBpZiAoIShcInhcIiBpbiBlbGVtZW50LnBtKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAvLyBXZSBub3cgaGF2ZSB0byBkbyBqb2Igb2YgZml4UG9zLCB3ZSBjYW5ub3Qgc2V0IGZpeFBvcyB0byBoYXZlIGl0IGFyZ3VtZW50LWJhc2VkIGRpcmVjdGx5IGJlY2F1c2Ugb2Ygc2NvcGluZ1xyXG4gICAgICAgICAgICAvLyBTbyB3ZSBoYXZlIHRvIGRvIGl0IG91cnNlbHZlcy5cclxuICAgICAgICAgICAgbGV0IHBtID0gZWxlbWVudC5wbTtcclxuICAgICAgICAgICAgbGV0IHJvdW5kID0gZnVuY3Rpb24obnVtKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChudW0gLyBHUklEX1NOQVBQSU5HKSAqIEdSSURfU05BUFBJTkdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwbS54ID0gcm91bmQocG0ueCk7XHJcbiAgICAgICAgICAgIHBtLnkgPSByb3VuZChwbS55KTtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuX2lzcmVzaXphYmxlKSB7XHJcbiAgICAgICAgICAgICAgICBwbS53ID0gcm91bmQocG0udyk7XHJcbiAgICAgICAgICAgICAgICBwbS5oID0gcm91bmQocG0uaCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gT0NNIG1hcHBpbmcuXHJcbiAgICAgICAgICAgIGlmKGFsZWlTZXR0aW5ncy5vY21FbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSBwcmV2aW91c0VzTGVuZ3RoOyBpIDwgZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBvY21bZXNbaV0ucG0udWlkXSA9IHtcImJ5XCI6IFtdLCBcInRvXCI6IFtdfTtcclxuICAgICAgICAgICAgICAgICAgICB1dGVtW2VzW2ldLnBtLnVpZF0gPSBlc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBhZGRlZE9iamVjdHMucHVzaChlc1tpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gTm93IHdlIGp1c3QgdXBkYXRlLlxyXG4gICAgICAgICAgICB3aW5kb3cubmVlZF9HVUlQYXJhbXNfdXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgVXBkYXRlR1VJT2JqZWN0c0xpc3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBvYmogb2YgYWRkZWRPYmplY3RzKSBfX09DTV9IYW5kbGVPYmplY3Qob2JqKTsgLy8gSSBrbm93IEkgZG9uJ3QgaGF2ZSB0byBkbyB0aGlzIGJ1dCBJIGFtIGNhcmVsZXNzIHJpZ2h0IG5vdy5cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gUmVvcmRlclRyaWdnZXJQcm9wZXJ0eShyZXN1bHQpIHtcclxuICAgIGxldCBleGVjdXRlID0gcmVzdWx0LnBtLmV4ZWN1dGU7XHJcbiAgICBleGVjdXRlID0gZXhlY3V0ZSA/IGV4ZWN1dGUgOiBmYWxzZTtcclxuXHJcbiAgICBkZWxldGUgcmVzdWx0LnBtLmV4ZWN1dGU7XHJcblxyXG4gICAgbGV0IGVudHJpZXMgPSBPYmplY3QuZW50cmllcyhyZXN1bHQucG0pO1xyXG4gICAgZW50cmllcy5zcGxpY2UoNSwgMCwgW1wiZXhlY3V0ZVwiLCBleGVjdXRlXSk7XHJcbiAgICByZXN1bHQucG0gPSBPYmplY3QuZnJvbUVudHJpZXMoZW50cmllcyk7XHJcbn1cclxuXHJcbndpbmRvdy5TZWxlY3RlZE9iamVjdHMgPSBbXTtcclxuXHJcbmZ1bmN0aW9uIHBhdGNoRW50aXR5Q2xhc3MoKSB7XHJcbiAgICBmdW5jdGlvbiBjbGVhblVwU08oKSB7XHJcbiAgICAgICAgc2V0VGltZW91dChjbGVhblVwU08sIDUgKiAxMDAwKTtcclxuICAgICAgICAvLyBNYW51YWxseSB0cmlnZ2VyIHNlbGVjdCBjaGFuZ2UgaWYgcmVxdWlyZWQuXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IFNlbGVjdGVkT2JqZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZSA9IFNlbGVjdGVkT2JqZWN0c1tpXTtcclxuICAgICAgICAgICAgaWYoIWUuc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgIGUuc2VsZWN0Q2hhbmdlKGZhbHNlLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIEZvciBzb21lIHJlYXNvbiwgdGhlcmUgY2FuIGJlIHVuc2VsZWN0ZWQgb2JqZWN0cyBpbiBTZWxlY3RlZE9iamVjdHMsIHN0aWxsLCBhbmQgc29tZXRpbWVzIGluZGV4ZXMgY2FuIGJlIG9mZiBib3VuZCwgd2UgaGF2ZSB0byBmaXggaXQgdG9vLlxyXG4gICAgc2V0VGltZW91dChjbGVhblVwU08sIDUgKiAxMDAwKTtcclxuXHJcbiAgICBsZXQgb2dfRSA9IEU7XHJcbiAgICB3aW5kb3cuRSA9IGZ1bmN0aW9uKF9jbGFzcykge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBuZXcgb2dfRShfY2xhc3MpO1xyXG5cclxuICAgICAgICAvLyBBZGRpbmcgcHJvcGVydHkuXHJcbiAgICAgICAgaWYoX2NsYXNzID09IFwid2F0ZXJcIikgcmVzdWx0LnBtLmF0dGFjaCA9IC0xO1xyXG4gICAgICAgIGVsc2UgaWYoX2NsYXNzID09IFwiZGVjb3JcIikgcmVzdWx0LnBtLnRleHQgPSBcIkhlbGxvIFdvcmxkIVwiO1xyXG4gICAgICAgIGVsc2UgaWYoX2NsYXNzID09IFwidHJpZ2dlclwiKSB7XHJcbiAgICAgICAgICAgIFJlb3JkZXJUcmlnZ2VyUHJvcGVydHkocmVzdWx0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihfY2xhc3MgPT0gXCJyZWdpb25cIikgcmVzdWx0LnBtLnVzZXNfdGltZXIgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgcmVzdWx0LmZpeFBvcyA9IGZ1bmN0aW9uKCkge307IC8vIEZvciBwcm9wZXIgc25hcHBpbmcuXHJcbiAgICAgICAgcmVzdWx0LnNlbGVjdENoYW5nZSA9IGZ1bmN0aW9uKGlzU2VsZWN0ZWQsIGZvcmNlID0gZmFsc2UpIHtcclxuICAgICAgICAgICAgaWYoKGlzU2VsZWN0ZWQgJiYgKCFyZXN1bHQuc2VsZWN0ZWQgfHwgZm9yY2UpKSkge1xyXG4gICAgICAgICAgICAgICAgU2VsZWN0ZWRPYmplY3RzLnB1c2gocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZighaXNTZWxlY3RlZCAmJiAocmVzdWx0LnNlbGVjdGVkIHx8IGZvcmNlKSkge1xyXG4gICAgICAgICAgICAgICAgU2VsZWN0ZWRPYmplY3RzLnNwbGljZShTZWxlY3RlZE9iamVjdHMuaW5kZXhPZihyZXN1bHQpLCAxKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBQcm94eVNldChfLCBrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmKGtleSA9PSBcInNlbGVjdGVkXCIpIHJlc3VsdC5zZWxlY3RDaGFuZ2UodmFsdWUpO1xyXG4gICAgICAgICAgICBlbHNlIHJlc3VsdFtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVzdWx0LlJlbW92ZSA9ICgpID0+IHsgLy8gQmV0dGVyIGJlIHNhZmUuLi5cclxuICAgICAgICAgICAgTmV3Tm90ZShgQUxFSTogVGhpcyBhYnNvbHV0ZWx5IHNob3VsZCBub3QgaGFwcGVuLCBwbGVhc2UgcmVwb3J0IHRvIEFMRUkgZGV2ZWxvcGVycywgZXJyb3I6IEUuUmVtb3ZlIGdvdCBjYWxsZWQgd2hlbiBpdCBzaG91bGRuJ3QgYmVgLCBgI0ZGMDAwMGApO1xyXG4gICAgICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBsZXQgcHJveHkgPSBuZXcgUHJveHkocmVzdWx0LCB7XHJcbiAgICAgICAgICAgIHNldDogUHJveHlTZXRcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiBwcm94eTtcclxuICAgIH1cclxuICAgIGFsZWlMb2coREVCVUcsIFwiUGF0Y2hlZCBlbnRpdHkuXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBQYXN0ZUZyb21DbGlwQm9hcmQoQ2xpcE5hbWUpIHtcclxuICAgIHZhciBjbGlwYm9hcmQgPSBuZXcgT2JqZWN0KCk7XHJcbiAgICBpZiAoc2Vzc2lvblN0b3JhZ2VbQ2xpcE5hbWVdID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGNsaXBib2FyZCA9IHVuc2VyaWFsaXplKHNlc3Npb25TdG9yYWdlW0NsaXBOYW1lXSk7XHJcbiAgICBsY3ooKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgaWYgKGVzW2ldLmV4aXN0cykge1xyXG4gICAgICAgICAgICBpZiAoZXNbaV0uc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgIGxkbignZXNbJyArIGkgKyAnXS5zZWxlY3RlZD1mYWxzZTsnKTtcclxuICAgICAgICAgICAgICAgIGxuZCgnZXNbJyArIGkgKyAnXS5zZWxlY3RlZD10cnVlOycpO1xyXG4gICAgICAgICAgICAgICAgZXNbaV0uc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gdmFyIG1pbl94ID0gMDtcclxuICAgIHZhciBtYXhfeCA9IDA7XHJcbiAgICB2YXIgbWluX3kgPSAwO1xyXG4gICAgdmFyIG1heF95ID0gMDtcclxuICAgIGkgPSAwO1xyXG4gICAgdmFyIGZyb21fb2JqID0gZXMubGVuZ3RoO1xyXG4gICAgd2hpbGUgKHR5cGVvZihjbGlwYm9hcmRbaV0pICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHZhciBuZXdwYXJhbSA9IGVzLmxlbmd0aDtcclxuICAgICAgICBsZG4oJ2VzWycgKyBuZXdwYXJhbSArICddLmV4aXN0cz10cnVlOycpO1xyXG4gICAgICAgIGxuZCgnZXNbJyArIG5ld3BhcmFtICsgJ10uZXhpc3RzPWZhbHNlOycpO1xyXG4gICAgICAgIGVzW25ld3BhcmFtXSA9IG5ldyBFKGNsaXBib2FyZFtpXS5fY2xhc3MpO1xyXG4gICAgICAgIGZvciAobGV0IHBhcmFtIGluIGNsaXBib2FyZFtpXSkge1xyXG4gICAgICAgICAgICBlc1tuZXdwYXJhbV1bcGFyYW1dID0gY2xpcGJvYXJkW2ldW3BhcmFtXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZihlc1tuZXdwYXJhbV0ucG0ueCkgIT09ICd1bmRlZmluZWQnKVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mKGVzW25ld3BhcmFtXS5wbS55KSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBtaW5feCA9IGVzW25ld3BhcmFtXS5wbS54O1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbl95ID0gZXNbbmV3cGFyYW1dLnBtLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4X3ggPSBlc1tuZXdwYXJhbV0ucG0ueDtcclxuICAgICAgICAgICAgICAgICAgICBtYXhfeSA9IGVzW25ld3BhcmFtXS5wbS55O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YoZXNbbmV3cGFyYW1dLnBtLncpICE9PSAndW5kZWZpbmVkJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZihlc1tuZXdwYXJhbV0ucG0uaCkgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5feCArPSBlc1tuZXdwYXJhbV0ucG0udyAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhfeCArPSBlc1tuZXdwYXJhbV0ucG0udyAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5feSArPSBlc1tuZXdwYXJhbV0ucG0uaCAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhfeSArPSBlc1tuZXdwYXJhbV0ucG0uaCAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluX3ggPSBNYXRoLm1pbihtaW5feCwgZXNbbmV3cGFyYW1dLnBtLngpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbl95ID0gTWF0aC5taW4obWluX3ksIGVzW25ld3BhcmFtXS5wbS55KTtcclxuICAgICAgICAgICAgICAgICAgICBtYXhfeCA9IE1hdGgubWF4KG1heF94LCBlc1tuZXdwYXJhbV0ucG0ueCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4X3kgPSBNYXRoLm1heChtYXhfeSwgZXNbbmV3cGFyYW1dLnBtLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YoZXNbbmV3cGFyYW1dLnBtLncpICE9PSAndW5kZWZpbmVkJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZihlc1tuZXdwYXJhbV0ucG0uaCkgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhfeCA9IE1hdGgubWF4KG1heF94LCBlc1tuZXdwYXJhbV0ucG0ueCArIGVzW25ld3BhcmFtXS5wbS53KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heF95ID0gTWF0aC5tYXgobWF4X3ksIGVzW25ld3BhcmFtXS5wbS55ICsgZXNbbmV3cGFyYW1dLnBtLmgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gaSsrO1xyXG4gICAgfVxyXG4gICAgbGRuKCdtX2RyYWdfc2VsZWN0ZWQ9dHJ1ZTsnKTtcclxuICAgIGxkbigncGFpbnRfZHJhd19tb2RlPXRydWU7Jyk7XHJcbiAgICBsZG4oJ3F1aWNrX3BpY2tfaWdub3JlX29uZV9jbGljaz10cnVlOycpO1xyXG4gICAgbG5kKCdtX2RyYWdfc2VsZWN0ZWQ9ZmFsc2U7Jyk7XHJcbiAgICBsbmQoJ3BhaW50X2RyYXdfbW9kZT1mYWxzZTsnKTtcclxuICAgIGxuZCgncXVpY2tfcGlja19pZ25vcmVfb25lX2NsaWNrPWZhbHNlOycpO1xyXG4gICAgbGRpcyA9IHRydWU7XHJcbiAgICBwYWludF9kcmF3X21vZGUgPSB0cnVlO1xyXG4gICAgcXVpY2tfcGlja19pZ25vcmVfb25lX2NsaWNrID0gdHJ1ZTtcclxuICAgIGxtZHJ3YSA9IGxtd2E7XHJcbiAgICBsbWRyd2IgPSBsbXdiO1xyXG4gICAgLy8gT3JpZ2luYWwgY29kZSBieSBQcm9zdVxyXG4gICAgbGV0IG1fcG9zX3ggPSBsbXdhO1xyXG4gICAgbGV0IG1fcG9zX3kgPSBsbXdiO1xyXG5cclxuICAgIG1fZHJhZ194ID0gbW91c2VfeDtcclxuICAgIG1fZHJhZ195ID0gbW91c2VfeTtcclxuICAgIGxldCBtX2Rvd25feCA9IG1fcG9zX3g7XHJcbiAgICBsZXQgbV9kb3duX3kgPSBtX3Bvc195O1xyXG4gICAgdmFyIHgxID0gTWF0aC5yb3VuZCgobV9wb3NfeCkgLyBHUklEX1NOQVBQSU5HKSAqIEdSSURfU05BUFBJTkc7XHJcbiAgICB2YXIgeTEgPSBNYXRoLnJvdW5kKChtX3Bvc195KSAvIEdSSURfU05BUFBJTkcpICogR1JJRF9TTkFQUElORztcclxuICAgIHZhciBsb194ID0gTWF0aC5yb3VuZCgoeDEgLSAobWluX3ggKyBtYXhfeCkgLyAyKSAvIEdSSURfU05BUFBJTkcpICogR1JJRF9TTkFQUElORztcclxuICAgIHZhciBsb195ID0gTWF0aC5yb3VuZCgoeTEgLSAobWluX3kgKyBtYXhfeSkgLyAyKSAvIEdSSURfU05BUFBJTkcpICogR1JJRF9TTkFQUElORztcclxuXHJcbiAgICBsZXQgb2NtID0gT2JqZWN0Q29ubmVjdGlvbk1hcHBpbmc7XHJcbiAgICBsZXQgdXRlbSA9IHVpZFRvRWxlbWVudE1hcDtcclxuXHJcbiAgICBsZXQgYWRkZWRPYmplY3RzID0gW107XHJcblxyXG4gICAgZm9yICh2YXIgaTIgPSBmcm9tX29iajsgaTIgPCBlcy5sZW5ndGg7IGkyKyspIHtcclxuICAgICAgICBpZiAodHlwZW9mKGVzW2kyXS5wbS51aWQpICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICB2YXIgb2xkX3VpZCA9IGVzW2kyXS5wbS51aWQ7XHJcbiAgICAgICAgICAgIGVzW2kyXS5leGlzdHMgPSB0cnVlO1xyXG4gICAgICAgICAgICBlc1tpMl0ucG0udWlkID0gUmFuZG9taXplTmFtZShlc1tpMl0ucG0udWlkKTtcclxuXHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpMyA9IGZyb21fb2JqOyBpMyA8IGVzLmxlbmd0aDsgaTMrKykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcGFyYW0gaW4gZXNbaTNdLnBtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXNbaTNdLnBtW3BhcmFtXSA9IFVVSURSX1JlcGxhY2UoZXNbaTNdLnBtW3BhcmFtXSwgb2xkX3VpZCwgZXNbaTJdLnBtLnVpZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKGFsZWlTZXR0aW5ncy5vY21FbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICBvY21bZXNbaTJdLnBtLnVpZF0gPSB7XCJieVwiOiBbXSwgXCJ0b1wiOiBbXX07XHJcbiAgICAgICAgICAgICAgICB1dGVtW2VzW2kyXS5wbS51aWRdID0gZXNbaTJdO1xyXG4gICAgICAgICAgICAgICAgYWRkZWRPYmplY3RzLnB1c2goZXNbaTJdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mKGVzW2kyXS5wbS54KSAhPT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YoZXNbaTJdLnBtLnkpICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgbG5kKCdlc1snICsgaTIgKyAnXS5wbS54PScgKyBlc1tpMl0ucG0ueCArICc7Jyk7XHJcbiAgICAgICAgICAgICAgICBsbmQoJ2VzWycgKyBpMiArICddLnBtLnk9JyArIGVzW2kyXS5wbS55ICsgJzsnKTtcclxuICAgICAgICAgICAgICAgIGVzW2kyXS5wbS54ICs9IGxvX3g7XHJcbiAgICAgICAgICAgICAgICBlc1tpMl0ucG0ueSArPSBsb195O1xyXG4gICAgICAgICAgICAgICAgZXNbaTJdLmZpeFBvcygpO1xyXG4gICAgICAgICAgICAgICAgbGRuKCdlc1snICsgaTIgKyAnXS5wbS54PScgKyBlc1tpMl0ucG0ueCArICc7Jyk7XHJcbiAgICAgICAgICAgICAgICBsZG4oJ2VzWycgKyBpMiArICddLnBtLnk9JyArIGVzW2kyXS5wbS55ICsgJzsnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gQWdhaW4gYnkgUHJvc3VcclxuICAgIHgxID0gTWF0aC5yb3VuZCgobV9wb3NfeCAtIG1fZG93bl94KSAvIEdSSURfU05BUFBJTkcpICogR1JJRF9TTkFQUElORztcclxuICAgIHkxID0gTWF0aC5yb3VuZCgobV9wb3NfeSAtIG1fZG93bl95KSAvIEdSSURfU05BUFBJTkcpICogR1JJRF9TTkFQUElORztcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoZXNbaV0uX2lzcGh5c2ljYWwgJiYgZXNbaV0uZXhpc3RzICYmIGVzW2ldLnNlbGVjdGVkICYmIChNYXRjaExheWVyKGVzW2ldKSB8fCBwYWludF9kcmF3X21vZGUpKSB7XHJcbiAgICAgICAgICAgIGVzW2ldLnBtLnggKz0geDE7XHJcbiAgICAgICAgICAgIGVzW2ldLnBtLnkgKz0geTE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbV9kb3duX3ggKz0geDE7XHJcbiAgICBtX2Rvd25feSArPSB5MTtcclxuICAgIGxmeihmYWxzZSk7XHJcbiAgICBmb3IobGV0IG9iaiBvZiBhZGRlZE9iamVjdHMpIF9fT0NNX0hhbmRsZU9iamVjdChvYmopO1xyXG4gICAgYXNzaWduT2JqZWN0SURzKCk7XHJcbiAgICBhc3NpZ25PYmplY3RQcmlvcml0eSgpO1xyXG4gICAgd2luZG93Lm5lZWRfcmVkcmF3ID0gdHJ1ZTtcclxuICAgIHdpbmRvdy5uZWVkX0dVSVBhcmFtc191cGRhdGUgPSB0cnVlO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNlcnZlclJlcXVlc3RfaGFuZGxlTWFwRGF0YShtYXBDb2RlKSB7XHJcbiAgICAvLyBCcmFuY2ggb2YgcGF0Y2hTZXJ2ZXJSZXF1ZXN0XHJcbiAgICAvLyBNYWRlIHRvIGRlYWwgd2l0aCBtYXAgc291cmNlIHJlbGF0ZWQgdGhpbmdzLlxyXG4gICAgYWxlaUxvZyhERUJVRywgXCJQYXJzaW5nIG1hcCBzb3VyY2Ugbm93LlwiKTtcclxuXHJcbiAgICBjb25zdCBvYmplY3RLZXlWYWx1ZVJlZ2V4ID0gLyhcXHcrKT0oKC0/XFxkKyhcXC5cXGQrKT8pfChcIlsgLX5dKlwiKXx0cnVlfGZhbHNlKS87XHJcbiAgICBjb25zdCBvYmplY3RDcmVhdGlvblJlZ2V4ID0gL3E9ZXNcXFtcXGQrXFxdPW5ldyBFXFwoXCIoXFx3KylcIlxcKS87XHJcblxyXG4gICAgbGV0IGV4cHJlc3Npb25zID0gbWFwQ29kZS5zcGxpdChcIjtcXG5cIik7XHJcblxyXG4gICAgbGV0IGN1cnJlbnRFbGVtZW50ID0gbnVsbDtcclxuXHJcbiAgICB3aW5kb3cuZXMgPSBuZXcgQXJyYXkoKTsgLy8gY2xlYXIuXHJcbiAgICBsZXQgaW5kZXggPSAyOyAvLyBXZSBza2lwIHZhciBxOyBhbmQgZXMgPSBuZXcgQXJyYXkoKTtcclxuICAgIGZvciAoO2luZGV4IDwgZXhwcmVzc2lvbnMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgbGV0IGV4cHJlc3Npb24gPSBleHByZXNzaW9uc1tpbmRleF07XHJcblxyXG4gICAgICAgIC8vIFNraXAgaWYgaXQncyBqdXN0IG9ubHkgdGFiIG9yIG5ld2xpbmVzXHJcbiAgICAgICAgaWYoZXhwcmVzc2lvbi5yZXBsYWNlQWxsKFwiXFxuXCIsIFwiXCIpLnJlcGxhY2VBbGwoXCJcXHRcIiwgXCJcIikubGVuZ3RoID09IDApIHtjb250aW51ZX07XHJcblxyXG4gICAgICAgIC8vIE1hcCBJRCByZWxhdGVkIHN0dWZmLlxyXG4gICAgICAgIGlmIChleHByZXNzaW9uLmluZGV4T2YoXCJtYXBpZCA9ICdcIikgIT0gLTEpIHtcclxuICAgICAgICAgICAgd2luZG93Lm1hcGlkID0gZXhwcmVzc2lvbi5zcGxpdChcIiA9IFwiKVsxXS5zbGljZSgxLCAtMSk7XHJcbiAgICAgICAgICAgIG1hcGlkX2ZpZWxkLnZhbHVlID0gbWFwaWQ7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChleHByZXNzaW9uID09IFwiXFx0XFx0bWFwaWRfZmllbGQudmFsdWUgPSBtYXBpZFwiKSB7Y29udGludWU7fVxyXG4gICAgICAgIGVsc2UgaWYgKGV4cHJlc3Npb24uaW5kZXhPZihcIm1hcHJpZ2h0cy5pbm5lckhUTUw9J1wiKSAhPSAtMSkge1xyXG4gICAgICAgICAgICBsZXQgcmlnaHRzID0gZXhwcmVzc2lvbi5zcGxpdChcIjtcIilbMF0uc3BsaXQoXCIuaW5uZXJIVE1MPVwiKVsxXS5zbGljZSgxLCAtMSk7XHJcbiAgICAgICAgICAgIG1hcHJpZ2h0cy52YWx1ZSA9IHJpZ2h0cztcclxuICAgICAgICAgICAgTmV3Tm90ZShgTWFwICcke21hcGlkfScgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IGxvYWRlZC5gLCBub3RlX2dvb2QpO1xyXG4gICAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBY3R1YWwgbWFwZGF0YS5cclxuICAgICAgICBpZihleHByZXNzaW9uLmluZGV4T2YoXCI7cT1xLnBtO1wiKSAhPSAtMSkgeyAvLyBDcmVhdGlvbiB3aGljaCBpcyBxPWVzWy4uLl09bmV3IEUoLi4uKTtxPXEucG07cS4oLi4uKT0oLi4uKTtcclxuICAgICAgICAgICAgbGV0IGNyZWF0aW9uID0gb2JqZWN0Q3JlYXRpb25SZWdleC5leGVjKGV4cHJlc3Npb24pO1xyXG4gICAgICAgICAgICBjdXJyZW50RWxlbWVudCA9IG5ldyBFKGNyZWF0aW9uWzFdKTtcclxuICAgICAgICAgICAgZXNbZXMubGVuZ3RoXSA9IGN1cnJlbnRFbGVtZW50O1xyXG5cclxuICAgICAgICAgICAgbGV0IHNwbHQgPSBleHByZXNzaW9uLnNwbGl0KFwiO1wiKTtcclxuICAgICAgICAgICAgaWYgKHNwbHQubGVuZ3RoID4gMykge1xyXG4gICAgICAgICAgICAgICAgLy8gVGhlcmUgaXMgc3VwcG9zZWQgdG8gYmUgb25seSAzIDsnc1xyXG4gICAgICAgICAgICAgICAgLy8gaW5pdGlhbGl6aW5nO3NldHRpbmc7Zmlyc3RQcm9wZXJ0eVxyXG4gICAgICAgICAgICAgICAgLy8gQXNzdW1pbmcgdGhhdCBzZXJ2ZXIgb25seSBnaXZlcyBmaXJzdCBwcm9wZXJ0eSBhbmQgZG9lcyBub3Qgc2VuZCBtb3JlIHRoYW4gMSBpbiBjcmVhdGlvbiBsaW5lXHJcbiAgICAgICAgICAgICAgICBhbGVpTG9nKFdBUk4sIGBFeHBlY3RlZCAzIGl0ZW1zLCBnb3QgJHtzcGx0Lmxlbmd0aH0gLSAke3NwbHR9YCk7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBleHByZXNzaW9uID0gc3BsdFsyXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIEtleSB2YWx1ZVxyXG4gICAgICAgIC8vIEluIGZvcm1hdCBvZiBxLihfX18pPShfX18pO1xyXG4gICAgICAgIGxldCBtYXRjaEtleVZhbHVlID0gb2JqZWN0S2V5VmFsdWVSZWdleC5leGVjKGV4cHJlc3Npb24pO1xyXG5cclxuICAgICAgICBpZiAobWF0Y2hLZXlWYWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBhbGVpTG9nKFdBUk4sIGBVbmFibGUgdG8gZmlndXJlIG91dCB3aGF0IGtpbmQgb2YgY29kZSBpcyBcIiR7ZXhwcmVzc2lvbn1cIiwgeW91IE1JR0hUIGhhdmUgaXNzdWVzLmApO1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGtleSA9IG1hdGNoS2V5VmFsdWVbMV07XHJcbiAgICAgICAgbGV0IHZhbHVlID0gbWF0Y2hLZXlWYWx1ZVsyXS5yZXBsYWNlQWxsKFwiXFxcXC9cIiwgXCIvXCIpO1xyXG4gICAgICAgIGlmICh2YWx1ZVswXSAhPSAnXCInKSB7IC8vIE5vdCBhIHN0cmluZy5cclxuICAgICAgICAgICAgaWYgKHZhbHVlID09IFwidHJ1ZVwiKSB2YWx1ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGVsc2UgaWYodmFsdWUgPT0gXCJmYWxzZVwiKSB2YWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBlbHNlIGlmKHZhbHVlLmluZGV4T2YoXCIuXCIpICE9IC0xKSB2YWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUpO1xyXG4gICAgICAgICAgICBlbHNlIHZhbHVlID0gcGFyc2VJbnQodmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIElzIGEgc3RyaW5nLiBXZSBqdXN0IHN0cmlwIHF1b3RhdGlvbiBtYXJrcyBhbmQgZml4IGFwb3N0cm9waGVzLlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKDEsIC0xKS5yZXBsYWNlQWxsKFwiXFxcXCdcIiwgXCInXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjdXJyZW50RWxlbWVudC5wbVtrZXldID0gdmFsdWU7XHJcblxyXG4gICAgfVxyXG4gICAgaWYoYWxlaVNldHRpbmdzLmV4dGVuZGVkVHJpZ2dlcnMpIHBhcnNlRXh0ZW5kZWRUcmlnZ2VycygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVTZXJ2ZXJSZXF1ZXN0UmVzcG9uc2UocmVxdWVzdCwgb3BlcmF0aW9uLCByZXNwb25zZSkge1xyXG4gICAgaWYgKHJlc3BvbnNlLmluZGV4T2YoXCJ2YXIgZXMgPSBuZXcgQXJyYXkoKTtcIikgIT0gLTEpIHtcclxuICAgICAgICB3aW5kb3cuU2VsZWN0ZWRPYmplY3RzID0gW107XHJcbiAgICAgICAgT0NNX0xPQURFRCA9IGZhbHNlO1xyXG4gICAgICAgIFNlcnZlclJlcXVlc3RfaGFuZGxlTWFwRGF0YShyZXNwb25zZSk7XHJcbiAgICAgICAgQ3JlYXRlQ29ubmVjdGlvbk1hcHBpbmcoKTtcclxuICAgIH1lbHNlIGlmIChyZXNwb25zZS5pbmRleE9mKFwia25vd25tYXBzID0gW1wiKSAhPT0gLTEpIHtcclxuICAgICAgICB3aW5kb3cua25vd25tYXBzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgbWFwIG9mIHJlc3BvbnNlLm1hdGNoKC9cIiguKj8pXCIvZykpIHtcclxuICAgICAgICAgICAga25vd25tYXBzLnB1c2gobWFwLnNsaWNlKDEsIC0xKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgYWxlaUxvZyhERUJVRywgYFVwZGF0ZWQga25vd25tYXBzIHdpdGggJHtrbm93bm1hcHMubGVuZ3RofSBtYXBzYCk7XHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgICAgYWxlaUxvZyhERUJVRzIsIGBFdmFsaW5nIGZvciByZXF1ZXN0ICR7QU5TSV9ZRUxMT1d9XCIke3JlcXVlc3R9XCIke0FOU0lfUkVTRVR9IHdpdGggb3BlcmF0aW9uIG9mICR7QU5TSV9ZRUxMT1d9XCIke29wZXJhdGlvbn1cIiR7QU5TSV9SRVNFVH06ICR7cmVzcG9uc2V9YClcclxuICAgICAgICB0cnkge0pTX2V2YWwocmVzcG9uc2UpO31cclxuICAgICAgICBjYXRjaChlKSB7TmV3Tm90ZShcIkV2YWwgZXJyb3IhXCIsIG5vdGVfYmFkKTsgY29uc29sZS5lcnJvcihlKTsgYWxlaUxvZyhJTkZPLCBgRXZhbCBFcnJvciBmcm9tICR7cmVxdWVzdH0sIGZvciBvcCAke29wZXJhdGlvbn0gd2hvc2UgcmVzcG9uc2UgaXMgJHtyZXNwb25zZX1gKX1cclxuICAgIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1ha2VSZXF1ZXN0KG1ldGhvZCwgdXJsLCBkYXRhKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4aHIub3BlbihtZXRob2QsIHVybCk7XHJcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LXR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XHJcbiAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID49IDIwMCAmJiB0aGlzLnN0YXR1cyA8IDMwMCkge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7c3RhdHVzOiAyMDAsIHJlc3BvbnNlOiB4aHIucmVzcG9uc2V9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiB0aGlzLnN0YXR1cyxcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZWplY3Qoe1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiB0aGlzLnN0YXR1cyxcclxuICAgICAgICAgICAgICAgIHN0YXR1c1RleHQ6IHhoci5zdGF0dXNUZXh0XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgeGhyLnNlbmQoZGF0YSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlRGVjb3JMaXN0KCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBsZXQgbGlzdF9uYXRpdmUgPSAkaWQoXCJsaXN0X25hdGl2ZVwiKTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgQUxFSV9kZWNvcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGRlY29yID0gQUxFSV9kZWNvcnNbaV07XHJcbiAgICAgICAgICAgIGxldCBkZWNvcl9tb2RlbCA9IGRlY29yWzBdO1xyXG4gICAgICAgICAgICBsZXQgZGVjb3JfbmFtZSA9IGRlY29yWzFdO1xyXG4gICAgICAgICAgICBsZXQgZGVjb3JfaW1hZ2UgPSBkZWNvclsyXTtcclxuICAgICAgICAgICAgbGlzdF9uYXRpdmUuaW5uZXJIVE1MICs9IGBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1nX29wdGlvblwiIG9uQ2xpY2s9XCJDdXN0b21JbWFnZVNlbGVjdGVkKCcke2RlY29yX21vZGVsfScsICcke2RlY29yX25hbWV9JyApXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImltZ2RpdlwiIHN0eWxlPVwiYmFja2dyb3VuZDp1cmwoJHtkZWNvcl9pbWFnZX0pXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICR7ZGVjb3JfbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFsZWlMb2coREVCVUcsIFwiVXBkYXRlZCBkZWNvciBsaXN0LlwiKTtcclxuICAgIH1cclxuICAgIGNhdGNoKGUpIHt9IC8vIFdlIGFzc3VtZSB3ZSBhcmUgbm90IGluIGRlY29yIGxpc3QgeWV0LlxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBBTEVJX1NlcnZlclJlcXVlc3QocmVxdWVzdCwgb3BlcmF0aW9uLCBjYWxsYmFjayA9IG51bGwpIHtcclxuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IG1ha2VSZXF1ZXN0KFwiUE9TVFwiLCBgZV9zZXJ2ZXIucGhwP2E9JHtyZXF1ZXN0X2F9YCwgcmVxdWVzdCk7XHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPSAyMDApIHtcclxuICAgICAgICBpZiAob3BlcmF0aW9uID09ICdzYXZlJykgTmV3Tm90ZSgnT29wcyEgRXJyb3Igb2Njb3VyZWQgZHVyaW5nIHNhdmluZy4gVXN1YWxseSBpdCBtYXkgYmUgaGFwcGVuaW5nIGR1ZSB0byBjb25uZWN0aW9uIHByb2JsZW1zLiBNYXAgd2lsbCBiZSB0ZW1wb3Jhcnkgc2F2ZWQgdG8geW91ciBjb21wdXRlclxcJ3MgTG9jYWxTdG9yYWdlJywgbm90ZV9iYWQpO1xyXG4gICAgICAgIGVsc2UgaWYgKG9wZXJhdGlvbiA9PSAnbG9hZCcpIE5ld05vdGUoJ09vcHMhIEVycm9yIG9jY291cmVkIGR1cm5pbmcgbG9hZGluZy4gVXN1YWxseSBpdCBtYXkgYmUgaGFwcGVuaW5nIGR1ZSB0byBjb25uZWN0aW9uIHByb2JsZW1zLicsIG5vdGVfYmFkKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGhhbmRsZVNlcnZlclJlcXVlc3RSZXNwb25zZShyZXF1ZXN0LCBvcGVyYXRpb24sIHJlc3BvbnNlLnJlc3BvbnNlKTtcclxuICAgICAgICBpZiAocmVxdWVzdC5pbmRleE9mKFwiYT1nZXRfaW1hZ2VzXCIpICE9IC0xICYmIHJlcXVlc3QuaW5kZXhPZihcImZvcl9jbGFzcz1kZWNvcl9tb2RlbFwiKSAhPSAtMSkge1xyXG4gICAgICAgICAgICB1cGRhdGVEZWNvckxpc3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93LkltYWdlQ29udGV4dCA9IEltYWdlQ29udGV4dDtcclxuICAgICAgICBpZiAob3BlcmF0aW9uID09ICdzYXZlJyB8fCBvcGVyYXRpb24gPT0gJ2xvYWQnKSB7XHJcbiAgICAgICAgICAgIGNoYW5nZXNfbWFkZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAob3BlcmF0aW9uID09ICdsb2FkJykge1xyXG4gICAgICAgICAgICAgICAgbmVlZF9yZWRyYXcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgbmVlZF9HVUlQYXJhbXNfdXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIENsZWFyVW5kb3MoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgIE5ld05vdGUoJ1NlcnZlciByZXNwb25kcyB3aXRoIHVuY2xlYXIgbWVzc2FnZS4gTG9va3MgbGlrZSBvbmUgb2YgcmVjZW50IGFjdGlvbnMgd2FzblxcJ3Qgc3VjY2Vzc2Z1bC4nLCBub3RlX2JhZCk7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNhbGxiYWNrICE9IG51bGwpIHtcclxuICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgX3NlcnZlclJlcXVlc3RQYXRjaGVkID0gZmFsc2U7XHJcbmZ1bmN0aW9uIHBhdGNoU2VydmVyUmVxdWVzdCgpIHtcclxuICAgIC8vIFRoaXMgY29kZSBqdXN0IGV4aXN0cyB0byBwcmV2ZW50IGxvZ2dpbmcgbW9yZSB0aGFuIG9uY2VcclxuICAgIGlmIChfc2VydmVyUmVxdWVzdFBhdGNoZWQpIHJldHVybjtcclxuICAgIF9zZXJ2ZXJSZXF1ZXN0UGF0Y2hlZCA9IHRydWU7XHJcbiAgICAvLyBQYXRjaGVzIFNlcnZlclJlcXVlc3QgZnVuY3Rpb24uXHJcbiAgICAvLyB2YW5pbGxhIFNlcnZlclJlcXVlc3QgZnVuY3Rpb24gbGl0ZXJhbGx5IGV2YWwoKSdzIGV2ZXJ5IHNpbmdsZSB0aGluZyB0aGF0IHNlcnZlciBzZW5kcy5cclxuICAgIC8vIFdoaWNoIG9wZW5zIHVwIHRvIGV4cGVjdGVkIHZ1bG5lcmFiaWxpdGllcy5cclxuICAgIC8vIEhvcGVmdWxseSBpbiBmdXR1cmUsIEFMRUkgd2lsbCBjb21wbGV0ZWx5IGdldCByaWQgb2YgZXZhbC5cclxuICAgIHdpbmRvdy5TZXJ2ZXJSZXF1ZXN0ID0gQUxFSV9TZXJ2ZXJSZXF1ZXN0O1xyXG4gICAgLy8gV2UgYXJlIHByZXR0eSBtdWNoIGRvbmUsIHdlIGhhdmUgcGF0Y2hlZCBTZXJ2ZXJSZXF1ZXN0LCBzbyBqdXN0IHJvbGwgd2l0aCBvbGQgZXZhbC5cclxuICAgIC8vIE9oIGFuZCBhIG5vdGUgZm9yIG15c2VsZiBpbmNhc2UgaSBjb25mdXNlIG15c2VsZjogdmFuaWxsYSBTZXJ2ZXJSZXF1ZXN0IGlzIHN5bmNocm9ub1xyXG4gICAgd2luZG93LmV2YWwgPSBKU19ldmFsO1xyXG4gICAgYWxlaUxvZyhERUJVRywgXCJQYXRjaGVkIFNlcnZlclJlcXVlc3RcIik7XHJcbn1cclxuXHJcbndpbmRvdy5ldmFsID0gZnVuY3Rpb24oY29kZSkgeyAvLyBUZW1wb3JhcmlseSBvdmVycmlkaW5nIGV2YWwgc28gd2UgY2FuIHBhdGNoIFNlcnZlclJlcXVlc3QgYXMgZWFybHkgYXMgcG9zc2libGVcclxuICAgIGlmICh3aW5kb3cuU2VydmVyUmVxdWVzdCAhPT0gdW5kZWZpbmVkKSB7IC8vIFNlcnZlclJlcXVlc3QgaXMgZGVmaW5lZC5cclxuICAgICAgICBoYW5kbGVTZXJ2ZXJSZXF1ZXN0UmVzcG9uc2UobnVsbCwgbnVsbCwgY29kZSk7XHJcbiAgICAgICAgcGF0Y2hTZXJ2ZXJSZXF1ZXN0KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIElzIG5vdCBkZWZpbmVkLlxyXG4gICAgICAgIC8vIElzIHRoaXMgZXZlbiBwb3NzaWJsZSBpbiBub3JtYWwgY2lyY3Vtc3RhbmNlcz9cclxuICAgICAgICBjb25zb2xlLmxvZyhjb2RlKTtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIGFzc2lnbk9iamVjdElEcygpIHtcclxuICAgIC8vIFRPRE86IFJlZmFjdG9yXHJcbiAgICBsZXQgaWRtYXAgPSB7fTtcclxuICAgIGZvciAobGV0IGVsZW1lbnQgb2YgZXMpIHtcclxuICAgICAgICBpZiAoIWVsZW1lbnQuZXhpc3RzKSBjb250aW51ZTtcclxuICAgICAgICBpZiAoaWRtYXBbZWxlbWVudC5fY2xhc3NdID09PSB1bmRlZmluZWQpIGlkbWFwW2VsZW1lbnQuX2NsYXNzXSA9IC0xO1xyXG5cclxuICAgICAgICBpZG1hcFtlbGVtZW50Ll9jbGFzc10gKz0gMTtcclxuICAgICAgICBlbGVtZW50LmFsZWlJRCA9IGlkbWFwW2VsZW1lbnQuX2NsYXNzXTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBhc3NpZ25PYmplY3RQcmlvcml0eSgpIHtcclxuICAgIC8vIFRPRE86IFJlZmFjdG9yXHJcbiAgICBmb3IgKGxldCBlbGVtZW50IG9mIGVzKSB7XHJcbiAgICAgICAgaWYgKCFlbGVtZW50LmV4aXN0cykgY29udGludWU7XHJcbiAgICAgICAgaWYoZWxlbWVudC5hbGVpUHJpb3JpdHkgPT0gdW5kZWZpbmVkKSBlbGVtZW50LmFsZWlQcmlvcml0eSA9IDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBwcm9wZXJ0eUFwcGxpZWRPYmplY3RzID0gW107XHJcbmZ1bmN0aW9uIEFzc2lnbk9iamVjdFByb3BlcnRpZXMoZSkge1xyXG4gICAgaWYoZS5hbGVpSUQgPT0gdW5kZWZpbmVkKSBhc3NpZ25PYmplY3RJRHMoKTtcclxuICAgIGlmKGUuYWxlaVByaW9yaXR5ID09IHVuZGVmaW5lZCkgYXNzaWduT2JqZWN0UHJpb3JpdHkoKTtcclxuXHJcbiAgICBpZihwcm9wZXJ0eUFwcGxpZWRPYmplY3RzLmluZGV4T2YoZSkgPT0gLTEpIHByb3BlcnR5QXBwbGllZE9iamVjdHMucHVzaChlKTtcclxuXHJcbiAgICBsZXQgZW50cmllcyA9IE9iamVjdC5lbnRyaWVzKGUucG0pO1xyXG4gICAgZW50cmllcy5zcGxpY2UoMCwgMCwgW1wiX19pZFwiLCBlLmFsZWlJRF0pO1xyXG5cclxuICAgIGlmKFtcImJnXCIsIFwiZGVjb3JcIl0uaW5kZXhPZihlLl9jbGFzcykgIT09IC0xKSB7XHJcbiAgICAgICAgZW50cmllcy5zcGxpY2UoMSwgMCwgW1wiX19wcmlvcml0eVwiLCBlLmFsZWlQcmlvcml0eV0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBlLnBtID0gT2JqZWN0LmZyb21FbnRyaWVzKGVudHJpZXMpO1xyXG59XHJcblxyXG5sZXQgc29ydFJlcXVpcmVkID0gZmFsc2U7XHJcbmZ1bmN0aW9uIFNvcnRPYmplY3RzQnlQcmlvcml0eSgpIHtcclxuICAgIGZ1bmN0aW9uIGdldFByaW9yaXR5KGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gYi5hbGVpUHJpb3JpdHkgLSBhLmFsZWlQcmlvcml0eTtcclxuICAgIH1cclxuICAgIHdpbmRvdy5lcyA9IGVzLnNvcnQoZ2V0UHJpb3JpdHkpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gQXBwbHlPYmplY3RQcm9wZXJ0aWVzKGUpIHtcclxuICAgIGlmKFtcImJnXCIsIFwiZGVjb3JcIl0uaW5kZXhPZihlLl9jbGFzcykgPT0gLTEpIHJldHVybjtcclxuICAgIGlmKGUuYWxlaVByaW9yaXR5ICE9PSBlLnBtLl9fcHJpb3JpdHkpIHtcclxuICAgICAgICBlLmFsZWlQcmlvcml0eSA9IGUucG0uX19wcmlvcml0eTtcclxuICAgICAgICBzb3J0UmVxdWlyZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyBUT0RPOiBIb3cgY2FuIEkgZm9yY2UgdXBkYXRlIEdVSSBvYmplY3QgbGlzdD9cclxuICAgICAgICAvLyBVcGRhdGVHVUlPYmplY3RzTGlzdCBkb2VzIG5vdCBkbyBpdC5cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gUmVtb3ZlT2JqZWN0UHJvcGVydGllcyhlKSB7XHJcbiAgICBkZWxldGUgZS5wbS5fX2lkO1xyXG4gICAgZGVsZXRlIGUucG0uX19wcmlvcml0eTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGF0Y2hVcGRhdGVHVUlQYXJhbXMoKSB7XHJcbiAgICBsZXQgb2xkQ29kZVNuaXBwZXQgPSBcImlmICggaSA+PSA0ICYmIChpLTQpICUgMyA9PSAwICkge1wiO1xyXG4gICAgbGV0IG5ld0NvZGVTbmlwcGV0ID0gXCJpZiAoc2hvdWxkQWRkU2VwYXJhdG9ySW5HVUlQYXJhbXMoaSkpIHtcIjtcclxuICAgIGxldCBjb2RlID0gd2luZG93LlVwZGF0ZUdVSVBhcmFtcy50b1N0cmluZygpLnJlcGxhY2Uob2xkQ29kZVNuaXBwZXQsIG5ld0NvZGVTbmlwcGV0KTtcclxuICAgIC8vIGlmIGV4dGVuZGVkIHRyaWdnZXJzIGFyZSBlbmFibGVkLCB0aGUgY29kZSByZXBsYWNlbWVudCBmcm9tIHRoYXQgd2lsbCBjYXVzZSB0aGlzIGNvZGUgcmVwbGFjZW1lbnQgdG8gZmFpbC5cclxuICAgIC8vIGl0IHdvbid0IGNhdXNlIGFuIGVycm9yIGFzc3VtaW5nIHRoYXQgY29kZSBkb2VzIG1vcmUgb3IgbGVzcyB0aGUgc2FtZSB0aGluZy4gdGhpcyB0aGluZyBpcyBhIGJpdCBvZiBhIG5pZ2h0bWFyZVxyXG4gICAgaWYgKCFjb2RlLmluY2x1ZGVzKG5ld0NvZGVTbmlwcGV0KSkgeyBcclxuICAgICAgICAvL2FsZWlMb2coV0FSTiwgXCJVcGRhdGVHVUlQYXJhbXMgZGlyZWN0IGNvZGUgcmVwbGFjZW1lbnQgZmFpbGVkIChzZXBhcmF0b3JzKVwiKTtcclxuICAgIH1cclxuICAgIGNvZGUgPSBcIihcIiArIGNvZGUgKyBcIilcIjsgLy9wdXR0aW5nIGl0IGluIHBhcmVudGhlc2VzIHRvIG1ha2UgaXQgYSBmdW5jdGlvbiBleHByZXNzaW9uLiB0aGUgZnVuY3Rpb24gY2FuIHRoZW4gYmUgYXNzaWduZWQgZGlyZWN0bHkgZnJvbSBldmFsXHJcbiAgICBsZXQgb3JpZ1VHUCA9IGV2YWwoY29kZSk7XHJcblxyXG4gICAgbGV0IG9yaWdHUFYgPSB3aW5kb3cuR2VuUGFyYW1WYWw7XHJcblxyXG4gICAgd2luZG93LnNob3VsZEFkZFNlcGFyYXRvckluR1VJUGFyYW1zID0gKGNvdW50KSA9PiB7XHJcbiAgICAgICAgbGV0IHNlcCA9IFRyaWdnZXJfZ2V0U2VwYXJhdG9yU3RhcnQoU2VsZWN0ZWRPYmplY3RzLmxlbmd0aCk7XHJcbiAgICAgICAgaWYoKGNvdW50ID49IHNlcCkgJiYgKGNvdW50IC0gc2VwKSAlIDMgPT0gMCkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuR2VuUGFyYW1WYWxFc2NhcGVEb3VibGVRdW90ZXMgPSBmYWxzZTtcclxuXHJcbiAgICAvLyByZXBsYWNlcyBHZW5QYXJhbVZhbCBiZWhhdmlvdXIgb2Ygd2hlbiBiYXNlID09IFwibm9jaGFuZ2VcIi4gb25seSBkaWZmZXJlbmNlIGlzIHRoYXQgaXQgZXNjYXBlcyBkb3VibGUgcXVvdGVzLlxyXG4gICAgLy8gYWxzbyBpdCBvbmx5IGVzY2FwZXMgZG91YmxlIHF1b3RlcyB3aGVuIGl0J3MgdXNlZCB3aXRoaW4gVXBkYXRlR1VJUGFyYW1zLlxyXG4gICAgLy8gdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIHdvdWxkIHJldHVybiB2YWx1ZSBpZiBGT1JDRV9URVhUX09QVElPTlMgPT0gdHJ1ZSBldmVuIGlmIGJhc2UgPT0gXCJub2NoYW5nZVwiLiBzbyB0aGlzIHdvcmtzIHNsaWdodGx5IGRpZmZlcmVudGx5LCBub3Qgc3VyZSBpZiB0aGF0J3MgaW50ZW50aW9uYWxcclxuICAgIHdpbmRvdy5HZW5QYXJhbVZhbCA9IGZ1bmN0aW9uKGJhc2UsIHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKEdlblBhcmFtVmFsRXNjYXBlRG91YmxlUXVvdGVzICYmIGJhc2UgPT0gXCJub2NoYW5nZVwiKSB7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZVdpdGhRdW90ZXNFc2NhcGVkID0gYCR7dmFsdWV9YC5yZXBsYWNlQWxsKCdcIicsIFwiJnF1b3Q7XCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gYDxwdmFsdWUgcmVhbD1cIiR7dmFsdWVXaXRoUXVvdGVzRXNjYXBlZH1cIj4tIG5vdCB1c2VkIC08L3B2YWx1ZT5gO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb3JpZ0dQVihiYXNlLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LlVwZGF0ZUdVSVBhcmFtcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIEdlblBhcmFtVmFsRXNjYXBlRG91YmxlUXVvdGVzID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gUmVwcmVzZW50cyBhbGwgdGhlIHNlbGVjdGVkIGVudGl0eSBjbGFzcy5cclxuICAgICAgICBsZXQgc2VsZWN0ZWQgPSBTZWxlY3RlZE9iamVjdHM7XHJcbiAgICAgICAgc2VsZWN0ZWQuZmlsdGVyKGUgPT4gZS5fY2xhc3MgPT0gXCJ0cmlnZ2VyXCIpLm1hcChlID0+IFJlb3JkZXJUcmlnZ2VyUHJvcGVydHkoZSkpO1xyXG5cclxuICAgICAgICAvL3NlbGVjdGVkLm1hcChvID0+IEFwcGx5T2JqZWN0UHJvcGVydGllcyhvKSk7XHJcblxyXG4gICAgICAgIGZvcihsZXQgZWxlbWVudCBvZiBwcm9wZXJ0eUFwcGxpZWRPYmplY3RzKSB7XHJcbiAgICAgICAgICAgIGlmKHNlbGVjdGVkLmluZGV4T2YoZWxlbWVudCkgIT09IC0xKSBjb250aW51ZTtcclxuICAgICAgICAgICAgUmVtb3ZlT2JqZWN0UHJvcGVydGllcyhlbGVtZW50KTtcclxuICAgICAgICAgICAgcHJvcGVydHlBcHBsaWVkT2JqZWN0cy5zcGxpY2UocHJvcGVydHlBcHBsaWVkT2JqZWN0cy5pbmRleE9mKGVsZW1lbnQpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VsZWN0ZWQubWFwKG8gPT4gQXNzaWduT2JqZWN0UHJvcGVydGllcyhvKSk7XHJcblxyXG4gICAgICAgIC8vIFRoaXMgY29kZSBoYW5kbGVzIHRyYW5zaXRpb24gYmV0d2VlbiB0aW1lciBhbmQgdHJpZ2dlciB2YWx1ZXMgZGVwZW5kaW5nIG9uIHJlZ2lvbidzIFwiZXhlY3V0ZXNcIiBwYXJhbWV0ZXJcclxuICAgICAgICBpZigoc2VsZWN0ZWQubGVuZ3RoID09IDEpICYmIChzZWxlY3RlZFswXS5fY2xhc3MgPT0gXCJyZWdpb25cIikpIHtcclxuICAgICAgICAgICAgaWYoW3RydWUsIFwidHJ1ZVwiXS5pbmRleE9mKHNlbGVjdGVkWzBdLnBtLnVzZXNfdGltZXIpICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbV90eXBlW1JFR0lPTl9FWEVDVVRFX1BBUkFNX0lEXVsxXSA9IFwidGltZXIrbm9uZVwiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1fdHlwZVtSRUdJT05fRVhFQ1VURV9QQVJBTV9JRF1bMV0gPSBcInRyaWdnZXIrbm9uZVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvcmlnVUdQKCk7XHJcbiAgICAgICAgYWRkQWRkaXRpb25hbEJ1dHRvbnMoKTtcclxuXHJcbiAgICAgICAgR2VuUGFyYW1WYWxFc2NhcGVEb3VibGVRdW90ZXMgPSBmYWxzZTtcclxuICAgICAgICBpZihzb3J0UmVxdWlyZWQpIFNvcnRPYmplY3RzQnlQcmlvcml0eSgpO1xyXG4gICAgfVxyXG4gICAgYWxlaUxvZyhERUJVRywgXCJQYXRjaGVkIFVwZGF0ZUdVSVBhcmFtc1wiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGF0Y2hFdmFsU2V0KCkge1xyXG4gICAgd2luZG93LkV2YWxTZXQgPSBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgLy8gTm8gZXZhbGluZy4gRGVhdGggdG8gZXZhbCEgKGV4Y2VwdCBmb3Igd2hlbiBpIHdhbnQgdG8gdXNlIGl0Li4uKVxyXG4gICAgICAgIHdpbmRvd1trZXldID0gdmFsdWU7XHJcbiAgICAgICAgVXBkYXRlVG9vbHMoKTtcclxuICAgIH1cclxuICAgIGFsZWlMb2coREVCVUcsIFwiUGF0Y2hlZCBFdmFsU2V0XCIpO1xyXG59XHJcblxyXG53aW5kb3cuQUxFSV9zZXR0aW5nc01lbnUgPSB1bmRlZmluZWQ7XHJcblxyXG5cclxuLypcclxuVE9ETzogVGV4dCBmaWVsZCBmb3IgdGhvc2UuXHJcbmxldCBhbGVpU2V0dGluZ3MgPSB7XHJcbiAgICB0cmlnZ2VyRWRpdFRleHRTaXplOnJlYWRTdG9yYWdlKFwiQUxFSV9FZGl0VGV4dFNpemVcIiwgICAgICBcIjEycHhcIiwgICh2YWwpID0+IHZhbCArIFwicHhcIiAgKSxcclxuICAgIHN0YXJzSW1hZ2U6ICAgICAgICAgcmVhZFN0b3JhZ2UoXCJBTEVJX1N0YXJJbWFnZVwiLCAgICBcInN0YXJzMi5qcGdcIiwgKHZhbCkgPT4gdmFsICAgICAgICAgKSxcclxufVxyXG4qL1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlQUxFSVNldHRpbmdzTWVudSgpIHtcclxuICAgIGxldCBtYWluV2luZG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1haW5XaW5kb3cuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtcnBvcHVwXCIpO1xyXG5cclxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBcIkFMRUkgU2V0dGluZ1wiO1xyXG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtcnRpdGxlXCIpOyAvLyBFcmljLCB3aGF0IGlzIHRoaXMgY3JhcCA/XHJcbiAgICBtYWluV2luZG93LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuXHJcblxyXG4gICAgbGV0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBib3guc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtcmJveFwiKTtcclxuICAgIG1haW5XaW5kb3cuYXBwZW5kQ2hpbGQoYm94KTtcclxuXHJcbiAgICAvLyBDb252ZW5pZW5jZSBmdW5jdGlvbnMuXHJcbiAgICBsZXQgdXNhYmxlSGVpZ2h0ID0gMjQwO1xyXG4gICAgbGV0IGN1cnJlbnRIZWlnaHQgPSAzMDA7XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkVGV4dCh0ZXh0LCByZXF1aXJlc1Jlc3RhcnQgPSBmYWxzZSkge1xyXG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGRpdi5pbm5lckhUTUwgPSB0ZXh0O1xyXG4gICAgICAgIGlmIChyZXF1aXJlc1Jlc3RhcnQpIHtcclxuICAgICAgICAgICAgZGl2LnN0eWxlLnNldFByb3BlcnR5KFwiY29sb3JcIiwgXCIjRkZGRjAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJBTEVJX3NldHRpbmdNZW51VGV4dFwiKTtcclxuICAgICAgICBib3guaW5uZXJIVE1MICs9IFwiPGJyPlwiO1xyXG4gICAgICAgIGJveC5pbm5lckhUTUwgKz0gZGl2Lm91dGVySFRNTDtcclxuXHJcbiAgICAgICAgdXNhYmxlSGVpZ2h0IC09IDIwO1xyXG4gICAgICAgIGlmKHVzYWJsZUhlaWdodCA8PSAwKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gMjA7XHJcbiAgICAgICAgICAgIHVzYWJsZUhlaWdodCArPSAyMDtcclxuICAgICAgICAgICAgYm94LnN0eWxlLmhlaWdodCA9IGAke2N1cnJlbnRIZWlnaHR9cHhgO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlZ2lzdGVyQnV0dG9uKGdlbmVyYWwsIHZhbHVlcywga2V5KSB7XHJcbiAgICAgICAgYWxlaVNldHRpbmdCdXR0b25zTWFwW2dlbmVyYWxdID0gW3ZhbHVlcywgYWxlaVNldHRpbmdzLCBrZXldO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbmV3UmVnaXN0ZXJCdXR0b24oZ2VuZXJhbCwgdmFsdWVzLCBkaWN0LCBrZXkpIHtcclxuICAgICAgICBhbGVpU2V0dGluZ0J1dHRvbnNNYXBbZ2VuZXJhbF0gPSBbdmFsdWVzLCBkaWN0LCBrZXldO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYWRkQnV0dG9uKGRpc3BsYXksIGlkZW50aWZpZXIsIGNhbGxiYWNrLCBzdHlsZSA9IFwiXCIpIHtcclxuICAgICAgICBhbGVpQnV0dG9uQ2xpY2tzW1wic2V0dGluZ19cIiArIGlkZW50aWZpZXJdID0gY2FsbGJhY2s7XHJcblxyXG4gICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XHJcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiQUxFSV9cIiArIGlkZW50aWZpZXIpO1xyXG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBkaXNwbGF5KTtcclxuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwib25jbGlja1wiLCBgYWxlaUJ1dHRvbkNsaWNrc1snc2V0dGluZ18ke2lkZW50aWZpZXJ9J10oKTsgQUxFSV9zZXR0aW5nVXBkYXRlQnV0dG9ucygpOyB0cmlnZ2VyQWN0aW9uc1ByZXZlbnRFcnJvcigpO2ApO1xyXG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIkFMRUlfc2V0dGluZ3NNZW51QnV0dG9uXCIpO1xyXG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBzdHlsZSk7XHJcblxyXG4gICAgICAgIGJveC5pbm5lckhUTUwgKz0gYnV0dG9uLm91dGVySFRNTDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGFkZEJpbmFyeU9wdGlvbih0cnV0aHlWYWwsIGZhbHN5VmFsLCBzdG9yYWdlLCBrZXksIGludGVybmFsTmFtZSwgY2FsbGJhY2sgPSAoKSA9PiB7fSkge1xyXG4gICAgICAgIGZ1bmN0aW9uIF9hcHBseSh2YWwpIHtcclxuICAgICAgICAgICAgd3JpdGVTdG9yYWdlKHN0b3JhZ2UsIHZhbCk7XHJcbiAgICAgICAgICAgIGFsZWlTZXR0aW5nc1trZXldID0gdmFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhZGRCdXR0b24odHJ1dGh5VmFsLCBgJHtpbnRlcm5hbE5hbWV9X3RydWVgLCAoKSA9PiB7X2FwcGx5KHRydWUpOyBjYWxsYmFjayh0cnVlKX0pO1xyXG4gICAgICAgIGFkZEJ1dHRvbihmYWxzeVZhbCwgYCR7aW50ZXJuYWxOYW1lfV9mYWxzZWAsICgpID0+IHtfYXBwbHkoZmFsc2UpOyBjYWxsYmFjayhmYWxzZSl9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBMb2cgbGV2ZWwuXHJcbiAgICBmdW5jdGlvbiBsb2dBcHBseSh2YWwpIHtcclxuICAgICAgICB3cml0ZVN0b3JhZ2UoXCJBTEVJX0xvZ0xldmVsXCIsIHZhbCk7XHJcbiAgICAgICAgYWxlaVNldHRpbmdzLmxvZ0xldmVsID0gdmFsO1xyXG4gICAgfVxyXG4gICAgYm94LmlubmVySFRNTCArPSBcIk5PVEU6IFNldHRpbmdzIGluIHllbGxvdyB0ZXh0IHJlcXVpcmVzIHBhZ2UgcmVmcmVzaCB0byBiZSBhcHBsaWVkLjxicj5cIjtcclxuICAgIGFkZEJ1dHRvbihcIkNsZWFyIEJhY2t1cFwiLCBcImNsZWFyTWFwQmFja3Vwc1wiLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHJlbW92ZWQgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKSkge1xyXG4gICAgICAgICAgICBpZighKGtleS5zbGljZSgwLCBcInBiMl9tYXBcIi5sZW5ndGgpID09IFwicGIyX21hcFwiKSkgY29udGludWU7XHJcbiAgICAgICAgICAgIHJlbW92ZWQucHVzaChrZXkpO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBOZXdOb3RlKGBBTEVJOiBDbGVhcmVkIGJhY2t1cCwgcmVtb3ZlZCB0b3RhbCAke3JlbW92ZWQubGVuZ3RofSBiYWNrdXBzLmAsIFwiIzAwRkZGRlwiKTtcclxuICAgICAgICBhbGVpTG9nKERFQlVHMiwgYFJlbW92ZWQgYmFja3VwIG9mOiAke3JlbW92ZWR9YCk7XHJcbiAgICB9LCBcIndpZHRoOiAxMDBweFwiKTtcclxuICAgIGJveC5pbm5lckhUTUwgKz0gXCI8YnI+XCI7XHJcblxyXG4gICAgbGV0IGlkZW50aWZpZXIgPSAwO1xyXG5cclxuICAgIGZ1bmN0aW9uIE1ha2VTZXR0aW5nQnV0dG9ucyhzdG9yYWdlLCBkaWN0LCBkaWN0S2V5LCB2YWx1ZU1hcCkge1xyXG4gICAgICAgIGlkZW50aWZpZXIrKztcclxuICAgICAgICBuZXdSZWdpc3RlckJ1dHRvbihcclxuICAgICAgICAgICAgaWRlbnRpZmllcixcclxuICAgICAgICAgICAgdmFsdWVNYXAubWFwKG8gPT4gb1sxXSksXHJcbiAgICAgICAgICAgIGRpY3QsXHJcbiAgICAgICAgICAgIGRpY3RLZXlcclxuICAgICAgICApO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9hcHBseSh2YWx1ZSkge1xyXG4gICAgICAgICAgICB3cml0ZVN0b3JhZ2Uoc3RvcmFnZSwgdmFsdWUpO1xyXG4gICAgICAgICAgICBkaWN0W2RpY3RLZXldID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgbWFwIG9mIHZhbHVlTWFwKSB7XHJcbiAgICAgICAgICAgIGFkZEJ1dHRvbihtYXBbMF0sIGAke2lkZW50aWZpZXJ9XyR7bWFwWzFdfWAsICgpID0+IF9hcHBseShtYXBbMV0pKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LkFMRUlBUEkuc2V0dGluZ3MgPSB7fTtcclxuICAgIHdpbmRvdy5BTEVJQVBJLnNldHRpbmdzLmFkZFRleHQgPSBhZGRUZXh0O1xyXG4gICAgd2luZG93LkFMRUlBUEkuc2V0dGluZ3MuY3JlYXRlQnV0dG9ucyA9IE1ha2VTZXR0aW5nQnV0dG9ucztcclxuXHJcbiAgICBmdW5jdGlvbiBhbGVpTWFrZVNldHRpbmdCdXR0b25zKHRleHQsIHJlcXVpcmVSZWZyZXNoLCBzdG9yYWdlLCBkaWN0S2V5LCB2YWx1ZU1hcCkge1xyXG4gICAgICAgIGFkZFRleHQodGV4dCwgcmVxdWlyZVJlZnJlc2gpO1xyXG4gICAgICAgIE1ha2VTZXR0aW5nQnV0dG9ucyhzdG9yYWdlLCBhbGVpU2V0dGluZ3MsIGRpY3RLZXksIHZhbHVlTWFwKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgUFJfU2hvd0hpZGUgPSBbW1wiU2hvd1wiLCB0cnVlXSwgW1wiSGlkZVwiLCBmYWxzZV1dO1xyXG5cclxuICAgIGFsZWlNYWtlU2V0dGluZ0J1dHRvbnMoXHJcbiAgICAgICAgXCJMb2cgTGV2ZWw6XCIsXHJcbiAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgXCJBTEVJX0xvZ0xldmVsXCIsIC8vIFN0b3JhZ2Uga2V5LlxyXG4gICAgICAgIFwibG9nTGV2ZWxcIiwgLy8gRGljdGlvbmFyeSBrZXkuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICBbXCJJTkZPXCIsIDBdLCAvLyBWYWx1ZSBtYXBzLlxyXG4gICAgICAgICAgICBbXCJERUJVR1wiLCAxXSxcclxuICAgICAgICAgICAgW1wiVkVSQk9TRVwiLCAyXVxyXG4gICAgICAgIF1cclxuICAgIClcclxuXHJcbiAgICBhbGVpTWFrZVNldHRpbmdCdXR0b25zKFxyXG4gICAgICAgIFwiQWN0aW9uIElEczpcIixcclxuICAgICAgICB0cnVlLFxyXG4gICAgICAgIFwiQUxFSV9TaG93VHJpZ2dlcklEc1wiLFxyXG4gICAgICAgIFwic2hvd1RyaWdnZXJJRHNcIixcclxuICAgICAgICBQUl9TaG93SGlkZVxyXG4gICAgKTtcclxuXHJcbiAgICBhbGVpTWFrZVNldHRpbmdCdXR0b25zKFxyXG4gICAgICAgIFwiVG9vbHRpcHM6XCIsXHJcbiAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgXCJBTEVJX1Nob3dUb29sdGlwc1wiLFxyXG4gICAgICAgIFwiZW5hYmxlVG9vbHRpcHNcIixcclxuICAgICAgICBQUl9TaG93SGlkZVxyXG4gICAgKVxyXG5cclxuICAgIC8vIE9iamVjdCBJRC5cclxuICAgIC8qcmVnaXN0ZXJCdXR0b24oXCJzaG93aWRzXCIsIFt0cnVlLCBmYWxzZV0sIFwic2hvd0lEc1wiKTtcclxuICAgIGFkZFRleHQoXCJPYmplY3QgSURzOlwiKVxyXG4gICAgYWRkQmluYXJ5T3B0aW9uKFwiU2hvd1wiLCBcIkhpZGVcIiwgXCJBTEVJX1Nob3dJRHNcIiwgXCJzaG93SURzXCIsIFwic2hvd2lkc1wiKVxyXG4qL1xyXG5cclxuICAgIC8qYWxlaU1ha2VTZXR0aW5nQnV0dG9ucyhcclxuICAgICAgICBcIlotSW5kZXg6XCIsXHJcbiAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgXCJBTEVJX1Nob3daSW5kZXhcIixcclxuICAgICAgICBcInNob3daSW5kZXhcIixcclxuICAgICAgICBQUl9TaG93SGlkZVxyXG4gICAgKTsqL1xyXG5cclxuICAgIGFsZWlNYWtlU2V0dGluZ0J1dHRvbnMoXHJcbiAgICAgICAgXCJTYW1lIFBhcmFtZXRlcnM6XCIsXHJcbiAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgXCJBTEVJX1Nob3dTYW1lUGFyYW1ldGVyc1wiLFxyXG4gICAgICAgIFwic2hvd1NhbWVQYXJhbWV0ZXJzXCIsXHJcbiAgICAgICAgUFJfU2hvd0hpZGVcclxuICAgICk7XHJcblxyXG4gICAgLy8gQmxhY2sgdGhlbWUuXHJcbiAgICByZWdpc3RlckJ1dHRvbihcImJsYWNrVGhlbWVcIiwgW3RydWUsIGZhbHNlXSwgXCJibGFja1RoZW1lXCIpO1xyXG4gICAgYWRkVGV4dChcIkJsYWNrIHRoZW1lOlwiLCBmYWxzZSk7XHJcbiAgICBhZGRCaW5hcnlPcHRpb24oXCJZZXNcIiwgXCJOb1wiLCBcIkFMRUlfQmxhY2tUaGVtZVwiLCBcImJsYWNrVGhlbWVcIiwgXCJibGFja1RoZW1lXCIsIChzdGF0dXMpID0+IHtcclxuICAgICAgICBpZihzdGF0dXMpIGJsYWNrVGhlbWUoKVxyXG4gICAgICAgIGVsc2UgVW5kb0JsYWNrVGhlbWUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGFsZWlNYWtlU2V0dGluZ0J1dHRvbnMoXHJcbiAgICAgICAgXCJHcmlkIGJ5IHNuYXA6XCIsXHJcbiAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgXCJBTEVJX2dyaWRCYXNlZE9uU25hcHBpbmdcIixcclxuICAgICAgICBcImdyaWRCYXNlZE9uU25hcHBpbmdcIixcclxuICAgICAgICBbW1wiWWVzXCIsIHRydWVdLCBbXCJOb1wiLCBmYWxzZV1dXHJcbiAgICApO1xyXG5cclxuICAgIC8vIFJlbmRlciBvYmplY3QgbmFtZXNcclxuICAgIHJlZ2lzdGVyQnV0dG9uKFwic2hvd09iamVjdE5hbWVzXCIsIFt0cnVlLCBmYWxzZV0sIFwicmVuZGVyT2JqZWN0TmFtZXNcIik7XHJcbiAgICBhZGRUZXh0KFwiU2hvdyBvYmplY3QgbmFtZXM6IFwiKTtcclxuICAgIGFkZEJpbmFyeU9wdGlvbihcIlllc1wiLCBcIk5vXCIsIFwiQUxFSV9SZW5kZXJPYmplY3ROYW1lc1wiLCBcInJlbmRlck9iamVjdE5hbWVzXCIsIFwic2hvd09iamVjdE5hbWVzXCIsIChzdGF0dXMpID0+IEFMRUlfVXBkYXRlTmFtZVJlbmRlclNldHRpbmcoc3RhdHVzKSk7XHJcblxyXG4gICAgLy8gUmVtYXAgVUlEXHJcbiAgICByZWdpc3RlckJ1dHRvbihcInJlbWFwVUlEXCIsIFt0cnVlLCBmYWxzZV0sIFwicmVtYXRjaFVJRFwiKTtcclxuICAgIGFkZFRleHQoXCJSZW1hcCBVSUQ6IFwiKTtcclxuICAgIGFkZEJpbmFyeU9wdGlvbihcIkVuYWJsZWRcIiwgXCJEaXNhYmxlZFwiLCBcIkFMRUlfUmVtYXBVSURcIiwgXCJyZW1hdGNoVUlEXCIsIFwicmVtYXBVSURcIiwgKHN0YXR1cykgPT4gQUxFSV9VcGRhdGVSZW1hdGNoVUlEU2V0dGluZyhzdGF0dXMpKTtcclxuXHJcbiAgICBhbGVpTWFrZVNldHRpbmdCdXR0b25zKFxyXG4gICAgICAgIFwiRXh0ZW5kZWQgdHJpZ2dlcnM6XCIsXHJcbiAgICAgICAgdHJ1ZSxcclxuICAgICAgICBcIkFMRUlfRXh0ZW5kZWRUcmlnZ2Vyc0VuYWJsZWRcIixcclxuICAgICAgICBcImV4dGVuZGVkVHJpZ2dlcnNcIixcclxuICAgICAgICBbW1wiRW5hYmxlZFwiLCB0cnVlXSwgW1wiRGlzYWJsZWRcIiwgZmFsc2VdXVxyXG4gICAgKTtcclxuXHJcbiAgICBhbGVpTWFrZVNldHRpbmdCdXR0b25zKFxyXG4gICAgICAgIFwiT3JkZXJlZCBOYW1pbmc6XCIsXHJcbiAgICAgICAgdHJ1ZSxcclxuICAgICAgICBcIkFMRUlfb3JkZXJlZE5hbWluZ1wiLFxyXG4gICAgICAgIFwib3JkZXJlZE5hbWluZ1wiLFxyXG4gICAgICAgIFtbXCJZZXMgKFNsb3cpXCIsIHRydWVdLCBbXCJObyAoRmFzdClcIiwgZmFsc2VdXVxyXG4gICAgKTtcclxuXHJcbiAgICBhbGVpTWFrZVNldHRpbmdCdXR0b25zKFxyXG4gICAgICAgIFwiQ3VzdG9tIFJlbmRlcmVyOlwiLFxyXG4gICAgICAgIHRydWUsXHJcbiAgICAgICAgXCJBTEVJX1JlbmRlcmVyX0VuYWJsZWRcIixcclxuICAgICAgICBcImN1c3RvbVJlbmRlcmVyXCIsXHJcbiAgICAgICAgW1tcIkVuYWJsZWRcIiwgdHJ1ZV0sIFtcIkRpc2FibGVkXCIsIGZhbHNlXV1cclxuICAgICk7XHJcblxyXG4gICAgd2luZG93LkFMRUlfc2V0dGluZ3NNZW51ID0gbWFpbldpbmRvdztcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbldpbmRvdyk7XHJcbiAgICBBTEVJX3NldHRpbmdVcGRhdGVCdXR0b25zKCk7XHJcbiAgICBhbGVpTG9nKERFQlVHLCBcIkNyZWF0ZWQgc2V0dGluZ3Mgd2luZG93LlwiKTtcclxufVxyXG5cclxubGV0IGFsZWlTZXR0aW5nQnV0dG9uc01hcCA9IHt9XHJcblxyXG53aW5kb3cuQUxFSV9zZXR0aW5nVXBkYXRlQnV0dG9ucyA9ICgpID0+IHtcclxuICAgIGxldCBkZWZhdWx0Q2xhc3MgPSBcIkFMRUlfc2V0dGluZ3NNZW51QnV0dG9uXCI7XHJcbiAgICBsZXQgY2xpY2tlZENsYXNzID0gXCJBTEVJX3NldHRpbmdzTWVudUJ1dHRvbiBBTEVJX3NldHRpbmdNZW51QnV0dG9uQ2xpY2tlZFwiO1xyXG5cclxuICAgIGZvciAobGV0IGVudHJ5IG9mIE9iamVjdC5lbnRyaWVzKGFsZWlTZXR0aW5nQnV0dG9uc01hcCkpIHtcclxuICAgICAgICBsZXQgaWRlbnRpdHkgPSBlbnRyeVswXTtcclxuICAgICAgICBsZXQgdmFsdWVzID0gZW50cnlbMV1bMF07XHJcbiAgICAgICAgbGV0IGRpY3QgPSBlbnRyeVsxXVsxXTtcclxuICAgICAgICBsZXQga2V5ID0gZW50cnlbMV1bMl07XHJcblxyXG4gICAgICAgIGxldCBjdXJyZW50VmFsID0gZGljdFtrZXldO1xyXG4gICAgICAgIGZvciAobGV0IHZhbHVlIG9mIHZhbHVlcykge1xyXG4gICAgICAgICAgICAkcXVlcnkoYCNBTEVJXyR7aWRlbnRpdHl9XyR7dmFsdWV9YCkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgZGVmYXVsdENsYXNzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJHF1ZXJ5KGAjQUxFSV8ke2lkZW50aXR5fV8ke2N1cnJlbnRWYWx9YCkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgY2xpY2tlZENsYXNzKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHNob3dTZXR0aW5ncygpIHtcclxuICAgIGlmIChBTEVJX3NldHRpbmdzTWVudSA9PT0gdW5kZWZpbmVkKSBjcmVhdGVBTEVJU2V0dGluZ3NNZW51KCk7XHJcblxyXG4gICAgbXJkaW1saWdodHMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBBTEVJX3NldHRpbmdzTWVudS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIGRpbV91bmRvID0gXCJBTEVJX3NldHRpbmdzTWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXCI7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBwYXRjaFRlYW1MaXN0KCkge1xyXG4gICAgZm9yIChsZXQgZW50cnkgb2YgT2JqZWN0LmVudHJpZXMoVkFMX1RBQkxFW1widGVhbVwiXSkpIHtcclxuICAgICAgICBsZXQgdGVhbUlEID0gcGFyc2VJbnQoZW50cnlbMF0pO1xyXG4gICAgICAgIGxldCB0ZWFtTmFtZSA9IGVudHJ5WzFdO1xyXG5cclxuICAgICAgICBpZiAodGVhbUlEIDwgMCkge1xyXG4gICAgICAgICAgICB0ZWFtTmFtZSA9IHRlYW1OYW1lLnJlcGxhY2UoXCIobm8gZnJpZW5kbHkgZmlyZSlcIiwgXCIoTm8gY29sbGlzaW9uLCBZZXMgZnJpZW5kbHkgZmlyZSlcIilcclxuICAgICAgICAgICAgVkFMX1RBQkxFW1widGVhbVwiXVt0ZWFtSURdID0gdGVhbU5hbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGVhbUlEID09PSAtMSkgY29udGludWU7XHJcbiAgICAgICAgVkFMX1RBQkxFW1widGVhbSthbnlcIl1bdGVhbUlEXSA9IHRlYW1OYW1lO1xyXG4gICAgfVxyXG4gICAgYWxlaUxvZyhERUJVRywgXCJFZGl0ZWQgdGVhbSBsaXN0Li5cIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFByb2plY3RpbGVNb2RlbHMoKSB7XHJcbiAgICBsZXQgcHJvamVjdGlsZU1vZGVscyA9IFZBTF9UQUJMRVtcIkFMRUlfcHJvamVjdGlsZU1vZGVsc1wiXSA9IHtcclxuICAgICAgICAxOiBcImh0dHBzOi8vc3RhdGljLm1pcmFoZXplLm9yZy9wbGF6bWFidXJzdHdpa2kvNi82YS9MYXplcl8xLnBuZ1wiLFxyXG4gICAgICAgIDI6IFwiaHR0cHM6Ly9zdGF0aWMubWlyYWhlemUub3JnL3BsYXptYWJ1cnN0d2lraS9hL2FlL0xhemVyXzIucG5nXCIsXHJcbiAgICAgICAgMzogXCJodHRwczovL3N0YXRpYy5taXJhaGV6ZS5vcmcvcGxhem1hYnVyc3R3aWtpLzAvMDYvTGF6ZXJfMy5wbmdcIixcclxuICAgICAgICA0OiBcImh0dHBzOi8vc3RhdGljLm1pcmFoZXplLm9yZy9wbGF6bWFidXJzdHdpa2kvZC9kZS9MYXplcl80LnBuZ1wiLFxyXG4gICAgICAgIDU6IFwiaHR0cHM6Ly9zdGF0aWMubWlyYWhlemUub3JnL3BsYXptYWJ1cnN0d2lraS84LzhmL0xhemVyXzUucG5nXCIsXHJcbiAgICAgICAgNjogXCJodHRwczovL3N0YXRpYy5taXJhaGV6ZS5vcmcvcGxhem1hYnVyc3R3aWtpL2EvYTAvTGF6ZXJfNi5wbmdcIixcclxuICAgICAgICA3OiBcImh0dHBzOi8vc3RhdGljLm1pcmFoZXplLm9yZy9wbGF6bWFidXJzdHdpa2kvNy83MS9MYXplcl83LnBuZ1wiLFxyXG4gICAgICAgIDg6IFwiaHR0cHM6Ly9zdGF0aWMubWlyYWhlemUub3JnL3BsYXptYWJ1cnN0d2lraS9jL2M2L0xhemVyXzgucG5nXCIsXHJcbiAgICAgICAgOTogXCJodHRwczovL3N0YXRpYy5taXJhaGV6ZS5vcmcvcGxhem1hYnVyc3R3aWtpL2QvZDIvTGF6ZXJfOS5wbmdcIixcclxuICAgICAgICAxMDogXCJodHRwczovL3N0YXRpYy5taXJhaGV6ZS5vcmcvcGxhem1hYnVyc3R3aWtpLzUvNWIvTGF6ZXJfMTAucG5nXCIsXHJcbiAgICAgICAgMTE6IFwiaHR0cHM6Ly9zdGF0aWMubWlyYWhlemUub3JnL3BsYXptYWJ1cnN0d2lraS9kL2QyL0xhemVyXzExLnBuZ1wiLFxyXG4gICAgICAgIDEyOiBcImh0dHBzOi8vc3RhdGljLm1pcmFoZXplLm9yZy9wbGF6bWFidXJzdHdpa2kvMi8yZC9MYXplcl8xMi5wbmdcIixcclxuICAgICAgICAxMzogXCJodHRwczovL3N0YXRpYy5taXJhaGV6ZS5vcmcvcGxhem1hYnVyc3R3aWtpL2IvYmUvTGF6ZXJfMTMucG5nXCIsXHJcbiAgICAgICAgMTQ6IFwiaHR0cHM6Ly9zdGF0aWMubWlyYWhlemUub3JnL3BsYXptYWJ1cnN0d2lraS8xLzE0L0xhemVyXzE0LnBuZ1wiLFxyXG4gICAgICAgIDE1OiBcIlwiLCAvLyBFbXB0eSBwcm9qZWN0aWxlLlxyXG4gICAgICAgIDE2OiBcImh0dHBzOi8vc3RhdGljLm1pcmFoZXplLm9yZy9wbGF6bWFidXJzdHdpa2kvNy83Zi9MYXplcl8xNi5wbmdcIixcclxuICAgICAgICAxNzogXCJodHRwczovL3N0YXRpYy5taXJhaGV6ZS5vcmcvcGxhem1hYnVyc3R3aWtpLzMvMzEvTGF6ZXJfMTcucG5nXCIsXHJcbiAgICAgICAgMTg6IFwiaHR0cHM6Ly9zdGF0aWMubWlyYWhlemUub3JnL3BsYXptYWJ1cnN0d2lraS84Lzg5L0xhemVyXzE4LnBuZ1wiLFxyXG4gICAgICAgIDE5OiBcImh0dHBzOi8vc3RhdGljLm1pcmFoZXplLm9yZy9wbGF6bWFidXJzdHdpa2kvZi9mZS9MYXplcl8xOS5wbmdcIixcclxuICAgICAgICAyMDogXCJodHRwczovL3N0YXRpYy5taXJhaGV6ZS5vcmcvcGxhem1hYnVyc3R3aWtpLzEvMWEvTGF6ZXJfMjAucG5nXCIsXHJcbiAgICAgICAgMjE6IFwiaHR0cHM6Ly9zdGF0aWMubWlyYWhlemUub3JnL3BsYXptYWJ1cnN0d2lraS80LzQyL0xhemVyXzIxLnBuZ1wiLFxyXG4gICAgICAgIDIyOiBcImh0dHBzOi8vc3RhdGljLm1pcmFoZXplLm9yZy9wbGF6bWFidXJzdHdpa2kvYy9jMC9MYXplcl8yMi5wbmdcIixcclxuICAgICAgICAyMzogXCJodHRwczovL3N0YXRpYy5taXJhaGV6ZS5vcmcvcGxhem1hYnVyc3R3aWtpL2QvZDkvTGF6ZXJfMjMucG5nXCIsXHJcbiAgICAgICAgMjQ6IFwiaHR0cHM6Ly9zdGF0aWMubWlyYWhlemUub3JnL3BsYXptYWJ1cnN0d2lraS9mL2Y1L0xhemVyXzI0LnBuZ1wiLFxyXG4gICAgICAgIDI1OiBcImh0dHBzOi8vc3RhdGljLm1pcmFoZXplLm9yZy9wbGF6bWFidXJzdHdpa2kvNy83Yy9MYXplcl8yNS5wbmdcIixcclxuICAgICAgICAyNjogXCJodHRwczovL3N0YXRpYy5taXJhaGV6ZS5vcmcvcGxhem1hYnVyc3R3aWtpL2EvYTcvTGF6ZXJfMjYucG5nXCIsXHJcbiAgICAgICAgMjc6IFwiaHR0cHM6Ly9zdGF0aWMubWlyYWhlemUub3JnL3BsYXptYWJ1cnN0d2lraS8zLzMwL0xhemVyXzI3LnBuZ1wiLFxyXG4gICAgICAgIDI4OiBcImh0dHBzOi8vc3RhdGljLm1pcmFoZXplLm9yZy9wbGF6bWFidXJzdHdpa2kvMy8zYS9MYXplcl8yOC5wbmdcIixcclxuICAgICAgICAyOTogXCJodHRwczovL3N0YXRpYy5taXJhaGV6ZS5vcmcvcGxhem1hYnVyc3R3aWtpLzkvOTAvTGF6ZXJfMjkucG5nXCIsXHJcbiAgICAgICAgMzA6IFwiaHR0cHM6Ly9zdGF0aWMubWlyYWhlemUub3JnL3BsYXptYWJ1cnN0d2lraS8yLzIzL0xhemVyXzMwLnBuZ1wiLFxyXG4gICAgICAgIDMxOiBcImh0dHBzOi8vc3RhdGljLm1pcmFoZXplLm9yZy9wbGF6bWFidXJzdHdpa2kvMy8zYS9MYXplcl8zMS5wbmdcIixcclxuICAgICAgICAzMjogXCJodHRwczovL3N0YXRpYy5taXJhaGV6ZS5vcmcvcGxhem1hYnVyc3R3aWtpL2YvZjAvTGF6ZXJfMzIucG5nXCIsXHJcbiAgICAgICAgMzM6IFwiaHR0cHM6Ly9zdGF0aWMubWlyYWhlemUub3JnL3BsYXptYWJ1cnN0d2lraS8wLzBkL0xhemVyXzMzLnBuZ1wiLFxyXG4gICAgICAgIDM0OiBcImh0dHBzOi8vc3RhdGljLm1pcmFoZXplLm9yZy9wbGF6bWFidXJzdHdpa2kvYy9jOC9MYXplcl8zNC5wbmdcIixcclxuICAgICAgICAzNTogXCJodHRwczovL3N0YXRpYy5taXJhaGV6ZS5vcmcvcGxhem1hYnVyc3R3aWtpLzMvMzgvTGF6ZXJfMzUucG5nXCIsXHJcbiAgICAgICAgMzY6IFwiaHR0cHM6Ly9zdGF0aWMubWlyYWhlemUub3JnL3BsYXptYWJ1cnN0d2lraS82LzZkL0xhemVyXzM2LnBuZ1wiLFxyXG4gICAgICAgIDM3OiBcImh0dHBzOi8vc3RhdGljLm1pcmFoZXplLm9yZy9wbGF6bWFidXJzdHdpa2kvYS9hOS9MYXplcl8zNy5wbmdcIixcclxuICAgICAgICAzODogXCJodHRwczovL3N0YXRpYy5taXJhaGV6ZS5vcmcvcGxhem1hYnVyc3R3aWtpL2UvZTcvTGF6ZXJfMzgucG5nXCIsXHJcbiAgICAgICAgMzk6IFwiaHR0cHM6Ly9zdGF0aWMubWlyYWhlemUub3JnL3BsYXptYWJ1cnN0d2lraS82LzZjL0xhemVyXzM5LnBuZ1wiLFxyXG4gICAgICAgIDQwOiBcImh0dHBzOi8vc3RhdGljLm1pcmFoZXplLm9yZy9wbGF6bWFidXJzdHdpa2kvZC9kNC9MYXplcl80MC5wbmdcIixcclxuICAgICAgICA0MTogXCJodHRwczovL3N0YXRpYy5taXJhaGV6ZS5vcmcvcGxhem1hYnVyc3R3aWtpLzUvNWQvTGF6ZXJfNDEucG5nXCIsXHJcbiAgICAgICAgNDI6IFwiaHR0cHM6Ly9zdGF0aWMubWlyYWhlemUub3JnL3BsYXptYWJ1cnN0d2lraS85LzlkL0xhemVyXzQyLnBuZ1wiLFxyXG4gICAgICAgIDQzOiBcImh0dHBzOi8vc3RhdGljLm1pcmFoZXplLm9yZy9wbGF6bWFidXJzdHdpa2kvNy83OS9MYXplcl80My5wbmdcIixcclxuICAgICAgICA0NDogXCJodHRwczovL3N0YXRpYy5taXJhaGV6ZS5vcmcvcGxhem1hYnVyc3R3aWtpLzYvNmQvTGF6ZXJfNDQucG5nXCIsXHJcbiAgICAgICAgNDU6IFwiaHR0cHM6Ly9zdGF0aWMubWlyYWhlemUub3JnL3BsYXptYWJ1cnN0d2lraS80LzQ0L0xhemVyXzQ1LnBuZ1wiLFxyXG4gICAgICAgIDQ2OiBcImh0dHBzOi8vc3RhdGljLm1pcmFoZXplLm9yZy9wbGF6bWFidXJzdHdpa2kvMy8zYi9MYXplcl80Ni5wbmdcIixcclxuICAgICAgICA0NzogXCJodHRwczovL3N0YXRpYy5taXJhaGV6ZS5vcmcvcGxhem1hYnVyc3R3aWtpLzgvODQvTGF6ZXJfNDcucG5nXCIsXHJcbiAgICAgICAgNDg6IFwiaHR0cHM6Ly9zdGF0aWMubWlyYWhlemUub3JnL3BsYXptYWJ1cnN0d2lraS83Lzc1L0xhemVyXzQ4LnBuZ1wiLFxyXG4gICAgICAgIDQ5OiBcImh0dHBzOi8vc3RhdGljLm1pcmFoZXplLm9yZy9wbGF6bWFidXJzdHdpa2kvMC8wOC9MYXplcl80OS5wbmdcIixcclxuICAgICAgICA1MDogXCJodHRwczovL3N0YXRpYy5taXJhaGV6ZS5vcmcvcGxhem1hYnVyc3R3aWtpLzQvNDEvTGF6ZXJfNTAucG5nXCIsXHJcbiAgICAgICAgNTE6IFwiaHR0cHM6Ly9zdGF0aWMubWlyYWhlemUub3JnL3BsYXptYWJ1cnN0d2lraS85LzkyL0xhemVyXzUxLnBuZ1wiLFxyXG4gICAgICAgIDUyOiBcImh0dHBzOi8vc3RhdGljLm1pcmFoZXplLm9yZy9wbGF6bWFidXJzdHdpa2kvOS85Mi9MYXplcl81Mi5wbmdcIixcclxuICAgICAgICA1MzogXCJodHRwczovL3N0YXRpYy5taXJhaGV6ZS5vcmcvcGxhem1hYnVyc3R3aWtpLzcvNzAvTGF6ZXJfNTMucG5nXCIsXHJcbiAgICAgICAgNTQ6IFwiaHR0cHM6Ly9zdGF0aWMubWlyYWhlemUub3JnL3BsYXptYWJ1cnN0d2lraS9lL2VlL0xhemVyXzU0LnBuZ1wiLFxyXG4gICAgICAgIDU1OiBcImh0dHBzOi8vc3RhdGljLm1pcmFoZXplLm9yZy9wbGF6bWFidXJzdHdpa2kvZC9kMS9MYXplcl81NS5wbmdcIlxyXG4gICAgfTtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNTY7IGkrKykge1xyXG4gICAgICAgIHByb2plY3RpbGVNb2RlbHNbaV0gPSBgPGltZyBzcmM9JyR7cHJvamVjdGlsZU1vZGVsc1tpXX0nIHN0eWxlPSd3aWR0aDogNjBweDsgaGVpZ2h0OiAyMHB4Jy8+YDtcclxuICAgIH1cclxuICAgIGFsZWlMb2coREVCVUcsIFwiTG9hZGVkIHByb2plY3RpbGUgbW9kZWxzLlwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGF0Y2hTcGVjaWFsVmFsdWUoKSB7XHJcbiAgICBsZXQgX09HID0gd2luZG93LnNwZWNpYWxfdmFsdWU7XHJcbiAgICB3aW5kb3cuc3BlY2lhbF92YWx1ZSA9IChiYXNlLCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGlmIChbXCJBTEVJX3Byb2plY3RpbGVNb2RlbHNcIl0uaW5kZXhPZihiYXNlKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgbGV0IHJldHVybmluZyA9IFZBTF9UQUJMRVtiYXNlXVt2YWx1ZV07XHJcbiAgICAgICAgICAgIGlmIChyZXR1cm5pbmcgPT09IHVuZGVmaW5lZCkgcmV0dXJuIEVSUk9SX1ZBTFVFO1xyXG4gICAgICAgICAgICBlbHNlIHJldHVybiByZXR1cm5pbmc7XHJcbiAgICAgICAgfSBlbHNlIGlmKGJhc2UgPT0gXCJ0cmlnZ2VyK25vbmVcIikgeyAvLyBJIGFjdHVhbGx5IGRvIG5vdCBoYXZlIHRvIGRvIHRoaXMsIGJ1dCBpIHdpbGwgZG8gaXQgdG8gZ2V0IHJpZCBvZiBhbm5veWFuY2VcclxuICAgICAgICAgICAgaWYodmFsdWUgPT0gLTEpIHJldHVybiBWQUxfVEFCTEVbXCJ0cmlnZ2VyK25vbmVcIl1bLTFdO1xyXG4gICAgICAgICAgICByZXR1cm4gc3BlY2lhbF92YWx1ZShcInRyaWdnZXJcIiwgdmFsdWUpO1xyXG4gICAgICAgIH1lbHNlIGlmKGJhc2UgPT0gXCJ0aW1lcitub25lXCIpIHtcclxuICAgICAgICAgICAgaWYodmFsdWUgPT0gLTEpIHJldHVybiBWQUxfVEFCTEVbXCJ0aW1lcitub25lXCJdWy0xXTtcclxuICAgICAgICAgICAgcmV0dXJuIHNwZWNpYWxfdmFsdWUoXCJ0aW1lclwiLCB2YWx1ZSk7XHJcbiAgICAgICAgfWVsc2UgcmV0dXJuIF9PRyhiYXNlLCB2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBhbGVpTG9nKERFQlVHLCBcIlBhdGNoZWQgU3BlY2lhbFZhbHVlXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBub3RpZnlVcGRhdGUodmVyc2lvbikge1xyXG4gICAgbmV3VXBkYXRlID0gMTtcclxuXHJcbiAgICBhbGVpTG9nKElORk8sIGBOZXcgdXBkYXRlOiAke3ZlcnNpb259YCk7XHJcbiAgICBOZXdOb3RlKGBBTEVJOiBUaGVyZSBpcyBuZXcgdXBkYXRlOiAke3ZlcnNpb259LCB5b3UgYXJlIGN1cnJlbnRseSBpbiAke0dNX2luZm8uc2NyaXB0LnZlcnNpb259PGJyPlByZXNzIEN0cmwgKyBTaGlmdCB0byB1cGRhdGVgLCBcIiNGRkZGRkZcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5vdGlmeUlmVGhlcmVzVXBkYXRlKHNjcmlwdCkge1xyXG4gICAgbGV0IGxpbmVzID0gc2NyaXB0LnNwbGl0KFwiXFxuXCIpO1xyXG4gICAgbGV0IHZlcnNpb247XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgbGluZSA9IGxpbmVzW2ldO1xyXG4gICAgICAgIGlmKGxpbmUuaW5kZXhPZihcIkB2ZXJzaW9uXCIpID09IC0xKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgbGV0IHBhcnRzID0gbGluZS5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgdmVyc2lvbiA9IHBhcnRzW3BhcnRzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBsYXRlc3RWZXJzaW9uID0gcGFyc2VJbnQodmVyc2lvbi5yZXBsYWNlQWxsKFwiLlwiLCBcIlwiKSk7XHJcbiAgICBsZXQgY3VycmVudFZlcnNpb24gPSBwYXJzZUludChHTV9pbmZvLnNjcmlwdC52ZXJzaW9uLnJlcGxhY2VBbGwoXCIuXCIsIFwiXCIpKTtcclxuXHJcbiAgICBpZihsYXRlc3RWZXJzaW9uID4gY3VycmVudFZlcnNpb24pIHJldHVybiBub3RpZnlVcGRhdGUodmVyc2lvbik7XHJcblxyXG4gICAgYWxlaUxvZyhJTkZPLCBgUkVNT1RFOiAke3ZlcnNpb259LCBMT0NBTDogJHtHTV9pbmZvLnNjcmlwdC52ZXJzaW9ufSA9PiBObyB1cGRhdGUgZGV0ZWN0ZWQuYCk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGNoZWNrRm9yVXBkYXRlcygpIHtcclxuICAgIGxldCByZXNwID0gYXdhaXQgR00ueG1sSHR0cFJlcXVlc3QoeyAgdXJsOiBHTV9pbmZvLnNjcmlwdC51cGRhdGVVUkwgIH0pLmNhdGNoKGUgPT4gY29uc29sZS5lcnJvcihlKSk7XHJcbiAgICBub3RpZnlJZlRoZXJlc1VwZGF0ZShyZXNwLnJlc3BvbnNlVGV4dCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFMRUlfRG9Xb3JsZFNjYWxlKCkge1xyXG4gICAgdmFyIG5ld3NjYWxlID0gcHJvbXB0KCdNdWx0aXBseSBzZWxlY3Rpb24gc2l6ZSBieSAlIChwZXJjZW50cyknLCAxMDApO1xyXG4gICAgaWYgKCEobmV3c2NhbGUgPT0gbnVsbCB8fCBuZXdzY2FsZSA9PSAxMDApKSB7XHJcbiAgICAgICAgdmFyIGZhY3RvciA9IE1hdGguZmxvb3IobmV3c2NhbGUpIC8gMTAwO1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHNuYXBwaW5nU2NyaXB0ID0gYC9HUklEX1NOQVBQSU5HKSpHUklEX1NOQVBQSU5HO2BcclxuICAgICAgICAgICAgdmFyIHJvdW5kd2VsbCA9IHRydWU7XHJcbiAgICAgICAgICAgIGxjeigpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICAgICAgaWYgKGVzW2ldLmV4aXN0cylcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXNbaV0uc2VsZWN0ZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChNYXRjaExheWVyKGVzW2ldKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVzW2ldLnBtLncgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGRuKCdlc1snICsgaSArICddLnBtLnc9TWF0aC5yb3VuZChlc1snICsgaSArICddLnBtLncqJyArIGZhY3RvciArIHNuYXBwaW5nU2NyaXB0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsbmQoJ2VzWycgKyBpICsgJ10ucG0udz0nICsgZXNbaV0ucG0udyArICc7Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVzW2ldLnBtLncgKiBmYWN0b3IgIT0gTWF0aC5yb3VuZChlc1tpXS5wbS53ICogZmFjdG9yIC8gR1JJRF9TTkFQUElORykgKiBHUklEX1NOQVBQSU5HKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3VuZHdlbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlc1tpXS5wbS5oICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxkbignZXNbJyArIGkgKyAnXS5wbS5oPU1hdGgucm91bmQoZXNbJyArIGkgKyAnXS5wbS5oKicgKyBmYWN0b3IgKyBzbmFwcGluZ1NjcmlwdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG5kKCdlc1snICsgaSArICddLnBtLmg9JyArIGVzW2ldLnBtLmggKyAnOycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlc1tpXS5wbS5oICogZmFjdG9yICE9IE1hdGgucm91bmQoZXNbaV0ucG0uaCAqIGZhY3RvciAvIEdSSURfU05BUFBJTkcpICogR1JJRF9TTkFQUElORylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91bmR3ZWxsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXNbaV0ucG0ueCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZG4oJ2VzWycgKyBpICsgJ10ucG0ueD1NYXRoLnJvdW5kKGVzWycgKyBpICsgJ10ucG0ueConICsgZmFjdG9yICsgc25hcHBpbmdTY3JpcHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxuZCgnZXNbJyArIGkgKyAnXS5wbS54PScgKyBlc1tpXS5wbS54ICsgJzsnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXNbaV0ucG0ueCAqIGZhY3RvciAhPSBNYXRoLnJvdW5kKGVzW2ldLnBtLnggKiBmYWN0b3IgLyBHUklEX1NOQVBQSU5HKSAqIEdSSURfU05BUFBJTkcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdW5kd2VsbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVzW2ldLnBtLnkgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGRuKCdlc1snICsgaSArICddLnBtLnk9TWF0aC5yb3VuZChlc1snICsgaSArICddLnBtLnkqJyArIGZhY3RvciArIHNuYXBwaW5nU2NyaXB0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsbmQoJ2VzWycgKyBpICsgJ10ucG0ueT0nICsgZXNbaV0ucG0ueSArICc7Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVzW2ldLnBtLnkgKiBmYWN0b3IgIT0gTWF0aC5yb3VuZChlc1tpXS5wbS55ICogZmFjdG9yIC8gR1JJRF9TTkFQUElORykgKiBHUklEX1NOQVBQSU5HKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3VuZHdlbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZnoodHJ1ZSk7XHJcbiAgICAgICAgICAgIE5ld05vdGUoJ09wZXJhdGlvbiBjb21wbGV0ZTo8YnI+PGJyPlNlbGVjdGVkIG9iamVjdHMgc2NhbGVkIGJ5ICcgKyBmYWN0b3IgKyAnICgnICsgbmV3c2NhbGUgKyAnJSBvZiBvcmlnaW5hbCBzaXplKScsIG5vdGVfcGFzc2l2ZSk7XHJcbiAgICAgICAgICAgIGlmICghcm91bmR3ZWxsKVxyXG4gICAgICAgICAgICAgICAgTmV3Tm90ZSgnTm90ZTogUG9zaXRpb24gYW5kL29yIGRpbWVuc2lvbnMgb2Ygc29tZSBvYmplY3RzIHdlcmUgbm90IHNjYWxlZCBwcm9wZXJseSBkdWUgdG8gTGV2ZWwgRWRpdG9yIHJvdW5kaW5nIHJ1bGVzJywgbm90ZV9uZXV0cmFsKTtcclxuICAgICAgICAgICAgbmVlZF9HVUlQYXJhbXNfdXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgbmVlZF9yZWRyYXcgPSB0cnVlO1xyXG4gICAgICAgICAgICBVcGRhdGVUb29scygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBwYXRjaFBlcmNlbnRhZ2VUb29sKCkge1xyXG4gICAgd2luZG93LkRvV29ybGRTY2FsZSA9IEFMRUlfRG9Xb3JsZFNjYWxlO1xyXG4gICAgYWxlaUxvZyhERUJVRywgXCJQYXRjaGVkIHBlcmNlbnRhZ2UgdG9vbFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2VuY29kZVhNTENoYXJzKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZUFsbChcIjxcIiwgXCImbHQ7XCIpLnJlcGxhY2VBbGwoXCI+XCIsIFwiJmd0O1wiKS5yZXBsYWNlQWxsKCdcIicsIFwiJnF1b3Q7XCIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhdGNoQ29tcGlsZVRyaWdnZXIoKSB7XHJcbiAgICBsZXQgX29nID0gd2luZG93LkNvbXBpbGVUcmlnZ2VyO1xyXG5cclxuICAgIHdpbmRvdy5Db21waWxlVHJpZ2dlciA9ICgpID0+IHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gX29nKCk7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkID0gU2VsZWN0ZWRPYmplY3RzO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0ZWQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG9iaiA9IHNlbGVjdGVkW2ldO1xyXG4gICAgICAgICAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKG9iai5wbSk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGtleXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqLnBtW2tleXNbal1dID09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmoucG1ba2V5c1tqXV0gPSBfZW5jb2RlWE1MQ2hhcnMob2JqLnBtW2tleXNbal1dKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgYWxlaUxvZyhERUJVRywgXCJQYXRjaGVkIENvbXBpbGVUcmlnZ2VyXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQYXN0ZUZyb21QZXJtYW5lbnRDbGlwYm9hcmQoKSB7XHJcbiAgICB3aW5kb3cucGFzdGVGcm9tUGVybWFuZW50Q2xpcGJvYXJkID0gcGFzdGVGcm9tUGVybWFuZW50Q2xpcGJvYXJkO1xyXG59XHJcblxyXG5sZXQgc2VsZWN0ZWRUcmlnZ2VyQWN0aW9ucyA9IFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXTtcclxubGV0IGhvdmVyZWRUcmlnZ2VyQWN0aW9uID0gLTE7XHJcbmxldCB0cmlnZ2VyQWN0aW9uc0NsaXBib2FyZCA9IFtdO1xyXG5cclxuZnVuY3Rpb24gZ2V0VHJpZ2dlckFjdGlvbkVsZW1lbnRzKCkge1xyXG4gICAgbGV0IGFyciA9IFtdO1xyXG4gICAgbGV0IGVsZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInBfaVwiKTtcclxuICAgIGxldCBpID0gNztcclxuXHJcbiAgICBmb3IgKDsgaSA8IGVsZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgYXJyLnB1c2goZWxlbXNbaV0uY2hpbGROb2Rlc1swXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFycjtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICBsZXQgZWxlbXMgPSBnZXRUcmlnZ2VyQWN0aW9uRWxlbWVudHMoKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGVsZW0gPSBlbGVtc1tpXTtcclxuXHJcbiAgICAgICAgZWxlbS5vbm1vdXNlZG93biA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzZWxlY3RlZFRyaWdnZXJBY3Rpb25zW01hdGguZmxvb3IoaSAvIDMpXSBePSAxO1xyXG4gICAgICAgICAgICB1cGRhdGVUcmlnZ2VyQWN0aW9uRWxlbWVudHMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsZW0ub25tb3VzZWVudGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGhvdmVyZWRUcmlnZ2VyQWN0aW9uID0gTWF0aC5mbG9vcihpIC8gMyk7XHJcbiAgICAgICAgICAgIHVwZGF0ZVRyaWdnZXJBY3Rpb25FbGVtZW50cygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxlbS5vbm1vdXNlbGVhdmUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaG92ZXJlZFRyaWdnZXJBY3Rpb24gPSAtMTtcclxuICAgICAgICAgICAgdXBkYXRlVHJpZ2dlckFjdGlvbkVsZW1lbnRzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVUcmlnZ2VyQWN0aW9uRWxlbWVudHMoKSB7XHJcbiAgICBsZXQgZWxlbXMgPSBnZXRUcmlnZ2VyQWN0aW9uRWxlbWVudHMoKTtcclxuXHJcbiAgICAvLyBUT0RPOiBNYWtlIHRob3NlIGNvbG9ycyBub3QgaGFyZGNvZGVkLCBwcm9sbHkgbmV2ZXIgd2lsbCBkby5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgIC8vIE5vdCBzZWxlY3RlZFxyXG4gICAgICAgIGxldCBjb2xvciA9IFwiXCI7XHJcblxyXG4gICAgICAgIC8vIFNlbGVjdGVkLlxyXG4gICAgICAgIGlmIChzZWxlY3RlZFRyaWdnZXJBY3Rpb25zW2ldKSB7XHJcbiAgICAgICAgICAgIGNvbG9yID0gXCJyZ2IoNDUsIDY1LCA5NSlcIjtcclxuICAgICAgICAgICAgaWYgKFRIRU1FICE9IDApIGNvbG9yID0gXCJyZ2IoMjcsIDI3LCAyNylcIjsgLy8gcmdiKDM3LCAzNywgMzcpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbGVtc1tpICogMyArIDBdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIGVsZW1zW2kgKiAzICsgMV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XHJcbiAgICAgICAgZWxlbXNbaSAqIDMgKyAyXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBIb3Zlci5cclxuICAgIGlmIChob3ZlcmVkVHJpZ2dlckFjdGlvbiAhPSAtMSkge1xyXG4gICAgICAgIGlmICghc2VsZWN0ZWRUcmlnZ2VyQWN0aW9uc1tob3ZlcmVkVHJpZ2dlckFjdGlvbl0pIHtcclxuICAgICAgICAgICAgbGV0IGNvbG9yID0gXCJyZ2IoNjUsIDg1LCAxMzApXCI7XHJcblxyXG4gICAgICAgICAgICBpZiAoVEhFTUUgIT0gMCkgY29sb3IgPSBcInJnYig0NywgNDcsIDQ3KVwiXHJcblxyXG4gICAgICAgICAgICBlbGVtc1tob3ZlcmVkVHJpZ2dlckFjdGlvbiAqIDMgKyAwXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcclxuICAgICAgICAgICAgZWxlbXNbaG92ZXJlZFRyaWdnZXJBY3Rpb24gKiAzICsgMV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XHJcbiAgICAgICAgICAgIGVsZW1zW2hvdmVyZWRUcmlnZ2VyQWN0aW9uICogMyArIDJdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaXNPbmx5VHJpZ2dlclNlbGVjdGVkKCkge1xyXG4gICAgbGV0IHJlc3VsdCA9IDA7XHJcbiAgICBsZXQgc2VsZWN0aW9uID0gZ2V0U2VsZWN0aW9uKCk7XHJcblxyXG4gICAgaWYgKHNlbGVjdGlvbi5sZW5ndGggPT0gMSAmJiBzZWxlY3Rpb25bMF0uX2NsYXNzID09IFwidHJpZ2dlclwiKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gMTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUcmlnZ2VyQWN0aW9ucygpIHtcclxuICAgIGVkaXRfdHJpZ2dlcnNfYXNfdGV4dCA9IDE7XHJcblxyXG4gICAgVXBkYXRlR1VJUGFyYW1zKCk7XHJcblxyXG4gICAgbGV0IHRleHRhcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcGNvZGVfZmllbGRcIik7XHJcbiAgICBsZXQgYXJyID0gdGV4dGFyZWEudmFsdWUuc3BsaXQoXCJcXG5cIikuc2xpY2UoNCk7XHJcblxyXG4gICAgd2hpbGUgKGFyci5sZW5ndGggPCAxMCkge1xyXG4gICAgICAgIGFyci5wdXNoKFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGVkaXRfdHJpZ2dlcnNfYXNfdGV4dCA9IDA7XHJcbiAgICBVcGRhdGVHVUlQYXJhbXMoKTtcclxuXHJcbiAgICByZXR1cm4gYXJyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb3B5VHJpZ2dlckFjdGlvbnMoKSB7XHJcbiAgICBsZXQgYWN0aW9ucyA9IGdldFRyaWdnZXJBY3Rpb25zKCk7XHJcblxyXG4gICAgdHJpZ2dlckFjdGlvbnNDbGlwYm9hcmQgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICBpZiAoc2VsZWN0ZWRUcmlnZ2VyQWN0aW9uc1tpXSkge1xyXG4gICAgICAgICAgICB0cmlnZ2VyQWN0aW9uc0NsaXBib2FyZC5wdXNoKGFjdGlvbnNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaXNOb3RoaW5nU2VsZWN0ZWQoKSB7XHJcbiAgICByZXR1cm4gIXNlbGVjdGVkVHJpZ2dlckFjdGlvbnMuaW5jbHVkZXMoMSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzT25seU9uZVRyaWdnZXJBY3Rpb25TZWxlY3RlZCgpIHtcclxuICAgIHJldHVybiBzZWxlY3RlZFRyaWdnZXJBY3Rpb25zLmluZGV4T2YoMSkgPT0gc2VsZWN0ZWRUcmlnZ2VyQWN0aW9ucy5sYXN0SW5kZXhPZigxKSAmJiAhaXNOb3RoaW5nU2VsZWN0ZWQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0U2VsZWN0ZWRUcmlnZ2VyQWN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHNlbGVjdGVkVHJpZ2dlckFjdGlvbnMuaW5kZXhPZigxKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VHJpZ2dlckluZm8oKSB7XHJcbiAgICBlZGl0X3RyaWdnZXJzX2FzX3RleHQgPSAxO1xyXG4gICAgVXBkYXRlR1VJUGFyYW1zKCk7XHJcblxyXG4gICAgbGV0IHRleHRhcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcGNvZGVfZmllbGRcIik7XHJcbiAgICBsZXQgYXJyID0gdGV4dGFyZWEudmFsdWUuc3BsaXQoXCJcXG5cIikuc2xpY2UoMCwgMyk7XHJcblxyXG4gICAgcmV0dXJuIGFycjtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFzdGVUcmlnZ2VyQWN0aW9ucygpIHtcclxuICAgIC8vIFRPRE86IE1ha2UgdGhpcyBiaXQgbW9yZSBzcGVjaWZpY1xyXG4gICAgLy8gQXMgaW4sIGlmIGkgY29weSAyIGFjdGlvbnMsIGFuZCBpIHNlbGVjdCBhbm90aGVyIDIgYWN0aW9ucywgaXQgc2hvdWxkIHBhc3RlIHRvIHRob3NlIDIgYWN0aW9ucyBpIHNlbGVjdGVkXHJcbiAgICAvLyBBbmQgbm90IGFkZCB0byBlbmQgb2YgaXQuXHJcbiAgICBsZXQgYWN0aW9ucyA9IGdldFRyaWdnZXJBY3Rpb25zKCk7XHJcbiAgICBsZXQgaW5kZXggPSBnZXRTZWxlY3RlZFRyaWdnZXJBY3Rpb24oKTtcclxuICAgIGxldCBjbGlwYm9hcmQgPSB0cmlnZ2VyQWN0aW9uc0NsaXBib2FyZC5qb2luKFwiXFxuXCIpO1xyXG4gICAgbGV0IGluZm8gPSBnZXRUcmlnZ2VySW5mbygpO1xyXG5cclxuICAgIGVkaXRfdHJpZ2dlcnNfYXNfdGV4dCA9IDE7XHJcbiAgICBVcGRhdGVHVUlQYXJhbXMoKTtcclxuXHJcbiAgICBpZiAoaXNOb3RoaW5nU2VsZWN0ZWQoKSkgeyAvLyBBZGRzIGFjdGlvbiBhdCBlbmQgb2Ygbm8gYWN0aW9uIHdhcyBzZWxlY3RlZC5cclxuICAgICAgICBpbmRleCA9IGFjdGlvbnMubGVuZ3RoIC0gMTtcclxuICAgICAgICBhY3Rpb25zW2luZGV4XSA9IGFjdGlvbnNbaW5kZXhdICsgXCJcXG5cIiArIGNsaXBib2FyZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNPbmx5T25lVHJpZ2dlckFjdGlvblNlbGVjdGVkKCkpIHsgLy8gQWRkcyBhY3Rpb24gYmVmb3JlIHRoZSBhY3Rpb24gdGhhdCB3YXMgc2VsZWN0ZWQuXHJcbiAgICAgICAgYWN0aW9uc1tpbmRleF0gPSBjbGlwYm9hcmQgKyBcIlxcblwiICsgYWN0aW9uc1tpbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHRleHRhcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcGNvZGVfZmllbGRcIik7XHJcblxyXG4gICAgdGV4dGFyZWEudmFsdWUgPSBpbmZvLmNvbmNhdChhY3Rpb25zKS5qb2luKFwiXFxuXCIpO1xyXG5cclxuICAgIENvbXBpbGVUcmlnZ2VyKCk7XHJcblxyXG4gICAgZWRpdF90cmlnZ2Vyc19hc190ZXh0ID0gMDtcclxuICAgIFVwZGF0ZUdVSVBhcmFtcygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVUcmlnZ2VyQWN0aW9ucygpIHtcclxuICAgIGxldCBhY3Rpb25zID0gZ2V0VHJpZ2dlckFjdGlvbnMoKTtcclxuICAgIGxldCBpbmZvID0gZ2V0VHJpZ2dlckluZm8oKTtcclxuXHJcbiAgICBlZGl0X3RyaWdnZXJzX2FzX3RleHQgPSAxO1xyXG4gICAgVXBkYXRlR1VJUGFyYW1zKCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkVHJpZ2dlckFjdGlvbnNbaV0pIHtcclxuICAgICAgICAgICAgYWN0aW9uc1tpXSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCB0ZXh0YXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3Bjb2RlX2ZpZWxkXCIpO1xyXG5cclxuICAgIHRleHRhcmVhLnZhbHVlID0gaW5mby5jb25jYXQoYWN0aW9ucykuam9pbihcIlxcblwiKTtcclxuXHJcbiAgICBDb21waWxlVHJpZ2dlcigpO1xyXG5cclxuICAgIGVkaXRfdHJpZ2dlcnNfYXNfdGV4dCA9IDA7XHJcbiAgICBVcGRhdGVHVUlQYXJhbXMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmV2ZXJzZVRyaWdnZXJBY3Rpb25zKCkge1xyXG4gICAgbGV0IGFjdGlvbnMxID0gZ2V0VHJpZ2dlckFjdGlvbnMoKTtcclxuICAgIGxldCBhY3Rpb25zMiA9IFtdO1xyXG4gICAgbGV0IGluZGV4ZXMgPSBbXTtcclxuICAgIGxldCBpbmZvID0gZ2V0VHJpZ2dlckluZm8oKTtcclxuXHJcbiAgICBlZGl0X3RyaWdnZXJzX2FzX3RleHQgPSAxO1xyXG4gICAgVXBkYXRlR1VJUGFyYW1zKCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkVHJpZ2dlckFjdGlvbnNbaV0pIHtcclxuICAgICAgICAgICAgYWN0aW9uczIucHVzaChhY3Rpb25zMVtpXSk7XHJcbiAgICAgICAgICAgIGluZGV4ZXMucHVzaChpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5kZXhlcy5yZXZlcnNlKCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3Rpb25zMi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBpbmRleCA9IGluZGV4ZXNbaV07XHJcbiAgICAgICAgbGV0IGFjdGlvbiA9IGFjdGlvbnMyW2ldO1xyXG5cclxuICAgICAgICBhY3Rpb25zMVtpbmRleF0gPSBhY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHRleHRhcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcGNvZGVfZmllbGRcIik7XHJcblxyXG4gICAgdGV4dGFyZWEudmFsdWUgPSBpbmZvLmNvbmNhdChhY3Rpb25zMSkuam9pbihcIlxcblwiKTtcclxuXHJcbiAgICBkaXNwbGF5T3BlcmF0aW9uQ29tcGxldGVOb3RlcyA9IGZhbHNlO1xyXG4gICAgQ29tcGlsZVRyaWdnZXIoKTtcclxuICAgIGRpc3BsYXlPcGVyYXRpb25Db21wbGV0ZU5vdGVzID0gdHJ1ZTtcclxuICAgIE5ld05vdGUoXCJSZXZlcnNlZCBhY3Rpb25zLlwiLCBcIiNGRkZGRkZcIik7XHJcblxyXG4gICAgZWRpdF90cmlnZ2Vyc19hc190ZXh0ID0gMDtcclxuICAgIFVwZGF0ZUdVSVBhcmFtcygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1bnNlbGVjdFRyaWdnZXJBY3Rpb25zKCkge1xyXG4gICAgc2VsZWN0ZWRUcmlnZ2VyQWN0aW9ucyA9IFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXTtcclxuICAgIGhvdmVyZWRUcmlnZ2VyQWN0aW9uID0gLTE7XHJcbiAgICB1cGRhdGVUcmlnZ2VyQWN0aW9uRWxlbWVudHMoKTtcclxufVxyXG5cclxud2luZG93LnRyaWdnZXJBY3Rpb25zUHJldmVudEVycm9yID0gKCkgPT4ge1xyXG4gICAgc2VsZWN0ZWRUcmlnZ2VyQWN0aW9ucyA9IFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXTtcclxuICAgIGhvdmVyZWRUcmlnZ2VyQWN0aW9uID0gLTE7XHJcbiAgICBVcGRhdGVHVUlQYXJhbXMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGF0Y2hDbGlwYm9hcmRGdW5jdGlvbnMoKSB7XHJcbiAgICBsZXQgb2xkX0NvcHlUb0NsaXBCb2FyZCA9IENvcHlUb0NsaXBCb2FyZDtcclxuICAgIGxldCBvbGRfUGFzdGVGcm9tQ2xpcEJvYXJkID0gUGFzdGVGcm9tQ2xpcEJvYXJkO1xyXG4gICAgbGV0IG9sZF9EZWxldGVTZWxlY3Rpb24gPSBEZWxldGVTZWxlY3Rpb247XHJcbiAgICBsZXQgb2xkX1VwZGF0ZUdVSVBhcmFtcyA9IFVwZGF0ZUdVSVBhcmFtcztcclxuICAgIGxldCBvbGRfRE9fVU5ETyA9IERPX1VORE87XHJcbiAgICBsZXQgb2xkX0RPX1JFRE8gPSBET19SRURPO1xyXG5cclxuICAgIHdpbmRvdy5Db3B5VG9DbGlwQm9hcmQgPSBmdW5jdGlvbihwYXJhbSkge1xyXG4gICAgICAgIGlmIChpc05vdGhpbmdTZWxlY3RlZCgpKSB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBvbGRfQ29weVRvQ2xpcEJvYXJkKHBhcmFtKTtcclxuICAgICAgICAgICAgdHJpZ2dlckFjdGlvbnNDbGlwYm9hcmQgPSBbXTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb3B5VHJpZ2dlckFjdGlvbnMoKTtcclxuICAgICAgICAgICAgdW5zZWxlY3RUcmlnZ2VyQWN0aW9ucygpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LlBhc3RlRnJvbUNsaXBCb2FyZCA9IGZ1bmN0aW9uKHBhcmFtKSB7XHJcbiAgICAgICAgaWYgKHRyaWdnZXJBY3Rpb25zQ2xpcGJvYXJkLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBvbGRfUGFzdGVGcm9tQ2xpcEJvYXJkKHBhcmFtKTtcclxuICAgICAgICAgICAgVXBkYXRlR1VJUGFyYW1zKCk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGlzcGxheU9wZXJhdGlvbkNvbXBsZXRlTm90ZXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgcGFzdGVUcmlnZ2VyQWN0aW9ucygpO1xyXG4gICAgICAgICAgICB1bnNlbGVjdFRyaWdnZXJBY3Rpb25zKCk7XHJcbiAgICAgICAgICAgIGRpc3BsYXlPcGVyYXRpb25Db21wbGV0ZU5vdGVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5EZWxldGVTZWxlY3Rpb24gPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoaXNOb3RoaW5nU2VsZWN0ZWQoKSkge1xyXG4gICAgICAgICAgICBvbGRfRGVsZXRlU2VsZWN0aW9uKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGlzcGxheU9wZXJhdGlvbkNvbXBsZXRlTm90ZXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgZGVsZXRlVHJpZ2dlckFjdGlvbnMoKTtcclxuICAgICAgICAgICAgdW5zZWxlY3RUcmlnZ2VyQWN0aW9ucygpO1xyXG4gICAgICAgICAgICBOZXdOb3RlKFwiRGVsZXRlZCB0cmlnZ2VyIGFjdGlvbnMuXCIsIFwiI0ZGRkZGRlwiKTtcclxuICAgICAgICAgICAgZGlzcGxheU9wZXJhdGlvbkNvbXBsZXRlTm90ZXMgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cuVXBkYXRlR1VJUGFyYW1zID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgb2xkX1VwZGF0ZUdVSVBhcmFtcygpO1xyXG5cclxuICAgICAgICBpZiAoIWlzT25seVRyaWdnZXJTZWxlY3RlZCgpKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkVHJpZ2dlckFjdGlvbnMgPSBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07XHJcbiAgICAgICAgICAgIGhvdmVyZWRUcmlnZ2VyQWN0aW9uID0gLTE7XHJcbiAgICAgICAgfSBlbHNlIGlmICghZWRpdF90cmlnZ2Vyc19hc190ZXh0KSB7XHJcbiAgICAgICAgICAgIGFkZEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgICAgICAgIHVwZGF0ZVRyaWdnZXJBY3Rpb25FbGVtZW50cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cuRE9fVU5ETyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIG9sZF9ET19VTkRPKCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIE5ld05vdGUoXCJDYW4ndCB1bmRvIGFjdGlvbi5cIiwgbm90ZV9iYWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cuRE9fUkVETyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIG9sZF9ET19SRURPKCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIE5ld05vdGUoXCJDYW4ndCByZWRvIGFjdGlvbi5cIiwgbm90ZV9iYWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cudHJpZ2dlckFjdGlvbnNQcmV2ZW50RXJyb3IgPSB0cmlnZ2VyQWN0aW9uc1ByZXZlbnRFcnJvcjtcclxuICAgIGFsZWlMb2coREVCVUcsIFwiUGF0Y2hlZCBjbGlwYm9hcmQgcmVsYXRlZCBmdW5jdGlvbnMuXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXRjaERyYXdHcmlkKCkge1xyXG4gICAgbGV0IG9sZF9sZyA9IGxnO1xyXG5cclxuICAgIHdpbmRvdy5sZyA9IGZ1bmN0aW9uKHBhcmFtMSwgcGFyYW0yKSB7XHJcbiAgICAgICAgaWYoYWxlaVNldHRpbmdzLmdyaWRCYXNlZE9uU25hcHBpbmcpIHtcclxuICAgICAgICAgICAgb2xkX2xnKHBhcmFtMSAqIChHUklEX1NOQVBQSU5HIC8gMTApLCBNYXRoLm1pbihwYXJhbTIgKiBNYXRoLm1heChHUklEX1NOQVBQSU5HIC8gMTAsIDEpLCAxKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb2xkX2xnKHBhcmFtMSwgcGFyYW0yKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFsZWlMb2coREVCVUcsIFwiUGF0Y2hlZCBMR1wiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGF0Y2hOZXdOb3RlKCkge1xyXG4gICAgbGV0IG9sZCA9IE5ld05vdGU7XHJcbiAgICB3aW5kb3cuTmV3Tm90ZSA9ICh0ZXh0LCBjb2xvcikgPT4ge1xyXG4gICAgICAgIGlmIChkaXNwbGF5T3BlcmF0aW9uQ29tcGxldGVOb3RlcykgcmV0dXJuIG9sZCh0ZXh0LCBjb2xvcik7XHJcbiAgICAgICAgaWYgKHRleHQuc2xpY2UoMCwgXCJPcGVyYXRpb24gY29tcGxldGU6PGJyPjxicj5cIi5sZW5ndGgpICE9IFwiT3BlcmF0aW9uIGNvbXBsZXRlOjxicj48YnI+XCIpIHJldHVybiBvbGQodGV4dCwgY29sb3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogVHJpZ2dlcl9nZXRTZXBhcmF0b3JTdGFydChzZWxlY3Rpb25Db3VudCkgZ2l2ZXMgbnVtYmVyIHdoaWNoIGRldGVybWluZXMgd2hlcmUgZG9lcyB0cmlnZ2VyJ3Mgc2VwYXJhdG9yIGxpbmUgc3RhcnRzIGZyb20uXHJcbiAqIFRoaXMgaXMgdXNlZCBmb3IgZml4SW5kZXggYW5kIFBhdGNoR1VJUGFyYW1zO1xyXG4qL1xyXG5mdW5jdGlvbiBUcmlnZ2VyX2dldFNlcGFyYXRvclN0YXJ0KHNlbGVjdGlvbkNvdW50KSB7XHJcbiAgICBsZXQgc3RhcnRTZXBhcmF0b3JGcm9tID0gNjsgLy8gTmFtZSArIFggKyBZICsgTWF4IENhbGxzICsgRW5hYmxlZCArIEV4ZWN1dGVzIERpcmVjdGx5ICsgSURcclxuICAgIHJldHVybiBzdGFydFNlcGFyYXRvckZyb207XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAgZXh0ZW5kVHJpZ2dlckxpc3QoKSBpcyByZXNwb25zaWJsZSBmb3IgcGF0Y2hpbmcgbWFueSBvZiB0aGUgb3JpZ2luYWwgZnVuY3Rpb25zIHRvIHN1cHBvcnQgdGhlXHJcbiAqICBpbXBsZW1lbnRhdGlvbiBvZiBleHRlbmRlZCB0cmlnZ2Vycy5cclxuICpcclxuICogIEV4dGVuZGVkIHRyaWdnZXJzIGFyZSB0cmlnZ2VycyB0aGF0IGNhbiBob2xkIG1vcmUgdGhhbiAxMCB0cmlnZ2VyIGFjdGlvbnMsIGFuZCBpcyBjb21wYXRpYmxlIHdpdGggdGhlIHZhbmlsbGEgQUxFLlxyXG4gKiAgVGhleSBhcmUgaW1wbGVtZW50ZWQgc2ltaWxhciB0byBhIGxpbmtlZCBsaXN0LCB3aXRoIHRoZSBtYWluIGV4dGVuZGVkIHRyaWdnZXIgcG9pbnRpbmcgdG8gdGhlIG5leHQgdHJpZ2dlciB2aWEgdGhlXHJcbiAqICAxMHRoIHRyaWdnZXIgYWN0aW9uLlxyXG4gKlxyXG4gKiAgVmlldyBhZGRUcmlnZ2VyQWN0aW9uQ291bnQgdG8gc2VlIHdoYXQgdW5pcXVlIHByb3BlcnRpZXMgYW4gZXh0ZW5kZWQgdHJpZ2dlciBoYXMgKGNsYXNzIGludmFyaWFudCkuXHJcbiAqICBWaWV3IFNhdmVUaGlzTWFwIHRvIHNlZSB0aGUgc3RydWN0ZSBvZiB0aGUgbGlua2VkIGxpc3QuXHJcbiAqL1xyXG5mdW5jdGlvbiBleHRlbmRUcmlnZ2VyTGlzdCgpIHtcclxuXHJcbiAgICAvKiogTW9kaWZpZXMgdGhlIG9yaWdpbmFsIFVwZGF0ZUdVSVBhcmFtcyB0byBwcm92aWRlIHN1cHBvcnQgZm9yIHRyaWdnZXIgZXh0ZW5zaW9uLlxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIG5ld1VwZGF0ZUdVSVBhcmFtcygpIHtcclxuICAgICAgICAvLyBHZXQgY3VycmVudCBHVUkgc2Nyb2xsIHBlcmNlbnRhZ2UuIFRoaXMgaXMgc28gd2UgY2FuIHJlc2V0IHRoZSBHVUkgc2Nyb2xsIHBlcmNlbnRhZ2UgYWZ0ZXIgcmV1cGRhdGluZyB0aGUgR1VJLlxyXG4gICAgICAgIGxldCBndWlIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicnBhcmFtc1wiKTtcclxuICAgICAgICBsZXQgYW1vdW50VG9TY3JvbGwgPSAwO1xyXG4gICAgICAgIGlmKGd1aUhUTUxFbGVtZW50KXtcclxuICAgICAgICAgICAgYW1vdW50VG9TY3JvbGwgPSBndWlIVE1MRWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjdXJyZW50X2d1aV9wYXJhbXMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB1bmZvY3VzZWRpdCgpO1xyXG4gICAgICAgIGZmLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgdmFyIHN0ciA9ICcnO1xyXG4gICAgICAgIHZhciBzZWxlY3RzID0gMDtcclxuICAgICAgICB2YXIgc2VsX2J5X2NsYXNzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGtub3duX2NsYXNzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNlbF9ieV9jbGFzc1tpXSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB1aWRzX2xpc3QgPSAnJztcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZXMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIGlmIChlc1tpXS5leGlzdHMpXHJcbiAgICAgICAgICAgICAgICBpZiAoZXNbaV0uc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RzKys7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsX2J5X2NsYXNzW2tub3duX2NsYXNzLmluZGV4T2YoZXNbaV0uX2NsYXNzKV0rKztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXNbaV0ucG0udWlkICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodWlkc19saXN0Lmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1aWRzX2xpc3QgKz0gJywgJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdWlkc19saXN0ICs9ICdcIicgKyBlc1tpXS5wbS51aWQgKyAnXCInO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB2YXIgZnVsbF9saXN0ID0gJyc7XHJcbiAgICAgICAgdmFyIGNsYXNzZXNfc2VsZWN0ZWQgPSAwO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBrbm93bl9jbGFzcy5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAgaWYgKHNlbF9ieV9jbGFzc1tpXSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChmdWxsX2xpc3QubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgICAgICAgICBmdWxsX2xpc3QgKz0gJywgJztcclxuICAgICAgICAgICAgICAgIGNsYXNzZXNfc2VsZWN0ZWQrKztcclxuICAgICAgICAgICAgICAgIGZ1bGxfbGlzdCArPSBzZWxfYnlfY2xhc3NbaV0gKyAnICcgKyB0b251bWVyb3VzKGtub3duX2NsYXNzX3RpdGxlW2ldLCBzZWxfYnlfY2xhc3NbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNsYXNzZXNfc2VsZWN0ZWQgPiAwKSB7XHJcbiAgICAgICAgICAgIGlmIChjbGFzc2VzX3NlbGVjdGVkID09IDEpXHJcbiAgICAgICAgICAgICAgICBpZiAodWlkc19saXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBmdWxsX2xpc3QgKz0gJzogJyArIHVpZHNfbGlzdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVsbF9saXN0ID0gJyAoJyArIGZ1bGxfbGlzdCArICcpJztcclxuICAgICAgICAgICAgZnVsbF9saXN0ICs9ICcgPGEgaHJlZj1cIiNcIiBvbmNsaWNrPVwiRm9yY2VEZXNlbGVjdCgpXCI+PGltZyBzcmM9XCJub2FwLnBuZ1wiIHdpZHRoPVwiMTFcIiBoZWlnaHQ9XCIxMVwiIGJvcmRlcj1cIjBcIj48L2E+JztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNlbGVjdHMgPT0gMClcclxuICAgICAgICAgICAgc3RyICs9ICc8ZGl2IGlkPVwiZ3VpX3NlbF9pbmZvXCIgY2xhc3M9XCJndWlfc2VsX2luZm9cIj5Ob3RoaW5nIHNlbGVjdGVkPC9kaXY+PGJyPjxkaXYgY2xhc3M9XCJxXCI+PC9kaXY+PGJyPic7XHJcbiAgICAgICAgZWxzZSBpZiAoc2VsZWN0cyA9PSAxKVxyXG4gICAgICAgICAgICBzdHIgKz0gJzxkaXYgaWQ9XCJndWlfc2VsX2luZm9cIiBjbGFzcz1cImd1aV9zZWxfaW5mb1wiPicgKyBzZWxlY3RzICsgJyBvYmplY3Qgc2VsZWN0ZWQnICsgZnVsbF9saXN0ICsgJzwvZGl2Pjxicj48ZGl2IGNsYXNzPVwicVwiPjwvZGl2Pjxicj4nO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgc3RyICs9ICc8ZGl2IGlkPVwiZ3VpX3NlbF9pbmZvXCIgY2xhc3M9XCJndWlfc2VsX2luZm9cIj4nICsgc2VsZWN0cyArICcgb2JqZWN0cyBzZWxlY3RlZCcgKyBmdWxsX2xpc3QgKyAnPC9kaXY+PGJyPjxkaXYgY2xhc3M9XCJxXCI+PC9kaXY+PGJyPic7XHJcbiAgICAgICAgdmFyIGZpcnN0X3NlbGVjdGVkX29iamVjdCA9IG51bGw7XHJcbiAgICAgICAgdmFyIHBhcmFtc190b19kaXNwbGF5ID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdmFyIHBhcmFtc2NvdW50X3RvX2Rpc3BsYXkgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB2YXIgcGFyYW1zdmFsdWVfdG9fZGlzcGxheSA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHZhciBwYXJhbV9hc3NvY2lhdGVkID0gbmV3IEFycmF5KCk7XHJcblxyXG4gICAgICAgIC8vIENvZGUgdG8gY2hhbmdlIHRoZSBzdGFydGluZyBwb2ludCBvZiB0aGUgZ2FwIGJldHdlZW4gdHJpZ2dlciBhY3Rpb25zLlxyXG4gICAgICAgIGxldCBzdGFydFNlcGFyYXRvckZyb20gPSBUcmlnZ2VyX2dldFNlcGFyYXRvclN0YXJ0KHNlbGVjdHMpO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICghZXNbaV0uZXhpc3RzKSBjb250aW51ZTtcclxuICAgICAgICAgICAgaWYgKCFlc1tpXS5zZWxlY3RlZCkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICAvLyBTZWxlY3RzIHRoZSBmaXJzdCBvYmplY3QgaWYgbm90IGFscmVhZHkgc2VsZWN0ZWQuXHJcbiAgICAgICAgICAgIGlmIChmaXJzdF9zZWxlY3RlZF9vYmplY3QgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIGZpcnN0X3NlbGVjdGVkX29iamVjdCA9IGVzW2ldO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCBhbGwgZW50aXR5J3MgcHJvcGVydGllcyBuYW1lcy4gKF9fel9JbmRleCwgYWN0aW9uc18xMF90YXJnZXRBLCBldGMuLilcclxuICAgICAgICAgICAgZm9yIChsZXQgcGFyYW1ldGVyIGluIGVzW2ldLnBtKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBGaW5kIHRoZSBJRCBhc3NvY2lhdGVkIHdpdGggdGhhdCBwcm9wZXJ0eS4gRWc6IF9fel9JbmRleDogOTguXHJcbiAgICAgICAgICAgICAgICAvLyBUaGlzIElEIGlzIHRoZSBzYW1lIGFzIHRoZSBpbmRleCB0byByZXRyaWV2ZSB0aGlzIHByb3BlcnR5IGluIHBhcmFtX3R5cGUuXHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kMiA9IEZpbmRNYWNoaW5nUGFyYW1ldGVySUQocGFyYW1ldGVyLCBlc1tpXS5fY2xhc3MpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEZpbmQgYW55IHBvdGVudGlhbCBkdXBsaWNhdGUuXHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kID0gcGFyYW1zX3RvX2Rpc3BsYXkuaW5kZXhPZihpbmQyKTtcclxuICAgICAgICAgICAgICAgIGlmIChpbmQgPT0gLTEgJiYgaW5kMiAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtc190b19kaXNwbGF5LnB1c2goaW5kMik7ICAgLy8gcGFyYW1zX3RvX2Rpc3BsYXkgY29udGFpbnMgYWxsIHRoZSBJRCBvZiBwcm9wZXJ0aWVzXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zY291bnRfdG9fZGlzcGxheS5wdXNoKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtc3ZhbHVlX3RvX2Rpc3BsYXkucHVzaChlc1tpXS5wbVtwYXJhbWV0ZXJdKTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbV9hc3NvY2lhdGVkLnB1c2gocGFyYW1ldGVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtc2NvdW50X3RvX2Rpc3BsYXlbaW5kXSsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZWRpdF90cmlnZ2Vyc19hc190ZXh0ICYmIHNlbGVjdHMgPT0gMSAmJiBmaXJzdF9zZWxlY3RlZF9vYmplY3QuX2NsYXNzID09ICd0cmlnZ2VyJykge1xyXG4gICAgICAgICAgICAvLyBUUklHR0VSIEdVSSBQQVJBTVMgSU4gVEVYVCBFRElUIE1PREVcclxuICAgICAgICAgICAgc3RyICs9ICc8ZGl2IGlkPVwicnBhcmFtc1wiPic7XHJcbiAgICAgICAgICAgIHN0ciArPSAnPGRpdiBzdHlsZT1cIndpZHRoOjIyMHB4O3doaXRlLXNwYWNlOm5vcm1hbDtcIj5UaGlzIGZlYXR1cmUgc2hvdWxkIG5vdCBnaXZlIHlvdSBtdWNoIG1vcmUgZnJlZWRvbSwgeWV0IHlvdSBtaWdodCBmaW5kIGl0IHVzZWZ1bCB0byBjb3B5L3Bhc3RlL2N1dCB0cmlnZ2VyIGFjdGlvbnMgaGVyZS48L2Rpdj48YnI+JztcclxuICAgICAgICAgICAgc3RyICs9ICc8dGV4dGFyZWEgaWQ9XCJvcGNvZGVfZmllbGRcIiBjbGFzcz1cIm9wY29kZV9maWVsZFwiIHN0eWxlPVwiZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO2hlaWdodDo0MDBweFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIGF1dG9jb3JyZWN0PVwib2ZmXCIgYXV0b2NhcGl0YWxpemU9XCJvZmZcIiBzcGVsbGNoZWNrPVwiZmFsc2VcIj4nO1xyXG4gICAgICAgICAgICB2YXIgY29kZV9saW5lcyA9ICcnO1xyXG4gICAgICAgICAgICBjb2RlX2xpbmVzICs9ICd1aWQ6ICcgKyBmaXJzdF9zZWxlY3RlZF9vYmplY3QucG0udWlkICsgJ1xcbic7XHJcbiAgICAgICAgICAgIGNvZGVfbGluZXMgKz0gJ2VuYWJsZWQ6ICcgKyBmaXJzdF9zZWxlY3RlZF9vYmplY3QucG0uZW5hYmxlZCArICdcXG4nO1xyXG4gICAgICAgICAgICBjb2RlX2xpbmVzICs9ICdtYXhjYWxsczogJyArIGZpcnN0X3NlbGVjdGVkX29iamVjdC5wbS5tYXhjYWxscyArICdcXG4nO1xyXG4gICAgICAgICAgICBjb2RlX2xpbmVzICs9ICdleGVjdXRlOiAnICsgZmlyc3Rfc2VsZWN0ZWRfb2JqZWN0LnBtLmV4ZWN1dGUgKyAnXFxuJztcclxuICAgICAgICAgICAgY29kZV9saW5lcyArPSAnXFxuJztcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChmaXJzdF9zZWxlY3RlZF9vYmplY3QucG1bJ2FjdGlvbnNfJyArIGkgKyAnX3R5cGUnXSA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0cmlnZ2VyX29wY29kZV9hbGlhc2VzW2ZpcnN0X3NlbGVjdGVkX29iamVjdC5wbVsnYWN0aW9uc18nICsgaSArICdfdHlwZSddXSA9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgY29kZV9saW5lcyArPSAnb3AnICsgZmlyc3Rfc2VsZWN0ZWRfb2JqZWN0LnBtWydhY3Rpb25zXycgKyBpICsgJ190eXBlJ107XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgY29kZV9saW5lcyArPSB0cmlnZ2VyX29wY29kZV9hbGlhc2VzW2ZpcnN0X3NlbGVjdGVkX29iamVjdC5wbVsnYWN0aW9uc18nICsgaSArICdfdHlwZSddXTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb2RlX2xpbmVzICs9ICcoICc7XHJcbiAgICAgICAgICAgICAgICBjb2RlX2xpbmVzICs9ICdcIicgKyBmaXJzdF9zZWxlY3RlZF9vYmplY3QucG1bJ2FjdGlvbnNfJyArIGkgKyAnX3RhcmdldEEnXSArICdcIic7XHJcbiAgICAgICAgICAgICAgICBjb2RlX2xpbmVzICs9ICcsICc7XHJcbiAgICAgICAgICAgICAgICBjb2RlX2xpbmVzICs9ICdcIicgKyBmaXJzdF9zZWxlY3RlZF9vYmplY3QucG1bJ2FjdGlvbnNfJyArIGkgKyAnX3RhcmdldEInXSArICdcIic7XHJcbiAgICAgICAgICAgICAgICBjb2RlX2xpbmVzICs9ICcgKTtcXG4nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBhbGVpU2V0dGluZ3MuZXh0ZW5kZWRUcmlnZ2VycyAmJiBmaXJzdF9zZWxlY3RlZF9vYmplY3QucG0uZXh0ZW5kZWQgJiYgaSArIDExIDw9IGZpcnN0X3NlbGVjdGVkX29iamVjdC5wbVtcInRvdGFsTnVtT2ZBY3Rpb25zXCJdOyArK2kpe1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpcnN0X3NlbGVjdGVkX29iamVjdC5wbVtcImFkZGl0aW9uYWxBY3Rpb25zXCJdW2ldID09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRyaWdnZXJfb3Bjb2RlX2FsaWFzZXNbZmlyc3Rfc2VsZWN0ZWRfb2JqZWN0LnBtW1wiYWRkaXRpb25hbEFjdGlvbnNcIl1baV1dID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICBjb2RlX2xpbmVzICs9ICdvcCcgKyBmaXJzdF9zZWxlY3RlZF9vYmplY3QucG1bXCJhZGRpdGlvbmFsQWN0aW9uc1wiXVtpXTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICBjb2RlX2xpbmVzICs9IHRyaWdnZXJfb3Bjb2RlX2FsaWFzZXNbZmlyc3Rfc2VsZWN0ZWRfb2JqZWN0LnBtW1wiYWRkaXRpb25hbEFjdGlvbnNcIl1baV1dO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvZGVfbGluZXMgKz0gJyggJztcclxuICAgICAgICAgICAgICAgIGNvZGVfbGluZXMgKz0gJ1wiJyArIGZpcnN0X3NlbGVjdGVkX29iamVjdC5wbVtcImFkZGl0aW9uYWxQYXJhbUFcIl1baV0gKyAnXCInO1xyXG4gICAgICAgICAgICAgICAgY29kZV9saW5lcyArPSAnLCAnO1xyXG4gICAgICAgICAgICAgICAgY29kZV9saW5lcyArPSAnXCInICsgZmlyc3Rfc2VsZWN0ZWRfb2JqZWN0LnBtW1wiYWRkaXRpb25hbFBhcmFtQlwiXVtpXSArICdcIic7XHJcbiAgICAgICAgICAgICAgICBjb2RlX2xpbmVzICs9ICcgKTtcXG4nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzdHIgKz0gY29kZV9saW5lcy5zcGxpdCgnPCcpLmpvaW4oJyZsdDsnKS5zcGxpdCgnPicpLmpvaW4oJyZndDsnKTtcclxuICAgICAgICAgICAgc3RyICs9ICc8L3RleHRhcmVhPic7XHJcbiAgICAgICAgICAgIHN0ciArPSAnPGEgY2xhc3M9XCJ0b29sX2J0biB0b29sX3dpZFwiIHN0eWxlPVwid2lkdGg6MTAwJTtoZWlnaHQ6NTBweDtkaXNwbGF5OmJsb2NrO2xpbmUtaGVpZ2h0OjUwcHg7XCIgb25tb3VzZWRvd249XCJpZiAoIENvbXBpbGVUcmlnZ2VyKCkgKSBVcGRhdGVHVUlQYXJhbXMoKTtcIj5BcHBseTwvYT48YnI+JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBOb3JtYWwgR1VJXHJcbiAgICAgICAgICAgIHZhciBwcmVfdGVtcCA9ICc8ZGl2IGlkPVwicnBhcmFtc1wiPjxkaXYgY2xhc3M9XCJwX2lcIj48c3BhbiBjbGFzcz1cInBhMSBwX3UxIHJfbHRcIj4nOyAgIC8vIFN0YXJ0IG9mZiB3aXRoIHJvdW5kZWQgY29ybmVyc1xyXG4gICAgICAgICAgICB2YXIgcG9zdF90ZW1wID0gJzo8L3NwYW4+PHNwYW4gY2xhc3M9XCJwYTIgcF91MiByX3J0XCIgb25jbGljaz1cImxldGVkaXQodGhpcywgXFwnJztcclxuICAgICAgICAgICAgdmFyIGxhc3RfaSA9IHBhcmFtc190b19kaXNwbGF5Lmxlbmd0aCAtIDI7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSW5kZXggdG8ga2VlcCB0cmFjayBvZiBsYXN0IHJvdy5cclxuICAgICAgICAgICAgdmFyIHZhbHVlO1xyXG5cclxuICAgICAgICAgICAgLy8gSXRlcmF0ZSB0aHJvdWdoIGFsbCB0aGUgcGFyYW1zIHRvIGRpc3BsYXkuXHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYXJhbXNfdG9fZGlzcGxheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtc2NvdW50X3RvX2Rpc3BsYXlbaV0gPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gR2VuUGFyYW1WYWwocGFyYW1fdHlwZVtwYXJhbXNfdG9fZGlzcGxheVtpXV1bMV0sIHBhcmFtc3ZhbHVlX3RvX2Rpc3BsYXlbaV0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSAnPG5vY2hhbmdlPi4uLjwvbm9jaGFuZ2U+JztcclxuXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50X2d1aV9wYXJhbXMucHVzaChwYXJhbV9hc3NvY2lhdGVkW2ldKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGluZyB0aGUgYWN0dWFsIHJvd1xyXG4gICAgICAgICAgICAgICAgc3RyICs9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJlX3RlbXAgK1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtX3R5cGVbcGFyYW1zX3RvX2Rpc3BsYXlbaV1dWzJdICsgICAgICAgLy8gTGFiZWwgb2YgdGhlIHJvdy4gRWc6IE5hbWVcclxuICAgICAgICAgICAgICAgICAgICBwb3N0X3RlbXAgK1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtX3R5cGVbcGFyYW1zX3RvX2Rpc3BsYXlbaV1dWzFdICAgICAgICAgLy8gVHlwZSBvZiBpbnB1dC4gRWc6IHN0cmluZ1xyXG4gICAgICAgICAgICAgICAgICAgICsgJ1xcJylcIiBvbk1vdXNlT3Zlcj1cImxldG92ZXIodGhpcywgXFwnJyArXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1fdHlwZVtwYXJhbXNfdG9fZGlzcGxheVtpXV1bMV1cclxuICAgICAgICAgICAgICAgICAgICArICdcXCcpXCIgaWQ9XCInICsgJ3BtXycgK1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtX3R5cGVbcGFyYW1zX3RvX2Rpc3BsYXlbaV1dWzBdICAgICAgICAgLy8gTmFtZSBvZiBwcm9wZXJ0eS4gRWc6IF9fel9JbmRleFxyXG4gICAgICAgICAgICAgICAgICAgICsgJ1wiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlICsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVmFsdWUgb2YgcHJvZXJ0eS4gRWc6IDFcclxuICAgICAgICAgICAgICAgICAgICAnPC9zcGFuPjwvZGl2Pic7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQWRkIGEgdGlueSBnYXAgdG8gc3BsaXQgZXZlcnkgdHJpZ2dlciBhY3Rpb24uXHJcbiAgICAgICAgICAgICAgICBpZiAoZmlyc3Rfc2VsZWN0ZWRfb2JqZWN0Ll9jbGFzcyA9PSAndHJpZ2dlcicpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPj0gc3RhcnRTZXBhcmF0b3JGcm9tICYmIChpIC0gc3RhcnRTZXBhcmF0b3JGcm9tKSAlIDMgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHIgKz0gJzxkaXYgc3R5bGU9XCJoZWlnaHQ6MnB4XCI+PC9kaXY+JztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gTGFzdCByb3cgd2lsbCBoYXZlIGJvdHRvbSByb3VuZGVkIGNvcm5lcnMgJ3JfbGInLCBleGNlcHQgZm9yIHRyaWdnZXJzLlxyXG4gICAgICAgICAgICAgICAgaWYgKGZpcnN0X3NlbGVjdGVkX29iamVjdC5fY2xhc3MgIT0gJ3RyaWdnZXInICYmIGkgPT0gbGFzdF9pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJlX3RlbXAgPSAnPGRpdiBjbGFzcz1cInBfaVwiPjxzcGFuIGNsYXNzPVwicGExIHBfdTAgcl9sYlwiPic7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdF90ZW1wID0gJzo8L3NwYW4+PHNwYW4gY2xhc3M9XCJwYTIgcF91MCByX3JiXCIgb25jbGljaz1cImxldGVkaXQodGhpcywgXFwnJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRmlyc3Qgcm93IGhhcyB0b3Agcm91bmRlZCBjb3JuZXJzLCBub3cgY2hhbmdlIGl0IHRvIG5vIHJvdW5kZWQgY29ybmVycy5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJlX3RlbXAgPSAnPGRpdiBjbGFzcz1cInBfaVwiPjxzcGFuIGNsYXNzPVwicGExIHBfdTFcIj4nO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc3RfdGVtcCA9ICc6PC9zcGFuPjxzcGFuIGNsYXNzPVwicGEyIHBfdTJcIiBvbmNsaWNrPVwibGV0ZWRpdCh0aGlzLCBcXCcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBEaXNwbGF5IGFkZGl0aW9uYWwgdHJpZ2dlciBhY3Rpb25zIGZvciBleHRlbmRlZCB0cmlnZ2Vycy5cclxuICAgICAgICAgICAgaWYgKHNlbGVjdHMgPT0gMSAmJiBmaXJzdF9zZWxlY3RlZF9vYmplY3QuX2NsYXNzID09ICd0cmlnZ2VyJyAmJiBmaXJzdF9zZWxlY3RlZF9vYmplY3QucG1bXCJleHRlbmRlZFwiXSkge1xyXG4gICAgICAgICAgICAgICAgLy9zZWxlY3RpbmdBRXh0ZW5kZWRUcmlnZ2VyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDEwOyBpIDwgZmlyc3Rfc2VsZWN0ZWRfb2JqZWN0LnBtW1widG90YWxOdW1PZkFjdGlvbnNcIl07ICsraSl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRyaWdnZXJBY3Rpb24gPSBmaXJzdF9zZWxlY3RlZF9vYmplY3QucG1bXCJhZGRpdGlvbmFsQWN0aW9uc1wiXVtpIC0gMTBdID09PSB1bmRlZmluZWQgPyAtMSA6IGZpcnN0X3NlbGVjdGVkX29iamVjdC5wbVtcImFkZGl0aW9uYWxBY3Rpb25zXCJdW2kgLSAxMF07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhcmFtQSAgICAgICAgPSBmaXJzdF9zZWxlY3RlZF9vYmplY3QucG1bXCJhZGRpdGlvbmFsUGFyYW1BXCJdW2kgLSAxMF0gID09PSB1bmRlZmluZWQgPyAwICA6IGZpcnN0X3NlbGVjdGVkX29iamVjdC5wbVtcImFkZGl0aW9uYWxQYXJhbUFcIl1baSAtIDEwXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcGFyYW1CICAgICAgICA9IGZpcnN0X3NlbGVjdGVkX29iamVjdC5wbVtcImFkZGl0aW9uYWxQYXJhbUJcIl1baSAtIDEwXSAgPT09IHVuZGVmaW5lZCA/IDAgIDogZmlyc3Rfc2VsZWN0ZWRfb2JqZWN0LnBtW1wiYWRkaXRpb25hbFBhcmFtQlwiXVtpIC0gMTBdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyByb3dIVE1MIHJlcHJlc2VudHMgYWxsIHRoZSBIVE1MIHRvIGRpc3BsYXkgYSBzZXQgb2YgdHJpZ2dlcnMgYW5kIHBhcmFtZXRlcnMgKDMgcm93cykuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJvd0h0bWwgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwX2lcIj48c3BhbiBjbGFzcz1cInBhMSBwX3UxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFjdGlvbiAnJHtpICsgMX0nIHR5cGU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj48c3BhbiBjbGFzcz1cInBhMiBwX3UyIHJfcnRcIiBvbmNsaWNrPVwibGV0ZWRpdCh0aGlzLCAndHJpZ2dlcl90eXBlJylcIiBvbm1vdXNlb3Zlcj1cImxldG92ZXIodGhpcywgJ3RyaWdnZXJfdHlwZScpXCIgaWQ9J3BtX2FjdGlvbnNfJHtpICsgMX1fdHlwZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cHZhbHVlIHJlYWw9JyR7dHJpZ2dlckFjdGlvbn0nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzcGVjaWFsX3ZhbHVlc190YWJsZVsndHJpZ2dlcl90eXBlJ11bdHJpZ2dlckFjdGlvbl19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3B2YWx1ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBfaVwiPjxzcGFuIGNsYXNzPVwicGExIHBfdTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLSBwYXJhbWV0ZXIgQTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPjxzcGFuIGNsYXNzPVwicGEyIHBfdTIgcl9ydFwiIG9uY2xpY2s9XCJsZXRlZGl0KHRoaXMsICdub19jaGFuZ2UnKVwiIG9ubW91c2VvdmVyPVwibGV0b3Zlcih0aGlzLCAnbm9fY2hhbmdlJylcIiBpZD0ncG1fYWN0aW9uc18ke2kgKyAxfV90YXJnZXRBJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwdmFsdWUgcmVhbD0nJHtwYXJhbUF9Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcke3BhcmFtQX0nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3B2YWx1ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBfaVwiPjxzcGFuIGNsYXNzPVwicGExIHBfdTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLSBwYXJhbWV0ZXIgQjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPjxzcGFuIGNsYXNzPVwicGEyIHBfdTIgcl9ydFwiIG9uY2xpY2s9XCJsZXRlZGl0KHRoaXMsICdub19jaGFuZ2UnKVwiIG9ubW91c2VvdmVyPVwibGV0b3Zlcih0aGlzLCAnbm9fY2hhbmdlJylcIiBpZD0ncG1fYWN0aW9uc18ke2kgKyAxfV90YXJnZXRCJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwdmFsdWUgcmVhbD0nJHtwYXJhbUJ9Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcke3BhcmFtQn0nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3B2YWx1ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImhlaWdodDoycHhcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIENyZWF0aW5nIHRoZSBhY3R1YWwgcm93XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyICs9IHJvd0h0bWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEFkZCBlZGl0IHRleHQgYnV0dG9uLlxyXG4gICAgICAgIGlmIChzZWxlY3RzID09IDEgJiYgZmlyc3Rfc2VsZWN0ZWRfb2JqZWN0Ll9jbGFzcyA9PSAndHJpZ2dlcicpIHtcclxuICAgICAgICAgICAgaWYgKGVkaXRfdHJpZ2dlcnNfYXNfdGV4dClcclxuICAgICAgICAgICAgICAgIHN0ciArPSAnPGEgY2xhc3M9XCJ0b29sX2J0biB0b29sX3dpZFwiIHN0eWxlPVwid2lkdGg6MTAwJTtkaXNwbGF5OmJsb2NrO1wiIG9ubW91c2Vkb3duPVwiZWRpdF90cmlnZ2Vyc19hc190ZXh0PSFlZGl0X3RyaWdnZXJzX2FzX3RleHQ7VXBkYXRlR1VJUGFyYW1zKClcIj5FZGl0IHRyaWdnZXJzIGFzIHBhcmFtIGxpc3Q8L2E+JztcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgc3RyICs9ICc8YSBjbGFzcz1cInRvb2xfYnRuIHRvb2xfd2lkXCIgc3R5bGU9XCJ3aWR0aDoxMDAlO2Rpc3BsYXk6YmxvY2s7XCIgb25tb3VzZWRvd249XCJlZGl0X3RyaWdnZXJzX2FzX3RleHQ9IWVkaXRfdHJpZ2dlcnNfYXNfdGV4dDtVcGRhdGVHVUlQYXJhbXMoKVwiPkVkaXQgdHJpZ2dlcnMgYXMgdGV4dDwvYT4nO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdHIgKz0gJzwvZGl2Pic7XHJcbiAgICAgICAgZ3VpX3BhcmFtcy5pbm5lckhUTUwgPSBzdHI7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgR1VJIHRvIGl0J3Mgb3JpZ2luYWwgc2Nyb2xsLlxyXG4gICAgICAgIGd1aUhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJycGFyYW1zXCIpO1xyXG5cclxuICAgICAgICBpZihndWlIVE1MRWxlbWVudCl7XHJcbiAgICAgICAgICAgIGd1aUhUTUxFbGVtZW50LnNjcm9sbFRvcCA9IGFtb3VudFRvU2Nyb2xsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgU3RyZWV0TWFnaWMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqICBUaGlzIGZ1bmN0aW9uIGlzIGludm9rZWQgd2hlbmV2ZXIgc29tZW9uZSBjbGlja3Mgb24gYW4gb3B0aW9uIGluIHRoZSBkcm9wZG93biBtZW51IG9mIHBhcmFtZXRlciB2YWx1ZXMuXHJcbiAgICAgKiAgRm9yIGV4YW1wbGUsIGNsaWNraW5nIG9uIFwiRm9yY2UgTW92YWJsZSAnQScgbW92ZSB0byBSZWdpb24gJ0InXCJcclxuICAgICAqXHJcbiAgICAgKiAgUHJvbXB0cyBmb3IgZnVydGhlciBpbnB1dCBpZiByZXF1aXJlZCBhbmQgdXBkYXRlcyB0aGUgR1VJLlxyXG4gICAgICpcclxuICAgICAqICBAcGFyYW0ge3N0cmluZ30gdmFsMSAgICBUaGUgcmVhbCBhY3R1YWwgdmFsdWUuXHJcbiAgICAgKiAgQHBhcmFtIHtzdHJpbmd9IHZhbDIgICAgTmFtZSAvIExhYmVsIG9mIHRoZSB2YWx1ZSBjbGlja2VkLlxyXG4gICAgICogIEBwYXJhbSB7c3RyaW5nfSBkZWZ2YWwgIFByZXZpb3VzIHJlYWwgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHNldGxldGVkaXQodmFsMSwgdmFsMiwgZGVmdmFsKSB7XHJcbiAgICAgICAgY29uc3Qgc2tpcFRyaWdnZXJBY3Rpb25zID0gWzEyMywgMzYxLCAzNjQsIDM2NV07XHJcblxyXG4gICAgICAgIC8vIEdldCB0aGUgbnVtYmVyIGFuZCB0cmlnZ2VyIHR5cGUuXHJcbiAgICAgICAgbGV0IHJlZ2V4ID0gL2FjdGlvbnNfKFxcZCspXyh0YXJnZXRBfHRhcmdldEJ8dHlwZSkvZztcclxuICAgICAgICBsZXQgbWF0Y2ggPSBBcnJheS5mcm9tKGxldHRhcmdldC5pZC5yZXBsYWNlKCdwbV8nLCAnJykubWF0Y2hBbGwocmVnZXgpKVswXTtcclxuXHJcbiAgICAgICAgLy8gRGlzYWxsb3cgc2tpcCB0cmlnZ2VyIGFjdGlvbnMgZXZlcnkgOXRoIHRyaWdnZXIgYWN0aW9uIGZvciB0cmlnZ2Vycy5cclxuICAgICAgICBpZihcclxuICAgICAgICAgICAgTnVtYmVyKG1hdGNoICYmIG1hdGNoWzFdKSAlIDkgPT09IDAgJiYgbWF0Y2hbMl0gPT09ICd0eXBlJyAmJiBza2lwVHJpZ2dlckFjdGlvbnMuaW5jbHVkZXMoTnVtYmVyKHZhbDEpKVxyXG4gICAgICAgICl7XHJcbiAgICAgICAgICAgIE5ld05vdGUoXCJEdWUgdG8gaG93IGV4dGVuZGVkIHRyaWdnZXJzIGlzIGltcGxlbWVudGVkLCBza2lwIHRyaWdnZXIgYWN0aW9ucyBhcmUgZGlzYWJsZWQgZXZlcnkgOXRoIHRyaWdnZXIgYWN0aW9uLiBMZWF2ZSBhICdEbyBOb3RoaW5nJyB0cmlnZ2VyIGFjdGlvbiBoZXJlIGluc3RlYWQuXCIsIG5vdGVfYmFkKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcXVpY2tfcGljayA9IGZhbHNlO1xyXG4gICAgICAgIHF1aWNrX3BpY2tfaWdub3JlX29uZV9jbGljayA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyBDbGlja2VkIG9uIGEgdmFsdWUgdGhhdCBwcm9tcHRzIGZvciBhIG51bWJlci4gTGlrZSBudW1iZXIgb2YgdHJpZ2dlciBjYWxscy5cclxuICAgICAgICBpZiAodmFsMS5pbmRleE9mKCdbdmFsXScpICE9IC0xKSB7XHJcbiAgICAgICAgICAgIGRlZnZhbCA9IE1hdGguYWJzKE51bWJlcihkZWZ2YWwpKTtcclxuICAgICAgICAgICAgdmFyIHR4dCA9IHByb21wdCgnRW50ZXIgdmFsdWU6JywgZGVmdmFsKTtcclxuICAgICAgICAgICAgdmFyIGdvdHZhbDtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eHQgPT0gbnVsbCB8fCB0eHQgPT0gJycpIHtcclxuICAgICAgICAgICAgICAgIGdvdHZhbCA9IE1hdGguYWJzKGRlZnZhbCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBnb3R2YWwgPSBNYXRoLmFicyh0eHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhbDEgPSBldmFsKHZhbDEucmVwbGFjZSgnW3ZhbF0nLCBnb3R2YWwpKTtcclxuICAgICAgICAgICAgdmFsMiA9IHZhbDIucmVwbGFjZSgnIycsIGdvdHZhbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDbGlja2VkIG9uIGEgdmFsdWUgdGhhdCBwcm9tcHRzIGZvciBhIGhleCBjb2xvdXIgY29kZS5cclxuICAgICAgICBlbHNlIGlmICh2YWwxLmluZGV4T2YoJ1tjb2xvcl0nKSAhPSAtMSkge1xyXG4gICAgICAgICAgICBkZWZ2YWwgPSBNYXRoLmFicyhOdW1iZXIoZGVmdmFsKSk7XHJcbiAgICAgICAgICAgIHZhciBnb3R2YWwgPSBwcm9tcHQoJ0VudGVyIHZhbHVlIGluIGZvcm1hdCAjWFhYWFhYOicsIGRlZnZhbCk7XHJcbiAgICAgICAgICAgIGlmIChnb3R2YWwuY2hhckF0KDApICE9ICcjJykge1xyXG4gICAgICAgICAgICAgICAgZ290dmFsID0gJyMnICsgZ290dmFsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChnb3R2YWwubGVuZ3RoICE9IDcpXHJcbiAgICAgICAgICAgICAgICBhbGVydCgnVmFsdWUgJyArIGdvdHZhbCArICcgaXMgbm90IGNvcnJlY3QuIFZhbGlkIHZhbHVlIG11c3QgYmUgaW4gZm9ybWF0ICNYWFhYWFguIFJlYWQgYWJvdXQgXCJoZXggY29sb3IgY29kZXNcIiBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nKTtcclxuICAgICAgICAgICAgdmFsMSA9IHZhbDEucmVwbGFjZSgnW2NvbG9yXScsIGdvdHZhbCk7XHJcbiAgICAgICAgICAgIHZhbDIgPSB2YWwyLnJlcGxhY2UoJyMnLCBnb3R2YWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVXBkYXRlcyB0aGUgR1VJIHdpdGggbmV3IHZhbHVlLlxyXG4gICAgICAgIGZmLnZhbHVlID0gJzxwdmFsdWUgcmVhbD1cIicgKyB2YWwxICsgJ1wiPicgKyB2YWwyICsgJzwvcHZhbHVlPic7XHJcblxyXG4gICAgICAgIGxldHRhcmdldC5pbm5lckhUTUwgPSBmZi52YWx1ZTtcclxuICAgICAgICBmZi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIGZmX2Ryb3Auc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBsZXRlZGl0aW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgIFVwZGF0ZVBoeXNpY2FsUGFyYW0oKGxldHRhcmdldC5pZC5yZXBsYWNlKCdwbV8nLCAnJykpLCB2YWwxKTtcclxuXHJcbiAgICAgICAgdmFyIHBhcmFtZXRlcl91cGRhdGVkID0gbGV0dGFyZ2V0LmlkLnJlcGxhY2UoJ3BtXycsICcnKTtcclxuXHJcbiAgICAgICAgaWYgKHBhcmFtZXRlcl91cGRhdGVkID09ICdtYXJrJyB8fCAocGFyYW1ldGVyX3VwZGF0ZWQuaW5kZXhPZignYWN0aW9uc18nKSAhPSAtMSAmJiBwYXJhbWV0ZXJfdXBkYXRlZC5pbmRleE9mKCdfdHlwZScpICE9IC0xKSlcclxuICAgICAgICAgICAgU3RyZWV0TWFnaWMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFBhdGNoZXMgdGhlIGN1cnJlbnQgaW1wbGVtZW50YXRpb24gb2YgU3RyZWV0TWFnaWMgdG8gc3VwcG9ydCB0aGUgaW1wbGVtZW50YXRpb24gb2YgZXh0ZW5kZWQgdHJpZ2dlciBsaXN0LlxyXG4gICAgICogU3RyZWV0TWFnaWMgYWxsb3dzIHRoZSBwYXJhbWV0ZXIgdG8gY2hhbmdlIGl0J3MgdHlwZSBcInRyaWdnZXIrbm9uZSB0byB2YWx1ZSBmb3IgYW4gZXhhbXBsZVwiLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBTdHJlZXRNYWdpYygpIHtcclxuICAgICAgICB2YXIgbWFya19vYmogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG1fbWFyaycpO1xyXG5cclxuICAgICAgICAvLyBGaW5kcyBlbmdpbmUgbWFyay5cclxuICAgICAgICBpZiAobWFya19vYmogIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB2YXIgb3VyX2Nhc2UgPSBtYXJrX3BhaXJzWydtYXJrXycgKyBpbm5lckhUTUxfdG9fdmFsdWUobWFya19vYmouaW5uZXJIVE1MKV07XHJcbiAgICAgICAgICAgIHZhciB2YWxvYmogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBtX2ZvcnRlYW1cIik7XHJcbiAgICAgICAgICAgIGlmIChvdXJfY2FzZSA9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICBvdXJfY2FzZSA9ICdub2NoYW5nZSc7XHJcbiAgICAgICAgICAgIGV2YWwoJ3ZhbG9iai5vbmNsaWNrID0gZnVuY3Rpb24oZSl7bGV0ZWRpdCh0aGlzLCBcXCcnICsgb3VyX2Nhc2UgKyAnXFwnKTt9Jyk7XHJcbiAgICAgICAgICAgIGV2YWwoJ3ZhbG9iai5vbm1vdXNlb3ZlciA9IGZ1bmN0aW9uKGUpe2xldG92ZXIodGhpcywgXFwnJyArIG91cl9jYXNlICsgJ1xcJyk7fScpO1xyXG4gICAgICAgICAgICB2YWxvYmouaW5uZXJIVE1MID0gR2VuUGFyYW1WYWwob3VyX2Nhc2UsIGlubmVySFRNTF90b192YWx1ZSh2YWxvYmouaW5uZXJIVE1MKSk7XHJcblxyXG4gICAgICAgICAgICAvLyBFYXJseSBleGl0LCB3ZSBhcmUgZG9uZSBoZXJlIHdpdGggZW5naW5lIG1hcmsuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEdldCBjdXJyZW50IHNlbGVjdGlvbiBhbmQgY2hlY2sgaWYgaXQncyBhbiB0cmlnZ2VyLlxyXG4gICAgICAgIGxldCBzZWxlY3RlZCA9IFNlbGVjdGVkT2JqZWN0cztcclxuICAgICAgICBsZXQgdG90YWxOdW1PZkFjdGlvbnMgPSAxMDtcclxuICAgICAgICBsZXQgaXNUcmlnZ2VyID0gZmFsc2U7XHJcbiAgICAgICAgaWYoc2VsZWN0ZWQubGVuZ3RoID09IDEgJiYgc2VsZWN0ZWRbMF0uX2NsYXNzID09IFwidHJpZ2dlclwiKXtcclxuICAgICAgICAgICAgaXNUcmlnZ2VyID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIGl0J3MgYW4gZXh0ZW5kZWQgdHJpZ2dlci5cclxuICAgICAgICAgICAgaWYoc2VsZWN0ZWRbMF0ucG1bXCJleHRlbmRlZFwiXSl7XHJcbiAgICAgICAgICAgICAgICB0b3RhbE51bU9mQWN0aW9ucyA9IHNlbGVjdGVkWzBdLnBtW1widG90YWxOdW1PZkFjdGlvbnNcIl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEVhcmx5IGV4aXQgaWYgaXQncyBub3QgYSB0cmlnZ2VyLlxyXG4gICAgICAgIGlmKCFpc1RyaWdnZXIpe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJdGVyYXRlIHRocm91Z2ggYWxsIHRoZSB0cmlnZ2VyIGFjdGlvbnMgYW5kIG1vZGlmeSB0aGVpciBwYXJhbWV0ZXIgdHlwZSB0byByZWZsZWN0IG9uIHRoZSByZXNwZWN0aXZlIHRyaWdnZXIgYWN0aW9ucy5cclxuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8PSB0b3RhbE51bU9mQWN0aW9uczsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBtYXJrX29iaiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbV9hY3Rpb25zXycgKyBpICsgJ190eXBlJyk7XHJcbiAgICAgICAgICAgIGlmIChtYXJrX29iaiA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVpTG9nKFNXQVJOLCBcIkZhaWxlZCB0byByZXRyaWV2ZSBIVE1MIGVsZW1lbnQgb2YgcHJvcGVydHkgdG8gZHluYW1pY2FsbHkgYXBwbHkgcHJvcGVydHkgdHlwZS5cIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGNhc2VzID0gJ0EnO1xyXG4gICAgICAgICAgICAvLyBBbHRlcm5hdGUgdGhyb3VnaCBwYXJhbWV0ZXIgQSBhbmQgQi5cclxuICAgICAgICAgICAgZm9yICh2YXIgaTIgPSAwOyBpMiA8IDI7IGkyKyspIHtcclxuICAgICAgICAgICAgICAgIC8vIFJldHJpZXZlIHRoZSBjb3JyZXNwb25kaW5nIHBhcmFtZXRlciB0eXBlIGJhc2VkIG9uIHRyaWdnZXIgYWN0aW9uLlxyXG4gICAgICAgICAgICAgICAgdmFyIG91cl9jYXNlID0gbWFya19wYWlyc1sndHJpZ2dlcl90eXBlXycgKyBjYXNlcyArIGlubmVySFRNTF90b192YWx1ZShtYXJrX29iai5pbm5lckhUTUwpXTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBSZXRyaWV2ZSB0aGUgY29ycmVzcG9uZGluZyBIVE1MIGVsZW1lbnQuXHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsb2JqID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BtX2FjdGlvbnNfJyArIGkgKyAnX3RhcmdldCcgKyBjYXNlcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG91cl9jYXNlID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG91cl9jYXNlID0gJ25vY2hhbmdlJztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBldmFsKCd2YWxvYmoub25jbGljayA9IGZ1bmN0aW9uKGUpe2xldGVkaXQodGhpcywgXFwnJyArIG91cl9jYXNlICsgJ1xcJyk7fScpO1xyXG4gICAgICAgICAgICAgICAgZXZhbCgndmFsb2JqLm9ubW91c2VvdmVyID0gZnVuY3Rpb24oZSl7bGV0b3Zlcih0aGlzLCBcXCcnICsgb3VyX2Nhc2UgKyAnXFwnKTt9Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFsb2JqLmlubmVySFRNTCA9IEdlblBhcmFtVmFsKG91cl9jYXNlLCBpbm5lckhUTUxfdG9fdmFsdWUodmFsb2JqLmlubmVySFRNTCkpO1xyXG4gICAgICAgICAgICAgICAgY2FzZXMgPSAnQic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG9sZFNhdmVUaGlzTWFwID0gd2luZG93LlNhdmVUaGlzTWFwO1xyXG4gICAgLyoqXHJcbiAgICAgKiAgVGhpcyBmdW5jdGlvbiBleHRlbmRzIHRoZSBTYXZlVGhpc01hcCBmdW5jdGlvbmFsaXR5IGJ5IGZpcnN0IHBhcnNpbmcgYWxsIGluc3RhbmNlcyBvZiBleHRlbmRlZCB0cmlnZ2VycyBpbnRvIGEgbGlua2VkIGxpc3Qgb2Ygbm9ybWFsIHRyaWdnZXJzLlxyXG4gICAgICpcclxuICAgICAqICBbRlJPTV0gICAgICAgICAgICAgICAgICAgICAgIHwgICAgW1RPXVxyXG4gICAgICogIHRyaWdnZXIqMSAgICAgICAgICAgICAgICAgICAgfCAgICB0cmlnZ2VyKjEgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXIqMyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlciozXHJcbiAgICAgKiAgZXh0ZW5kZWQ6ICAgICAgICAgICB0cnVlICAgICB8ICAgIGV4dGVuZGVkOiAgICAgICAgICAgdHJ1ZSAgICAgICAgICAgICAgKmRlbGV0ZWQqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqZGVsZXRlZCpcclxuICAgICAqICB0b3RhbE51bU9mQWN0aW9uczogIDI1ICAgICAgIHwgICAgdG90YWxOdW1PZkFjdGlvbnM6ICAyNSAgICAgICAgICAgICAgICAqZGVsZXRlZCogICAgICAgICAgICAgICAgICAgICAgICAgICAgICpkZWxldGVkKlxyXG4gICAgICogIGFkZGl0aW9uYWxBY3Rpb25zOiAgWy4uXSAgICAgfCAgICAqZGVsZXRlZCogICAgICAgICAgICAgICAgICAgICAgICAgICAgICpkZWxldGVkKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKmRlbGV0ZWQqXHJcbiAgICAgKiAgYWRkaXRpb25hbFBhcmFtQTogICBbLi5dICAgICB8ICAgICpkZWxldGVkKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKmRlbGV0ZWQqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqZGVsZXRlZCpcclxuICAgICAqICBhZGRpdGlvbmFsUGFyYW1COiAgIFsuLl0gICAgIHwgICAgKmRlbGV0ZWQqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqZGVsZXRlZCogICAgICAgICAgICAgICAgICAgICAgICAgICAgICpkZWxldGVkKlxyXG4gICAgICogIGFjdGlvbnMxLTEwICAgICAgICAgWy4uXSAgICAgfCAgICBhY3Rpb25zMS05ICAgICAgICAgIFsuLl0gICAgICAgICAgICAgIGFjdGlvbnMxLTkgICBbLi5dICAgICAgICAgICAgICAgICAgICAgYWN0aW9uczEtNyAgICBbLi5dXHJcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgIGFjdGlvbnMxMCAgICAgICAgICAgdHJpZ2dlcioyICAgICAgICAgYWN0aW9uczEwICAgIHRyaWdnZXIqMyAgICAgICAgICAgICAgICBhY3Rpb25zOC0xMCAgIERvIG5vdGhpbmcuXHJcbiAgICAgKlxyXG4gICAgICpcclxuICAgICAqICBAcGFyYW0geyp9IHRlbXBfdG9fcmVhbF9jb21waWxlX2RhdGEgICAgIFBhcmFtZXRlcnMgdGhhdCB0aGUgb2xkIFNhdmVUaGlzTWFwIHVzZXMuIChubyBpZGVhIHdoYXQgaXQgaXMgdGJoKVxyXG4gICAgICogIEBwYXJhbSB7Kn0gY2FsbGJhY2sgICAgICAgICAgICAgICAgICAgICAgUGFyYW1ldGVycyB0aGF0IHRoZSBvbGQgU2F2ZVRoaXNNYXAgdXNlcy4gKG5vIGlkZWEgd2hhdCBpdCBpcyB0YmgpXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIFNhdmVUaGlzTWFwKHRlbXBfdG9fcmVhbF9jb21waWxlX2RhdGE9JycsIGNhbGxiYWNrPW51bGwpIHtcclxuICAgICAgICBjb25zdCBnYXBCZXR3ZWVuVHJpZ2dlciA9IDQwO1xyXG4gICAgICAgIGNvbnN0IGV4ZWN1dGVUcmlnZ2VyQWN0aW9uID0gOTk7IC8vIFJlcXVpcmVkIGZvciBtYWluIC0+IGNoaWxkIGlmIHdlIHdhbnQgbWFpbiB0cmlnZ2VyJ3MgbWF4Y2FsbHMgYmUgaW4gZWZmZWN0LlxyXG4gICAgICAgIGNvbnN0IHN3aXRjaEV4ZWN1dGlvbkFjdGlvbiA9IDM2MztcclxuXHJcbiAgICAgICAgLy8gS2VlcCBhIHJlZmVyZW5jZSB0byBhbGwgdGhlIG5ld2x5IGdlbmVyYXRlZCB0cmlnZ2Vycywgc28gd2UgY2FuIGRlbGV0ZSB0aGVtIGluIHRoZSBlbmQuXHJcbiAgICAgICAgbGV0IGFsbEdlbmVyYXRlZFRyaWdnZXJzID0gbmV3IEFycmF5KCk7XHJcblxyXG4gICAgICAgIC8vIEtlZXAgYSBjb3B5IG9mIHRoZSBwcm9wZXJ0aWVzIGFsbCBleHRlbmRlZCB0cmlnZ2Vycy4gV2Ugd2lsbCB0ZW1wb3JhcmlseSBkZWxldGUgdGhlc2UgYWRkaXRpb25hbCBwcm9wZXJ0aWVzIGJlZm9yZVxyXG4gICAgICAgIC8vIGZpbGUgc2F2ZSB0aGVuIHJlc3RvcmUgdGhlbSBiYWNrIHRvIHRoZSByZXNwZWN0aXZlIHRyaWdnZXJzLlxyXG4gICAgICAgIGxldCBhbGxBZGRpdGlvbmFsQWN0aW9ucyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIGxldCBhbGxBZGRpdGlvbmFsUGFyYW1BID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgbGV0IGFsbEFkZGl0aW9uYWxQYXJhbUIgPSBuZXcgQXJyYXkoKTtcclxuXHJcbiAgICAgICAgLy8gRm9yIGV2ZXJ5IGV4dGVuZGVkIHRyaWdnZXIuLlxyXG4gICAgICAgIGZvcihjb25zdCBlbnRpdHkgb2YgZXMpe1xyXG4gICAgICAgICAgICBpZighZW50aXR5LmV4aXN0cykgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZihlbnRpdHkuX2NsYXNzICE9PSBcInRyaWdnZXJcIikgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmKCFlbnRpdHkucG1bXCJleHRlbmRlZFwiXSkgICAgICBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRoZSBmaXJzdCB0cmlnZ2VyIGNhbiBvbmx5IHN0b3JlIDkgYWN0aW9ucywgYXMgdGhlIGxhc3Qgb25lIGlzIHJlcXVpcmVkIHRvIGV4ZWN1dGUgdGhlIG5leHQgb25lLlxyXG4gICAgICAgICAgICAvLyBMZXQncyBwdXNoIHRoZSAxMHRoIG9uZSB0byB0aGUgZnJvbnQgb2YgcmVzcGVjdGl2ZSBhcnJheXMuXHJcbiAgICAgICAgICAgIGVudGl0eS5wbVtcImFkZGl0aW9uYWxBY3Rpb25zXCJdLnVuc2hpZnQoZW50aXR5LnBtW1wiYWN0aW9uc18xMF90eXBlXCJdKTtcclxuICAgICAgICAgICAgZW50aXR5LnBtW1wiYWRkaXRpb25hbFBhcmFtQVwiXS51bnNoaWZ0KGVudGl0eS5wbVtcImFjdGlvbnNfMTBfdGFyZ2V0QVwiXSk7XHJcbiAgICAgICAgICAgIGVudGl0eS5wbVtcImFkZGl0aW9uYWxQYXJhbUJcIl0udW5zaGlmdChlbnRpdHkucG1bXCJhY3Rpb25zXzEwX3RhcmdldEJcIl0pO1xyXG5cclxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIGFuZCBjcmVhdGUgdGhlIG51bWJlciBvZiB0cmlnZ2VycyB3ZSBuZWVkLlxyXG4gICAgICAgICAgICBjb25zdCB0cmlnZ2Vyc1RvQ3JlYXRlID0gTWF0aC5mbG9vcigoZW50aXR5LnBtW1widG90YWxOdW1PZkFjdGlvbnNcIl0gLSAxKSAvIDkpO1xyXG4gICAgICAgICAgICBsZXQgICBzdGFydFggPSBlbnRpdHkucG1bXCJ4XCJdICsgZ2FwQmV0d2VlblRyaWdnZXI7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0WSA9IGVudGl0eS5wbVtcInlcIl07XHJcblxyXG4gICAgICAgICAgICAvLyBBdXRvIGdlbmVyYXRlIGFsbCB0aGUgbmVjZXNzYXJ5IHRyaWdnZXJzLiBTcGFjZSB0aGVtIG91dCBldmVubHkuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0cmlnZ2Vyc1RvQ3JlYXRlOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgbGV0IG5hbWUgPSBgJHtlbnRpdHkucG1bXCJ1aWRcIl19J3MgZXh0ZW5kZWQgdHJpZ2dlciBubzogJHtpfS5gXHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3VHJpZ2dlciA9IG5ldyBFKFwidHJpZ2dlclwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTZXQgcHJvcGVydGllcy5cclxuICAgICAgICAgICAgICAgIG5ld1RyaWdnZXIucG1bXCJ4XCJdID0gc3RhcnRYO1xyXG4gICAgICAgICAgICAgICAgbmV3VHJpZ2dlci5wbVtcInlcIl0gPSBzdGFydFk7XHJcbiAgICAgICAgICAgICAgICBuZXdUcmlnZ2VyLnBtW1widWlkXCJdID0gbmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBJZiBpdCdzIHRoZSBmaXJzdCB0cmlnZ2VyLCBsZXQgdGhlIG1haW4gZXh0ZW5kZWQgdHJpZ2dlciBwb2ludCB0byB0aGlzLlxyXG4gICAgICAgICAgICAgICAgaWYoaSA9PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHkucG1bYGFjdGlvbnNfMTBfdHlwZWBdID0gZXhlY3V0ZVRyaWdnZXJBY3Rpb247XHJcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5LnBtW2BhY3Rpb25zXzEwX3RhcmdldEFgXSA9IG5hbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gSWYgbm90IHRoZSBsYXN0IHRyaWdnZXIsIHBvaW50IHRvIHRoZSBuZXh0IHRyaWdnZXIuXHJcbiAgICAgICAgICAgICAgICBpZihpIDwgdHJpZ2dlcnNUb0NyZWF0ZSAtIDEpe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUgPSBgJHtlbnRpdHkucG1bXCJ1aWRcIl19J3MgZXh0ZW5kZWQgdHJpZ2dlciBubzogJHtpICsgMX0uYFxyXG4gICAgICAgICAgICAgICAgICAgIG5ld1RyaWdnZXIucG1bYGFjdGlvbnNfMTBfdHlwZWBdID0gc3dpdGNoRXhlY3V0aW9uQWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1RyaWdnZXIucG1bYGFjdGlvbnNfMTBfdGFyZ2V0QWBdID0gbmFtZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTZXQgdHJpZ2dlciBhY3Rpb24gYW5kIHBhcmFtZXRlcnNcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgYWN0aW9uTnVtID0gMTsgYWN0aW9uTnVtIDwgMTA7IGFjdGlvbk51bSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBpICogOSArIChhY3Rpb25OdW0gLSAxKTsgICAgLy8gMC04LCA5LTE3LCAxOC0yNiwgLi4uXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG5ld1RyaWdnZXIucG1bYGFjdGlvbnNfJHthY3Rpb25OdW19X3R5cGVgXSAgICA9IGVudGl0eS5wbVtcImFkZGl0aW9uYWxBY3Rpb25zXCJdW2luZGV4XSA9PT0gdW5kZWZpbmVkID8gLTEgOiBlbnRpdHkucG1bXCJhZGRpdGlvbmFsQWN0aW9uc1wiXVtpbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3VHJpZ2dlci5wbVtgYWN0aW9uc18ke2FjdGlvbk51bX1fdGFyZ2V0QWBdID0gZW50aXR5LnBtW1wiYWRkaXRpb25hbFBhcmFtQVwiXVtpbmRleF0gID09PSB1bmRlZmluZWQgPyAwIDogIGVudGl0eS5wbVtcImFkZGl0aW9uYWxQYXJhbUFcIl1baW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1RyaWdnZXIucG1bYGFjdGlvbnNfJHthY3Rpb25OdW19X3RhcmdldEJgXSA9IGVudGl0eS5wbVtcImFkZGl0aW9uYWxQYXJhbUJcIl1baW5kZXhdICA9PT0gdW5kZWZpbmVkID8gMCA6ICBlbnRpdHkucG1bXCJhZGRpdGlvbmFsUGFyYW1CXCJdW2luZGV4XTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBlcy5wdXNoKG5ld1RyaWdnZXIpO1xyXG4gICAgICAgICAgICAgICAgYWxsR2VuZXJhdGVkVHJpZ2dlcnMucHVzaChuZXdUcmlnZ2VyKTtcclxuICAgICAgICAgICAgICAgIHN0YXJ0WCArPSBnYXBCZXR3ZWVuVHJpZ2dlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gRGVsZXRlIGFkZGl0aW9uYWwgcHJvcGVydGllcywgYW5kIHNhdmUgYSBjb3B5IHRvIHByZXBhcmUgZm9yIHNhdmluZy5cclxuICAgICAgICAgICAgYWxsQWRkaXRpb25hbEFjdGlvbnMucHVzaChKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGVudGl0eS5wbVtcImFkZGl0aW9uYWxBY3Rpb25zXCJdKSkpO1xyXG4gICAgICAgICAgICBhbGxBZGRpdGlvbmFsUGFyYW1BLnB1c2goSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShlbnRpdHkucG1bXCJhZGRpdGlvbmFsUGFyYW1BXCJdKSkpO1xyXG4gICAgICAgICAgICBhbGxBZGRpdGlvbmFsUGFyYW1CLnB1c2goSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShlbnRpdHkucG1bXCJhZGRpdGlvbmFsUGFyYW1CXCJdKSkpO1xyXG5cclxuICAgICAgICAgICAgZGVsZXRlIGVudGl0eS5wbVtcImFkZGl0aW9uYWxBY3Rpb25zXCJdO1xyXG4gICAgICAgICAgICBkZWxldGUgZW50aXR5LnBtW1wiYWRkaXRpb25hbFBhcmFtQVwiXTtcclxuICAgICAgICAgICAgZGVsZXRlIGVudGl0eS5wbVtcImFkZGl0aW9uYWxQYXJhbUJcIl07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTYXZlIHRoaXMgbWFwIVxyXG4gICAgICAgIG9sZFNhdmVUaGlzTWFwKHRlbXBfdG9fcmVhbF9jb21waWxlX2RhdGEsIGNhbGxiYWNrKTtcclxuXHJcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuXHJcbiAgICAgICAgLy8gUG9zdCBjbGVhbiB1cC5cclxuICAgICAgICBmb3IoY29uc3QgZW50aXR5IG9mIGVzKXtcclxuICAgICAgICAgICAgaWYoIWVudGl0eS5leGlzdHMpICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgaWYoZW50aXR5Ll9jbGFzcyAhPT0gXCJ0cmlnZ2VyXCIpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZighZW50aXR5LnBtW1wiZXh0ZW5kZWRcIl0pICAgICAgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICAvLyBSZXN0b3JlIGRlbGV0ZWQgYWRkaXRpb25hbCBwcm9wZXJ0aWVzLlxyXG4gICAgICAgICAgICBlbnRpdHkucG1bXCJhZGRpdGlvbmFsQWN0aW9uc1wiXSA9IGFsbEFkZGl0aW9uYWxBY3Rpb25zW2luZGV4XTtcclxuICAgICAgICAgICAgZW50aXR5LnBtW1wiYWRkaXRpb25hbFBhcmFtQVwiXSA9IGFsbEFkZGl0aW9uYWxQYXJhbUFbaW5kZXhdO1xyXG4gICAgICAgICAgICBlbnRpdHkucG1bXCJhZGRpdGlvbmFsUGFyYW1CXCJdID0gYWxsQWRkaXRpb25hbFBhcmFtQltpbmRleF07XHJcblxyXG4gICAgICAgICAgICAvLyBSZXN0b3JlIHRoZSAxMHRoIHRyaWdnZXIgYWN0aW9uIGZyb20gYXJyYXlzXHJcbiAgICAgICAgICAgIGVudGl0eS5wbVtgYWN0aW9uc18xMF90eXBlYF0gICAgPSBlbnRpdHkucG1bXCJhZGRpdGlvbmFsQWN0aW9uc1wiXS5zaGlmdCgpO1xyXG4gICAgICAgICAgICBlbnRpdHkucG1bYGFjdGlvbnNfMTBfdGFyZ2V0QWBdID0gZW50aXR5LnBtW1wiYWRkaXRpb25hbFBhcmFtQVwiXS5zaGlmdCgpO1xyXG4gICAgICAgICAgICBlbnRpdHkucG1bXCJhZGRpdGlvbmFsUGFyYW1CXCJdLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgIGluZGV4Kys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBEZWxldGUgYWxsIGdlbmVyYXRlZCB0cmlnZ2Vycy5cclxuICAgICAgICBmb3IoY29uc3QgbmV3VHJpZ2dlciBvZiBhbGxHZW5lcmF0ZWRUcmlnZ2Vycyl7XHJcbiAgICAgICAgICAgIG5ld1RyaWdnZXIuZXhpc3RzID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBVcGRhdGVHVUlPYmplY3RzTGlzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogIFRoaXMgZnVuY3Rpb24gaXMgcmVzcG9uc2libGUgZm9yIGNvbXBpbGluZyB0aGUgdGV4dCBwb3J0aW9uIG9mIHRoZSB0cmlnZ2VyIGFjdGlvbiB3aGVuIHNhdmVkLlxyXG4gICAgICogIEl0IGlzIGZ1cnRoZXIgcGF0Y2hlZCB0byBzdXBwb3J0IG1vcmUgdGhhbiAxMCB0cmlnZ2Vycy5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gQ29tcGlsZVRyaWdnZXIoKSB7XHJcbiAgICAgICAgY29uc3Qgc2tpcFRyaWdnZXJBY3Rpb25zID0gWzEyMywgMzYxLCAzNjQsIDM2NV07XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gU2VsZWN0ZWRPYmplY3RzO1xyXG5cclxuICAgICAgICBpZihzZWxlY3Rpb24ubGVuZ3RoICE9IDEpe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzZWxlY3RlZFRyaWdnZXIgPSBzZWxlY3Rpb25bMF07XHJcblxyXG4gICAgICAgIHZhciBvcGNvZGVfZmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3Bjb2RlX2ZpZWxkJyk7XHJcbiAgICAgICAgdmFyIGNvZGUgPSBvcGNvZGVfZmllbGQudmFsdWU7XHJcbiAgICAgICAgdmFyIGNvZGVfbGluZXMgPSBjb2RlLnNwbGl0KCdcXG4nKTtcclxuICAgICAgICB2YXIgbmV3X3RyaWdnZXJfYWN0aW9ucyA9IFtdO1xyXG4gICAgICAgIHZhciBkaXJlY3RfdXBkYXRlX3BhcmFtcyA9IFtdO1xyXG4gICAgICAgIHZhciBkaXJlY3RfdXBkYXRlX3ZhbHVlcyA9IFtdO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBTY2hlZHVsZVBhcmFtU2V0KGEsIGIpIHtcclxuICAgICAgICAgICAgZGlyZWN0X3VwZGF0ZV9wYXJhbXMucHVzaChhKTtcclxuICAgICAgICAgICAgZGlyZWN0X3VwZGF0ZV92YWx1ZXMucHVzaChiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29kZV9saW5lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgbGluZSA9IGNvZGVfbGluZXNbaV07XHJcblxyXG4gICAgICAgICAgICBsZXQgcGFyYW1BX3N0YXJ0ID0gbGluZS5pbmRleE9mKCcoIFwiJyk7XHJcbiAgICAgICAgICAgIGxldCBzZXBhcmF0b3IgPSBsaW5lLmluZGV4T2YoJ1wiLCBcIicpO1xyXG4gICAgICAgICAgICBsZXQgZW5kID0gbGluZS5pbmRleE9mKCdcIiApOycpO1xyXG4gICAgICAgICAgICBsZXQgc2VtaWNvbG9uID0gbGluZS5pbmRleE9mKCc6Jyk7XHJcblxyXG4gICAgICAgICAgICAvLyBQYXJzaW5nIGxpc3Qgb2YgdHJpZ2dlciBhY3Rpb25zXHJcbiAgICAgICAgICAgIGlmIChwYXJhbUFfc3RhcnQgIT0gLTEgJiYgc2VwYXJhdG9yICE9IC0xICYmIGVuZCAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGZpcnN0X2MgPSBsaW5lLmluZGV4T2YoJygnKTtcclxuICAgICAgICAgICAgICAgIHZhciBvcGNvZGUgPSBsaW5lLnN1YnN0cmluZygwLCBmaXJzdF9jKTtcclxuICAgICAgICAgICAgICAgIHZhciBhY3Rpb25fdHlwZSA9IC0xO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wY29kZS5zdWJzdHJpbmcoMCwgMikgPT0gJ29wJyAmJiAhaXNOYU4ob3Bjb2RlLnNsaWNlKDIpKSlcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25fdHlwZSA9IHBhcnNlSW50KG9wY29kZS5zbGljZSgyKSk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25fdHlwZSA9IHRyaWdnZXJfb3Bjb2RlX2FsaWFzZXMuaW5kZXhPZihvcGNvZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhY3Rpb25fdHlwZSA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBOZXdOb3RlKCdFcnJvcjogQ2hhbmdlcyB3ZXJlIG5vdCBhcHBsaWVkIGJlY2F1c2UgJnF1b3Q7JyArIG9wY29kZSArICcmcXVvdDsgc2VlbXMgdG8gYmUgYW4gdW5rbm93biBvcGVyYXRpb24gY29kZS4nLCBub3RlX25ldXRyYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlQSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlQiA9ICcnO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbl90eXBlICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVBID0gbGluZS5zdWJzdHJpbmcocGFyYW1BX3N0YXJ0ICsgMywgc2VwYXJhdG9yKTtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZUIgPSBsaW5lLnN1YnN0cmluZyhzZXBhcmF0b3IgKyA0LCBlbmQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG5ld190cmlnZ2VyX2FjdGlvbnMucHVzaChbYWN0aW9uX3R5cGUsIHZhbHVlQSwgdmFsdWVCXSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFBhcnNpbmcgdGhlIGhlYWRlciBwb3J0aW9uLi5cclxuICAgICAgICAgICAgZWxzZSBpZiAoc2VtaWNvbG9uICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGVmdF9wYXJ0ID0gbGluZS5zdWJzdHJpbmcoMCwgc2VtaWNvbG9uKTtcclxuICAgICAgICAgICAgICAgIHZhciByaWdodF9wYXJ0ID0gbGluZS5zbGljZShzZW1pY29sb24gKyAxKTtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChsZWZ0X3BhcnQuY2hhckF0KDApID09ICcgJylcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0X3BhcnQgPSBsZWZ0X3BhcnQuc2xpY2UoMSk7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAobGVmdF9wYXJ0LmNoYXJBdChsZWZ0X3BhcnQubGVuZ3RoIC0gMSkgPT0gJyAnKVxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnRfcGFydCA9IGxlZnRfcGFydC5zbGljZSgwLCAtMSk7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAocmlnaHRfcGFydC5jaGFyQXQoMCkgPT0gJyAnKVxyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0X3BhcnQgPSByaWdodF9wYXJ0LnNsaWNlKDEpO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHJpZ2h0X3BhcnQuY2hhckF0KHJpZ2h0X3BhcnQubGVuZ3RoIC0gMSkgPT0gJyAnKVxyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0X3BhcnQgPSByaWdodF9wYXJ0LnNsaWNlKDAsIC0xKTtcclxuICAgICAgICAgICAgICAgIGlmIChsZWZ0X3BhcnQgPT0gJ3VpZCcgfHwgbGVmdF9wYXJ0ID09ICdlbmFibGVkJyB8fCBsZWZ0X3BhcnQgPT0gJ21heGNhbGxzJyB8fCBsZWZ0X3BhcnQgPT0gJ2V4ZWN1dGUnKVxyXG4gICAgICAgICAgICAgICAgICAgIFNjaGVkdWxlUGFyYW1TZXQobGVmdF9wYXJ0LCByaWdodF9wYXJ0KTtcclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIE5ld05vdGUoJ0Vycm9yOiBDaGFuZ2VzIHdlcmUgbm90IGFwcGxpZWQgYmVjYXVzZSAmcXVvdDsnICsgbGVmdF9wYXJ0ICsgJyZxdW90OyBzZWVtcyB0byBiZSBub3QgYSBkZWZhdWx0IHByb3BlcnR5LicsIG5vdGVfbmV1dHJhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxpbmUgIT0gJycpIHtcclxuICAgICAgICAgICAgICAgIE5ld05vdGUoJ0Vycm9yOiBDaGFuZ2VzIHdlcmUgbm90IGFwcGxpZWQgYmVjYXVzZSBsaW5lICZxdW90OycgKyBsaW5lICsgJyZxdW90OyB3YXNuXFwndCByZWNvZ25pemVkIG9yIGNvbnRhaW5zIHVuc3VwcG9ydGVkIHN5bnRheC4nLCBub3RlX25ldXRyYWwpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaGFzRW5jb3VudGVyZWRTa2lwVHJpZ2dlciA9IGZhbHNlO1xyXG4gICAgICAgIC8vIFJldHJpZXZlIGFsbCB0aGUgdHJpZ2dlciBhY3Rpb24uXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdfdHJpZ2dlcl9hY3Rpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIEEgc2tpcCB0cmlnZ2VyIGFjdGlvbiBmb3IgZXZlcnkgOXRoIHRyaWdnZXIgYWN0aW9uLiBBZGQgYSBkbyBub3RoaW5nIHRyaWdnZXIgYWN0aW9uLlxyXG4gICAgICAgICAgICBpZigoaSArIDEpICUgOSA9PT0gMCAmJiBza2lwVHJpZ2dlckFjdGlvbnMuaW5jbHVkZXMobmV3X3RyaWdnZXJfYWN0aW9uc1tpXVswXSkpe1xyXG4gICAgICAgICAgICAgICAgbmV3X3RyaWdnZXJfYWN0aW9ucy5zcGxpY2UoaSwgMCwgWy0xLCAwLCAwXSk7XHJcbiAgICAgICAgICAgICAgICBoYXNFbmNvdW50ZXJlZFNraXBUcmlnZ2VyID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgU2NoZWR1bGVQYXJhbVNldCgnYWN0aW9uc18nICsgKGkgKyAxKSArICdfdHlwZScsIG5ld190cmlnZ2VyX2FjdGlvbnNbaV1bMF0pO1xyXG4gICAgICAgICAgICBTY2hlZHVsZVBhcmFtU2V0KCdhY3Rpb25zXycgKyAoaSArIDEpICsgJ190YXJnZXRBJywgbmV3X3RyaWdnZXJfYWN0aW9uc1tpXVsxXSk7XHJcbiAgICAgICAgICAgIFNjaGVkdWxlUGFyYW1TZXQoJ2FjdGlvbnNfJyArIChpICsgMSkgKyAnX3RhcmdldEInLCBuZXdfdHJpZ2dlcl9hY3Rpb25zW2ldWzJdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFBvcHVsYXRlIHRoZSByZXN0IHdpdGggZW1wdHkgdHJpZ2dlciBhY3Rpb25zIGlmIGl0J3MgbGVzc2VyIHRoYW4gMTAuXHJcbiAgICAgICAgZm9yKGxldCBpID0gbmV3X3RyaWdnZXJfYWN0aW9ucy5sZW5ndGggKyAxOyBpIDw9IDEwOyBpKyspe1xyXG4gICAgICAgICAgICBTY2hlZHVsZVBhcmFtU2V0KCdhY3Rpb25zXycgKyBpICsgJ190eXBlJywgLTEpO1xyXG4gICAgICAgICAgICBTY2hlZHVsZVBhcmFtU2V0KCdhY3Rpb25zXycgKyBpICsgJ190YXJnZXRBJywgMCk7XHJcbiAgICAgICAgICAgIFNjaGVkdWxlUGFyYW1TZXQoJ2FjdGlvbnNfJyArIGkgKyAnX3RhcmdldEInLCAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGhhc0VuY291bnRlcmVkU2tpcFRyaWdnZXIpe1xyXG4gICAgICAgICAgICBOZXdOb3RlKFwiU2tpcCB0cmlnZ2VyIGFjdGlvbnMgZW5jb3VudGVyZWQgaW4gZXZlcnkgOXRoIHRyaWdnZXIgYWN0aW9uLiBJbnNlcnRlZCBhbiAnRG8gTm90aGluZycgdHJpZ2dlciBhY3Rpb24uXCIsIG5vdGVfbmV1dHJhbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDb252ZXJ0IGl0IGJhY2sgdG8gYSBub3JtYWwgdHJpZ2dlciBpZiBpdCBkb2VzbnQgaGF2ZSBtb3JlIHRoYW4gMTAgYWN0aW9uc1xyXG4gICAgICAgIGlmKG5ld190cmlnZ2VyX2FjdGlvbnMubGVuZ3RoIDw9IDEwICYmIHNlbGVjdGVkVHJpZ2dlci5wbVtcImV4dGVuZGVkXCJdKXtcclxuICAgICAgICAgICAgYWRkVHJpZ2dlckFjdGlvbkNvdW50KC1zZWxlY3RlZFRyaWdnZXIucG1bXCJ0b3RhbE51bU9mQWN0aW9uc1wiXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIC8vIEFkanVzdCBleHRlbmRlZCB0cmlnZ2VyJ3Mgc2l6ZVxyXG4gICAgICAgICAgICBpZihzZWxlY3RlZFRyaWdnZXIucG1bXCJleHRlbmRlZFwiXSl7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGlmZmVyZW5jZSA9IG5ld190cmlnZ2VyX2FjdGlvbnMubGVuZ3RoIC0gc2VsZWN0ZWRUcmlnZ2VyLnBtW1widG90YWxOdW1PZkFjdGlvbnNcIl0gO1xyXG4gICAgICAgICAgICAgICAgYWRkVHJpZ2dlckFjdGlvbkNvdW50KGRpZmZlcmVuY2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIENvbnZlcnQgbm9ybWFsIHRyaWdnZXIgdG8gZXh0ZW5kZWQgdHJpZ2dlci5cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGxldCBhZGRPbiA9IG5ld190cmlnZ2VyX2FjdGlvbnMubGVuZ3RoIC0gMTA7XHJcbiAgICAgICAgICAgICAgICBhZGRUcmlnZ2VyQWN0aW9uQ291bnQoYWRkT24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZGlyZWN0X3VwZGF0ZV9wYXJhbXMubGVuZ3RoOyArK2kpe1xyXG4gICAgICAgICAgICBVcGRhdGVQaHlzaWNhbFBhcmFtKGRpcmVjdF91cGRhdGVfcGFyYW1zW2ldLCBkaXJlY3RfdXBkYXRlX3ZhbHVlc1tpXSwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgTmV3Tm90ZShcIlRyaWdnZXIgdXBkYXRlZCBzdWNjZXNzZnVsbHkuXCIsIG5vdGVfZ29vZCk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LnNldGxldGVkaXQgPSBzZXRsZXRlZGl0O1xyXG4gICAgd2luZG93LlN0cmVldE1hZ2ljID0gU3RyZWV0TWFnaWM7XHJcbiAgICB3aW5kb3cuU2F2ZVRoaXNNYXAgPSBTYXZlVGhpc01hcDtcclxuICAgIHdpbmRvdy5Db21waWxlVHJpZ2dlciA9IENvbXBpbGVUcmlnZ2VyO1xyXG5cclxuICAgIC8vIHRoZSBjdXJyZW50IHNlcmlhbGlzYXRpb24gYW5kIHVuc2VyaWFsaXNhdGlvbiB1c2VkIGlzIGFuIGV4dGVybmFsIGxpYnJhcnkgRXJpYyB1c2VkXHJcbiAgICAvLyBpdCBpcyBjdXJyZW50bHkgdXNlZCBieSB0aGUgQ29weSBhbmQgUGFzdGUgY2xpcGJvYXJkIGZ1bmN0aW9uc1xyXG4gICAgLy8gaG93ZXZlciwgaXQgZG9lcyBub3Qgd29yayB3aXRoIGFycmF5cywgdHVybmluZyB0aGVtIGludG8gb2JqZWN0cyBpbnN0ZWFkLlxyXG4gICAgLy8gdGhlcmVmb3JlLCBOeW92ZSBoYXMgZGVjaWRlZCB0byBvdmVyd3JpdGUgdGhlc2UgbGlicmFyeVxyXG4gICAgd2luZG93LnNlcmlhbGl6ZSA9IEpTT04uc3RyaW5naWZ5O1xyXG4gICAgd2luZG93LnVuc2VyaWFsaXplID0gSlNPTi5wYXJzZTtcclxuICAgIHdpbmRvdy5VcGRhdGVHVUlQYXJhbXMgPSBuZXdVcGRhdGVHVUlQYXJhbXM7XHJcblxyXG4gICAgLy8gUGF0Y2ggdGhlIHJlbmRlciBmdW5jdGlvbidzIGNvbm5lY3Rpb24gbGluZSB0byB3b3JrIHdpdGggPjEwIHRyaWdnZXIgYWN0aW9ucy5cclxuICAgIC8qbGV0IFJlbmRlckluU3RyaW5nID0gd2luZG93LlJlbmRlci50b1N0cmluZygpLnJlcGxhY2VBbGwoXHJcbiAgICAgICAgL2VzXFxbKGkyPylcXF1cXC5wbVxcWyBwcm9wZXJ0eSBcXF07L2csXHJcbiAgICAgICAgYGVzWyQxXS5wbVsgcHJvcGVydHkgXTtcclxuICAgICAgICBsZXQgYXJyYXk7XHJcbiAgICAgICAgaWYoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgYXJyYXkgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGFycmF5ID0gW3ZhbHVlXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcihsZXQgaW5kZXggPSAwLCB2YWx1ZSA9IGFycmF5W2luZGV4XTsgaW5kZXggPCBhcnJheS5sZW5ndGg7ICsraW5kZXgsIHZhbHVlID0gYXJyYXlbaW5kZXhdKVxyXG4gICAgICAgIGBcclxuICAgICk7XHJcblxyXG4gICAgLy8gUGF0Y2ggZnVuY3Rpb24gZm9yIHN0cmljdCBtb2RlIGNvbXBsaWFuY2VcclxuICAgIFJlbmRlckluU3RyaW5nID0gUmVuZGVySW5TdHJpbmcudG9TdHJpbmcoKS5yZXBsYWNlQWxsKFxyXG4gICAgICAgIGBmb3IgKCBwcm9wZXJ0eSBpbmAsXHJcbiAgICAgICAgYGZvciAoIGxldCBwcm9wZXJ0eSBpbmBcclxuICAgICk7XHJcblxyXG4gICAgd2luZG93LlJlbmRlciA9IGV2YWwoYCgke1JlbmRlckluU3RyaW5nfSlgKTsqL1xyXG59XHJcblxyXG4vKiogVGhpcyBmdW5jdGlvbiBpcyBpbnZva2VkIHdoZW5ldmVyIHRoZSBtYXAgbG9hZHMuXHJcbiAqXHJcbiAqICBJdCBsb29rcyBmb3IgcG90ZW50aWFsIHRyaWdnZXJzIGNvbmZpZ3VyZWQgaW4gYSBsaW5rZWQgbGlzdCBtYW5uZXIgYW5kIGNvbnZlcnRzIGl0IHRvIGFuIGV4dGVuZGVkIHRyaWdnZXIuXHJcbiAqL1xyXG5mdW5jdGlvbiBwYXJzZUV4dGVuZGVkVHJpZ2dlcnMoKXtcclxuICAgIGNvbnN0IG1heEl0ZXJhdGlvbiA9IDEwMDA7XHJcbiAgICBjb25zdCBleGVjdXRlVHJpZ2dlckFjdGlvbiA9IDk5O1xyXG4gICAgY29uc3Qgc3dpdGNoRXhlY3V0aW9uQWN0aW9uID0gMzYzO1xyXG5cclxuICAgIC8vIEZpbmQgYWxsIGV4dGVuZGVkIHRyaWdnZXJzLlxyXG4gICAgZm9yKGNvbnN0IGVudGl0eSBvZiBlcyl7XHJcbiAgICAgICAgaWYoIWVudGl0eS5leGlzdHMpICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICBpZihlbnRpdHkuX2NsYXNzICE9PSBcInRyaWdnZXJcIikgY29udGludWU7XHJcbiAgICAgICAgaWYoIWVudGl0eS5wbVtcImV4dGVuZGVkXCJdKSAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICBsZXQgaXRlcmF0aW9uQ291bnQgPSAxO1xyXG4gICAgICAgIGxldCBwcmV2aW91c1RvdGFsTnVtT2ZBY3Rpb25zID0gZW50aXR5LnBtW1widG90YWxOdW1PZkFjdGlvbnNcIl07XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBleHRlbmRlZCB0cmlnZ2VyJ3MgYWRkaXRpb25hbCBwcm9wZXJ0aWVzLlxyXG4gICAgICAgIGVudGl0eS5wbVtcInRvdGFsTnVtT2ZBY3Rpb25zXCJdID0gOTtcclxuICAgICAgICBlbnRpdHkucG1bXCJhZGRpdGlvbmFsQWN0aW9uc1wiXSA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIGVudGl0eS5wbVtcImFkZGl0aW9uYWxQYXJhbUFcIl0gPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBlbnRpdHkucG1bXCJhZGRpdGlvbmFsUGFyYW1CXCJdID0gbmV3IEFycmF5KCk7XHJcblxyXG4gICAgICAgIGxldCBjdXJyZW50VHJpZ2dlciA9IGVudGl0eTtcclxuXHJcbiAgICAgICAgLy8gSXRlcmF0ZSB0aHJvdWdoIHRoZSBsaW5rZWQgbGlzdCwgcG9pbnRlZCBieSB0aGUgMTB0aCB0cmlnZ2VyIGFjdGlvbi5cclxuICAgICAgICBsZXQgbmV4dFRyaWdnZXJJbmRleCA9IGVzLmZpbmRJbmRleChlID0+IFxyXG4gICAgICAgICAgICAoZS5wbVtcInVpZFwiXSA9PT0gY3VycmVudFRyaWdnZXIucG1bXCJhY3Rpb25zXzEwX3RhcmdldEFcIl0pICYmIFxyXG4gICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAoY3VycmVudFRyaWdnZXIucG1bXCJhY3Rpb25zXzEwX3R5cGVcIl0gPT0gc3dpdGNoRXhlY3V0aW9uQWN0aW9uKSB8fCAvLyBCYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxyXG4gICAgICAgICAgICAgICAgKGN1cnJlbnRUcmlnZ2VyLnBtW1wiYWN0aW9uc18xMF90eXBlXCJdID09IGV4ZWN1dGVUcmlnZ2VyQWN0aW9uKSAgICAgLy8gQ3VycmVudCBzeXN0ZW0gbm93XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApXHJcbiAgICAgICAgd2hpbGUobmV4dFRyaWdnZXJJbmRleCAhPT0gLTEpe1xyXG4gICAgICAgICAgICBsZXQgbmV4dFRyaWdnZXIgPSBlc1tuZXh0VHJpZ2dlckluZGV4XTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJldHJpZXZlIGFsbCB0cmlnZ2VyIGFjdGlvbnMuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPD0gOTsgKytpKXtcclxuICAgICAgICAgICAgICAgIC8vIFRoZSB2ZXJ5IGZpcnN0IGVudHJ5IG9mIGFkZGl0aW9uYWwgYWN0aW9ucyBhbmQgcGFyYW1ldGVycyBiZWxvbmdzIHRvIGFjdGlvbiAxMFxyXG4gICAgICAgICAgICAgICAgaWYoaSA9PT0gMSAmJiBpdGVyYXRpb25Db3VudCA9PT0gMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5LnBtW1wiYWN0aW9uc18xMF90eXBlXCJdID0gbmV4dFRyaWdnZXIucG1bYGFjdGlvbnNfMV90eXBlYF07XHJcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5LnBtW1wiYWN0aW9uc18xMF90YXJnZXRBXCJdID0gbmV4dFRyaWdnZXIucG1bYGFjdGlvbnNfMV90YXJnZXRBYF07XHJcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5LnBtW1wiYWN0aW9uc18xMF90YXJnZXRCXCJdID0gbmV4dFRyaWdnZXIucG1bYGFjdGlvbnNfMV90YXJnZXRCYF07XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZW50aXR5LnBtW1wiYWRkaXRpb25hbEFjdGlvbnNcIl0ucHVzaChuZXh0VHJpZ2dlci5wbVtgYWN0aW9uc18ke2l9X3R5cGVgXSk7XHJcbiAgICAgICAgICAgICAgICBlbnRpdHkucG1bXCJhZGRpdGlvbmFsUGFyYW1BXCJdLnB1c2gobmV4dFRyaWdnZXIucG1bYGFjdGlvbnNfJHtpfV90YXJnZXRBYF0pO1xyXG4gICAgICAgICAgICAgICAgZW50aXR5LnBtW1wiYWRkaXRpb25hbFBhcmFtQlwiXS5wdXNoKG5leHRUcmlnZ2VyLnBtW2BhY3Rpb25zXyR7aX1fdGFyZ2V0QmBdKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZW50aXR5LnBtW1widG90YWxOdW1PZkFjdGlvbnNcIl0gKz0gOTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aG9zZSBhdXRvIGdlbmVyYXRlZCB0cmlnZ2Vyc1xyXG4gICAgICAgICAgICBlcy5zcGxpY2UobmV4dFRyaWdnZXJJbmRleCwgMSk7XHJcblxyXG4gICAgICAgICAgICAvLyBDb250aW51ZSBpdGVyYXRpbmdcclxuICAgICAgICAgICAgY3VycmVudFRyaWdnZXIgPSBuZXh0VHJpZ2dlcjtcclxuICAgICAgICAgICAgbmV4dFRyaWdnZXJJbmRleCA9IGVzLmZpbmRJbmRleChlID0+IGUucG1bXCJ1aWRcIl0gPT09IGN1cnJlbnRUcmlnZ2VyLnBtW1wiYWN0aW9uc18xMF90YXJnZXRBXCJdICYmIGN1cnJlbnRUcmlnZ2VyLnBtW1wiYWN0aW9uc18xMF90eXBlXCJdID09PSBzd2l0Y2hFeGVjdXRpb25BY3Rpb24pO1xyXG5cclxuICAgICAgICAgICAgLy8gUHJvdGVjdCB1c2VycyBmcm9tIHBvdGVudGlhbCBpbmZpbml0ZSBpdGVyYXRpb24uXHJcbiAgICAgICAgICAgIGl0ZXJhdGlvbkNvdW50Kys7XHJcbiAgICAgICAgICAgIGlmKGl0ZXJhdGlvbkNvdW50ID4gbWF4SXRlcmF0aW9uKXtcclxuICAgICAgICAgICAgICAgIGFsZWlMb2cobm90ZV9iYWQsIFwiV2hlbiBwYXJzaW5nIGV4dGVuZGVkIHRyaWdnZXJzLCBwb3RlbnRpYWxseSByZWFjaGVkIGFuIGluZmluaXRlIGxvb3AuXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNocmluayBleHRlbmRlZCB0cmlnZ2VyIHRvIHByZXZpb3VzbHkgc2F2ZWQgc2l6ZSBpZiB0aGUgbGFzdCBmZXcgdHJpZ2dlciBhY3Rpb25zIGlzIGVtcHR5LlxyXG4gICAgICAgIGlmKHByZXZpb3VzVG90YWxOdW1PZkFjdGlvbnMpe1xyXG4gICAgICAgICAgICBjb25zdCBkb05vdGhpbmdUcmlnZ2VyQWN0aW9uID0gLTE7XHJcbiAgICAgICAgICAgIGxldCBpc0FsbEVtcHR5ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IHByZXZpb3VzVG90YWxOdW1PZkFjdGlvbnMgKyAxOyBpIDwgZW50aXR5LnBtW1widG90YWxOdW1PZkFjdGlvbnNcIl07IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBpZihlbnRpdHkucG1bXCJhZGRpdGlvbmFsQWN0aW9uc1wiXVtpIC0gMTFdICE9IGRvTm90aGluZ1RyaWdnZXJBY3Rpb24pe1xyXG4gICAgICAgICAgICAgICAgICAgIGlzQWxsRW1wdHkgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gU2hyaW5rIHRoZSB0cmlnZ2VyIGFjdGlvbi5cclxuICAgICAgICAgICAgaWYoaXNBbGxFbXB0eSl7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGlmZmVyZW5jZSA9IGVudGl0eS5wbVtcInRvdGFsTnVtT2ZBY3Rpb25zXCJdIC0gcHJldmlvdXNUb3RhbE51bU9mQWN0aW9ucztcclxuICAgICAgICAgICAgICAgIGVudGl0eS5wbVtcImFkZGl0aW9uYWxBY3Rpb25zXCJdLmxlbmd0aCAtPSBkaWZmZXJlbmNlO1xyXG4gICAgICAgICAgICAgICAgZW50aXR5LnBtW1wiYWRkaXRpb25hbFBhcmFtQVwiXS5sZW5ndGggLT0gZGlmZmVyZW5jZTtcclxuICAgICAgICAgICAgICAgIGVudGl0eS5wbVtcImFkZGl0aW9uYWxQYXJhbUJcIl0ubGVuZ3RoIC09IGRpZmZlcmVuY2U7XHJcbiAgICAgICAgICAgICAgICBlbnRpdHkucG1bXCJ0b3RhbE51bU9mQWN0aW9uc1wiXSA9IHByZXZpb3VzVG90YWxOdW1PZkFjdGlvbnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGdW5jdGlvbiB0aGF0IGFkZHMgbmV3IENTUyBzdHlsZSB0byBBTEUuXHJcbiAqIC0gQWRkIHN0eWxlIHJ1bGUgZm9yIDIgc2lkZSBieSBzaWRlIGJ1dHRvblxyXG4gKlxyXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHJ1biBvbmNlIGluIEFMRV9TdGFydC5cclxuICovXHJcbmZ1bmN0aW9uIHVwZGF0ZUNTU0ZpbGUoKSB7XHJcbiAgICBjb25zdCBjc3NGaWxlID0gZG9jdW1lbnQuc3R5bGVTaGVldHNbMF07XHJcblxyXG4gICAgaWYoIWNzc0ZpbGUpe1xyXG4gICAgICAgIGFsZWlMb2coV0FSTiwgXCJGYWlsZWQgdG8gdXBkYXRlIENTUyBmaWxlLlwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ3JlYXRlcyBhIG5ldyBydWxlIGZvciBjbGFzcyB0d28tZWxlbWVudC1ncmlkLCB1c2VmdWwgYXMgYSBwYXJlbnQgZGl2LlxyXG4gICAgY3NzRmlsZS5pbnNlcnRSdWxlKFwiLnR3by1lbGVtZW50LWdyaWR7IGRpc3BsYXk6IGdyaWQ7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7IH1cIiwgMCk7XHJcbn1cclxuXHJcbi8vIENyZWF0ZXMgbWFwcGluZyBvZiBvYmplY3QgY29ubmVjdGlvbnMgc28gdGhhdCB3ZSBkb24ndCByZWNyZWF0ZSBsaW5lIG1hcHBpbmcgZXZlcnl0aW1lLlxyXG4vLyBUaGlzIHdpbGwgYmUgdXNlZCBpbiBSZW5kZXIgZnVuY3Rpb24gZm9yIHdoZW4gd2UgYXJlIGRyYXdpbmcgb2JqZWN0IGNvbm5lY3Rpb24gbGluZXMuXHJcbmZ1bmN0aW9uIF9fT0NNX0FkZFJlZmVyZW5jZShmcm9tLCB0bykge1xyXG4gICAgbGV0IG9jbSA9IE9iamVjdENvbm5lY3Rpb25NYXBwaW5nO1xyXG4gICAgaWYob2NtW2Zyb21dW1widG9cIl0uaW5kZXhPZih0bykgPT09IC0xKSBvY21bZnJvbV1bXCJ0b1wiXS5wdXNoKHRvKTtcclxuICAgIGlmKG9jbVt0b11bXCJieVwiXS5pbmRleE9mKGZyb20pID09PSAtMSkgb2NtW3RvXVtcImJ5XCJdLnB1c2goZnJvbSk7XHJcbn1cclxuZnVuY3Rpb24gX19PQ01fUmVtb3ZlUmVmZXJlbmNlKGZyb20sIHRvKSB7XHJcbiAgICBsZXQgb2NtID0gT2JqZWN0Q29ubmVjdGlvbk1hcHBpbmc7XHJcbiAgICBpZihvY21bZnJvbV1bXCJ0b1wiXS5pbmRleE9mKHRvKSAhPT0gLTEpIG9jbVtmcm9tXVtcInRvXCJdLnNwbGljZShvY21bZnJvbV1bXCJ0b1wiXS5pbmRleE9mKHRvKSwgMSk7XHJcbiAgICBpZihvY21bdG9dW1wiYnlcIl0uaW5kZXhPZihmcm9tKSAhPT0gLTEpIG9jbVt0b11bXCJieVwiXS5zcGxpY2Uob2NtW3RvXVtcImJ5XCJdLmluZGV4T2YoZnJvbSksIDEpO1xyXG59XHJcblxyXG4vKlxyXG4gKiBfX09DTV9IYW5kbGVPYmplY3RcclxuICogRnVuY3Rpb24gcmVzcG9uc2libGUgZm9yIGludGVybmFsIHJlZ2lzdHJhdGlvbiBvZiBvYmplY3QgbWFwcGluZ3MuXHJcbiAqXHJcbiAqQHBhcmFtIHtFfSAgIGVsZW1lbnQgICBQQjIgb2JqZWN0IHRvIGNyZWF0ZSBjb25uZWN0aW9uIG1hcHBpbmcgb2YuXHJcbiovXHJcblxyXG5mdW5jdGlvbiBfX09DTV9IYW5kbGVPYmplY3QoZWxlbWVudCkge1xyXG4gICAgbGV0IG9jbSA9IE9iamVjdENvbm5lY3Rpb25NYXBwaW5nO1xyXG4gICAgbGV0IHV0ZW0gPSB1aWRUb0VsZW1lbnRNYXA7XHJcblxyXG5cclxuICAgIGlmKGVsZW1lbnQucG0udWlkID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgIGlmKGVsZW1lbnQucG0udWlkID09PSBcIiN3YXRlclwiKSB7XHJcbiAgICAgICAgZWxlbWVudC5wbS51aWQgPSBSYW5kb21pemVOYW1lKGVsZW1lbnQucG0udWlkKTsgLy8gSSBkb24ndCBzZWUgd2h5IG5vdFxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBUcmlnZ2VyX0hhbmRsZVBhcmFtZXRlcih0cmlnZ2VyLCBwYXJhbWV0ZXIpIHtcclxuICAgICAgICBpZih0eXBlb2YocGFyYW1ldGVyKSAhPT0gXCJzdHJpbmdcIikgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZih1dGVtW3BhcmFtZXRlcl0gIT09IHVuZGVmaW5lZCkgeyAvLyBTaW1wbGUgY2FzZSB3aGVyZSBwYXJhbWV0ZXIgaXMgc2ltcGx5IHJlZmVyZW5jZSB0byBvYmplY3QuXHJcbiAgICAgICAgICAgIF9fT0NNX0FkZFJlZmVyZW5jZSh0cmlnZ2VyLCBwYXJhbWV0ZXIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHBhcmFtZXRlci5pbmNsdWRlcyhcIixcIikgPT0gZmFsc2UpIHJldHVybjtcclxuICAgICAgICAvLyBBIGxpdHRsZSBjb21wbGV4IGNhc2Ugd2hlcmUgbXVsdGlwbGUgb2JqZWN0cyBhcmUgcmVmZXJlbmNlZFxyXG4gICAgICAgIC8vIEFzIGluIFBhcmFtZXRlciBCOiAjcmVnaW9uKjEsI3JlZ2lvbioyXHJcbiAgICAgICAgbGV0IHNwbHQgPSBwYXJhbWV0ZXIuc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgIGZvcihsZXQgdmFsdWUgb2Ygc3BsdCkge1xyXG4gICAgICAgICAgICBsZXQgdmFsID0gdmFsdWUudHJpbSgpO1xyXG4gICAgICAgICAgICBpZih1dGVtW3ZhbF0gIT09IHVuZGVmaW5lZCkgX19PQ01fQWRkUmVmZXJlbmNlKHRyaWdnZXIsIHZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEVsaW1pbmF0aW5nIHBhcmFtZXRlcnMgd2UgZG9uJ3QgbmVlZCB0byBsb29rIGF0LlxyXG4gICAgZm9yKGxldCBrZXkgb2YgT2JqZWN0LmtleXMoZWxlbWVudC5wbSkpIHtcclxuICAgICAgICBpZihfX09DTV9DSEVDS0VEX0tFWVMuaW5kZXhPZihrZXkpID09PSAtMSkgY29udGludWU7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gZWxlbWVudC5wbVtrZXldO1xyXG4gICAgICAgIGlmKHV0ZW1bdmFsdWVdID09PSB1bmRlZmluZWQpIGNvbnRpbnVlOyAvLyBOb3QgdmFsaWQgb2JqZWN0LCBqdXN0IHNraXAuXHJcblxyXG4gICAgICAgIF9fT0NNX0FkZFJlZmVyZW5jZShlbGVtZW50LnBtLnVpZCwgdmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLy8gU3BlY2lhbCBjYXNlIGZvciB0cmlnZ2VyIGFjdGlvbnMuXHJcbiAgICBpZihlbGVtZW50Ll9jbGFzcyAhPT0gXCJ0cmlnZ2VyXCIpIHJldHVybjtcclxuICAgIGxldCBwbSA9IGVsZW1lbnQucG07XHJcbiAgICAvLyBWYW5pbGxhIHRyaWdnZXIgY2FzZSAoMTAgYWN0aW9ucywgZXh0ZW5kZWQgdHJpZ2dlcnMgd2lsbCBydW4gdGhpcyB0b28pXHJcbiAgICBmb3IobGV0IGkgPSAxOyBpIDwgMTE7IGkrKykge1xyXG4gICAgICAgIGlmKHBtW2BhY3Rpb25zXyR7aX1fdHlwZWBdID09IC0xKSBjb250aW51ZTtcclxuICAgICAgICBpZihwbVtgYWN0aW9uc18ke2l9X3R5cGVgXSA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcclxuICAgICAgICBUcmlnZ2VyX0hhbmRsZVBhcmFtZXRlcihwbS51aWQsIHBtW2BhY3Rpb25zXyR7aX1fdGFyZ2V0QWBdKTtcclxuICAgICAgICBUcmlnZ2VyX0hhbmRsZVBhcmFtZXRlcihwbS51aWQsIHBtW2BhY3Rpb25zXyR7aX1fdGFyZ2V0QmBdKTtcclxuICAgIH1cclxuICAgIC8vIEV4dGVuZGVkIHRyaWdnZXJzLlxyXG4gICAgaWYocG0uZXh0ZW5kZWQgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgaWYoIWFsZWlTZXR0aW5ncy5leHRlbmRlZFRyaWdnZXJzKSByZXR1cm47XHJcblxyXG4gICAgbGV0IGFjdGlvbnMgPSBwbS5hZGRpdGlvbmFsQWN0aW9ucztcclxuICAgIGxldCBwYXJhbUEgPSBwbS5hZGRpdGlvbmFsUGFyYW1BO1xyXG4gICAgbGV0IHBhcmFtQiA9IHBtLmFkZGl0aW9uYWxQYXJhbUI7XHJcblxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFjdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZihhY3Rpb25zW2ldID09PSAtMSkgY29udGludWU7XHJcbiAgICAgICAgVHJpZ2dlcl9IYW5kbGVQYXJhbWV0ZXIocG0udWlkLCBwYXJhbUFbaV0pO1xyXG4gICAgICAgIFRyaWdnZXJfSGFuZGxlUGFyYW1ldGVyKHBtLnVpZCwgcGFyYW1CW2ldKTtcclxuICAgIH1cclxufVxyXG5cclxuLypcclxuICogT0NNX29uT2JqZWN0RGVsZXRlXHJcbiAqIEZ1bmN0aW9uIHRoYXQgZ2V0cyBjYWxsZWQgaW4gRGVsZXRlU2VsZWN0aW9uLlxyXG4gKiBUaGlzIGp1c3Qga2VlcHMgT2JqZWN0IENvbm5lY3Rpb24gTWFwIHdpdGggbGF0ZXN0IGRhdGEuXHJcblxyXG4gKiBAcGFyYW0ge0V9IGVsZW1lbnQgICBQQjIgZWxlbWVudCB0aGF0IGdvdCBkZWxldGVkLlxyXG4qL1xyXG5mdW5jdGlvbiBPQ01fb25PYmplY3REZWxldGUoZWxlbWVudCkge1xyXG4gICAgaWYoIShhbGVpU2V0dGluZ3MucmVtYXRjaFVJRCAmJiBhbGVpU2V0dGluZ3Mub2NtRW5hYmxlZCkpIHJldHVybjtcclxuICAgIGlmKGVsZW1lbnQucG0udWlkID09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgaWYoIU9DTV9MT0FERUQpIHJldHVybjtcclxuXHJcbiAgICBsZXQgdWlkID0gZWxlbWVudC5wbS51aWQ7XHJcbiAgICBsZXQgb2NtID0gd2luZG93Lk9iamVjdENvbm5lY3Rpb25NYXBwaW5nO1xyXG4gICAgbGV0IHV0ZW0gPSB3aW5kb3cudWlkVG9FbGVtZW50TWFwO1xyXG5cclxuICAgIGxldCByZWZlcnJlZEJ5ID0gb2NtW3VpZF0uYnk7XHJcbiAgICBsZXQgcmVmZXJyaW5nVG8gPSBvY21bdWlkXS50bztcclxuXHJcbiAgICAvLyBUT0RPOiBNYWtlIHRoaXMgYml0IHNhZmVyPyBTb21lIGhhcmQgbGltaXQ/XHJcbiAgICB3aGlsZShvY21bdWlkXS5ieS5sZW5ndGggIT0gMCkgX19PQ01fUmVtb3ZlUmVmZXJlbmNlKG9jbVt1aWRdLmJ5WzBdLCB1aWQpO1xyXG4gICAgd2hpbGUob2NtW3VpZF0udG8ubGVuZ3RoICE9IDApIF9fT0NNX1JlbW92ZVJlZmVyZW5jZSh1aWQsIG9jbVt1aWRdLnRvWzBdKTtcclxuXHJcbiAgICAvLyBUaGlzIGNhbm5vdCBoYXBwZW4gYW55bW9yZVxyXG4gICAgaWYoKG9jbVt1aWRdLmJ5Lmxlbmd0aCAhPSAwKSB8fCAob2NtW3VpZF0udG8ubGVuZ3RoICE9IDApKSB7XHJcbiAgICAgICAgTmV3Tm90ZShgQUxFSTogU29tZXRoaW5nIGlzIHdyb25nIHdpdGggT2JqZWN0IENvbm5lY3Rpb24gTWFwLiBQbGVhc2UgcmVnZW5lcmF0ZSBtYXAgYnkgbG9hZGluZyB0aGUgbWFwIGFnYWluLmAsIGAjRkYwMDAwYCk7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlIHV0ZW1bdWlkXTtcclxuICAgIGRlbGV0ZSBvY21bdWlkXTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIENyZWF0ZUNvbm5lY3Rpb25NYXBwaW5nKCkge1xyXG4gICAgT0NNX0xPQURFRCA9IGZhbHNlO1xyXG4gICAgd2luZG93Lk9iamVjdENvbm5lY3Rpb25NYXBwaW5nID0ge307XHJcbiAgICB3aW5kb3cudWlkVG9FbGVtZW50TWFwID0ge307XHJcblxyXG4gICAgaWYoIWFsZWlTZXR0aW5ncy5yZW1hdGNoVUlEKSByZXR1cm47IC8vIFJlbWF0Y2ggVUlEIGlzIG5vdCBuZWNlc3NhcmlseSBhIHJlcXVpcmVtZW50IGZvciBPQ00gYnV0IGl0IGlzIHJlcXVpcmVtZW50IGlmIEkgd2FubmEgYmUgbGF6eVxyXG4gICAgaWYoIWFsZWlTZXR0aW5ncy5vY21FbmFibGVkKSByZXR1cm47XHJcblxyXG4gICAgbGV0IG9jbSA9IE9iamVjdENvbm5lY3Rpb25NYXBwaW5nO1xyXG4gICAgbGV0IHV0ZW0gPSB1aWRUb0VsZW1lbnRNYXA7XHJcblxyXG4gICAgZm9yKGxldCBlbGVtZW50IG9mIGVzKSB7XHJcbiAgICAgICAgaWYoIWVsZW1lbnQuZXhpc3RzKSBjb250aW51ZTtcclxuICAgICAgICBpZihlbGVtZW50LnBtLnVpZCA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcclxuICAgICAgICBpZihlbGVtZW50LnBtLnVpZCA9PT0gXCIjd2F0ZXJcIikgY29udGludWU7XHJcblxyXG4gICAgICAgIGlmKG9jbVtlbGVtZW50LnBtLnVpZF0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBOZXdOb3RlKGBBTEVJOiAyKyBvYmplY3RzIHNoYXJlIG5hbWUgJHtlbGVtZW50LnBtLnVpZH0sIGdvaW5nIHRvIHN0b3AgY29uc3RydWN0aW5nIG9iamVjdCBjb25uZWN0aW9uIG1hcC5gLCBcIiNGRjAwMDBcIik7XHJcbiAgICAgICAgICAgIHdpbmRvdy5PYmplY3RDb25uZWN0aW9uTWFwcGluZyA9IHt9O1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvY21bZWxlbWVudC5wbS51aWRdID0ge1wiYnlcIjogW10sIFwidG9cIjogW119O1xyXG4gICAgICAgIHV0ZW1bZWxlbWVudC5wbS51aWRdID0gZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBmb3IobGV0IGVsZW1lbnQgb2YgZXMpIF9fT0NNX0hhbmRsZU9iamVjdChlbGVtZW50KTtcclxuICAgIE9DTV9MT0FERUQgPSB0cnVlO1xyXG4gICAgYWxlaUxvZyhERUJVRywgXCJCdWlsdCBvYmplY3QgY29ubmVjdGlvbiBtYXAuXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXRjaFJlbmRlcigpIHtcclxuICAgIC8vIFRoaXMgaXMgd2hlcmUgUmVuZGVyIHdpbGwgYmUgcGF0Y2hlZC5cclxuICAgIC8vIER1ZSB0byBuYXR1cmUgb2YgdGhpcyBmdW5jdGlvbiwgbWF5YmUgaXQnbGwgYmUgYmV0dGVyIHRvIGNhbGwgdGhpcyBmdW5jdGlvbiBlYWNoIHRpbWUgYSBwYXRjaCBpcyBuZWVkZWQuXHJcbiAgICAvLyBBbmQgdG8gc3VwcG9ydCB0aGF0LCB0aGlzIGZ1bmN0aW9uIHdpbGwgc3RyaWN0bHkgd29yayBvbiBBTEVfUmVuZGVyIHRoYW4gY3VycmVudCBSZW5kZXJcclxuICAgIGlmKGFsZWlTZXR0aW5ncy5jdXN0b21SZW5kZXJlcikge1xyXG4gICAgICAgIFJlbmRlcmVyX2luaXRpYWxpemUoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG4gICAgaWYoIWFsZWlTZXR0aW5ncy5ibGFja1RoZW1lKSByZXR1cm47XHJcbiAgICAvLyBXZSBzaG91bGQgb25seSBwYXRjaCBmb3IgYmxhY2sgdGhlbWUsIGJlY2F1c2Ugc2V0dGluZyByZW5kZXIgbWFrZXMgdGhpbmdzIGxhZyBmb3Igbm8gYXBwYXJlbnQgcmVhc29uLlxyXG5cclxuICAgIGxldCBmbiA9IEFMRV9SZW5kZXIudG9TdHJpbmcoKTtcclxuICAgIGZuID0gZm4ucmVwbGFjZUFsbChcImZvciAoIHByb3BlcnR5XCIsIFwiZm9yICggbGV0IHByb3BlcnR5XCIpO1xyXG5cclxuICAgIC8vIE5vbmFtZSAmIFhlZGVuJ3MgYmxhY2sgdGhlbWVcclxuICAgIGxldCBHcmlkQ29sb3IgPSBcIiMyMjIyMjJcIjtcclxuICAgIGxldCBHcmlkTGluZUNvbG9yID0gXCIjRkZGRkZGNTBcIjtcclxuXHJcbiAgICBmbiA9IGZuLnJlcGxhY2UoXCJpZiAoIFRIRU1FID09PSBUSEVNRV9CTFVFIClcIiwgYGlmIChUSEVNRSA9PT0gNCkgY3R4LmZpbGxTdHlsZSA9ICcke0dyaWRDb2xvcn0nO1xcbiBlbHNlIGlmIChUSEVNRSA9PT0gVEhFTUVfQkxVRSlgKTtcclxuICAgIGZuID0gZm4ucmVwbGFjZShcImlmICggVEhFTUUgIT09IFRIRU1FX0RBUksgKVwiLCBgaWYgKFRIRU1FID09PSA0KSBjdHguZmlsbFN0eWxlID0gJyR7R3JpZExpbmVDb2xvcn0nO1xcbiBlbHNlIGlmIChUSEVNRSAhPT0gVEhFTUVfREFSSylgKTtcclxuXHJcbiAgICB3aW5kb3cuUmVuZGVyID0gZXZhbChgKCR7Zm59KWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXRjaERlbGV0ZVNlbGVjdGlvbigpIHtcclxuICAgIGxldCBvZyA9IHdpbmRvdy5EZWxldGVTZWxlY3Rpb247XHJcbiAgICB3aW5kb3cuRGVsZXRlU2VsZWN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGZvcihsZXQgc2VsZWN0ZWQgb2YgU2VsZWN0ZWRPYmplY3RzKSBPQ01fb25PYmplY3REZWxldGUoc2VsZWN0ZWQpO1xyXG4gICAgICAgIG9nKCk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5sZXQgQUxFX3N0YXJ0ID0gKGFzeW5jIGZ1bmN0aW9uKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIHdpbmRvdy5BTEVJQVBJID0ge307XHJcblxyXG4gICAgVkFMX1RBQkxFID0gc3BlY2lhbF92YWx1ZXNfdGFibGU7XHJcbiAgICBST09UX0VMRU1FTlQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgICBzdHlsZXNoZWV0cyA9IGRvY3VtZW50LnN0eWxlU2hlZXRzO1xyXG4gICAgQUxFX1JlbmRlciA9IFJlbmRlcjtcclxuICAgIHdpbmRvdy5PYmplY3RDb25uZWN0aW9uTWFwcGluZyA9IHt9O1xyXG4gICAgd2luZG93LnVpZFRvRWxlbWVudE1hcCA9IHt9O1xyXG5cclxuICAgIC8vIFVwZGF0ZXMgdGhlIGN1cnJlbnQgQ1NTIHN0eWxlc2hlZXQuXHJcbiAgICB1cGRhdGVDU1NGaWxlKCk7XHJcblxyXG4gICAgLy8gSGFuZGxpbmcgcmVzdCBvZiB0aGluZ3NcclxuICAgIGFkZFByb3BlcnR5UGFuZWxSZXNpemUoKTtcclxuICAgIGFkZE9iakJveFJlc2l6ZSgpO1xyXG5cclxuICAgIHBhdGNoU2VydmVyUmVxdWVzdCgpO1xyXG5cclxuICAgIGxvYWRjc3MuZml4V2VicGFja1N0eWxlU2hlZXRzKCk7XHJcbiAgICBsb2FkY3NzLnBhdGNoVGhlbWVTZXQoKTtcclxuXHJcbiAgICB1cGRhdGVTdHlsZXMoKTtcclxuICAgIHVwZGF0ZVNraW5zKCk7XHJcbiAgICB1cGRhdGVTb3VuZHMoKTtcclxuICAgIHVwZGF0ZVZvaWNlUHJlc2V0cygpO1xyXG4gICAgdXBkYXRlUGFyYW1ldGVycygpO1xyXG4gICAgdXBkYXRlT2Zmc2V0cygpO1xyXG4gICAgdXBkYXRlT2JqZWN0cygpO1xyXG4gICAgdXBkYXRlQnV0dG9ucygpO1xyXG4gICAgcGF0Y2hfbV9kb3duKCk7XHJcbiAgICBhZGRTZXNzaW9uU3luYygpO1xyXG4gICAgYWRkVHJpZ2dlcklEcygpO1xyXG4gICAgcGF0Y2hTaG93SGlkZUJ1dHRvbigpO1xyXG4gICAgb3B0aW1pemUoKTtcclxuICAgIHBhdGNoVXBkYXRlVG9vbHMoKTtcclxuICAgIHBhdGNoRGVjb3JVcGxvYWQoKTtcclxuICAgIHBhdGNoRW50aXR5Q2xhc3MoKTtcclxuICAgIHBhdGNoTmV3Tm90ZSgpO1xyXG4gICAgcGF0Y2hFdmFsU2V0KCk7XHJcbiAgICAvLyBBbGxvd2luZyBmb3Igc3BhY2VzIGluIHBhcmFtZXRlcnMuXHJcbiAgICB3aW5kb3cuVXBkYXRlUGh5c2ljYWxQYXJhbSA9IFVwZGF0ZVBoeXNpY2FsUGFyYW07XHJcbiAgICB3aW5kb3cuUGFzdGVGcm9tQ2xpcEJvYXJkID0gUGFzdGVGcm9tQ2xpcEJvYXJkO1xyXG4gICAgcGF0Y2hBTkkoKTtcclxuICAgIC8vIFRvb2x0aXAuXHJcbiAgICBpZihhbGVpU2V0dGluZ3MuZW5hYmxlVG9vbHRpcHMpIHtcclxuICAgICAgICBkb1Rvb2x0aXAoKTtcclxuICAgIH1cclxuICAgIGlmIChhbGVpU2V0dGluZ3MuZXh0ZW5kZWRUcmlnZ2Vycykge1xyXG4gICAgICAgIGV4dGVuZFRyaWdnZXJMaXN0KCk7XHJcbiAgICAgICAgRXh0ZW5kZWRUcmlnZ2Vyc0xvYWRlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBwYXRjaFVwZGF0ZUdVSVBhcmFtcygpO1xyXG4gICAgcGF0Y2hUZWFtTGlzdCgpO1xyXG4gICAgaWYoYWxlaVNldHRpbmdzLm9yZGVyZWROYW1pbmcpIHBhdGNoUmFuZG9taXplTmFtZSgpO1xyXG4gICAgcGF0Y2hBbGxvd2VkQ2hhcmFjdGVycygpO1xyXG4gICAgaWYgKGFsZWlTZXR0aW5ncy5ibGFja1RoZW1lKSB7XHJcbiAgICAgICAgYmxhY2tUaGVtZSgpO1xyXG4gICAgfVxyXG4gICAgYWRkUHJvamVjdGlsZU1vZGVscygpO1xyXG4gICAgcGF0Y2hTcGVjaWFsVmFsdWUoKTtcclxuICAgIFVwZGF0ZVRvb2xzKCk7XHJcbiAgICBwYXRjaFBlcmNlbnRhZ2VUb29sKCk7XHJcbiAgICBwYXRjaENvbXBpbGVUcmlnZ2VyKCk7XHJcbiAgICBjcmVhdGVDbGlwYm9hcmREaXYoKTtcclxuICAgIGFkZFBhc3RlRnJvbVBlcm1hbmVudENsaXBib2FyZCgpO1xyXG5cclxuICAgIGlmICghYWxlaVNldHRpbmdzLmV4dGVuZGVkVHJpZ2dlcnMpIHtcclxuICAgICAgICByZWdpc3RlckNsaXBib2FyZEl0ZW1BY3Rpb24oKTtcclxuICAgICAgICBwYXRjaENsaXBib2FyZEZ1bmN0aW9ucygpO1xyXG4gICAgfVxyXG5cclxuICAgIHBhdGNoRHJhd0dyaWQoKTtcclxuICAgIGFkZEZ1bmN0aW9uVG9XaW5kb3coKTtcclxuICAgIGNyZWF0ZUFMRUlTZXR0aW5nc01lbnUoKTtcclxuICAgIHBhdGNoRGVsZXRlU2VsZWN0aW9uKCk7XHJcblxyXG4gICAgaWYoaXNOYXRpdmUpIHtcclxuICAgICAgICBjaGVja0ZvclVwZGF0ZXMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gbG9hZCB0aGlzIG1hcCB0d2ljZSB0byBwYXJzZSBleHRlbmRlZCB0cmlnZ2Vycy5cclxuICAgICAgICBpZihtYXBpZCAhPT0gXCJcIiAmJiBhbGVpU2V0dGluZ3MuZXh0ZW5kZWRUcmlnZ2VycykgTG9hZFRoaXNNYXAoKTtcclxuICAgIH1cclxuICAgIGNoYW5nZVRvcFJpZ2h0VGV4dCgpO1xyXG5cclxuICAgIGFsZWlMb2coREVCVUcyLCBcIlNldHRpbmdzOiBcIiArIEpTT04uc3RyaW5naWZ5KGFsZWlTZXR0aW5ncykpO1xyXG4gICAgQUxFSV9VcGRhdGVOYW1lUmVuZGVyU2V0dGluZyhhbGVpU2V0dGluZ3MucmVuZGVyT2JqZWN0TmFtZXMpO1xyXG5cclxuICAgIGxldCBBTEVfUHJldmlld1F1YWxpdHlTZXQgPSB3aW5kb3cuUHJldmlld1F1YWxpdHlTZXQ7XHJcbiAgICB3aW5kb3cuUHJldmlld1F1YWxpdHlTZXQgPSAodmFsKSA9PiB7XHJcbiAgICAgICAgQUxFX1ByZXZpZXdRdWFsaXR5U2V0KHZhbCk7XHJcbiAgICAgICAgd3JpdGVTdG9yYWdlKFwiQUxFSV9QcmV2aWV3UXVhbGl0eVNldFwiLCB2YWwpO1xyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuUHJldmlld1F1YWxpdHlTZXQoXHJcbiAgICAgICAgcmVhZFN0b3JhZ2UoXHJcbiAgICAgICAgICAgIFwiQUxFSV9QcmV2aWV3UXVhbGl0eVNldFwiLFxyXG4gICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgKHZhbCkgPT4gdmFsID09PSBcInRydWVcIilcclxuICAgICk7XHJcblxyXG4gICAgcGF0Y2hSZW5kZXIoKTtcclxuXHJcbiAgICBOZXdOb3RlKFwiQUxFSTogV2VsY29tZSFcIiwgXCIjNzc3N0ZGXCIpO1xyXG4gICAgTmV3Tm90ZShgRG9uJ3QgZm9yZ2V0IHRvIGpvaW4gZGlzY29yZCBzZXJ2ZXIhIGRpc2NvcmQuZ2cvSzVqY05Fdlo4NWAsIFwiIzc3NzdGRlwiKTtcclxuICAgIGFsZWlMb2coSU5GTywgYFdlbGNvbWUhYCk7XHJcbiAgICBpZihpc05hdGl2ZSkge1xyXG4gICAgICAgIGFsZWlMb2coSU5GTywgYFRhbXBlck1vbmtleSBWZXJzaW9uOiAke0dNX2luZm8udmVyc2lvbn0gQUxFSSBWZXJzaW9uOiAke0dNX2luZm8uc2NyaXB0LnZlcnNpb259YCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBtZXNzYWdlID0gXCJZb3UgYXJlIHJ1bm5pbmcgQUxFSSBub3QgdW5kZXIgdGFtcGVybW9ua2V5LCB0aGlzIGlzIG5vdCBuYXRpdmUgQUxFSSwgcGxlYXNlIGxvYWQgQUxFSSBieSB0YW1wZXJtb25rZXkgd2hlbiBwb3NzaWJsZS5cIjtcclxuICAgICAgICBOZXdOb3RlKGBBTEVJOiAke21lc3NhZ2V9YCwgXCIjRkZGRjAwXCIpO1xyXG4gICAgICAgIE5ld05vdGUoYEFMRUk6IENoZWNrIGh0dHBzOi8vZ2l0aHViLmNvbS9MaXNBQkMvQUxFSSBmb3IgbW9yZSBkZXRhaWxzLmAsIFwiI0ZGRkYwMFwiKTtcclxuICAgICAgICBhbGVpTG9nKElORk8sIG1lc3NhZ2UpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IEFMRV9zdGFydCgpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=