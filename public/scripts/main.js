/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/modals/modal.js":
/*!****************************************!*\
  !*** ./src/components/modals/modal.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar modal = function () {\n  function handleOverlayClick() {\n    document.querySelector('.general-modal-overlay').addEventListener('click', function (event) {\n      var targetEl = event.target;\n\n      if (targetEl.classList.contains('general-modal-overlay')) {\n        targetEl.classList.add('hide');\n      }\n    });\n  }\n\n  function handleViewCodeClick() {\n    document.querySelectorAll('.view-code button').forEach(function (btn) {\n      btn.addEventListener('click', function (event) {\n        var overlay = document.querySelector('.general-modal-overlay');\n\n        if (overlay.classList.contains('hide')) {\n          overlay.classList.remove('hide');\n          displayHTML(event);\n        }\n      });\n    });\n  }\n\n  function displayHTML(event) {\n    var query = event.currentTarget.getAttribute('data-target');\n    var el = event.target.parentElement.parentElement.querySelector(query);\n    document.querySelector('.general-modal .code-wrapper .html').innerHTML = '';\n    document.querySelector('.general-modal .code-wrapper .html').appendChild(document.createTextNode(el.outerHTML));\n    console.log({\n      el: el,\n      query: query\n    });\n  }\n\n  function init() {\n    handleOverlayClick();\n    handleViewCodeClick();\n  }\n\n  return {\n    init: init\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (modal);\n\n//# sourceURL=webpack:///./src/components/modals/modal.js?");

/***/ }),

/***/ "./src/components/typography/typography.js":
/*!*************************************************!*\
  !*** ./src/components/typography/typography.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar typography = function () {\n  function init() {\n    console.log('here');\n  }\n\n  return {\n    init: init\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (typography);\n\n//# sourceURL=webpack:///./src/components/typography/typography.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_typography_typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/typography/typography */ \"./src/components/typography/typography.js\");\n/* harmony import */ var _components_modals_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/modals/modal */ \"./src/components/modals/modal.js\");\n\n\n_components_typography_typography__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init();\n_components_modals_modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });