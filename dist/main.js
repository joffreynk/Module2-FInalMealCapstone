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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  box-sizing: border-box;\\r\\n  font-family: 'Courier New', Courier, monospace;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background: #eee;\\r\\n}\\r\\n\\r\\nheader,\\r\\nfooter {\\r\\n  position: fixed;\\r\\n  right: 0;\\r\\n  left: 0;\\r\\n  background-color: #373b69;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  top: 0;\\r\\n}\\r\\n\\r\\nnav {\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n  align-items: center;\\r\\n  min-height: 8vh;\\r\\n  color: white;\\r\\n  font-family: 'poppins', sans-serif;\\r\\n}\\r\\n\\r\\n.logo a {\\r\\n  align-items: center;\\r\\n  text-decoration: none;\\r\\n  color: white;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.description {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.nav-links {\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n  width: 35%;\\r\\n  list-style: none;\\r\\n  cursor: pointer;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.burger {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.burger div {\\r\\n  width: 25px;\\r\\n  height: 5px;\\r\\n  background-color: rgb(226, 226, 226);\\r\\n  margin: 5px;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  margin: 80px 0;\\r\\n}\\r\\n\\r\\nmain h2 {\\r\\n  font-size: 40px;\\r\\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\\r\\n  font-weight: normal;\\r\\n  padding: 15px;\\r\\n  color: #333;\\r\\n  text-align: center;\\r\\n  text-transform: capitalize;\\r\\n}\\r\\n\\r\\n#food-list,\\r\\n#pop {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  gap: 20px;\\r\\n  justify-content: center;\\r\\n  padding: 20px;\\r\\n  margin-bottom: 10px;\\r\\n}\\r\\n\\r\\nmain ul {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\nmain ul li {\\r\\n  display: inline-block;\\r\\n  justify-content: center;\\r\\n  border: 1px solid #fff;\\r\\n  box-shadow: 0 5px rgba(146, 146, 146, 0.5);\\r\\n  overflow: hidden;\\r\\n  padding-top: 15px;\\r\\n  padding-bottom: 15px;\\r\\n}\\r\\n\\r\\nmain ul li img {\\r\\n  padding-bottom: 20px;\\r\\n  transition: 0.2s linear;\\r\\n  width: 100%;\\r\\n  height: 60%;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nmain ul li h4 {\\r\\n  font-size: 20px;\\r\\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\\r\\n  font-weight: bold;\\r\\n  padding-left: 10px;\\r\\n  padding-bottom: 5px;\\r\\n}\\r\\n\\r\\n.likes {\\r\\n  display: flex;\\r\\n  justify-content: flex-start;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.like {\\r\\n  padding: 1px;\\r\\n  margin-right: 5px;\\r\\n  object-fit: cover;\\r\\n  cursor: pointer;\\r\\n  border: none;\\r\\n  font-size: 30px;\\r\\n}\\r\\n\\r\\n.n-likes {\\r\\n  font-size: 16px;\\r\\n  font-weight: 600;\\r\\n  font-family: Georgia, 'Times New Roman', Times, serif;\\r\\n}\\r\\n\\r\\n.like:hover {\\r\\n  transform: rotate(360deg);\\r\\n  transform: scale(1.01);\\r\\n  background-color: red;\\r\\n  font-weight: 700;\\r\\n  padding-right: 5px;\\r\\n  font-size: 30px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.comments,\\r\\n.reservations {\\r\\n  margin-left: 10px;\\r\\n  margin-top: 10px;\\r\\n  padding: 5px 10px;\\r\\n  cursor: pointer;\\r\\n  border-radius: 4px;\\r\\n  transition: all 0.3s ease;\\r\\n  font-size: 20px;\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n.comments {\\r\\n  background: #373b69;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.comments:hover {\\r\\n  transform: rotate(360deg);\\r\\n  transform: scale(1.01);\\r\\n  background-color: aqua;\\r\\n  color: #000;\\r\\n  font-weight: 700;\\r\\n}\\r\\n\\r\\n.reservations {\\r\\n  background: #ea4e15;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.reservations:hover {\\r\\n  transform: rotate(360deg);\\r\\n  transform: scale(1.01);\\r\\n  background-color: #b9eb4d;\\r\\n  color: #000;\\r\\n  font-weight: 700;\\r\\n}\\r\\n\\r\\n.close-button {\\r\\n  position: absolute;\\r\\n  right: 5%;\\r\\n  top: 3%;\\r\\n  width: 30px;\\r\\n  height: 30px;\\r\\n  background: #222;\\r\\n  color: #fff;\\r\\n  font-size: 25px;\\r\\n  font-weight: 600;\\r\\n  line-height: 30px;\\r\\n  text-align: center;\\r\\n  border-radius: 50%;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n#pop {\\r\\n  display: none;\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  bottom: 0;\\r\\n  right: 0;\\r\\n  left: 0;\\r\\n  padding: 5px;\\r\\n  box-sizing: border-box;\\r\\n  z-index: 1;\\r\\n  border-radius: 10px;\\r\\n  background-color: rgba(146, 146, 146, 0.8);\\r\\n}\\r\\n\\r\\n.comment-pop-image img {\\r\\n  width: 320px;\\r\\n  height: 200px;\\r\\n}\\r\\n\\r\\n.foodDes {\\r\\n  margin-bottom: 10px;\\r\\n  font-size: 16px;\\r\\n  padding-right: 15px;\\r\\n}\\r\\n\\r\\n.add-h5 {\\r\\n  font-size: 25px;\\r\\n  text-align: center;\\r\\n  margin: 20px 0;\\r\\n}\\r\\n\\r\\n#pop li {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  position: fixed;\\r\\n  width: 60vw;\\r\\n  top: 0;\\r\\n  left: 20%;\\r\\n  bottom: 5px;\\r\\n  right: 20%;\\r\\n  background: white;\\r\\n  z-index: 3;\\r\\n}\\r\\n\\r\\n#pop li > * {\\r\\n  margin-left: 30px;\\r\\n}\\r\\n\\r\\n.formcomment {\\r\\n  margin: 0;\\r\\n  width: 95%;\\r\\n  padding: 1em;\\r\\n  border: 1px solid #ccc;\\r\\n  border-radius: 1em;\\r\\n  background-color: #ccc;\\r\\n}\\r\\n\\r\\n#username,\\r\\n#comment {\\r\\n  width: 100%;\\r\\n  margin: 2px 0;\\r\\n  border-radius: 4px;\\r\\n  box-shadow: none;\\r\\n  font-size: 20px;\\r\\n  padding: 5px;\\r\\n}\\r\\n\\r\\n#comment {\\r\\n  height: 50px;\\r\\n}\\r\\n\\r\\n.add-comment {\\r\\n  cursor: pointer;\\r\\n  padding: 5px 10px;\\r\\n  border-radius: 4px;\\r\\n  transition: all 0.3s ease;\\r\\n  font-size: 20px;\\r\\n  border: none;\\r\\n  background: #fa4242;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.add-comment:hover {\\r\\n  transform: rotate(360deg);\\r\\n  transform: scale(1.01);\\r\\n  background-color: #003cff;\\r\\n  color: #000;\\r\\n}\\r\\n\\r\\n.comments-title {\\r\\n  font-size: 20px;\\r\\n  margin: 10px 0;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.popup-comments {\\r\\n  padding-right: 10px;\\r\\n}\\r\\n\\r\\n.loader {\\r\\n  border: 16px solid #f3f3f3;\\r\\n  border-radius: 50%;\\r\\n  border-top: 16px solid #3498db;\\r\\n  width: 120px;\\r\\n  height: 120px;\\r\\n  -webkit-animation: spin 2s linear infinite;\\r\\n  animation: spin 2s linear infinite;\\r\\n}\\r\\n\\r\\n@keyframes spin {\\r\\n  0% {\\r\\n    transform: rotate(0deg);\\r\\n  }\\r\\n\\r\\n  100% {\\r\\n    transform: rotate(360deg);\\r\\n  }\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  bottom: 0;\\r\\n  height: 50px;\\r\\n  color: white;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n@media screeen and (max-width: 1024px) {\\r\\n  .nav-links {\\r\\n    width: 60%;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 768px) {\\r\\n  body {\\r\\n    overflow-x: hidden;\\r\\n  }\\r\\n\\r\\n  .nav-links {\\r\\n    position: absolute;\\r\\n    right: 0;\\r\\n    height: 92vh;\\r\\n    top: 8vh;\\r\\n    background-color: #5d4954;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    width: 50%;\\r\\n    transform: translateX(100%);\\r\\n    transition: transform 0.5s ease-in;\\r\\n  }\\r\\n\\r\\n  .nav-links li {\\r\\n    opacity: 0;\\r\\n  }\\r\\n\\r\\n  .burger {\\r\\n    display: block;\\r\\n    cursor: pointer;\\r\\n  }\\r\\n}\\r\\n\\r\\n.nav-active {\\r\\n  transform: translateX(0%);\\r\\n}\\r\\n\\r\\n@keyframes navLinkFade {\\r\\n  from {\\r\\n    opacity: 0;\\r\\n    transform: translateX(50px);\\r\\n  }\\r\\n\\r\\n  to {\\r\\n    opacity: 1;\\r\\n    transform: translateX(0);\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://module2-finalmealcapstone/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://module2-finalmealcapstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://module2-finalmealcapstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://module2-finalmealcapstone/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://module2-finalmealcapstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://module2-finalmealcapstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://module2-finalmealcapstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://module2-finalmealcapstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://module2-finalmealcapstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://module2-finalmealcapstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _modules_ListFood_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ListFood.js */ \"./src/modules/ListFood.js\");\n\r\n\r\n\r\nconst navSlide = () => {\r\n  const burger = document.querySelector('.burger');\r\n  const nav = document.querySelector('.nav-links');\r\n  const navLinks = document.querySelectorAll('.nav-links li');\r\n\r\n  burger.addEventListener('click', () => {\r\n    nav.classList.toggle('nav-active');\r\n  });\r\n  navLinks.forEach((link, index) => {\r\n    link.style.animation = `navLinkFade o.5s ease forwards ${index / 7}s`;\r\n  });\r\n};\r\n\r\nnavSlide();\r\n(0,_modules_ListFood_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\n\n//# sourceURL=webpack://module2-finalmealcapstone/./src/index.js?");

