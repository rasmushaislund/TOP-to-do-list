/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/background.jpg */ "./src/img/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --dark-mode-font-color: rgba(240, 240, 240, 1);\n  --dark-mode-bckg-color: rgba(32, 33, 36, 0.9);\n  --light-mode-font-color: rgba(32, 33, 36, 1);\n  --light-mode-bckg-color: rgba(240, 240, 240, 1);\n  --task-card-bckg-color: rgba(255, 255, 255, 1);\n  --sidebar-hover-bckg: rgba(212, 215, 216, 1);\n  --sidebar-focus-bckg: rgba(183, 215, 246, 1);\n  --add-project-placeholder: rgb(37, 100, 207);\n\n  --icon-height: 20px;\n  --icon-width: 20px;\n  --logo-height: 50px;\n  --logo-width: 50px;\n  --header-image-height: 35px;\n  --header-image-width: 35px;\n\n  --logo-gap: 10px;\n  --nav-sidebar-gap: 30px;\n  --icon-text-gap: 20px;\n\n  --row-gap-sidebar: 20px;\n  --row-gap-task-card: 10px;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: 'Roboto', Helvetica, Arial, sans-serif;\n}\n\nbody {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  margin: 10px 50px;\n}\n\n.header {\n  color: rgba(240, 240, 240, 1);\n  height: fit-content;\n  display: flex;\n  align-items: start;\n  justify-content: center;\n  margin-bottom: 50px;\n}\n\n.logo-image {\n  height: 50px;\n  width: auto;\n}\n\n.icon-img {\n  height: var(--icon-height);\n  width: auto;\n}\n\n.header-img {\n  height: var(--header-image-height);\n  width: auto;\n}\n\n.settings {\n  margin-left: auto;\n  color: var(--dark-mode-font-color);\n}\n\n.user-settings {\n  display: flex;\n  column-gap: var(--icon-text-gap);\n}\n\n.user-settings li {\n  /* background-color: var(--dark-mode-bckg-color); */\n  padding: 5px 0;\n  font-size: 0.8rem;\n  font-weight: 700;\n}\n\n.theme,\n.help,\n.logo,\n.menu-pair,\n.user-list li,\n.project-list li,\n.task-header,\n.add-task,\n.task-ul,\n.task-actions,\n.li,\n.deadline.li {\n  display: flex;\n}\n\n.task-list,\n.main-container,\n.user-list,\n.project-list {\n  display: grid;\n}\n\n.task-header {\n  align-items: center;\n}\n\n.task-list {\n  row-gap: var(--row-gap-task-card);\n}\n\n.hamburger {\n  padding-left: 30px;\n}\n\n.menu-pair {\n  column-gap: 10px;\n  padding-left: 30px;\n  align-items: center;\n}\n\n.logo {\n  column-gap: var(--logo-gap);\n}\n\n.theme,\n.help {\n  column-gap: 5px;\n}\n\n.help {\n  align-items: center;\n}\n\n.main-container {\n  grid-template-columns: 1fr 4fr;\n  box-shadow: 0 0 50px 1px rgb(2, 14, 17);\n}\n\n.sidebar {\n  grid-column: 1 / 2;\n  display: grid;\n  grid-template-rows: fit-content;\n  row-gap: var(--row-gap-sidebar);\n  min-width: 300px;\n  border-right: 1px solid rgba(193, 193, 193, 0.9);\n  border-right-style: inset;\n}\n\n.task-container {\n  grid-column: 2 / -1;\n  background-color: rgb(226, 226, 216);\n}\n\n.sidebar {\n  padding: 30px 0;\n}\n\n.task-container {\n  padding: 30px 20px;\n}\n\n.task-header {\n  column-gap: var(--icon-text-gap);\n  padding: 0 10px 20px 10px;\n}\n\n.project-name {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--light-mode-font-color);\n}\n\n.add-task,\n.task-card {\n  display: flex;\n  column-gap: var(--icon-text-gap);\n  background-color: var(--task-card-bckg-color);\n  padding: var(--icon-text-gap);\n  align-items: center;\n  box-shadow: 0 0 5px 1px rgb(161, 165, 167);\n  border-radius: 10px;\n}\n\n.task-ul {\n  flex-direction: column;\n  row-gap: var(--row-gap-task-card);\n}\n\n.task-actions {\n  margin-left: auto;\n  column-gap: var(--icon-text-gap);\n  align-self: flex-start;\n}\n\n.user-list {\n  grid-template-rows: repeat(3, fit-content);\n}\n\n.project-list {\n  grid-template-rows: fit-content;\n}\n\n.user-list li,\n.project-list li {\n  padding: 15px 0;\n}\n\n.user-list li:hover,\n.project-list li:hover {\n  background-color: var(--sidebar-hover-bckg);\n  cursor: pointer;\n}\n\n.user-list li:first-child:hover {\n  background-color: var(--light-mode-bckg-color);\n  cursor: auto;\n}\n\n.hamburger img {\n  cursor: pointer;\n}\n\n.project-list li:last-child:hover {\n  cursor: auto;\n  background-color: var(--light-mode-bckg-color);\n}\n\n.task-number {\n  margin-left: auto;\n  padding-right: 25px;\n}\n\n.dark {\n  color: var(--dark-mode-font-color);\n  background-color: var(--dark-mode-bckg-color);\n  fill: var(--dark-mode-font-color);\n}\n\n.light {\n  color: var(--light-mode-font-color);\n  background-color: var(--light-mode-bckg-color);\n  fill: var(--light-mode-font-color);\n}\n\nli {\n  list-style-type: none;\n  align-items: center;\n}\n\nh1 {\n  font-size: 3rem;\n}\n\nsvg {\n  height: var(--icon-height);\n  width: var(--icon-width);\n}\n\nhr {\n  height: 0;\n  margin: 0 15px;\n  border-top: 1px solid rgba(193, 193, 193, 0.9);\n}\n\ntextarea {\n  resize: none;\n  width: 300px;\n}\n\ninput[type='text'],\ninput[type='date'],\nbutton,\ntextarea {\n  appearance: none;\n  border: none;\n  outline: none;\n  /* font-family: 'Roboto', Helvetica, Arial, sans-serif; */\n}\n\n#add-project {\n  font-size: 1rem;\n  /* color: var(--light-mode-font-color); */\n  background-color: var(--light-mode-bckg-color);\n}\n\n#add-project::placeholder {\n  color: var(--add-project-placeholder);\n  opacity: 1;\n}\n\n.task-title {\n  font-size: 1.2rem;\n  width: 300px;\n}\n\n.deadline-li {\n  justify-content: center;\n}\n\n.task-date {\n  color: var(--light-mode-font-color);\n}\n\n#add-task-checkbox {\n  visibility: hidden;\n}\n\n.checkbox {\n  width: var(--icon-width);\n  height: var(--icon-height);\n  border-radius: 50px;\n  vertical-align: middle;\n  border: 1px solid rgba(193, 193, 193, 0.9);\n  appearance: none;\n  -webkit-appearance: none;\n  outline: none;\n  cursor: pointer;\n}\n\n.checkbox:checked {\n  appearance: auto;\n  clip-path: circle(50% at 50% 50%);\n  background-color: rgba(37, 100, 207, 1);\n}\n\n#add-task-btn {\n  padding: 5px 10px;\n  color: var(--light-mode-font-color);\n  border: 1px solid var(--light-mode-font-color);\n  cursor: pointer;\n  background-color: var(--task-card-bckg-color);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --dark-mode-font-color: rgba(240, 240, 240, 1);\n  --dark-mode-bckg-color: rgba(32, 33, 36, 0.9);\n  --light-mode-font-color: rgba(32, 33, 36, 1);\n  --light-mode-bckg-color: rgba(240, 240, 240, 1);\n  --task-card-bckg-color: rgba(255, 255, 255, 1);\n  --sidebar-hover-bckg: rgba(212, 215, 216, 1);\n  --sidebar-focus-bckg: rgba(183, 215, 246, 1);\n  --add-project-placeholder: rgb(37, 100, 207);\n\n  --icon-height: 20px;\n  --icon-width: 20px;\n  --logo-height: 50px;\n  --logo-width: 50px;\n  --header-image-height: 35px;\n  --header-image-width: 35px;\n\n  --logo-gap: 10px;\n  --nav-sidebar-gap: 30px;\n  --icon-text-gap: 20px;\n\n  --row-gap-sidebar: 20px;\n  --row-gap-task-card: 10px;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: 'Roboto', Helvetica, Arial, sans-serif;\n}\n\nbody {\n  background-image: url('./img/background.jpg');\n  background-size: cover;\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  margin: 10px 50px;\n}\n\n.header {\n  color: rgba(240, 240, 240, 1);\n  height: fit-content;\n  display: flex;\n  align-items: start;\n  justify-content: center;\n  margin-bottom: 50px;\n}\n\n.logo-image {\n  height: 50px;\n  width: auto;\n}\n\n.icon-img {\n  height: var(--icon-height);\n  width: auto;\n}\n\n.header-img {\n  height: var(--header-image-height);\n  width: auto;\n}\n\n.settings {\n  margin-left: auto;\n  color: var(--dark-mode-font-color);\n}\n\n.user-settings {\n  display: flex;\n  column-gap: var(--icon-text-gap);\n}\n\n.user-settings li {\n  /* background-color: var(--dark-mode-bckg-color); */\n  padding: 5px 0;\n  font-size: 0.8rem;\n  font-weight: 700;\n}\n\n.theme,\n.help,\n.logo,\n.menu-pair,\n.user-list li,\n.project-list li,\n.task-header,\n.add-task,\n.task-ul,\n.task-actions,\n.li,\n.deadline.li {\n  display: flex;\n}\n\n.task-list,\n.main-container,\n.user-list,\n.project-list {\n  display: grid;\n}\n\n.task-header {\n  align-items: center;\n}\n\n.task-list {\n  row-gap: var(--row-gap-task-card);\n}\n\n.hamburger {\n  padding-left: 30px;\n}\n\n.menu-pair {\n  column-gap: 10px;\n  padding-left: 30px;\n  align-items: center;\n}\n\n.logo {\n  column-gap: var(--logo-gap);\n}\n\n.theme,\n.help {\n  column-gap: 5px;\n}\n\n.help {\n  align-items: center;\n}\n\n.main-container {\n  grid-template-columns: 1fr 4fr;\n  box-shadow: 0 0 50px 1px rgb(2, 14, 17);\n}\n\n.sidebar {\n  grid-column: 1 / 2;\n  display: grid;\n  grid-template-rows: fit-content;\n  row-gap: var(--row-gap-sidebar);\n  min-width: 300px;\n  border-right: 1px solid rgba(193, 193, 193, 0.9);\n  border-right-style: inset;\n}\n\n.task-container {\n  grid-column: 2 / -1;\n  background-color: rgb(226, 226, 216);\n}\n\n.sidebar {\n  padding: 30px 0;\n}\n\n.task-container {\n  padding: 30px 20px;\n}\n\n.task-header {\n  column-gap: var(--icon-text-gap);\n  padding: 0 10px 20px 10px;\n}\n\n.project-name {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--light-mode-font-color);\n}\n\n.add-task,\n.task-card {\n  display: flex;\n  column-gap: var(--icon-text-gap);\n  background-color: var(--task-card-bckg-color);\n  padding: var(--icon-text-gap);\n  align-items: center;\n  box-shadow: 0 0 5px 1px rgb(161, 165, 167);\n  border-radius: 10px;\n}\n\n.task-ul {\n  flex-direction: column;\n  row-gap: var(--row-gap-task-card);\n}\n\n.task-actions {\n  margin-left: auto;\n  column-gap: var(--icon-text-gap);\n  align-self: flex-start;\n}\n\n.user-list {\n  grid-template-rows: repeat(3, fit-content);\n}\n\n.project-list {\n  grid-template-rows: fit-content;\n}\n\n.user-list li,\n.project-list li {\n  padding: 15px 0;\n}\n\n.user-list li:hover,\n.project-list li:hover {\n  background-color: var(--sidebar-hover-bckg);\n  cursor: pointer;\n}\n\n.user-list li:first-child:hover {\n  background-color: var(--light-mode-bckg-color);\n  cursor: auto;\n}\n\n.hamburger img {\n  cursor: pointer;\n}\n\n.project-list li:last-child:hover {\n  cursor: auto;\n  background-color: var(--light-mode-bckg-color);\n}\n\n.task-number {\n  margin-left: auto;\n  padding-right: 25px;\n}\n\n.dark {\n  color: var(--dark-mode-font-color);\n  background-color: var(--dark-mode-bckg-color);\n  fill: var(--dark-mode-font-color);\n}\n\n.light {\n  color: var(--light-mode-font-color);\n  background-color: var(--light-mode-bckg-color);\n  fill: var(--light-mode-font-color);\n}\n\nli {\n  list-style-type: none;\n  align-items: center;\n}\n\nh1 {\n  font-size: 3rem;\n}\n\nsvg {\n  height: var(--icon-height);\n  width: var(--icon-width);\n}\n\nhr {\n  height: 0;\n  margin: 0 15px;\n  border-top: 1px solid rgba(193, 193, 193, 0.9);\n}\n\ntextarea {\n  resize: none;\n  width: 300px;\n}\n\ninput[type='text'],\ninput[type='date'],\nbutton,\ntextarea {\n  appearance: none;\n  border: none;\n  outline: none;\n  /* font-family: 'Roboto', Helvetica, Arial, sans-serif; */\n}\n\n#add-project {\n  font-size: 1rem;\n  /* color: var(--light-mode-font-color); */\n  background-color: var(--light-mode-bckg-color);\n}\n\n#add-project::placeholder {\n  color: var(--add-project-placeholder);\n  opacity: 1;\n}\n\n.task-title {\n  font-size: 1.2rem;\n  width: 300px;\n}\n\n.deadline-li {\n  justify-content: center;\n}\n\n.task-date {\n  color: var(--light-mode-font-color);\n}\n\n#add-task-checkbox {\n  visibility: hidden;\n}\n\n.checkbox {\n  width: var(--icon-width);\n  height: var(--icon-height);\n  border-radius: 50px;\n  vertical-align: middle;\n  border: 1px solid rgba(193, 193, 193, 0.9);\n  appearance: none;\n  -webkit-appearance: none;\n  outline: none;\n  cursor: pointer;\n}\n\n.checkbox:checked {\n  appearance: auto;\n  clip-path: circle(50% at 50% 50%);\n  background-color: rgba(37, 100, 207, 1);\n}\n\n#add-task-btn {\n  padding: 5px 10px;\n  color: var(--light-mode-font-color);\n  border: 1px solid var(--light-mode-font-color);\n  cursor: pointer;\n  background-color: var(--task-card-bckg-color);\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/owl-logo-white.svg */ "./src/img/owl-logo-white.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/support-white.svg */ "./src/img/support-white.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/menu.svg */ "./src/img/menu.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/calender.svg */ "./src/img/calender.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/star-outline.svg */ "./src/img/star-outline.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/bullet-list.svg */ "./src/img/bullet-list.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/plus-blue.svg */ "./src/img/plus-blue.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./img/dots-horizontal.svg */ "./src/img/dots-horizontal.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./img/edit-outline.svg */ "./src/img/edit-outline.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./img/delete.svg */ "./src/img/delete.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>TODODODO APP</title>\n    <link\n      href=\"https://fonts.googleapis.com/css2?family=Fredoka+One&family=Fredoka:wght@300&family=Roboto:wght@100;400&display=swap\"\n      rel=\"stylesheet\"\n    />\n    <link\n      href=\"https://fonts.googleapis.com/css2?family=Caveat&display=swap\"\n      rel=\"stylesheet\"\n    />\n  </head>\n  <body>\n    <div class=\"header\">\n      <div class=\"logo\">\n        <img\n          class=\"logo-image\"\n          src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"\n          alt=\"TODODODO logo\"\n        />\n        <h1 class=\"logo-name\">TODODODO</h1>\n      </div>\n      <div class=\"settings\">\n        <ul class=\"user-settings\">\n          <!-- <li>\n            <div class=\"theme\">\n              <img class=\"icon-img\" src=\"./img/moon.svg\" alt=\"theme icon\"/>\n              <p>Light</p>\n            </div>\n          </li> -->\n          <li>\n            <div class=\"help\">\n              <img\n                class=\"icon-img\"\n                src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\"\n                alt=\"help icon\"\n              />\n              <p>Help</p>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"main-container\">\n      <div class=\"sidebar light\">\n        <div class=\"user-menu\">\n          <ul class=\"user-list\">\n            <li>\n              <div class=\"menu-pair hamburger\">\n                <img\n                  class=\"icon-img\"\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"\n                  alt=\"menu pop-in pop-out icon\"\n                />\n              </div>\n            </li>\n            <li>\n              <div class=\"menu-pair\">\n                <img\n                  class=\"icon-img\"\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\"\n                  alt=\"calender icon for today link\"\n                />\n                <p class=\"menu-para\">Today</p>\n              </div>\n              <p class=\"task-number\">2</p>\n            </li>\n            <li>\n              <div class=\"menu-pair\">\n                <img\n                  class=\"icon-img\"\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\"\n                  alt=\"important icon\"\n                />\n                <p class=\"menu-para\">Important</p>\n              </div>\n              <p class=\"task-number\">2</p>\n            </li>\n          </ul>\n        </div>\n        <hr />\n        <div class=\"project-menu\">\n          <ul class=\"project-list\">\n            <li>\n              <div class=\"menu-pair\">\n                <img\n                  class=\"icon-img\"\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"\n                  alt=\"bullet list icon\"\n                />\n                <p class=\"menu-para\">Projects</p>\n              </div>\n              <p class=\"task-number\">2</p>\n            </li>\n            <li>\n              <div class=\"menu-pair\">\n                <img\n                  class=\"icon-img add-project-image\"\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\"\n                  alt=\"plus icon for adding new project\"\n                />\n                <input\n                  type=\"text\"\n                  id=\"add-project\"\n                  placeholder=\"New project\"\n                  name=\"add-project\"\n                  maxlength=\"150\"\n                />\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"task-container\">\n        <div class=\"task-header\">\n          <img\n            class=\"icon-img header-img\"\n            src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"\n            alt=\"icon for project header in task section\"\n          />\n          <div class=\"project-name\">Projects</div>\n          <img\n            class=\"icon-img\"\n            src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\"\n            alt=\"dots icon for expanding controls\"\n          />\n        </div>\n        <div class=\"task-list\">\n          <div class=\"add-task\">\n            <input id=\"add-task-checkbox\" type=\"checkbox\" />\n            <div class=\"task-info\">\n              <ul class=\"task-ul\">\n                <li>\n                  <input\n                    type=\"text\"\n                    id=\"title\"\n                    class=\"task-title\"\n                    placeholder=\"Add a task\"\n                    name=\"title\"\n                    maxlength=\"150\"\n                  />\n                </li>\n                <li class=\"deadline-li\">\n                  <!-- <label for=\"date\">&#128197 -->\n                  <img\n                    class=\"icon-img\"\n                    src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\"\n                    alt=\"calender icon for choosing task deadline\"\n                  />\n                  <input\n                    id=\"date\"\n                    class=\"task-date\"\n                    type=\"date\"\n                    placeholder=\"Choose deadline\"\n                  />\n                  <!-- </label> -->\n                </li>\n                <li>\n                  <textarea\n                    rows=\"1\"\n                    maxlength=\"400\"\n                    placeholder=\"Add description here...\"\n                    wrap=\"soft\"\n                  ></textarea>\n                </li>\n              </ul>\n            </div>\n            <div class=\"task-actions\">\n              <button id=\"add-task-btn\" type=\"button\">+ Add</button>\n            </div>\n          </div>\n          <div class=\"task-card\">\n            <input class=\"checkbox\" id=\"task-checkbox\" type=\"checkbox\" />\n            <div class=\"task-info\">\n              <ul class=\"task-ul\">\n                <li>\n                  <input\n                    type=\"text\"\n                    id=\"title\"\n                    class=\"task-title\"\n                    placeholder=\"Add a title\"\n                    name=\"title\"\n                    maxlength=\"150\"\n                  />\n                </li>\n                <li>\n                  <input\n                    id=\"date\"\n                    class=\"task-date\"\n                    type=\"date\"\n                    placeholder=\"Choose deadline\"\n                  />\n                </li>\n                <li>\n                  <textarea\n                    rows=\"1\"\n                    maxlength=\"400\"\n                    placeholder=\"Add description here...\"\n                    wrap=\"soft\"\n                  ></textarea>\n                </li>\n              </ul>\n            </div>\n            <div class=\"task-actions\">\n              <img\n                class=\"icon-img\"\n                src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\"\n                alt=\"edit task icon\"\n              />\n              <img\n                class=\"icon-img\"\n                src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\"\n                alt=\"add to important category icon\"\n              />\n              <img\n                class=\"icon-img\"\n                src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\"\n                alt=\"delete task icon\"\n              />\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </body>\n</html>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
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

