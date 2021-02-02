self["webpackHotUpdatetemplate"]("index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ _taggedTemplateLiteral
/* harmony export */ });
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var MobiusUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! MobiusUI */ "./src/libs/mobius-ui.js");


function _templateObject() {
  var data = (0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    <div>welcome to use Mobius Template.</div>\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




setTimeout(function () {
  (0,MobiusUI__WEBPACK_IMPORTED_MODULE_1__.render)(document.getElementById('mobius-app'), (0,MobiusUI__WEBPACK_IMPORTED_MODULE_1__.html)(_templateObject()));
}, 2000);

/***/ }),

/***/ "./src/libs/mobius-ui.js":
/*!*******************************!*\
  !*** ./src/libs/mobius-ui.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* empty/unused harmony star reexport */
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@we-mobius/mobius-ui'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
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
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "898b51abbc9478e30a05"
/******/ 	})();
/******/ 	
/******/ }
);
//# sourceMappingURL=index.d14e675b68b8555c3db6.hot-update.js.map