/***/ }),

/***/ "./src/modules/ListFood.js":
/*!*********************************!*\
  !*** ./src/modules/ListFood.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getFood_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getFood.js */ \"./src/modules/getFood.js\");\n/* harmony import */ var _counter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counter.js */ \"./src/modules/counter.js\");\n/* harmony import */ var _fetchData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetchData.js */ \"./src/modules/fetchData.js\");\n/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comments.js */ \"./src/modules/comments.js\");\n\r\n\r\n\r\n\r\n\r\nconst getOject = (arr) => {\r\n  const ob = {};\r\n  arr.forEach((v) => {\r\n    ob[Number(v.item_id)] = v.likes;\r\n  });\r\n  return ob;\r\n};\r\n\r\nconst addLikes = () => {\r\n  const likes = document.querySelectorAll('.like');\r\n  likes.forEach((like) => {\r\n    like.addEventListener('click', (e) => {\r\n      const id = e.target.id.slice(4);\r\n      (0,_fetchData_js__WEBPACK_IMPORTED_MODULE_2__.addLike)({ item_id: id });\r\n      /* eslint-disable */\r\n      listFood();\r\n    });\r\n  });\r\n};\r\n\r\nconst popUpComment = () => {\r\n  const comments = document.querySelectorAll('.comments');\r\n  comments.forEach((comment) => {\r\n    comment.addEventListener('click', (e) => {\r\n      const id = e.target.id.slice(7);\r\n      (0,_fetchData_js__WEBPACK_IMPORTED_MODULE_2__.fetchComments)(id).then((data) => {\r\n        (0,_comments_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(data);\r\n      });\r\n    });\r\n  });\r\n};\r\n\r\nconst listFood = () => {\r\n  (0,_fetchData_js__WEBPACK_IMPORTED_MODULE_2__.homePage)().then(({ foodlist, likesArr }) => {\r\n    const list = document.getElementById('food-list');\r\n    list.innerHTML = '';\r\n    const objectkey = getOject(likesArr);\r\n    document.getElementById('foodCounter').innerHTML = `(${(0,_counter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(foodlist)})`;\r\n    foodlist.forEach((food) => {\r\n      const foodId = Number(food.idCategory);\r\n      const newLi = document.createElement('li');\r\n      newLi.setAttribute('id', `food${food.idCategory}`);\r\n      const likes = objectkey[foodId];\r\n      if (foodId in objectkey) {\r\n        newLi.innerHTML = (0,_getFood_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(food, likes);\r\n      } else {\r\n        newLi.innerHTML = (0,_getFood_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(food);\r\n      }\r\n      list.appendChild(newLi);\r\n    });\r\n    addLikes();\r\n    popUpComment();\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listFood);\r\n\n\n//# sourceURL=webpack://module2-finalmealcapstone/./src/modules/ListFood.js?");

