/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".container {\\r\\n\\tdisplay: flex;\\r\\n\\tflex-direction: column;\\r\\n\\talign-items: center;\\r\\n}\\r\\n\\r\\nh2 {\\r\\n\\ttext-align: center;\\r\\n}\\r\\n\\r\\nheader {\\r\\n\\tdisplay: flex;\\r\\n\\tjustify-content: right;\\r\\n}\\r\\n\\r\\n.goods-search {\\r\\n\\tmargin: 5px 20px;\\r\\n\\tpadding: 5px 10px;\\r\\n\\tfont-size: 30px;\\r\\n}\\r\\n\\r\\n.button-item {\\r\\n\\tposition: absolute;\\r\\n\\tbottom: 14px;\\r\\n}\\r\\n\\r\\n.cart-button {\\r\\n\\tmargin: 2px 20px;\\r\\n\\tpadding: 10px 20px;\\r\\n\\tfont-size: 20px;\\r\\n\\tfont-weight: bold;\\r\\n\\tbackground: rgb(31, 43, 58);\\r\\n\\tcolor: rgb(235, 249, 249);\\r\\n\\tborder-radius: 4px;\\r\\n}\\r\\n\\r\\n.count {\\r\\n\\tdisplay: flex;\\r\\n\\twidth: 100%;\\r\\n}\\r\\n\\r\\n.cart-button:hover {\\r\\n\\tbackground: rgb(56, 72, 91);\\r\\n\\tcolor: rgb(235, 249, 249);\\r\\n}\\r\\n\\r\\n.cart-button:active {\\r\\n\\tbackground: rgb(192, 116, 54);\\r\\n\\tcolor: rgb(235, 249, 249);\\r\\n}\\r\\n\\r\\n.goods-list {\\r\\n\\tborder: 3px solid rgb(98, 138, 187);\\r\\n\\tbackground: rgb(180, 200, 226);\\r\\n\\tbox-sizing: border-box;\\r\\n\\tpadding: 20px 100px;\\r\\n\\tmargin: 0 20px;\\r\\n\\tdisplay: flex;\\r\\n\\tjustify-content: space-around;\\r\\n\\tflex-wrap: wrap;\\r\\n\\tmargin-bottom: 50px;\\r\\n\\tflex-wrap: wrap;\\r\\n}\\r\\n\\r\\n.goods-item {\\r\\n\\tposition: relative;\\r\\n\\tdisplay: flex;\\r\\n\\tflex-direction: column;\\r\\n\\talign-items: center;\\r\\n\\tborder: 3px solid rgb(98, 138, 187);\\r\\n\\tbackground: rgb(255, 255, 255);\\r\\n\\tmax-width: 300px;\\r\\n\\tmin-width: 214px;\\r\\n\\tmin-height: 260px;\\r\\n\\tmargin: 10px;\\r\\n\\tpadding: 10px;\\r\\n\\tbox-sizing: border-box;\\r\\n\\tborder-radius: 6px;\\r\\n}\\r\\n\\r\\n.carts-item {\\r\\n\\tdisplay: flex;\\r\\n\\tjustify-content: space-between;\\r\\n\\talign-items: center;\\r\\n\\tborder: 3px solid rgb(98, 138, 187);\\r\\n\\tbackground: rgb(223, 230, 244);\\r\\n\\tmax-width: 300px;\\r\\n\\tmin-width: 214px;\\r\\n\\tmargin: 10px;\\r\\n\\tpadding: 5px 20px;\\r\\n\\tbox-sizing: border-box;\\r\\n\\tborder-radius: 20px;\\r\\n\\tflex-wrap: wrap;\\r\\n}\\r\\n\\r\\n.img-tovar {\\r\\n\\tmax-width: 160px;\\r\\n}\\r\\n\\r\\n.block-carts {\\r\\n\\tpadding-top: 10px;\\r\\n\\tdisplay: flex;\\r\\n\\tflex-direction: column;\\r\\n\\tjustify-content: start;\\r\\n\\talign-items: center;\\r\\n\\tflex-wrap: wrap;\\r\\n\\tposition: fixed;\\r\\n\\ttop: 0;\\r\\n\\tright: 0;\\r\\n\\twidth: 310px;\\r\\n\\theight: 100vh;\\r\\n\\tbackground: rgb(179, 174, 174);\\r\\n\\toverflow: scroll;\\r\\n\\tbox-sizing: border-box;\\r\\n}\\r\\n\\r\\n.carts-block {\\r\\n\\tdisplay: flex;\\r\\n\\tflex-direction: column;\\r\\n\\theight: 100vh;\\r\\n\\talign-items: center;\\r\\n}\\r\\n\\r\\n.carts {\\r\\n\\twidth: 100%;\\r\\n\\tdisplay: flex;\\r\\n\\tjustify-content: space-around;\\r\\n\\tflex-wrap: wrap;\\r\\n}\\r\\n\\r\\n.bug {\\r\\n\\tpadding: 5px 30px;\\r\\n\\tdisplay: flex;\\r\\n\\tbackground: rgb(241, 85, 38);\\r\\n\\tborder-radius: 5px;\\r\\n\\tmargin-top: 50px;\\r\\n\\tfont-size: 24px;\\r\\n\\tline-height: 40px;\\r\\n}\\r\\n.error {\\r\\n\\tpadding: 5px 30px;\\r\\n\\tcolor: azure;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\nconst BASE_URL = \"http://localhost:8000/\";\nconst GOODS_NO_JSON = `${BASE_URL}goods`\nconst GOODS = `${BASE_URL}goods.json`\nconst CARTS = `${BASE_URL}basket_goods.json`\nconst BASKET = `${BASE_URL}basket`\n\nfunction service(url) {\n\treturn fetch(url).then((res) => res.json())\n}\nfunction serviceWithBody(url = \"\", method = \"POST\", body = {}) {\n\treturn fetch(\n\t\turl,\n\t\t{\n\t\t\tmethod,\n\t\t\theaders: {\n\t\t\t\t'Content-type': 'application/json; charset=UTF-8',\n\t\t\t},\n\t\t\tbody: JSON.stringify(body)\n\t\t}\n\t).then((res) => res.json())\n}\nlet app = null\n\nwindow.onload = () => {\n\tVue.component('custom_input', {\n\t\tmodel: {\n\t\t\tprop: 'entry',\n\t\t\tevent: 'change'\n\t\t},\n\t\tprops: {\n\t\t\tentry: String\n\t\t},\n\t\ttemplate: `\n\t\t<input\n\t\t\ttype=\"text\" \n\t\t\tclass=\"goods-search\"\n\t\t\tv-bind:entry=\"entry\"\n\t\t\tv-on:change=\"$emit('change', $event.target.value)\"\n\t\t/>\n\t\t`\n\t})\n\tVue.component('custom_button', {\n\t\ttemplate: `\n\t\t<button class=\"cart-button\" type=\"button\" @click=\"$emit('click')\">\n\t\t\t<slot></slot>\n\t\t</button>\n\t\t`\n\t})\n\tVue.component('good', {\n\t\tprops: [\n\t\t\t'item'\n\t\t],\n\t\ttemplate: `\n\t\t\t<div class=\"goods-item\">\n\t\t\t\t<h3>{{ item.product_name }}</h3>\n\t\t\t\t<p>{{ item.price }}</p>\n\t\t\t\t<div class=\"button-item\">\n\t\t\t\t\t<custom_button @click=\"addGood\">Добавить</custom_button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t`,\n\t\tmethods: {\n\t\t\taddGood() {\n\t\t\t\tserviceWithBody(BASKET, \"POST\", {\n\t\t\t\t\tid: this.item.id\n\t\t\t\t})\n\t\t\t}\n\t\t}\n\t})\n\tVue.component('carts', {\n\t\tprops: [\n\t\t\t'item'\n\t\t],\n\t\ttemplate: `\n\t\t\t<div class=\"carts-item\">\n\t\t\t\t<h3>{{ item.product_name }}</h3>\n\t\t\t\t<p>{{ item.price }}</p>\n\t\t\t\t<div class=\"count\">\n\t\t\t\t<custom_button @click=\"$emit('add',item.id)\">+</custom_button>\n\t\t\t\t\t<p>{{ item.count }} шт</p>\n\t\t\t\t\t<custom_button @click=\"$emit('delet',item.id)\">-</custom_button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t`\n\t})\n\tVue.component('box-carts', {\n\t\tdata() {\n\t\t\treturn {\n\t\t\t\tbasketGoodsItems: []\n\t\t\t}\n\t\t},\n\t\tprops: [\n\t\t\t'visib',\n\t\t\t'itemsCarts',\n\t\t\t'calculatePrice'\n\t\t],\n\t\ttemplate: `\n\t\t\t<div class=\"carts-block\">\n\t\t\t\t<custom_button @click=\"visib\">Close</custom_button>\n\t\t\t\t<div class=\"carts\">\n\t\t\t\t\t<h2>Корзина</h2>\n\t\t\t\t\t<carts v-if=\"basketGoodsItems\" v-for=\"item in basketGoodsItems\" :item=\"item\" @add=\"addGood\" @delet=\"deletGood\"></carts>\n\t\t\t\t\t<div class=\"plug\" v-else=\"basketGoodsItems\">\n\t\t\t\t\t\t<h2>Корзина пуста</h2>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"summa\">Итого: <slot></slot> </div>\n\t\t\t</div>\n\t\t`,\n\t\tmethods: {\n\t\t\taddGood(id) {\n\t\t\t\tserviceWithBody(BASKET, \"POST\", {\n\t\t\t\t\tid\n\t\t\t\t}).then((data) => {\n\t\t\t\t\tthis.basketGoodsItems = data;\n\t\t\t\t})\n\t\t\t},\n\t\t\tdeletGood(id) {\n\t\t\t\tserviceWithBody(BASKET, \"DELETE\", {\n\t\t\t\t\tid\n\t\t\t\t}).then((data) => {\n\t\t\t\t\tthis.basketGoodsItems = data;\n\t\t\t\t})\n\t\t\t}\n\t\t},\n\t\tmounted() {\n\t\t\tservice(BASKET).then((data) => {\n\t\t\t\tthis.basketGoodsItems = data\n\t\t\t})\n\t\t}\n\t})\n\tVue.component('snackbar', {\n\t\tprops: [\n\t\t\t'error',\n\t\t\t'snack'\n\t\t],\n\t\ttemplate: `\n\t\t<div class=\"bug\">\n\t\t\t<div class=\"error\">{{error}}</div>\n\t\t\t<custom_button @click=\"snack\">Close</custom_button>\n\t\t</div>\n\t\t\t`\n\t})\n\n\n\n\tapp = new Vue({\n\t\tel: '#root',\n\t\tdata: {\n\t\t\titems: [],\n\t\t\titemsCarts: [],\n\t\t\tsearchValue: '',\n\t\t\tisVisibleCart: false,\n\t\t\tsnackbar: false,\n\t\t\terrorMessage: '',\n\t\t\tbasketGoodsItems: []\n\t\t},\n\t\tmethods: {\n\t\t\tfetchGoods() {\n\t\t\t\tservice(GOODS).then((data) => {\n\t\t\t\t\tthis.items = data;\n\t\t\t\t});\n\t\t\t},\n\t\t\t// fetchCarts() {\n\t\t\t// \tservice(CARTS).then((data) => {\n\t\t\t// \t\tthis.itemsCarts = data;\n\t\t\t// \t});\n\t\t\t// },\n\t\t\tvisiblCart() {\n\t\t\t\tif (this.isVisibleCart == true) {\n\t\t\t\t\tthis.isVisibleCart = false;\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\tthis.isVisibleCart = true;\n\t\t\t\t}\n\t\t\t},\n\t\t\tvisiblBug() {\n\t\t\t\tthis.snackbar = !this.snackbar\n\t\t\t},\n\t\t\ttimeVisiblBug() {\n\t\t\t\tthis.snackbar = !this.snackbar;\n\t\t\t\tsetTimeout(() => {\n\t\t\t\t\tthis.snackbar = false;\n\t\t\t\t}, \"3000\")\n\t\t\t}\n\t\t},\n\t\tcomputed: {\n\t\t\tcalculatePrice() {\n\t\t\t\treturn this.filteredItems.reduce((prev, { price }) => {\n\t\t\t\t\treturn prev + price;\n\t\t\t\t}, 0)\n\t\t\t},\n\t\t\tfilteredItems() {\n\t\t\t\treturn this.items.filter(({ product_name }) => {\n\t\t\t\t\treturn product_name.match(new RegExp(this.searchValue, 'gui'))\n\t\t\t\t})\n\t\t\t}\n\t\t},\n\t\tmounted() {\n\t\t\tthis.fetchGoods();\n\t\t\t// this.fetchCarts()\n\t\t},\n\n\t\tcreated() {\n\t\t\tfetch(\"https://api.npms.io/v2/invalid-url\")\n\t\t\t\t.then(async response => {\n\t\t\t\t\tconst data = await response.json();\n\t\t\t\t\tif (!response.ok) {\n\t\t\t\t\t\tconst error = (data && data.message + response.status) || response.statusText;\n\t\t\t\t\t\treturn Promise.reject(error);\n\t\t\t\t\t}\n\t\t\t\t\tthis.totalVuePackages = data.total;\n\t\t\t\t})\n\t\t\t\t.catch(error => {\n\t\t\t\t\tthis.errorMessage = error;\n\t\t\t\t\tthis.timeVisiblBug();\n\t\t\t\t});\n\t\t}\n\t})\n}\n\n\n//# sourceURL=webpack://project/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;