/***/ "./src/img/background.jpg":
/*!********************************!*\
  !*** ./src/img/background.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/background.13c89a0351e658839fc9.jpg";

/***/ }),

/***/ "./src/img/bullet-list.svg":
/*!*********************************!*\
  !*** ./src/img/bullet-list.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/bullet-list.365f3e7f182c9f913994.svg";

/***/ }),

/***/ "./src/img/calender.svg":
/*!******************************!*\
  !*** ./src/img/calender.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/calender.3faae0cf01e4ecd160ef.svg";

/***/ }),

/***/ "./src/img/delete.svg":
/*!****************************!*\
  !*** ./src/img/delete.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/delete.eac1a29b0fcadff53187.svg";

/***/ }),

/***/ "./src/img/dots-horizontal.svg":
/*!*************************************!*\
  !*** ./src/img/dots-horizontal.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/dots-horizontal.469afb7a3c40cc9d6606.svg";

/***/ }),

/***/ "./src/img/edit-outline.svg":
/*!**********************************!*\
  !*** ./src/img/edit-outline.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/edit-outline.cb174535b66c89089803.svg";

/***/ }),

/***/ "./src/img/menu.svg":
/*!**************************!*\
  !*** ./src/img/menu.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/menu.2d4061552fac064ed076.svg";

/***/ }),