/***/ }),

/***/ "./src/modules/comments.js":
/*!*********************************!*\
  !*** ./src/modules/comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _fetchData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchData.js */ \"./src/modules/fetchData.js\");\n/* harmony import */ var _counter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counter.js */ \"./src/modules/counter.js\");\n\r\n\r\n\r\nconst listComments = (comments) => {\r\n  let div = '';\r\n  comments.forEach((comment) => {\r\n    div += `<p class='popup-single-comment' > ${comment.creation_date} ${comment.username}:  ${comment.comment}</p>`;\r\n  });\r\n  return div;\r\n};\r\n\r\nconst closepopup = () => {\r\n  const close = document.querySelector('.close-button');\r\n  close.addEventListener('click', () => {\r\n    document\r\n      .querySelector('#pop')\r\n      .removeChild(document.querySelector('#pop li'));\r\n    document.getElementById('pop').style.display = 'none';\r\n  });\r\n};\r\n\r\nconst addComments = () => {\r\n  const bttns = document.querySelectorAll('.add-comment');\r\n  bttns.forEach((btn) => {\r\n    btn.addEventListener('click', (e) => {\r\n      const username = document.getElementById('username');\r\n      const comment = document.getElementById('comment');\r\n      const id = Number(e.target.id.slice(10));\r\n      if (username.value.length > 1 && comment.value.length > 4) {\r\n        (0,_fetchData_js__WEBPACK_IMPORTED_MODULE_0__.addComment)({\r\n          item_id: id,\r\n          username: username.value,\r\n          comment: comment.value,\r\n        });\r\n        username.value = '';\r\n        comment.value = '';\r\n        (0,_fetchData_js__WEBPACK_IMPORTED_MODULE_0__.fetchComments)(id).then((data) => {\r\n          /* eslint-disable */\r\n          loadPopUpComment(data);\r\n        });\r\n        return;\r\n      }\r\n      let span;\r\n      if (document.querySelector('.formcomment #errorComment')) {\r\n        span = document.querySelector('.formcomment #errorComment');\r\n      } else {\r\n        span = document.createElement('span');\r\n        span.setAttribute('id', 'errorComment');\r\n      }\r\n      span.innerHTML = '';\r\n      if (username.value.length < 2) {\r\n        span.innerHTML = 'user name  cannot be empty';\r\n        document.querySelector('.formcomment').appendChild(span);\r\n      }\r\n\r\n      if (comment.value.length <= 4) {\r\n        span.innerHTML = 'comment cannot be empty';\r\n        document.querySelector('.formcomment').appendChild(span);\r\n      }\r\n    });\r\n  });\r\n};\r\n\r\nconst loadPopUpComment = ({ commentData, food }) => {\r\n  const ul = document.getElementById('pop');\r\n  ul.innerHTML = '';\r\n  const li = document.createElement('li');\r\n  li.innerHTML = `\r\n  <span class='close-button'> &#10006; </span>\r\n  <div class='comment-pop-image'> <img src='${food.strCategoryThumb}' alt='${food.strCategory}'/> \r\n  <h4>${food.strCategory} </h4>\r\n  <p class='foodDes'>${food.strCategoryDescription.slice(0, 201)} </p>\r\n  <p class='comments-title'>${commentData.length > 1 ? `comments ( ${(0,_counter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(commentData)} )` : `comment ( ${(0,_counter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(commentData)} )`} </p>\r\n  <div class='popup-comments'>${listComments(commentData)}</div>\r\n  <h5 class='add-h5'>add a comment</h5>\r\n  <form class='formcomment'>\r\n  <input type='text' name='username' id='username' placeholder= 'Your Name' /> <br/>\r\n  <textarea placeholder='your insights' rows='4' name='comment' id='comment'></textarea><br/>\r\n  <button type='button' id='addcomment${food.idCategory}' class='add-comment' >Comment</button>\r\n  </form>`;\r\n  document.getElementById('pop').style.display = 'block';\r\n  ul.appendChild(li);\r\n  closepopup();\r\n  addComments();\r\n};\r\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPopUpComment);\r\n\n\n//# sourceURL=webpack://module2-finalmealcapstone/./src/modules/comments.js?");

