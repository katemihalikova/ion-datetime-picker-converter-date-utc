(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"));
	else if(typeof define === 'function' && define.amd)
		define(["angular"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("angular")) : factory(root["angular"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var DateUtcConverter = (function () {
    function DateUtcConverter() {
    }
    DateUtcConverter.prototype.convertFromPicker = function (input, previousOutput) {
        var date = isDate(previousOutput) ? new Date(previousOutput.getTime()) : new Date();
        if (input.year !== undefined) {
            date.setUTCFullYear(input.year);
        }
        if (input.month !== undefined) {
            date.setUTCMonth(input.month - 1);
            date.setUTCMonth(input.month - 1);
        }
        if (input.day !== undefined) {
            date.setUTCDate(input.day);
            date.setUTCDate(input.day);
        }
        if (input.hour !== undefined) {
            date.setUTCHours(input.hour);
        }
        if (input.minute !== undefined) {
            date.setUTCMinutes(input.minute);
        }
        if (input.second !== undefined) {
            date.setUTCSeconds(input.second);
        }
        return date;
    };
    DateUtcConverter.prototype.convertToPicker = function (input) {
        input = isDate(input) ? input : new Date();
        return {
            year: input.getUTCFullYear(),
            month: input.getUTCMonth() + 1,
            day: input.getUTCDate(),
            hour: input.getUTCHours(),
            minute: input.getUTCMinutes(),
            second: input.getUTCSeconds()
        };
    };
    return DateUtcConverter;
}());
exports["default"] = DateUtcConverter;
function isDate(input) {
    return input instanceof Date;
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var angular = __webpack_require__(3);
var converter_1 = __webpack_require__(0);
angular.module("ion-datetime-picker").service("$ionDtpConverterDateUtc", converter_1["default"]);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var converter_1 = __webpack_require__(0);
__webpack_require__(1);
module.exports = converter_1["default"];


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ })
/******/ ]);
});