/***/ "./src/img/owl-logo-white.svg":
/*!************************************!*\
  !*** ./src/img/owl-logo-white.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/owl-logo-white.6f788d9a27d27da035f9.svg";

/***/ }),

/***/ "./src/img/plus-blue.svg":
/*!*******************************!*\
  !*** ./src/img/plus-blue.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/plus-blue.77206c9e6df74124e3ce.svg";

/***/ }),

/***/ "./src/img/star-outline.svg":
/*!**********************************!*\
  !*** ./src/img/star-outline.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/star-outline.c2e6e6dd118d33c26922.svg";

/***/ }),

/***/ "./src/img/support-white.svg":
/*!***********************************!*\
  !*** ./src/img/support-white.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/support-white.20095ae09ec9b7e21703.svg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
// START //




console.log('hello');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixrREFBa0QsR0FBRyxTQUFTLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sZ0JBQWdCLFVBQVUsTUFBTSxRQUFRLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9B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UEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQUE7O0FBRXFCO0FBQ0M7O0FBRXRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvcC10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5odG1sIiwid2VicGFjazovL3RvcC10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvcC10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvcC10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvcC10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcC10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvcC10by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tZGFyay1tb2RlLWZvbnQtY29sb3I6IHJnYmEoMjQwLCAyNDAsIDI0MCwgMSk7XFxuICAtLWRhcmstbW9kZS1iY2tnLWNvbG9yOiByZ2JhKDMyLCAzMywgMzYsIDAuOSk7XFxuICAtLWxpZ2h0LW1vZGUtZm9udC1jb2xvcjogcmdiYSgzMiwgMzMsIDM2LCAxKTtcXG4gIC0tbGlnaHQtbW9kZS1iY2tnLWNvbG9yOiByZ2JhKDI0MCwgMjQwLCAyNDAsIDEpO1xcbiAgLS10YXNrLWNhcmQtYmNrZy1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXG4gIC0tc2lkZWJhci1ob3Zlci1iY2tnOiByZ2JhKDIxMiwgMjE1LCAyMTYsIDEpO1xcbiAgLS1zaWRlYmFyLWZvY3VzLWJja2c6IHJnYmEoMTgzLCAyMTUsIDI0NiwgMSk7XFxuICAtLWFkZC1wcm9qZWN0LXBsYWNlaG9sZGVyOiByZ2IoMzcsIDEwMCwgMjA3KTtcXG5cXG4gIC0taWNvbi1oZWlnaHQ6IDIwcHg7XFxuICAtLWljb24td2lkdGg6IDIwcHg7XFxuICAtLWxvZ28taGVpZ2h0OiA1MHB4O1xcbiAgLS1sb2dvLXdpZHRoOiA1MHB4O1xcbiAgLS1oZWFkZXItaW1hZ2UtaGVpZ2h0OiAzNXB4O1xcbiAgLS1oZWFkZXItaW1hZ2Utd2lkdGg6IDM1cHg7XFxuXFxuICAtLWxvZ28tZ2FwOiAxMHB4O1xcbiAgLS1uYXYtc2lkZWJhci1nYXA6IDMwcHg7XFxuICAtLWljb24tdGV4dC1nYXA6IDIwcHg7XFxuXFxuICAtLXJvdy1nYXAtc2lkZWJhcjogMjBweDtcXG4gIC0tcm93LWdhcC10YXNrLWNhcmQ6IDEwcHg7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIG1hcmdpbjogMTBweCA1MHB4O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGNvbG9yOiByZ2JhKDI0MCwgMjQwLCAyNDAsIDEpO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcblxcbi5sb2dvLWltYWdlIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4uaWNvbi1pbWcge1xcbiAgaGVpZ2h0OiB2YXIoLS1pY29uLWhlaWdodCk7XFxuICB3aWR0aDogYXV0bztcXG59XFxuXFxuLmhlYWRlci1pbWcge1xcbiAgaGVpZ2h0OiB2YXIoLS1oZWFkZXItaW1hZ2UtaGVpZ2h0KTtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4uc2V0dGluZ3Mge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBjb2xvcjogdmFyKC0tZGFyay1tb2RlLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4udXNlci1zZXR0aW5ncyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgY29sdW1uLWdhcDogdmFyKC0taWNvbi10ZXh0LWdhcCk7XFxufVxcblxcbi51c2VyLXNldHRpbmdzIGxpIHtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstbW9kZS1iY2tnLWNvbG9yKTsgKi9cXG4gIHBhZGRpbmc6IDVweCAwO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4udGhlbWUsXFxuLmhlbHAsXFxuLmxvZ28sXFxuLm1lbnUtcGFpcixcXG4udXNlci1saXN0IGxpLFxcbi5wcm9qZWN0LWxpc3QgbGksXFxuLnRhc2staGVhZGVyLFxcbi5hZGQtdGFzayxcXG4udGFzay11bCxcXG4udGFzay1hY3Rpb25zLFxcbi5saSxcXG4uZGVhZGxpbmUubGkge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRhc2stbGlzdCxcXG4ubWFpbi1jb250YWluZXIsXFxuLnVzZXItbGlzdCxcXG4ucHJvamVjdC1saXN0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi50YXNrLWhlYWRlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFzay1saXN0IHtcXG4gIHJvdy1nYXA6IHZhcigtLXJvdy1nYXAtdGFzay1jYXJkKTtcXG59XFxuXFxuLmhhbWJ1cmdlciB7XFxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxufVxcblxcbi5tZW51LXBhaXIge1xcbiAgY29sdW1uLWdhcDogMTBweDtcXG4gIHBhZGRpbmctbGVmdDogMzBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sb2dvIHtcXG4gIGNvbHVtbi1nYXA6IHZhcigtLWxvZ28tZ2FwKTtcXG59XFxuXFxuLnRoZW1lLFxcbi5oZWxwIHtcXG4gIGNvbHVtbi1nYXA6IDVweDtcXG59XFxuXFxuLmhlbHAge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gIGJveC1zaGFkb3c6IDAgMCA1MHB4IDFweCByZ2IoMiwgMTQsIDE3KTtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogZml0LWNvbnRlbnQ7XFxuICByb3ctZ2FwOiB2YXIoLS1yb3ctZ2FwLXNpZGViYXIpO1xcbiAgbWluLXdpZHRoOiAzMDBweDtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMTkzLCAxOTMsIDE5MywgMC45KTtcXG4gIGJvcmRlci1yaWdodC1zdHlsZTogaW5zZXQ7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbjogMiAvIC0xO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNiwgMjI2LCAyMTYpO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBwYWRkaW5nOiAzMHB4IDA7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAzMHB4IDIwcHg7XFxufVxcblxcbi50YXNrLWhlYWRlciB7XFxuICBjb2x1bW4tZ2FwOiB2YXIoLS1pY29uLXRleHQtZ2FwKTtcXG4gIHBhZGRpbmc6IDAgMTBweCAyMHB4IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0LW5hbWUge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LW1vZGUtZm9udC1jb2xvcik7XFxufVxcblxcbi5hZGQtdGFzayxcXG4udGFzay1jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBjb2x1bW4tZ2FwOiB2YXIoLS1pY29uLXRleHQtZ2FwKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhc2stY2FyZC1iY2tnLWNvbG9yKTtcXG4gIHBhZGRpbmc6IHZhcigtLWljb24tdGV4dC1nYXApO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggMXB4IHJnYigxNjEsIDE2NSwgMTY3KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi50YXNrLXVsIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICByb3ctZ2FwOiB2YXIoLS1yb3ctZ2FwLXRhc2stY2FyZCk7XFxufVxcblxcbi50YXNrLWFjdGlvbnMge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBjb2x1bW4tZ2FwOiB2YXIoLS1pY29uLXRleHQtZ2FwKTtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi51c2VyLWxpc3Qge1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgZml0LWNvbnRlbnQpO1xcbn1cXG5cXG4ucHJvamVjdC1saXN0IHtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogZml0LWNvbnRlbnQ7XFxufVxcblxcbi51c2VyLWxpc3QgbGksXFxuLnByb2plY3QtbGlzdCBsaSB7XFxuICBwYWRkaW5nOiAxNXB4IDA7XFxufVxcblxcbi51c2VyLWxpc3QgbGk6aG92ZXIsXFxuLnByb2plY3QtbGlzdCBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWhvdmVyLWJja2cpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udXNlci1saXN0IGxpOmZpcnN0LWNoaWxkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LW1vZGUtYmNrZy1jb2xvcik7XFxuICBjdXJzb3I6IGF1dG87XFxufVxcblxcbi5oYW1idXJnZXIgaW1nIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3QtbGlzdCBsaTpsYXN0LWNoaWxkOmhvdmVyIHtcXG4gIGN1cnNvcjogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LW1vZGUtYmNrZy1jb2xvcik7XFxufVxcblxcbi50YXNrLW51bWJlciB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XFxufVxcblxcbi5kYXJrIHtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLW1vZGUtZm9udC1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLW1vZGUtYmNrZy1jb2xvcik7XFxuICBmaWxsOiB2YXIoLS1kYXJrLW1vZGUtZm9udC1jb2xvcik7XFxufVxcblxcbi5saWdodCB7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtbW9kZS1mb250LWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LW1vZGUtYmNrZy1jb2xvcik7XFxuICBmaWxsOiB2YXIoLS1saWdodC1tb2RlLWZvbnQtY29sb3IpO1xcbn1cXG5cXG5saSB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbnN2ZyB7XFxuICBoZWlnaHQ6IHZhcigtLWljb24taGVpZ2h0KTtcXG4gIHdpZHRoOiB2YXIoLS1pY29uLXdpZHRoKTtcXG59XFxuXFxuaHIge1xcbiAgaGVpZ2h0OiAwO1xcbiAgbWFyZ2luOiAwIDE1cHg7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgxOTMsIDE5MywgMTkzLCAwLjkpO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxuICB3aWR0aDogMzAwcHg7XFxufVxcblxcbmlucHV0W3R5cGU9J3RleHQnXSxcXG5pbnB1dFt0eXBlPSdkYXRlJ10sXFxuYnV0dG9uLFxcbnRleHRhcmVhIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgLyogZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmOyAqL1xcbn1cXG5cXG4jYWRkLXByb2plY3Qge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgLyogY29sb3I6IHZhcigtLWxpZ2h0LW1vZGUtZm9udC1jb2xvcik7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1tb2RlLWJja2ctY29sb3IpO1xcbn1cXG5cXG4jYWRkLXByb2plY3Q6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1hZGQtcHJvamVjdC1wbGFjZWhvbGRlcik7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4udGFzay10aXRsZSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHdpZHRoOiAzMDBweDtcXG59XFxuXFxuLmRlYWRsaW5lLWxpIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGFzay1kYXRlIHtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1tb2RlLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4jYWRkLXRhc2stY2hlY2tib3gge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgd2lkdGg6IHZhcigtLWljb24td2lkdGgpO1xcbiAgaGVpZ2h0OiB2YXIoLS1pY29uLWhlaWdodCk7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTkzLCAxOTMsIDE5MywgMC45KTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2hlY2tib3g6Y2hlY2tlZCB7XFxuICBhcHBlYXJhbmNlOiBhdXRvO1xcbiAgY2xpcC1wYXRoOiBjaXJjbGUoNTAlIGF0IDUwJSA1MCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNywgMTAwLCAyMDcsIDEpO1xcbn1cXG5cXG4jYWRkLXRhc2stYnRuIHtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LW1vZGUtZm9udC1jb2xvcik7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saWdodC1tb2RlLWZvbnQtY29sb3IpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFzay1jYXJkLWJja2ctY29sb3IpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VB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RSxxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsY0FBYztFQUNkLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7Ozs7RUFJRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7RUFDYix5REFBeUQ7QUFDM0Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YseUNBQXlDO0VBQ3pDLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLDBDQUEwQztFQUMxQyxnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlDQUFpQztFQUNqQyx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUNBQW1DO0VBQ25DLDhDQUE4QztFQUM5QyxlQUFlO0VBQ2YsNkNBQTZDO0FBQy9DXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tZGFyay1tb2RlLWZvbnQtY29sb3I6IHJnYmEoMjQwLCAyNDAsIDI0MCwgMSk7XFxuICAtLWRhcmstbW9kZS1iY2tnLWNvbG9yOiByZ2JhKDMyLCAzMywgMzYsIDAuOSk7XFxuICAtLWxpZ2h0LW1vZGUtZm9udC1jb2xvcjogcmdiYSgzMiwgMzMsIDM2LCAxKTtcXG4gIC0tbGlnaHQtbW9kZS1iY2tnLWNvbG9yOiByZ2JhKDI0MCwgMjQwLCAyNDAsIDEpO1xcbiAgLS10YXNrLWNhcmQtYmNrZy1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXG4gIC0tc2lkZWJhci1ob3Zlci1iY2tnOiByZ2JhKDIxMiwgMjE1LCAyMTYsIDEpO1xcbiAgLS1zaWRlYmFyLWZvY3VzLWJja2c6IHJnYmEoMTgzLCAyMTUsIDI0NiwgMSk7XFxuICAtLWFkZC1wcm9qZWN0LXBsYWNlaG9sZGVyOiByZ2IoMzcsIDEwMCwgMjA3KTtcXG5cXG4gIC0taWNvbi1oZWlnaHQ6IDIwcHg7XFxuICAtLWljb24td2lkdGg6IDIwcHg7XFxuICAtLWxvZ28taGVpZ2h0OiA1MHB4O1xcbiAgLS1sb2dvLXdpZHRoOiA1MHB4O1xcbiAgLS1oZWFkZXItaW1hZ2UtaGVpZ2h0OiAzNXB4O1xcbiAgLS1oZWFkZXItaW1hZ2Utd2lkdGg6IDM1cHg7XFxuXFxuICAtLWxvZ28tZ2FwOiAxMHB4O1xcbiAgLS1uYXYtc2lkZWJhci1nYXA6IDMwcHg7XFxuICAtLWljb24tdGV4dC1nYXA6IDIwcHg7XFxuXFxuICAtLXJvdy1nYXAtc2lkZWJhcjogMjBweDtcXG4gIC0tcm93LWdhcC10YXNrLWNhcmQ6IDEwcHg7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltZy9iYWNrZ3JvdW5kLmpwZycpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgbWFyZ2luOiAxMHB4IDUwcHg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgY29sb3I6IHJnYmEoMjQwLCAyNDAsIDI0MCwgMSk7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxuLmxvZ28taW1hZ2Uge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IGF1dG87XFxufVxcblxcbi5pY29uLWltZyB7XFxuICBoZWlnaHQ6IHZhcigtLWljb24taGVpZ2h0KTtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4uaGVhZGVyLWltZyB7XFxuICBoZWlnaHQ6IHZhcigtLWhlYWRlci1pbWFnZS1oZWlnaHQpO1xcbiAgd2lkdGg6IGF1dG87XFxufVxcblxcbi5zZXR0aW5ncyB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLW1vZGUtZm9udC1jb2xvcik7XFxufVxcblxcbi51c2VyLXNldHRpbmdzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBjb2x1bW4tZ2FwOiB2YXIoLS1pY29uLXRleHQtZ2FwKTtcXG59XFxuXFxuLnVzZXItc2V0dGluZ3MgbGkge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1tb2RlLWJja2ctY29sb3IpOyAqL1xcbiAgcGFkZGluZzogNXB4IDA7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi50aGVtZSxcXG4uaGVscCxcXG4ubG9nbyxcXG4ubWVudS1wYWlyLFxcbi51c2VyLWxpc3QgbGksXFxuLnByb2plY3QtbGlzdCBsaSxcXG4udGFzay1oZWFkZXIsXFxuLmFkZC10YXNrLFxcbi50YXNrLXVsLFxcbi50YXNrLWFjdGlvbnMsXFxuLmxpLFxcbi5kZWFkbGluZS5saSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udGFzay1saXN0LFxcbi5tYWluLWNvbnRhaW5lcixcXG4udXNlci1saXN0LFxcbi5wcm9qZWN0LWxpc3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLnRhc2staGVhZGVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrLWxpc3Qge1xcbiAgcm93LWdhcDogdmFyKC0tcm93LWdhcC10YXNrLWNhcmQpO1xcbn1cXG5cXG4uaGFtYnVyZ2VyIHtcXG4gIHBhZGRpbmctbGVmdDogMzBweDtcXG59XFxuXFxuLm1lbnUtcGFpciB7XFxuICBjb2x1bW4tZ2FwOiAxMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxvZ28ge1xcbiAgY29sdW1uLWdhcDogdmFyKC0tbG9nby1nYXApO1xcbn1cXG5cXG4udGhlbWUsXFxuLmhlbHAge1xcbiAgY29sdW1uLWdhcDogNXB4O1xcbn1cXG5cXG4uaGVscCB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWFpbi1jb250YWluZXIge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgYm94LXNoYWRvdzogMCAwIDUwcHggMXB4IHJnYigyLCAxNCwgMTcpO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBmaXQtY29udGVudDtcXG4gIHJvdy1nYXA6IHZhcigtLXJvdy1nYXAtc2lkZWJhcik7XFxuICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgxOTMsIDE5MywgMTkzLCAwLjkpO1xcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBpbnNldDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gLTE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2LCAyMjYsIDIxNik7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIHBhZGRpbmc6IDMwcHggMDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDMwcHggMjBweDtcXG59XFxuXFxuLnRhc2staGVhZGVyIHtcXG4gIGNvbHVtbi1nYXA6IHZhcigtLWljb24tdGV4dC1nYXApO1xcbiAgcGFkZGluZzogMCAxMHB4IDIwcHggMTBweDtcXG59XFxuXFxuLnByb2plY3QtbmFtZSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtbW9kZS1mb250LWNvbG9yKTtcXG59XFxuXFxuLmFkZC10YXNrLFxcbi50YXNrLWNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGNvbHVtbi1nYXA6IHZhcigtLWljb24tdGV4dC1nYXApO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFzay1jYXJkLWJja2ctY29sb3IpO1xcbiAgcGFkZGluZzogdmFyKC0taWNvbi10ZXh0LWdhcCk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogMCAwIDVweCAxcHggcmdiKDE2MSwgMTY1LCAxNjcpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnRhc2stdWwge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHJvdy1nYXA6IHZhcigtLXJvdy1nYXAtdGFzay1jYXJkKTtcXG59XFxuXFxuLnRhc2stYWN0aW9ucyB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIGNvbHVtbi1nYXA6IHZhcigtLWljb24tdGV4dC1nYXApO1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLnVzZXItbGlzdCB7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBmaXQtY29udGVudCk7XFxufVxcblxcbi5wcm9qZWN0LWxpc3Qge1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBmaXQtY29udGVudDtcXG59XFxuXFxuLnVzZXItbGlzdCBsaSxcXG4ucHJvamVjdC1saXN0IGxpIHtcXG4gIHBhZGRpbmc6IDE1cHggMDtcXG59XFxuXFxuLnVzZXItbGlzdCBsaTpob3ZlcixcXG4ucHJvamVjdC1saXN0IGxpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItaG92ZXItYmNrZyk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi51c2VyLWxpc3QgbGk6Zmlyc3QtY2hpbGQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtbW9kZS1iY2tnLWNvbG9yKTtcXG4gIGN1cnNvcjogYXV0bztcXG59XFxuXFxuLmhhbWJ1cmdlciBpbWcge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdC1saXN0IGxpOmxhc3QtY2hpbGQ6aG92ZXIge1xcbiAgY3Vyc29yOiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtbW9kZS1iY2tnLWNvbG9yKTtcXG59XFxuXFxuLnRhc2stbnVtYmVyIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgcGFkZGluZy1yaWdodDogMjVweDtcXG59XFxuXFxuLmRhcmsge1xcbiAgY29sb3I6IHZhcigtLWRhcmstbW9kZS1mb250LWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstbW9kZS1iY2tnLWNvbG9yKTtcXG4gIGZpbGw6IHZhcigtLWRhcmstbW9kZS1mb250LWNvbG9yKTtcXG59XFxuXFxuLmxpZ2h0IHtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1tb2RlLWZvbnQtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtbW9kZS1iY2tnLWNvbG9yKTtcXG4gIGZpbGw6IHZhcigtLWxpZ2h0LW1vZGUtZm9udC1jb2xvcik7XFxufVxcblxcbmxpIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuc3ZnIHtcXG4gIGhlaWdodDogdmFyKC0taWNvbi1oZWlnaHQpO1xcbiAgd2lkdGg6IHZhcigtLWljb24td2lkdGgpO1xcbn1cXG5cXG5ociB7XFxuICBoZWlnaHQ6IDA7XFxuICBtYXJnaW46IDAgMTVweDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDE5MywgMTkzLCAxOTMsIDAuOSk7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIHdpZHRoOiAzMDBweDtcXG59XFxuXFxuaW5wdXRbdHlwZT0ndGV4dCddLFxcbmlucHV0W3R5cGU9J2RhdGUnXSxcXG5idXR0b24sXFxudGV4dGFyZWEge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICAvKiBmb250LWZhbWlseTogJ1JvYm90bycsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7ICovXFxufVxcblxcbiNhZGQtcHJvamVjdCB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICAvKiBjb2xvcjogdmFyKC0tbGlnaHQtbW9kZS1mb250LWNvbG9yKTsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LW1vZGUtYmNrZy1jb2xvcik7XFxufVxcblxcbiNhZGQtcHJvamVjdDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHZhcigtLWFkZC1wcm9qZWN0LXBsYWNlaG9sZGVyKTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi50YXNrLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4uZGVhZGxpbmUtbGkge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50YXNrLWRhdGUge1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LW1vZGUtZm9udC1jb2xvcik7XFxufVxcblxcbiNhZGQtdGFzay1jaGVja2JveCB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5jaGVja2JveCB7XFxuICB3aWR0aDogdmFyKC0taWNvbi13aWR0aCk7XFxuICBoZWlnaHQ6IHZhcigtLWljb24taGVpZ2h0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxOTMsIDE5MywgMTkzLCAwLjkpO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jaGVja2JveDpjaGVja2VkIHtcXG4gIGFwcGVhcmFuY2U6IGF1dG87XFxuICBjbGlwLXBhdGg6IGNpcmNsZSg1MCUgYXQgNTAlIDUwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM3LCAxMDAsIDIwNywgMSk7XFxufVxcblxcbiNhZGQtdGFzay1idG4ge1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtbW9kZS1mb250LWNvbG9yKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LW1vZGUtZm9udC1jb2xvcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YXNrLWNhcmQtYmNrZy1jb2xvcik7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1nL293bC1sb2dvLXdoaXRlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1nL3N1cHBvcnQtd2hpdGUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pbWcvbWVudS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2ltZy9jYWxlbmRlci5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9zdGFyLW91dGxpbmUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi9pbWcvYnVsbGV0LWxpc3Quc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzZfX18gPSBuZXcgVVJMKFwiLi9pbWcvcGx1cy1ibHVlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF83X19fID0gbmV3IFVSTChcIi4vaW1nL2RvdHMtaG9yaXpvbnRhbC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfOF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9lZGl0LW91dGxpbmUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzlfX18gPSBuZXcgVVJMKFwiLi9pbWcvZGVsZXRlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xuLy8gTW9kdWxlXG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzFfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8yX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMl9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzNfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzRfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF80X19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF81X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNV9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzZfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzdfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF83X19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF84X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfOF9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfOV9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzlfX18pO1xudmFyIGNvZGUgPSBcIjwhRE9DVFlQRSBodG1sPlxcbjxodG1sIGxhbmc9XFxcImVuXFxcIj5cXG4gIDxoZWFkPlxcbiAgICA8bWV0YSBjaGFyc2V0PVxcXCJVVEYtOFxcXCIgLz5cXG4gICAgPG1ldGEgaHR0cC1lcXVpdj1cXFwiWC1VQS1Db21wYXRpYmxlXFxcIiBjb250ZW50PVxcXCJJRT1lZGdlXFxcIiAvPlxcbiAgICA8bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFxcXCIgLz5cXG4gICAgPHRpdGxlPlRPRE9ET0RPIEFQUDwvdGl0bGU+XFxuICAgIDxsaW5rXFxuICAgICAgaHJlZj1cXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GcmVkb2thK09uZSZmYW1pbHk9RnJlZG9rYTp3Z2h0QDMwMCZmYW1pbHk9Um9ib3RvOndnaHRAMTAwOzQwMCZkaXNwbGF5PXN3YXBcXFwiXFxuICAgICAgcmVsPVxcXCJzdHlsZXNoZWV0XFxcIlxcbiAgICAvPlxcbiAgICA8bGlua1xcbiAgICAgIGhyZWY9XFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q2F2ZWF0JmRpc3BsYXk9c3dhcFxcXCJcXG4gICAgICByZWw9XFxcInN0eWxlc2hlZXRcXFwiXFxuICAgIC8+XFxuICA8L2hlYWQ+XFxuICA8Ym9keT5cXG4gICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJsb2dvXFxcIj5cXG4gICAgICAgIDxpbWdcXG4gICAgICAgICAgY2xhc3M9XFxcImxvZ28taW1hZ2VcXFwiXFxuICAgICAgICAgIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiXFxuICAgICAgICAgIGFsdD1cXFwiVE9ET0RPRE8gbG9nb1xcXCJcXG4gICAgICAgIC8+XFxuICAgICAgICA8aDEgY2xhc3M9XFxcImxvZ28tbmFtZVxcXCI+VE9ET0RPRE88L2gxPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInNldHRpbmdzXFxcIj5cXG4gICAgICAgIDx1bCBjbGFzcz1cXFwidXNlci1zZXR0aW5nc1xcXCI+XFxuICAgICAgICAgIDwhLS0gPGxpPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRoZW1lXFxcIj5cXG4gICAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcImljb24taW1nXFxcIiBzcmM9XFxcIi4vaW1nL21vb24uc3ZnXFxcIiBhbHQ9XFxcInRoZW1lIGljb25cXFwiLz5cXG4gICAgICAgICAgICAgIDxwPkxpZ2h0PC9wPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2xpPiAtLT5cXG4gICAgICAgICAgPGxpPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhlbHBcXFwiPlxcbiAgICAgICAgICAgICAgPGltZ1xcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwiaWNvbi1pbWdcXFwiXFxuICAgICAgICAgICAgICAgIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fICsgXCJcXFwiXFxuICAgICAgICAgICAgICAgIGFsdD1cXFwiaGVscCBpY29uXFxcIlxcbiAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgIDxwPkhlbHA8L3A+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvbGk+XFxuICAgICAgICA8L3VsPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwibWFpbi1jb250YWluZXJcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInNpZGViYXIgbGlnaHRcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidXNlci1tZW51XFxcIj5cXG4gICAgICAgICAgPHVsIGNsYXNzPVxcXCJ1c2VyLWxpc3RcXFwiPlxcbiAgICAgICAgICAgIDxsaT5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1lbnUtcGFpciBoYW1idXJnZXJcXFwiPlxcbiAgICAgICAgICAgICAgICA8aW1nXFxuICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImljb24taW1nXFxcIlxcbiAgICAgICAgICAgICAgICAgIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8yX19fICsgXCJcXFwiXFxuICAgICAgICAgICAgICAgICAgYWx0PVxcXCJtZW51IHBvcC1pbiBwb3Atb3V0IGljb25cXFwiXFxuICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgIDxsaT5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1lbnUtcGFpclxcXCI+XFxuICAgICAgICAgICAgICAgIDxpbWdcXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiaWNvbi1pbWdcXFwiXFxuICAgICAgICAgICAgICAgICAgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzNfX18gKyBcIlxcXCJcXG4gICAgICAgICAgICAgICAgICBhbHQ9XFxcImNhbGVuZGVyIGljb24gZm9yIHRvZGF5IGxpbmtcXFwiXFxuICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJtZW51LXBhcmFcXFwiPlRvZGF5PC9wPlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwidGFzay1udW1iZXJcXFwiPjI8L3A+XFxuICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICA8bGk+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtZW51LXBhaXJcXFwiPlxcbiAgICAgICAgICAgICAgICA8aW1nXFxuICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImljb24taW1nXFxcIlxcbiAgICAgICAgICAgICAgICAgIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF80X19fICsgXCJcXFwiXFxuICAgICAgICAgICAgICAgICAgYWx0PVxcXCJpbXBvcnRhbnQgaWNvblxcXCJcXG4gICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcIm1lbnUtcGFyYVxcXCI+SW1wb3J0YW50PC9wPlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwidGFzay1udW1iZXJcXFwiPjI8L3A+XFxuICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgPC91bD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGhyIC8+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9qZWN0LW1lbnVcXFwiPlxcbiAgICAgICAgICA8dWwgY2xhc3M9XFxcInByb2plY3QtbGlzdFxcXCI+XFxuICAgICAgICAgICAgPGxpPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWVudS1wYWlyXFxcIj5cXG4gICAgICAgICAgICAgICAgPGltZ1xcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJpY29uLWltZ1xcXCJcXG4gICAgICAgICAgICAgICAgICBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNV9fXyArIFwiXFxcIlxcbiAgICAgICAgICAgICAgICAgIGFsdD1cXFwiYnVsbGV0IGxpc3QgaWNvblxcXCJcXG4gICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcIm1lbnUtcGFyYVxcXCI+UHJvamVjdHM8L3A+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJ0YXNrLW51bWJlclxcXCI+MjwvcD5cXG4gICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgIDxsaT5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1lbnUtcGFpclxcXCI+XFxuICAgICAgICAgICAgICAgIDxpbWdcXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiaWNvbi1pbWcgYWRkLXByb2plY3QtaW1hZ2VcXFwiXFxuICAgICAgICAgICAgICAgICAgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzZfX18gKyBcIlxcXCJcXG4gICAgICAgICAgICAgICAgICBhbHQ9XFxcInBsdXMgaWNvbiBmb3IgYWRkaW5nIG5ldyBwcm9qZWN0XFxcIlxcbiAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICA8aW5wdXRcXG4gICAgICAgICAgICAgICAgICB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICAgIGlkPVxcXCJhZGQtcHJvamVjdFxcXCJcXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiTmV3IHByb2plY3RcXFwiXFxuICAgICAgICAgICAgICAgICAgbmFtZT1cXFwiYWRkLXByb2plY3RcXFwiXFxuICAgICAgICAgICAgICAgICAgbWF4bGVuZ3RoPVxcXCIxNTBcXFwiXFxuICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICA8L3VsPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwidGFzay1jb250YWluZXJcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFzay1oZWFkZXJcXFwiPlxcbiAgICAgICAgICA8aW1nXFxuICAgICAgICAgICAgY2xhc3M9XFxcImljb24taW1nIGhlYWRlci1pbWdcXFwiXFxuICAgICAgICAgICAgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzVfX18gKyBcIlxcXCJcXG4gICAgICAgICAgICBhbHQ9XFxcImljb24gZm9yIHByb2plY3QgaGVhZGVyIGluIHRhc2sgc2VjdGlvblxcXCJcXG4gICAgICAgICAgLz5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdC1uYW1lXFxcIj5Qcm9qZWN0czwvZGl2PlxcbiAgICAgICAgICA8aW1nXFxuICAgICAgICAgICAgY2xhc3M9XFxcImljb24taW1nXFxcIlxcbiAgICAgICAgICAgIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF83X19fICsgXCJcXFwiXFxuICAgICAgICAgICAgYWx0PVxcXCJkb3RzIGljb24gZm9yIGV4cGFuZGluZyBjb250cm9sc1xcXCJcXG4gICAgICAgICAgLz5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFzay1saXN0XFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWRkLXRhc2tcXFwiPlxcbiAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwiYWRkLXRhc2stY2hlY2tib3hcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiAvPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRhc2staW5mb1xcXCI+XFxuICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcInRhc2stdWxcXFwiPlxcbiAgICAgICAgICAgICAgICA8bGk+XFxuICAgICAgICAgICAgICAgICAgPGlucHV0XFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgaWQ9XFxcInRpdGxlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcInRhc2stdGl0bGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiQWRkIGEgdGFza1xcXCJcXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XFxcInRpdGxlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgbWF4bGVuZ3RoPVxcXCIxNTBcXFwiXFxuICAgICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJkZWFkbGluZS1saVxcXCI+XFxuICAgICAgICAgICAgICAgICAgPCEtLSA8bGFiZWwgZm9yPVxcXCJkYXRlXFxcIj4mIzEyODE5NyAtLT5cXG4gICAgICAgICAgICAgICAgICA8aW1nXFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiaWNvbi1pbWdcXFwiXFxuICAgICAgICAgICAgICAgICAgICBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfM19fXyArIFwiXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgYWx0PVxcXCJjYWxlbmRlciBpY29uIGZvciBjaG9vc2luZyB0YXNrIGRlYWRsaW5lXFxcIlxcbiAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgICAgPGlucHV0XFxuICAgICAgICAgICAgICAgICAgICBpZD1cXFwiZGF0ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJ0YXNrLWRhdGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVxcXCJkYXRlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIkNob29zZSBkZWFkbGluZVxcXCJcXG4gICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICAgIDwhLS0gPC9sYWJlbD4gLS0+XFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgIDxsaT5cXG4gICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcXG4gICAgICAgICAgICAgICAgICAgIHJvd3M9XFxcIjFcXFwiXFxuICAgICAgICAgICAgICAgICAgICBtYXhsZW5ndGg9XFxcIjQwMFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJBZGQgZGVzY3JpcHRpb24gaGVyZS4uLlxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHdyYXA9XFxcInNvZnRcXFwiXFxuICAgICAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRhc2stYWN0aW9uc1xcXCI+XFxuICAgICAgICAgICAgICA8YnV0dG9uIGlkPVxcXCJhZGQtdGFzay1idG5cXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+KyBBZGQ8L2J1dHRvbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRhc2stY2FyZFxcXCI+XFxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJjaGVja2JveFxcXCIgaWQ9XFxcInRhc2stY2hlY2tib3hcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiAvPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRhc2staW5mb1xcXCI+XFxuICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcInRhc2stdWxcXFwiPlxcbiAgICAgICAgICAgICAgICA8bGk+XFxuICAgICAgICAgICAgICAgICAgPGlucHV0XFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgaWQ9XFxcInRpdGxlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcInRhc2stdGl0bGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiQWRkIGEgdGl0bGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVxcXCJ0aXRsZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIG1heGxlbmd0aD1cXFwiMTUwXFxcIlxcbiAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgIDxsaT5cXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcXG4gICAgICAgICAgICAgICAgICAgIGlkPVxcXCJkYXRlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcInRhc2stZGF0ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XFxcImRhdGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiQ2hvb3NlIGRlYWRsaW5lXFxcIlxcbiAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgIDxsaT5cXG4gICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcXG4gICAgICAgICAgICAgICAgICAgIHJvd3M9XFxcIjFcXFwiXFxuICAgICAgICAgICAgICAgICAgICBtYXhsZW5ndGg9XFxcIjQwMFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJBZGQgZGVzY3JpcHRpb24gaGVyZS4uLlxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHdyYXA9XFxcInNvZnRcXFwiXFxuICAgICAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRhc2stYWN0aW9uc1xcXCI+XFxuICAgICAgICAgICAgICA8aW1nXFxuICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJpY29uLWltZ1xcXCJcXG4gICAgICAgICAgICAgICAgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzhfX18gKyBcIlxcXCJcXG4gICAgICAgICAgICAgICAgYWx0PVxcXCJlZGl0IHRhc2sgaWNvblxcXCJcXG4gICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICA8aW1nXFxuICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJpY29uLWltZ1xcXCJcXG4gICAgICAgICAgICAgICAgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzRfX18gKyBcIlxcXCJcXG4gICAgICAgICAgICAgICAgYWx0PVxcXCJhZGQgdG8gaW1wb3J0YW50IGNhdGVnb3J5IGljb25cXFwiXFxuICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgPGltZ1xcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwiaWNvbi1pbWdcXFwiXFxuICAgICAgICAgICAgICAgIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF85X19fICsgXCJcXFwiXFxuICAgICAgICAgICAgICAgIGFsdD1cXFwiZGVsZXRlIHRhc2sgaWNvblxcXCJcXG4gICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9ib2R5PlxcbjwvaHRtbD5cXG5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMubWF5YmVOZWVkUXVvdGVzICYmIC9bXFx0XFxuXFxmXFxyIFwiJz08PmBdLy50ZXN0KHVybCkpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybCwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBTVEFSVCAvL1xuXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAnLi9pbmRleC5odG1sJztcblxuY29uc29sZS5sb2coJ2hlbGxvJyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=