/***/ }),

/***/ "./src/modules/counter.js":
/*!********************************!*\
  !*** ./src/modules/counter.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst counter = (arr) => arr.length;\r\n\r\n// module.exports  = counter\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counter);\r\n\n\n//# sourceURL=webpack://module2-finalmealcapstone/./src/modules/counter.js?");

/***/ }),

/***/ "./src/modules/fetchData.js":
/*!**********************************!*\
  !*** ./src/modules/fetchData.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addComment\": () => (/* binding */ addComment),\n/* harmony export */   \"addLike\": () => (/* binding */ addLike),\n/* harmony export */   \"fetchComments\": () => (/* binding */ fetchComments),\n/* harmony export */   \"homePage\": () => (/* binding */ homePage)\n/* harmony export */ });\nconst url = 'https://www.themealdb.com/api/json/v1/1/categories.php/';\r\n\r\nconst involvementURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/4UvdTn5NAXeyK3iSlBaQ/';\r\n\r\nconst homePage = async () => {\r\n  const foodResponse = await fetch(url);\r\n  const foodData = await foodResponse.json();\r\n\r\n  const likesREsponse = await fetch(`${involvementURL}likes/`);\r\n  const likesData = await likesREsponse.json();\r\n\r\n  const likesArr = JSON.parse(JSON.stringify(likesData));\r\n  const foodlist = JSON.parse(JSON.stringify(foodData.categories));\r\n  return { foodlist, likesArr };\r\n};\r\n\r\nconst fetchComments = async (id) => {\r\n  const foodResponse = await fetch(url);\r\n  const foodData = await foodResponse.json();\r\n  const food = foodData.categories.filter((f) => Number(f.idCategory) === Number(id))[0];\r\n  let commentData = [];\r\n  const commentResponse = await fetch(`${involvementURL}comments?item_id=${id}`);\r\n  if (commentResponse.ok) commentData = await commentResponse.json();\r\n  return { commentData, food };\r\n};\r\n\r\nconst addLike = async (like) => {\r\n  const optionsData = {\r\n    method: 'POST',\r\n    body: JSON.stringify(like),\r\n    headers: {\r\n      'Content-Type': 'application/json;charset=utf-8',\r\n    },\r\n  };\r\n  const results = await fetch(`${involvementURL}likes/`, optionsData);\r\n  const data = await results.text();\r\n  return data;\r\n};\r\n\r\nconst addComment = async (comment) => {\r\n  const optionsData = {\r\n    method: 'POST',\r\n    body: JSON.stringify(comment),\r\n    headers: {\r\n      'Content-Type': 'application/json;charset=utf-8',\r\n    },\r\n  };\r\n  const results = await fetch(`${involvementURL}comments/`, optionsData);\r\n  const data = await results.text();\r\n  return data;\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://module2-finalmealcapstone/./src/modules/fetchData.js?");

/***/ }),

/***/ "./src/modules/getFood.js":
/*!********************************!*\
  !*** ./src/modules/getFood.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getFood = ({ idCategory, strCategoryThumb, strCategory }, likes = 0) => `\r\n<img src='${strCategoryThumb}' alt='${strCategory}'/>\r\n<div class='description'>\r\n  <h4>${strCategory}</h4>\r\n    <div class='likes'>\r\n      <button id='like${idCategory}'class='like like${idCategory}'>&#128154;</button>\r\n      <p class='n-likes'>${likes < 2 ? `${likes} like` : `${likes} like`}</p>\r\n    </div>\r\n</div>\r\n<button class='comments' id='comment${idCategory}'>Comments</button>\r\n<button class='reservations' id='reservation${idCategory}'>Reservations</button>\r\n`;\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getFood);\r\n\n\n//# sourceURL=webpack://module2-finalmealcapstone/./src/modules/getFood.js?");

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