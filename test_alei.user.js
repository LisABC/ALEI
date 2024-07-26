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
    aleiLog(DEBUG, "Patched ServerRequest");
}

main_window.eval = function(code) { // Temporarily overriding eval so we can patch ServerRequest as early as possible
    if (main_window.ServerRequest !== undefined) { // ServerRequest is defined.
        handleServerRequestResponse(null, null, code);
        patchServerRequest();
        // We are pretty much done, we have patched ServerRequest, so just roll with old eval.
        // Oh and a note for myself incase i confuse myself: vanilla ServerRequest is synchronous
        main_window.eval = JS_eval;
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
    patchServerRequest();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixLQUFLO0FBQzdGLHNFQUFzRTtBQUN0RSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixLQUFLO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNB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QUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QywyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLDRCQUE0QjtBQUM1Qiw0QkFBNEI7QUFDNUIsd0NBQXdDO0FBQ3hDLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsWUFBWTtBQUN6QyxnQ0FBZ0Msc0JBQXNCLElBQUksaUJBQWlCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Es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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQSw0QkFBNEIsZUFBZTtBQUMzQyx3QkFBd0IsVUFBVSxHQUFHLFNBQVMsRUFBRSxFQUFFLFFBQVEsVUFBVSxJQUFJLFVBQVUsRUFBRSxFQUFFO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxXQUFNO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixTQUFTLEdBQUcsTUFBTTtBQUM5QztBQUNBLHdCQUF3QixTQUFTLEdBQUcsV0FBVztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUIsMkNBQTJDLG9CQUFvQixzQkFBc0I7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsV0FBTTtBQUNwQixJQUFJLFdBQU07QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsa0NBQWtDO0FBQzVDO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxRQUFRO0FBQ3pDLDBDQUEwQyxRQUFRLHlCQUF5Qix1QkFBdUI7QUFDbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsUUFBUSxXQUFXLHdCQUF3QjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0U7QUFDaEU7QUFDQTtBQUNBLDRCQUE0QixlQUFlO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxXQUFNO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0Msd0JBQXdCLDBCQUEwQjtBQUN4RjtBQUNBO0FBQ0E7QUFDQSxjQUFjLFdBQU07QUFDcEI7QUFDQSxJQUFJLFdBQU07QUFDVjtBQUNBO0FBQ0Esd0JBQXdCLHFCQUFxQjtBQUM3QztBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsaUJBQWlCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLFdBQU07QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxrQkFBa0I7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IscUJBQXFCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxXQUFNO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxXQUFNO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksV0FBTTtBQUNWO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksV0FBTTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksV0FBTTtBQUNWO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLFdBQU07QUFDVjtBQUNBO0FBQ0EsVUFBVTtB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QUNBO0FBQ0EsK0NBQStDLGlCQUFpQixnQkFBZ0IsdUJBQXVCO0FBQ3ZHLE1BQU07QUFDTjtBQUNBLHlCQUF5QixRQUFRO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLGlFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWxlaS8uL3NyYy9zdGF0aWMvYWxlaXN0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYWxlaS8uL3NyYy9zdGF0aWMvdGhlbWVzLmNzcyIsIndlYnBhY2s6Ly9hbGVpLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9hbGVpLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYWxlaS8uL3NyYy9zdGF0aWMvYWxlaXN0eWxlcy5jc3M/NThmOCIsIndlYnBhY2s6Ly9hbGVpLy4vc3JjL3N0YXRpYy90aGVtZXMuY3NzPzlhODUiLCJ3ZWJwYWNrOi8vYWxlaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9hbGVpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9hbGVpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2FsZWkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aEF0dHJpYnV0ZXNBbmROb25jZS5qcyIsIndlYnBhY2s6Ly9hbGVpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYWxlaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2FsZWkvLi9zcmMvYWxlc2NyaXB0LmpzIiwid2VicGFjazovL2FsZWkvLi9zcmMvbG9hZGNzcy5qcyIsIndlYnBhY2s6Ly9hbGVpLy4vc3JjL3JlbmRlcmVyLnVzZXIuanMiLCJ3ZWJwYWNrOi8vYWxlaS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hbGVpL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2FsZWkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FsZWkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hbGVpL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYWxlaS8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuQUxFSV9zZXR0aW5nTWVudVRleHQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NjA4MjtcclxuICAgIGNvbG9yOiAjYmZjYWQ5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uQUxFSV9zZXR0aW5nc01lbnVCdXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2MzU0YTtcclxuICAgIGNvbG9yOiAjYzFjOWQzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzI2MzU0YTtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbn1cclxuXHJcbi5BTEVJX3NldHRpbmdzTWVudUJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTk2YTgzO1xyXG4gICAgY29sb3I6ICNmNWZhZmY7XHJcbn1cclxuXHJcbi5BTEVJX3NldHRpbmdNZW51QnV0dG9uQ2xpY2tlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTFhNWMxO1xyXG4gICAgY29sb3I6ICNmYmZiZmI7XHJcbn1cclxuXHJcbiNBTEVJX3Rvb2x0aXAge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgIGNvbG9yOiAjZWVlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxMDBweDtcclxuICAgIHRvcDogLTEwMHB4O1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3RhdGljL2FsZWlzdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5BTEVJX3NldHRpbmdNZW51VGV4dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NzYwODI7XFxyXFxuICAgIGNvbG9yOiAjYmZjYWQ5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uQUxFSV9zZXR0aW5nc01lbnVCdXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYzNTRhO1xcclxcbiAgICBjb2xvcjogI2MxYzlkMztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjYzNTRhO1xcclxcbiAgICB3aWR0aDogODBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLkFMRUlfc2V0dGluZ3NNZW51QnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU5NmE4MztcXHJcXG4gICAgY29sb3I6ICNmNWZhZmY7XFxyXFxufVxcclxcblxcclxcbi5BTEVJX3NldHRpbmdNZW51QnV0dG9uQ2xpY2tlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MWE1YzE7XFxyXFxuICAgIGNvbG9yOiAjZmJmYmZiO1xcclxcbn1cXHJcXG5cXHJcXG4jQUxFSV90b29sdGlwIHtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcclxcbiAgICBjb2xvcjogI2VlZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiAxMDBweDtcXHJcXG4gICAgdG9wOiAtMTAwcHg7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogY3NzIHZhcmlhYmxlcyBnbyBpbiB0aGVzZS4gKi9cclxuXHJcbjpyb290LCAuYmx1ZVRoZW1lIHtcclxuICAgIC0td2FybmluZy1nby1hd2F5LXBsczogMDtcclxufVxyXG5cclxuLmRhcmtUaGVtZSwgLnB1cnBsZVRoZW1lLCAuZ3JlZW5UaGVtZSB7XHJcbiAgICAtLXdhcm5pbmctZ28tYXdheS1wbHM6IDA7XHJcbn1cclxuXHJcbi8qdGhpcyBpcyB1bnVzZWQgY3V6IHRoZW1lIGNoYW5naW5nIG5lZWRzIHRvIGJlIHJld29ya2VkIGZpcnN0Ki9cclxuLmFsZWlkYXJrVGhlbWUge1xyXG4gICAgLS13YXJuaW5nLWdvLWF3YXktcGxzOiAwO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3RhdGljL3RoZW1lcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsK0JBQStCOztBQUUvQjtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQSwrREFBK0Q7QUFDL0Q7SUFDSSx3QkFBd0I7QUFDNUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogY3NzIHZhcmlhYmxlcyBnbyBpbiB0aGVzZS4gKi9cXHJcXG5cXHJcXG46cm9vdCwgLmJsdWVUaGVtZSB7XFxyXFxuICAgIC0td2FybmluZy1nby1hd2F5LXBsczogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmRhcmtUaGVtZSwgLnB1cnBsZVRoZW1lLCAuZ3JlZW5UaGVtZSB7XFxyXFxuICAgIC0td2FybmluZy1nby1hd2F5LXBsczogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyp0aGlzIGlzIHVudXNlZCBjdXogdGhlbWUgY2hhbmdpbmcgbmVlZHMgdG8gYmUgcmV3b3JrZWQgZmlyc3QqL1xcclxcbi5hbGVpZGFya1RoZW1lIHtcXHJcXG4gICAgLS13YXJuaW5nLWdvLWF3YXktcGxzOiAwO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRoQXR0cmlidXRlc0FuZE5vbmNlLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FsZWlzdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHtcImF0dHJpYnV0ZXNcIjp7XCJ0aXRsZVwiOlwic3R5bGUtZnJvbS13ZWJwYWNrXCJ9fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FsZWlzdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhBdHRyaWJ1dGVzQW5kTm9uY2UuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGhlbWVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7XCJhdHRyaWJ1dGVzXCI6e1widGl0bGVcIjpcInN0eWxlLWZyb20td2VicGFja1wifX07XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90aGVtZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCwgYXR0cmlidXRlcykge1xuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gaXNOdW1iZXIoc3RyKSB7XHJcbiAgICBsZXQgbnVtYmVyID0gMDtcclxuXHJcbiAgICBpZiAoKCFpc05hTihOdW1iZXIoc3RyKSkgJiYgc3RyICE9PSBcIiBcIikgfHwgc3RyID09IFwiLlwiKSB7XHJcbiAgICAgICAgbnVtYmVyID0gMTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVtYmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc09wZXJhdG9yKHN0cikge1xyXG4gICAgcmV0dXJuIFwiKy0qLyVeU0NBTlJGXCIuaW5jbHVkZXMoc3RyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNHcm91cChzdHIpIHtcclxuICAgIHJldHVybiBcIigpXCIuaW5jbHVkZXMoc3RyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3BsaXQoc3RyKSB7XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2VBbGwoXCIgXCIsIFwiXCIpLnNwbGl0KFwiXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb25jYXROdW1iZXJzKHN0cikge1xyXG4gICAgbGV0IG51bSA9IFwiXCI7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoaXNOdW1iZXIoc3RyW2ldKSkge1xyXG4gICAgICAgICAgICBudW0gKz0gc3RyW2ldO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobnVtLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICAgIHN0ci5zcGxpY2UoaSAtIG51bS5sZW5ndGgsIG51bS5sZW5ndGgsIG51bSk7XHJcbiAgICAgICAgICAgIGkgLT0gKG51bS5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgbnVtID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG51bS5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgIHN0ci5zcGxpY2Uoc3RyLmxlbmd0aCAtIG51bS5sZW5ndGgsIG51bS5sZW5ndGgsIG51bSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRUb09iamVjdHMoc3RyKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHN0cltpXSA9IHtcclxuICAgICAgICAgICAgY2hyOiBzdHJbaV1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUdyb3VwT3JkZXJzKHN0cikge1xyXG4gICAgbGV0IG9yZGVyID0gMTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChzdHJbaV0uY2hyID09IFwiKFwiKSB7XHJcbiAgICAgICAgICAgIG9yZGVyKys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc3RyW2ldLmNociA9PSBcIilcIikge1xyXG4gICAgICAgICAgICBvcmRlci0tO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RyW2ldLmdyb3VwT3JkZXIgPSBvcmRlcjtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlR3JvdXBDaGFycyhzdHIpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGlzR3JvdXAoc3RyW2ldLmNocikpIHtcclxuICAgICAgICAgICAgc3RyLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gb3BlcmF0b3JPcmRlcihzdHIpIHtcclxuICAgIGxldCBvcmRlciA9IDA7XHJcblxyXG4gICAgaWYgKFwiKy1cIi5pbmNsdWRlcyhzdHIpKSB7XHJcbiAgICAgICAgb3JkZXIgPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChcIiovJVwiLmluY2x1ZGVzKHN0cikpIHtcclxuICAgICAgICBvcmRlciA9IDI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFwiXlNDQU5SRlwiLmluY2x1ZGVzKHN0cikpIHtcclxuICAgICAgICBvcmRlciA9IDM7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG9yZGVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVPcGVyYXRvck9yZGVycyhzdHIpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGlzT3BlcmF0b3Ioc3RyW2ldLmNocikpIHtcclxuICAgICAgICAgICAgbGV0IG9yZGVyID0gb3BlcmF0b3JPcmRlcihzdHJbaV0uY2hyKTtcclxuXHJcbiAgICAgICAgICAgIHN0cltpXS5vcGVyYXRvck9yZGVyID0gb3JkZXI7XHJcblxyXG4gICAgICAgICAgICBpZiAoc3RyW2kgKyAxXS5ncm91cE9yZGVyID09IHN0cltpXS5ncm91cE9yZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBzdHJbaSArIDFdLm9wZXJhdG9yT3JkZXIgPSBvcmRlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFzdHJbaSAtIDFdLm9wZXJhdG9yT3JkZXIgfHwgKHN0cltpIC0gMV0ub3BlcmF0b3JPcmRlciA8IHN0cltpXS5vcGVyYXRvck9yZGVyICYmIHN0cltpIC0gMV0uZ3JvdXBPcmRlciA9PSBzdHJbaV0uZ3JvdXBPcmRlcikpIHtcclxuICAgICAgICAgICAgICAgIHN0cltpIC0gMV0ub3BlcmF0b3JPcmRlciA9IG9yZGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVPcmRlcnMoc3RyKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHN0cltpXS5vcmRlciA9IHN0cltpXS5ncm91cE9yZGVyICogMTAgKyBzdHJbaV0ub3BlcmF0b3JPcmRlcjtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0T3JkZXJzKHN0cikge1xyXG4gICAgbGV0IG9yZGVycyA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgb3JkZXJzLnB1c2goc3RyW2ldLm9yZGVyKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gb3JkZXJzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaW1wbGlmeU9yZGVycyhvcmRlcnMpIHtcclxuICAgIGxldCBhcnIgPSBbXTtcclxuICAgIGxldCBvcmRlciA9IDE7XHJcblxyXG4gICAgb3JkZXJzLnNvcnQoKHgsIHkpID0+IHtcclxuICAgICAgICByZXR1cm4geSAtIHg7XHJcbiAgICB9KTtcclxuXHJcbiAgICBhcnIucHVzaCh7XHJcbiAgICAgICAgZnJvbTogb3JkZXJzWzBdLFxyXG4gICAgICAgIHRvOiBvcmRlclxyXG4gICAgfSk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBvcmRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAob3JkZXJzW2ldICE9IG9yZGVyc1tpIC0gMV0pIHtcclxuICAgICAgICAgICAgb3JkZXIrKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFyci5wdXNoKHtcclxuICAgICAgICAgICAgZnJvbTogb3JkZXJzW2ldLFxyXG4gICAgICAgICAgICB0bzogb3JkZXJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXJyO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXBsYWNlT3JkZXJzKHN0cikge1xyXG4gICAgbGV0IG9yZGVycyA9IGdldE9yZGVycyhzdHIpO1xyXG4gICAgbGV0IGFyciA9IHNpbXBsaWZ5T3JkZXJzKG9yZGVycyk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFyci5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBpZiAoc3RyW2ldLm9yZGVyID09IGFycltqXS5mcm9tKSB7XHJcbiAgICAgICAgICAgICAgICBzdHJbaV0ub3JkZXIgPSBhcnJbal0udG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbGMoeCwgeSwgeikge1xyXG4gICAgbGV0IHJlc3VsdDtcclxuXHJcbiAgICB4ID0gTnVtYmVyKHgpO1xyXG4gICAgeiA9IE51bWJlcih6KTtcclxuXHJcbiAgICBpZiAoeSA9PSBcIitcIikge1xyXG4gICAgICAgIHJlc3VsdCA9IHggKyB6O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh5ID09IFwiLVwiKSB7XHJcbiAgICAgICAgcmVzdWx0ID0geCAtIHo7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHkgPT0gXCIqXCIpIHtcclxuICAgICAgICByZXN1bHQgPSB4ICogejtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoeSA9PSBcIi9cIikge1xyXG4gICAgICAgIHJlc3VsdCA9IHggLyB6O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh5ID09IFwiJVwiKSB7XHJcbiAgICAgICAgcmVzdWx0ID0geCAlIHo7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHkgPT0gXCJeXCIpIHtcclxuICAgICAgICByZXN1bHQgPSB4ICoqIHo7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHkgPT0gXCJTXCIpIHtcclxuICAgICAgICByZXN1bHQgPSBNYXRoLnNpbih4KSAqIHo7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHkgPT0gXCJDXCIpIHtcclxuICAgICAgICByZXN1bHQgPSBNYXRoLmNvcyh4KSAqIHo7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHkgPT0gXCJBXCIpIHtcclxuICAgICAgICByZXN1bHQgPSBNYXRoLmF0YW4yKHgsIHopO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh5ID09IFwiTlwiKSB7XHJcbiAgICAgICAgaWYgKHopIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogeCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gTWF0aC5yYW5kb20oKSAqIHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh5ID09IFwiUlwiKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gTWF0aC5yb3VuZCh4IC8geikgKiB6O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh5ID09IFwiRlwiKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gTWF0aC5mbG9vcih4IC8geikgKiB6O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE1heE9yZGVyKHN0cikge1xyXG4gICAgbGV0IG9yZGVyID0gMDtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChzdHJbaV0ub3JkZXIgPiBvcmRlcikge1xyXG4gICAgICAgICAgICBvcmRlciA9IHN0cltpXS5vcmRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG9yZGVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBleGVjKHN0cikge1xyXG4gICAgbGV0IG1heE9yZGVyID0gZ2V0TWF4T3JkZXIoc3RyKTtcclxuXHJcbiAgICBmb3IgKGxldCBvcmRlciA9IDE7IG9yZGVyIDw9IG1heE9yZGVyOyBvcmRlcisrKSB7XHJcbiAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgIGxldCBsb29wID0gMTtcclxuXHJcbiAgICAgICAgd2hpbGUgKGxvb3ApIHtcclxuICAgICAgICAgICAgbG9vcCA9IDA7XHJcblxyXG4gICAgICAgICAgICBsZXQgbmV3c3RyID0gW107XHJcbiAgICAgICAgICAgIGxldCBsZW5ndGg7XHJcbiAgICAgICAgICAgIGxldCBzYXZlT3JkZXI7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IC0xO1xyXG5cclxuICAgICAgICAgICAgZm9yICg7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdHJbaV0ub3JkZXIgPT0gb3JkZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdzdHIucHVzaChzdHJbaV0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3c3RyLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9vcCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxlbmd0aCA9IG5ld3N0ci5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICBpZiAobGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAobmV3c3RyLmxlbmd0aCAhPSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3c3RyLnNwbGljZSgwLCAzLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNocjogY2FsYyhuZXdzdHJbMF0uY2hyLCBuZXdzdHJbMV0uY2hyLCBuZXdzdHJbMl0uY2hyKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHNhdmVPcmRlciA9IHN0cltpbmRleF0ub3JkZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgc3RyLnNwbGljZShpbmRleCwgbGVuZ3RoLCBuZXdzdHJbMF0pO1xyXG4gICAgICAgICAgICAgICAgaSAtPSAobGVuZ3RoIC0gMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc3RyW2luZGV4XSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBjaHI6IHN0cltpbmRleF0uY2hyLFxyXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyOiBzYXZlT3JkZXIgKyAxXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlcGxhY2Uoc3RyLCBhcnIpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhcnIubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgaWYgKHN0cltpXSA9PSBhcnJbal0uZnJvbSkge1xyXG4gICAgICAgICAgICAgICAgc3RyW2ldID0gYXJyW2pdLnRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBuZWdhdGl2ZU51bWJlcnMoc3RyKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChzdHJbaV0gPT0gXCItXCIgJiYgc3RyW2kgLSAxXSA9PSBcIihcIikge1xyXG4gICAgICAgICAgICBzdHIuc3BsaWNlKGksIDAsIFwiMFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpbXBsZUdyb3VwcyhzdHIpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHN0cltpIC0gMV0gPT0gXCIoXCIgJiYgc3RyW2kgKyAxXSA9PSBcIilcIikge1xyXG4gICAgICAgICAgICBzdHIuc3BsaWNlKGksIDAsIFwiMFwiLCBcIitcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2Uoc3RyLCB2YXJzKSB7XHJcbiAgICBpZiAoc3RyID09IFwiXCIpIHtcclxuICAgICAgICBzdHIgPSBcIjBcIjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc3RyWzBdID09IFwiLVwiKSB7XHJcbiAgICAgICAgc3RyID0gXCIwXCIgKyBzdHI7XHJcbiAgICB9XHJcblxyXG4gICAgc3RyID0gc3BsaXQoc3RyKTtcclxuICAgIGNvbmNhdE51bWJlcnMoc3RyKTtcclxuXHJcbiAgICByZXBsYWNlKHN0ciwgW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZnJvbTogXCJwXCIsXHJcbiAgICAgICAgICAgIHRvOiBTdHJpbmcoTWF0aC5QSSlcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZyb206IFwieFwiLFxyXG4gICAgICAgICAgICB0bzogU3RyaW5nKHZhcnNbMF0pXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmcm9tOiBcInlcIixcclxuICAgICAgICAgICAgdG86IFN0cmluZyh2YXJzWzFdKVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZnJvbTogXCJ3XCIsXHJcbiAgICAgICAgICAgIHRvOiBTdHJpbmcodmFyc1syXSlcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZyb206IFwiaFwiLFxyXG4gICAgICAgICAgICB0bzogU3RyaW5nKHZhcnNbM10pXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmcm9tOiBcImlcIixcclxuICAgICAgICAgICAgdG86IFN0cmluZyh2YXJzWzRdKVxyXG4gICAgICAgIH1cclxuICAgIF0pO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbmVnYXRpdmVOdW1iZXJzKHN0cik7XHJcbiAgICAgICAgc2ltcGxlR3JvdXBzKHN0cik7XHJcbiAgICAgICAgY29udmVydFRvT2JqZWN0cyhzdHIpO1xyXG4gICAgICAgIGNyZWF0ZUdyb3VwT3JkZXJzKHN0cik7XHJcbiAgICAgICAgcmVtb3ZlR3JvdXBDaGFycyhzdHIpO1xyXG4gICAgICAgIGNyZWF0ZU9wZXJhdG9yT3JkZXJzKHN0cik7XHJcbiAgICAgICAgY3JlYXRlT3JkZXJzKHN0cik7XHJcbiAgICAgICAgcmVwbGFjZU9yZGVycyhzdHIpO1xyXG4gICAgICAgIGV4ZWMoc3RyKTtcclxuICAgIH0gY2F0Y2gge1xyXG4gICAgICAgIHJldHVybiBcImVycm9yXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIE51bWJlcihOdW1iZXIoc3RyWzBdLmNocikudG9GaXhlZCgxMCkpO1xyXG59IiwiaW1wb3J0IFwiLi9zdGF0aWMvYWxlaXN0eWxlcy5jc3NcIjtcclxuaW1wb3J0IFwiLi9zdGF0aWMvdGhlbWVzLmNzc1wiO1xyXG5cclxuLypcclxuZm9yIHNvbWUgcmVhc29uIHRoZSB2YW5pbGxhIFRoZW1lU2V0IGZ1bmN0aW9uIGRvZXMgdGhpczpcclxuXCJcclxuZm9yICh2YXIgaSA9IDE7IGkgPCBkb2N1bWVudC5zdHlsZVNoZWV0cy5sZW5ndGggLSAxOyBpKyspXHJcbiAgICBkb2N1bWVudC5zdHlsZVNoZWV0c1tpXS5kaXNhYmxlZCA9IHRydWU7XHJcblwiXHJcbkkgaGF2ZSBubyBpZGVhIHdoeSB0aGF0IGV4aXN0cyBidXQgaXQgYnJlYWtzIHdlYnBhY2sncyBzdHlsZXNoZWV0cyBiZWNhdXNlIHRoZXkgZ2V0IGRpc2FibGVkLlxyXG5maXhXZWJwYWNrU3R5bGVTaGVldHMgZml4ZXMgdGhhdC5cclxuKi9cclxuXHJcbmNvbnN0IHdlYnBhY2tTdHlsZXNoZWV0TmFtZSA9IFwic3R5bGUtZnJvbS13ZWJwYWNrXCI7XHJcblxyXG5jb25zdCB0aGVtZXMgPSB7XHJcbiAgICAwOiBcImJsdWVUaGVtZVwiLFxyXG4gICAgMTogXCJkYXJrVGhlbWVcIixcclxuICAgIDI6IFwicHVycGxlVGhlbWVcIixcclxuICAgIDM6IFwiZ3JlZW5UaGVtZVwiLFxyXG4gICAgNDogXCJhbGVpZGFya1RoZW1lXCIsXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXRjaFRoZW1lU2V0KCkge1xyXG4gICAgY29uc3Qgb3JpZ1RoZW1lU2V0ID0gdW5zYWZlV2luZG93LlRoZW1lU2V0O1xyXG5cclxuICAgIGRlYnVnZ2VyO1xyXG5cclxuICAgIHVuc2FmZVdpbmRvdy5UaGVtZVNldCA9IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgY29uc3Qgb2xkVGhlbWUgPSB0aGVtZXNbVEhFTUVdO1xyXG4gICAgICAgIGNvbnN0IG5ld1RoZW1lID0gdGhlbWVzW3ZhbHVlXTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUob2xkVGhlbWUpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChuZXdUaGVtZSk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImNoYW5nZWQgdGhlbWU6IFwiICsgb2xkVGhlbWUgKyBcIiAtPiBcIiArIG5ld1RoZW1lKTtcclxuXHJcbiAgICAgICAgb3JpZ1RoZW1lU2V0KHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpeFdlYnBhY2tTdHlsZVNoZWV0cygpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZG9jdW1lbnQuc3R5bGVTaGVldHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoZG9jdW1lbnQuc3R5bGVTaGVldHNbaV0udGl0bGUgPT0gd2VicGFja1N0eWxlc2hlZXROYW1lKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnN0eWxlU2hlZXRzW2ldLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZml4QnVsbHNoaXRJblRoZW1lU2V0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpeEJ1bGxzaGl0SW5UaGVtZVNldCgpIHtcclxuICAgIGxldCBvbGRDb2RlU25pcHBldCA9IFwiZG9jdW1lbnQuc3R5bGVTaGVldHNbIGkgXS5kaXNhYmxlZCA9IFxcbnRydWU7XCI7XHJcbiAgICBsZXQgbmV3Q29kZVNuaXBwZXQgPSBgaWYgKGRvY3VtZW50LnN0eWxlU2hlZXRzW2ldLnRpdGxlICE9IFwiJHt3ZWJwYWNrU3R5bGVzaGVldE5hbWV9XCIpIHsgYCArIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkb2N1bWVudC5zdHlsZVNoZWV0c1tpXS5kaXNhYmxlZCA9IHRydWU7IFwiICsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcIn1cIjtcclxuICAgIGxldCBjb2RlID0gdW5zYWZlV2luZG93LlRoZW1lU2V0LnRvU3RyaW5nKCkucmVwbGFjZShvbGRDb2RlU25pcHBldCwgbmV3Q29kZVNuaXBwZXQpO1xyXG4gICAgY29kZSA9IFwiKFwiICsgY29kZSArIFwiKVwiO1xyXG4gICAgdW5zYWZlV2luZG93LlRoZW1lU2V0ID0gZXZhbChjb2RlKTtcclxufSIsIi8vID09VXNlclNjcmlwdD09XHJcbi8vIEBuYW1lICAgICAgICAgQUxFSSBSZW5kZXJlclxyXG4vLyBAbmFtZXNwYWNlICAgIGh0dHA6Ly90YW1wZXJtb25rZXkubmV0L1xyXG4vLyBAdmVyc2lvbiAgICAgIDUuMFxyXG4vLyBAZGVzY3JpcHRpb24gIHRyeSB0byB0YWtlIG92ZXIgdGhlIHdvcmxkIVxyXG4vLyBAYXV0aG9yICAgICAgIExpc2FuZHJhXHJcbi8vIEBtYXRjaCAgICAgICAgKjovLyoucGxhem1hYnVyc3QyLmNvbS9sZXZlbF9lZGl0b3IvbWFwX2VkaXQucGhwKlxyXG4vLyBAaWNvbiAgICAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9MaXNBQkMvQUxFSS9ibG9iL21haW4vaWNvbi5wbmc/cmF3PXRydWVcclxuLy8gQHJ1bi1hdCAgICAgICBkb2N1bWVudC1zdGFydFxyXG4vLyA9PS9Vc2VyU2NyaXB0PT1cclxuXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxubGV0IHdpbmRvdyA9IHVuc2FmZVdpbmRvdztcclxuXHJcbi8vIFZhcmlhYmxlcyB0aGF0IFJlbmRlcmVyIGFjdGl2ZWx5IHVzZXMuXHJcbmxldCBkZWNvclJlcXVlc3RzT25Qcm9ncmVzcyA9IFtdO1xyXG5sZXQgYmFja2dyb3VuZFJlcXVlc3RzT25Qcm9ncmVzcyA9IFtdO1xyXG5sZXQgYm94TW9kZWxJbWFnZXMgPSB7fTtcclxubGV0IGFsZWlSdW5uaW5nID0gZmFsc2U7XHJcbmxldCBoYXZlRm9yY2VkUmVjYWxjdWxhdGlvbiA9IGZhbHNlO1xyXG4vLyBTdGF0aXN0aWMgcHVycG9zZXMuXHJcbmxldCBkaXNwbGF5RlBTID0gMDtcclxubGV0IGZwc0FjY3VtdWxhdG9yID0gMDtcclxubGV0IHRvdGFsUmVuZGVyZWRPYmplY3RzID0gMDtcclxubGV0IGxhc3RUaW1lID0gMDtcclxuXHJcbi8vIERyYXdpbmcgZnVuY3Rpb25zLlxyXG5sZXQgZHJhd19yZWN0O1xyXG5sZXQgZHJhd19yZWN0X2VkZ2VzO1xyXG5sZXQgZHJhd19ncmlkbGluZXM7XHJcbmxldCBkcmF3X2ltYWdlO1xyXG5cclxuLy8gQ29udGV4dCwgZ3JpZCwgY2FudmFzXHJcbmxldCBjdHg7XHJcbmxldCBjYW52YXNIZWlnaHQ7XHJcbmxldCBjYW52YXNXaWR0aDtcclxubGV0IGdyaWRPcGFjaXR5O1xyXG5cclxuLy8gTW91c2UuXHJcbmxldCBtQ2xpY2tYO1xyXG5sZXQgbUNsaWNrWTtcclxubGV0IG1DdXJyZW50WDtcclxubGV0IG1DdXJyZW50WTtcclxuXHJcbi8vIFdvcmxkIGFuZCBTY3JlZW4gY29udmVyc2lvbiBmdW5jdGlvbnNcclxubGV0IHcyc194O1xyXG5sZXQgdzJzX3k7XHJcbmxldCBzMndfeDtcclxubGV0IHMyd195O1xyXG5sZXQgdzJzX2g7XHJcbmxldCB3MnNfdztcclxubGV0IHMyd19oO1xyXG5sZXQgczJ3X3c7XHJcblxyXG4vLyBGb3IgUHJldmlldyBtb2RlLlxyXG5sZXQgcHJldmlld0JhY2tncm91bmQgPSBcIjFcIjtcclxuXHJcbi8vIFNldHRpbmdzLCB0aGVtZXMuXHJcbmZ1bmN0aW9uIF9yZWFkU3RvcmFnZShrZXlfLCBkZWZhdWx0VmFsdWUsIGZ1bmMpIHtcclxuICAgIGxldCBrZXkgPSBgQUxFSV9SZW5kZXJlcl8ke2tleV99YDtcclxuICAgIGxldCB2YWwgPSBsb2NhbFN0b3JhZ2Vba2V5XTtcclxuICAgIGlmICh2YWwgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcclxuICAgIHJldHVybiBmdW5jKGxvY2FsU3RvcmFnZVtrZXldKVxyXG59XHJcblxyXG5sZXQgdG9nZ2xlcyA9IHtcclxuICAgIGNhcnRvb25pc2hFZGdlcyAgICAgIDogX3JlYWRTdG9yYWdlKFwiQ2FydG9vbmlzaEVkZ2VzXCIgICAgICAsIGZhbHNlLCAodmFsKSA9PiB2YWwgPT09IFwidHJ1ZVwiKSxcclxuICAgIG9yaWdpbmFsU2VsZWN0T3ZlcmxheTogX3JlYWRTdG9yYWdlKFwiT3JpZ2luYWxTZWxlY3RPdmVybGF5XCIsIGZhbHNlLCAodmFsKSA9PiB2YWwgPT09IFwidHJ1ZVwiKSxcclxuICAgIGJveFJlbmRlcmluZyAgICAgICAgIDogX3JlYWRTdG9yYWdlKFwiUHJldmlld1dhbGxzXCIgICAgICAgICAsIGZhbHNlLCAodmFsKSA9PiB2YWwgPT09IFwidHJ1ZVwiKVxyXG59XHJcbmxldCB0aGVtZXMgPSB7XHJcbiAgICAwOiB7IC8vIFRIRU1FX0JMVUVcclxuICAgICAgICAvLyBHcmlkIGNvbG9ycy5cclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzU4ODBBQlwiLFxyXG4gICAgICAgIGdyaWRDb2xvcjogXCIjRkZGRkZGXCIsXHJcbiAgICAgICAgLy8gT2JqZWN0IHNlbGVjdCBjb2xvcnMuXHJcbiAgICAgICAgc2VsZWN0T3V0bGluZUNvbG9yOiBcIiNBNUE1MDBcIixcclxuICAgICAgICBzZWxlY3RFZGdlT3BhY2l0eUZhY3RvcjogMSxcclxuICAgICAgICBzZWxlY3RUZXh0Q29sb3I6IFwiI0ZGMFwiLFxyXG4gICAgICAgIC8vIFNlbGVjdGlvbiBhcmVhIGNvbG9ycy5cclxuICAgICAgICBzZWxlY3Rpb25Db2xvcjogXCIjRkZGXCIsXHJcbiAgICAgICAgc2VsZWN0aW9uQ3RybENvbG9yOiBcIiNBRkFcIixcclxuICAgICAgICBzZWxlY3Rpb25BbHRDb2xvcjogXCIjRkFBXCIsXHJcbiAgICAgICAgc2VsZWN0aW9uT3BhY2l0eTogMC4xLCAvLyBOb3RlIHRoYXQgdGhpcyBhbmQgYmVsb3cgaXMgTk9UIG9wYWNpdHkgRkFDVE9SXHJcbiAgICAgICAgc2VsZWN0aW9uRWRnZU9wYWNpdHk6IDAuOCxcclxuICAgICAgICAvLyBIaWdobGlnaHRlZCBvYmplY3QgZWRnZSBjb2xvci4gKFdoZW4gaW5jbHVkZWQgaW4gc2VsZWN0aW9uIGFyZWEpXHJcbiAgICAgICAgaGlnaExpZ2h0ZWRPYmpFZGdlQ29sb3I6IHdpbmRvdy5zZWxncmQzLCAvLyBOT1RFOiAjRkZGRjAwIHNlZW1zIG5pY2UuIEJyaWdodCBidXQgaXQgaXMgY2xlYXJseSBub3RpY2VhYmxlLlxyXG4gICAgICAgIGhpZ2hMaWdodGVkT2JqRWRnZU9wYWNpdHk6IDEsXHJcbiAgICAgICAgLy8gT2JqZWN0IGNvbm5lY3Rpb24gbGluZS5cclxuICAgICAgICBvYmplY3RDb25uZWN0aW9uRGFzaDogWzQsIDRdLFxyXG4gICAgICAgIG9iamVjdENvbm5lY3Rpb25Ub0NvbG9yOiBcIiM2NmZmNjZcIixcclxuICAgICAgICBvYmplY3RDb25uZWN0aW9uRnJvbUNvbG9yOiBcIiNmZmZmZmZcIixcclxuICAgICAgICBvYmplY3RDb25uZWN0aW9uT3BhY2l0eUZhY3RvcjogMSAvLyBUT0RPOiBTaG91bGQgdGhpcyBqdXN0IGJlIFwib3BhY2l0eVwiIGFuZCBub3QgXCJvcGFjaXR5IGZhY3RvclwiP1xyXG5cclxuICAgIH0sXHJcbiAgICAxOiB7IC8vIFRIRU1FX0RBUktcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzIyMjIyMlwiLFxyXG4gICAgICAgIGdyaWRDb2xvcjogXCIjODg4ODg4XCIsXHJcbiAgICAgICAgc2VsZWN0T3V0bGluZUNvbG9yOiBcIiNGRkZGMDBcIixcclxuICAgICAgICBzZWxlY3RFZGdlT3BhY2l0eUZhY3RvcjogMSxcclxuICAgICAgICBzZWxlY3RUZXh0Q29sb3I6IFwiI0ZGMFwiLFxyXG4gICAgICAgIHNlbGVjdGlvbkNvbG9yOiBcIiNGRkZcIixcclxuICAgICAgICBzZWxlY3Rpb25DdHJsQ29sb3I6IFwiI0FGQVwiLFxyXG4gICAgICAgIHNlbGVjdGlvbkFsdENvbG9yOiBcIiNGQUFcIixcclxuICAgICAgICBzZWxlY3Rpb25PcGFjaXR5OiAwLjEsXHJcbiAgICAgICAgc2VsZWN0aW9uRWRnZU9wYWNpdHk6IDAuOCxcclxuICAgICAgICBoaWdoTGlnaHRlZE9iakVkZ2VDb2xvcjogd2luZG93LnNlbGdyZDMsXHJcbiAgICAgICAgaGlnaExpZ2h0ZWRPYmpFZGdlT3BhY2l0eTogMSxcclxuICAgICAgICBvYmplY3RDb25uZWN0aW9uRGFzaDogWzQsIDRdLFxyXG4gICAgICAgIG9iamVjdENvbm5lY3Rpb25Ub0NvbG9yOiBcIiM2NmZmNjZcIixcclxuICAgICAgICBvYmplY3RDb25uZWN0aW9uRnJvbUNvbG9yOiBcIiNmZmZmZmZcIixcclxuICAgICAgICBvYmplY3RDb25uZWN0aW9uT3BhY2l0eUZhY3RvcjogMVxyXG4gICAgfSxcclxuICAgIDI6IHsgLy8gVEhFTUVfR1JFRU5cclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzIyMjIyMlwiLFxyXG4gICAgICAgIGdyaWRDb2xvcjogXCIjRkZGRkZGXCIsXHJcbiAgICAgICAgc2VsZWN0T3V0bGluZUNvbG9yOiBcIiNGRkZGMDBcIixcclxuICAgICAgICBzZWxlY3RFZGdlT3BhY2l0eUZhY3RvcjogMSxcclxuICAgICAgICBzZWxlY3RUZXh0Q29sb3I6IFwiI0ZGMFwiLFxyXG4gICAgICAgIHNlbGVjdGlvbkNvbG9yOiBcIiNGRkZcIixcclxuICAgICAgICBzZWxlY3Rpb25DdHJsQ29sb3I6IFwiI0FGQVwiLFxyXG4gICAgICAgIHNlbGVjdGlvbkFsdENvbG9yOiBcIiNGQUFcIixcclxuICAgICAgICBzZWxlY3Rpb25PcGFjaXR5OiAwLjEsXHJcbiAgICAgICAgc2VsZWN0aW9uRWRnZU9wYWNpdHk6IDAuOCxcclxuICAgICAgICBoaWdoTGlnaHRlZE9iakVkZ2VDb2xvcjogd2luZG93LnNlbGdyZDMsXHJcbiAgICAgICAgaGlnaExpZ2h0ZWRPYmpFZGdlT3BhY2l0eTogMSxcclxuICAgICAgICBvYmplY3RDb25uZWN0aW9uRGFzaDogWzQsIDRdLFxyXG4gICAgICAgIG9iamVjdENvbm5lY3Rpb25Ub0NvbG9yOiBcIiM2NmZmNjZcIixcclxuICAgICAgICBvYmplY3RDb25uZWN0aW9uRnJvbUNvbG9yOiBcIiNmZmZmZmZcIixcclxuICAgICAgICBvYmplY3RDb25uZWN0aW9uT3BhY2l0eUZhY3RvcjogMVxyXG4gICAgfSxcclxuICAgIDM6IHsgLy8gVEhFTUVfUFVSUExFXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMyMjIyMjJcIixcclxuICAgICAgICBncmlkQ29sb3I6IFwiI0ZGRkZGRlwiLFxyXG4gICAgICAgIHNlbGVjdE91dGxpbmVDb2xvcjogXCIjRkZGRjAwXCIsXHJcbiAgICAgICAgc2VsZWN0RWRnZU9wYWNpdHlGYWN0b3I6IDEsXHJcbiAgICAgICAgc2VsZWN0VGV4dENvbG9yOiBcIiNGRjBcIixcclxuICAgICAgICBzZWxlY3Rpb25Db2xvcjogXCIjRkZGXCIsXHJcbiAgICAgICAgc2VsZWN0aW9uQ3RybENvbG9yOiBcIiNBRkFcIixcclxuICAgICAgICBzZWxlY3Rpb25BbHRDb2xvcjogXCIjRkFBXCIsXHJcbiAgICAgICAgc2VsZWN0aW9uT3BhY2l0eTogMC4xLFxyXG4gICAgICAgIHNlbGVjdGlvbkVkZ2VPcGFjaXR5OiAwLjgsXHJcbiAgICAgICAgaGlnaExpZ2h0ZWRPYmpFZGdlQ29sb3I6IHdpbmRvdy5zZWxncmQzLFxyXG4gICAgICAgIGhpZ2hMaWdodGVkT2JqRWRnZU9wYWNpdHk6IDEsXHJcbiAgICAgICAgb2JqZWN0Q29ubmVjdGlvbkRhc2g6IFs0LCA0XSxcclxuICAgICAgICBvYmplY3RDb25uZWN0aW9uVG9Db2xvcjogXCIjNjZmZjY2XCIsXHJcbiAgICAgICAgb2JqZWN0Q29ubmVjdGlvbkZyb21Db2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgb2JqZWN0Q29ubmVjdGlvbk9wYWNpdHlGYWN0b3I6IDFcclxuICAgIH0sXHJcbiAgICA0OiB7IC8vIEFMRUkgQmxhY2sgVGhlbWVcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzIyMjIyMlwiLFxyXG4gICAgICAgIGdyaWRDb2xvcjogXCIjRkZGRkZGXCIsXHJcbiAgICAgICAgc2VsZWN0T3V0bGluZUNvbG9yOiBcIiNGRkZGMDBcIixcclxuICAgICAgICBzZWxlY3RFZGdlT3BhY2l0eUZhY3RvcjogMSxcclxuICAgICAgICBzZWxlY3RUZXh0Q29sb3I6IFwiI0ZGMFwiLFxyXG4gICAgICAgIHNlbGVjdGlvbkNvbG9yOiBcIiNGRkZcIixcclxuICAgICAgICBzZWxlY3Rpb25DdHJsQ29sb3I6IFwiI0FGQVwiLFxyXG4gICAgICAgIHNlbGVjdGlvbkFsdENvbG9yOiBcIiNGQUFcIixcclxuICAgICAgICBzZWxlY3Rpb25PcGFjaXR5OiAwLjEsXHJcbiAgICAgICAgc2VsZWN0aW9uRWRnZU9wYWNpdHk6IDAuOCxcclxuICAgICAgICBoaWdoTGlnaHRlZE9iakVkZ2VDb2xvcjogd2luZG93LnNlbGdyZDMsXHJcbiAgICAgICAgaGlnaExpZ2h0ZWRPYmpFZGdlT3BhY2l0eTogMSxcclxuICAgICAgICBvYmplY3RDb25uZWN0aW9uRGFzaDogWzQsIDRdLFxyXG4gICAgICAgIG9iamVjdENvbm5lY3Rpb25Ub0NvbG9yOiBcIiM2NmZmNjZcIixcclxuICAgICAgICBvYmplY3RDb25uZWN0aW9uRnJvbUNvbG9yOiBcIiNmZmZmZmZcIixcclxuICAgICAgICBvYmplY3RDb25uZWN0aW9uT3BhY2l0eUZhY3RvcjogMVxyXG4gICAgfVxyXG59XHJcbmxldCBjdXJyZW50VGhlbWU7XHJcblxyXG5mdW5jdGlvbiBSZW5kZXJHcmlkKCkge1xyXG4gICAgLy8gR3JpZCBsaW5lcy5cclxuICAgIGlmKGdyaWRPcGFjaXR5IDw9IDApIHJldHVybjtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBjdXJyZW50VGhlbWUuZ3JpZENvbG9yO1xyXG5cclxuICAgIC8vICAgICAgICAgICBTdGVwIC0gQWxwaGFcclxuICAgIGRyYXdfZ3JpZGxpbmVzKDEwICwgMC4wOCAqIGdyaWRPcGFjaXR5KTtcclxuICAgIGRyYXdfZ3JpZGxpbmVzKDEwMCwgMC4zMiAqIGdyaWRPcGFjaXR5KTtcclxuICAgIGRyYXdfZ3JpZGxpbmVzKDMwMCwgMC42NCAqIGdyaWRPcGFjaXR5KTtcclxuXHJcbiAgICBjdHguZ2xvYmFsQWxwaGEgPSAwLjcgKiBncmlkT3BhY2l0eTtcclxuICAgIGRyYXdfcmVjdCgwLCB3MnNfeSgwKSwgY2FudmFzV2lkdGgsIDEpOyAvLyBDZW50ZXIgR3JpZCAtIEhvcml6b250YWxcclxuICAgIGRyYXdfcmVjdCh3MnNfeCgwKSwgMCwgMSwgY2FudmFzSGVpZ2h0KTsgLy8gQ2VudGVyIEdyaWQgLSBWZXJ0aWNhbFxyXG59XHJcblxyXG5sZXQgb2JqZWN0Q29sb3JzID0ge1xyXG4gICAgYm94OiB7Y29sOiBcIiNGRkZcIiwgZWRnZUNvbDogXCIjRkZGXCJ9LFxyXG4gICAgZG9vcjoge2NvbDogXCIjMDAwXCIsIGVkZ2VDb2w6IFwiIzAwMFwiLCBpbnZpc2libGVPcGFjaXR5RmFjdG9yOiAwLjA1fSxcclxuICAgIHdhdGVyOiB7XHJcbiAgICAgICAgY29sOiBcIiMzNTkyQjlcIiwgZWRnZUNvbDogXCIjOTFFQUZGXCIsIG9wYWNpdHlGYWN0b3I6IDAuMjQsXHJcbiAgICAgICAgYWNpZENvbDogXCIjQkJGQjU5XCIsIGFjaWRFZGdlQ29sOiBcIiM5MUVBRkZcIiwgYWNpZE9wYWNpdHlGYWN0b3I6IDAuODFcclxuICAgIH0sXHJcbiAgICBwdXNoZjoge2NvbDogXCIjMkJGRjQwXCIsIGVkZ2VDb2w6IFwiIzNDRkY0RlwifSxcclxuICAgIHJlZ2lvbjoge2NvbDogXCIjRkZENTJCXCIsIGVkZ2VDb2w6IFwiI0ZGQjAzQ1wiLCBlZGdlT3BhY2l0eUZhY3RvcjogMC41LCBidXR0b25PcGFjaXR5RmFjdG9yOiAwLjV9LFxyXG4gICAgYmc6IHtjb2w6IFwiIzAwMFwiLCBlZGdlQ29sOiBcIiM5MTAwMDBcIiwgZWRnZU9wYWNpdHlGYWN0b3I6IDAuMywgY29sb3JlZE9wYWNpdHlGYWN0b3I6IDAuMjJ9XHJcbn1cclxubGV0IHJlZ2lvbkltYWdlcyA9IHt9IC8vIFdpbGwgYmUgZmlsbGVkIGxhdGVyLlxyXG5cclxuZnVuY3Rpb24gX0RyYXdSZWN0YW5nbGUoY29sb3IsIG9wYWNpdHksIHgsIHksIHcsIGgsIGVkZ2UpIHtcclxuICAgIGN0eC5nbG9iYWxBbHBoYSA9IG9wYWNpdHk7XHJcbiAgICBpZihlZGdlKSB7XHJcbiAgICAgICAgaWYodG9nZ2xlcy5jYXJ0b29uaXNoRWRnZXMpIGN0eC5zdHJva2VDb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIGVsc2UgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgZHJhd19yZWN0X2VkZ2VzKHgsIHksIHcsIGgpXHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgIGRyYXdfcmVjdCh4LCB5LCB3LCBoKTtcclxuICAgIH1cclxufVxyXG4vLyBDaGVja3MgaWYgZ2l2ZW4gb2JqZWN0IGlzIGluIHNlbGVjdGlvbiBhcmVhLlxyXG5mdW5jdGlvbiBPYmpJc0hpZ2hsaWdodGVkKGVsZW1lbnQsIGNucykge1xyXG4gICAgaWYoIXdpbmRvdy5tX2RyYWdfc2VsZWN0aW9uKSByZXR1cm47IC8vIElmIHdlIGFyZSBub3QgZHJhZ2dpbmcuXHJcbiAgICBpZih3aW5kb3cubG1kKSByZXR1cm47IC8vIElmIHRoZSBzZWxlY3Rpb24ganVzdCBzdGFydGVkXHJcbiAgICBpZighd2luZG93Lk1hdGNoTGF5ZXIoZWxlbWVudCkpIHJldHVybjsgLy8gSWYgbGF5ZXJzIGRvbnQgbWF0Y2guXHJcblxyXG4gICAgbGV0IHJ4ID0gdzJzX3goTWF0aC5taW4obUNsaWNrWCwgbUN1cnJlbnRYKSk7XHJcbiAgICBsZXQgcnkgPSB3MnNfeShNYXRoLm1pbihtQ2xpY2tZLCBtQ3VycmVudFkpKTtcclxuICAgIGxldCBydyA9IHcyc193KE1hdGguYWJzKG1DdXJyZW50WCAtIG1DbGlja1gpKTtcclxuICAgIGxldCByaCA9IHcyc19oKE1hdGguYWJzKG1DdXJyZW50WSAtIG1DbGlja1kpKTtcclxuXHJcbiAgICBsZXQgeCA9IGNucy54O1xyXG4gICAgbGV0IHkgPSBjbnMueTtcclxuICAgIGxldCB3ID0gY25zLnc7XHJcbiAgICBsZXQgaCA9IGNucy5oO1xyXG5cclxuICAgIGlmKCAoKHgrdykgPCByeCkgfHwgKChyeCtydykgPCB4KSApIHJldHVybiBmYWxzZTtcclxuICAgIGlmKCAoKHkraCkgPCByeSkgfHwgKHJ5K3JoKSA8IHkgKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbi8vIEZ1bmN0aW9uIHJlc3BvbnNpYmxlIGZvciByZW5kZXJpbmcgcmVzaXphYmxlIG9iamVjdHMuIChSZWdpb24sIGRvb3IsIGJveCwgcHVzaGVyLCB3YXRlcilcclxuZnVuY3Rpb24gUmVuZGVyU2luZ2xlUmVzaXphYmxlT2JqZWN0KGVsZW1lbnQsIGNucykge1xyXG4gICAgbGV0IGVsZW1DbGFzcyA9IGVsZW1lbnQuX2NsYXNzO1xyXG4gICAgbGV0IG9iamVjdENvbG9yID0gb2JqZWN0Q29sb3JzW2VsZW1DbGFzc107XHJcbiAgICBpZihvYmplY3RDb2xvciA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcblxyXG4gICAgbGV0IGxheWVyQWxwaGEgPSB3aW5kb3cuTWF0Y2hMYXllcihlbGVtZW50KSA/IDE6IDAuMztcclxuXHJcbiAgICBsZXQgcG0gPSBlbGVtZW50LnBtO1xyXG4gICAgbGV0IHggPSB3MnNfeChwbS54KTtcclxuICAgIGxldCB5ID0gdzJzX3kocG0ueSk7XHJcbiAgICBsZXQgdyA9IHcyc193KHBtLncpO1xyXG4gICAgbGV0IGggPSB3MnNfaChwbS5oKTtcclxuXHJcbiAgICBsZXQgY29sb3IgPSBvYmplY3RDb2xvci5jb2w7XHJcbiAgICBsZXQgZWRnZUNvbG9yID0gb2JqZWN0Q29sb3IuZWRnZUNvbDtcclxuICAgIGxldCBvcGFjaXR5RmFjdG9yID0gb2JqZWN0Q29sb3Iub3BhY2l0eUZhY3RvciA/IG9iamVjdENvbG9yLm9wYWNpdHlGYWN0b3IgOiAwLjI7XHJcbiAgICBsZXQgZWRnZU9wYWNpdHlGYWN0b3IgPSBvYmplY3RDb2xvci5lZGdlT3BhY2l0eUZhY3RvciA/IG9iamVjdENvbG9yLmVkZ2VPcGFjaXR5RmFjdG9yIDogMTtcclxuXHJcbiAgICBpZigoZWxlbUNsYXNzID09IFwiYmdcIikgJiYgKHdpbmRvdy5DQUNIRURfQkdTW3BtLm1dID09IHVuZGVmaW5lZCkgJiYgKGJhY2tncm91bmRSZXF1ZXN0c09uUHJvZ3Jlc3MuaW5kZXhPZihwbS5tKSA9PSAtMSkpIHtcclxuICAgICAgICB3aW5kb3cuU2VydmVyUmVxdWVzdChgYT1nZXRfaW1hZ2VzJmZvcl9jbGFzcz1iZ19tb2RlbCZ1cGRhdGVfY29uc3Q9JHtwbS5tfWAsICdyZXF1ZXN0X2NvbnN0cycpO1xyXG4gICAgICAgIGJhY2tncm91bmRSZXF1ZXN0c09uUHJvZ3Jlc3MucHVzaChwbS5tKTtcclxuICAgIH1cclxuXHJcbiAgICBpZihcclxuICAgICAgICAoZWxlbUNsYXNzID09IFwiZG9vclwiKSAmJiAoXHJcbiAgICAgICAgICAgIChwbS52aXMgPT09IDApIHx8XHJcbiAgICAgICAgICAgIChwbS52aXMgPT09IGZhbHNlKSB8fFxyXG4gICAgICAgICAgICAocG0udmlzID09PSBcImZhbHNlXCIpXHJcbiAgICAgICAgKSApIHsgLy8gU2V0dGluZyBvcGFjaXR5IGZhY3RvciB3aGVuIGRvb3IgaXMgaW52aXNpYmxlLlxyXG4gICAgICAgIG9wYWNpdHlGYWN0b3IgPSBvYmplY3RDb2xvci5pbnZpc2libGVPcGFjaXR5RmFjdG9yO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoKGVsZW1DbGFzcyA9PSBcIndhdGVyXCIpICYmIChlbGVtZW50LnBtLmRhbWFnZSA+IDApKSB7IC8vIFN3YXBwaW5nIG91dCBwcm9wZXJ0aWVzIHdoZW4gaXQgaXMgYWNpZC5cclxuICAgICAgICBjb2xvciA9IG9iamVjdENvbG9yLmFjaWRDb2w7XHJcbiAgICAgICAgZWRnZUNvbG9yID0gb2JqZWN0Q29sb3IuYWNpZEVkZ2VDb2w7XHJcbiAgICAgICAgb3BhY2l0eUZhY3RvciA9IG9iamVjdENvbG9yLmFjaWRPcGFjaXR5RmFjdG9yO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoKGVsZW1DbGFzcyA9PSBcInJlZ2lvblwiKSAmJiAoWzEsIDksIDEwXS5pbmRleE9mKHBhcnNlSW50KHBtLnVzZV9vbikpICE9PSAtMSkpIHtcclxuICAgICAgICBjdHguZ2xvYmFsQWxwaGEgPSBsYXllckFscGhhICogb2JqZWN0Q29sb3IuYnV0dG9uT3BhY2l0eUZhY3RvcjtcclxuICAgICAgICBsZXQgaW1hZ2UgPSByZWdpb25JbWFnZXNbcG0udXNlX29uXTtcclxuICAgICAgICBkcmF3X2ltYWdlKFxyXG4gICAgICAgICAgICBpbWFnZSxcclxuICAgICAgICAgICAgdzJzX3gocG0ueCArIE1hdGgucm91bmQoKHBtLncgLSA0MSkvMikpLFxyXG4gICAgICAgICAgICB3MnNfeShwbS55ICsgTWF0aC5yb3VuZCgocG0uaCAtIDUxKS8yKSksXHJcbiAgICAgICAgICAgIHcyc193KDQxKSxcclxuICAgICAgICAgICAgdzJzX2goMzEpXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoKGVsZW1DbGFzcyA9PSBcImJnXCIpICYmIChwbS5jLmxlbmd0aCA9PSA3KSkge1xyXG4gICAgICAgIGNvbG9yID0gcG0uYztcclxuICAgICAgICBvcGFjaXR5RmFjdG9yID0gb2JqZWN0Q29sb3IuY29sb3JlZE9wYWNpdHlGYWN0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgaWYod2luZG93LlNIT1dfVEVYVFVSRVMpIHtcclxuICAgICAgICBpZigoZWxlbUNsYXNzID09IFwiYm94XCIpICYmICEodG9nZ2xlcy5ib3hSZW5kZXJpbmcpKSB7XHJcbiAgICAgICAgICAgIGNvbG9yID0gXCIjMDAwXCI7XHJcbiAgICAgICAgICAgIG9wYWNpdHlGYWN0b3IgPSAxO1xyXG4gICAgICAgICAgICBlZGdlQ29sb3IgPSBcIiMzMzNcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZigoZWxlbUNsYXNzID09IFwiYm94XCIpICYmICh0b2dnbGVzLmJveFJlbmRlcmluZykpIHtcclxuICAgICAgICAgICAgbGV0IGltYWdlID0gYm94TW9kZWxJbWFnZXNbcG0ubV07XHJcbiAgICAgICAgICAgIGlmKGltYWdlID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgICAgIGJveE1vZGVsSW1hZ2VzW3BtLm1dID0gaW1hZ2U7XHJcblxyXG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gYHBpYy5waHA/Yz0zJm09JHtwbS5tfWA7XHJcbiAgICAgICAgICAgICAgICBpbWFnZS53aWR0aCA9IDE2O1xyXG4gICAgICAgICAgICAgICAgaW1hZ2UuaGVpZ2h0ID0gMTY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoaW1hZ2UucGF0dGVybiA9PSB1bmRlZmluZWQpIGltYWdlLnBhdHRlcm4gPSBjdHguY3JlYXRlUGF0dGVybihpbWFnZSwgXCJyZXBlYXQteFwiKTsgLy8gQ3JlYXRlIHJlcGVhdCBwYXR0ZXJuIGlmIG5vdCBhbHJlYWR5IGRvbmUuXHJcbiAgICAgICAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IDE7XHJcblxyXG5cclxuICAgICAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICAgICAgLy8gR2V0dGluZyBhIHdvcmtpbmcgcmVjdGFuZ2xlIGZvciB1cyBpbiBvcmRlciB0byB3b3JrLlxyXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIGN0eC5yZWN0KHgsIHksIHcsIGgpO1xyXG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgICAgIGN0eC5jbGlwKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBFbnN1cmluZyB0aGF0IGJhY2tncm91bmQgaXMgb2Zmc2V0dGVkIHByb3Blcmx5IGFuZCB0YWtlcyBhbGwgdGhlIHJlY3RhbmdsZS5cclxuICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSh3MnNfeCgwKSwgdzJzX3koMCkpO1xyXG4gICAgICAgICAgICBjdHguc2NhbGUodzJzX3goMSkgLSB3MnNfeCgwKSwgdzJzX3koMSkgLSB3MnNfeSgwKSk7XHJcblxyXG4gICAgICAgICAgICAvLyBBY3R1YWwgYmFja2dyb3VuZCByZW5kZXJpbmcuXHJcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGltYWdlLnBhdHRlcm47XHJcbiAgICAgICAgICAgIGN0eC5yZWN0KHMyd194KDApLCBzMndfeSgwKSwgczJ3X3coY2FudmFzV2lkdGgpLCBzMndfaChjYW52YXNIZWlnaHQpKTtcclxuICAgICAgICAgICAgY3R4LmZpbGwoKTtcclxuXHJcbiAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoKGVsZW1DbGFzcyA9PSBcImJnXCIpICYmICh3aW5kb3cuQ0FDSEVEX0JHU1twbS5tXSAhPT0gdW5kZWZpbmVkKSAmJiAod2luZG93LkNBQ0hFRF9CR1NbcG0ubV0ubG9hZGVkKSkge1xyXG4gICAgICAgICAgICBpZihiYWNrZ3JvdW5kUmVxdWVzdHNPblByb2dyZXNzLmluZGV4T2YocG0ubSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVxdWVzdHNPblByb2dyZXNzLnNwbGljZShiYWNrZ3JvdW5kUmVxdWVzdHNPblByb2dyZXNzLmluZGV4T2YocG0ubSksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IDE7XHJcbiAgICAgICAgICAgIGxldCBpbWcgPSB3aW5kb3cuQ0FDSEVEX0JHU1twbS5tXTtcclxuICAgICAgICAgICAgaWYoaW1nLnBhdHRlcm4gPT0gdW5kZWZpbmVkKSBpbWcucGF0dGVybiA9IGN0eC5jcmVhdGVQYXR0ZXJuKGltZywgXCJyZXBlYXRcIik7IC8vIENyZWF0ZSByZXBlYXQgcGF0dGVybiBpZiBub3QgYWxyZWFkeSBkb25lLlxyXG5cclxuICAgICAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICAgICAgLy8gR2V0dGluZyBhIHdvcmtpbmcgcmVjdGFuZ2xlIGZvciB1cyBpbiBvcmRlciB0byB3b3JrLlxyXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIGN0eC5yZWN0KHgsIHksIHcsIGgpO1xyXG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgICAgIGN0eC5jbGlwKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBFbnN1cmluZyB0aGF0IGJhY2tncm91bmQgaXMgb2Zmc2V0dGVkIHByb3Blcmx5IGFuZCB0YWtlcyBhbGwgdGhlIHJlY3RhbmdsZS5cclxuICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSh3MnNfeCgwKSwgdzJzX3koMCkpO1xyXG4gICAgICAgICAgICBjdHguc2NhbGUodzJzX3goMSkgLSB3MnNfeCgwKSwgdzJzX3koMSkgLSB3MnNfeSgwKSk7XHJcbiAgICAgICAgICAgIGN0eC50cmFuc2xhdGUocG0udSwgcG0udik7XHJcblxyXG4gICAgICAgICAgICAvLyBBY3R1YWwgYmFja2dyb3VuZCByZW5kZXJpbmcuXHJcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGltZy5wYXR0ZXJuO1xyXG4gICAgICAgICAgICBjdHgucmVjdChzMndfeCgwKSwgczJ3X3koMCksIHMyd193KGNhbnZhc1dpZHRoKSwgczJ3X2goY2FudmFzSGVpZ2h0KSk7XHJcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XHJcblxyXG4gICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gQ29sb3IgbXVsdGlwbHlpbmcuXHJcbiAgICAgICAgICAgIGlmKHBtLmMubGVuZ3RoID09IDcpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb21wID0gY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbjtcclxuXHJcbiAgICAgICAgICAgICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gXCJtdWx0aXBseVwiOyAvLyBXZSBtdWx0aXBseSB0aGUgcmVjdGFuZ2xlLlxyXG4gICAgICAgICAgICAgICAgX0RyYXdSZWN0YW5nbGUocG0uYywgMSwgeCwgeSwgdywgaCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgLy9jdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gXCJsaWdodGVyXCI7XHJcbiAgICAgICAgICAgICAgICAvL2N0eC5kcmF3SW1hZ2UoY3R4LmNhbnZhcywgeCwgeSwgdywgaCwgeCwgeSwgdywgaCk7IC8vIFdlIHRoZW4gb3ZlcmxheSB0aGUgcmVjdGFuZ2xlIG9uIGJhY2tncm91ZCBpdHNlbGYuXHJcblxyXG4gICAgICAgICAgICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IGNvbXA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYoT2JqSXNIaWdobGlnaHRlZChlbGVtZW50LCBjbnMpKSB7XHJcbiAgICAgICAgZWRnZUNvbG9yID0gY3VycmVudFRoZW1lLmhpZ2hMaWdodGVkT2JqRWRnZUNvbG9yO1xyXG4gICAgICAgIGVkZ2VPcGFjaXR5RmFjdG9yID0gY3VycmVudFRoZW1lLmhpZ2hMaWdodGVkT2JqRWRnZU9wYWNpdHkgLyBsYXllckFscGhhO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKGVsZW1lbnQuc2VsZWN0ZWQgJiYgIXRvZ2dsZXMub3JpZ2luYWxTZWxlY3RPdmVybGF5KSB7XHJcbiAgICAgICAgZWRnZUNvbG9yID0gY3VycmVudFRoZW1lLnNlbGVjdE91dGxpbmVDb2xvcjtcclxuICAgICAgICBlZGdlT3BhY2l0eUZhY3RvciA9IGN1cnJlbnRUaGVtZS5zZWxlY3RFZGdlT3BhY2l0eUZhY3RvcjtcclxuICAgIH1cclxuXHJcbiAgICBpZighKCAod2luZG93LlNIT1dfVEVYVFVSRVMpICYmICggKGVsZW1DbGFzcyA9PSBcImJnXCIpIHx8ICgoZWxlbUNsYXNzID09IFwiYm94XCIpICYmIHRvZ2dsZXMuYm94UmVuZGVyaW5nKSApICkpIF9EcmF3UmVjdGFuZ2xlKGNvbG9yLCBsYXllckFscGhhICogb3BhY2l0eUZhY3RvciwgeCwgeSwgdywgaCwgZmFsc2UpOyAvLyBPYmplY3QgaXRzZWxmLlxyXG4gICAgaWYoIXdpbmRvdy5TSE9XX1RFWFRVUkVTKSBfRHJhd1JlY3RhbmdsZShlZGdlQ29sb3IsIGxheWVyQWxwaGEgKiBlZGdlT3BhY2l0eUZhY3RvciwgeCwgeSwgdywgaCwgdHJ1ZSk7IC8vIEVkZ2UuXHJcbn1cclxuXHJcbi8vIEZ1bmN0aW9uIHJlc3BvbnNpYmxlIGZvciBkcmF3aW5nIGVkZ2VzIG9mIG5vbi1yZXNpemFibGUgb2JqZWN0cy4gVG8gYmUgdXNlZCBiZWxvdy5cclxuZnVuY3Rpb24gUmVuZGVyTlJPYmplY3RCb3goZWxlbWVudCwgY29sb3IsIG9wYWNpdHkpIHtcclxuICAgIGxldCBwbSA9IGVsZW1lbnQucG07XHJcbiAgICBsZXQgb2JqWCA9IHBtLng7XHJcbiAgICBsZXQgb2JqWSA9IHBtLnk7XHJcblxyXG4gICAgbGV0IG9DbGFzcyA9IHdpbmRvdy5UaGlua09mQkJveENsYXNzKGVsZW1lbnQuX2NsYXNzLCBlbGVtZW50KTtcclxuXHJcbiAgICBsZXQgY2xhc3NYID0gd2luZG93LmJvX3hbb0NsYXNzXTtcclxuICAgIGxldCBjbGFzc1kgPSB3aW5kb3cuYm9feVtvQ2xhc3NdO1xyXG4gICAgbGV0IGNsYXNzVyA9IHdpbmRvdy5ib193W29DbGFzc107XHJcbiAgICBsZXQgY2xhc3NIID0gd2luZG93LmJvX2hbb0NsYXNzXTtcclxuXHJcbiAgICBsZXQgeDtcclxuICAgIGxldCB5ID0gdzJzX3kob2JqWSArIGNsYXNzWSk7XHJcbiAgICBsZXQgdztcclxuICAgIGxldCBoID0gdzJzX2goY2xhc3NIKTtcclxuXHJcbiAgICBpZihwbS5zaWRlICE9IC0xKSB7XHJcbiAgICAgICAgeCA9IHcyc194KG9ialggKyBjbGFzc1gpO1xyXG4gICAgICAgIHcgPSB3MnNfdyhjbGFzc1cpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB4ID0gdzJzX3gob2JqWCAtIGNsYXNzWCk7XHJcbiAgICAgICAgdyA9IHcyc193KC1jbGFzc1cpO1xyXG4gICAgICAgIHggKz0gdztcclxuICAgICAgICB3ID0gLXc7XHJcbiAgICB9XHJcbiAgICBfRHJhd1JlY3RhbmdsZShjb2xvciwgb3BhY2l0eSwgeCwgeSwgdywgaCwgdHJ1ZSk7XHJcblxyXG59XHJcblxyXG4vLyBGdW5jdGlvbiByZXNwb25zaWJsZSBmb3IgcmVuZGVyaW5nIG5vbi1yZXNpemFibGUgb2JqZWN0cyAoRXZlcnl0aGluZyBlbHNlIGFzaWRlIGZyb20gb25lcyBtZW50aW9uZWQgYWJvdmUuKVxyXG5mdW5jdGlvbiBSZW5kZXJTaW5nbGVOb25SZXNpemFibGVPYmplY3QoZWxlbWVudCwgY25zKSB7XHJcbiAgICBsZXQgZWxlbUNsYXNzID0gZWxlbWVudC5fY2xhc3M7XHJcbiAgICBsZXQgbGF5ZXJBbHBoYSA9IHdpbmRvdy5NYXRjaExheWVyKGVsZW1lbnQpID8gMTogMC4zO1xyXG4gICAgbGV0IHBtID0gZWxlbWVudC5wbTtcclxuICAgIGxldCB4ID0gcG0ueDtcclxuICAgIGxldCB5ID0gcG0ueTtcclxuXHJcbiAgICBsZXQgY29sb3IgPSBcIiMwMDBcIjtcclxuICAgIGxldCBvcGFjaXR5RmFjdG9yID0gMC4xO1xyXG5cclxuICAgIGlmKE9iaklzSGlnaGxpZ2h0ZWQoZWxlbWVudCwgY25zKSkge1xyXG4gICAgICAgIGNvbG9yID0gY3VycmVudFRoZW1lLmhpZ2hMaWdodGVkT2JqRWRnZUNvbG9yO1xyXG4gICAgICAgIG9wYWNpdHlGYWN0b3IgPSBjdXJyZW50VGhlbWUuaGlnaExpZ2h0ZWRPYmpFZGdlT3BhY2l0eSAvIGxheWVyQWxwaGE7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoZWxlbWVudC5zZWxlY3RlZCAmJiAhdG9nZ2xlcy5vcmlnaW5hbFNlbGVjdE92ZXJsYXkpIHtcclxuICAgICAgICBjb2xvciA9IGN1cnJlbnRUaGVtZS5zZWxlY3RPdXRsaW5lQ29sb3I7XHJcbiAgICAgICAgb3BhY2l0eUZhY3RvciA9IGN1cnJlbnRUaGVtZS5zZWxlY3RFZGdlT3BhY2l0eUZhY3RvcjtcclxuICAgIH1cclxuXHJcbiAgICBSZW5kZXJOUk9iamVjdEJveChlbGVtZW50LCBjb2xvciwgbGF5ZXJBbHBoYSAqIG9wYWNpdHlGYWN0b3IpO1xyXG5cclxuICAgIGN0eC5nbG9iYWxBbHBoYSA9IGxheWVyQWxwaGE7XHJcbiAgICBsZXQgdHJhbnNmb3JtZWREZWNvciA9IGZhbHNlO1xyXG5cclxuICAgIGlmKGVsZW1DbGFzcyA9PSBcImRlY29yXCIpIHsgLy8gUm90YXRpb24gJiBzY2FsaW5nLCBhbHNvIGZldGNoaW5nIGRlY29yIGlmIG5lZWRlZC4uXHJcbiAgICAgICAgbGV0IG1vZGVsID0gcG0ubW9kZWw7XHJcbiAgICAgICAgaWYoICh3aW5kb3cuc3BlY2lhbF92YWx1ZXNfdGFibGUuZGVjb3JfbW9kZWxbbW9kZWxdID09IHVuZGVmaW5lZCkgJiYgKGRlY29yUmVxdWVzdHNPblByb2dyZXNzLmluZGV4T2YobW9kZWwpID09IC0xKSkge1xyXG4gICAgICAgICAgICB3aW5kb3cuU2VydmVyUmVxdWVzdChgYT1nZXRfaW1hZ2VzJmZvcl9jbGFzcz1kZWNvcl9tb2RlbCZ1cGRhdGVfY29uc3Q9JHttb2RlbH1gLCAncmVxdWVzdF9jb25zdHMnKTtcclxuICAgICAgICAgICAgZGVjb3JSZXF1ZXN0c09uUHJvZ3Jlc3MucHVzaChtb2RlbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKChwbS5yICE9IDApIHx8IChwbS5zeCAhPSAxKSB8fCAocG0uc3kgIT0gMSkpIHtcclxuICAgICAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSh3MnNfeCh4KSwgdzJzX3koeSkpO1xyXG4gICAgICAgICAgICBjdHgucm90YXRlKHBtLnIgLyAxODAgKiBNYXRoLlBJKTtcclxuICAgICAgICAgICAgY3R4LnNjYWxlKHBtLnN4LCBwbS5zeSk7XHJcbiAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoLXcyc194KHgpLCAtdzJzX3koeSkpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm1lZERlY29yID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG9mZnNldENsYXNzID0gd2luZG93LlRoaW5rT2ZPZmZzZXRDbGFzcyhlbGVtQ2xhc3MsIGVsZW1lbnQpO1xyXG4gICAgbGV0IGZhY3RvciA9IChwbS5zaWRlICE9IC0xKSA/IDE6IC0xO1xyXG5cclxuICAgIGxldCBvYmpYID0gdzJzX3goeCArIGZhY3RvciAqIHdpbmRvdy5sb194W29mZnNldENsYXNzXSk7XHJcbiAgICBsZXQgb2JqWSA9IHcyc195KHkgKyB3aW5kb3cubG9feVtvZmZzZXRDbGFzc10pO1xyXG4gICAgbGV0IG9ialcgPSB3MnNfdyhmYWN0b3IgKiB3aW5kb3cubG9fd1tvZmZzZXRDbGFzc10pO1xyXG4gICAgbGV0IG9iakggPSB3MnNfaCh3aW5kb3cubG9faFtvZmZzZXRDbGFzc10pO1xyXG5cclxuICAgIGlmKGZhY3RvciA9PSAtMSkge1xyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSgyICogb2JqWCArIG9ialcsIDApO1xyXG4gICAgICAgIGN0eC5zY2FsZSgtMSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoW1wicGxheWVyXCIsIFwiZW5lbXlcIl0uaW5kZXhPZihlbGVtQ2xhc3MpICE9PSAtMSkge1xyXG4gICAgICAgIGRyYXdfaW1hZ2Uod2luZG93LmltZ19jaGFyc19mdWxsW3BtLmNoYXJdLCB3MnNfeChwbS54IC0gMzYpLCB3MnNfeShwbS55IC0gMTA0KSwgdzJzX3coMTEwKSwgdzJzX2goMTMwKSk7XHJcbiAgICB9IGVsc2UgaWYgKChlbGVtQ2xhc3MgPT0gXCJkZWNvclwiKSAmJiAod2luZG93LkNBQ0hFRF9ERUNPUlNbcG0ubW9kZWxdICE9PSB1bmRlZmluZWQpICYmICghd2luZG93LkNBQ0hFRF9ERUNPUlNbcG0ubW9kZWxdLm5hdGl2ZSkpIHtcclxuICAgICAgICBpZihkZWNvclJlcXVlc3RzT25Qcm9ncmVzcy5pbmRleE9mKHBtLm1vZGVsKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgZGVjb3JSZXF1ZXN0c09uUHJvZ3Jlc3Muc3BsaWNlKGRlY29yUmVxdWVzdHNPblByb2dyZXNzLmluZGV4T2YocG0ubW9kZWwpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGltYWdlID0gd2luZG93LkNBQ0hFRF9ERUNPUlNbcG0ubW9kZWxdO1xyXG4gICAgICAgIGRyYXdfaW1hZ2UoXHJcbiAgICAgICAgICAgIGltYWdlLFxyXG4gICAgICAgICAgICB3MnNfeChwbS54ICsgcG0udSksXHJcbiAgICAgICAgICAgIHcyc195KHBtLnkgKyBwbS52KSxcclxuICAgICAgICAgICAgdzJzX3coaW1hZ2Uud2lkdGgpLFxyXG4gICAgICAgICAgICB3MnNfaChpbWFnZS5oZWlnaHQpXHJcbiAgICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZHJhd19pbWFnZSh3aW5kb3cuaW1nX2RlY2lkZShlbGVtZW50KSwgb2JqWCwgb2JqWSwgb2JqVywgb2JqSCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoZmFjdG9yID09IC0xKSBjdHgucmVzdG9yZSgpO1xyXG4gICAgaWYodHJhbnNmb3JtZWREZWNvcikgY3R4LnJlc3RvcmUoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gR2V0T2JqZWN0Q29vcmRBbmRTaXplKGVsZW1lbnQpIHtcclxuICAgIGxldCBwbSA9IGVsZW1lbnQucG07XHJcblxyXG4gICAgbGV0IHgsIHksIHcsIGg7XHJcbiAgICBpZihlbGVtZW50Ll9pc3Jlc2l6YWJsZSkge1xyXG4gICAgICAgIHggPSB3MnNfeChwbS54KTtcclxuICAgICAgICB5ID0gdzJzX3kocG0ueSk7XHJcbiAgICAgICAgdyA9IHcyc193KHBtLncpO1xyXG4gICAgICAgIGggPSB3MnNfaChwbS5oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IGJveENsYXNzID0gd2luZG93LlRoaW5rT2ZCQm94Q2xhc3MoZWxlbWVudC5fY2xhc3MsIGVsZW1lbnQpO1xyXG4gICAgICAgIHkgPSB3MnNfeShwbS55ICsgd2luZG93LmJvX3lbYm94Q2xhc3NdKTtcclxuICAgICAgICBoID0gdzJzX2god2luZG93LmJvX2hbYm94Q2xhc3NdKTtcclxuICAgICAgICBpZihwbS5zaWRlICE9IC0xKSB7XHJcbiAgICAgICAgICAgIHggPSB3MnNfeChwbS54ICsgd2luZG93LmJvX3hbYm94Q2xhc3NdKTtcclxuICAgICAgICAgICAgdyA9IHcyc193KHdpbmRvdy5ib193W2JveENsYXNzXSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgeCA9IHcyc194KHBtLnggLSB3aW5kb3cuYm9feFtib3hDbGFzc10pO1xyXG4gICAgICAgICAgICB3ID0gdzJzX3coLXdpbmRvdy5ib193W2JveENsYXNzXSk7XHJcbiAgICAgICAgICAgIHggKz0gdztcclxuICAgICAgICAgICAgdyA9IC13O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge3g6IHgsIHk6IHksIHc6IHcsIGg6IGh9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFJlbmRlck9iamVjdE1hcmtBbmROYW1lKGVsZW1lbnQsIGNucykge1xyXG4gICAgaWYoIXdpbmRvdy5FTkFCTEVfVEVYVCkgcmV0dXJuO1xyXG4gICAgaWYoZWxlbWVudC5wbS51aWQgPT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICBpZighd2luZG93Lk1hdGNoTGF5ZXIoZWxlbWVudCkpIHJldHVybjtcclxuXHJcbiAgICBpZih3aW5kb3cubGFzdF90aXRsZV9kZW5zaXR5ID09IHVuZGVmaW5lZCkgd2luZG93Lmxhc3RfdGl0bGVfZGVuc2l0eSA9IDA7XHJcblxyXG4gICAgbGV0IGNhcHggPSBjbnMueCArIGNucy53IC8gMjtcclxuICAgIGxldCBjYXB5ID0gY25zLnkgKyBjbnMuaCAvIDI7XHJcblxyXG4gICAgbGV0IGdvdGhpdCA9IChlbGVtZW50LnNlbGVjdGVkICYmIGVsZW1lbnQuaGl0KGZhbHNlKSk7XHJcbiAgICBjdHguZm9udCA9IFwibm9ybWFsIDEwcHggQXJpYWxcIjtcclxuICAgIGxldCBmaWxsVGV4dCA9IGVsZW1lbnQucG0udWlkO1xyXG4gICAgbGV0IGRpbSA9IGN0eC5tZWFzdXJlVGV4dChmaWxsVGV4dCk7XHJcbiAgICBkaW0uaGVpZ2h0ID0gMTA7XHJcbiAgICBpZiAoZ290aGl0KVxyXG4gICAgICAgIGRpbS5oZWlnaHQgPSAxMjtcclxuICAgIGlmICh3aW5kb3cubW91c2VfeCA+IGNhcHggLSAzMClcclxuICAgICAgICBpZiAod2luZG93Lm1vdXNlX3ggPCBjYXB4ICsgMzApXHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cubW91c2VfeSA+IGNhcHkgLSAzMClcclxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cubW91c2VfeSA8IGNhcHkgKyAzMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlX2RlbnNpdHkrKztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICBjdHguZ2xvYmFsQWxwaGEgPSAxO1xyXG4gICAgaWYgKHdpbmRvdy5sYXN0X3RpdGxlX2RlbnNpdHkgPiAxICYmICFnb3RoaXQpIHtcclxuICAgICAgICBsZXQgZGkgPSBNYXRoLnNxcnQoTWF0aC5wb3cod2luZG93Lm1vdXNlX3ggLSBjYXB4LCAyKSArIE1hdGgucG93KHdpbmRvdy5tb3VzZV95IC0gY2FweSwgMikpO1xyXG4gICAgICAgIGlmIChkaSA8IDYwKSB7XHJcbiAgICAgICAgICAgIGlmICghZWxlbWVudC5zZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgY2FweCA9IGNhcHggLSAod2luZG93Lm1vdXNlX3ggLSBjYXB4KSAqIE1hdGgucG93KCg2MCAtIGRpKSAvIDYwLCAyKSAqICg0ICsgTWF0aC5taW4oNiwgd2luZG93Lmxhc3RfdGl0bGVfZGVuc2l0eSAqIDAuMSkpO1xyXG4gICAgICAgICAgICAgICAgY2FweSA9IGNhcHkgLSAod2luZG93Lm1vdXNlX3kgLSBjYXB5KSAqIE1hdGgucG93KCg2MCAtIGRpKSAvIDYwLCAyKSAqICg0ICsgTWF0aC5taW4oNiwgd2luZG93Lmxhc3RfdGl0bGVfZGVuc2l0eSAqIDAuMSkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5sYXN0X3RpdGxlX2RlbnNpdHkgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4Lmdsb2JhbEFscGhhID0gTWF0aC5tYXgoMC40LCAxIC0gd2luZG93Lmxhc3RfdGl0bGVfZGVuc2l0eSAqIDAuMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjdHguZ2xvYmFsQWxwaGEgPSBNYXRoLm1heCgwLjMsIDEgLyB3aW5kb3cubGFzdF90aXRsZV9kZW5zaXR5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCB4MyA9IE1hdGgucm91bmQoY2FweCAtIGRpbS53aWR0aCAvIDIpO1xyXG4gICAgbGV0IHkzID0gTWF0aC5yb3VuZChjYXB5IC0gZGltLmhlaWdodCAvIDIpO1xyXG4gICAgaWYgKHdpbmRvdy5FTkFCTEVfU0hBRE9XUykge1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgwLDAsMCwwLjEpJztcclxuICAgICAgICBjdHguZmlsbFJlY3QoeDMgLSAyLCB5MyAtIDIsIGRpbS53aWR0aCArIDQsIGRpbS5oZWlnaHQgKyA0KTtcclxuICAgICAgICBjdHguZmlsbFJlY3QoeDMgLSA0LCB5MyAtIDQsIGRpbS53aWR0aCArIDgsIGRpbS5oZWlnaHQgKyA4KTtcclxuICAgIH1cclxuICAgIGN0eC5maWxsU3R5bGUgPSBcIiNGRkZcIjtcclxuICAgIGlmIChnb3RoaXQpIGN0eC5maWxsU3R5bGUgPSAnI2ZmZmI5MSc7XHJcbiAgICBpZiAoZWxlbWVudC5zZWxlY3RlZCkgY3R4LmZpbGxTdHlsZSA9IGN1cnJlbnRUaGVtZS5zZWxlY3RUZXh0Q29sb3I7XHJcbiAgICBjdHguZmlsbFRleHQoZmlsbFRleHQsIHgzLCB5MyArIDggKyAoZGltLmhlaWdodCAtIDEwKSAvIDIpO1xyXG4gICAgd2luZG93Lmxhc3RfdGl0bGVfZGVuc2l0eSA9IHdpbmRvdy50aXRsZV9kZW5zaXR5O1xyXG59XHJcblxyXG5mdW5jdGlvbiBSZW5kZXJTZWxlY3RPdmVybGF5KGVsZW1lbnQsIGNucykge1xyXG4gICAgaWYoIWVsZW1lbnQuc2VsZWN0ZWQpIHJldHVybjtcclxuICAgIGlmKCF0b2dnbGVzLm9yaWdpbmFsU2VsZWN0T3ZlcmxheSkgcmV0dXJuO1xyXG5cclxuICAgIGN0eC5nbG9iYWxBbHBoYSA9IDAuMjtcclxuICAgIGN0eC5maWxsU3R5bGUgPSB3aW5kb3cuc2VsZ3JkMjtcclxuICAgIGRyYXdfcmVjdChjbnMueCwgY25zLnksIGNucy53LCBjbnMuaCk7XHJcblxyXG4gICAgY3R4Lmdsb2JhbEFscGhhID0gMTtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBcIiNGRkZcIjtcclxuICAgIHdpbmRvdy5NeURyYXdTZWxlY3Rpb24oY25zLngtMiwgY25zLnktMiwgY25zLncrNCwgY25zLmgrNClcclxufVxyXG5cclxuZnVuY3Rpb24gQ2hhbmdlQ3Vyc29ySWZIaXRzQm9yZGVyKGVsZW1lbnQsIGNucykge1xyXG4gICAgaWYoIWVsZW1lbnQuc2VsZWN0ZWQpIHJldHVybjtcclxuICAgIGlmKCFlbGVtZW50Ll9pc3Jlc2l6YWJsZSkgcmV0dXJuO1xyXG4gICAgaWYoIXdpbmRvdy5NYXRjaExheWVyKGVsZW1lbnQpKSByZXR1cm47XHJcblxyXG4gICAgbGV0IGN4ID0gY25zLng7XHJcbiAgICBsZXQgY3kgPSBjbnMueTtcclxuICAgIGxldCBjdyA9IGNucy53O1xyXG4gICAgbGV0IGNoID0gY25zLmg7XHJcblxyXG4gICAgbGV0IHggPSBlbGVtZW50LnBtLng7XHJcbiAgICBsZXQgeSA9IGVsZW1lbnQucG0ueTtcclxuICAgIGxldCB3ID0gZWxlbWVudC5wbS53O1xyXG4gICAgbGV0IGggPSBlbGVtZW50LnBtLmg7XHJcblxyXG4gICAgbGV0IG14ID0gbUN1cnJlbnRYO1xyXG4gICAgbGV0IG15ID0gbUN1cnJlbnRZO1xyXG5cclxuICAgIGxldCBib3JkZXJXaWR0aCA9IHdpbmRvdy5ib3JkZXJ3aWR0aDtcclxuXHJcbiAgICAvLyBEbyBlbGltaW5hdGlvbiBpZiBjaGVja2luZyBpcyBub3QgbmVjZXNzYXJ5LlxyXG4gICAgaWYobXggPCAoeCAtIGJvcmRlcldpZHRoKSkgcmV0dXJuO1xyXG4gICAgaWYoKHggKyB3ICsgYm9yZGVyV2lkdGgpIDwgbXgpIHJldHVybjtcclxuICAgIGlmKG15IDwgKHkgLSBib3JkZXJXaWR0aCkpIHJldHVybjtcclxuICAgIGlmKCh5K2grYm9yZGVyV2lkdGgpIDwgbXkpIHJldHVybjtcclxuXHJcbiAgICBsZXQgaXNUb3AsIGlzQm90dG9tLCBpc0xlZnQsIGlzUmlnaHQgPSBmYWxzZTtcclxuICAgIC8vIFhcclxuICAgIGlmKCAoKHggLSBib3JkZXJXaWR0aCkgPD0gbXgpICYmIChteCA8PSAoeCtib3JkZXJXaWR0aCkpICkgaXNMZWZ0ID0gdHJ1ZTtcclxuICAgIGlmKCAoKHgrdy1ib3JkZXJXaWR0aCkgPD0gbXgpICYmIChteCA8PSAoeCt3K2JvcmRlcldpZHRoKSkgKSBpc1JpZ2h0ID0gdHJ1ZTtcclxuICAgIC8vIFlcclxuICAgIGlmKCAoKHktYm9yZGVyV2lkdGgpIDw9IG15KSAmJiAobXkgPD0gKHkrYm9yZGVyV2lkdGgpKSkgaXNUb3AgPSB0cnVlO1xyXG4gICAgaWYoICgoeStoLWJvcmRlcldpZHRoKSA8PSBteSkgJiYgKG15IDw9ICh5K2grYm9yZGVyV2lkdGgpKSkgaXNCb3R0b20gPSB0cnVlO1xyXG5cclxuICAgIGxldCBjdXJzb3IgPSBcImRlZmF1bHRcIjtcclxuICAgIGlmKCAoaXNUb3AgJiYgaXNMZWZ0KSB8fCAoaXNCb3R0b20gJiYgaXNSaWdodCkgKSBjdXJzb3IgPSBcIm53c2UtcmVzaXplXCI7XHJcbiAgICBlbHNlIGlmKCAoaXNUb3AgJiYgaXNSaWdodCkgfHwgKGlzQm90dG9tICYmIGlzTGVmdCkgKSBjdXJzb3IgPSBcIm5lc3ctcmVzaXplXCI7XHJcbiAgICBlbHNlIGlmIChpc1RvcCB8fCBpc0JvdHRvbSkgY3Vyc29yID0gXCJucy1yZXNpemVcIjtcclxuICAgIGVsc2UgaWYgKGlzTGVmdCB8fCBpc1JpZ2h0KSBjdXJzb3IgPSBcImV3LXJlc2l6ZVwiO1xyXG5cclxuICAgIGlmKHdpbmRvdy5jYW52LnN0eWxlLmN1cnNvciAhPSBjdXJzb3IpIHdpbmRvdy5jYW52LnN0eWxlLmN1cnNvciA9IGN1cnNvcjtcclxufVxyXG5cclxuZnVuY3Rpb24gUmVuZGVyUXVpY2tQaWNrKGVsZW1lbnQsIGNucykge1xyXG4gICAgaWYoISh3aW5kb3cucXVpY2tfcGljayAmJiB3aW5kb3cubHFwYy5pbmRleE9mKGVsZW1lbnQuX2NsYXNzKSAhPSAtMSkpIHJldHVybjtcclxuICAgIGlmKCF3aW5kb3cuTWF0Y2hMYXllcihlbGVtZW50KSkgcmV0dXJuO1xyXG5cclxuICAgIGxldCB4ID0gY25zLng7XHJcbiAgICBsZXQgeSA9IGNucy55O1xyXG4gICAgbGV0IHcgPSBjbnMudztcclxuICAgIGxldCBoID0gY25zLmg7XHJcblxyXG4gICAgbGV0IG1pZFggPSB4ICsgdy8yO1xyXG4gICAgbGV0IG1pZFkgPSB5ICsgaC8yO1xyXG5cclxuICAgIGxldCBzaW51cyA9IE1hdGguc2luKChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgLyAxMDApO1xyXG5cclxuICAgIGN0eC5nbG9iYWxBbHBoYSA9IDAuNzUgLSBzaW51cyAvIDQ7XHJcbiAgICBsZXQgc2l6ZSA9IDI3ICsgc2ludXMgKiA1O1xyXG5cclxuICAgIGxldCBpc092ZXIgPSBmYWxzZTtcclxuXHJcbiAgICBpZih3aW5kb3cuZXNbd2luZG93LnF1aWNrX3BpY2tfZmFrZV9vdmVyXSA9PSBlbGVtZW50KSB7XHJcbiAgICAgICAgaXNPdmVyID0gdHJ1ZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgZGlzdCA9IHdpbmRvdy5EaXN0MkQobWlkWCwgbWlkWSwgd2luZG93Lm1vdXNlX3gsIHdpbmRvdy5tb3VzZV95KTtcclxuICAgICAgICBpZihkaXN0IDwgKDIwICogd2luZG93LnF1aWNrX3BpY2tfaGl0X3NjYWxlKSkge1xyXG4gICAgICAgICAgICBpc092ZXIgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkcmF3X2ltYWdlKFxyXG4gICAgICAgIGlzT3ZlciA/IHdpbmRvdy5pbWdfcXVpY2twaWNrMiA6IHdpbmRvdy5pbWdfcXVpY2twaWNrLFxyXG4gICAgICAgIG1pZFggLSBzaXplLFxyXG4gICAgICAgIG1pZFkgLSBzaXplLFxyXG4gICAgICAgIHNpemUgKiAyLFxyXG4gICAgICAgIHNpemUgKiAyXHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBSZW5kZXJDb25uZWN0aW9uTGluZXMoZWxlbWVudCwgY25zKSB7XHJcbiAgICBpZighd2luZG93LlNIT1dfQ09OTkVDVElPTlMpIHJldHVybjtcclxuICAgIGlmKCFlbGVtZW50LnNlbGVjdGVkKSByZXR1cm47XHJcbiAgICBpZighYWxlaVJ1bm5pbmcpIHJldHVybjtcclxuXHJcbiAgICBsZXQgbGF5ZXJBbHBoYSA9IHdpbmRvdy5NYXRjaExheWVyKGVsZW1lbnQpID8gMTogMC4zO1xyXG5cclxuICAgIGxldCBvY20gPSB3aW5kb3cuT2JqZWN0Q29ubmVjdGlvbk1hcHBpbmc7XHJcbiAgICBsZXQgdXRlbSA9IHdpbmRvdy51aWRUb0VsZW1lbnRNYXA7XHJcbiAgICBsZXQgdWlkID0gZWxlbWVudC5wbS51aWQ7XHJcblxyXG4gICAgaWYodWlkID09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgaWYob2NtLmxlbmd0aCA9PSAwKSByZXR1cm47XHJcbiAgICBpZihvY21bdWlkXSA9PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgIGlmKChvY21bdWlkXS5ieS5sZW5ndGggPT0gMCkgJiYgKG9jbVt1aWRdLnRvLmxlbmd0aCA9PSAwKSkgcmV0dXJuO1xyXG5cclxuICAgIGxldCByZWZlcnJlZEJ5ID0gb2NtW3VpZF0uYnk7XHJcbiAgICBsZXQgcmVmZXJyaW5nVG8gPSBvY21bdWlkXS50bztcclxuXHJcbiAgICBsZXQgZnJvbVgsIHRvWDtcclxuICAgIGxldCBmcm9tWSwgdG9ZO1xyXG5cclxuICAgIGZyb21YID0gY25zLnggKyBjbnMudy8yO1xyXG4gICAgZnJvbVkgPSBjbnMueSArIGNucy5oLzI7XHJcblxyXG4gICAgY3R4Lmdsb2JhbEFscGhhID0gbGF5ZXJBbHBoYSAqIGN1cnJlbnRUaGVtZS5vYmplY3RDb25uZWN0aW9uT3BhY2l0eUZhY3RvcjtcclxuICAgIGN0eC5saW5lV2lkdGggPSAxO1xyXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gY3VycmVudFRoZW1lLm9iamVjdENvbm5lY3Rpb25Ub0NvbG9yO1xyXG4gICAgY3R4LnNldExpbmVEYXNoKGN1cnJlbnRUaGVtZS5vYmplY3RDb25uZWN0aW9uRGFzaCk7XHJcblxyXG4gICAgLy8gVE9ETzogSG93IGNhbiB3ZSBiYXRjaCBsaW5lIGRyYXdzP1xyXG4gICAgLy8gQWxsIG9mIHRoZW0gd2lsbCBoYXZlIHNhbWUgY29sb3IuIChCeSBhbGwsIEkgbWVhbiBldmVyeSBsaW5lIHRoYXQgYSBsb29wIGhhbmRsZXMuKVxyXG4gICAgLy8gU28gaXQncyBiZXN0IGlmIHdlIGp1c3QgYmF0Y2ggdGhlbSwgYnV0IGhvdyBkbyB3ZSBkbyB0aGF0P1xyXG5cclxuICAgIGZvcihsZXQgdG8gb2YgcmVmZXJyaW5nVG8pIHtcclxuICAgICAgICBsZXQgb2NucyA9IEdldE9iamVjdENvb3JkQW5kU2l6ZSh1dGVtW3RvXSk7XHJcbiAgICAgICAgdG9YID0gb2Nucy54ICsgb2Nucy53LzI7XHJcbiAgICAgICAgdG9ZID0gb2Nucy55ICsgb2Nucy5oLzI7XHJcblxyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHgubW92ZVRvKGZyb21YLCBmcm9tWSk7XHJcbiAgICAgICAgY3R4LmxpbmVUbyh0b1gsIHRvWSk7XHJcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGN0eC5zdHJva2VTdHlsZSA9IGN1cnJlbnRUaGVtZS5vYmplY3RDb25uZWN0aW9uRnJvbUNvbG9yO1xyXG4gICAgdG9YID0gZnJvbVg7XHJcbiAgICB0b1kgPSBmcm9tWTtcclxuXHJcbiAgICBmb3IobGV0IGJ5IG9mIHJlZmVycmVkQnkpIHtcclxuICAgICAgICBsZXQgb2NucyA9IEdldE9iamVjdENvb3JkQW5kU2l6ZSh1dGVtW2J5XSk7XHJcbiAgICAgICAgZnJvbVggPSBvY25zLnggKyBvY25zLncvMjtcclxuICAgICAgICBmcm9tWSA9IG9jbnMueSArIG9jbnMuaC8yO1xyXG5cclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4Lm1vdmVUbyhmcm9tWCwgZnJvbVkpO1xyXG4gICAgICAgIGN0eC5saW5lVG8odG9YLCB0b1kpO1xyXG4gICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBjdHguc2V0TGluZURhc2goW10pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBSZW5kZXJTaW5nbGVPYmplY3QoZWxlbWVudCwgY25zKSB7XHJcbiAgICBpZihlbGVtZW50Ll9pc3Jlc2l6YWJsZSkgUmVuZGVyU2luZ2xlUmVzaXphYmxlT2JqZWN0KGVsZW1lbnQsIGNucyk7XHJcbiAgICBlbHNlIFJlbmRlclNpbmdsZU5vblJlc2l6YWJsZU9iamVjdChlbGVtZW50LCBjbnMpO1xyXG4gICAgUmVuZGVyU2VsZWN0T3ZlcmxheShlbGVtZW50LCBjbnMpO1xyXG4gICAgUmVuZGVyUXVpY2tQaWNrKGVsZW1lbnQsIGNucyk7XHJcbiAgICBSZW5kZXJPYmplY3RNYXJrQW5kTmFtZShlbGVtZW50LCBjbnMpO1xyXG4gICAgUmVuZGVyQ29ubmVjdGlvbkxpbmVzKGVsZW1lbnQsIGNucyk7XHJcbiAgICBDaGFuZ2VDdXJzb3JJZkhpdHNCb3JkZXIoZWxlbWVudCwgY25zKTtcclxufVxyXG5cclxuZnVuY3Rpb24gUmVuZGVyQWxsT2JqZWN0cygpIHtcclxuICAgIHRvdGFsUmVuZGVyZWRPYmplY3RzID0gMDtcclxuXHJcbiAgICBsZXQgbHAgPSB3aW5kb3cubGVmdF9wYW5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGxldCBycCA9IHdpbmRvdy5yaWdodF9wYW5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGxldCB0cCA9IHdpbmRvdy50b3BfcGFuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgbGV0IGN4ID0gTWF0aC5yb3VuZChzMndfeChscC53aWR0aCArIGxwLngpKTtcclxuICAgIGxldCBjeSA9IE1hdGgucm91bmQoczJ3X3kodHAuaGVpZ2h0ICsgdHAueSkpO1xyXG4gICAgbGV0IGN3ID0gTWF0aC5yb3VuZChzMndfdyhycC54IC0gKGxwLndpZHRoICsgbHAueCkpKTtcclxuICAgIGxldCBjaCA9IE1hdGgucm91bmQoczJ3X2goY2FudmFzSGVpZ2h0IC0gKHRwLmhlaWdodCArIHRwLnkpKSk7XHJcblxyXG4gICAgZm9yKGxldCBlbGVtZW50IG9mIHdpbmRvdy5lcykge1xyXG4gICAgICAgIGxldCBwbSA9IGVsZW1lbnQucG07XHJcbiAgICAgICAgbGV0IHggPSBwbS54O1xyXG4gICAgICAgIGxldCB5ID0gcG0ueTtcclxuICAgICAgICBsZXQgdyA9IHBtLncgPyBwbS53IDogMDtcclxuICAgICAgICBsZXQgaCA9IHBtLmggPyBwbS5oIDogMDtcclxuXHJcbiAgICAgICAgaWYoIWVsZW1lbnQuZXhpc3RzKSBjb250aW51ZTtcclxuICAgICAgICBpZighZWxlbWVudC5faXNwaHlzaWNhbCkgY29udGludWU7XHJcblxyXG4gICAgICAgIGxldCBjbnM7XHJcbiAgICAgICAgaWYoZWxlbWVudC5zZWxlY3RlZCkge1xyXG4gICAgICAgICAgICBjbnMgPSBHZXRPYmplY3RDb29yZEFuZFNpemUoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIFJlbmRlckNvbm5lY3Rpb25MaW5lcyhlbGVtZW50LCBjbnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBY3R1YWwgY3VsbGluZ1xyXG4gICAgICAgIGlmKCAoeCt3KSA8IGN4ICkgY29udGludWU7XHJcbiAgICAgICAgaWYoICh5K2gpIDwgY3kgKSBjb250aW51ZTtcclxuICAgICAgICBpZiggKGN4K2N3KSA8IHggKSBjb250aW51ZTtcclxuICAgICAgICBpZiggKGN5K2NoKSA8IHkgKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgaWYoY25zID09IHVuZGVmaW5lZCkgY25zID0gR2V0T2JqZWN0Q29vcmRBbmRTaXplKGVsZW1lbnQpO1xyXG4gICAgICAgIFJlbmRlclNpbmdsZU9iamVjdChlbGVtZW50LCBjbnMpO1xyXG4gICAgICAgIHRvdGFsUmVuZGVyZWRPYmplY3RzKys7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFJlbmRlclNlbGVjdGlvbkJveCgpIHtcclxuICAgIGlmKCF3aW5kb3cubV9kcmFnX3NlbGVjdGlvbikgcmV0dXJuOyAvLyBJZiB3ZSBhcmUgbm90IGRyYWdnaW5nLlxyXG4gICAgaWYod2luZG93LmxtZCkgcmV0dXJuOyAvLyBJZiB0aGUgc2VsZWN0aW9uIGp1c3Qgc3RhcnRlZFxyXG5cclxuXHJcbiAgICBsZXQgeCA9IHcyc194KG1DbGlja1gpOyAvLyBTdGFydCBYIGZvciByZWN0YW5nbGVcclxuICAgIGxldCB5ID0gdzJzX3kobUNsaWNrWSk7IC8vIFN0YXJ0IFkgZm9yIHJlY3RhbmdsZVxyXG4gICAgbGV0IHcgPSB3MnNfdyhtQ3VycmVudFggLSBtQ2xpY2tYKTsgLy8gV2lkdGggZm9yIHJlY3RhbmdsZS5cclxuICAgIGxldCBoID0gdzJzX2gobUN1cnJlbnRZIC0gbUNsaWNrWSk7IC8vIEhlaWdodCBmb3IgcmVjdGFuZ2xlLlxyXG5cclxuICAgIGxldCBjb2xvciA9IGN1cnJlbnRUaGVtZS5zZWxlY3Rpb25Db2xvcjtcclxuICAgIGlmKHdpbmRvdy5jdHJsKSBjb2xvciA9IGN1cnJlbnRUaGVtZS5zZWxlY3Rpb25DdHJsQ29sb3I7XHJcbiAgICBlbHNlIGlmKHdpbmRvdy5hbHQpIGNvbG9yID0gY3VycmVudFRoZW1lLnNlbGVjdGlvbkFsdENvbG9yO1xyXG5cclxuICAgIF9EcmF3UmVjdGFuZ2xlKGNvbG9yLCBjdXJyZW50VGhlbWUuc2VsZWN0aW9uT3BhY2l0eSwgeCwgeSwgdywgaCk7XHJcbiAgICBfRHJhd1JlY3RhbmdsZShjb2xvciwgY3VycmVudFRoZW1lLnNlbGVjdGlvbkVkZ2VPcGFjaXR5LCB4LCB5LCB3LCBoLCB0cnVlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gUmVuZGVyQmFja2dyb3VuZCgpIHtcclxuICAgIGlmKCF3aW5kb3cuU0hPV19URVhUVVJFUykge1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBjdXJyZW50VGhlbWUuYmFja2dyb3VuZENvbG9yO1xyXG4gICAgICAgIGRyYXdfcmVjdCgwLCAwLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZHJhd19pbWFnZSh3aW5kb3cuQ0FDSEVEX1NLWVtwcmV2aWV3QmFja2dyb3VuZF0sIDAsIDAsIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBTbmFwVG9HcmlkKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAvIHdpbmRvdy5HUklEX1NOQVBQSU5HKSAqIHdpbmRvdy5HUklEX1NOQVBQSU5HO1xyXG59XHJcblxyXG5mdW5jdGlvbiBSZW5kZXJDcm9zc0N1cnNvcigpIHtcclxuICAgIGlmKHdpbmRvdy5hY3RpdmVfdG9vbCA9PSBcImVkaXRcIikgcmV0dXJuO1xyXG4gICAgY3R4Lmdsb2JhbEFscGhhID0gMTtcclxuICAgIGRyYXdfaW1hZ2UoXHJcbiAgICAgICAgd2luZG93LmltZ19wdXQsXHJcbiAgICAgICAgdzJzX3goU25hcFRvR3JpZChtQ3VycmVudFgpKSAtIDE1LFxyXG4gICAgICAgIHcyc195KFNuYXBUb0dyaWQobUN1cnJlbnRZKSkgLSAxNSxcclxuICAgICAgICAzMSxcclxuICAgICAgICAzMVxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gUmVuZGVyRnJhbWUoKSB7XHJcbiAgICBpZighd2luZG93Lm5lZWRfcmVkcmF3KSByZXR1cm47XHJcbiAgICBjYW52YXNXaWR0aCA9IHdpbmRvdy5sc3U7XHJcbiAgICBjYW52YXNIZWlnaHQgPSB3aW5kb3cubHN2O1xyXG4gICAgY3VycmVudFRoZW1lID0gdGhlbWVzW3dpbmRvdy5USEVNRV07XHJcbiAgICBncmlkT3BhY2l0eSA9IHdpbmRvdy5HUklEX0FMUEhBO1xyXG5cclxuICAgIG1DbGlja1ggPSB3aW5kb3cubG1kcndhO1xyXG4gICAgbUNsaWNrWSA9IHdpbmRvdy5sbWRyd2I7XHJcbiAgICBtQ3VycmVudFggPSB3aW5kb3cubG13YTtcclxuICAgIG1DdXJyZW50WSA9IHdpbmRvdy5sbXdiO1xyXG5cclxuICAgIHdpbmRvdy5jYW52LnN0eWxlLmN1cnNvciA9IFwiZGVmYXVsdFwiO1xyXG4gICAgY3R4Lmdsb2JhbEFscGhhID0gMTtcclxuXHJcbiAgICBSZW5kZXJCYWNrZ3JvdW5kKCk7XHJcbiAgICBSZW5kZXJHcmlkKCk7XHJcbiAgICBSZW5kZXJBbGxPYmplY3RzKCk7XHJcbiAgICBSZW5kZXJTZWxlY3Rpb25Cb3goKTtcclxuICAgIFJlbmRlckNyb3NzQ3Vyc29yKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERpc3BsYXlTdGF0aXN0aWNzKCkge1xyXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImd1aV9yZW5kZXJJbmZvXCIpO1xyXG4gICAgaWYoZWxlbWVudCA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBlbGVtZW50LmlkID0gXCJndWlfcmVuZGVySW5mb1wiO1xyXG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gXCJXYWl0aW5nIGZvciBkYXRhLi4uXCI7XHJcbiAgICAgICAgd2luZG93LnJpZ2h0X3BhbmVsLmNoaWxkTm9kZXNbMF0uaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3VpX3BhcmFtc1wiKSk7XHJcbiAgICB9XHJcbiAgICBsZXQgdGV4dCA9IFwiIFwiO1xyXG4gICAgdGV4dCArPSBgUmVuZGVyZXIgRlBTOiAke2Rpc3BsYXlGUFN9IDxicj5gO1xyXG4gICAgdGV4dCArPSBgUmVuZGVyZWQgT2JqZWN0OiAke3RvdGFsUmVuZGVyZWRPYmplY3RzfSAvICR7d2luZG93LmVzLmxlbmd0aH1gO1xyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSB0ZXh0LnNsaWNlKDEpLnJlcGxhY2VBbGwoXCJcXG5cIiwgXCI8YnI+XCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUaW1lTXMoKSB7cmV0dXJuIChuZXcgRGF0ZSgpKS5nZXRUaW1lKCl9XHJcblxyXG5mdW5jdGlvbiBSZXF1ZXN0UmVkcmF3SWZHcmlkTW92ZWQoKSB7XHJcbiAgICBsZXQgc3BlZWRGYWN0b3IgPSB3aW5kb3cua19zaGlmdCA/IDUgOiAxO1xyXG5cclxuICAgIGZ1bmN0aW9uIHRyaWdnZXJNb3ZlKCkge1xyXG4gICAgICAgIHdpbmRvdy56b29tX3ZhbGlkYXRlKCk7XHJcbiAgICAgICAgd2luZG93Lm5lZWRfcmVkcmF3ID0gdHJ1ZTtcclxuICAgICAgICB3aW5kb3cubG1kID0gZmFsc2U7XHJcbiAgICAgICAgd2luZG93Lmxtd2EgPSBzMndfeCh3aW5kb3cubW91c2VfeCk7XHJcbiAgICAgICAgd2luZG93Lmxtd2IgPSBzMndfeCh3aW5kb3cubW91c2VfeSk7XHJcbiAgICAgICAgLy93aW5kb3cubV9tb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGRpZE1vdmUgPSBmYWxzZTtcclxuICAgIC8vIFguXHJcbiAgICBpZih3aW5kb3cuc3BlZWRfeCAhPT0gMCkge1xyXG4gICAgICAgIGxldCB0b0FkZCA9IHdpbmRvdy56b29tICogMTAgKiBzcGVlZEZhY3RvciAqIHdpbmRvdy5zcGVlZF94O1xyXG4gICAgICAgIHdpbmRvdy5kaXNfZnJvbV94ICs9IHRvQWRkO1xyXG4gICAgICAgIHdpbmRvdy5kaXNfdG9feCArPSB0b0FkZDtcclxuICAgICAgICBkaWRNb3ZlID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIC8vIFkuXHJcbiAgICBpZih3aW5kb3cuc3BlZWRfeSAhPT0gMCkge1xyXG4gICAgICAgIGxldCB0b0FkZCA9IHdpbmRvdy56b29tICogMTAgKiBzcGVlZEZhY3RvciAqIHdpbmRvdy5zcGVlZF95O1xyXG4gICAgICAgIHdpbmRvdy5kaXNfZnJvbV95ICs9IHRvQWRkO1xyXG4gICAgICAgIHdpbmRvdy5kaXNfdG9feSArPSB0b0FkZDtcclxuICAgICAgICBkaWRNb3ZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZihkaWRNb3ZlKSB0cmlnZ2VyTW92ZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBIYW5kbGVTaW5nbGVGcmFtZSgpIHtcclxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoSGFuZGxlU2luZ2xlRnJhbWUpO1xyXG5cclxuICAgIFJlcXVlc3RSZWRyYXdJZkdyaWRNb3ZlZCgpO1xyXG4gICAgUmVuZGVyRnJhbWUoKTtcclxuICAgIGlmKHdpbmRvdy5uZWVkX0dVSVBhcmFtc191cGRhdGUpIHtcclxuICAgICAgICB3aW5kb3cubmVlZF9HVUlQYXJhbXNfdXBkYXRlID0gZmFsc2U7XHJcbiAgICAgICAgd2luZG93LlVwZGF0ZUdVSVBhcmFtcygpO1xyXG4gICAgICAgIHdpbmRvdy5VcGRhdGVHVUlPYmplY3RzTGlzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZwc0FjY3VtdWxhdG9yKys7XHJcbiAgICBpZigoZ2V0VGltZU1zKCkgLSBsYXN0VGltZSkgPj0gMTAwMCkge1xyXG4gICAgICAgIGxhc3RUaW1lID0gZ2V0VGltZU1zKCk7XHJcbiAgICAgICAgZGlzcGxheUZQUyA9IGZwc0FjY3VtdWxhdG9yO1xyXG4gICAgICAgIGZwc0FjY3VtdWxhdG9yID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBEaXNwbGF5U3RhdGlzdGljcygpO1xyXG5cclxuICAgIGlmKGFsZWlSdW5uaW5nICYmICFoYXZlRm9yY2VkUmVjYWxjdWxhdGlvbikge1xyXG4gICAgICAgIGxldCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJycGFyYW1zXCIpO1xyXG4gICAgICAgIGlmKGVsZW0gPT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICAgICAgd2luZG93LlNob3dIaWRlT2JqZWN0Qm94KCk7XHJcbiAgICAgICAgd2luZG93LlNob3dIaWRlT2JqZWN0Qm94KCk7XHJcbiAgICAgICAgaGF2ZUZvcmNlZFJlY2FsY3VsYXRpb24gPSB0cnVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBQcmV2aWV3TW9kZVVwZGF0ZVZhcmlhYmxlcyh2YWwpIHtcclxuICAgIGlmKCF2YWwpIHJldHVybjtcclxuICAgIGZvcihsZXQgZWxlbWVudCBvZiB3aW5kb3cuZXMpIHtcclxuICAgICAgICBpZighKGVsZW1lbnQuX2NsYXNzID09IFwiaW5mXCIpKSBjb250aW51ZTtcclxuICAgICAgICBsZXQgcG0gPSBlbGVtZW50LnBtO1xyXG4gICAgICAgIGlmKHBtLm1hcmsgPT0gXCJza3lcIikge1xyXG4gICAgICAgICAgICBwcmV2aWV3QmFja2dyb3VuZCA9IHBtLmZvcnRlYW07XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFJlZ2lzdGVyU2V0dGluZ3NUb0FMRUkoKSB7XHJcbiAgICBpZighd2luZG93LkFMRUlfQWN0aXZlKSByZXR1cm47XHJcbiAgICBhbGVpUnVubmluZyA9IHRydWU7XHJcblxyXG4gICAgbGV0IEFMRUlBUEkgPSB3aW5kb3cuQUxFSUFQSTtcclxuXHJcbiAgICBpZihBTEVJQVBJID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoUmVnaXN0ZXJTZXR0aW5nc1RvQUxFSSwgMTAwMCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBzZXR0aW5ncyA9IEFMRUlBUEkuc2V0dGluZ3M7XHJcblxyXG4gICAgc2V0dGluZ3MuYWRkVGV4dChcIltSXSBDYXJ0b29uaXNoIEVkZ2VzOlwiLCBmYWxzZSk7XHJcbiAgICBzZXR0aW5ncy5jcmVhdGVCdXR0b25zKFwiQUxFSV9SZW5kZXJlcl9DYXJ0b29uaXNoRWRnZXNcIiwgdG9nZ2xlcywgXCJjYXJ0b29uaXNoRWRnZXNcIiwgW1tcIlllc1wiLCB0cnVlXSwgW1wiTm9cIiwgZmFsc2VdXSk7XHJcblxyXG4gICAgc2V0dGluZ3MuYWRkVGV4dChcIltSXSBPcmlnaW5hbCBTZWxlY3Q6XCIsIGZhbHNlKTtcclxuICAgIHNldHRpbmdzLmNyZWF0ZUJ1dHRvbnMoXCJBTEVJX1JlbmRlcmVyX09yaWdpbmFsU2VsZWN0T3ZlcmxheVwiLCB0b2dnbGVzLCBcIm9yaWdpbmFsU2VsZWN0T3ZlcmxheVwiLCBbW1wiWWVzXCIsIHRydWVdLCBbXCJOb1wiLCBmYWxzZV1dKTtcclxuXHJcbiAgICBzZXR0aW5ncy5hZGRUZXh0KFwiW1JdIFByZXZpZXcgd2FsbHM6XCIsIGZhbHNlKTtcclxuICAgIHNldHRpbmdzLmNyZWF0ZUJ1dHRvbnMoXCJBTEVJX1JlbmRlcmVyX1ByZXZpZXdXYWxsc1wiLCB0b2dnbGVzLCBcImJveFJlbmRlcmluZ1wiLCBbW1wiWWVzXCIsIHRydWVdLCBbXCJOb1wiLCBmYWxzZV1dKTtcclxuXHJcbiAgICB3aW5kb3cuQUxFSV9zZXR0aW5nVXBkYXRlQnV0dG9ucygpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQUxFSV9SZW5kZXJlcl9PbkRvY3VtZW50TG9hZCgpIHtcclxuICAgIGN0eCA9IHdpbmRvdy5jdHg7XHJcblxyXG4gICAgLy8gRHJhdyBmdW5jdGlvbnMuXHJcbiAgICBkcmF3X3JlY3RfZWRnZXMgPSAoeCwgeSwgdywgaCkgPT4gY3R4LnN0cm9rZVJlY3QoeCwgeSwgdywgaCk7XHJcbiAgICBkcmF3X3JlY3QgPSB3aW5kb3cubG1mcjtcclxuICAgIGRyYXdfZ3JpZGxpbmVzID0gd2luZG93LmxnO1xyXG4gICAgZHJhd19pbWFnZSA9IChpbWcsIHgsIHksIHcsIGgpID0+IHdpbmRvdy5NeURyYXdJbWFnZShpbWcsIHgsIHksIHcsIGgpO1xyXG5cclxuICAgIC8vIE9iamVjdHMuXHJcbiAgICByZWdpb25JbWFnZXMgPSB7XHJcbiAgICAgICAgMTogd2luZG93LmltZ19yZWdpb24sXHJcbiAgICAgICAgOTogd2luZG93LmltZ19yZWdpb25fcmVkLFxyXG4gICAgICAgIDEwOiB3aW5kb3cuaW1nX3JlZ2lvbl9ibHVlXHJcbiAgICB9XHJcblxyXG4gICAgLy8gU3RvcmluZyBmdW5jdGlvbnMgaW50byBvdXIgc2NvcGUuIChUbyBhdm9pZCB0YW1wZXJtb25rZXkgd2FybmluZylcclxuICAgIHcyc194ID0gd2luZG93Lncyc194O1xyXG4gICAgdzJzX3kgPSB3aW5kb3cudzJzX3k7XHJcbiAgICBzMndfeCA9IHdpbmRvdy5zMndfeDtcclxuICAgIHMyd195ID0gd2luZG93LnMyd195O1xyXG4gICAgdzJzX2ggPSB3aW5kb3cudzJzX2g7XHJcbiAgICB3MnNfdyA9IHdpbmRvdy53MnNfdztcclxuICAgIHMyd19oID0gd2luZG93LnMyd19oO1xyXG4gICAgczJ3X3cgPSB3aW5kb3cuczJ3X3c7XHJcbiAgICAvLyBQYXRjaGluZy5cclxuICAgIGxldCBvc3RzID0gd2luZG93LlNob3dUZXh0dXJlc1NldDtcclxuICAgIHdpbmRvdy5TaG93VGV4dHVyZXNTZXQgPSAodmFsKSA9PiB7UHJldmlld01vZGVVcGRhdGVWYXJpYWJsZXModmFsKTsgb3N0cyh2YWwpfVxyXG4gICAgd2luZG93LlJlbmRlciA9ICgpID0+IHt9OyAvLyBNYWtlIFJlbmRlciBmdW5jdGlvbiBkbyBub3RoaW5nLlxyXG4gICAgd2luZG93LmFuaSA9ICgpID0+IHt9OyAvLyBNYWtlIGFuaSBmdW5jdGlvbiBkbyBub3RoaW5nLlxyXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShIYW5kbGVTaW5nbGVGcmFtZSk7XHJcblxyXG4gICAgLy8gU2V0dGluZyBkZWZhdWx0IHZhbHVlcy5cclxuICAgIGxhc3RUaW1lID0gZ2V0VGltZU1zKCk7XHJcblxyXG4gICAgUmVnaXN0ZXJTZXR0aW5nc1RvQUxFSSgpO1xyXG4gICAgaWYoIWFsZWlSdW5uaW5nKSB3aW5kb3cuTmV3Tm90ZShgQUxFSSBSZW5kZXJlcjogWW91IGFyZSBub3QgcnVubmluZyB3aXRoIEFMRUkuIERvbid0IGV4cGVjdCBmZWF0dXJlIGNvbXBsZXRlbmVzcyBhcyByZW5kZXJlciBkZXBlbmRzIG9uIEFMRUkgZ2l2aW5nIHNvbWUgaW5mb3JtYXRpb25zLmAsIFwiI0ZGRkYwMFwiKTtcclxuXHJcbiAgICAvLyBMb2dnaW5nLlxyXG4gICAgY29uc29sZS5sb2coYFtBTEVJIFJlbmRlcmVyXTogQWN0aXZlLmApO1xyXG59XHJcblxyXG5sZXQgaXNOYXRpdmU7XHJcblxyXG50cnkge1xyXG4gICAgR01faW5mbzsgLy8gSWYgdGhpcyBpcyBydW5uaW5nIHVuZGVyIHRhbXBlcm1vbmtleS5cclxuICAgIFxyXG4gICAgLy8gSWYgQUxFSSBpcyBub3QgcnVubmluZyB1cy5cclxuICAgIGlmKFtcIkFMRSBJbXByb3ZlbWVudHNcIiwgXCJBTEUgSW1wcm92ZW1lbnRzIExvY2FsXCJdLmluZGV4T2YoR01faW5mby5zY3JpcHQubmFtZSkgPT0gLTEpIHtcclxuICAgICAgIGlzTmF0aXZlID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICBpc05hdGl2ZSA9IGZhbHNlOyAvLyBPciBBTEVJIGlzIHJ1bm5pbmcgdXMuXHJcbiAgICB9O1xyXG59XHJcbmNhdGNoKGUpIHtpc05hdGl2ZSA9IHRydWU7fVxyXG5cclxuLy8gVGhpcyBpcyB0byBlbnN1cmUgcmVuZGVyZXIgY2FuIHN0aWxsIHJ1biBhcyBzZXBhcmF0ZSB1c2Vyc2NyaXB0LiAoTWFudWFsIHdvcmsgaGFzIHRvIGJlIGRvbmUgYnkgcmVtb3ZpbmcgJ2V4cG9ydCcgZnJvbSBhYm92ZSBtYW51YWxseS4pXHJcbmlmKGlzTmF0aXZlKSB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiBBTEVJX1JlbmRlcmVyX09uRG9jdW1lbnRMb2FkKCkpO1xyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAqIGFzIGxvYWRjc3MgZnJvbSBcIi4vbG9hZGNzcy5qc1wiO1xyXG5pbXBvcnQgeyBwYXJzZSBhcyBhbGVzY3JpcHRQYXJzZSB9IGZyb20gXCIuL2FsZXNjcmlwdC5qc1wiO1xyXG5pbXBvcnQge0FMRUlfUmVuZGVyZXJfT25Eb2N1bWVudExvYWQgYXMgUmVuZGVyZXJfaW5pdGlhbGl6ZX0gZnJvbSBcIi4vcmVuZGVyZXIudXNlci5qc1wiXHJcblxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbmxldCB3aW5kb3cgPSB1bnNhZmVXaW5kb3c7XHJcbmxldCBpc05hdGl2ZTtcclxudHJ5IHtcclxuICAgIEdNX2luZm9cclxuICAgIGlzTmF0aXZlID0gdHJ1ZTtcclxuICAgIHdpbmRvd1tcIm5hdGl2ZUFMRUlSdW5uaW5nXCJdID0gdHJ1ZTtcclxufSBjYXRjaCAoZSkge1xyXG4gICAgaXNOYXRpdmUgPSBmYWxzZVxyXG59O1xyXG5cclxuaWYoIWlzTmF0aXZlICYmICh3aW5kb3dbXCJuYXRpdmVBTEVJUnVubmluZ1wiXSA9PSB0cnVlKSkge1xyXG4gICAgSGVsbG9fSWdub3JlVGhpc0Vycm9yX0l0SXNJbnRlbnRpb25hbCAvLyBob3BlIHRoaXMgaXMgbm90IGRlZmluZWRcclxufVxyXG53aW5kb3dbXCJBTEVJX0FjdGl2ZVwiXSA9IHRydWU7XHJcblxyXG4vLyBTaG9ydGhhbmQgdGhpbmdzXHJcbmZ1bmN0aW9uICRpZChpZCkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxufVxyXG5mdW5jdGlvbiAkcXVlcnkoc2VsZWN0b3IpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxufVxyXG5cclxubGV0IFJPT1RfRUxFTUVOVCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxubGV0IHN0eWxlc2hlZXRzID0gZG9jdW1lbnQuc3R5bGVTaGVldHM7XHJcbmxldCBWQUxfVEFCTEUgPSB7fTsgLy8gV2lsbCBiZSBmaWxsZWQgbGF0ZXIuXHJcbmxldCBkaXNwbGF5T3BlcmF0aW9uQ29tcGxldGVOb3RlcyA9IHRydWU7XHJcbmxldCBSRUdJT05fRVhFQ1VURV9QQVJBTV9JRDsgLy8gV2lsbCBiZSBzZXQgbGF0ZXIuXHJcbmxldCBPQ01fTE9BREVEID0gdHJ1ZTsgLy8gQXNzdW1lIGVtcHR5IG1hcC5cclxubGV0IEV4dGVuZGVkVHJpZ2dlcnNMb2FkZWQgPSBmYWxzZTtcclxuXHJcbmNvbnN0IElORk8gPSAwO1xyXG5jb25zdCBERUJVRyA9IDE7XHJcbmNvbnN0IERFQlVHMiA9IDI7XHJcbmNvbnN0IFZFUkJPU0UgPSBERUJVRzI7IC8vIEFsaWFzLlxyXG5jb25zdCBXQVJOID0gLTE7XHJcbmNvbnN0IFNXQVJOID0gLTI7XHJcbmNvbnN0IF9fT0NNX0NIRUNLRURfS0VZUyA9IFtcInRhcmdldFwiLCBcImF0dGFjaFwiLCBcInVzZV90YXJnZXRcIiwgXCJpbmNhclwiLCBcIm9uZGVhdGhcIiwgXCJjYWxsYmFja1wiXTsgLy8gT0NNID0gT2JqZWN0IENvbm5lY3Rpb24gTWFwcGluZ1xyXG5cclxuLy8gSnVzdCBmb3Igc3R5bGluZy5cclxuY29uc3QgQU5TSV9SRVNFVCA9IFwiXFx4MUJbMG1cIlxyXG5jb25zdCBBTlNJX1JFRCA9IFwiXFx4MUJbMzFtXCJcclxuY29uc3QgQU5TSV9HUkVZID0gXCJcXHgxQlszN21cIlxyXG5jb25zdCBBTlNJX1lFTExPVyA9IFwiXFx4MUJbOTNtXCJcclxuY29uc3QgQU5TSV9HUkVFTiA9IFwiXFx4MUJbOTJtXCJcclxuY29uc3QgQU5TSV9DWUFOID0gXCJcXHgxQls5Nm1cIlxyXG5cclxuZnVuY3Rpb24gcmVhZFN0b3JhZ2Uoa2V5LCBkZWZhdWx0VmFsdWUsIGZ1bmMpIHtcclxuICAgIGxldCB2YWwgPSBsb2NhbFN0b3JhZ2Vba2V5XTtcclxuICAgIGlmICh2YWwgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcclxuICAgIHJldHVybiBmdW5jKGxvY2FsU3RvcmFnZVtrZXldKVxyXG59XHJcblxyXG5pZiAobG9jYWxTdG9yYWdlWydSSUdIVF9QQU5FTF9XSURUSCddICE9IHVuZGVmaW5lZCkge1xyXG4gICAgbG9jYWxTdG9yYWdlW1wiQUxFSV9SaWdodFBhbmVsV2lkdGhcIl0gPSBsb2NhbFN0b3JhZ2VbXCJSSUdIVF9QQU5FTF9XSURUSFwiXTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiUklHSFRfUEFORUxfV0lEVEhcIik7XHJcbn1cclxuXHJcbmxldCBhbGVpU2V0dGluZ3MgPSB7XHJcbiAgICByaWdodFBhbmVsU2l6ZTogICAgIHJlYWRTdG9yYWdlKFwiQUxFSV9SaWdodFBhbmVsV2lkdGhcIiwgICAgICAgICBcIjMwdndcIiwgICh2YWwpID0+IHZhbCAgICAgICAgICksXHJcbiAgICB0cmlnZ2VyRWRpdFRleHRTaXplOnJlYWRTdG9yYWdlKFwiQUxFSV9FZGl0VGV4dFNpemVcIiwgICAgICAgICAgICBcIjEycHhcIiwgICh2YWwpID0+IHZhbCArIFwicHhcIiAgKSxcclxuICAgIHN0YXJzSW1hZ2U6ICAgICAgICAgcmVhZFN0b3JhZ2UoXCJBTEVJX1N0YXJJbWFnZVwiLCAgICAgICAgICAgICAgIFwic3RhcnMyLmpwZ1wiLCAodmFsKSA9PiB2YWwgICAgKSxcclxuICAgIGxvZ0xldmVsOiAgICAgICAgICAgcmVhZFN0b3JhZ2UoXCJBTEVJX0xvZ0xldmVsXCIsICAgICAgICAgICAgICAgIDAsICAgICBwYXJzZUludCAgICAgICAgICAgICAgICksXHJcbiAgICBzaG93VHJpZ2dlcklEczogICAgIHJlYWRTdG9yYWdlKFwiQUxFSV9TaG93VHJpZ2dlcklEc1wiLCAgICAgICAgICBmYWxzZSwgKHZhbCkgPT4gdmFsID09PSBcInRydWVcIiksXHJcbiAgICBlbmFibGVUb29sdGlwczogICAgIHJlYWRTdG9yYWdlKFwiQUxFSV9TaG93VG9vbHRpcHNcIiwgICAgICAgICAgICBmYWxzZSwgKHZhbCkgPT4gdmFsID09PSBcInRydWVcIiksXHJcbiAgICBzaG93U2FtZVBhcmFtZXRlcnM6IHJlYWRTdG9yYWdlKFwiQUxFSV9TaG93U2FtZVBhcmFtZXRlcnNcIiwgICAgICB0cnVlICwgKHZhbCkgPT4gdmFsID09PSBcInRydWVcIiksXHJcbiAgICByZW1hdGNoVUlEOiAgICAgICAgIHJlYWRTdG9yYWdlKFwiQUxFSV9SZW1hcFVJRFwiLCAgICAgICAgICAgICAgICBmYWxzZSwgKHZhbCkgPT4gdmFsID09PSBcInRydWVcIiksXHJcbiAgICAvL3Nob3dJRHM6ICAgICAgICAgICAgcmVhZFN0b3JhZ2UoXCJBTEVJX1Nob3dJRHNcIiwgICAgICAgICAgICAgICBmYWxzZSwgKHZhbCkgPT4gdmFsID09PSBcInRydWVcIiksXHJcbiAgICBibGFja1RoZW1lOiAgICAgICAgIHJlYWRTdG9yYWdlKFwiQUxFSV9CbGFja1RoZW1lXCIsICAgICAgICAgICAgICBmYWxzZSwgKHZhbCkgPT4gdmFsID09PSBcInRydWVcIiksXHJcbiAgICBncmlkQmFzZWRPblNuYXBwaW5nOnJlYWRTdG9yYWdlKFwiQUxFSV9ncmlkQmFzZWRPblNuYXBwaW5nXCIsICAgICB0cnVlLCAgKHZhbCkgPT4gdmFsID09PSBcInRydWVcIiksXHJcbiAgICAvL3Nob3daSW5kZXg6ICAgICAgICAgcmVhZFN0b3JhZ2UoXCJBTEVJX1Nob3daSW5kZXhcIiwgICAgICAgICAgICAgIGZhbHNlLCAodmFsKSA9PiB2YWwgPT09IFwidHJ1ZVwiKSxcclxuICAgIHJlbmRlck9iamVjdE5hbWVzOiAgcmVhZFN0b3JhZ2UoXCJBTEVJX1JlbmRlck9iamVjdE5hbWVzXCIsICAgICAgIHRydWUsICAodmFsKSA9PiB2YWwgPT09IFwidHJ1ZVwiKSxcclxuICAgIC8vb2NtRW5hYmxlZDogICAgICAgICByZWFkU3RvcmFnZShcIkFMRUlfT0NNRW5hYmxlZFwiLCAgICAgICAgICAgICAgZmFsc2UsICh2YWwpID0+IHZhbCA9PT0gXCJ0cnVlXCIpLFxyXG4gICAgb2NtRW5hYmxlZDogICAgICAgICB0cnVlLFxyXG4gICAgZXh0ZW5kZWRUcmlnZ2VyczogICByZWFkU3RvcmFnZShcIkFMRUlfRXh0ZW5kZWRUcmlnZ2Vyc0VuYWJsZWRcIiwgdHJ1ZSwgICh2YWwpID0+IHZhbCA9PT0gXCJ0cnVlXCIpLFxyXG4gICAgY3VzdG9tUmVuZGVyZXI6ICAgICByZWFkU3RvcmFnZShcIkFMRUlfUmVuZGVyZXJfRW5hYmxlZFwiLCAgICAgICAgdHJ1ZSwgICh2YWwpID0+IHZhbCA9PT0gXCJ0cnVlXCIpLFxyXG4gICAgb3JkZXJlZE5hbWluZzogICAgICByZWFkU3RvcmFnZShcIkFMRUlfb3JkZXJlZE5hbWluZ1wiLCAgICAgICAgICAgdHJ1ZSwgICh2YWwpID0+IHZhbCA9PT0gXCJ0cnVlXCIpXHJcbn1cclxud2luZG93LmFsZWlTZXR0aW5ncyA9IGFsZWlTZXR0aW5ncztcclxuXHJcbmZ1bmN0aW9uIHdyaXRlU3RvcmFnZShrZXksIHZhbHVlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZVtrZXldID0gdmFsdWU7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgTmV3Tm90ZShcIkFMRUk6IFRoZXJlIHdhcyBzb21lIGlzc3VlIHRyeWluZyB0byBzYXZlIGludG8gc3RvcmFnZS4gWW91IG1pZ2h0IG5lZWQgdG8gY2xlYXIgeW91ciBkYXRhcy5cIiwgbm90ZV9iYWQpO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBsZXZlbFRvTmFtZU1hcCA9IHtcclxuICAgIDA6IGAke0FOU0lfQ1lBTn1JTkZPJHtBTlNJX1JFU0VUfWAsXHJcbiAgICAxOiBgJHtBTlNJX0dSRUVOfURFQlVHJHtBTlNJX1JFU0VUfWAsXHJcbiAgICAyOiBgJHtBTlNJX0dSRUVOfVZFUkJPU0Uke0FOU0lfUkVTRVR9YFxyXG59XHJcblxyXG5mdW5jdGlvbiBhbGVpTG9nKGxldmVsLCB0ZXh0KSB7XHJcbiAgICBpZiAobGV2ZWwgPD0gV0FSTikge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihgW0FMRUk6V0FSTklOR106ICR7dGV4dH1gKTtcclxuICAgICAgICBpZihsZXZlbCA9PT0gV0FSTikgTmV3Tm90ZShgQUxFSTogUGxlYXNlIGNoZWNrIGNvbnNvbGUuYCwgXCIjRkZGRjAwXCIpO1xyXG4gICAgfWVsc2UgaWYgKGxldmVsIDw9IGFsZWlTZXR0aW5ncy5sb2dMZXZlbClcclxuICAgICAgICBjb25zb2xlLmxvZyhgWyR7QU5TSV9HUkVFTn1BTEVJOiR7bGV2ZWxUb05hbWVNYXBbbGV2ZWxdfV06ICR7dGV4dH1gKVxyXG59XHJcbmFsZWlMb2coSU5GTywgXCJTdGFydGluZyB1cC4uLlwiKTtcclxuXHJcbi8vIE9yaWdpbmFsIGZ1bmN0aW9ucywgZ2xvYmFsbHkgc2F2ZWQgaGVyZSBpZiBuZWVkZWRcclxuLy8gSlNfIHByZWZpeCBmb3IgSmF2YVNjcmlwdCBvbmVzLCBBTEVfIGZvciBBTEUgb25lc1xyXG5sZXQgSlNfc2V0VGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0O1xyXG5sZXQgSlNfZXZhbCA9IHdpbmRvdy5ldmFsO1xyXG5sZXQgQUxFX1JlbmRlcjtcclxuXHJcbmxldCBhbGVpU2Vzc2lvbklEID0gbnVsbDsgLy8gSUQgb2YgdGhpcyBzZXNzaW9uXHJcbmxldCBhbGVpU2Vzc2lvbkxpc3QgPSBbXTsgLy8gU2V0IG9mIGtub3duIHNlc3Npb24gSURzXHJcblxyXG5mdW5jdGlvbiB1cGRhdGVQYXJhbWV0ZXJzKCkge1xyXG4gICAgLy8gRG9lcyB0aGluZ3MgdG8gcGFyYW1ldGVycyBkZXBlbmRpbmcgb24gcHVycG9zZS5cclxuICAgIGZ1bmN0aW9uIGFkZChrZXksIHR5cGUsIG5hbWUsIG9ialR5cGUpIHtcclxuICAgICAgICBwYXJhbV90eXBlW3BhcmFtX3R5cGUubGVuZ3RoXSA9IFtrZXksIHR5cGUsIG5hbWUsIFwiXCIsIG9ialR5cGVdO1xyXG4gICAgfVxyXG4gICAgLy8gQWRkaW5nIHBhcmFtZXRlcnMgdGhhdCB0aGUgZ2FtZSBhY2NlcHRzIGJ1dCBBTEUgZG9lcyBub3QgaGF2ZS5cclxuICAgIGFkZChcIm1vdmluZ1wiLCBcImJvb2xcIiwgXCJJcyBNb3Zpbmc/XCIsIFwiZG9vclwiKTtcclxuICAgIGFkZChcInRhcnhcIiwgXCJ2YWx1ZVwiLCBcIlRhcmdldCBYXCIsIFwiZG9vclwiKTtcclxuICAgIGFkZChcInRhcnlcIiwgXCJ2YWx1ZVwiLCBcIlRhcmdldCBZXCIsIFwiZG9vclwiKTtcclxuICAgIC8vIEFkZGluZyBvdXIgb3duIHBhcmFtZXRlci5cclxuICAgIGFkZChcIl9faWRcIiwgXCJ2YWx1ZVwiLCBcIk9iamVjdCBJRFwiLCBcIipcIik7XHJcbiAgICBhZGQoXCJfX3ByaW9yaXR5XCIsIFwidmFsdWVcIiwgXCJPYmplY3QgcHJpb3JpdHlcIiwgXCIqXCIpO1xyXG4gICAgYWRkKFwiZXhlY3V0ZVwiLCBcImJvb2xcIiwgXCJFeGVjdXRlcyBkaXJlY3RseT9cIiwgXCJ0cmlnZ2VyXCIpO1xyXG4gICAgYWRkKFwidXNlc190aW1lclwiLCBcImJvb2xcIiwgXCJDYWxscyB0aW1lcj9cIiwgXCJyZWdpb25cIik7XHJcbiAgICBhZGQoXCJ0ZXh0XCIsIFwic3RyaW5nXCIsIFwiUGxhY2Vob2xkZXIgdGV4dFwiLCBcImRlY29yXCIpO1xyXG4gICAgYWRkKFwiYXR0YWNoXCIsIFwiZG9vcitub25lXCIsIFwiQXR0YWNoIHRvXCIsIFwid2F0ZXJcIik7XHJcblxyXG4gICAgLy8gYWRkKFwiZXh0ZW5kZWRcIiwgXCJib29sXCIsIFwiRXh0ZW5kZWQ/XCIsIFwidHJpZ2dlclwiKTtcclxuICAgIC8vIGFkZChcInRvdGFsTnVtT2ZBY3Rpb25zXCIsIFwidmFsdWVcIiwgXCJUb3RhbCBOby4gT2YgQWN0aW9uczogXCIsIFwidHJpZ2dlclwiKTtcclxuICAgIC8vIGFkZChcIm5leHRUcmlnZ2VyXCIsIFwidHJpZ2dlcitub25lXCIsIFwiTmV4dCB0cmlnZ2VyXCIsIFwidHJpZ2dlclwiKTtcclxuXHJcbiAgICAvLyBQYXRjaGluZyBwYXJhbWV0ZXJzXHJcbiAgICBwYXJhbV90eXBlWzBdID0gWyd1aWQnLCAnc3RyaW5nJywgJ05hbWUnLCAnT2JqZWN0IE5hbWUnLCAnKiddO1xyXG5cclxuICAgIC8vIFNldHRpbmcgZ2xvYmFsIHZhcmlhYmxlcyBmb3IgZnV0dXJlIHVzZVxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHBhcmFtX3R5cGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgcGFyYW0gPSBwYXJhbV90eXBlW2ldO1xyXG4gICAgICAgIGxldCBrZXkgPSBwYXJhbVswXTtcclxuICAgICAgICBsZXQgc2VsZWN0b3IgPSBwYXJhbVs0XTtcclxuXHJcbiAgICAgICAgaWYoKGtleSA9PSBcInVzZV90YXJnZXRcIikgJiYgKHNlbGVjdG9yID09IFwicmVnaW9uXCIpKSB7XHJcbiAgICAgICAgICAgIFJFR0lPTl9FWEVDVVRFX1BBUkFNX0lEID0gaTtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKFtcIndcIiwgXCJoXCJdLmluZGV4T2Yoa2V5KSAhPSAtMSkgeyAvLyBFbmFibGVzIGhlaWdodCBhbmQgd2lkdGggcGFyYW1ldGVycyB0byBiZSBhYmxlIHRvIGhhdmUgbmVnYXRpdmUgaGVpZ2h0IGFuZCB3aWR0aC5cclxuICAgICAgICAgICAgcGFyYW1fdHlwZVtpXVsxXSA9IFwidmFsdWUrcm91bmQxMFwiO1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBWQUxfVEFCTEVbXCJ0aW1lcitub25lXCJdID0gbmV3IEFycmF5KCk7XHJcbiAgICBWQUxfVEFCTEVbXCJ0aW1lcitub25lXCJdWy0xXSA9IFwiLSBObyB0aW1lciAtXCI7XHJcbiAgICBWQUxfVEFCTEVbXCJ0aW1lcitub25lXCJdW1wiW2xpc3RvZl1cIl0gPSBcInRpbWVyXCI7IC8vIFNvbWVib2R5IHNhdmUgbWUuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVNvdW5kcygpIHtcclxuICAgIC8vIEFkZHMgc291bmRzIHRoYXQgZXhpc3QgaW4gZ2FtZSBidXQgbm90IGluIEFMRVxyXG4gICAgbGV0IFNWVFMgPSBWQUxfVEFCTEVbXCJzb3VuZFwiXTtcclxuICAgIFNWVFNbJ2FtX2Jhc2UnXSA9ICdJbmRvb3IgQW1iaWVuY2UnO1xyXG4gICAgU1ZUU1snYW1fd2luZCddID0gJ091dGRvb3IgQW1iaWVuY2UnO1xyXG4gICAgU1ZUU1snYW5kcm9pZDJfZGllJ10gPSAnRFQtMTQ4IC0gRGVhdGgnO1xyXG4gICAgU1ZUU1snYW5kcm9pZDJfaHVydCddID0gJ0RULTE0OCAtIEh1cnQnO1xyXG4gICAgU1ZUU1snYW5kcm9pZDJfd2VsY29tZTInXSA9ICdEVC0xNDggLSBBbGVydGVkJztcclxuICAgIFNWVFNbJ2FycmluX2RlYXRoMSddID0gJ0FycmluIC0gRGVhdGgnO1xyXG4gICAgU1ZUU1snYXJyaW5fZHlpbmcnXSA9ICdBcnJpbiAtIER5aW5nJztcclxuICAgIFNWVFNbJ2FycmluX2h1cnQxJ10gPSAnQXJyaW4gLSBIdXJ0IDEnO1xyXG4gICAgU1ZUU1snYXJyaW5faHVydDInXSA9ICdBcnJpbiAtIEh1cnQgMic7XHJcbiAgICBTVlRTWydhcnJpbl93ZWxjb21lMSddID0gJ0FycmluIC0gQWxlcnRlZCAxJztcclxuICAgIFNWVFNbJ2FycmluX3dlbGNvbWUyJ10gPSAnQXJyaW4gLSBBbGVydGVkIDInO1xyXG4gICAgU1ZUU1snYXJyaW5fd2VsY29tZTMnXSA9ICdBcnJpbiAtIEFsZXJ0ZWQgMyc7XHJcbiAgICBTVlRTWydib3VuY2VfYnVsbGV0J10gPSAnRmFsa29uaWFuIFBTSSBDdXR0ZXIgLSBTaG90IEJvdW5jZSc7XHJcbiAgICBTVlRTWydkYXJ0NCddID0gJ01lZGljIFBpc3RvbCc7XHJcbiAgICBTVlRTWydleHBfZXZlbnRfc3RvcCddID0gJ0VYUCAtIFN0b3AnO1xyXG4gICAgU1ZUU1snZXhwX2xldmVsJ10gPSAnRVhQIC0gTGV2ZWwgVXAnO1xyXG4gICAgU1ZUU1snZXhwX3RpY2snXSA9ICdFWFAgLSBHYWluJztcclxuICAgIFNWVFNbJ2dhbWVwbGF5X3NvbmcnXSA9ICdLYXRoYXJzeXMgLSBFcmdlcyc7XHJcbiAgICBTVlRTWydncmF2aXRhdG9yMiddID0gJ0Zsb29yIGdyYXZpdGF0b3Igbm9pY2UnO1xyXG4gICAgU1ZUU1snaGVsbV9wcm94eV9hbGVydF9vdmVyX2hlcmVCJ10gPSAnUHJveHkgLSBPdmVyIGhlcmUhJztcclxuICAgIFNWVFNbJ2hlbG1fcHJveHlfYWxlcnRfdGFrZV9jb3ZlckInXSA9ICdQcm94eSAtIFRha2UgY292ZXIhJztcclxuICAgIFNWVFNbJ2hlbG1fcHJveHlfYWxlcnRfdXBfdGhlcmVBJ10gPSAnUHJveHkgLSBVcCB0aGVyZSEnO1xyXG4gICAgU1ZUU1snaGVsbV9wcm94eV9kZWF0aDMnXSA9ICdQcm94eSAtIERlYXRoIDEnO1xyXG4gICAgU1ZUU1snaGVsbV9wcm94eV9kZWF0aDQnXSA9ICdQcm94eSAtIERlYXRoIDInO1xyXG4gICAgU1ZUU1snaGVsbV9wcm94eV9kZWF0aDUnXSA9ICdQcm94eSAtIERlYXRoIDMnO1xyXG4gICAgU1ZUU1snaGVsbV9wcm94eV9kZWF0aDYnXSA9ICdQcm94eSAtIERlYXRoIDQnO1xyXG4gICAgU1ZUU1snaGVsbV9wcm94eV9keWluZ0MnXSA9ICdQcm94eSAtIEhlbHAhIDEnO1xyXG4gICAgU1ZUU1snaGVsbV9wcm94eV9keWluZ0YnXSA9ICdQcm94eSAtIEhlbHAhIDInO1xyXG4gICAgU1ZUU1snaGVsbV9wcm94eV9lbmVteV9kb3duX2ZhbnRhc3RpY0EnXSA9ICdQcm94eSAtIEZhbnRhc3RpYy4nO1xyXG4gICAgU1ZUU1snaGVsbV9wcm94eV9lbmVteV9kb3duX2dvdF9vbmVEJ10gPSAnUHJveHkgLSBHb3Qgb25lLic7XHJcbiAgICBTVlRTWydoZWxtX3Byb3h5X2VuZW15X2Rvd25fbmljZUEnXSA9ICdQcm94eSAtIE5pY2UuIDEnO1xyXG4gICAgU1ZUU1snaGVsbV9wcm94eV9lbmVteV9kb3duX25pY2VDJ10gPSAnUHJveHkgLSBOaWNlLiAyJztcclxuICAgIFNWVFNbJ2hlbG1fcHJveHlfaHVydDExJ10gPSAnUHJveHkgLSBIdXJ0IDEnO1xyXG4gICAgU1ZUU1snaGVsbV9wcm94eV9odXJ0MTInXSA9ICdQcm94eSAtIEh1cnQgMic7XHJcbiAgICBTVlRTWydoZWxtX3Byb3h5X2h1cnQxMyddID0gJ1Byb3h5IC0gSHVydCAzJztcclxuICAgIFNWVFNbJ2hlbG1fcHJveHlfaHVydDE0J10gPSAnUHJveHkgLSBIdXJ0IDQnO1xyXG4gICAgU1ZUU1snaGVsbV9wcm94eV9odXJ0MTUnXSA9ICdQcm94eSAtIEh1cnQgNSc7XHJcbiAgICBTVlRTWydoZWxtX3Byb3h5X2h1cnQxNyddID0gJ1Byb3h5IC0gSHVydCA2JztcclxuICAgIFNWVFNbJ2hlbG1fcHJveHlfaHVydDQnXSA9ICdQcm94eSAtIEh1cnQgNyc7XHJcbiAgICBTVlRTWydoZWxtX3Byb3h5X2h1cnQ1J10gPSAnUHJveHkgLSBIdXJ0IDgnO1xyXG4gICAgU1ZUU1snaGVsbV9wcm94eV9odXJ0OCddID0gJ1Byb3h5IC0gSHVydCA5JztcclxuICAgIFNWVFNbJ2hlbG1fcHJveHlfaHVydDknXSA9ICdQcm94eSAtIEh1cnQgMTAnO1xyXG4gICAgU1ZUU1snaGV4YWdvbl9kZWF0aDEnXSA9ICdIZXhhZ29uIC0gRGVhdGggMSc7XHJcbiAgICBTVlRTWydoZXhhZ29uX2RlYXRoMiddID0gJ0hleGFnb24gLSBEZWF0aCAyJztcclxuICAgIFNWVFNbJ2hleGFnb25fcGFpbjEnXSA9ICdIZXhhZ29uIC0gSHVydCAxJztcclxuICAgIFNWVFNbJ2hleGFnb25fcGFpbjInXSA9ICdIZXhhZ29uIC0gSHVydCAyJztcclxuICAgIFNWVFNbJ2hleGFnb25fcGFpbjMnXSA9ICdIZXhhZ29uIC0gSHVydCAzJztcclxuICAgIFNWVFNbJ2hleGFnb25fcGFpbjQnXSA9ICdIZXhhZ29uIC0gSHVydCA0JztcclxuICAgIFNWVFNbJ2hleGFnb25fd2VsY29tZTEnXSA9ICdIZXhhZ29uIC0gQWxlcnRlZCAxJztcclxuICAgIFNWVFNbJ2hleGFnb25fd2VsY29tZTInXSA9ICdIZXhhZ29uIC0gQWxlcnRlZCAyJztcclxuICAgIFNWVFNbJ2hleGFnb25fd2VsY29tZTMnXSA9ICdIZXhhZ29uIC0gQWxlcnRlZCAzJztcclxuICAgIFNWVFNbJ21haW5fc29uZyddID0gJ05QaG9uaXggLSBBbnRpZ3Jhdml0eSc7XHJcbiAgICBTVlRTWydvcmFraW5fZGVhdGgxJ10gPSAnT3Jha2luIC0gRGVhdGggMSc7XHJcbiAgICBTVlRTWydvcmFraW5fZGVhdGgyJ10gPSAnT3Jha2luIC0gRGVhdGggMic7XHJcbiAgICBTVlRTWydvcmFraW5faHVydCddID0gJ09yYWtpbiAtIEh1cnQnO1xyXG4gICAgU1ZUU1snb3Jha2luX3dlbGNvbWUnXSA9ICdPcmFraW4gLSBBbGVydGVkJztcclxuICAgIFNWVFNbJ3Byb3h5X2FsZXJ0X292ZXJfaGVyZUInXSA9ICdObyBIZWxtIFByb3h5IC0gT3ZlciBoZXJlISc7XHJcbiAgICBTVlRTWydwcm94eV9hbGVydF90YWtlX2NvdmVyQiddID0gJ05vIEhlbG0gUHJveHkgLSBUYWtlIGNvdmVyISc7XHJcbiAgICBTVlRTWydwcm94eV9hbGVydF91cF90aGVyZUEnXSA9ICdObyBIZWxtIFByb3h5IC0gVXAgdGhlcmUhJztcclxuICAgIFNWVFNbJ3Byb3h5X2RlYXRoMyddID0gJ05vIEhlbG0gUHJveHkgLSBEZWF0aCAxJztcclxuICAgIFNWVFNbJ3Byb3h5X2RlYXRoNCddID0gJ05vIEhlbG0gUHJveHkgLSBEZWF0aCAyJztcclxuICAgIFNWVFNbJ3Byb3h5X2RlYXRoNSddID0gJ05vIEhlbG0gUHJveHkgLSBEZWF0aCAzJztcclxuICAgIFNWVFNbJ3Byb3h5X2RlYXRoNiddID0gJ05vIEhlbG0gUHJveHkgLSBEZWF0aCA0JztcclxuICAgIFNWVFNbJ3Byb3h5X2R5aW5nQyddID0gJ05vIEhlbG0gUHJveHkgLSBIZWxwISAxJztcclxuICAgIFNWVFNbJ3Byb3h5X2R5aW5nRiddID0gJ05vIEhlbG0gUHJveHkgLSBIZWxwISAyICc7XHJcbiAgICBTVlRTWydwcm94eV9lbmVteV9kb3duX2ZhbnRhc3RpY0EnXSA9ICdObyBIZWxtIFByb3h5IC0gRmFudGFzdGljLic7XHJcbiAgICBTVlRTWydwcm94eV9lbmVteV9kb3duX2dvdF9vbmVEJ10gPSAnTm8gSGVsbSBQcm94eSAtIEdvdCBvbmUuJztcclxuICAgIFNWVFNbJ3Byb3h5X2VuZW15X2Rvd25fbmljZUEnXSA9ICdObyBIZWxtIFByb3h5IC0gTmljZS4gMSc7XHJcbiAgICBTVlRTWydwcm94eV9lbmVteV9kb3duX25pY2VDJ10gPSAnTm8gSGVsbSBQcm94eSAtIE5pY2UuIDInO1xyXG4gICAgU1ZUU1sncHJveHlfaHVydDExJ10gPSAnTm8gSGVsbSBQcm94eSAtIEh1cnQgMSc7XHJcbiAgICBTVlRTWydwcm94eV9odXJ0MTInXSA9ICdObyBIZWxtIFByb3h5IC0gSHVydCAyJztcclxuICAgIFNWVFNbJ3Byb3h5X2h1cnQxMyddID0gJ05vIEhlbG0gUHJveHkgLSBIdXJ0IDMnO1xyXG4gICAgU1ZUU1sncHJveHlfaHVydDE0J10gPSAnTm8gSGVsbSBQcm94eSAtIEh1cnQgNCc7XHJcbiAgICBTVlRTWydwcm94eV9odXJ0MTUnXSA9ICdObyBIZWxtIFByb3h5IC0gSHVydCA1JztcclxuICAgIFNWVFNbJ3Byb3h5X2h1cnQxNyddID0gJ05vIEhlbG0gUHJveHkgLSBIdXJ0IDYnO1xyXG4gICAgU1ZUU1sncHJveHlfaHVydDQnXSA9ICdObyBIZWxtIFByb3h5IC0gSHVydCA3JztcclxuICAgIFNWVFNbJ3Byb3h5X2h1cnQ1J10gPSAnTm8gSGVsbSBQcm94eSAtIEh1cnQgOCc7XHJcbiAgICBTVlRTWydwcm94eV9odXJ0OCddID0gJ05vIEhlbG0gUHJveHkgLSBIdXJ0IDknO1xyXG4gICAgU1ZUU1sncHJveHlfaHVydDknXSA9ICdObyBIZWxtIFByb3h5IC0gSHVydCAxMCc7XHJcbiAgICBTVlRTWydzaWxrX2FsZXJ0X2NvbnRhY3RBJ10gPSAnU2lsayAtIENvbnRhY3QhJztcclxuICAgIFNWVFNbJ3NpbGtfYWxlcnRfaV9zZWVfb25lQSddID0gJ1NpbGsgLSBJIHNlZSBvbmUuJztcclxuICAgIFNWVFNbJ3NpbGtfYWxlcnRfdGhlcmVfaXNfb25lQSddID0gJ1NpbGsgLSBUaGVyZSBpcyBvbmUuLi4hJztcclxuICAgIFNWVFNbJ3NpbGtfZGVhdGgxQiddID0gJ1NpbGsgLSBEZWF0aCAxJztcclxuICAgIFNWVFNbJ3NpbGtfZGVhdGgyQiddID0gJ1NpbGsgLSBEZWF0aCAyJztcclxuICAgIFNWVFNbJ3NpbGtfZHlpbmdCJ10gPSAnU2lsayAtIE5vdCBnb29kLi4uJztcclxuICAgIFNWVFNbJ3NpbGtfZW5lbXlfZG93bl9icmlsbGlhbnRDJ10gPSAnU2lsayAtIEJyaWxsaWFudC4nO1xyXG4gICAgU1ZUU1snc2lsa19lbmVteV9kb3duX2VsaW1pbmF0ZWRCJ10gPSAnU2lsayAtIEVsaW1pbmF0ZWQuJztcclxuICAgIFNWVFNbJ3NpbGtfZW5lbXlfZG93bl9oZWxsX3llYWhCJ10gPSAnU2lsayAtIEhlbGwgeWVhaCEnO1xyXG4gICAgU1ZUU1snc2lsa19lbmVteV9kb3duX2l2ZV9nb3Rfb25lQiddID0gJ1NpbGsgLSBJIGdvdCBvbmUhJztcclxuICAgIFNWVFNbJ3NpbGtfZW5lbXlfZG93bl9taW51c19vbmVCJ10gPSAnU2lsayAtIC0xLic7XHJcbiAgICBTVlRTWydzaWxrX2VuZW15X2Rvd25fbm9fa2lja2luZ19mb3JfeW91QiddID0gJ1NpbGsgLSBObyBraWNraW5nIGZvciB5b3UuJztcclxuICAgIFNWVFNbJ3NpbGtfaHVydDFCJ10gPSAnU2lsayAtIEh1cnQgMSc7XHJcbiAgICBTVlRTWydzaWxrX2h1cnQyQiddID0gJ1NpbGsgLSBIdXJ0IDInO1xyXG4gICAgU1ZUU1snc2lsa19odXJ0NSddID0gJ1NpbGsgLSBIdXJ0IDMnO1xyXG4gICAgU1ZUU1snc2lsa19odXJ0NiddID0gJ1NpbGsgLSBIdXJ0IDQnO1xyXG4gICAgU1ZUU1snc2lsa19odXJ0OUInXSA9ICdTaWxrIC0gSHVydCA1JztcclxuICAgIFNWVFNbJ3dlYV9jcm9zc2ZpcmUyJ10gPSAnQ3Jvc3NmaXJlIENSLTE0NSBWb3J0ZXgnO1xyXG4gICAgU1ZUU1snd2VhX2RpdHp5X2NzX2lrJ10gPSAnQXNzYXVsdCBSaWZsZSBDUy1JSyc7XHJcbiAgICBTVlRTWyd3ZWFfZ2xoZiddID0gJ0dyZW5hZGUgTGF1bmNoZXIgQ1MtR0xIRic7XHJcbiAgICBTVlRTWyd3ZWFfaW5jb21wZXRlbmNlX2FyY2hldHlwZV8yN3h4X2ZpcmUnXSA9ICdBcmNoZXR5cGUgMjdYWCc7XHJcbiAgICBTVlRTWyd3ZWFfbGF6eXJhaW5fZ3JhdnlfcmwnXSA9ICdGYWxrb25pYW4gQW50aS1HcmF2IFJvY2tldCBMYXVuY2hlcic7XHJcbiAgICBTVlRTWyd3ZWFfbTIwMiddID0gJ1JvY2tldCBMYXVuY2hlciBDUy1CYXJyYWdlJztcclxuICAgIFNWVFNbJ3dlYV9tb29uaGF3a19yYWlsZ3VuJ10gPSAnQ3Jvc3NmaXJlIENSLTM0IE1hcmF1ZGVyJztcclxuICAgIFNWVFNbJ3dlYV9waDAxJ10gPSAnQ3Jvc3NmaXJlIENSLTU0IFZpcGVyJztcclxuICAgIFNWVFNbJ3dlYV9wbGFzbWFfc2hvdGd1biddID0gJ1BsYXNtYSBTaG90Z3VuJztcclxuICAgIFNWVFNbJ3dlYV9yYWlsX2FsdDInXSA9ICdGYWxrb25pYW4gUFNJIEN1dHRlcic7XHJcbiAgICBTVlRTWyd3ZWFfdGhldG9wcGVzdGtla19zaG90Z3VuX254czI1J10gPSAnU2hvdGd1biBOWFMtMjUnO1xyXG4gICAgU1ZUU1sneGluX2NlbGVicmF0ZSddID0gJ1hpbiAtIENlbGVicmF0aW5nJztcclxuICAgIFNWVFNbJ3hpbl9kZWF0aCddID0gJ1hpbiAtIERlYXRoJztcclxuICAgIFNWVFNbJ3hpbl9lbmVteV9zcG90dGVkJ10gPSAnWGluIC0gQWxlcnRlZCc7XHJcbiAgICBTVlRTWyd4aW5faGl0J10gPSAnWGluIC0gSHVydCc7XHJcbiAgICBsZXQgdm9pY2VzID0ge1xyXG4gICAgICAgIEdyb3NrOiBbXHJcbiAgICAgICAgICAgIFwiR3Jvc2tcIixcclxuICAgICAgICAgICAgW1wiZGVhdGhcIiwgXCJEZWF0aFwiLCAyXSxcclxuICAgICAgICAgICAgW1wiZHlpbmdcIiwgXCJEeWluZ1wiLCAyXSxcclxuICAgICAgICAgICAgW1wiZWRvd25cIiwgXCJDZWxlYnJhdGluZ1wiLCAzXSxcclxuICAgICAgICAgICAgW1wid2VsY29tZVwiLCBcIkFsZXJ0ZWRcIiwgNV0sXHJcbiAgICAgICAgICAgIFtcImh1cnRcIiwgXCJIdXJ0XCIsIDNdXHJcbiAgICAgICAgXSxcclxuICAgICAgICBkcm9obmVudHJvb3A6IFtcclxuICAgICAgICAgICAgXCJEcm9obmVuIFRyb29wZXJcIixcclxuICAgICAgICAgICAgW1wid2VsY29tZVwiLCBcIkFsZXJ0ZWRcIiwgM10sXHJcbiAgICAgICAgICAgIFtcImh1cnRcIiwgXCJIdXJ0XCIsIDNdLFxyXG4gICAgICAgICAgICBbXCJlZG93blwiLCBcIkNlbGVicmF0aW5nXCIsIDNdLFxyXG4gICAgICAgICAgICBbXCJkeWluZ1wiLCBcIkR5aW5nXCIsIDFdLFxyXG4gICAgICAgICAgICBbXCJkZWF0aFwiLCBcIkRlYXRoXCIsIDNdXHJcbiAgICAgICAgXSxcclxuICAgICAgICBkcm9obmVuZmVtOiBbXHJcbiAgICAgICAgICAgIFwiRHJvaG5lbiBGZW1hbGVcIixcclxuICAgICAgICAgICAgW1wid2VsY29tZVwiLCBcIkFsZXJ0ZWRcIiwgM10sXHJcbiAgICAgICAgICAgIFtcImh1cnRcIiwgXCJIdXJ0XCIsIDNdLFxyXG4gICAgICAgICAgICBbXCJlZG93blwiLCBcIkNlbGVicmF0aW5nXCIsIDNdLFxyXG4gICAgICAgICAgICBbXCJkeWluZ1wiLCBcIkR5aW5nXCIsIDFdLFxyXG4gICAgICAgICAgICBbXCJkZWF0aFwiLCBcIkRlYXRoXCIsIDNdXHJcbiAgICAgICAgXSxcclxuICAgICAgICBlbHVycmE6IFtcclxuICAgICAgICAgICAgXCJFbHVycmFcIixcclxuICAgICAgICAgICAgW1wid2VsY29tZVwiLCBcIkFsZXJ0ZWRcIiwgM10sXHJcbiAgICAgICAgICAgIFtcImh1cnRcIiwgXCJIdXJ0XCIsIDJdLFxyXG4gICAgICAgICAgICBbXCJlZG93blwiLCBcIkNlbGVicmF0aW5nXCIsIDJdLFxyXG4gICAgICAgICAgICBbXCJkeWluZ1wiLCBcIkR5aW5nXCIsIDFdLFxyXG4gICAgICAgICAgICBbXCJkZWF0aFwiLCBcIkRlYXRoXCIsIDFdXHJcbiAgICAgICAgXSxcclxuICAgICAgICBmZXJybzogW1xyXG4gICAgICAgICAgICBcIkx0LiBGZXJyb1wiLFxyXG4gICAgICAgICAgICBbXCJ3ZWxjb21lXCIsIFwiQWxlcnRlZFwiLCAzXSxcclxuICAgICAgICAgICAgW1wiaHVydFwiLCBcIkh1cnRcIiwgMl0sXHJcbiAgICAgICAgICAgIFtcImVkb3duXCIsIFwiQ2VsZWJyYXRpbmdcIiwgM10sXHJcbiAgICAgICAgICAgIFtcImRlYXRoXCIsIFwiRGVhdGhcIiwgMl1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHNlcmtvdmE6IFtcclxuICAgICAgICAgICAgXCJTZXJrb3ZhXCIsXHJcbiAgICAgICAgICAgIFtcIndlbGNvbWVcIiwgXCJBbGVydGVkXCIsIDNdLFxyXG4gICAgICAgICAgICBbXCJodXJ0XCIsIFwiSHVydFwiLCAxXSxcclxuICAgICAgICAgICAgW1wiZWRvd25cIiwgXCJDZWxlYnJhdGluZ1wiLCAyXSxcclxuICAgICAgICAgICAgW1wiZGVhdGhcIiwgXCJEZWF0aFwiLCAxXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgcGhhbnRvbTogW1xyXG4gICAgICAgICAgICBcIlBoYW50b21cIixcclxuICAgICAgICAgICAgW1wiZWRvd25cIiwgXCJDZWxlYnJhdGluZ1wiLCAxXSxcclxuICAgICAgICAgICAgW1wid2VsY29tZVwiLCBcIkFsZXJ0ZWRcIiwgMl0sXHJcbiAgICAgICAgICAgIFtcImRlYXRoXCIsIFwiRGVhdGhcIiwgMV1cclxuICAgICAgICBdXHJcbiAgICB9O1xyXG4gICAgZm9yIChsZXQgZW50cnkgb2YgT2JqZWN0LmVudHJpZXModm9pY2VzKSkge1xyXG4gICAgICAgIGxldCBjaGFyYWN0ZXIgPSBlbnRyeVswXTtcclxuICAgICAgICBsZXQgY2hhclZvaWNlcyA9IGVudHJ5WzFdO1xyXG4gICAgICAgIGxldCBjaGFyTmFtZSA9IGNoYXJWb2ljZXNbMF07XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgY2hhclZvaWNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgdm9pY2UgPSBjaGFyVm9pY2VzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8PSB2b2ljZVsyXTsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBTVlRTW2Ake2NoYXJhY3Rlcn1fJHt2b2ljZVswXX0ke2p9YF0gPSBgJHtjaGFyTmFtZX0gLSAke3ZvaWNlWzFdfSAke2p9YFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVWb2ljZVByZXNldHMoKSB7XHJcbiAgICAvLyBBZGRzIHZvaWNlIHByZXNldHMgdGhhdCBleGlzdCBpbiBnYW1lIGJ1dCBub3QgaW4gQUxFXHJcbiAgICBsZXQgVlAgPSBWQUxfVEFCTEVbJ3ZvaWNlX3ByZXNldCddO1xyXG4gICAgVlBbJ3Byb3h5X2hlbG1ldGxlc3MnXSA9ICdQcm94eSAoaGVsbWV0bGVzcyknO1xyXG4gICAgVlBbJ3NpbGsnXSA9ICdTaWxrJztcclxuICAgIFZQWydvcmFraW4nXSA9ICdPcmFraW4nO1xyXG4gICAgVlBbJ2FycmluJ10gPSAnQXJyaW4nO1xyXG4gICAgVlBbJ2NpdmlsaWFuX21hbGUnXSA9ICdDaXZpbGlhbiBNYWxlJztcclxuICAgIFZQWyd2dWx0dXJlJ10gPSAnVnVsdHVyZSc7XHJcbiAgICBWUFsnY3Jvc3NmaXJlX3NlbnRpbmVsJ10gPSAnQ3Jvc3NmaXJlIFNlbnRpbmVsJztcclxuICAgIFZQWyd4aW4nXSA9ICdYaW4nO1xyXG4gICAgVlBbXCJncm9za1wiXSA9IFwiR3Jvc2tcIjtcclxuXHJcbiAgICBWUFtcImVsdXJyYVwiXSA9IFwiRWx1cnJhXCI7XHJcbiAgICBWUFtcImRyb2huZW5mZW1cIl0gPSBcIkRyb2huZW4gRmVtYWxlXCI7XHJcbiAgICBWUFtcInNlcmtvdmFcIl0gPSBcIlNlcmtvdmFcIjtcclxuICAgIFZQW1wiZmVycm9cIl0gPSBcIkx0LiBGZXJyb1wiO1xyXG4gICAgVlBbXCJkcm9obmVudHJvb3BcIl0gPSBcIkRyb2huZW4gVHJvb3BlclwiO1xyXG4gICAgVlBbXCJwaGFudG9tXCJdID0gXCJQaGFudG9tXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVN0eWxlcygpIHtcclxuICAgIC8vIENoYW5nZXMgc29tZSBzdHlsZXNoZWV0cyB0byBvcGVuIHVwIHRvIHRoaW5ncyBsaWtlIHJlc2l6YWJsZSByaWdodCBwYW5lbC5cclxuICAgIGZvcihsZXQgaTEgPSAwOyBpMSA8IHN0eWxlc2hlZXRzLmxlbmd0aDsgaTErKykge1xyXG4gICAgICAgIGxldCBzdHlsZVNoZWV0ID0gc3R5bGVzaGVldHNbaTFdO1xyXG4gICAgICAgIGZvciAobGV0IGkyID0gMDsgaTIgPCBzdHlsZVNoZWV0LnJ1bGVzLmxlbmd0aDsgaTIrKykge1xyXG4gICAgICAgICAgICBsZXQgcnVsZSA9IHN0eWxlU2hlZXQucnVsZXNbaTJdO1xyXG4gICAgICAgICAgICBzd2l0Y2gocnVsZS5zZWxlY3RvclRleHQpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIucF9pXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZS5zdHlsZS5zZXRQcm9wZXJ0eShcImRpc3BsYXlcIiwgXCJmbGV4XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIi5yaWdodHVpXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZS5zdHlsZS5zZXRQcm9wZXJ0eShcIndpZHRoXCIsIGFsZWlTZXR0aW5ncy5yaWdodFBhbmVsU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiLnBhMVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGUuc3R5bGUuc2V0UHJvcGVydHkoXCJmbGV4LWdyb3dcIiwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZS5zdHlsZS5zZXRQcm9wZXJ0eShcImZsZXgtc2hyaW5rXCIsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIi5wYTJcIjpcclxuICAgICAgICAgICAgICAgICAgICBydWxlLnN0eWxlLnNldFByb3BlcnR5KFwid2lkdGhcIiwgXCIxMDAlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIi5vcGNvZGVfZmllbGRcIjpcclxuICAgICAgICAgICAgICAgICAgICBydWxlLnN0eWxlLnNldFByb3BlcnR5KFwiZm9udC1zaXplXCIsIGFsZWlTZXR0aW5ncy50cmlnZ2VyRWRpdFRleHRTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIjcnBhcmFtc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGUuc3R5bGUuc2V0UHJvcGVydHkoXCJoZWlnaHRcIiwgXCJ2YXIoLS1BTEVJX1JQQVJBTVNfSEVJR0hUKVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAkaWQoXCJzdGFyc1wiKS5zdHlsZS5zZXRQcm9wZXJ0eShcImJhY2tncm91bmQtaW1hZ2VcIiwgYHVybCgke2FsZWlTZXR0aW5ncy5zdGFyc0ltYWdlfSlgKVxyXG4gICAgbGV0IF90aCA9IFRIRU1FO1xyXG4gICAgVGhlbWVTZXQoVEhFTUVfQkxVRSk7XHJcbiAgICBUaGVtZVNldChfdGgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVTa2lucygpIHtcclxuICAgIC8vIEFkZHMgc2tpbnMgdGhhdCBleGlzdCBpbiBnYW1lIGJ1dCBub3QgaW4gQUxFLlxyXG4gICAgbGV0IGNoYXJsaXN0cyA9IFtcclxuICAgICAgICBbMTAsIFwiSGVhZCBHaWJcIl0sXHJcbiAgICAgICAgWzE4LCBcIlN0YXIgRGVmZW5kZXIgKHBsYXkgbWFwIElEICdlcmljIGd1cnQtc3Rhcl9kZWZlbmRlcnMnIHRvIHVubG9jayBpdClcIl0sXHJcbiAgICAgICAgWzIwLCBcIkFybSBHaWJcIl0sXHJcbiAgICAgICAgWzMwLCBcIkxlZyBHaWJcIl0sXHJcbiAgICAgICAgWzUwLCBcIkhlYXZ5IEhlcm8gKE9ubHkgSGVhZCBhbmQgQXJtcylcIl0sXHJcbiAgICAgICAgWzYwLCBcIlByb3h5IChPbmx5IEhlYWQgYW5kIEFybXMpXCJdLFxyXG4gICAgICAgIFs2MiwgXCJQcm94eSAoTm8gTGltYnMpXCJdLFxyXG5cclxuICAgICAgICBbMzgsIFwiR29sZGVuS25pZmUgTm9pciBMaW1lXCJdLFxyXG4gICAgICAgIFszOSwgXCJSb290WiBOb2lyIExpbWVcIl0sXHJcblxyXG4gICAgICAgIFsxNTEsIFwiUHVycGxlIFhpblwiXSxcclxuICAgICAgICBbMTUyLCBcIkdvbGRlbiBYaW5cIl0sXHJcbiAgICAgICAgWzE1MywgXCJCbHVlIFhpblwiXSxcclxuICAgICAgICBbMTU0LCBcIlJlZCBYaW5cIl0sXHJcbiAgICAgICAgWzE1NSwgXCJBbWJlciBYaW5cIl0sXHJcblxyXG4gICAgICAgIFsxNTYsIFwiTmlydmFuYSBOb2lyIExpbWVcIl0sXHJcblxyXG4gICAgICAgIFsxNTcsIFwiUHVycGxlIEdhbGx5bmV3XCJdLFxyXG4gICAgICAgIFsxNTgsIFwiR29sZGVuIEdhbGx5bmV3XCJdLFxyXG4gICAgICAgIFsxNTksIFwiQmx1ZSBHYWxseW5ld1wiXSxcclxuICAgICAgICBbMTYwLCBcIlJlZCBHYWxseW5ld1wiXSxcclxuICAgICAgICBbMTYxLCBcIkFtYmVyIEdhbGx5bmV3XCJdLFxyXG5cclxuICAgICAgICBbMTYyLCBcIlBpbmtpbmVcIl0sXHJcbiAgICAgICAgWzE2MywgXCJSYWlkZXIgKGJ5IFNlcnBlbnQpXCJdLFxyXG4gICAgICAgIFsxNjQsIFwiQmx1ZSBIZWF2eSBIZXJvXCJdLFxyXG4gICAgICAgIFsxNjUsIFwiUmVkIEhlYXZ5IEhlcm9cIl0sXHJcbiAgICAgICAgWzE2NiwgXCJPcmFraW5cIl0sXHJcbiAgICAgICAgWzE2NywgXCJIdXNrXCJdLFxyXG4gICAgICAgIFsxNjgsIFwiSGV4XCJdLFxyXG4gICAgICAgIFsxNjksIFwiQXJyaW5cIl0sXHJcbiAgICAgICAgWzE3MCwgXCJIZWF2eSBVc3VycGF0aW9uIFNvbGRpZXJcIl0sXHJcblxyXG4gICAgICAgIFsxNzEsIFwiQ3liZXIgR3J1YiBieSBTMWxrXCJdLFxyXG4gICAgICAgIFsxNzIsIFwiR3Jvc2tcIl0sXHJcbiAgICAgICAgWzE3MywgXCJGdXR1cmlzdGljIEtuaWdodFwiXSxcclxuICAgICAgICBbMTc0LCBcIlVuY2l2aWwgUHJveHlcIl0sXHJcblxyXG4gICAgICAgIFsxNzUsIFwiU2Vya292YSBJbnNlcnRpb24gVW5pdFwiXSxcclxuICAgICAgICBbMTc2LCBcIlhlbm9zIFNjb3V0XCJdLFxyXG5cclxuICAgICAgICBbMTc3LCBcIkFybW9yZWQgVHJvb3BlclwiXSxcclxuXHJcbiAgICAgICAgWzE3OCwgXCJOZXcgR2VuZXJhdGlvbiBNYXJpbmVcIl0sXHJcbiAgICAgICAgWzE3OSwgXCJFbHVycmEgKGJ5IExpbilcIl0sXHJcbiAgICAgICAgWzE4MCwgXCJEYXJrIFByb3h5IChieSBsaXR0bGVraylcIl0sXHJcbiAgICAgICAgWzE4MSwgXCJIdW50c21hbiAoTmlnaHQpXCJdLFxyXG4gICAgICAgIFsxODIsIFwiSHVudHNtYW4gKFN3YW1wKVwiXSxcclxuICAgICAgICBbMTgzLCBcIkx0LiBGZXJybyAoYnkgU2VycGVudClcIl0sXHJcbiAgICAgICAgWzE4NCwgXCJYZW5vcyBUaXRhblwiXSxcclxuICAgICAgICBbMTg1LCBcIkVsdXJyYSAoTWFza2VkKSAoYnkgTGluKVwiXSxcclxuICAgICAgICBbMTg2LCBcIkRyb2huZW4gSGVhdnkgKGJ5IEFyazYzMylcIl0sXHJcbiAgICAgICAgWzE4NywgXCJDcm9tYXN0YWthblwiXSxcclxuICAgICAgICBbMTg4LCBcIlNndC4gRGF2YWlzXCJdLFxyXG4gICAgICAgIFsxODksIFwiTWFyb29uIChieSBGcmFuY2lzIGxvY2FsaG9zdClcIl0sXHJcbiAgICAgICAgWzE5MCwgXCJEcm9obmVuIFNraXJtaXNoZXIgKGJ5IEFyazYzMylcIl0sXHJcbiAgICAgICAgWzE5MSwgXCJTZXJrb3ZhIFJlY29uIFVuaXRcIl0sXHJcbiAgICAgICAgWzE5MiwgXCJEcm9obmVuIERyaWZ0ZXIgKGJ5IEFyazYzMylcIl0sXHJcbiAgICAgICAgWzE5MywgXCJYZW5vcyBNYXJpbmVcIl0sXHJcbiAgICAgICAgWzE5NCwgXCJEYXJrIEFuZHJvaWQgU0xDLTU2IChieSBsaXR0bGVraylcIl0sXHJcbiAgICAgICAgWzE5NSwgXCJXcmFpdGggKGJ5IEFyazYzMylcIl0sXHJcbiAgICAgICAgWzE5NiwgXCJTZXJrb3ZhIEFybW9yZWQgVW5pdFwiXSxcclxuICAgICAgICBbMTk3LCBcIlBoYW50b20gKHBsYXkgbWFwIElEICd0aGVyZWFsb24zLXBoYW50b20nIHRvIHVubG9jayBpdClcIl0sXHJcbiAgICAgICAgWzE5OCwgXCJCbHVlIENpdmlsIFNlY3VyaXR5IEhlYXZ5XCJdLFxyXG4gICAgICAgIFsxOTksIFwiUmVkIENpdmlsIFNlY3VyaXR5IEhlYXZ5XCJdLFxyXG4gICAgICAgIFsyMDAsIFwiWGVub3MgV2VsZGVyXCJdLFxyXG4gICAgICAgIFsyMDEsIFwiWGVub3MgU3BlY2lhbCBVbml0XCJdLFxyXG4gICAgICAgIFsyMDIsIFwiU2Vya292YSBBc3NhdWx0IFVuaXRcIl0sXHJcbiAgICAgICAgWzIwMywgXCJTZXJrb3ZhIEd1bm5lciBVbml0XCJdLFxyXG4gICAgICAgIFsyMDQsIFwiU2Vya292YSBHcmVuYWRlciBVbml0XCJdLFxyXG4gICAgICAgIFsyMDUsIFwiU2Vya292YSBUZWFtIExlYWRlclwiXSxcclxuICAgICAgICBbMjA2LCBcIlNlcmtvdmEgUmVzb3VyY2UgVW5pdFwiXSxcclxuICAgICAgICBbMjA3LCBcIlNlcmtvdmEgVGVjaG5pY2lhbiBVbml0XCJdLFxyXG4gICAgICAgIFsyMDgsIFwiU2Vya292YSBHcnViXCJdLFxyXG4gICAgICAgIFsyMDksIFwiU2Vya292YSBSZWluZm9yY2VkIEdydWJcIl0sXHJcbiAgICAgICAgWzIxMCwgXCJTZXJrb3ZhIERldmFzdGF0b3IgR3J1YlwiXSxcclxuICAgICAgICBbMjExLCBcIlhCVC0xMTcgQW5kcm9pZFwiXSxcclxuICAgICAgICBbMjEyLCBcIlRlbmVndWlsYWVcIl0sXHJcbiAgICAgICAgWzIxMywgXCJXYWxrZXIgKGJ5IFNlcnBlbnQpXCJdLFxyXG4gICAgICAgIFsyMTQsIFwiU3BhY2UgR3J1YiAoYnkgQnJvZm9yY2UxKVwiXSxcclxuICAgICAgICBbMjE1LCBcIkJsdWUgUGhhbnRvbSAocGxheSBtYXAgSUQgJ3RoZXJlYWxvbjMtcGhhbnRvbScgdG8gdW5sb2NrIGl0KVwiXSxcclxuICAgICAgICBbMjE2LCBcIlJlZCBQaGFudG9tIChwbGF5IG1hcCBJRCAndGhlcmVhbG9uMy1waGFudG9tJyB0byB1bmxvY2sgaXQpXCJdXHJcbiAgICBdXHJcbiAgICBmb3IobGV0IGxpID0gMDsgbGkgPCBjaGFybGlzdHMubGVuZ3RoOyBsaSsrKSB7XHJcbiAgICAgICAgbGV0IGNoYXJJRCA9IGNoYXJsaXN0c1tsaV1bMF07XHJcbiAgICAgICAgbGV0IHBhZGRlZENoYXJJRCA9IGNoYXJJRC50b1N0cmluZygpLnBhZFN0YXJ0KDQsIFwiMFwiKVxyXG4gICAgICAgIGxldCBjaGFyTmFtZSA9IGNoYXJsaXN0c1tsaV1bMV07XHJcbiAgICAgICAgbGV0IHNyYyA9IFwiaHR0cHM6Ly93d3cucGxhem1hYnVyc3QyLmNvbS9sZXZlbF9lZGl0b3IvY2hhcnNfZnVsbC9jaGFyXCIgKyBwYWRkZWRDaGFySUQgKyBcIi5wbmdcIlxyXG4gICAgICAgIFZBTF9UQUJMRVsnY2hhciddW2NoYXJJRF0gPSBfdHVybkxpbmtJbnRvU2tpblNwYW4oc3JjLCBjaGFyTmFtZSk7XHJcbiAgICAgICAgaW1nX2NoYXJzX2Z1bGxbY2hhcklEXSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIGltZ19jaGFyc19mdWxsW2NoYXJJRF0uc3JjID0gJ2NoYXJzX2Z1bGwvY2hhcicgKyBwYWRkZWRDaGFySUQgKyAnLnBuZyc7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGlkcyA9IE9iamVjdC5rZXlzKFZBTF9UQUJMRVtcImNoYXJcIl0pO1xyXG4gICAgaWRzID0gaWRzLm1hcChzdHIgPT4gcGFyc2VJbnQoc3RyKSk7XHJcbiAgICBsZXQgZnJvbUlEID0gTWF0aC5tYXgoLi4uaWRzKSArIDE7XHJcbiAgICBmZXRjaFNraW5zRnJvbShmcm9tSUQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfdHVybkxpbmtJbnRvU2tpblNwYW4oc3JjLCBjaGFyTmFtZSkge1xyXG4gICAgcmV0dXJuICc8c3BhbiBzdHlsZT1cXCdiYWNrZ3JvdW5kOnVybCgnICsgc3JjICsgJyk7IHdpZHRoOiAxNnB4OyBoZWlnaHQ6IDE2cHg7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDMwJTsgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAyNiU7IGJhY2tncm91bmQtc2l6ZTogNjdweDt2ZXJ0aWNhbC1hbGlnbjogLTRweDtcXCc+PC9zcGFuPiAnICsgY2hhck5hbWU7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoU2tpbnNGcm9tKHN0YXJ0aW5nSUQpIHtcclxuICAgIGlmKCFpc05hdGl2ZSkgcmV0dXJuO1xyXG4gICAgY29uc3QgcmVxdWVzdHNBdE9uY2UgPSA1O1xyXG4gICAgbGV0IHJlcXVlc3RzUnVubmluZyA9IHRydWU7XHJcbiAgICBsZXQgc2tpbnNBZGRlZCA9IFtdO1xyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHJlcXVlc3RTa2luKGlkKSB7XHJcbiAgICAgICAgbGV0IHBhZGRlZENoYXJJRCA9IGlkLnRvU3RyaW5nKCkucGFkU3RhcnQoNCwgXCIwXCIpO1xyXG4gICAgICAgIGxldCBzcmMgPSBcImh0dHBzOi8vd3d3LnBsYXptYWJ1cnN0Mi5jb20vbGV2ZWxfZWRpdG9yL2NoYXJzX2Z1bGwvY2hhclwiICsgcGFkZGVkQ2hhcklEICsgXCIucG5nXCJcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBHTS54bWxIdHRwUmVxdWVzdCh7IHVybDogc3JjIH0pLmNhdGNoKGUgPT4gY29uc29sZS5lcnJvcihlKSk7XHJcbiAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09IDQwNCkge1xyXG4gICAgICAgICAgICByZXF1ZXN0c1J1bm5pbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBWQUxfVEFCTEVbXCJjaGFyXCJdW2lkXSA9IF90dXJuTGlua0ludG9Ta2luU3BhbihzcmMsIGBVbmtub3duIFNraW4gIyR7aWR9YCk7XHJcbiAgICAgICAgc2tpbnNBZGRlZC5wdXNoKGlkKTtcclxuICAgIH1cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHJlcXVlc3RCYXRjaChpZCkge1xyXG4gICAgICAgIGxldCBwcm9taXNlcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVxdWVzdHNBdE9uY2U7IGkrKykge1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKHJlcXVlc3RTa2luKGlkICsgaSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgICB9XHJcbiAgICBsZXQgZnJvbUlEID0gc3RhcnRpbmdJRDtcclxuICAgIHdoaWxlKHJlcXVlc3RzUnVubmluZykge1xyXG4gICAgICAgIGF3YWl0IHJlcXVlc3RCYXRjaChmcm9tSUQpO1xyXG4gICAgICAgIGZyb21JRCArPSByZXF1ZXN0c0F0T25jZTtcclxuICAgIH1cclxuICAgIGlmKHNraW5zQWRkZWQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIE5ld05vdGUoYEFMRUk6IFRoZXJlIGFyZSAke3NraW5zQWRkZWQubGVuZ3RofSB1bnJlZ2lzdGVyZWQgc2tpbnMsIHBsZWFzZSBpbmZvcm0gQUxFSSBkZXZlbG9wZXIocykgYWJvdXQgdGhpcy4gQ2hlY2sgbG9ncyBmb3IgbW9yZSBpbmZvcm1hdGlvbmAsIGAjMDBGRkZGYCk7XHJcbiAgICAgICAgYWxlaUxvZyhJTkZPLCBgVW5yZWdpc3RlcmVkIHNraW5zOiAke3NraW5zQWRkZWR9YCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9wdGltaXplKCkge1xyXG4gICAgLy8gVlN5bmMuXHJcbiAgICB3aW5kb3cuc2V0VGltZW91dCA9IChmLCBtcykgPT4ge1xyXG4gICAgICAgIGlmIChmID09IGFuaSkge3dpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pKX1cclxuICAgICAgICBlbHNlIHJldHVybiBKU19zZXRUaW1lb3V0KGYsIG1zKTtcclxuICAgIH1cclxuICAgIGxldCBfYnJvd3NlSW1hZ2VzID0gd2luZG93LkJyb3dzZUltYWdlcztcclxuICAgIGxldCBvZ0ltYWdlTGlzdHMgPSB7fTtcclxuICAgIC8vIEltYWdlIGNhY2hpbmcuXHJcbiAgICB3aW5kb3cuQnJvd3NlSW1hZ2VzID0gZnVuY3Rpb24oZm9yX2NsYXNzID0gJ2JnX21vZGVsJywgY3VycmVudF92YWx1ZSA9ICcnLCBjYWxsYmFjayA9IG51bGwpIHtcclxuICAgICAgICAvLyBJZiBjYWNoZSBkb2Vzbid0IGhhdmUgdGhlIGNsYXNzIHdlIGFyZSBsb29raW5nIGZvciwgd2Ugd2lsbCBqdXN0IHNldCBkZWZhdWx0IHZhbHVlLlxyXG4gICAgICAgIGlmIChvZ0ltYWdlTGlzdHNbZm9yX2NsYXNzXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgb2dJbWFnZUxpc3RzW2Zvcl9jbGFzc10gPSBcIltBTEVJXSBMb2FkaW5nLi4uXCI7XHJcbiAgICAgICAgICAgIGFsZWlMb2coSU5GTywgYFdpbGwgY2FjaGUgcmVzcG9uc2Ugb2YgJHtmb3JfY2xhc3N9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIE92ZXJ3cml0ZSBzZXRUaW1lb3V0IHRlbXBvcmFyaWx5LCBhcyBCcm93c2VJbWFnZXMgY2FsbHMgc2V0VGltZW91dCBmb3IgU2VydmVyUmVxdWVzdCB3aGljaCBzZXRzIHRoZSBpbm5lckhUTUwgb2YgaW1hZ2VfbGlzdFxyXG4gICAgICAgIGxldCBvc3QgPSB3aW5kb3cuc2V0VGltZW91dDtcclxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCA9IChmLCBtcykgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dCA9IG9zdDsgLy8gQXNzaWduIG9yaWdpbmFsIHNldFRpbWVvdXRcclxuICAgICAgICAgICAgd2luZG93LlNlcnZlclJlcXVlc3QgPSAocmVxLCBvcCwgY2FsbGJhY2sgPSBudWxsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuU2VydmVyUmVxdWVzdCA9IEFMRUlfU2VydmVyUmVxdWVzdDsgLy8gQXNzaWduIG9yaWdpbmFsIFNlcnZlclJlcXVlc3RcclxuICAgICAgICAgICAgICAgIC8vIFdlIG1hZGUgU2VydmVyUmVxdWVzdCBhbiBhc3luYyBmdW5jdGlvbiwgc28gd2UgY2FuIGp1c3QgcmVnaXN0ZXIgb24gaXRcclxuICAgICAgICAgICAgICAgIFNlcnZlclJlcXVlc3QocmVxLCBvcCwgY2FsbGJhY2spLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG9nSW1hZ2VMaXN0c1tmb3JfY2xhc3NdID0gaW1hZ2VfbGlzdC5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfYnJvd3NlSW1hZ2VzKGZvcl9jbGFzcywgY3VycmVudF92YWx1ZSwgY2FsbGJhY2spO1xyXG4gICAgICAgIGltYWdlX2xpc3QuaW5uZXJIVE1MID0gb2dJbWFnZUxpc3RzW2Zvcl9jbGFzc107IC8vIFNob3cgd2hhdCBpcyBpbiBjYWNoZS4gKElmIGNhY2hlIGRpZG4ndCBoYXZlIHRoZSBjbGFzcywgaXQgd2lsbCBqdXN0IHNob3cgdGhlIHByZXZpb3VzbHkgc2V0IGRlZmF1bHQgdmFsdWUpXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVZlaGljbGVzKCkge1xyXG4gICAgLy8gQWRkaW5nIHZlaGljbGVzIHRoYXQgZXhpc3QgaW4gZ2FtZSBidXQgbm90IGluIEFMRS4gQ3VycmVudGx5IG9ubHkgdmVoX2hoLCB3aGljaCBpcyBncmFiYmFibGUgbGVkZ2UuXHJcbiAgICBsZXQgX1NWVFYgPSBWQUxfVEFCTEVbXCJ2ZWhpY2xlX21vZGVsXCJdO1xyXG4gICAgbGV0IHZlaGljbGVzID0gW1xyXG4gICAgICAgIFtcInZlaF9oaFwiLCBcIkdyYWJiYWJsZSBMZWRnZVwiLCBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQjRBQUFBZUNBWUFBQUE3TUs2aUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUFKY0VoWmN3QUFEc01BQUE3REFjZHZxR1FBQUFDTFNVUkJWRWhMWXhoeGdCRkUyTTMvci92dkgwTVFXSVNHZ0ltSllkMmhSTWJMSURiWVlwdTUvK3QvTXpFRWYyZGl1QUxpMHdKdy9tUFFZZjNIc1BaSU1tTWppQSszK0JNTGcvb2xJWWJsSUQ0dGdONDdoa2krUHd3M1lSWXpnVVVIQUl4YVREY3dhakhkd0tqRmRBT2pGdE1OakZwTU56QnFNZDNBcU1WMEF3UGJyaDZJbnNRQUFRWUdBQThDTERLQUFjcE9BQUFBQUVsRlRrU3VRbUNDXCJdXHJcbiAgICBdXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdmVoaWNsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgdmVoaWNsZSA9IHZlaGljbGVzW2ldO1xyXG4gICAgICAgIGxldCBtb2RlbCA9IHZlaGljbGVbMF07XHJcbiAgICAgICAgbGV0IG5hbWUgPSB2ZWhpY2xlWzFdO1xyXG4gICAgICAgIGxldCBpbWFnZSA9IHZlaGljbGVbMl07XHJcbiAgICAgICAgX1NWVFZbbW9kZWxdID0gYDxpbWcgc3JjPScke2ltYWdlfScgYm9yZGVyPTAgaGVpZ2h0PTEyIHN0eWxlPXZlcnRpY2FsLWFsaWduOm1pZGRsZSB0aXRsZT0nJHtuYW1lfScgPiAke25hbWV9YFxyXG4gICAgICAgIGltZ192ZWhpY2xlc1ttb2RlbF0gPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBpbWdfdmVoaWNsZXNbbW9kZWxdLnNyYyA9IGltYWdlO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVHdW5zKCkge1xyXG4gICAgLy8gQWRkcyBndW5zIHRoYXQgZXhpc3QgaW4gZ2FtZSBidXQgbm90IGluIEFMRS4gQ3VycmVudGx5IG9ubHkgb25lIGlzbid0IHZpc2libGUgaW4gQUxFLCBhbmQgdGhhdCBpcyBqb2tlIHdlYXBvbjogTkFSTFxyXG4gICAgbGV0IGd1bnMgPSBbXHJcbiAgICAgICAgW1wiZ3VuX3JsMFwiLCBcIkJFVEEgUm9ja2V0IExhdW5jaGVyXCIsIFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFGQUFBQUFVQ0FZQUFBQWEyTHJYQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBQUpjRWhaY3dBQURzTUFBQTdEQWNkdnFHUUFBQWZlU1VSQlZGaEgzVmhaYUpWSEZENTMrKytTeENSbU00bkJtTGhVVFl0Q2JDSmFTcEYwc1JUcVZtbjdVQXB0c2RRdUlLWFlRcWxRMm9mNjBJZGFpK0JUb1ZRTmNRTkJxQ1pRaXBRRUVxTlJxOEUxTVlsWnpYS1QzTnlsMzNlOGMzdTlHcHV0Q3g0OW1abnp6ejl6NXB2dm5Kbi8ybVFLc25Ianh0eFFLR1NQTnNYaGNFU2NUbWZIL3YzN1ExSFRsR1g5K3ZYTy92NyswTW1USnlOUjAvOWFKZ1hncGsyYmZEYWI3UXRVdDlydDlsQWtFaEcwSlJ3T2UyRDc4T0RCZzN1MTR4Umt3NFlOcFJqbmM0eFhoSEZIWUJwRkdXQUpEWmk2eStVYXhkeUJrWkdSQUlYUEVoVmpCSktTa2dMc056WTJGc0JtajhFMmhtZlVJTVlJWU5NYkRodzRNSUQydEdUQ0FBSzhqU2kreEVJZXk4M05GU29CaEpOeSsvWnR1WDc5K3Urb2Z3eGJDTTdxSXVINHFOWnQ5b0N0S3h5U2lJVEVEclZCc1JCYmo0eEZGamx5UmtkSGQxaVc5YzY4ZWZOY3MyZlA1b2JvMkhnL1ZqZnQxdFpXR1JnWWtDVkxsa2hxYXFvRWcwSHRZL3BTYVd0cGFaR2hvU0h0ZytpNFp4eUF6ejV2VlZaVzd0UEZUVU5pQUc3ZXZEa2RnMlppZ2lBV3pmQUpveDdBYnVXanZoTzJGNzFlcjA1ZVVGQWcrZm41NmhUczZtaGpZNk02U29FOUFnMEJ4Q0RIZzl0QkFCY0VQMEw0RjVRZzJsaW5EWmF3TDVLVm5aK1RXVlJVcEl0OW1IQXV2OTh2bHk1ZFVzQldyVm9sOUltZ1VFeDU3ZG8xT1hQbWpNeWZQMS85NUNhYlp4VDZpbzE0LytqUm85OUZUVk1XQlhETGxpMHVPRlFOV3BlaHlaQXhBSVlCYWhLQWNhV2twQ2hBZlgxOVVsaFlLRGs1T1FvZ2hjNmRPM2RPRURiQ2ZzUER3OUxSMFNGNWVYa1NEb2JrMXAwTzZmczBTMEt6bkdJYlE5aUhNVHorMjRKaDhlM3JsTEtrSnlRN0wwZEIrVHNoaUp6djVzMmJjdlhxVlcwYk80VSswWS9GaXhmTHJGbXp0SzhCei9ScGFHamcrOXVPSFR1Mld3M1RFQWYvTEZxMGFJUFA1OXUrZE9sUys1dzVjeXlBWTJWblo3dFJlcEtUa3gwRWhEdlBuVVJPa1l5TURIWFNPQWJnbFpsa0lnRmtQNFlaeGdSRGZPSnZHWkRCQ3E4TUYvb2tsT3FVWUpwTGd1a3VDV1M0eGU0SWlYWEtMMWtGMlRyV1JDVXRMVTNtenAycnlvaUlyNU4xSG84bjVsK2ljSE54VUIwSGsydWpwaW1MT1VrL0lxTUlDaWVtTWpTb3RKZVVsQWp5azRLSGZLV0F4UXNkNVlJSU5GbkU1MjYzV3dHMTJXM2k5WGpGYXZKSGU1UDJZQ0hlc1NPT0E0K25TSWVqVy93RDZCdGx5RVNFY3pJaWtHTHVVOFBTZjBNY3VEYThBT0IyTUY4azVnb0syd1NFekRMTVl6MGVSRHJNTmc4VEFvY0RRVzBNSjdJdzdJeUl2N2xIM0YyajRxc0RNMDlEZjRQKzJpL2Uya0VKdFk2SzErV1ZqTXdNSFk5KzhQMTRuVWxBWnBLQmptWExsbjBQcGhVVEdEcE9JRmdtaXRseEU2S0p3dmZJT040c3lGeUNhTUxJNlhLS05leVUxR2FucExWWWt0cnVsdFF1ajZUMWVpVjlBS3gzZTZTM3QxZHpGdDhua3puVzRPQWdGNm9sTnlKK1hvSnFoSFUrbXdqSTdFc0E3OXk1TXpNQUlqejljTm9POWlSMWQzZW5NWGR4RVp5SW9NUURTZ2ZIYzVKOXlMak96azRGT2JHZngrc1JkNHBIckdRd05BbnFzOFRsdGNUcGNTbllXSkJlUGRyYTJsVEpabzRGbi9UcVFuOTR4YUV3VFREbkdxWVRZTDVQRWp4TTZDTTNod2NRVXRIeGl4Y3ZUaHZBMkRiaUlwdUNSWmRBbjBiekdiQnRCWmlVeFoxbldPSlEwWkpPME9sRU1Ha25hODZlUGF0TU5YMG9wczQrM0gwQ29DZDA5QlNuOE83RzhYR0lhWDhLU3lyekxzRmR2bnk1NW1TeXNyYTJWa3BMUy9YcTA5UFRvKzJ5c2pKdHg0OUw0YnljODlhdFc5TGMzRXp3cStEak5seWsyNkpkcGl6alptMEFtbzJKVjNSMWRUMVhVMVB6M3JwMTYzZzZLN3NZYWdTV0REQ0FraEYwRHRlY2FvRDFEWWFJb1lzK2UxQWNCNXQveGhYaXljdVhMKzhxTHk5WGRodVFXYy9Nek5SVE5QRUU1ZmhrR0pVZ2NXN2VCY25PbFN0WDZvWnhickxXdFBtKzJRaGV2YUxQbTJINzVOQ2hRMVg2WUFaa1hBQVRaQSt1QmxzWExGaWdMS0Z5RWJqaXhHNzYwY1JjaVZQd0RleHM3TWpGQmQyTDRncjBWWHpxMWFoUjVEUk85WElDWm9BaWE3aEJaQ2JabmlnRWc2SE5lY2xFOWlmck9NYkNoUXVWd2ZYMTljSUxPUTg3amt2bThxNTQ0OGFORWR3Z3ZzV0dmdzBmK3FORHpvamNleDhaWDVxUUc5OEVNengwTkQ3Qmt3VkhqaHhoM3Z5bHVycjZwYWFtSm41dnhnU0gxQm9VcjBGM25qOS9ma2lOSWtOWTBDWXUxRENZeWpEajVqQ1g4VG9TTDN4TzhOcmIyN1ZPNEJnSnlHT1NsWldsckdYNDh3RGptTHh5MWRYVk1YK2VRUDlYRGg4Ky9CUG01MGZDak1wRUFleURwa0NmU2s5UFZ3T0JaTmd5S1hQUitCSkpodmtJdEVjN1JBVUFmb2JDajUzLzRhNUZ3YmlFQmI0TUJ1Y1FsS2hOeHpTbnR6a1FhS2RTR09ZRUNOL2R5bnh1QU5uS2Q4aElIbjQ4QkpGMjlLQkFidXdEbUd1cXFxcHU2QUQvZ0V3MGhDbFowRFA0Uk1wOTBDbkw4RUtTUG9IcTgzY3RHcjdGS0JxaEROK2phdnhMM2daUWV3bENQRWdFaUtjdFA4VllwNWpuUnBrTFdmTHV5azBrYUl3SzFNbnNOakM1R2EvOUFXQlBQV0RlR1pYSkFFalpqcDNmVlZ4Y3JHRVNMd3cvSm5Zc1pCdWF1d0VlR1ZzTjdjSWlZcUFhQVp0OGVPY0RWRE9oSEl3eFMrVXZFbFpGUllVTGMxbGdsZ1d3TE5wTUg4eHRZUU5kQUtzYjVRWFl6a0V2d0g0RmZkdHhTQXlqL2EvSVpBRmttTlpqNXhmd0FJbG5JUm5CbklqdzZsMjdkdTFYWU5hN2VNNkUvU3dBN0x6YmEvcUNzVzBBMW80TnNHUGNlL0x0ZnlHVEJaRHlPcFEvQXdXaDk4UXhRUVJvenRXclZ3L2dPdklqR01aVHp4d2NqNlJNQlVBS1AxcnYvNTZESU8vWWNFWHB4MTJQdnlvLzRpTHlKNjlWUGowcnpMbXRBQUFBQUVsRlRrU3VRbUNDXCJdXHJcbiAgICBdO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGd1bnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgZ3VuID0gZ3Vuc1tpXTtcclxuICAgICAgICBsZXQgZ3VuX21vZGVsID0gZ3VuWzBdO1xyXG4gICAgICAgIGxldCBndW5fbmFtZSA9IGd1blsxXTtcclxuICAgICAgICBsZXQgZ3VuX2ltYWdlID0gZ3VuWzJdO1xyXG4gICAgICAgIFZBTF9UQUJMRVtcImd1bl9tb2RlbFwiXVtndW5fbW9kZWxdID0gYDxpbWcgc3JjPScke2d1bl9pbWFnZX0nIGJvcmRlcj0wIHdpZHRoPTgwIGhlaWdodD0yMCBzdHlsZT12ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZSB0aXRsZT0nJHtndW5fbmFtZX0nPmBcclxuICAgICAgICBpbWdfZ3Vuc1tndW5fbW9kZWxdID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgaW1nX2d1bnNbZ3VuX21vZGVsXS5zcmMgPSBndW5faW1hZ2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZURlY29ycygpIHtcclxuICAgIC8vIEFkZHMgZGVjb3JzIHRoYXQgZXhpc3QgaW4gZ2FtZSwgYnV0IG5vdCBpbiBBTEUuIEN1cnJlbnRseSBvbmx5IGhha2FzZSBlYXN0ZXIgZWdnIGlzIGtub3duLlxyXG4gICAgd2luZG93LmltZ19kZWNvcnMgPSBDQUNIRURfREVDT1JTOyAvLyBGb3Igc29tZSByZWFzb24gaW1nX2RlY29ycyBnZXRzIHJlc2V0dGVkXHJcbiAgICBsZXQgZGVjb3JzID0gW1xyXG4gICAgICAgIFtcImhha2FzZVwiLCBcIkhha2FzZVwiLCBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ2dBQUFBOENBWUFBQUFVdWZqZ0FBQU5Ia2xFUVZSb2diVmFhMUJiMTdYK0FJRU9Rb0lENkhGNFNqeUZFUStaaDNqSklBZGJKbzd0Mkk2ZHVHbG02bWtUTzFQZjIyWnVNeFAzVHRNYlQ2Wk4ycm01Y1crU0didVpUQnFUTm5IbmtnYTc1cG1DVFlGWUFoekF4cFlBeXdqekVBYWtJeERpaUVlNFB3Z0tBdkVTN2plakgyZXZ0ZGYrenRwN3I3MzJPZ0k4QndFZ2R4djlOd1dmVGVpUUFPUUE0Z0ZJbHYyNEpYbHBiL1lPakV3QjBQMkwrSUcxamt3U3lnc29PbGkwOCtYZG1UdVNCQ1NQWEJMUU5qc0dIbG42UkNHQnBEU2FvajZ0YUFvYW41eXFCbUI2M0FTOTFtZ25mcmd2dC9MSGh3cFZpdVRZZFEzUU5qcyt1ZGJFMUxYY3JhcHJ1L2RMZU83TkpRZlF5eHU5M1pGN2ZtL3V1K2RPSGRtUUhBQ1FYQTVLOGxJSlFUQ1A4cERZb2gweThFZkJ3VUhQcld4ZnRRWXpwWkl6Nzd4eTR0VklZY2g2MCsrQytmbDU5QTJQUjVJOFRtUjN2NmthQUxORmZ2Si9mL0g1UHdVSDh1YnVkaHZLbGd0Y1BDZ1JoZWI4K3FXbjM1Q0U4WW10V0JlRkJFRVlFb2pVdU1qRGViTDQxN1pJRGdKQmlGUVNGVUZ5ZVFGSkFGUnJFU1NLRmNsbjgxUGpTWGlBZzhwMHNQMVl5RXdXbjhUMzRZZE1pSk9jTHN6UCtpOEFTVzY2RVFCeVk4V1J1VVg1MlpCSjQ2bm5uem53RmhhakJJQmx1emdzSkxEbzVNRmRKWVNmcnlmOElBb0p3aTU1SXZwTjQ5VGViTm5QYTF1NmNPemczcmVTcGZFcWFYd01HcHBiYitEN0RVUUFTSHIyK0xOdkhUdDJyQVFBcW05bzhZT2pUMUZtaTVYR3NpWGlKSmllS0Q2UkpBN2JjR3IvMmQ2TjdPUVlNRE96SUxrY2wvYkdYZ3ZnN1lPTXJLekQ3LzdQYjA4a0pjU2l1cTRSeHNGaEdvc2hpQVFnVjZ2VnA0dWZLRlp4T0J5S1lCTlFxOVg0OEkrRDBQYytRSStoejRSbDRXcUpvSHluTkZxMWx2YzZleCtDL1oyc3VYY01JNVpKc0gxOThNZzZqUU41eWREZWZZQ0JiL2s0OVl1ZmdhSW9sRjc2RTJFY0dFWlNRaXlrQ1RINGM5azFYV2hvYUk2cVVIVnkvMVA3NWNvQ0pTa1dpOEV3RE41Ny96MUlwVkljUEhRRUgxMzgzMVZqK3dBZ0N0SVQzdnpKb1VKVmhDRFlLYUJ0ZG5UM0w3N0lGVTBQSEk1WldHMTIySHk0R0oyY2dXbG9DQTRpRkcwZFhaZ05TY0NwZi9zRlNISngrWXJGRWxUVWZBVitFQWYzK3dZd2JKbXhuVDc5OGd0bnpweUpWMlFyaUNVOUZvc0ZGb3VGKzRiN3lNek1CRDFoUStsZlBqdHZvYTJhSlI3ZUFITFpMQlk1UEVhN2hJYmJ2UU1ZTVUvZzcxL2ZSVVNjRk16Y1BIcE1FM0E0WmlCUFQ0VVhPd0FMOHpQdzRjZkFpODNGeU1pSXN5OUpramo0OUhHVTF6VEN6TER3KzkvL2Q5S1J3MGVjeEpaRG1paUZYcS8vcmw4d0RIMzlIY3ZsM2dEYXA1bFpuVHhSN0xMK091OFBvdVh1QTR6UHNVRUorT2czamNQYm53ZVJJQlE1bWVudzRZWWdXcm9UTC83MFAzRDgySEdVZmxvS2srbjdrMDRxbFNJaEpSc1IwWEZ1bDgzeWx5RkpFdTkvOEQ3OSt1dXZud2ZRdDNLS0dVa1lYOW45Y0lUaStyUDVWcHNkdEcwYUhRTldlUG40b3VSSk5ieTh2TkJuN01mQkEvc1JIeE9OeTMrdlE5N3UvVGgwK0NpNFhDNjRYQzRBb1BuclpzaVNaV0N4RnBjMnd6Qm8rNllEV1prWmJzblJOSTNLcWtxbTRscEY0K2VYUHorcjc5WmZCREMya2lENlI4Wkgrb1pHVFR3dW9heG91bjJUQ2cyU21PY0o1T1prUTFXUUE0TE5oaS9iSDFQVERLNjM2SER3eUhQSXpNeDBHVXdzRnVQV3JWdHdNQTZJeFdKMGRIVGdpL0lyS0NoUUlpb3kzRVdYWVJnME56Zmp3b1VMN2UrOCs4NnJyVzJ0djVtYW11b0FNTGZ5SlpaMnNjNWlzek5mMXJlUmsxT01TWjRZcFFvVVJpRTNTNDRielMzb2V6Z0llSG5EdnVDUEYwK2ZnYnUxQkFEcXZXcVVmbG9LaG1GUTM5Q0lZdldUVUdUdGRORXhHbzI0VkhxcDc3UFBQenR2TUJqS1YwN3BTcmpMWmlTbkRxdit4cWNpNUJHeFVwaEd4d0F2YjZSbTVFR3QzZ2VDV0Q5VVh2N3JaZHpyZVlDQ1hidVJrNUdLd0dXeHNxcXFpdm40NDQrcnlxK1cvdzdBelhVTmZRZDNDWUhwUHIzUTk4TlhUc20xV2kwVy9BSngvTmh4U0tYU0RZM1YxZGRqeER5SnB3NDlnNWhJa1pNY3d6Q292bGFPcnFaS1d0dFVmMkd6NUFEMzZaWmNucEdsYW1ob2dOVnFoVGhhdkNseVpWOThnUkhMRlBJS2loQXVEQUUvT05BcHUzTDFDcnA3ZXlHUHBhalhmblRnUElCTnAyYXIwcTFDWmVGUGpoNDlXbEw4UkRHa2lWSWtKeWM3ZDZrN01BeURUMHBMNFUwRUlqNUJDbEVvaWFnd3ZvdU9UQ2FETENVTmxYVU5LRTZONUZPaGdVcmRnNkd4S1daR3YyV0M0bWl4NnFXWFhsS0p4V0x3K2Z4MXlabE1Kbno0MFVmdzQ1QklTNU5ERWlGRW1EREVyUzVCRU9BR0MxRlpVNHNYOW1SRzhnTDhWWjA5L1FOMngwelhlZ1JYclVFV2k3Vmhza25UTkc1cU5QaXEvam95c3ZPUmxwYUcyRWdLSEgvMnV2M1MwOU9oMTZuUTJQazFYbnk2aUFKdy90Mi9WR0hVYXJ1OFZwOVZIbnpROThCWHZWZDlNaTV1OVFuQU1Bd3FLaXZ3UmZrVm1DZW1zRWU5SDFrNzB4QWJSY0hYZDNNSmVGeDhBbXIvcVlHUW1FZUVNSmhMVDAzSGQvWSt2SUVWQVhwTmdnQ1k4TER3UGNYRnhjNkZiRFFhMGRuWmlhYmFxN2pkcWtHMnFnVDdTL1pCR2hmdEVrWTJBeGFMQlQ0Vmdhc1ZsVmlZWmVnL2ZGNXp3VEU3ZHdOclhCUGNFYlNOUEJvaHdzUERWV0ZVR0t1bXRnYTF0YlhRdG1oMXVjSTVmaVNIaFRhZEFjVjc5c0xQejI5TDVKYkE1L05odHMvaFlXOFh3ZkxCbU40NC9PZTFkTjFlM0MwV1M4YzMzM3hEMzc1em14d1pHWmtiSEJyVVhicDA2ZUlMYXNXQnFGQStlbnQ2WWJMUElTVWwxU09DQUNDV3hPQldWemNHREQxak91UHdKMnZwcmJWd0dJUEI4QWVEd1hBWmkrazVnMlYzQ21WeUhHcHZWS0loUEJLRmhZVWVFU1FJQWs4ZmV4NjMyanNKb0kzRWl2dndFallxZmRpKzYyZ0RJSGxoWCs1SkhzSEJ0L01MQ0EwZ1VOdlFDRUZVRENqS3N5c3hTWklJNFFzam01cWJUQmFMUmVOT3g5MUo0aGFaMHVoMFVRalArUndheU1YdWVCSCsrdUg3TUJxTkcvWm5HUGZSUzZGUVlIZlI3aE5ZNDNUWlRQRUlBSWlkaWRHL09sS1VFVC9qK0JZenMvTUFBQTdiRHo1ekRPbzB0eUJOU1lPTm1jVzkrd01ZZW1UR3lCZ05QeCtndGJVRkRRME5xS3lxaEVLaGNPYUtTMkN4V0ppWm5lR1hsWlZWdzAxbXMxbUNrY1ZaTzE1OVJwVkJtdWxwSjBGZzBaUG00VUVZcmRQWXBTekFwTldNLzd2OEtYcDB0OUhWZFFkY0xoYzVpaHlvOTZyWHpJUzh2YnhaR3ExR1p6S1ptbGJLTmx2ZWtQQUNDTUpvR3NmOC9BS2F1M29adGk4TGJEOFdrUkJCWVdEQ3pweklVaEFBa0pTWWdEZlBuZHVrMlVXSVJDSUlCQUs1TzlsbUNkSmxkYmZlVG93UXZqSDhhQXFYYWhyUFJ3bERWUUFRd2cwZ080Zk0xdzg3bUZlMnhHb1pTSklFTDhCOThXbXpCTnNOdzZQdHZ5bXRaQ1ltcDJpemJicThkK2hSZFZ5NFFGemZmdStHUUNBb2NqQU9UL2tCQUZMVFVxbXl2NVZSV0ZGajNIUUZDd0Q2aHNjdUxudThlWDlvOUNZQXlHUXlsVmdzaGw2dkI4TXdTRTlQM3pMQndNQkFBb3N4MXdXYkRqUHJnS1FvU2c0c0pxWnIzVmMyUW14TUxBVTNvZWF4RUV4TlNhVTBXZzNVZTlVUWk4VWVHZUZ3T1A4eUQwcFNVMUlsM2QzZEhrM3RSdGcyd1lTRUJHa1FHUVNCUU9nc1lUeE9iSnRnbUNpTW9rUVVaTElVL0tPdTduRndjc0cyQ1FvRUFwVklKSUt5SUI4R1l6OW8ybTFTNGpHMlM1QUE0RHpDSkpKWWFMWGE3WEp5d1hZSlVnWEtBc25TUTNwNk9qUXRMUjRac3R2dGJ0T2R4N0dMblVoSlRvWmo5bHQwZEhSc3JMd0NoZ2NHRTl4a005djJvRWdvY2tibTRDQXVZdUlTVUgvOXVsdGxtcWFoMSt2UjBOQ3dTalk0TU9oU1BGL0NsbzQ2TnlBRUFvSEwwZkdFcWhCL3ZIZ0JlcjNlcFdUeTI3ZmZoczArRFM2UEJGOGdRazd1ckxQdVRkTTAyanZiKytEbVc5OTJDYTVDdUVnQWFYSWFybDY3QnJGWTdOeEEvM24yTE83MEdESE56Q0ErT3N4SkRnQzBXaTNhMjl1L2RHZnZzZXppNVdENythSndseElUVXc1VVZWZTd5R0lqS2ZoNGV5TTRhTEdjY3VYcUZRQkFVMU9UYm54OGZIdDNFbmNvVkJibXVEdDdJMFNoeU4rbHd0ZmFWdFRVMURqYk9mNXN5QktpQVFBYXJRWjl4b2VnYVJvNm5VNkhOYjZTUHZZcEJoYTltTG9qRVFCUS8xVWw3TlBUS05tM1dQeGNtbHFOdGhVWkdabXdXcTJ3V0N6dGE5bDZyR0ZtT1NKRW9ZaU1DRWZSbmlmUmZ1Y2UzdnZnQStkWjNkSFJnVWRqWnFTbHBXMW9aenNlcEx4WjNoU2J2WFpGS3phU3dqUXpnNmNPUFFPclpjeVppbFhWMUNKYUVvZEFMZ2VXOGZVSDhkaURPZGs1cjUxNzQ5ekw2MTNhT2Y1c1p6RlRJS1JBRUFSdTNyd0p5NFFOdTNlckFBQnNOaHZjUUs1a0xSc2VlNUNpS0FrWnRCZ0N2eXd2aDUxeElDOWZDVDgvTmh3enM1aVpkZjJpTURNN2gxLys2dGVZblp2SG5wSURZUHY2THRuQkR1a09lVVZGaFFUYnVCZXZ3c1RrQkIwUUVMQkhxVlJ5S1lxQ3dkQ0xpcW9xOUQ4Y3hOUTBBOW82QVQvQzM0V29NQ3dDU2NrcElNbGdURTB6R0hwa2hwMXhnTWNOb05yYVduVm1zN2x0NVRnZWU1REw1VXJ5OC9JcFlQSGErTnl6ejJHZm1vYStXNDg3WFhleHNMQUFWWUhDcVQ4ek80ZHdZUWdtcDZhZGJUNCszb2dRaGlKS3RBdlpXZGtsUFQwOUYxZU80ekZCWGdBdlZ5UVN1YlNSSklrY1JRNXlGRGxic3FYUmFqQS9OKzgya1Z6cmJ5a2JJaXdzYkY5K2J2NVpraVFKV1lwc3krV3RpWWtKNW5ibmJSTUFqSTZPWG05b2JMZ0lOMmV4eHdTWGdjQVd2bnNzQTROTi9CSG8vd0VOM2FlNmFCQmRoZ0FBQUFCSlJVNUVya0pnZ2c9PVwiXVxyXG4gICAgXTtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBkZWNvcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgZGVjb3IgPSBkZWNvcnNbaV07XHJcbiAgICAgICAgbGV0IGRlY29yX21vZGVsID0gZGVjb3JbMF07XHJcbiAgICAgICAgbGV0IGRlY29yX25hbWUgPSBkZWNvclsxXTtcclxuICAgICAgICBsZXQgZGVjb3JfaW1hZ2UgPSBkZWNvclsyXTtcclxuICAgICAgICBWQUxfVEFCTEVbXCJkZWNvcl9tb2RlbFwiXVtkZWNvcl9tb2RlbF0gPSBkZWNvcl9uYW1lOyAvLyBBZGQgdG8ga25vd24gZGVjb3JzLlxyXG4gICAgICAgIGltZ19kZWNvcnNbZGVjb3JfbW9kZWxdID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgaW1nX2RlY29yc1tkZWNvcl9tb2RlbF0uc3JjID0gZGVjb3JfaW1hZ2U7XHJcbiAgICAgICAgaW1nX2RlY29yc1tkZWNvcl9tb2RlbF0ubmF0aXZlID0gdHJ1ZTtcclxuICAgICAgICBDQUNIRURfREVDT1JTW2RlY29yX21vZGVsXSA9IGltZ19kZWNvcnNbZGVjb3JfbW9kZWxdO1xyXG4gICAgICAgIENVU1RPTV9JTUFHRVNfQVBQUk9WRURbZGVjb3JfbW9kZWxdID0gdHJ1ZTsgLy8gU2luY2UgaXQncyBvYnZpb3VzbHkgdmFuaWxsYSwgYW5kIG90aGVyIHZhbmlsbGEgZGVjb3JzIGFyZSBhcHByb3ZlZCwgaXQncyBvbmx5IG5hdHVyYWwgaWYgd2UgYXBwcm92ZSBhZGRlZCBkZWNvcnMgdG9vXHJcbiAgICB9XHJcbiAgICB3aW5kb3cuQUxFSV9kZWNvcnMgPSBkZWNvcnM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZU9mZnNldHMoKSB7XHJcbiAgICAvLyBCZWNhdXNlIGhha2FzZSBkZWNvciBhbmQgZ3JhYmJhYmxlIGxlZGdlIGltYWdlIGlzIG1hZGUgd2l0aCBoYW5kIG1hbnVhbGx5IGFuZCBkb2Vzbid0IGNvbWUgZnJvbSB3ZWJzaXRlLCBhbmQgdGhhdCB0aGVyZSBpcyBub1xyXG4gICAgLy8gaW5idWlsdCBvZmZzZXQsIHdlIGhhdmUgdG8gb2Zmc2V0IHRob3NlIHRvIG1ha2Ugc3VyZSB0aGV5IHNob3cgdXAgaW4gQUxFIGNvcnJlY3RseS5cclxuICAgIGxldCB0b29zYyA9IHdpbmRvdy5UaGlua09mT2Zmc2V0Q2xhc3M7XHJcbiAgICB3aW5kb3cuVGhpbmtPZk9mZnNldENsYXNzID0gZnVuY3Rpb24odGMsIGVzaSkge1xyXG4gICAgICAgIGlmICh0YyA9PSBcInZlaGljbGVcIiAmJiBvZmZzZXRzW2VzaS5wbS5tb2RlbF0gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcImFsZWlfXCIgKyBlc2kucG0ubW9kZWw7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0YyA9PSBcImRlY29yXCIgJiYgb2Zmc2V0c1tlc2kucG0ubW9kZWxdICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJhbGVpX1wiICsgZXNpLnBtLm1vZGVsO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGMgPT0gXCJndW5cIiAmJiAoZXNpLnBtLm1vZGVsID09IFwiZ3VuX3JsMFwiKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJhbGVpX2d1bl9ybDBcIjtcclxuICAgICAgICB9IGVsc2UgcmV0dXJuIHRvb3NjKHRjLCBlc2kpO1xyXG4gICAgfVxyXG4gICAgbGV0IG9mZnNldHMgPSB7XHJcbiAgICAgICAgdmVoX2hoOiB7eDogLTE1LCB5OiAtMTUsIHc6IDMwLCBoOiAzMH0sXHJcbiAgICAgICAgaGFrYXNlOiB7eDogLTE4LCB5OiAtNTcsIHc6IDQwLCBoOiA2MH0sXHJcbiAgICAgICAgZ3VuX3JsMDoge3g6IC0yNCwgeTogLTYsIHc6IDYxLCBoOiAxM31cclxuICAgIH1cclxuICAgIGZvciAobGV0IGtleSBpbiBvZmZzZXRzKSB7XHJcbiAgICAgICAgbGV0IG9mZiA9IG9mZnNldHNba2V5XTtcclxuICAgICAgICBsb194W1wiYWxlaV9cIiArIGtleV0gPSBvZmYueDtcclxuICAgICAgICBsb195W1wiYWxlaV9cIiArIGtleV0gPSBvZmYueTtcclxuICAgICAgICBsb193W1wiYWxlaV9cIiArIGtleV0gPSBvZmYudztcclxuICAgICAgICBsb19oW1wiYWxlaV9cIiArIGtleV0gPSBvZmYuaDtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlVHJpZ2dlcnMoKSB7XHJcbiAgICAvLyBUaGlzIGlzIHdoZXJlIHdlIHdpbGwgcmVuYW1lIHNvbWUgdHJpZ2dlcnMuXHJcbiAgICAvLyBGb3Igbm93IGl0J3Mgb25seSAzNzgsIGJ1dCB3ZSBnb3QgbW9yZSB0cmlnZ2VycyBsaWtlIHJlbmFtaW5nIDMyOFxyXG4gICAgYWRkVHJpZ2dlcigxNzUsIFwiR3VuICYjODI1MDsgQ2hhbmdlIGd1biAnQScgcHJvamVjdGlsZSBtb2RlbCB0byAnQidcIiwgXCJndW5cIiwgXCJBTEVJX3Byb2plY3RpbGVNb2RlbHNcIik7XHJcbiAgICBhZGRUcmlnZ2VyKDM3OCwgXCJHdW4gJiM4MjUwOyBBZGQgaGV4IGNvbG9yICdCJyB0byBndW4gJ0EnXCIsIFwiZ3VuXCIsIFwic3RyaW5nXCIpO1xyXG4gICAgYWRkVHJpZ2dlcigzMzIsIFwiVmFyICYjODI1MDsgU2V0IHZhcmlhYmxlICdBJyB0byB2YWx1ZSAxIGlmIEd1biAnQicgaXMgaW4gb3duZXIncyBhY3RpdmUgc2xvdCwgc2V0IHRvIHZhbHVlIDAgaW4gZWxzZSBjYXNlXCIsIFwic3RyaW5nXCIsIFwiZ3VuXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVPYmplY3RzKCkge1xyXG4gICAgLy8gU2hvcnRoYW5kIGZvciBvYmplY3QtcmVsYXRlZCBmdW5jdGlvbnMgYXMgdG8gbm90IGNsdXR0ZXIgY29uc29sZS5cclxuICAgIHVwZGF0ZUd1bnMoKTtcclxuICAgIHVwZGF0ZVZlaGljbGVzKCk7XHJcbiAgICB1cGRhdGVEZWNvcnMoKTtcclxuICAgIHVwZGF0ZVRyaWdnZXJzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUJ1dHRvbnMoKSB7XHJcbiAgICBsZXQgdG9wUGFuZWwgPSAkaWQoXCJ0b3BfcGFuZWxcIik7XHJcbiAgICBsZXQgY2hpbGRzID0gdG9wUGFuZWwuY2hpbGRyZW47XHJcblxyXG4gICAgLy8gV2UgcmVkaXJlY3QgdGhlIG1hbnVhbCBwYWdlIHRvIEVhZ2xlUEIyJ3MuXHJcbiAgICBjaGlsZHNbMTZdLnZhbHVlID0gXCJFYWdsZSdzIE1hbnVhbFwiO1xyXG4gICAgY2hpbGRzWzE2XS5zZXRBdHRyaWJ1dGUoXCJvbmNsaWNrXCIsIFwid2luZG93Lm9wZW4oJ2h0dHBzOi8vZWFnbGVwYjIuZ2l0Ym9vay5pby9wYjItZWRpdG9yLW1hbnVhbC8nLCAnX2JsYW5rJyk7XCIpXHJcblxyXG4gICAgLy8gV2UgZG9udCB3YW50IG91ciBuZXcgYnV0dG9ucyB0byBhcHBlYXIgYWZ0ZXIgXCJyaWdodHNcIiwgc28gd2Ugd2lsbCBzdG9yZSBcInJpZ2h0c1wiIGJlZm9yZWhhbmQgYW5kIHJlbW92ZSB0aGVtLCB3ZSdsbCBhZGQgdGhlbSBiYWNrIG9uY2Ugd2UgYXJlIGRvbmVcclxuICAgIGxldCBhcHBlbmRCYWNrID0gKHRvcFBhbmVsLnJlbW92ZUNoaWxkKGNoaWxkc1tjaGlsZHMubGVuZ3RoIC0gMV0pKS5vdXRlckhUTUw7XHJcbiAgICBhcHBlbmRCYWNrID0gKHRvcFBhbmVsLnJlbW92ZUNoaWxkKGNoaWxkc1tjaGlsZHMubGVuZ3RoIC0gMV0pKS5vdXRlckhUTUwgKyBhcHBlbmRCYWNrO1xyXG5cclxuICAgIC8vIFJlbW92ZSBwYWQgKHdlIHdpbGwgYWRkIG91ciBvd24gbGF0ZXIpLlxyXG4gICAgdG9wUGFuZWwucmVtb3ZlQ2hpbGQoY2hpbGRzW2NoaWxkcy5sZW5ndGggLSAxXSlcclxuXHJcbiAgICB3aW5kb3cuYWxlaUJ1dHRvbkNsaWNrcyA9IHt9O1xyXG5cclxuICAgIC8vIENvbnZlbmllbmNlIGZ1bmN0aW9uIGZvciBkb2luZyBlYXN5IHRvcCBwYW5lbCBidXR0b25zXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVCdXR0b24odGV4dCwgaW50ZXJuYWxOYW1lLCBvbkNsaWNrKSB7XHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmaWVsZF9idG5cIik7XHJcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XHJcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHRleHQpO1xyXG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJvbmNsaWNrXCIsIGBhbGVpQnV0dG9uQ2xpY2tzWycke2ludGVybmFsTmFtZX0nXSgpYCk7XHJcbiAgICAgICAgd2luZG93LmFsZWlCdXR0b25DbGlja3NbaW50ZXJuYWxOYW1lXSA9IG9uQ2xpY2s7XHJcblxyXG4gICAgICAgIGxldCBwYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHBhZC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInFcIik7XHJcblxyXG4gICAgICAgIHRvcFBhbmVsLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICAgICAgdG9wUGFuZWwuYXBwZW5kQ2hpbGQocGFkKTtcclxuICAgIH1cclxuICAgIGxldCBiaWdQYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYmlnUGFkLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicTNcIik7XHJcbiAgICB0b3BQYW5lbC5hcHBlbmRDaGlsZChiaWdQYWQpO1xyXG5cclxuICAgIC8vIFwiRG93bmxvYWQgWE1MXCIgYnV0dG9uLlxyXG4gICAgY3JlYXRlQnV0dG9uKFwiRG93bmxvYWQgWE1MXCIsIFwiZG93bmxvYWRYTUxCdXR0b25cIiwgZXhwb3J0WE1MKTtcclxuICAgIC8vIFwiSW5zZXJ0IFhNTFwiIGJ1dHRvbi5cclxuICAgIGNyZWF0ZUJ1dHRvbihcIkluc2VydCBYTUxcIiwgXCJpbnNlcnRYTUxCdXR0b25cIiwgKCkgPT4ge1xyXG4gICAgICAgIGxldCBmaWxlID0gY29uZmlybShcIkZpbGUgKE9LKSBvciB0ZXh0IChDYW5jZWwpID9cIik7XHJcblxyXG4gICAgICAgIGlmIChmaWxlKSB7XHJcbiAgICAgICAgICAgIGxldCBmaWxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcblxyXG4gICAgICAgICAgICBmaWxlSW5wdXQudHlwZSA9IFwiZmlsZVwiO1xyXG5cclxuICAgICAgICAgICAgZmlsZUlucHV0Lm9uY2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmlsZUlucHV0LmZpbGVzWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbGVJbnB1dC5maWxlc1swXS5uYW1lLnNwbGl0KFwiLlwiKVsxXSA9PSBcInhtbFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0WE1MKHJlYWRlci5yZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVJbnB1dC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZUlucHV0LmZpbGVzWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIkludmFsaWQgZmlsZSBleHRlbnNpb24uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZmlsZUlucHV0LmNsaWNrKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHhtbCA9IHByb21wdChcIkVudGVyIFhNTDpcIiwgXCJcIik7XHJcblxyXG4gICAgICAgICAgICBpZiAoeG1sICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpbnNlcnRYTUwoeG1sKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY3JlYXRlQnV0dG9uKFwiQUxFSSBTZXR0aW5nc1wiLCBcIm9wZW5BTEVJU2V0dGluZ3NcIiwgc2hvd1NldHRpbmdzKTtcclxuICAgIC8vIFJlYWRkICdyaWdodHMnIGJhY2suXHJcbiAgICB0b3BQYW5lbC5pbm5lckhUTUwgKz0gYXBwZW5kQmFjaztcclxuICAgIC8vIFVwZGF0ZSBvcmlnaW5hbCByZWZlcmVuY2VcclxuICAgIHdpbmRvdy5tYXBpZF9maWVsZCA9ICRpZChcIm1hcGlkX2ZpZWxkXCIpO1xyXG4gICAgbWFwaWRfZmllbGQudmFsdWUgPSBtYXBpZDsgLy8gQW5kIHVwZGF0ZSBtYXAgaWQgZmllbGQgdmFsdWUgbWFudWFsbHkuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZENsaXBib2FyZFN5bmMoKSB7XHJcbiAgICBsZXQgY2xpcGJvYXJkX2NoYW5uZWwgPSBuZXcgQnJvYWRjYXN0Q2hhbm5lbChcImFsZV9jbGlwYm9hcmRcIik7XHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAvLyBSZWNlaXZpbmcgLy9cclxuICAgIC8vLy8vLy8vLy8vLy8vL1xyXG4gICAgY2xpcGJvYXJkX2NoYW5uZWwub25tZXNzYWdlID0gKG1zZykgPT4ge1xyXG4gICAgICAgIGxldCBkYXRhID0gbXNnLmRhdGE7XHJcbiAgICAgICAgbGV0IGtpbmQgPSBkYXRhLmtpbmQ7XHJcbiAgICAgICAgaWYgKGtpbmQgPT0gXCJzZW5kXCIpIHtcclxuICAgICAgICAgICAgbGV0IHJlY2lwaWVudCA9IGRhdGEucmVjaXBpZW50O1xyXG4gICAgICAgICAgICBsZXQgY2xpcF9uYW1lICA9IGRhdGEuY2xpcF9uYW1lO1xyXG4gICAgICAgICAgICBsZXQgY2xpcF9kYXRhICA9IGRhdGEuY2xpcF9kYXRhO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlY2lwaWVudCA9PSB1bmRlZmluZWQgfHwgcmVjaXBpZW50ID09IGFsZWlTZXNzaW9uSUQpIHtcclxuICAgICAgICAgICAgICAgIGFsZWlMb2coREVCVUcsICcvYWxlX2NsaXBib2FyZC8gZ290IGRhdGEgZm9yICcgKyBjbGlwX25hbWUpO1xyXG4gICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2VbY2xpcF9uYW1lXSA9IGNsaXBfZGF0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoa2luZCA9PSBcImdldFwiKSB7XHJcbiAgICAgICAgICAgIGlmIChhbGVpU2Vzc2lvbklEID4gTWF0aC5taW4oLi4uYWxlaVNlc3Npb25MaXN0KSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgbGV0IHNlc3Npb25faWQgPSBkYXRhLnNlc3Npb25faWQ7XHJcbiAgICAgICAgICAgIGFsZWlMb2coREVCVUcsICcvYWxlX2NsaXBib2FyZC8gc3luY2luZyB0byAnICsgc2Vzc2lvbl9pZCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBjbGlwX25hbWUgPSBcImNsaXBib2FyZFwiICsgKGkgPT0gMCA/IFwiXCIgOiAoXCJfc2xvdFwiICsgKGktMSkpKTtcclxuICAgICAgICAgICAgICAgIGxldCBjbGlwX2RhdGEgPSBzZXNzaW9uU3RvcmFnZVtjbGlwX25hbWVdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNsaXBfZGF0YSA9PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2xpcGJvYXJkX2NoYW5uZWwucG9zdE1lc3NhZ2Uoe2tpbmQ6IFwic2VuZFwiLCByZWNpcGllbnQ6IHNlc3Npb25faWQsIGNsaXBfbmFtZSwgY2xpcF9kYXRhfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSW5pdGlhbCBTeW5jXHJcbiAgICBhbGVpTG9nKERFQlVHLCAnL2FsZV9jbGlwYm9hcmQvIHJlcXVlc3RpbmcnKTtcclxuICAgIGNsaXBib2FyZF9jaGFubmVsLnBvc3RNZXNzYWdlKHtraW5kOiBcImdldFwiLCBzZXNzaW9uX2lkOiBhbGVpU2Vzc2lvbklEfSk7XHJcblxyXG4gICAgLy8vLy8vLy8vLy8vL1xyXG4gICAgLy8gU2VuZGluZyAvL1xyXG4gICAgLy8vLy8vLy8vLy8vL1xyXG4gICAgbGV0IEFMRV9Db3B5VG9DbGlwQm9hcmQgPSB3aW5kb3cuQ29weVRvQ2xpcEJvYXJkO1xyXG4gICAgd2luZG93LkNvcHlUb0NsaXBCb2FyZCA9IChjbGlwX25hbWUpID0+IHtcclxuICAgICAgICBBTEVfQ29weVRvQ2xpcEJvYXJkKGNsaXBfbmFtZSk7XHJcbiAgICAgICAgbGV0IGNsaXBfZGF0YSA9IHNlc3Npb25TdG9yYWdlW2NsaXBfbmFtZV07XHJcbiAgICAgICAgY2xpcGJvYXJkX2NoYW5uZWwucG9zdE1lc3NhZ2Uoe2tpbmQ6IFwic2VuZFwiLCBjbGlwX25hbWUsIGNsaXBfZGF0YX0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBhZGRTZXNzaW9uU3luYygpIHtcclxuICAgIC8vIFRoaXMgZnVuY3Rpb24gcmVnaXN0ZXJzIHNvbWUgZXZlbnRzLCBhcyB0byB0YWxrIHdpdGggb3RoZXIgdGFic1xyXG4gICAgLy8gRm9yIG5vdywgdGhpcyBpcyB1c2VmdWwgZm9yIGNsaXBib2FyZCBzeW5jLCBidXQgd2UgcHJvYmFibHkgY2FuIGhhdmUgbW9yZS5cclxuICAgIGNvbnN0IFBST0JFX1RJTUVPVVRfTVMgPSAyMDA7XHJcbiAgICBsZXQgc2Vzc2lvbl9jaGFubmVsID0gbmV3IEJyb2FkY2FzdENoYW5uZWwoXCJhbGVfc2Vzc2lvblwiKTtcclxuXHJcbiAgICAvLyBSZWNlaXZlIGRhdGFcclxuICAgIHNlc3Npb25fY2hhbm5lbC5vbm1lc3NhZ2UgPSAobXNnKSA9PiB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBtc2cuZGF0YTtcclxuICAgICAgICBsZXQga2luZCA9IGRhdGEua2luZDtcclxuICAgICAgICAvLyBOZXcgQUxFSSBpbnN0YW5jZSBzdGFydGVkIHVwLlxyXG4gICAgICAgIGlmIChraW5kID09IFwic3RhcnRcIikge1xyXG4gICAgICAgICAgICBpZiAoYWxlaVNlc3Npb25JRCA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgICAgIHNlc3Npb25fY2hhbm5lbC5wb3N0TWVzc2FnZSh7a2luZDogXCJncmVldFwiLCBpZDogYWxlaVNlc3Npb25JRH0pO1xyXG4gICAgICAgICAgICBhbGVpTG9nKERFQlVHLCBcIi9hbGVfc2Vzc2lvbi8gcmVjaWV2ZWQgc3RhcnRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEFuIEFMRUkgaW5zdGFuY2UgcmVzcG9uZGVkIHRvIG5ldyBBTEVJIGluc3RhbmNlLCByZWdpc3RlcmluZyB0aGUgQUxFSSBpbnN0YW5jZVxyXG4gICAgICAgIGlmIChraW5kID09IFwiZ3JlZXRcIikge1xyXG4gICAgICAgICAgICBsZXQgc2Vzc2lvbl9pZCA9IGRhdGEuaWQ7XHJcbiAgICAgICAgICAgIGlmICghYWxlaVNlc3Npb25MaXN0LmluY2x1ZGVzKHNlc3Npb25faWQpKVxyXG4gICAgICAgICAgICAgICAgYWxlaVNlc3Npb25MaXN0LnB1c2goc2Vzc2lvbl9pZCk7XHJcbiAgICAgICAgICAgIGFsZWlMb2coREVCVUcsIFwiL2FsZV9zZXNzaW9uLyByZWNlaXZlZCBncmVldCBieSBcIiArIHNlc3Npb25faWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBbiBBTEVJIGluc3RhbmNlIGlzIGNsb3NpbmdcclxuICAgICAgICBpZiAoa2luZCA9PSBcImNsb3NlXCIpIHtcclxuICAgICAgICAgICAgbGV0IHNlc3Npb25faWQgPSBkYXRhLmlkO1xyXG4gICAgICAgICAgICBhbGVpU2Vzc2lvbkxpc3Quc3BsaWNlKGFsZWlTZXNzaW9uTGlzdC5pbmRleE9mKHNlc3Npb25faWQpLCAxKTtcclxuICAgICAgICAgICAgYWxlaUxvZyhERUJVRywgXCIvYWxlX3Nlc3Npb24vIHJlY2VpdmVkIGNsb3NlIGJ5IFwiICsgc2Vzc2lvbl9pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFByb2JlIGZvciBvdGhlciBzZXNzaW9uc1xyXG4gICAgc2Vzc2lvbl9jaGFubmVsLnBvc3RNZXNzYWdlKHtraW5kOiBcInN0YXJ0XCJ9KTtcclxuICAgIGFsZWlMb2coREVCVUcsIFwiL2FsZV9zZXNzaW9uLyBwcm9iaW5nXCIpO1xyXG4gICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgSlNfc2V0VGltZW91dChyZXNvbHZlLCBQUk9CRV9USU1FT1VUX01TKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEFzc2lnbiBvd24gc2Vzc2lvbiBJRFxyXG4gICAgaWYgKGFsZWlTZXNzaW9uTGlzdC5sZW5ndGggPT0gMClcclxuICAgICAgICBhbGVpU2Vzc2lvbklEID0gMDtcclxuICAgIGVsc2VcclxuICAgICAgICBhbGVpU2Vzc2lvbklEID0gTWF0aC5tYXgoLi4uYWxlaVNlc3Npb25MaXN0KSArIDE7XHJcblxyXG4gICAgYWxlaUxvZyhERUJVRywgXCIvYWxlX3Nlc3Npb24vIHNlc3Npb24gSUQgXCIgKyBhbGVpU2Vzc2lvbklEKTtcclxuXHJcbiAgICAvLyBUZWxsIG90aGVyIHNlc3Npb25zIHRoYXQgdGhpcyBvbmUgaXMgZG9uZVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsIChldmVudCkgPT4ge1xyXG4gICAgICAgIHNlc3Npb25fY2hhbm5lbC5wb3N0TWVzc2FnZSh7a2luZDogXCJjbG9zZVwiLCBpZDogYWxlaVNlc3Npb25JRH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYWRkQ2xpcGJvYXJkU3luYygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQcm9wZXJ0eVBhbmVsUmVzaXplKCkge1xyXG4gICAgLy8gR2l2ZXMgcmlnaHQgcGFuZWwgYWJpbGl0eSB0byBiZSByZXNpemVkLlxyXG5cclxuICAgIGxldCBzcGxpdHRlcl9pc19kb3duID0gZmFsc2U7XHJcbiAgICBjb25zdCBzcGxpdHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG5cclxuICAgIHNwbGl0dGVyLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgc3BsaXR0ZXIuc3R5bGUud2lkdGggPSBcIjVweFwiO1xyXG4gICAgc3BsaXR0ZXIuc3R5bGUudG9wID0gXCI1MHB4XCI7XHJcbiAgICBzcGxpdHRlci5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcclxuICAgIHNwbGl0dGVyLnN0eWxlLmN1cnNvciA9IFwidy1yZXNpemVcIjtcclxuICAgIC8vIHNwbGl0dGVyLnN0eWxlW1wiYmFja2dyb3VuZC1jb2xvclwiXSA9IFwiYmxhY2tcIjtcclxuICAgICRpZCgnZmxvYXR0YWcnKS5hcHBlbmRDaGlsZChzcGxpdHRlcik7XHJcblxyXG4gICAgZnVuY3Rpb24gc3BsaXR0ZXJfcmVzaXplKGUpIHtcclxuICAgICAgICBsZXQgbmV3X3dpZHRoID0gTWF0aC5taW4ocm9vdC5jbGllbnRXaWR0aCAtIDEwMCwgTWF0aC5tYXgoMTAwLCByb290LmNsaWVudFdpZHRoIC0gZS5jbGllbnRYKSk7XHJcbiAgICAgICAgcmlnaHRfcGFuZWwuc3R5bGUud2lkdGggPSBuZXdfd2lkdGggKyAncHgnO1xyXG4gICAgICAgIHNwbGl0dGVyLnN0eWxlLnJpZ2h0ID0gbmV3X3dpZHRoICsgJ3B4JztcclxuICAgICAgICBST09UX0VMRU1FTlQuc3R5bGUuc2V0UHJvcGVydHkoXCItLXBhcmFtX3BhbmVsX3NpemVcIiwgc3BsaXR0ZXIuc3R5bGUucmlnaHQpO1xyXG4gICAgICAgIHVwZGF0ZUJveFNwbGl0dGVyU2l6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNwbGl0dGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlKSA9PiB7XHJcbiAgICAgICAgc3BsaXR0ZXJfaXNfZG93biA9IHRydWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICByb290LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoZSkgPT4ge1xyXG4gICAgICAgIHNwbGl0dGVyX2lzX2Rvd24gPSBmYWxzZTtcclxuICAgICAgICB3cml0ZVN0b3JhZ2UoJ0FMRUlfUmlnaHRQYW5lbFdpZHRoJywgcmlnaHRfcGFuZWwuY2xpZW50V2lkdGggKyAncHgnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJvb3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGUpID0+IHtcclxuICAgICAgICBpZiAoc3BsaXR0ZXJfaXNfZG93bikgc3BsaXR0ZXJfcmVzaXplKGUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgc3BsaXR0ZXIuc3R5bGUucmlnaHQgPSBhbGVpU2V0dGluZ3MucmlnaHRQYW5lbFNpemU7XHJcbiAgICBST09UX0VMRU1FTlQuc3R5bGUuc2V0UHJvcGVydHkoXCItLXBhcmFtX3BhbmVsX3NpemVcIiwgc3BsaXR0ZXIuc3R5bGUucmlnaHQpO1xyXG4gICAgd2luZG93LnNwbGl0dGVyID0gc3BsaXR0ZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFRyaWdnZXJJRHMoKSB7XHJcbiAgICBpZiAoIWFsZWlTZXR0aW5ncy5zaG93VHJpZ2dlcklEcykgcmV0dXJuO1xyXG5cclxuICAgIGxldCBTVlRUUCA9IFZBTF9UQUJMRVsndHJpZ2dlcl90eXBlJ107XHJcbiAgICBmb3IgKGxldCBpIGluIFNWVFRQKSB7XHJcbiAgICAgICAgU1ZUVFBbaV0gPSBpICsgXCIgXCIgKyBTVlRUUFtpXTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcGF0Y2hTaG93SGlkZUJ1dHRvbigpIHtcclxuICAgIGxldCBvZyA9IHdpbmRvdy5TaG93SGlkZU9iamVjdEJveDtcclxuICAgIHdpbmRvdy5TaG93SGlkZU9iamVjdEJveCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIG9nKCk7XHJcbiAgICAgICAgbGV0IHJwYXJhbXMgPSAkaWQoXCJycGFyYW1zXCIpO1xyXG4gICAgICAgIGxldCBoZWlnaHRPZmZzZXQgPSB7dHJ1ZTogMjcwLCBmYWxzZTogMTU1fVtPYmplY3RCb3hfdmlzaWJsZV07XHJcbiAgICAgICAgaWYgKHJwYXJhbXMgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBoZWlnaHRPZmZzZXQgPSBNYXRoLnJvdW5kKHJwYXJhbXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgMTMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBXZSB0aGVuIHNldCB2YXJpYWJsZSBhbmQgY2FsbCBvcmlnaW5hbCBmdW5jdGlvbi5cclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLUFMRUlfUlBBUkFNU19IRUlHSFRcIiwgYGNhbGMoMTAwdmggLSAke2hlaWdodE9mZnNldH1weClgKTtcclxuICAgICAgICAvL29nKCk7XHJcbiAgICB9XHJcbiAgICBTaG93SGlkZU9iamVjdEJveCgpO1xyXG4gICAgU2hvd0hpZGVPYmplY3RCb3goKTsgLy8gSGFja3kgd2F5IHRvIGZpeCBidWdcclxufVxyXG5cclxud2luZG93LkFMRUlfQ3VzdG9tU25hcHBpbmcgPSAoKSA9PiB7XHJcbiAgICBsZXQgc25hcHBpbmcgPSBwcm9tcHQoXCJFbnRlciBzbmFwcGluZzpcIiwgXCJcIik7XHJcblxyXG4gICAgaWYoIXNuYXBwaW5nKSByZXR1cm47XHJcbiAgICBpZihpc05hTihOdW1iZXIoc25hcHBpbmcpKSkge05ld05vdGUoXCJJbnZhbGlkIHNuYXBwaW5nLlwiLCBcIiNGRjAwMDBcIik7IHJldHVybn07XHJcblxyXG4gICAgaWYgKHNuYXBwaW5nIDwgMC4xKSB7XHJcbiAgICAgICAgc25hcHBpbmcgPSAwLjE7XHJcbiAgICAgICAgTmV3Tm90ZShcIkFMRUk6IFNuYXBwaW5nIGNhbid0IGJlIGxlc3MgdGhhbiAwLjFcIiwgXCIjRkYwMDAwXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc25hcHBpbmcgPiAxMDApIHtcclxuICAgICAgICBzbmFwcGluZyA9IDEwMDtcclxuICAgICAgICBOZXdOb3RlKFwiQUxFSTogU25hcHBpbmcgY2FuJ3QgYmUgZ3JlYXRlciB0aGFuIDEwMFwiLCBcIiNGRjAwMDBcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEdyaWRTbmFwcGluZ1NldChNYXRoLnJvdW5kKHNuYXBwaW5nICogMTApKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU25hcHBpbmdPcHRpb25zX2hlbHBlcigpIHtcclxuICAgIC8vIFJlbW92ZSBkZWZhdWx0IHNuYXBwaW5nIG9wdGlvbnMgZXhjZXB0IGZvciBcIjFcIiwgd2Ugd2lsbCByZXBsYWNlIGl0IHRoZW0gbGF0ZXJcclxuICAgICRxdWVyeShgYVtvbm1vdXNlZG93bj1cIkdyaWRTbmFwcGluZ1NldCg1MCk7XCJdYCkucmVtb3ZlKCk7XHJcbiAgICAkcXVlcnkoYGFbb25tb3VzZWRvd249XCJHcmlkU25hcHBpbmdTZXQoMTAwKTtcIl1gKS5yZW1vdmUoKTtcclxuXHJcbiAgICBsZXQgbmV3SFRNTCA9IFwiXCJcclxuICAgIGxldCBzbmFwcGluZ09wdGlvbnMgPSBbXHJcbiAgICAgICAgMSwgMiwgNSxcclxuICAgICAgICAxMCwgMjAsIDQwLFxyXG4gICAgICAgIDUwLCAxMDAsIFwiQ1wiXHJcbiAgICBdO1xyXG5cclxuICAgIGZvciAobGV0IHNuYXBwaW5nSW5kZXggaW4gc25hcHBpbmdPcHRpb25zKSB7XHJcbiAgICAgICAgbGV0IHNuYXBwaW5nID0gc25hcHBpbmdPcHRpb25zW3NuYXBwaW5nSW5kZXhdO1xyXG5cclxuICAgICAgICBpZiAoKHNuYXBwaW5nSW5kZXggJSAzID09IDApICYmIChzbmFwcGluZ0luZGV4ICE9IDApKSB7XHJcbiAgICAgICAgICAgIC8vIFdlIGhhdmUgdG8gYnJlYWsgaW50byBuZXcgcm93LlxyXG4gICAgICAgICAgICBuZXdIVE1MICs9IFwiPGJyPlwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICAvLyBTZXQgcmVsZXZhbnQgYXR0cmlidXRlcy5cclxuXHJcbiAgICAgICAgaWYgKHNuYXBwaW5nICE9IFwiQ1wiKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gc25hcHBpbmcgLyAxMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IFwiQ1wiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHRvb2xDbGFzcyA9IFwidG9vbF9idG5cIjtcclxuICAgICAgICBpZiAoR1JJRF9TTkFQUElORyA9PSBzbmFwcGluZykge1xyXG4gICAgICAgICAgICB0b29sQ2xhc3MgPSBcInRvb2xfYnRuMlwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFzbmFwcGluZ09wdGlvbnMuaW5jbHVkZXMoR1JJRF9TTkFQUElORykgJiYgc25hcHBpbmcgPT0gXCJDXCIpIHtcclxuICAgICAgICAgICAgdG9vbENsYXNzID0gXCJ0b29sX2J0bjJcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgYCR7dG9vbENsYXNzfSB0b29sX3dpZGApO1xyXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ3aWR0aDogMjFweDtcIik7XHJcblxyXG4gICAgICAgIGlmIChzbmFwcGluZyAhPSBcIkNcIikge1xyXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcIm9ubW91c2Vkb3duXCIsIGBHcmlkU25hcHBpbmdTZXQoJHtzbmFwcGluZ30pOyBSZW5kZXIoKTtgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcIm9ubW91c2Vkb3duXCIsIFwiQUxFSV9DdXN0b21TbmFwcGluZygpOyBSZW5kZXIoKTtcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuZXdIVE1MICs9IGVsZW1lbnQub3V0ZXJIVE1MO1xyXG4gICAgICAgIC8vIEFkZCB0byBtYWluIEhUTUwuXHJcbiAgICB9XHJcbiAgICAvLyBSZXBsYWNlIG9yaWdpbmFsIGAxYCBzbmFwcGluZyB3aXRoIG5ldyBIVE1MLlxyXG4gICAgJHF1ZXJ5KGBhW29ubW91c2Vkb3duPVwiR3JpZFNuYXBwaW5nU2V0KDEwKTtcIl1gKS5vdXRlckhUTUwgPSBuZXdIVE1MO1xyXG59XHJcblxyXG53aW5kb3cuQUxFSV9VcGRhdGVSZW1hdGNoVUlEU2V0dGluZyA9IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICBpZih2YWx1ZSAmJiAhT0NNX0xPQURFRCAmJiBhbGVpU2V0dGluZ3Mub2NtRW5hYmxlZCkgQ3JlYXRlQ29ubmVjdGlvbk1hcHBpbmcoKTsgLy8gVG8gY3JlYXRlIE9DTS5cclxuICAgIGlmKCF2YWx1ZSAmJiBPQ01fTE9BREVEICYmIGFsZWlTZXR0aW5ncy5vY21FbmFibGVkKSBDcmVhdGVDb25uZWN0aW9uTWFwcGluZygpOyAvLyBUbyBjbGVhciBPQ00uIChBcyBpdCBtaWdodCBiZSBhbHJlYWR5IG91dGRhdGVkIGJ5IHRoZSB0aW1lIHJlbWF0Y2ggVUlEIGdldHMgZW5hYmxlZClcclxuXHJcbiAgICBhbGVpU2V0dGluZ3MucmVtYXRjaFVJRCA9IHZhbHVlO1xyXG4gICAgd3JpdGVTdG9yYWdlKFwiQUxFSV9SZW1hcFVJRFwiLCB2YWx1ZSk7XHJcbiAgICBVcGRhdGVUb29scygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRSZW1hdGNoVUlPcHRpb25zX2hlbHBlcigpIHtcclxuICAgICRxdWVyeShgYVtvbm1vdXNlZG93bj1cIkV2YWxTZXQoJ3BhcmFtX3BhbmVsX3NpemUnLDgwMCk7U2F2ZUJyb3dzZXJTZXR0aW5ncygpO1VwZGF0ZUNTUygpO1wiXWApLnJlbW92ZSgpO1xyXG5cclxuICAgIGxldCByZXN1bHQgPSBkb2N1bWVudC5ldmFsdWF0ZShcIi8vc3Bhbltjb250YWlucyguLCAnUGFyYW0nKV1cIiwgbGVmdF9wYW5lbCwgbnVsbCwgWFBhdGhSZXN1bHQuQU5ZX1RZUEUsIG51bGwpO1xyXG4gICAgcmVzdWx0Lml0ZXJhdGVOZXh0KCk7XHJcbiAgICByZXN1bHQuaXRlcmF0ZU5leHQoKS5pbm5lckhUTUwgPSBcIlJlbWFwIFVJRFwiO1xyXG5cclxuICAgIGZvciAobGV0IHZhbHVlIG9mIFtbdHJ1ZSwgXCJZZXNcIiwgMF0sIFtmYWxzZSwgXCJOb1wiLCAyMDBdXSkge1xyXG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB2YWx1ZVsxXTtcclxuXHJcbiAgICAgICAgbGV0IHRvb2xDbGFzcyA9IFwidG9vbF9idG5cIjtcclxuICAgICAgICBpZihhbGVpU2V0dGluZ3MucmVtYXRjaFVJRCA9PSB2YWx1ZVswXSkgdG9vbENsYXNzID0gXCJ0b29sX2J0bjJcIjtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBgJHt0b29sQ2xhc3N9IHRvb2xfd2lkYCk7XHJcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIndpZHRoOiA2NHB4O1wiKTtcclxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcIm9ubW91c2Vkb3duXCIsIGBBTEVJX1VwZGF0ZVJlbWF0Y2hVSURTZXR0aW5nKCR7dmFsdWVbMF19KWApO1xyXG5cclxuICAgICAgICAkcXVlcnkoYGFbb25tb3VzZWRvd249XCJFdmFsU2V0KCdwYXJhbV9wYW5lbF9zaXplJywke3ZhbHVlWzJdfSk7U2F2ZUJyb3dzZXJTZXR0aW5ncygpO1VwZGF0ZUNTUygpO1wiXWApLm91dGVySFRNTCA9IGVsZW1lbnQub3V0ZXJIVE1MO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxud2luZG93LkFMRUlfVXBkYXRlTmFtZVJlbmRlclNldHRpbmcgPSBmdW5jdGlvbihzdGF0dXMpIHsgLy8gVE9ETzogd2Ugc2hvdWxkIGhhdmUgbWl4aW4gZnVuY3Rpb24gbG9sLCBjaGVjazogPCMxMjQ1NDU0OTU1NDc3NzI5MzgyPlxyXG4gICAgd2luZG93LkVOQUJMRV9URVhUID0gc3RhdHVzO1xyXG4gICAgYWxlaVNldHRpbmdzLnJlbmRlck9iamVjdE5hbWVzID0gc3RhdHVzO1xyXG4gICAgd3JpdGVTdG9yYWdlKFwiQUxFSV9SZW5kZXJPYmplY3ROYW1lc1wiLCBzdGF0dXMpO1xyXG4gICAgVXBkYXRlVG9vbHMoKTtcclxuICAgIG5lZWRfcmVkcmF3ID0gMTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUHJldmlld05hbWVzT3B0aW9uc19oZWxwZXIoKSB7XHJcbiAgICBsZXQgcHJldkVsZW1lbnQgPSAkcXVlcnkoYGFbb25tb3VzZWRvd249XCJTaG93VGV4dHVyZXNTZXQodHJ1ZSk7XCJdYCk7XHJcblxyXG4gICAgZnVuY3Rpb24gc3BhY2UoKSB7XHJcbiAgICAgICAgbGV0IHNwYWNlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgc3BhY2VyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicVwiKTtcclxuICAgICAgICBwcmV2RWxlbWVudC5vdXRlckhUTUwgKz0gc3BhY2VyLm91dGVySFRNTDtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgaGVhZGVyVGV4dC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImd1aV9zZWxfaW5mb1wiKTtcclxuICAgIGhlYWRlclRleHQuaW5uZXJIVE1MID0gXCJPYmplY3QgTmFtZXNcIjtcclxuXHJcbiAgICBsZXQgYnV0dG9uSFRNTCA9IFwiXCI7XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkQnV0dG9uKHRleHQsIHN0YXR1cykge1xyXG4gICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICBsZXQgX2NsYXNzID0gXCJ0b29sX2J0blwiO1xyXG5cclxuICAgICAgICBpZihzdGF0dXMgPT0gYWxlaVNldHRpbmdzLnJlbmRlck9iamVjdE5hbWVzKSBfY2xhc3MgPSBcInRvb2xfYnRuMlwiO1xyXG5cclxuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgYHRvb2xfd2lkICR7X2NsYXNzfWApO1xyXG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIndpZHRoOiAzMnB4XCIpO1xyXG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJvbm1vdXNlZG93blwiLCBgQUxFSV9VcGRhdGVOYW1lUmVuZGVyU2V0dGluZygke3N0YXR1c30pO2ApO1xyXG4gICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSB0ZXh0O1xyXG4gICAgICAgIGJ1dHRvbkhUTUwgKz0gYnV0dG9uLm91dGVySFRNTDtcclxuICAgIH1cclxuXHJcbiAgICBhZGRCdXR0b24oXCJTaG93XCIsIHRydWUpO1xyXG4gICAgYWRkQnV0dG9uKFwiSGlkZVwiLCBmYWxzZSk7XHJcblxyXG4gICAgcHJldkVsZW1lbnQub3V0ZXJIVE1MICs9IGA8YnI+PGRpdiBjbGFzcz1cInFcIj48L2Rpdj48YnI+YCArIGhlYWRlclRleHQub3V0ZXJIVE1MICsgXCI8YnI+XCIgKyBidXR0b25IVE1MO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gb25Ub29sVXBkYXRlKCkge1xyXG4gICAgYWRkU25hcHBpbmdPcHRpb25zX2hlbHBlcigpO1xyXG4gICAgYWRkUmVtYXRjaFVJT3B0aW9uc19oZWxwZXIoKTtcclxuICAgIGFkZFByZXZpZXdOYW1lc09wdGlvbnNfaGVscGVyKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhdGNoVXBkYXRlVG9vbHMoKSB7XHJcbiAgICBsZXQgdXQgPSBVcGRhdGVUb29scztcclxuICAgIHdpbmRvdy5VcGRhdGVUb29scyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHV0KCk7XHJcbiAgICAgICAgb25Ub29sVXBkYXRlKCk7XHJcbiAgICB9XHJcbiAgICBVcGRhdGVUb29scygpO1xyXG4gICAgYWxlaUxvZyhERUJVRywgXCJQYXRjaGVkIHVwZGF0ZVRvb2xzLlwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdHJ5VG9OdW1iZXIoeCkge1xyXG4gICAgaWYgKCFpc05hTihOdW1iZXIoeCkpKSB7XHJcbiAgICAgICAgcmV0dXJuIE51bWJlcih4KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluc2VydFhNTCh4bWwpIHtcclxuICAgIHhtbCA9IFwiPG1hcD5cIiArIHhtbC5yZXBsYWNlQWxsKFwiJlwiLCBcIltfX0FtcF1cIikgKyBcIjwvbWFwPlwiO1xyXG5cclxuICAgIGxldCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XHJcbiAgICBsZXQgbWFwID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyh4bWwsIFwiYXBwbGljYXRpb24veG1sXCIpO1xyXG4gICAgbGV0IG9iamVjdHMgPSBtYXAucXVlcnlTZWxlY3RvckFsbChcIipcIik7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBvYmplY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IG9iamVjdCA9IG9iamVjdHNbaV07XHJcbiAgICAgICAgaWYgKG9iamVjdC50YWdOYW1lID09IFwibWFwXCIpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICBsZXQgZW8gPSBuZXcgRShvYmplY3QudGFnTmFtZSk7XHJcbiAgICAgICAgZW8ucG0gPSB7fTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBvYmplY3QuYXR0cmlidXRlcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBsZXQgbmFtZSA9IG9iamVjdC5hdHRyaWJ1dGVzW2pdLm5hbWU7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IG9iamVjdC5hdHRyaWJ1dGVzW2pdLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgZW8ucG1bbmFtZV0gPSB0cnlUb051bWJlcih2YWx1ZS5yZXBsYWNlQWxsKFwiW19fQW1wXVwiLCBcIiZcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZXMucHVzaChlbyk7XHJcbiAgICB9XHJcblxyXG4gICAgbmVlZF9yZWRyYXcgPSAxO1xyXG4gICAgbmVlZF9HVUlQYXJhbXNfdXBkYXRlID0gMTtcclxufVxyXG5cclxuZnVuY3Rpb24gZXhwb3J0WE1MKCkge1xyXG4gICAgbGV0IGV4cG9ydFNlbGVjdGlvbiA9IDA7XHJcbiAgICBsZXQgbmV3c3RyID0gXCJcIjtcclxuICAgIGxldCBkb3dubG9hZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoZXNbaV0uc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgZXhwb3J0U2VsZWN0aW9uID0gMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGV4cG9ydFNlbGVjdGlvbikge1xyXG4gICAgICAgIGlmKCFjb25maXJtKFwiT25seSBzZWxlY3Rpb24gd2lsbCBiZSBleHBvcnRlZC5cIikpIHJldHVybjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlc1tpXS5zZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgbmV3c3RyICs9IGNvbXBpX29iaihpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1hcGlkKSB7XHJcbiAgICAgICAgICAgIGRvd25sb2FkLmRvd25sb2FkID0gbWFwaWQgKyBcIiAoc2VsZWN0aW9uKS54bWxcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkb3dubG9hZC5kb3dubG9hZCA9IFwibmV3bWFwIChzZWxlY3Rpb24pLnhtbFwiO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZXNbaV0uZXhpc3RzKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdzdHIgKz0gY29tcGlfb2JqKGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobWFwaWQpIHtcclxuICAgICAgICAgICAgZG93bmxvYWQuZG93bmxvYWQgPSBtYXBpZCArIFwiLnhtbFwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvd25sb2FkLmRvd25sb2FkID0gXCJuZXdtYXAueG1sXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRvd25sb2FkLmhyZWYgPSBcImRhdGE6dGV4dCxcIiArIGVzY2FwZShuZXdzdHIpO1xyXG5cclxuICAgIGlmIChuZXdzdHIgIT0gXCJcIikge1xyXG4gICAgICAgIGRvd25sb2FkLmhyZWYgPSBcImRhdGE6dGV4dCxcIiArIGVzY2FwZShuZXdzdHIpO1xyXG5cclxuICAgICAgICBkb3dubG9hZC5jbGljaygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBhbGVydChcIk1hcCBpcyBlbXB0eS5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgZG93bmxvYWQucmVtb3ZlKCk7XHJcbn1cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jb25zdCBfaWdub3JlZEtleXMgPSBbXHJcbiAgICAvLyBOdW1iZXJzIG9idmlvdXNseSBjYW5ub3QgaGF2ZSB0ZXh0cy5cclxuICAgIFwieFwiLFxyXG4gICAgXCJ5XCIsXHJcbiAgICBcIndcIixcclxuICAgIFwiaFwiLFxyXG4gICAgXCJtYXhjYWxsc1wiLFxyXG4gICAgXCJjb21tYW5kXCIsXHJcbiAgICBcInVwZ1wiLFxyXG4gICAgXCJ0b3hcIixcclxuICAgIFwidG95XCIsXHJcbiAgICBcInN0YWJcIixcclxuICAgIFwiZGFtYWdlXCIsXHJcbiAgICBcInVcIixcclxuICAgIFwidlwiLFxyXG4gICAgXCJzeFwiLFxyXG4gICAgXCJzeVwiLFxyXG4gICAgXCJyXCIsXHJcbiAgICBcImZcIixcclxuICAgIFwicG93ZXJcIixcclxuICAgIC8vIEJvb2xlYW5zIG9idmlvdXNseSBjYW5ub3QgaGF2ZSB0ZXh0cy5cclxuICAgIFwiZW5hYmxlZFwiLFxyXG4gICAgXCJmbGFyZVwiLFxyXG4gICAgLy8gV2UgYXJlIG9idmlvdXNseSBub3QgZ29pbmcgdG8gY2hhbmdlIFVJRFxyXG4gICAgXCJ1aWRcIixcclxuICAgIC8vIFdlIGFyZSBvYnZpb3VzbHkgbm90IGdvaW5nIHRvIGNoYW5nZSBtb2RlbHNcclxuICAgIFwiZ3VuX21vZGVsXCIsXHJcbiAgICBcIm1vZGVsXCIsXHJcbl07XHJcblxyXG4vKlxyXG4gKiBVVUlEUl9SZXBsYWNlXHJcbiAqIFRoaXMgaXMgZnVuY3Rpb24gdGhhdCBoYW5kbGVzIHJlcGxhY2luZyBuYW1lIHBhcnQuXHJcbiAqIElzIG1lYW50IHRvIGJlIHVzZWQgaW4gVXBkYXRlVUlEUmVmZXJlbmNlcyBiZWxvdy5cclxuXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gIHZhbHVlICAgIFZhbHVlIHRvIGJlIHJlcGxhY2VkLlxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICBvbGROYW1lICBQcmV2aW91cyBuYW1lIHRvIGJlIHJlcGxhY2VkIGZyb20uXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gIG5ld05hbWUgIE5ldyBuYW1lIHRvIGJlIHJlcGxhY2VkIHRvLlxyXG4qL1xyXG5mdW5jdGlvbiBVVUlEUl9SZXBsYWNlKHZhbHVlLCBvbGROYW1lLCBuZXdOYW1lKSB7XHJcbiAgICBpZiAoKHR5cGVvZih2YWx1ZSkgIT09IFwic3RyaW5nXCIpKSByZXR1cm4gdmFsdWU7XHJcbiAgICBpZih2YWx1ZS5pbmRleE9mKG9sZE5hbWUpID09PSAtMSkgcmV0dXJuIHZhbHVlO1xyXG4gICAgaWYodmFsdWUgPT0gb2xkTmFtZSkgcmV0dXJuIG5ld05hbWU7XHJcblxyXG4gICAgbGV0IHNwbHQgPSB2YWx1ZS5zcGxpdChcIixcIik7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNwbHQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgaXRlbSA9IHNwbHRbaV07XHJcbiAgICAgICAgaWYgKGl0ZW0udHJpbSgpID09IG9sZE5hbWUpIHtcclxuICAgICAgICAgICAgc3BsdFtpXSA9IGl0ZW0ucmVwbGFjZShvbGROYW1lLCBuZXdOYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3BsdC5qb2luKFwiLFwiKTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVVJRFJlZmVyZW5jZXMob2xkTmFtZSwgbmV3TmFtZSkge1xyXG4gICAgYWxlaUxvZyhERUJVRzIsIGBVcGRhdGluZyBVSUQgcmVmZXJlbmNlcyBmcm9tICR7QU5TSV9DWUFOfSR7b2xkTmFtZX0ke0FOU0lfUkVTRVR9IHRvICR7QU5TSV9DWUFOfSR7bmV3TmFtZX0ke0FOU0lfUkVTRVR9YCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBlc1tpXTtcclxuICAgICAgICBpZiAoIWVsZW1lbnQuZXhpc3RzKSBjb250aW51ZTtcclxuICAgICAgICBsZXQgcHJvcGVydGllcyA9IGVsZW1lbnQucG07XHJcblxyXG4gICAgICAgIGZvciAobGV0IGVudHJ5IG9mIE9iamVjdC5lbnRyaWVzKHByb3BlcnRpZXMpKSB7XHJcbiAgICAgICAgICAgIGxldCBrZXkgPSBlbnRyeVswXTtcclxuICAgICAgICAgICAgbGV0IHZhbHVlID0gZW50cnlbMV07XHJcblxyXG4gICAgICAgICAgICBpZiAoX2lnbm9yZWRLZXlzLmluZGV4T2Yoa2V5KSAhPT0gLTEpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgaWYoW1wiYWRkaXRpb25hbFBhcmFtQVwiLCBcImFkZGl0aW9uYWxQYXJhbUJcIl0uaW5kZXhPZihrZXkpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBleHRlbmRlZCBhY3Rpb24uXHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVtpXSA9IFVVSURSX1JlcGxhY2UodmFsdWVbaV0sIG9sZE5hbWUsIG5ld05hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHByb3BlcnRpZXNba2V5XSA9IFVVSURSX1JlcGxhY2UodmFsdWUsIG9sZE5hbWUsIG5ld05hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHdpbmRvdy5uZWVkX0dVSVBhcmFtc191cGRhdGUgPSB0cnVlO1xyXG59XHJcblxyXG4vKlxyXG4gKiBfX09DTV9FbnN1cmVWYWxpZFJlZmVyZW5jZXNcclxuICogVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgaW4gVXBkYXRlUGh5c2ljYWxQYXJhbShBRlRFUiBwYXJhbWV0ZXIgd2FzIHNldC4pIHRvIGtlZXAgaW50ZWdyaXR5IG9mIE9DTSAoT2JqZWN0IENvbm5lY3Rpb24gTWFwcGluZylcclxuICogRXNzZW50aWFsbHkganVzdCBhIGZ1bmN0aW9uIG1ha2luZyBzdXJlIHRoZSBzdHJ1Y3R1cmUgaXMgdmFsaWQgb24gZWFjaCBwYXJhbWV0ZXIgY2hhbmdlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0V9ICAgICBvYmogICAgUEIyIE9iamVjdCB0byBlbnN1cmUgdmFsaWRpdHkgb2YgcmVmZXJlbmNlcyBvZi5cclxuKi9cclxuZnVuY3Rpb24gX19PQ01fRW5zdXJlVmFsaWRSZWZlcmVuY2VzKG9iaikge1xyXG4gICAgbGV0IG9jbSA9IHdpbmRvdy5PYmplY3RDb25uZWN0aW9uTWFwcGluZztcclxuICAgIGxldCB1dGVtID0gd2luZG93LnVpZFRvRWxlbWVudE1hcDtcclxuXHJcbiAgICBsZXQgcG0gPSBvYmoucG07XHJcbiAgICBpZihvY21bcG0udWlkXSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcblxyXG4gICAgbGV0IG5ld1JlZmVyZW5jZXMgPSBbXTtcclxuICAgIGZ1bmN0aW9uIGFkZFJlZmVyZW5jZSh2YWx1ZSkge1xyXG4gICAgICAgIGlmKG5ld1JlZmVyZW5jZXMuaW5kZXhPZih2YWx1ZSkgPT09IC0xKSBuZXdSZWZlcmVuY2VzLnB1c2godmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcihsZXQga2V5IG9mIE9iamVjdC5rZXlzKHBtKSkge1xyXG4gICAgICAgIGlmKF9fT0NNX0NIRUNLRURfS0VZUy5pbmRleE9mKGtleSkgPT09IC0xKSBjb250aW51ZTtcclxuICAgICAgICBsZXQgdmFsdWUgPSBwbVtrZXldO1xyXG5cclxuICAgICAgICBpZih1dGVtW3ZhbHVlXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGFkZFJlZmVyZW5jZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBUcmlnZ2VyX0hhbmRsZVBhcmFtZXRlcih0cmlnZ2VyLCBwYXJhbWV0ZXIpIHtcclxuICAgICAgICBpZih0eXBlb2YocGFyYW1ldGVyKSAhPT0gXCJzdHJpbmdcIikgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZih1dGVtW3BhcmFtZXRlcl0gIT09IHVuZGVmaW5lZCkgeyAvLyBTaW1wbGUgY2FzZSB3aGVyZSBwYXJhbWV0ZXIgaXMgc2ltcGx5IHJlZmVyZW5jZSB0byBvYmplY3QuXHJcbiAgICAgICAgICAgIGFkZFJlZmVyZW5jZShwYXJhbWV0ZXIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFwYXJhbWV0ZXIuaW5jbHVkZXMoXCIsXCIpKSByZXR1cm47XHJcbiAgICAgICAgLy8gQSBsaXR0bGUgY29tcGxleCBjYXNlIHdoZXJlIG11bHRpcGxlIG9iamVjdHMgYXJlIHJlZmVyZW5jZWRcclxuICAgICAgICAvLyBBcyBpbiBQYXJhbWV0ZXIgQjogI3JlZ2lvbioxLCNyZWdpb24qMlxyXG4gICAgICAgIGxldCBzcGx0ID0gcGFyYW1ldGVyLnNwbGl0KFwiLFwiKTtcclxuICAgICAgICBmb3IobGV0IHZhbHVlIG9mIHNwbHQpIHtcclxuICAgICAgICAgICAgbGV0IHZhbCA9IHZhbHVlLnRyaW0oKTtcclxuICAgICAgICAgICAgaWYodXRlbVt2YWxdICE9PSB1bmRlZmluZWQpIGFkZFJlZmVyZW5jZSh2YWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZihvYmouX2NsYXNzID09IFwidHJpZ2dlclwiKSB7XHJcbiAgICAgICAgLy8gVmFuaWxsYSB0cmlnZ2VyIGNhc2UgKDEwIGFjdGlvbnMsIGV4dGVuZGVkIHRyaWdnZXJzIHdpbGwgcnVuIHRoaXMgdG9vKVxyXG4gICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPCAxMTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmKHBtW2BhY3Rpb25zXyR7aX1fdHlwZWBdID09IC0xKSBjb250aW51ZTtcclxuICAgICAgICAgICAgaWYocG1bYGFjdGlvbnNfJHtpfV90eXBlYF0gPT09IHVuZGVmaW5lZCkgY29udGludWU7XHJcbiAgICAgICAgICAgIFRyaWdnZXJfSGFuZGxlUGFyYW1ldGVyKHBtLnVpZCwgcG1bYGFjdGlvbnNfJHtpfV90YXJnZXRBYF0pO1xyXG4gICAgICAgICAgICBUcmlnZ2VyX0hhbmRsZVBhcmFtZXRlcihwbS51aWQsIHBtW2BhY3Rpb25zXyR7aX1fdGFyZ2V0QmBdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRXh0ZW5kZWQgdHJpZ2dlcnMuXHJcbiAgICAgICAgaWYocG0uZXh0ZW5kZWQgJiYgYWxlaVNldHRpbmdzLmV4dGVuZGVkVHJpZ2dlcnMpIHtcclxuICAgICAgICAgICAgbGV0IGFjdGlvbnMgPSBwbS5hZGRpdGlvbmFsQWN0aW9ucztcclxuICAgICAgICAgICAgbGV0IHBhcmFtQSA9IHBtLmFkZGl0aW9uYWxQYXJhbUE7XHJcbiAgICAgICAgICAgIGxldCBwYXJhbUIgPSBwbS5hZGRpdGlvbmFsUGFyYW1CO1xyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGFjdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmKGFjdGlvbnNbaV0gPT09IC0xKSBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIFRyaWdnZXJfSGFuZGxlUGFyYW1ldGVyKHBtLnVpZCwgcGFyYW1BW2ldKTtcclxuICAgICAgICAgICAgICAgIFRyaWdnZXJfSGFuZGxlUGFyYW1ldGVyKHBtLnVpZCwgcGFyYW1CW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBsZXQgb2xkUmVmZXJlbmNlcyA9IG9jbVtwbS51aWRdW1widG9cIl07XHJcbiAgICAvLyBsZXQgbmV3UmVmZXJlbmNlc1xyXG4gICAgZm9yKGxldCByZWYgb2YgbmV3UmVmZXJlbmNlcykge1xyXG4gICAgICAgIGlmKG9sZFJlZmVyZW5jZXMuaW5kZXhPZihyZWYpICE9PSAtMSkgY29udGludWU7IC8vIE5vIGNoYW5nZS5cclxuICAgICAgICAvLyBUaGlzIHdhc24ndCBpbiBvbGQgcmVmZXJlbmNlLCBidXQgaXMgbm93LCBzbyBhZGRlZC5cclxuICAgICAgICBfX09DTV9BZGRSZWZlcmVuY2UocG0udWlkLCByZWYpO1xyXG4gICAgfVxyXG4gICAgZm9yKGxldCByZWYgb2Ygb2xkUmVmZXJlbmNlcykge1xyXG4gICAgICAgIGlmKG5ld1JlZmVyZW5jZXMuaW5kZXhPZihyZWYpICE9PSAtMSkgY29udGludWU7IC8vIE5vIGNoYW5nZS5cclxuICAgICAgICAvLyBUaGlzIHdhcyBpbiBvbGQgcmVmZXJlbmNlLCBidXQgbm90IGFueW1vcmUsIHNvIHJlbW92ZWQuXHJcbiAgICAgICAgX19PQ01fUmVtb3ZlUmVmZXJlbmNlKHBtLnVpZCwgcmVmKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vKipcclxuICogIFRoaXMgZnVuY3Rpb24gdXBkYXRlcyB0aGUgYWN0dWFsIGVudGl0eSBjbGFzcydzIHBtIHByb3BlcnR5IGJhc2VkIG9uIHNlbGVjdGlvbi5cclxuICogIFRoaXMgZnVuY3Rpb24gaXMgaW52b2tlZCBmcm9tIHNldGxldGVkaXQoKS5cclxuICpcclxuICogIEBwYXJhbSB7Kn0gICAgICAgICAgcGFyYW1uYW1lICAgICAgICAgICAgUHJvcGVydHkgdG8gdXBkYXRlICAgRWc6IGFjdGlvbnNfMV90eXBlXHJcbiAqICBAcGFyYW0geyp9ICAgICAgICAgIGNodmFsdWUgICAgICAgICAgICAgIFZhbHVlIHRvIHVwZGF0ZSB3aXRoIEVnOiAwXHJcbiAqICBAcGFyYW0ge2Jvb2xlYW59ICAgIHRvU2hvd05vdGUgICAgICAgICAgIERlZmF1bHQgcGFyYW1ldGVyICh0cnVlKS4gSW5kaWNhdGVzIHdoZXRoZXIgdG8gc2hvdyBjb25maXJtYXRpb24gbm90ZS5cclxuICovXHJcbmZ1bmN0aW9uIFVwZGF0ZVBoeXNpY2FsUGFyYW0ocGFyYW1uYW1lLCBjaHZhbHVlLCB0b1Nob3dOb3RlID0gdHJ1ZSkge1xyXG4gICAgbGN6KCk7XHJcblxyXG4gICAgdmFyIGxheWVyX21pc21hdGNoID0gZmFsc2U7XHJcbiAgICB2YXIgbGlzdF9jaGFuZ2VzID0gJyc7XHJcblxyXG4gICAgLy8gRmluZHMgc2VsZWN0aW9uLlxyXG4gICAgbGV0IG9nRVMgPSB3aW5kb3cuZXM7XHJcbiAgICB3aW5kb3cuZXMgPSBTZWxlY3RlZE9iamVjdHM7XHJcbiAgICBmb3IgKHZhciBlbGVtcyA9IDA7IGVsZW1zIDwgZXMubGVuZ3RoOyBlbGVtcysrKSB7XHJcbiAgICAgICAgaWYgKCFlc1tlbGVtc10uZXhpc3RzKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICBpZiAoIWVzW2VsZW1zXS5zZWxlY3RlZCkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIGlmICghZXNbZWxlbXNdLnBtLmhhc093blByb3BlcnR5KHBhcmFtbmFtZSkgJiYgIWVzW2VsZW1zXS5wbVtcImV4dGVuZGVkXCJdKSBjb250aW51ZTtcclxuICAgICAgICBpZiAoIU1hdGNoTGF5ZXIoZXNbZWxlbXNdKSkge1xyXG4gICAgICAgICAgICBsYXllcl9taXNtYXRjaCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRm9yIGV4dGVuZGVkIHRyaWdnZXJzLlxyXG4gICAgICAgIC8vIEZpbmQgYWN0aW9uX1hYX1lZWVksIHdoZXJlIFhYIGlzIHRoZSBudW1iZXIgcmVwcmVzZW50aW5nIHRyaWdnZXIgYWN0aW9uIDEyIGZvciBleGFtcGxlIGFuZCBZWVlZIGlzIGVpdGhlciB0YXJnZXRBLCB0YXJnZXRCIG9yIHR5cGUuXHJcbiAgICAgICAgbGV0IHJlZ2V4ID0gL2FjdGlvbnNfKFxcZCspXyh0YXJnZXRBfHRhcmdldEJ8dHlwZSkvZztcclxuICAgICAgICBsZXQgbWF0Y2ggPSBBcnJheS5mcm9tKHBhcmFtbmFtZS5tYXRjaEFsbChyZWdleCkpWzBdO1xyXG5cclxuICAgICAgICAvLyBGb3IgdW5kbyBhbmQgcmVkby5cclxuICAgICAgICBsZXQgbHVwID0gKHR5cGVvZiAocGFyYW1uYW1lKSA9PSAnc3RyaW5nJykgPyAnXCInICsgcGFyYW1uYW1lICsgJ1wiJyA6IHBhcmFtbmFtZTtcclxuICAgICAgICBjaHZhbHVlID0gKHR5cGVvZiAoY2h2YWx1ZSkgPT0gJ251bWJlcicgfHwgY2h2YWx1ZSA9PSAwKSA/IGNodmFsdWUgOiBfZW5jb2RlWE1MQ2hhcnMoYCR7Y2h2YWx1ZX1gKTtcclxuXHJcbiAgICAgICAgLy8gTm90IGEgdHJpZ2dlciBvciBiZWxvdyBhY3Rpb24xMCBhbmQgYmVsb3cuIFByb2NlZWQgd2l0aCB0aGUgdXN1YWwgRXJpYydzIGltcGxlbWVudGF0aW9uLlxyXG4gICAgICAgIGlmKCFtYXRjaCB8fCBOdW1iZXIobWF0Y2hbMV0pIC0gMTEgPCAwKXtcclxuICAgICAgICAgICAgbG5kKCdlc1snICsgZWxlbXMgKyAnXS5wbVsnICsgbHVwICsgJ10gPSAnICsgZXNbZWxlbXNdLnBtW3BhcmFtbmFtZV0gKyAnOycpO1xyXG4gICAgICAgICAgICBsZG4oJ2VzWycgKyBlbGVtcyArICddLnBtWycgKyBsdXAgKyAnXSA9ICcgKyBjaHZhbHVlICsgJzsnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlbWF0Y2ggVUlEXHJcbiAgICAgICAgICAgIGlmKChwYXJhbW5hbWUgPT0gXCJ1aWRcIikgJiYgYWxlaVNldHRpbmdzLnJlbWF0Y2hVSUQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBvbGROYW1lID0gZXNbZWxlbXNdLnBtW3BhcmFtbmFtZV07IC8vIE5vdGU6IGRvbid0IGRvIHRoaXMgYWZ0ZXIgZ2V0dGluZyBvcmlnaW5hbCBFUywgb3RoZXJ3aXNlIGlkIGlzbid0IHZhbGlkIGxtYW9cclxuICAgICAgICAgICAgICAgIHdpbmRvdy5lcyA9IG9nRVM7XHJcbiAgICAgICAgICAgICAgICAvLyBNYWtpbmcgc3VyZSB3ZSBrZWVwIG5hbWVzIHVuaXF1ZSBmb3IgT0NNIHN0cnVjdHVyZVxyXG4gICAgICAgICAgICAgICAgaWYod2luZG93LnVpZFRvRWxlbWVudE1hcFtjaHZhbHVlXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTmV3Tm90ZShgQUxFSTogT2JqZWN0IHdpdGggbmFtZSAke2NodmFsdWV9IGFscmVhZHkgZXhpc3RzLCBjb25zaWRlciBuYW1pbmcgaXQgZGlmZmVyZW50bHkuYCwgXCIjRkZGRjAwXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHVwZGF0ZVVJRFJlZmVyZW5jZXMob2xkTmFtZSwgY2h2YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoYWxlaVNldHRpbmdzLm9jbUVuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgb2NtID0gd2luZG93Lk9iamVjdENvbm5lY3Rpb25NYXBwaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIG9jbVtjaHZhbHVlXSA9IG9jbVtvbGROYW1lXTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgb2NtW29sZE5hbWVdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiByZWRpcmVjdENvbm5lY3Rpb25zKG9iaiwgb2xkTmFtZSwgbmV3TmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBvY21bb2JqXVtcInRvXCJdLmluZGV4T2Yob2xkTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGluZGV4ICE9PSAtMSkgb2NtW29ial1bXCJ0b1wiXVtpbmRleF0gPSBuZXdOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9IG9jbVtvYmpdW1wiYnlcIl0uaW5kZXhPZihvbGROYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaW5kZXggIT09IC0xKSBvY21bb2JqXVtcImJ5XCJdW2luZGV4XSA9IG5ld05hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG9jbVtjaHZhbHVlXVtcImJ5XCJdLm1hcCh2ID0+IHJlZGlyZWN0Q29ubmVjdGlvbnModiwgb2xkTmFtZSwgY2h2YWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9jbVtjaHZhbHVlXVtcInRvXCJdLm1hcCh2ID0+IHJlZGlyZWN0Q29ubmVjdGlvbnModiwgb2xkTmFtZSwgY2h2YWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG9nRVMgPSB3aW5kb3cuZXM7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuZXMgPSBTZWxlY3RlZE9iamVjdHM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHBhcmFtbmFtZSA9PSBcIl9faWRcIikge1xyXG4gICAgICAgICAgICAgICAgTmV3Tm90ZShgQUxFSTogQ2hhbmdpbmcgT2JqZWN0IElEIGRvZXMgbm90IGRvIGFueXRoaW5nLCBkb24ndCBleHBlY3QgdGhhdCB0byBhcHBseS5gLCBcIiNGRkZGRkZcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gU2F2ZXMgdGhlIHZhbHVlIHRvIHRoZSBjbGFzcy5cclxuICAgICAgICAgICAgZXNbZWxlbXNdLnBtW3BhcmFtbmFtZV0gPSBjaHZhbHVlO1xyXG5cclxuICAgICAgICAgICAgaWYocGFyYW1uYW1lID09IFwiX19wcmlvcml0eVwiKSB7XHJcbiAgICAgICAgICAgICAgICBBcHBseU9iamVjdFByb3BlcnRpZXMoZXNbZWxlbXNdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBIYW5kbGluZyBleHRlbmRlZCB0cmlnZ2VyJ3MgPjEwIHRyaWdnZXIgYWN0aW9uLlxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IE51bWJlcihtYXRjaFsxXSkgLSAxMTsgICAgICAvLyBhY3Rpb25fMTFfLi4uIHN0YXJ0cyBhdCBlbGVtZW50IDAuXHJcblxyXG4gICAgICAgICAgICBsZXQgcHJvcGVydHlOYW1lID0gJyc7XHJcbiAgICAgICAgICAgIGlmKG1hdGNoWzJdID09PSBcInR5cGVcIil7XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWUgPSBcImFkZGl0aW9uYWxBY3Rpb25zXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihtYXRjaFsyXSA9PT0gXCJ0YXJnZXRBXCIpe1xyXG4gICAgICAgICAgICAgICAgcHJvcGVydHlOYW1lID0gXCJhZGRpdGlvbmFsUGFyYW1BXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihtYXRjaFsyXSA9PT0gXCJ0YXJnZXRCXCIpe1xyXG4gICAgICAgICAgICAgICAgcHJvcGVydHlOYW1lID0gXCJhZGRpdGlvbmFsUGFyYW1CXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGFsZWlMb2coV0FSTiwgXCJTb21ldGhpbmcgd2VudCB3cm9uZyB3aXRoIHJlZ2V4LiBcIiArIG1hdGNoWzJdKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbG5kKGBlc1tcIiR7ZWxlbXN9XCJdLnBtW1wiJHtwcm9wZXJ0eU5hbWV9XCJdWyR7aW5kZXh9XSA9ICR7ZXNbZWxlbXNdLnBtW3Byb3BlcnR5TmFtZV1baW5kZXhdfTtgKTtcclxuICAgICAgICAgICAgbGRuKGBlc1tcIiR7ZWxlbXN9XCJdLnBtW1wiJHtwcm9wZXJ0eU5hbWV9XCJdWyR7aW5kZXh9XSA9ICR7Y2h2YWx1ZX07YCk7XHJcblxyXG4gICAgICAgICAgICBlc1tlbGVtc10ucG1bcHJvcGVydHlOYW1lXVtpbmRleF0gPSBjaHZhbHVlO1xyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGFsZWlTZXR0aW5ncy5vY21FbmFibGVkKSBfX09DTV9FbnN1cmVWYWxpZFJlZmVyZW5jZXMoZXNbZWxlbXNdKTtcclxuICAgICAgICBpZihwYXJhbW5hbWUgPT0gXCJ1c2VzX3RpbWVyXCIpIHsgLy8gSSBkbyBub3QgaGF2ZSB0byBkbyB0aGlzLCBidXQgaSB3aWxsIGZvciBjb252ZW5pZW5jZVxyXG4gICAgICAgICAgICBpZihbdHJ1ZSwgXCJ0cnVlXCJdLmluZGV4T2YoZXNbZWxlbXNdLnBtLnVzZXNfdGltZXIpICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbV90eXBlW1JFR0lPTl9FWEVDVVRFX1BBUkFNX0lEXVsxXSA9IFwidGltZXIrbm9uZVwiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1fdHlwZVtSRUdJT05fRVhFQ1VURV9QQVJBTV9JRF1bMV0gPSBcInRyaWdnZXIrbm9uZVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5lZWRfR1VJUGFyYW1zX3VwZGF0ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsaXN0X2NoYW5nZXMgKz0gJ1BhcmFtZXRlciBcIicgKyBwYXJhbW5hbWUgKyAnXCIgb2Ygb2JqZWN0IFwiJyArIChlc1tlbGVtc10ucG0udWlkICE9IG51bGwgPyBlc1tlbGVtc10ucG0udWlkIDogZXNbZWxlbXNdLl9jbGFzcykgKyAnXCIgd2FzIHNldCB0byBcIicgKyBjaHZhbHVlICsgJ1wiPGJyPic7XHJcbiAgICB9XHJcblxyXG4gICAgbmVlZF9yZWRyYXcgPSB0cnVlO1xyXG5cclxuICAgIGlmKHRvU2hvd05vdGUpIHtcclxuICAgICAgICBOZXdOb3RlKCdPcGVyYXRpb24gY29tcGxldGU6PGJyPjxicj4nICsgbGlzdF9jaGFuZ2VzLCBub3RlX3Bhc3NpdmUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChsYXllcl9taXNtYXRjaCkge1xyXG4gICAgICAgIE5ld05vdGUoJ05vdGU6IFNvbWUgY2hhbmdlcyB3ZXJlblxcJ3QgbWFkZSBkdWUgdG8gbWlzc21hdGNoIG9mIGFjdGl2ZSBsYXllciBhbmQgY2xhc3Mgb2Ygc2VsZWN0ZWQgb2JqZWN0cycsIG5vdGVfbmV1dHJhbCk7XHJcbiAgICB9XHJcbiAgICBsZnooZmFsc2UpO1xyXG4gICAgd2luZG93LmVzID0gb2dFUztcclxufVxyXG5cclxubGV0IGltYWdlQ29udGV4dE1hcCA9IHt9O1xyXG5sZXQgbGFzdF9lbGVtZW50O1xyXG5sZXQgbGFzdF9sb2dpbjtcclxud2luZG93LmFsZWlDb250ZXh0UmVuYW1lSW1hZ2UgPSBmdW5jdGlvbihpZCkge1xyXG4gICAgdmFyIHYgPSBwcm9tcHQoJ05ldyBuYW1lOicsIGltYWdlQ29udGV4dE1hcFtpZF0pO1xyXG4gICAgQ2xvc2VJbWFnZUNvbnRleHQoKTtcclxuICAgIGlmICggdiAhPT0gbnVsbCApIHtcclxuICAgICAgICBTZXJ2ZXJSZXF1ZXN0KGBhPWdldF9pbWFnZXMmZm9yX2NsYXNzPSR7bGFzdF9mb3JfY2xhc3N9JnNldF90aXRsZV9mb3I9JHtpZH0mdmFsdWU9JHt2fWAsIFwicmVuYW1lX2ltYWdlXCIpO1xyXG4gICAgfVxyXG59XHJcbndpbmRvdy5hbGVpQ29udGV4dERlbGV0ZUltYWdlID0gZnVuY3Rpb24oaWQpIHtcclxuICAgIGxldCB2ID0gY29uZmlybShgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSAke2ltYWdlQ29udGV4dE1hcFtpZF19ID9gKTtcclxuICAgIENsb3NlSW1hZ2VDb250ZXh0KCk7XHJcbiAgICBpZiAoIHYgKSB7XHJcbiAgICAgICAgbGFzdF9lbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAnMC41JztcclxuICAgICAgICBTZXJ2ZXJSZXF1ZXN0KGBhPWdldF9pbWFnZXMmZm9yX2NsYXNzPSR7bGFzdF9mb3JfY2xhc3N9JmRlbGV0ZT0ke2lkfWAsICdkZWxldGVfaW1hZ2UnICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEltYWdlQ29udGV4dChpZCwgZSwgb2xkX25hbWUsIGVsZW1lbnQsIG1vZGVyYXRvcl9tZW51LCBhd2FpdGluZ19hcHByb3ZhbD1mYWxzZSwgbG9naW49Jz8nLCBhcHByb3Zlcj0nPycsIGlzX2Zhdl9tZW51ID0gZmFsc2UpIHtcclxuICAgIGltYWdlQ29udGV4dE1hcFtpZF0gPSBvbGRfbmFtZTtcclxuICAgIGxhc3RfZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICBsYXN0X2xvZ2luID0gbG9naW47XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdmFyIGltYWdlX2NvbnRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1hZ2VfY29udGV4dCcpO1xyXG5cclxuICAgIHZhciBzdHIgPSAnJztcclxuXHJcbiAgICBpZiAobW9kZXJhdG9yX21lbnUpIHtcclxuICAgICAgICBzdHIgKz0gYDxkaXYgb25jbGljaz1cIkNsb3NlSW1hZ2VDb250ZXh0KCk7IHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkgeyBTZXJ2ZXJSZXF1ZXN0KCdhPWdldF9pbWFnZXMmZm9yX2NsYXNzPScrbGFzdF9mb3JfY2xhc3MrJyZhcHByb3ZlX2Zvcj0ke2lkfScsICdhcHByb3ZlX2ltYWdlJyApOyB9LCAxICk7XCI+QXBwcm92ZSA8aW1nIHNyYz1cIi4uL2ltYWdlcy9hcC5wbmdcIiB3aWR0aD1cIjExXCIgaGVpZ2h0PVwiMTFcIj48L2Rpdj5gO1xyXG4gICAgICAgIHN0ciArPSBgPGRpdiBvbmNsaWNrPVwiQ2xvc2VJbWFnZUNvbnRleHQoKTsgc2V0VGltZW91dCggZnVuY3Rpb24oKSB7IFNlcnZlclJlcXVlc3QoJ2E9Z2V0X2ltYWdlcyZmb3JfY2xhc3M9JytsYXN0X2Zvcl9jbGFzcysnJnJlc2V0X3N0YXR1c19mb3I9JHtpZH0nLCAncmVzZXRfYXBwcm92YWxfaW1hZ2UnICk7IH0sIDEgKTtcIj5SZXNldCBhcHByb3ZhbCBzdGF0dXM8L2Rpdj5gO1xyXG4gICAgICAgIHN0ciArPSBgPGRpdiBvbmNsaWNrPVwiQ2xvc2VJbWFnZUNvbnRleHQoKTsgc2V0VGltZW91dCggZnVuY3Rpb24oKSB7IG9wZW5fYXBwcm92ZWRfZGVjb3JfbW9kZWwgPSB0cnVlOyBTYXZlRmlsdGVyaW5nKCk7IHNlYXJjaF9waHJhc2UgPSAnKmJ5X2xvZ2luKicrbGFzdF9sb2dpbjsgVXBkYXRlSW1hZ2VMaXN0KCk7IH0sIDEgKTtcIj5TZWFyY2ggZm9yIG90aGVyIGFwcHJvdmVkIGltYWdlcyBmcm9tICZxdW90OyR7bG9naW59JnF1b3Q7PC9kaXY+YDtcclxuICAgICAgICBzdHIgKz0gYDxkaXYgb25jbGljaz1cIlwiIHN0eWxlPVwiY29sb3I6cmdiYSgwLDAsMCwwLjMpXCI+TGFzdCBzdGF0dXMgY2hhbmdlIGJ5ICR7YXBwcm92ZXJ9PC9kaXY+YDtcclxuICAgICAgICBzdHIgKz0gYDxkaXYgb25jbGljaz1cIkNsb3NlSW1hZ2VDb250ZXh0KCk7IHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkgeyBTZXJ2ZXJSZXF1ZXN0KCdhPWdldF9pbWFnZXMmZm9yX2NsYXNzPScrbGFzdF9mb3JfY2xhc3MrJyZkaXNhcHByb3ZlX2Zvcl9hbGw9JytsYXN0X2xvZ2luLCAnZGlzYXBwcm92ZV9pbWFnZScgKTsgfSwgMSApO1wiPkRpc2FwcHJvdmUgYWxsIHVucmV2aWV3ZWQgZnJvbSAmcXVvdDske2xvZ2lufSZxdW90OyA8aW1nIHNyYz1cIi4uL2ltYWdlcy9ub2FwLnBuZ1wiIHdpZHRoPVwiMTFcIiBoZWlnaHQ9XCIxMVwiPjxpbWcgc3JjPVwiLi4vaW1hZ2VzL25vYXAucG5nXCIgd2lkdGg9XCIxMVwiIGhlaWdodD1cIjExXCI+PGltZyBzcmM9XCIuLi9pbWFnZXMvbm9hcC5wbmdcIiB3aWR0aD1cIjExXCIgaGVpZ2h0PVwiMTFcIj48L2Rpdj5gO1xyXG4gICAgICAgIHN0ciArPSBgPGRpdiBvbmNsaWNrPVwiQ2xvc2VJbWFnZUNvbnRleHQoKTsgc2V0VGltZW91dCggZnVuY3Rpb24oKSB7IFNlcnZlclJlcXVlc3QoJ2E9Z2V0X2ltYWdlcyZmb3JfY2xhc3M9JytsYXN0X2Zvcl9jbGFzcysnJmRpc2FwcHJvdmVfZm9yPSR7aWR9JywgJ2Rpc2FwcHJvdmVfaW1hZ2UnICk7IH0sIDEgKTtcIj5EaXNhcHByb3ZlIDxpbWcgc3JjPVwiLi4vaW1hZ2VzL25vYXAucG5nXCIgd2lkdGg9XCIxMVwiIGhlaWdodD1cIjExXCI+PC9kaXY+YDtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coIGxvZ2luLCBjdXJsb2dpbiApO1xyXG5cclxuICAgICAgICBpZiAobG9naW4gPT0gY3VybG9naW4gJiYgYXBwcm92ZXIgIT0gJyEnKSB7XHJcbiAgICAgICAgICAgIHN0ciArPSBgPGRpdiBvbmNsaWNrPVwiYWxlaUNvbnRleHRSZW5hbWVJbWFnZSgke2lkfSlcIj5SZW5hbWU8L2Rpdj5gOyAvLyBXZSBvdmVyd3JpdGUgcmVuYW1lIGFjdGlvbiB0byBvdXIgb3duLlxyXG5cclxuICAgICAgICAgICAgaWYgKGF3YWl0aW5nX2FwcHJvdmFsKSB7XHJcbiAgICAgICAgICAgICAgICBzdHIgKz0gYDxkaXYgb25jbGljaz1cIlwiIHN0eWxlPVwiY29sb3I6cmdiYSgwLDAsMCwwLjMpXCI+UmVxdWVzdCBBcHByb3ZhbCAoYWxyZWFkeSBkb25lKTwvZGl2PmA7XHJcbiAgICAgICAgICAgICAgICBzdHIgKz0gYDxkaXYgb25jbGljaz1cIkNsb3NlSW1hZ2VDb250ZXh0KCk7ICBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHsgU2VydmVyUmVxdWVzdCgnYT1nZXRfaW1hZ2VzJmZvcl9jbGFzcz0nK2xhc3RfZm9yX2NsYXNzKycmZGVhd2FpdF9hcHByb3ZhbF9mb3I9JHtpZH0nLCAnYXdhaXRfYXBwcm92YWxfc3RhdHVzJyApOyB9LCAxICk7IFwiPkV4Y2x1ZGUgZnJvbSBhcHByb3ZhbCByZXZpZXcgcXVldWU8L2Rpdj5gO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9sZF9uYW1lID09ICdVbnRpdGxlZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdHIgKz0gYDxkaXYgb25jbGljaz1cImFsZXJ0KCdQcm9wZXIgbmFtZSByZXF1aXJlZCBmb3IgY3VzdG9tIGltYWdlIC0geW91IHdpbGwgbm90IGJlIGF2YWlsYWJsZSB0byBjaGFuZ2UgbmFtZSBvbmNlIGltYWdlIGlzIGFwcHJvdmVkLicpO1wiIHN0eWxlPVwiY29sb3I6cmdiYSgwLDAsMCwwLjMpXCI+UmVxdWVzdCBBcHByb3ZhbCAocHJvcGVyIG5hbWUgcmVxdWlyZWQpPC9kaXY+YDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyICs9IGA8ZGl2IG9uY2xpY2s9XCJDbG9zZUltYWdlQ29udGV4dCgpOyAgc2V0VGltZW91dCggZnVuY3Rpb24oKSB7IFNlcnZlclJlcXVlc3QoJ2E9Z2V0X2ltYWdlcyZmb3JfY2xhc3M9JytsYXN0X2Zvcl9jbGFzcysnJmF3YWl0X2FwcHJvdmFsX2Zvcj0ke2lkfScsICdhd2FpdF9hcHByb3ZhbF9zdGF0dXMnICk7IH0sIDEgKTsgXCI+UmVxdWVzdCBBcHByb3ZhbCA8aW1nIHNyYz1cIi4uL2ltYWdlcy9hcC5wbmdcIiB3aWR0aD1cIjExXCIgaGVpZ2h0PVwiMTFcIj48L2Rpdj5gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3RyICs9IGA8ZGl2IG9uY2xpY2s9XCJcIiBzdHlsZT1cImNvbG9yOnJnYmEoMCwwLDAsMC4zKVwiPkV4Y2x1ZGUgZnJvbSBhcHByb3ZhbCByZXZpZXcgcXVldWUgKG5vdCBpbiBxdWV1ZSk8L2Rpdj5gO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzdHIgKz0gYDxkaXYgb25jbGljaz1cImFsZWlDb250ZXh0RGVsZXRlSW1hZ2UoJHtpZH0pXCI+RGVsZXRlIDxpbWcgc3JjPVwiLi4vaW1hZ2VzL25vYXAucG5nXCIgd2lkdGg9XCIxMVwiIGhlaWdodD1cIjExXCI+PC9kaXY+YDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzdHIgKz0gYDxkaXYgb25jbGljaz1cIkNsb3NlSW1hZ2VDb250ZXh0KCk7IHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkgeyBvcGVuX2FwcHJvdmVkX2RlY29yX21vZGVsID0gdHJ1ZTsgU2F2ZUZpbHRlcmluZygpOyBzZWFyY2hfcGhyYXNlID0gJypieV9sb2dpbionK2xhc3RfbG9naW47IFVwZGF0ZUltYWdlTGlzdCgpOyB9LCAxICk7XCI+U2VhcmNoIGZvciBvdGhlciBhcHByb3ZlZCBpbWFnZXMgZnJvbSAmcXVvdDske2xvZ2lufSZxdW90OzwvZGl2PmA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdHIgKz0gYDxzcGFuIHN0eWxlPVwiZGlzcGxheTpibG9jaztcIj4mbmJzcDs8L3NwYW4+YDtcclxuICAgICAgICBpZiAoaXNfZmF2X21lbnUpIHtcclxuICAgICAgICAgICAgc3RyICs9IGA8ZGl2IG9uY2xpY2s9XCJDbG9zZUltYWdlQ29udGV4dCgpOyAgc2V0VGltZW91dCggZnVuY3Rpb24oKSB7IFNlcnZlclJlcXVlc3QoJ2E9Z2V0X2ltYWdlcyZmb3JfY2xhc3M9JytsYXN0X2Zvcl9jbGFzcysnJmZhdm9yaXRlX2RlbD0ke2lkfScsICdmYXZvcml0ZV9zdGF0dXMnICk7IH0sIDEgKTsgXCI+UmVtb3ZlIGZyb20gZmF2b3JpdGVzPC9kaXY+YDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzdHIgKz0gYDxkaXYgb25jbGljaz1cIkNsb3NlSW1hZ2VDb250ZXh0KCk7ICBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHsgU2VydmVyUmVxdWVzdCgnYT1nZXRfaW1hZ2VzJmZvcl9jbGFzcz0nK2xhc3RfZm9yX2NsYXNzKycmZmF2b3JpdGVfYWRkPSR7aWR9JywgJ2Zhdm9yaXRlX3N0YXR1cycgKTsgfSwgMSApOyBcIj5BZGQgdG8gZmF2b3JpdGVzPC9kaXY+YDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGltYWdlX2NvbnRleHQuaW5uZXJIVE1MID0gc3RyO1xyXG5cclxuICAgIGltYWdlX2NvbnRleHQuc3R5bGUubGVmdCA9IGUuY2xpZW50WDtcclxuICAgIGltYWdlX2NvbnRleHQuc3R5bGUudG9wID0gZS5jbGllbnRZO1xyXG4gICAgaW1hZ2VfY29udGV4dC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgICBpbWFnZV9jb250ZXh0X2NhbmNlbF9wYWQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaW5kT2JqZWN0cyhuYW1lKSB7XHJcbiAgICBsZXQgZXhhY3QgPSBjb25maXJtKFwiRXhhY3QgbmFtZT9cIik7XHJcbiAgICBsZXQgbm90Rm91bmQgPSAxO1xyXG5cclxuICAgIGZ1bmN0aW9uIHByZWQoZCkge1xyXG4gICAgICAgIGlmIChleGFjdCkge3JldHVybiBkID09IG5hbWU7fVxyXG4gICAgICAgIGVsc2Uge3JldHVybiBkLmluY2x1ZGVzKG5hbWUpfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBlc1tpXS5zZWxlY3RlZCA9IDA7XHJcblxyXG4gICAgICAgIGlmIChlc1tpXS5wbS51aWQpIHtcclxuICAgICAgICAgICAgaWYgKHByZWQoZXNbaV0ucG0udWlkKSAmJiBNYXRjaExheWVyKGVzW2ldKSkge1xyXG4gICAgICAgICAgICAgICAgZXNbaV0uc2VsZWN0ZWQgPSAxO1xyXG4gICAgICAgICAgICAgICAgbm90Rm91bmQgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5lZWRfR1VJUGFyYW1zX3VwZGF0ZSA9IDE7XHJcbiAgICBuZWVkX3JlZHJhdyA9IDE7XHJcblxyXG4gICAgcmV0dXJuIG5vdEZvdW5kO1xyXG59XHJcblxyXG5mdW5jdGlvbiByb3RhdGVPYmplY3RzKCkge1xyXG4gICAgbGV0IHNlbGVjdGVkID0gU2VsZWN0ZWRPYmplY3RzO1xyXG4gICAgbGV0IGRpc3RYID0gW107XHJcbiAgICBsZXQgZGlzdFkgPSBbXTtcclxuICAgIGxldCBtaW5YO1xyXG4gICAgbGV0IG1pblk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3RlZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChzZWxlY3RlZFtpXS5wbS53ICYmIHNlbGVjdGVkW2ldLnBtLmgpIHtcclxuICAgICAgICAgICAgbGV0IHNhdmUgPSBzZWxlY3RlZFtpXS5wbS53O1xyXG5cclxuICAgICAgICAgICAgc2VsZWN0ZWRbaV0ucG0udyA9IHNlbGVjdGVkW2ldLnBtLmg7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkW2ldLnBtLmggPSBzYXZlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGlzdFgucHVzaChzZWxlY3RlZFtpXS5wbS54KTtcclxuICAgICAgICBkaXN0WS5wdXNoKHNlbGVjdGVkW2ldLnBtLnkpO1xyXG4gICAgfVxyXG5cclxuICAgIG1pblggPSBNYXRoLm1pbiguLi5kaXN0WCk7XHJcbiAgICBtaW5ZID0gTWF0aC5taW4oLi4uZGlzdFkpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0ZWQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBkaXN0WFtpXSAtPSBtaW5YO1xyXG4gICAgICAgIGRpc3RZW2ldIC09IG1pblk7XHJcblxyXG4gICAgICAgIHNlbGVjdGVkW2ldLnBtLnggPSBtaW5YICsgZGlzdFlbaV07XHJcbiAgICAgICAgc2VsZWN0ZWRbaV0ucG0ueSA9IG1pblkgKyBkaXN0WFtpXTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gUmFuZG9taXplTmFtZShvbGROYW1lKSB7XHJcbiAgICBsZXQgdGFrZW5VaWRzID0gZXMuZmlsdGVyKGUgPT4gZS5leGlzdHMpLm1hcChvID0+IG8ucG0udWlkKTtcclxuICAgIGxldCBhY3R1YWxOYW1lID0gb2xkTmFtZTtcclxuICAgIGlmKG9sZE5hbWUuaW5kZXhPZihcIipcIikgIT09IC0xKSBhY3R1YWxOYW1lID0gb2xkTmFtZS5zbGljZSgwLCBvbGROYW1lLmluZGV4T2YoXCIqXCIpKTtcclxuXHJcbiAgICBsZXQgY3VycmVudCA9IDE7XHJcbiAgICB3aGlsZSh0YWtlblVpZHMuaW5kZXhPZihgJHthY3R1YWxOYW1lfSoke2N1cnJlbnR9YCkgIT09IC0xKSBjdXJyZW50Kys7XHJcblxyXG4gICAgcmV0dXJuIGAke2FjdHVhbE5hbWV9KiR7Y3VycmVudH1gO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXRjaFJhbmRvbWl6ZU5hbWUoKSB7XHJcbiAgICB3aW5kb3cuUmFuZG9taXplTmFtZSA9IFJhbmRvbWl6ZU5hbWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhdGNoQWxsb3dlZENoYXJhY3RlcnMoKSB7XHJcbiAgICBhbGxvd2VkX3N0cmluZ19jaGFycyArPSBcIjw+XCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFJ1bGVCeVNlbGVjdG9yKHNlbGVjdG9yKSB7XHJcbiAgICBsZXQgcnVsZXMgPSBkb2N1bWVudC5zdHlsZVNoZWV0c1swXS5ydWxlcztcclxuICAgIGxldCBydWxlO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcnVsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAocnVsZXNbaV0uc2VsZWN0b3JUZXh0ID09IHNlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgIHJ1bGUgPSBydWxlc1tpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJ1bGU7XHJcbn1cclxuXHJcbndpbmRvdy5ibGFja1RoZW1lVW5kb3MgPSBbXTtcclxuXHJcbmZ1bmN0aW9uIHNldFN0eWxlKHNlbGVjdG9yLCBzdHlsZSwgdmFsdWUsIGlzVW5kbyA9IGZhbHNlKSB7XHJcbiAgICBpZighaXNVbmRvKSBibGFja1RoZW1lVW5kb3MucHVzaChbXHJcbiAgICAgICAgc2VsZWN0b3IsXHJcbiAgICAgICAgc3R5bGUsXHJcbiAgICAgICAgZ2V0UnVsZUJ5U2VsZWN0b3Ioc2VsZWN0b3IpLnN0eWxlW3N0eWxlXVxyXG4gICAgXSk7XHJcbiAgICBnZXRSdWxlQnlTZWxlY3RvcihzZWxlY3Rvcikuc3R5bGVbc3R5bGVdID0gdmFsdWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFVuZG9CbGFja1RoZW1lKCkge1xyXG4gICAgVGhlbWVTZXQoMCk7XHJcbiAgICBmb3IobGV0IHVuZG8gb2YgYmxhY2tUaGVtZVVuZG9zKSB7XHJcbiAgICAgICAgc2V0U3R5bGUodW5kb1swXSwgdW5kb1sxXSwgdW5kb1syXSwgdHJ1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJsYWNrVGhlbWUoKSB7XHJcbiAgICBUaGVtZVNldCgwKTtcclxuXHJcbiAgICB3aW5kb3cuVEhFTUUgPSA0O1xyXG5cclxuICAgIHNldFN0eWxlKFwiLnRvcHVpXCIsIFwiYmFja2dyb3VuZFNpemVcIiwgXCIwcHhcIik7IC8vIHJlbW92ZXMgdG9wIHVpIGRldGFpbFxyXG4gICAgc2V0U3R5bGUoXCIubGVmdHVpXCIsIFwiYmFja2dyb3VuZFNpemVcIiwgXCIwcHhcIik7IC8vIHJlbW92ZXMgbGVmdCB1aSBkZXRhaWxcclxuICAgIHNldFN0eWxlKFwiLnJpZ2h0dWlcIiwgXCJiYWNrZ3JvdW5kU2l6ZVwiLCBcIjBweFwiKTsgLy8gcmVtb3ZlcyByaWdodCB1aSBkZXRhaWxcclxuICAgIHNldFN0eWxlKFwiLnRvcHVpXCIsIFwiYmFja2dyb3VuZENvbG9yXCIsIFwiIzBBMEEwQVwiKTtcclxuICAgIHNldFN0eWxlKFwiLmxlZnR1aVwiLCBcImJhY2tncm91bmRDb2xvclwiLCBcIiMwQTBBMEFcIik7XHJcbiAgICBzZXRTdHlsZShcIi5yaWdodHVpXCIsIFwiYmFja2dyb3VuZENvbG9yXCIsIFwiIzBBMEEwQVwiKTtcclxuICAgIHNldFN0eWxlKFwiLmZpZWxkX2J0blwiLCBcImJhY2tncm91bmRDb2xvclwiLCBcIiMxRTFFMUVcIik7XHJcbiAgICBzZXRTdHlsZShcIi50b29sX2J0blwiLCBcImJhY2tncm91bmRDb2xvclwiLCBcIiMxRTFFMUVcIik7XHJcbiAgICBzZXRTdHlsZShcIi50b29sX2J0blwiLCBcImJvcmRlclwiLCBcIlwiKTsgLy8gdG9vbCBidXR0b24gb3V0bGluZVxyXG4gICAgc2V0U3R5bGUoXCIudG9vbF9idG4yXCIsIFwiYmFja2dyb3VuZENvbG9yXCIsIFwiIzQ1NjZBQlwiKTtcclxuICAgIHNldFN0eWxlKFwiLnRvb2xfYnRuMlwiLCBcImJvcmRlclwiLCBcIjFweCBzb2xpZCAjRkZGRkZGMjBcIik7XHJcbiAgICBzZXRTdHlsZShcIi5maWVsZF9idG5cIiwgXCJjb2xvclwiLCBcIiNGRkZGRkZEMFwiKTtcclxuICAgIHNldFN0eWxlKFwiLnRvb2xfYnRuXCIsIFwiY29sb3JcIiwgXCIjRkZGRkZGRDBcIik7XHJcbiAgICBzZXRTdHlsZShcIi50b29sX2J0bjJcIiwgXCJjb2xvclwiLCBcIiNGRkZGRkZEMFwiKTtcclxuICAgIHNldFN0eWxlKFwiLmd1aV9zZWxfaW5mb1wiLCBcImNvbG9yXCIsIFwiI0ZGRkZGRkQwXCIpO1xyXG4gICAgc2V0U3R5bGUoXCIuY1wiLCBcImNvbG9yXCIsIFwiI0ZGRkZGRjIwXCIpO1xyXG4gICAgc2V0U3R5bGUoXCIucGExXCIsIFwiY29sb3JcIiwgXCIjODA4MDgwXCIpO1xyXG4gICAgc2V0U3R5bGUoXCIucGEyXCIsIFwiY29sb3JcIiwgXCIjRkZGRkZGRDBcIik7XHJcbiAgICBzZXRTdHlsZShcIi5maWVsZF9kaXNfbGVmdFwiLCBcImNvbG9yXCIsIFwiI0ZGRkZGRkQwXCIpO1xyXG4gICAgc2V0U3R5bGUoXCIuZmllbGRfZGlzX3JpZ2h0XCIsIFwiY29sb3JcIiwgXCIjRkZGRkZGRDBcIik7XHJcbiAgICBzZXRTdHlsZShcIi5wX3UxXCIsIFwiYm9yZGVyXCIsIFwiXCIpO1xyXG4gICAgc2V0U3R5bGUoXCIucF91MlwiLCBcImJvcmRlclwiLCBcIlwiKTtcclxuICAgIHNldFN0eWxlKFwiLnBhMVwiLCBcImJhY2tncm91bmRDb2xvclwiLCBcIiMxMDEwMTBcIik7XHJcbiAgICBzZXRTdHlsZShcIi5wYTJcIiwgXCJiYWNrZ3JvdW5kQ29sb3JcIiwgXCIjMUIxQjFCXCIpO1xyXG4gICAgc2V0U3R5bGUoXCIub2JqYm94XCIsIFwiYmFja2dyb3VuZENvbG9yXCIsIFwiIzEzMTMxM1wiKTtcclxuICAgIHNldFN0eWxlKFwiLmZpZWxkX2Rpc19sZWZ0XCIsIFwiYmFja2dyb3VuZENvbG9yXCIsIFwiIzFFMUUxRVwiKTtcclxuICAgIHNldFN0eWxlKFwiLmZpZWxkX2Rpc19yaWdodFwiLCBcImJhY2tncm91bmRDb2xvclwiLCBcIiMxMzEzMTNcIik7XHJcbiAgICBzZXRTdHlsZShcIi5zZWxsaW5lMVwiLCBcImJhY2tncm91bmRDb2xvclwiLCBcIiM3QTEzMTRcIik7IC8vIHNlbGVjdGVkIG9iamVjdC9jdXJyZW50IG1hcFxyXG4gICAgc2V0U3R5bGUoXCIudG9vbF9idG46aG92ZXJcIiwgXCJiYWNrZ3JvdW5kQ29sb3JcIiwgXCIjNWY4ZGQzXCIpO1xyXG4gICAgc2V0U3R5bGUoXCIudG9vbF9idG46aG92ZXJcIiwgXCJib3JkZXJcIiwgXCIxcHggc29saWQgI0ZGRkZGRjIwXCIpO1xyXG4gICAgc2V0U3R5bGUoXCIudG9vbF9idG46aG92ZXJcIiwgXCJjb2xvclwiLCBcIiNGRkZGRkZEMFwiKTtcclxuICAgIHNldFN0eWxlKFwiLnRvb2xfYnRuMjpob3ZlclwiLCBcImJhY2tncm91bmRDb2xvclwiLCBcIiM1MDc3QzRcIik7XHJcbiAgICBzZXRTdHlsZShcIi50b29sX2J0bjI6aG92ZXJcIiwgXCJib3JkZXJcIiwgXCIxcHggc29saWQgI0ZGRkZGRjIwXCIpO1xyXG4gICAgc2V0U3R5bGUoXCIudG9vbF9idG4yOmhvdmVyXCIsIFwiY29sb3JcIiwgXCIjRkZGRkZGRDBcIik7XHJcbiAgICBzZXRTdHlsZShcIi5maWVsZF9idG46aG92ZXJcIiwgXCJiYWNrZ3JvdW5kQ29sb3JcIiwgXCIjMzUzNTM1XCIpO1xyXG4gICAgc2V0U3R5bGUoXCIuZmllbGRfYnRuOmhvdmVyXCIsIFwiY29sb3JcIiwgXCIjRkZGRkZGRDBcIik7XHJcbiAgICBzZXRTdHlsZShcIi50b29sX2J0bjphY3RpdmVcIiwgXCJiYWNrZ3JvdW5kQ29sb3JcIiwgXCIjMTUxNTE1XCIpOyAvLyBvYmplY3QgbGlzdCBob2xkIGZpbGxcclxuICAgIHNldFN0eWxlKFwiLnRvb2xfYnRuOmFjdGl2ZVwiLCBcImJvcmRlclwiLCBcIjFweCBzb2xpZCAjRkZGRkZGMjBcIik7IC8vIG9iamVjdCBsaXN0IGhvbGQgb3V0bGluZVxyXG4gICAgc2V0U3R5bGUoXCIudG9vbF9idG46YWN0aXZlXCIsIFwiY29sb3JcIiwgXCIjRkZGRkZGRDBcIik7IC8vIG9iamVjdCBsaXN0IGhvbGQgdGV4dFxyXG4gICAgc2V0U3R5bGUoXCIudG9vbF9idG4yOmFjdGl2ZVwiLCBcImJhY2tncm91bmRDb2xvclwiLCBcIiMzOTU1OENcIik7IC8vIHRvZ2dsZWQgYWN0aXZlIGJ1dHRvbiBob2xkIGZpbGxcclxuICAgIHNldFN0eWxlKFwiLnRvb2xfYnRuMjphY3RpdmVcIiwgXCJib3JkZXJcIiwgXCIxcHggc29saWQgI0ZGRkZGRjIwXCIpOyAvLyB0b2dnbGVkIGFjdGl2ZSBidXR0b24gaG9sZCBvdXRsaW5lXHJcbiAgICBzZXRTdHlsZShcIi50b29sX2J0bjI6YWN0aXZlXCIsIFwiY29sb3JcIiwgXCIjRkZGRkZGRDBcIik7IC8vIHRvZ2dsZWQgYWN0aXZlIGJ1dHRvbiBob2xkIHRleHRcclxuICAgIHNldFN0eWxlKFwiLmZpZWxkX2J0bjphY3RpdmVcIiwgXCJiYWNrZ3JvdW5kQ29sb3JcIiwgXCIjMTUxNTE1XCIpOyAvLyBmaWVsZCBidXR0b24gaG9sZCBmaWxsXHJcbiAgICBzZXRTdHlsZShcIi5maWVsZF9idG46YWN0aXZlXCIsIFwiY29sb3JcIiwgXCIjQ0NDXCIpOyAvLyBmaWVsZCBidXR0b24gaG9sZCB0ZXh0XHJcbiAgICBzZXRTdHlsZShcIiNtcnRpdGxlXCIsIFwiYmFja2dyb3VuZENvbG9yXCIsIFwiIzFFMUUxRVwiKTsgLy8gbWFwIGxpc3Qgb3ZlcmhlYWRcclxuICAgIHNldFN0eWxlKFwiI21yYm94XCIsIFwiYmFja2dyb3VuZENvbG9yXCIsIFwiIzBBMEEwQVwiKTsgLy8gbWFwbGlzdCBib3JkZXIgZmlsbFxyXG4gICAgc2V0U3R5bGUoXCIuZmllbGRfaW5wdXRcIiwgXCJiYWNrZ3JvdW5kQ29sb3JcIiwgXCIjMTMxMzEzXCIpOyAvLyBtYXAgaWQgZmllbGRcclxuICAgIHNldFN0eWxlKFwiLmZpZWxkX2lucHV0XCIsIFwiY29sb3JcIiwgXCIjQ0NDXCIpOyAvLyB3aGF0XHJcbiAgICBzZXRTdHlsZShcIi5idG5cIiwgXCJiYWNrZ3JvdW5kQ29sb3JcIiwgXCIjMUUxRTFFXCIpOyAvLyBtYXAgYnV0dG9uXHJcbiAgICBzZXRTdHlsZShcIi5idG5cIiwgXCJjb2xvclwiLCBcIiNDQ0NcIik7IC8vIHdoYXRcclxuICAgIHNldFN0eWxlKFwiLmJ0bjpob3ZlclwiLCBcImJhY2tncm91bmRDb2xvclwiLCBcIiMzNTM1MzVcIik7IC8vIG1hcCBidXR0b24gaG92ZXJcclxuICAgIHNldFN0eWxlKFwiLmJ0bjpob3ZlclwiLCBcImNvbG9yXCIsIFwiI0NDQ1wiKTsgLy8gd2hhdCBpcyB0aGlzIDhcclxuICAgIHNldFN0eWxlKFwiLmJ0bjphY3RpdmVcIiwgXCJiYWNrZ3JvdW5kQ29sb3JcIiwgXCIjMTUxNTE1XCIpOyAvLyBtYXAgYnV0dG9uIGhvbGRcclxuICAgIHNldFN0eWxlKFwiLmJ0bjphY3RpdmVcIiwgXCJjb2xvclwiLCBcIiNDQ0NcIik7IC8vIHdoYXQgaXMgdGhpcyAxMFxyXG4gICAgc2V0U3R5bGUoXCJjbG9zZWJveFwiLCBcImJhY2tncm91bmRDb2xvclwiLCBcIiMzNTM1MzVcIik7IC8vIGRlY29yIGxpc3QgY2xvc2UgYnV0dG9uXHJcbiAgICBzZXRTdHlsZShcImNsb3NlYm94XCIsIFwiY29sb3JcIiwgXCIjQ0NDXCIpOyAvLyB3aGF0XHJcbiAgICBzZXRTdHlsZShcIi5saXN0X2dyb3VwXCIsIFwiYmFja2dyb3VuZENvbG9yXCIsIFwiIzFFMUUxRVwiKTsgLy8gZGVjb3IgbGlzdCBjYXRlZ29yeVxyXG4gICAgc2V0U3R5bGUoXCIubGlzdF9ncm91cFwiLCBcImJvcmRlckJvdHRvbVwiLCBcIlwiKTsgLy8gd2hhdCBpcyB0aGlzIDE0XHJcbiAgICBzZXRTdHlsZShcIi5saXN0X2dyb3VwOmhvdmVyXCIsIFwiYmFja2dyb3VuZENvbG9yXCIsIFwiIzM1MzUzNVwiKTsgLy8gZGVjb3IgbGlzdCBjYXRlZ29yeSBob3ZlclxyXG4gICAgc2V0U3R5bGUoXCIubGlzdF9ncm91cDphY3RpdmVcIiwgXCJiYWNrZ3JvdW5kQ29sb3JcIiwgXCIjMEEwQTBBXCIpOyAvLyBkZWNvciBsaXN0IGNhdGVnb3J5IGhvbGRcclxuICAgIHNldFN0eWxlKFwiLmltYWdlX2xpc3RfY29sbGFwc2FibGVcIiwgXCJiYWNrZ3JvdW5kQ29sb3JcIiwgXCIjMEEwQTBBXCIpOyAvLyBkZWNvciBsaXN0IGJhY2tncm91bmRcclxuICAgIHNldFN0eWxlKFwiLmltZ19vcHRpb25fc2VsZWN0ZWRcIiwgXCJiYWNrZ3JvdW5kQ29sb3JcIiwgXCIjNDU2NkFCNDBcIik7IC8vIGN1cnJlbnQgZGVjb3JcclxuICAgIHNldFN0eWxlKFwiLnJpZ2h0dWlcIiwgXCJib3JkZXJMZWZ0XCIsIFwiXCIpOyAvLyByZW1vdmVzIHJpZ2h0IHVpIGJvcmRlclxyXG4gICAgc2V0U3R5bGUoXCIubGVmdHVpXCIsIFwiYm9yZGVyUmlnaHRcIiwgXCJcIik7IC8vIHJlbW92ZXMgbGVmdCB1aSBvcmRlclxyXG4gICAgc2V0U3R5bGUoXCI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iXCIsIFwiYmFja2dyb3VuZENvbG9yXCIsIFwiIzg4OFwiKTsgLy8gd2hhdCBpcyB0aGlzXHJcbiAgICBzZXRTdHlsZShcIiNycGFyYW1zLCAjZ3VpX29iamJveCwgI3Rvb2xzX2JveCwgI3BhcmFtYm94XCIsIFwic2Nyb2xsYmFyQ29sb3JcIiwgXCJcIik7IC8vIHdoYXQgaXMgdGhpc1xyXG4gICAgc2V0U3R5bGUoXCIjcnBhcmFtcywgI2d1aV9vYmpib3gsICN0b29sc19ib3gsICNwYXJhbWJveFwiLCBcInNjcm9sbGJhcldpZHRoXCIsIFwiXCIpOyAvLyB3aGF0IGlzIHRoaXNcclxuICAgIHNldFN0eWxlKFwiI3Rvb2xzX2JveFwiLCBcIm92ZXJmbG93LXlcIiwgXCJoaWRkZW5cIik7IC8vIHdoYXQgaXMgdGhpc1xyXG4gICAgc2V0U3R5bGUoXCIjdG9vbHNfYm94XCIsIFwib3ZlcmZsb3cteVwiLCBcImF1dG9cIik7IC8vIHdoYXQgaXMgdGhpc1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRPYmplY3RCb3gob2JqKSB7XHJcbiAgICBsZXQgeCA9IDA7XHJcbiAgICBsZXQgeSA9IDA7XHJcbiAgICBsZXQgdyA9IG9iai5wbS53O1xyXG4gICAgbGV0IGggPSBvYmoucG0uaDtcclxuXHJcbiAgICBpZiAoIVwiYm94IGRvb3IgcmVnaW9uIHB1c2hmIGJnIHdhdGVyXCIuaW5jbHVkZXMob2JqLl9jbGFzcykpIHtcclxuICAgICAgICB4ID0gYm9feFtvYmouX2NsYXNzXTtcclxuICAgICAgICB5ID0gYm9feVtvYmouX2NsYXNzXTtcclxuICAgICAgICB3ID0gYm9fd1tvYmouX2NsYXNzXTtcclxuICAgICAgICBoID0gYm9faFtvYmouX2NsYXNzXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoXCJwbGF5ZXIgZW5lbXlcIi5pbmNsdWRlcyhvYmouX2NsYXNzKSkge1xyXG4gICAgICAgIHggPSAtMTU7XHJcbiAgICAgICAgeSA9IC04MTtcclxuICAgICAgICB3ID0gMzA7XHJcbiAgICAgICAgaCA9IDgwO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvYmouX2NsYXNzID09IFwidmVoaWNsZVwiKSB7XHJcbiAgICAgICAgeCA9IGJvX3hbXCJ2ZWhpY2xlX1wiICsgb2JqLnBtLm1vZGVsXTtcclxuICAgICAgICB5ID0gYm9feVtcInZlaGljbGVfXCIgKyBvYmoucG0ubW9kZWxdO1xyXG4gICAgICAgIHcgPSBib193W1widmVoaWNsZV9cIiArIG9iai5wbS5tb2RlbF07XHJcbiAgICAgICAgaCA9IGJvX2hbXCJ2ZWhpY2xlX1wiICsgb2JqLnBtLm1vZGVsXTtcclxuXHJcbiAgICAgICAgaWYgKG9iai5wbS5tb2RlbCA9PSBcInZlaF9oaFwiKSB7XHJcbiAgICAgICAgICAgIHggPSBsb194W1wiYWxlaV92ZWhfaGhcIl07XHJcbiAgICAgICAgICAgIHkgPSBsb195W1wiYWxlaV92ZWhfaGhcIl07XHJcbiAgICAgICAgICAgIHcgPSBsb193W1wiYWxlaV92ZWhfaGhcIl07XHJcbiAgICAgICAgICAgIGggPSBsb19oW1wiYWxlaV92ZWhfaGhcIl07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgeDogeCxcclxuICAgICAgICB5OiB5LFxyXG4gICAgICAgIHc6IHcsXHJcbiAgICAgICAgaDogaFxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTZWxlY3Rpb25JbWFnZSgpIHtcclxuICAgIGxldCBzZWxlY3Rpb24gPSBTZWxlY3RlZE9iamVjdHM7XHJcbiAgICBsZXQgYXJyMSA9IFtdO1xyXG4gICAgbGV0IGFycjIgPSBbXTtcclxuICAgIGxldCBtaW5YID0gK0luZmluaXR5O1xyXG4gICAgbGV0IG1pblkgPSArSW5maW5pdHk7XHJcbiAgICBsZXQgbWF4WCA9IC1JbmZpbml0eTtcclxuICAgIGxldCBtYXhZID0gLUluZmluaXR5O1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGJveCA9IGdldE9iamVjdEJveChzZWxlY3Rpb25baV0pO1xyXG4gICAgICAgIGxldCB4ID0gc2VsZWN0aW9uW2ldLnBtLnggKyBib3gueDtcclxuICAgICAgICBsZXQgeSA9IHNlbGVjdGlvbltpXS5wbS55ICsgYm94Lnk7XHJcbiAgICAgICAgbGV0IHcgPSBib3gudztcclxuICAgICAgICBsZXQgaCA9IGJveC5oO1xyXG5cclxuICAgICAgICBpZiAoeCA8IG1pblgpIHtcclxuICAgICAgICAgICAgbWluWCA9IHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoeCArIHcgPiBtYXhYKSB7XHJcbiAgICAgICAgICAgIG1heFggPSB4ICsgdztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh5IDwgbWluWSkge1xyXG4gICAgICAgICAgICBtaW5ZID0geTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh5ICsgaCA+IG1heFkpIHtcclxuICAgICAgICAgICAgbWF4WSA9IHkgKyBoO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cuZXMgPSBbXTtcclxuICAgIGZvciAobGV0IGUgb2Ygc2VsZWN0aW9uKSB7XHJcbiAgICAgICAgZXMucHVzaChlKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIFRIRU1FID0gNDtcclxuICAgIEdSSURfQUxQSEEgPSAwO1xyXG4gICAgU0hPV19DT05ORUNUSU9OUyA9IDA7XHJcbiAgICB6b29tID0gMTtcclxuICAgIHpvb21fdmFsaWRhdGUoKTtcclxuXHJcbiAgICBsZXQgc3cgPSBkaXNfdG9feCAtIGRpc19mcm9tX3g7XHJcbiAgICBsZXQgc2ggPSBkaXNfdG9feSAtIGRpc19mcm9tX3k7XHJcblxyXG4gICAgZGlzX2Zyb21feCA9IG1pblggLSAxMDtcclxuICAgIGRpc19mcm9tX3kgPSBtaW5ZIC0gMTA7XHJcbiAgICBkaXNfdG9feCA9IG1pblggKyBzdyAtIDEwO1xyXG4gICAgZGlzX3RvX3kgPSBtaW5ZICsgc2ggLSAxMDtcclxuXHJcbiAgICBDb25zb2xlVHJhY2VNZXNzYWdlcyA9IFtdO1xyXG5cclxuICAgIFJlbmRlcigpO1xyXG5cclxuICAgIGxldCB3ID0gbWF4WCAtIG1pblggKyAyMDtcclxuICAgIGxldCBoID0gbWF4WSAtIG1pblkgKyAyMDtcclxuXHJcbiAgICBhbGVpTG9nKERFQlVHMiwgXCJCZWZvcmUgR0lEXCIpO1xyXG4gICAgbGV0IGRhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHcsIGgpO1xyXG4gICAgYWxlaUxvZyhERUJVRzIsIFwiQWZ0ZXIgR0lEXCIpO1xyXG5cclxuICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgbGV0IGN0eDIgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuICAgIGxldCBjYW52YXMyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuICAgIGxldCBjdHgzID0gY2FudmFzMi5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG4gICAgY2FudmFzLndpZHRoID0gdztcclxuICAgIGNhbnZhcy5oZWlnaHQgPSBoO1xyXG5cclxuICAgIGN0eDIuYmVnaW5QYXRoKCk7XHJcbiAgICBjdHgyLnB1dEltYWdlRGF0YShkYXRhLCAwLCAwKTtcclxuICAgIGN0eDIuY2xvc2VQYXRoKCk7XHJcblxyXG4gICAgbGV0IHByZXZXID0gdztcclxuICAgIGxldCBwcmV2SCA9IGg7XHJcblxyXG4gICAgaWYgKHcgPiAxMDAgfHwgaCA+IDEwMCkge1xyXG4gICAgICAgIGxldCBkaXZpZGUgPSB3IC8gaDtcclxuXHJcbiAgICAgICAgaWYgKGRpdmlkZSA+PSAxKSB7XHJcbiAgICAgICAgICAgIHcgPSAxMDA7XHJcbiAgICAgICAgICAgIGggPSB3IC8gZGl2aWRlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGggPSAxMDA7XHJcbiAgICAgICAgICAgIHcgPSBoICogZGl2aWRlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYW52YXMyLndpZHRoID0gdztcclxuICAgIGNhbnZhczIuaGVpZ2h0ID0gaDtcclxuXHJcbiAgICBjdHgzLmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4My5zY2FsZSh3IC8gcHJldlcsIGggLyBwcmV2SCk7XHJcbiAgICBjdHgzLmRyYXdJbWFnZShjYW52YXMsIDAsIDApO1xyXG4gICAgY3R4My5jbG9zZVBhdGgoKTtcclxuXHJcbiAgICBsZXQgcmVzdWx0ID0gY2FudmFzMi50b0RhdGFVUkwoKTtcclxuXHJcbiAgICBjYW52YXMucmVtb3ZlKCk7XHJcbiAgICBjYW52YXMgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2xpcGJvYXJkRGl2KCkge1xyXG4gICAgbGV0IGNsaXBib2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsZXQgbXJkaW1saWdodHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1yZGltbGlnaHRzXCIpO1xyXG5cclxuICAgIGNsaXBib2FyZERpdi5pZCA9IFwiY2xpcGJvYXJkRGl2XCI7XHJcbiAgICBjbGlwYm9hcmREaXYuY2xhc3NOYW1lID0gXCJtcnBvcHVwXCI7XHJcbiAgICBjbGlwYm9hcmREaXYuc3R5bGUgPSBcIndpZHRoOiBjYWxjKDEwMCUgLSAyODBweCk7IGhlaWdodDogMTAwJTsgbWFyZ2luOiAwcHg7IHBhZGRpbmc6IDBweDsgdG9wOiA1MCU7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgLTUwJSk7IGRpc3BsYXk6IG5vbmU7XCI7XHJcblxyXG4gICAgY2xpcGJvYXJkRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBtcmRpbWxpZ2h0cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XHJcbiAgICAgICAgY2xpcGJvYXJkRGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGNsaXBib2FyZERpdik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsaXBib2FyZEl0ZW1BY3Rpb24oaSkge1xyXG4gICAgbGV0IGl0ZW1zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuY2xpcGJvYXJkSXRlbXMpO1xyXG4gICAgbGV0IGFjdGlvbiA9IGNvbmZpcm0oXCJSZW5hbWUgKE9LKSBvciBkZWxldGUgKENhbmNlbCkgP1wiKTtcclxuXHJcbiAgICBpZiAoYWN0aW9uKSB7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBwcm9tcHQoXCJFbnRlciBuYW1lOlwiLCBpdGVtc1tpXS5uYW1lKTtcclxuXHJcbiAgICAgICAgaWYgKG5hbWUpIHtcclxuICAgICAgICAgICAgaXRlbXNbaV0ubmFtZSA9IG5hbWU7XHJcblxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UuY2xpcGJvYXJkSXRlbXMgPSBKU09OLnN0cmluZ2lmeShpdGVtcyk7XHJcblxyXG4gICAgICAgICAgICB1cGRhdGVDbGlwYm9hcmREaXYoKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChjb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZT9cIikpIHtcclxuICAgICAgICAgICAgaXRlbXMuc3BsaWNlKGksIDEpO1xyXG5cclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmNsaXBib2FyZEl0ZW1zID0gSlNPTi5zdHJpbmdpZnkoaXRlbXMpO1xyXG5cclxuICAgICAgICAgICAgdXBkYXRlQ2xpcGJvYXJkRGl2KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZWdpc3RlckNsaXBib2FyZEl0ZW1BY3Rpb24oKSB7XHJcbiAgICB3aW5kb3cuY2xpcGJvYXJkSXRlbUFjdGlvbiA9IGNsaXBib2FyZEl0ZW1BY3Rpb247XHJcbiAgICBhbGVpTG9nKERFQlVHLCBcIlJlZ2lzdGVyZWQgQ2xpcGJvYXJkIEl0ZW0gQWN0aW9uXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVDbGlwYm9hcmREaXYoKSB7XHJcbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5jbGlwYm9hcmRJdGVtcykge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGlwYm9hcmRJdGVtcyA9IFwiW11cIjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaXRlbXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5jbGlwYm9hcmRJdGVtcyk7XHJcbiAgICBsZXQgY2xpcGJvYXJkRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbGlwYm9hcmREaXZcIik7XHJcbiAgICBsZXQgbXJkaW1saWdodHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1yZGltbGlnaHRzXCIpO1xyXG5cclxuICAgIGNsaXBib2FyZERpdi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgbXJkaW1saWdodHMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHJcbiAgICBsZXQgaHRtbCA9IGBcclxuICAgICAgICA8ZGl2IGlkPVwibXJ0aXRsZVwiPlxyXG4gICAgICAgICAgICA8c3Bhbj5PYmplY3QgY2xpcGJvYXJkPC9zcGFuPlxyXG4gICAgICAgICAgICA8Y2xvc2Vib3ggb25jbGljaz1cImRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGlwYm9hcmREaXYnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXJkaW1saWdodHMnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1wiPng8L2Nsb3NlYm94PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGlkPVwibXJib3hcIiBjbGFzcz1cIm9iamJveFwiIHN0eWxlPVwiaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMnB4KTsgYm94LXNpemluZzogYm9yZGVyLWJveDtcIj5cclxuICAgIGA7XHJcblxyXG4gICAgbGV0IG9yaWdpbmFsRVMgPSB3aW5kb3cuZXM7XHJcbiAgICBsZXQgY3MgPSB7fSAvLyBDUzogQ3VycmVudCBTZXR0aW5ncywgYmVjYXVzZSB3ZSB3aWxsIGNoYW5nZSBzZXR0aW5ncyBmb3IgcmVuZGVyaW5nIGltYWdlc1xyXG4gICAgY3MudGhlbWUgPSBUSEVNRTtcclxuICAgIGNzLmdyaWRfb3BhY2l0eSA9IEdSSURfQUxQSEE7XHJcbiAgICBjcy5zaG93Q29ubmVjdGlvbnMgPSBTSE9XX0NPTk5FQ1RJT05TO1xyXG4gICAgLy9cclxuICAgIGNzLmR0eCA9IGRpc190b194O1xyXG4gICAgY3MuZHR5ID0gZGlzX3RvX3k7XHJcbiAgICAvL1xyXG4gICAgY3MuZGZ4ID0gZGlzX2Zyb21feDtcclxuICAgIGNzLmRmeSA9IGRpc19mcm9tX3k7XHJcbiAgICAvL1xyXG4gICAgY3MuY3RtID0gQ29uc29sZVRyYWNlTWVzc2FnZXM7XHJcbiAgICBjcy56b29tID0gem9vbTtcclxuXHJcbiAgICB3aW5kb3cuZXMgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBfX3Bhc3RlT2JqZWN0Q2xpcGJvYXJkKGl0ZW1zW2ldKTtcclxuICAgICAgICBodG1sICs9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImltZ19vcHRpb25cIiBzdHlsZT1cIndpZHRoOiBhdXRvO1wiIG9uY29udGV4dG1lbnU9XCJjbGlwYm9hcmRJdGVtQWN0aW9uKGAgKyBpICsgYClcIiBvbmNsaWNrPVwicGFzdGVGcm9tUGVybWFuZW50Q2xpcGJvYXJkKGAgKyBpICsgYCk7XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImAgKyBnZXRTZWxlY3Rpb25JbWFnZSgpICsgYFwiIHN0eWxlPVwibWF4LXdpZHRoOiAxMDBweDsgbWF4LWhlaWdodDogMTAwcHg7XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PmAgKyBpdGVtc1tpXS5uYW1lICsgYDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgfVxyXG5cclxuICAgIGNsaXBib2FyZERpdi5pbm5lckhUTUwgPSBodG1sICsgXCI8L2Rpdj5cIjtcclxuICAgIHdpbmRvdy5lcyA9IG9yaWdpbmFsRVM7XHJcbiAgICBUSEVNRSA9IGNzLnRoZW1lO1xyXG4gICAgR1JJRF9BTFBIQSA9IGNzLmdyaWRfb3BhY2l0eTtcclxuICAgIFNIT1dfQ09OTkVDVElPTlMgPSBjcy5zaG93Q29ubmVjdGlvbnM7XHJcbiAgICBkaXNfdG9feCA9IGNzLmR0eDtcclxuICAgIGRpc190b195ID0gY3MuZHR5O1xyXG4gICAgZGlzX2Zyb21feCA9IGNzLmRmeDtcclxuICAgIGRpc19mcm9tX3kgPSBjcy5kZnk7XHJcbiAgICBDb25zb2xlVHJhY2VNZXNzYWdlcyA9IGNzLmN0bTtcclxuICAgIHpvb20gPSBjcy56b29tO1xyXG4gICAgbmVlZF9yZWRyYXcgPSAxO1xyXG4gICAgem9vbV92YWxpZGF0ZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfX3Bhc3RlT2JqZWN0Q2xpcGJvYXJkKGl0ZW0pIHtcclxuICAgIHNlc3Npb25TdG9yYWdlLnBlcm1hbmVudF9jbGlwYm9hcmQgPSBpdGVtLmRhdGE7XHJcbiAgICBQYXN0ZUZyb21DbGlwQm9hcmQoXCJwZXJtYW5lbnRfY2xpcGJvYXJkXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXN0ZUZyb21QZXJtYW5lbnRDbGlwYm9hcmQoaSkge1xyXG4gICAgbGV0IGl0ZW1zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuY2xpcGJvYXJkSXRlbXMpO1xyXG5cclxuICAgIHNlc3Npb25TdG9yYWdlLnBlcm1hbmVudF9jbGlwYm9hcmQgPSBpdGVtc1tpXS5kYXRhO1xyXG5cclxuICAgIFBhc3RlRnJvbUNsaXBCb2FyZChcInBlcm1hbmVudF9jbGlwYm9hcmRcIik7XHJcblxyXG4gICAgbGV0IGNsaXBib2FyZERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xpcGJvYXJkRGl2XCIpO1xyXG4gICAgbGV0IG1yZGltbGlnaHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtcmRpbWxpZ2h0c1wiKTtcclxuXHJcbiAgICBjbGlwYm9hcmREaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgbXJkaW1saWdodHMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cclxuICAgIE5ld05vdGUoXCJPYmplY3RzIHBhc3RlZCBmcm9tIHBlcm1hbmVudCBjbGlwYm9hcmQuXCIsIG5vdGVfcGFzc2l2ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvcHlUb1Blcm1hbmVudENsaXBib2FyZCgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IHNlbGVjdGlvbiA9IFNlbGVjdGVkT2JqZWN0cztcclxuXHJcbiAgICAgICAgaWYgKHNlbGVjdGlvbi5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgICBDb3B5VG9DbGlwQm9hcmQoXCJwZXJtYW5lbnRfY2xpcGJvYXJkXCIpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGl0ZW1zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuY2xpcGJvYXJkSXRlbXMpO1xyXG5cclxuICAgICAgICAgICAgaXRlbXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlNlbGVjdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogc2Vzc2lvblN0b3JhZ2UucGVybWFuZW50X2NsaXBib2FyZFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGlwYm9hcmRJdGVtcyA9IEpTT04uc3RyaW5naWZ5KGl0ZW1zKTtcclxuXHJcbiAgICAgICAgICAgIE5ld05vdGUoXCJPYmplY3RzIGNvcGllZCB0byBwZXJtYW5lbnQgY2xpcGJvYXJkLlwiLCBub3RlX3Bhc3NpdmUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZUNsaXBib2FyZERpdigpO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICBOZXdOb3RlKFwiQ2FuJ3QgY29weSBvYmplY3RzIHRvIHBlcm1hbmVudCBjbGlwYm9hcmQuPGJyPkxvY2FsU3RvcmFnZSBlcnJvcj9cIiwgbm90ZV9iYWQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VUb3BSaWdodFRleHQoKSB7XHJcbiAgICBsZXQgY29udGFpbmVyRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmVyc2lvbl9yaWdodHNcIik7XHJcbiAgICBsZXQgZWxlbSA9IGNvbnRhaW5lckVsZW0uY2hpbGROb2Rlc1swXTtcclxuXHJcbiAgICBjb250YWluZXJFbGVtLnN0eWxlLndpZHRoID0gXCIxNzBweFwiO1xyXG4gICAgZWxlbS5zdHlsZS53aWR0aCA9IFwiMTYwcHhcIjtcclxuXHJcbiAgICBsZXQgdmVyc2lvbiA9IFwiXCI7XHJcbiAgICBpZihpc05hdGl2ZSkgdmVyc2lvbiA9IFwiIHZcIiArIEdNX2luZm8uc2NyaXB0LnZlcnNpb247XHJcblxyXG4gICAgZWxlbS5pbm5lckhUTUwgPSBlbGVtLmlubmVySFRNTC5yZXBsYWNlQWxsKFwiPGJyPlwiLCBcIiBcIikgKyBcIjxicj5BTEUgSW1wcm92ZW1lbnRzXCIgKyB2ZXJzaW9uO1xyXG59XHJcblxyXG4vLyBBZGRzIGFkZGl0aW9uYWwgYnV0dG9uXHJcbmZ1bmN0aW9uIGFkZEFkZGl0aW9uYWxCdXR0b25zKCkge1xyXG4gICAgY29uc3QgcnBhcmFtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicnBhcmFtc1wiKTtcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IFNlbGVjdGVkT2JqZWN0cztcclxuXHJcbiAgICAvLyBQYXJhbSBsaXN0IG5vdCBsb2FkZWQgb3Igc2VsZWN0aW9uIGlzIG5vdCAxLlxyXG4gICAgaWYgKCFycGFyYW1zIHx8IHNlbGVjdGlvbi5sZW5ndGggIT0gMSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRJbWFnZVNpemVfYnV0dG9uID0gJzxhIG9uY2xpY2s9XCJnZXRJbWFnZVNpemUoKTtcIiBjbGFzcz1cInRvb2xfYnRuIHRvb2xfd2lkXCIgc3R5bGU9XCJkaXNwbGF5OiBibG9jazsgd2lkdGg6IDEwMCU7IG1hcmdpbi10b3A6IDRweDtcIj5HZXQgaW1hZ2Ugc2l6ZTwvYT4nO1xyXG4gICAgY29uc3QgY2VudGVyRGVjb3JhdGlvblhfYnV0dG9uID0gJzxhIG9uY2xpY2s9XCJjZW50ZXJJbWFnZVgoKTtcIiBjbGFzcz1cInRvb2xfYnRuIHRvb2xfd2lkXCIgc3R5bGU9XCJkaXNwbGF5OiBibG9jazsgd2lkdGg6IDEwMCU7IG1hcmdpbi10b3A6IDRweDtcIj5DZW50ZXIgZGVjb3JhdGlvbiBYPC9hPic7XHJcbiAgICBjb25zdCBjZW50ZXJEZWNvcmF0aW9uWV9idXR0b24gPSAnPGEgb25jbGljaz1cImNlbnRlckltYWdlWSgpO1wiIGNsYXNzPVwidG9vbF9idG4gdG9vbF93aWRcIiBzdHlsZT1cImRpc3BsYXk6IGJsb2NrOyB3aWR0aDogMTAwJTsgbWFyZ2luLXRvcDogNHB4O1wiPkNlbnRlciBkZWNvcmF0aW9uIFk8L2E+JztcclxuXHJcbiAgICBpZiAoc2VsZWN0aW9uWzBdLl9jbGFzcyA9PSBcImJnXCIpIHtcclxuICAgICAgICBycGFyYW1zLmlubmVySFRNTCArPSBnZXRJbWFnZVNpemVfYnV0dG9uO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzZWxlY3Rpb25bMF0uX2NsYXNzID09IFwiZGVjb3JcIikge1xyXG4gICAgICAgIHJwYXJhbXMuaW5uZXJIVE1MICs9IGdldEltYWdlU2l6ZV9idXR0b247XHJcbiAgICAgICAgcnBhcmFtcy5pbm5lckhUTUwgKz0gY2VudGVyRGVjb3JhdGlvblhfYnV0dG9uO1xyXG4gICAgICAgIHJwYXJhbXMuaW5uZXJIVE1MICs9IGNlbnRlckRlY29yYXRpb25ZX2J1dHRvbjtcclxuICAgIH1cclxuXHJcbiAgICBpZighZWRpdF90cmlnZ2Vyc19hc190ZXh0ICYmIHNlbGVjdGlvblswXS5fY2xhc3MgPT0gXCJ0cmlnZ2VyXCIgJiYgRXh0ZW5kZWRUcmlnZ2Vyc0xvYWRlZCl7XHJcbiAgICAgICAgY29uc3QgZXh0ZW5kVHJpZ2dlckFjdGlvbl9idXR0b24gPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0d28tZWxlbWVudC1ncmlkXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBvbmNsaWNrPVwiYWRkVHJpZ2dlckFjdGlvbkNvdW50KDEpXCIgY2xhc3M9XCJ0b29sX2J0biB0b29sX3dpZFwiIHN0eWxlPVwiZGlzcGxheTogYmxvY2s7IHdpZHRoOiA5NSU7IG1hcmdpbi10b3A6IDRweDtcIj4oKykgRXh0ZW5kIHRyaWdnZXIgYWN0aW9uIGxpc3QuPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgb25jbGljaz1cImFkZFRyaWdnZXJBY3Rpb25Db3VudCgtMSlcIiBjbGFzcz1cInRvb2xfYnRuIHRvb2xfd2lkXCIgc3R5bGU9XCJkaXNwbGF5OiBibG9jazsgd2lkdGg6IDk1JTsgbWFyZ2luLXRvcDogNHB4O1wiPigtKSBTaHJpbmsgdHJpZ2dlciBhY3Rpb24gbGlzdC48L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInR3by1lbGVtZW50LWdyaWRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0d28tZWxlbWVudC1ncmlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgb25jbGljaz1cImFkZFRyaWdnZXJBY3Rpb25Db3VudCg1KVwiIGNsYXNzPVwidG9vbF9idG4gdG9vbF93aWRcIiBzdHlsZT1cImRpc3BsYXk6IGJsb2NrOyB3aWR0aDogOTAlOyBtYXJnaW4tdG9wOiA0cHg7XCI+KCs1KTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBvbmNsaWNrPVwiYWRkVHJpZ2dlckFjdGlvbkNvdW50KDEwKVwiIGNsYXNzPVwidG9vbF9idG4gdG9vbF93aWRcIiBzdHlsZT1cImRpc3BsYXk6IGJsb2NrOyB3aWR0aDogOTAlOyBtYXJnaW4tdG9wOiA0cHg7XCI+KCsxMCk8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidHdvLWVsZW1lbnQtZ3JpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIG9uY2xpY2s9XCJhZGRUcmlnZ2VyQWN0aW9uQ291bnQoLTUpXCIgY2xhc3M9XCJ0b29sX2J0biB0b29sX3dpZFwiIHN0eWxlPVwiZGlzcGxheTogYmxvY2s7IHdpZHRoOiA5MCU7IG1hcmdpbi10b3A6IDRweDtcIj4oLTUpPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIG9uY2xpY2s9XCJhZGRUcmlnZ2VyQWN0aW9uQ291bnQoLTEwKVwiIGNsYXNzPVwidG9vbF9idG4gdG9vbF93aWRcIiBzdHlsZT1cImRpc3BsYXk6IGJsb2NrOyB3aWR0aDogOTAlOyBtYXJnaW4tdG9wOiA0cHg7XCI+KC0xMCk8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgICAgICBycGFyYW1zLmlubmVySFRNTCArPSBleHRlbmRUcmlnZ2VyQWN0aW9uX2J1dHRvbjtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIEdVSSB0byBjaGFuZ2UgcGFyYW1ldGVyIHR5cGUgYmFzZWQgb24gdHJpZ2dlciBhY3Rpb24uXHJcbiAgICAgICAgU3RyZWV0TWFnaWMoKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgZnVuY3Rpb24gaXMgaW52b2tlZCB3aGVuZXZlciB1c2VycyBwcmVzc2VkIHRoZSBcIkV4dGVuZCB0cmlnZ2VyIGFjdGlvbiBsaXN0LlwiIG9yIHRoZSBcIlNocmluayB0cmlnZ2VyIGFjdGlvbiBsaXN0XCIgYnV0dG9ucy5cclxuICogVGhpcyBmdW5jdGlvbiBpcyByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgYW5kIG1haW50YWluaW5nIGV4dGVuZGVkIHRyaWdnZXJzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgICAgVGhlIGFtb3VudCBvZiB0cmlnZ2VyIGFjdGlvbnMgdG8gYWRkIG9yIHN1YnRyYWN0IGZyb20gdGhlIGN1cnJlbnRseSBzZWxlY3RlZCB0cmlnZ2VyLFxyXG4gKi9cclxuZnVuY3Rpb24gYWRkVHJpZ2dlckFjdGlvbkNvdW50KHZhbHVlKXtcclxuXHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSBTZWxlY3RlZE9iamVjdHM7XHJcblxyXG4gICAgaWYgKHNlbGVjdGlvbi5sZW5ndGggIT0gMSB8fCB2YWx1ZSA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZWxlY3RlZFRyaWdnZXIgPSBzZWxlY3Rpb25bMF07XHJcblxyXG4gICAgLy8gU3VidHJhY3RpbmcgdHJpZ2dlciBhY3Rpb25zIGZyb20gbm9ybWFsIHRyaWdnZXJzIGlzIGEgbm8tb3AuXHJcbiAgICBpZighc2VsZWN0ZWRUcmlnZ2VyLnBtW1wiZXh0ZW5kZWRcIl0gJiYgdmFsdWUgPCAwKXtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSXQgaXMgYSBub3JtYWwgdHJpZ2dlciwgbGV0J3MgY29udmVydCBpdCB0byBhbiBleHRlbmRlZCB0cmlnZ2VyLlxyXG4gICAgaWYoIXNlbGVjdGVkVHJpZ2dlci5wbVtcImV4dGVuZGVkXCJdKXtcclxuICAgICAgICBzZWxlY3RlZFRyaWdnZXIucG1bXCJhZGRpdGlvbmFsQWN0aW9uc1wiXSA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHNlbGVjdGVkVHJpZ2dlci5wbVtcImFkZGl0aW9uYWxQYXJhbUFcIl0gPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBzZWxlY3RlZFRyaWdnZXIucG1bXCJhZGRpdGlvbmFsUGFyYW1CXCJdID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgc2VsZWN0ZWRUcmlnZ2VyLnBtW1widG90YWxOdW1PZkFjdGlvbnNcIl0gPSAxMDtcclxuICAgICAgICBzZWxlY3RlZFRyaWdnZXIucG1bXCJleHRlbmRlZFwiXSA9IHRydWU7XHJcblxyXG4gICAgICAgIE5ld05vdGUoXCJDb252ZXJ0ZWQgdGhpcyB0byBhbiBleHRlbmRlZCB0cmlnZ2VyLlwiLCBub3RlX3Bhc3NpdmUpO1xyXG4gICAgICAgIE5ld05vdGUoXCJCZSBtaW5kZnVsIGFib3V0IHlvdXIgbnVtYmVyIG9mIHRyaWdnZXJzLlwiLCBub3RlX25ldXRyYWwpO1xyXG4gICAgICAgIE5ld05vdGUoXCJCZWhpbmQgdGhlIHNjZW5lcywgdGhpcyBjcmVhdGVzIDEgdHJpZ2dlciBmb3IgZXZlcnkgYWRkaXRpb25hbCA5IHRyaWdnZXIgYWN0aW9ucy5cIiwgbm90ZV9uZXV0cmFsKTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RlZFRyaWdnZXIucG1bXCJ0b3RhbE51bU9mQWN0aW9uc1wiXSArPSB2YWx1ZTtcclxuXHJcbiAgICAvLyBJdCBoYXMgbGVzcyB0aGFuIDEwIHRyaWdnZXIgYWN0aW9ucywgbGV0J3MgY29udmVydCB0aGlzIGV4dGVuZGVkIHRyaWdnZXIgYmFjayB0byBhIG5vcm1hbCB0cmlnZ2VyLlxyXG4gICAgaWYoc2VsZWN0ZWRUcmlnZ2VyLnBtW1widG90YWxOdW1PZkFjdGlvbnNcIl0gPD0gMTAgfHwgaXNOYU4oc2VsZWN0ZWRUcmlnZ2VyLnBtW1widG90YWxOdW1PZkFjdGlvbnNcIl0pKXtcclxuICAgICAgICBkZWxldGUgc2VsZWN0ZWRUcmlnZ2VyLnBtW1wiYWRkaXRpb25hbEFjdGlvbnNcIl07XHJcbiAgICAgICAgZGVsZXRlIHNlbGVjdGVkVHJpZ2dlci5wbVtcImFkZGl0aW9uYWxQYXJhbUFcIl07XHJcbiAgICAgICAgZGVsZXRlIHNlbGVjdGVkVHJpZ2dlci5wbVtcImFkZGl0aW9uYWxQYXJhbUJcIl07XHJcbiAgICAgICAgZGVsZXRlIHNlbGVjdGVkVHJpZ2dlci5wbVtcInRvdGFsTnVtT2ZBY3Rpb25zXCJdO1xyXG4gICAgICAgIGRlbGV0ZSBzZWxlY3RlZFRyaWdnZXIucG1bXCJleHRlbmRlZFwiXTtcclxuICAgIH1cclxuICAgIC8vIFJlc2l6ZSBhcnJheXMgYWNjb3JkaW5nIHRvIHRoZSBuZXcgY2hhbmdlIGluIHRvdGFsTnVtT2ZUcmlnZ2Vycy5cclxuICAgIGVsc2V7XHJcbiAgICAgICAgaWYodmFsdWUgPiAwKXtcclxuICAgICAgICAgICAgc2VsZWN0ZWRUcmlnZ2VyLnBtW1wiYWRkaXRpb25hbEFjdGlvbnNcIl0ucHVzaCguLi5BcnJheSh2YWx1ZSkuZmlsbCgtMSkpO1xyXG4gICAgICAgICAgICBzZWxlY3RlZFRyaWdnZXIucG1bXCJhZGRpdGlvbmFsUGFyYW1BXCJdLnB1c2goLi4uQXJyYXkodmFsdWUpLmZpbGwoMCkpO1xyXG4gICAgICAgICAgICBzZWxlY3RlZFRyaWdnZXIucG1bXCJhZGRpdGlvbmFsUGFyYW1CXCJdLnB1c2goLi4uQXJyYXkodmFsdWUpLmZpbGwoMCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBzZWxlY3RlZFRyaWdnZXIucG1bXCJhZGRpdGlvbmFsQWN0aW9uc1wiXS5sZW5ndGggKz0gdmFsdWU7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkVHJpZ2dlci5wbVtcImFkZGl0aW9uYWxQYXJhbUFcIl0ubGVuZ3RoICs9IHZhbHVlO1xyXG4gICAgICAgICAgICBzZWxlY3RlZFRyaWdnZXIucG1bXCJhZGRpdGlvbmFsUGFyYW1CXCJdLmxlbmd0aCArPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgVXBkYXRlR1VJUGFyYW1zKCk7XHJcblxyXG4gICAgLy8gU2Nyb2xsIHRvIHRoZSBib3R0b20gb2YgdGhlIHRyaWdnZXIgbGlzdC5cclxuICAgIGxldCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JwYXJhbXMnKTtcclxuICAgIGRpdkVsZW1lbnQuc2Nyb2xsVG9wID0gZGl2RWxlbWVudC5zY3JvbGxIZWlnaHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEltYWdlU2l6ZSgpIHtcclxuICAgIGxldCBzZWxlY3Rpb24gPSBTZWxlY3RlZE9iamVjdHM7XHJcbiAgICBsZXQgaWQ7XHJcblxyXG4gICAgaWYgKHNlbGVjdGlvblswXS5fY2xhc3MgPT0gXCJiZ1wiKSB7XHJcbiAgICAgICAgaWQgPSBzZWxlY3Rpb25bMF0ucG0ubTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc2VsZWN0aW9uWzBdLl9jbGFzcyA9PSBcImRlY29yXCIpIHtcclxuICAgICAgICBpZCA9IHNlbGVjdGlvblswXS5wbS5tb2RlbDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIGlkID09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuXHJcbiAgICAgICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBsZXQgdyA9IGltZy53aWR0aDtcclxuICAgICAgICAgICAgbGV0IGggPSBpbWcuaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgaW1nLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgYWxlcnQoXCJXOiBcIiArIHcgKyBcIlxcbkg6IFwiICsgaCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbWcub25lcnJvciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpbWcucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICBhbGVydChcIkltYWdlIG5vdCBmb3VuZC5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbWcuc3JjID0gXCJodHRwczovL3d3dy5wbGF6bWFidXJzdDIuY29tL21pbWFnZV9jYWNoZS5waHA/aW1hZ2VfaWQ9XCIgKyBpZC5zbGljZSgxKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxlcnQoXCJJbWFnZSBub3QgZm91bmQuXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRJbWFnZURhdGEoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgZXJyKSA9PiB7XHJcbiAgICAgICAgbGV0IHNlbGVjdGlvbiA9IFNlbGVjdGVkT2JqZWN0cztcclxuICAgICAgICBsZXQgaWQ7XHJcblxyXG4gICAgICAgIGlmIChzZWxlY3Rpb25bMF0uX2NsYXNzID09IFwiYmdcIikge1xyXG4gICAgICAgICAgICBpZCA9IHNlbGVjdGlvblswXS5wbS5tO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNlbGVjdGlvblswXS5fY2xhc3MgPT0gXCJkZWNvclwiKSB7XHJcbiAgICAgICAgICAgIGlkID0gc2VsZWN0aW9uWzBdLnBtLm1vZGVsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBpZCA9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG5cclxuICAgICAgICAgICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHcgPSBpbWcud2lkdGg7XHJcbiAgICAgICAgICAgICAgICBsZXQgaCA9IGltZy5oZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYW52YXMud2lkdGggPSBpbWcud2lkdGg7XHJcbiAgICAgICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaW1nLmhlaWdodDtcclxuXHJcbiAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzKFtjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHcsIGgpLmRhdGEsIHddKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW1nLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGltZy5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkltYWdlIG5vdCBmb3VuZC5cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzKDEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbWcuc3JjID0gXCJodHRwczovL3d3dy5wbGF6bWFidXJzdDIuY29tL21pbWFnZV9jYWNoZS5waHA/aW1hZ2VfaWQ9XCIgKyBpZC5zbGljZSgxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydChcIkltYWdlIG5vdCBmb3VuZC5cIik7XHJcblxyXG4gICAgICAgICAgICByZXMoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFyck1pbihhcnIpIHtcclxuICAgIGxldCBtaW4gPSBJbmZpbml0eTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChhcnJbaV0gPCBtaW4pIHtcclxuICAgICAgICAgICAgbWluID0gYXJyW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbWluO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcnJNYXgoYXJyKSB7XHJcbiAgICBsZXQgbWF4ID0gLUluZmluaXR5O1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGFycltpXSA+IG1heCkge1xyXG4gICAgICAgICAgICBtYXggPSBhcnJbaV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBtYXg7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEltYWdlUG9zaXRpb24oZGF0YSwgdykge1xyXG4gICAgbGV0IGFyclggPSBbXTtcclxuICAgIGxldCBhcnJZID0gW107XHJcblxyXG4gICAgbGV0IG1pblg7XHJcbiAgICBsZXQgbWluWTtcclxuICAgIGxldCBtYXhYO1xyXG4gICAgbGV0IG1heFk7XHJcblxyXG4gICAgbGV0IGNlbnRlclggPSAwO1xyXG4gICAgbGV0IGNlbnRlclkgPSAwO1xyXG5cclxuICAgIGlmIChkYXRhICE9IDEpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpICs9IDQpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGFbaSArIDNdID49IDMpIHtcclxuICAgICAgICAgICAgICAgIGxldCB4ID0gKGkgLyA0KSAlIHc7XHJcbiAgICAgICAgICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IoaSAvIDQgLyB3KTtcclxuXHJcbiAgICAgICAgICAgICAgICBhcnJYLnB1c2goeCk7XHJcbiAgICAgICAgICAgICAgICBhcnJZLnB1c2goeSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1pblggPSBhcnJNaW4oYXJyWCk7XHJcbiAgICAgICAgbWluWSA9IGFyck1pbihhcnJZKTtcclxuICAgICAgICBtYXhYID0gYXJyTWF4KGFyclgpO1xyXG4gICAgICAgIG1heFkgPSBhcnJNYXgoYXJyWSk7XHJcblxyXG4gICAgICAgIGNlbnRlclggPSAobWluWCArIG1heFgpIC8gMjtcclxuICAgICAgICBjZW50ZXJZID0gKG1pblkgKyBtYXhZKSAvIDI7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB4OiBjZW50ZXJYLFxyXG4gICAgICAgIHk6IGNlbnRlcllcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0RGVjb3JPZmZzZXQoeCwgeSkge1xyXG4gICAgbGV0IHNlbGVjdGlvbiA9IFNlbGVjdGVkT2JqZWN0cztcclxuXHJcbiAgICBzZWxlY3Rpb25bMF0ucG0udSA9IHg7XHJcbiAgICBzZWxlY3Rpb25bMF0ucG0udiA9IHk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNlbnRlckltYWdlWCgpIHtcclxuICAgIGxldCBzZWxlY3Rpb24gPSBTZWxlY3RlZE9iamVjdHM7XHJcblxyXG4gICAgaWYgKHNlbGVjdGlvbi5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgIGlmIChzZWxlY3Rpb25bMF0uX2NsYXNzID09IFwiZGVjb3JcIikge1xyXG4gICAgICAgICAgICBnZXRJbWFnZURhdGEoKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzICE9IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2VudGVyID0gZ2V0SW1hZ2VQb3NpdGlvbihyZXNbMF0sIHJlc1sxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHggPSBjZW50ZXIueDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RGVjb3JPZmZzZXQoLXgsIHNlbGVjdGlvblswXS5wbS52KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5lZWRfcmVkcmF3ID0gMTtcclxuICAgIG5lZWRfR1VJUGFyYW1zX3VwZGF0ZSA9IDE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNlbnRlckltYWdlWSgpIHtcclxuICAgIGxldCBzZWxlY3Rpb24gPSBTZWxlY3RlZE9iamVjdHM7XHJcblxyXG4gICAgaWYgKHNlbGVjdGlvbi5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgIGlmIChzZWxlY3Rpb25bMF0uX2NsYXNzID09IFwiZGVjb3JcIikge1xyXG4gICAgICAgICAgICBnZXRJbWFnZURhdGEoKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzICE9IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2VudGVyID0gZ2V0SW1hZ2VQb3NpdGlvbihyZXNbMF0sIHJlc1sxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHkgPSBjZW50ZXIueTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RGVjb3JPZmZzZXQoc2VsZWN0aW9uWzBdLnBtLnUsIC15KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5lZWRfcmVkcmF3ID0gMTtcclxuICAgIG5lZWRfR1VJUGFyYW1zX3VwZGF0ZSA9IDE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZEZ1bmN0aW9uVG9XaW5kb3coKSB7XHJcbiAgICB3aW5kb3cuZ2V0SW1hZ2VTaXplID0gZ2V0SW1hZ2VTaXplO1xyXG4gICAgd2luZG93LmNlbnRlckltYWdlWCA9IGNlbnRlckltYWdlWDtcclxuICAgIHdpbmRvdy5jZW50ZXJJbWFnZVkgPSBjZW50ZXJJbWFnZVk7XHJcbiAgICB3aW5kb3cuYWRkVHJpZ2dlckFjdGlvbkNvdW50ID0gYWRkVHJpZ2dlckFjdGlvbkNvdW50O1xyXG59XHJcblxyXG5sZXQgbmV3VXBkYXRlID0gMDtcclxuXHJcbmxldCB0YXJnZXRFbGVtZW50O1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBlID0+IHtcclxuICAgIHRhcmdldEVsZW1lbnQgPSBlLnRhcmdldDtcclxufSk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBlID0+IHtcclxuICAgIGlmKGUuY3RybEtleSAmJiBlLmNvZGUgPT0gXCJLZXlBXCIgJiYgY2FudmFzX2ZvY3VzKSB7XHJcbiAgICAgICAgd2luZG93LmVzLm1hcChlID0+IHtcclxuICAgICAgICAgICAgaWYoKGUuZXhpc3RzKSAmJiAoZS5faXNwaHlzaWNhbCkgJiYgKE1hdGNoTGF5ZXIoZSkpKSB7XHJcbiAgICAgICAgICAgICAgICBlLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB3aW5kb3cubmVlZF9yZWRyYXcgPSB0cnVlO1xyXG4gICAgICAgICAgICB3aW5kb3cubmVlZF9HVUlQYXJhbXNfdXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChlLmN0cmxLZXkgJiYgZS5jb2RlID09IFwiS2V5U1wiICYmIGNhbnZhc19mb2N1cykge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZmllbGRfYnRuXCIpWzBdLmNsaWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGUuY3RybEtleSAmJiBlLmNvZGUgPT0gXCJLZXlGXCIgJiYgY2FudmFzX2ZvY3VzKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBsZXQgbmFtZSA9IHByb21wdChcIkZpbmQgb2JqZWN0czpcIiwgXCJcIik7XHJcblxyXG4gICAgICAgIGlmIChuYW1lICE9PSBudWxsICYmIG5hbWUgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgbGV0IG5vdEZvdW5kID0gZmluZE9iamVjdHMobmFtZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAobm90Rm91bmQpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiTm90aGluZyBmb3VuZC5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGUuY29kZSA9PSBcIktleVJcIiAmJiB0YXJnZXRFbGVtZW50ICE9IFwiW29iamVjdCBIVE1MSW5wdXRFbGVtZW50XVwiICYmIHRhcmdldEVsZW1lbnQuaWQgIT0gXCJvcGNvZGVfZmllbGRcIikge1xyXG4gICAgICAgIGlmICghaXNPbmx5VHJpZ2dlclNlbGVjdGVkKCkpIHtcclxuICAgICAgICAgICAgcm90YXRlT2JqZWN0cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZS5jdHJsS2V5ICYmIGUuY29kZSA9PSBcIktleVJcIiAmJiBjYW52YXNfZm9jdXMpIHtcclxuICAgICAgICBpZiAoaXNPbmx5VHJpZ2dlclNlbGVjdGVkKCkgJiYgIWlzTm90aGluZ1NlbGVjdGVkKCkpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgcmV2ZXJzZVRyaWdnZXJBY3Rpb25zKCk7XHJcbiAgICAgICAgICAgIHVuc2VsZWN0VHJpZ2dlckFjdGlvbnMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKChlLmNvZGUgPT0gXCJNaW51c1wiIHx8IGUuY29kZSA9PSBcIk51bXBhZFN1YnRyYWN0XCIpICYmIGUuY3RybEtleSAmJiBjYW52YXNfZm9jdXMpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHpvb20gKj0gMjtcclxuICAgICAgICB6b29tX3ZhbGlkYXRlKCk7XHJcbiAgICAgICAgbmVlZF9yZWRyYXcgPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICgoZS5jb2RlID09IFwiRXF1YWxcIiB8fCBlLmNvZGUgPT0gXCJOdW1wYWRBZGRcIikgJiYgZS5jdHJsS2V5ICYmIGNhbnZhc19mb2N1cykge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgem9vbSAqPSAwLjU7XHJcbiAgICAgICAgem9vbV92YWxpZGF0ZSgpO1xyXG4gICAgICAgIG5lZWRfcmVkcmF3ID0gMTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZS5jdHJsS2V5ICYmIGUuYWx0S2V5KSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICB6b29tID0gMTtcclxuICAgICAgICB6b29tX3ZhbGlkYXRlKCk7XHJcbiAgICAgICAgbmVlZF9yZWRyYXcgPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlLmNvZGUgPT0gXCJLZXlIXCIgJiYgZS5jdHJsS2V5KSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBpZiAodGFyZ2V0RWxlbWVudC5pZCA9PT0gXCJvcGNvZGVfZmllbGRcIikge1xyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSB0YXJnZXRFbGVtZW50LnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgbGV0IHN0cjEgPSBwcm9tcHQoXCJFbnRlciBzdHJpbmcgdG8gcmVwbGFjZSBmcm9tOlwiLCBcIlwiKTtcclxuICAgICAgICAgICAgaWYgKCFzdHIxKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBsZXQgc3RyMiA9IHByb21wdChcIkVudGVyIHN0cmluZyB0byByZXBsYWNlIHRvOlwiLCBzdHIxKTtcclxuICAgICAgICAgICAgaWYgKCFzdHIyKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB0YXJnZXRFbGVtZW50LnZhbHVlID0gdmFsdWUucmVwbGFjZUFsbChzdHIxLCBzdHIyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGUuY29kZSA9PSBcIkVudGVyXCIgJiYgdGFyZ2V0RWxlbWVudCAhPSBcIltvYmplY3QgSFRNTElucHV0RWxlbWVudF1cIiAmJiB0YXJnZXRFbGVtZW50LmlkICE9IFwib3Bjb2RlX2ZpZWxkXCIgJiYgY2FudmFzX2ZvY3VzKSB7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkID0gU2VsZWN0ZWRPYmplY3RzO1xyXG5cclxuICAgICAgICBpZiAoc2VsZWN0ZWQubGVuZ3RoICE9IDApIHtcclxuICAgICAgICAgICAgbGV0IHBhcmFtID0gcHJvbXB0KFwiRW50ZXIgcGFyYW1ldGVyIG5hbWU6XCIsIFwiXCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHBhcmFtKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZXhwcmVzc2lvbiA9IHByb21wdChcIkVudGVyIGV4cHJlc3Npb246XCIsIFwiXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChleHByZXNzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW0gPSBwYXJhbS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoXCJ3aWR0aFwiLCBcIndcIikucmVwbGFjZShcImhlaWdodFwiLCBcImhcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0ZWQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHggPSBzZWxlY3RlZFtpXS5wbS54O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgeSA9IHNlbGVjdGVkW2ldLnBtLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB3ID0gc2VsZWN0ZWRbaV0ucG0udztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGggPSBzZWxlY3RlZFtpXS5wbS5oO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh5ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZFtpXS5wbVtwYXJhbV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBhcnNlZCA9IGFsZXNjcmlwdFBhcnNlKGV4cHJlc3Npb24sIFt4LCB5LCB3LCBoLCBpXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJzZWQgPT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VsZWN0ZWQubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRbal0uc2VsZWN0ZWQgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRbaV0uc2VsZWN0ZWQgPSAxO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVcGRhdGVQaHlzaWNhbFBhcmFtKHBhcmFtLCBwYXJzZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VsZWN0ZWQubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFtqXS5zZWxlY3RlZCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG5lZWRfR1VJUGFyYW1zX3VwZGF0ZSA9IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGUuYWx0S2V5KSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlLmFsdEtleSAmJiB0YXJnZXRFbGVtZW50ID09IFwiW29iamVjdCBIVE1MSW5wdXRFbGVtZW50XVwiKSB7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkID0gU2VsZWN0ZWRPYmplY3RzO1xyXG5cclxuICAgICAgICBpZiAoc2VsZWN0ZWQubGVuZ3RoID09IDEpIHtcclxuICAgICAgICAgICAgbGV0IHggPSBzZWxlY3RlZFswXS5wbS54O1xyXG4gICAgICAgICAgICBsZXQgeSA9IHNlbGVjdGVkWzBdLnBtLnk7XHJcbiAgICAgICAgICAgIGxldCB3ID0gc2VsZWN0ZWRbMF0ucG0udztcclxuICAgICAgICAgICAgbGV0IGggPSBzZWxlY3RlZFswXS5wbS5oO1xyXG5cclxuICAgICAgICAgICAgaWYgKHggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgeCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh5ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHkgPSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB3ID0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGkgaXMgdW5kZWZpbmVkIGFuZCBpJ20gcHJldHR5IHN1cmUgaXQncyBub3Qgc3VwcG9zZWQgdG8gYmUgbGlrZSB0aGF0LiBzbyB0aGlzIGRlZmluaXRlbHkgZG9lc24ndCB3b3JrIGhvdyBpdCBzaG91bGQuXHJcbiAgICAgICAgICAgIC8vIGknbGwganVzdCBsZWF2ZSBpdCBjdXogaWRrIGhvdyBpdCdzIHN1cHBvc2VkIHRvIGJlIGFuZCBpdCBkb2Vzbid0IHRocm93IGFuIGVycm9yIGJlY2F1c2Ugb2Ygc29tZSBpbXBsaWNpdCBnbG9iYWxzIGZyb20gdmFuaWxsYSBhbGVcclxuICAgICAgICAgICAgbGV0IHBhcnNlZCA9IGFsZXNjcmlwdFBhcnNlKHRhcmdldEVsZW1lbnQudmFsdWUsIFt4LCB5LCB3LCBoLCBpXSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHBhcnNlZCA9PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRFbGVtZW50LnZhbHVlID0gcGFyc2VkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChlLmN0cmxLZXkgJiYgZS5jb2RlID09IFwiS2V5UFwiKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBjb3B5VG9QZXJtYW5lbnRDbGlwYm9hcmQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZS5jdHJsS2V5ICYmIGUuc2hpZnRLZXkpIHtcclxuICAgICAgICBpZiAobmV3VXBkYXRlKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly9naXRodWIuY29tL0xpc0FCQy9BTEVJL3Jhdy9tYWluL2FsZWkudXNlci5qc1wiKTtcclxuICAgICAgICAgICAgbmV3VXBkYXRlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGRvVG9vbHRpcCgpIHtcclxuICAgIGxldCB0b29sdGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICB0b29sdGlwLmlkID0gXCJBTEVJX3Rvb2x0aXBcIjtcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0b29sdGlwKTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGUgPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC50aXRsZSkge1xyXG4gICAgICAgICAgICBlLnRhcmdldC5kYXRhc2V0LnRpdGxlID0gZS50YXJnZXQudGl0bGU7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LnRpdGxlID0gXCJcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChlLnRhcmdldC5wYXJlbnRFbGVtZW50LnRpdGxlKSB7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC50aXRsZSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQudGl0bGU7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQudGl0bGUgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbGVmdE9mZnNldCA9IDE1MFxyXG5cclxuICAgICAgICBpZiAoZS50YXJnZXQuZGF0YXNldC50aXRsZSkge1xyXG4gICAgICAgICAgICBsZXQgdG8gPSBlLnRhcmdldC5kYXRhc2V0LnRpdGxlLmxlbmd0aFxyXG4gICAgICAgICAgICB0b29sdGlwLnN0eWxlLmxlZnQgPSB0byArIGxlZnRPZmZzZXQgKyBlLmNsaWVudFggKyAyMCArIFwicHhcIjtcclxuICAgICAgICAgICAgdG9vbHRpcC5pbm5lckhUTUwgPSBlLnRhcmdldC5kYXRhc2V0LnRpdGxlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRvb2x0aXAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0ICE9IDMxKSB7XHJcbiAgICAgICAgICAgICAgICB0b29sdGlwLnN0eWxlLmxlZnQgPSB0byArIGxlZnRPZmZzZXQgKyBlLmNsaWVudFggLSAyMCAtIHRvb2x0aXAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggKyBcInB4XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC50aXRsZSkge1xyXG4gICAgICAgICAgICBsZXQgdG8gPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQudGl0bGUubGVuZ3RoXHJcbiAgICAgICAgICAgIHRvb2x0aXAuc3R5bGUubGVmdCA9IHRvICsgbGVmdE9mZnNldCArIGUuY2xpZW50WCArIDIwICsgXCJweFwiO1xyXG4gICAgICAgICAgICB0b29sdGlwLnN0eWxlLnRvcCA9IGUuY2xpZW50WSArIFwicHhcIjtcclxuICAgICAgICAgICAgdG9vbHRpcC5pbm5lckhUTUwgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQudGl0bGU7XHJcblxyXG4gICAgICAgICAgICBpZiAodG9vbHRpcC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgIT0gMzEpIHtcclxuICAgICAgICAgICAgICAgIHRvb2x0aXAuc3R5bGUubGVmdCA9IHRvICsgbGVmdE9mZnNldCArIGUuY2xpZW50WCAtIDIwIC0gdG9vbHRpcC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCArIFwicHhcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRvb2x0aXAuc3R5bGUubGVmdCA9IC0xMDAgKyBsZWZ0T2Zmc2V0ICsgXCJweFwiO1xyXG4gICAgICAgICAgICB0b29sdGlwLnN0eWxlLnRvcCA9IFwiLTEwMHB4XCI7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBhbGVpTG9nKERFQlVHLCBcIkFkZGVkIHRvb2x0aXAuXCIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhdGNoRGVjb3JVcGxvYWQoKSB7XHJcbiAgICAvLyBBbGxvd3MgZm9yIG11bHRpcGxlIHVwbG9hZHMuXHJcbiAgICBsZXQgaW1hZ2VMb2FkZXIgPSAkaWQoXCJpbWFnZUxvYWRlclwiKTtcclxuICAgIC8vIEZpcnN0IHdlIG1ha2UgaXQgYWxsb3cgbXVsdGlwbGUgZmlsZXMgYW5kIHJlbW92ZSBvcmlnaW5hbCBldmVudCBsaXN0ZW5lci5cclxuICAgIGltYWdlTG9hZGVyLnNldEF0dHJpYnV0ZShcIm11bHRpcGxlXCIsIHRydWUpO1xyXG4gICAgaW1hZ2VMb2FkZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBoYW5kbGVJbWFnZSk7XHJcbiAgICAvLyBUaGVuIHdlIHJlZ2lzdGVyIG91ciBvd24uXHJcbiAgICBpbWFnZUxvYWRlci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBsZXQgZmlsZXMgPSBlLnRhcmdldC5maWxlcztcclxuICAgICAgICBOZXdOb3RlKGBBTEVJOiBXaWxsIHVwbG9hZCAke2ZpbGVzLmxlbmd0aH0gYmcvZGVjb3IocykuYCwgXCIjMjU5NUZGXCIpO1xyXG4gICAgICAgIGZvciAobGV0IGZpbGUgb2YgZmlsZXMpIHtcclxuICAgICAgICAgICAgbGV0IGFyZyA9IHt0YXJnZXQ6IHtmaWxlczogW2ZpbGVdfX07XHJcbiAgICAgICAgICAgIGhhbmRsZUltYWdlKGFyZyk7IC8vIENhbGwgb3JpZ2luYWwgZnVuY3Rpb25cclxuICAgICAgICB9XHJcbiAgICB9LCBmYWxzZSlcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0UGFyYW1ldGVyKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgbGV0IHJpZ2h0UGFyYW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJycGFyYW1zXCIpO1xyXG4gICAgaWYocmlnaHRQYXJhbXMgPT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICBpZihyaWdodFBhcmFtcyA9PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgaWYoaW5kZXggPiAxMykge1xyXG4gICAgICAgIGxldCBpc0FsbFRyaWdnZXIgPSBTZWxlY3RlZE9iamVjdHMubWFwKG8gPT4gKG8uX2NsYXNzID09IFwidHJpZ2dlclwiKSk7XHJcbiAgICAgICAgaWYoaXNBbGxUcmlnZ2VyLmluZGV4T2YoZmFsc2UpICE9PSAtMSkgcmV0dXJuO1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldEFjdGlvbkNvdW50KGVsZW0pIHtcclxuICAgICAgICAgICAgaWYoZWxlbS5pc0V4dGVuZGVkKSByZXR1cm4gZWxlbS5wbS50b3RhbE51bU9mQWN0aW9ucztcclxuICAgICAgICAgICAgZWxzZSByZXR1cm4gMTA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBtaW5pbXVtQWN0aW9uQ291bnQgPSBNYXRoLm1pbiguLi5TZWxlY3RlZE9iamVjdHMubWFwKG8gPT4gZ2V0QWN0aW9uQ291bnQobykpKTtcclxuICAgICAgICBpZihpbmRleCA+PSAobWluaW11bUFjdGlvbkNvdW50ICogMyArIFRyaWdnZXJfZ2V0U2VwYXJhdG9yU3RhcnQoU2VsZWN0ZWRPYmplY3RzLmxlbmd0aCkgLSAxKSkgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBhY3R1YWxJbmRleCA9IDA7IC8vIFdlIHdpbGwgYnJ1dGVmb3JjZS5cclxuICAgIGxldCBpID0gMDtcclxuICAgIHdoaWxlKGkgPCBpbmRleCkge1xyXG4gICAgICAgIGkrKztcclxuICAgICAgICBhY3R1YWxJbmRleCsrO1xyXG5cclxuICAgICAgICBpZihyaWdodFBhcmFtcy5jaGlsZE5vZGVzW2FjdHVhbEluZGV4XSA9PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xyXG4gICAgICAgIGlmKHJpZ2h0UGFyYW1zLmNoaWxkTm9kZXNbYWN0dWFsSW5kZXhdLmNoaWxkTm9kZXNbMV0gPT09IHVuZGVmaW5lZCkgYWN0dWFsSW5kZXgrKztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0dWFsSW5kZXggPCByaWdodFBhcmFtcy5jaGlsZE5vZGVzLmxlbmd0aCkge1xyXG4gICAgICAgIHJpZ2h0UGFyYW1zLmNoaWxkTm9kZXNbYWN0dWFsSW5kZXhdLmNoaWxkTm9kZXNbMV0uaW5uZXJIVE1MID0gdmFsdWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFNlbGVjdGlvbigpIHsgLy8gREVQUkVDQVRFRCEgVVNFIFNlbGVjdGVkT2JqZWN0cyBESVJFQ1RMWSFcclxuICAgIHJldHVybiBTZWxlY3RlZE9iamVjdHM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFyZU9iamVjdHNPZlNhbWVUeXBlKG9iamVjdHMpIHtcclxuICAgIGxldCBzYW1lID0gMTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAob2JqZWN0c1tpXS5fY2xhc3MgIT0gb2JqZWN0c1swXS5fY2xhc3MpIHtcclxuICAgICAgICAgICAgc2FtZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzYW1lO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVTYW1lSXRlbXMoYXJyYXkpIHtcclxuICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQoYXJyYXkpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlSXRlbXMoYXJyYXksIGl0ZW1zKSB7XHJcbiAgICBsZXQgY29weSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYXJyYXkpKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29weS5zcGxpY2UoY29weS5pbmRleE9mKGl0ZW1zW2ldKSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNvcHk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcmFtZXRlck5hbWVzVG9JbmRleGVzKHBhcmFtZXRlcnMsIG9iamVjdFBhcmFtZXRlcnMpIHtcclxuICAgIGxldCBpbmRleGVzID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbWV0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaW5kZXhlcy5wdXNoKG9iamVjdFBhcmFtZXRlcnMuaW5kZXhPZihwYXJhbWV0ZXJzW2ldKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGluZGV4ZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFNhbWVQYXJhbWV0ZXJzKG9iamVjdHMpIHtcclxuICAgIGxldCBkaWZmZXJlbnRQYXJhbWV0ZXJzID0gW107XHJcbiAgICBsZXQgcGFyYW1ldGVycyA9IE9iamVjdC5rZXlzKG9iamVjdHNbMF0ucG0pO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcGFyYW1ldGVycy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBpZiAob2JqZWN0c1tpXS5wbVtwYXJhbWV0ZXJzW2pdXSAhPSBvYmplY3RzWzBdLnBtW3BhcmFtZXRlcnNbal1dKSB7XHJcbiAgICAgICAgICAgICAgICBkaWZmZXJlbnRQYXJhbWV0ZXJzLnB1c2gocGFyYW1ldGVyc1tqXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGlmZmVyZW50UGFyYW1ldGVycyA9IHJlbW92ZVNhbWVJdGVtcyhkaWZmZXJlbnRQYXJhbWV0ZXJzKTtcclxuICAgIGRpZmZlcmVudFBhcmFtZXRlcnMgPSByZW1vdmVJdGVtcyhwYXJhbWV0ZXJzLCBkaWZmZXJlbnRQYXJhbWV0ZXJzKTtcclxuXHJcbiAgICByZXR1cm4gcGFyYW1ldGVyTmFtZXNUb0luZGV4ZXMoZGlmZmVyZW50UGFyYW1ldGVycywgcGFyYW1ldGVycyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvQm9vbGVhbihzdHIpIHtcclxuICAgIGlmIChpc05hTihOdW1iZXIoc3RyKSkpIHtcclxuICAgICAgICByZXR1cm4gc3RyID09IFwidHJ1ZVwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gQm9vbGVhbihzdHIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBwYXJhbWV0ZXJNYXAgPSB7XHJcbiAgICBcImJveFwiOiB7XCJtXCI6IFwiYm94X21vZGVsXCJ9LFxyXG4gICAgXCJkb29yXCI6IHtcclxuICAgICAgICBcIm1vdmluZ1wiOiBcImJvb2xcIixcclxuICAgICAgICBcInZpc1wiOiBcImJvb2xcIlxyXG4gICAgfSxcclxuICAgIFwicmVnaW9uXCI6IHtcInVzZV9vblwiOiBcInJlZ2lvbl9hY3RpdmF0aW9uXCJ9LFxyXG4gICAgXCJkZWNvclwiOiB7XHJcbiAgICAgICAgXCJmXCI6IFwiZHJhd19pbl9mcm9udFwiLFxyXG4gICAgICAgIFwibW9kZWxcIjogXCJkZWNvcl9tb2RlbFwiXHJcbiAgICB9LFxyXG4gICAgXCJiZ1wiOiB7XHJcbiAgICAgICAgXCJzXCI6IFwiYm9vbFwiLFxyXG4gICAgICAgIFwiZlwiOiBcImRyYXdfaW5fZnJvbnRcIixcclxuICAgICAgICBcIm1cIjogXCJiZ19tb2RlbFwiXHJcbiAgICB9LFxyXG4gICAgXCJ3YXRlclwiOiB7XCJmcmljdGlvblwiOiBcImJvb2xcIn0sXHJcbiAgICBcInRyaWdnZXJcIjoge1wiZW5hYmxlZFwiOiBcImJvb2xcIn0sXHJcbiAgICBcInRpbWVyXCI6IHtcImVuYWJsZWRcIjogXCJib29sXCJ9LFxyXG4gICAgXCJndW5cIjoge1xyXG4gICAgICAgIFwiY29tbWFuZFwiOiBcInRlYW0rYW55XCIsXHJcbiAgICAgICAgXCJ1cGdcIjogXCJndW5fdXBncmFkZVwiLFxyXG4gICAgICAgIFwibW9kZWxcIjogXCJndW5fbW9kZWxcIlxyXG4gICAgfSxcclxuICAgIFwiYmFycmVsXCI6IHtcIm1vZGVsXCI6IFwiYmFycmVsX21vZGVsXCJ9LFxyXG4gICAgXCJsYW1wXCI6IHtcImZsYXJlXCI6IFwiYm9vbFwifSxcclxuICAgIFwidmVoaWNsZVwiOiB7XCJtb2RlbFwiOiBcInZlaGljbGVfbW9kZWxcIn1cclxufVxyXG5cclxuZnVuY3Rpb24gZml4UGFyYW1ldGVyVmFsdWUobmFtZSwgdmFsdWUsIG9iamVjdFR5cGUpIHtcclxuICAgIGxldCBmaXhlZFZhbHVlO1xyXG5cclxuICAgIGlmIChWQUxfVEFCTEVbbmFtZV0pIHtcclxuICAgICAgICBmaXhlZFZhbHVlID0gVkFMX1RBQkxFW25hbWVdW3ZhbHVlXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKHBhcmFtZXRlck1hcFtvYmplY3RUeXBlXSAmJiBwYXJhbWV0ZXJNYXBbb2JqZWN0VHlwZV1bbmFtZV0pIHtcclxuICAgICAgICAgICAgZml4ZWRWYWx1ZSA9IFZBTF9UQUJMRVsgcGFyYW1ldGVyTWFwW29iamVjdFR5cGVdW25hbWVdIF1bdmFsdWVdO1xyXG4gICAgICAgIH1lbHNlIGlmIChuYW1lLnNsaWNlKDAsIDgpID09IFwiYWN0aW9uc19cIiAmJiBuYW1lLnNsaWNlKC01KSA9PSBcIl90eXBlXCIpIHtcclxuICAgICAgICAgICAgZml4ZWRWYWx1ZSA9IFZBTF9UQUJMRVtcInRyaWdnZXJfdHlwZVwiXVt2YWx1ZV07XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBmaXhlZFZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmaXhlZFZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRTYW1lUGFyYW1ldGVycygpIHtcclxuICAgIGxldCBvYmplY3RzID0gZ2V0U2VsZWN0aW9uKCk7XHJcblxyXG4gICAgaWYgKGFyZU9iamVjdHNPZlNhbWVUeXBlKG9iamVjdHMpICYmIG9iamVjdHMubGVuZ3RoID49IDIpIHtcclxuICAgICAgICBsZXQgaW5kZXhlcyA9IGdldFNhbWVQYXJhbWV0ZXJzKG9iamVjdHMpO1xyXG4gICAgICAgIGxldCBwYXJhbWV0ZXJzID0gT2JqZWN0LmtleXMob2JqZWN0c1swXS5wbSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5kZXhlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbmFtZSA9IHBhcmFtZXRlcnNbaW5kZXhlc1tpXV07XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IG9iamVjdHNbMF0ucG1bcGFyYW1ldGVyc1tpbmRleGVzW2ldXV07XHJcbiAgICAgICAgICAgIGxldCBvYmplY3RUeXBlID0gb2JqZWN0c1swXS5fY2xhc3M7XHJcblxyXG4gICAgICAgICAgICBzZXRQYXJhbWV0ZXIoaW5kZXhlc1tpXSwgZml4UGFyYW1ldGVyVmFsdWUobmFtZSwgdmFsdWUsIG9iamVjdFR5cGUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhdGNoQU5JKCkge1xyXG4gICAgbGV0IG9sZEFuaSA9IGFuaTtcclxuICAgIHdpbmRvdy5hbmkgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBsZXQgbmdwdSA9IG5lZWRfR1VJUGFyYW1zX3VwZGF0ZTtcclxuICAgICAgICBvbGRBbmkoKTtcclxuICAgICAgICBpZiAobmdwdSkge1xyXG4gICAgICAgICAgICBpZiAoYWxlaVNldHRpbmdzLnNob3dTYW1lUGFyYW1ldGVycykgc2V0U2FtZVBhcmFtZXRlcnMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhbGVpTG9nKERFQlVHLCBcIlBhdGNoZWQgQU5JXCIpO1xyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5mdW5jdGlvbiB1cGRhdGVCb3hTcGxpdHRlclNpemUoKSB7XHJcbiAgICBsZXQgb2JqID0gJGlkKFwiZ3VpX29iamJveFwiKTtcclxuICAgIGxldCByZWN0ID0gb2JqLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgbGV0IHN0eWxlID0gc3BsaXR0ZXIyLnN0eWxlO1xyXG4gICAgc3R5bGUuc2V0UHJvcGVydHkoXCJ3aWR0aFwiLCByZWN0LndpZHRoKTtcclxuICAgIHN0eWxlLnNldFByb3BlcnR5KFwibGVmdFwiLCByZWN0LngpO1xyXG4gICAgc3R5bGUuc2V0UHJvcGVydHkoXCJ0b3BcIiwgcmVjdC5ib3R0b20pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRPYmpCb3hSZXNpemUoKSB7XHJcbiAgICBsZXQgb2JqID0gJGlkKFwiZ3VpX29iamJveFwiKTtcclxuICAgIGxldCBzcGxpdHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB3aW5kb3cuc3BsaXR0ZXIyID0gc3BsaXR0ZXI7XHJcbiAgICBsZXQgc3R5bGUgPSBzcGxpdHRlci5zdHlsZTtcclxuICAgICRpZChcImZsb2F0dGFnXCIpLmFwcGVuZENoaWxkKHNwbGl0dGVyKTtcclxuXHJcbiAgICBzdHlsZS5zZXRQcm9wZXJ0eShcInBvc2l0aW9uXCIsIFwiYWJzb2x1dGVcIik7XHJcbiAgICBzdHlsZS5zZXRQcm9wZXJ0eShcImhlaWdodFwiLCBcIjVweFwiKTtcclxuICAgIHN0eWxlLnNldFByb3BlcnR5KFwiY3Vyc29yXCIsIFwicy1yZXNpemVcIik7XHJcblxyXG4gICAgdXBkYXRlQm94U3BsaXR0ZXJTaXplKCk7XHJcblxyXG4gICAgbGV0IHNwbGl0dGVyQ2xpY2tpbmcgPSBmYWxzZTtcclxuICAgIHNwbGl0dGVyLm9ubW91c2Vkb3duID0gKChlKSA9PiB7c3BsaXR0ZXJDbGlja2luZyA9IHRydWV9KTtcclxuICAgIFJPT1RfRUxFTUVOVC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoZSkgPT4ge3NwbGl0dGVyQ2xpY2tpbmcgPSBmYWxzZX0pO1xyXG4gICAgUk9PVF9FTEVNRU5ULmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgKGUpID0+IHtcclxuICAgICAgICBpZiAoIXNwbGl0dGVyQ2xpY2tpbmcpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IG5ld19oZWlnaHQgPSBlLmNsaWVudFkgLSA5MDtcclxuICAgICAgICBvYmouc3R5bGUuaGVpZ2h0ID0gbmV3X2hlaWdodDtcclxuICAgICAgICB1cGRhdGVCb3hTcGxpdHRlclNpemUoKTtcclxuICAgICAgICBTaG93SGlkZU9iamVjdEJveCgpO1xyXG4gICAgICAgIFNob3dIaWRlT2JqZWN0Qm94KCk7XHJcbiAgICB9KTtcclxuICAgIGFsZWlMb2coREVCVUcsIFwiQWRkZWQgc3BsaXR0ZXIgZm9yIG9iamVjdCBib3guXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXRjaF9tX2Rvd24oKSB7XHJcbiAgICBsZXQgb2dfbWRvd24gPSB3aW5kb3cubV9kb3duO1xyXG4gICAgd2luZG93Lm1fZG93biA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBsZXQgcHJldmlvdXNFc0xlbmd0aCA9IGVzLmxlbmd0aDtcclxuICAgICAgICBvZ19tZG93bihlKTtcclxuXHJcbiAgICAgICAgbGV0IG9jbSA9IE9iamVjdENvbm5lY3Rpb25NYXBwaW5nO1xyXG4gICAgICAgIGxldCB1dGVtID0gdWlkVG9FbGVtZW50TWFwO1xyXG4gICAgICAgIGxldCBhZGRlZE9iamVjdHMgPSBbXTtcclxuXHJcbiAgICAgICAgaWYgKGVzLmxlbmd0aCA+IHByZXZpb3VzRXNMZW5ndGgpIHsgLy8gTmV3IGVsZW1lbnQgaXMgbWFkZS5cclxuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBlc1tlcy5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgaWYgKCEoXCJ4XCIgaW4gZWxlbWVudC5wbSkpIHJldHVybjtcclxuICAgICAgICAgICAgLy8gV2Ugbm93IGhhdmUgdG8gZG8gam9iIG9mIGZpeFBvcywgd2UgY2Fubm90IHNldCBmaXhQb3MgdG8gaGF2ZSBpdCBhcmd1bWVudC1iYXNlZCBkaXJlY3RseSBiZWNhdXNlIG9mIHNjb3BpbmdcclxuICAgICAgICAgICAgLy8gU28gd2UgaGF2ZSB0byBkbyBpdCBvdXJzZWx2ZXMuXHJcbiAgICAgICAgICAgIGxldCBwbSA9IGVsZW1lbnQucG07XHJcbiAgICAgICAgICAgIGxldCByb3VuZCA9IGZ1bmN0aW9uKG51bSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQobnVtIC8gR1JJRF9TTkFQUElORykgKiBHUklEX1NOQVBQSU5HXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcG0ueCA9IHJvdW5kKHBtLngpO1xyXG4gICAgICAgICAgICBwbS55ID0gcm91bmQocG0ueSk7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50Ll9pc3Jlc2l6YWJsZSkge1xyXG4gICAgICAgICAgICAgICAgcG0udyA9IHJvdW5kKHBtLncpO1xyXG4gICAgICAgICAgICAgICAgcG0uaCA9IHJvdW5kKHBtLmgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIE9DTSBtYXBwaW5nLlxyXG4gICAgICAgICAgICBpZihhbGVpU2V0dGluZ3Mub2NtRW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gcHJldmlvdXNFc0xlbmd0aDsgaSA8IGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2NtW2VzW2ldLnBtLnVpZF0gPSB7XCJieVwiOiBbXSwgXCJ0b1wiOiBbXX07XHJcbiAgICAgICAgICAgICAgICAgICAgdXRlbVtlc1tpXS5wbS51aWRdID0gZXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkZWRPYmplY3RzLnB1c2goZXNbaV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIE5vdyB3ZSBqdXN0IHVwZGF0ZS5cclxuICAgICAgICAgICAgd2luZG93Lm5lZWRfR1VJUGFyYW1zX3VwZGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIFVwZGF0ZUdVSU9iamVjdHNMaXN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgb2JqIG9mIGFkZGVkT2JqZWN0cykgX19PQ01fSGFuZGxlT2JqZWN0KG9iaik7IC8vIEkga25vdyBJIGRvbid0IGhhdmUgdG8gZG8gdGhpcyBidXQgSSBhbSBjYXJlbGVzcyByaWdodCBub3cuXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFJlb3JkZXJUcmlnZ2VyUHJvcGVydHkocmVzdWx0KSB7XHJcbiAgICBsZXQgZXhlY3V0ZSA9IHJlc3VsdC5wbS5leGVjdXRlO1xyXG4gICAgZXhlY3V0ZSA9IGV4ZWN1dGUgPyBleGVjdXRlIDogZmFsc2U7XHJcblxyXG4gICAgZGVsZXRlIHJlc3VsdC5wbS5leGVjdXRlO1xyXG5cclxuICAgIGxldCBlbnRyaWVzID0gT2JqZWN0LmVudHJpZXMocmVzdWx0LnBtKTtcclxuICAgIGVudHJpZXMuc3BsaWNlKDUsIDAsIFtcImV4ZWN1dGVcIiwgZXhlY3V0ZV0pO1xyXG4gICAgcmVzdWx0LnBtID0gT2JqZWN0LmZyb21FbnRyaWVzKGVudHJpZXMpO1xyXG59XHJcblxyXG53aW5kb3cuU2VsZWN0ZWRPYmplY3RzID0gW107XHJcblxyXG5mdW5jdGlvbiBwYXRjaEVudGl0eUNsYXNzKCkge1xyXG4gICAgZnVuY3Rpb24gY2xlYW5VcFNPKCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoY2xlYW5VcFNPLCA1ICogMTAwMCk7XHJcbiAgICAgICAgLy8gTWFudWFsbHkgdHJpZ2dlciBzZWxlY3QgY2hhbmdlIGlmIHJlcXVpcmVkLlxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBTZWxlY3RlZE9iamVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGUgPSBTZWxlY3RlZE9iamVjdHNbaV07XHJcbiAgICAgICAgICAgIGlmKCFlLnNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICBlLnNlbGVjdENoYW5nZShmYWxzZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBGb3Igc29tZSByZWFzb24sIHRoZXJlIGNhbiBiZSB1bnNlbGVjdGVkIG9iamVjdHMgaW4gU2VsZWN0ZWRPYmplY3RzLCBzdGlsbCwgYW5kIHNvbWV0aW1lcyBpbmRleGVzIGNhbiBiZSBvZmYgYm91bmQsIHdlIGhhdmUgdG8gZml4IGl0IHRvby5cclxuICAgIHNldFRpbWVvdXQoY2xlYW5VcFNPLCA1ICogMTAwMCk7XHJcblxyXG4gICAgbGV0IG9nX0UgPSBFO1xyXG4gICAgd2luZG93LkUgPSBmdW5jdGlvbihfY2xhc3MpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gbmV3IG9nX0UoX2NsYXNzKTtcclxuXHJcbiAgICAgICAgLy8gQWRkaW5nIHByb3BlcnR5LlxyXG4gICAgICAgIGlmKF9jbGFzcyA9PSBcIndhdGVyXCIpIHJlc3VsdC5wbS5hdHRhY2ggPSAtMTtcclxuICAgICAgICBlbHNlIGlmKF9jbGFzcyA9PSBcImRlY29yXCIpIHJlc3VsdC5wbS50ZXh0ID0gXCJIZWxsbyBXb3JsZCFcIjtcclxuICAgICAgICBlbHNlIGlmKF9jbGFzcyA9PSBcInRyaWdnZXJcIikge1xyXG4gICAgICAgICAgICBSZW9yZGVyVHJpZ2dlclByb3BlcnR5KHJlc3VsdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoX2NsYXNzID09IFwicmVnaW9uXCIpIHJlc3VsdC5wbS51c2VzX3RpbWVyID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHJlc3VsdC5maXhQb3MgPSBmdW5jdGlvbigpIHt9OyAvLyBGb3IgcHJvcGVyIHNuYXBwaW5nLlxyXG4gICAgICAgIHJlc3VsdC5zZWxlY3RDaGFuZ2UgPSBmdW5jdGlvbihpc1NlbGVjdGVkLCBmb3JjZSA9IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGlmKChpc1NlbGVjdGVkICYmICghcmVzdWx0LnNlbGVjdGVkIHx8IGZvcmNlKSkpIHtcclxuICAgICAgICAgICAgICAgIFNlbGVjdGVkT2JqZWN0cy5wdXNoKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYoIWlzU2VsZWN0ZWQgJiYgKHJlc3VsdC5zZWxlY3RlZCB8fCBmb3JjZSkpIHtcclxuICAgICAgICAgICAgICAgIFNlbGVjdGVkT2JqZWN0cy5zcGxpY2UoU2VsZWN0ZWRPYmplY3RzLmluZGV4T2YocmVzdWx0KSwgMSk7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gUHJveHlTZXQoXywga2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICBpZihrZXkgPT0gXCJzZWxlY3RlZFwiKSByZXN1bHQuc2VsZWN0Q2hhbmdlKHZhbHVlKTtcclxuICAgICAgICAgICAgZWxzZSByZXN1bHRba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlc3VsdC5SZW1vdmUgPSAoKSA9PiB7IC8vIEJldHRlciBiZSBzYWZlLi4uXHJcbiAgICAgICAgICAgIE5ld05vdGUoYEFMRUk6IFRoaXMgYWJzb2x1dGVseSBzaG91bGQgbm90IGhhcHBlbiwgcGxlYXNlIHJlcG9ydCB0byBBTEVJIGRldmVsb3BlcnMsIGVycm9yOiBFLlJlbW92ZSBnb3QgY2FsbGVkIHdoZW4gaXQgc2hvdWxkbid0IGJlYCwgYCNGRjAwMDBgKTtcclxuICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbGV0IHByb3h5ID0gbmV3IFByb3h5KHJlc3VsdCwge1xyXG4gICAgICAgICAgICBzZXQ6IFByb3h5U2V0XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gcHJveHk7XHJcbiAgICB9XHJcbiAgICBhbGVpTG9nKERFQlVHLCBcIlBhdGNoZWQgZW50aXR5LlwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gUGFzdGVGcm9tQ2xpcEJvYXJkKENsaXBOYW1lKSB7XHJcbiAgICB2YXIgY2xpcGJvYXJkID0gbmV3IE9iamVjdCgpO1xyXG4gICAgaWYgKHNlc3Npb25TdG9yYWdlW0NsaXBOYW1lXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBjbGlwYm9hcmQgPSB1bnNlcmlhbGl6ZShzZXNzaW9uU3RvcmFnZVtDbGlwTmFtZV0pO1xyXG4gICAgbGN6KCk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGlmIChlc1tpXS5leGlzdHMpIHtcclxuICAgICAgICAgICAgaWYgKGVzW2ldLnNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICBsZG4oJ2VzWycgKyBpICsgJ10uc2VsZWN0ZWQ9ZmFsc2U7Jyk7XHJcbiAgICAgICAgICAgICAgICBsbmQoJ2VzWycgKyBpICsgJ10uc2VsZWN0ZWQ9dHJ1ZTsnKTtcclxuICAgICAgICAgICAgICAgIGVzW2ldLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IHZhciBtaW5feCA9IDA7XHJcbiAgICB2YXIgbWF4X3ggPSAwO1xyXG4gICAgdmFyIG1pbl95ID0gMDtcclxuICAgIHZhciBtYXhfeSA9IDA7XHJcbiAgICBpID0gMDtcclxuICAgIHZhciBmcm9tX29iaiA9IGVzLmxlbmd0aDtcclxuICAgIHdoaWxlICh0eXBlb2YoY2xpcGJvYXJkW2ldKSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICB2YXIgbmV3cGFyYW0gPSBlcy5sZW5ndGg7XHJcbiAgICAgICAgbGRuKCdlc1snICsgbmV3cGFyYW0gKyAnXS5leGlzdHM9dHJ1ZTsnKTtcclxuICAgICAgICBsbmQoJ2VzWycgKyBuZXdwYXJhbSArICddLmV4aXN0cz1mYWxzZTsnKTtcclxuICAgICAgICBlc1tuZXdwYXJhbV0gPSBuZXcgRShjbGlwYm9hcmRbaV0uX2NsYXNzKTtcclxuICAgICAgICBmb3IgKGxldCBwYXJhbSBpbiBjbGlwYm9hcmRbaV0pIHtcclxuICAgICAgICAgICAgZXNbbmV3cGFyYW1dW3BhcmFtXSA9IGNsaXBib2FyZFtpXVtwYXJhbV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YoZXNbbmV3cGFyYW1dLnBtLngpICE9PSAndW5kZWZpbmVkJylcclxuICAgICAgICAgICAgaWYgKHR5cGVvZihlc1tuZXdwYXJhbV0ucG0ueSkgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluX3ggPSBlc1tuZXdwYXJhbV0ucG0ueDtcclxuICAgICAgICAgICAgICAgICAgICBtaW5feSA9IGVzW25ld3BhcmFtXS5wbS55O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heF94ID0gZXNbbmV3cGFyYW1dLnBtLng7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4X3kgPSBlc1tuZXdwYXJhbV0ucG0ueTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mKGVzW25ld3BhcmFtXS5wbS53KSAhPT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YoZXNbbmV3cGFyYW1dLnBtLmgpICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluX3ggKz0gZXNbbmV3cGFyYW1dLnBtLncgLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4X3ggKz0gZXNbbmV3cGFyYW1dLnBtLncgLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluX3kgKz0gZXNbbmV3cGFyYW1dLnBtLmggLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4X3kgKz0gZXNbbmV3cGFyYW1dLnBtLmggLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbl94ID0gTWF0aC5taW4obWluX3gsIGVzW25ld3BhcmFtXS5wbS54KTtcclxuICAgICAgICAgICAgICAgICAgICBtaW5feSA9IE1hdGgubWluKG1pbl95LCBlc1tuZXdwYXJhbV0ucG0ueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4X3ggPSBNYXRoLm1heChtYXhfeCwgZXNbbmV3cGFyYW1dLnBtLngpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heF95ID0gTWF0aC5tYXgobWF4X3ksIGVzW25ld3BhcmFtXS5wbS55KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mKGVzW25ld3BhcmFtXS5wbS53KSAhPT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YoZXNbbmV3cGFyYW1dLnBtLmgpICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4X3ggPSBNYXRoLm1heChtYXhfeCwgZXNbbmV3cGFyYW1dLnBtLnggKyBlc1tuZXdwYXJhbV0ucG0udyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhfeSA9IE1hdGgubWF4KG1heF95LCBlc1tuZXdwYXJhbV0ucG0ueSArIGVzW25ld3BhcmFtXS5wbS5oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGkrKztcclxuICAgIH1cclxuICAgIGxkbignbV9kcmFnX3NlbGVjdGVkPXRydWU7Jyk7XHJcbiAgICBsZG4oJ3BhaW50X2RyYXdfbW9kZT10cnVlOycpO1xyXG4gICAgbGRuKCdxdWlja19waWNrX2lnbm9yZV9vbmVfY2xpY2s9dHJ1ZTsnKTtcclxuICAgIGxuZCgnbV9kcmFnX3NlbGVjdGVkPWZhbHNlOycpO1xyXG4gICAgbG5kKCdwYWludF9kcmF3X21vZGU9ZmFsc2U7Jyk7XHJcbiAgICBsbmQoJ3F1aWNrX3BpY2tfaWdub3JlX29uZV9jbGljaz1mYWxzZTsnKTtcclxuICAgIGxkaXMgPSB0cnVlO1xyXG4gICAgcGFpbnRfZHJhd19tb2RlID0gdHJ1ZTtcclxuICAgIHF1aWNrX3BpY2tfaWdub3JlX29uZV9jbGljayA9IHRydWU7XHJcbiAgICBsbWRyd2EgPSBsbXdhO1xyXG4gICAgbG1kcndiID0gbG13YjtcclxuICAgIC8vIE9yaWdpbmFsIGNvZGUgYnkgUHJvc3VcclxuICAgIGxldCBtX3Bvc194ID0gbG13YTtcclxuICAgIGxldCBtX3Bvc195ID0gbG13YjtcclxuXHJcbiAgICBtX2RyYWdfeCA9IG1vdXNlX3g7XHJcbiAgICBtX2RyYWdfeSA9IG1vdXNlX3k7XHJcbiAgICBsZXQgbV9kb3duX3ggPSBtX3Bvc194O1xyXG4gICAgbGV0IG1fZG93bl95ID0gbV9wb3NfeTtcclxuICAgIHZhciB4MSA9IE1hdGgucm91bmQoKG1fcG9zX3gpIC8gR1JJRF9TTkFQUElORykgKiBHUklEX1NOQVBQSU5HO1xyXG4gICAgdmFyIHkxID0gTWF0aC5yb3VuZCgobV9wb3NfeSkgLyBHUklEX1NOQVBQSU5HKSAqIEdSSURfU05BUFBJTkc7XHJcbiAgICB2YXIgbG9feCA9IE1hdGgucm91bmQoKHgxIC0gKG1pbl94ICsgbWF4X3gpIC8gMikgLyBHUklEX1NOQVBQSU5HKSAqIEdSSURfU05BUFBJTkc7XHJcbiAgICB2YXIgbG9feSA9IE1hdGgucm91bmQoKHkxIC0gKG1pbl95ICsgbWF4X3kpIC8gMikgLyBHUklEX1NOQVBQSU5HKSAqIEdSSURfU05BUFBJTkc7XHJcblxyXG4gICAgbGV0IG9jbSA9IE9iamVjdENvbm5lY3Rpb25NYXBwaW5nO1xyXG4gICAgbGV0IHV0ZW0gPSB1aWRUb0VsZW1lbnRNYXA7XHJcblxyXG4gICAgbGV0IGFkZGVkT2JqZWN0cyA9IFtdO1xyXG5cclxuICAgIGZvciAodmFyIGkyID0gZnJvbV9vYmo7IGkyIDwgZXMubGVuZ3RoOyBpMisrKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZihlc1tpMl0ucG0udWlkKSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgdmFyIG9sZF91aWQgPSBlc1tpMl0ucG0udWlkO1xyXG4gICAgICAgICAgICBlc1tpMl0uZXhpc3RzID0gdHJ1ZTtcclxuICAgICAgICAgICAgZXNbaTJdLnBtLnVpZCA9IFJhbmRvbWl6ZU5hbWUoZXNbaTJdLnBtLnVpZCk7XHJcblxyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaTMgPSBmcm9tX29iajsgaTMgPCBlcy5sZW5ndGg7IGkzKyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHBhcmFtIGluIGVzW2kzXS5wbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVzW2kzXS5wbVtwYXJhbV0gPSBVVUlEUl9SZXBsYWNlKGVzW2kzXS5wbVtwYXJhbV0sIG9sZF91aWQsIGVzW2kyXS5wbS51aWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihhbGVpU2V0dGluZ3Mub2NtRW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgb2NtW2VzW2kyXS5wbS51aWRdID0ge1wiYnlcIjogW10sIFwidG9cIjogW119O1xyXG4gICAgICAgICAgICAgICAgdXRlbVtlc1tpMl0ucG0udWlkXSA9IGVzW2kyXTtcclxuICAgICAgICAgICAgICAgIGFkZGVkT2JqZWN0cy5wdXNoKGVzW2kyXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZihlc1tpMl0ucG0ueCkgIT09ICd1bmRlZmluZWQnKVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mKGVzW2kyXS5wbS55KSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIGxuZCgnZXNbJyArIGkyICsgJ10ucG0ueD0nICsgZXNbaTJdLnBtLnggKyAnOycpO1xyXG4gICAgICAgICAgICAgICAgbG5kKCdlc1snICsgaTIgKyAnXS5wbS55PScgKyBlc1tpMl0ucG0ueSArICc7Jyk7XHJcbiAgICAgICAgICAgICAgICBlc1tpMl0ucG0ueCArPSBsb194O1xyXG4gICAgICAgICAgICAgICAgZXNbaTJdLnBtLnkgKz0gbG9feTtcclxuICAgICAgICAgICAgICAgIGVzW2kyXS5maXhQb3MoKTtcclxuICAgICAgICAgICAgICAgIGxkbignZXNbJyArIGkyICsgJ10ucG0ueD0nICsgZXNbaTJdLnBtLnggKyAnOycpO1xyXG4gICAgICAgICAgICAgICAgbGRuKCdlc1snICsgaTIgKyAnXS5wbS55PScgKyBlc1tpMl0ucG0ueSArICc7Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIEFnYWluIGJ5IFByb3N1XHJcbiAgICB4MSA9IE1hdGgucm91bmQoKG1fcG9zX3ggLSBtX2Rvd25feCkgLyBHUklEX1NOQVBQSU5HKSAqIEdSSURfU05BUFBJTkc7XHJcbiAgICB5MSA9IE1hdGgucm91bmQoKG1fcG9zX3kgLSBtX2Rvd25feSkgLyBHUklEX1NOQVBQSU5HKSAqIEdSSURfU05BUFBJTkc7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGVzW2ldLl9pc3BoeXNpY2FsICYmIGVzW2ldLmV4aXN0cyAmJiBlc1tpXS5zZWxlY3RlZCAmJiAoTWF0Y2hMYXllcihlc1tpXSkgfHwgcGFpbnRfZHJhd19tb2RlKSkge1xyXG4gICAgICAgICAgICBlc1tpXS5wbS54ICs9IHgxO1xyXG4gICAgICAgICAgICBlc1tpXS5wbS55ICs9IHkxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG1fZG93bl94ICs9IHgxO1xyXG4gICAgbV9kb3duX3kgKz0geTE7XHJcbiAgICBsZnooZmFsc2UpO1xyXG4gICAgZm9yKGxldCBvYmogb2YgYWRkZWRPYmplY3RzKSBfX09DTV9IYW5kbGVPYmplY3Qob2JqKTtcclxuICAgIGFzc2lnbk9iamVjdElEcygpO1xyXG4gICAgYXNzaWduT2JqZWN0UHJpb3JpdHkoKTtcclxuICAgIHdpbmRvdy5uZWVkX3JlZHJhdyA9IHRydWU7XHJcbiAgICB3aW5kb3cubmVlZF9HVUlQYXJhbXNfdXBkYXRlID0gdHJ1ZTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTZXJ2ZXJSZXF1ZXN0X2hhbmRsZU1hcERhdGEobWFwQ29kZSkge1xyXG4gICAgLy8gQnJhbmNoIG9mIHBhdGNoU2VydmVyUmVxdWVzdFxyXG4gICAgLy8gTWFkZSB0byBkZWFsIHdpdGggbWFwIHNvdXJjZSByZWxhdGVkIHRoaW5ncy5cclxuICAgIGFsZWlMb2coREVCVUcsIFwiUGFyc2luZyBtYXAgc291cmNlIG5vdy5cIik7XHJcblxyXG4gICAgY29uc3Qgb2JqZWN0S2V5VmFsdWVSZWdleCA9IC8oXFx3Kyk9KCgtP1xcZCsoXFwuXFxkKyk/KXwoXCJbIC1+XSpcIil8dHJ1ZXxmYWxzZSkvO1xyXG4gICAgY29uc3Qgb2JqZWN0Q3JlYXRpb25SZWdleCA9IC9xPWVzXFxbXFxkK1xcXT1uZXcgRVxcKFwiKFxcdyspXCJcXCkvO1xyXG5cclxuICAgIGxldCBleHByZXNzaW9ucyA9IG1hcENvZGUuc3BsaXQoXCI7XFxuXCIpO1xyXG5cclxuICAgIGxldCBjdXJyZW50RWxlbWVudCA9IG51bGw7XHJcblxyXG4gICAgd2luZG93LmVzID0gbmV3IEFycmF5KCk7IC8vIGNsZWFyLlxyXG4gICAgbGV0IGluZGV4ID0gMjsgLy8gV2Ugc2tpcCB2YXIgcTsgYW5kIGVzID0gbmV3IEFycmF5KCk7XHJcbiAgICBmb3IgKDtpbmRleCA8IGV4cHJlc3Npb25zLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgIGxldCBleHByZXNzaW9uID0gZXhwcmVzc2lvbnNbaW5kZXhdO1xyXG5cclxuICAgICAgICAvLyBTa2lwIGlmIGl0J3MganVzdCBvbmx5IHRhYiBvciBuZXdsaW5lc1xyXG4gICAgICAgIGlmKGV4cHJlc3Npb24ucmVwbGFjZUFsbChcIlxcblwiLCBcIlwiKS5yZXBsYWNlQWxsKFwiXFx0XCIsIFwiXCIpLmxlbmd0aCA9PSAwKSB7Y29udGludWV9O1xyXG5cclxuICAgICAgICAvLyBNYXAgSUQgcmVsYXRlZCBzdHVmZi5cclxuICAgICAgICBpZiAoZXhwcmVzc2lvbi5pbmRleE9mKFwibWFwaWQgPSAnXCIpICE9IC0xKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5tYXBpZCA9IGV4cHJlc3Npb24uc3BsaXQoXCIgPSBcIilbMV0uc2xpY2UoMSwgLTEpO1xyXG4gICAgICAgICAgICBtYXBpZF9maWVsZC52YWx1ZSA9IG1hcGlkO1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZXhwcmVzc2lvbiA9PSBcIlxcdFxcdG1hcGlkX2ZpZWxkLnZhbHVlID0gbWFwaWRcIikge2NvbnRpbnVlO31cclxuICAgICAgICBlbHNlIGlmIChleHByZXNzaW9uLmluZGV4T2YoXCJtYXByaWdodHMuaW5uZXJIVE1MPSdcIikgIT0gLTEpIHtcclxuICAgICAgICAgICAgbGV0IHJpZ2h0cyA9IGV4cHJlc3Npb24uc3BsaXQoXCI7XCIpWzBdLnNwbGl0KFwiLmlubmVySFRNTD1cIilbMV0uc2xpY2UoMSwgLTEpO1xyXG4gICAgICAgICAgICBtYXByaWdodHMudmFsdWUgPSByaWdodHM7XHJcbiAgICAgICAgICAgIE5ld05vdGUoYE1hcCAnJHttYXBpZH0nIGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSBsb2FkZWQuYCwgbm90ZV9nb29kKTtcclxuICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQWN0dWFsIG1hcGRhdGEuXHJcbiAgICAgICAgaWYoZXhwcmVzc2lvbi5pbmRleE9mKFwiO3E9cS5wbTtcIikgIT0gLTEpIHsgLy8gQ3JlYXRpb24gd2hpY2ggaXMgcT1lc1suLi5dPW5ldyBFKC4uLik7cT1xLnBtO3EuKC4uLik9KC4uLik7XHJcbiAgICAgICAgICAgIGxldCBjcmVhdGlvbiA9IG9iamVjdENyZWF0aW9uUmVnZXguZXhlYyhleHByZXNzaW9uKTtcclxuICAgICAgICAgICAgY3VycmVudEVsZW1lbnQgPSBuZXcgRShjcmVhdGlvblsxXSk7XHJcbiAgICAgICAgICAgIGVzW2VzLmxlbmd0aF0gPSBjdXJyZW50RWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgIGxldCBzcGx0ID0gZXhwcmVzc2lvbi5zcGxpdChcIjtcIik7XHJcbiAgICAgICAgICAgIGlmIChzcGx0Lmxlbmd0aCA+IDMpIHtcclxuICAgICAgICAgICAgICAgIC8vIFRoZXJlIGlzIHN1cHBvc2VkIHRvIGJlIG9ubHkgMyA7J3NcclxuICAgICAgICAgICAgICAgIC8vIGluaXRpYWxpemluZztzZXR0aW5nO2ZpcnN0UHJvcGVydHlcclxuICAgICAgICAgICAgICAgIC8vIEFzc3VtaW5nIHRoYXQgc2VydmVyIG9ubHkgZ2l2ZXMgZmlyc3QgcHJvcGVydHkgYW5kIGRvZXMgbm90IHNlbmQgbW9yZSB0aGFuIDEgaW4gY3JlYXRpb24gbGluZVxyXG4gICAgICAgICAgICAgICAgYWxlaUxvZyhXQVJOLCBgRXhwZWN0ZWQgMyBpdGVtcywgZ290ICR7c3BsdC5sZW5ndGh9IC0gJHtzcGx0fWApO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZXhwcmVzc2lvbiA9IHNwbHRbMl07XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBLZXkgdmFsdWVcclxuICAgICAgICAvLyBJbiBmb3JtYXQgb2YgcS4oX19fKT0oX19fKTtcclxuICAgICAgICBsZXQgbWF0Y2hLZXlWYWx1ZSA9IG9iamVjdEtleVZhbHVlUmVnZXguZXhlYyhleHByZXNzaW9uKTtcclxuXHJcbiAgICAgICAgaWYgKG1hdGNoS2V5VmFsdWUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgYWxlaUxvZyhXQVJOLCBgVW5hYmxlIHRvIGZpZ3VyZSBvdXQgd2hhdCBraW5kIG9mIGNvZGUgaXMgXCIke2V4cHJlc3Npb259XCIsIHlvdSBNSUdIVCBoYXZlIGlzc3Vlcy5gKTtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBrZXkgPSBtYXRjaEtleVZhbHVlWzFdO1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IG1hdGNoS2V5VmFsdWVbMl0ucmVwbGFjZUFsbChcIlxcXFwvXCIsIFwiL1wiKTtcclxuICAgICAgICBpZiAodmFsdWVbMF0gIT0gJ1wiJykgeyAvLyBOb3QgYSBzdHJpbmcuXHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PSBcInRydWVcIikgdmFsdWUgPSB0cnVlO1xyXG4gICAgICAgICAgICBlbHNlIGlmKHZhbHVlID09IFwiZmFsc2VcIikgdmFsdWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZWxzZSBpZih2YWx1ZS5pbmRleE9mKFwiLlwiKSAhPSAtMSkgdmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKTtcclxuICAgICAgICAgICAgZWxzZSB2YWx1ZSA9IHBhcnNlSW50KHZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBJcyBhIHN0cmluZy4gV2UganVzdCBzdHJpcCBxdW90YXRpb24gbWFya3MgYW5kIGZpeCBhcG9zdHJvcGhlcy5cclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgxLCAtMSkucmVwbGFjZUFsbChcIlxcXFwnXCIsIFwiJ1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3VycmVudEVsZW1lbnQucG1ba2V5XSA9IHZhbHVlO1xyXG5cclxuICAgIH1cclxuICAgIGlmKGFsZWlTZXR0aW5ncy5leHRlbmRlZFRyaWdnZXJzKSBwYXJzZUV4dGVuZGVkVHJpZ2dlcnMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlU2VydmVyUmVxdWVzdFJlc3BvbnNlKHJlcXVlc3QsIG9wZXJhdGlvbiwgcmVzcG9uc2UpIHtcclxuICAgIGlmIChyZXNwb25zZS5pbmRleE9mKFwidmFyIGVzID0gbmV3IEFycmF5KCk7XCIpICE9IC0xKSB7XHJcbiAgICAgICAgd2luZG93LlNlbGVjdGVkT2JqZWN0cyA9IFtdO1xyXG4gICAgICAgIE9DTV9MT0FERUQgPSBmYWxzZTtcclxuICAgICAgICBTZXJ2ZXJSZXF1ZXN0X2hhbmRsZU1hcERhdGEocmVzcG9uc2UpO1xyXG4gICAgICAgIENyZWF0ZUNvbm5lY3Rpb25NYXBwaW5nKCk7XHJcbiAgICB9ZWxzZSBpZiAocmVzcG9uc2UuaW5kZXhPZihcImtub3dubWFwcyA9IFtcIikgIT09IC0xKSB7XHJcbiAgICAgICAgd2luZG93Lmtub3dubWFwcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IG1hcCBvZiByZXNwb25zZS5tYXRjaCgvXCIoLio/KVwiL2cpKSB7XHJcbiAgICAgICAgICAgIGtub3dubWFwcy5wdXNoKG1hcC5zbGljZSgxLCAtMSkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFsZWlMb2coREVCVUcsIGBVcGRhdGVkIGtub3dubWFwcyB3aXRoICR7a25vd25tYXBzLmxlbmd0aH0gbWFwc2ApO1xyXG4gICAgfWVsc2Uge1xyXG4gICAgICAgIGFsZWlMb2coREVCVUcyLCBgRXZhbGluZyBmb3IgcmVxdWVzdCAke0FOU0lfWUVMTE9XfVwiJHtyZXF1ZXN0fVwiJHtBTlNJX1JFU0VUfSB3aXRoIG9wZXJhdGlvbiBvZiAke0FOU0lfWUVMTE9XfVwiJHtvcGVyYXRpb259XCIke0FOU0lfUkVTRVR9OiAke3Jlc3BvbnNlfWApXHJcbiAgICAgICAgdHJ5IHtKU19ldmFsKHJlc3BvbnNlKTt9XHJcbiAgICAgICAgY2F0Y2goZSkge05ld05vdGUoXCJFdmFsIGVycm9yIVwiLCBub3RlX2JhZCk7IGNvbnNvbGUuZXJyb3IoZSk7IGFsZWlMb2coSU5GTywgYEV2YWwgRXJyb3IgZnJvbSAke3JlcXVlc3R9LCBmb3Igb3AgJHtvcGVyYXRpb259IHdob3NlIHJlc3BvbnNlIGlzICR7cmVzcG9uc2V9YCl9XHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYWtlUmVxdWVzdChtZXRob2QsIHVybCwgZGF0YSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeGhyLm9wZW4obWV0aG9kLCB1cmwpO1xyXG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC10eXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO1xyXG4gICAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA+PSAyMDAgJiYgdGhpcy5zdGF0dXMgPCAzMDApIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoe3N0YXR1czogMjAwLCByZXNwb25zZTogeGhyLnJlc3BvbnNlfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzVGV4dDogeGhyLnN0YXR1c1RleHRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmVqZWN0KHtcclxuICAgICAgICAgICAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHhoci5zZW5kKGRhdGEpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZURlY29yTGlzdCgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IGxpc3RfbmF0aXZlID0gJGlkKFwibGlzdF9uYXRpdmVcIik7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IEFMRUlfZGVjb3JzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBkZWNvciA9IEFMRUlfZGVjb3JzW2ldO1xyXG4gICAgICAgICAgICBsZXQgZGVjb3JfbW9kZWwgPSBkZWNvclswXTtcclxuICAgICAgICAgICAgbGV0IGRlY29yX25hbWUgPSBkZWNvclsxXTtcclxuICAgICAgICAgICAgbGV0IGRlY29yX2ltYWdlID0gZGVjb3JbMl07XHJcbiAgICAgICAgICAgIGxpc3RfbmF0aXZlLmlubmVySFRNTCArPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImltZ19vcHRpb25cIiBvbkNsaWNrPVwiQ3VzdG9tSW1hZ2VTZWxlY3RlZCgnJHtkZWNvcl9tb2RlbH0nLCAnJHtkZWNvcl9uYW1lfScgKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWdkaXZcIiBzdHlsZT1cImJhY2tncm91bmQ6dXJsKCR7ZGVjb3JfaW1hZ2V9KVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAke2RlY29yX25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgYFxyXG4gICAgICAgIH1cclxuICAgICAgICBhbGVpTG9nKERFQlVHLCBcIlVwZGF0ZWQgZGVjb3IgbGlzdC5cIik7XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKSB7fSAvLyBXZSBhc3N1bWUgd2UgYXJlIG5vdCBpbiBkZWNvciBsaXN0IHlldC5cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gQUxFSV9TZXJ2ZXJSZXF1ZXN0KHJlcXVlc3QsIG9wZXJhdGlvbiwgY2FsbGJhY2sgPSBudWxsKSB7XHJcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBtYWtlUmVxdWVzdChcIlBPU1RcIiwgYGVfc2VydmVyLnBocD9hPSR7cmVxdWVzdF9hfWAsIHJlcXVlc3QpO1xyXG5cclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT0gMjAwKSB7XHJcbiAgICAgICAgaWYgKG9wZXJhdGlvbiA9PSAnc2F2ZScpIE5ld05vdGUoJ09vcHMhIEVycm9yIG9jY291cmVkIGR1cmluZyBzYXZpbmcuIFVzdWFsbHkgaXQgbWF5IGJlIGhhcHBlbmluZyBkdWUgdG8gY29ubmVjdGlvbiBwcm9ibGVtcy4gTWFwIHdpbGwgYmUgdGVtcG9yYXJ5IHNhdmVkIHRvIHlvdXIgY29tcHV0ZXJcXCdzIExvY2FsU3RvcmFnZScsIG5vdGVfYmFkKTtcclxuICAgICAgICBlbHNlIGlmIChvcGVyYXRpb24gPT0gJ2xvYWQnKSBOZXdOb3RlKCdPb3BzISBFcnJvciBvY2NvdXJlZCBkdXJuaW5nIGxvYWRpbmcuIFVzdWFsbHkgaXQgbWF5IGJlIGhhcHBlbmluZyBkdWUgdG8gY29ubmVjdGlvbiBwcm9ibGVtcy4nLCBub3RlX2JhZClcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBoYW5kbGVTZXJ2ZXJSZXF1ZXN0UmVzcG9uc2UocmVxdWVzdCwgb3BlcmF0aW9uLCByZXNwb25zZS5yZXNwb25zZSk7XHJcbiAgICAgICAgaWYgKHJlcXVlc3QuaW5kZXhPZihcImE9Z2V0X2ltYWdlc1wiKSAhPSAtMSAmJiByZXF1ZXN0LmluZGV4T2YoXCJmb3JfY2xhc3M9ZGVjb3JfbW9kZWxcIikgIT0gLTEpIHtcclxuICAgICAgICAgICAgdXBkYXRlRGVjb3JMaXN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5JbWFnZUNvbnRleHQgPSBJbWFnZUNvbnRleHQ7XHJcbiAgICAgICAgaWYgKG9wZXJhdGlvbiA9PSAnc2F2ZScgfHwgb3BlcmF0aW9uID09ICdsb2FkJykge1xyXG4gICAgICAgICAgICBjaGFuZ2VzX21hZGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKG9wZXJhdGlvbiA9PSAnbG9hZCcpIHtcclxuICAgICAgICAgICAgICAgIG5lZWRfcmVkcmF3ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIG5lZWRfR1VJUGFyYW1zX3VwZGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBDbGVhclVuZG9zKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICBOZXdOb3RlKCdTZXJ2ZXIgcmVzcG9uZHMgd2l0aCB1bmNsZWFyIG1lc3NhZ2UuIExvb2tzIGxpa2Ugb25lIG9mIHJlY2VudCBhY3Rpb25zIHdhc25cXCd0IHN1Y2Nlc3NmdWwuJywgbm90ZV9iYWQpO1xyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjYWxsYmFjayAhPSBudWxsKSB7XHJcbiAgICAgICAgY2FsbGJhY2soKTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IF9zZXJ2ZXJSZXF1ZXN0UGF0Y2hlZCA9IGZhbHNlO1xyXG5mdW5jdGlvbiBwYXRjaFNlcnZlclJlcXVlc3QoKSB7XHJcbiAgICAvLyBUaGlzIGNvZGUganVzdCBleGlzdHMgdG8gcHJldmVudCBsb2dnaW5nIG1vcmUgdGhhbiBvbmNlXHJcbiAgICBpZiAoX3NlcnZlclJlcXVlc3RQYXRjaGVkKSByZXR1cm47XHJcbiAgICBfc2VydmVyUmVxdWVzdFBhdGNoZWQgPSB0cnVlO1xyXG4gICAgLy8gUGF0Y2hlcyBTZXJ2ZXJSZXF1ZXN0IGZ1bmN0aW9uLlxyXG4gICAgLy8gdmFuaWxsYSBTZXJ2ZXJSZXF1ZXN0IGZ1bmN0aW9uIGxpdGVyYWxseSBldmFsKCkncyBldmVyeSBzaW5nbGUgdGhpbmcgdGhhdCBzZXJ2ZXIgc2VuZHMuXHJcbiAgICAvLyBXaGljaCBvcGVucyB1cCB0byBleHBlY3RlZCB2dWxuZXJhYmlsaXRpZXMuXHJcbiAgICAvLyBIb3BlZnVsbHkgaW4gZnV0dXJlLCBBTEVJIHdpbGwgY29tcGxldGVseSBnZXQgcmlkIG9mIGV2YWwuXHJcbiAgICB3aW5kb3cuU2VydmVyUmVxdWVzdCA9IEFMRUlfU2VydmVyUmVxdWVzdDtcclxuICAgIGFsZWlMb2coREVCVUcsIFwiUGF0Y2hlZCBTZXJ2ZXJSZXF1ZXN0XCIpO1xyXG59XHJcblxyXG53aW5kb3cuZXZhbCA9IGZ1bmN0aW9uKGNvZGUpIHsgLy8gVGVtcG9yYXJpbHkgb3ZlcnJpZGluZyBldmFsIHNvIHdlIGNhbiBwYXRjaCBTZXJ2ZXJSZXF1ZXN0IGFzIGVhcmx5IGFzIHBvc3NpYmxlXHJcbiAgICBpZiAod2luZG93LlNlcnZlclJlcXVlc3QgIT09IHVuZGVmaW5lZCkgeyAvLyBTZXJ2ZXJSZXF1ZXN0IGlzIGRlZmluZWQuXHJcbiAgICAgICAgaGFuZGxlU2VydmVyUmVxdWVzdFJlc3BvbnNlKG51bGwsIG51bGwsIGNvZGUpO1xyXG4gICAgICAgIHBhdGNoU2VydmVyUmVxdWVzdCgpO1xyXG4gICAgICAgIC8vIFdlIGFyZSBwcmV0dHkgbXVjaCBkb25lLCB3ZSBoYXZlIHBhdGNoZWQgU2VydmVyUmVxdWVzdCwgc28ganVzdCByb2xsIHdpdGggb2xkIGV2YWwuXHJcbiAgICAgICAgLy8gT2ggYW5kIGEgbm90ZSBmb3IgbXlzZWxmIGluY2FzZSBpIGNvbmZ1c2UgbXlzZWxmOiB2YW5pbGxhIFNlcnZlclJlcXVlc3QgaXMgc3luY2hyb25vdXNcclxuICAgICAgICB3aW5kb3cuZXZhbCA9IEpTX2V2YWw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIElzIG5vdCBkZWZpbmVkLlxyXG4gICAgICAgIC8vIElzIHRoaXMgZXZlbiBwb3NzaWJsZSBpbiBub3JtYWwgY2lyY3Vtc3RhbmNlcz9cclxuICAgICAgICBjb25zb2xlLmxvZyhjb2RlKTtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIGFzc2lnbk9iamVjdElEcygpIHtcclxuICAgIC8vIFRPRE86IFJlZmFjdG9yXHJcbiAgICBsZXQgaWRtYXAgPSB7fTtcclxuICAgIGZvciAobGV0IGVsZW1lbnQgb2YgZXMpIHtcclxuICAgICAgICBpZiAoIWVsZW1lbnQuZXhpc3RzKSBjb250aW51ZTtcclxuICAgICAgICBpZiAoaWRtYXBbZWxlbWVudC5fY2xhc3NdID09PSB1bmRlZmluZWQpIGlkbWFwW2VsZW1lbnQuX2NsYXNzXSA9IC0xO1xyXG5cclxuICAgICAgICBpZG1hcFtlbGVtZW50Ll9jbGFzc10gKz0gMTtcclxuICAgICAgICBlbGVtZW50LmFsZWlJRCA9IGlkbWFwW2VsZW1lbnQuX2NsYXNzXTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBhc3NpZ25PYmplY3RQcmlvcml0eSgpIHtcclxuICAgIC8vIFRPRE86IFJlZmFjdG9yXHJcbiAgICBmb3IgKGxldCBlbGVtZW50IG9mIGVzKSB7XHJcbiAgICAgICAgaWYgKCFlbGVtZW50LmV4aXN0cykgY29udGludWU7XHJcbiAgICAgICAgaWYoZWxlbWVudC5hbGVpUHJpb3JpdHkgPT0gdW5kZWZpbmVkKSBlbGVtZW50LmFsZWlQcmlvcml0eSA9IDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBwcm9wZXJ0eUFwcGxpZWRPYmplY3RzID0gW107XHJcbmZ1bmN0aW9uIEFzc2lnbk9iamVjdFByb3BlcnRpZXMoZSkge1xyXG4gICAgaWYoZS5hbGVpSUQgPT0gdW5kZWZpbmVkKSBhc3NpZ25PYmplY3RJRHMoKTtcclxuICAgIGlmKGUuYWxlaVByaW9yaXR5ID09IHVuZGVmaW5lZCkgYXNzaWduT2JqZWN0UHJpb3JpdHkoKTtcclxuXHJcbiAgICBpZihwcm9wZXJ0eUFwcGxpZWRPYmplY3RzLmluZGV4T2YoZSkgPT0gLTEpIHByb3BlcnR5QXBwbGllZE9iamVjdHMucHVzaChlKTtcclxuXHJcbiAgICBsZXQgZW50cmllcyA9IE9iamVjdC5lbnRyaWVzKGUucG0pO1xyXG4gICAgZW50cmllcy5zcGxpY2UoMCwgMCwgW1wiX19pZFwiLCBlLmFsZWlJRF0pO1xyXG5cclxuICAgIGlmKFtcImJnXCIsIFwiZGVjb3JcIl0uaW5kZXhPZihlLl9jbGFzcykgIT09IC0xKSB7XHJcbiAgICAgICAgZW50cmllcy5zcGxpY2UoMSwgMCwgW1wiX19wcmlvcml0eVwiLCBlLmFsZWlQcmlvcml0eV0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBlLnBtID0gT2JqZWN0LmZyb21FbnRyaWVzKGVudHJpZXMpO1xyXG59XHJcblxyXG5sZXQgc29ydFJlcXVpcmVkID0gZmFsc2U7XHJcbmZ1bmN0aW9uIFNvcnRPYmplY3RzQnlQcmlvcml0eSgpIHtcclxuICAgIGZ1bmN0aW9uIGdldFByaW9yaXR5KGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gYi5hbGVpUHJpb3JpdHkgLSBhLmFsZWlQcmlvcml0eTtcclxuICAgIH1cclxuICAgIHdpbmRvdy5lcyA9IGVzLnNvcnQoZ2V0UHJpb3JpdHkpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gQXBwbHlPYmplY3RQcm9wZXJ0aWVzKGUpIHtcclxuICAgIGlmKFtcImJnXCIsIFwiZGVjb3JcIl0uaW5kZXhPZihlLl9jbGFzcykgPT0gLTEpIHJldHVybjtcclxuICAgIGlmKGUuYWxlaVByaW9yaXR5ICE9PSBlLnBtLl9fcHJpb3JpdHkpIHtcclxuICAgICAgICBlLmFsZWlQcmlvcml0eSA9IGUucG0uX19wcmlvcml0eTtcclxuICAgICAgICBzb3J0UmVxdWlyZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyBUT0RPOiBIb3cgY2FuIEkgZm9yY2UgdXBkYXRlIEdVSSBvYmplY3QgbGlzdD9cclxuICAgICAgICAvLyBVcGRhdGVHVUlPYmplY3RzTGlzdCBkb2VzIG5vdCBkbyBpdC5cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gUmVtb3ZlT2JqZWN0UHJvcGVydGllcyhlKSB7XHJcbiAgICBkZWxldGUgZS5wbS5fX2lkO1xyXG4gICAgZGVsZXRlIGUucG0uX19wcmlvcml0eTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGF0Y2hVcGRhdGVHVUlQYXJhbXMoKSB7XHJcbiAgICBsZXQgb2xkQ29kZVNuaXBwZXQgPSBcImlmICggaSA+PSA0ICYmIChpLTQpICUgMyA9PSAwICkge1wiO1xyXG4gICAgbGV0IG5ld0NvZGVTbmlwcGV0ID0gXCJpZiAoc2hvdWxkQWRkU2VwYXJhdG9ySW5HVUlQYXJhbXMoaSkpIHtcIjtcclxuICAgIGxldCBjb2RlID0gd2luZG93LlVwZGF0ZUdVSVBhcmFtcy50b1N0cmluZygpLnJlcGxhY2Uob2xkQ29kZVNuaXBwZXQsIG5ld0NvZGVTbmlwcGV0KTtcclxuICAgIC8vIGlmIGV4dGVuZGVkIHRyaWdnZXJzIGFyZSBlbmFibGVkLCB0aGUgY29kZSByZXBsYWNlbWVudCBmcm9tIHRoYXQgd2lsbCBjYXVzZSB0aGlzIGNvZGUgcmVwbGFjZW1lbnQgdG8gZmFpbC5cclxuICAgIC8vIGl0IHdvbid0IGNhdXNlIGFuIGVycm9yIGFzc3VtaW5nIHRoYXQgY29kZSBkb2VzIG1vcmUgb3IgbGVzcyB0aGUgc2FtZSB0aGluZy4gdGhpcyB0aGluZyBpcyBhIGJpdCBvZiBhIG5pZ2h0bWFyZVxyXG4gICAgaWYgKCFjb2RlLmluY2x1ZGVzKG5ld0NvZGVTbmlwcGV0KSkgeyBcclxuICAgICAgICAvL2FsZWlMb2coV0FSTiwgXCJVcGRhdGVHVUlQYXJhbXMgZGlyZWN0IGNvZGUgcmVwbGFjZW1lbnQgZmFpbGVkIChzZXBhcmF0b3JzKVwiKTtcclxuICAgIH1cclxuICAgIGNvZGUgPSBcIihcIiArIGNvZGUgKyBcIilcIjsgLy9wdXR0aW5nIGl0IGluIHBhcmVudGhlc2VzIHRvIG1ha2UgaXQgYSBmdW5jdGlvbiBleHByZXNzaW9uLiB0aGUgZnVuY3Rpb24gY2FuIHRoZW4gYmUgYXNzaWduZWQgZGlyZWN0bHkgZnJvbSBldmFsXHJcbiAgICBsZXQgb3JpZ1VHUCA9IGV2YWwoY29kZSk7XHJcblxyXG4gICAgbGV0IG9yaWdHUFYgPSB3aW5kb3cuR2VuUGFyYW1WYWw7XHJcblxyXG4gICAgd2luZG93LnNob3VsZEFkZFNlcGFyYXRvckluR1VJUGFyYW1zID0gKGNvdW50KSA9PiB7XHJcbiAgICAgICAgbGV0IHNlcCA9IFRyaWdnZXJfZ2V0U2VwYXJhdG9yU3RhcnQoU2VsZWN0ZWRPYmplY3RzLmxlbmd0aCk7XHJcbiAgICAgICAgaWYoKGNvdW50ID49IHNlcCkgJiYgKGNvdW50IC0gc2VwKSAlIDMgPT0gMCkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuR2VuUGFyYW1WYWxFc2NhcGVEb3VibGVRdW90ZXMgPSBmYWxzZTtcclxuXHJcbiAgICAvLyByZXBsYWNlcyBHZW5QYXJhbVZhbCBiZWhhdmlvdXIgb2Ygd2hlbiBiYXNlID09IFwibm9jaGFuZ2VcIi4gb25seSBkaWZmZXJlbmNlIGlzIHRoYXQgaXQgZXNjYXBlcyBkb3VibGUgcXVvdGVzLlxyXG4gICAgLy8gYWxzbyBpdCBvbmx5IGVzY2FwZXMgZG91YmxlIHF1b3RlcyB3aGVuIGl0J3MgdXNlZCB3aXRoaW4gVXBkYXRlR1VJUGFyYW1zLlxyXG4gICAgLy8gdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIHdvdWxkIHJldHVybiB2YWx1ZSBpZiBGT1JDRV9URVhUX09QVElPTlMgPT0gdHJ1ZSBldmVuIGlmIGJhc2UgPT0gXCJub2NoYW5nZVwiLiBzbyB0aGlzIHdvcmtzIHNsaWdodGx5IGRpZmZlcmVudGx5LCBub3Qgc3VyZSBpZiB0aGF0J3MgaW50ZW50aW9uYWxcclxuICAgIHdpbmRvdy5HZW5QYXJhbVZhbCA9IGZ1bmN0aW9uKGJhc2UsIHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKEdlblBhcmFtVmFsRXNjYXBlRG91YmxlUXVvdGVzICYmIGJhc2UgPT0gXCJub2NoYW5nZVwiKSB7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZVdpdGhRdW90ZXNFc2NhcGVkID0gYCR7dmFsdWV9YC5yZXBsYWNlQWxsKCdcIicsIFwiJnF1b3Q7XCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gYDxwdmFsdWUgcmVhbD1cIiR7dmFsdWVXaXRoUXVvdGVzRXNjYXBlZH1cIj4tIG5vdCB1c2VkIC08L3B2YWx1ZT5gO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb3JpZ0dQVihiYXNlLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LlVwZGF0ZUdVSVBhcmFtcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIEdlblBhcmFtVmFsRXNjYXBlRG91YmxlUXVvdGVzID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gUmVwcmVzZW50cyBhbGwgdGhlIHNlbGVjdGVkIGVudGl0eSBjbGFzcy5cclxuICAgICAgICBsZXQgc2VsZWN0ZWQgPSBTZWxlY3RlZE9iamVjdHM7XHJcbiAgICAgICAgc2VsZWN0ZWQuZmlsdGVyKGUgPT4gZS5fY2xhc3MgPT0gXCJ0cmlnZ2VyXCIpLm1hcChlID0+IFJlb3JkZXJUcmlnZ2VyUHJvcGVydHkoZSkpO1xyXG5cclxuICAgICAgICAvL3NlbGVjdGVkLm1hcChvID0+IEFwcGx5T2JqZWN0UHJvcGVydGllcyhvKSk7XHJcblxyXG4gICAgICAgIGZvcihsZXQgZWxlbWVudCBvZiBwcm9wZXJ0eUFwcGxpZWRPYmplY3RzKSB7XHJcbiAgICAgICAgICAgIGlmKHNlbGVjdGVkLmluZGV4T2YoZWxlbWVudCkgIT09IC0xKSBjb250aW51ZTtcclxuICAgICAgICAgICAgUmVtb3ZlT2JqZWN0UHJvcGVydGllcyhlbGVtZW50KTtcclxuICAgICAgICAgICAgcHJvcGVydHlBcHBsaWVkT2JqZWN0cy5zcGxpY2UocHJvcGVydHlBcHBsaWVkT2JqZWN0cy5pbmRleE9mKGVsZW1lbnQpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VsZWN0ZWQubWFwKG8gPT4gQXNzaWduT2JqZWN0UHJvcGVydGllcyhvKSk7XHJcblxyXG4gICAgICAgIC8vIFRoaXMgY29kZSBoYW5kbGVzIHRyYW5zaXRpb24gYmV0d2VlbiB0aW1lciBhbmQgdHJpZ2dlciB2YWx1ZXMgZGVwZW5kaW5nIG9uIHJlZ2lvbidzIFwiZXhlY3V0ZXNcIiBwYXJhbWV0ZXJcclxuICAgICAgICBpZigoc2VsZWN0ZWQubGVuZ3RoID09IDEpICYmIChzZWxlY3RlZFswXS5fY2xhc3MgPT0gXCJyZWdpb25cIikpIHtcclxuICAgICAgICAgICAgaWYoW3RydWUsIFwidHJ1ZVwiXS5pbmRleE9mKHNlbGVjdGVkWzBdLnBtLnVzZXNfdGltZXIpICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbV90eXBlW1JFR0lPTl9FWEVDVVRFX1BBUkFNX0lEXVsxXSA9IFwidGltZXIrbm9uZVwiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1fdHlwZVtSRUdJT05fRVhFQ1VURV9QQVJBTV9JRF1bMV0gPSBcInRyaWdnZXIrbm9uZVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvcmlnVUdQKCk7XHJcbiAgICAgICAgYWRkQWRkaXRpb25hbEJ1dHRvbnMoKTtcclxuXHJcbiAgICAgICAgR2VuUGFyYW1WYWxFc2NhcGVEb3VibGVRdW90ZXMgPSBmYWxzZTtcclxuICAgICAgICBpZihzb3J0UmVxdWlyZWQpIFNvcnRPYmplY3RzQnlQcmlvcml0eSgpO1xyXG4gICAgfVxyXG4gICAgYWxlaUxvZyhERUJVRywgXCJQYXRjaGVkIFVwZGF0ZUdVSVBhcmFtc1wiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGF0Y2hFdmFsU2V0KCkge1xyXG4gICAgd2luZG93LkV2YWxTZXQgPSBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgLy8gTm8gZXZhbGluZy4gRGVhdGggdG8gZXZhbCEgKGV4Y2VwdCBmb3Igd2hlbiBpIHdhbnQgdG8gdXNlIGl0Li4uKVxyXG4gICAgICAgIHdpbmRvd1trZXldID0gdmFsdWU7XHJcbiAgICAgICAgVXBkYXRlVG9vbHMoKTtcclxuICAgIH1cclxuICAgIGFsZWlMb2coREVCVUcsIFwiUGF0Y2hlZCBFdmFsU2V0XCIpO1xyXG59XHJcblxyXG53aW5kb3cuQUxFSV9zZXR0aW5nc01lbnUgPSB1bmRlZmluZWQ7XHJcblxyXG5cclxuLypcclxuVE9ETzogVGV4dCBmaWVsZCBmb3IgdGhvc2UuXHJcbmxldCBhbGVpU2V0dGluZ3MgPSB7XHJcbiAgICB0cmlnZ2VyRWRpdFRleHRTaXplOnJlYWRTdG9yYWdlKFwiQUxFSV9FZGl0VGV4dFNpemVcIiwgICAgICBcIjEycHhcIiwgICh2YWwpID0+IHZhbCArIFwicHhcIiAgKSxcclxuICAgIHN0YXJzSW1hZ2U6ICAgICAgICAgcmVhZFN0b3JhZ2UoXCJBTEVJX1N0YXJJbWFnZVwiLCAgICBcInN0YXJzMi5qcGdcIiwgKHZhbCkgPT4gdmFsICAgICAgICAgKSxcclxufVxyXG4qL1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlQUxFSVNldHRpbmdzTWVudSgpIHtcclxuICAgIGxldCBtYWluV2luZG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1haW5XaW5kb3cuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtcnBvcHVwXCIpO1xyXG5cclxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBcIkFMRUkgU2V0dGluZ1wiO1xyXG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtcnRpdGxlXCIpOyAvLyBFcmljLCB3aGF0IGlzIHRoaXMgY3JhcCA/XHJcbiAgICBtYWluV2luZG93LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuXHJcblxyXG4gICAgbGV0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBib3guc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtcmJveFwiKTtcclxuICAgIG1haW5XaW5kb3cuYXBwZW5kQ2hpbGQoYm94KTtcclxuXHJcbiAgICAvLyBDb252ZW5pZW5jZSBmdW5jdGlvbnMuXHJcbiAgICBsZXQgdXNhYmxlSGVpZ2h0ID0gMjQwO1xyXG4gICAgbGV0IGN1cnJlbnRIZWlnaHQgPSAzMDA7XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkVGV4dCh0ZXh0LCByZXF1aXJlc1Jlc3RhcnQgPSBmYWxzZSkge1xyXG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGRpdi5pbm5lckhUTUwgPSB0ZXh0O1xyXG4gICAgICAgIGlmIChyZXF1aXJlc1Jlc3RhcnQpIHtcclxuICAgICAgICAgICAgZGl2LnN0eWxlLnNldFByb3BlcnR5KFwiY29sb3JcIiwgXCIjRkZGRjAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJBTEVJX3NldHRpbmdNZW51VGV4dFwiKTtcclxuICAgICAgICBib3guaW5uZXJIVE1MICs9IFwiPGJyPlwiO1xyXG4gICAgICAgIGJveC5pbm5lckhUTUwgKz0gZGl2Lm91dGVySFRNTDtcclxuXHJcbiAgICAgICAgdXNhYmxlSGVpZ2h0IC09IDIwO1xyXG4gICAgICAgIGlmKHVzYWJsZUhlaWdodCA8PSAwKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gMjA7XHJcbiAgICAgICAgICAgIHVzYWJsZUhlaWdodCArPSAyMDtcclxuICAgICAgICAgICAgYm94LnN0eWxlLmhlaWdodCA9IGAke2N1cnJlbnRIZWlnaHR9cHhgO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlZ2lzdGVyQnV0dG9uKGdlbmVyYWwsIHZhbHVlcywga2V5KSB7XHJcbiAgICAgICAgYWxlaVNldHRpbmdCdXR0b25zTWFwW2dlbmVyYWxdID0gW3ZhbHVlcywgYWxlaVNldHRpbmdzLCBrZXldO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbmV3UmVnaXN0ZXJCdXR0b24oZ2VuZXJhbCwgdmFsdWVzLCBkaWN0LCBrZXkpIHtcclxuICAgICAgICBhbGVpU2V0dGluZ0J1dHRvbnNNYXBbZ2VuZXJhbF0gPSBbdmFsdWVzLCBkaWN0LCBrZXldO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYWRkQnV0dG9uKGRpc3BsYXksIGlkZW50aWZpZXIsIGNhbGxiYWNrLCBzdHlsZSA9IFwiXCIpIHtcclxuICAgICAgICBhbGVpQnV0dG9uQ2xpY2tzW1wic2V0dGluZ19cIiArIGlkZW50aWZpZXJdID0gY2FsbGJhY2s7XHJcblxyXG4gICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XHJcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiQUxFSV9cIiArIGlkZW50aWZpZXIpO1xyXG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBkaXNwbGF5KTtcclxuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwib25jbGlja1wiLCBgYWxlaUJ1dHRvbkNsaWNrc1snc2V0dGluZ18ke2lkZW50aWZpZXJ9J10oKTsgQUxFSV9zZXR0aW5nVXBkYXRlQnV0dG9ucygpOyB0cmlnZ2VyQWN0aW9uc1ByZXZlbnRFcnJvcigpO2ApO1xyXG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIkFMRUlfc2V0dGluZ3NNZW51QnV0dG9uXCIpO1xyXG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBzdHlsZSk7XHJcblxyXG4gICAgICAgIGJveC5pbm5lckhUTUwgKz0gYnV0dG9uLm91dGVySFRNTDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGFkZEJpbmFyeU9wdGlvbih0cnV0aHlWYWwsIGZhbHN5VmFsLCBzdG9yYWdlLCBrZXksIGludGVybmFsTmFtZSwgY2FsbGJhY2sgPSAoKSA9PiB7fSkge1xyXG4gICAgICAgIGZ1bmN0aW9uIF9hcHBseSh2YWwpIHtcclxuICAgICAgICAgICAgd3JpdGVTdG9yYWdlKHN0b3JhZ2UsIHZhbCk7XHJcbiAgICAgICAgICAgIGFsZWlTZXR0aW5nc1trZXldID0gdmFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhZGRCdXR0b24odHJ1dGh5VmFsLCBgJHtpbnRlcm5hbE5hbWV9X3RydWVgLCAoKSA9PiB7X2FwcGx5KHRydWUpOyBjYWxsYmFjayh0cnVlKX0pO1xyXG4gICAgICAgIGFkZEJ1dHRvbihmYWxzeVZhbCwgYCR7aW50ZXJuYWxOYW1lfV9mYWxzZWAsICgpID0+IHtfYXBwbHkoZmFsc2UpOyBjYWxsYmFjayhmYWxzZSl9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBMb2cgbGV2ZWwuXHJcbiAgICBmdW5jdGlvbiBsb2dBcHBseSh2YWwpIHtcclxuICAgICAgICB3cml0ZVN0b3JhZ2UoXCJBTEVJX0xvZ0xldmVsXCIsIHZhbCk7XHJcbiAgICAgICAgYWxlaVNldHRpbmdzLmxvZ0xldmVsID0gdmFsO1xyXG4gICAgfVxyXG4gICAgYm94LmlubmVySFRNTCArPSBcIk5PVEU6IFNldHRpbmdzIGluIHllbGxvdyB0ZXh0IHJlcXVpcmVzIHBhZ2UgcmVmcmVzaCB0byBiZSBhcHBsaWVkLjxicj5cIjtcclxuICAgIGFkZEJ1dHRvbihcIkNsZWFyIEJhY2t1cFwiLCBcImNsZWFyTWFwQmFja3Vwc1wiLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHJlbW92ZWQgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKSkge1xyXG4gICAgICAgICAgICBpZighKGtleS5zbGljZSgwLCBcInBiMl9tYXBcIi5sZW5ndGgpID09IFwicGIyX21hcFwiKSkgY29udGludWU7XHJcbiAgICAgICAgICAgIHJlbW92ZWQucHVzaChrZXkpO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBOZXdOb3RlKGBBTEVJOiBDbGVhcmVkIGJhY2t1cCwgcmVtb3ZlZCB0b3RhbCAke3JlbW92ZWQubGVuZ3RofSBiYWNrdXBzLmAsIFwiIzAwRkZGRlwiKTtcclxuICAgICAgICBhbGVpTG9nKERFQlVHMiwgYFJlbW92ZWQgYmFja3VwIG9mOiAke3JlbW92ZWR9YCk7XHJcbiAgICB9LCBcIndpZHRoOiAxMDBweFwiKTtcclxuICAgIGJveC5pbm5lckhUTUwgKz0gXCI8YnI+XCI7XHJcblxyXG4gICAgbGV0IGlkZW50aWZpZXIgPSAwO1xyXG5cclxuICAgIGZ1bmN0aW9uIE1ha2VTZXR0aW5nQnV0dG9ucyhzdG9yYWdlLCBkaWN0LCBkaWN0S2V5LCB2YWx1ZU1hcCkge1xyXG4gICAgICAgIGlkZW50aWZpZXIrKztcclxuICAgICAgICBuZXdSZWdpc3RlckJ1dHRvbihcclxuICAgICAgICAgICAgaWRlbnRpZmllcixcclxuICAgICAgICAgICAgdmFsdWVNYXAubWFwKG8gPT4gb1sxXSksXHJcbiAgICAgICAgICAgIGRpY3QsXHJcbiAgICAgICAgICAgIGRpY3RLZXlcclxuICAgICAgICApO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9hcHBseSh2YWx1ZSkge1xyXG4gICAgICAgICAgICB3cml0ZVN0b3JhZ2Uoc3RvcmFnZSwgdmFsdWUpO1xyXG4gICAgICAgICAgICBkaWN0W2RpY3RLZXldID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgbWFwIG9mIHZhbHVlTWFwKSB7XHJcbiAgICAgICAgICAgIGFkZEJ1dHRvbihtYXBbMF0sIGAke2lkZW50aWZpZXJ9XyR7bWFwWzFdfWAsICgpID0+IF9hcHBseShtYXBbMV0pKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LkFMRUlBUEkuc2V0dGluZ3MgPSB7fTtcclxuICAgIHdpbmRvdy5BTEVJQVBJLnNldHRpbmdzLmFkZFRleHQgPSBhZGRUZXh0O1xyXG4gICAgd2luZG93LkFMRUlBUEkuc2V0dGluZ3MuY3JlYXRlQnV0dG9ucyA9IE1ha2VTZXR0aW5nQnV0dG9ucztcclxuXHJcbiAgICBmdW5jdGlvbiBhbGVpTWFrZVNldHRpbmdCdXR0b25zKHRleHQsIHJlcXVpcmVSZWZyZXNoLCBzdG9yYWdlLCBkaWN0S2V5LCB2YWx1ZU1hcCkge1xyXG4gICAgICAgIGFkZFRleHQodGV4dCwgcmVxdWlyZVJlZnJlc2gpO1xyXG4gICAgICAgIE1ha2VTZXR0aW5nQnV0dG9ucyhzdG9yYWdlLCBhbGVpU2V0dGluZ3MsIGRpY3RLZXksIHZhbHVlTWFwKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgUFJfU2hvd0hpZGUgPSBbW1wiU2hvd1wiLCB0cnVlXSwgW1wiSGlkZVwiLCBmYWxzZV1dO1xyXG5cclxuICAgIGFsZWlNYWtlU2V0dGluZ0J1dHRvbnMoXHJcbiAgICAgICAgXCJMb2cgTGV2ZWw6XCIsXHJcbiAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgXCJBTEVJX0xvZ0xldmVsXCIsIC8vIFN0b3JhZ2Uga2V5LlxyXG4gICAgICAgIFwibG9nTGV2ZWxcIiwgLy8gRGljdGlvbmFyeSBrZXkuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICBbXCJJTkZPXCIsIDBdLCAvLyBWYWx1ZSBtYXBzLlxyXG4gICAgICAgICAgICBbXCJERUJVR1wiLCAxXSxcclxuICAgICAgICAgICAgW1wiVkVSQk9TRVwiLCAyXVxyXG4gICAgICAgIF1cclxuICAgIClcclxuXHJcbiAgICBhbGVpTWFrZVNldHRpbmdCdXR0b25zKFxyXG4gICAgICAgIFwiQWN0aW9uIElEczpcIixcclxuICAgICAgICB0cnVlLFxyXG4gICAgICAgIFwiQUxFSV9TaG93VHJpZ2dlcklEc1wiLFxyXG4gICAgICAgIFwic2hvd1RyaWdnZXJJRHNcIixcclxuICAgICAgICBQUl9TaG93SGlkZVxyXG4gICAgKTtcclxuXHJcbiAgICBhbGVpTWFrZVNldHRpbmdCdXR0b25zKFxyXG4gICAgICAgIFwiVG9vbHRpcHM6XCIsXHJcbiAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgXCJBTEVJX1Nob3dUb29sdGlwc1wiLFxyXG4gICAgICAgIFwiZW5hYmxlVG9vbHRpcHNcIixcclxuICAgICAgICBQUl9TaG93SGlkZVxyXG4gICAgKVxyXG5cclxuICAgIC8vIE9iamVjdCBJRC5cclxuICAgIC8qcmVnaXN0ZXJCdXR0b24oXCJzaG93aWRzXCIsIFt0cnVlLCBmYWxzZV0sIFwic2hvd0lEc1wiKTtcclxuICAgIGFkZFRleHQoXCJPYmplY3QgSURzOlwiKVxyXG4gICAgYWRkQmluYXJ5T3B0aW9uKFwiU2hvd1wiLCBcIkhpZGVcIiwgXCJBTEVJX1Nob3dJRHNcIiwgXCJzaG93SURzXCIsIFwic2hvd2lkc1wiKVxyXG4qL1xyXG5cclxuICAgIC8qYWxlaU1ha2VTZXR0aW5nQnV0dG9ucyhcclxuICAgICAgICBcIlotSW5kZXg6XCIsXHJcbiAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgXCJBTEVJX1Nob3daSW5kZXhcIixcclxuICAgICAgICBcInNob3daSW5kZXhcIixcclxuICAgICAgICBQUl9TaG93SGlkZVxyXG4gICAgKTsqL1xyXG5cclxuICAgIGFsZWlNYWtlU2V0dGluZ0J1dHRvbnMoXHJcbiAgICAgICAgXCJTYW1lIFBhcmFtZXRlcnM6XCIsXHJcbiAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgXCJBTEVJX1Nob3dTYW1lUGFyYW1ldGVyc1wiLFxyXG4gICAgICAgIFwic2hvd1NhbWVQYXJhbWV0ZXJzXCIsXHJcbiAgICAgICAgUFJfU2hvd0hpZGVcclxuICAgICk7XHJcblxyXG4gICAgLy8gQmxhY2sgdGhlbWUuXHJcbiAgICByZWdpc3RlckJ1dHRvbihcImJsYWNrVGhlbWVcIiwgW3RydWUsIGZhbHNlXSwgXCJibGFja1RoZW1lXCIpO1xyXG4gICAgYWRkVGV4dChcIkJsYWNrIHRoZW1lOlwiLCBmYWxzZSk7XHJcbiAgICBhZGRCaW5hcnlPcHRpb24oXCJZZXNcIiwgXCJOb1wiLCBcIkFMRUlfQmxhY2tUaGVtZVwiLCBcImJsYWNrVGhlbWVcIiwgXCJibGFja1RoZW1lXCIsIChzdGF0dXMpID0+IHtcclxuICAgICAgICBpZihzdGF0dXMpIGJsYWNrVGhlbWUoKVxyXG4gICAgICAgIGVsc2UgVW5kb0JsYWNrVGhlbWUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGFsZWlNYWtlU2V0dGluZ0J1dHRvbnMoXHJcbiAgICAgICAgXCJHcmlkIGJ5IHNuYXA6XCIsXHJcbiAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgXCJBTEVJX2dyaWRCYXNlZE9uU25hcHBpbmdcIixcclxuICAgICAgICBcImdyaWRCYXNlZE9uU25hcHBpbmdcIixcclxuICAgICAgICBbW1wiWWVzXCIsIHRydWVdLCBbXCJOb1wiLCBmYWxzZV1dXHJcbiAgICApO1xyXG5cclxuICAgIC8vIFJlbmRlciBvYmplY3QgbmFtZXNcclxuICAgIHJlZ2lzdGVyQnV0dG9uKFwic2hvd09iamVjdE5hbWVzXCIsIFt0cnVlLCBmYWxzZV0sIFwicmVuZGVyT2JqZWN0TmFtZXNcIik7XHJcbiAgICBhZGRUZXh0KFwiU2hvdyBvYmplY3QgbmFtZXM6IFwiKTtcclxuICAgIGFkZEJpbmFyeU9wdGlvbihcIlllc1wiLCBcIk5vXCIsIFwiQUxFSV9SZW5kZXJPYmplY3ROYW1lc1wiLCBcInJlbmRlck9iamVjdE5hbWVzXCIsIFwic2hvd09iamVjdE5hbWVzXCIsIChzdGF0dXMpID0+IEFMRUlfVXBkYXRlTmFtZVJlbmRlclNldHRpbmcoc3RhdHVzKSk7XHJcblxyXG4gICAgLy8gUmVtYXAgVUlEXHJcbiAgICByZWdpc3RlckJ1dHRvbihcInJlbWFwVUlEXCIsIFt0cnVlLCBmYWxzZV0sIFwicmVtYXRjaFVJRFwiKTtcclxuICAgIGFkZFRleHQoXCJSZW1hcCBVSUQ6IFwiKTtcclxuICAgIGFkZEJpbmFyeU9wdGlvbihcIkVuYWJsZWRcIiwgXCJEaXNhYmxlZFwiLCBcIkFMRUlfUmVtYXBVSURcIiwgXCJyZW1hdGNoVUlEXCIsIFwicmVtYXBVSURcIiwgKHN0YXR1cykgPT4gQUxFSV9VcGRhdGVSZW1hdGNoVUlEU2V0dGluZyhzdGF0dXMpKTtcclxuXHJcbiAgICBhbGVpTWFrZVNldHRpbmdCdXR0b25zKFxyXG4gICAgICAgIFwiRXh0ZW5kZWQgdHJpZ2dlcnM6XCIsXHJcbiAgICAgICAgdHJ1ZSxcclxuICAgICAgICBcIkFMRUlfRXh0ZW5kZWRUcmlnZ2Vyc0VuYWJsZWRcIixcclxuICAgICAgICBcImV4dGVuZGVkVHJpZ2dlcnNcIixcclxuICAgICAgICBbW1wiRW5hYmxlZFwiLCB0cnVlXSwgW1wiRGlzYWJsZWRcIiwgZmFsc2VdXVxyXG4gICAgKTtcclxuXHJcbiAgICBhbGVpTWFrZVNldHRpbmdCdXR0b25zKFxyXG4gICAgICAgIFwiT3JkZXJlZCBOYW1pbmc6XCIsXHJcbiAgICAgICAgdHJ1ZSxcclxuICAgICAgICBcIkFMRUlfb3JkZXJlZE5hbWluZ1wiLFxyXG4gICAgICAgIFwib3JkZXJlZE5hbWluZ1wiLFxyXG4gICAgICAgIFtbXCJZZXMgKFNsb3cpXCIsIHRydWVdLCBbXCJObyAoRmFzdClcIiwgZmFsc2VdXVxyXG4gICAgKTtcclxuXHJcbiAgICBhbGVpTWFrZVNldHRpbmdCdXR0b25zKFxyXG4gICAgICAgIFwiQ3VzdG9tIFJlbmRlcmVyOlwiLFxyXG4gICAgICAgIHRydWUsXHJcbiAgICAgICAgXCJBTEVJX1JlbmRlcmVyX0VuYWJsZWRcIixcclxuICAgICAgICBcImN1c3RvbVJlbmRlcmVyXCIsXHJcbiAgICAgICAgW1tcIkVuYWJsZWRcIiwgdHJ1ZV0sIFtcIkRpc2FibGVkXCIsIGZhbHNlXV1cclxuICAgICk7XHJcblxyXG4gICAgd2luZG93LkFMRUlfc2V0dGluZ3NNZW51ID0gbWFpbldpbmRvdztcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbldpbmRvdyk7XHJcbiAgICBBTEVJX3NldHRpbmdVcGRhdGVCdXR0b25zKCk7XHJcbiAgICBhbGVpTG9nKERFQlVHLCBcIkNyZWF0ZWQgc2V0dGluZ3Mgd2luZG93LlwiKTtcclxufVxyXG5cclxubGV0IGFsZWlTZXR0aW5nQnV0dG9uc01hcCA9IHt9XHJcblxyXG53aW5kb3cuQUxFSV9zZXR0aW5nVXBkYXRlQnV0dG9ucyA9ICgpID0+IHtcclxuICAgIGxldCBkZWZhdWx0Q2xhc3MgPSBcIkFMRUlfc2V0dGluZ3NNZW51QnV0dG9uXCI7XHJcbiAgICBsZXQgY2xpY2tlZENsYXNzID0gXCJBTEVJX3NldHRpbmdzTWVudUJ1dHRvbiBBTEVJX3NldHRpbmdNZW51QnV0dG9uQ2xpY2tlZFwiO1xyXG5cclxuICAgIGZvciAobGV0IGVudHJ5IG9mIE9iamVjdC5lbnRyaWVzKGFsZWlTZXR0aW5nQnV0dG9uc01hcCkpIHtcclxuICAgICAgICBsZXQgaWRlbnRpdHkgPSBlbnRyeVswXTtcclxuICAgICAgICBsZXQgdmFsdWVzID0gZW50cnlbMV1bMF07XHJcbiAgICAgICAgbGV0IGRpY3QgPSBlbnRyeVsxXVsxXTtcclxuICAgICAgICBsZXQga2V5ID0gZW50cnlbMV1bMl07XHJcblxyXG4gICAgICAgIGxldCBjdXJyZW50VmFsID0gZGljdFtrZXldO1xyXG4gICAgICAgIGZvciAobGV0IHZhbHVlIG9mIHZhbHVlcykge1xyXG4gICAgICAgICAgICAkcXVlcnkoYCNBTEVJXyR7aWRlbnRpdHl9XyR7dmFsdWV9YCkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgZGVmYXVsdENsYXNzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJHF1ZXJ5KGAjQUxFSV8ke2lkZW50aXR5fV8ke2N1cnJlbnRWYWx9YCkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgY2xpY2tlZENsYXNzKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHNob3dTZXR0aW5ncygpIHtcclxuICAgIGlmIChBTEVJX3NldHRpbmdzTWVudSA9PT0gdW5kZWZpbmVkKSBjcmVhdGVBTEVJU2V0dGluZ3NNZW51KCk7XHJcblxyXG4gICAgbXJkaW1saWdodHMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBBTEVJX3NldHRpbmdzTWVudS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIGRpbV91bmRvID0gXCJBTEVJX3NldHRpbmdzTWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXCI7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBwYXRjaFRlYW1MaXN0KCkge1xyXG4gICAgZm9yIChsZXQgZW50cnkgb2YgT2JqZWN0LmVudHJpZXMoVkFMX1RBQkxFW1widGVhbVwiXSkpIHtcclxuICAgICAgICBsZXQgdGVhbUlEID0gcGFyc2VJbnQoZW50cnlbMF0pO1xyXG4gICAgICAgIGxldCB0ZWFtTmFtZSA9IGVudHJ5WzFdO1xyXG5cclxuICAgICAgICBpZiAodGVhbUlEIDwgMCkge1xyXG4gICAgICAgICAgICB0ZWFtTmFtZSA9IHRlYW1OYW1lLnJlcGxhY2UoXCIobm8gZnJpZW5kbHkgZmlyZSlcIiwgXCIoTm8gY29sbGlzaW9uLCBZZXMgZnJpZW5kbHkgZmlyZSlcIilcclxuICAgICAgICAgICAgVkFMX1RBQkxFW1widGVhbVwiXVt0ZWFtSURdID0gdGVhbU5hbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGVhbUlEID09PSAtMSkgY29udGludWU7XHJcbiAgICAgICAgVkFMX1RBQkxFW1widGVhbSthbnlcIl1bdGVhbUlEXSA9IHRlYW1OYW1lO1xyXG4gICAgfVxyXG4gICAgYWxlaUxvZyhERUJVRywgXCJFZGl0ZWQgdGVhbSBsaXN0Li5cIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFByb2plY3RpbGVNb2RlbHMoKSB7XHJcbiAgICBsZXQgcHJvamVjdGlsZU1vZGVscyA9IFZBTF9UQUJMRVtcIkFMRUlfcHJvamVjdGlsZU1vZGVsc1wiXSA9IHtcclxuICAgICAgICAxOiBcImh0dHBzOi8vc3RhdGljLm1pcmFoZXplLm9yZy9wbGF6bWFidXJzdHdpa2kvNi82YS9MYXplcl8xLnBuZ1wiLFxyXG4gICAgICAgIDI6IFwiaHR0cHM6Ly9zdGF0aWMubWlyYWhlemUub3JnL3BsYXptYWJ1cnN0d2lraS9hL2FlL0xhemVyXzIucG5nXCIsXHJcbiAgICAgICAgMzogXCJodHRwczovL3N0YXRpYy5taXJhaGV6ZS5vcmcvcGxhem1hYnVyc3R3aWtpLzAvMDYvTGF6ZXJfMy5wbmdcIixcclxuICAgICAgICA0OiBcImh0dHBzOi8vc3RhdGljLm1pcmFoZXplLm9yZy9wbGF6bWFidXJzdHdpa2kvZC9kZS9MYXplcl80LnBuZ1wiLFxyXG4gICAgICAgIDU6IFwiaHR0cHM6Ly9zdGF0aWMubWlyYWhlemUub3JnL3BsYXptYWJ1cnN0d2lraS84LzhmL0xhemVyXzUucG5nXCIsXHJcbiAgICAgICAgNjogXCJodHRwczovL3N0YXRpYy5taXJhaGV6ZS5vcmcvcGxhem1hYnVyc3R3aWtpL2EvYTAvTGF6ZXJfNi5wbmdcIixcclxuICAgICAgICA3OiBcImh0dHBzOi8vc3RhdGljLm1pcmFoZXplLm9yZy9wbGF6bWFidXJzdHdpa2kvNy83MS9MYXplcl83LnBuZ1wiLFxyXG4gICAgICAgIDg6IFwiaHR0cHM6Ly9zdGF0aWMubWlyYWhlemUub3JnL3BsYXptYWJ1cnN0d2lraS9jL2M2L0xhemVyXzgucG5nXCIsXHJcbiAgICAgICAgOTogXCJodHRwczovL3N0YXRpYy5taXJhaGV6ZS5vcmcvcGxhem1hYnVyc3R3aWtpL2QvZDIvTGF6ZXJfOS5wbmdcIixcclxuICAgICAgICAxMDogXCJodHRwczovL3N0YXRpYy5taXJhaGV6ZS5vcmcvcGxhem1hYnVyc3R3aWtpLzUvNWIvTGF6ZXJfMTAucG5nXCIsXHJcbiAgICAgICAgMTE6IFwiaHR0cHM6Ly9zdGF0aWMubWlyYWhlemUub3JnL3BsYXptYWJ1cnN0d2lraS9kL2QyL0xhemVyXzExLnBuZ1wiLFxyXG4gICAgICAgIDEyOiBcImh0dHBzOi8vc3RhdGljLm1pcmFoZXplLm9yZy9wbGF6bWFidXJzdHdpa2kvMi8yZC9MYXplcl8xMi5wbmdcIixcclxuICAgICAgICAxMzogXCJodHRwczovL3N0YXRpYy5taXJhaGV6ZS5vcmcvcGxhem1hYnVyc3R3aWtpL2IvYmUvTGF6ZXJfMTMucG5nXCIsXHJcbiAgICAgICAgMTQ6IFwiaHR0cHM6Ly9zdGF0aWMubWlyYWhlemUub3JnL3BsYXptYWJ1cnN0d2lraS8xLzE0L0xhemVyXzE0LnBuZ1wiLFxyXG4gICAgICAgIDE1OiBcIlwiLCAvLyBFbXB0eSBwcm9qZWN0aWxlLlxyXG4gICAgICAgIDE2OiBcImh0dHBzOi8vc3RhdGljLm1pcmFoZXplLm9yZy9wbGF6bWFidXJzdHdpa2kvNy83Zi9MYXplcl8xNi5wbmdcIixcclxuICAgICAgICAxNzogXCJodHRwczovL3N0YXRpYy5taXJhaGV6ZS5vcmcvcGxhem1hYnVyc3R3aWtpLzMvMzEvTGF6ZXJfMTcucG5nXCIsXHJcbiAgICAgICAgMTg6IFwiaHR0cHM6Ly9zdGF0aWMubWlyYWhlemUub3JnL3BsYXptYWJ1cnN0d2lraS84Lzg5L0xhemVyXzE4LnBuZ1wiLFxyXG4gICAgICAgIDE5OiBcImh0dHBzOi8vc3RhdGljLm1pcmFoZXplLm9yZy9wbGF6bWFidXJzdHdpa2kvZi9mZS9MYXplcl8xOS5wbmdcIixcclxuICAgICAgICAyMDogXCJodHRwczovL3N0YXRpYy5taXJhaGV6ZS5vcmcvcGxhem1hYnVyc3R3aWtpLzEvMWEvTGF6ZXJfMjAucG5nXCIsXHJcbiAgICAgICAgMjE6IFwiaHR0cHM6Ly9zdGF0aWMubWlyYWhlemUub3JnL3BsYXptYWJ1cnN0d2lraS80LzQyL0xhemVyXzIxLnBuZ1wiLFxyXG4gICAgICAgIDIyOiBcImh0dHBzOi8vc3RhdGljLm1pcmFoZXplLm9yZy9wbGF6bWFidXJzdHdpa2kvYy9jMC9MYXplcl8yMi5wbmdcIixcclxuICAgICAgICAyMzogXCJodHRwczovL3N0YXRpYy5taXJhaGV6ZS5vcmcvcGxhem1hYnVyc3R3aWtpL2QvZDkvTGF6ZXJfMjMucG5nXCIsXHJcbiAgICAgICAgMjQ6IFwiaHR0cHM6Ly9zdGF0aWMubWlyYWhlemUub3JnL3BsYXptYWJ1cnN0d2lraS9mL2Y1L0xhemVyXzI0LnBuZ1wiLFxyXG4gICAgICAgIDI1OiBcImh0dHBzOi8vc3RhdGljLm1pcmFoZXplLm9yZy9wbGF6bWFidXJzdHdpa2kvNy83Yy9MYXplcl8yNS5wbmdcIixcclxuICAgICAgICAyNjogXCJodHRwczovL3N0YXRpYy5taXJhaGV6ZS5vcmcvcGxhem1hYnVyc3R3aWtpL2EvYTcvTGF6ZXJfMjYucG5nXCIsXHJcbiAgICAgICAgMjc6IFwiaHR0cHM6Ly9zdGF0aWMubWlyYWhlemUub3JnL3BsYXptYWJ1cnN0d2lraS8zLzMwL0xhemVyXzI3LnBuZ1wiLFxyXG4gICAgICAgIDI4OiBcImh0dHBzOi8vc3RhdGljLm1pcmFoZXplLm9yZy9wbGF6bWFidXJzdHdpa2kvMy8zYS9MYXplcl8yOC5wbmdcIixcclxuICAgICAgICAyOTogXCJodHRwczovL3N0YXRpYy5taXJhaGV6ZS5vcmcvcGxhem1hYnVyc3R3aWtpLzkvOTAvTGF6ZXJfMjkucG5nXCIsXHJcbiAgICAgICAgMzA6IFwiaHR0cHM6Ly9zdGF0aWMubWlyYWhlemUub3JnL3BsYXptYWJ1cnN0d2lraS8yLzIzL0xhemVyXzMwLnBuZ1wiLFxyXG4gICAgICAgIDMxOiBcImh0dHBzOi8vc3RhdGljLm1pcmFoZXplLm9yZy9wbGF6bWFidXJzdHdpa2kvMy8zYS9MYXplcl8zMS5wbmdcIixcclxuICAgICAgICAzMjogXCJodHRwczovL3N0YXRpYy5taXJhaGV6ZS5vcmcvcGxhem1hYnVyc3R3aWtpL2YvZjAvTGF6ZXJfMzIucG5nXCIsXHJcbiAgICAgICAgMzM6IFwiaHR0cHM6Ly9zdGF0aWMubWlyYWhlemUub3JnL3BsYXptYWJ1cnN0d2lraS8wLzBkL0xhemVyXzMzLnBuZ1wiLFxyXG4gICAgICAgIDM0OiBcImh0dHBzOi8vc3RhdGljLm1pcmFoZXplLm9yZy9wbGF6bWFidXJzdHdpa2kvYy9jOC9MYXplcl8zNC5wbmdcIixcclxuICAgICAgICAzNTogXCJodHRwczovL3N0YXRpYy5taXJhaGV6ZS5vcmcvcGxhem1hYnVyc3R3aWtpLzMvMzgvTGF6ZXJfMzUucG5nXCIsXHJcbiAgICAgICAgMzY6IFwiaHR0cHM6Ly9zdGF0aWMubWlyYWhlemUub3JnL3BsYXptYWJ1cnN0d2lraS82LzZkL0xhemVyXzM2LnBuZ1wiLFxyXG4gICAgICAgIDM3OiBcImh0dHBzOi8vc3RhdGljLm1pcmFoZXplLm9yZy9wbGF6bWFidXJzdHdpa2kvYS9hOS9MYXplcl8zNy5wbmdcIixcclxuICAgICAgICAzODogXCJodHRwczovL3N0YXRpYy5taXJhaGV6ZS5vcmcvcGxhem1hYnVyc3R3aWtpL2UvZTcvTGF6ZXJfMzgucG5nXCIsXHJcbiAgICAgICAgMzk6IFwiaHR0cHM6Ly9zdGF0aWMubWlyYWhlemUub3JnL3BsYXptYWJ1cnN0d2lraS82LzZjL0xhemVyXzM5LnBuZ1wiLFxyXG4gICAgICAgIDQwOiBcImh0dHBzOi8vc3RhdGljLm1pcmFoZXplLm9yZy9wbGF6bWFidXJzdHdpa2kvZC9kNC9MYXplcl80MC5wbmdcIixcclxuICAgICAgICA0MTogXCJodHRwczovL3N0YXRpYy5taXJhaGV6ZS5vcmcvcGxhem1hYnVyc3R3aWtpLzUvNWQvTGF6ZXJfNDEucG5nXCIsXHJcbiAgICAgICAgNDI6IFwiaHR0cHM6Ly9zdGF0aWMubWlyYWhlemUub3JnL3BsYXptYWJ1cnN0d2lraS85LzlkL0xhemVyXzQyLnBuZ1wiLFxyXG4gICAgICAgIDQzOiBcImh0dHBzOi8vc3RhdGljLm1pcmFoZXplLm9yZy9wbGF6bWFidXJzdHdpa2kvNy83OS9MYXplcl80My5wbmdcIixcclxuICAgICAgICA0NDogXCJodHRwczovL3N0YXRpYy5taXJhaGV6ZS5vcmcvcGxhem1hYnVyc3R3aWtpLzYvNmQvTGF6ZXJfNDQucG5nXCIsXHJcbiAgICAgICAgNDU6IFwiaHR0cHM6Ly9zdGF0aWMubWlyYWhlemUub3JnL3BsYXptYWJ1cnN0d2lraS80LzQ0L0xhemVyXzQ1LnBuZ1wiLFxyXG4gICAgICAgIDQ2OiBcImh0dHBzOi8vc3RhdGljLm1pcmFoZXplLm9yZy9wbGF6bWFidXJzdHdpa2kvMy8zYi9MYXplcl80Ni5wbmdcIixcclxuICAgICAgICA0NzogXCJodHRwczovL3N0YXRpYy5taXJhaGV6ZS5vcmcvcGxhem1hYnVyc3R3aWtpLzgvODQvTGF6ZXJfNDcucG5nXCIsXHJcbiAgICAgICAgNDg6IFwiaHR0cHM6Ly9zdGF0aWMubWlyYWhlemUub3JnL3BsYXptYWJ1cnN0d2lraS83Lzc1L0xhemVyXzQ4LnBuZ1wiLFxyXG4gICAgICAgIDQ5OiBcImh0dHBzOi8vc3RhdGljLm1pcmFoZXplLm9yZy9wbGF6bWFidXJzdHdpa2kvMC8wOC9MYXplcl80OS5wbmdcIixcclxuICAgICAgICA1MDogXCJodHRwczovL3N0YXRpYy5taXJhaGV6ZS5vcmcvcGxhem1hYnVyc3R3aWtpLzQvNDEvTGF6ZXJfNTAucG5nXCIsXHJcbiAgICAgICAgNTE6IFwiaHR0cHM6Ly9zdGF0aWMubWlyYWhlemUub3JnL3BsYXptYWJ1cnN0d2lraS85LzkyL0xhemVyXzUxLnBuZ1wiLFxyXG4gICAgICAgIDUyOiBcImh0dHBzOi8vc3RhdGljLm1pcmFoZXplLm9yZy9wbGF6bWFidXJzdHdpa2kvOS85Mi9MYXplcl81Mi5wbmdcIixcclxuICAgICAgICA1MzogXCJodHRwczovL3N0YXRpYy5taXJhaGV6ZS5vcmcvcGxhem1hYnVyc3R3aWtpLzcvNzAvTGF6ZXJfNTMucG5nXCIsXHJcbiAgICAgICAgNTQ6IFwiaHR0cHM6Ly9zdGF0aWMubWlyYWhlemUub3JnL3BsYXptYWJ1cnN0d2lraS9lL2VlL0xhemVyXzU0LnBuZ1wiLFxyXG4gICAgICAgIDU1OiBcImh0dHBzOi8vc3RhdGljLm1pcmFoZXplLm9yZy9wbGF6bWFidXJzdHdpa2kvZC9kMS9MYXplcl81NS5wbmdcIlxyXG4gICAgfTtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNTY7IGkrKykge1xyXG4gICAgICAgIHByb2plY3RpbGVNb2RlbHNbaV0gPSBgPGltZyBzcmM9JyR7cHJvamVjdGlsZU1vZGVsc1tpXX0nIHN0eWxlPSd3aWR0aDogNjBweDsgaGVpZ2h0OiAyMHB4Jy8+YDtcclxuICAgIH1cclxuICAgIGFsZWlMb2coREVCVUcsIFwiTG9hZGVkIHByb2plY3RpbGUgbW9kZWxzLlwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGF0Y2hTcGVjaWFsVmFsdWUoKSB7XHJcbiAgICBsZXQgX09HID0gd2luZG93LnNwZWNpYWxfdmFsdWU7XHJcbiAgICB3aW5kb3cuc3BlY2lhbF92YWx1ZSA9IChiYXNlLCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGlmIChbXCJBTEVJX3Byb2plY3RpbGVNb2RlbHNcIl0uaW5kZXhPZihiYXNlKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgbGV0IHJldHVybmluZyA9IFZBTF9UQUJMRVtiYXNlXVt2YWx1ZV07XHJcbiAgICAgICAgICAgIGlmIChyZXR1cm5pbmcgPT09IHVuZGVmaW5lZCkgcmV0dXJuIEVSUk9SX1ZBTFVFO1xyXG4gICAgICAgICAgICBlbHNlIHJldHVybiByZXR1cm5pbmc7XHJcbiAgICAgICAgfSBlbHNlIGlmKGJhc2UgPT0gXCJ0cmlnZ2VyK25vbmVcIikgeyAvLyBJIGFjdHVhbGx5IGRvIG5vdCBoYXZlIHRvIGRvIHRoaXMsIGJ1dCBpIHdpbGwgZG8gaXQgdG8gZ2V0IHJpZCBvZiBhbm5veWFuY2VcclxuICAgICAgICAgICAgaWYodmFsdWUgPT0gLTEpIHJldHVybiBWQUxfVEFCTEVbXCJ0cmlnZ2VyK25vbmVcIl1bLTFdO1xyXG4gICAgICAgICAgICByZXR1cm4gc3BlY2lhbF92YWx1ZShcInRyaWdnZXJcIiwgdmFsdWUpO1xyXG4gICAgICAgIH1lbHNlIGlmKGJhc2UgPT0gXCJ0aW1lcitub25lXCIpIHtcclxuICAgICAgICAgICAgaWYodmFsdWUgPT0gLTEpIHJldHVybiBWQUxfVEFCTEVbXCJ0aW1lcitub25lXCJdWy0xXTtcclxuICAgICAgICAgICAgcmV0dXJuIHNwZWNpYWxfdmFsdWUoXCJ0aW1lclwiLCB2YWx1ZSk7XHJcbiAgICAgICAgfWVsc2UgcmV0dXJuIF9PRyhiYXNlLCB2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBhbGVpTG9nKERFQlVHLCBcIlBhdGNoZWQgU3BlY2lhbFZhbHVlXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBub3RpZnlVcGRhdGUodmVyc2lvbikge1xyXG4gICAgbmV3VXBkYXRlID0gMTtcclxuXHJcbiAgICBhbGVpTG9nKElORk8sIGBOZXcgdXBkYXRlOiAke3ZlcnNpb259YCk7XHJcbiAgICBOZXdOb3RlKGBBTEVJOiBUaGVyZSBpcyBuZXcgdXBkYXRlOiAke3ZlcnNpb259LCB5b3UgYXJlIGN1cnJlbnRseSBpbiAke0dNX2luZm8uc2NyaXB0LnZlcnNpb259PGJyPlByZXNzIEN0cmwgKyBTaGlmdCB0byB1cGRhdGVgLCBcIiNGRkZGRkZcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5vdGlmeUlmVGhlcmVzVXBkYXRlKHNjcmlwdCkge1xyXG4gICAgbGV0IGxpbmVzID0gc2NyaXB0LnNwbGl0KFwiXFxuXCIpO1xyXG4gICAgbGV0IHZlcnNpb247XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgbGluZSA9IGxpbmVzW2ldO1xyXG4gICAgICAgIGlmKGxpbmUuaW5kZXhPZihcIkB2ZXJzaW9uXCIpID09IC0xKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgbGV0IHBhcnRzID0gbGluZS5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgdmVyc2lvbiA9IHBhcnRzW3BhcnRzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBsYXRlc3RWZXJzaW9uID0gcGFyc2VJbnQodmVyc2lvbi5yZXBsYWNlQWxsKFwiLlwiLCBcIlwiKSk7XHJcbiAgICBsZXQgY3VycmVudFZlcnNpb24gPSBwYXJzZUludChHTV9pbmZvLnNjcmlwdC52ZXJzaW9uLnJlcGxhY2VBbGwoXCIuXCIsIFwiXCIpKTtcclxuXHJcbiAgICBpZihsYXRlc3RWZXJzaW9uID4gY3VycmVudFZlcnNpb24pIHJldHVybiBub3RpZnlVcGRhdGUodmVyc2lvbik7XHJcblxyXG4gICAgYWxlaUxvZyhJTkZPLCBgUkVNT1RFOiAke3ZlcnNpb259LCBMT0NBTDogJHtHTV9pbmZvLnNjcmlwdC52ZXJzaW9ufSA9PiBObyB1cGRhdGUgZGV0ZWN0ZWQuYCk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGNoZWNrRm9yVXBkYXRlcygpIHtcclxuICAgIGxldCByZXNwID0gYXdhaXQgR00ueG1sSHR0cFJlcXVlc3QoeyAgdXJsOiBHTV9pbmZvLnNjcmlwdC51cGRhdGVVUkwgIH0pLmNhdGNoKGUgPT4gY29uc29sZS5lcnJvcihlKSk7XHJcbiAgICBub3RpZnlJZlRoZXJlc1VwZGF0ZShyZXNwLnJlc3BvbnNlVGV4dCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFMRUlfRG9Xb3JsZFNjYWxlKCkge1xyXG4gICAgdmFyIG5ld3NjYWxlID0gcHJvbXB0KCdNdWx0aXBseSBzZWxlY3Rpb24gc2l6ZSBieSAlIChwZXJjZW50cyknLCAxMDApO1xyXG4gICAgaWYgKCEobmV3c2NhbGUgPT0gbnVsbCB8fCBuZXdzY2FsZSA9PSAxMDApKSB7XHJcbiAgICAgICAgdmFyIGZhY3RvciA9IE1hdGguZmxvb3IobmV3c2NhbGUpIC8gMTAwO1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHNuYXBwaW5nU2NyaXB0ID0gYC9HUklEX1NOQVBQSU5HKSpHUklEX1NOQVBQSU5HO2BcclxuICAgICAgICAgICAgdmFyIHJvdW5kd2VsbCA9IHRydWU7XHJcbiAgICAgICAgICAgIGxjeigpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICAgICAgaWYgKGVzW2ldLmV4aXN0cylcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXNbaV0uc2VsZWN0ZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChNYXRjaExheWVyKGVzW2ldKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVzW2ldLnBtLncgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGRuKCdlc1snICsgaSArICddLnBtLnc9TWF0aC5yb3VuZChlc1snICsgaSArICddLnBtLncqJyArIGZhY3RvciArIHNuYXBwaW5nU2NyaXB0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsbmQoJ2VzWycgKyBpICsgJ10ucG0udz0nICsgZXNbaV0ucG0udyArICc7Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVzW2ldLnBtLncgKiBmYWN0b3IgIT0gTWF0aC5yb3VuZChlc1tpXS5wbS53ICogZmFjdG9yIC8gR1JJRF9TTkFQUElORykgKiBHUklEX1NOQVBQSU5HKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3VuZHdlbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlc1tpXS5wbS5oICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxkbignZXNbJyArIGkgKyAnXS5wbS5oPU1hdGgucm91bmQoZXNbJyArIGkgKyAnXS5wbS5oKicgKyBmYWN0b3IgKyBzbmFwcGluZ1NjcmlwdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG5kKCdlc1snICsgaSArICddLnBtLmg9JyArIGVzW2ldLnBtLmggKyAnOycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlc1tpXS5wbS5oICogZmFjdG9yICE9IE1hdGgucm91bmQoZXNbaV0ucG0uaCAqIGZhY3RvciAvIEdSSURfU05BUFBJTkcpICogR1JJRF9TTkFQUElORylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91bmR3ZWxsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXNbaV0ucG0ueCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZG4oJ2VzWycgKyBpICsgJ10ucG0ueD1NYXRoLnJvdW5kKGVzWycgKyBpICsgJ10ucG0ueConICsgZmFjdG9yICsgc25hcHBpbmdTY3JpcHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxuZCgnZXNbJyArIGkgKyAnXS5wbS54PScgKyBlc1tpXS5wbS54ICsgJzsnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXNbaV0ucG0ueCAqIGZhY3RvciAhPSBNYXRoLnJvdW5kKGVzW2ldLnBtLnggKiBmYWN0b3IgLyBHUklEX1NOQVBQSU5HKSAqIEdSSURfU05BUFBJTkcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdW5kd2VsbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVzW2ldLnBtLnkgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGRuKCdlc1snICsgaSArICddLnBtLnk9TWF0aC5yb3VuZChlc1snICsgaSArICddLnBtLnkqJyArIGZhY3RvciArIHNuYXBwaW5nU2NyaXB0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsbmQoJ2VzWycgKyBpICsgJ10ucG0ueT0nICsgZXNbaV0ucG0ueSArICc7Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVzW2ldLnBtLnkgKiBmYWN0b3IgIT0gTWF0aC5yb3VuZChlc1tpXS5wbS55ICogZmFjdG9yIC8gR1JJRF9TTkFQUElORykgKiBHUklEX1NOQVBQSU5HKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3VuZHdlbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZnoodHJ1ZSk7XHJcbiAgICAgICAgICAgIE5ld05vdGUoJ09wZXJhdGlvbiBjb21wbGV0ZTo8YnI+PGJyPlNlbGVjdGVkIG9iamVjdHMgc2NhbGVkIGJ5ICcgKyBmYWN0b3IgKyAnICgnICsgbmV3c2NhbGUgKyAnJSBvZiBvcmlnaW5hbCBzaXplKScsIG5vdGVfcGFzc2l2ZSk7XHJcbiAgICAgICAgICAgIGlmICghcm91bmR3ZWxsKVxyXG4gICAgICAgICAgICAgICAgTmV3Tm90ZSgnTm90ZTogUG9zaXRpb24gYW5kL29yIGRpbWVuc2lvbnMgb2Ygc29tZSBvYmplY3RzIHdlcmUgbm90IHNjYWxlZCBwcm9wZXJseSBkdWUgdG8gTGV2ZWwgRWRpdG9yIHJvdW5kaW5nIHJ1bGVzJywgbm90ZV9uZXV0cmFsKTtcclxuICAgICAgICAgICAgbmVlZF9HVUlQYXJhbXNfdXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgbmVlZF9yZWRyYXcgPSB0cnVlO1xyXG4gICAgICAgICAgICBVcGRhdGVUb29scygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBwYXRjaFBlcmNlbnRhZ2VUb29sKCkge1xyXG4gICAgd2luZG93LkRvV29ybGRTY2FsZSA9IEFMRUlfRG9Xb3JsZFNjYWxlO1xyXG4gICAgYWxlaUxvZyhERUJVRywgXCJQYXRjaGVkIHBlcmNlbnRhZ2UgdG9vbFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2VuY29kZVhNTENoYXJzKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZUFsbChcIjxcIiwgXCImbHQ7XCIpLnJlcGxhY2VBbGwoXCI+XCIsIFwiJmd0O1wiKS5yZXBsYWNlQWxsKCdcIicsIFwiJnF1b3Q7XCIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhdGNoQ29tcGlsZVRyaWdnZXIoKSB7XHJcbiAgICBsZXQgX29nID0gd2luZG93LkNvbXBpbGVUcmlnZ2VyO1xyXG5cclxuICAgIHdpbmRvdy5Db21waWxlVHJpZ2dlciA9ICgpID0+IHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gX29nKCk7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkID0gU2VsZWN0ZWRPYmplY3RzO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0ZWQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG9iaiA9IHNlbGVjdGVkW2ldO1xyXG4gICAgICAgICAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKG9iai5wbSk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGtleXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqLnBtW2tleXNbal1dID09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmoucG1ba2V5c1tqXV0gPSBfZW5jb2RlWE1MQ2hhcnMob2JqLnBtW2tleXNbal1dKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgYWxlaUxvZyhERUJVRywgXCJQYXRjaGVkIENvbXBpbGVUcmlnZ2VyXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQYXN0ZUZyb21QZXJtYW5lbnRDbGlwYm9hcmQoKSB7XHJcbiAgICB3aW5kb3cucGFzdGVGcm9tUGVybWFuZW50Q2xpcGJvYXJkID0gcGFzdGVGcm9tUGVybWFuZW50Q2xpcGJvYXJkO1xyXG59XHJcblxyXG5sZXQgc2VsZWN0ZWRUcmlnZ2VyQWN0aW9ucyA9IFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXTtcclxubGV0IGhvdmVyZWRUcmlnZ2VyQWN0aW9uID0gLTE7XHJcbmxldCB0cmlnZ2VyQWN0aW9uc0NsaXBib2FyZCA9IFtdO1xyXG5cclxuZnVuY3Rpb24gZ2V0VHJpZ2dlckFjdGlvbkVsZW1lbnRzKCkge1xyXG4gICAgbGV0IGFyciA9IFtdO1xyXG4gICAgbGV0IGVsZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInBfaVwiKTtcclxuICAgIGxldCBpID0gNztcclxuXHJcbiAgICBmb3IgKDsgaSA8IGVsZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgYXJyLnB1c2goZWxlbXNbaV0uY2hpbGROb2Rlc1swXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFycjtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICBsZXQgZWxlbXMgPSBnZXRUcmlnZ2VyQWN0aW9uRWxlbWVudHMoKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGVsZW0gPSBlbGVtc1tpXTtcclxuXHJcbiAgICAgICAgZWxlbS5vbm1vdXNlZG93biA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzZWxlY3RlZFRyaWdnZXJBY3Rpb25zW01hdGguZmxvb3IoaSAvIDMpXSBePSAxO1xyXG4gICAgICAgICAgICB1cGRhdGVUcmlnZ2VyQWN0aW9uRWxlbWVudHMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsZW0ub25tb3VzZWVudGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGhvdmVyZWRUcmlnZ2VyQWN0aW9uID0gTWF0aC5mbG9vcihpIC8gMyk7XHJcbiAgICAgICAgICAgIHVwZGF0ZVRyaWdnZXJBY3Rpb25FbGVtZW50cygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxlbS5vbm1vdXNlbGVhdmUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaG92ZXJlZFRyaWdnZXJBY3Rpb24gPSAtMTtcclxuICAgICAgICAgICAgdXBkYXRlVHJpZ2dlckFjdGlvbkVsZW1lbnRzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVUcmlnZ2VyQWN0aW9uRWxlbWVudHMoKSB7XHJcbiAgICBsZXQgZWxlbXMgPSBnZXRUcmlnZ2VyQWN0aW9uRWxlbWVudHMoKTtcclxuXHJcbiAgICAvLyBUT0RPOiBNYWtlIHRob3NlIGNvbG9ycyBub3QgaGFyZGNvZGVkLCBwcm9sbHkgbmV2ZXIgd2lsbCBkby5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgIC8vIE5vdCBzZWxlY3RlZFxyXG4gICAgICAgIGxldCBjb2xvciA9IFwiXCI7XHJcblxyXG4gICAgICAgIC8vIFNlbGVjdGVkLlxyXG4gICAgICAgIGlmIChzZWxlY3RlZFRyaWdnZXJBY3Rpb25zW2ldKSB7XHJcbiAgICAgICAgICAgIGNvbG9yID0gXCJyZ2IoNDUsIDY1LCA5NSlcIjtcclxuICAgICAgICAgICAgaWYgKFRIRU1FICE9IDApIGNvbG9yID0gXCJyZ2IoMjcsIDI3LCAyNylcIjsgLy8gcmdiKDM3LCAzNywgMzcpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbGVtc1tpICogMyArIDBdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIGVsZW1zW2kgKiAzICsgMV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XHJcbiAgICAgICAgZWxlbXNbaSAqIDMgKyAyXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBIb3Zlci5cclxuICAgIGlmIChob3ZlcmVkVHJpZ2dlckFjdGlvbiAhPSAtMSkge1xyXG4gICAgICAgIGlmICghc2VsZWN0ZWRUcmlnZ2VyQWN0aW9uc1tob3ZlcmVkVHJpZ2dlckFjdGlvbl0pIHtcclxuICAgICAgICAgICAgbGV0IGNvbG9yID0gXCJyZ2IoNjUsIDg1LCAxMzApXCI7XHJcblxyXG4gICAgICAgICAgICBpZiAoVEhFTUUgIT0gMCkgY29sb3IgPSBcInJnYig0NywgNDcsIDQ3KVwiXHJcblxyXG4gICAgICAgICAgICBlbGVtc1tob3ZlcmVkVHJpZ2dlckFjdGlvbiAqIDMgKyAwXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcclxuICAgICAgICAgICAgZWxlbXNbaG92ZXJlZFRyaWdnZXJBY3Rpb24gKiAzICsgMV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XHJcbiAgICAgICAgICAgIGVsZW1zW2hvdmVyZWRUcmlnZ2VyQWN0aW9uICogMyArIDJdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaXNPbmx5VHJpZ2dlclNlbGVjdGVkKCkge1xyXG4gICAgbGV0IHJlc3VsdCA9IDA7XHJcbiAgICBsZXQgc2VsZWN0aW9uID0gZ2V0U2VsZWN0aW9uKCk7XHJcblxyXG4gICAgaWYgKHNlbGVjdGlvbi5sZW5ndGggPT0gMSAmJiBzZWxlY3Rpb25bMF0uX2NsYXNzID09IFwidHJpZ2dlclwiKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gMTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUcmlnZ2VyQWN0aW9ucygpIHtcclxuICAgIGVkaXRfdHJpZ2dlcnNfYXNfdGV4dCA9IDE7XHJcblxyXG4gICAgVXBkYXRlR1VJUGFyYW1zKCk7XHJcblxyXG4gICAgbGV0IHRleHRhcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcGNvZGVfZmllbGRcIik7XHJcbiAgICBsZXQgYXJyID0gdGV4dGFyZWEudmFsdWUuc3BsaXQoXCJcXG5cIikuc2xpY2UoNCk7XHJcblxyXG4gICAgd2hpbGUgKGFyci5sZW5ndGggPCAxMCkge1xyXG4gICAgICAgIGFyci5wdXNoKFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGVkaXRfdHJpZ2dlcnNfYXNfdGV4dCA9IDA7XHJcbiAgICBVcGRhdGVHVUlQYXJhbXMoKTtcclxuXHJcbiAgICByZXR1cm4gYXJyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb3B5VHJpZ2dlckFjdGlvbnMoKSB7XHJcbiAgICBsZXQgYWN0aW9ucyA9IGdldFRyaWdnZXJBY3Rpb25zKCk7XHJcblxyXG4gICAgdHJpZ2dlckFjdGlvbnNDbGlwYm9hcmQgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICBpZiAoc2VsZWN0ZWRUcmlnZ2VyQWN0aW9uc1tpXSkge1xyXG4gICAgICAgICAgICB0cmlnZ2VyQWN0aW9uc0NsaXBib2FyZC5wdXNoKGFjdGlvbnNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaXNOb3RoaW5nU2VsZWN0ZWQoKSB7XHJcbiAgICByZXR1cm4gIXNlbGVjdGVkVHJpZ2dlckFjdGlvbnMuaW5jbHVkZXMoMSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzT25seU9uZVRyaWdnZXJBY3Rpb25TZWxlY3RlZCgpIHtcclxuICAgIHJldHVybiBzZWxlY3RlZFRyaWdnZXJBY3Rpb25zLmluZGV4T2YoMSkgPT0gc2VsZWN0ZWRUcmlnZ2VyQWN0aW9ucy5sYXN0SW5kZXhPZigxKSAmJiAhaXNOb3RoaW5nU2VsZWN0ZWQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0U2VsZWN0ZWRUcmlnZ2VyQWN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHNlbGVjdGVkVHJpZ2dlckFjdGlvbnMuaW5kZXhPZigxKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VHJpZ2dlckluZm8oKSB7XHJcbiAgICBlZGl0X3RyaWdnZXJzX2FzX3RleHQgPSAxO1xyXG4gICAgVXBkYXRlR1VJUGFyYW1zKCk7XHJcblxyXG4gICAgbGV0IHRleHRhcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcGNvZGVfZmllbGRcIik7XHJcbiAgICBsZXQgYXJyID0gdGV4dGFyZWEudmFsdWUuc3BsaXQoXCJcXG5cIikuc2xpY2UoMCwgMyk7XHJcblxyXG4gICAgcmV0dXJuIGFycjtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFzdGVUcmlnZ2VyQWN0aW9ucygpIHtcclxuICAgIC8vIFRPRE86IE1ha2UgdGhpcyBiaXQgbW9yZSBzcGVjaWZpY1xyXG4gICAgLy8gQXMgaW4sIGlmIGkgY29weSAyIGFjdGlvbnMsIGFuZCBpIHNlbGVjdCBhbm90aGVyIDIgYWN0aW9ucywgaXQgc2hvdWxkIHBhc3RlIHRvIHRob3NlIDIgYWN0aW9ucyBpIHNlbGVjdGVkXHJcbiAgICAvLyBBbmQgbm90IGFkZCB0byBlbmQgb2YgaXQuXHJcbiAgICBsZXQgYWN0aW9ucyA9IGdldFRyaWdnZXJBY3Rpb25zKCk7XHJcbiAgICBsZXQgaW5kZXggPSBnZXRTZWxlY3RlZFRyaWdnZXJBY3Rpb24oKTtcclxuICAgIGxldCBjbGlwYm9hcmQgPSB0cmlnZ2VyQWN0aW9uc0NsaXBib2FyZC5qb2luKFwiXFxuXCIpO1xyXG4gICAgbGV0IGluZm8gPSBnZXRUcmlnZ2VySW5mbygpO1xyXG5cclxuICAgIGVkaXRfdHJpZ2dlcnNfYXNfdGV4dCA9IDE7XHJcbiAgICBVcGRhdGVHVUlQYXJhbXMoKTtcclxuXHJcbiAgICBpZiAoaXNOb3RoaW5nU2VsZWN0ZWQoKSkgeyAvLyBBZGRzIGFjdGlvbiBhdCBlbmQgb2Ygbm8gYWN0aW9uIHdhcyBzZWxlY3RlZC5cclxuICAgICAgICBpbmRleCA9IGFjdGlvbnMubGVuZ3RoIC0gMTtcclxuICAgICAgICBhY3Rpb25zW2luZGV4XSA9IGFjdGlvbnNbaW5kZXhdICsgXCJcXG5cIiArIGNsaXBib2FyZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNPbmx5T25lVHJpZ2dlckFjdGlvblNlbGVjdGVkKCkpIHsgLy8gQWRkcyBhY3Rpb24gYmVmb3JlIHRoZSBhY3Rpb24gdGhhdCB3YXMgc2VsZWN0ZWQuXHJcbiAgICAgICAgYWN0aW9uc1tpbmRleF0gPSBjbGlwYm9hcmQgKyBcIlxcblwiICsgYWN0aW9uc1tpbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHRleHRhcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcGNvZGVfZmllbGRcIik7XHJcblxyXG4gICAgdGV4dGFyZWEudmFsdWUgPSBpbmZvLmNvbmNhdChhY3Rpb25zKS5qb2luKFwiXFxuXCIpO1xyXG5cclxuICAgIENvbXBpbGVUcmlnZ2VyKCk7XHJcblxyXG4gICAgZWRpdF90cmlnZ2Vyc19hc190ZXh0ID0gMDtcclxuICAgIFVwZGF0ZUdVSVBhcmFtcygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVUcmlnZ2VyQWN0aW9ucygpIHtcclxuICAgIGxldCBhY3Rpb25zID0gZ2V0VHJpZ2dlckFjdGlvbnMoKTtcclxuICAgIGxldCBpbmZvID0gZ2V0VHJpZ2dlckluZm8oKTtcclxuXHJcbiAgICBlZGl0X3RyaWdnZXJzX2FzX3RleHQgPSAxO1xyXG4gICAgVXBkYXRlR1VJUGFyYW1zKCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkVHJpZ2dlckFjdGlvbnNbaV0pIHtcclxuICAgICAgICAgICAgYWN0aW9uc1tpXSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCB0ZXh0YXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3Bjb2RlX2ZpZWxkXCIpO1xyXG5cclxuICAgIHRleHRhcmVhLnZhbHVlID0gaW5mby5jb25jYXQoYWN0aW9ucykuam9pbihcIlxcblwiKTtcclxuXHJcbiAgICBDb21waWxlVHJpZ2dlcigpO1xyXG5cclxuICAgIGVkaXRfdHJpZ2dlcnNfYXNfdGV4dCA9IDA7XHJcbiAgICBVcGRhdGVHVUlQYXJhbXMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmV2ZXJzZVRyaWdnZXJBY3Rpb25zKCkge1xyXG4gICAgbGV0IGFjdGlvbnMxID0gZ2V0VHJpZ2dlckFjdGlvbnMoKTtcclxuICAgIGxldCBhY3Rpb25zMiA9IFtdO1xyXG4gICAgbGV0IGluZGV4ZXMgPSBbXTtcclxuICAgIGxldCBpbmZvID0gZ2V0VHJpZ2dlckluZm8oKTtcclxuXHJcbiAgICBlZGl0X3RyaWdnZXJzX2FzX3RleHQgPSAxO1xyXG4gICAgVXBkYXRlR1VJUGFyYW1zKCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkVHJpZ2dlckFjdGlvbnNbaV0pIHtcclxuICAgICAgICAgICAgYWN0aW9uczIucHVzaChhY3Rpb25zMVtpXSk7XHJcbiAgICAgICAgICAgIGluZGV4ZXMucHVzaChpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5kZXhlcy5yZXZlcnNlKCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3Rpb25zMi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBpbmRleCA9IGluZGV4ZXNbaV07XHJcbiAgICAgICAgbGV0IGFjdGlvbiA9IGFjdGlvbnMyW2ldO1xyXG5cclxuICAgICAgICBhY3Rpb25zMVtpbmRleF0gPSBhY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHRleHRhcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcGNvZGVfZmllbGRcIik7XHJcblxyXG4gICAgdGV4dGFyZWEudmFsdWUgPSBpbmZvLmNvbmNhdChhY3Rpb25zMSkuam9pbihcIlxcblwiKTtcclxuXHJcbiAgICBkaXNwbGF5T3BlcmF0aW9uQ29tcGxldGVOb3RlcyA9IGZhbHNlO1xyXG4gICAgQ29tcGlsZVRyaWdnZXIoKTtcclxuICAgIGRpc3BsYXlPcGVyYXRpb25Db21wbGV0ZU5vdGVzID0gdHJ1ZTtcclxuICAgIE5ld05vdGUoXCJSZXZlcnNlZCBhY3Rpb25zLlwiLCBcIiNGRkZGRkZcIik7XHJcblxyXG4gICAgZWRpdF90cmlnZ2Vyc19hc190ZXh0ID0gMDtcclxuICAgIFVwZGF0ZUdVSVBhcmFtcygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1bnNlbGVjdFRyaWdnZXJBY3Rpb25zKCkge1xyXG4gICAgc2VsZWN0ZWRUcmlnZ2VyQWN0aW9ucyA9IFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXTtcclxuICAgIGhvdmVyZWRUcmlnZ2VyQWN0aW9uID0gLTE7XHJcbiAgICB1cGRhdGVUcmlnZ2VyQWN0aW9uRWxlbWVudHMoKTtcclxufVxyXG5cclxud2luZG93LnRyaWdnZXJBY3Rpb25zUHJldmVudEVycm9yID0gKCkgPT4ge1xyXG4gICAgc2VsZWN0ZWRUcmlnZ2VyQWN0aW9ucyA9IFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXTtcclxuICAgIGhvdmVyZWRUcmlnZ2VyQWN0aW9uID0gLTE7XHJcbiAgICBVcGRhdGVHVUlQYXJhbXMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGF0Y2hDbGlwYm9hcmRGdW5jdGlvbnMoKSB7XHJcbiAgICBsZXQgb2xkX0NvcHlUb0NsaXBCb2FyZCA9IENvcHlUb0NsaXBCb2FyZDtcclxuICAgIGxldCBvbGRfUGFzdGVGcm9tQ2xpcEJvYXJkID0gUGFzdGVGcm9tQ2xpcEJvYXJkO1xyXG4gICAgbGV0IG9sZF9EZWxldGVTZWxlY3Rpb24gPSBEZWxldGVTZWxlY3Rpb247XHJcbiAgICBsZXQgb2xkX1VwZGF0ZUdVSVBhcmFtcyA9IFVwZGF0ZUdVSVBhcmFtcztcclxuICAgIGxldCBvbGRfRE9fVU5ETyA9IERPX1VORE87XHJcbiAgICBsZXQgb2xkX0RPX1JFRE8gPSBET19SRURPO1xyXG5cclxuICAgIHdpbmRvdy5Db3B5VG9DbGlwQm9hcmQgPSBmdW5jdGlvbihwYXJhbSkge1xyXG4gICAgICAgIGlmIChpc05vdGhpbmdTZWxlY3RlZCgpKSB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBvbGRfQ29weVRvQ2xpcEJvYXJkKHBhcmFtKTtcclxuICAgICAgICAgICAgdHJpZ2dlckFjdGlvbnNDbGlwYm9hcmQgPSBbXTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb3B5VHJpZ2dlckFjdGlvbnMoKTtcclxuICAgICAgICAgICAgdW5zZWxlY3RUcmlnZ2VyQWN0aW9ucygpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LlBhc3RlRnJvbUNsaXBCb2FyZCA9IGZ1bmN0aW9uKHBhcmFtKSB7XHJcbiAgICAgICAgaWYgKHRyaWdnZXJBY3Rpb25zQ2xpcGJvYXJkLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBvbGRfUGFzdGVGcm9tQ2xpcEJvYXJkKHBhcmFtKTtcclxuICAgICAgICAgICAgVXBkYXRlR1VJUGFyYW1zKCk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGlzcGxheU9wZXJhdGlvbkNvbXBsZXRlTm90ZXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgcGFzdGVUcmlnZ2VyQWN0aW9ucygpO1xyXG4gICAgICAgICAgICB1bnNlbGVjdFRyaWdnZXJBY3Rpb25zKCk7XHJcbiAgICAgICAgICAgIGRpc3BsYXlPcGVyYXRpb25Db21wbGV0ZU5vdGVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5EZWxldGVTZWxlY3Rpb24gPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoaXNOb3RoaW5nU2VsZWN0ZWQoKSkge1xyXG4gICAgICAgICAgICBvbGRfRGVsZXRlU2VsZWN0aW9uKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGlzcGxheU9wZXJhdGlvbkNvbXBsZXRlTm90ZXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgZGVsZXRlVHJpZ2dlckFjdGlvbnMoKTtcclxuICAgICAgICAgICAgdW5zZWxlY3RUcmlnZ2VyQWN0aW9ucygpO1xyXG4gICAgICAgICAgICBOZXdOb3RlKFwiRGVsZXRlZCB0cmlnZ2VyIGFjdGlvbnMuXCIsIFwiI0ZGRkZGRlwiKTtcclxuICAgICAgICAgICAgZGlzcGxheU9wZXJhdGlvbkNvbXBsZXRlTm90ZXMgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cuVXBkYXRlR1VJUGFyYW1zID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgb2xkX1VwZGF0ZUdVSVBhcmFtcygpO1xyXG5cclxuICAgICAgICBpZiAoIWlzT25seVRyaWdnZXJTZWxlY3RlZCgpKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkVHJpZ2dlckFjdGlvbnMgPSBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07XHJcbiAgICAgICAgICAgIGhvdmVyZWRUcmlnZ2VyQWN0aW9uID0gLTE7XHJcbiAgICAgICAgfSBlbHNlIGlmICghZWRpdF90cmlnZ2Vyc19hc190ZXh0KSB7XHJcbiAgICAgICAgICAgIGFkZEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgICAgICAgIHVwZGF0ZVRyaWdnZXJBY3Rpb25FbGVtZW50cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cuRE9fVU5ETyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIG9sZF9ET19VTkRPKCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIE5ld05vdGUoXCJDYW4ndCB1bmRvIGFjdGlvbi5cIiwgbm90ZV9iYWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cuRE9fUkVETyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIG9sZF9ET19SRURPKCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIE5ld05vdGUoXCJDYW4ndCByZWRvIGFjdGlvbi5cIiwgbm90ZV9iYWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cudHJpZ2dlckFjdGlvbnNQcmV2ZW50RXJyb3IgPSB0cmlnZ2VyQWN0aW9uc1ByZXZlbnRFcnJvcjtcclxuICAgIGFsZWlMb2coREVCVUcsIFwiUGF0Y2hlZCBjbGlwYm9hcmQgcmVsYXRlZCBmdW5jdGlvbnMuXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXRjaERyYXdHcmlkKCkge1xyXG4gICAgbGV0IG9sZF9sZyA9IGxnO1xyXG5cclxuICAgIHdpbmRvdy5sZyA9IGZ1bmN0aW9uKHBhcmFtMSwgcGFyYW0yKSB7XHJcbiAgICAgICAgaWYoYWxlaVNldHRpbmdzLmdyaWRCYXNlZE9uU25hcHBpbmcpIHtcclxuICAgICAgICAgICAgb2xkX2xnKHBhcmFtMSAqIChHUklEX1NOQVBQSU5HIC8gMTApLCBNYXRoLm1pbihwYXJhbTIgKiBNYXRoLm1heChHUklEX1NOQVBQSU5HIC8gMTAsIDEpLCAxKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb2xkX2xnKHBhcmFtMSwgcGFyYW0yKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFsZWlMb2coREVCVUcsIFwiUGF0Y2hlZCBMR1wiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGF0Y2hOZXdOb3RlKCkge1xyXG4gICAgbGV0IG9sZCA9IE5ld05vdGU7XHJcbiAgICB3aW5kb3cuTmV3Tm90ZSA9ICh0ZXh0LCBjb2xvcikgPT4ge1xyXG4gICAgICAgIGlmIChkaXNwbGF5T3BlcmF0aW9uQ29tcGxldGVOb3RlcykgcmV0dXJuIG9sZCh0ZXh0LCBjb2xvcik7XHJcbiAgICAgICAgaWYgKHRleHQuc2xpY2UoMCwgXCJPcGVyYXRpb24gY29tcGxldGU6PGJyPjxicj5cIi5sZW5ndGgpICE9IFwiT3BlcmF0aW9uIGNvbXBsZXRlOjxicj48YnI+XCIpIHJldHVybiBvbGQodGV4dCwgY29sb3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogVHJpZ2dlcl9nZXRTZXBhcmF0b3JTdGFydChzZWxlY3Rpb25Db3VudCkgZ2l2ZXMgbnVtYmVyIHdoaWNoIGRldGVybWluZXMgd2hlcmUgZG9lcyB0cmlnZ2VyJ3Mgc2VwYXJhdG9yIGxpbmUgc3RhcnRzIGZyb20uXHJcbiAqIFRoaXMgaXMgdXNlZCBmb3IgZml4SW5kZXggYW5kIFBhdGNoR1VJUGFyYW1zO1xyXG4qL1xyXG5mdW5jdGlvbiBUcmlnZ2VyX2dldFNlcGFyYXRvclN0YXJ0KHNlbGVjdGlvbkNvdW50KSB7XHJcbiAgICBsZXQgc3RhcnRTZXBhcmF0b3JGcm9tID0gNjsgLy8gTmFtZSArIFggKyBZICsgTWF4IENhbGxzICsgRW5hYmxlZCArIEV4ZWN1dGVzIERpcmVjdGx5ICsgSURcclxuICAgIHJldHVybiBzdGFydFNlcGFyYXRvckZyb207XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAgZXh0ZW5kVHJpZ2dlckxpc3QoKSBpcyByZXNwb25zaWJsZSBmb3IgcGF0Y2hpbmcgbWFueSBvZiB0aGUgb3JpZ2luYWwgZnVuY3Rpb25zIHRvIHN1cHBvcnQgdGhlXHJcbiAqICBpbXBsZW1lbnRhdGlvbiBvZiBleHRlbmRlZCB0cmlnZ2Vycy5cclxuICpcclxuICogIEV4dGVuZGVkIHRyaWdnZXJzIGFyZSB0cmlnZ2VycyB0aGF0IGNhbiBob2xkIG1vcmUgdGhhbiAxMCB0cmlnZ2VyIGFjdGlvbnMsIGFuZCBpcyBjb21wYXRpYmxlIHdpdGggdGhlIHZhbmlsbGEgQUxFLlxyXG4gKiAgVGhleSBhcmUgaW1wbGVtZW50ZWQgc2ltaWxhciB0byBhIGxpbmtlZCBsaXN0LCB3aXRoIHRoZSBtYWluIGV4dGVuZGVkIHRyaWdnZXIgcG9pbnRpbmcgdG8gdGhlIG5leHQgdHJpZ2dlciB2aWEgdGhlXHJcbiAqICAxMHRoIHRyaWdnZXIgYWN0aW9uLlxyXG4gKlxyXG4gKiAgVmlldyBhZGRUcmlnZ2VyQWN0aW9uQ291bnQgdG8gc2VlIHdoYXQgdW5pcXVlIHByb3BlcnRpZXMgYW4gZXh0ZW5kZWQgdHJpZ2dlciBoYXMgKGNsYXNzIGludmFyaWFudCkuXHJcbiAqICBWaWV3IFNhdmVUaGlzTWFwIHRvIHNlZSB0aGUgc3RydWN0ZSBvZiB0aGUgbGlua2VkIGxpc3QuXHJcbiAqL1xyXG5mdW5jdGlvbiBleHRlbmRUcmlnZ2VyTGlzdCgpIHtcclxuXHJcbiAgICAvKiogTW9kaWZpZXMgdGhlIG9yaWdpbmFsIFVwZGF0ZUdVSVBhcmFtcyB0byBwcm92aWRlIHN1cHBvcnQgZm9yIHRyaWdnZXIgZXh0ZW5zaW9uLlxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIG5ld1VwZGF0ZUdVSVBhcmFtcygpIHtcclxuICAgICAgICAvLyBHZXQgY3VycmVudCBHVUkgc2Nyb2xsIHBlcmNlbnRhZ2UuIFRoaXMgaXMgc28gd2UgY2FuIHJlc2V0IHRoZSBHVUkgc2Nyb2xsIHBlcmNlbnRhZ2UgYWZ0ZXIgcmV1cGRhdGluZyB0aGUgR1VJLlxyXG4gICAgICAgIGxldCBndWlIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicnBhcmFtc1wiKTtcclxuICAgICAgICBsZXQgYW1vdW50VG9TY3JvbGwgPSAwO1xyXG4gICAgICAgIGlmKGd1aUhUTUxFbGVtZW50KXtcclxuICAgICAgICAgICAgYW1vdW50VG9TY3JvbGwgPSBndWlIVE1MRWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjdXJyZW50X2d1aV9wYXJhbXMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB1bmZvY3VzZWRpdCgpO1xyXG4gICAgICAgIGZmLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgdmFyIHN0ciA9ICcnO1xyXG4gICAgICAgIHZhciBzZWxlY3RzID0gMDtcclxuICAgICAgICB2YXIgc2VsX2J5X2NsYXNzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGtub3duX2NsYXNzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNlbF9ieV9jbGFzc1tpXSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB1aWRzX2xpc3QgPSAnJztcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZXMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIGlmIChlc1tpXS5leGlzdHMpXHJcbiAgICAgICAgICAgICAgICBpZiAoZXNbaV0uc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RzKys7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsX2J5X2NsYXNzW2tub3duX2NsYXNzLmluZGV4T2YoZXNbaV0uX2NsYXNzKV0rKztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXNbaV0ucG0udWlkICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodWlkc19saXN0Lmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1aWRzX2xpc3QgKz0gJywgJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdWlkc19saXN0ICs9ICdcIicgKyBlc1tpXS5wbS51aWQgKyAnXCInO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB2YXIgZnVsbF9saXN0ID0gJyc7XHJcbiAgICAgICAgdmFyIGNsYXNzZXNfc2VsZWN0ZWQgPSAwO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBrbm93bl9jbGFzcy5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAgaWYgKHNlbF9ieV9jbGFzc1tpXSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChmdWxsX2xpc3QubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgICAgICAgICBmdWxsX2xpc3QgKz0gJywgJztcclxuICAgICAgICAgICAgICAgIGNsYXNzZXNfc2VsZWN0ZWQrKztcclxuICAgICAgICAgICAgICAgIGZ1bGxfbGlzdCArPSBzZWxfYnlfY2xhc3NbaV0gKyAnICcgKyB0b251bWVyb3VzKGtub3duX2NsYXNzX3RpdGxlW2ldLCBzZWxfYnlfY2xhc3NbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNsYXNzZXNfc2VsZWN0ZWQgPiAwKSB7XHJcbiAgICAgICAgICAgIGlmIChjbGFzc2VzX3NlbGVjdGVkID09IDEpXHJcbiAgICAgICAgICAgICAgICBpZiAodWlkc19saXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBmdWxsX2xpc3QgKz0gJzogJyArIHVpZHNfbGlzdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVsbF9saXN0ID0gJyAoJyArIGZ1bGxfbGlzdCArICcpJztcclxuICAgICAgICAgICAgZnVsbF9saXN0ICs9ICcgPGEgaHJlZj1cIiNcIiBvbmNsaWNrPVwiRm9yY2VEZXNlbGVjdCgpXCI+PGltZyBzcmM9XCJub2FwLnBuZ1wiIHdpZHRoPVwiMTFcIiBoZWlnaHQ9XCIxMVwiIGJvcmRlcj1cIjBcIj48L2E+JztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNlbGVjdHMgPT0gMClcclxuICAgICAgICAgICAgc3RyICs9ICc8ZGl2IGlkPVwiZ3VpX3NlbF9pbmZvXCIgY2xhc3M9XCJndWlfc2VsX2luZm9cIj5Ob3RoaW5nIHNlbGVjdGVkPC9kaXY+PGJyPjxkaXYgY2xhc3M9XCJxXCI+PC9kaXY+PGJyPic7XHJcbiAgICAgICAgZWxzZSBpZiAoc2VsZWN0cyA9PSAxKVxyXG4gICAgICAgICAgICBzdHIgKz0gJzxkaXYgaWQ9XCJndWlfc2VsX2luZm9cIiBjbGFzcz1cImd1aV9zZWxfaW5mb1wiPicgKyBzZWxlY3RzICsgJyBvYmplY3Qgc2VsZWN0ZWQnICsgZnVsbF9saXN0ICsgJzwvZGl2Pjxicj48ZGl2IGNsYXNzPVwicVwiPjwvZGl2Pjxicj4nO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgc3RyICs9ICc8ZGl2IGlkPVwiZ3VpX3NlbF9pbmZvXCIgY2xhc3M9XCJndWlfc2VsX2luZm9cIj4nICsgc2VsZWN0cyArICcgb2JqZWN0cyBzZWxlY3RlZCcgKyBmdWxsX2xpc3QgKyAnPC9kaXY+PGJyPjxkaXYgY2xhc3M9XCJxXCI+PC9kaXY+PGJyPic7XHJcbiAgICAgICAgdmFyIGZpcnN0X3NlbGVjdGVkX29iamVjdCA9IG51bGw7XHJcbiAgICAgICAgdmFyIHBhcmFtc190b19kaXNwbGF5ID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdmFyIHBhcmFtc2NvdW50X3RvX2Rpc3BsYXkgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB2YXIgcGFyYW1zdmFsdWVfdG9fZGlzcGxheSA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHZhciBwYXJhbV9hc3NvY2lhdGVkID0gbmV3IEFycmF5KCk7XHJcblxyXG4gICAgICAgIC8vIENvZGUgdG8gY2hhbmdlIHRoZSBzdGFydGluZyBwb2ludCBvZiB0aGUgZ2FwIGJldHdlZW4gdHJpZ2dlciBhY3Rpb25zLlxyXG4gICAgICAgIGxldCBzdGFydFNlcGFyYXRvckZyb20gPSBUcmlnZ2VyX2dldFNlcGFyYXRvclN0YXJ0KHNlbGVjdHMpO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICghZXNbaV0uZXhpc3RzKSBjb250aW51ZTtcclxuICAgICAgICAgICAgaWYgKCFlc1tpXS5zZWxlY3RlZCkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICAvLyBTZWxlY3RzIHRoZSBmaXJzdCBvYmplY3QgaWYgbm90IGFscmVhZHkgc2VsZWN0ZWQuXHJcbiAgICAgICAgICAgIGlmIChmaXJzdF9zZWxlY3RlZF9vYmplY3QgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIGZpcnN0X3NlbGVjdGVkX29iamVjdCA9IGVzW2ldO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCBhbGwgZW50aXR5J3MgcHJvcGVydGllcyBuYW1lcy4gKF9fel9JbmRleCwgYWN0aW9uc18xMF90YXJnZXRBLCBldGMuLilcclxuICAgICAgICAgICAgZm9yIChsZXQgcGFyYW1ldGVyIGluIGVzW2ldLnBtKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBGaW5kIHRoZSBJRCBhc3NvY2lhdGVkIHdpdGggdGhhdCBwcm9wZXJ0eS4gRWc6IF9fel9JbmRleDogOTguXHJcbiAgICAgICAgICAgICAgICAvLyBUaGlzIElEIGlzIHRoZSBzYW1lIGFzIHRoZSBpbmRleCB0byByZXRyaWV2ZSB0aGlzIHByb3BlcnR5IGluIHBhcmFtX3R5cGUuXHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kMiA9IEZpbmRNYWNoaW5nUGFyYW1ldGVySUQocGFyYW1ldGVyLCBlc1tpXS5fY2xhc3MpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEZpbmQgYW55IHBvdGVudGlhbCBkdXBsaWNhdGUuXHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kID0gcGFyYW1zX3RvX2Rpc3BsYXkuaW5kZXhPZihpbmQyKTtcclxuICAgICAgICAgICAgICAgIGlmIChpbmQgPT0gLTEgJiYgaW5kMiAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtc190b19kaXNwbGF5LnB1c2goaW5kMik7ICAgLy8gcGFyYW1zX3RvX2Rpc3BsYXkgY29udGFpbnMgYWxsIHRoZSBJRCBvZiBwcm9wZXJ0aWVzXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zY291bnRfdG9fZGlzcGxheS5wdXNoKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtc3ZhbHVlX3RvX2Rpc3BsYXkucHVzaChlc1tpXS5wbVtwYXJhbWV0ZXJdKTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbV9hc3NvY2lhdGVkLnB1c2gocGFyYW1ldGVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtc2NvdW50X3RvX2Rpc3BsYXlbaW5kXSsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZWRpdF90cmlnZ2Vyc19hc190ZXh0ICYmIHNlbGVjdHMgPT0gMSAmJiBmaXJzdF9zZWxlY3RlZF9vYmplY3QuX2NsYXNzID09ICd0cmlnZ2VyJykge1xyXG4gICAgICAgICAgICAvLyBUUklHR0VSIEdVSSBQQVJBTVMgSU4gVEVYVCBFRElUIE1PREVcclxuICAgICAgICAgICAgc3RyICs9ICc8ZGl2IGlkPVwicnBhcmFtc1wiPic7XHJcbiAgICAgICAgICAgIHN0ciArPSAnPGRpdiBzdHlsZT1cIndpZHRoOjIyMHB4O3doaXRlLXNwYWNlOm5vcm1hbDtcIj5UaGlzIGZlYXR1cmUgc2hvdWxkIG5vdCBnaXZlIHlvdSBtdWNoIG1vcmUgZnJlZWRvbSwgeWV0IHlvdSBtaWdodCBmaW5kIGl0IHVzZWZ1bCB0byBjb3B5L3Bhc3RlL2N1dCB0cmlnZ2VyIGFjdGlvbnMgaGVyZS48L2Rpdj48YnI+JztcclxuICAgICAgICAgICAgc3RyICs9ICc8dGV4dGFyZWEgaWQ9XCJvcGNvZGVfZmllbGRcIiBjbGFzcz1cIm9wY29kZV9maWVsZFwiIHN0eWxlPVwiZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO2hlaWdodDo0MDBweFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIGF1dG9jb3JyZWN0PVwib2ZmXCIgYXV0b2NhcGl0YWxpemU9XCJvZmZcIiBzcGVsbGNoZWNrPVwiZmFsc2VcIj4nO1xyXG4gICAgICAgICAgICB2YXIgY29kZV9saW5lcyA9ICcnO1xyXG4gICAgICAgICAgICBjb2RlX2xpbmVzICs9ICd1aWQ6ICcgKyBmaXJzdF9zZWxlY3RlZF9vYmplY3QucG0udWlkICsgJ1xcbic7XHJcbiAgICAgICAgICAgIGNvZGVfbGluZXMgKz0gJ2VuYWJsZWQ6ICcgKyBmaXJzdF9zZWxlY3RlZF9vYmplY3QucG0uZW5hYmxlZCArICdcXG4nO1xyXG4gICAgICAgICAgICBjb2RlX2xpbmVzICs9ICdtYXhjYWxsczogJyArIGZpcnN0X3NlbGVjdGVkX29iamVjdC5wbS5tYXhjYWxscyArICdcXG4nO1xyXG4gICAgICAgICAgICBjb2RlX2xpbmVzICs9ICdleGVjdXRlOiAnICsgZmlyc3Rfc2VsZWN0ZWRfb2JqZWN0LnBtLmV4ZWN1dGUgKyAnXFxuJztcclxuICAgICAgICAgICAgY29kZV9saW5lcyArPSAnXFxuJztcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChmaXJzdF9zZWxlY3RlZF9vYmplY3QucG1bJ2FjdGlvbnNfJyArIGkgKyAnX3R5cGUnXSA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0cmlnZ2VyX29wY29kZV9hbGlhc2VzW2ZpcnN0X3NlbGVjdGVkX29iamVjdC5wbVsnYWN0aW9uc18nICsgaSArICdfdHlwZSddXSA9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgY29kZV9saW5lcyArPSAnb3AnICsgZmlyc3Rfc2VsZWN0ZWRfb2JqZWN0LnBtWydhY3Rpb25zXycgKyBpICsgJ190eXBlJ107XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgY29kZV9saW5lcyArPSB0cmlnZ2VyX29wY29kZV9hbGlhc2VzW2ZpcnN0X3NlbGVjdGVkX29iamVjdC5wbVsnYWN0aW9uc18nICsgaSArICdfdHlwZSddXTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb2RlX2xpbmVzICs9ICcoICc7XHJcbiAgICAgICAgICAgICAgICBjb2RlX2xpbmVzICs9ICdcIicgKyBmaXJzdF9zZWxlY3RlZF9vYmplY3QucG1bJ2FjdGlvbnNfJyArIGkgKyAnX3RhcmdldEEnXSArICdcIic7XHJcbiAgICAgICAgICAgICAgICBjb2RlX2xpbmVzICs9ICcsICc7XHJcbiAgICAgICAgICAgICAgICBjb2RlX2xpbmVzICs9ICdcIicgKyBmaXJzdF9zZWxlY3RlZF9vYmplY3QucG1bJ2FjdGlvbnNfJyArIGkgKyAnX3RhcmdldEInXSArICdcIic7XHJcbiAgICAgICAgICAgICAgICBjb2RlX2xpbmVzICs9ICcgKTtcXG4nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBhbGVpU2V0dGluZ3MuZXh0ZW5kZWRUcmlnZ2VycyAmJiBmaXJzdF9zZWxlY3RlZF9vYmplY3QucG0uZXh0ZW5kZWQgJiYgaSArIDExIDw9IGZpcnN0X3NlbGVjdGVkX29iamVjdC5wbVtcInRvdGFsTnVtT2ZBY3Rpb25zXCJdOyArK2kpe1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpcnN0X3NlbGVjdGVkX29iamVjdC5wbVtcImFkZGl0aW9uYWxBY3Rpb25zXCJdW2ldID09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRyaWdnZXJfb3Bjb2RlX2FsaWFzZXNbZmlyc3Rfc2VsZWN0ZWRfb2JqZWN0LnBtW1wiYWRkaXRpb25hbEFjdGlvbnNcIl1baV1dID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICBjb2RlX2xpbmVzICs9ICdvcCcgKyBmaXJzdF9zZWxlY3RlZF9vYmplY3QucG1bXCJhZGRpdGlvbmFsQWN0aW9uc1wiXVtpXTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICBjb2RlX2xpbmVzICs9IHRyaWdnZXJfb3Bjb2RlX2FsaWFzZXNbZmlyc3Rfc2VsZWN0ZWRfb2JqZWN0LnBtW1wiYWRkaXRpb25hbEFjdGlvbnNcIl1baV1dO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvZGVfbGluZXMgKz0gJyggJztcclxuICAgICAgICAgICAgICAgIGNvZGVfbGluZXMgKz0gJ1wiJyArIGZpcnN0X3NlbGVjdGVkX29iamVjdC5wbVtcImFkZGl0aW9uYWxQYXJhbUFcIl1baV0gKyAnXCInO1xyXG4gICAgICAgICAgICAgICAgY29kZV9saW5lcyArPSAnLCAnO1xyXG4gICAgICAgICAgICAgICAgY29kZV9saW5lcyArPSAnXCInICsgZmlyc3Rfc2VsZWN0ZWRfb2JqZWN0LnBtW1wiYWRkaXRpb25hbFBhcmFtQlwiXVtpXSArICdcIic7XHJcbiAgICAgICAgICAgICAgICBjb2RlX2xpbmVzICs9ICcgKTtcXG4nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzdHIgKz0gY29kZV9saW5lcy5zcGxpdCgnPCcpLmpvaW4oJyZsdDsnKS5zcGxpdCgnPicpLmpvaW4oJyZndDsnKTtcclxuICAgICAgICAgICAgc3RyICs9ICc8L3RleHRhcmVhPic7XHJcbiAgICAgICAgICAgIHN0ciArPSAnPGEgY2xhc3M9XCJ0b29sX2J0biB0b29sX3dpZFwiIHN0eWxlPVwid2lkdGg6MTAwJTtoZWlnaHQ6NTBweDtkaXNwbGF5OmJsb2NrO2xpbmUtaGVpZ2h0OjUwcHg7XCIgb25tb3VzZWRvd249XCJpZiAoIENvbXBpbGVUcmlnZ2VyKCkgKSBVcGRhdGVHVUlQYXJhbXMoKTtcIj5BcHBseTwvYT48YnI+JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBOb3JtYWwgR1VJXHJcbiAgICAgICAgICAgIHZhciBwcmVfdGVtcCA9ICc8ZGl2IGlkPVwicnBhcmFtc1wiPjxkaXYgY2xhc3M9XCJwX2lcIj48c3BhbiBjbGFzcz1cInBhMSBwX3UxIHJfbHRcIj4nOyAgIC8vIFN0YXJ0IG9mZiB3aXRoIHJvdW5kZWQgY29ybmVyc1xyXG4gICAgICAgICAgICB2YXIgcG9zdF90ZW1wID0gJzo8L3NwYW4+PHNwYW4gY2xhc3M9XCJwYTIgcF91MiByX3J0XCIgb25jbGljaz1cImxldGVkaXQodGhpcywgXFwnJztcclxuICAgICAgICAgICAgdmFyIGxhc3RfaSA9IHBhcmFtc190b19kaXNwbGF5Lmxlbmd0aCAtIDI7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSW5kZXggdG8ga2VlcCB0cmFjayBvZiBsYXN0IHJvdy5cclxuICAgICAgICAgICAgdmFyIHZhbHVlO1xyXG5cclxuICAgICAgICAgICAgLy8gSXRlcmF0ZSB0aHJvdWdoIGFsbCB0aGUgcGFyYW1zIHRvIGRpc3BsYXkuXHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYXJhbXNfdG9fZGlzcGxheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtc2NvdW50X3RvX2Rpc3BsYXlbaV0gPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gR2VuUGFyYW1WYWwocGFyYW1fdHlwZVtwYXJhbXNfdG9fZGlzcGxheVtpXV1bMV0sIHBhcmFtc3ZhbHVlX3RvX2Rpc3BsYXlbaV0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSAnPG5vY2hhbmdlPi4uLjwvbm9jaGFuZ2U+JztcclxuXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50X2d1aV9wYXJhbXMucHVzaChwYXJhbV9hc3NvY2lhdGVkW2ldKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGluZyB0aGUgYWN0dWFsIHJvd1xyXG4gICAgICAgICAgICAgICAgc3RyICs9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJlX3RlbXAgK1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtX3R5cGVbcGFyYW1zX3RvX2Rpc3BsYXlbaV1dWzJdICsgICAgICAgLy8gTGFiZWwgb2YgdGhlIHJvdy4gRWc6IE5hbWVcclxuICAgICAgICAgICAgICAgICAgICBwb3N0X3RlbXAgK1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtX3R5cGVbcGFyYW1zX3RvX2Rpc3BsYXlbaV1dWzFdICAgICAgICAgLy8gVHlwZSBvZiBpbnB1dC4gRWc6IHN0cmluZ1xyXG4gICAgICAgICAgICAgICAgICAgICsgJ1xcJylcIiBvbk1vdXNlT3Zlcj1cImxldG92ZXIodGhpcywgXFwnJyArXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1fdHlwZVtwYXJhbXNfdG9fZGlzcGxheVtpXV1bMV1cclxuICAgICAgICAgICAgICAgICAgICArICdcXCcpXCIgaWQ9XCInICsgJ3BtXycgK1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtX3R5cGVbcGFyYW1zX3RvX2Rpc3BsYXlbaV1dWzBdICAgICAgICAgLy8gTmFtZSBvZiBwcm9wZXJ0eS4gRWc6IF9fel9JbmRleFxyXG4gICAgICAgICAgICAgICAgICAgICsgJ1wiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlICsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVmFsdWUgb2YgcHJvZXJ0eS4gRWc6IDFcclxuICAgICAgICAgICAgICAgICAgICAnPC9zcGFuPjwvZGl2Pic7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQWRkIGEgdGlueSBnYXAgdG8gc3BsaXQgZXZlcnkgdHJpZ2dlciBhY3Rpb24uXHJcbiAgICAgICAgICAgICAgICBpZiAoZmlyc3Rfc2VsZWN0ZWRfb2JqZWN0Ll9jbGFzcyA9PSAndHJpZ2dlcicpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPj0gc3RhcnRTZXBhcmF0b3JGcm9tICYmIChpIC0gc3RhcnRTZXBhcmF0b3JGcm9tKSAlIDMgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHIgKz0gJzxkaXYgc3R5bGU9XCJoZWlnaHQ6MnB4XCI+PC9kaXY+JztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gTGFzdCByb3cgd2lsbCBoYXZlIGJvdHRvbSByb3VuZGVkIGNvcm5lcnMgJ3JfbGInLCBleGNlcHQgZm9yIHRyaWdnZXJzLlxyXG4gICAgICAgICAgICAgICAgaWYgKGZpcnN0X3NlbGVjdGVkX29iamVjdC5fY2xhc3MgIT0gJ3RyaWdnZXInICYmIGkgPT0gbGFzdF9pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJlX3RlbXAgPSAnPGRpdiBjbGFzcz1cInBfaVwiPjxzcGFuIGNsYXNzPVwicGExIHBfdTAgcl9sYlwiPic7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdF90ZW1wID0gJzo8L3NwYW4+PHNwYW4gY2xhc3M9XCJwYTIgcF91MCByX3JiXCIgb25jbGljaz1cImxldGVkaXQodGhpcywgXFwnJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRmlyc3Qgcm93IGhhcyB0b3Agcm91bmRlZCBjb3JuZXJzLCBub3cgY2hhbmdlIGl0IHRvIG5vIHJvdW5kZWQgY29ybmVycy5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJlX3RlbXAgPSAnPGRpdiBjbGFzcz1cInBfaVwiPjxzcGFuIGNsYXNzPVwicGExIHBfdTFcIj4nO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc3RfdGVtcCA9ICc6PC9zcGFuPjxzcGFuIGNsYXNzPVwicGEyIHBfdTJcIiBvbmNsaWNrPVwibGV0ZWRpdCh0aGlzLCBcXCcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBEaXNwbGF5IGFkZGl0aW9uYWwgdHJpZ2dlciBhY3Rpb25zIGZvciBleHRlbmRlZCB0cmlnZ2Vycy5cclxuICAgICAgICAgICAgaWYgKHNlbGVjdHMgPT0gMSAmJiBmaXJzdF9zZWxlY3RlZF9vYmplY3QuX2NsYXNzID09ICd0cmlnZ2VyJyAmJiBmaXJzdF9zZWxlY3RlZF9vYmplY3QucG1bXCJleHRlbmRlZFwiXSkge1xyXG4gICAgICAgICAgICAgICAgLy9zZWxlY3RpbmdBRXh0ZW5kZWRUcmlnZ2VyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDEwOyBpIDwgZmlyc3Rfc2VsZWN0ZWRfb2JqZWN0LnBtW1widG90YWxOdW1PZkFjdGlvbnNcIl07ICsraSl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRyaWdnZXJBY3Rpb24gPSBmaXJzdF9zZWxlY3RlZF9vYmplY3QucG1bXCJhZGRpdGlvbmFsQWN0aW9uc1wiXVtpIC0gMTBdID09PSB1bmRlZmluZWQgPyAtMSA6IGZpcnN0X3NlbGVjdGVkX29iamVjdC5wbVtcImFkZGl0aW9uYWxBY3Rpb25zXCJdW2kgLSAxMF07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhcmFtQSAgICAgICAgPSBmaXJzdF9zZWxlY3RlZF9vYmplY3QucG1bXCJhZGRpdGlvbmFsUGFyYW1BXCJdW2kgLSAxMF0gID09PSB1bmRlZmluZWQgPyAwICA6IGZpcnN0X3NlbGVjdGVkX29iamVjdC5wbVtcImFkZGl0aW9uYWxQYXJhbUFcIl1baSAtIDEwXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcGFyYW1CICAgICAgICA9IGZpcnN0X3NlbGVjdGVkX29iamVjdC5wbVtcImFkZGl0aW9uYWxQYXJhbUJcIl1baSAtIDEwXSAgPT09IHVuZGVmaW5lZCA/IDAgIDogZmlyc3Rfc2VsZWN0ZWRfb2JqZWN0LnBtW1wiYWRkaXRpb25hbFBhcmFtQlwiXVtpIC0gMTBdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyByb3dIVE1MIHJlcHJlc2VudHMgYWxsIHRoZSBIVE1MIHRvIGRpc3BsYXkgYSBzZXQgb2YgdHJpZ2dlcnMgYW5kIHBhcmFtZXRlcnMgKDMgcm93cykuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJvd0h0bWwgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwX2lcIj48c3BhbiBjbGFzcz1cInBhMSBwX3UxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFjdGlvbiAnJHtpICsgMX0nIHR5cGU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj48c3BhbiBjbGFzcz1cInBhMiBwX3UyIHJfcnRcIiBvbmNsaWNrPVwibGV0ZWRpdCh0aGlzLCAndHJpZ2dlcl90eXBlJylcIiBvbm1vdXNlb3Zlcj1cImxldG92ZXIodGhpcywgJ3RyaWdnZXJfdHlwZScpXCIgaWQ9J3BtX2FjdGlvbnNfJHtpICsgMX1fdHlwZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cHZhbHVlIHJlYWw9JyR7dHJpZ2dlckFjdGlvbn0nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzcGVjaWFsX3ZhbHVlc190YWJsZVsndHJpZ2dlcl90eXBlJ11bdHJpZ2dlckFjdGlvbl19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3B2YWx1ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBfaVwiPjxzcGFuIGNsYXNzPVwicGExIHBfdTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLSBwYXJhbWV0ZXIgQTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPjxzcGFuIGNsYXNzPVwicGEyIHBfdTIgcl9ydFwiIG9uY2xpY2s9XCJsZXRlZGl0KHRoaXMsICdub19jaGFuZ2UnKVwiIG9ubW91c2VvdmVyPVwibGV0b3Zlcih0aGlzLCAnbm9fY2hhbmdlJylcIiBpZD0ncG1fYWN0aW9uc18ke2kgKyAxfV90YXJnZXRBJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwdmFsdWUgcmVhbD0nJHtwYXJhbUF9Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcke3BhcmFtQX0nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3B2YWx1ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBfaVwiPjxzcGFuIGNsYXNzPVwicGExIHBfdTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLSBwYXJhbWV0ZXIgQjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPjxzcGFuIGNsYXNzPVwicGEyIHBfdTIgcl9ydFwiIG9uY2xpY2s9XCJsZXRlZGl0KHRoaXMsICdub19jaGFuZ2UnKVwiIG9ubW91c2VvdmVyPVwibGV0b3Zlcih0aGlzLCAnbm9fY2hhbmdlJylcIiBpZD0ncG1fYWN0aW9uc18ke2kgKyAxfV90YXJnZXRCJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwdmFsdWUgcmVhbD0nJHtwYXJhbUJ9Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcke3BhcmFtQn0nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3B2YWx1ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImhlaWdodDoycHhcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIENyZWF0aW5nIHRoZSBhY3R1YWwgcm93XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyICs9IHJvd0h0bWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEFkZCBlZGl0IHRleHQgYnV0dG9uLlxyXG4gICAgICAgIGlmIChzZWxlY3RzID09IDEgJiYgZmlyc3Rfc2VsZWN0ZWRfb2JqZWN0Ll9jbGFzcyA9PSAndHJpZ2dlcicpIHtcclxuICAgICAgICAgICAgaWYgKGVkaXRfdHJpZ2dlcnNfYXNfdGV4dClcclxuICAgICAgICAgICAgICAgIHN0ciArPSAnPGEgY2xhc3M9XCJ0b29sX2J0biB0b29sX3dpZFwiIHN0eWxlPVwid2lkdGg6MTAwJTtkaXNwbGF5OmJsb2NrO1wiIG9ubW91c2Vkb3duPVwiZWRpdF90cmlnZ2Vyc19hc190ZXh0PSFlZGl0X3RyaWdnZXJzX2FzX3RleHQ7VXBkYXRlR1VJUGFyYW1zKClcIj5FZGl0IHRyaWdnZXJzIGFzIHBhcmFtIGxpc3Q8L2E+JztcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgc3RyICs9ICc8YSBjbGFzcz1cInRvb2xfYnRuIHRvb2xfd2lkXCIgc3R5bGU9XCJ3aWR0aDoxMDAlO2Rpc3BsYXk6YmxvY2s7XCIgb25tb3VzZWRvd249XCJlZGl0X3RyaWdnZXJzX2FzX3RleHQ9IWVkaXRfdHJpZ2dlcnNfYXNfdGV4dDtVcGRhdGVHVUlQYXJhbXMoKVwiPkVkaXQgdHJpZ2dlcnMgYXMgdGV4dDwvYT4nO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdHIgKz0gJzwvZGl2Pic7XHJcbiAgICAgICAgZ3VpX3BhcmFtcy5pbm5lckhUTUwgPSBzdHI7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgR1VJIHRvIGl0J3Mgb3JpZ2luYWwgc2Nyb2xsLlxyXG4gICAgICAgIGd1aUhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJycGFyYW1zXCIpO1xyXG5cclxuICAgICAgICBpZihndWlIVE1MRWxlbWVudCl7XHJcbiAgICAgICAgICAgIGd1aUhUTUxFbGVtZW50LnNjcm9sbFRvcCA9IGFtb3VudFRvU2Nyb2xsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgU3RyZWV0TWFnaWMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqICBUaGlzIGZ1bmN0aW9uIGlzIGludm9rZWQgd2hlbmV2ZXIgc29tZW9uZSBjbGlja3Mgb24gYW4gb3B0aW9uIGluIHRoZSBkcm9wZG93biBtZW51IG9mIHBhcmFtZXRlciB2YWx1ZXMuXHJcbiAgICAgKiAgRm9yIGV4YW1wbGUsIGNsaWNraW5nIG9uIFwiRm9yY2UgTW92YWJsZSAnQScgbW92ZSB0byBSZWdpb24gJ0InXCJcclxuICAgICAqXHJcbiAgICAgKiAgUHJvbXB0cyBmb3IgZnVydGhlciBpbnB1dCBpZiByZXF1aXJlZCBhbmQgdXBkYXRlcyB0aGUgR1VJLlxyXG4gICAgICpcclxuICAgICAqICBAcGFyYW0ge3N0cmluZ30gdmFsMSAgICBUaGUgcmVhbCBhY3R1YWwgdmFsdWUuXHJcbiAgICAgKiAgQHBhcmFtIHtzdHJpbmd9IHZhbDIgICAgTmFtZSAvIExhYmVsIG9mIHRoZSB2YWx1ZSBjbGlja2VkLlxyXG4gICAgICogIEBwYXJhbSB7c3RyaW5nfSBkZWZ2YWwgIFByZXZpb3VzIHJlYWwgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHNldGxldGVkaXQodmFsMSwgdmFsMiwgZGVmdmFsKSB7XHJcbiAgICAgICAgY29uc3Qgc2tpcFRyaWdnZXJBY3Rpb25zID0gWzEyMywgMzYxLCAzNjQsIDM2NV07XHJcblxyXG4gICAgICAgIC8vIEdldCB0aGUgbnVtYmVyIGFuZCB0cmlnZ2VyIHR5cGUuXHJcbiAgICAgICAgbGV0IHJlZ2V4ID0gL2FjdGlvbnNfKFxcZCspXyh0YXJnZXRBfHRhcmdldEJ8dHlwZSkvZztcclxuICAgICAgICBsZXQgbWF0Y2ggPSBBcnJheS5mcm9tKGxldHRhcmdldC5pZC5yZXBsYWNlKCdwbV8nLCAnJykubWF0Y2hBbGwocmVnZXgpKVswXTtcclxuXHJcbiAgICAgICAgLy8gRGlzYWxsb3cgc2tpcCB0cmlnZ2VyIGFjdGlvbnMgZXZlcnkgOXRoIHRyaWdnZXIgYWN0aW9uIGZvciB0cmlnZ2Vycy5cclxuICAgICAgICBpZihcclxuICAgICAgICAgICAgTnVtYmVyKG1hdGNoICYmIG1hdGNoWzFdKSAlIDkgPT09IDAgJiYgbWF0Y2hbMl0gPT09ICd0eXBlJyAmJiBza2lwVHJpZ2dlckFjdGlvbnMuaW5jbHVkZXMoTnVtYmVyKHZhbDEpKVxyXG4gICAgICAgICl7XHJcbiAgICAgICAgICAgIE5ld05vdGUoXCJEdWUgdG8gaG93IGV4dGVuZGVkIHRyaWdnZXJzIGlzIGltcGxlbWVudGVkLCBza2lwIHRyaWdnZXIgYWN0aW9ucyBhcmUgZGlzYWJsZWQgZXZlcnkgOXRoIHRyaWdnZXIgYWN0aW9uLiBMZWF2ZSBhICdEbyBOb3RoaW5nJyB0cmlnZ2VyIGFjdGlvbiBoZXJlIGluc3RlYWQuXCIsIG5vdGVfYmFkKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcXVpY2tfcGljayA9IGZhbHNlO1xyXG4gICAgICAgIHF1aWNrX3BpY2tfaWdub3JlX29uZV9jbGljayA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyBDbGlja2VkIG9uIGEgdmFsdWUgdGhhdCBwcm9tcHRzIGZvciBhIG51bWJlci4gTGlrZSBudW1iZXIgb2YgdHJpZ2dlciBjYWxscy5cclxuICAgICAgICBpZiAodmFsMS5pbmRleE9mKCdbdmFsXScpICE9IC0xKSB7XHJcbiAgICAgICAgICAgIGRlZnZhbCA9IE1hdGguYWJzKE51bWJlcihkZWZ2YWwpKTtcclxuICAgICAgICAgICAgdmFyIHR4dCA9IHByb21wdCgnRW50ZXIgdmFsdWU6JywgZGVmdmFsKTtcclxuICAgICAgICAgICAgdmFyIGdvdHZhbDtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eHQgPT0gbnVsbCB8fCB0eHQgPT0gJycpIHtcclxuICAgICAgICAgICAgICAgIGdvdHZhbCA9IE1hdGguYWJzKGRlZnZhbCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBnb3R2YWwgPSBNYXRoLmFicyh0eHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhbDEgPSBldmFsKHZhbDEucmVwbGFjZSgnW3ZhbF0nLCBnb3R2YWwpKTtcclxuICAgICAgICAgICAgdmFsMiA9IHZhbDIucmVwbGFjZSgnIycsIGdvdHZhbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDbGlja2VkIG9uIGEgdmFsdWUgdGhhdCBwcm9tcHRzIGZvciBhIGhleCBjb2xvdXIgY29kZS5cclxuICAgICAgICBlbHNlIGlmICh2YWwxLmluZGV4T2YoJ1tjb2xvcl0nKSAhPSAtMSkge1xyXG4gICAgICAgICAgICBkZWZ2YWwgPSBNYXRoLmFicyhOdW1iZXIoZGVmdmFsKSk7XHJcbiAgICAgICAgICAgIHZhciBnb3R2YWwgPSBwcm9tcHQoJ0VudGVyIHZhbHVlIGluIGZvcm1hdCAjWFhYWFhYOicsIGRlZnZhbCk7XHJcbiAgICAgICAgICAgIGlmIChnb3R2YWwuY2hhckF0KDApICE9ICcjJykge1xyXG4gICAgICAgICAgICAgICAgZ290dmFsID0gJyMnICsgZ290dmFsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChnb3R2YWwubGVuZ3RoICE9IDcpXHJcbiAgICAgICAgICAgICAgICBhbGVydCgnVmFsdWUgJyArIGdvdHZhbCArICcgaXMgbm90IGNvcnJlY3QuIFZhbGlkIHZhbHVlIG11c3QgYmUgaW4gZm9ybWF0ICNYWFhYWFguIFJlYWQgYWJvdXQgXCJoZXggY29sb3IgY29kZXNcIiBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nKTtcclxuICAgICAgICAgICAgdmFsMSA9IHZhbDEucmVwbGFjZSgnW2NvbG9yXScsIGdvdHZhbCk7XHJcbiAgICAgICAgICAgIHZhbDIgPSB2YWwyLnJlcGxhY2UoJyMnLCBnb3R2YWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVXBkYXRlcyB0aGUgR1VJIHdpdGggbmV3IHZhbHVlLlxyXG4gICAgICAgIGZmLnZhbHVlID0gJzxwdmFsdWUgcmVhbD1cIicgKyB2YWwxICsgJ1wiPicgKyB2YWwyICsgJzwvcHZhbHVlPic7XHJcblxyXG4gICAgICAgIGxldHRhcmdldC5pbm5lckhUTUwgPSBmZi52YWx1ZTtcclxuICAgICAgICBmZi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIGZmX2Ryb3Auc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBsZXRlZGl0aW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgIFVwZGF0ZVBoeXNpY2FsUGFyYW0oKGxldHRhcmdldC5pZC5yZXBsYWNlKCdwbV8nLCAnJykpLCB2YWwxKTtcclxuXHJcbiAgICAgICAgdmFyIHBhcmFtZXRlcl91cGRhdGVkID0gbGV0dGFyZ2V0LmlkLnJlcGxhY2UoJ3BtXycsICcnKTtcclxuXHJcbiAgICAgICAgaWYgKHBhcmFtZXRlcl91cGRhdGVkID09ICdtYXJrJyB8fCAocGFyYW1ldGVyX3VwZGF0ZWQuaW5kZXhPZignYWN0aW9uc18nKSAhPSAtMSAmJiBwYXJhbWV0ZXJfdXBkYXRlZC5pbmRleE9mKCdfdHlwZScpICE9IC0xKSlcclxuICAgICAgICAgICAgU3RyZWV0TWFnaWMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFBhdGNoZXMgdGhlIGN1cnJlbnQgaW1wbGVtZW50YXRpb24gb2YgU3RyZWV0TWFnaWMgdG8gc3VwcG9ydCB0aGUgaW1wbGVtZW50YXRpb24gb2YgZXh0ZW5kZWQgdHJpZ2dlciBsaXN0LlxyXG4gICAgICogU3RyZWV0TWFnaWMgYWxsb3dzIHRoZSBwYXJhbWV0ZXIgdG8gY2hhbmdlIGl0J3MgdHlwZSBcInRyaWdnZXIrbm9uZSB0byB2YWx1ZSBmb3IgYW4gZXhhbXBsZVwiLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBTdHJlZXRNYWdpYygpIHtcclxuICAgICAgICB2YXIgbWFya19vYmogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG1fbWFyaycpO1xyXG5cclxuICAgICAgICAvLyBGaW5kcyBlbmdpbmUgbWFyay5cclxuICAgICAgICBpZiAobWFya19vYmogIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB2YXIgb3VyX2Nhc2UgPSBtYXJrX3BhaXJzWydtYXJrXycgKyBpbm5lckhUTUxfdG9fdmFsdWUobWFya19vYmouaW5uZXJIVE1MKV07XHJcbiAgICAgICAgICAgIHZhciB2YWxvYmogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBtX2ZvcnRlYW1cIik7XHJcbiAgICAgICAgICAgIGlmIChvdXJfY2FzZSA9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICBvdXJfY2FzZSA9ICdub2NoYW5nZSc7XHJcbiAgICAgICAgICAgIGV2YWwoJ3ZhbG9iai5vbmNsaWNrID0gZnVuY3Rpb24oZSl7bGV0ZWRpdCh0aGlzLCBcXCcnICsgb3VyX2Nhc2UgKyAnXFwnKTt9Jyk7XHJcbiAgICAgICAgICAgIGV2YWwoJ3ZhbG9iai5vbm1vdXNlb3ZlciA9IGZ1bmN0aW9uKGUpe2xldG92ZXIodGhpcywgXFwnJyArIG91cl9jYXNlICsgJ1xcJyk7fScpO1xyXG4gICAgICAgICAgICB2YWxvYmouaW5uZXJIVE1MID0gR2VuUGFyYW1WYWwob3VyX2Nhc2UsIGlubmVySFRNTF90b192YWx1ZSh2YWxvYmouaW5uZXJIVE1MKSk7XHJcblxyXG4gICAgICAgICAgICAvLyBFYXJseSBleGl0LCB3ZSBhcmUgZG9uZSBoZXJlIHdpdGggZW5naW5lIG1hcmsuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEdldCBjdXJyZW50IHNlbGVjdGlvbiBhbmQgY2hlY2sgaWYgaXQncyBhbiB0cmlnZ2VyLlxyXG4gICAgICAgIGxldCBzZWxlY3RlZCA9IFNlbGVjdGVkT2JqZWN0cztcclxuICAgICAgICBsZXQgdG90YWxOdW1PZkFjdGlvbnMgPSAxMDtcclxuICAgICAgICBsZXQgaXNUcmlnZ2VyID0gZmFsc2U7XHJcbiAgICAgICAgaWYoc2VsZWN0ZWQubGVuZ3RoID09IDEgJiYgc2VsZWN0ZWRbMF0uX2NsYXNzID09IFwidHJpZ2dlclwiKXtcclxuICAgICAgICAgICAgaXNUcmlnZ2VyID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIGl0J3MgYW4gZXh0ZW5kZWQgdHJpZ2dlci5cclxuICAgICAgICAgICAgaWYoc2VsZWN0ZWRbMF0ucG1bXCJleHRlbmRlZFwiXSl7XHJcbiAgICAgICAgICAgICAgICB0b3RhbE51bU9mQWN0aW9ucyA9IHNlbGVjdGVkWzBdLnBtW1widG90YWxOdW1PZkFjdGlvbnNcIl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEVhcmx5IGV4aXQgaWYgaXQncyBub3QgYSB0cmlnZ2VyLlxyXG4gICAgICAgIGlmKCFpc1RyaWdnZXIpe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJdGVyYXRlIHRocm91Z2ggYWxsIHRoZSB0cmlnZ2VyIGFjdGlvbnMgYW5kIG1vZGlmeSB0aGVpciBwYXJhbWV0ZXIgdHlwZSB0byByZWZsZWN0IG9uIHRoZSByZXNwZWN0aXZlIHRyaWdnZXIgYWN0aW9ucy5cclxuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8PSB0b3RhbE51bU9mQWN0aW9uczsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBtYXJrX29iaiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbV9hY3Rpb25zXycgKyBpICsgJ190eXBlJyk7XHJcbiAgICAgICAgICAgIGlmIChtYXJrX29iaiA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVpTG9nKFNXQVJOLCBcIkZhaWxlZCB0byByZXRyaWV2ZSBIVE1MIGVsZW1lbnQgb2YgcHJvcGVydHkgdG8gZHluYW1pY2FsbHkgYXBwbHkgcHJvcGVydHkgdHlwZS5cIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGNhc2VzID0gJ0EnO1xyXG4gICAgICAgICAgICAvLyBBbHRlcm5hdGUgdGhyb3VnaCBwYXJhbWV0ZXIgQSBhbmQgQi5cclxuICAgICAgICAgICAgZm9yICh2YXIgaTIgPSAwOyBpMiA8IDI7IGkyKyspIHtcclxuICAgICAgICAgICAgICAgIC8vIFJldHJpZXZlIHRoZSBjb3JyZXNwb25kaW5nIHBhcmFtZXRlciB0eXBlIGJhc2VkIG9uIHRyaWdnZXIgYWN0aW9uLlxyXG4gICAgICAgICAgICAgICAgdmFyIG91cl9jYXNlID0gbWFya19wYWlyc1sndHJpZ2dlcl90eXBlXycgKyBjYXNlcyArIGlubmVySFRNTF90b192YWx1ZShtYXJrX29iai5pbm5lckhUTUwpXTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBSZXRyaWV2ZSB0aGUgY29ycmVzcG9uZGluZyBIVE1MIGVsZW1lbnQuXHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsb2JqID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BtX2FjdGlvbnNfJyArIGkgKyAnX3RhcmdldCcgKyBjYXNlcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG91cl9jYXNlID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG91cl9jYXNlID0gJ25vY2hhbmdlJztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBldmFsKCd2YWxvYmoub25jbGljayA9IGZ1bmN0aW9uKGUpe2xldGVkaXQodGhpcywgXFwnJyArIG91cl9jYXNlICsgJ1xcJyk7fScpO1xyXG4gICAgICAgICAgICAgICAgZXZhbCgndmFsb2JqLm9ubW91c2VvdmVyID0gZnVuY3Rpb24oZSl7bGV0b3Zlcih0aGlzLCBcXCcnICsgb3VyX2Nhc2UgKyAnXFwnKTt9Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFsb2JqLmlubmVySFRNTCA9IEdlblBhcmFtVmFsKG91cl9jYXNlLCBpbm5lckhUTUxfdG9fdmFsdWUodmFsb2JqLmlubmVySFRNTCkpO1xyXG4gICAgICAgICAgICAgICAgY2FzZXMgPSAnQic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG9sZFNhdmVUaGlzTWFwID0gd2luZG93LlNhdmVUaGlzTWFwO1xyXG4gICAgLyoqXHJcbiAgICAgKiAgVGhpcyBmdW5jdGlvbiBleHRlbmRzIHRoZSBTYXZlVGhpc01hcCBmdW5jdGlvbmFsaXR5IGJ5IGZpcnN0IHBhcnNpbmcgYWxsIGluc3RhbmNlcyBvZiBleHRlbmRlZCB0cmlnZ2VycyBpbnRvIGEgbGlua2VkIGxpc3Qgb2Ygbm9ybWFsIHRyaWdnZXJzLlxyXG4gICAgICpcclxuICAgICAqICBbRlJPTV0gICAgICAgICAgICAgICAgICAgICAgIHwgICAgW1RPXVxyXG4gICAgICogIHRyaWdnZXIqMSAgICAgICAgICAgICAgICAgICAgfCAgICB0cmlnZ2VyKjEgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXIqMyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlciozXHJcbiAgICAgKiAgZXh0ZW5kZWQ6ICAgICAgICAgICB0cnVlICAgICB8ICAgIGV4dGVuZGVkOiAgICAgICAgICAgdHJ1ZSAgICAgICAgICAgICAgKmRlbGV0ZWQqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqZGVsZXRlZCpcclxuICAgICAqICB0b3RhbE51bU9mQWN0aW9uczogIDI1ICAgICAgIHwgICAgdG90YWxOdW1PZkFjdGlvbnM6ICAyNSAgICAgICAgICAgICAgICAqZGVsZXRlZCogICAgICAgICAgICAgICAgICAgICAgICAgICAgICpkZWxldGVkKlxyXG4gICAgICogIGFkZGl0aW9uYWxBY3Rpb25zOiAgWy4uXSAgICAgfCAgICAqZGVsZXRlZCogICAgICAgICAgICAgICAgICAgICAgICAgICAgICpkZWxldGVkKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKmRlbGV0ZWQqXHJcbiAgICAgKiAgYWRkaXRpb25hbFBhcmFtQTogICBbLi5dICAgICB8ICAgICpkZWxldGVkKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKmRlbGV0ZWQqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqZGVsZXRlZCpcclxuICAgICAqICBhZGRpdGlvbmFsUGFyYW1COiAgIFsuLl0gICAgIHwgICAgKmRlbGV0ZWQqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqZGVsZXRlZCogICAgICAgICAgICAgICAgICAgICAgICAgICAgICpkZWxldGVkKlxyXG4gICAgICogIGFjdGlvbnMxLTEwICAgICAgICAgWy4uXSAgICAgfCAgICBhY3Rpb25zMS05ICAgICAgICAgIFsuLl0gICAgICAgICAgICAgIGFjdGlvbnMxLTkgICBbLi5dICAgICAgICAgICAgICAgICAgICAgYWN0aW9uczEtNyAgICBbLi5dXHJcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgIGFjdGlvbnMxMCAgICAgICAgICAgdHJpZ2dlcioyICAgICAgICAgYWN0aW9uczEwICAgIHRyaWdnZXIqMyAgICAgICAgICAgICAgICBhY3Rpb25zOC0xMCAgIERvIG5vdGhpbmcuXHJcbiAgICAgKlxyXG4gICAgICpcclxuICAgICAqICBAcGFyYW0geyp9IHRlbXBfdG9fcmVhbF9jb21waWxlX2RhdGEgICAgIFBhcmFtZXRlcnMgdGhhdCB0aGUgb2xkIFNhdmVUaGlzTWFwIHVzZXMuIChubyBpZGVhIHdoYXQgaXQgaXMgdGJoKVxyXG4gICAgICogIEBwYXJhbSB7Kn0gY2FsbGJhY2sgICAgICAgICAgICAgICAgICAgICAgUGFyYW1ldGVycyB0aGF0IHRoZSBvbGQgU2F2ZVRoaXNNYXAgdXNlcy4gKG5vIGlkZWEgd2hhdCBpdCBpcyB0YmgpXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIFNhdmVUaGlzTWFwKHRlbXBfdG9fcmVhbF9jb21waWxlX2RhdGE9JycsIGNhbGxiYWNrPW51bGwpIHtcclxuICAgICAgICBjb25zdCBnYXBCZXR3ZWVuVHJpZ2dlciA9IDQwO1xyXG4gICAgICAgIGNvbnN0IGV4ZWN1dGVUcmlnZ2VyQWN0aW9uID0gOTk7IC8vIFJlcXVpcmVkIGZvciBtYWluIC0+IGNoaWxkIGlmIHdlIHdhbnQgbWFpbiB0cmlnZ2VyJ3MgbWF4Y2FsbHMgYmUgaW4gZWZmZWN0LlxyXG4gICAgICAgIGNvbnN0IHN3aXRjaEV4ZWN1dGlvbkFjdGlvbiA9IDM2MztcclxuXHJcbiAgICAgICAgLy8gS2VlcCBhIHJlZmVyZW5jZSB0byBhbGwgdGhlIG5ld2x5IGdlbmVyYXRlZCB0cmlnZ2Vycywgc28gd2UgY2FuIGRlbGV0ZSB0aGVtIGluIHRoZSBlbmQuXHJcbiAgICAgICAgbGV0IGFsbEdlbmVyYXRlZFRyaWdnZXJzID0gbmV3IEFycmF5KCk7XHJcblxyXG4gICAgICAgIC8vIEtlZXAgYSBjb3B5IG9mIHRoZSBwcm9wZXJ0aWVzIGFsbCBleHRlbmRlZCB0cmlnZ2Vycy4gV2Ugd2lsbCB0ZW1wb3JhcmlseSBkZWxldGUgdGhlc2UgYWRkaXRpb25hbCBwcm9wZXJ0aWVzIGJlZm9yZVxyXG4gICAgICAgIC8vIGZpbGUgc2F2ZSB0aGVuIHJlc3RvcmUgdGhlbSBiYWNrIHRvIHRoZSByZXNwZWN0aXZlIHRyaWdnZXJzLlxyXG4gICAgICAgIGxldCBhbGxBZGRpdGlvbmFsQWN0aW9ucyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIGxldCBhbGxBZGRpdGlvbmFsUGFyYW1BID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgbGV0IGFsbEFkZGl0aW9uYWxQYXJhbUIgPSBuZXcgQXJyYXkoKTtcclxuXHJcbiAgICAgICAgLy8gRm9yIGV2ZXJ5IGV4dGVuZGVkIHRyaWdnZXIuLlxyXG4gICAgICAgIGZvcihjb25zdCBlbnRpdHkgb2YgZXMpe1xyXG4gICAgICAgICAgICBpZighZW50aXR5LmV4aXN0cykgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZihlbnRpdHkuX2NsYXNzICE9PSBcInRyaWdnZXJcIikgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmKCFlbnRpdHkucG1bXCJleHRlbmRlZFwiXSkgICAgICBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRoZSBmaXJzdCB0cmlnZ2VyIGNhbiBvbmx5IHN0b3JlIDkgYWN0aW9ucywgYXMgdGhlIGxhc3Qgb25lIGlzIHJlcXVpcmVkIHRvIGV4ZWN1dGUgdGhlIG5leHQgb25lLlxyXG4gICAgICAgICAgICAvLyBMZXQncyBwdXNoIHRoZSAxMHRoIG9uZSB0byB0aGUgZnJvbnQgb2YgcmVzcGVjdGl2ZSBhcnJheXMuXHJcbiAgICAgICAgICAgIGVudGl0eS5wbVtcImFkZGl0aW9uYWxBY3Rpb25zXCJdLnVuc2hpZnQoZW50aXR5LnBtW1wiYWN0aW9uc18xMF90eXBlXCJdKTtcclxuICAgICAgICAgICAgZW50aXR5LnBtW1wiYWRkaXRpb25hbFBhcmFtQVwiXS51bnNoaWZ0KGVudGl0eS5wbVtcImFjdGlvbnNfMTBfdGFyZ2V0QVwiXSk7XHJcbiAgICAgICAgICAgIGVudGl0eS5wbVtcImFkZGl0aW9uYWxQYXJhbUJcIl0udW5zaGlmdChlbnRpdHkucG1bXCJhY3Rpb25zXzEwX3RhcmdldEJcIl0pO1xyXG5cclxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIGFuZCBjcmVhdGUgdGhlIG51bWJlciBvZiB0cmlnZ2VycyB3ZSBuZWVkLlxyXG4gICAgICAgICAgICBjb25zdCB0cmlnZ2Vyc1RvQ3JlYXRlID0gTWF0aC5mbG9vcigoZW50aXR5LnBtW1widG90YWxOdW1PZkFjdGlvbnNcIl0gLSAxKSAvIDkpO1xyXG4gICAgICAgICAgICBsZXQgICBzdGFydFggPSBlbnRpdHkucG1bXCJ4XCJdICsgZ2FwQmV0d2VlblRyaWdnZXI7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0WSA9IGVudGl0eS5wbVtcInlcIl07XHJcblxyXG4gICAgICAgICAgICAvLyBBdXRvIGdlbmVyYXRlIGFsbCB0aGUgbmVjZXNzYXJ5IHRyaWdnZXJzLiBTcGFjZSB0aGVtIG91dCBldmVubHkuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0cmlnZ2Vyc1RvQ3JlYXRlOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgbGV0IG5hbWUgPSBgJHtlbnRpdHkucG1bXCJ1aWRcIl19J3MgZXh0ZW5kZWQgdHJpZ2dlciBubzogJHtpfS5gXHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3VHJpZ2dlciA9IG5ldyBFKFwidHJpZ2dlclwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTZXQgcHJvcGVydGllcy5cclxuICAgICAgICAgICAgICAgIG5ld1RyaWdnZXIucG1bXCJ4XCJdID0gc3RhcnRYO1xyXG4gICAgICAgICAgICAgICAgbmV3VHJpZ2dlci5wbVtcInlcIl0gPSBzdGFydFk7XHJcbiAgICAgICAgICAgICAgICBuZXdUcmlnZ2VyLnBtW1widWlkXCJdID0gbmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBJZiBpdCdzIHRoZSBmaXJzdCB0cmlnZ2VyLCBsZXQgdGhlIG1haW4gZXh0ZW5kZWQgdHJpZ2dlciBwb2ludCB0byB0aGlzLlxyXG4gICAgICAgICAgICAgICAgaWYoaSA9PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHkucG1bYGFjdGlvbnNfMTBfdHlwZWBdID0gZXhlY3V0ZVRyaWdnZXJBY3Rpb247XHJcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5LnBtW2BhY3Rpb25zXzEwX3RhcmdldEFgXSA9IG5hbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gSWYgbm90IHRoZSBsYXN0IHRyaWdnZXIsIHBvaW50IHRvIHRoZSBuZXh0IHRyaWdnZXIuXHJcbiAgICAgICAgICAgICAgICBpZihpIDwgdHJpZ2dlcnNUb0NyZWF0ZSAtIDEpe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUgPSBgJHtlbnRpdHkucG1bXCJ1aWRcIl19J3MgZXh0ZW5kZWQgdHJpZ2dlciBubzogJHtpICsgMX0uYFxyXG4gICAgICAgICAgICAgICAgICAgIG5ld1RyaWdnZXIucG1bYGFjdGlvbnNfMTBfdHlwZWBdID0gc3dpdGNoRXhlY3V0aW9uQWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1RyaWdnZXIucG1bYGFjdGlvbnNfMTBfdGFyZ2V0QWBdID0gbmFtZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTZXQgdHJpZ2dlciBhY3Rpb24gYW5kIHBhcmFtZXRlcnNcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgYWN0aW9uTnVtID0gMTsgYWN0aW9uTnVtIDwgMTA7IGFjdGlvbk51bSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBpICogOSArIChhY3Rpb25OdW0gLSAxKTsgICAgLy8gMC04LCA5LTE3LCAxOC0yNiwgLi4uXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG5ld1RyaWdnZXIucG1bYGFjdGlvbnNfJHthY3Rpb25OdW19X3R5cGVgXSAgICA9IGVudGl0eS5wbVtcImFkZGl0aW9uYWxBY3Rpb25zXCJdW2luZGV4XSA9PT0gdW5kZWZpbmVkID8gLTEgOiBlbnRpdHkucG1bXCJhZGRpdGlvbmFsQWN0aW9uc1wiXVtpbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3VHJpZ2dlci5wbVtgYWN0aW9uc18ke2FjdGlvbk51bX1fdGFyZ2V0QWBdID0gZW50aXR5LnBtW1wiYWRkaXRpb25hbFBhcmFtQVwiXVtpbmRleF0gID09PSB1bmRlZmluZWQgPyAwIDogIGVudGl0eS5wbVtcImFkZGl0aW9uYWxQYXJhbUFcIl1baW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1RyaWdnZXIucG1bYGFjdGlvbnNfJHthY3Rpb25OdW19X3RhcmdldEJgXSA9IGVudGl0eS5wbVtcImFkZGl0aW9uYWxQYXJhbUJcIl1baW5kZXhdICA9PT0gdW5kZWZpbmVkID8gMCA6ICBlbnRpdHkucG1bXCJhZGRpdGlvbmFsUGFyYW1CXCJdW2luZGV4XTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBlcy5wdXNoKG5ld1RyaWdnZXIpO1xyXG4gICAgICAgICAgICAgICAgYWxsR2VuZXJhdGVkVHJpZ2dlcnMucHVzaChuZXdUcmlnZ2VyKTtcclxuICAgICAgICAgICAgICAgIHN0YXJ0WCArPSBnYXBCZXR3ZWVuVHJpZ2dlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gRGVsZXRlIGFkZGl0aW9uYWwgcHJvcGVydGllcywgYW5kIHNhdmUgYSBjb3B5IHRvIHByZXBhcmUgZm9yIHNhdmluZy5cclxuICAgICAgICAgICAgYWxsQWRkaXRpb25hbEFjdGlvbnMucHVzaChKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGVudGl0eS5wbVtcImFkZGl0aW9uYWxBY3Rpb25zXCJdKSkpO1xyXG4gICAgICAgICAgICBhbGxBZGRpdGlvbmFsUGFyYW1BLnB1c2goSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShlbnRpdHkucG1bXCJhZGRpdGlvbmFsUGFyYW1BXCJdKSkpO1xyXG4gICAgICAgICAgICBhbGxBZGRpdGlvbmFsUGFyYW1CLnB1c2goSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShlbnRpdHkucG1bXCJhZGRpdGlvbmFsUGFyYW1CXCJdKSkpO1xyXG5cclxuICAgICAgICAgICAgZGVsZXRlIGVudGl0eS5wbVtcImFkZGl0aW9uYWxBY3Rpb25zXCJdO1xyXG4gICAgICAgICAgICBkZWxldGUgZW50aXR5LnBtW1wiYWRkaXRpb25hbFBhcmFtQVwiXTtcclxuICAgICAgICAgICAgZGVsZXRlIGVudGl0eS5wbVtcImFkZGl0aW9uYWxQYXJhbUJcIl07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTYXZlIHRoaXMgbWFwIVxyXG4gICAgICAgIG9sZFNhdmVUaGlzTWFwKHRlbXBfdG9fcmVhbF9jb21waWxlX2RhdGEsIGNhbGxiYWNrKTtcclxuXHJcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuXHJcbiAgICAgICAgLy8gUG9zdCBjbGVhbiB1cC5cclxuICAgICAgICBmb3IoY29uc3QgZW50aXR5IG9mIGVzKXtcclxuICAgICAgICAgICAgaWYoIWVudGl0eS5leGlzdHMpICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgaWYoZW50aXR5Ll9jbGFzcyAhPT0gXCJ0cmlnZ2VyXCIpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZighZW50aXR5LnBtW1wiZXh0ZW5kZWRcIl0pICAgICAgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICAvLyBSZXN0b3JlIGRlbGV0ZWQgYWRkaXRpb25hbCBwcm9wZXJ0aWVzLlxyXG4gICAgICAgICAgICBlbnRpdHkucG1bXCJhZGRpdGlvbmFsQWN0aW9uc1wiXSA9IGFsbEFkZGl0aW9uYWxBY3Rpb25zW2luZGV4XTtcclxuICAgICAgICAgICAgZW50aXR5LnBtW1wiYWRkaXRpb25hbFBhcmFtQVwiXSA9IGFsbEFkZGl0aW9uYWxQYXJhbUFbaW5kZXhdO1xyXG4gICAgICAgICAgICBlbnRpdHkucG1bXCJhZGRpdGlvbmFsUGFyYW1CXCJdID0gYWxsQWRkaXRpb25hbFBhcmFtQltpbmRleF07XHJcblxyXG4gICAgICAgICAgICAvLyBSZXN0b3JlIHRoZSAxMHRoIHRyaWdnZXIgYWN0aW9uIGZyb20gYXJyYXlzXHJcbiAgICAgICAgICAgIGVudGl0eS5wbVtgYWN0aW9uc18xMF90eXBlYF0gICAgPSBlbnRpdHkucG1bXCJhZGRpdGlvbmFsQWN0aW9uc1wiXS5zaGlmdCgpO1xyXG4gICAgICAgICAgICBlbnRpdHkucG1bYGFjdGlvbnNfMTBfdGFyZ2V0QWBdID0gZW50aXR5LnBtW1wiYWRkaXRpb25hbFBhcmFtQVwiXS5zaGlmdCgpO1xyXG4gICAgICAgICAgICBlbnRpdHkucG1bXCJhZGRpdGlvbmFsUGFyYW1CXCJdLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgIGluZGV4Kys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBEZWxldGUgYWxsIGdlbmVyYXRlZCB0cmlnZ2Vycy5cclxuICAgICAgICBmb3IoY29uc3QgbmV3VHJpZ2dlciBvZiBhbGxHZW5lcmF0ZWRUcmlnZ2Vycyl7XHJcbiAgICAgICAgICAgIG5ld1RyaWdnZXIuZXhpc3RzID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBVcGRhdGVHVUlPYmplY3RzTGlzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogIFRoaXMgZnVuY3Rpb24gaXMgcmVzcG9uc2libGUgZm9yIGNvbXBpbGluZyB0aGUgdGV4dCBwb3J0aW9uIG9mIHRoZSB0cmlnZ2VyIGFjdGlvbiB3aGVuIHNhdmVkLlxyXG4gICAgICogIEl0IGlzIGZ1cnRoZXIgcGF0Y2hlZCB0byBzdXBwb3J0IG1vcmUgdGhhbiAxMCB0cmlnZ2Vycy5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gQ29tcGlsZVRyaWdnZXIoKSB7XHJcbiAgICAgICAgY29uc3Qgc2tpcFRyaWdnZXJBY3Rpb25zID0gWzEyMywgMzYxLCAzNjQsIDM2NV07XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gU2VsZWN0ZWRPYmplY3RzO1xyXG5cclxuICAgICAgICBpZihzZWxlY3Rpb24ubGVuZ3RoICE9IDEpe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzZWxlY3RlZFRyaWdnZXIgPSBzZWxlY3Rpb25bMF07XHJcblxyXG4gICAgICAgIHZhciBvcGNvZGVfZmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3Bjb2RlX2ZpZWxkJyk7XHJcbiAgICAgICAgdmFyIGNvZGUgPSBvcGNvZGVfZmllbGQudmFsdWU7XHJcbiAgICAgICAgdmFyIGNvZGVfbGluZXMgPSBjb2RlLnNwbGl0KCdcXG4nKTtcclxuICAgICAgICB2YXIgbmV3X3RyaWdnZXJfYWN0aW9ucyA9IFtdO1xyXG4gICAgICAgIHZhciBkaXJlY3RfdXBkYXRlX3BhcmFtcyA9IFtdO1xyXG4gICAgICAgIHZhciBkaXJlY3RfdXBkYXRlX3ZhbHVlcyA9IFtdO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBTY2hlZHVsZVBhcmFtU2V0KGEsIGIpIHtcclxuICAgICAgICAgICAgZGlyZWN0X3VwZGF0ZV9wYXJhbXMucHVzaChhKTtcclxuICAgICAgICAgICAgZGlyZWN0X3VwZGF0ZV92YWx1ZXMucHVzaChiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29kZV9saW5lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgbGluZSA9IGNvZGVfbGluZXNbaV07XHJcblxyXG4gICAgICAgICAgICBsZXQgcGFyYW1BX3N0YXJ0ID0gbGluZS5pbmRleE9mKCcoIFwiJyk7XHJcbiAgICAgICAgICAgIGxldCBzZXBhcmF0b3IgPSBsaW5lLmluZGV4T2YoJ1wiLCBcIicpO1xyXG4gICAgICAgICAgICBsZXQgZW5kID0gbGluZS5pbmRleE9mKCdcIiApOycpO1xyXG4gICAgICAgICAgICBsZXQgc2VtaWNvbG9uID0gbGluZS5pbmRleE9mKCc6Jyk7XHJcblxyXG4gICAgICAgICAgICAvLyBQYXJzaW5nIGxpc3Qgb2YgdHJpZ2dlciBhY3Rpb25zXHJcbiAgICAgICAgICAgIGlmIChwYXJhbUFfc3RhcnQgIT0gLTEgJiYgc2VwYXJhdG9yICE9IC0xICYmIGVuZCAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGZpcnN0X2MgPSBsaW5lLmluZGV4T2YoJygnKTtcclxuICAgICAgICAgICAgICAgIHZhciBvcGNvZGUgPSBsaW5lLnN1YnN0cmluZygwLCBmaXJzdF9jKTtcclxuICAgICAgICAgICAgICAgIHZhciBhY3Rpb25fdHlwZSA9IC0xO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wY29kZS5zdWJzdHJpbmcoMCwgMikgPT0gJ29wJyAmJiAhaXNOYU4ob3Bjb2RlLnNsaWNlKDIpKSlcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25fdHlwZSA9IHBhcnNlSW50KG9wY29kZS5zbGljZSgyKSk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25fdHlwZSA9IHRyaWdnZXJfb3Bjb2RlX2FsaWFzZXMuaW5kZXhPZihvcGNvZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhY3Rpb25fdHlwZSA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBOZXdOb3RlKCdFcnJvcjogQ2hhbmdlcyB3ZXJlIG5vdCBhcHBsaWVkIGJlY2F1c2UgJnF1b3Q7JyArIG9wY29kZSArICcmcXVvdDsgc2VlbXMgdG8gYmUgYW4gdW5rbm93biBvcGVyYXRpb24gY29kZS4nLCBub3RlX25ldXRyYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlQSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlQiA9ICcnO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbl90eXBlICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVBID0gbGluZS5zdWJzdHJpbmcocGFyYW1BX3N0YXJ0ICsgMywgc2VwYXJhdG9yKTtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZUIgPSBsaW5lLnN1YnN0cmluZyhzZXBhcmF0b3IgKyA0LCBlbmQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG5ld190cmlnZ2VyX2FjdGlvbnMucHVzaChbYWN0aW9uX3R5cGUsIHZhbHVlQSwgdmFsdWVCXSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFBhcnNpbmcgdGhlIGhlYWRlciBwb3J0aW9uLi5cclxuICAgICAgICAgICAgZWxzZSBpZiAoc2VtaWNvbG9uICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGVmdF9wYXJ0ID0gbGluZS5zdWJzdHJpbmcoMCwgc2VtaWNvbG9uKTtcclxuICAgICAgICAgICAgICAgIHZhciByaWdodF9wYXJ0ID0gbGluZS5zbGljZShzZW1pY29sb24gKyAxKTtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChsZWZ0X3BhcnQuY2hhckF0KDApID09ICcgJylcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0X3BhcnQgPSBsZWZ0X3BhcnQuc2xpY2UoMSk7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAobGVmdF9wYXJ0LmNoYXJBdChsZWZ0X3BhcnQubGVuZ3RoIC0gMSkgPT0gJyAnKVxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnRfcGFydCA9IGxlZnRfcGFydC5zbGljZSgwLCAtMSk7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAocmlnaHRfcGFydC5jaGFyQXQoMCkgPT0gJyAnKVxyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0X3BhcnQgPSByaWdodF9wYXJ0LnNsaWNlKDEpO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHJpZ2h0X3BhcnQuY2hhckF0KHJpZ2h0X3BhcnQubGVuZ3RoIC0gMSkgPT0gJyAnKVxyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0X3BhcnQgPSByaWdodF9wYXJ0LnNsaWNlKDAsIC0xKTtcclxuICAgICAgICAgICAgICAgIGlmIChsZWZ0X3BhcnQgPT0gJ3VpZCcgfHwgbGVmdF9wYXJ0ID09ICdlbmFibGVkJyB8fCBsZWZ0X3BhcnQgPT0gJ21heGNhbGxzJyB8fCBsZWZ0X3BhcnQgPT0gJ2V4ZWN1dGUnKVxyXG4gICAgICAgICAgICAgICAgICAgIFNjaGVkdWxlUGFyYW1TZXQobGVmdF9wYXJ0LCByaWdodF9wYXJ0KTtcclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIE5ld05vdGUoJ0Vycm9yOiBDaGFuZ2VzIHdlcmUgbm90IGFwcGxpZWQgYmVjYXVzZSAmcXVvdDsnICsgbGVmdF9wYXJ0ICsgJyZxdW90OyBzZWVtcyB0byBiZSBub3QgYSBkZWZhdWx0IHByb3BlcnR5LicsIG5vdGVfbmV1dHJhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxpbmUgIT0gJycpIHtcclxuICAgICAgICAgICAgICAgIE5ld05vdGUoJ0Vycm9yOiBDaGFuZ2VzIHdlcmUgbm90IGFwcGxpZWQgYmVjYXVzZSBsaW5lICZxdW90OycgKyBsaW5lICsgJyZxdW90OyB3YXNuXFwndCByZWNvZ25pemVkIG9yIGNvbnRhaW5zIHVuc3VwcG9ydGVkIHN5bnRheC4nLCBub3RlX25ldXRyYWwpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaGFzRW5jb3VudGVyZWRTa2lwVHJpZ2dlciA9IGZhbHNlO1xyXG4gICAgICAgIC8vIFJldHJpZXZlIGFsbCB0aGUgdHJpZ2dlciBhY3Rpb24uXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdfdHJpZ2dlcl9hY3Rpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIEEgc2tpcCB0cmlnZ2VyIGFjdGlvbiBmb3IgZXZlcnkgOXRoIHRyaWdnZXIgYWN0aW9uLiBBZGQgYSBkbyBub3RoaW5nIHRyaWdnZXIgYWN0aW9uLlxyXG4gICAgICAgICAgICBpZigoaSArIDEpICUgOSA9PT0gMCAmJiBza2lwVHJpZ2dlckFjdGlvbnMuaW5jbHVkZXMobmV3X3RyaWdnZXJfYWN0aW9uc1tpXVswXSkpe1xyXG4gICAgICAgICAgICAgICAgbmV3X3RyaWdnZXJfYWN0aW9ucy5zcGxpY2UoaSwgMCwgWy0xLCAwLCAwXSk7XHJcbiAgICAgICAgICAgICAgICBoYXNFbmNvdW50ZXJlZFNraXBUcmlnZ2VyID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgU2NoZWR1bGVQYXJhbVNldCgnYWN0aW9uc18nICsgKGkgKyAxKSArICdfdHlwZScsIG5ld190cmlnZ2VyX2FjdGlvbnNbaV1bMF0pO1xyXG4gICAgICAgICAgICBTY2hlZHVsZVBhcmFtU2V0KCdhY3Rpb25zXycgKyAoaSArIDEpICsgJ190YXJnZXRBJywgbmV3X3RyaWdnZXJfYWN0aW9uc1tpXVsxXSk7XHJcbiAgICAgICAgICAgIFNjaGVkdWxlUGFyYW1TZXQoJ2FjdGlvbnNfJyArIChpICsgMSkgKyAnX3RhcmdldEInLCBuZXdfdHJpZ2dlcl9hY3Rpb25zW2ldWzJdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFBvcHVsYXRlIHRoZSByZXN0IHdpdGggZW1wdHkgdHJpZ2dlciBhY3Rpb25zIGlmIGl0J3MgbGVzc2VyIHRoYW4gMTAuXHJcbiAgICAgICAgZm9yKGxldCBpID0gbmV3X3RyaWdnZXJfYWN0aW9ucy5sZW5ndGggKyAxOyBpIDw9IDEwOyBpKyspe1xyXG4gICAgICAgICAgICBTY2hlZHVsZVBhcmFtU2V0KCdhY3Rpb25zXycgKyBpICsgJ190eXBlJywgLTEpO1xyXG4gICAgICAgICAgICBTY2hlZHVsZVBhcmFtU2V0KCdhY3Rpb25zXycgKyBpICsgJ190YXJnZXRBJywgMCk7XHJcbiAgICAgICAgICAgIFNjaGVkdWxlUGFyYW1TZXQoJ2FjdGlvbnNfJyArIGkgKyAnX3RhcmdldEInLCAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGhhc0VuY291bnRlcmVkU2tpcFRyaWdnZXIpe1xyXG4gICAgICAgICAgICBOZXdOb3RlKFwiU2tpcCB0cmlnZ2VyIGFjdGlvbnMgZW5jb3VudGVyZWQgaW4gZXZlcnkgOXRoIHRyaWdnZXIgYWN0aW9uLiBJbnNlcnRlZCBhbiAnRG8gTm90aGluZycgdHJpZ2dlciBhY3Rpb24uXCIsIG5vdGVfbmV1dHJhbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDb252ZXJ0IGl0IGJhY2sgdG8gYSBub3JtYWwgdHJpZ2dlciBpZiBpdCBkb2VzbnQgaGF2ZSBtb3JlIHRoYW4gMTAgYWN0aW9uc1xyXG4gICAgICAgIGlmKG5ld190cmlnZ2VyX2FjdGlvbnMubGVuZ3RoIDw9IDEwICYmIHNlbGVjdGVkVHJpZ2dlci5wbVtcImV4dGVuZGVkXCJdKXtcclxuICAgICAgICAgICAgYWRkVHJpZ2dlckFjdGlvbkNvdW50KC1zZWxlY3RlZFRyaWdnZXIucG1bXCJ0b3RhbE51bU9mQWN0aW9uc1wiXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIC8vIEFkanVzdCBleHRlbmRlZCB0cmlnZ2VyJ3Mgc2l6ZVxyXG4gICAgICAgICAgICBpZihzZWxlY3RlZFRyaWdnZXIucG1bXCJleHRlbmRlZFwiXSl7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGlmZmVyZW5jZSA9IG5ld190cmlnZ2VyX2FjdGlvbnMubGVuZ3RoIC0gc2VsZWN0ZWRUcmlnZ2VyLnBtW1widG90YWxOdW1PZkFjdGlvbnNcIl0gO1xyXG4gICAgICAgICAgICAgICAgYWRkVHJpZ2dlckFjdGlvbkNvdW50KGRpZmZlcmVuY2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIENvbnZlcnQgbm9ybWFsIHRyaWdnZXIgdG8gZXh0ZW5kZWQgdHJpZ2dlci5cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGxldCBhZGRPbiA9IG5ld190cmlnZ2VyX2FjdGlvbnMubGVuZ3RoIC0gMTA7XHJcbiAgICAgICAgICAgICAgICBhZGRUcmlnZ2VyQWN0aW9uQ291bnQoYWRkT24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZGlyZWN0X3VwZGF0ZV9wYXJhbXMubGVuZ3RoOyArK2kpe1xyXG4gICAgICAgICAgICBVcGRhdGVQaHlzaWNhbFBhcmFtKGRpcmVjdF91cGRhdGVfcGFyYW1zW2ldLCBkaXJlY3RfdXBkYXRlX3ZhbHVlc1tpXSwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgTmV3Tm90ZShcIlRyaWdnZXIgdXBkYXRlZCBzdWNjZXNzZnVsbHkuXCIsIG5vdGVfZ29vZCk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LnNldGxldGVkaXQgPSBzZXRsZXRlZGl0O1xyXG4gICAgd2luZG93LlN0cmVldE1hZ2ljID0gU3RyZWV0TWFnaWM7XHJcbiAgICB3aW5kb3cuU2F2ZVRoaXNNYXAgPSBTYXZlVGhpc01hcDtcclxuICAgIHdpbmRvdy5Db21waWxlVHJpZ2dlciA9IENvbXBpbGVUcmlnZ2VyO1xyXG5cclxuICAgIC8vIHRoZSBjdXJyZW50IHNlcmlhbGlzYXRpb24gYW5kIHVuc2VyaWFsaXNhdGlvbiB1c2VkIGlzIGFuIGV4dGVybmFsIGxpYnJhcnkgRXJpYyB1c2VkXHJcbiAgICAvLyBpdCBpcyBjdXJyZW50bHkgdXNlZCBieSB0aGUgQ29weSBhbmQgUGFzdGUgY2xpcGJvYXJkIGZ1bmN0aW9uc1xyXG4gICAgLy8gaG93ZXZlciwgaXQgZG9lcyBub3Qgd29yayB3aXRoIGFycmF5cywgdHVybmluZyB0aGVtIGludG8gb2JqZWN0cyBpbnN0ZWFkLlxyXG4gICAgLy8gdGhlcmVmb3JlLCBOeW92ZSBoYXMgZGVjaWRlZCB0byBvdmVyd3JpdGUgdGhlc2UgbGlicmFyeVxyXG4gICAgd2luZG93LnNlcmlhbGl6ZSA9IEpTT04uc3RyaW5naWZ5O1xyXG4gICAgd2luZG93LnVuc2VyaWFsaXplID0gSlNPTi5wYXJzZTtcclxuICAgIHdpbmRvdy5VcGRhdGVHVUlQYXJhbXMgPSBuZXdVcGRhdGVHVUlQYXJhbXM7XHJcblxyXG4gICAgLy8gUGF0Y2ggdGhlIHJlbmRlciBmdW5jdGlvbidzIGNvbm5lY3Rpb24gbGluZSB0byB3b3JrIHdpdGggPjEwIHRyaWdnZXIgYWN0aW9ucy5cclxuICAgIC8qbGV0IFJlbmRlckluU3RyaW5nID0gd2luZG93LlJlbmRlci50b1N0cmluZygpLnJlcGxhY2VBbGwoXHJcbiAgICAgICAgL2VzXFxbKGkyPylcXF1cXC5wbVxcWyBwcm9wZXJ0eSBcXF07L2csXHJcbiAgICAgICAgYGVzWyQxXS5wbVsgcHJvcGVydHkgXTtcclxuICAgICAgICBsZXQgYXJyYXk7XHJcbiAgICAgICAgaWYoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgYXJyYXkgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGFycmF5ID0gW3ZhbHVlXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcihsZXQgaW5kZXggPSAwLCB2YWx1ZSA9IGFycmF5W2luZGV4XTsgaW5kZXggPCBhcnJheS5sZW5ndGg7ICsraW5kZXgsIHZhbHVlID0gYXJyYXlbaW5kZXhdKVxyXG4gICAgICAgIGBcclxuICAgICk7XHJcblxyXG4gICAgLy8gUGF0Y2ggZnVuY3Rpb24gZm9yIHN0cmljdCBtb2RlIGNvbXBsaWFuY2VcclxuICAgIFJlbmRlckluU3RyaW5nID0gUmVuZGVySW5TdHJpbmcudG9TdHJpbmcoKS5yZXBsYWNlQWxsKFxyXG4gICAgICAgIGBmb3IgKCBwcm9wZXJ0eSBpbmAsXHJcbiAgICAgICAgYGZvciAoIGxldCBwcm9wZXJ0eSBpbmBcclxuICAgICk7XHJcblxyXG4gICAgd2luZG93LlJlbmRlciA9IGV2YWwoYCgke1JlbmRlckluU3RyaW5nfSlgKTsqL1xyXG59XHJcblxyXG4vKiogVGhpcyBmdW5jdGlvbiBpcyBpbnZva2VkIHdoZW5ldmVyIHRoZSBtYXAgbG9hZHMuXHJcbiAqXHJcbiAqICBJdCBsb29rcyBmb3IgcG90ZW50aWFsIHRyaWdnZXJzIGNvbmZpZ3VyZWQgaW4gYSBsaW5rZWQgbGlzdCBtYW5uZXIgYW5kIGNvbnZlcnRzIGl0IHRvIGFuIGV4dGVuZGVkIHRyaWdnZXIuXHJcbiAqL1xyXG5mdW5jdGlvbiBwYXJzZUV4dGVuZGVkVHJpZ2dlcnMoKXtcclxuICAgIGNvbnN0IG1heEl0ZXJhdGlvbiA9IDEwMDA7XHJcbiAgICBjb25zdCBleGVjdXRlVHJpZ2dlckFjdGlvbiA9IDk5O1xyXG4gICAgY29uc3Qgc3dpdGNoRXhlY3V0aW9uQWN0aW9uID0gMzYzO1xyXG5cclxuICAgIC8vIEZpbmQgYWxsIGV4dGVuZGVkIHRyaWdnZXJzLlxyXG4gICAgZm9yKGNvbnN0IGVudGl0eSBvZiBlcyl7XHJcbiAgICAgICAgaWYoIWVudGl0eS5leGlzdHMpICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICBpZihlbnRpdHkuX2NsYXNzICE9PSBcInRyaWdnZXJcIikgY29udGludWU7XHJcbiAgICAgICAgaWYoIWVudGl0eS5wbVtcImV4dGVuZGVkXCJdKSAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICBsZXQgaXRlcmF0aW9uQ291bnQgPSAxO1xyXG4gICAgICAgIGxldCBwcmV2aW91c1RvdGFsTnVtT2ZBY3Rpb25zID0gZW50aXR5LnBtW1widG90YWxOdW1PZkFjdGlvbnNcIl07XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBleHRlbmRlZCB0cmlnZ2VyJ3MgYWRkaXRpb25hbCBwcm9wZXJ0aWVzLlxyXG4gICAgICAgIGVudGl0eS5wbVtcInRvdGFsTnVtT2ZBY3Rpb25zXCJdID0gOTtcclxuICAgICAgICBlbnRpdHkucG1bXCJhZGRpdGlvbmFsQWN0aW9uc1wiXSA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIGVudGl0eS5wbVtcImFkZGl0aW9uYWxQYXJhbUFcIl0gPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBlbnRpdHkucG1bXCJhZGRpdGlvbmFsUGFyYW1CXCJdID0gbmV3IEFycmF5KCk7XHJcblxyXG4gICAgICAgIGxldCBjdXJyZW50VHJpZ2dlciA9IGVudGl0eTtcclxuXHJcbiAgICAgICAgLy8gSXRlcmF0ZSB0aHJvdWdoIHRoZSBsaW5rZWQgbGlzdCwgcG9pbnRlZCBieSB0aGUgMTB0aCB0cmlnZ2VyIGFjdGlvbi5cclxuICAgICAgICBsZXQgbmV4dFRyaWdnZXJJbmRleCA9IGVzLmZpbmRJbmRleChlID0+IFxyXG4gICAgICAgICAgICAoZS5wbVtcInVpZFwiXSA9PT0gY3VycmVudFRyaWdnZXIucG1bXCJhY3Rpb25zXzEwX3RhcmdldEFcIl0pICYmIFxyXG4gICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAoY3VycmVudFRyaWdnZXIucG1bXCJhY3Rpb25zXzEwX3R5cGVcIl0gPT0gc3dpdGNoRXhlY3V0aW9uQWN0aW9uKSB8fCAvLyBCYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxyXG4gICAgICAgICAgICAgICAgKGN1cnJlbnRUcmlnZ2VyLnBtW1wiYWN0aW9uc18xMF90eXBlXCJdID09IGV4ZWN1dGVUcmlnZ2VyQWN0aW9uKSAgICAgLy8gQ3VycmVudCBzeXN0ZW0gbm93XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApXHJcbiAgICAgICAgd2hpbGUobmV4dFRyaWdnZXJJbmRleCAhPT0gLTEpe1xyXG4gICAgICAgICAgICBsZXQgbmV4dFRyaWdnZXIgPSBlc1tuZXh0VHJpZ2dlckluZGV4XTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJldHJpZXZlIGFsbCB0cmlnZ2VyIGFjdGlvbnMuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPD0gOTsgKytpKXtcclxuICAgICAgICAgICAgICAgIC8vIFRoZSB2ZXJ5IGZpcnN0IGVudHJ5IG9mIGFkZGl0aW9uYWwgYWN0aW9ucyBhbmQgcGFyYW1ldGVycyBiZWxvbmdzIHRvIGFjdGlvbiAxMFxyXG4gICAgICAgICAgICAgICAgaWYoaSA9PT0gMSAmJiBpdGVyYXRpb25Db3VudCA9PT0gMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5LnBtW1wiYWN0aW9uc18xMF90eXBlXCJdID0gbmV4dFRyaWdnZXIucG1bYGFjdGlvbnNfMV90eXBlYF07XHJcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5LnBtW1wiYWN0aW9uc18xMF90YXJnZXRBXCJdID0gbmV4dFRyaWdnZXIucG1bYGFjdGlvbnNfMV90YXJnZXRBYF07XHJcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5LnBtW1wiYWN0aW9uc18xMF90YXJnZXRCXCJdID0gbmV4dFRyaWdnZXIucG1bYGFjdGlvbnNfMV90YXJnZXRCYF07XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZW50aXR5LnBtW1wiYWRkaXRpb25hbEFjdGlvbnNcIl0ucHVzaChuZXh0VHJpZ2dlci5wbVtgYWN0aW9uc18ke2l9X3R5cGVgXSk7XHJcbiAgICAgICAgICAgICAgICBlbnRpdHkucG1bXCJhZGRpdGlvbmFsUGFyYW1BXCJdLnB1c2gobmV4dFRyaWdnZXIucG1bYGFjdGlvbnNfJHtpfV90YXJnZXRBYF0pO1xyXG4gICAgICAgICAgICAgICAgZW50aXR5LnBtW1wiYWRkaXRpb25hbFBhcmFtQlwiXS5wdXNoKG5leHRUcmlnZ2VyLnBtW2BhY3Rpb25zXyR7aX1fdGFyZ2V0QmBdKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZW50aXR5LnBtW1widG90YWxOdW1PZkFjdGlvbnNcIl0gKz0gOTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aG9zZSBhdXRvIGdlbmVyYXRlZCB0cmlnZ2Vyc1xyXG4gICAgICAgICAgICBlcy5zcGxpY2UobmV4dFRyaWdnZXJJbmRleCwgMSk7XHJcblxyXG4gICAgICAgICAgICAvLyBDb250aW51ZSBpdGVyYXRpbmdcclxuICAgICAgICAgICAgY3VycmVudFRyaWdnZXIgPSBuZXh0VHJpZ2dlcjtcclxuICAgICAgICAgICAgbmV4dFRyaWdnZXJJbmRleCA9IGVzLmZpbmRJbmRleChlID0+IGUucG1bXCJ1aWRcIl0gPT09IGN1cnJlbnRUcmlnZ2VyLnBtW1wiYWN0aW9uc18xMF90YXJnZXRBXCJdICYmIGN1cnJlbnRUcmlnZ2VyLnBtW1wiYWN0aW9uc18xMF90eXBlXCJdID09PSBzd2l0Y2hFeGVjdXRpb25BY3Rpb24pO1xyXG5cclxuICAgICAgICAgICAgLy8gUHJvdGVjdCB1c2VycyBmcm9tIHBvdGVudGlhbCBpbmZpbml0ZSBpdGVyYXRpb24uXHJcbiAgICAgICAgICAgIGl0ZXJhdGlvbkNvdW50Kys7XHJcbiAgICAgICAgICAgIGlmKGl0ZXJhdGlvbkNvdW50ID4gbWF4SXRlcmF0aW9uKXtcclxuICAgICAgICAgICAgICAgIGFsZWlMb2cobm90ZV9iYWQsIFwiV2hlbiBwYXJzaW5nIGV4dGVuZGVkIHRyaWdnZXJzLCBwb3RlbnRpYWxseSByZWFjaGVkIGFuIGluZmluaXRlIGxvb3AuXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNocmluayBleHRlbmRlZCB0cmlnZ2VyIHRvIHByZXZpb3VzbHkgc2F2ZWQgc2l6ZSBpZiB0aGUgbGFzdCBmZXcgdHJpZ2dlciBhY3Rpb25zIGlzIGVtcHR5LlxyXG4gICAgICAgIGlmKHByZXZpb3VzVG90YWxOdW1PZkFjdGlvbnMpe1xyXG4gICAgICAgICAgICBjb25zdCBkb05vdGhpbmdUcmlnZ2VyQWN0aW9uID0gLTE7XHJcbiAgICAgICAgICAgIGxldCBpc0FsbEVtcHR5ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IHByZXZpb3VzVG90YWxOdW1PZkFjdGlvbnMgKyAxOyBpIDwgZW50aXR5LnBtW1widG90YWxOdW1PZkFjdGlvbnNcIl07IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBpZihlbnRpdHkucG1bXCJhZGRpdGlvbmFsQWN0aW9uc1wiXVtpIC0gMTFdICE9IGRvTm90aGluZ1RyaWdnZXJBY3Rpb24pe1xyXG4gICAgICAgICAgICAgICAgICAgIGlzQWxsRW1wdHkgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gU2hyaW5rIHRoZSB0cmlnZ2VyIGFjdGlvbi5cclxuICAgICAgICAgICAgaWYoaXNBbGxFbXB0eSl7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGlmZmVyZW5jZSA9IGVudGl0eS5wbVtcInRvdGFsTnVtT2ZBY3Rpb25zXCJdIC0gcHJldmlvdXNUb3RhbE51bU9mQWN0aW9ucztcclxuICAgICAgICAgICAgICAgIGVudGl0eS5wbVtcImFkZGl0aW9uYWxBY3Rpb25zXCJdLmxlbmd0aCAtPSBkaWZmZXJlbmNlO1xyXG4gICAgICAgICAgICAgICAgZW50aXR5LnBtW1wiYWRkaXRpb25hbFBhcmFtQVwiXS5sZW5ndGggLT0gZGlmZmVyZW5jZTtcclxuICAgICAgICAgICAgICAgIGVudGl0eS5wbVtcImFkZGl0aW9uYWxQYXJhbUJcIl0ubGVuZ3RoIC09IGRpZmZlcmVuY2U7XHJcbiAgICAgICAgICAgICAgICBlbnRpdHkucG1bXCJ0b3RhbE51bU9mQWN0aW9uc1wiXSA9IHByZXZpb3VzVG90YWxOdW1PZkFjdGlvbnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGdW5jdGlvbiB0aGF0IGFkZHMgbmV3IENTUyBzdHlsZSB0byBBTEUuXHJcbiAqIC0gQWRkIHN0eWxlIHJ1bGUgZm9yIDIgc2lkZSBieSBzaWRlIGJ1dHRvblxyXG4gKlxyXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHJ1biBvbmNlIGluIEFMRV9TdGFydC5cclxuICovXHJcbmZ1bmN0aW9uIHVwZGF0ZUNTU0ZpbGUoKSB7XHJcbiAgICBjb25zdCBjc3NGaWxlID0gZG9jdW1lbnQuc3R5bGVTaGVldHNbMF07XHJcblxyXG4gICAgaWYoIWNzc0ZpbGUpe1xyXG4gICAgICAgIGFsZWlMb2coV0FSTiwgXCJGYWlsZWQgdG8gdXBkYXRlIENTUyBmaWxlLlwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ3JlYXRlcyBhIG5ldyBydWxlIGZvciBjbGFzcyB0d28tZWxlbWVudC1ncmlkLCB1c2VmdWwgYXMgYSBwYXJlbnQgZGl2LlxyXG4gICAgY3NzRmlsZS5pbnNlcnRSdWxlKFwiLnR3by1lbGVtZW50LWdyaWR7IGRpc3BsYXk6IGdyaWQ7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7IH1cIiwgMCk7XHJcbn1cclxuXHJcbi8vIENyZWF0ZXMgbWFwcGluZyBvZiBvYmplY3QgY29ubmVjdGlvbnMgc28gdGhhdCB3ZSBkb24ndCByZWNyZWF0ZSBsaW5lIG1hcHBpbmcgZXZlcnl0aW1lLlxyXG4vLyBUaGlzIHdpbGwgYmUgdXNlZCBpbiBSZW5kZXIgZnVuY3Rpb24gZm9yIHdoZW4gd2UgYXJlIGRyYXdpbmcgb2JqZWN0IGNvbm5lY3Rpb24gbGluZXMuXHJcbmZ1bmN0aW9uIF9fT0NNX0FkZFJlZmVyZW5jZShmcm9tLCB0bykge1xyXG4gICAgbGV0IG9jbSA9IE9iamVjdENvbm5lY3Rpb25NYXBwaW5nO1xyXG4gICAgaWYob2NtW2Zyb21dW1widG9cIl0uaW5kZXhPZih0bykgPT09IC0xKSBvY21bZnJvbV1bXCJ0b1wiXS5wdXNoKHRvKTtcclxuICAgIGlmKG9jbVt0b11bXCJieVwiXS5pbmRleE9mKGZyb20pID09PSAtMSkgb2NtW3RvXVtcImJ5XCJdLnB1c2goZnJvbSk7XHJcbn1cclxuZnVuY3Rpb24gX19PQ01fUmVtb3ZlUmVmZXJlbmNlKGZyb20sIHRvKSB7XHJcbiAgICBsZXQgb2NtID0gT2JqZWN0Q29ubmVjdGlvbk1hcHBpbmc7XHJcbiAgICBpZihvY21bZnJvbV1bXCJ0b1wiXS5pbmRleE9mKHRvKSAhPT0gLTEpIG9jbVtmcm9tXVtcInRvXCJdLnNwbGljZShvY21bZnJvbV1bXCJ0b1wiXS5pbmRleE9mKHRvKSwgMSk7XHJcbiAgICBpZihvY21bdG9dW1wiYnlcIl0uaW5kZXhPZihmcm9tKSAhPT0gLTEpIG9jbVt0b11bXCJieVwiXS5zcGxpY2Uob2NtW3RvXVtcImJ5XCJdLmluZGV4T2YoZnJvbSksIDEpO1xyXG59XHJcblxyXG4vKlxyXG4gKiBfX09DTV9IYW5kbGVPYmplY3RcclxuICogRnVuY3Rpb24gcmVzcG9uc2libGUgZm9yIGludGVybmFsIHJlZ2lzdHJhdGlvbiBvZiBvYmplY3QgbWFwcGluZ3MuXHJcbiAqXHJcbiAqQHBhcmFtIHtFfSAgIGVsZW1lbnQgICBQQjIgb2JqZWN0IHRvIGNyZWF0ZSBjb25uZWN0aW9uIG1hcHBpbmcgb2YuXHJcbiovXHJcblxyXG5mdW5jdGlvbiBfX09DTV9IYW5kbGVPYmplY3QoZWxlbWVudCkge1xyXG4gICAgbGV0IG9jbSA9IE9iamVjdENvbm5lY3Rpb25NYXBwaW5nO1xyXG4gICAgbGV0IHV0ZW0gPSB1aWRUb0VsZW1lbnRNYXA7XHJcblxyXG5cclxuICAgIGlmKGVsZW1lbnQucG0udWlkID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgIGlmKGVsZW1lbnQucG0udWlkID09PSBcIiN3YXRlclwiKSB7XHJcbiAgICAgICAgZWxlbWVudC5wbS51aWQgPSBSYW5kb21pemVOYW1lKGVsZW1lbnQucG0udWlkKTsgLy8gSSBkb24ndCBzZWUgd2h5IG5vdFxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBUcmlnZ2VyX0hhbmRsZVBhcmFtZXRlcih0cmlnZ2VyLCBwYXJhbWV0ZXIpIHtcclxuICAgICAgICBpZih0eXBlb2YocGFyYW1ldGVyKSAhPT0gXCJzdHJpbmdcIikgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZih1dGVtW3BhcmFtZXRlcl0gIT09IHVuZGVmaW5lZCkgeyAvLyBTaW1wbGUgY2FzZSB3aGVyZSBwYXJhbWV0ZXIgaXMgc2ltcGx5IHJlZmVyZW5jZSB0byBvYmplY3QuXHJcbiAgICAgICAgICAgIF9fT0NNX0FkZFJlZmVyZW5jZSh0cmlnZ2VyLCBwYXJhbWV0ZXIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHBhcmFtZXRlci5pbmNsdWRlcyhcIixcIikgPT0gZmFsc2UpIHJldHVybjtcclxuICAgICAgICAvLyBBIGxpdHRsZSBjb21wbGV4IGNhc2Ugd2hlcmUgbXVsdGlwbGUgb2JqZWN0cyBhcmUgcmVmZXJlbmNlZFxyXG4gICAgICAgIC8vIEFzIGluIFBhcmFtZXRlciBCOiAjcmVnaW9uKjEsI3JlZ2lvbioyXHJcbiAgICAgICAgbGV0IHNwbHQgPSBwYXJhbWV0ZXIuc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgIGZvcihsZXQgdmFsdWUgb2Ygc3BsdCkge1xyXG4gICAgICAgICAgICBsZXQgdmFsID0gdmFsdWUudHJpbSgpO1xyXG4gICAgICAgICAgICBpZih1dGVtW3ZhbF0gIT09IHVuZGVmaW5lZCkgX19PQ01fQWRkUmVmZXJlbmNlKHRyaWdnZXIsIHZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEVsaW1pbmF0aW5nIHBhcmFtZXRlcnMgd2UgZG9uJ3QgbmVlZCB0byBsb29rIGF0LlxyXG4gICAgZm9yKGxldCBrZXkgb2YgT2JqZWN0LmtleXMoZWxlbWVudC5wbSkpIHtcclxuICAgICAgICBpZihfX09DTV9DSEVDS0VEX0tFWVMuaW5kZXhPZihrZXkpID09PSAtMSkgY29udGludWU7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gZWxlbWVudC5wbVtrZXldO1xyXG4gICAgICAgIGlmKHV0ZW1bdmFsdWVdID09PSB1bmRlZmluZWQpIGNvbnRpbnVlOyAvLyBOb3QgdmFsaWQgb2JqZWN0LCBqdXN0IHNraXAuXHJcblxyXG4gICAgICAgIF9fT0NNX0FkZFJlZmVyZW5jZShlbGVtZW50LnBtLnVpZCwgdmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLy8gU3BlY2lhbCBjYXNlIGZvciB0cmlnZ2VyIGFjdGlvbnMuXHJcbiAgICBpZihlbGVtZW50Ll9jbGFzcyAhPT0gXCJ0cmlnZ2VyXCIpIHJldHVybjtcclxuICAgIGxldCBwbSA9IGVsZW1lbnQucG07XHJcbiAgICAvLyBWYW5pbGxhIHRyaWdnZXIgY2FzZSAoMTAgYWN0aW9ucywgZXh0ZW5kZWQgdHJpZ2dlcnMgd2lsbCBydW4gdGhpcyB0b28pXHJcbiAgICBmb3IobGV0IGkgPSAxOyBpIDwgMTE7IGkrKykge1xyXG4gICAgICAgIGlmKHBtW2BhY3Rpb25zXyR7aX1fdHlwZWBdID09IC0xKSBjb250aW51ZTtcclxuICAgICAgICBpZihwbVtgYWN0aW9uc18ke2l9X3R5cGVgXSA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcclxuICAgICAgICBUcmlnZ2VyX0hhbmRsZVBhcmFtZXRlcihwbS51aWQsIHBtW2BhY3Rpb25zXyR7aX1fdGFyZ2V0QWBdKTtcclxuICAgICAgICBUcmlnZ2VyX0hhbmRsZVBhcmFtZXRlcihwbS51aWQsIHBtW2BhY3Rpb25zXyR7aX1fdGFyZ2V0QmBdKTtcclxuICAgIH1cclxuICAgIC8vIEV4dGVuZGVkIHRyaWdnZXJzLlxyXG4gICAgaWYocG0uZXh0ZW5kZWQgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgaWYoIWFsZWlTZXR0aW5ncy5leHRlbmRlZFRyaWdnZXJzKSByZXR1cm47XHJcblxyXG4gICAgbGV0IGFjdGlvbnMgPSBwbS5hZGRpdGlvbmFsQWN0aW9ucztcclxuICAgIGxldCBwYXJhbUEgPSBwbS5hZGRpdGlvbmFsUGFyYW1BO1xyXG4gICAgbGV0IHBhcmFtQiA9IHBtLmFkZGl0aW9uYWxQYXJhbUI7XHJcblxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFjdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZihhY3Rpb25zW2ldID09PSAtMSkgY29udGludWU7XHJcbiAgICAgICAgVHJpZ2dlcl9IYW5kbGVQYXJhbWV0ZXIocG0udWlkLCBwYXJhbUFbaV0pO1xyXG4gICAgICAgIFRyaWdnZXJfSGFuZGxlUGFyYW1ldGVyKHBtLnVpZCwgcGFyYW1CW2ldKTtcclxuICAgIH1cclxufVxyXG5cclxuLypcclxuICogT0NNX29uT2JqZWN0RGVsZXRlXHJcbiAqIEZ1bmN0aW9uIHRoYXQgZ2V0cyBjYWxsZWQgaW4gRGVsZXRlU2VsZWN0aW9uLlxyXG4gKiBUaGlzIGp1c3Qga2VlcHMgT2JqZWN0IENvbm5lY3Rpb24gTWFwIHdpdGggbGF0ZXN0IGRhdGEuXHJcblxyXG4gKiBAcGFyYW0ge0V9IGVsZW1lbnQgICBQQjIgZWxlbWVudCB0aGF0IGdvdCBkZWxldGVkLlxyXG4qL1xyXG5mdW5jdGlvbiBPQ01fb25PYmplY3REZWxldGUoZWxlbWVudCkge1xyXG4gICAgaWYoIShhbGVpU2V0dGluZ3MucmVtYXRjaFVJRCAmJiBhbGVpU2V0dGluZ3Mub2NtRW5hYmxlZCkpIHJldHVybjtcclxuICAgIGlmKGVsZW1lbnQucG0udWlkID09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgaWYoIU9DTV9MT0FERUQpIHJldHVybjtcclxuXHJcbiAgICBsZXQgdWlkID0gZWxlbWVudC5wbS51aWQ7XHJcbiAgICBsZXQgb2NtID0gd2luZG93Lk9iamVjdENvbm5lY3Rpb25NYXBwaW5nO1xyXG4gICAgbGV0IHV0ZW0gPSB3aW5kb3cudWlkVG9FbGVtZW50TWFwO1xyXG5cclxuICAgIGxldCByZWZlcnJlZEJ5ID0gb2NtW3VpZF0uYnk7XHJcbiAgICBsZXQgcmVmZXJyaW5nVG8gPSBvY21bdWlkXS50bztcclxuXHJcbiAgICAvLyBUT0RPOiBNYWtlIHRoaXMgYml0IHNhZmVyPyBTb21lIGhhcmQgbGltaXQ/XHJcbiAgICB3aGlsZShvY21bdWlkXS5ieS5sZW5ndGggIT0gMCkgX19PQ01fUmVtb3ZlUmVmZXJlbmNlKG9jbVt1aWRdLmJ5WzBdLCB1aWQpO1xyXG4gICAgd2hpbGUob2NtW3VpZF0udG8ubGVuZ3RoICE9IDApIF9fT0NNX1JlbW92ZVJlZmVyZW5jZSh1aWQsIG9jbVt1aWRdLnRvWzBdKTtcclxuXHJcbiAgICAvLyBUaGlzIGNhbm5vdCBoYXBwZW4gYW55bW9yZVxyXG4gICAgaWYoKG9jbVt1aWRdLmJ5Lmxlbmd0aCAhPSAwKSB8fCAob2NtW3VpZF0udG8ubGVuZ3RoICE9IDApKSB7XHJcbiAgICAgICAgTmV3Tm90ZShgQUxFSTogU29tZXRoaW5nIGlzIHdyb25nIHdpdGggT2JqZWN0IENvbm5lY3Rpb24gTWFwLiBQbGVhc2UgcmVnZW5lcmF0ZSBtYXAgYnkgbG9hZGluZyB0aGUgbWFwIGFnYWluLmAsIGAjRkYwMDAwYCk7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlIHV0ZW1bdWlkXTtcclxuICAgIGRlbGV0ZSBvY21bdWlkXTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIENyZWF0ZUNvbm5lY3Rpb25NYXBwaW5nKCkge1xyXG4gICAgT0NNX0xPQURFRCA9IGZhbHNlO1xyXG4gICAgd2luZG93Lk9iamVjdENvbm5lY3Rpb25NYXBwaW5nID0ge307XHJcbiAgICB3aW5kb3cudWlkVG9FbGVtZW50TWFwID0ge307XHJcblxyXG4gICAgaWYoIWFsZWlTZXR0aW5ncy5yZW1hdGNoVUlEKSByZXR1cm47IC8vIFJlbWF0Y2ggVUlEIGlzIG5vdCBuZWNlc3NhcmlseSBhIHJlcXVpcmVtZW50IGZvciBPQ00gYnV0IGl0IGlzIHJlcXVpcmVtZW50IGlmIEkgd2FubmEgYmUgbGF6eVxyXG4gICAgaWYoIWFsZWlTZXR0aW5ncy5vY21FbmFibGVkKSByZXR1cm47XHJcblxyXG4gICAgbGV0IG9jbSA9IE9iamVjdENvbm5lY3Rpb25NYXBwaW5nO1xyXG4gICAgbGV0IHV0ZW0gPSB1aWRUb0VsZW1lbnRNYXA7XHJcblxyXG4gICAgZm9yKGxldCBlbGVtZW50IG9mIGVzKSB7XHJcbiAgICAgICAgaWYoIWVsZW1lbnQuZXhpc3RzKSBjb250aW51ZTtcclxuICAgICAgICBpZihlbGVtZW50LnBtLnVpZCA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcclxuICAgICAgICBpZihlbGVtZW50LnBtLnVpZCA9PT0gXCIjd2F0ZXJcIikgY29udGludWU7XHJcblxyXG4gICAgICAgIGlmKG9jbVtlbGVtZW50LnBtLnVpZF0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBOZXdOb3RlKGBBTEVJOiAyKyBvYmplY3RzIHNoYXJlIG5hbWUgJHtlbGVtZW50LnBtLnVpZH0sIGdvaW5nIHRvIHN0b3AgY29uc3RydWN0aW5nIG9iamVjdCBjb25uZWN0aW9uIG1hcC5gLCBcIiNGRjAwMDBcIik7XHJcbiAgICAgICAgICAgIHdpbmRvdy5PYmplY3RDb25uZWN0aW9uTWFwcGluZyA9IHt9O1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvY21bZWxlbWVudC5wbS51aWRdID0ge1wiYnlcIjogW10sIFwidG9cIjogW119O1xyXG4gICAgICAgIHV0ZW1bZWxlbWVudC5wbS51aWRdID0gZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBmb3IobGV0IGVsZW1lbnQgb2YgZXMpIF9fT0NNX0hhbmRsZU9iamVjdChlbGVtZW50KTtcclxuICAgIE9DTV9MT0FERUQgPSB0cnVlO1xyXG4gICAgYWxlaUxvZyhERUJVRywgXCJCdWlsdCBvYmplY3QgY29ubmVjdGlvbiBtYXAuXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXRjaFJlbmRlcigpIHtcclxuICAgIC8vIFRoaXMgaXMgd2hlcmUgUmVuZGVyIHdpbGwgYmUgcGF0Y2hlZC5cclxuICAgIC8vIER1ZSB0byBuYXR1cmUgb2YgdGhpcyBmdW5jdGlvbiwgbWF5YmUgaXQnbGwgYmUgYmV0dGVyIHRvIGNhbGwgdGhpcyBmdW5jdGlvbiBlYWNoIHRpbWUgYSBwYXRjaCBpcyBuZWVkZWQuXHJcbiAgICAvLyBBbmQgdG8gc3VwcG9ydCB0aGF0LCB0aGlzIGZ1bmN0aW9uIHdpbGwgc3RyaWN0bHkgd29yayBvbiBBTEVfUmVuZGVyIHRoYW4gY3VycmVudCBSZW5kZXJcclxuICAgIGlmKGFsZWlTZXR0aW5ncy5jdXN0b21SZW5kZXJlcikge1xyXG4gICAgICAgIFJlbmRlcmVyX2luaXRpYWxpemUoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG4gICAgaWYoIWFsZWlTZXR0aW5ncy5ibGFja1RoZW1lKSByZXR1cm47XHJcbiAgICAvLyBXZSBzaG91bGQgb25seSBwYXRjaCBmb3IgYmxhY2sgdGhlbWUsIGJlY2F1c2Ugc2V0dGluZyByZW5kZXIgbWFrZXMgdGhpbmdzIGxhZyBmb3Igbm8gYXBwYXJlbnQgcmVhc29uLlxyXG5cclxuICAgIGxldCBmbiA9IEFMRV9SZW5kZXIudG9TdHJpbmcoKTtcclxuICAgIGZuID0gZm4ucmVwbGFjZUFsbChcImZvciAoIHByb3BlcnR5XCIsIFwiZm9yICggbGV0IHByb3BlcnR5XCIpO1xyXG5cclxuICAgIC8vIE5vbmFtZSAmIFhlZGVuJ3MgYmxhY2sgdGhlbWVcclxuICAgIGxldCBHcmlkQ29sb3IgPSBcIiMyMjIyMjJcIjtcclxuICAgIGxldCBHcmlkTGluZUNvbG9yID0gXCIjRkZGRkZGNTBcIjtcclxuXHJcbiAgICBmbiA9IGZuLnJlcGxhY2UoXCJpZiAoIFRIRU1FID09PSBUSEVNRV9CTFVFIClcIiwgYGlmIChUSEVNRSA9PT0gNCkgY3R4LmZpbGxTdHlsZSA9ICcke0dyaWRDb2xvcn0nO1xcbiBlbHNlIGlmIChUSEVNRSA9PT0gVEhFTUVfQkxVRSlgKTtcclxuICAgIGZuID0gZm4ucmVwbGFjZShcImlmICggVEhFTUUgIT09IFRIRU1FX0RBUksgKVwiLCBgaWYgKFRIRU1FID09PSA0KSBjdHguZmlsbFN0eWxlID0gJyR7R3JpZExpbmVDb2xvcn0nO1xcbiBlbHNlIGlmIChUSEVNRSAhPT0gVEhFTUVfREFSSylgKTtcclxuXHJcbiAgICB3aW5kb3cuUmVuZGVyID0gZXZhbChgKCR7Zm59KWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXRjaERlbGV0ZVNlbGVjdGlvbigpIHtcclxuICAgIGxldCBvZyA9IHdpbmRvdy5EZWxldGVTZWxlY3Rpb247XHJcbiAgICB3aW5kb3cuRGVsZXRlU2VsZWN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGZvcihsZXQgc2VsZWN0ZWQgb2YgU2VsZWN0ZWRPYmplY3RzKSBPQ01fb25PYmplY3REZWxldGUoc2VsZWN0ZWQpO1xyXG4gICAgICAgIG9nKCk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5sZXQgQUxFX3N0YXJ0ID0gKGFzeW5jIGZ1bmN0aW9uKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIHdpbmRvdy5BTEVJQVBJID0ge307XHJcblxyXG4gICAgVkFMX1RBQkxFID0gc3BlY2lhbF92YWx1ZXNfdGFibGU7XHJcbiAgICBST09UX0VMRU1FTlQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgICBzdHlsZXNoZWV0cyA9IGRvY3VtZW50LnN0eWxlU2hlZXRzO1xyXG4gICAgQUxFX1JlbmRlciA9IFJlbmRlcjtcclxuICAgIHdpbmRvdy5PYmplY3RDb25uZWN0aW9uTWFwcGluZyA9IHt9O1xyXG4gICAgd2luZG93LnVpZFRvRWxlbWVudE1hcCA9IHt9O1xyXG5cclxuICAgIC8vIFVwZGF0ZXMgdGhlIGN1cnJlbnQgQ1NTIHN0eWxlc2hlZXQuXHJcbiAgICB1cGRhdGVDU1NGaWxlKCk7XHJcblxyXG4gICAgLy8gSGFuZGxpbmcgcmVzdCBvZiB0aGluZ3NcclxuICAgIGFkZFByb3BlcnR5UGFuZWxSZXNpemUoKTtcclxuICAgIGFkZE9iakJveFJlc2l6ZSgpO1xyXG5cclxuICAgIGxvYWRjc3MuZml4V2VicGFja1N0eWxlU2hlZXRzKCk7XHJcbiAgICBsb2FkY3NzLnBhdGNoVGhlbWVTZXQoKTtcclxuXHJcbiAgICB1cGRhdGVTdHlsZXMoKTtcclxuICAgIHVwZGF0ZVNraW5zKCk7XHJcbiAgICB1cGRhdGVTb3VuZHMoKTtcclxuICAgIHVwZGF0ZVZvaWNlUHJlc2V0cygpO1xyXG4gICAgdXBkYXRlUGFyYW1ldGVycygpO1xyXG4gICAgdXBkYXRlT2Zmc2V0cygpO1xyXG4gICAgdXBkYXRlT2JqZWN0cygpO1xyXG4gICAgdXBkYXRlQnV0dG9ucygpO1xyXG4gICAgcGF0Y2hfbV9kb3duKCk7XHJcbiAgICBhZGRTZXNzaW9uU3luYygpO1xyXG4gICAgYWRkVHJpZ2dlcklEcygpO1xyXG4gICAgcGF0Y2hTaG93SGlkZUJ1dHRvbigpO1xyXG4gICAgb3B0aW1pemUoKTtcclxuICAgIHBhdGNoVXBkYXRlVG9vbHMoKTtcclxuICAgIHBhdGNoRGVjb3JVcGxvYWQoKTtcclxuICAgIHBhdGNoRW50aXR5Q2xhc3MoKTtcclxuICAgIHBhdGNoTmV3Tm90ZSgpO1xyXG4gICAgcGF0Y2hFdmFsU2V0KCk7XHJcbiAgICAvLyBBbGxvd2luZyBmb3Igc3BhY2VzIGluIHBhcmFtZXRlcnMuXHJcbiAgICB3aW5kb3cuVXBkYXRlUGh5c2ljYWxQYXJhbSA9IFVwZGF0ZVBoeXNpY2FsUGFyYW07XHJcbiAgICB3aW5kb3cuUGFzdGVGcm9tQ2xpcEJvYXJkID0gUGFzdGVGcm9tQ2xpcEJvYXJkO1xyXG4gICAgcGF0Y2hBTkkoKTtcclxuICAgIC8vIFRvb2x0aXAuXHJcbiAgICBpZihhbGVpU2V0dGluZ3MuZW5hYmxlVG9vbHRpcHMpIHtcclxuICAgICAgICBkb1Rvb2x0aXAoKTtcclxuICAgIH1cclxuICAgIHBhdGNoU2VydmVyUmVxdWVzdCgpO1xyXG4gICAgaWYgKGFsZWlTZXR0aW5ncy5leHRlbmRlZFRyaWdnZXJzKSB7XHJcbiAgICAgICAgZXh0ZW5kVHJpZ2dlckxpc3QoKTtcclxuICAgICAgICBFeHRlbmRlZFRyaWdnZXJzTG9hZGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHBhdGNoVXBkYXRlR1VJUGFyYW1zKCk7XHJcbiAgICBwYXRjaFRlYW1MaXN0KCk7XHJcbiAgICBpZihhbGVpU2V0dGluZ3Mub3JkZXJlZE5hbWluZykgcGF0Y2hSYW5kb21pemVOYW1lKCk7XHJcbiAgICBwYXRjaEFsbG93ZWRDaGFyYWN0ZXJzKCk7XHJcbiAgICBpZiAoYWxlaVNldHRpbmdzLmJsYWNrVGhlbWUpIHtcclxuICAgICAgICBibGFja1RoZW1lKCk7XHJcbiAgICB9XHJcbiAgICBhZGRQcm9qZWN0aWxlTW9kZWxzKCk7XHJcbiAgICBwYXRjaFNwZWNpYWxWYWx1ZSgpO1xyXG4gICAgVXBkYXRlVG9vbHMoKTtcclxuICAgIHBhdGNoUGVyY2VudGFnZVRvb2woKTtcclxuICAgIHBhdGNoQ29tcGlsZVRyaWdnZXIoKTtcclxuICAgIGNyZWF0ZUNsaXBib2FyZERpdigpO1xyXG4gICAgYWRkUGFzdGVGcm9tUGVybWFuZW50Q2xpcGJvYXJkKCk7XHJcblxyXG4gICAgaWYgKCFhbGVpU2V0dGluZ3MuZXh0ZW5kZWRUcmlnZ2Vycykge1xyXG4gICAgICAgIHJlZ2lzdGVyQ2xpcGJvYXJkSXRlbUFjdGlvbigpO1xyXG4gICAgICAgIHBhdGNoQ2xpcGJvYXJkRnVuY3Rpb25zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcGF0Y2hEcmF3R3JpZCgpO1xyXG4gICAgYWRkRnVuY3Rpb25Ub1dpbmRvdygpO1xyXG4gICAgY3JlYXRlQUxFSVNldHRpbmdzTWVudSgpO1xyXG4gICAgcGF0Y2hEZWxldGVTZWxlY3Rpb24oKTtcclxuXHJcbiAgICBpZihpc05hdGl2ZSkge1xyXG4gICAgICAgIGNoZWNrRm9yVXBkYXRlcygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBsb2FkIHRoaXMgbWFwIHR3aWNlIHRvIHBhcnNlIGV4dGVuZGVkIHRyaWdnZXJzLlxyXG4gICAgICAgIGlmKG1hcGlkICE9PSBcIlwiICYmIGFsZWlTZXR0aW5ncy5leHRlbmRlZFRyaWdnZXJzKSBMb2FkVGhpc01hcCgpO1xyXG4gICAgfVxyXG4gICAgY2hhbmdlVG9wUmlnaHRUZXh0KCk7XHJcblxyXG4gICAgYWxlaUxvZyhERUJVRzIsIFwiU2V0dGluZ3M6IFwiICsgSlNPTi5zdHJpbmdpZnkoYWxlaVNldHRpbmdzKSk7XHJcbiAgICBBTEVJX1VwZGF0ZU5hbWVSZW5kZXJTZXR0aW5nKGFsZWlTZXR0aW5ncy5yZW5kZXJPYmplY3ROYW1lcyk7XHJcblxyXG4gICAgbGV0IEFMRV9QcmV2aWV3UXVhbGl0eVNldCA9IHdpbmRvdy5QcmV2aWV3UXVhbGl0eVNldDtcclxuICAgIHdpbmRvdy5QcmV2aWV3UXVhbGl0eVNldCA9ICh2YWwpID0+IHtcclxuICAgICAgICBBTEVfUHJldmlld1F1YWxpdHlTZXQodmFsKTtcclxuICAgICAgICB3cml0ZVN0b3JhZ2UoXCJBTEVJX1ByZXZpZXdRdWFsaXR5U2V0XCIsIHZhbCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5QcmV2aWV3UXVhbGl0eVNldChcclxuICAgICAgICByZWFkU3RvcmFnZShcclxuICAgICAgICAgICAgXCJBTEVJX1ByZXZpZXdRdWFsaXR5U2V0XCIsXHJcbiAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAodmFsKSA9PiB2YWwgPT09IFwidHJ1ZVwiKVxyXG4gICAgKTtcclxuXHJcbiAgICBwYXRjaFJlbmRlcigpO1xyXG5cclxuICAgIE5ld05vdGUoXCJBTEVJOiBXZWxjb21lIVwiLCBcIiM3Nzc3RkZcIik7XHJcbiAgICBOZXdOb3RlKGBEb24ndCBmb3JnZXQgdG8gam9pbiBkaXNjb3JkIHNlcnZlciEgZGlzY29yZC5nZy9LNWpjTkV2Wjg1YCwgXCIjNzc3N0ZGXCIpO1xyXG4gICAgYWxlaUxvZyhJTkZPLCBgV2VsY29tZSFgKTtcclxuICAgIGlmKGlzTmF0aXZlKSB7XHJcbiAgICAgICAgYWxlaUxvZyhJTkZPLCBgVGFtcGVyTW9ua2V5IFZlcnNpb246ICR7R01faW5mby52ZXJzaW9ufSBBTEVJIFZlcnNpb246ICR7R01faW5mby5zY3JpcHQudmVyc2lvbn1gKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSBcIllvdSBhcmUgcnVubmluZyBBTEVJIG5vdCB1bmRlciB0YW1wZXJtb25rZXksIHRoaXMgaXMgbm90IG5hdGl2ZSBBTEVJLCBwbGVhc2UgbG9hZCBBTEVJIGJ5IHRhbXBlcm1vbmtleSB3aGVuIHBvc3NpYmxlLlwiO1xyXG4gICAgICAgIE5ld05vdGUoYEFMRUk6ICR7bWVzc2FnZX1gLCBcIiNGRkZGMDBcIik7XHJcbiAgICAgICAgTmV3Tm90ZShgQUxFSTogQ2hlY2sgaHR0cHM6Ly9naXRodWIuY29tL0xpc0FCQy9BTEVJIGZvciBtb3JlIGRldGFpbHMuYCwgXCIjRkZGRjAwXCIpO1xyXG4gICAgICAgIGFsZWlMb2coSU5GTywgbWVzc2FnZSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4gQUxFX3N0YXJ0KCkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==