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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/bundle.js":
/*!************************!*\
  !*** ./dist/bundle.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/bundle.js":
/*!************************!*\
  !*** ./dist/bundle.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/bundle.js":
/*!************************!*\
  !*** ./dist/bundle.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!**********************************************!*\
  !*** multi ./src/script.js ./dist/bundle.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!(function webpackMissingModule() { var e = new Error("Cannot find module './src/script.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
module.exports = __webpack_require__(/*! /Users/nathanielmillard/Turing/Mod_2/whatchaCookin/dist/bundle.js */"./dist/bundle.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iXSwic291cmNlUm9vdCI6IiJ9

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/styles.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/styles.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "html {\n  background-color: #37515C;\n  border: 2px solid #000;\n  height: 100vh;\n  width: 100vw; }\n\nbody {\n  box-sizing: border-box;\n  font-family: 'Open Sans', sans-serif;\n  margin: auto; }\n\nmain {\n  background-color: #37515C;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center; }\n\n.main-header {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  height: auto;\n  width: 100%;\n  background-color: #EBF5EE;\n  border: 2px solid #000; }\n\nh1 {\n  font-size: 255%;\n  text-align: center;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-top: 10px;\n  width: 30%; }\n\nnav {\n  display: flex;\n  padding: 10px; }\n\n.navButton {\n  font-size: 130%;\n  color: #000 !important;\n  background-color: #EBF5EE;\n  border-left: 1px solid #000;\n  border-right: 1px solid #000;\n  margin: 1% 20px 1% 1%; }\n  .navButton:hover {\n    background-color: #cff2da; }\n  .navButton:active {\n    background-color: #C3C2C6; }\n\n.lower-header {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row; }\n\n.greeting {\n  font-size: 30px;\n  color: #EBF5EE;\n  padding-left: 15px;\n  margin-top: 10px; }\n\n.search-area {\n  display: flex;\n  justify-content: flex-end;\n  flex-direction: row; }\n\n.search-bar {\n  max-height: 6vh;\n  margin: 5px;\n  padding: 3px; }\n\n.search-image {\n  background-color: #EBF5EE;\n  border: 1px solid #000;\n  width: 20%;\n  margin-right: 0; }\n  .search-image:hover {\n    background-color: #cff2da; }\n  .search-image:active {\n    background-color: #C3C2C6; }\n\n.search-input {\n  border: 1px solid #000;\n  font-size: 100%;\n  min-width: 90%; }\n\n.all-cards {\n  display: grid;\n  grid-gap: 30px;\n  grid-template-columns: repeat(4, 1fr);\n  padding: 30px;\n  width: 95.5vw; }\n\n.hidden {\n  display: none; }\n\nimg {\n  cursor: pointer; }\n\n.card-button {\n  border: 1px solid #000;\n  height: 27px;\n  margin: 3px;\n  cursor: pointer; }\n  .card-button:hover {\n    background-color: #cff2da; }\n  .card-button:active {\n    background-color: #C3C2C6; }\n\n.add-button {\n  background-color: #EBF5EE;\n  display: flex;\n  width: 12%; }\n\n.add {\n  width: 90%; }\n\n.favorite {\n  background-color: #EBF5EE;\n  background-repeat: no-repeat;\n  background-position: center;\n  width: 13%;\n  background-image: url(\"https://image.flaticon.com/icons/svg/149/149222.svg\"); }\n\n.card {\n  background-color: #D7F2FE;\n  border: 3px solid #000;\n  width: 100%; }\n\n.card-header {\n  background-color: #EBF5EE;\n  border-bottom: 1px solid #000;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row; }\n\n.all {\n  grid-gap: 0;\n  grid-template-columns: repeat(1, 1fr); }\n\n.all-recipe-info,\nol {\n  font-size: 150%;\n  color: #EBF5EE;\n  width: 100%; }\n\nh3 {\n  font-size: 150%;\n  text-align: center;\n  background-color: #EBF5EE;\n  border-bottom: 1px solid #000;\n  margin: 0;\n  font-weight: normal;\n  padding-top: 5px;\n  padding-bottom: 5px; }\n\n.recipe-name {\n  background-color: #EBF5EE;\n  border-bottom: 1px solid #000;\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  font-size: 150%;\n  text-align: center; }\n\n.card-picture {\n  height: 200px;\n  width: 94%;\n  border: 1px solid #000;\n  margin: 10px 3% 8px 2.6%; }\n  .card-picture:hover {\n    opacity: 0.7; }\n  .card-picture:active {\n    border: 2px solid #000; }\n\n.wrap {\n  background-color: inherit;\n  height: inherit;\n  border: 0; }\n\n.favorite-active {\n  background-image: url(\"https://image.flaticon.com/icons/svg/148/148841.svg\");\n  background-repeat: no-repeat; }\n\n.display-recipe {\n  display: grid;\n  grid-gap: 7px;\n  grid-template-columns: 0.6fr 1fr;\n  grid-template-rows: 1fr 3fr;\n  margin: 15px; }\n\n.display-recipe-info {\n  grid-column: 1;\n  grid-row: 0.5; }\n\n.recipe-ingredients {\n  justify-self: center;\n  grid-column: 2;\n  grid-row: 1;\n  overflow: scroll;\n  height: inherit;\n  font-size: 15px;\n  color: #EBF5EE; }\n\n.recipe-ingredients-title {\n  margin-top: 0;\n  font-size: 20px; }\n\n.recipe-instructions {\n  grid-column: 1/span 2;\n  grid-row: 2;\n  font-size: 20px;\n  color: #EBF5EE;\n  max-width: 90vw;\n  margin-top: 100px; }\n\n.to-cook-greeting {\n  color: #EBF5EE; }\n\n.close-button {\n  background-color: #EBF5EE;\n  background-repeat: no-repeat;\n  background-position: center;\n  width: 13%;\n  background-image: url(\"https://www.flaticon.com/svg/static/icons/svg/446/446091.svg\");\n  font-weight: bold; }\n\n.ing-cost,\n.needed-ings,\n.pantry-buttons {\n  margin-left: 10px; }\n\n@media (max-width: 825px) {\n  main {\n    width: 95%; }\n  .all-cards {\n    display: grid;\n    grid-gap: 30px;\n    grid-template-columns: repeat(3, 1fr);\n    padding: 30px 0 30px 30px;\n    width: 95.5vw; }\n  .display-recipe {\n    display: flex;\n    justify-content: space-around;\n    flex-direction: column;\n    align-items: center; }\n  .recipe-instructions {\n    margin-top: 0; } }\n\n@media (max-width: 600px) {\n  .all-cards {\n    display: grid;\n    grid-gap: 30px;\n    grid-template-columns: repeat(2, 1fr);\n    padding: 30px 0 30px 30px;\n    width: 95.5vw; }\n  .display-recipe {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center; }\n  .search-image {\n    display: none; } }\n\n@media (max-width: 450px) {\n  .lower-header,\n  .main-header {\n    flex-direction: column;\n    align-items: center; }\n  .search-input {\n    min-width: 80vw; }\n  .all-cards {\n    display: grid;\n    grid-gap: 30px;\n    grid-template-columns: repeat(1, 1fr);\n    padding: 30px 0 30px 30px;\n    width: 95.5vw; }\n  .card-button {\n    height: auto; }\n  .to-cook {\n    display: flex;\n    flex-direction: column;\n    align-items: center; }\n  .card {\n    max-width: 95%; } }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/cookbook.js":
/*!*************************!*\
  !*** ./src/cookbook.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Cookbook {
  constructor(data) {
    this.recipes = data;
  }

  findRecipes(searchText) {
    return this.recipes.filter((recipe)=>{
      let ingredientNames = recipe.ingredients.map((ingredient)=>{
        return ingredient.name
      })
      return recipe.name.toLowerCase().includes(searchText) ||
      recipe.tags.includes(searchText) ||
      ingredientNames.includes(searchText)
    })
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Cookbook);


/***/ }),

/***/ "./src/css/styles.scss":
/*!*****************************!*\
  !*** ./src/css/styles.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/domUpdates.js":
/*!***************************!*\
  !*** ./src/domUpdates.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pantry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pantry */ "./src/pantry.js");
/* harmony import */ var _recipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe */ "./src/recipe.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./src/user.js");
/* harmony import */ var _cookbook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cookbook */ "./src/cookbook.js");






let domUpdates = {

  users: [{}],
  recipeData: [{}],
  ingredientsData: [{}],
  user: {},
  cookbook: null,

  getWhatsCookingData: () => {
    Promise.all([
      fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/users/wcUsersData'),
      fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/recipes/recipeData'),
      fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/ingredients/ingredientsData')
    ])
      .then(responses => Promise.all(responses.map(response => response.json())))
      .then(responses => {
        domUpdates.users = responses[0].wcUsersData;
        domUpdates.recipeData = responses[1].recipeData;
        domUpdates.ingredientsData = responses[2].ingredientsData;
        domUpdates.createDataModel();
        domUpdates.updateDisplay();
      })
      .catch(error => console.log(error))
  },

  createDataModel: () => {
    let pantry = new _pantry__WEBPACK_IMPORTED_MODULE_0__["default"](domUpdates.users[0].pantry);
    domUpdates.user = new _user__WEBPACK_IMPORTED_MODULE_2__["default"](domUpdates.users[0], pantry, domUpdates.ingredientsData);
    let recipeDeck = domUpdates.recipeData.map(recipe => {
      return recipe = new _recipe__WEBPACK_IMPORTED_MODULE_1__["default"](recipe, domUpdates.ingredientsData);
    })
    domUpdates.cookbook = new _cookbook__WEBPACK_IMPORTED_MODULE_3__["default"](recipeDeck);
  },

  updateDisplay: () => {
    domUpdates.greetUser();
    domUpdates.populateCards(domUpdates.cookbook.recipes);
  },

  greetUser: () => {
    const welcomeMessage = document.querySelector('.greeting');
    welcomeMessage.innerText = `Welcome ${domUpdates.user.name}!`;
  },

  populateCards: (recipes) => {
    const cardArea = document.querySelector('#main-section');
    cardArea.classList = 'all-cards';
    cardArea.innerHTML = '';
    recipes.forEach(recipe => {
      cardArea.insertAdjacentHTML('afterbegin', domUpdates.constructCard(recipe))
    });
  },

  constructCard: (recipe) => {
    let classList
    if (domUpdates.user.favoriteRecipes.includes(recipe)) {
      classList = 'favorite card-button favorite-active'
    } else {
      classList = 'favorite card-button'
    }
    return `<div class='card ${recipe.id}'>
    <header class='card-header ${recipe.id}'>
      <label for='add-button' class='hidden'>Click to add recipe</label>
      <button aria-label='add-button' class='add-button card-button ${recipe.id}'>
        <img class='add ${recipe.id} add-button' src='https://image.flaticon.com/icons/svg/32/32339.svg' alt='Add to
        recipes to cook'>
      </button>
      <label for='favorite-button' class='hidden'>Click to favorite recipe</label>
      <button aria-label='favorite-button' class='${classList} favorite${recipe.id} ${recipe.id}'>
      </button>
    </header>
    <span class='recipe-name ${recipe.id}'>${recipe.name}</span>
      <button aria-label='recipe-info' class='card-picture ${recipe.id} wrap'>
        <img tabindex='0' class='card-picture ${recipe.id}'src='${recipe.image}' alt='Food from recipe'>
      </button>
    </div>`
  },

  findSpecificRecipe: (event) => {
    return domUpdates.cookbook.recipes.find(recipe => {
      if (event.target.classList.contains(recipe.id)) {
        return recipe;
      }
    })
  },

  favoriteCard: (event) => {
    const showFavoritesButton = document.querySelector('.view-favorites');
    let specificRecipe = domUpdates.findSpecificRecipe(event);
    if (!event.target.classList.contains('favorite-active')) {
      showFavoritesButton.innerHTML = 'View Favorites';
      domUpdates.user.addToFavorites(specificRecipe);
    } else if (event.target.classList.contains('favorite-active')) {
      domUpdates.user.removeFromFavorites(specificRecipe)
    }
    event.target.classList.toggle('favorite-active');
  },

  viewFavorites: () => {
    const searchBar = document.querySelector('.search-area');
    searchBar.classList.add('hidden')
    const showFavoritesButton = document.querySelector('.view-favorites');
    const cardArea = document.querySelector('#main-section');
    cardArea.classList = 'all-cards';
    if (!domUpdates.user.favoriteRecipes.length) {
      showFavoritesButton.innerHTML = 'You have no favorites!';
      domUpdates.populateCards(domUpdates.cookbook.recipes);
      return
    } else {
      showFavoritesButton.innerHTML = 'Refresh Favorites'
      cardArea.innerHTML = '';
      domUpdates.user.favoriteRecipes.forEach(recipe => {
        cardArea.insertAdjacentHTML('afterbegin', domUpdates.constructCard(recipe))
      })
    }
  },

  addToToCook: (event) => {
    const showToCookButton = document.querySelector('.to-cook');
    let specificRecipe = domUpdates.findSpecificRecipe(event);
    if (!event.target.classList.contains('add-active')) {
      showToCookButton.innerText = 'To Cook'
      alert(domUpdates.user.checkPantryIngredients(specificRecipe));
      domUpdates.user.addToRecipesToCook(specificRecipe);
    } else if (event.target.classList.contains('add-active')) {
      domUpdates.user.removeFromRecipesToCook(specificRecipe)
    }
    event.target.classList.toggle('add-active');
  },

  displayToCookCards: () => {
    const searchBar = document.querySelector('.search-area');
    searchBar.classList.add('hidden')
    const cardArea = document.querySelector('#main-section');
    cardArea.classList = '';
    cardArea.innerHTML =
      `<section class='to-cook'>
        <h1 class='to-cook-greeting'>Recipes To Cook</h1>
        <div class='card-section all-cards'>
        </div>
      </section>`
    let cardSection = document.querySelector('.card-section')
    domUpdates.user.recipesToCook.forEach(recipe => {
      let values = domUpdates.user.checkHowMuchMore(recipe).map(obj => {
        return `${obj.quantityNeeded} ${obj.unit} more ${obj.name}`;
      });
      let neededCost = domUpdates.user.checkHowMuchMore(recipe).reduce((total, ingredient) => {
        return total += ingredient.cost;
      }, 0);
      cardSection.insertAdjacentHTML('beforeend', `<div class='card ${recipe.id}'>
    <header class='card-header ${recipe.id}'>
      <label for='close-button' class='hidden'></label>
      <button aria-label='close-button' class='close-button card-button ${recipe.id}'>
        <img class='close-button ${recipe.id}' src='https://www.flaticon.com/svg/static/icons/svg/446/446091.svg' alt='remove from recipes to cook'>
      </button>
      <label for='favorite-button' class='hidden'>Click to favorite recipe</label>
      <button aria-label='favorite-button' class='favorite card-button favorite${recipe.id} ${recipe.id}'>
      </button>
    </header>
      <h3>${recipe.name}</h3>
      <img tabindex='0' class='card-picture ${recipe.id}'
      src='${recipe.image}' alt='Food from recipe'>
      <div class = "pantry-buttons">
        <button type="button" name="Add Needed Ingredients" class="bought-ingredients bought-ingredients${recipe.id} ${recipe.id}">Add Needed Ingredients</button>
        <button type="button" name="Have Cooked" class="have-cooked have-cooked${recipe.id} ${recipe.id}">Have Cooked</button>
      </div>
      <p class='needed-ings'>Ingredients Still Needed:</p>
      <ul >
      <li>${values.join('</li><li>')}</li>
      </ul>
      <p class='ing-cost'>Cost to Still Get:$${neededCost}</p>
    </div>`);
    });
  },

  showToCookRecipes: () => {
    const showToCookButton = document.querySelector('.to-cook');
    if (!domUpdates.user.recipesToCook.length) {
      showToCookButton.innerText = 'You have no saved Recipes!';
      domUpdates.populateCards(domUpdates.cookbook.recipes);
      return
    } else {
      domUpdates.displayToCookCards();
    }
  },

  removeFromToCook: () => {
    let specificRecipe = domUpdates.cookbook.recipes.find(recipe => {
      if (event.target.classList.contains(recipe.id)) {
        return recipe;
      }
    })
    domUpdates.user.removeFromRecipesToCook(specificRecipe);
    domUpdates.displayToCookCards();
  },

  displayDirections: (event) => {
    const searchBar = document.querySelector('.search-area');
    searchBar.classList.add('hidden')
    const cardArea = document.querySelector('#main-section');
    cardArea.classList = 'recipe-directions';
    let specificRecipe = domUpdates.findSpecificRecipe(event);
    let cost = specificRecipe.calculateCost();
    cardArea.innerHTML = '';
    let neededIngredients = [];
    specificRecipe.ingredients.forEach(ingredient => {
      let name = specificRecipe.ingredientsData.find(item => item.id === ingredient.id).name
      neededIngredients.push(`${ingredient.quantity.amount.toFixed(2)} ${ingredient.quantity.unit} ${name}`)
    })
    let neededSteps = [];
    specificRecipe.instructions.forEach(step => {
      neededSteps.push(`${step.number}. ${step.instruction} `)
    })
    cardArea.innerHTML = `<section class='display-recipe'>
    <div class='display-recipe-info'>
      <h3>${specificRecipe.name}</h3>
      <img class='card-picture' src='${specificRecipe.image}' alt='Recipe image for ${specificRecipe.name}'>
    </div>
    <div class='recipe-ingredients'>
    <h5 class='recipe-ingredients-title'>You will need: </h5>
    <ul>
    <li>${neededIngredients.join('</li><li>')}</li>
    </ul>
    </div>
    <div class='recipe-instructions'>
    <h5>Instructions: </h5>
    <ul class='instruction-list' style='list-style-type:none;'>
    <li>${neededSteps.join('</li><li>')}</li>
    </ul>
    <h5>This recipe generally costs: $${cost} </h5>
    </div>
    </section>`;
  },

  filterRecipes: () => {
    const cardArea = document.querySelector('.all-cards');
    var searchTerm = event.target.value.toLowerCase();
    if (searchTerm !== '') {
      cardArea.innerHTML = '';
      domUpdates.displayFilteredRecipes(searchTerm);
    } else {
      domUpdates.populateCards(domUpdates.cookbook.recipes);
    }
  },

  displayFilteredRecipes: (searchTerm) => {
    domUpdates.populateCards(domUpdates.cookbook.findRecipes(searchTerm));
  },

  haveCookedRecipe: (event) => {
    let specificRecipe = domUpdates.findSpecificRecipe(event);
    const haveCookedButton = document.querySelector(`.have-cooked${specificRecipe.id}`);
    if (domUpdates.user.checkPantryIngredients(specificRecipe) !== 'You have the ingredients!') {
      alert("You don't have what you need yet")
    } else {
      domUpdates.user.removePantryIngridients(specificRecipe)
      haveCookedButton.disabled = true;
    }
  },

  buyIngredients: (event) => {
    let specificRecipe = domUpdates.findSpecificRecipe(event);
    const buyButton = document.querySelector(`.bought-ingredients${specificRecipe.id}`)
    domUpdates.user.addNeededPantryIngridients(specificRecipe)
    buyButton.disabled = true;
  },

};

/* harmony default export */ __webpack_exports__["default"] = (domUpdates);


/***/ }),

/***/ "./src/pantry.js":
/*!***********************!*\
  !*** ./src/pantry.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Pantry {
  constructor(userPantry) {
    this.userPantry = userPantry;
    this.userIngredients = {};
  }

  compilePantry() {
    this.userIngredients = this.userPantry.reduce((pantry, ingredient) => {
      if (!pantry[ingredient.ingredient]) {
        pantry[ingredient.ingredient] = ingredient.amount;
      } else {
        pantry[ingredient.ingredient] += ingredient.amount;
      }
      return pantry;
    }, {});
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Pantry);


/***/ }),

/***/ "./src/recipe.js":
/*!***********************!*\
  !*** ./src/recipe.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Recipe {
  constructor(recipe, ingredientsData) {
    this.name = recipe.name;
    this.id = recipe.id;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
    this.tags = recipe.tags;
    this.ingredientsData = ingredientsData;
    this.image = recipe.image;
  }

  calculateCost() {
    let costCounter = 0;
    this.ingredients.forEach(ingredient => {
      this.ingredientsData.find(specificIngredient => {
        if (specificIngredient.id === ingredient.id) {
          costCounter += (Number(specificIngredient.estimatedCostInCents) *
          Number(ingredient.quantity.amount))
        }
      })
    });
    return parseFloat((costCounter / 100).toFixed(2));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Recipe);


/***/ }),

/***/ "./src/scripts.js":
/*!************************!*\
  !*** ./src/scripts.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/styles.scss */ "./src/css/styles.scss");
/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_styles_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _domUpdates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domUpdates */ "./src/domUpdates.js");




const showFavoritesButton = document.querySelector('.view-favorites');
const homeButton = document.querySelector('.home')
const cardArea = document.querySelector('.all-cards');
const searchBar = document.querySelector('.search-input');
const showToCookButton = document.querySelector('.to-cook');

const cardButtonConditionals = (event) => {
  if (event.target.classList.contains('favorite')) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].favoriteCard(event);
  } else if (event.target.classList.contains('add-button')) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].addToToCook(event);
  } else if (event.target.classList.contains('card-picture')) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].displayDirections(event);
  } else if (event.target.classList.contains('home')) {
    const searchBar = document.querySelector('.search-area');
    searchBar.classList.remove('hidden')
    showToCookButton.innerHTML = 'To Cook';
    showFavoritesButton.innerHTML = 'View Favorites';
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].populateCards(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].cookbook.recipes);
  } else if (event.target.classList.contains('close-button')) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].removeFromToCook(event);
  } else if (event.target.classList.contains('have-cooked')) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].haveCookedRecipe(event);
  } else if (event.target.classList.contains('bought-ingredients')) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].buyIngredients(event);
  }
}

window.onload = _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].getWhatsCookingData()
homeButton.addEventListener('click', cardButtonConditionals);
cardArea.addEventListener('click', cardButtonConditionals);
showFavoritesButton.addEventListener('click', _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].viewFavorites);
showToCookButton.addEventListener('click', _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].showToCookRecipes);
searchBar.addEventListener('keyup', _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].filterRecipes);


/***/ }),

/***/ "./src/user.js":
/*!*********************!*\
  !*** ./src/user.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pantry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pantry */ "./src/pantry.js");


class User {
  constructor(user, pantry, ingredientsData) {
    this.id = user.id;
    this.name = user.name;
    this.pantry = pantry;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
    this.ingredientsData = ingredientsData;
  }

  addToFavorites(recipe) {
    if (!this.favoriteRecipes.includes(recipe)) {
      this.favoriteRecipes.push(recipe);
    }
  }

  addToRecipesToCook(recipe) {
    if (!this.recipesToCook.includes(recipe)) {
      this.recipesToCook.push(recipe);
    }
  }

  removeFromRecipesToCook(recipe) {
    const i = this.recipesToCook.indexOf(recipe);
    this.recipesToCook.splice(i, 1);
  }

  removePantryIngridients(recipe) {
    recipe.ingredients.forEach((item) => {
      fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/users/wcUsersData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "userID": this.id,
          "ingredientID": item.id,
          "ingredientModification": -(item.quantity.amount)
        })
      })
        .then(response => response.json())
        .then(this.updateUserPantry())
        .catch(error => console.log(error));
      setTimeout(this.updateUserPantry(), 4000)
    });

  }

  addNeededPantryIngridients(recipe) {
    this.checkHowMuchMore(recipe).forEach((item) => {
      fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/users/wcUsersData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "userID": this.id,
          "ingredientID": item.id,
          "ingredientModification": item.quantityNeeded
        })
      })
        .then(response => response.json())
        .then(this.updateUserPantry())
        .catch(error => console.log(error));
    });
  }

  updateUserPantry() {
    fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/users/wcUsersData')
      .then(response => response.json())
      .then(response => {
        let pantry = new _pantry__WEBPACK_IMPORTED_MODULE_0__["default"](response.wcUsersData[this.id - 1].pantry)
        this.pantry = pantry
        this.pantry.compilePantry(this.ingredientsData)
      })
      .catch(error => console.log(error))
  }

  removeFromFavorites(recipe) {
    const i = this.favoriteRecipes.indexOf(recipe);
    this.favoriteRecipes.splice(i, 1);
  }

  filterFavorites(tag) {
    return this.favoriteRecipes.filter(recipe => {
      return recipe.tags.includes(tag);
    });
  }

  findFavorites(strgToSrch) {
    return this.favoriteRecipes.filter(recipe => {
      return recipe.name.includes(strgToSrch) ||
        recipe.ingredients.find(ingredient => {
          return ingredient.name.includes(strgToSrch)
        });
    });
  }

  findMissingIngredients(recipe) {
    return recipe.ingredients.reduce((notPresent, ingredient) => {
      if (!this.pantry.userIngredients[ingredient.id] || ingredient.quantity.amount > this.pantry.userIngredients[ingredient.id]) {
        notPresent.push(ingredient);
      }
      return notPresent;
    }, []);
  }

  checkPantryIngredients(recipe) {
    this.pantry.compilePantry(this.ingredientsData);
    let missingIngredients = this.findMissingIngredients(recipe)
    if (missingIngredients.length === 0) {
      return 'You have the ingredients!';
    } else {
      let missing = missingIngredients.length;
      return `You still need ${missing} more ingredients.`;
    }
  }

  checkHowMuchMore(recipe) {
    let missingIngredients = this.findMissingIngredients(recipe);
    let difference = missingIngredients.map(ingredient => {
      let name = recipe.ingredientsData.find(item => item.id === ingredient.id);
      let neededIng = {
        id: ingredient.id,
        cost: 0,
        name: name.name,
        unit: ingredient.quantity.unit,
        quantityNeeded: parseFloat(ingredient.quantity.amount.toFixed(2))
      }
      if (this.pantry.userIngredients[ingredient.id]) {
        neededIng.quantityNeeded = parseFloat(ingredient.quantity.amount - this.pantry.userIngredients[ingredient.id].toFixed(2))
      }
      let ingredientItem = recipe.ingredientsData.find(item => ingredient.id === item.id)
      neededIng.cost = (neededIng.quantityNeeded * ingredientItem.estimatedCostInCents) / 100;
      return neededIng;
    })
    return difference;
  }
}


/* harmony default export */ __webpack_exports__["default"] = (User);


/***/ }),

/***/ 0:
/*!***********************************************!*\
  !*** multi ./src/scripts.js ./dist/bundle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/nathanielmillard/Turing/Mod_2/whatchaCookin/src/scripts.js */"./src/scripts.js");
module.exports = __webpack_require__(/*! /Users/nathanielmillard/Turing/Mod_2/whatchaCookin/dist/bundle.js */"./dist/bundle.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb29rYm9vay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3N0eWxlcy5zY3NzPzEzYjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbVVwZGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVjaXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy91c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtR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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLCtDQUFNO0FBQy9CO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwrQkFBK0IsUUFBUTtBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7QUFHZSxtRUFBSSxFQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4vKioqKioqLyBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vKioqKioqLyBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuLyoqKioqKi8gXHRcdHJldHVybiBucztcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovICh7XG5cbi8qKiovIFwiLi9kaXN0L2J1bmRsZS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vZGlzdC9idW5kbGUuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cblxuLyoqKi8gfSksXG5cbi8qKiovIDA6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIG11bHRpIC4vc3JjL3NjcmlwdC5qcyAuL2Rpc3QvYnVuZGxlLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbiEoZnVuY3Rpb24gd2VicGFja01pc3NpbmdNb2R1bGUoKSB7IHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICcuL3NyYy9zY3JpcHQuanMnXCIpOyBlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7IHRocm93IGU7IH0oKSk7XG5tb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC9Vc2Vycy9uYXRoYW5pZWxtaWxsYXJkL1R1cmluZy9Nb2RfMi93aGF0Y2hhQ29va2luL2Rpc3QvYnVuZGxlLmpzICovXCIuL2Rpc3QvYnVuZGxlLmpzXCIpO1xuXG5cbi8qKiovIH0pXG5cbi8qKioqKiovIH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk4dmQyVmljR0ZqYXk5aWIyOTBjM1J5WVhBaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0UlFVRkJPMUZCUTBFN08xRkJSVUU3VVVGRFFUczdVVUZGUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVRzN1VVRkZRVHRSUVVOQk96dFJRVVZCTzFGQlEwRTdPMUZCUlVFN1VVRkRRVHRSUVVOQk96czdVVUZIUVR0UlFVTkJPenRSUVVWQk8xRkJRMEU3TzFGQlJVRTdVVUZEUVR0UlFVTkJPMUZCUTBFc01FTkJRVEJETEdkRFFVRm5RenRSUVVNeFJUdFJRVU5CT3p0UlFVVkJPMUZCUTBFN1VVRkRRVHRSUVVOQkxIZEVRVUYzUkN4clFrRkJhMEk3VVVGRE1VVTdVVUZEUVN4cFJFRkJhVVFzWTBGQll6dFJRVU12UkRzN1VVRkZRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEVzZVVOQlFYbERMR2xEUVVGcFF6dFJRVU14UlN4blNFRkJaMGdzYlVKQlFXMUNMRVZCUVVVN1VVRkRja2s3VVVGRFFUczdVVUZGUVR0UlFVTkJPMUZCUTBFN1VVRkRRU3d5UWtGQk1rSXNNRUpCUVRCQ0xFVkJRVVU3VVVGRGRrUXNhVU5CUVdsRExHVkJRV1U3VVVGRGFFUTdVVUZEUVR0UlFVTkJPenRSUVVWQk8xRkJRMEVzYzBSQlFYTkVMQ3RFUVVFclJEczdVVUZGY2tnN1VVRkRRVHM3TzFGQlIwRTdVVUZEUVNJc0ltWnBiR1VpT2lKaWRXNWtiR1V1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SWdYSFF2THlCVWFHVWdiVzlrZFd4bElHTmhZMmhsWEc0Z1hIUjJZWElnYVc1emRHRnNiR1ZrVFc5a2RXeGxjeUE5SUh0OU8xeHVYRzRnWEhRdkx5QlVhR1VnY21WeGRXbHlaU0JtZFc1amRHbHZibHh1SUZ4MFpuVnVZM1JwYjI0Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aHRiMlIxYkdWSlpDa2dlMXh1WEc0Z1hIUmNkQzh2SUVOb1pXTnJJR2xtSUcxdlpIVnNaU0JwY3lCcGJpQmpZV05vWlZ4dUlGeDBYSFJwWmlocGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFNrZ2UxeHVJRngwWEhSY2RISmxkSFZ5YmlCcGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFM1bGVIQnZjblJ6TzF4dUlGeDBYSFI5WEc0Z1hIUmNkQzh2SUVOeVpXRjBaU0JoSUc1bGR5QnRiMlIxYkdVZ0tHRnVaQ0J3ZFhRZ2FYUWdhVzUwYnlCMGFHVWdZMkZqYUdVcFhHNGdYSFJjZEhaaGNpQnRiMlIxYkdVZ1BTQnBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTQTlJSHRjYmlCY2RGeDBYSFJwT2lCdGIyUjFiR1ZKWkN4Y2JpQmNkRngwWEhSc09pQm1ZV3h6WlN4Y2JpQmNkRngwWEhSbGVIQnZjblJ6T2lCN2ZWeHVJRngwWEhSOU8xeHVYRzRnWEhSY2RDOHZJRVY0WldOMWRHVWdkR2hsSUcxdlpIVnNaU0JtZFc1amRHbHZibHh1SUZ4MFhIUnRiMlIxYkdWelcyMXZaSFZzWlVsa1hTNWpZV3hzS0cxdlpIVnNaUzVsZUhCdmNuUnpMQ0J0YjJSMWJHVXNJRzF2WkhWc1pTNWxlSEJ2Y25SekxDQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLVHRjYmx4dUlGeDBYSFF2THlCR2JHRm5JSFJvWlNCdGIyUjFiR1VnWVhNZ2JHOWhaR1ZrWEc0Z1hIUmNkRzF2WkhWc1pTNXNJRDBnZEhKMVpUdGNibHh1SUZ4MFhIUXZMeUJTWlhSMWNtNGdkR2hsSUdWNGNHOXlkSE1nYjJZZ2RHaGxJRzF2WkhWc1pWeHVJRngwWEhSeVpYUjFjbTRnYlc5a2RXeGxMbVY0Y0c5eWRITTdYRzRnWEhSOVhHNWNibHh1SUZ4MEx5OGdaWGh3YjNObElIUm9aU0J0YjJSMWJHVnpJRzlpYW1WamRDQW9YMTkzWldKd1lXTnJYMjF2WkhWc1pYTmZYeWxjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHViU0E5SUcxdlpIVnNaWE03WEc1Y2JpQmNkQzh2SUdWNGNHOXpaU0IwYUdVZ2JXOWtkV3hsSUdOaFkyaGxYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtTWdQU0JwYm5OMFlXeHNaV1JOYjJSMWJHVnpPMXh1WEc0Z1hIUXZMeUJrWldacGJtVWdaMlYwZEdWeUlHWjFibU4wYVc5dUlHWnZjaUJvWVhKdGIyNTVJR1Y0Y0c5eWRITmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVpDQTlJR1oxYm1OMGFXOXVLR1Y0Y0c5eWRITXNJRzVoYldVc0lHZGxkSFJsY2lrZ2UxeHVJRngwWEhScFppZ2hYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV2S0dWNGNHOXlkSE1zSUc1aGJXVXBLU0I3WEc0Z1hIUmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lHNWhiV1VzSUhzZ1pXNTFiV1Z5WVdKc1pUb2dkSEoxWlN3Z1oyVjBPaUJuWlhSMFpYSWdmU2s3WEc0Z1hIUmNkSDFjYmlCY2RIMDdYRzVjYmlCY2RDOHZJR1JsWm1sdVpTQmZYMlZ6VFc5a2RXeGxJRzl1SUdWNGNHOXlkSE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjaUE5SUdaMWJtTjBhVzl1S0dWNGNHOXlkSE1wSUh0Y2JpQmNkRngwYVdZb2RIbHdaVzltSUZONWJXSnZiQ0FoUFQwZ0ozVnVaR1ZtYVc1bFpDY2dKaVlnVTNsdFltOXNMblJ2VTNSeWFXNW5WR0ZuS1NCN1hHNGdYSFJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRk41YldKdmJDNTBiMU4wY21sdVoxUmhaeXdnZXlCMllXeDFaVG9nSjAxdlpIVnNaU2NnZlNrN1hHNGdYSFJjZEgxY2JpQmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lDZGZYMlZ6VFc5a2RXeGxKeXdnZXlCMllXeDFaVG9nZEhKMVpTQjlLVHRjYmlCY2RIMDdYRzVjYmlCY2RDOHZJR055WldGMFpTQmhJR1poYTJVZ2JtRnRaWE53WVdObElHOWlhbVZqZEZ4dUlGeDBMeThnYlc5a1pTQW1JREU2SUhaaGJIVmxJR2x6SUdFZ2JXOWtkV3hsSUdsa0xDQnlaWEYxYVhKbElHbDBYRzRnWEhRdkx5QnRiMlJsSUNZZ01qb2diV1Z5WjJVZ1lXeHNJSEJ5YjNCbGNuUnBaWE1nYjJZZ2RtRnNkV1VnYVc1MGJ5QjBhR1VnYm5OY2JpQmNkQzh2SUcxdlpHVWdKaUEwT2lCeVpYUjFjbTRnZG1Gc2RXVWdkMmhsYmlCaGJISmxZV1I1SUc1eklHOWlhbVZqZEZ4dUlGeDBMeThnYlc5a1pTQW1JRGg4TVRvZ1ltVm9ZWFpsSUd4cGEyVWdjbVZ4ZFdseVpWeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1MElEMGdablZ1WTNScGIyNG9kbUZzZFdVc0lHMXZaR1VwSUh0Y2JpQmNkRngwYVdZb2JXOWtaU0FtSURFcElIWmhiSFZsSUQwZ1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aDJZV3gxWlNrN1hHNGdYSFJjZEdsbUtHMXZaR1VnSmlBNEtTQnlaWFIxY200Z2RtRnNkV1U3WEc0Z1hIUmNkR2xtS0NodGIyUmxJQ1lnTkNrZ0ppWWdkSGx3Wlc5bUlIWmhiSFZsSUQwOVBTQW5iMkpxWldOMEp5QW1KaUIyWVd4MVpTQW1KaUIyWVd4MVpTNWZYMlZ6VFc5a2RXeGxLU0J5WlhSMWNtNGdkbUZzZFdVN1hHNGdYSFJjZEhaaGNpQnVjeUE5SUU5aWFtVmpkQzVqY21WaGRHVW9iblZzYkNrN1hHNGdYSFJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWNpaHVjeWs3WEc0Z1hIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNodWN5d2dKMlJsWm1GMWJIUW5MQ0I3SUdWdWRXMWxjbUZpYkdVNklIUnlkV1VzSUhaaGJIVmxPaUIyWVd4MVpTQjlLVHRjYmlCY2RGeDBhV1lvYlc5a1pTQW1JRElnSmlZZ2RIbHdaVzltSUhaaGJIVmxJQ0U5SUNkemRISnBibWNuS1NCbWIzSW9kbUZ5SUd0bGVTQnBiaUIyWVd4MVpTa2dYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVrS0c1ekxDQnJaWGtzSUdaMWJtTjBhVzl1S0d0bGVTa2dleUJ5WlhSMWNtNGdkbUZzZFdWYmEyVjVYVHNnZlM1aWFXNWtLRzUxYkd3c0lHdGxlU2twTzF4dUlGeDBYSFJ5WlhSMWNtNGdibk03WEc0Z1hIUjlPMXh1WEc0Z1hIUXZMeUJuWlhSRVpXWmhkV3gwUlhod2IzSjBJR1oxYm1OMGFXOXVJR1p2Y2lCamIyMXdZWFJwWW1sc2FYUjVJSGRwZEdnZ2JtOXVMV2hoY20xdmJua2diVzlrZFd4bGMxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dUlEMGdablZ1WTNScGIyNG9iVzlrZFd4bEtTQjdYRzRnWEhSY2RIWmhjaUJuWlhSMFpYSWdQU0J0YjJSMWJHVWdKaVlnYlc5a2RXeGxMbDlmWlhOTmIyUjFiR1VnUDF4dUlGeDBYSFJjZEdaMWJtTjBhVzl1SUdkbGRFUmxabUYxYkhRb0tTQjdJSEpsZEhWeWJpQnRiMlIxYkdWYkoyUmxabUYxYkhRblhUc2dmU0E2WEc0Z1hIUmNkRngwWm5WdVkzUnBiMjRnWjJWMFRXOWtkV3hsUlhod2IzSjBjeWdwSUhzZ2NtVjBkWEp1SUcxdlpIVnNaVHNnZlR0Y2JpQmNkRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1a0tHZGxkSFJsY2l3Z0oyRW5MQ0JuWlhSMFpYSXBPMXh1SUZ4MFhIUnlaWFIxY200Z1oyVjBkR1Z5TzF4dUlGeDBmVHRjYmx4dUlGeDBMeThnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbThnUFNCbWRXNWpkR2x2YmlodlltcGxZM1FzSUhCeWIzQmxjblI1S1NCN0lISmxkSFZ5YmlCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG1oaGMwOTNibEJ5YjNCbGNuUjVMbU5oYkd3b2IySnFaV04wTENCd2NtOXdaWEowZVNrN0lIMDdYRzVjYmlCY2RDOHZJRjlmZDJWaWNHRmphMTl3ZFdKc2FXTmZjR0YwYUY5ZlhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5BZ1BTQmNJbHdpTzF4dVhHNWNiaUJjZEM4dklFeHZZV1FnWlc1MGNua2diVzlrZFd4bElHRnVaQ0J5WlhSMWNtNGdaWGh3YjNKMGMxeHVJRngwY21WMGRYSnVJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1eklEMGdNQ2s3WEc0aVhTd2ljMjkxY21ObFVtOXZkQ0k2SWlKOSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc1MTVDO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7IH1cXG5cXG5ib2R5IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IGF1dG87IH1cXG5cXG5tYWluIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzUxNUM7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcblxcbi5tYWluLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VCRjVFRTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7IH1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDI1NSU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgd2lkdGg6IDMwJTsgfVxcblxcbm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMTBweDsgfVxcblxcbi5uYXZCdXR0b24ge1xcbiAgZm9udC1zaXplOiAxMzAlO1xcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFQkY1RUU7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMwMDA7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMDAwO1xcbiAgbWFyZ2luOiAxJSAyMHB4IDElIDElOyB9XFxuICAubmF2QnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NmZjJkYTsgfVxcbiAgLm5hdkJ1dHRvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzNDMkM2OyB9XFxuXFxuLmxvd2VyLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdzsgfVxcblxcbi5ncmVldGluZyB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBjb2xvcjogI0VCRjVFRTtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7IH1cXG5cXG4uc2VhcmNoLWFyZWEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XFxuXFxuLnNlYXJjaC1iYXIge1xcbiAgbWF4LWhlaWdodDogNnZoO1xcbiAgbWFyZ2luOiA1cHg7XFxuICBwYWRkaW5nOiAzcHg7IH1cXG5cXG4uc2VhcmNoLWltYWdlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFQkY1RUU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgd2lkdGg6IDIwJTtcXG4gIG1hcmdpbi1yaWdodDogMDsgfVxcbiAgLnNlYXJjaC1pbWFnZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZmYyZGE7IH1cXG4gIC5zZWFyY2gtaW1hZ2U6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0MzQzJDNjsgfVxcblxcbi5zZWFyY2gtaW5wdXQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIG1pbi13aWR0aDogOTAlOyB9XFxuXFxuLmFsbC1jYXJkcyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1nYXA6IDMwcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgcGFkZGluZzogMzBweDtcXG4gIHdpZHRoOiA5NS41dnc7IH1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG5pbWcge1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLmNhcmQtYnV0dG9uIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICBoZWlnaHQ6IDI3cHg7XFxuICBtYXJnaW46IDNweDtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgLmNhcmQtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NmZjJkYTsgfVxcbiAgLmNhcmQtYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDM0MyQzY7IH1cXG5cXG4uYWRkLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJGNUVFO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMiU7IH1cXG5cXG4uYWRkIHtcXG4gIHdpZHRoOiA5MCU7IH1cXG5cXG4uZmF2b3JpdGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VCRjVFRTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICB3aWR0aDogMTMlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMTQ5LzE0OTIyMi5zdmdcXFwiKTsgfVxcblxcbi5jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNEN0YyRkU7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjMDAwO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uY2FyZC1oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VCRjVFRTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7IH1cXG5cXG4uYWxsIHtcXG4gIGdyaWQtZ2FwOiAwO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTsgfVxcblxcbi5hbGwtcmVjaXBlLWluZm8sXFxub2wge1xcbiAgZm9udC1zaXplOiAxNTAlO1xcbiAgY29sb3I6ICNFQkY1RUU7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogMTUwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFQkY1RUU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDVweDsgfVxcblxcbi5yZWNpcGUtbmFtZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJGNUVFO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZm9udC1zaXplOiAxNTAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLmNhcmQtcGljdHVyZSB7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgd2lkdGg6IDk0JTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICBtYXJnaW46IDEwcHggMyUgOHB4IDIuNiU7IH1cXG4gIC5jYXJkLXBpY3R1cmU6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAwLjc7IH1cXG4gIC5jYXJkLXBpY3R1cmU6YWN0aXZlIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDsgfVxcblxcbi53cmFwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxuICBib3JkZXI6IDA7IH1cXG5cXG4uZmF2b3JpdGUtYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzE0OC8xNDg4NDEuc3ZnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyB9XFxuXFxuLmRpc3BsYXktcmVjaXBlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWdhcDogN3B4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjZmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnI7XFxuICBtYXJnaW46IDE1cHg7IH1cXG5cXG4uZGlzcGxheS1yZWNpcGUtaW5mbyB7XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIGdyaWQtcm93OiAwLjU7IH1cXG5cXG4ucmVjaXBlLWluZ3JlZGllbnRzIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxuICBncmlkLXJvdzogMTtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBjb2xvcjogI0VCRjVFRTsgfVxcblxcbi5yZWNpcGUtaW5ncmVkaWVudHMtdGl0bGUge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIGZvbnQtc2l6ZTogMjBweDsgfVxcblxcbi5yZWNpcGUtaW5zdHJ1Y3Rpb25zIHtcXG4gIGdyaWQtY29sdW1uOiAxL3NwYW4gMjtcXG4gIGdyaWQtcm93OiAyO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6ICNFQkY1RUU7XFxuICBtYXgtd2lkdGg6IDkwdnc7XFxuICBtYXJnaW4tdG9wOiAxMDBweDsgfVxcblxcbi50by1jb29rLWdyZWV0aW5nIHtcXG4gIGNvbG9yOiAjRUJGNUVFOyB9XFxuXFxuLmNsb3NlLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJGNUVFO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMyU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9zdmcvc3RhdGljL2ljb25zL3N2Zy80NDYvNDQ2MDkxLnN2Z1xcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG4uaW5nLWNvc3QsXFxuLm5lZWRlZC1pbmdzLFxcbi5wYW50cnktYnV0dG9ucyB7XFxuICBtYXJnaW4tbGVmdDogMTBweDsgfVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MjVweCkge1xcbiAgbWFpbiB7XFxuICAgIHdpZHRoOiA5NSU7IH1cXG4gIC5hbGwtY2FyZHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWdhcDogMzBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gICAgcGFkZGluZzogMzBweCAwIDMwcHggMzBweDtcXG4gICAgd2lkdGg6IDk1LjV2dzsgfVxcbiAgLmRpc3BsYXktcmVjaXBlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gIC5yZWNpcGUtaW5zdHJ1Y3Rpb25zIHtcXG4gICAgbWFyZ2luLXRvcDogMDsgfSB9XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuYWxsLWNhcmRzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1nYXA6IDMwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIHBhZGRpbmc6IDMwcHggMCAzMHB4IDMwcHg7XFxuICAgIHdpZHRoOiA5NS41dnc7IH1cXG4gIC5kaXNwbGF5LXJlY2lwZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAuc2VhcmNoLWltYWdlIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfSB9XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XFxuICAubG93ZXItaGVhZGVyLFxcbiAgLm1haW4taGVhZGVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgLnNlYXJjaC1pbnB1dCB7XFxuICAgIG1pbi13aWR0aDogODB2dzsgfVxcbiAgLmFsbC1jYXJkcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtZ2FwOiAzMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xcbiAgICBwYWRkaW5nOiAzMHB4IDAgMzBweCAzMHB4O1xcbiAgICB3aWR0aDogOTUuNXZ3OyB9XFxuICAuY2FyZC1idXR0b24ge1xcbiAgICBoZWlnaHQ6IGF1dG87IH1cXG4gIC50by1jb29rIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgLmNhcmQge1xcbiAgICBtYXgtd2lkdGg6IDk1JTsgfSB9XFxuXCIsIFwiXCJdKTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuICdAbWVkaWEgJyArIGl0ZW1bMl0gKyAneycgKyBjb250ZW50ICsgJ30nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9ICcoJyArIGl0ZW1bMl0gKyAnKSBhbmQgKCcgKyBtZWRpYVF1ZXJ5ICsgJyknO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuICByZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufSIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsImNsYXNzIENvb2tib29rIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMucmVjaXBlcyA9IGRhdGE7XG4gIH1cblxuICBmaW5kUmVjaXBlcyhzZWFyY2hUZXh0KSB7XG4gICAgcmV0dXJuIHRoaXMucmVjaXBlcy5maWx0ZXIoKHJlY2lwZSk9PntcbiAgICAgIGxldCBpbmdyZWRpZW50TmFtZXMgPSByZWNpcGUuaW5ncmVkaWVudHMubWFwKChpbmdyZWRpZW50KT0+e1xuICAgICAgICByZXR1cm4gaW5ncmVkaWVudC5uYW1lXG4gICAgICB9KVxuICAgICAgcmV0dXJuIHJlY2lwZS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGV4dCkgfHxcbiAgICAgIHJlY2lwZS50YWdzLmluY2x1ZGVzKHNlYXJjaFRleHQpIHx8XG4gICAgICBpbmdyZWRpZW50TmFtZXMuaW5jbHVkZXMoc2VhcmNoVGV4dClcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvb2tib29rO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGVzLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGVzLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IFBhbnRyeSBmcm9tICcuL3BhbnRyeSc7XG5pbXBvcnQgUmVjaXBlIGZyb20gJy4vcmVjaXBlJztcbmltcG9ydCBVc2VyIGZyb20gJy4vdXNlcic7XG5pbXBvcnQgQ29va2Jvb2sgZnJvbSAnLi9jb29rYm9vayc7XG5cblxubGV0IGRvbVVwZGF0ZXMgPSB7XG5cbiAgdXNlcnM6IFt7fV0sXG4gIHJlY2lwZURhdGE6IFt7fV0sXG4gIGluZ3JlZGllbnRzRGF0YTogW3t9XSxcbiAgdXNlcjoge30sXG4gIGNvb2tib29rOiBudWxsLFxuXG4gIGdldFdoYXRzQ29va2luZ0RhdGE6ICgpID0+IHtcbiAgICBQcm9taXNlLmFsbChbXG4gICAgICBmZXRjaCgnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL3doYXRzLWNvb2tpbi8xOTExL3VzZXJzL3djVXNlcnNEYXRhJyksXG4gICAgICBmZXRjaCgnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL3doYXRzLWNvb2tpbi8xOTExL3JlY2lwZXMvcmVjaXBlRGF0YScpLFxuICAgICAgZmV0Y2goJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS93aGF0cy1jb29raW4vMTkxMS9pbmdyZWRpZW50cy9pbmdyZWRpZW50c0RhdGEnKVxuICAgIF0pXG4gICAgICAudGhlbihyZXNwb25zZXMgPT4gUHJvbWlzZS5hbGwocmVzcG9uc2VzLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpKSlcbiAgICAgIC50aGVuKHJlc3BvbnNlcyA9PiB7XG4gICAgICAgIGRvbVVwZGF0ZXMudXNlcnMgPSByZXNwb25zZXNbMF0ud2NVc2Vyc0RhdGE7XG4gICAgICAgIGRvbVVwZGF0ZXMucmVjaXBlRGF0YSA9IHJlc3BvbnNlc1sxXS5yZWNpcGVEYXRhO1xuICAgICAgICBkb21VcGRhdGVzLmluZ3JlZGllbnRzRGF0YSA9IHJlc3BvbnNlc1syXS5pbmdyZWRpZW50c0RhdGE7XG4gICAgICAgIGRvbVVwZGF0ZXMuY3JlYXRlRGF0YU1vZGVsKCk7XG4gICAgICAgIGRvbVVwZGF0ZXMudXBkYXRlRGlzcGxheSgpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXG4gIH0sXG5cbiAgY3JlYXRlRGF0YU1vZGVsOiAoKSA9PiB7XG4gICAgbGV0IHBhbnRyeSA9IG5ldyBQYW50cnkoZG9tVXBkYXRlcy51c2Vyc1swXS5wYW50cnkpO1xuICAgIGRvbVVwZGF0ZXMudXNlciA9IG5ldyBVc2VyKGRvbVVwZGF0ZXMudXNlcnNbMF0sIHBhbnRyeSwgZG9tVXBkYXRlcy5pbmdyZWRpZW50c0RhdGEpO1xuICAgIGxldCByZWNpcGVEZWNrID0gZG9tVXBkYXRlcy5yZWNpcGVEYXRhLm1hcChyZWNpcGUgPT4ge1xuICAgICAgcmV0dXJuIHJlY2lwZSA9IG5ldyBSZWNpcGUocmVjaXBlLCBkb21VcGRhdGVzLmluZ3JlZGllbnRzRGF0YSk7XG4gICAgfSlcbiAgICBkb21VcGRhdGVzLmNvb2tib29rID0gbmV3IENvb2tib29rKHJlY2lwZURlY2spO1xuICB9LFxuXG4gIHVwZGF0ZURpc3BsYXk6ICgpID0+IHtcbiAgICBkb21VcGRhdGVzLmdyZWV0VXNlcigpO1xuICAgIGRvbVVwZGF0ZXMucG9wdWxhdGVDYXJkcyhkb21VcGRhdGVzLmNvb2tib29rLnJlY2lwZXMpO1xuICB9LFxuXG4gIGdyZWV0VXNlcjogKCkgPT4ge1xuICAgIGNvbnN0IHdlbGNvbWVNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyZWV0aW5nJyk7XG4gICAgd2VsY29tZU1lc3NhZ2UuaW5uZXJUZXh0ID0gYFdlbGNvbWUgJHtkb21VcGRhdGVzLnVzZXIubmFtZX0hYDtcbiAgfSxcblxuICBwb3B1bGF0ZUNhcmRzOiAocmVjaXBlcykgPT4ge1xuICAgIGNvbnN0IGNhcmRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tc2VjdGlvbicpO1xuICAgIGNhcmRBcmVhLmNsYXNzTGlzdCA9ICdhbGwtY2FyZHMnO1xuICAgIGNhcmRBcmVhLmlubmVySFRNTCA9ICcnO1xuICAgIHJlY2lwZXMuZm9yRWFjaChyZWNpcGUgPT4ge1xuICAgICAgY2FyZEFyZWEuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgZG9tVXBkYXRlcy5jb25zdHJ1Y3RDYXJkKHJlY2lwZSkpXG4gICAgfSk7XG4gIH0sXG5cbiAgY29uc3RydWN0Q2FyZDogKHJlY2lwZSkgPT4ge1xuICAgIGxldCBjbGFzc0xpc3RcbiAgICBpZiAoZG9tVXBkYXRlcy51c2VyLmZhdm9yaXRlUmVjaXBlcy5pbmNsdWRlcyhyZWNpcGUpKSB7XG4gICAgICBjbGFzc0xpc3QgPSAnZmF2b3JpdGUgY2FyZC1idXR0b24gZmF2b3JpdGUtYWN0aXZlJ1xuICAgIH0gZWxzZSB7XG4gICAgICBjbGFzc0xpc3QgPSAnZmF2b3JpdGUgY2FyZC1idXR0b24nXG4gICAgfVxuICAgIHJldHVybiBgPGRpdiBjbGFzcz0nY2FyZCAke3JlY2lwZS5pZH0nPlxuICAgIDxoZWFkZXIgY2xhc3M9J2NhcmQtaGVhZGVyICR7cmVjaXBlLmlkfSc+XG4gICAgICA8bGFiZWwgZm9yPSdhZGQtYnV0dG9uJyBjbGFzcz0naGlkZGVuJz5DbGljayB0byBhZGQgcmVjaXBlPC9sYWJlbD5cbiAgICAgIDxidXR0b24gYXJpYS1sYWJlbD0nYWRkLWJ1dHRvbicgY2xhc3M9J2FkZC1idXR0b24gY2FyZC1idXR0b24gJHtyZWNpcGUuaWR9Jz5cbiAgICAgICAgPGltZyBjbGFzcz0nYWRkICR7cmVjaXBlLmlkfSBhZGQtYnV0dG9uJyBzcmM9J2h0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8zMi8zMjMzOS5zdmcnIGFsdD0nQWRkIHRvXG4gICAgICAgIHJlY2lwZXMgdG8gY29vayc+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxsYWJlbCBmb3I9J2Zhdm9yaXRlLWJ1dHRvbicgY2xhc3M9J2hpZGRlbic+Q2xpY2sgdG8gZmF2b3JpdGUgcmVjaXBlPC9sYWJlbD5cbiAgICAgIDxidXR0b24gYXJpYS1sYWJlbD0nZmF2b3JpdGUtYnV0dG9uJyBjbGFzcz0nJHtjbGFzc0xpc3R9IGZhdm9yaXRlJHtyZWNpcGUuaWR9ICR7cmVjaXBlLmlkfSc+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2hlYWRlcj5cbiAgICA8c3BhbiBjbGFzcz0ncmVjaXBlLW5hbWUgJHtyZWNpcGUuaWR9Jz4ke3JlY2lwZS5uYW1lfTwvc3Bhbj5cbiAgICAgIDxidXR0b24gYXJpYS1sYWJlbD0ncmVjaXBlLWluZm8nIGNsYXNzPSdjYXJkLXBpY3R1cmUgJHtyZWNpcGUuaWR9IHdyYXAnPlxuICAgICAgICA8aW1nIHRhYmluZGV4PScwJyBjbGFzcz0nY2FyZC1waWN0dXJlICR7cmVjaXBlLmlkfSdzcmM9JyR7cmVjaXBlLmltYWdlfScgYWx0PSdGb29kIGZyb20gcmVjaXBlJz5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PmBcbiAgfSxcblxuICBmaW5kU3BlY2lmaWNSZWNpcGU6IChldmVudCkgPT4ge1xuICAgIHJldHVybiBkb21VcGRhdGVzLmNvb2tib29rLnJlY2lwZXMuZmluZChyZWNpcGUgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMocmVjaXBlLmlkKSkge1xuICAgICAgICByZXR1cm4gcmVjaXBlO1xuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgZmF2b3JpdGVDYXJkOiAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBzaG93RmF2b3JpdGVzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpZXctZmF2b3JpdGVzJyk7XG4gICAgbGV0IHNwZWNpZmljUmVjaXBlID0gZG9tVXBkYXRlcy5maW5kU3BlY2lmaWNSZWNpcGUoZXZlbnQpO1xuICAgIGlmICghZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZmF2b3JpdGUtYWN0aXZlJykpIHtcbiAgICAgIHNob3dGYXZvcml0ZXNCdXR0b24uaW5uZXJIVE1MID0gJ1ZpZXcgRmF2b3JpdGVzJztcbiAgICAgIGRvbVVwZGF0ZXMudXNlci5hZGRUb0Zhdm9yaXRlcyhzcGVjaWZpY1JlY2lwZSk7XG4gICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYXZvcml0ZS1hY3RpdmUnKSkge1xuICAgICAgZG9tVXBkYXRlcy51c2VyLnJlbW92ZUZyb21GYXZvcml0ZXMoc3BlY2lmaWNSZWNpcGUpXG4gICAgfVxuICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdmYXZvcml0ZS1hY3RpdmUnKTtcbiAgfSxcblxuICB2aWV3RmF2b3JpdGVzOiAoKSA9PiB7XG4gICAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1hcmVhJyk7XG4gICAgc2VhcmNoQmFyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgY29uc3Qgc2hvd0Zhdm9yaXRlc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aWV3LWZhdm9yaXRlcycpO1xuICAgIGNvbnN0IGNhcmRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tc2VjdGlvbicpO1xuICAgIGNhcmRBcmVhLmNsYXNzTGlzdCA9ICdhbGwtY2FyZHMnO1xuICAgIGlmICghZG9tVXBkYXRlcy51c2VyLmZhdm9yaXRlUmVjaXBlcy5sZW5ndGgpIHtcbiAgICAgIHNob3dGYXZvcml0ZXNCdXR0b24uaW5uZXJIVE1MID0gJ1lvdSBoYXZlIG5vIGZhdm9yaXRlcyEnO1xuICAgICAgZG9tVXBkYXRlcy5wb3B1bGF0ZUNhcmRzKGRvbVVwZGF0ZXMuY29va2Jvb2sucmVjaXBlcyk7XG4gICAgICByZXR1cm5cbiAgICB9IGVsc2Uge1xuICAgICAgc2hvd0Zhdm9yaXRlc0J1dHRvbi5pbm5lckhUTUwgPSAnUmVmcmVzaCBGYXZvcml0ZXMnXG4gICAgICBjYXJkQXJlYS5pbm5lckhUTUwgPSAnJztcbiAgICAgIGRvbVVwZGF0ZXMudXNlci5mYXZvcml0ZVJlY2lwZXMuZm9yRWFjaChyZWNpcGUgPT4ge1xuICAgICAgICBjYXJkQXJlYS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBkb21VcGRhdGVzLmNvbnN0cnVjdENhcmQocmVjaXBlKSlcbiAgICAgIH0pXG4gICAgfVxuICB9LFxuXG4gIGFkZFRvVG9Db29rOiAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBzaG93VG9Db29rQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWNvb2snKTtcbiAgICBsZXQgc3BlY2lmaWNSZWNpcGUgPSBkb21VcGRhdGVzLmZpbmRTcGVjaWZpY1JlY2lwZShldmVudCk7XG4gICAgaWYgKCFldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGQtYWN0aXZlJykpIHtcbiAgICAgIHNob3dUb0Nvb2tCdXR0b24uaW5uZXJUZXh0ID0gJ1RvIENvb2snXG4gICAgICBhbGVydChkb21VcGRhdGVzLnVzZXIuY2hlY2tQYW50cnlJbmdyZWRpZW50cyhzcGVjaWZpY1JlY2lwZSkpO1xuICAgICAgZG9tVXBkYXRlcy51c2VyLmFkZFRvUmVjaXBlc1RvQ29vayhzcGVjaWZpY1JlY2lwZSk7XG4gICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGQtYWN0aXZlJykpIHtcbiAgICAgIGRvbVVwZGF0ZXMudXNlci5yZW1vdmVGcm9tUmVjaXBlc1RvQ29vayhzcGVjaWZpY1JlY2lwZSlcbiAgICB9XG4gICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2FkZC1hY3RpdmUnKTtcbiAgfSxcblxuICBkaXNwbGF5VG9Db29rQ2FyZHM6ICgpID0+IHtcbiAgICBjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWFyZWEnKTtcbiAgICBzZWFyY2hCYXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICBjb25zdCBjYXJkQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLXNlY3Rpb24nKTtcbiAgICBjYXJkQXJlYS5jbGFzc0xpc3QgPSAnJztcbiAgICBjYXJkQXJlYS5pbm5lckhUTUwgPVxuICAgICAgYDxzZWN0aW9uIGNsYXNzPSd0by1jb29rJz5cbiAgICAgICAgPGgxIGNsYXNzPSd0by1jb29rLWdyZWV0aW5nJz5SZWNpcGVzIFRvIENvb2s8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkLXNlY3Rpb24gYWxsLWNhcmRzJz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+YFxuICAgIGxldCBjYXJkU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLXNlY3Rpb24nKVxuICAgIGRvbVVwZGF0ZXMudXNlci5yZWNpcGVzVG9Db29rLmZvckVhY2gocmVjaXBlID0+IHtcbiAgICAgIGxldCB2YWx1ZXMgPSBkb21VcGRhdGVzLnVzZXIuY2hlY2tIb3dNdWNoTW9yZShyZWNpcGUpLm1hcChvYmogPT4ge1xuICAgICAgICByZXR1cm4gYCR7b2JqLnF1YW50aXR5TmVlZGVkfSAke29iai51bml0fSBtb3JlICR7b2JqLm5hbWV9YDtcbiAgICAgIH0pO1xuICAgICAgbGV0IG5lZWRlZENvc3QgPSBkb21VcGRhdGVzLnVzZXIuY2hlY2tIb3dNdWNoTW9yZShyZWNpcGUpLnJlZHVjZSgodG90YWwsIGluZ3JlZGllbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIHRvdGFsICs9IGluZ3JlZGllbnQuY29zdDtcbiAgICAgIH0sIDApO1xuICAgICAgY2FyZFNlY3Rpb24uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgPGRpdiBjbGFzcz0nY2FyZCAke3JlY2lwZS5pZH0nPlxuICAgIDxoZWFkZXIgY2xhc3M9J2NhcmQtaGVhZGVyICR7cmVjaXBlLmlkfSc+XG4gICAgICA8bGFiZWwgZm9yPSdjbG9zZS1idXR0b24nIGNsYXNzPSdoaWRkZW4nPjwvbGFiZWw+XG4gICAgICA8YnV0dG9uIGFyaWEtbGFiZWw9J2Nsb3NlLWJ1dHRvbicgY2xhc3M9J2Nsb3NlLWJ1dHRvbiBjYXJkLWJ1dHRvbiAke3JlY2lwZS5pZH0nPlxuICAgICAgICA8aW1nIGNsYXNzPSdjbG9zZS1idXR0b24gJHtyZWNpcGUuaWR9JyBzcmM9J2h0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9zdmcvc3RhdGljL2ljb25zL3N2Zy80NDYvNDQ2MDkxLnN2ZycgYWx0PSdyZW1vdmUgZnJvbSByZWNpcGVzIHRvIGNvb2snPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8bGFiZWwgZm9yPSdmYXZvcml0ZS1idXR0b24nIGNsYXNzPSdoaWRkZW4nPkNsaWNrIHRvIGZhdm9yaXRlIHJlY2lwZTwvbGFiZWw+XG4gICAgICA8YnV0dG9uIGFyaWEtbGFiZWw9J2Zhdm9yaXRlLWJ1dHRvbicgY2xhc3M9J2Zhdm9yaXRlIGNhcmQtYnV0dG9uIGZhdm9yaXRlJHtyZWNpcGUuaWR9ICR7cmVjaXBlLmlkfSc+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2hlYWRlcj5cbiAgICAgIDxoMz4ke3JlY2lwZS5uYW1lfTwvaDM+XG4gICAgICA8aW1nIHRhYmluZGV4PScwJyBjbGFzcz0nY2FyZC1waWN0dXJlICR7cmVjaXBlLmlkfSdcbiAgICAgIHNyYz0nJHtyZWNpcGUuaW1hZ2V9JyBhbHQ9J0Zvb2QgZnJvbSByZWNpcGUnPlxuICAgICAgPGRpdiBjbGFzcyA9IFwicGFudHJ5LWJ1dHRvbnNcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgbmFtZT1cIkFkZCBOZWVkZWQgSW5ncmVkaWVudHNcIiBjbGFzcz1cImJvdWdodC1pbmdyZWRpZW50cyBib3VnaHQtaW5ncmVkaWVudHMke3JlY2lwZS5pZH0gJHtyZWNpcGUuaWR9XCI+QWRkIE5lZWRlZCBJbmdyZWRpZW50czwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBuYW1lPVwiSGF2ZSBDb29rZWRcIiBjbGFzcz1cImhhdmUtY29va2VkIGhhdmUtY29va2VkJHtyZWNpcGUuaWR9ICR7cmVjaXBlLmlkfVwiPkhhdmUgQ29va2VkPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwIGNsYXNzPSduZWVkZWQtaW5ncyc+SW5ncmVkaWVudHMgU3RpbGwgTmVlZGVkOjwvcD5cbiAgICAgIDx1bCA+XG4gICAgICA8bGk+JHt2YWx1ZXMuam9pbignPC9saT48bGk+Jyl9PC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8cCBjbGFzcz0naW5nLWNvc3QnPkNvc3QgdG8gU3RpbGwgR2V0OiQke25lZWRlZENvc3R9PC9wPlxuICAgIDwvZGl2PmApO1xuICAgIH0pO1xuICB9LFxuXG4gIHNob3dUb0Nvb2tSZWNpcGVzOiAoKSA9PiB7XG4gICAgY29uc3Qgc2hvd1RvQ29va0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1jb29rJyk7XG4gICAgaWYgKCFkb21VcGRhdGVzLnVzZXIucmVjaXBlc1RvQ29vay5sZW5ndGgpIHtcbiAgICAgIHNob3dUb0Nvb2tCdXR0b24uaW5uZXJUZXh0ID0gJ1lvdSBoYXZlIG5vIHNhdmVkIFJlY2lwZXMhJztcbiAgICAgIGRvbVVwZGF0ZXMucG9wdWxhdGVDYXJkcyhkb21VcGRhdGVzLmNvb2tib29rLnJlY2lwZXMpO1xuICAgICAgcmV0dXJuXG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbVVwZGF0ZXMuZGlzcGxheVRvQ29va0NhcmRzKCk7XG4gICAgfVxuICB9LFxuXG4gIHJlbW92ZUZyb21Ub0Nvb2s6ICgpID0+IHtcbiAgICBsZXQgc3BlY2lmaWNSZWNpcGUgPSBkb21VcGRhdGVzLmNvb2tib29rLnJlY2lwZXMuZmluZChyZWNpcGUgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMocmVjaXBlLmlkKSkge1xuICAgICAgICByZXR1cm4gcmVjaXBlO1xuICAgICAgfVxuICAgIH0pXG4gICAgZG9tVXBkYXRlcy51c2VyLnJlbW92ZUZyb21SZWNpcGVzVG9Db29rKHNwZWNpZmljUmVjaXBlKTtcbiAgICBkb21VcGRhdGVzLmRpc3BsYXlUb0Nvb2tDYXJkcygpO1xuICB9LFxuXG4gIGRpc3BsYXlEaXJlY3Rpb25zOiAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWFyZWEnKTtcbiAgICBzZWFyY2hCYXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICBjb25zdCBjYXJkQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLXNlY3Rpb24nKTtcbiAgICBjYXJkQXJlYS5jbGFzc0xpc3QgPSAncmVjaXBlLWRpcmVjdGlvbnMnO1xuICAgIGxldCBzcGVjaWZpY1JlY2lwZSA9IGRvbVVwZGF0ZXMuZmluZFNwZWNpZmljUmVjaXBlKGV2ZW50KTtcbiAgICBsZXQgY29zdCA9IHNwZWNpZmljUmVjaXBlLmNhbGN1bGF0ZUNvc3QoKTtcbiAgICBjYXJkQXJlYS5pbm5lckhUTUwgPSAnJztcbiAgICBsZXQgbmVlZGVkSW5ncmVkaWVudHMgPSBbXTtcbiAgICBzcGVjaWZpY1JlY2lwZS5pbmdyZWRpZW50cy5mb3JFYWNoKGluZ3JlZGllbnQgPT4ge1xuICAgICAgbGV0IG5hbWUgPSBzcGVjaWZpY1JlY2lwZS5pbmdyZWRpZW50c0RhdGEuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGluZ3JlZGllbnQuaWQpLm5hbWVcbiAgICAgIG5lZWRlZEluZ3JlZGllbnRzLnB1c2goYCR7aW5ncmVkaWVudC5xdWFudGl0eS5hbW91bnQudG9GaXhlZCgyKX0gJHtpbmdyZWRpZW50LnF1YW50aXR5LnVuaXR9ICR7bmFtZX1gKVxuICAgIH0pXG4gICAgbGV0IG5lZWRlZFN0ZXBzID0gW107XG4gICAgc3BlY2lmaWNSZWNpcGUuaW5zdHJ1Y3Rpb25zLmZvckVhY2goc3RlcCA9PiB7XG4gICAgICBuZWVkZWRTdGVwcy5wdXNoKGAke3N0ZXAubnVtYmVyfS4gJHtzdGVwLmluc3RydWN0aW9ufSBgKVxuICAgIH0pXG4gICAgY2FyZEFyZWEuaW5uZXJIVE1MID0gYDxzZWN0aW9uIGNsYXNzPSdkaXNwbGF5LXJlY2lwZSc+XG4gICAgPGRpdiBjbGFzcz0nZGlzcGxheS1yZWNpcGUtaW5mbyc+XG4gICAgICA8aDM+JHtzcGVjaWZpY1JlY2lwZS5uYW1lfTwvaDM+XG4gICAgICA8aW1nIGNsYXNzPSdjYXJkLXBpY3R1cmUnIHNyYz0nJHtzcGVjaWZpY1JlY2lwZS5pbWFnZX0nIGFsdD0nUmVjaXBlIGltYWdlIGZvciAke3NwZWNpZmljUmVjaXBlLm5hbWV9Jz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPSdyZWNpcGUtaW5ncmVkaWVudHMnPlxuICAgIDxoNSBjbGFzcz0ncmVjaXBlLWluZ3JlZGllbnRzLXRpdGxlJz5Zb3Ugd2lsbCBuZWVkOiA8L2g1PlxuICAgIDx1bD5cbiAgICA8bGk+JHtuZWVkZWRJbmdyZWRpZW50cy5qb2luKCc8L2xpPjxsaT4nKX08L2xpPlxuICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz0ncmVjaXBlLWluc3RydWN0aW9ucyc+XG4gICAgPGg1Pkluc3RydWN0aW9uczogPC9oNT5cbiAgICA8dWwgY2xhc3M9J2luc3RydWN0aW9uLWxpc3QnIHN0eWxlPSdsaXN0LXN0eWxlLXR5cGU6bm9uZTsnPlxuICAgIDxsaT4ke25lZWRlZFN0ZXBzLmpvaW4oJzwvbGk+PGxpPicpfTwvbGk+XG4gICAgPC91bD5cbiAgICA8aDU+VGhpcyByZWNpcGUgZ2VuZXJhbGx5IGNvc3RzOiAkJHtjb3N0fSA8L2g1PlxuICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5gO1xuICB9LFxuXG4gIGZpbHRlclJlY2lwZXM6ICgpID0+IHtcbiAgICBjb25zdCBjYXJkQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtY2FyZHMnKTtcbiAgICB2YXIgc2VhcmNoVGVybSA9IGV2ZW50LnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChzZWFyY2hUZXJtICE9PSAnJykge1xuICAgICAgY2FyZEFyZWEuaW5uZXJIVE1MID0gJyc7XG4gICAgICBkb21VcGRhdGVzLmRpc3BsYXlGaWx0ZXJlZFJlY2lwZXMoc2VhcmNoVGVybSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbVVwZGF0ZXMucG9wdWxhdGVDYXJkcyhkb21VcGRhdGVzLmNvb2tib29rLnJlY2lwZXMpO1xuICAgIH1cbiAgfSxcblxuICBkaXNwbGF5RmlsdGVyZWRSZWNpcGVzOiAoc2VhcmNoVGVybSkgPT4ge1xuICAgIGRvbVVwZGF0ZXMucG9wdWxhdGVDYXJkcyhkb21VcGRhdGVzLmNvb2tib29rLmZpbmRSZWNpcGVzKHNlYXJjaFRlcm0pKTtcbiAgfSxcblxuICBoYXZlQ29va2VkUmVjaXBlOiAoZXZlbnQpID0+IHtcbiAgICBsZXQgc3BlY2lmaWNSZWNpcGUgPSBkb21VcGRhdGVzLmZpbmRTcGVjaWZpY1JlY2lwZShldmVudCk7XG4gICAgY29uc3QgaGF2ZUNvb2tlZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5oYXZlLWNvb2tlZCR7c3BlY2lmaWNSZWNpcGUuaWR9YCk7XG4gICAgaWYgKGRvbVVwZGF0ZXMudXNlci5jaGVja1BhbnRyeUluZ3JlZGllbnRzKHNwZWNpZmljUmVjaXBlKSAhPT0gJ1lvdSBoYXZlIHRoZSBpbmdyZWRpZW50cyEnKSB7XG4gICAgICBhbGVydChcIllvdSBkb24ndCBoYXZlIHdoYXQgeW91IG5lZWQgeWV0XCIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbVVwZGF0ZXMudXNlci5yZW1vdmVQYW50cnlJbmdyaWRpZW50cyhzcGVjaWZpY1JlY2lwZSlcbiAgICAgIGhhdmVDb29rZWRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgfSxcblxuICBidXlJbmdyZWRpZW50czogKGV2ZW50KSA9PiB7XG4gICAgbGV0IHNwZWNpZmljUmVjaXBlID0gZG9tVXBkYXRlcy5maW5kU3BlY2lmaWNSZWNpcGUoZXZlbnQpO1xuICAgIGNvbnN0IGJ1eUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5ib3VnaHQtaW5ncmVkaWVudHMke3NwZWNpZmljUmVjaXBlLmlkfWApXG4gICAgZG9tVXBkYXRlcy51c2VyLmFkZE5lZWRlZFBhbnRyeUluZ3JpZGllbnRzKHNwZWNpZmljUmVjaXBlKVxuICAgIGJ1eUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gIH0sXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0ICBkb21VcGRhdGVzO1xuIiwiY2xhc3MgUGFudHJ5IHtcbiAgY29uc3RydWN0b3IodXNlclBhbnRyeSkge1xuICAgIHRoaXMudXNlclBhbnRyeSA9IHVzZXJQYW50cnk7XG4gICAgdGhpcy51c2VySW5ncmVkaWVudHMgPSB7fTtcbiAgfVxuXG4gIGNvbXBpbGVQYW50cnkoKSB7XG4gICAgdGhpcy51c2VySW5ncmVkaWVudHMgPSB0aGlzLnVzZXJQYW50cnkucmVkdWNlKChwYW50cnksIGluZ3JlZGllbnQpID0+IHtcbiAgICAgIGlmICghcGFudHJ5W2luZ3JlZGllbnQuaW5ncmVkaWVudF0pIHtcbiAgICAgICAgcGFudHJ5W2luZ3JlZGllbnQuaW5ncmVkaWVudF0gPSBpbmdyZWRpZW50LmFtb3VudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhbnRyeVtpbmdyZWRpZW50LmluZ3JlZGllbnRdICs9IGluZ3JlZGllbnQuYW1vdW50O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHBhbnRyeTtcbiAgICB9LCB7fSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFudHJ5O1xuIiwiY2xhc3MgUmVjaXBlIHtcbiAgY29uc3RydWN0b3IocmVjaXBlLCBpbmdyZWRpZW50c0RhdGEpIHtcbiAgICB0aGlzLm5hbWUgPSByZWNpcGUubmFtZTtcbiAgICB0aGlzLmlkID0gcmVjaXBlLmlkO1xuICAgIHRoaXMuaW5ncmVkaWVudHMgPSByZWNpcGUuaW5ncmVkaWVudHM7XG4gICAgdGhpcy5pbnN0cnVjdGlvbnMgPSByZWNpcGUuaW5zdHJ1Y3Rpb25zO1xuICAgIHRoaXMudGFncyA9IHJlY2lwZS50YWdzO1xuICAgIHRoaXMuaW5ncmVkaWVudHNEYXRhID0gaW5ncmVkaWVudHNEYXRhO1xuICAgIHRoaXMuaW1hZ2UgPSByZWNpcGUuaW1hZ2U7XG4gIH1cblxuICBjYWxjdWxhdGVDb3N0KCkge1xuICAgIGxldCBjb3N0Q291bnRlciA9IDA7XG4gICAgdGhpcy5pbmdyZWRpZW50cy5mb3JFYWNoKGluZ3JlZGllbnQgPT4ge1xuICAgICAgdGhpcy5pbmdyZWRpZW50c0RhdGEuZmluZChzcGVjaWZpY0luZ3JlZGllbnQgPT4ge1xuICAgICAgICBpZiAoc3BlY2lmaWNJbmdyZWRpZW50LmlkID09PSBpbmdyZWRpZW50LmlkKSB7XG4gICAgICAgICAgY29zdENvdW50ZXIgKz0gKE51bWJlcihzcGVjaWZpY0luZ3JlZGllbnQuZXN0aW1hdGVkQ29zdEluQ2VudHMpICpcbiAgICAgICAgICBOdW1iZXIoaW5ncmVkaWVudC5xdWFudGl0eS5hbW91bnQpKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pO1xuICAgIHJldHVybiBwYXJzZUZsb2F0KChjb3N0Q291bnRlciAvIDEwMCkudG9GaXhlZCgyKSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWNpcGU7XG4iLCJpbXBvcnQgJy4vY3NzL3N0eWxlcy5zY3NzJztcblxuaW1wb3J0IGRvbVVwZGF0ZXMgZnJvbSAnLi9kb21VcGRhdGVzJztcblxuY29uc3Qgc2hvd0Zhdm9yaXRlc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aWV3LWZhdm9yaXRlcycpO1xuY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lJylcbmNvbnN0IGNhcmRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1jYXJkcycpO1xuY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1pbnB1dCcpO1xuY29uc3Qgc2hvd1RvQ29va0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1jb29rJyk7XG5cbmNvbnN0IGNhcmRCdXR0b25Db25kaXRpb25hbHMgPSAoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Zhdm9yaXRlJykpIHtcbiAgICBkb21VcGRhdGVzLmZhdm9yaXRlQ2FyZChldmVudCk7XG4gIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWRkLWJ1dHRvbicpKSB7XG4gICAgZG9tVXBkYXRlcy5hZGRUb1RvQ29vayhldmVudCk7XG4gIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2FyZC1waWN0dXJlJykpIHtcbiAgICBkb21VcGRhdGVzLmRpc3BsYXlEaXJlY3Rpb25zKGV2ZW50KTtcbiAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdob21lJykpIHtcbiAgICBjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWFyZWEnKTtcbiAgICBzZWFyY2hCYXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICBzaG93VG9Db29rQnV0dG9uLmlubmVySFRNTCA9ICdUbyBDb29rJztcbiAgICBzaG93RmF2b3JpdGVzQnV0dG9uLmlubmVySFRNTCA9ICdWaWV3IEZhdm9yaXRlcyc7XG4gICAgZG9tVXBkYXRlcy5wb3B1bGF0ZUNhcmRzKGRvbVVwZGF0ZXMuY29va2Jvb2sucmVjaXBlcyk7XG4gIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2xvc2UtYnV0dG9uJykpIHtcbiAgICBkb21VcGRhdGVzLnJlbW92ZUZyb21Ub0Nvb2soZXZlbnQpO1xuICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2hhdmUtY29va2VkJykpIHtcbiAgICBkb21VcGRhdGVzLmhhdmVDb29rZWRSZWNpcGUoZXZlbnQpO1xuICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2JvdWdodC1pbmdyZWRpZW50cycpKSB7XG4gICAgZG9tVXBkYXRlcy5idXlJbmdyZWRpZW50cyhldmVudCk7XG4gIH1cbn1cblxud2luZG93Lm9ubG9hZCA9IGRvbVVwZGF0ZXMuZ2V0V2hhdHNDb29raW5nRGF0YSgpXG5ob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FyZEJ1dHRvbkNvbmRpdGlvbmFscyk7XG5jYXJkQXJlYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhcmRCdXR0b25Db25kaXRpb25hbHMpO1xuc2hvd0Zhdm9yaXRlc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRvbVVwZGF0ZXMudmlld0Zhdm9yaXRlcyk7XG5zaG93VG9Db29rQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZG9tVXBkYXRlcy5zaG93VG9Db29rUmVjaXBlcyk7XG5zZWFyY2hCYXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBkb21VcGRhdGVzLmZpbHRlclJlY2lwZXMpO1xuIiwiaW1wb3J0IFBhbnRyeSBmcm9tICcuL3BhbnRyeSc7XG5cbmNsYXNzIFVzZXIge1xuICBjb25zdHJ1Y3Rvcih1c2VyLCBwYW50cnksIGluZ3JlZGllbnRzRGF0YSkge1xuICAgIHRoaXMuaWQgPSB1c2VyLmlkO1xuICAgIHRoaXMubmFtZSA9IHVzZXIubmFtZTtcbiAgICB0aGlzLnBhbnRyeSA9IHBhbnRyeTtcbiAgICB0aGlzLmZhdm9yaXRlUmVjaXBlcyA9IFtdO1xuICAgIHRoaXMucmVjaXBlc1RvQ29vayA9IFtdO1xuICAgIHRoaXMuaW5ncmVkaWVudHNEYXRhID0gaW5ncmVkaWVudHNEYXRhO1xuICB9XG5cbiAgYWRkVG9GYXZvcml0ZXMocmVjaXBlKSB7XG4gICAgaWYgKCF0aGlzLmZhdm9yaXRlUmVjaXBlcy5pbmNsdWRlcyhyZWNpcGUpKSB7XG4gICAgICB0aGlzLmZhdm9yaXRlUmVjaXBlcy5wdXNoKHJlY2lwZSk7XG4gICAgfVxuICB9XG5cbiAgYWRkVG9SZWNpcGVzVG9Db29rKHJlY2lwZSkge1xuICAgIGlmICghdGhpcy5yZWNpcGVzVG9Db29rLmluY2x1ZGVzKHJlY2lwZSkpIHtcbiAgICAgIHRoaXMucmVjaXBlc1RvQ29vay5wdXNoKHJlY2lwZSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlRnJvbVJlY2lwZXNUb0Nvb2socmVjaXBlKSB7XG4gICAgY29uc3QgaSA9IHRoaXMucmVjaXBlc1RvQ29vay5pbmRleE9mKHJlY2lwZSk7XG4gICAgdGhpcy5yZWNpcGVzVG9Db29rLnNwbGljZShpLCAxKTtcbiAgfVxuXG4gIHJlbW92ZVBhbnRyeUluZ3JpZGllbnRzKHJlY2lwZSkge1xuICAgIHJlY2lwZS5pbmdyZWRpZW50cy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBmZXRjaCgnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL3doYXRzLWNvb2tpbi8xOTExL3VzZXJzL3djVXNlcnNEYXRhJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIFwidXNlcklEXCI6IHRoaXMuaWQsXG4gICAgICAgICAgXCJpbmdyZWRpZW50SURcIjogaXRlbS5pZCxcbiAgICAgICAgICBcImluZ3JlZGllbnRNb2RpZmljYXRpb25cIjogLShpdGVtLnF1YW50aXR5LmFtb3VudClcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4odGhpcy51cGRhdGVVc2VyUGFudHJ5KCkpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICAgICAgc2V0VGltZW91dCh0aGlzLnVwZGF0ZVVzZXJQYW50cnkoKSwgNDAwMClcbiAgICB9KTtcblxuICB9XG5cbiAgYWRkTmVlZGVkUGFudHJ5SW5ncmlkaWVudHMocmVjaXBlKSB7XG4gICAgdGhpcy5jaGVja0hvd011Y2hNb3JlKHJlY2lwZSkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgZmV0Y2goJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS93aGF0cy1jb29raW4vMTkxMS91c2Vycy93Y1VzZXJzRGF0YScsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBcInVzZXJJRFwiOiB0aGlzLmlkLFxuICAgICAgICAgIFwiaW5ncmVkaWVudElEXCI6IGl0ZW0uaWQsXG4gICAgICAgICAgXCJpbmdyZWRpZW50TW9kaWZpY2F0aW9uXCI6IGl0ZW0ucXVhbnRpdHlOZWVkZWRcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4odGhpcy51cGRhdGVVc2VyUGFudHJ5KCkpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlVXNlclBhbnRyeSgpIHtcbiAgICBmZXRjaCgnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL3doYXRzLWNvb2tpbi8xOTExL3VzZXJzL3djVXNlcnNEYXRhJylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgbGV0IHBhbnRyeSA9IG5ldyBQYW50cnkocmVzcG9uc2Uud2NVc2Vyc0RhdGFbdGhpcy5pZCAtIDFdLnBhbnRyeSlcbiAgICAgICAgdGhpcy5wYW50cnkgPSBwYW50cnlcbiAgICAgICAgdGhpcy5wYW50cnkuY29tcGlsZVBhbnRyeSh0aGlzLmluZ3JlZGllbnRzRGF0YSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxuICB9XG5cbiAgcmVtb3ZlRnJvbUZhdm9yaXRlcyhyZWNpcGUpIHtcbiAgICBjb25zdCBpID0gdGhpcy5mYXZvcml0ZVJlY2lwZXMuaW5kZXhPZihyZWNpcGUpO1xuICAgIHRoaXMuZmF2b3JpdGVSZWNpcGVzLnNwbGljZShpLCAxKTtcbiAgfVxuXG4gIGZpbHRlckZhdm9yaXRlcyh0YWcpIHtcbiAgICByZXR1cm4gdGhpcy5mYXZvcml0ZVJlY2lwZXMuZmlsdGVyKHJlY2lwZSA9PiB7XG4gICAgICByZXR1cm4gcmVjaXBlLnRhZ3MuaW5jbHVkZXModGFnKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZpbmRGYXZvcml0ZXMoc3RyZ1RvU3JjaCkge1xuICAgIHJldHVybiB0aGlzLmZhdm9yaXRlUmVjaXBlcy5maWx0ZXIocmVjaXBlID0+IHtcbiAgICAgIHJldHVybiByZWNpcGUubmFtZS5pbmNsdWRlcyhzdHJnVG9TcmNoKSB8fFxuICAgICAgICByZWNpcGUuaW5ncmVkaWVudHMuZmluZChpbmdyZWRpZW50ID0+IHtcbiAgICAgICAgICByZXR1cm4gaW5ncmVkaWVudC5uYW1lLmluY2x1ZGVzKHN0cmdUb1NyY2gpXG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZmluZE1pc3NpbmdJbmdyZWRpZW50cyhyZWNpcGUpIHtcbiAgICByZXR1cm4gcmVjaXBlLmluZ3JlZGllbnRzLnJlZHVjZSgobm90UHJlc2VudCwgaW5ncmVkaWVudCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnBhbnRyeS51c2VySW5ncmVkaWVudHNbaW5ncmVkaWVudC5pZF0gfHwgaW5ncmVkaWVudC5xdWFudGl0eS5hbW91bnQgPiB0aGlzLnBhbnRyeS51c2VySW5ncmVkaWVudHNbaW5ncmVkaWVudC5pZF0pIHtcbiAgICAgICAgbm90UHJlc2VudC5wdXNoKGluZ3JlZGllbnQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5vdFByZXNlbnQ7XG4gICAgfSwgW10pO1xuICB9XG5cbiAgY2hlY2tQYW50cnlJbmdyZWRpZW50cyhyZWNpcGUpIHtcbiAgICB0aGlzLnBhbnRyeS5jb21waWxlUGFudHJ5KHRoaXMuaW5ncmVkaWVudHNEYXRhKTtcbiAgICBsZXQgbWlzc2luZ0luZ3JlZGllbnRzID0gdGhpcy5maW5kTWlzc2luZ0luZ3JlZGllbnRzKHJlY2lwZSlcbiAgICBpZiAobWlzc2luZ0luZ3JlZGllbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuICdZb3UgaGF2ZSB0aGUgaW5ncmVkaWVudHMhJztcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IG1pc3NpbmcgPSBtaXNzaW5nSW5ncmVkaWVudHMubGVuZ3RoO1xuICAgICAgcmV0dXJuIGBZb3Ugc3RpbGwgbmVlZCAke21pc3Npbmd9IG1vcmUgaW5ncmVkaWVudHMuYDtcbiAgICB9XG4gIH1cblxuICBjaGVja0hvd011Y2hNb3JlKHJlY2lwZSkge1xuICAgIGxldCBtaXNzaW5nSW5ncmVkaWVudHMgPSB0aGlzLmZpbmRNaXNzaW5nSW5ncmVkaWVudHMocmVjaXBlKTtcbiAgICBsZXQgZGlmZmVyZW5jZSA9IG1pc3NpbmdJbmdyZWRpZW50cy5tYXAoaW5ncmVkaWVudCA9PiB7XG4gICAgICBsZXQgbmFtZSA9IHJlY2lwZS5pbmdyZWRpZW50c0RhdGEuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGluZ3JlZGllbnQuaWQpO1xuICAgICAgbGV0IG5lZWRlZEluZyA9IHtcbiAgICAgICAgaWQ6IGluZ3JlZGllbnQuaWQsXG4gICAgICAgIGNvc3Q6IDAsXG4gICAgICAgIG5hbWU6IG5hbWUubmFtZSxcbiAgICAgICAgdW5pdDogaW5ncmVkaWVudC5xdWFudGl0eS51bml0LFxuICAgICAgICBxdWFudGl0eU5lZWRlZDogcGFyc2VGbG9hdChpbmdyZWRpZW50LnF1YW50aXR5LmFtb3VudC50b0ZpeGVkKDIpKVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMucGFudHJ5LnVzZXJJbmdyZWRpZW50c1tpbmdyZWRpZW50LmlkXSkge1xuICAgICAgICBuZWVkZWRJbmcucXVhbnRpdHlOZWVkZWQgPSBwYXJzZUZsb2F0KGluZ3JlZGllbnQucXVhbnRpdHkuYW1vdW50IC0gdGhpcy5wYW50cnkudXNlckluZ3JlZGllbnRzW2luZ3JlZGllbnQuaWRdLnRvRml4ZWQoMikpXG4gICAgICB9XG4gICAgICBsZXQgaW5ncmVkaWVudEl0ZW0gPSByZWNpcGUuaW5ncmVkaWVudHNEYXRhLmZpbmQoaXRlbSA9PiBpbmdyZWRpZW50LmlkID09PSBpdGVtLmlkKVxuICAgICAgbmVlZGVkSW5nLmNvc3QgPSAobmVlZGVkSW5nLnF1YW50aXR5TmVlZGVkICogaW5ncmVkaWVudEl0ZW0uZXN0aW1hdGVkQ29zdEluQ2VudHMpIC8gMTAwO1xuICAgICAgcmV0dXJuIG5lZWRlZEluZztcbiAgICB9KVxuICAgIHJldHVybiBkaWZmZXJlbmNlO1xuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/styles.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/styles.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "html {\n  background-color: #37515C;\n  border: 2px solid #000;\n  height: 100vh;\n  width: 100vw; }\n\nbody {\n  box-sizing: border-box;\n  font-family: 'Open Sans', sans-serif;\n  margin: auto; }\n\nmain {\n  background-color: #37515C;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center; }\n\n.main-header {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  height: auto;\n  width: 100%;\n  background-color: #EBF5EE;\n  border: 2px solid #000; }\n\nh1 {\n  font-size: 255%;\n  text-align: center;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-top: 10px;\n  width: 30%; }\n\nnav {\n  display: flex;\n  padding: 10px; }\n\n.navButton {\n  font-size: 130%;\n  color: #000 !important;\n  background-color: #EBF5EE;\n  border-left: 1px solid #000;\n  border-right: 1px solid #000;\n  margin: 1% 20px 1% 1%; }\n  .navButton:hover {\n    background-color: #cff2da; }\n  .navButton:active {\n    background-color: #C3C2C6; }\n\n.lower-header {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row; }\n\n.greeting {\n  font-size: 30px;\n  color: #EBF5EE;\n  padding-left: 15px;\n  margin-top: 10px; }\n\n.search-area {\n  display: flex;\n  justify-content: flex-end;\n  flex-direction: row; }\n\n.search-bar {\n  max-height: 6vh;\n  margin: 5px;\n  padding: 3px; }\n\n.search-image {\n  background-color: #EBF5EE;\n  border: 1px solid #000;\n  width: 20%;\n  margin-right: 0; }\n  .search-image:hover {\n    background-color: #cff2da; }\n  .search-image:active {\n    background-color: #C3C2C6; }\n\n.search-input {\n  border: 1px solid #000;\n  font-size: 100%;\n  min-width: 90%; }\n\n.all-cards {\n  display: grid;\n  grid-gap: 30px;\n  grid-template-columns: repeat(4, 1fr);\n  padding: 30px;\n  width: 95.5vw; }\n\n.hidden {\n  display: none; }\n\nimg {\n  cursor: pointer; }\n\n.card-button {\n  border: 1px solid #000;\n  height: 27px;\n  margin: 3px;\n  cursor: pointer; }\n  .card-button:hover {\n    background-color: #cff2da; }\n  .card-button:active {\n    background-color: #C3C2C6; }\n\n.add-button {\n  background-color: #EBF5EE;\n  display: flex;\n  width: 12%; }\n\n.add {\n  width: 90%; }\n\n.favorite {\n  background-color: #EBF5EE;\n  background-repeat: no-repeat;\n  background-position: center;\n  width: 13%;\n  background-image: url(\"https://image.flaticon.com/icons/svg/149/149222.svg\"); }\n\n.card {\n  background-color: #D7F2FE;\n  border: 3px solid #000;\n  width: 100%; }\n\n.card-header {\n  background-color: #EBF5EE;\n  border-bottom: 1px solid #000;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row; }\n\n.all {\n  grid-gap: 0;\n  grid-template-columns: repeat(1, 1fr); }\n\n.all-recipe-info,\nol {\n  font-size: 150%;\n  color: #EBF5EE;\n  width: 100%; }\n\nh3 {\n  font-size: 150%;\n  text-align: center;\n  background-color: #EBF5EE;\n  border-bottom: 1px solid #000;\n  margin: 0;\n  font-weight: normal;\n  padding-top: 5px;\n  padding-bottom: 5px; }\n\n.recipe-name {\n  background-color: #EBF5EE;\n  border-bottom: 1px solid #000;\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  font-size: 150%;\n  text-align: center; }\n\n.card-picture {\n  height: 200px;\n  width: 94%;\n  border: 1px solid #000;\n  margin: 10px 3% 8px 2.6%; }\n  .card-picture:hover {\n    opacity: 0.7; }\n  .card-picture:active {\n    border: 2px solid #000; }\n\n.wrap {\n  background-color: inherit;\n  height: inherit;\n  border: 0; }\n\n.favorite-active {\n  background-image: url(\"https://image.flaticon.com/icons/svg/148/148841.svg\");\n  background-repeat: no-repeat; }\n\n.display-recipe {\n  display: grid;\n  grid-gap: 7px;\n  grid-template-columns: 0.6fr 1fr;\n  grid-template-rows: 1fr 3fr;\n  margin: 15px; }\n\n.display-recipe-info {\n  grid-column: 1;\n  grid-row: 0.5; }\n\n.recipe-ingredients {\n  justify-self: center;\n  grid-column: 2;\n  grid-row: 1;\n  overflow: scroll;\n  height: inherit;\n  font-size: 15px;\n  color: #EBF5EE; }\n\n.recipe-ingredients-title {\n  margin-top: 0;\n  font-size: 20px; }\n\n.recipe-instructions {\n  grid-column: 1/span 2;\n  grid-row: 2;\n  font-size: 20px;\n  color: #EBF5EE;\n  max-width: 90vw;\n  margin-top: 100px; }\n\n.to-cook-greeting {\n  color: #EBF5EE; }\n\n.close-button {\n  background-color: #EBF5EE;\n  background-repeat: no-repeat;\n  background-position: center;\n  width: 13%;\n  background-image: url(\"https://www.flaticon.com/svg/static/icons/svg/446/446091.svg\");\n  font-weight: bold; }\n\n.ing-cost,\n.needed-ings,\n.pantry-buttons {\n  margin-left: 10px; }\n\n@media (max-width: 825px) {\n  main {\n    width: 95%; }\n  .all-cards {\n    display: grid;\n    grid-gap: 30px;\n    grid-template-columns: repeat(3, 1fr);\n    padding: 30px 0 30px 30px;\n    width: 95.5vw; }\n  .display-recipe {\n    display: flex;\n    justify-content: space-around;\n    flex-direction: column;\n    align-items: center; }\n  .recipe-instructions {\n    margin-top: 0; } }\n\n@media (max-width: 600px) {\n  .all-cards {\n    display: grid;\n    grid-gap: 30px;\n    grid-template-columns: repeat(2, 1fr);\n    padding: 30px 0 30px 30px;\n    width: 95.5vw; }\n  .display-recipe {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center; }\n  .search-image {\n    display: none; } }\n\n@media (max-width: 450px) {\n  .lower-header,\n  .main-header {\n    flex-direction: column;\n    align-items: center; }\n  .search-input {\n    min-width: 80vw; }\n  .all-cards {\n    display: grid;\n    grid-gap: 30px;\n    grid-template-columns: repeat(1, 1fr);\n    padding: 30px 0 30px 30px;\n    width: 95.5vw; }\n  .card-button {\n    height: auto; }\n  .to-cook {\n    display: flex;\n    flex-direction: column;\n    align-items: center; }\n  .card {\n    max-width: 95%; } }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/cookbook.js":
/*!*************************!*\
  !*** ./src/cookbook.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Cookbook {
  constructor(data) {
    this.recipes = data;
  }

  findRecipes(searchText) {
    return this.recipes.filter((recipe)=>{
      let ingredientNames = recipe.ingredients.map((ingredient)=>{
        return ingredient.name
      })
      return recipe.name.toLowerCase().includes(searchText) ||
      recipe.tags.includes(searchText) ||
      ingredientNames.includes(searchText)
    })
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Cookbook);


/***/ }),

/***/ "./src/css/styles.scss":
/*!*****************************!*\
  !*** ./src/css/styles.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/domUpdates.js":
/*!***************************!*\
  !*** ./src/domUpdates.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pantry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pantry */ "./src/pantry.js");
/* harmony import */ var _recipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe */ "./src/recipe.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./src/user.js");
/* harmony import */ var _cookbook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cookbook */ "./src/cookbook.js");






let domUpdates = {

  users: [{}],
  recipeData: [{}],
  ingredientsData: [{}],
  user: {},
  cookbook: null,

  getWhatsCookingData: () => {
    Promise.all([
      fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/users/wcUsersData'),
      fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/recipes/recipeData'),
      fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/ingredients/ingredientsData')
    ])
      .then(responses => Promise.all(responses.map(response => response.json())))
      .then(responses => {
        domUpdates.users = responses[0].wcUsersData;
        domUpdates.recipeData = responses[1].recipeData;
        domUpdates.ingredientsData = responses[2].ingredientsData;
        domUpdates.createDataModel();
        domUpdates.updateDisplay();
      })
      .catch(error => console.log(error))
  },

  createDataModel: () => {
    let pantry = new _pantry__WEBPACK_IMPORTED_MODULE_0__["default"](domUpdates.users[0].pantry);
    domUpdates.user = new _user__WEBPACK_IMPORTED_MODULE_2__["default"](domUpdates.users[0], pantry, domUpdates.ingredientsData);
    let recipeDeck = domUpdates.recipeData.map(recipe => {
      return recipe = new _recipe__WEBPACK_IMPORTED_MODULE_1__["default"](recipe, domUpdates.ingredientsData);
    })
    domUpdates.cookbook = new _cookbook__WEBPACK_IMPORTED_MODULE_3__["default"](recipeDeck);
  },

  updateDisplay: () => {
    domUpdates.greetUser();
    domUpdates.populateCards(domUpdates.cookbook.recipes);
  },

  greetUser: () => {
    const welcomeMessage = document.querySelector('.greeting');
    welcomeMessage.innerText = `Welcome ${domUpdates.user.name}!`;
  },

  populateCards: (recipes) => {
    const cardArea = document.querySelector('#main-section');
    cardArea.classList = 'all-cards';
    cardArea.innerHTML = '';
    recipes.forEach(recipe => {
      cardArea.insertAdjacentHTML('afterbegin', domUpdates.constructCard(recipe))
    });
  },

  constructCard: (recipe) => {
    let classList
    if (domUpdates.user.favoriteRecipes.includes(recipe)) {
      classList = 'favorite card-button favorite-active'
    } else {
      classList = 'favorite card-button'
    }
    return `<div class='card ${recipe.id}'>
    <header class='card-header ${recipe.id}'>
      <label for='add-button' class='hidden'>Click to add recipe</label>
      <button aria-label='add-button' class='add-button card-button ${recipe.id}'>
        <img class='add ${recipe.id} add-button' src='https://image.flaticon.com/icons/svg/32/32339.svg' alt='Add to
        recipes to cook'>
      </button>
      <label for='favorite-button' class='hidden'>Click to favorite recipe</label>
      <button aria-label='favorite-button' class='${classList} favorite${recipe.id} ${recipe.id}'>
      </button>
    </header>
    <span class='recipe-name ${recipe.id}'>${recipe.name}</span>
      <button aria-label='recipe-info' class='card-picture ${recipe.id} wrap'>
        <img tabindex='0' class='card-picture ${recipe.id}'src='${recipe.image}' alt='Food from recipe'>
      </button>
    </div>`
  },

  findSpecificRecipe: (event) => {
    return domUpdates.cookbook.recipes.find(recipe => {
      if (event.target.classList.contains(recipe.id)) {
        return recipe;
      }
    })
  },

  favoriteCard: (event) => {
    const showFavoritesButton = document.querySelector('.view-favorites');
    let specificRecipe = domUpdates.findSpecificRecipe(event);
    if (!event.target.classList.contains('favorite-active')) {
      showFavoritesButton.innerHTML = 'View Favorites';
      domUpdates.user.addToFavorites(specificRecipe);
    } else if (event.target.classList.contains('favorite-active')) {
      domUpdates.user.removeFromFavorites(specificRecipe)
    }
    event.target.classList.toggle('favorite-active');
  },

  viewFavorites: () => {
    const searchBar = document.querySelector('.search-area');
    searchBar.classList.add('hidden')
    const showFavoritesButton = document.querySelector('.view-favorites');
    const cardArea = document.querySelector('#main-section');
    cardArea.classList = 'all-cards';
    if (!domUpdates.user.favoriteRecipes.length) {
      showFavoritesButton.innerHTML = 'You have no favorites!';
      domUpdates.populateCards(domUpdates.cookbook.recipes);
      return
    } else {
      showFavoritesButton.innerHTML = 'Refresh Favorites'
      cardArea.innerHTML = '';
      domUpdates.user.favoriteRecipes.forEach(recipe => {
        cardArea.insertAdjacentHTML('afterbegin', domUpdates.constructCard(recipe))
      })
    }
  },

  addToToCook: (event) => {
    const showToCookButton = document.querySelector('.to-cook');
    let specificRecipe = domUpdates.findSpecificRecipe(event);
    if (!event.target.classList.contains('add-active')) {
      showToCookButton.innerText = 'To Cook'
      alert(domUpdates.user.checkPantryIngredients(specificRecipe));
      domUpdates.user.addToRecipesToCook(specificRecipe);
    } else if (event.target.classList.contains('add-active')) {
      domUpdates.user.removeFromRecipesToCook(specificRecipe)
    }
    event.target.classList.toggle('add-active');
  },

  displayToCookCards: () => {
    const searchBar = document.querySelector('.search-area');
    searchBar.classList.add('hidden')
    const cardArea = document.querySelector('#main-section');
    cardArea.classList = '';
    cardArea.innerHTML =
      `<section class='to-cook'>
        <h1 class='to-cook-greeting'>Recipes To Cook</h1>
        <div class='card-section all-cards'>
        </div>
      </section>`
    let cardSection = document.querySelector('.card-section')
    domUpdates.user.recipesToCook.forEach(recipe => {
      let values = domUpdates.user.checkHowMuchMore(recipe).map(obj => {
        return `${obj.quantityNeeded} ${obj.unit} more ${obj.name}`;
      });
      let neededCost = domUpdates.user.checkHowMuchMore(recipe).reduce((total, ingredient) => {
        return total += ingredient.cost;
      }, 0);
      cardSection.insertAdjacentHTML('beforeend', `<div class='card ${recipe.id}'>
    <header class='card-header ${recipe.id}'>
      <label for='close-button' class='hidden'></label>
      <button aria-label='close-button' class='close-button card-button ${recipe.id}'>
        <img class='close-button ${recipe.id}' src='https://www.flaticon.com/svg/static/icons/svg/446/446091.svg' alt='remove from recipes to cook'>
      </button>
      <label for='favorite-button' class='hidden'>Click to favorite recipe</label>
      <button aria-label='favorite-button' class='favorite card-button favorite${recipe.id} ${recipe.id}'>
      </button>
    </header>
      <h3>${recipe.name}</h3>
      <img tabindex='0' class='card-picture ${recipe.id}'
      src='${recipe.image}' alt='Food from recipe'>
      <div class = "pantry-buttons">
        <button type="button" name="Add Needed Ingredients" class="bought-ingredients bought-ingredients${recipe.id} ${recipe.id}">Add Needed Ingredients</button>
        <button type="button" name="Have Cooked" class="have-cooked have-cooked${recipe.id} ${recipe.id}">Have Cooked</button>
      </div>
      <p class='needed-ings'>Ingredients Still Needed:</p>
      <ul >
      <li>${values.join('</li><li>')}</li>
      </ul>
      <p class='ing-cost'>Cost to Still Get:$${neededCost}</p>
    </div>`);
    });
  },

  showToCookRecipes: () => {
    const showToCookButton = document.querySelector('.to-cook');
    if (!domUpdates.user.recipesToCook.length) {
      showToCookButton.innerText = 'You have no saved Recipes!';
      domUpdates.populateCards(domUpdates.cookbook.recipes);
      return
    } else {
      domUpdates.displayToCookCards();
    }
  },

  removeFromToCook: () => {
    let specificRecipe = domUpdates.cookbook.recipes.find(recipe => {
      if (event.target.classList.contains(recipe.id)) {
        return recipe;
      }
    })
    domUpdates.user.removeFromRecipesToCook(specificRecipe);
    domUpdates.displayToCookCards();
  },

  displayDirections: (event) => {
    const searchBar = document.querySelector('.search-area');
    searchBar.classList.add('hidden')
    const cardArea = document.querySelector('#main-section');
    cardArea.classList = 'recipe-directions';
    let specificRecipe = domUpdates.findSpecificRecipe(event);
    let cost = specificRecipe.calculateCost();
    cardArea.innerHTML = '';
    let neededIngredients = [];
    specificRecipe.ingredients.forEach(ingredient => {
      let name = specificRecipe.ingredientsData.find(item => item.id === ingredient.id).name
      neededIngredients.push(`${ingredient.quantity.amount.toFixed(2)} ${ingredient.quantity.unit} ${name}`)
    })
    let neededSteps = [];
    specificRecipe.instructions.forEach(step => {
      neededSteps.push(`${step.number}. ${step.instruction} `)
    })
    cardArea.innerHTML = `<section class='display-recipe'>
    <div class='display-recipe-info'>
      <h3>${specificRecipe.name}</h3>
      <img class='card-picture' src='${specificRecipe.image}' alt='Recipe image for ${specificRecipe.name}'>
    </div>
    <div class='recipe-ingredients'>
    <h5 class='recipe-ingredients-title'>You will need: </h5>
    <ul>
    <li>${neededIngredients.join('</li><li>')}</li>
    </ul>
    </div>
    <div class='recipe-instructions'>
    <h5>Instructions: </h5>
    <ul class='instruction-list' style='list-style-type:none;'>
    <li>${neededSteps.join('</li><li>')}</li>
    </ul>
    <h5>This recipe generally costs: $${cost} </h5>
    </div>
    </section>`;
  },

  filterRecipes: () => {
    const cardArea = document.querySelector('.all-cards');
    var searchTerm = event.target.value.toLowerCase();
    if (searchTerm !== '') {
      cardArea.innerHTML = '';
      domUpdates.displayFilteredRecipes(searchTerm);
    } else {
      domUpdates.populateCards(domUpdates.cookbook.recipes);
    }
  },

  displayFilteredRecipes: (searchTerm) => {
    domUpdates.populateCards(domUpdates.cookbook.findRecipes(searchTerm));
  },

  haveCookedRecipe: (event) => {
    let specificRecipe = domUpdates.findSpecificRecipe(event);
    const haveCookedButton = document.querySelector(`.have-cooked${specificRecipe.id}`);
    if (domUpdates.user.checkPantryIngredients(specificRecipe) !== 'You have the ingredients!') {
      alert("You don't have what you need yet")
    } else {
      domUpdates.user.removePantryIngridients(specificRecipe)
      haveCookedButton.disabled = true;
    }
  },

  buyIngredients: (event) => {
    let specificRecipe = domUpdates.findSpecificRecipe(event);
    const buyButton = document.querySelector(`.bought-ingredients${specificRecipe.id}`)
    domUpdates.user.addNeededPantryIngridients(specificRecipe)
    buyButton.disabled = true;
  },

};

/* harmony default export */ __webpack_exports__["default"] = (domUpdates);


/***/ }),

/***/ "./src/pantry.js":
/*!***********************!*\
  !*** ./src/pantry.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Pantry {
  constructor(userPantry) {
    this.userPantry = userPantry;
    this.userIngredients = {};
  }

  compilePantry() {
    this.userIngredients = this.userPantry.reduce((pantry, ingredient) => {
      if (!pantry[ingredient.ingredient]) {
        pantry[ingredient.ingredient] = ingredient.amount;
      } else {
        pantry[ingredient.ingredient] += ingredient.amount;
      }
      return pantry;
    }, {});
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Pantry);


/***/ }),

/***/ "./src/recipe.js":
/*!***********************!*\
  !*** ./src/recipe.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Recipe {
  constructor(recipe, ingredientsData) {
    this.name = recipe.name;
    this.id = recipe.id;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
    this.tags = recipe.tags;
    this.ingredientsData = ingredientsData;
    this.image = recipe.image;
  }

  calculateCost() {
    let costCounter = 0;
    this.ingredients.forEach(ingredient => {
      this.ingredientsData.find(specificIngredient => {
        if (specificIngredient.id === ingredient.id) {
          costCounter += (Number(specificIngredient.estimatedCostInCents) *
          Number(ingredient.quantity.amount))
        }
      })
    });
    return parseFloat((costCounter / 100).toFixed(2));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Recipe);


/***/ }),

/***/ "./src/scripts.js":
/*!************************!*\
  !*** ./src/scripts.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/styles.scss */ "./src/css/styles.scss");
/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_styles_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _domUpdates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domUpdates */ "./src/domUpdates.js");




const showFavoritesButton = document.querySelector('.view-favorites');
const homeButton = document.querySelector('.home')
const cardArea = document.querySelector('.all-cards');
const searchBar = document.querySelector('.search-input');
const showToCookButton = document.querySelector('.to-cook');

const cardButtonConditionals = (event) => {
  if (event.target.classList.contains('favorite')) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].favoriteCard(event);
  } else if (event.target.classList.contains('add-button')) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].addToToCook(event);
  } else if (event.target.classList.contains('card-picture')) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].displayDirections(event);
  } else if (event.target.classList.contains('home')) {
    const searchBar = document.querySelector('.search-area');
    searchBar.classList.remove('hidden')
    showToCookButton.innerHTML = 'To Cook';
    showFavoritesButton.innerHTML = 'View Favorites';
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].populateCards(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].cookbook.recipes);
  } else if (event.target.classList.contains('close-button')) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].removeFromToCook(event);
  } else if (event.target.classList.contains('have-cooked')) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].haveCookedRecipe(event);
  } else if (event.target.classList.contains('bought-ingredients')) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].buyIngredients(event);
  }
}

window.onload = _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].getWhatsCookingData()
homeButton.addEventListener('click', cardButtonConditionals);
cardArea.addEventListener('click', cardButtonConditionals);
showFavoritesButton.addEventListener('click', _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].viewFavorites);
showToCookButton.addEventListener('click', _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].showToCookRecipes);
searchBar.addEventListener('keyup', _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].filterRecipes);


/***/ }),

/***/ "./src/user.js":
/*!*********************!*\
  !*** ./src/user.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pantry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pantry */ "./src/pantry.js");


class User {
  constructor(user, pantry, ingredientsData) {
    this.id = user.id;
    this.name = user.name;
    this.pantry = pantry;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
    this.ingredientsData = ingredientsData;
  }

  addToFavorites(recipe) {
    if (!this.favoriteRecipes.includes(recipe)) {
      this.favoriteRecipes.push(recipe);
    }
  }

  addToRecipesToCook(recipe) {
    if (!this.recipesToCook.includes(recipe)) {
      this.recipesToCook.push(recipe);
    }
  }

  removeFromRecipesToCook(recipe) {
    const i = this.recipesToCook.indexOf(recipe);
    this.recipesToCook.splice(i, 1);
  }

  removePantryIngridients(recipe) {
    recipe.ingredients.forEach((item) => {
      fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/users/wcUsersData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "userID": this.id,
          "ingredientID": item.id,
          "ingredientModification": -(item.quantity.amount)
        })
      })
        .then(response => response.json())
        .then(this.updateUserPantry())
        .catch(error => console.log(error));
      setTimeout(this.updateUserPantry(), 4000)
    });

  }

  addNeededPantryIngridients(recipe) {
    this.checkHowMuchMore(recipe).forEach((item) => {
      fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/users/wcUsersData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "userID": this.id,
          "ingredientID": item.id,
          "ingredientModification": item.quantityNeeded
        })
      })
        .then(response => response.json())
        .then(this.updateUserPantry())
        .catch(error => console.log(error));
    });
  }

  updateUserPantry() {
    fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/users/wcUsersData')
      .then(response => response.json())
      .then(response => {
        let pantry = new _pantry__WEBPACK_IMPORTED_MODULE_0__["default"](response.wcUsersData[this.id - 1].pantry)
        this.pantry = pantry
        this.pantry.compilePantry(this.ingredientsData)
      })
      .catch(error => console.log(error))
  }

  removeFromFavorites(recipe) {
    const i = this.favoriteRecipes.indexOf(recipe);
    this.favoriteRecipes.splice(i, 1);
  }

  filterFavorites(tag) {
    return this.favoriteRecipes.filter(recipe => {
      return recipe.tags.includes(tag);
    });
  }

  findFavorites(strgToSrch) {
    return this.favoriteRecipes.filter(recipe => {
      return recipe.name.includes(strgToSrch) ||
        recipe.ingredients.find(ingredient => {
          return ingredient.name.includes(strgToSrch)
        });
    });
  }

  findMissingIngredients(recipe) {
    return recipe.ingredients.reduce((notPresent, ingredient) => {
      if (!this.pantry.userIngredients[ingredient.id] || ingredient.quantity.amount > this.pantry.userIngredients[ingredient.id]) {
        notPresent.push(ingredient);
      }
      return notPresent;
    }, []);
  }

  checkPantryIngredients(recipe) {
    this.pantry.compilePantry(this.ingredientsData);
    let missingIngredients = this.findMissingIngredients(recipe)
    if (missingIngredients.length === 0) {
      return 'You have the ingredients!';
    } else {
      let missing = missingIngredients.length;
      return `You still need ${missing} more ingredients.`;
    }
  }

  checkHowMuchMore(recipe) {
    let missingIngredients = this.findMissingIngredients(recipe);
    let difference = missingIngredients.map(ingredient => {
      let name = recipe.ingredientsData.find(item => item.id === ingredient.id);
      let neededIng = {
        id: ingredient.id,
        cost: 0,
        name: name.name,
        unit: ingredient.quantity.unit,
        quantityNeeded: parseFloat(ingredient.quantity.amount.toFixed(2))
      }
      if (this.pantry.userIngredients[ingredient.id]) {
        neededIng.quantityNeeded = parseFloat(ingredient.quantity.amount - this.pantry.userIngredients[ingredient.id].toFixed(2))
      }
      let ingredientItem = recipe.ingredientsData.find(item => ingredient.id === item.id)
      neededIng.cost = (neededIng.quantityNeeded * ingredientItem.estimatedCostInCents) / 100;
      return neededIng;
    })
    return difference;
  }
}


/* harmony default export */ __webpack_exports__["default"] = (User);


/***/ }),

/***/ 0:
/*!***********************************************!*\
  !*** multi ./src/scripts.js ./dist/bundle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/nathanielmillard/Turing/Mod_2/whatchaCookin/src/scripts.js */"./src/scripts.js");
module.exports = __webpack_require__(/*! /Users/nathanielmillard/Turing/Mod_2/whatchaCookin/dist/bundle.js */"./dist/bundle.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb29rYm9vay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3N0eWxlcy5zY3NzPzEzYjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbVVwZGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVjaXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy91c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtR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LE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztB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Q0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwrQkFBK0IsUUFBUTtBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7QUFHZSxtRUFBSSxFQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4vKioqKioqLyBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vKioqKioqLyBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuLyoqKioqKi8gXHRcdHJldHVybiBucztcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovICh7XG5cbi8qKiovIFwiLi9kaXN0L2J1bmRsZS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vZGlzdC9idW5kbGUuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG4vKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLyoqKioqKi8gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbnM7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoe1xuXG4vKioqLyBcIi4vZGlzdC9idW5kbGUuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL2Rpc3QvYnVuZGxlLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyAwOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiBtdWx0aSAuL3NyYy9zY3JpcHQuanMgLi9kaXN0L2J1bmRsZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4hKGZ1bmN0aW9uIHdlYnBhY2tNaXNzaW5nTW9kdWxlKCkgeyB2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnLi9zcmMvc2NyaXB0LmpzJ1wiKTsgZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnOyB0aHJvdyBlOyB9KCkpO1xubW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAvVXNlcnMvbmF0aGFuaWVsbWlsbGFyZC9UdXJpbmcvTW9kXzIvd2hhdGNoYUNvb2tpbi9kaXN0L2J1bmRsZS5qcyAqL1wiLi9kaXN0L2J1bmRsZS5qc1wiKTtcblxuXG4vKioqLyB9KVxuXG4vKioqKioqLyB9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OHZkMlZpY0dGamF5OWliMjkwYzNSeVlYQWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdFJRVUZCTzFGQlEwRTdPMUZCUlVFN1VVRkRRVHM3VVVGRlFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUczdVVUZGUVR0UlFVTkJPenRSUVVWQk8xRkJRMEU3TzFGQlJVRTdVVUZEUVR0UlFVTkJPenM3VVVGSFFUdFJRVU5CT3p0UlFVVkJPMUZCUTBFN08xRkJSVUU3VVVGRFFUdFJRVU5CTzFGQlEwRXNNRU5CUVRCRExHZERRVUZuUXp0UlFVTXhSVHRSUVVOQk96dFJRVVZCTzFGQlEwRTdVVUZEUVR0UlFVTkJMSGRFUVVGM1JDeHJRa0ZCYTBJN1VVRkRNVVU3VVVGRFFTeHBSRUZCYVVRc1kwRkJZenRSUVVNdlJEczdVVUZGUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFc2VVTkJRWGxETEdsRFFVRnBRenRSUVVNeFJTeG5TRUZCWjBnc2JVSkJRVzFDTEVWQlFVVTdVVUZEY2trN1VVRkRRVHM3VVVGRlFUdFJRVU5CTzFGQlEwRTdVVUZEUVN3eVFrRkJNa0lzTUVKQlFUQkNMRVZCUVVVN1VVRkRka1FzYVVOQlFXbERMR1ZCUVdVN1VVRkRhRVE3VVVGRFFUdFJRVU5CT3p0UlFVVkJPMUZCUTBFc2MwUkJRWE5FTEN0RVFVRXJSRHM3VVVGRmNrZzdVVUZEUVRzN08xRkJSMEU3VVVGRFFTSXNJbVpwYkdVaU9pSmlkVzVrYkdVdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUlnWEhRdkx5QlVhR1VnYlc5a2RXeGxJR05oWTJobFhHNGdYSFIyWVhJZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsY3lBOUlIdDlPMXh1WEc0Z1hIUXZMeUJVYUdVZ2NtVnhkV2x5WlNCbWRXNWpkR2x2Ymx4dUlGeDBablZ1WTNScGIyNGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWh0YjJSMWJHVkpaQ2tnZTF4dVhHNGdYSFJjZEM4dklFTm9aV05ySUdsbUlHMXZaSFZzWlNCcGN5QnBiaUJqWVdOb1pWeHVJRngwWEhScFppaHBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTa2dlMXh1SUZ4MFhIUmNkSEpsZEhWeWJpQnBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTNWxlSEJ2Y25Sek8xeHVJRngwWEhSOVhHNGdYSFJjZEM4dklFTnlaV0YwWlNCaElHNWxkeUJ0YjJSMWJHVWdLR0Z1WkNCd2RYUWdhWFFnYVc1MGJ5QjBhR1VnWTJGamFHVXBYRzRnWEhSY2RIWmhjaUJ0YjJSMWJHVWdQU0JwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYU0E5SUh0Y2JpQmNkRngwWEhScE9pQnRiMlIxYkdWSlpDeGNiaUJjZEZ4MFhIUnNPaUJtWVd4elpTeGNiaUJjZEZ4MFhIUmxlSEJ2Y25Sek9pQjdmVnh1SUZ4MFhIUjlPMXh1WEc0Z1hIUmNkQzh2SUVWNFpXTjFkR1VnZEdobElHMXZaSFZzWlNCbWRXNWpkR2x2Ymx4dUlGeDBYSFJ0YjJSMWJHVnpXMjF2WkhWc1pVbGtYUzVqWVd4c0tHMXZaSFZzWlM1bGVIQnZjblJ6TENCdGIyUjFiR1VzSUcxdlpIVnNaUzVsZUhCdmNuUnpMQ0JmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS1R0Y2JseHVJRngwWEhRdkx5QkdiR0ZuSUhSb1pTQnRiMlIxYkdVZ1lYTWdiRzloWkdWa1hHNGdYSFJjZEcxdlpIVnNaUzVzSUQwZ2RISjFaVHRjYmx4dUlGeDBYSFF2THlCU1pYUjFjbTRnZEdobElHVjRjRzl5ZEhNZ2IyWWdkR2hsSUcxdlpIVnNaVnh1SUZ4MFhIUnlaWFIxY200Z2JXOWtkV3hsTG1WNGNHOXlkSE03WEc0Z1hIUjlYRzVjYmx4dUlGeDBMeThnWlhod2IzTmxJSFJvWlNCdGIyUjFiR1Z6SUc5aWFtVmpkQ0FvWDE5M1pXSndZV05yWDIxdlpIVnNaWE5mWHlsY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YlNBOUlHMXZaSFZzWlhNN1hHNWNiaUJjZEM4dklHVjRjRzl6WlNCMGFHVWdiVzlrZFd4bElHTmhZMmhsWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbU1nUFNCcGJuTjBZV3hzWldSTmIyUjFiR1Z6TzF4dVhHNGdYSFF2THlCa1pXWnBibVVnWjJWMGRHVnlJR1oxYm1OMGFXOXVJR1p2Y2lCb1lYSnRiMjU1SUdWNGNHOXlkSE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ0E5SUdaMWJtTjBhVzl1S0dWNGNHOXlkSE1zSUc1aGJXVXNJR2RsZEhSbGNpa2dlMXh1SUZ4MFhIUnBaaWdoWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dktHVjRjRzl5ZEhNc0lHNWhiV1VwS1NCN1hHNGdYSFJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRzVoYldVc0lIc2daVzUxYldWeVlXSnNaVG9nZEhKMVpTd2daMlYwT2lCblpYUjBaWElnZlNrN1hHNGdYSFJjZEgxY2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUdSbFptbHVaU0JmWDJWelRXOWtkV3hsSUc5dUlHVjRjRzl5ZEhOY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y2lBOUlHWjFibU4wYVc5dUtHVjRjRzl5ZEhNcElIdGNiaUJjZEZ4MGFXWW9kSGx3Wlc5bUlGTjViV0p2YkNBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NnSmlZZ1UzbHRZbTlzTG5SdlUzUnlhVzVuVkdGbktTQjdYRzRnWEhSY2RGeDBUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dWNGNHOXlkSE1zSUZONWJXSnZiQzUwYjFOMGNtbHVaMVJoWnl3Z2V5QjJZV3gxWlRvZ0owMXZaSFZzWlNjZ2ZTazdYRzRnWEhSY2RIMWNiaUJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJQ2RmWDJWelRXOWtkV3hsSnl3Z2V5QjJZV3gxWlRvZ2RISjFaU0I5S1R0Y2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUdOeVpXRjBaU0JoSUdaaGEyVWdibUZ0WlhOd1lXTmxJRzlpYW1WamRGeHVJRngwTHk4Z2JXOWtaU0FtSURFNklIWmhiSFZsSUdseklHRWdiVzlrZFd4bElHbGtMQ0J5WlhGMWFYSmxJR2wwWEc0Z1hIUXZMeUJ0YjJSbElDWWdNam9nYldWeVoyVWdZV3hzSUhCeWIzQmxjblJwWlhNZ2IyWWdkbUZzZFdVZ2FXNTBieUIwYUdVZ2JuTmNiaUJjZEM4dklHMXZaR1VnSmlBME9pQnlaWFIxY200Z2RtRnNkV1VnZDJobGJpQmhiSEpsWVdSNUlHNXpJRzlpYW1WamRGeHVJRngwTHk4Z2JXOWtaU0FtSURoOE1Ub2dZbVZvWVhabElHeHBhMlVnY21WeGRXbHlaVnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NTBJRDBnWm5WdVkzUnBiMjRvZG1Gc2RXVXNJRzF2WkdVcElIdGNiaUJjZEZ4MGFXWW9iVzlrWlNBbUlERXBJSFpoYkhWbElEMGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWgyWVd4MVpTazdYRzRnWEhSY2RHbG1LRzF2WkdVZ0ppQTRLU0J5WlhSMWNtNGdkbUZzZFdVN1hHNGdYSFJjZEdsbUtDaHRiMlJsSUNZZ05Da2dKaVlnZEhsd1pXOW1JSFpoYkhWbElEMDlQU0FuYjJKcVpXTjBKeUFtSmlCMllXeDFaU0FtSmlCMllXeDFaUzVmWDJWelRXOWtkV3hsS1NCeVpYUjFjbTRnZG1Gc2RXVTdYRzRnWEhSY2RIWmhjaUJ1Y3lBOUlFOWlhbVZqZEM1amNtVmhkR1VvYm5Wc2JDazdYRzRnWEhSY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjaWh1Y3lrN1hHNGdYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaHVjeXdnSjJSbFptRjFiSFFuTENCN0lHVnVkVzFsY21GaWJHVTZJSFJ5ZFdVc0lIWmhiSFZsT2lCMllXeDFaU0I5S1R0Y2JpQmNkRngwYVdZb2JXOWtaU0FtSURJZ0ppWWdkSGx3Wlc5bUlIWmhiSFZsSUNFOUlDZHpkSEpwYm1jbktTQm1iM0lvZG1GeUlHdGxlU0JwYmlCMllXeDFaU2tnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1a0tHNXpMQ0JyWlhrc0lHWjFibU4wYVc5dUtHdGxlU2tnZXlCeVpYUjFjbTRnZG1Gc2RXVmJhMlY1WFRzZ2ZTNWlhVzVrS0c1MWJHd3NJR3RsZVNrcE8xeHVJRngwWEhSeVpYUjFjbTRnYm5NN1hHNGdYSFI5TzF4dVhHNGdYSFF2THlCblpYUkVaV1poZFd4MFJYaHdiM0owSUdaMWJtTjBhVzl1SUdadmNpQmpiMjF3WVhScFltbHNhWFI1SUhkcGRHZ2dibTl1TFdoaGNtMXZibmtnYlc5a2RXeGxjMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXVJRDBnWm5WdVkzUnBiMjRvYlc5a2RXeGxLU0I3WEc0Z1hIUmNkSFpoY2lCblpYUjBaWElnUFNCdGIyUjFiR1VnSmlZZ2JXOWtkV3hsTGw5ZlpYTk5iMlIxYkdVZ1AxeHVJRngwWEhSY2RHWjFibU4wYVc5dUlHZGxkRVJsWm1GMWJIUW9LU0I3SUhKbGRIVnliaUJ0YjJSMWJHVmJKMlJsWm1GMWJIUW5YVHNnZlNBNlhHNGdYSFJjZEZ4MFpuVnVZM1JwYjI0Z1oyVjBUVzlrZFd4bFJYaHdiM0owY3lncElIc2djbVYwZFhKdUlHMXZaSFZzWlRzZ2ZUdGNiaUJjZEZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWtLR2RsZEhSbGNpd2dKMkVuTENCblpYUjBaWElwTzF4dUlGeDBYSFJ5WlhSMWNtNGdaMlYwZEdWeU8xeHVJRngwZlR0Y2JseHVJRngwTHk4Z1QySnFaV04wTG5CeWIzUnZkSGx3WlM1b1lYTlBkMjVRY205d1pYSjBlUzVqWVd4c1hHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG04Z1BTQm1kVzVqZEdsdmJpaHZZbXBsWTNRc0lIQnliM0JsY25SNUtTQjdJSEpsZEhWeWJpQlBZbXBsWTNRdWNISnZkRzkwZVhCbExtaGhjMDkzYmxCeWIzQmxjblI1TG1OaGJHd29iMkpxWldOMExDQndjbTl3WlhKMGVTazdJSDA3WEc1Y2JpQmNkQzh2SUY5ZmQyVmljR0ZqYTE5d2RXSnNhV05mY0dGMGFGOWZYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuQWdQU0JjSWx3aU8xeHVYRzVjYmlCY2RDOHZJRXh2WVdRZ1pXNTBjbmtnYlc5a2RXeGxJR0Z1WkNCeVpYUjFjbTRnWlhod2IzSjBjMXh1SUZ4MGNtVjBkWEp1SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXpJRDBnTUNrN1hHNGlYU3dpYzI5MWNtTmxVbTl2ZENJNklpSjlcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL2Nzcy9zdHlsZXMuc2Nzc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NyYy9jc3Mvc3R5bGVzLnNjc3MgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzICovIFwiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaSwgXCJodG1sIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzUxNUM7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dzsgfVxcblxcbmJvZHkge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogYXV0bzsgfVxcblxcbm1haW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3NTE1QztcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuXFxuLm1haW4taGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJGNUVFO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDsgfVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMjU1JTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICB3aWR0aDogMzAlOyB9XFxuXFxubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAxMHB4OyB9XFxuXFxuLm5hdkJ1dHRvbiB7XFxuICBmb250LXNpemU6IDEzMCU7XFxuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VCRjVFRTtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzAwMDtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMwMDA7XFxuICBtYXJnaW46IDElIDIwcHggMSUgMSU7IH1cXG4gIC5uYXZCdXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZmMmRhOyB9XFxuICAubmF2QnV0dG9uOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDM0MyQzY7IH1cXG5cXG4ubG93ZXItaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XFxuXFxuLmdyZWV0aW5nIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGNvbG9yOiAjRUJGNUVFO1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDsgfVxcblxcbi5zZWFyY2gtYXJlYSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7IH1cXG5cXG4uc2VhcmNoLWJhciB7XFxuICBtYXgtaGVpZ2h0OiA2dmg7XFxuICBtYXJnaW46IDVweDtcXG4gIHBhZGRpbmc6IDNweDsgfVxcblxcbi5zZWFyY2gtaW1hZ2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VCRjVFRTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICB3aWR0aDogMjAlO1xcbiAgbWFyZ2luLXJpZ2h0OiAwOyB9XFxuICAuc2VhcmNoLWltYWdlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NmZjJkYTsgfVxcbiAgLnNlYXJjaC1pbWFnZTphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzNDMkM2OyB9XFxuXFxuLnNlYXJjaC1pbnB1dCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgbWluLXdpZHRoOiA5MCU7IH1cXG5cXG4uYWxsLWNhcmRzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWdhcDogMzBweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgd2lkdGg6IDk1LjV2dzsgfVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbmltZyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4uY2FyZC1idXR0b24ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gIGhlaWdodDogMjdweDtcXG4gIG1hcmdpbjogM3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAuY2FyZC1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZmMmRhOyB9XFxuICAuY2FyZC1idXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0MzQzJDNjsgfVxcblxcbi5hZGQtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFQkY1RUU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEyJTsgfVxcblxcbi5hZGQge1xcbiAgd2lkdGg6IDkwJTsgfVxcblxcbi5mYXZvcml0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJGNUVFO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMyU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xNDkvMTQ5MjIyLnN2Z1xcXCIpOyB9XFxuXFxuLmNhcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q3RjJGRTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICMwMDA7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5jYXJkLWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJGNUVFO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdzsgfVxcblxcbi5hbGwge1xcbiAgZ3JpZC1nYXA6IDA7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpOyB9XFxuXFxuLmFsbC1yZWNpcGUtaW5mbyxcXG5vbCB7XFxuICBmb250LXNpemU6IDE1MCU7XFxuICBjb2xvcjogI0VCRjVFRTtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuaDMge1xcbiAgZm9udC1zaXplOiAxNTAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VCRjVFRTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4OyB9XFxuXFxuLnJlY2lwZS1uYW1lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFQkY1RUU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmb250LXNpemU6IDE1MCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4uY2FyZC1waWN0dXJlIHtcXG4gIGhlaWdodDogMjAwcHg7XFxuICB3aWR0aDogOTQlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gIG1hcmdpbjogMTBweCAzJSA4cHggMi42JTsgfVxcbiAgLmNhcmQtcGljdHVyZTpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDAuNzsgfVxcbiAgLmNhcmQtcGljdHVyZTphY3RpdmUge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwOyB9XFxuXFxuLndyYXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGhlaWdodDogaW5oZXJpdDtcXG4gIGJvcmRlcjogMDsgfVxcblxcbi5mYXZvcml0ZS1hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMTQ4LzE0ODg0MS5zdmdcXFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IH1cXG5cXG4uZGlzcGxheS1yZWNpcGUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtZ2FwOiA3cHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNmZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmcjtcXG4gIG1hcmdpbjogMTVweDsgfVxcblxcbi5kaXNwbGF5LXJlY2lwZS1pbmZvIHtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgZ3JpZC1yb3c6IDAuNTsgfVxcblxcbi5yZWNpcGUtaW5ncmVkaWVudHMge1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBncmlkLWNvbHVtbjogMjtcXG4gIGdyaWQtcm93OiAxO1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIGhlaWdodDogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGNvbG9yOiAjRUJGNUVFOyB9XFxuXFxuLnJlY2lwZS1pbmdyZWRpZW50cy10aXRsZSB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgZm9udC1zaXplOiAyMHB4OyB9XFxuXFxuLnJlY2lwZS1pbnN0cnVjdGlvbnMge1xcbiAgZ3JpZC1jb2x1bW46IDEvc3BhbiAyO1xcbiAgZ3JpZC1yb3c6IDI7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogI0VCRjVFRTtcXG4gIG1heC13aWR0aDogOTB2dztcXG4gIG1hcmdpbi10b3A6IDEwMHB4OyB9XFxuXFxuLnRvLWNvb2stZ3JlZXRpbmcge1xcbiAgY29sb3I6ICNFQkY1RUU7IH1cXG5cXG4uY2xvc2UtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFQkY1RUU7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgd2lkdGg6IDEzJTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL3N2Zy9zdGF0aWMvaWNvbnMvc3ZnLzQ0Ni80NDYwOTEuc3ZnXFxcIik7XFxuICBmb250LXdlaWdodDogYm9sZDsgfVxcblxcbi5pbmctY29zdCxcXG4ubmVlZGVkLWluZ3MsXFxuLnBhbnRyeS1idXR0b25zIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4OyB9XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDgyNXB4KSB7XFxuICBtYWluIHtcXG4gICAgd2lkdGg6IDk1JTsgfVxcbiAgLmFsbC1jYXJkcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtZ2FwOiAzMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBwYWRkaW5nOiAzMHB4IDAgMzBweCAzMHB4O1xcbiAgICB3aWR0aDogOTUuNXZ3OyB9XFxuICAuZGlzcGxheS1yZWNpcGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgLnJlY2lwZS1pbnN0cnVjdGlvbnMge1xcbiAgICBtYXJnaW4tdG9wOiAwOyB9IH1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5hbGwtY2FyZHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWdhcDogMzBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgcGFkZGluZzogMzBweCAwIDMwcHggMzBweDtcXG4gICAgd2lkdGg6IDk1LjV2dzsgfVxcbiAgLmRpc3BsYXktcmVjaXBlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gIC5zZWFyY2gtaW1hZ2Uge1xcbiAgICBkaXNwbGF5OiBub25lOyB9IH1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcXG4gIC5sb3dlci1oZWFkZXIsXFxuICAubWFpbi1oZWFkZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAuc2VhcmNoLWlucHV0IHtcXG4gICAgbWluLXdpZHRoOiA4MHZ3OyB9XFxuICAuYWxsLWNhcmRzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1nYXA6IDMwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XFxuICAgIHBhZGRpbmc6IDMwcHggMCAzMHB4IDMwcHg7XFxuICAgIHdpZHRoOiA5NS41dnc7IH1cXG4gIC5jYXJkLWJ1dHRvbiB7XFxuICAgIGhlaWdodDogYXV0bzsgfVxcbiAgLnRvLWNvb2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAuY2FyZCB7XFxuICAgIG1heC13aWR0aDogOTUlOyB9IH1cXG5cIiwgXCJcIl0pO1xuXG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuICdAbWVkaWEgJyArIGl0ZW1bMl0gKyAneycgKyBjb250ZW50ICsgJ30nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9ICcoJyArIGl0ZW1bMl0gKyAnKSBhbmQgKCcgKyBtZWRpYVF1ZXJ5ICsgJyknO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuICByZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3VybHMgKi8gXCIuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAoZmFsc2UpIHt9XG5cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ubmM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvY29va2Jvb2suanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvY29va2Jvb2suanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbmNsYXNzIENvb2tib29rIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMucmVjaXBlcyA9IGRhdGE7XG4gIH1cblxuICBmaW5kUmVjaXBlcyhzZWFyY2hUZXh0KSB7XG4gICAgcmV0dXJuIHRoaXMucmVjaXBlcy5maWx0ZXIoKHJlY2lwZSk9PntcbiAgICAgIGxldCBpbmdyZWRpZW50TmFtZXMgPSByZWNpcGUuaW5ncmVkaWVudHMubWFwKChpbmdyZWRpZW50KT0+e1xuICAgICAgICByZXR1cm4gaW5ncmVkaWVudC5uYW1lXG4gICAgICB9KVxuICAgICAgcmV0dXJuIHJlY2lwZS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGV4dCkgfHxcbiAgICAgIHJlY2lwZS50YWdzLmluY2x1ZGVzKHNlYXJjaFRleHQpIHx8XG4gICAgICBpbmdyZWRpZW50TmFtZXMuaW5jbHVkZXMoc2VhcmNoVGV4dClcbiAgICB9KVxuICB9XG59XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAoQ29va2Jvb2spO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2Nzcy9zdHlsZXMuc2Nzc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvY3NzL3N0eWxlcy5zY3NzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cbnZhciBjb250ZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGVzLnNjc3MgKi8gXCIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zcmMvY3NzL3N0eWxlcy5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMgKi8gXCIuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKGZhbHNlKSB7fVxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9kb21VcGRhdGVzLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvZG9tVXBkYXRlcy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3BhbnRyeV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9wYW50cnkgKi8gXCIuL3NyYy9wYW50cnkuanNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3JlY2lwZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9yZWNpcGUgKi8gXCIuL3NyYy9yZWNpcGUuanNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3VzZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vdXNlciAqLyBcIi4vc3JjL3VzZXIuanNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2Nvb2tib29rX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2Nvb2tib29rICovIFwiLi9zcmMvY29va2Jvb2suanNcIik7XG5cblxuXG5cblxuXG5sZXQgZG9tVXBkYXRlcyA9IHtcblxuICB1c2VyczogW3t9XSxcbiAgcmVjaXBlRGF0YTogW3t9XSxcbiAgaW5ncmVkaWVudHNEYXRhOiBbe31dLFxuICB1c2VyOiB7fSxcbiAgY29va2Jvb2s6IG51bGwsXG5cbiAgZ2V0V2hhdHNDb29raW5nRGF0YTogKCkgPT4ge1xuICAgIFByb21pc2UuYWxsKFtcbiAgICAgIGZldGNoKCdodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvd2hhdHMtY29va2luLzE5MTEvdXNlcnMvd2NVc2Vyc0RhdGEnKSxcbiAgICAgIGZldGNoKCdodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvd2hhdHMtY29va2luLzE5MTEvcmVjaXBlcy9yZWNpcGVEYXRhJyksXG4gICAgICBmZXRjaCgnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL3doYXRzLWNvb2tpbi8xOTExL2luZ3JlZGllbnRzL2luZ3JlZGllbnRzRGF0YScpXG4gICAgXSlcbiAgICAgIC50aGVuKHJlc3BvbnNlcyA9PiBQcm9taXNlLmFsbChyZXNwb25zZXMubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkpKVxuICAgICAgLnRoZW4ocmVzcG9uc2VzID0+IHtcbiAgICAgICAgZG9tVXBkYXRlcy51c2VycyA9IHJlc3BvbnNlc1swXS53Y1VzZXJzRGF0YTtcbiAgICAgICAgZG9tVXBkYXRlcy5yZWNpcGVEYXRhID0gcmVzcG9uc2VzWzFdLnJlY2lwZURhdGE7XG4gICAgICAgIGRvbVVwZGF0ZXMuaW5ncmVkaWVudHNEYXRhID0gcmVzcG9uc2VzWzJdLmluZ3JlZGllbnRzRGF0YTtcbiAgICAgICAgZG9tVXBkYXRlcy5jcmVhdGVEYXRhTW9kZWwoKTtcbiAgICAgICAgZG9tVXBkYXRlcy51cGRhdGVEaXNwbGF5KCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcbiAgfSxcblxuICBjcmVhdGVEYXRhTW9kZWw6ICgpID0+IHtcbiAgICBsZXQgcGFudHJ5ID0gbmV3IF9wYW50cnlfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImRlZmF1bHRcIl0oZG9tVXBkYXRlcy51c2Vyc1swXS5wYW50cnkpO1xuICAgIGRvbVVwZGF0ZXMudXNlciA9IG5ldyBfdXNlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fW1wiZGVmYXVsdFwiXShkb21VcGRhdGVzLnVzZXJzWzBdLCBwYW50cnksIGRvbVVwZGF0ZXMuaW5ncmVkaWVudHNEYXRhKTtcbiAgICBsZXQgcmVjaXBlRGVjayA9IGRvbVVwZGF0ZXMucmVjaXBlRGF0YS5tYXAocmVjaXBlID0+IHtcbiAgICAgIHJldHVybiByZWNpcGUgPSBuZXcgX3JlY2lwZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fW1wiZGVmYXVsdFwiXShyZWNpcGUsIGRvbVVwZGF0ZXMuaW5ncmVkaWVudHNEYXRhKTtcbiAgICB9KVxuICAgIGRvbVVwZGF0ZXMuY29va2Jvb2sgPSBuZXcgX2Nvb2tib29rX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX19bXCJkZWZhdWx0XCJdKHJlY2lwZURlY2spO1xuICB9LFxuXG4gIHVwZGF0ZURpc3BsYXk6ICgpID0+IHtcbiAgICBkb21VcGRhdGVzLmdyZWV0VXNlcigpO1xuICAgIGRvbVVwZGF0ZXMucG9wdWxhdGVDYXJkcyhkb21VcGRhdGVzLmNvb2tib29rLnJlY2lwZXMpO1xuICB9LFxuXG4gIGdyZWV0VXNlcjogKCkgPT4ge1xuICAgIGNvbnN0IHdlbGNvbWVNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyZWV0aW5nJyk7XG4gICAgd2VsY29tZU1lc3NhZ2UuaW5uZXJUZXh0ID0gYFdlbGNvbWUgJHtkb21VcGRhdGVzLnVzZXIubmFtZX0hYDtcbiAgfSxcblxuICBwb3B1bGF0ZUNhcmRzOiAocmVjaXBlcykgPT4ge1xuICAgIGNvbnN0IGNhcmRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tc2VjdGlvbicpO1xuICAgIGNhcmRBcmVhLmNsYXNzTGlzdCA9ICdhbGwtY2FyZHMnO1xuICAgIGNhcmRBcmVhLmlubmVySFRNTCA9ICcnO1xuICAgIHJlY2lwZXMuZm9yRWFjaChyZWNpcGUgPT4ge1xuICAgICAgY2FyZEFyZWEuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgZG9tVXBkYXRlcy5jb25zdHJ1Y3RDYXJkKHJlY2lwZSkpXG4gICAgfSk7XG4gIH0sXG5cbiAgY29uc3RydWN0Q2FyZDogKHJlY2lwZSkgPT4ge1xuICAgIGxldCBjbGFzc0xpc3RcbiAgICBpZiAoZG9tVXBkYXRlcy51c2VyLmZhdm9yaXRlUmVjaXBlcy5pbmNsdWRlcyhyZWNpcGUpKSB7XG4gICAgICBjbGFzc0xpc3QgPSAnZmF2b3JpdGUgY2FyZC1idXR0b24gZmF2b3JpdGUtYWN0aXZlJ1xuICAgIH0gZWxzZSB7XG4gICAgICBjbGFzc0xpc3QgPSAnZmF2b3JpdGUgY2FyZC1idXR0b24nXG4gICAgfVxuICAgIHJldHVybiBgPGRpdiBjbGFzcz0nY2FyZCAke3JlY2lwZS5pZH0nPlxuICAgIDxoZWFkZXIgY2xhc3M9J2NhcmQtaGVhZGVyICR7cmVjaXBlLmlkfSc+XG4gICAgICA8bGFiZWwgZm9yPSdhZGQtYnV0dG9uJyBjbGFzcz0naGlkZGVuJz5DbGljayB0byBhZGQgcmVjaXBlPC9sYWJlbD5cbiAgICAgIDxidXR0b24gYXJpYS1sYWJlbD0nYWRkLWJ1dHRvbicgY2xhc3M9J2FkZC1idXR0b24gY2FyZC1idXR0b24gJHtyZWNpcGUuaWR9Jz5cbiAgICAgICAgPGltZyBjbGFzcz0nYWRkICR7cmVjaXBlLmlkfSBhZGQtYnV0dG9uJyBzcmM9J2h0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8zMi8zMjMzOS5zdmcnIGFsdD0nQWRkIHRvXG4gICAgICAgIHJlY2lwZXMgdG8gY29vayc+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxsYWJlbCBmb3I9J2Zhdm9yaXRlLWJ1dHRvbicgY2xhc3M9J2hpZGRlbic+Q2xpY2sgdG8gZmF2b3JpdGUgcmVjaXBlPC9sYWJlbD5cbiAgICAgIDxidXR0b24gYXJpYS1sYWJlbD0nZmF2b3JpdGUtYnV0dG9uJyBjbGFzcz0nJHtjbGFzc0xpc3R9IGZhdm9yaXRlJHtyZWNpcGUuaWR9ICR7cmVjaXBlLmlkfSc+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2hlYWRlcj5cbiAgICA8c3BhbiBjbGFzcz0ncmVjaXBlLW5hbWUgJHtyZWNpcGUuaWR9Jz4ke3JlY2lwZS5uYW1lfTwvc3Bhbj5cbiAgICAgIDxidXR0b24gYXJpYS1sYWJlbD0ncmVjaXBlLWluZm8nIGNsYXNzPSdjYXJkLXBpY3R1cmUgJHtyZWNpcGUuaWR9IHdyYXAnPlxuICAgICAgICA8aW1nIHRhYmluZGV4PScwJyBjbGFzcz0nY2FyZC1waWN0dXJlICR7cmVjaXBlLmlkfSdzcmM9JyR7cmVjaXBlLmltYWdlfScgYWx0PSdGb29kIGZyb20gcmVjaXBlJz5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PmBcbiAgfSxcblxuICBmaW5kU3BlY2lmaWNSZWNpcGU6IChldmVudCkgPT4ge1xuICAgIHJldHVybiBkb21VcGRhdGVzLmNvb2tib29rLnJlY2lwZXMuZmluZChyZWNpcGUgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMocmVjaXBlLmlkKSkge1xuICAgICAgICByZXR1cm4gcmVjaXBlO1xuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgZmF2b3JpdGVDYXJkOiAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBzaG93RmF2b3JpdGVzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpZXctZmF2b3JpdGVzJyk7XG4gICAgbGV0IHNwZWNpZmljUmVjaXBlID0gZG9tVXBkYXRlcy5maW5kU3BlY2lmaWNSZWNpcGUoZXZlbnQpO1xuICAgIGlmICghZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZmF2b3JpdGUtYWN0aXZlJykpIHtcbiAgICAgIHNob3dGYXZvcml0ZXNCdXR0b24uaW5uZXJIVE1MID0gJ1ZpZXcgRmF2b3JpdGVzJztcbiAgICAgIGRvbVVwZGF0ZXMudXNlci5hZGRUb0Zhdm9yaXRlcyhzcGVjaWZpY1JlY2lwZSk7XG4gICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYXZvcml0ZS1hY3RpdmUnKSkge1xuICAgICAgZG9tVXBkYXRlcy51c2VyLnJlbW92ZUZyb21GYXZvcml0ZXMoc3BlY2lmaWNSZWNpcGUpXG4gICAgfVxuICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdmYXZvcml0ZS1hY3RpdmUnKTtcbiAgfSxcblxuICB2aWV3RmF2b3JpdGVzOiAoKSA9PiB7XG4gICAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1hcmVhJyk7XG4gICAgc2VhcmNoQmFyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgY29uc3Qgc2hvd0Zhdm9yaXRlc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aWV3LWZhdm9yaXRlcycpO1xuICAgIGNvbnN0IGNhcmRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tc2VjdGlvbicpO1xuICAgIGNhcmRBcmVhLmNsYXNzTGlzdCA9ICdhbGwtY2FyZHMnO1xuICAgIGlmICghZG9tVXBkYXRlcy51c2VyLmZhdm9yaXRlUmVjaXBlcy5sZW5ndGgpIHtcbiAgICAgIHNob3dGYXZvcml0ZXNCdXR0b24uaW5uZXJIVE1MID0gJ1lvdSBoYXZlIG5vIGZhdm9yaXRlcyEnO1xuICAgICAgZG9tVXBkYXRlcy5wb3B1bGF0ZUNhcmRzKGRvbVVwZGF0ZXMuY29va2Jvb2sucmVjaXBlcyk7XG4gICAgICByZXR1cm5cbiAgICB9IGVsc2Uge1xuICAgICAgc2hvd0Zhdm9yaXRlc0J1dHRvbi5pbm5lckhUTUwgPSAnUmVmcmVzaCBGYXZvcml0ZXMnXG4gICAgICBjYXJkQXJlYS5pbm5lckhUTUwgPSAnJztcbiAgICAgIGRvbVVwZGF0ZXMudXNlci5mYXZvcml0ZVJlY2lwZXMuZm9yRWFjaChyZWNpcGUgPT4ge1xuICAgICAgICBjYXJkQXJlYS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBkb21VcGRhdGVzLmNvbnN0cnVjdENhcmQocmVjaXBlKSlcbiAgICAgIH0pXG4gICAgfVxuICB9LFxuXG4gIGFkZFRvVG9Db29rOiAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBzaG93VG9Db29rQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWNvb2snKTtcbiAgICBsZXQgc3BlY2lmaWNSZWNpcGUgPSBkb21VcGRhdGVzLmZpbmRTcGVjaWZpY1JlY2lwZShldmVudCk7XG4gICAgaWYgKCFldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGQtYWN0aXZlJykpIHtcbiAgICAgIHNob3dUb0Nvb2tCdXR0b24uaW5uZXJUZXh0ID0gJ1RvIENvb2snXG4gICAgICBhbGVydChkb21VcGRhdGVzLnVzZXIuY2hlY2tQYW50cnlJbmdyZWRpZW50cyhzcGVjaWZpY1JlY2lwZSkpO1xuICAgICAgZG9tVXBkYXRlcy51c2VyLmFkZFRvUmVjaXBlc1RvQ29vayhzcGVjaWZpY1JlY2lwZSk7XG4gICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGQtYWN0aXZlJykpIHtcbiAgICAgIGRvbVVwZGF0ZXMudXNlci5yZW1vdmVGcm9tUmVjaXBlc1RvQ29vayhzcGVjaWZpY1JlY2lwZSlcbiAgICB9XG4gICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2FkZC1hY3RpdmUnKTtcbiAgfSxcblxuICBkaXNwbGF5VG9Db29rQ2FyZHM6ICgpID0+IHtcbiAgICBjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWFyZWEnKTtcbiAgICBzZWFyY2hCYXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICBjb25zdCBjYXJkQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLXNlY3Rpb24nKTtcbiAgICBjYXJkQXJlYS5jbGFzc0xpc3QgPSAnJztcbiAgICBjYXJkQXJlYS5pbm5lckhUTUwgPVxuICAgICAgYDxzZWN0aW9uIGNsYXNzPSd0by1jb29rJz5cbiAgICAgICAgPGgxIGNsYXNzPSd0by1jb29rLWdyZWV0aW5nJz5SZWNpcGVzIFRvIENvb2s8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkLXNlY3Rpb24gYWxsLWNhcmRzJz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+YFxuICAgIGxldCBjYXJkU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLXNlY3Rpb24nKVxuICAgIGRvbVVwZGF0ZXMudXNlci5yZWNpcGVzVG9Db29rLmZvckVhY2gocmVjaXBlID0+IHtcbiAgICAgIGxldCB2YWx1ZXMgPSBkb21VcGRhdGVzLnVzZXIuY2hlY2tIb3dNdWNoTW9yZShyZWNpcGUpLm1hcChvYmogPT4ge1xuICAgICAgICByZXR1cm4gYCR7b2JqLnF1YW50aXR5TmVlZGVkfSAke29iai51bml0fSBtb3JlICR7b2JqLm5hbWV9YDtcbiAgICAgIH0pO1xuICAgICAgbGV0IG5lZWRlZENvc3QgPSBkb21VcGRhdGVzLnVzZXIuY2hlY2tIb3dNdWNoTW9yZShyZWNpcGUpLnJlZHVjZSgodG90YWwsIGluZ3JlZGllbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIHRvdGFsICs9IGluZ3JlZGllbnQuY29zdDtcbiAgICAgIH0sIDApO1xuICAgICAgY2FyZFNlY3Rpb24uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgPGRpdiBjbGFzcz0nY2FyZCAke3JlY2lwZS5pZH0nPlxuICAgIDxoZWFkZXIgY2xhc3M9J2NhcmQtaGVhZGVyICR7cmVjaXBlLmlkfSc+XG4gICAgICA8bGFiZWwgZm9yPSdjbG9zZS1idXR0b24nIGNsYXNzPSdoaWRkZW4nPjwvbGFiZWw+XG4gICAgICA8YnV0dG9uIGFyaWEtbGFiZWw9J2Nsb3NlLWJ1dHRvbicgY2xhc3M9J2Nsb3NlLWJ1dHRvbiBjYXJkLWJ1dHRvbiAke3JlY2lwZS5pZH0nPlxuICAgICAgICA8aW1nIGNsYXNzPSdjbG9zZS1idXR0b24gJHtyZWNpcGUuaWR9JyBzcmM9J2h0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9zdmcvc3RhdGljL2ljb25zL3N2Zy80NDYvNDQ2MDkxLnN2ZycgYWx0PSdyZW1vdmUgZnJvbSByZWNpcGVzIHRvIGNvb2snPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8bGFiZWwgZm9yPSdmYXZvcml0ZS1idXR0b24nIGNsYXNzPSdoaWRkZW4nPkNsaWNrIHRvIGZhdm9yaXRlIHJlY2lwZTwvbGFiZWw+XG4gICAgICA8YnV0dG9uIGFyaWEtbGFiZWw9J2Zhdm9yaXRlLWJ1dHRvbicgY2xhc3M9J2Zhdm9yaXRlIGNhcmQtYnV0dG9uIGZhdm9yaXRlJHtyZWNpcGUuaWR9ICR7cmVjaXBlLmlkfSc+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2hlYWRlcj5cbiAgICAgIDxoMz4ke3JlY2lwZS5uYW1lfTwvaDM+XG4gICAgICA8aW1nIHRhYmluZGV4PScwJyBjbGFzcz0nY2FyZC1waWN0dXJlICR7cmVjaXBlLmlkfSdcbiAgICAgIHNyYz0nJHtyZWNpcGUuaW1hZ2V9JyBhbHQ9J0Zvb2QgZnJvbSByZWNpcGUnPlxuICAgICAgPGRpdiBjbGFzcyA9IFwicGFudHJ5LWJ1dHRvbnNcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgbmFtZT1cIkFkZCBOZWVkZWQgSW5ncmVkaWVudHNcIiBjbGFzcz1cImJvdWdodC1pbmdyZWRpZW50cyBib3VnaHQtaW5ncmVkaWVudHMke3JlY2lwZS5pZH0gJHtyZWNpcGUuaWR9XCI+QWRkIE5lZWRlZCBJbmdyZWRpZW50czwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBuYW1lPVwiSGF2ZSBDb29rZWRcIiBjbGFzcz1cImhhdmUtY29va2VkIGhhdmUtY29va2VkJHtyZWNpcGUuaWR9ICR7cmVjaXBlLmlkfVwiPkhhdmUgQ29va2VkPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwIGNsYXNzPSduZWVkZWQtaW5ncyc+SW5ncmVkaWVudHMgU3RpbGwgTmVlZGVkOjwvcD5cbiAgICAgIDx1bCA+XG4gICAgICA8bGk+JHt2YWx1ZXMuam9pbignPC9saT48bGk+Jyl9PC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8cCBjbGFzcz0naW5nLWNvc3QnPkNvc3QgdG8gU3RpbGwgR2V0OiQke25lZWRlZENvc3R9PC9wPlxuICAgIDwvZGl2PmApO1xuICAgIH0pO1xuICB9LFxuXG4gIHNob3dUb0Nvb2tSZWNpcGVzOiAoKSA9PiB7XG4gICAgY29uc3Qgc2hvd1RvQ29va0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1jb29rJyk7XG4gICAgaWYgKCFkb21VcGRhdGVzLnVzZXIucmVjaXBlc1RvQ29vay5sZW5ndGgpIHtcbiAgICAgIHNob3dUb0Nvb2tCdXR0b24uaW5uZXJUZXh0ID0gJ1lvdSBoYXZlIG5vIHNhdmVkIFJlY2lwZXMhJztcbiAgICAgIGRvbVVwZGF0ZXMucG9wdWxhdGVDYXJkcyhkb21VcGRhdGVzLmNvb2tib29rLnJlY2lwZXMpO1xuICAgICAgcmV0dXJuXG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbVVwZGF0ZXMuZGlzcGxheVRvQ29va0NhcmRzKCk7XG4gICAgfVxuICB9LFxuXG4gIHJlbW92ZUZyb21Ub0Nvb2s6ICgpID0+IHtcbiAgICBsZXQgc3BlY2lmaWNSZWNpcGUgPSBkb21VcGRhdGVzLmNvb2tib29rLnJlY2lwZXMuZmluZChyZWNpcGUgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMocmVjaXBlLmlkKSkge1xuICAgICAgICByZXR1cm4gcmVjaXBlO1xuICAgICAgfVxuICAgIH0pXG4gICAgZG9tVXBkYXRlcy51c2VyLnJlbW92ZUZyb21SZWNpcGVzVG9Db29rKHNwZWNpZmljUmVjaXBlKTtcbiAgICBkb21VcGRhdGVzLmRpc3BsYXlUb0Nvb2tDYXJkcygpO1xuICB9LFxuXG4gIGRpc3BsYXlEaXJlY3Rpb25zOiAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWFyZWEnKTtcbiAgICBzZWFyY2hCYXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICBjb25zdCBjYXJkQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLXNlY3Rpb24nKTtcbiAgICBjYXJkQXJlYS5jbGFzc0xpc3QgPSAncmVjaXBlLWRpcmVjdGlvbnMnO1xuICAgIGxldCBzcGVjaWZpY1JlY2lwZSA9IGRvbVVwZGF0ZXMuZmluZFNwZWNpZmljUmVjaXBlKGV2ZW50KTtcbiAgICBsZXQgY29zdCA9IHNwZWNpZmljUmVjaXBlLmNhbGN1bGF0ZUNvc3QoKTtcbiAgICBjYXJkQXJlYS5pbm5lckhUTUwgPSAnJztcbiAgICBsZXQgbmVlZGVkSW5ncmVkaWVudHMgPSBbXTtcbiAgICBzcGVjaWZpY1JlY2lwZS5pbmdyZWRpZW50cy5mb3JFYWNoKGluZ3JlZGllbnQgPT4ge1xuICAgICAgbGV0IG5hbWUgPSBzcGVjaWZpY1JlY2lwZS5pbmdyZWRpZW50c0RhdGEuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGluZ3JlZGllbnQuaWQpLm5hbWVcbiAgICAgIG5lZWRlZEluZ3JlZGllbnRzLnB1c2goYCR7aW5ncmVkaWVudC5xdWFudGl0eS5hbW91bnQudG9GaXhlZCgyKX0gJHtpbmdyZWRpZW50LnF1YW50aXR5LnVuaXR9ICR7bmFtZX1gKVxuICAgIH0pXG4gICAgbGV0IG5lZWRlZFN0ZXBzID0gW107XG4gICAgc3BlY2lmaWNSZWNpcGUuaW5zdHJ1Y3Rpb25zLmZvckVhY2goc3RlcCA9PiB7XG4gICAgICBuZWVkZWRTdGVwcy5wdXNoKGAke3N0ZXAubnVtYmVyfS4gJHtzdGVwLmluc3RydWN0aW9ufSBgKVxuICAgIH0pXG4gICAgY2FyZEFyZWEuaW5uZXJIVE1MID0gYDxzZWN0aW9uIGNsYXNzPSdkaXNwbGF5LXJlY2lwZSc+XG4gICAgPGRpdiBjbGFzcz0nZGlzcGxheS1yZWNpcGUtaW5mbyc+XG4gICAgICA8aDM+JHtzcGVjaWZpY1JlY2lwZS5uYW1lfTwvaDM+XG4gICAgICA8aW1nIGNsYXNzPSdjYXJkLXBpY3R1cmUnIHNyYz0nJHtzcGVjaWZpY1JlY2lwZS5pbWFnZX0nIGFsdD0nUmVjaXBlIGltYWdlIGZvciAke3NwZWNpZmljUmVjaXBlLm5hbWV9Jz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPSdyZWNpcGUtaW5ncmVkaWVudHMnPlxuICAgIDxoNSBjbGFzcz0ncmVjaXBlLWluZ3JlZGllbnRzLXRpdGxlJz5Zb3Ugd2lsbCBuZWVkOiA8L2g1PlxuICAgIDx1bD5cbiAgICA8bGk+JHtuZWVkZWRJbmdyZWRpZW50cy5qb2luKCc8L2xpPjxsaT4nKX08L2xpPlxuICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz0ncmVjaXBlLWluc3RydWN0aW9ucyc+XG4gICAgPGg1Pkluc3RydWN0aW9uczogPC9oNT5cbiAgICA8dWwgY2xhc3M9J2luc3RydWN0aW9uLWxpc3QnIHN0eWxlPSdsaXN0LXN0eWxlLXR5cGU6bm9uZTsnPlxuICAgIDxsaT4ke25lZWRlZFN0ZXBzLmpvaW4oJzwvbGk+PGxpPicpfTwvbGk+XG4gICAgPC91bD5cbiAgICA8aDU+VGhpcyByZWNpcGUgZ2VuZXJhbGx5IGNvc3RzOiAkJHtjb3N0fSA8L2g1PlxuICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5gO1xuICB9LFxuXG4gIGZpbHRlclJlY2lwZXM6ICgpID0+IHtcbiAgICBjb25zdCBjYXJkQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtY2FyZHMnKTtcbiAgICB2YXIgc2VhcmNoVGVybSA9IGV2ZW50LnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChzZWFyY2hUZXJtICE9PSAnJykge1xuICAgICAgY2FyZEFyZWEuaW5uZXJIVE1MID0gJyc7XG4gICAgICBkb21VcGRhdGVzLmRpc3BsYXlGaWx0ZXJlZFJlY2lwZXMoc2VhcmNoVGVybSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbVVwZGF0ZXMucG9wdWxhdGVDYXJkcyhkb21VcGRhdGVzLmNvb2tib29rLnJlY2lwZXMpO1xuICAgIH1cbiAgfSxcblxuICBkaXNwbGF5RmlsdGVyZWRSZWNpcGVzOiAoc2VhcmNoVGVybSkgPT4ge1xuICAgIGRvbVVwZGF0ZXMucG9wdWxhdGVDYXJkcyhkb21VcGRhdGVzLmNvb2tib29rLmZpbmRSZWNpcGVzKHNlYXJjaFRlcm0pKTtcbiAgfSxcblxuICBoYXZlQ29va2VkUmVjaXBlOiAoZXZlbnQpID0+IHtcbiAgICBsZXQgc3BlY2lmaWNSZWNpcGUgPSBkb21VcGRhdGVzLmZpbmRTcGVjaWZpY1JlY2lwZShldmVudCk7XG4gICAgY29uc3QgaGF2ZUNvb2tlZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5oYXZlLWNvb2tlZCR7c3BlY2lmaWNSZWNpcGUuaWR9YCk7XG4gICAgaWYgKGRvbVVwZGF0ZXMudXNlci5jaGVja1BhbnRyeUluZ3JlZGllbnRzKHNwZWNpZmljUmVjaXBlKSAhPT0gJ1lvdSBoYXZlIHRoZSBpbmdyZWRpZW50cyEnKSB7XG4gICAgICBhbGVydChcIllvdSBkb24ndCBoYXZlIHdoYXQgeW91IG5lZWQgeWV0XCIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbVVwZGF0ZXMudXNlci5yZW1vdmVQYW50cnlJbmdyaWRpZW50cyhzcGVjaWZpY1JlY2lwZSlcbiAgICAgIGhhdmVDb29rZWRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgfSxcblxuICBidXlJbmdyZWRpZW50czogKGV2ZW50KSA9PiB7XG4gICAgbGV0IHNwZWNpZmljUmVjaXBlID0gZG9tVXBkYXRlcy5maW5kU3BlY2lmaWNSZWNpcGUoZXZlbnQpO1xuICAgIGNvbnN0IGJ1eUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5ib3VnaHQtaW5ncmVkaWVudHMke3NwZWNpZmljUmVjaXBlLmlkfWApXG4gICAgZG9tVXBkYXRlcy51c2VyLmFkZE5lZWRlZFBhbnRyeUluZ3JpZGllbnRzKHNwZWNpZmljUmVjaXBlKVxuICAgIGJ1eUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gIH0sXG5cbn07XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAoZG9tVXBkYXRlcyk7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvcGFudHJ5LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9wYW50cnkuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG5jbGFzcyBQYW50cnkge1xuICBjb25zdHJ1Y3Rvcih1c2VyUGFudHJ5KSB7XG4gICAgdGhpcy51c2VyUGFudHJ5ID0gdXNlclBhbnRyeTtcbiAgICB0aGlzLnVzZXJJbmdyZWRpZW50cyA9IHt9O1xuICB9XG5cbiAgY29tcGlsZVBhbnRyeSgpIHtcbiAgICB0aGlzLnVzZXJJbmdyZWRpZW50cyA9IHRoaXMudXNlclBhbnRyeS5yZWR1Y2UoKHBhbnRyeSwgaW5ncmVkaWVudCkgPT4ge1xuICAgICAgaWYgKCFwYW50cnlbaW5ncmVkaWVudC5pbmdyZWRpZW50XSkge1xuICAgICAgICBwYW50cnlbaW5ncmVkaWVudC5pbmdyZWRpZW50XSA9IGluZ3JlZGllbnQuYW1vdW50O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFudHJ5W2luZ3JlZGllbnQuaW5ncmVkaWVudF0gKz0gaW5ncmVkaWVudC5hbW91bnQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gcGFudHJ5O1xuICAgIH0sIHt9KTtcbiAgfVxufVxuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIF9fd2VicGFja19leHBvcnRzX19bXCJkZWZhdWx0XCJdID0gKFBhbnRyeSk7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvcmVjaXBlLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9yZWNpcGUuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG5jbGFzcyBSZWNpcGUge1xuICBjb25zdHJ1Y3RvcihyZWNpcGUsIGluZ3JlZGllbnRzRGF0YSkge1xuICAgIHRoaXMubmFtZSA9IHJlY2lwZS5uYW1lO1xuICAgIHRoaXMuaWQgPSByZWNpcGUuaWQ7XG4gICAgdGhpcy5pbmdyZWRpZW50cyA9IHJlY2lwZS5pbmdyZWRpZW50cztcbiAgICB0aGlzLmluc3RydWN0aW9ucyA9IHJlY2lwZS5pbnN0cnVjdGlvbnM7XG4gICAgdGhpcy50YWdzID0gcmVjaXBlLnRhZ3M7XG4gICAgdGhpcy5pbmdyZWRpZW50c0RhdGEgPSBpbmdyZWRpZW50c0RhdGE7XG4gICAgdGhpcy5pbWFnZSA9IHJlY2lwZS5pbWFnZTtcbiAgfVxuXG4gIGNhbGN1bGF0ZUNvc3QoKSB7XG4gICAgbGV0IGNvc3RDb3VudGVyID0gMDtcbiAgICB0aGlzLmluZ3JlZGllbnRzLmZvckVhY2goaW5ncmVkaWVudCA9PiB7XG4gICAgICB0aGlzLmluZ3JlZGllbnRzRGF0YS5maW5kKHNwZWNpZmljSW5ncmVkaWVudCA9PiB7XG4gICAgICAgIGlmIChzcGVjaWZpY0luZ3JlZGllbnQuaWQgPT09IGluZ3JlZGllbnQuaWQpIHtcbiAgICAgICAgICBjb3N0Q291bnRlciArPSAoTnVtYmVyKHNwZWNpZmljSW5ncmVkaWVudC5lc3RpbWF0ZWRDb3N0SW5DZW50cykgKlxuICAgICAgICAgIE51bWJlcihpbmdyZWRpZW50LnF1YW50aXR5LmFtb3VudCkpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSk7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQoKGNvc3RDb3VudGVyIC8gMTAwKS50b0ZpeGVkKDIpKTtcbiAgfVxuXG59XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAoUmVjaXBlKTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9zY3JpcHRzLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvc2NyaXB0cy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIGV4cG9ydHMgcHJvdmlkZWQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2Nzc19zdHlsZXNfc2Nzc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9jc3Mvc3R5bGVzLnNjc3MgKi8gXCIuL3NyYy9jc3Mvc3R5bGVzLnNjc3NcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2Nzc19zdHlsZXNfc2Nzc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKF9jc3Nfc3R5bGVzX3Njc3NfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2RvbVVwZGF0ZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vZG9tVXBkYXRlcyAqLyBcIi4vc3JjL2RvbVVwZGF0ZXMuanNcIik7XG5cblxuXG5cbmNvbnN0IHNob3dGYXZvcml0ZXNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmlldy1mYXZvcml0ZXMnKTtcbmNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZScpXG5jb25zdCBjYXJkQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtY2FyZHMnKTtcbmNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtaW5wdXQnKTtcbmNvbnN0IHNob3dUb0Nvb2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tY29vaycpO1xuXG5jb25zdCBjYXJkQnV0dG9uQ29uZGl0aW9uYWxzID0gKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYXZvcml0ZScpKSB7XG4gICAgX2RvbVVwZGF0ZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImRlZmF1bHRcIl0uZmF2b3JpdGVDYXJkKGV2ZW50KTtcbiAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGQtYnV0dG9uJykpIHtcbiAgICBfZG9tVXBkYXRlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fW1wiZGVmYXVsdFwiXS5hZGRUb1RvQ29vayhldmVudCk7XG4gIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2FyZC1waWN0dXJlJykpIHtcbiAgICBfZG9tVXBkYXRlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fW1wiZGVmYXVsdFwiXS5kaXNwbGF5RGlyZWN0aW9ucyhldmVudCk7XG4gIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaG9tZScpKSB7XG4gICAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1hcmVhJyk7XG4gICAgc2VhcmNoQmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgc2hvd1RvQ29va0J1dHRvbi5pbm5lckhUTUwgPSAnVG8gQ29vayc7XG4gICAgc2hvd0Zhdm9yaXRlc0J1dHRvbi5pbm5lckhUTUwgPSAnVmlldyBGYXZvcml0ZXMnO1xuICAgIF9kb21VcGRhdGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkZWZhdWx0XCJdLnBvcHVsYXRlQ2FyZHMoX2RvbVVwZGF0ZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImRlZmF1bHRcIl0uY29va2Jvb2sucmVjaXBlcyk7XG4gIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2xvc2UtYnV0dG9uJykpIHtcbiAgICBfZG9tVXBkYXRlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fW1wiZGVmYXVsdFwiXS5yZW1vdmVGcm9tVG9Db29rKGV2ZW50KTtcbiAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdoYXZlLWNvb2tlZCcpKSB7XG4gICAgX2RvbVVwZGF0ZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImRlZmF1bHRcIl0uaGF2ZUNvb2tlZFJlY2lwZShldmVudCk7XG4gIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYm91Z2h0LWluZ3JlZGllbnRzJykpIHtcbiAgICBfZG9tVXBkYXRlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fW1wiZGVmYXVsdFwiXS5idXlJbmdyZWRpZW50cyhldmVudCk7XG4gIH1cbn1cblxud2luZG93Lm9ubG9hZCA9IF9kb21VcGRhdGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkZWZhdWx0XCJdLmdldFdoYXRzQ29va2luZ0RhdGEoKVxuaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhcmRCdXR0b25Db25kaXRpb25hbHMpO1xuY2FyZEFyZWEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYXJkQnV0dG9uQ29uZGl0aW9uYWxzKTtcbnNob3dGYXZvcml0ZXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfZG9tVXBkYXRlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fW1wiZGVmYXVsdFwiXS52aWV3RmF2b3JpdGVzKTtcbnNob3dUb0Nvb2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfZG9tVXBkYXRlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fW1wiZGVmYXVsdFwiXS5zaG93VG9Db29rUmVjaXBlcyk7XG5zZWFyY2hCYXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBfZG9tVXBkYXRlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fW1wiZGVmYXVsdFwiXS5maWx0ZXJSZWNpcGVzKTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy91c2VyLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvdXNlci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3BhbnRyeV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9wYW50cnkgKi8gXCIuL3NyYy9wYW50cnkuanNcIik7XG5cblxuY2xhc3MgVXNlciB7XG4gIGNvbnN0cnVjdG9yKHVzZXIsIHBhbnRyeSwgaW5ncmVkaWVudHNEYXRhKSB7XG4gICAgdGhpcy5pZCA9IHVzZXIuaWQ7XG4gICAgdGhpcy5uYW1lID0gdXNlci5uYW1lO1xuICAgIHRoaXMucGFudHJ5ID0gcGFudHJ5O1xuICAgIHRoaXMuZmF2b3JpdGVSZWNpcGVzID0gW107XG4gICAgdGhpcy5yZWNpcGVzVG9Db29rID0gW107XG4gICAgdGhpcy5pbmdyZWRpZW50c0RhdGEgPSBpbmdyZWRpZW50c0RhdGE7XG4gIH1cblxuICBhZGRUb0Zhdm9yaXRlcyhyZWNpcGUpIHtcbiAgICBpZiAoIXRoaXMuZmF2b3JpdGVSZWNpcGVzLmluY2x1ZGVzKHJlY2lwZSkpIHtcbiAgICAgIHRoaXMuZmF2b3JpdGVSZWNpcGVzLnB1c2gocmVjaXBlKTtcbiAgICB9XG4gIH1cblxuICBhZGRUb1JlY2lwZXNUb0Nvb2socmVjaXBlKSB7XG4gICAgaWYgKCF0aGlzLnJlY2lwZXNUb0Nvb2suaW5jbHVkZXMocmVjaXBlKSkge1xuICAgICAgdGhpcy5yZWNpcGVzVG9Db29rLnB1c2gocmVjaXBlKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVGcm9tUmVjaXBlc1RvQ29vayhyZWNpcGUpIHtcbiAgICBjb25zdCBpID0gdGhpcy5yZWNpcGVzVG9Db29rLmluZGV4T2YocmVjaXBlKTtcbiAgICB0aGlzLnJlY2lwZXNUb0Nvb2suc3BsaWNlKGksIDEpO1xuICB9XG5cbiAgcmVtb3ZlUGFudHJ5SW5ncmlkaWVudHMocmVjaXBlKSB7XG4gICAgcmVjaXBlLmluZ3JlZGllbnRzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGZldGNoKCdodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvd2hhdHMtY29va2luLzE5MTEvdXNlcnMvd2NVc2Vyc0RhdGEnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgXCJ1c2VySURcIjogdGhpcy5pZCxcbiAgICAgICAgICBcImluZ3JlZGllbnRJRFwiOiBpdGVtLmlkLFxuICAgICAgICAgIFwiaW5ncmVkaWVudE1vZGlmaWNhdGlvblwiOiAtKGl0ZW0ucXVhbnRpdHkuYW1vdW50KVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbih0aGlzLnVwZGF0ZVVzZXJQYW50cnkoKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gICAgICBzZXRUaW1lb3V0KHRoaXMudXBkYXRlVXNlclBhbnRyeSgpLCA0MDAwKVxuICAgIH0pO1xuXG4gIH1cblxuICBhZGROZWVkZWRQYW50cnlJbmdyaWRpZW50cyhyZWNpcGUpIHtcbiAgICB0aGlzLmNoZWNrSG93TXVjaE1vcmUocmVjaXBlKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBmZXRjaCgnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL3doYXRzLWNvb2tpbi8xOTExL3VzZXJzL3djVXNlcnNEYXRhJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIFwidXNlcklEXCI6IHRoaXMuaWQsXG4gICAgICAgICAgXCJpbmdyZWRpZW50SURcIjogaXRlbS5pZCxcbiAgICAgICAgICBcImluZ3JlZGllbnRNb2RpZmljYXRpb25cIjogaXRlbS5xdWFudGl0eU5lZWRlZFxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbih0aGlzLnVwZGF0ZVVzZXJQYW50cnkoKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVVc2VyUGFudHJ5KCkge1xuICAgIGZldGNoKCdodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvd2hhdHMtY29va2luLzE5MTEvdXNlcnMvd2NVc2Vyc0RhdGEnKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBsZXQgcGFudHJ5ID0gbmV3IF9wYW50cnlfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImRlZmF1bHRcIl0ocmVzcG9uc2Uud2NVc2Vyc0RhdGFbdGhpcy5pZCAtIDFdLnBhbnRyeSlcbiAgICAgICAgdGhpcy5wYW50cnkgPSBwYW50cnlcbiAgICAgICAgdGhpcy5wYW50cnkuY29tcGlsZVBhbnRyeSh0aGlzLmluZ3JlZGllbnRzRGF0YSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxuICB9XG5cbiAgcmVtb3ZlRnJvbUZhdm9yaXRlcyhyZWNpcGUpIHtcbiAgICBjb25zdCBpID0gdGhpcy5mYXZvcml0ZVJlY2lwZXMuaW5kZXhPZihyZWNpcGUpO1xuICAgIHRoaXMuZmF2b3JpdGVSZWNpcGVzLnNwbGljZShpLCAxKTtcbiAgfVxuXG4gIGZpbHRlckZhdm9yaXRlcyh0YWcpIHtcbiAgICByZXR1cm4gdGhpcy5mYXZvcml0ZVJlY2lwZXMuZmlsdGVyKHJlY2lwZSA9PiB7XG4gICAgICByZXR1cm4gcmVjaXBlLnRhZ3MuaW5jbHVkZXModGFnKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZpbmRGYXZvcml0ZXMoc3RyZ1RvU3JjaCkge1xuICAgIHJldHVybiB0aGlzLmZhdm9yaXRlUmVjaXBlcy5maWx0ZXIocmVjaXBlID0+IHtcbiAgICAgIHJldHVybiByZWNpcGUubmFtZS5pbmNsdWRlcyhzdHJnVG9TcmNoKSB8fFxuICAgICAgICByZWNpcGUuaW5ncmVkaWVudHMuZmluZChpbmdyZWRpZW50ID0+IHtcbiAgICAgICAgICByZXR1cm4gaW5ncmVkaWVudC5uYW1lLmluY2x1ZGVzKHN0cmdUb1NyY2gpXG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZmluZE1pc3NpbmdJbmdyZWRpZW50cyhyZWNpcGUpIHtcbiAgICByZXR1cm4gcmVjaXBlLmluZ3JlZGllbnRzLnJlZHVjZSgobm90UHJlc2VudCwgaW5ncmVkaWVudCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnBhbnRyeS51c2VySW5ncmVkaWVudHNbaW5ncmVkaWVudC5pZF0gfHwgaW5ncmVkaWVudC5xdWFudGl0eS5hbW91bnQgPiB0aGlzLnBhbnRyeS51c2VySW5ncmVkaWVudHNbaW5ncmVkaWVudC5pZF0pIHtcbiAgICAgICAgbm90UHJlc2VudC5wdXNoKGluZ3JlZGllbnQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5vdFByZXNlbnQ7XG4gICAgfSwgW10pO1xuICB9XG5cbiAgY2hlY2tQYW50cnlJbmdyZWRpZW50cyhyZWNpcGUpIHtcbiAgICB0aGlzLnBhbnRyeS5jb21waWxlUGFudHJ5KHRoaXMuaW5ncmVkaWVudHNEYXRhKTtcbiAgICBsZXQgbWlzc2luZ0luZ3JlZGllbnRzID0gdGhpcy5maW5kTWlzc2luZ0luZ3JlZGllbnRzKHJlY2lwZSlcbiAgICBpZiAobWlzc2luZ0luZ3JlZGllbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuICdZb3UgaGF2ZSB0aGUgaW5ncmVkaWVudHMhJztcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IG1pc3NpbmcgPSBtaXNzaW5nSW5ncmVkaWVudHMubGVuZ3RoO1xuICAgICAgcmV0dXJuIGBZb3Ugc3RpbGwgbmVlZCAke21pc3Npbmd9IG1vcmUgaW5ncmVkaWVudHMuYDtcbiAgICB9XG4gIH1cblxuICBjaGVja0hvd011Y2hNb3JlKHJlY2lwZSkge1xuICAgIGxldCBtaXNzaW5nSW5ncmVkaWVudHMgPSB0aGlzLmZpbmRNaXNzaW5nSW5ncmVkaWVudHMocmVjaXBlKTtcbiAgICBsZXQgZGlmZmVyZW5jZSA9IG1pc3NpbmdJbmdyZWRpZW50cy5tYXAoaW5ncmVkaWVudCA9PiB7XG4gICAgICBsZXQgbmFtZSA9IHJlY2lwZS5pbmdyZWRpZW50c0RhdGEuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGluZ3JlZGllbnQuaWQpO1xuICAgICAgbGV0IG5lZWRlZEluZyA9IHtcbiAgICAgICAgaWQ6IGluZ3JlZGllbnQuaWQsXG4gICAgICAgIGNvc3Q6IDAsXG4gICAgICAgIG5hbWU6IG5hbWUubmFtZSxcbiAgICAgICAgdW5pdDogaW5ncmVkaWVudC5xdWFudGl0eS51bml0LFxuICAgICAgICBxdWFudGl0eU5lZWRlZDogcGFyc2VGbG9hdChpbmdyZWRpZW50LnF1YW50aXR5LmFtb3VudC50b0ZpeGVkKDIpKVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMucGFudHJ5LnVzZXJJbmdyZWRpZW50c1tpbmdyZWRpZW50LmlkXSkge1xuICAgICAgICBuZWVkZWRJbmcucXVhbnRpdHlOZWVkZWQgPSBwYXJzZUZsb2F0KGluZ3JlZGllbnQucXVhbnRpdHkuYW1vdW50IC0gdGhpcy5wYW50cnkudXNlckluZ3JlZGllbnRzW2luZ3JlZGllbnQuaWRdLnRvRml4ZWQoMikpXG4gICAgICB9XG4gICAgICBsZXQgaW5ncmVkaWVudEl0ZW0gPSByZWNpcGUuaW5ncmVkaWVudHNEYXRhLmZpbmQoaXRlbSA9PiBpbmdyZWRpZW50LmlkID09PSBpdGVtLmlkKVxuICAgICAgbmVlZGVkSW5nLmNvc3QgPSAobmVlZGVkSW5nLnF1YW50aXR5TmVlZGVkICogaW5ncmVkaWVudEl0ZW0uZXN0aW1hdGVkQ29zdEluQ2VudHMpIC8gMTAwO1xuICAgICAgcmV0dXJuIG5lZWRlZEluZztcbiAgICB9KVxuICAgIHJldHVybiBkaWZmZXJlbmNlO1xuICB9XG59XG5cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9IChVc2VyKTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gMDpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIG11bHRpIC4vc3JjL3NjcmlwdHMuanMgLi9kaXN0L2J1bmRsZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgL1VzZXJzL25hdGhhbmllbG1pbGxhcmQvVHVyaW5nL01vZF8yL3doYXRjaGFDb29raW4vc3JjL3NjcmlwdHMuanMgKi9cIi4vc3JjL3NjcmlwdHMuanNcIik7XG5tb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC9Vc2Vycy9uYXRoYW5pZWxtaWxsYXJkL1R1cmluZy9Nb2RfMi93aGF0Y2hhQ29va2luL2Rpc3QvYnVuZGxlLmpzICovXCIuL2Rpc3QvYnVuZGxlLmpzXCIpO1xuXG5cbi8qKiovIH0pXG5cbi8qKioqKiovIH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk4dmQyVmljR0ZqYXk5aWIyOTBjM1J5WVhBaUxDSjNaV0p3WVdOck9pOHZMeTR2WkdsemRDOWlkVzVrYkdVdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmMzSmpMMk56Y3k5emRIbHNaWE11YzJOemN5SXNJbmRsWW5CaFkyczZMeTh2TGk5dWIyUmxYMjF2WkhWc1pYTXZZM056TFd4dllXUmxjaTlrYVhOMEwzSjFiblJwYldVdllYQnBMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMMjV2WkdWZmJXOWtkV3hsY3k5emRIbHNaUzFzYjJGa1pYSXZiR2xpTDJGa1pGTjBlV3hsY3k1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5dWIyUmxYMjF2WkhWc1pYTXZjM1I1YkdVdGJHOWhaR1Z5TDJ4cFlpOTFjbXh6TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDNOeVl5OWpiMjlyWW05dmF5NXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXpjbU12WTNOekwzTjBlV3hsY3k1elkzTnpQekV6WWpFaUxDSjNaV0p3WVdOck9pOHZMeTR2YzNKakwyUnZiVlZ3WkdGMFpYTXVhbk1pTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDNCaGJuUnllUzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl6Y21NdmNtVmphWEJsTG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDNOeVl5OXpZM0pwY0hSekxtcHpJaXdpZDJWaWNHRmphem92THk4dUwzTnlZeTkxYzJWeUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdVVUZCUVR0UlFVTkJPenRSUVVWQk8xRkJRMEU3TzFGQlJVRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdPMUZCUlVFN1VVRkRRVHM3VVVGRlFUdFJRVU5CT3p0UlFVVkJPMUZCUTBFN1VVRkRRVHM3TzFGQlIwRTdVVUZEUVRzN1VVRkZRVHRSUVVOQk96dFJRVVZCTzFGQlEwRTdVVUZEUVR0UlFVTkJMREJEUVVFd1F5eG5RMEZCWjBNN1VVRkRNVVU3VVVGRFFUczdVVUZGUVR0UlFVTkJPMUZCUTBFN1VVRkRRU3gzUkVGQmQwUXNhMEpCUVd0Q08xRkJRekZGTzFGQlEwRXNhVVJCUVdsRUxHTkJRV003VVVGREwwUTdPMUZCUlVFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQkxIbERRVUY1UXl4cFEwRkJhVU03VVVGRE1VVXNaMGhCUVdkSUxHMUNRVUZ0UWl4RlFVRkZPMUZCUTNKSk8xRkJRMEU3TzFGQlJVRTdVVUZEUVR0UlFVTkJPMUZCUTBFc01rSkJRVEpDTERCQ1FVRXdRaXhGUVVGRk8xRkJRM1pFTEdsRFFVRnBReXhsUVVGbE8xRkJRMmhFTzFGQlEwRTdVVUZEUVRzN1VVRkZRVHRSUVVOQkxITkVRVUZ6UkN3clJFRkJLMFE3TzFGQlJYSklPMUZCUTBFN096dFJRVWRCTzFGQlEwRTdPenM3T3pzN096czdPenRCUTJ4R1FTdzJRa0ZCTmtJN1FVRkROMEk3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHJSRUZCYTBRc1owTkJRV2RETzBGQlEyeEdPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEdkRlFVRm5SU3hyUWtGQmEwSTdRVUZEYkVZN1FVRkRRU3g1UkVGQmVVUXNZMEZCWXp0QlFVTjJSVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEdsRVFVRnBSQ3hwUTBGQmFVTTdRVUZEYkVZc2QwaEJRWGRJTEcxQ1FVRnRRaXhGUVVGRk8wRkJRemRKTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHMURRVUZ0UXl3d1FrRkJNRUlzUlVGQlJUdEJRVU12UkN4NVEwRkJlVU1zWlVGQlpUdEJRVU40UkR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzT0VSQlFUaEVMQ3RFUVVFclJEdEJRVU0zU0R0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZWQlFWVTdRVUZEVmp0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN096dEJRVWxCTEU5QlFVODdPMEZCUlZBN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJMRzFEUVVGdFF5d3lSRUZCTWtRc05rSkJRVFpDTEZOQlFWTXNSVUZCUlR0QlFVTjBTVHM3TzBGQlIwRXNUMEZCVHpzN1FVRkZVQ3hWUVVGVk8wRkJRMVlzTWtOQlFUSkRMR05CUVdNc01uSktPenM3T3pzN096czdPenRCUTJwSWVrUXNNa0pCUVRKQ0xHMUNRVUZQTEVOQlFVTXNkMGRCUVcxRU8wRkJRM1JHTzBGQlEwRXNZMEZCWXl4UlFVRlRMRk5CUVZNc09FSkJRVGhDTERKQ1FVRXlRaXhyUWtGQmEwSXNhVUpCUVdsQ0xFVkJRVVVzVlVGQlZTd3lRa0ZCTWtJc2VVTkJRWGxETEdsQ1FVRnBRaXhGUVVGRkxGVkJRVlVzT0VKQlFUaENMR2xDUVVGcFFpeG5Ra0ZCWjBJc2EwSkJRV3RDTERSQ1FVRTBRaXhGUVVGRkxHdENRVUZyUWl4clFrRkJhMElzYlVOQlFXMURMSGRDUVVGM1FpeHBRa0ZCYVVJc1owSkJRV2RDTERoQ1FVRTRRaXd5UWtGQk1rSXNSVUZCUlN4UlFVRlJMRzlDUVVGdlFpeDFRa0ZCZFVJc2EwSkJRV3RDTEhGQ1FVRnhRaXh6UWtGQmMwSXNaVUZCWlN4RlFVRkZMRk5CUVZNc2EwSkJRV3RDTEd0Q1FVRnJRaXhGUVVGRkxHZENRVUZuUWl4dlFrRkJiMElzTWtKQlFUSkNMRGhDUVVFNFFpeG5RMEZCWjBNc2FVTkJRV2xETERCQ1FVRXdRaXhGUVVGRkxITkNRVUZ6UWl4blEwRkJaME1zUlVGQlJTeDFRa0ZCZFVJc1owTkJRV2RETEVWQlFVVXNiVUpCUVcxQ0xHdENRVUZyUWl4dFEwRkJiVU1zZDBKQlFYZENMRVZCUVVVc1pVRkJaU3h2UWtGQmIwSXNiVUpCUVcxQ0xIVkNRVUYxUWl4eFFrRkJjVUlzUlVGQlJTeHJRa0ZCYTBJc2EwSkJRV3RDTERoQ1FVRTRRaXgzUWtGQmQwSXNSVUZCUlN4cFFrRkJhVUlzYjBKQlFXOUNMR2RDUVVGblFpeHBRa0ZCYVVJc1JVRkJSU3h0UWtGQmJVSXNPRUpCUVRoQ0xESkNRVUV5UWl4bFFVRmxMRzlDUVVGdlFpeEZRVUZGTEhsQ1FVRjVRaXhuUTBGQlowTXNSVUZCUlN3d1FrRkJNRUlzWjBOQlFXZERMRVZCUVVVc2JVSkJRVzFDTERKQ1FVRXlRaXh2UWtGQmIwSXNiVUpCUVcxQ0xFVkJRVVVzWjBKQlFXZENMR3RDUVVGclFpeHRRa0ZCYlVJc01FTkJRVEJETEd0Q1FVRnJRaXhyUWtGQmEwSXNSVUZCUlN4aFFVRmhMR3RDUVVGclFpeEZRVUZGTEZOQlFWTXNiMEpCUVc5Q0xFVkJRVVVzYTBKQlFXdENMREpDUVVFeVFpeHBRa0ZCYVVJc1owSkJRV2RDTEc5Q1FVRnZRaXhGUVVGRkxIZENRVUYzUWl4blEwRkJaME1zUlVGQlJTeDVRa0ZCZVVJc1owTkJRV2RETEVWQlFVVXNhVUpCUVdsQ0xEaENRVUU0UWl4clFrRkJhMElzWlVGQlpTeEZRVUZGTEZWQlFWVXNaVUZCWlN4RlFVRkZMR1ZCUVdVc09FSkJRVGhDTEdsRFFVRnBReXhuUTBGQlowTXNaVUZCWlN4dFJrRkJiVVlzUlVGQlJTeFhRVUZYTERoQ1FVRTRRaXd5UWtGQk1rSXNaMEpCUVdkQ0xFVkJRVVVzYTBKQlFXdENMRGhDUVVFNFFpeHJRMEZCYTBNc2EwSkJRV3RDTEcxRFFVRnRReXgzUWtGQmQwSXNSVUZCUlN4VlFVRlZMR2RDUVVGblFpd3dRMEZCTUVNc1JVRkJSU3d5UWtGQk1rSXNiMEpCUVc5Q0xHMUNRVUZ0UWl4blFrRkJaMElzUlVGQlJTeFJRVUZSTEc5Q1FVRnZRaXgxUWtGQmRVSXNPRUpCUVRoQ0xHdERRVUZyUXl4alFVRmpMSGRDUVVGM1FpeHhRa0ZCY1VJc2QwSkJRWGRDTEVWQlFVVXNhMEpCUVd0Q0xEaENRVUU0UWl4clEwRkJhME1zYTBKQlFXdENMRFJDUVVFMFFpeDNRa0ZCZDBJc2IwSkJRVzlDTEhWQ1FVRjFRaXhGUVVGRkxHMUNRVUZ0UWl4clFrRkJhMElzWlVGQlpTd3lRa0ZCTWtJc05rSkJRVFpDTEVWQlFVVXNlVUpCUVhsQ0xHMUNRVUZ0UWl4RlFVRkZMREJDUVVFd1FpdzJRa0ZCTmtJc1JVRkJSU3hYUVVGWExEaENRVUU0UWl4dlFrRkJiMElzWTBGQll5eEZRVUZGTEhOQ1FVRnpRaXh0UmtGQmJVWXNhVU5CUVdsRExFVkJRVVVzY1VKQlFYRkNMR3RDUVVGclFpeHJRa0ZCYTBJc2NVTkJRWEZETEdkRFFVRm5ReXhwUWtGQmFVSXNSVUZCUlN3d1FrRkJNRUlzYlVKQlFXMUNMR3RDUVVGclFpeEZRVUZGTEhsQ1FVRjVRaXg1UWtGQmVVSXNiVUpCUVcxQ0xHZENRVUZuUWl4eFFrRkJjVUlzYjBKQlFXOUNMRzlDUVVGdlFpeHRRa0ZCYlVJc1JVRkJSU3dyUWtGQkswSXNhMEpCUVd0Q0xHOUNRVUZ2UWl4RlFVRkZMREJDUVVFd1Fpd3dRa0ZCTUVJc1owSkJRV2RDTEc5Q1FVRnZRaXh0UWtGQmJVSXNiMEpCUVc5Q0xITkNRVUZ6UWl4RlFVRkZMSFZDUVVGMVFpeHRRa0ZCYlVJc1JVRkJSU3h0UWtGQmJVSXNPRUpCUVRoQ0xHbERRVUZwUXl4blEwRkJaME1zWlVGQlpTdzBSa0ZCTkVZc2MwSkJRWE5DTEVWQlFVVXNaMFJCUVdkRUxITkNRVUZ6UWl4RlFVRkZMQ3RDUVVFclFpeFZRVUZWTEdsQ1FVRnBRaXhGUVVGRkxHZENRVUZuUWl4dlFrRkJiMElzY1VKQlFYRkNMRFJEUVVFMFF5eG5RMEZCWjBNc2IwSkJRVzlDTEVWQlFVVXNjVUpCUVhGQ0xHOUNRVUZ2UWl4dlEwRkJiME1zTmtKQlFUWkNMREJDUVVFd1FpeEZRVUZGTERCQ1FVRXdRaXh2UWtGQmIwSXNSVUZCUlN4RlFVRkZMQ3RDUVVFclFpeG5Ra0ZCWjBJc2IwSkJRVzlDTEhGQ1FVRnhRaXcwUTBGQk5FTXNaME5CUVdkRExHOUNRVUZ2UWl4RlFVRkZMSEZDUVVGeFFpeHZRa0ZCYjBJc09FSkJRVGhDTERaQ1FVRTJRaXd3UWtGQk1FSXNSVUZCUlN4dFFrRkJiVUlzYjBKQlFXOUNMRVZCUVVVc1JVRkJSU3dyUWtGQkswSXNiME5CUVc5RExEWkNRVUUyUWl3d1FrRkJNRUlzUlVGQlJTeHRRa0ZCYlVJc2MwSkJRWE5DTEVWQlFVVXNaMEpCUVdkQ0xHOUNRVUZ2UWl4eFFrRkJjVUlzTkVOQlFUUkRMR2REUVVGblF5eHZRa0ZCYjBJc1JVRkJSU3hyUWtGQmEwSXNiVUpCUVcxQ0xFVkJRVVVzWTBGQll5eHZRa0ZCYjBJc05rSkJRVFpDTERCQ1FVRXdRaXhGUVVGRkxGZEJRVmNzY1VKQlFYRkNMRVZCUVVVc1JVRkJSVHM3T3pzN096czdPenM3T3pzN1FVTkdMM05NT3p0QlFVVmlPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEdkQ1FVRm5RanM3UVVGRmFFSTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzZFVOQlFYVkRMR2RDUVVGblFqdEJRVU4yUkN4UFFVRlBPMEZCUTFBN1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFRDeEpRVUZKT3pzN1FVRkhTanRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRU3h0UWtGQmJVSXNhVUpCUVdsQ08wRkJRM0JET3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTEdWQlFXVXNiMEpCUVc5Q08wRkJRMjVETERSQ1FVRTBRanRCUVVNMVFqdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVTBGQlV6dEJRVU5VTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNTMEZCU3p0QlFVTk1PMEZCUTBFN08wRkJSVUU3UVVGRFFTeERRVUZET3pzN1FVRkhSRHRCUVVOQk8wRkJRMEU3UVVGRFFTeHhSRUZCY1VRc1kwRkJZenRCUVVOdVJUdEJRVU5CTEVNN096czdPenM3T3pzN08wRkRjRVpCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVOQlFVTTdPMEZCUlVRN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN3NFEwRkJPRU03UVVGRE9VTTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1MwRkJTenRCUVVOTU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1EwRkJRenM3UVVGRlJEdEJRVU5CTzBGQlEwRTdPMEZCUlVFc1kwRkJZeXh0UWtGQlR5eERRVUZETEhWRVFVRlJPenRCUVVVNVFqdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFN08wRkJSVUVzYVVKQlFXbENMRzFDUVVGdFFqdEJRVU53UXp0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFTeHBRa0ZCYVVJc2MwSkJRWE5DTzBGQlEzWkRPenRCUVVWQk8wRkJRMEVzYlVKQlFXMUNMREpDUVVFeVFqczdRVUZGT1VNN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMR2RDUVVGblFpeHRRa0ZCYlVJN1FVRkRia003UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQkxHbENRVUZwUWl3eVFrRkJNa0k3UVVGRE5VTTdRVUZEUVRzN1FVRkZRU3hSUVVGUkxIVkNRVUYxUWp0QlFVTXZRanRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JT3p0QlFVVkJMR2xDUVVGcFFpeDFRa0ZCZFVJN1FVRkRlRU03UVVGRFFUczdRVUZGUVN3eVFrRkJNa0k3UVVGRE0wSTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVN4blFrRkJaMElzYVVKQlFXbENPMEZCUTJwRE8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4alFVRmpPenRCUVVWa0xHdEVRVUZyUkN4elFrRkJjMEk3UVVGRGVFVTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEdEJRVU5CTEVkQlFVYzdRVUZEU0R0QlFVTkJPMEZCUTBFN1FVRkRRU3hGUVVGRk8wRkJRMFk3UVVGRFFTeEZRVUZGTzBGQlEwWTdRVUZEUVR0QlFVTkJMRVZCUVVVN1FVRkRSanRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hGUVVGRk8wRkJRMFk3TzBGQlJVRTdRVUZEUVN4TFFVRkxMRXRCUVhkRExFVkJRVVVzUlVGRk4wTTdPMEZCUlVZc1VVRkJVU3h6UWtGQmFVSTdRVUZEZWtJN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1RVRkJUVHRCUVVOT08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFTeEZRVUZGTzBGQlEwWTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzUlVGQlJUdEJRVU5HTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hEUVVGRE96dEJRVVZFTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxFVkJRVVU3UVVGRFJqdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNSVUZCUlR0QlFVTkdPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzZFVSQlFYVkVPMEZCUTNaRU96dEJRVVZCTERaQ1FVRTJRaXh0UWtGQmJVSTdPMEZCUldoRU96dEJRVVZCT3p0QlFVVkJPMEZCUTBFN096czdPenM3T3pzN096czdRVU01V1VFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzZDBOQlFYZERMRmRCUVZjc1JVRkJSVHRCUVVOeVJDeDNRMEZCZDBNc1YwRkJWeXhGUVVGRk96dEJRVVZ5UkR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEdEJRVU5CTEhORFFVRnpRenRCUVVOMFF5eEhRVUZITzBGQlEwZzdRVUZEUVN3NFJFRkJPRVE3UVVGRE9VUTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxFVkJRVVU3TzBGQlJVWTdRVUZEUVR0QlFVTkJPenM3T3pzN096czdPenM3TzBGRGVFWkJPMEZCUVVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hQUVVGUE8wRkJRMUE3UVVGRFFUdEJRVU5CTzBGQlEwRXNTMEZCU3p0QlFVTk1PMEZCUTBFN08wRkJSV1VzZFVWQlFWRXNSVUZCUXpzN096czdPenM3T3pzN096dEJRMmhDZUVJc1kwRkJZeXh0UWtGQlR5eERRVUZETEcxT1FVRjNSenM3UVVGRk9VZ3NORU5CUVRSRExGRkJRVk03TzBGQlJYSkVPMEZCUTBFN096czdRVUZKUVN4bFFVRmxPenRCUVVWbU8wRkJRMEU3TzBGQlJVRXNZVUZCWVN4dFFrRkJUeXhEUVVGRExITkhRVUZ0UkRzN1FVRkZlRVU3TzBGQlJVRXNSMEZCUnl4TFFVRlZMRVZCUVVVc1JUczdPenM3T3pzN096czdPMEZEYmtKbU8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCT0VJN1FVRkRRVHRCUVVOS08wRkJRMUU3T3p0QlFVZHNRenM3UVVGRlFTeFpRVUZaTzBGQlExb3NhVUpCUVdsQ08wRkJRMnBDTEhOQ1FVRnpRanRCUVVOMFFpeFZRVUZWTzBGQlExWTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFBRVUZQTzBGQlExQTdRVUZEUVN4SFFVRkhPenRCUVVWSU8wRkJRMEVzY1VKQlFYRkNMQ3REUVVGTk8wRkJRek5DTERCQ1FVRXdRaXcyUTBGQlNUdEJRVU01UWp0QlFVTkJMREJDUVVFd1Fpd3JRMEZCVFR0QlFVTm9ReXhMUVVGTE8wRkJRMHdzT0VKQlFUaENMR2xFUVVGUk8wRkJRM1JETEVkQlFVYzdPMEZCUlVnN1FVRkRRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6czdRVUZGU0R0QlFVTkJPMEZCUTBFc01FTkJRVEJETEhGQ1FVRnhRanRCUVVNdlJDeEhRVUZIT3p0QlFVVklPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEV0QlFVczdRVUZEVEN4SFFVRkhPenRCUVVWSU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNTMEZCU3p0QlFVTk1PMEZCUTBFN1FVRkRRU3dyUWtGQkswSXNWVUZCVlR0QlFVTjZReXhwUTBGQmFVTXNWVUZCVlR0QlFVTXpRenRCUVVOQkxITkZRVUZ6UlN4VlFVRlZPMEZCUTJoR0xEQkNRVUV3UWl4VlFVRlZPMEZCUTNCRE8wRkJRMEU3UVVGRFFUdEJRVU5CTEc5RVFVRnZSQ3hWUVVGVkxGZEJRVmNzVlVGQlZTeEhRVUZITEZWQlFWVTdRVUZEYUVjN1FVRkRRVHRCUVVOQkxDdENRVUVyUWl4VlFVRlZMRWxCUVVrc1dVRkJXVHRCUVVONlJDdzJSRUZCTmtRc1ZVRkJWVHRCUVVOMlJTeG5SRUZCWjBRc1ZVRkJWU3hSUVVGUkxHRkJRV0U3UVVGREwwVTdRVUZEUVR0QlFVTkJMRWRCUVVjN08wRkJSVWc3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRXRCUVVzN1FVRkRUQ3hIUVVGSE96dEJRVVZJTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPenRCUVVWSU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUzBGQlN6dEJRVU5NTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1QwRkJUenRCUVVOUU8wRkJRMEVzUjBGQlJ6czdRVUZGU0R0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEV0QlFVczdRVUZEVER0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE96dEJRVVZJTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hyUWtGQmEwSXNiVUpCUVcxQ0xFZEJRVWNzVTBGQlV5eFJRVUZSTEZOQlFWTTdRVUZEYkVVc1QwRkJUenRCUVVOUU8wRkJRMEU3UVVGRFFTeFBRVUZQTzBGQlExQXNjMFZCUVhORkxGVkJRVlU3UVVGRGFFWXNhVU5CUVdsRExGVkJRVlU3UVVGRE0wTTdRVUZEUVN3d1JVRkJNRVVzVlVGQlZUdEJRVU53Uml4dFEwRkJiVU1zVlVGQlZUdEJRVU0zUXp0QlFVTkJPMEZCUTBFc2FVWkJRV2xHTEZWQlFWVXNSMEZCUnl4VlFVRlZPMEZCUTNoSE8wRkJRMEU3UVVGRFFTeFpRVUZaTEZsQlFWazdRVUZEZUVJc09FTkJRVGhETEZWQlFWVTdRVUZEZUVRc1lVRkJZU3hoUVVGaE8wRkJRekZDTzBGQlEwRXNNRWRCUVRCSExGVkJRVlVzUjBGQlJ5eFZRVUZWTzBGQlEycEpMR2xHUVVGcFJpeFZRVUZWTEVkQlFVY3NWVUZCVlR0QlFVTjRSenRCUVVOQk8wRkJRMEU3UVVGRFFTeFpRVUZaTEhsQ1FVRjVRanRCUVVOeVF6dEJRVU5CTEN0RFFVRXJReXhYUVVGWE8wRkJRekZFTzBGQlEwRXNTMEZCU3p0QlFVTk1MRWRCUVVjN08wRkJSVWc3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1MwRkJTenRCUVVOTU8wRkJRMEU3UVVGRFFTeEhRVUZIT3p0QlFVVklPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeExRVUZMTzBGQlEwdzdRVUZEUVR0QlFVTkJMRWRCUVVjN08wRkJSVWc3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEdkRFFVRm5ReXh6UTBGQmMwTXNSMEZCUnl4NVFrRkJlVUlzUjBGQlJ5eExRVUZMTzBGQlF6RkhMRXRCUVVzN1FVRkRURHRCUVVOQk8wRkJRMEVzTUVKQlFUQkNMRmxCUVZrc1NVRkJTU3hwUWtGQmFVSTdRVUZETTBRc1MwRkJTenRCUVVOTU8wRkJRMEU3UVVGRFFTeFpRVUZaTEc5Q1FVRnZRanRCUVVOb1F5eDFRMEZCZFVNc2NVSkJRWEZDTERCQ1FVRXdRaXh2UWtGQmIwSTdRVUZETVVjN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFZRVUZWTEc5RFFVRnZRenRCUVVNNVF6dEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRFpFUVVFMlJEdEJRVU0zUkN4VlFVRlZMRGhDUVVFNFFqdEJRVU40UXp0QlFVTkJMSGREUVVGM1F5eExRVUZMTzBGQlF6ZERPMEZCUTBFN1FVRkRRU3hIUVVGSE96dEJRVVZJTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRXNSMEZCUnpzN1FVRkZTRHRCUVVOQk8wRkJRMEVzUjBGQlJ6czdRVUZGU0R0QlFVTkJPMEZCUTBFc2JVVkJRVzFGTEd0Q1FVRnJRanRCUVVOeVJqdEJRVU5CTzBGQlEwRXNTMEZCU3p0QlFVTk1PMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3TzBGQlJVZzdRVUZEUVR0QlFVTkJMRzFGUVVGdFJTeHJRa0ZCYTBJN1FVRkRja1k3UVVGRFFUdEJRVU5CTEVkQlFVYzdPMEZCUlVnN08wRkJSV2RDTEhsRlFVRlZMRVZCUVVNN096czdPenM3T3pzN096czdRVU51VWpOQ08wRkJRVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEU5QlFVODdRVUZEVUR0QlFVTkJPMEZCUTBFN1FVRkRRU3hMUVVGTExFbEJRVWs3UVVGRFZEdEJRVU5CT3p0QlFVVmxMSEZGUVVGTkxFVkJRVU03T3pzN096czdPenM3T3pzN1FVTnNRblJDTzBGQlFVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRTlCUVU4N1FVRkRVQ3hMUVVGTE8wRkJRMHc3UVVGRFFUczdRVUZGUVRzN1FVRkZaU3h4UlVGQlRTeEZRVUZET3pzN096czdPenM3T3pzN08wRkRNVUowUWp0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVFeVFqczdRVUZGVnpzN1FVRkZkRU03UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzU1VGQlNTeHRSRUZCVlR0QlFVTmtMRWRCUVVjN1FVRkRTQ3hKUVVGSkxHMUVRVUZWTzBGQlEyUXNSMEZCUnp0QlFVTklMRWxCUVVrc2JVUkJRVlU3UVVGRFpDeEhRVUZITzBGQlEwZzdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hKUVVGSkxHMUVRVUZWTEdWQlFXVXNiVVJCUVZVN1FVRkRka01zUjBGQlJ6dEJRVU5JTEVsQlFVa3NiVVJCUVZVN1FVRkRaQ3hIUVVGSE8wRkJRMGdzU1VGQlNTeHRSRUZCVlR0QlFVTmtMRWRCUVVjN1FVRkRTQ3hKUVVGSkxHMUVRVUZWTzBGQlEyUTdRVUZEUVRzN1FVRkZRU3huUWtGQlowSXNiVVJCUVZVN1FVRkRNVUk3UVVGRFFUdEJRVU5CTERoRFFVRTRReXh0UkVGQlZUdEJRVU40UkN3eVEwRkJNa01zYlVSQlFWVTdRVUZEY2tRc2IwTkJRVzlETEcxRVFVRlZPenM3T3pzN096czdPenM3TzBGRGNrTTVRenRCUVVGQk8wRkJRVGhDT3p0QlFVVTVRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGTkJRVk03UVVGRFZEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRk5CUVZNN1FVRkRWQ3hQUVVGUE8wRkJRMUE3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkxPenRCUVVWTU96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGTkJRVk03UVVGRFZEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRk5CUVZNN1FVRkRWQ3hQUVVGUE8wRkJRMUE3UVVGRFFUdEJRVU5CTzBGQlEwRXNTMEZCU3p0QlFVTk1PenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNlVUpCUVhsQ0xDdERRVUZOTzBGQlF5OUNPMEZCUTBFN1FVRkRRU3hQUVVGUE8wRkJRMUE3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRk5CUVZNN1FVRkRWQ3hMUVVGTE8wRkJRMHc3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUzBGQlN6dEJRVU5NT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeExRVUZMTzBGQlEwdzdRVUZEUVN3clFrRkJLMElzVVVGQlVUdEJRVU4yUXp0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hMUVVGTE8wRkJRMHc3UVVGRFFUdEJRVU5CT3pzN1FVRkhaU3h0UlVGQlNTeEZRVUZESWl3aVptbHNaU0k2SW1KMWJtUnNaUzVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpQmNkQzh2SUZSb1pTQnRiMlIxYkdVZ1kyRmphR1ZjYmlCY2RIWmhjaUJwYm5OMFlXeHNaV1JOYjJSMWJHVnpJRDBnZTMwN1hHNWNiaUJjZEM4dklGUm9aU0J5WlhGMWFYSmxJR1oxYm1OMGFXOXVYRzRnWEhSbWRXNWpkR2x2YmlCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktHMXZaSFZzWlVsa0tTQjdYRzVjYmlCY2RGeDBMeThnUTJobFkyc2dhV1lnYlc5a2RXeGxJR2x6SUdsdUlHTmhZMmhsWEc0Z1hIUmNkR2xtS0dsdWMzUmhiR3hsWkUxdlpIVnNaWE5iYlc5a2RXeGxTV1JkS1NCN1hHNGdYSFJjZEZ4MGNtVjBkWEp1SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE5iYlc5a2RXeGxTV1JkTG1WNGNHOXlkSE03WEc0Z1hIUmNkSDFjYmlCY2RGeDBMeThnUTNKbFlYUmxJR0VnYm1WM0lHMXZaSFZzWlNBb1lXNWtJSEIxZENCcGRDQnBiblJ2SUhSb1pTQmpZV05vWlNsY2JpQmNkRngwZG1GeUlHMXZaSFZzWlNBOUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmJXOWtkV3hsU1dSZElEMGdlMXh1SUZ4MFhIUmNkR2s2SUcxdlpIVnNaVWxrTEZ4dUlGeDBYSFJjZEd3NklHWmhiSE5sTEZ4dUlGeDBYSFJjZEdWNGNHOXlkSE02SUh0OVhHNGdYSFJjZEgwN1hHNWNiaUJjZEZ4MEx5OGdSWGhsWTNWMFpTQjBhR1VnYlc5a2RXeGxJR1oxYm1OMGFXOXVYRzRnWEhSY2RHMXZaSFZzWlhOYmJXOWtkV3hsU1dSZExtTmhiR3dvYlc5a2RXeGxMbVY0Y0c5eWRITXNJRzF2WkhWc1pTd2diVzlrZFd4bExtVjRjRzl5ZEhNc0lGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHBPMXh1WEc0Z1hIUmNkQzh2SUVac1lXY2dkR2hsSUcxdlpIVnNaU0JoY3lCc2IyRmtaV1JjYmlCY2RGeDBiVzlrZFd4bExtd2dQU0IwY25WbE8xeHVYRzRnWEhSY2RDOHZJRkpsZEhWeWJpQjBhR1VnWlhod2IzSjBjeUJ2WmlCMGFHVWdiVzlrZFd4bFhHNGdYSFJjZEhKbGRIVnliaUJ0YjJSMWJHVXVaWGh3YjNKMGN6dGNiaUJjZEgxY2JseHVYRzRnWEhRdkx5QmxlSEJ2YzJVZ2RHaGxJRzF2WkhWc1pYTWdiMkpxWldOMElDaGZYM2RsWW5CaFkydGZiVzlrZFd4bGMxOWZLVnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXRJRDBnYlc5a2RXeGxjenRjYmx4dUlGeDBMeThnWlhod2IzTmxJSFJvWlNCdGIyUjFiR1VnWTJGamFHVmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVl5QTlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTTdYRzVjYmlCY2RDOHZJR1JsWm1sdVpTQm5aWFIwWlhJZ1puVnVZM1JwYjI0Z1ptOXlJR2hoY20xdmJua2daWGh3YjNKMGMxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1a0lEMGdablZ1WTNScGIyNG9aWGh3YjNKMGN5d2dibUZ0WlN3Z1oyVjBkR1Z5S1NCN1hHNGdYSFJjZEdsbUtDRmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbThvWlhod2IzSjBjeXdnYm1GdFpTa3BJSHRjYmlCY2RGeDBYSFJQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb1pYaHdiM0owY3l3Z2JtRnRaU3dnZXlCbGJuVnRaWEpoWW14bE9pQjBjblZsTENCblpYUTZJR2RsZEhSbGNpQjlLVHRjYmlCY2RGeDBmVnh1SUZ4MGZUdGNibHh1SUZ4MEx5OGdaR1ZtYVc1bElGOWZaWE5OYjJSMWJHVWdiMjRnWlhod2IzSjBjMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXlJRDBnWm5WdVkzUnBiMjRvWlhod2IzSjBjeWtnZTF4dUlGeDBYSFJwWmloMGVYQmxiMllnVTNsdFltOXNJQ0U5UFNBbmRXNWtaV1pwYm1Wa0p5QW1KaUJUZVcxaWIyd3VkRzlUZEhKcGJtZFVZV2NwSUh0Y2JpQmNkRngwWEhSUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29aWGh3YjNKMGN5d2dVM2x0WW05c0xuUnZVM1J5YVc1blZHRm5MQ0I3SUhaaGJIVmxPaUFuVFc5a2RXeGxKeUI5S1R0Y2JpQmNkRngwZlZ4dUlGeDBYSFJQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb1pYaHdiM0owY3l3Z0oxOWZaWE5OYjJSMWJHVW5MQ0I3SUhaaGJIVmxPaUIwY25WbElIMHBPMXh1SUZ4MGZUdGNibHh1SUZ4MEx5OGdZM0psWVhSbElHRWdabUZyWlNCdVlXMWxjM0JoWTJVZ2IySnFaV04wWEc0Z1hIUXZMeUJ0YjJSbElDWWdNVG9nZG1Gc2RXVWdhWE1nWVNCdGIyUjFiR1VnYVdRc0lISmxjWFZwY21VZ2FYUmNiaUJjZEM4dklHMXZaR1VnSmlBeU9pQnRaWEpuWlNCaGJHd2djSEp2Y0dWeWRHbGxjeUJ2WmlCMllXeDFaU0JwYm5SdklIUm9aU0J1YzF4dUlGeDBMeThnYlc5a1pTQW1JRFE2SUhKbGRIVnliaUIyWVd4MVpTQjNhR1Z1SUdGc2NtVmhaSGtnYm5NZ2IySnFaV04wWEc0Z1hIUXZMeUJ0YjJSbElDWWdPSHd4T2lCaVpXaGhkbVVnYkdsclpTQnlaWEYxYVhKbFhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5RZ1BTQm1kVzVqZEdsdmJpaDJZV3gxWlN3Z2JXOWtaU2tnZTF4dUlGeDBYSFJwWmlodGIyUmxJQ1lnTVNrZ2RtRnNkV1VnUFNCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktIWmhiSFZsS1R0Y2JpQmNkRngwYVdZb2JXOWtaU0FtSURncElISmxkSFZ5YmlCMllXeDFaVHRjYmlCY2RGeDBhV1lvS0cxdlpHVWdKaUEwS1NBbUppQjBlWEJsYjJZZ2RtRnNkV1VnUFQwOUlDZHZZbXBsWTNRbklDWW1JSFpoYkhWbElDWW1JSFpoYkhWbExsOWZaWE5OYjJSMWJHVXBJSEpsZEhWeWJpQjJZV3gxWlR0Y2JpQmNkRngwZG1GeUlHNXpJRDBnVDJKcVpXTjBMbU55WldGMFpTaHVkV3hzS1R0Y2JpQmNkRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1eUtHNXpLVHRjYmlCY2RGeDBUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0c1ekxDQW5aR1ZtWVhWc2RDY3NJSHNnWlc1MWJXVnlZV0pzWlRvZ2RISjFaU3dnZG1Gc2RXVTZJSFpoYkhWbElIMHBPMXh1SUZ4MFhIUnBaaWh0YjJSbElDWWdNaUFtSmlCMGVYQmxiMllnZG1Gc2RXVWdJVDBnSjNOMGNtbHVaeWNwSUdadmNpaDJZWElnYTJWNUlHbHVJSFpoYkhWbEtTQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbVFvYm5Nc0lHdGxlU3dnWm5WdVkzUnBiMjRvYTJWNUtTQjdJSEpsZEhWeWJpQjJZV3gxWlZ0clpYbGRPeUI5TG1KcGJtUW9iblZzYkN3Z2EyVjVLU2s3WEc0Z1hIUmNkSEpsZEhWeWJpQnVjenRjYmlCY2RIMDdYRzVjYmlCY2RDOHZJR2RsZEVSbFptRjFiSFJGZUhCdmNuUWdablZ1WTNScGIyNGdabTl5SUdOdmJYQmhkR2xpYVd4cGRIa2dkMmwwYUNCdWIyNHRhR0Z5Ylc5dWVTQnRiMlIxYkdWelhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG00Z1BTQm1kVzVqZEdsdmJpaHRiMlIxYkdVcElIdGNiaUJjZEZ4MGRtRnlJR2RsZEhSbGNpQTlJRzF2WkhWc1pTQW1KaUJ0YjJSMWJHVXVYMTlsYzAxdlpIVnNaU0EvWEc0Z1hIUmNkRngwWm5WdVkzUnBiMjRnWjJWMFJHVm1ZWFZzZENncElIc2djbVYwZFhKdUlHMXZaSFZzWlZzblpHVm1ZWFZzZENkZE95QjlJRHBjYmlCY2RGeDBYSFJtZFc1amRHbHZiaUJuWlhSTmIyUjFiR1ZGZUhCdmNuUnpLQ2tnZXlCeVpYUjFjbTRnYlc5a2RXeGxPeUI5TzF4dUlGeDBYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1Rb1oyVjBkR1Z5TENBbllTY3NJR2RsZEhSbGNpazdYRzRnWEhSY2RISmxkSFZ5YmlCblpYUjBaWEk3WEc0Z1hIUjlPMXh1WEc0Z1hIUXZMeUJQWW1wbFkzUXVjSEp2ZEc5MGVYQmxMbWhoYzA5M2JsQnliM0JsY25SNUxtTmhiR3hjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVieUE5SUdaMWJtTjBhVzl1S0c5aWFtVmpkQ3dnY0hKdmNHVnlkSGtwSUhzZ2NtVjBkWEp1SUU5aWFtVmpkQzV3Y205MGIzUjVjR1V1YUdGelQzZHVVSEp2Y0dWeWRIa3VZMkZzYkNodlltcGxZM1FzSUhCeWIzQmxjblI1S1RzZ2ZUdGNibHh1SUZ4MEx5OGdYMTkzWldKd1lXTnJYM0IxWW14cFkxOXdZWFJvWDE5Y2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y0NBOUlGd2lYQ0k3WEc1Y2JseHVJRngwTHk4Z1RHOWhaQ0JsYm5SeWVTQnRiMlIxYkdVZ1lXNWtJSEpsZEhWeWJpQmxlSEJ2Y25SelhHNGdYSFJ5WlhSMWNtNGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWhmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5NZ1BTQXdLVHRjYmlJc0lpOHFLaW9xS2lvdklDaG1kVzVqZEdsdmJpaHRiMlIxYkdWektTQjdJQzh2SUhkbFluQmhZMnRDYjI5MGMzUnlZWEJjYmk4cUtpb3FLaW92SUZ4MEx5OGdWR2hsSUcxdlpIVnNaU0JqWVdOb1pWeHVMeW9xS2lvcUtpOGdYSFIyWVhJZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsY3lBOUlIdDlPMXh1THlvcUtpb3FLaTljYmk4cUtpb3FLaW92SUZ4MEx5OGdWR2hsSUhKbGNYVnBjbVVnWm5WdVkzUnBiMjVjYmk4cUtpb3FLaW92SUZ4MFpuVnVZM1JwYjI0Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aHRiMlIxYkdWSlpDa2dlMXh1THlvcUtpb3FLaTljYmk4cUtpb3FLaW92SUZ4MFhIUXZMeUJEYUdWamF5QnBaaUJ0YjJSMWJHVWdhWE1nYVc0Z1kyRmphR1ZjYmk4cUtpb3FLaW92SUZ4MFhIUnBaaWhwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYU2tnZTF4dUx5b3FLaW9xS2k4Z1hIUmNkRngwY21WMGRYSnVJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRMbVY0Y0c5eWRITTdYRzR2S2lvcUtpb3FMeUJjZEZ4MGZWeHVMeW9xS2lvcUtpOGdYSFJjZEM4dklFTnlaV0YwWlNCaElHNWxkeUJ0YjJSMWJHVWdLR0Z1WkNCd2RYUWdhWFFnYVc1MGJ5QjBhR1VnWTJGamFHVXBYRzR2S2lvcUtpb3FMeUJjZEZ4MGRtRnlJRzF2WkhWc1pTQTlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRJRDBnZTF4dUx5b3FLaW9xS2k4Z1hIUmNkRngwYVRvZ2JXOWtkV3hsU1dRc1hHNHZLaW9xS2lvcUx5QmNkRngwWEhSc09pQm1ZV3h6WlN4Y2JpOHFLaW9xS2lvdklGeDBYSFJjZEdWNGNHOXlkSE02SUh0OVhHNHZLaW9xS2lvcUx5QmNkRngwZlR0Y2JpOHFLaW9xS2lvdlhHNHZLaW9xS2lvcUx5QmNkRngwTHk4Z1JYaGxZM1YwWlNCMGFHVWdiVzlrZFd4bElHWjFibU4wYVc5dVhHNHZLaW9xS2lvcUx5QmNkRngwYlc5a2RXeGxjMXR0YjJSMWJHVkpaRjB1WTJGc2JDaHRiMlIxYkdVdVpYaHdiM0owY3l3Z2JXOWtkV3hsTENCdGIyUjFiR1V1Wlhod2IzSjBjeXdnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlrN1hHNHZLaW9xS2lvcUwxeHVMeW9xS2lvcUtpOGdYSFJjZEM4dklFWnNZV2NnZEdobElHMXZaSFZzWlNCaGN5QnNiMkZrWldSY2JpOHFLaW9xS2lvdklGeDBYSFJ0YjJSMWJHVXViQ0E5SUhSeWRXVTdYRzR2S2lvcUtpb3FMMXh1THlvcUtpb3FLaThnWEhSY2RDOHZJRkpsZEhWeWJpQjBhR1VnWlhod2IzSjBjeUJ2WmlCMGFHVWdiVzlrZFd4bFhHNHZLaW9xS2lvcUx5QmNkRngwY21WMGRYSnVJRzF2WkhWc1pTNWxlSEJ2Y25Sek8xeHVMeW9xS2lvcUtpOGdYSFI5WEc0dktpb3FLaW9xTDF4dUx5b3FLaW9xS2k5Y2JpOHFLaW9xS2lvdklGeDBMeThnWlhod2IzTmxJSFJvWlNCdGIyUjFiR1Z6SUc5aWFtVmpkQ0FvWDE5M1pXSndZV05yWDIxdlpIVnNaWE5mWHlsY2JpOHFLaW9xS2lvdklGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV0SUQwZ2JXOWtkV3hsY3p0Y2JpOHFLaW9xS2lvdlhHNHZLaW9xS2lvcUx5QmNkQzh2SUdWNGNHOXpaU0IwYUdVZ2JXOWtkV3hsSUdOaFkyaGxYRzR2S2lvcUtpb3FMeUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVl5QTlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTTdYRzR2S2lvcUtpb3FMMXh1THlvcUtpb3FLaThnWEhRdkx5QmtaV1pwYm1VZ1oyVjBkR1Z5SUdaMWJtTjBhVzl1SUdadmNpQm9ZWEp0YjI1NUlHVjRjRzl5ZEhOY2JpOHFLaW9xS2lvdklGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVrSUQwZ1puVnVZM1JwYjI0b1pYaHdiM0owY3l3Z2JtRnRaU3dnWjJWMGRHVnlLU0I3WEc0dktpb3FLaW9xTHlCY2RGeDBhV1lvSVY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJ5aGxlSEJ2Y25SekxDQnVZVzFsS1NrZ2UxeHVMeW9xS2lvcUtpOGdYSFJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRzVoYldVc0lIc2daVzUxYldWeVlXSnNaVG9nZEhKMVpTd2daMlYwT2lCblpYUjBaWElnZlNrN1hHNHZLaW9xS2lvcUx5QmNkRngwZlZ4dUx5b3FLaW9xS2k4Z1hIUjlPMXh1THlvcUtpb3FLaTljYmk4cUtpb3FLaW92SUZ4MEx5OGdaR1ZtYVc1bElGOWZaWE5OYjJSMWJHVWdiMjRnWlhod2IzSjBjMXh1THlvcUtpb3FLaThnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuSWdQU0JtZFc1amRHbHZiaWhsZUhCdmNuUnpLU0I3WEc0dktpb3FLaW9xTHlCY2RGeDBhV1lvZEhsd1pXOW1JRk41YldKdmJDQWhQVDBnSjNWdVpHVm1hVzVsWkNjZ0ppWWdVM2x0WW05c0xuUnZVM1J5YVc1blZHRm5LU0I3WEc0dktpb3FLaW9xTHlCY2RGeDBYSFJQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb1pYaHdiM0owY3l3Z1UzbHRZbTlzTG5SdlUzUnlhVzVuVkdGbkxDQjdJSFpoYkhWbE9pQW5UVzlrZFd4bEp5QjlLVHRjYmk4cUtpb3FLaW92SUZ4MFhIUjlYRzR2S2lvcUtpb3FMeUJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJQ2RmWDJWelRXOWtkV3hsSnl3Z2V5QjJZV3gxWlRvZ2RISjFaU0I5S1R0Y2JpOHFLaW9xS2lvdklGeDBmVHRjYmk4cUtpb3FLaW92WEc0dktpb3FLaW9xTHlCY2RDOHZJR055WldGMFpTQmhJR1poYTJVZ2JtRnRaWE53WVdObElHOWlhbVZqZEZ4dUx5b3FLaW9xS2k4Z1hIUXZMeUJ0YjJSbElDWWdNVG9nZG1Gc2RXVWdhWE1nWVNCdGIyUjFiR1VnYVdRc0lISmxjWFZwY21VZ2FYUmNiaThxS2lvcUtpb3ZJRngwTHk4Z2JXOWtaU0FtSURJNklHMWxjbWRsSUdGc2JDQndjbTl3WlhKMGFXVnpJRzltSUhaaGJIVmxJR2x1ZEc4Z2RHaGxJRzV6WEc0dktpb3FLaW9xTHlCY2RDOHZJRzF2WkdVZ0ppQTBPaUJ5WlhSMWNtNGdkbUZzZFdVZ2QyaGxiaUJoYkhKbFlXUjVJRzV6SUc5aWFtVmpkRnh1THlvcUtpb3FLaThnWEhRdkx5QnRiMlJsSUNZZ09Id3hPaUJpWldoaGRtVWdiR2xyWlNCeVpYRjFhWEpsWEc0dktpb3FLaW9xTHlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVkQ0E5SUdaMWJtTjBhVzl1S0haaGJIVmxMQ0J0YjJSbEtTQjdYRzR2S2lvcUtpb3FMeUJjZEZ4MGFXWW9iVzlrWlNBbUlERXBJSFpoYkhWbElEMGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWgyWVd4MVpTazdYRzR2S2lvcUtpb3FMeUJjZEZ4MGFXWW9iVzlrWlNBbUlEZ3BJSEpsZEhWeWJpQjJZV3gxWlR0Y2JpOHFLaW9xS2lvdklGeDBYSFJwWmlnb2JXOWtaU0FtSURRcElDWW1JSFI1Y0dWdlppQjJZV3gxWlNBOVBUMGdKMjlpYW1WamRDY2dKaVlnZG1Gc2RXVWdKaVlnZG1Gc2RXVXVYMTlsYzAxdlpIVnNaU2tnY21WMGRYSnVJSFpoYkhWbE8xeHVMeW9xS2lvcUtpOGdYSFJjZEhaaGNpQnVjeUE5SUU5aWFtVmpkQzVqY21WaGRHVW9iblZzYkNrN1hHNHZLaW9xS2lvcUx5QmNkRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1eUtHNXpLVHRjYmk4cUtpb3FLaW92SUZ4MFhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvYm5Nc0lDZGtaV1poZFd4MEp5d2dleUJsYm5WdFpYSmhZbXhsT2lCMGNuVmxMQ0IyWVd4MVpUb2dkbUZzZFdVZ2ZTazdYRzR2S2lvcUtpb3FMeUJjZEZ4MGFXWW9iVzlrWlNBbUlESWdKaVlnZEhsd1pXOW1JSFpoYkhWbElDRTlJQ2R6ZEhKcGJtY25LU0JtYjNJb2RtRnlJR3RsZVNCcGJpQjJZV3gxWlNrZ1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWtLRzV6TENCclpYa3NJR1oxYm1OMGFXOXVLR3RsZVNrZ2V5QnlaWFIxY200Z2RtRnNkV1ZiYTJWNVhUc2dmUzVpYVc1a0tHNTFiR3dzSUd0bGVTa3BPMXh1THlvcUtpb3FLaThnWEhSY2RISmxkSFZ5YmlCdWN6dGNiaThxS2lvcUtpb3ZJRngwZlR0Y2JpOHFLaW9xS2lvdlhHNHZLaW9xS2lvcUx5QmNkQzh2SUdkbGRFUmxabUYxYkhSRmVIQnZjblFnWm5WdVkzUnBiMjRnWm05eUlHTnZiWEJoZEdsaWFXeHBkSGtnZDJsMGFDQnViMjR0YUdGeWJXOXVlU0J0YjJSMWJHVnpYRzR2S2lvcUtpb3FMeUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJpQTlJR1oxYm1OMGFXOXVLRzF2WkhWc1pTa2dlMXh1THlvcUtpb3FLaThnWEhSY2RIWmhjaUJuWlhSMFpYSWdQU0J0YjJSMWJHVWdKaVlnYlc5a2RXeGxMbDlmWlhOTmIyUjFiR1VnUDF4dUx5b3FLaW9xS2k4Z1hIUmNkRngwWm5WdVkzUnBiMjRnWjJWMFJHVm1ZWFZzZENncElIc2djbVYwZFhKdUlHMXZaSFZzWlZzblpHVm1ZWFZzZENkZE95QjlJRHBjYmk4cUtpb3FLaW92SUZ4MFhIUmNkR1oxYm1OMGFXOXVJR2RsZEUxdlpIVnNaVVY0Y0c5eWRITW9LU0I3SUhKbGRIVnliaUJ0YjJSMWJHVTdJSDA3WEc0dktpb3FLaW9xTHlCY2RGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVrS0dkbGRIUmxjaXdnSjJFbkxDQm5aWFIwWlhJcE8xeHVMeW9xS2lvcUtpOGdYSFJjZEhKbGRIVnliaUJuWlhSMFpYSTdYRzR2S2lvcUtpb3FMeUJjZEgwN1hHNHZLaW9xS2lvcUwxeHVMeW9xS2lvcUtpOGdYSFF2THlCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG1oaGMwOTNibEJ5YjNCbGNuUjVMbU5oYkd4Y2JpOHFLaW9xS2lvdklGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV2SUQwZ1puVnVZM1JwYjI0b2IySnFaV04wTENCd2NtOXdaWEowZVNrZ2V5QnlaWFIxY200Z1QySnFaV04wTG5CeWIzUnZkSGx3WlM1b1lYTlBkMjVRY205d1pYSjBlUzVqWVd4c0tHOWlhbVZqZEN3Z2NISnZjR1Z5ZEhrcE95QjlPMXh1THlvcUtpb3FLaTljYmk4cUtpb3FLaW92SUZ4MEx5OGdYMTkzWldKd1lXTnJYM0IxWW14cFkxOXdZWFJvWDE5Y2JpOHFLaW9xS2lvdklGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV3SUQwZ1hDSmNJanRjYmk4cUtpb3FLaW92WEc0dktpb3FLaW9xTDF4dUx5b3FLaW9xS2k4Z1hIUXZMeUJNYjJGa0lHVnVkSEo1SUcxdlpIVnNaU0JoYm1RZ2NtVjBkWEp1SUdWNGNHOXlkSE5jYmk4cUtpb3FLaW92SUZ4MGNtVjBkWEp1SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXpJRDBnTUNrN1hHNHZLaW9xS2lvcUx5QjlLVnh1THlvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2k5Y2JpOHFLaW9xS2lvdklDaDdYRzVjYmk4cUtpb3ZJRndpTGk5a2FYTjBMMkoxYm1Sc1pTNXFjMXdpT2x4dUx5b2hLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUlTcGNYRnh1SUNBaEtpb3FJQzR2WkdsemRDOWlkVzVrYkdVdWFuTWdLaW9xSVZ4dUlDQmNYQ29xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpOWNiaThxSVNCdWJ5QnpkR0YwYVdNZ1pYaHdiM0owY3lCbWIzVnVaQ0FxTDF4dUx5b3FLaThnS0daMWJtTjBhVzl1S0cxdlpIVnNaU3dnWlhod2IzSjBjeWtnZTF4dVhHNWNibHh1THlvcUtpOGdmU2tzWEc1Y2JpOHFLaW92SURBNlhHNHZLaUVxS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xSVNwY1hGeHVJQ0FoS2lvcUlHMTFiSFJwSUM0dmMzSmpMM05qY21sd2RDNXFjeUF1TDJScGMzUXZZblZ1Wkd4bExtcHpJQ29xS2lGY2JpQWdYRndxS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xTDF4dUx5b2hJRzV2SUhOMFlYUnBZeUJsZUhCdmNuUnpJR1p2ZFc1a0lDb3ZYRzR2S2lvcUx5QW9ablZ1WTNScGIyNG9iVzlrZFd4bExDQmxlSEJ2Y25SekxDQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLU0I3WEc1Y2JpRW9ablZ1WTNScGIyNGdkMlZpY0dGamEwMXBjM05wYm1kTmIyUjFiR1VvS1NCN0lIWmhjaUJsSUQwZ2JtVjNJRVZ5Y205eUtGd2lRMkZ1Ym05MElHWnBibVFnYlc5a2RXeGxJQ2N1TDNOeVl5OXpZM0pwY0hRdWFuTW5YQ0lwT3lCbExtTnZaR1VnUFNBblRVOUVWVXhGWDA1UFZGOUdUMVZPUkNjN0lIUm9jbTkzSUdVN0lIMG9LU2s3WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b0x5b2hJQzlWYzJWeWN5OXVZWFJvWVc1cFpXeHRhV3hzWVhKa0wxUjFjbWx1Wnk5TmIyUmZNaTkzYUdGMFkyaGhRMjl2YTJsdUwyUnBjM1F2WW5WdVpHeGxMbXB6SUNvdlhDSXVMMlJwYzNRdlluVnVaR3hsTG1welhDSXBPMXh1WEc1Y2JpOHFLaW92SUgwcFhHNWNiaThxS2lvcUtpb3ZJSDBwTzF4dUx5OGpJSE52ZFhKalpVMWhjSEJwYm1kVlVrdzlaR0YwWVRwaGNIQnNhV05oZEdsdmJpOXFjMjl1TzJOb1lYSnpaWFE5ZFhSbUxUZzdZbUZ6WlRZMExHVjVTakphV0VwNllWYzVkVWxxYjNwTVEwcDZZak5XZVZreVZucEphbkJpU1c1a2JGbHVRbWhaTW5NMlRIazRkbVF5Vm1salIwWnFZWGs1YVdJeU9UQmpNMUo1V1ZoQmFWaFRkMmxpYlVaMFdsaE5hVTlzZEdSTVEwcDBXVmhDZDJGWE5XNWplVWsyU1dwMFVsRlZSa0pQTVVaQ1VUQkZOMDh4UmtKU1ZVVTNWVlZHUkZGVWN6ZFZWVVpHVVZSMFVsRlZUa0pQTVVaQ1VUQkZOMVZWUmtSUlZIUlNVVlZPUWs4eFJrSlJNRVUzVlZWR1JGRlVkRkpSVlU1Q1R6RkdRbEV3UlRkVlZVWkVVVlJ6TjFWVlJrWlJWSFJTVVZWT1FrOTZkRkpSVlZaQ1R6RkdRbEV3UlRkUE1VWkNVbFZGTjFWVlJrUlJWSFJTVVZWT1FrOTZjemRWVlVaSVVWUjBVbEZWVGtKUGVuUlNVVlZXUWs4eFJrSlJNRVUzVHpGR1FsSlZSVGRWVlVaRVVWUjBVbEZWVGtKUE1VWkNVVEJGYzAxRlRrSlJWRUpFVEVka1JGRlZSbTVSZW5SU1VWVk5lRkpVZEZKUlZVNUNUM3AwVWxGVlZrSlBNVVpDVVRCRk4xVlZSa1JSVkhSU1VWVk9Ra3hJWkVWUlZVWXpVa040Y2xGclJrSmhNRWszVlZWR1JFMVZWVGRWVlVaRVVWTjRjRkpGUmtKaFZWRnpXVEJHUWxsNmRGSlJWVTEyVWtSek4xVlZSa1pSVkhSU1VWVk9Razh4UmtKUk1FVTNWVlZHUkZGVWRGSlJWVTVDVHpGR1FsRXdSVGRWVlVaRVVWUjBVbEZWVGtKUE1VWkNVVEJGTjFWVlJrUlJWSFJTVVZWT1FrOHhSa0pSTUVWelpWVk9RbEZZYkVSTVIyeEVVVlZHY0ZGNmRGSlJWVTE0VWxONGJsTkZSa0phTUdkellsVktRbEZYTVVOTVJWWkNVVlZWTjFWVlJrUmphMnMzVlZWR1JGRlVjemRWVlVaR1VWUjBVbEZWVGtKUE1VWkNVVEJGTjFWVlJrUlJVM2Q1VVd0R1FrMXJTWE5OUlVwQ1VWUkNRMHhGVmtKUlZWVTNWVlZHUkdSclVYTmhWVTVDVVZkc1JFeEhWa0pSVjFVM1ZWVkdSR0ZGVVRkVlZVWkVVVlIwVWxGVlRrSlBlblJTVVZWV1FrOHhSa0pSTUVWell6QlNRbEZZVGtWTVEzUkZVVlZGY2xKRWN6ZFZWVVpHWTJ0bk4xVlZSa1JSVkhNM1R6RkdRbEl3UlRkVlZVWkVVVk5KYzBsdFduQmlSMVZwVDJsS2FXUlhOV3RpUjFWMVlXNU5hVXhEU25waU0xWjVXVEpXZWxFeU9YVmtSMVoxWkVOSk5sZDVTV2RZU0ZGMlRIbENWV0ZIVldkaVZ6bHJaRmQ0YkVsSFRtaFpNbWhzV0VjMFoxaElVakpaV0VsbllWYzFlbVJIUm5OaVIxWnJWRmM1YTJSWGVHeGplVUU1U1VoME9VOHhlSFZZUnpSbldFaFJka3g1UWxWaFIxVm5ZMjFXZUdSWGJIbGFVMEp0WkZjMWFtUkhiSFppYkhoMVNVWjRNRnB1Vm5WWk0xSndZakkwWjFneE9UTmFWMHAzV1ZkT2NsZ3pTbXhqV0Zad1kyMVdabGg1YUhSaU1sSXhZa2RXU2xwRGEyZGxNWGgxV0VjMFoxaElVbU5rUXpoMlNVVk9iMXBYVG5KSlIyeHRTVWN4ZGxwSVZuTmFVMEp3WTNsQ2NHSnBRbXBaVjA1dldsWjRkVWxHZURCWVNGSndXbWxvY0dKdVRqQlpWM2h6V2xkU1RtSXlVakZpUjFaNlZ6SXhkbHBJVm5OYVZXeHJXRk5yWjJVeGVIVkpSbmd3V0VoU1kyUklTbXhrU0ZaNVltbENjR0p1VGpCWlYzaHpXbGRTVG1JeVVqRmlSMVo2VnpJeGRscElWbk5hVld4cldGTTFiR1ZJUW5aamJsSjZUekY0ZFVsR2VEQllTRkk1V0VjMFoxaElVbU5rUXpoMlNVVk9lVnBYUmpCYVUwSm9TVWMxYkdSNVFuUmlNbEl4WWtkVlowdEhSblZhUTBKM1pGaFJaMkZZVVdkaFZ6VXdZbmxDTUdGSFZXZFpNa1pxWVVkVmNGaEhOR2RZU0ZKalpFaGFhR05wUW5SaU1sSXhZa2RWWjFCVFFuQmliazR3V1ZkNGMxcFhVazVpTWxJeFlrZFdlbGN5TVhaYVNGWnpXbFZzYTFoVFFUbEpTSFJqWW1sQ1kyUkdlREJZU0ZKd1QybENkR0l5VWpGaVIxWktXa040WTJKcFFtTmtSbmd3V0VoU2MwOXBRbTFaVjNoNldsTjRZMkpwUW1Oa1JuZ3dXRWhTYkdWSVFuWmpibEo2VDJsQ04yWldlSFZKUm5nd1dFaFNPVTh4ZUhWWVJ6Um5XRWhTWTJSRE9IWkpSVlkwV2xkT01XUkhWV2RrUjJoc1NVY3hkbHBJVm5OYVUwSnRaRmMxYW1SSGJIWmliSGgxU1VaNE1GaElVblJpTWxJeFlrZFdlbGN5TVhaYVNGWnpXbFZzYTFoVE5XcFpWM2h6UzBjeGRscElWbk5hVXpWc1pVaENkbU51VW5wTVEwSjBZakpTTVdKSFZYTkpSekYyV2toV2MxcFROV3hsU0VKMlkyNVNla3hEUW1aWU0yUnNXVzVDYUZreWRHWmpiVlo0WkZkc2VWcFdPV1pMVkhSallteDRkVWxHZURCWVNGRjJUSGxDUjJKSFJtNUpTRkp2V2xOQ2RHSXlVakZpUjFWbldWaE5aMkpIT1doYVIxWnJXRWMwWjFoSVVtTmtSekYyV2toV2MxcFROWE5KUkRCblpFaEtNVnBVZEdOaWJIaDFTVVo0TUZoSVVYWk1lVUpUV2xoU01XTnROR2RrUjJoc1NVZFdOR05IT1hsa1NFMW5ZakpaWjJSSGFHeEpSekYyV2toV2MxcFdlSFZKUm5nd1dFaFNlVnBZVWpGamJUUm5ZbGM1YTJSWGVHeE1iVlkwWTBjNWVXUklUVGRZUnpSbldFaFNPVmhITldOaWJIaDFTVVo0TUV4NU9HZGFXR2gzWWpOT2JFbElVbTlhVTBKMFlqSlNNV0pIVm5wSlJ6bHBZVzFXYW1SRFFXOVlNVGt6V2xkS2QxbFhUbkpZTWpGMldraFdjMXBZVG1aWWVXeGpZbWxDWTJSR09XWmtNbFpwWTBkR2FtRXhPWGxhV0VZeFlWaEtiRmd4T0hWaVUwRTVTVWN4ZGxwSVZuTmFXRTAzV0VjMVkySnBRbU5rUXpoMlNVZFdOR05IT1hwYVUwSXdZVWRWWjJKWE9XdGtWM2hzU1VkT2FGa3lhR3hZUnpSbldFaFNabGd6Wkd4WmJrSm9XVEowWm1OdFZuaGtWMng1V2xZNVpreHRUV2RRVTBKd1ltNU9NRmxYZUhOYVYxSk9ZakpTTVdKSFZucFBNWGgxV0VjMFoxaElVWFpNZVVKcldsZGFjR0p0VldkYU1sWXdaRWRXZVVsSFdqRmliVTR3WVZjNWRVbEhXblpqYVVKdldWaEtkR0l5TlRWSlIxWTBZMGM1ZVdSSVRtTmlhVUpqWkVZNVptUXlWbWxqUjBacVlURTVlVnBZUmpGaFdFcHNXREU0ZFZwRFFUbEpSMW94WW0xT01HRlhPWFZMUjFZMFkwYzVlV1JJVFhOSlJ6Vm9ZbGRWYzBsSFpHeGtTRkpzWTJscloyVXhlSFZKUm5nd1dFaFNjRnBwWjJoWU1Ua3pXbGRLZDFsWFRuSllNMHBzWTFoV2NHTnRWbVpZZVRWMlMwZFdOR05IT1hsa1NFMXpTVWMxYUdKWFZYQkxVMEkzV0VjMFoxaElVbU5rUm5nd1ZESktjVnBYVGpCTWJWSnNXbTFzZFZwV1FubGlNMEpzWTI1U05VdEhWalJqUnpsNVpFaE5jMGxITldoaVYxVnpTVWh6WjFwWE5URmlWMVo1V1ZkS2MxcFViMmRrU0VveFdsTjNaMW95VmpCUGFVSnVXbGhTTUZwWVNXZG1VMnMzV0VjMFoxaElVbU5rU0RGalltbENZMlJJTURkWVJ6VmpZbWxDWTJSRE9IWkpSMUpzV20xc2RWcFRRbVpZTWxaNlZGYzVhMlJYZUd4SlJ6bDFTVWRXTkdOSE9YbGtTRTVqWW1sQ1kyUkdPV1prTWxacFkwZEdhbUV4T1hsYVdFWXhZVmhLYkZneE9IVmphVUU1U1VkYU1XSnRUakJoVnpsMVMwZFdOR05IT1hsa1NFMXdTVWgwWTJKcFFtTmtSbmd3WVZkWmIyUkliSGRhVnpsdFNVWk9OV0pYU25aaVEwRm9VRlF3WjBvelZuVmFSMVp0WVZjMWJGcERZMmRLYVZsblZUTnNkRmx0T1hOTWJsSjJWVE5TZVdGWE5XNVdSMFp1UzFOQ04xaEhOR2RZU0ZKalpFWjRNRlF5U25GYVYwNHdURzFTYkZwdGJIVmFWa0o1WWpOQ2JHTnVValZMUjFZMFkwYzVlV1JJVFhOSlJrNDFZbGRLZG1KRE5UQmlNVTR3WTIxc2RWb3hVbWhhZVhkblpYbENNbGxYZURGYVZHOW5TakF4ZGxwSVZuTmFVMk5uWmxOck4xaEhOR2RZU0ZKalpFZ3hZMkpwUW1Oa1JuZ3dWREpLY1ZwWFRqQk1iVkpzV20xc2RWcFdRbmxpTTBKc1kyNVNOVXRIVmpSalJ6bDVaRWhOYzBsRFpHWllNbFo2VkZjNWEyUlhlR3hLZVhkblpYbENNbGxYZURGYVZHOW5aRWhLTVZwVFFqbExWSFJqWW1sQ1kyUklNRGRZUnpWalltbENZMlJET0haSlIwNTVXbGRHTUZwVFFtaEpSMXBvWVRKVloySnRSblJhV0U1M1dWZE9iRWxIT1dsaGJWWnFaRVo0ZFVsR2VEQk1lVGhuWWxjNWExcFRRVzFKUkVVMlNVaGFhR0pJVm14SlIyeDZTVWRGWjJKWE9XdGtWM2hzU1Vkc2EweERRbmxhV0VZeFlWaEtiRWxIYkRCWVJ6Um5XRWhSZGt4NVFuUmlNbEpzU1VOWlowMXFiMmRpVjFaNVdqSlZaMWxYZUhOSlNFSjVZak5DYkdOdVVuQmFXRTFuWWpKWloyUnRSbk5rVjFWbllWYzFNR0o1UWpCaFIxVm5ZbTVPWTJKcFFtTmtRemgyU1VjeGRscEhWV2RLYVVFd1QybENlVnBZVWpGamJUUm5aRzFHYzJSWFZXZGtNbWhzWW1sQ2FHSklTbXhaVjFJMVNVYzFla2xIT1dsaGJWWnFaRVo0ZFVsR2VEQk1lVGhuWWxjNWExcFRRVzFKUkdnNFRWUnZaMWx0Vm05WldGcHNTVWQ0Y0dFeVZXZGpiVlo0WkZkc2VWcFdlSFZKUm5nd1dERTVNMXBYU25kWlYwNXlXRE5LYkdOWVZuQmpiVlptV0hrMU1FbEVNR2RhYmxaMVdUTlNjR0l5Tkc5a2JVWnpaRmRWYzBsSE1YWmFSMVZ3U1VoMFkySnBRbU5rUm5nd1lWZFpiMkpYT1d0YVUwRnRTVVJGY0VsSVdtaGlTRlpzU1VRd1oxZ3hPVE5hVjBwM1dWZE9jbGd6U214aldGWndZMjFXWmxoNWFESlpWM2d4V2xOck4xaEhOR2RZU0ZKalpFZHNiVXRITVhaYVIxVm5TbWxCTkV0VFFubGFXRkl4WTIwMFoyUnRSbk5rVjFVM1dFYzBaMWhJVW1Oa1IyeHRTME5vZEdJeVVteEpRMWxuVGtOclowcHBXV2RrU0d4M1dsYzViVWxJV21oaVNGWnNTVVF3T1ZCVFFXNWlNa3B4V2xkT01FcDVRVzFLYVVJeVdWZDRNVnBUUVcxS2FVSXlXVmQ0TVZwVE5XWllNbFo2VkZjNWEyUlhlR3hMVTBKNVdsaFNNV050Tkdka2JVWnpaRmRWTjFoSE5HZFlTRkpqWkVoYWFHTnBRblZqZVVFNVNVVTVhV0Z0Vm1wa1F6VnFZMjFXYUdSSFZXOWlibFp6WWtOck4xaEhOR2RZU0ZKalpFWTVabVF5Vm1salIwWnFZVEU1ZVZwWVJqRmhXRXBzV0RFNGRXTnBhSFZqZVdzM1dFYzBaMWhJVW1Oa1JUbHBZVzFXYW1SRE5XdGFWMXB3WW0xV1VXTnRPWGRhV0Vvd1pWTm9kV041ZDJkS01sSnNXbTFHTVdKSVVXNU1RMEkzU1VkV2RXUlhNV3hqYlVacFlrZFZOa2xJVW5sa1YxVnpTVWhhYUdKSVZteFBhVUl5V1ZkNE1WcFRRamxMVkhSalltbENZMlJHZURCaFYxbHZZbGM1YTFwVFFXMUpSRWxuU21sWloyUkliSGRhVnpsdFNVaGFhR0pJVm14SlEwVTVTVU5rZW1SSVNuQmliV051UzFOQ2JXSXpTVzlrYlVaNVNVZDBiR1ZUUW5CaWFVSXlXVmQ0TVZwVGEyZFlNVGt6V2xkS2QxbFhUbkpZTTBwc1kxaFdjR050Vm1aWWVUVnJTMGMxZWt4RFFuSmFXR3R6U1VkYU1XSnRUakJoVnpsMVMwZDBiR1ZUYTJkbGVVSjVXbGhTTVdOdE5HZGtiVVp6WkZkV1ltRXlWalZZVkhOblpsTTFhV0ZYTld0TFJ6VXhZa2QzYzBsSGRHeGxVMnR3VHpGNGRVbEdlREJZU0ZKNVdsaFNNV050TkdkaWJrMDNXRWMwWjFoSVVqbFBNWGgxV0VjMFoxaElVWFpNZVVKdVdsaFNSVnBYV21oa1YzZ3dVbGhvZDJJelNqQkpSMW94WW0xT01HRlhPWFZKUjFwMlkybENhbUl5TVhkWldGSndXVzFzYzJGWVVqVkpTR1J3WkVkbloySnRPWFZNVjJob1kyMHhkbUp1YTJkaVZ6bHJaRmQ0YkdNeGVIVkpSbmd3V0RFNU0xcFhTbmRaVjA1eVdETktiR05ZVm5CamJWWm1XSGsxZFVsRU1HZGFibFoxV1ROU2NHSXlORzlpVnpsclpGZDRiRXRUUWpkWVJ6Um5XRWhTWTJSSVdtaGphVUp1V2xoU01GcFlTV2RRVTBKMFlqSlNNV0pIVldkS2FWbG5ZbGM1YTJSWGVHeE1iRGxtV2xoT1RtSXlVakZpUjFWblVERjRkVWxHZURCWVNGSmpaRWRhTVdKdFRqQmhWemwxU1Vka2JHUkZVbXhhYlVZeFlraFJiMHRUUWpkSlNFcHNaRWhXZVdKcFFuUmlNbEl4WWtkV1lrb3lVbXhhYlVZeFlraFJibGhVYzJkbVUwRTJXRWMwWjFoSVVtTmtSbmd3V201V2RWa3pVbkJpTWpSbldqSldNRlJYT1d0a1YzaHNVbGhvZDJJelNqQmplV2R3U1VoeloyTnRWakJrV0VwMVNVY3hkbHBJVm5OYVZITm5abFIwWTJKcFFtTmtSbmd3V0RFNU0xcFhTbmRaVjA1eVdETktiR05ZVm5CamJWWm1XSGsxYTB0SFpHeGtTRkpzWTJsM1owb3lSVzVNUTBKdVdsaFNNRnBZU1hCUE1YaDFTVVo0TUZoSVVubGFXRkl4WTIwMFoxb3lWakJrUjFaNVR6RjRkVWxHZURCbVZIUmpZbXg0ZFVsR2VEQk1lVGhuVkRKS2NWcFhUakJNYmtKNVlqTlNkbVJJYkhkYVV6VnZXVmhPVUdReU5WRmpiVGwzV2xoS01HVlROV3BaVjNoeldFYzBaMWhJVW1aWU0yUnNXVzVDYUZreWRHWmpiVlo0WkZkc2VWcFdPV1pNYlRoblVGTkNiV1JYTldwa1IyeDJZbWxvZGxsdGNHeFpNMUZ6U1VoQ2VXSXpRbXhqYmxJMVMxTkNOMGxJU214a1NGWjVZbWxDVUZsdGNHeFpNMUYxWTBoS2RtUkhPVEJsV0VKc1RHMW9hR013T1ROaWJFSjVZak5DYkdOdVVqVk1iVTVvWWtkM2IySXlTbkZhVjA0d1RFTkNkMk50T1hkYVdFb3daVk5yTjBsSU1EZFlSelZqWW1sQ1kyUkRPSFpKUmpsbVpESldhV05IUm1waE1UbDNaRmRLYzJGWFRtWmpSMFl3WVVZNVpsaEhOR2RZU0ZKbVdETmtiRmx1UW1oWk1uUm1ZMjFXZUdSWGJIbGFWamxtVEc1QloxQlRRbU5KYkhkcFR6RjRkVmhITldOaWFVSmpaRU00ZGtsRmVIWlpWMUZuV2xjMU1HTnVhMmRpVnpsclpGZDRiRWxIUm5WYVEwSjVXbGhTTVdOdE5HZGFXR2gzWWpOS01HTXhlSFZKUm5nd1kyMVdNR1JZU25WSlJqbG1aREpXYVdOSFJtcGhNVGw1V2xoR01XRllTbXhZTVRodldERTVNMXBYU25kWlYwNXlXRE5LYkdOWVZuQmpiVlptV0hrMWVrbEVNR2ROUTJzM1dFYzBhVmhUZDJsak1qa3hZMjFPYkZWdE9YWmtRMGsyU1dsS09TSXNJbVY0Y0c5eWRITWdQU0J0YjJSMWJHVXVaWGh3YjNKMGN5QTlJSEpsY1hWcGNtVW9YQ0l1TGk4dUxpOXViMlJsWDIxdlpIVnNaWE12WTNOekxXeHZZV1JsY2k5a2FYTjBMM0oxYm5ScGJXVXZZWEJwTG1welhDSXBLR1poYkhObEtUdGNiaTh2SUUxdlpIVnNaVnh1Wlhod2IzSjBjeTV3ZFhOb0tGdHRiMlIxYkdVdWFXUXNJRndpYUhSdGJDQjdYRnh1SUNCaVlXTnJaM0p2ZFc1a0xXTnZiRzl5T2lBak16YzFNVFZETzF4Y2JpQWdZbTl5WkdWeU9pQXljSGdnYzI5c2FXUWdJekF3TUR0Y1hHNGdJR2hsYVdkb2REb2dNVEF3ZG1nN1hGeHVJQ0IzYVdSMGFEb2dNVEF3ZG5jN0lIMWNYRzVjWEc1aWIyUjVJSHRjWEc0Z0lHSnZlQzF6YVhwcGJtYzZJR0p2Y21SbGNpMWliM2c3WEZ4dUlDQm1iMjUwTFdaaGJXbHNlVG9nSjA5d1pXNGdVMkZ1Y3ljc0lITmhibk10YzJWeWFXWTdYRnh1SUNCdFlYSm5hVzQ2SUdGMWRHODdJSDFjWEc1Y1hHNXRZV2x1SUh0Y1hHNGdJR0poWTJ0bmNtOTFibVF0WTI5c2IzSTZJQ016TnpVeE5VTTdYRnh1SUNCb1pXbG5hSFE2SURFd01DVTdYRnh1SUNCM2FXUjBhRG9nTVRBd0pUdGNYRzRnSUdScGMzQnNZWGs2SUdac1pYZzdYRnh1SUNCcWRYTjBhV1o1TFdOdmJuUmxiblE2SUdObGJuUmxjanNnZlZ4Y2JseGNiaTV0WVdsdUxXaGxZV1JsY2lCN1hGeHVJQ0JrYVhOd2JHRjVPaUJtYkdWNE8xeGNiaUFnYW5WemRHbG1lUzFqYjI1MFpXNTBPaUJ6Y0dGalpTMWlaWFIzWldWdU8xeGNiaUFnWm14bGVDMWthWEpsWTNScGIyNDZJSEp2ZHp0Y1hHNGdJR2hsYVdkb2REb2dZWFYwYnp0Y1hHNGdJSGRwWkhSb09pQXhNREFsTzF4Y2JpQWdZbUZqYTJkeWIzVnVaQzFqYjJ4dmNqb2dJMFZDUmpWRlJUdGNYRzRnSUdKdmNtUmxjam9nTW5CNElITnZiR2xrSUNNd01EQTdJSDFjWEc1Y1hHNW9NU0I3WEZ4dUlDQm1iMjUwTFhOcGVtVTZJREkxTlNVN1hGeHVJQ0IwWlhoMExXRnNhV2R1T2lCalpXNTBaWEk3WEZ4dUlDQnRZWEpuYVc0dGRHOXdPaUF3TzF4Y2JpQWdiV0Z5WjJsdUxXSnZkSFJ2YlRvZ01EdGNYRzRnSUhCaFpHUnBibWN0ZEc5d09pQXhNSEI0TzF4Y2JpQWdkMmxrZEdnNklETXdKVHNnZlZ4Y2JseGNibTVoZGlCN1hGeHVJQ0JrYVhOd2JHRjVPaUJtYkdWNE8xeGNiaUFnY0dGa1pHbHVaem9nTVRCd2VEc2dmVnhjYmx4Y2JpNXVZWFpDZFhSMGIyNGdlMXhjYmlBZ1ptOXVkQzF6YVhwbE9pQXhNekFsTzF4Y2JpQWdZMjlzYjNJNklDTXdNREFnSVdsdGNHOXlkR0Z1ZER0Y1hHNGdJR0poWTJ0bmNtOTFibVF0WTI5c2IzSTZJQ05GUWtZMVJVVTdYRnh1SUNCaWIzSmtaWEl0YkdWbWREb2dNWEI0SUhOdmJHbGtJQ013TURBN1hGeHVJQ0JpYjNKa1pYSXRjbWxuYUhRNklERndlQ0J6YjJ4cFpDQWpNREF3TzF4Y2JpQWdiV0Z5WjJsdU9pQXhKU0F5TUhCNElERWxJREVsT3lCOVhGeHVJQ0F1Ym1GMlFuVjBkRzl1T21odmRtVnlJSHRjWEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzFqYjJ4dmNqb2dJMk5tWmpKa1lUc2dmVnhjYmlBZ0xtNWhka0oxZEhSdmJqcGhZM1JwZG1VZ2UxeGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xXTnZiRzl5T2lBalF6TkRNa00yT3lCOVhGeHVYRnh1TG14dmQyVnlMV2hsWVdSbGNpQjdYRnh1SUNCa2FYTndiR0Y1T2lCbWJHVjRPMXhjYmlBZ2FuVnpkR2xtZVMxamIyNTBaVzUwT2lCemNHRmpaUzFpWlhSM1pXVnVPMXhjYmlBZ1pteGxlQzFrYVhKbFkzUnBiMjQ2SUhKdmR6c2dmVnhjYmx4Y2JpNW5jbVZsZEdsdVp5QjdYRnh1SUNCbWIyNTBMWE5wZW1VNklETXdjSGc3WEZ4dUlDQmpiMnh2Y2pvZ0kwVkNSalZGUlR0Y1hHNGdJSEJoWkdScGJtY3RiR1ZtZERvZ01UVndlRHRjWEc0Z0lHMWhjbWRwYmkxMGIzQTZJREV3Y0hnN0lIMWNYRzVjWEc0dWMyVmhjbU5vTFdGeVpXRWdlMXhjYmlBZ1pHbHpjR3hoZVRvZ1pteGxlRHRjWEc0Z0lHcDFjM1JwWm5rdFkyOXVkR1Z1ZERvZ1pteGxlQzFsYm1RN1hGeHVJQ0JtYkdWNExXUnBjbVZqZEdsdmJqb2djbTkzT3lCOVhGeHVYRnh1TG5ObFlYSmphQzFpWVhJZ2UxeGNiaUFnYldGNExXaGxhV2RvZERvZ05uWm9PMXhjYmlBZ2JXRnlaMmx1T2lBMWNIZzdYRnh1SUNCd1lXUmthVzVuT2lBemNIZzdJSDFjWEc1Y1hHNHVjMlZoY21Ob0xXbHRZV2RsSUh0Y1hHNGdJR0poWTJ0bmNtOTFibVF0WTI5c2IzSTZJQ05GUWtZMVJVVTdYRnh1SUNCaWIzSmtaWEk2SURGd2VDQnpiMnhwWkNBak1EQXdPMXhjYmlBZ2QybGtkR2c2SURJd0pUdGNYRzRnSUcxaGNtZHBiaTF5YVdkb2REb2dNRHNnZlZ4Y2JpQWdMbk5sWVhKamFDMXBiV0ZuWlRwb2IzWmxjaUI3WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0WTI5c2IzSTZJQ05qWm1ZeVpHRTdJSDFjWEc0Z0lDNXpaV0Z5WTJndGFXMWhaMlU2WVdOMGFYWmxJSHRjWEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzFqYjJ4dmNqb2dJME16UXpKRE5qc2dmVnhjYmx4Y2JpNXpaV0Z5WTJndGFXNXdkWFFnZTF4Y2JpQWdZbTl5WkdWeU9pQXhjSGdnYzI5c2FXUWdJekF3TUR0Y1hHNGdJR1p2Ym5RdGMybDZaVG9nTVRBd0pUdGNYRzRnSUcxcGJpMTNhV1IwYURvZ09UQWxPeUI5WEZ4dVhGeHVMbUZzYkMxallYSmtjeUI3WEZ4dUlDQmthWE53YkdGNU9pQm5jbWxrTzF4Y2JpQWdaM0pwWkMxbllYQTZJRE13Y0hnN1hGeHVJQ0JuY21sa0xYUmxiWEJzWVhSbExXTnZiSFZ0Ym5NNklISmxjR1ZoZENnMExDQXhabklwTzF4Y2JpQWdjR0ZrWkdsdVp6b2dNekJ3ZUR0Y1hHNGdJSGRwWkhSb09pQTVOUzQxZG5jN0lIMWNYRzVjWEc0dWFHbGtaR1Z1SUh0Y1hHNGdJR1JwYzNCc1lYazZJRzV2Ym1VN0lIMWNYRzVjWEc1cGJXY2dlMXhjYmlBZ1kzVnljMjl5T2lCd2IybHVkR1Z5T3lCOVhGeHVYRnh1TG1OaGNtUXRZblYwZEc5dUlIdGNYRzRnSUdKdmNtUmxjam9nTVhCNElITnZiR2xrSUNNd01EQTdYRnh1SUNCb1pXbG5hSFE2SURJM2NIZzdYRnh1SUNCdFlYSm5hVzQ2SUROd2VEdGNYRzRnSUdOMWNuTnZjam9nY0c5cGJuUmxjanNnZlZ4Y2JpQWdMbU5oY21RdFluVjBkRzl1T21odmRtVnlJSHRjWEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzFqYjJ4dmNqb2dJMk5tWmpKa1lUc2dmVnhjYmlBZ0xtTmhjbVF0WW5WMGRHOXVPbUZqZEdsMlpTQjdYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRZMjlzYjNJNklDTkRNME15UXpZN0lIMWNYRzVjWEc0dVlXUmtMV0oxZEhSdmJpQjdYRnh1SUNCaVlXTnJaM0p2ZFc1a0xXTnZiRzl5T2lBalJVSkdOVVZGTzF4Y2JpQWdaR2x6Y0d4aGVUb2dabXhsZUR0Y1hHNGdJSGRwWkhSb09pQXhNaVU3SUgxY1hHNWNYRzR1WVdSa0lIdGNYRzRnSUhkcFpIUm9PaUE1TUNVN0lIMWNYRzVjWEc0dVptRjJiM0pwZEdVZ2UxeGNiaUFnWW1GamEyZHliM1Z1WkMxamIyeHZjam9nSTBWQ1JqVkZSVHRjWEc0Z0lHSmhZMnRuY205MWJtUXRjbVZ3WldGME9pQnVieTF5WlhCbFlYUTdYRnh1SUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQmpaVzUwWlhJN1hGeHVJQ0IzYVdSMGFEb2dNVE1sTzF4Y2JpQWdZbUZqYTJkeWIzVnVaQzFwYldGblpUb2dkWEpzS0Z4Y1hDSm9kSFJ3Y3pvdkwybHRZV2RsTG1ac1lYUnBZMjl1TG1OdmJTOXBZMjl1Y3k5emRtY3ZNVFE1THpFME9USXlNaTV6ZG1kY1hGd2lLVHNnZlZ4Y2JseGNiaTVqWVhKa0lIdGNYRzRnSUdKaFkydG5jbTkxYm1RdFkyOXNiM0k2SUNORU4wWXlSa1U3WEZ4dUlDQmliM0prWlhJNklETndlQ0J6YjJ4cFpDQWpNREF3TzF4Y2JpQWdkMmxrZEdnNklERXdNQ1U3SUgxY1hHNWNYRzR1WTJGeVpDMW9aV0ZrWlhJZ2UxeGNiaUFnWW1GamEyZHliM1Z1WkMxamIyeHZjam9nSTBWQ1JqVkZSVHRjWEc0Z0lHSnZjbVJsY2kxaWIzUjBiMjA2SURGd2VDQnpiMnhwWkNBak1EQXdPMXhjYmlBZ1pHbHpjR3hoZVRvZ1pteGxlRHRjWEc0Z0lHcDFjM1JwWm5rdFkyOXVkR1Z1ZERvZ2MzQmhZMlV0WW1WMGQyVmxianRjWEc0Z0lHWnNaWGd0WkdseVpXTjBhVzl1T2lCeWIzYzdJSDFjWEc1Y1hHNHVZV3hzSUh0Y1hHNGdJR2R5YVdRdFoyRndPaUF3TzF4Y2JpQWdaM0pwWkMxMFpXMXdiR0YwWlMxamIyeDFiVzV6T2lCeVpYQmxZWFFvTVN3Z01XWnlLVHNnZlZ4Y2JseGNiaTVoYkd3dGNtVmphWEJsTFdsdVptOHNYRnh1YjJ3Z2UxeGNiaUFnWm05dWRDMXphWHBsT2lBeE5UQWxPMXhjYmlBZ1kyOXNiM0k2SUNORlFrWTFSVVU3WEZ4dUlDQjNhV1IwYURvZ01UQXdKVHNnZlZ4Y2JseGNibWd6SUh0Y1hHNGdJR1p2Ym5RdGMybDZaVG9nTVRVd0pUdGNYRzRnSUhSbGVIUXRZV3hwWjI0NklHTmxiblJsY2p0Y1hHNGdJR0poWTJ0bmNtOTFibVF0WTI5c2IzSTZJQ05GUWtZMVJVVTdYRnh1SUNCaWIzSmtaWEl0WW05MGRHOXRPaUF4Y0hnZ2MyOXNhV1FnSXpBd01EdGNYRzRnSUcxaGNtZHBiam9nTUR0Y1hHNGdJR1p2Ym5RdGQyVnBaMmgwT2lCdWIzSnRZV3c3WEZ4dUlDQndZV1JrYVc1bkxYUnZjRG9nTlhCNE8xeGNiaUFnY0dGa1pHbHVaeTFpYjNSMGIyMDZJRFZ3ZURzZ2ZWeGNibHhjYmk1eVpXTnBjR1V0Ym1GdFpTQjdYRnh1SUNCaVlXTnJaM0p2ZFc1a0xXTnZiRzl5T2lBalJVSkdOVVZGTzF4Y2JpQWdZbTl5WkdWeUxXSnZkSFJ2YlRvZ01YQjRJSE52Ykdsa0lDTXdNREE3WEZ4dUlDQmthWE53YkdGNU9pQm1iR1Y0TzF4Y2JpQWdhblZ6ZEdsbWVTMWpiMjUwWlc1ME9pQmpaVzUwWlhJN1hGeHVJQ0JtYkdWNExXUnBjbVZqZEdsdmJqb2djbTkzTzF4Y2JpQWdabTl1ZEMxemFYcGxPaUF4TlRBbE8xeGNiaUFnZEdWNGRDMWhiR2xuYmpvZ1kyVnVkR1Z5T3lCOVhGeHVYRnh1TG1OaGNtUXRjR2xqZEhWeVpTQjdYRnh1SUNCb1pXbG5hSFE2SURJd01IQjRPMXhjYmlBZ2QybGtkR2c2SURrMEpUdGNYRzRnSUdKdmNtUmxjam9nTVhCNElITnZiR2xrSUNNd01EQTdYRnh1SUNCdFlYSm5hVzQ2SURFd2NIZ2dNeVVnT0hCNElESXVOaVU3SUgxY1hHNGdJQzVqWVhKa0xYQnBZM1IxY21VNmFHOTJaWElnZTF4Y2JpQWdJQ0J2Y0dGamFYUjVPaUF3TGpjN0lIMWNYRzRnSUM1allYSmtMWEJwWTNSMWNtVTZZV04wYVhabElIdGNYRzRnSUNBZ1ltOXlaR1Z5T2lBeWNIZ2djMjlzYVdRZ0l6QXdNRHNnZlZ4Y2JseGNiaTUzY21Gd0lIdGNYRzRnSUdKaFkydG5jbTkxYm1RdFkyOXNiM0k2SUdsdWFHVnlhWFE3WEZ4dUlDQm9aV2xuYUhRNklHbHVhR1Z5YVhRN1hGeHVJQ0JpYjNKa1pYSTZJREE3SUgxY1hHNWNYRzR1Wm1GMmIzSnBkR1V0WVdOMGFYWmxJSHRjWEc0Z0lHSmhZMnRuY205MWJtUXRhVzFoWjJVNklIVnliQ2hjWEZ3aWFIUjBjSE02THk5cGJXRm5aUzVtYkdGMGFXTnZiaTVqYjIwdmFXTnZibk12YzNabkx6RTBPQzh4TkRnNE5ERXVjM1puWEZ4Y0lpazdYRnh1SUNCaVlXTnJaM0p2ZFc1a0xYSmxjR1ZoZERvZ2JtOHRjbVZ3WldGME95QjlYRnh1WEZ4dUxtUnBjM0JzWVhrdGNtVmphWEJsSUh0Y1hHNGdJR1JwYzNCc1lYazZJR2R5YVdRN1hGeHVJQ0JuY21sa0xXZGhjRG9nTjNCNE8xeGNiaUFnWjNKcFpDMTBaVzF3YkdGMFpTMWpiMngxYlc1ek9pQXdMalptY2lBeFpuSTdYRnh1SUNCbmNtbGtMWFJsYlhCc1lYUmxMWEp2ZDNNNklERm1jaUF6Wm5JN1hGeHVJQ0J0WVhKbmFXNDZJREUxY0hnN0lIMWNYRzVjWEc0dVpHbHpjR3hoZVMxeVpXTnBjR1V0YVc1bWJ5QjdYRnh1SUNCbmNtbGtMV052YkhWdGJqb2dNVHRjWEc0Z0lHZHlhV1F0Y205M09pQXdMalU3SUgxY1hHNWNYRzR1Y21WamFYQmxMV2x1WjNKbFpHbGxiblJ6SUh0Y1hHNGdJR3AxYzNScFpua3RjMlZzWmpvZ1kyVnVkR1Z5TzF4Y2JpQWdaM0pwWkMxamIyeDFiVzQ2SURJN1hGeHVJQ0JuY21sa0xYSnZkem9nTVR0Y1hHNGdJRzkyWlhKbWJHOTNPaUJ6WTNKdmJHdzdYRnh1SUNCb1pXbG5hSFE2SUdsdWFHVnlhWFE3WEZ4dUlDQm1iMjUwTFhOcGVtVTZJREUxY0hnN1hGeHVJQ0JqYjJ4dmNqb2dJMFZDUmpWRlJUc2dmVnhjYmx4Y2JpNXlaV05wY0dVdGFXNW5jbVZrYVdWdWRITXRkR2wwYkdVZ2UxeGNiaUFnYldGeVoybHVMWFJ2Y0RvZ01EdGNYRzRnSUdadmJuUXRjMmw2WlRvZ01qQndlRHNnZlZ4Y2JseGNiaTV5WldOcGNHVXRhVzV6ZEhKMVkzUnBiMjV6SUh0Y1hHNGdJR2R5YVdRdFkyOXNkVzF1T2lBeEwzTndZVzRnTWp0Y1hHNGdJR2R5YVdRdGNtOTNPaUF5TzF4Y2JpQWdabTl1ZEMxemFYcGxPaUF5TUhCNE8xeGNiaUFnWTI5c2IzSTZJQ05GUWtZMVJVVTdYRnh1SUNCdFlYZ3RkMmxrZEdnNklEa3dkbmM3WEZ4dUlDQnRZWEpuYVc0dGRHOXdPaUF4TURCd2VEc2dmVnhjYmx4Y2JpNTBieTFqYjI5ckxXZHlaV1YwYVc1bklIdGNYRzRnSUdOdmJHOXlPaUFqUlVKR05VVkZPeUI5WEZ4dVhGeHVMbU5zYjNObExXSjFkSFJ2YmlCN1hGeHVJQ0JpWVdOclozSnZkVzVrTFdOdmJHOXlPaUFqUlVKR05VVkZPMXhjYmlBZ1ltRmphMmR5YjNWdVpDMXlaWEJsWVhRNklHNXZMWEpsY0dWaGREdGNYRzRnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklHTmxiblJsY2p0Y1hHNGdJSGRwWkhSb09pQXhNeVU3WEZ4dUlDQmlZV05yWjNKdmRXNWtMV2x0WVdkbE9pQjFjbXdvWEZ4Y0ltaDBkSEJ6T2k4dmQzZDNMbVpzWVhScFkyOXVMbU52YlM5emRtY3ZjM1JoZEdsakwybGpiMjV6TDNOMlp5ODBORFl2TkRRMk1Ea3hMbk4yWjF4Y1hDSXBPMXhjYmlBZ1ptOXVkQzEzWldsbmFIUTZJR0p2YkdRN0lIMWNYRzVjWEc0dWFXNW5MV052YzNRc1hGeHVMbTVsWldSbFpDMXBibWR6TEZ4Y2JpNXdZVzUwY25rdFluVjBkRzl1Y3lCN1hGeHVJQ0J0WVhKbmFXNHRiR1ZtZERvZ01UQndlRHNnZlZ4Y2JseGNia0J0WldScFlTQW9iV0Y0TFhkcFpIUm9PaUE0TWpWd2VDa2dlMXhjYmlBZ2JXRnBiaUI3WEZ4dUlDQWdJSGRwWkhSb09pQTVOU1U3SUgxY1hHNGdJQzVoYkd3dFkyRnlaSE1nZTF4Y2JpQWdJQ0JrYVhOd2JHRjVPaUJuY21sa08xeGNiaUFnSUNCbmNtbGtMV2RoY0RvZ016QndlRHRjWEc0Z0lDQWdaM0pwWkMxMFpXMXdiR0YwWlMxamIyeDFiVzV6T2lCeVpYQmxZWFFvTXl3Z01XWnlLVHRjWEc0Z0lDQWdjR0ZrWkdsdVp6b2dNekJ3ZUNBd0lETXdjSGdnTXpCd2VEdGNYRzRnSUNBZ2QybGtkR2c2SURrMUxqVjJkenNnZlZ4Y2JpQWdMbVJwYzNCc1lYa3RjbVZqYVhCbElIdGNYRzRnSUNBZ1pHbHpjR3hoZVRvZ1pteGxlRHRjWEc0Z0lDQWdhblZ6ZEdsbWVTMWpiMjUwWlc1ME9pQnpjR0ZqWlMxaGNtOTFibVE3WEZ4dUlDQWdJR1pzWlhndFpHbHlaV04wYVc5dU9pQmpiMngxYlc0N1hGeHVJQ0FnSUdGc2FXZHVMV2wwWlcxek9pQmpaVzUwWlhJN0lIMWNYRzRnSUM1eVpXTnBjR1V0YVc1emRISjFZM1JwYjI1eklIdGNYRzRnSUNBZ2JXRnlaMmx1TFhSdmNEb2dNRHNnZlNCOVhGeHVYRnh1UUcxbFpHbGhJQ2h0WVhndGQybGtkR2c2SURZd01IQjRLU0I3WEZ4dUlDQXVZV3hzTFdOaGNtUnpJSHRjWEc0Z0lDQWdaR2x6Y0d4aGVUb2daM0pwWkR0Y1hHNGdJQ0FnWjNKcFpDMW5ZWEE2SURNd2NIZzdYRnh1SUNBZ0lHZHlhV1F0ZEdWdGNHeGhkR1V0WTI5c2RXMXVjem9nY21Wd1pXRjBLRElzSURGbWNpazdYRnh1SUNBZ0lIQmhaR1JwYm1jNklETXdjSGdnTUNBek1IQjRJRE13Y0hnN1hGeHVJQ0FnSUhkcFpIUm9PaUE1TlM0MWRuYzdJSDFjWEc0Z0lDNWthWE53YkdGNUxYSmxZMmx3WlNCN1hGeHVJQ0FnSUdScGMzQnNZWGs2SUdac1pYZzdYRnh1SUNBZ0lHcDFjM1JwWm5rdFkyOXVkR1Z1ZERvZ1kyVnVkR1Z5TzF4Y2JpQWdJQ0JtYkdWNExXUnBjbVZqZEdsdmJqb2dZMjlzZFcxdU8xeGNiaUFnSUNCaGJHbG5iaTFwZEdWdGN6b2dZMlZ1ZEdWeU95QjlYRnh1SUNBdWMyVmhjbU5vTFdsdFlXZGxJSHRjWEc0Z0lDQWdaR2x6Y0d4aGVUb2dibTl1WlRzZ2ZTQjlYRnh1WEZ4dVFHMWxaR2xoSUNodFlYZ3RkMmxrZEdnNklEUTFNSEI0S1NCN1hGeHVJQ0F1Ykc5M1pYSXRhR1ZoWkdWeUxGeGNiaUFnTG0xaGFXNHRhR1ZoWkdWeUlIdGNYRzRnSUNBZ1pteGxlQzFrYVhKbFkzUnBiMjQ2SUdOdmJIVnRianRjWEc0Z0lDQWdZV3hwWjI0dGFYUmxiWE02SUdObGJuUmxjanNnZlZ4Y2JpQWdMbk5sWVhKamFDMXBibkIxZENCN1hGeHVJQ0FnSUcxcGJpMTNhV1IwYURvZ09EQjJkenNnZlZ4Y2JpQWdMbUZzYkMxallYSmtjeUI3WEZ4dUlDQWdJR1JwYzNCc1lYazZJR2R5YVdRN1hGeHVJQ0FnSUdkeWFXUXRaMkZ3T2lBek1IQjRPMXhjYmlBZ0lDQm5jbWxrTFhSbGJYQnNZWFJsTFdOdmJIVnRibk02SUhKbGNHVmhkQ2d4TENBeFpuSXBPMXhjYmlBZ0lDQndZV1JrYVc1bk9pQXpNSEI0SURBZ016QndlQ0F6TUhCNE8xeGNiaUFnSUNCM2FXUjBhRG9nT1RVdU5YWjNPeUI5WEZ4dUlDQXVZMkZ5WkMxaWRYUjBiMjRnZTF4Y2JpQWdJQ0JvWldsbmFIUTZJR0YxZEc4N0lIMWNYRzRnSUM1MGJ5MWpiMjlySUh0Y1hHNGdJQ0FnWkdsemNHeGhlVG9nWm14bGVEdGNYRzRnSUNBZ1pteGxlQzFrYVhKbFkzUnBiMjQ2SUdOdmJIVnRianRjWEc0Z0lDQWdZV3hwWjI0dGFYUmxiWE02SUdObGJuUmxjanNnZlZ4Y2JpQWdMbU5oY21RZ2UxeGNiaUFnSUNCdFlYZ3RkMmxrZEdnNklEazFKVHNnZlNCOVhGeHVYQ0lzSUZ3aVhDSmRLVHRjYmx4dUlpd2lYQ0oxYzJVZ2MzUnlhV04wWENJN1hHNWNiaThxWEc0Z0lFMUpWQ0JNYVdObGJuTmxJR2gwZEhBNkx5OTNkM2N1YjNCbGJuTnZkWEpqWlM1dmNtY3ZiR2xqWlc1elpYTXZiV2wwTFd4cFkyVnVjMlV1Y0dod1hHNGdJRUYxZEdodmNpQlViMkpwWVhNZ1MyOXdjR1Z5Y3lCQWMyOXJjbUZjYmlvdlhHNHZMeUJqYzNNZ1ltRnpaU0JqYjJSbExDQnBibXBsWTNSbFpDQmllU0IwYUdVZ1kzTnpMV3h2WVdSbGNseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpQW9kWE5sVTI5MWNtTmxUV0Z3S1NCN1hHNGdJSFpoY2lCc2FYTjBJRDBnVzEwN0lDOHZJSEpsZEhWeWJpQjBhR1VnYkdsemRDQnZaaUJ0YjJSMWJHVnpJR0Z6SUdOemN5QnpkSEpwYm1kY2JseHVJQ0JzYVhOMExuUnZVM1J5YVc1bklEMGdablZ1WTNScGIyNGdkRzlUZEhKcGJtY29LU0I3WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11YldGd0tHWjFibU4wYVc5dUlDaHBkR1Z0S1NCN1hHNGdJQ0FnSUNCMllYSWdZMjl1ZEdWdWRDQTlJR056YzFkcGRHaE5ZWEJ3YVc1blZHOVRkSEpwYm1jb2FYUmxiU3dnZFhObFUyOTFjbU5sVFdGd0tUdGNibHh1SUNBZ0lDQWdhV1lnS0dsMFpXMWJNbDBwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUNkQWJXVmthV0VnSnlBcklHbDBaVzFiTWwwZ0t5QW5leWNnS3lCamIyNTBaVzUwSUNzZ0ozMG5PMXh1SUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHTnZiblJsYm5RN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlNrdWFtOXBiaWduSnlrN1hHNGdJSDA3SUM4dklHbHRjRzl5ZENCaElHeHBjM1FnYjJZZ2JXOWtkV3hsY3lCcGJuUnZJSFJvWlNCc2FYTjBYRzVjYmx4dUlDQnNhWE4wTG1rZ1BTQm1kVzVqZEdsdmJpQW9iVzlrZFd4bGN5d2diV1ZrYVdGUmRXVnllU2tnZTF4dUlDQWdJR2xtSUNoMGVYQmxiMllnYlc5a2RXeGxjeUE5UFQwZ0ozTjBjbWx1WnljcElIdGNiaUFnSUNBZ0lHMXZaSFZzWlhNZ1BTQmJXMjUxYkd3c0lHMXZaSFZzWlhNc0lDY25YVjA3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdkbUZ5SUdGc2NtVmhaSGxKYlhCdmNuUmxaRTF2WkhWc1pYTWdQU0I3ZlR0Y2JseHVJQ0FnSUdadmNpQW9kbUZ5SUdrZ1BTQXdPeUJwSUR3Z2RHaHBjeTVzWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ2RtRnlJR2xrSUQwZ2RHaHBjMXRwWFZzd1hUdGNibHh1SUNBZ0lDQWdhV1lnS0dsa0lDRTlJRzUxYkd3cElIdGNiaUFnSUNBZ0lDQWdZV3h5WldGa2VVbHRjRzl5ZEdWa1RXOWtkV3hsYzF0cFpGMGdQU0IwY25WbE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUdadmNpQW9hU0E5SURBN0lHa2dQQ0J0YjJSMWJHVnpMbXhsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnSUNCMllYSWdhWFJsYlNBOUlHMXZaSFZzWlhOYmFWMDdJQzh2SUhOcmFYQWdZV3h5WldGa2VTQnBiWEJ2Y25SbFpDQnRiMlIxYkdWY2JpQWdJQ0FnSUM4dklIUm9hWE1nYVcxd2JHVnRaVzUwWVhScGIyNGdhWE1nYm05MElERXdNQ1VnY0dWeVptVmpkQ0JtYjNJZ2QyVnBjbVFnYldWa2FXRWdjWFZsY25rZ1kyOXRZbWx1WVhScGIyNXpYRzRnSUNBZ0lDQXZMeUIzYUdWdUlHRWdiVzlrZFd4bElHbHpJR2x0Y0c5eWRHVmtJRzExYkhScGNHeGxJSFJwYldWeklIZHBkR2dnWkdsbVptVnlaVzUwSUcxbFpHbGhJSEYxWlhKcFpYTXVYRzRnSUNBZ0lDQXZMeUJKSUdodmNHVWdkR2hwY3lCM2FXeHNJRzVsZG1WeUlHOWpZM1Z5SUNoSVpYa2dkR2hwY3lCM1lYa2dkMlVnYUdGMlpTQnpiV0ZzYkdWeUlHSjFibVJzWlhNcFhHNWNiaUFnSUNBZ0lHbG1JQ2hwZEdWdFd6QmRJRDA5SUc1MWJHd2dmSHdnSVdGc2NtVmhaSGxKYlhCdmNuUmxaRTF2WkhWc1pYTmJhWFJsYlZzd1hWMHBJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tHMWxaR2xoVVhWbGNua2dKaVlnSVdsMFpXMWJNbDBwSUh0Y2JpQWdJQ0FnSUNBZ0lDQnBkR1Z0V3pKZElEMGdiV1ZrYVdGUmRXVnllVHRjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNodFpXUnBZVkYxWlhKNUtTQjdYRzRnSUNBZ0lDQWdJQ0FnYVhSbGJWc3lYU0E5SUNjb0p5QXJJR2wwWlcxYk1sMGdLeUFuS1NCaGJtUWdLQ2NnS3lCdFpXUnBZVkYxWlhKNUlDc2dKeWtuTzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdiR2x6ZEM1d2RYTm9LR2wwWlcwcE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdmVHRjYmx4dUlDQnlaWFIxY200Z2JHbHpkRHRjYm4wN1hHNWNibVoxYm1OMGFXOXVJR056YzFkcGRHaE5ZWEJ3YVc1blZHOVRkSEpwYm1jb2FYUmxiU3dnZFhObFUyOTFjbU5sVFdGd0tTQjdYRzRnSUhaaGNpQmpiMjUwWlc1MElEMGdhWFJsYlZzeFhTQjhmQ0FuSnp0Y2JpQWdkbUZ5SUdOemMwMWhjSEJwYm1jZ1BTQnBkR1Z0V3pOZE8xeHVYRzRnSUdsbUlDZ2hZM056VFdGd2NHbHVaeWtnZTF4dUlDQWdJSEpsZEhWeWJpQmpiMjUwWlc1ME8xeHVJQ0I5WEc1Y2JpQWdhV1lnS0hWelpWTnZkWEpqWlUxaGNDQW1KaUIwZVhCbGIyWWdZblJ2WVNBOVBUMGdKMloxYm1OMGFXOXVKeWtnZTF4dUlDQWdJSFpoY2lCemIzVnlZMlZOWVhCd2FXNW5JRDBnZEc5RGIyMXRaVzUwS0dOemMwMWhjSEJwYm1jcE8xeHVJQ0FnSUhaaGNpQnpiM1Z5WTJWVlVreHpJRDBnWTNOelRXRndjR2x1Wnk1emIzVnlZMlZ6TG0xaGNDaG1kVzVqZEdsdmJpQW9jMjkxY21ObEtTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z0p5OHFJeUJ6YjNWeVkyVlZVa3c5SnlBcklHTnpjMDFoY0hCcGJtY3VjMjkxY21ObFVtOXZkQ0FySUhOdmRYSmpaU0FySUNjZ0tpOG5PMXh1SUNBZ0lIMHBPMXh1SUNBZ0lISmxkSFZ5YmlCYlkyOXVkR1Z1ZEYwdVkyOXVZMkYwS0hOdmRYSmpaVlZTVEhNcExtTnZibU5oZENoYmMyOTFjbU5sVFdGd2NHbHVaMTBwTG1wdmFXNG9KMXhjYmljcE8xeHVJQ0I5WEc1Y2JpQWdjbVYwZFhKdUlGdGpiMjUwWlc1MFhTNXFiMmx1S0NkY1hHNG5LVHRjYm4wZ0x5OGdRV1JoY0hSbFpDQm1jbTl0SUdOdmJuWmxjblF0YzI5MWNtTmxMVzFoY0NBb1RVbFVLVnh1WEc1Y2JtWjFibU4wYVc5dUlIUnZRMjl0YldWdWRDaHpiM1Z5WTJWTllYQXBJSHRjYmlBZ0x5OGdaWE5zYVc1MExXUnBjMkZpYkdVdGJtVjRkQzFzYVc1bElHNXZMWFZ1WkdWbVhHNGdJSFpoY2lCaVlYTmxOalFnUFNCaWRHOWhLSFZ1WlhOallYQmxLR1Z1WTI5a1pWVlNTVU52YlhCdmJtVnVkQ2hLVTA5T0xuTjBjbWx1WjJsbWVTaHpiM1Z5WTJWTllYQXBLU2twTzF4dUlDQjJZWElnWkdGMFlTQTlJQ2R6YjNWeVkyVk5ZWEJ3YVc1blZWSk1QV1JoZEdFNllYQndiR2xqWVhScGIyNHZhbk52Ymp0amFHRnljMlYwUFhWMFppMDRPMkpoYzJVMk5Dd25JQ3NnWW1GelpUWTBPMXh1SUNCeVpYUjFjbTRnSnk4cUl5QW5JQ3NnWkdGMFlTQXJJQ2NnS2k4bk8xeHVmU0lzSWk4cVhHNWNkRTFKVkNCTWFXTmxibk5sSUdoMGRIQTZMeTkzZDNjdWIzQmxibk52ZFhKalpTNXZjbWN2YkdsalpXNXpaWE12YldsMExXeHBZMlZ1YzJVdWNHaHdYRzVjZEVGMWRHaHZjaUJVYjJKcFlYTWdTMjl3Y0dWeWN5QkFjMjlyY21GY2Jpb3ZYRzVjYm5aaGNpQnpkSGxzWlhOSmJrUnZiU0E5SUh0OU8xeHVYRzUyWVhKY2RHMWxiVzlwZW1VZ1BTQm1kVzVqZEdsdmJpQW9abTRwSUh0Y2JseDBkbUZ5SUcxbGJXODdYRzVjYmx4MGNtVjBkWEp1SUdaMWJtTjBhVzl1SUNncElIdGNibHgwWEhScFppQW9kSGx3Wlc5bUlHMWxiVzhnUFQwOUlGd2lkVzVrWldacGJtVmtYQ0lwSUcxbGJXOGdQU0JtYmk1aGNIQnNlU2gwYUdsekxDQmhjbWQxYldWdWRITXBPMXh1WEhSY2RISmxkSFZ5YmlCdFpXMXZPMXh1WEhSOU8xeHVmVHRjYmx4dWRtRnlJR2x6VDJ4a1NVVWdQU0J0WlcxdmFYcGxLR1oxYm1OMGFXOXVJQ2dwSUh0Y2JseDBMeThnVkdWemRDQm1iM0lnU1VVZ1BEMGdPU0JoY3lCd2NtOXdiM05sWkNCaWVTQkNjbTkzYzJWeWFHRmphM05jYmx4MEx5OGdRSE5sWlNCb2RIUndPaTh2WW5KdmQzTmxjbWhoWTJ0ekxtTnZiUzhqYUdGamF5MWxOekZrT0RZNU1tWTJOVE16TkRFM00yWmxaVGN4TldNeU1qSmpZamd3TlZ4dVhIUXZMeUJVWlhOMGN5Qm1iM0lnWlhocGMzUmxibU5sSUc5bUlITjBZVzVrWVhKa0lHZHNiMkpoYkhNZ2FYTWdkRzhnWVd4c2IzY2djM1I1YkdVdGJHOWhaR1Z5WEc1Y2RDOHZJSFJ2SUc5d1pYSmhkR1VnWTI5eWNtVmpkR3g1SUdsdWRHOGdibTl1TFhOMFlXNWtZWEprSUdWdWRtbHliMjV0Wlc1MGMxeHVYSFF2THlCQWMyVmxJR2gwZEhCek9pOHZaMmwwYUhWaUxtTnZiUzkzWldKd1lXTnJMV052Ym5SeWFXSXZjM1I1YkdVdGJHOWhaR1Z5TDJsemMzVmxjeTh4TnpkY2JseDBjbVYwZFhKdUlIZHBibVJ2ZHlBbUppQmtiMk4xYldWdWRDQW1KaUJrYjJOMWJXVnVkQzVoYkd3Z0ppWWdJWGRwYm1SdmR5NWhkRzlpTzF4dWZTazdYRzVjYm5aaGNpQm5aWFJVWVhKblpYUWdQU0JtZFc1amRHbHZiaUFvZEdGeVoyVjBMQ0J3WVhKbGJuUXBJSHRjYmlBZ2FXWWdLSEJoY21WdWRDbDdYRzRnSUNBZ2NtVjBkWEp1SUhCaGNtVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtIUmhjbWRsZENrN1hHNGdJSDFjYmlBZ2NtVjBkWEp1SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9kR0Z5WjJWMEtUdGNibjA3WEc1Y2JuWmhjaUJuWlhSRmJHVnRaVzUwSUQwZ0tHWjFibU4wYVc5dUlDaG1iaWtnZTF4dVhIUjJZWElnYldWdGJ5QTlJSHQ5TzF4dVhHNWNkSEpsZEhWeWJpQm1kVzVqZEdsdmJpaDBZWEpuWlhRc0lIQmhjbVZ1ZENrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHZJRWxtSUhCaGMzTnBibWNnWm5WdVkzUnBiMjRnYVc0Z2IzQjBhVzl1Y3l3Z2RHaGxiaUIxYzJVZ2FYUWdabTl5SUhKbGMyOXNkbVVnWENKb1pXRmtYQ0lnWld4bGJXVnVkQzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2THlCVmMyVm1kV3dnWm05eUlGTm9ZV1J2ZHlCU2IyOTBJSE4wZVd4bElHa3VaVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdkx5QWdJR2x1YzJWeWRFbHVkRzg2SUdaMWJtTjBhVzl1SUNncElIc2djbVYwZFhKdUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvWENJalptOXZYQ0lwTG5Ob1lXUnZkMUp2YjNRZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHZJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RIbHdaVzltSUhSaGNtZGxkQ0E5UFQwZ0oyWjFibU4wYVc5dUp5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlIUmhjbWRsZENncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZEhsd1pXOW1JRzFsYlc5YmRHRnlaMlYwWFNBOVBUMGdYQ0oxYm1SbFptbHVaV1JjSWlrZ2UxeHVYSFJjZEZ4MGRtRnlJSE4wZVd4bFZHRnlaMlYwSUQwZ1oyVjBWR0Z5WjJWMExtTmhiR3dvZEdocGN5d2dkR0Z5WjJWMExDQndZWEpsYm5RcE8xeHVYSFJjZEZ4MEx5OGdVM0JsWTJsaGJDQmpZWE5sSUhSdklISmxkSFZ5YmlCb1pXRmtJRzltSUdsbWNtRnRaU0JwYm5OMFpXRmtJRzltSUdsbWNtRnRaU0JwZEhObGJHWmNibHgwWEhSY2RHbG1JQ2gzYVc1a2IzY3VTRlJOVEVsR2NtRnRaVVZzWlcxbGJuUWdKaVlnYzNSNWJHVlVZWEpuWlhRZ2FXNXpkR0Z1WTJWdlppQjNhVzVrYjNjdVNGUk5URWxHY21GdFpVVnNaVzFsYm5RcElIdGNibHgwWEhSY2RGeDBkSEo1SUh0Y2JseDBYSFJjZEZ4MFhIUXZMeUJVYUdseklIZHBiR3dnZEdoeWIzY2dZVzRnWlhoalpYQjBhVzl1SUdsbUlHRmpZMlZ6Y3lCMGJ5QnBabkpoYldVZ2FYTWdZbXh2WTJ0bFpGeHVYSFJjZEZ4MFhIUmNkQzh2SUdSMVpTQjBieUJqY205emN5MXZjbWxuYVc0Z2NtVnpkSEpwWTNScGIyNXpYRzVjZEZ4MFhIUmNkRngwYzNSNWJHVlVZWEpuWlhRZ1BTQnpkSGxzWlZSaGNtZGxkQzVqYjI1MFpXNTBSRzlqZFcxbGJuUXVhR1ZoWkR0Y2JseDBYSFJjZEZ4MGZTQmpZWFJqYUNobEtTQjdYRzVjZEZ4MFhIUmNkRngwYzNSNWJHVlVZWEpuWlhRZ1BTQnVkV3hzTzF4dVhIUmNkRngwWEhSOVhHNWNkRngwWEhSOVhHNWNkRngwWEhSdFpXMXZXM1JoY21kbGRGMGdQU0J6ZEhsc1pWUmhjbWRsZER0Y2JseDBYSFI5WEc1Y2RGeDBjbVYwZFhKdUlHMWxiVzliZEdGeVoyVjBYVnh1WEhSOU8xeHVmU2tvS1R0Y2JseHVkbUZ5SUhOcGJtZHNaWFJ2YmlBOUlHNTFiR3c3WEc1MllYSmNkSE5wYm1kc1pYUnZia052ZFc1MFpYSWdQU0F3TzF4dWRtRnlYSFJ6ZEhsc1pYTkpibk5sY25SbFpFRjBWRzl3SUQwZ1cxMDdYRzVjYm5aaGNseDBabWw0VlhKc2N5QTlJSEpsY1hWcGNtVW9YQ0l1TDNWeWJITmNJaWs3WEc1Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0b2JHbHpkQ3dnYjNCMGFXOXVjeWtnZTF4dVhIUnBaaUFvZEhsd1pXOW1JRVJGUWxWSElDRTlQU0JjSW5WdVpHVm1hVzVsWkZ3aUlDWW1JRVJGUWxWSEtTQjdYRzVjZEZ4MGFXWWdLSFI1Y0dWdlppQmtiMk4xYldWdWRDQWhQVDBnWENKdlltcGxZM1JjSWlrZ2RHaHliM2NnYm1WM0lFVnljbTl5S0Z3aVZHaGxJSE4wZVd4bExXeHZZV1JsY2lCallXNXViM1FnWW1VZ2RYTmxaQ0JwYmlCaElHNXZiaTFpY205M2MyVnlJR1Z1ZG1seWIyNXRaVzUwWENJcE8xeHVYSFI5WEc1Y2JseDBiM0IwYVc5dWN5QTlJRzl3ZEdsdmJuTWdmSHdnZTMwN1hHNWNibHgwYjNCMGFXOXVjeTVoZEhSeWN5QTlJSFI1Y0dWdlppQnZjSFJwYjI1ekxtRjBkSEp6SUQwOVBTQmNJbTlpYW1WamRGd2lJRDhnYjNCMGFXOXVjeTVoZEhSeWN5QTZJSHQ5TzF4dVhHNWNkQzh2SUVadmNtTmxJSE5wYm1kc1pTMTBZV2NnYzI5c2RYUnBiMjRnYjI0Z1NVVTJMVGtzSUhkb2FXTm9JR2hoY3lCaElHaGhjbVFnYkdsdGFYUWdiMjRnZEdobElDTWdiMllnUEhOMGVXeGxQbHh1WEhRdkx5QjBZV2R6SUdsMElIZHBiR3dnWVd4c2IzY2diMjRnWVNCd1lXZGxYRzVjZEdsbUlDZ2hiM0IwYVc5dWN5NXphVzVuYkdWMGIyNGdKaVlnZEhsd1pXOW1JRzl3ZEdsdmJuTXVjMmx1WjJ4bGRHOXVJQ0U5UFNCY0ltSnZiMnhsWVc1Y0lpa2diM0IwYVc5dWN5NXphVzVuYkdWMGIyNGdQU0JwYzA5c1pFbEZLQ2s3WEc1Y2JseDBMeThnUW5rZ1pHVm1ZWFZzZEN3Z1lXUmtJRHh6ZEhsc1pUNGdkR0ZuY3lCMGJ5QjBhR1VnUEdobFlXUStJR1ZzWlcxbGJuUmNiaUFnSUNBZ0lDQWdhV1lnS0NGdmNIUnBiMjV6TG1sdWMyVnlkRWx1ZEc4cElHOXdkR2x2Ym5NdWFXNXpaWEowU1c1MGJ5QTlJRndpYUdWaFpGd2lPMXh1WEc1Y2RDOHZJRUo1SUdSbFptRjFiSFFzSUdGa1pDQThjM1I1YkdVK0lIUmhaM01nZEc4Z2RHaGxJR0p2ZEhSdmJTQnZaaUIwYUdVZ2RHRnlaMlYwWEc1Y2RHbG1JQ2doYjNCMGFXOXVjeTVwYm5ObGNuUkJkQ2tnYjNCMGFXOXVjeTVwYm5ObGNuUkJkQ0E5SUZ3aVltOTBkRzl0WENJN1hHNWNibHgwZG1GeUlITjBlV3hsY3lBOUlHeHBjM1JVYjFOMGVXeGxjeWhzYVhOMExDQnZjSFJwYjI1ektUdGNibHh1WEhSaFpHUlRkSGxzWlhOVWIwUnZiU2h6ZEhsc1pYTXNJRzl3ZEdsdmJuTXBPMXh1WEc1Y2RISmxkSFZ5YmlCbWRXNWpkR2x2YmlCMWNHUmhkR1VnS0c1bGQweHBjM1FwSUh0Y2JseDBYSFIyWVhJZ2JXRjVVbVZ0YjNabElEMGdXMTA3WEc1Y2JseDBYSFJtYjNJZ0tIWmhjaUJwSUQwZ01Ec2dhU0E4SUhOMGVXeGxjeTVzWlc1bmRHZzdJR2tyS3lrZ2UxeHVYSFJjZEZ4MGRtRnlJR2wwWlcwZ1BTQnpkSGxzWlhOYmFWMDdYRzVjZEZ4MFhIUjJZWElnWkc5dFUzUjViR1VnUFNCemRIbHNaWE5KYmtSdmJWdHBkR1Z0TG1sa1hUdGNibHh1WEhSY2RGeDBaRzl0VTNSNWJHVXVjbVZtY3kwdE8xeHVYSFJjZEZ4MGJXRjVVbVZ0YjNabExuQjFjMmdvWkc5dFUzUjViR1VwTzF4dVhIUmNkSDFjYmx4dVhIUmNkR2xtS0c1bGQweHBjM1FwSUh0Y2JseDBYSFJjZEhaaGNpQnVaWGRUZEhsc1pYTWdQU0JzYVhOMFZHOVRkSGxzWlhNb2JtVjNUR2x6ZEN3Z2IzQjBhVzl1Y3lrN1hHNWNkRngwWEhSaFpHUlRkSGxzWlhOVWIwUnZiU2h1WlhkVGRIbHNaWE1zSUc5d2RHbHZibk1wTzF4dVhIUmNkSDFjYmx4dVhIUmNkR1p2Y2lBb2RtRnlJR2tnUFNBd095QnBJRHdnYldGNVVtVnRiM1psTG14bGJtZDBhRHNnYVNzcktTQjdYRzVjZEZ4MFhIUjJZWElnWkc5dFUzUjViR1VnUFNCdFlYbFNaVzF2ZG1WYmFWMDdYRzVjYmx4MFhIUmNkR2xtS0dSdmJWTjBlV3hsTG5KbFpuTWdQVDA5SURBcElIdGNibHgwWEhSY2RGeDBabTl5SUNoMllYSWdhaUE5SURBN0lHb2dQQ0JrYjIxVGRIbHNaUzV3WVhKMGN5NXNaVzVuZEdnN0lHb3JLeWtnWkc5dFUzUjViR1V1Y0dGeWRITmJhbDBvS1R0Y2JseHVYSFJjZEZ4MFhIUmtaV3hsZEdVZ2MzUjViR1Z6U1c1RWIyMWJaRzl0VTNSNWJHVXVhV1JkTzF4dVhIUmNkRngwZlZ4dVhIUmNkSDFjYmx4MGZUdGNibjA3WEc1Y2JtWjFibU4wYVc5dUlHRmtaRk4wZVd4bGMxUnZSRzl0SUNoemRIbHNaWE1zSUc5d2RHbHZibk1wSUh0Y2JseDBabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0J6ZEhsc1pYTXViR1Z1WjNSb095QnBLeXNwSUh0Y2JseDBYSFIyWVhJZ2FYUmxiU0E5SUhOMGVXeGxjMXRwWFR0Y2JseDBYSFIyWVhJZ1pHOXRVM1I1YkdVZ1BTQnpkSGxzWlhOSmJrUnZiVnRwZEdWdExtbGtYVHRjYmx4dVhIUmNkR2xtS0dSdmJWTjBlV3hsS1NCN1hHNWNkRngwWEhSa2IyMVRkSGxzWlM1eVpXWnpLeXM3WEc1Y2JseDBYSFJjZEdadmNpaDJZWElnYWlBOUlEQTdJR29nUENCa2IyMVRkSGxzWlM1d1lYSjBjeTVzWlc1bmRHZzdJR29yS3lrZ2UxeHVYSFJjZEZ4MFhIUmtiMjFUZEhsc1pTNXdZWEowYzF0cVhTaHBkR1Z0TG5CaGNuUnpXMnBkS1R0Y2JseDBYSFJjZEgxY2JseHVYSFJjZEZ4MFptOXlLRHNnYWlBOElHbDBaVzB1Y0dGeWRITXViR1Z1WjNSb095QnFLeXNwSUh0Y2JseDBYSFJjZEZ4MFpHOXRVM1I1YkdVdWNHRnlkSE11Y0hWemFDaGhaR1JUZEhsc1pTaHBkR1Z0TG5CaGNuUnpXMnBkTENCdmNIUnBiMjV6S1NrN1hHNWNkRngwWEhSOVhHNWNkRngwZlNCbGJITmxJSHRjYmx4MFhIUmNkSFpoY2lCd1lYSjBjeUE5SUZ0ZE8xeHVYRzVjZEZ4MFhIUm1iM0lvZG1GeUlHb2dQU0F3T3lCcUlEd2dhWFJsYlM1d1lYSjBjeTVzWlc1bmRHZzdJR29yS3lrZ2UxeHVYSFJjZEZ4MFhIUndZWEowY3k1d2RYTm9LR0ZrWkZOMGVXeGxLR2wwWlcwdWNHRnlkSE5iYWwwc0lHOXdkR2x2Ym5NcEtUdGNibHgwWEhSY2RIMWNibHh1WEhSY2RGeDBjM1I1YkdWelNXNUViMjFiYVhSbGJTNXBaRjBnUFNCN2FXUTZJR2wwWlcwdWFXUXNJSEpsWm5NNklERXNJSEJoY25Sek9pQndZWEowYzMwN1hHNWNkRngwZlZ4dVhIUjlYRzU5WEc1Y2JtWjFibU4wYVc5dUlHeHBjM1JVYjFOMGVXeGxjeUFvYkdsemRDd2diM0IwYVc5dWN5a2dlMXh1WEhSMllYSWdjM1I1YkdWeklEMGdXMTA3WEc1Y2RIWmhjaUJ1WlhkVGRIbHNaWE1nUFNCN2ZUdGNibHh1WEhSbWIzSWdLSFpoY2lCcElEMGdNRHNnYVNBOElHeHBjM1F1YkdWdVozUm9PeUJwS3lzcElIdGNibHgwWEhSMllYSWdhWFJsYlNBOUlHeHBjM1JiYVYwN1hHNWNkRngwZG1GeUlHbGtJRDBnYjNCMGFXOXVjeTVpWVhObElEOGdhWFJsYlZzd1hTQXJJRzl3ZEdsdmJuTXVZbUZ6WlNBNklHbDBaVzFiTUYwN1hHNWNkRngwZG1GeUlHTnpjeUE5SUdsMFpXMWJNVjA3WEc1Y2RGeDBkbUZ5SUcxbFpHbGhJRDBnYVhSbGJWc3lYVHRjYmx4MFhIUjJZWElnYzI5MWNtTmxUV0Z3SUQwZ2FYUmxiVnN6WFR0Y2JseDBYSFIyWVhJZ2NHRnlkQ0E5SUh0amMzTTZJR056Y3l3Z2JXVmthV0U2SUcxbFpHbGhMQ0J6YjNWeVkyVk5ZWEE2SUhOdmRYSmpaVTFoY0gwN1hHNWNibHgwWEhScFppZ2hibVYzVTNSNWJHVnpXMmxrWFNrZ2MzUjViR1Z6TG5CMWMyZ29ibVYzVTNSNWJHVnpXMmxrWFNBOUlIdHBaRG9nYVdRc0lIQmhjblJ6T2lCYmNHRnlkRjE5S1R0Y2JseDBYSFJsYkhObElHNWxkMU4wZVd4bGMxdHBaRjB1Y0dGeWRITXVjSFZ6YUNod1lYSjBLVHRjYmx4MGZWeHVYRzVjZEhKbGRIVnliaUJ6ZEhsc1pYTTdYRzU5WEc1Y2JtWjFibU4wYVc5dUlHbHVjMlZ5ZEZOMGVXeGxSV3hsYldWdWRDQW9iM0IwYVc5dWN5d2djM1I1YkdVcElIdGNibHgwZG1GeUlIUmhjbWRsZENBOUlHZGxkRVZzWlcxbGJuUW9iM0IwYVc5dWN5NXBibk5sY25SSmJuUnZLVnh1WEc1Y2RHbG1JQ2doZEdGeVoyVjBLU0I3WEc1Y2RGeDBkR2h5YjNjZ2JtVjNJRVZ5Y205eUtGd2lRMjkxYkdSdUozUWdabWx1WkNCaElITjBlV3hsSUhSaGNtZGxkQzRnVkdocGN5QndjbTlpWVdKc2VTQnRaV0Z1Y3lCMGFHRjBJSFJvWlNCMllXeDFaU0JtYjNJZ2RHaGxJQ2RwYm5ObGNuUkpiblJ2SnlCd1lYSmhiV1YwWlhJZ2FYTWdhVzUyWVd4cFpDNWNJaWs3WEc1Y2RIMWNibHh1WEhSMllYSWdiR0Z6ZEZOMGVXeGxSV3hsYldWdWRFbHVjMlZ5ZEdWa1FYUlViM0FnUFNCemRIbHNaWE5KYm5ObGNuUmxaRUYwVkc5d1czTjBlV3hsYzBsdWMyVnlkR1ZrUVhSVWIzQXViR1Z1WjNSb0lDMGdNVjA3WEc1Y2JseDBhV1lnS0c5d2RHbHZibk11YVc1elpYSjBRWFFnUFQwOUlGd2lkRzl3WENJcElIdGNibHgwWEhScFppQW9JV3hoYzNSVGRIbHNaVVZzWlcxbGJuUkpibk5sY25SbFpFRjBWRzl3S1NCN1hHNWNkRngwWEhSMFlYSm5aWFF1YVc1elpYSjBRbVZtYjNKbEtITjBlV3hsTENCMFlYSm5aWFF1Wm1seWMzUkRhR2xzWkNrN1hHNWNkRngwZlNCbGJITmxJR2xtSUNoc1lYTjBVM1I1YkdWRmJHVnRaVzUwU1c1elpYSjBaV1JCZEZSdmNDNXVaWGgwVTJsaWJHbHVaeWtnZTF4dVhIUmNkRngwZEdGeVoyVjBMbWx1YzJWeWRFSmxabTl5WlNoemRIbHNaU3dnYkdGemRGTjBlV3hsUld4bGJXVnVkRWx1YzJWeWRHVmtRWFJVYjNBdWJtVjRkRk5wWW14cGJtY3BPMXh1WEhSY2RIMGdaV3h6WlNCN1hHNWNkRngwWEhSMFlYSm5aWFF1WVhCd1pXNWtRMmhwYkdRb2MzUjViR1VwTzF4dVhIUmNkSDFjYmx4MFhIUnpkSGxzWlhOSmJuTmxjblJsWkVGMFZHOXdMbkIxYzJnb2MzUjViR1VwTzF4dVhIUjlJR1ZzYzJVZ2FXWWdLRzl3ZEdsdmJuTXVhVzV6WlhKMFFYUWdQVDA5SUZ3aVltOTBkRzl0WENJcElIdGNibHgwWEhSMFlYSm5aWFF1WVhCd1pXNWtRMmhwYkdRb2MzUjViR1VwTzF4dVhIUjlJR1ZzYzJVZ2FXWWdLSFI1Y0dWdlppQnZjSFJwYjI1ekxtbHVjMlZ5ZEVGMElEMDlQU0JjSW05aWFtVmpkRndpSUNZbUlHOXdkR2x2Ym5NdWFXNXpaWEowUVhRdVltVm1iM0psS1NCN1hHNWNkRngwZG1GeUlHNWxlSFJUYVdKc2FXNW5JRDBnWjJWMFJXeGxiV1Z1ZENodmNIUnBiMjV6TG1sdWMyVnlkRUYwTG1KbFptOXlaU3dnZEdGeVoyVjBLVHRjYmx4MFhIUjBZWEpuWlhRdWFXNXpaWEowUW1WbWIzSmxLSE4wZVd4bExDQnVaWGgwVTJsaWJHbHVaeWs3WEc1Y2RIMGdaV3h6WlNCN1hHNWNkRngwZEdoeWIzY2dibVYzSUVWeWNtOXlLRndpVzFOMGVXeGxJRXh2WVdSbGNsMWNYRzVjWEc0Z1NXNTJZV3hwWkNCMllXeDFaU0JtYjNJZ2NHRnlZVzFsZEdWeUlDZHBibk5sY25SQmRDY2dLQ2R2Y0hScGIyNXpMbWx1YzJWeWRFRjBKeWtnWm05MWJtUXVYRnh1SUUxMWMzUWdZbVVnSjNSdmNDY3NJQ2RpYjNSMGIyMG5MQ0J2Y2lCUFltcGxZM1F1WEZ4dUlDaG9kSFJ3Y3pvdkwyZHBkR2gxWWk1amIyMHZkMlZpY0dGamF5MWpiMjUwY21saUwzTjBlV3hsTFd4dllXUmxjaU5wYm5ObGNuUmhkQ2xjWEc1Y0lpazdYRzVjZEgxY2JuMWNibHh1Wm5WdVkzUnBiMjRnY21WdGIzWmxVM1I1YkdWRmJHVnRaVzUwSUNoemRIbHNaU2tnZTF4dVhIUnBaaUFvYzNSNWJHVXVjR0Z5Wlc1MFRtOWtaU0E5UFQwZ2JuVnNiQ2tnY21WMGRYSnVJR1poYkhObE8xeHVYSFJ6ZEhsc1pTNXdZWEpsYm5ST2IyUmxMbkpsYlc5MlpVTm9hV3hrS0hOMGVXeGxLVHRjYmx4dVhIUjJZWElnYVdSNElEMGdjM1I1YkdWelNXNXpaWEowWldSQmRGUnZjQzVwYm1SbGVFOW1LSE4wZVd4bEtUdGNibHgwYVdZb2FXUjRJRDQ5SURBcElIdGNibHgwWEhSemRIbHNaWE5KYm5ObGNuUmxaRUYwVkc5d0xuTndiR2xqWlNocFpIZ3NJREVwTzF4dVhIUjlYRzU5WEc1Y2JtWjFibU4wYVc5dUlHTnlaV0YwWlZOMGVXeGxSV3hsYldWdWRDQW9iM0IwYVc5dWN5a2dlMXh1WEhSMllYSWdjM1I1YkdVZ1BTQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0Z3aWMzUjViR1ZjSWlrN1hHNWNibHgwYVdZb2IzQjBhVzl1Y3k1aGRIUnljeTUwZVhCbElEMDlQU0IxYm1SbFptbHVaV1FwSUh0Y2JseDBYSFJ2Y0hScGIyNXpMbUYwZEhKekxuUjVjR1VnUFNCY0luUmxlSFF2WTNOelhDSTdYRzVjZEgxY2JseHVYSFJwWmlodmNIUnBiMjV6TG1GMGRISnpMbTV2Ym1ObElEMDlQU0IxYm1SbFptbHVaV1FwSUh0Y2JseDBYSFIyWVhJZ2JtOXVZMlVnUFNCblpYUk9iMjVqWlNncE8xeHVYSFJjZEdsbUlDaHViMjVqWlNrZ2UxeHVYSFJjZEZ4MGIzQjBhVzl1Y3k1aGRIUnljeTV1YjI1alpTQTlJRzV2Ym1ObE8xeHVYSFJjZEgxY2JseDBmVnh1WEc1Y2RHRmtaRUYwZEhKektITjBlV3hsTENCdmNIUnBiMjV6TG1GMGRISnpLVHRjYmx4MGFXNXpaWEowVTNSNWJHVkZiR1Z0Wlc1MEtHOXdkR2x2Ym5Nc0lITjBlV3hsS1R0Y2JseHVYSFJ5WlhSMWNtNGdjM1I1YkdVN1hHNTlYRzVjYm1aMWJtTjBhVzl1SUdOeVpXRjBaVXhwYm10RmJHVnRaVzUwSUNodmNIUnBiMjV6S1NCN1hHNWNkSFpoY2lCc2FXNXJJRDBnWkc5amRXMWxiblF1WTNKbFlYUmxSV3hsYldWdWRDaGNJbXhwYm10Y0lpazdYRzVjYmx4MGFXWW9iM0IwYVc5dWN5NWhkSFJ5Y3k1MGVYQmxJRDA5UFNCMWJtUmxabWx1WldRcElIdGNibHgwWEhSdmNIUnBiMjV6TG1GMGRISnpMblI1Y0dVZ1BTQmNJblJsZUhRdlkzTnpYQ0k3WEc1Y2RIMWNibHgwYjNCMGFXOXVjeTVoZEhSeWN5NXlaV3dnUFNCY0luTjBlV3hsYzJobFpYUmNJanRjYmx4dVhIUmhaR1JCZEhSeWN5aHNhVzVyTENCdmNIUnBiMjV6TG1GMGRISnpLVHRjYmx4MGFXNXpaWEowVTNSNWJHVkZiR1Z0Wlc1MEtHOXdkR2x2Ym5Nc0lHeHBibXNwTzF4dVhHNWNkSEpsZEhWeWJpQnNhVzVyTzF4dWZWeHVYRzVtZFc1amRHbHZiaUJoWkdSQmRIUnljeUFvWld3c0lHRjBkSEp6S1NCN1hHNWNkRTlpYW1WamRDNXJaWGx6S0dGMGRISnpLUzVtYjNKRllXTm9LR1oxYm1OMGFXOXVJQ2hyWlhrcElIdGNibHgwWEhSbGJDNXpaWFJCZEhSeWFXSjFkR1VvYTJWNUxDQmhkSFJ5YzF0clpYbGRLVHRjYmx4MGZTazdYRzU5WEc1Y2JtWjFibU4wYVc5dUlHZGxkRTV2Ym1ObEtDa2dlMXh1WEhScFppQW9kSGx3Wlc5bUlGOWZkMlZpY0dGamExOXViMjVqWlY5ZklEMDlQU0FuZFc1a1pXWnBibVZrSnlrZ2UxeHVYSFJjZEhKbGRIVnliaUJ1ZFd4c08xeHVYSFI5WEc1Y2JseDBjbVYwZFhKdUlGOWZkMlZpY0dGamExOXViMjVqWlY5Zk8xeHVmVnh1WEc1bWRXNWpkR2x2YmlCaFpHUlRkSGxzWlNBb2IySnFMQ0J2Y0hScGIyNXpLU0I3WEc1Y2RIWmhjaUJ6ZEhsc1pTd2dkWEJrWVhSbExDQnlaVzF2ZG1Vc0lISmxjM1ZzZER0Y2JseHVYSFF2THlCSlppQmhJSFJ5WVc1elptOXliU0JtZFc1amRHbHZiaUIzWVhNZ1pHVm1hVzVsWkN3Z2NuVnVJR2wwSUc5dUlIUm9aU0JqYzNOY2JseDBhV1lnS0c5d2RHbHZibk11ZEhKaGJuTm1iM0p0SUNZbUlHOWlhaTVqYzNNcElIdGNibHgwSUNBZ0lISmxjM1ZzZENBOUlIUjVjR1Z2WmlCdmNIUnBiMjV6TG5SeVlXNXpabTl5YlNBOVBUMGdKMloxYm1OMGFXOXVKMXh1WEhSY2RDQS9JRzl3ZEdsdmJuTXVkSEpoYm5ObWIzSnRLRzlpYWk1amMzTXBJRnh1WEhSY2RDQTZJRzl3ZEdsdmJuTXVkSEpoYm5ObWIzSnRMbVJsWm1GMWJIUW9iMkpxTG1OemN5azdYRzVjYmx4MElDQWdJR2xtSUNoeVpYTjFiSFFwSUh0Y2JseDBJQ0FnSUZ4MEx5OGdTV1lnZEhKaGJuTm1iM0p0SUhKbGRIVnlibk1nWVNCMllXeDFaU3dnZFhObElIUm9ZWFFnYVc1emRHVmhaQ0J2WmlCMGFHVWdiM0pwWjJsdVlXd2dZM056TGx4dVhIUWdJQ0FnWEhRdkx5QlVhR2x6SUdGc2JHOTNjeUJ5ZFc1dWFXNW5JSEoxYm5ScGJXVWdkSEpoYm5ObWIzSnRZWFJwYjI1eklHOXVJSFJvWlNCamMzTXVYRzVjZENBZ0lDQmNkRzlpYWk1amMzTWdQU0J5WlhOMWJIUTdYRzVjZENBZ0lDQjlJR1ZzYzJVZ2UxeHVYSFFnSUNBZ1hIUXZMeUJKWmlCMGFHVWdkSEpoYm5ObWIzSnRJR1oxYm1OMGFXOXVJSEpsZEhWeWJuTWdZU0JtWVd4emVTQjJZV3gxWlN3Z1pHOXVKM1FnWVdSa0lIUm9hWE1nWTNOekxseHVYSFFnSUNBZ1hIUXZMeUJVYUdseklHRnNiRzkzY3lCamIyNWthWFJwYjI1aGJDQnNiMkZrYVc1bklHOW1JR056YzF4dVhIUWdJQ0FnWEhSeVpYUjFjbTRnWm5WdVkzUnBiMjRvS1NCN1hHNWNkQ0FnSUNCY2RGeDBMeThnYm05dmNGeHVYSFFnSUNBZ1hIUjlPMXh1WEhRZ0lDQWdmVnh1WEhSOVhHNWNibHgwYVdZZ0tHOXdkR2x2Ym5NdWMybHVaMnhsZEc5dUtTQjdYRzVjZEZ4MGRtRnlJSE4wZVd4bFNXNWtaWGdnUFNCemFXNW5iR1YwYjI1RGIzVnVkR1Z5S3lzN1hHNWNibHgwWEhSemRIbHNaU0E5SUhOcGJtZHNaWFJ2YmlCOGZDQW9jMmx1WjJ4bGRHOXVJRDBnWTNKbFlYUmxVM1I1YkdWRmJHVnRaVzUwS0c5d2RHbHZibk1wS1R0Y2JseHVYSFJjZEhWd1pHRjBaU0E5SUdGd2NHeDVWRzlUYVc1bmJHVjBiMjVVWVdjdVltbHVaQ2h1ZFd4c0xDQnpkSGxzWlN3Z2MzUjViR1ZKYm1SbGVDd2dabUZzYzJVcE8xeHVYSFJjZEhKbGJXOTJaU0E5SUdGd2NHeDVWRzlUYVc1bmJHVjBiMjVVWVdjdVltbHVaQ2h1ZFd4c0xDQnpkSGxzWlN3Z2MzUjViR1ZKYm1SbGVDd2dkSEoxWlNrN1hHNWNibHgwZlNCbGJITmxJR2xtSUNoY2JseDBYSFJ2WW1vdWMyOTFjbU5sVFdGd0lDWW1YRzVjZEZ4MGRIbHdaVzltSUZWU1RDQTlQVDBnWENKbWRXNWpkR2x2Ymx3aUlDWW1YRzVjZEZ4MGRIbHdaVzltSUZWU1RDNWpjbVZoZEdWUFltcGxZM1JWVWt3Z1BUMDlJRndpWm5WdVkzUnBiMjVjSWlBbUpseHVYSFJjZEhSNWNHVnZaaUJWVWt3dWNtVjJiMnRsVDJKcVpXTjBWVkpNSUQwOVBTQmNJbVoxYm1OMGFXOXVYQ0lnSmlaY2JseDBYSFIwZVhCbGIyWWdRbXh2WWlBOVBUMGdYQ0ptZFc1amRHbHZibHdpSUNZbVhHNWNkRngwZEhsd1pXOW1JR0owYjJFZ1BUMDlJRndpWm5WdVkzUnBiMjVjSWx4dVhIUXBJSHRjYmx4MFhIUnpkSGxzWlNBOUlHTnlaV0YwWlV4cGJtdEZiR1Z0Wlc1MEtHOXdkR2x2Ym5NcE8xeHVYSFJjZEhWd1pHRjBaU0E5SUhWd1pHRjBaVXhwYm1zdVltbHVaQ2h1ZFd4c0xDQnpkSGxzWlN3Z2IzQjBhVzl1Y3lrN1hHNWNkRngwY21WdGIzWmxJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVYSFJjZEZ4MGNtVnRiM1psVTNSNWJHVkZiR1Z0Wlc1MEtITjBlV3hsS1R0Y2JseHVYSFJjZEZ4MGFXWW9jM1I1YkdVdWFISmxaaWtnVlZKTUxuSmxkbTlyWlU5aWFtVmpkRlZTVENoemRIbHNaUzVvY21WbUtUdGNibHgwWEhSOU8xeHVYSFI5SUdWc2MyVWdlMXh1WEhSY2RITjBlV3hsSUQwZ1kzSmxZWFJsVTNSNWJHVkZiR1Z0Wlc1MEtHOXdkR2x2Ym5NcE8xeHVYSFJjZEhWd1pHRjBaU0E5SUdGd2NHeDVWRzlVWVdjdVltbHVaQ2h1ZFd4c0xDQnpkSGxzWlNrN1hHNWNkRngwY21WdGIzWmxJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVYSFJjZEZ4MGNtVnRiM1psVTNSNWJHVkZiR1Z0Wlc1MEtITjBlV3hsS1R0Y2JseDBYSFI5TzF4dVhIUjlYRzVjYmx4MGRYQmtZWFJsS0c5aWFpazdYRzVjYmx4MGNtVjBkWEp1SUdaMWJtTjBhVzl1SUhWd1pHRjBaVk4wZVd4bElDaHVaWGRQWW1vcElIdGNibHgwWEhScFppQW9ibVYzVDJKcUtTQjdYRzVjZEZ4MFhIUnBaaUFvWEc1Y2RGeDBYSFJjZEc1bGQwOWlhaTVqYzNNZ1BUMDlJRzlpYWk1amMzTWdKaVpjYmx4MFhIUmNkRngwYm1WM1QySnFMbTFsWkdsaElEMDlQU0J2WW1vdWJXVmthV0VnSmlaY2JseDBYSFJjZEZ4MGJtVjNUMkpxTG5OdmRYSmpaVTFoY0NBOVBUMGdiMkpxTG5OdmRYSmpaVTFoY0Z4dVhIUmNkRngwS1NCN1hHNWNkRngwWEhSY2RISmxkSFZ5Ymp0Y2JseDBYSFJjZEgxY2JseHVYSFJjZEZ4MGRYQmtZWFJsS0c5aWFpQTlJRzVsZDA5aWFpazdYRzVjZEZ4MGZTQmxiSE5sSUh0Y2JseDBYSFJjZEhKbGJXOTJaU2dwTzF4dVhIUmNkSDFjYmx4MGZUdGNibjFjYmx4dWRtRnlJSEpsY0d4aFkyVlVaWGgwSUQwZ0tHWjFibU4wYVc5dUlDZ3BJSHRjYmx4MGRtRnlJSFJsZUhSVGRHOXlaU0E5SUZ0ZE8xeHVYRzVjZEhKbGRIVnliaUJtZFc1amRHbHZiaUFvYVc1a1pYZ3NJSEpsY0d4aFkyVnRaVzUwS1NCN1hHNWNkRngwZEdWNGRGTjBiM0psVzJsdVpHVjRYU0E5SUhKbGNHeGhZMlZ0Wlc1ME8xeHVYRzVjZEZ4MGNtVjBkWEp1SUhSbGVIUlRkRzl5WlM1bWFXeDBaWElvUW05dmJHVmhiaWt1YW05cGJpZ25YRnh1SnlrN1hHNWNkSDA3WEc1OUtTZ3BPMXh1WEc1bWRXNWpkR2x2YmlCaGNIQnNlVlJ2VTJsdVoyeGxkRzl1VkdGbklDaHpkSGxzWlN3Z2FXNWtaWGdzSUhKbGJXOTJaU3dnYjJKcUtTQjdYRzVjZEhaaGNpQmpjM01nUFNCeVpXMXZkbVVnUHlCY0lsd2lJRG9nYjJKcUxtTnpjenRjYmx4dVhIUnBaaUFvYzNSNWJHVXVjM1I1YkdWVGFHVmxkQ2tnZTF4dVhIUmNkSE4wZVd4bExuTjBlV3hsVTJobFpYUXVZM056VkdWNGRDQTlJSEpsY0d4aFkyVlVaWGgwS0dsdVpHVjRMQ0JqYzNNcE8xeHVYSFI5SUdWc2MyVWdlMXh1WEhSY2RIWmhjaUJqYzNOT2IyUmxJRDBnWkc5amRXMWxiblF1WTNKbFlYUmxWR1Y0ZEU1dlpHVW9ZM056S1R0Y2JseDBYSFIyWVhJZ1kyaHBiR1JPYjJSbGN5QTlJSE4wZVd4bExtTm9hV3hrVG05a1pYTTdYRzVjYmx4MFhIUnBaaUFvWTJocGJHUk9iMlJsYzF0cGJtUmxlRjBwSUhOMGVXeGxMbkpsYlc5MlpVTm9hV3hrS0dOb2FXeGtUbTlrWlhOYmFXNWtaWGhkS1R0Y2JseHVYSFJjZEdsbUlDaGphR2xzWkU1dlpHVnpMbXhsYm1kMGFDa2dlMXh1WEhSY2RGeDBjM1I1YkdVdWFXNXpaWEowUW1WbWIzSmxLR056YzA1dlpHVXNJR05vYVd4a1RtOWtaWE5iYVc1a1pYaGRLVHRjYmx4MFhIUjlJR1ZzYzJVZ2UxeHVYSFJjZEZ4MGMzUjViR1V1WVhCd1pXNWtRMmhwYkdRb1kzTnpUbTlrWlNrN1hHNWNkRngwZlZ4dVhIUjlYRzU5WEc1Y2JtWjFibU4wYVc5dUlHRndjR3g1Vkc5VVlXY2dLSE4wZVd4bExDQnZZbW9wSUh0Y2JseDBkbUZ5SUdOemN5QTlJRzlpYWk1amMzTTdYRzVjZEhaaGNpQnRaV1JwWVNBOUlHOWlhaTV0WldScFlUdGNibHh1WEhScFppaHRaV1JwWVNrZ2UxeHVYSFJjZEhOMGVXeGxMbk5sZEVGMGRISnBZblYwWlNoY0ltMWxaR2xoWENJc0lHMWxaR2xoS1Z4dVhIUjlYRzVjYmx4MGFXWW9jM1I1YkdVdWMzUjViR1ZUYUdWbGRDa2dlMXh1WEhSY2RITjBlV3hsTG5OMGVXeGxVMmhsWlhRdVkzTnpWR1Y0ZENBOUlHTnpjenRjYmx4MGZTQmxiSE5sSUh0Y2JseDBYSFIzYUdsc1pTaHpkSGxzWlM1bWFYSnpkRU5vYVd4a0tTQjdYRzVjZEZ4MFhIUnpkSGxzWlM1eVpXMXZkbVZEYUdsc1pDaHpkSGxzWlM1bWFYSnpkRU5vYVd4a0tUdGNibHgwWEhSOVhHNWNibHgwWEhSemRIbHNaUzVoY0hCbGJtUkRhR2xzWkNoa2IyTjFiV1Z1ZEM1amNtVmhkR1ZVWlhoMFRtOWtaU2hqYzNNcEtUdGNibHgwZlZ4dWZWeHVYRzVtZFc1amRHbHZiaUIxY0dSaGRHVk1hVzVySUNoc2FXNXJMQ0J2Y0hScGIyNXpMQ0J2WW1vcElIdGNibHgwZG1GeUlHTnpjeUE5SUc5aWFpNWpjM003WEc1Y2RIWmhjaUJ6YjNWeVkyVk5ZWEFnUFNCdlltb3VjMjkxY21ObFRXRndPMXh1WEc1Y2RDOHFYRzVjZEZ4MFNXWWdZMjl1ZG1WeWRGUnZRV0p6YjJ4MWRHVlZjbXh6SUdsemJpZDBJR1JsWm1sdVpXUXNJR0oxZENCemIzVnlZMlZ0WVhCeklHRnlaU0JsYm1GaWJHVmtYRzVjZEZ4MFlXNWtJSFJvWlhKbElHbHpJRzV2SUhCMVlteHBZMUJoZEdnZ1pHVm1hVzVsWkNCMGFHVnVJR3hsZEhNZ2RIVnliaUJqYjI1MlpYSjBWRzlCWW5OdmJIVjBaVlZ5YkhOY2JseDBYSFJ2YmlCaWVTQmtaV1poZFd4MExpQWdUM1JvWlhKM2FYTmxJR1JsWm1GMWJIUWdkRzhnZEdobElHTnZiblpsY25SVWIwRmljMjlzZFhSbFZYSnNjeUJ2Y0hScGIyNWNibHgwWEhSa2FYSmxZM1JzZVZ4dVhIUXFMMXh1WEhSMllYSWdZWFYwYjBacGVGVnliSE1nUFNCdmNIUnBiMjV6TG1OdmJuWmxjblJVYjBGaWMyOXNkWFJsVlhKc2N5QTlQVDBnZFc1a1pXWnBibVZrSUNZbUlITnZkWEpqWlUxaGNEdGNibHh1WEhScFppQW9iM0IwYVc5dWN5NWpiMjUyWlhKMFZHOUJZbk52YkhWMFpWVnliSE1nZkh3Z1lYVjBiMFpwZUZWeWJITXBJSHRjYmx4MFhIUmpjM01nUFNCbWFYaFZjbXh6S0dOemN5azdYRzVjZEgxY2JseHVYSFJwWmlBb2MyOTFjbU5sVFdGd0tTQjdYRzVjZEZ4MEx5OGdhSFIwY0RvdkwzTjBZV05yYjNabGNtWnNiM2N1WTI5dEwyRXZNalkyTURNNE56VmNibHgwWEhSamMzTWdLejBnWENKY1hHNHZLaU1nYzI5MWNtTmxUV0Z3Y0dsdVoxVlNURDFrWVhSaE9tRndjR3hwWTJGMGFXOXVMMnB6YjI0N1ltRnpaVFkwTEZ3aUlDc2dZblJ2WVNoMWJtVnpZMkZ3WlNobGJtTnZaR1ZWVWtsRGIyMXdiMjVsYm5Rb1NsTlBUaTV6ZEhKcGJtZHBabmtvYzI5MWNtTmxUV0Z3S1NrcEtTQXJJRndpSUNvdlhDSTdYRzVjZEgxY2JseHVYSFIyWVhJZ1lteHZZaUE5SUc1bGR5QkNiRzlpS0Z0amMzTmRMQ0I3SUhSNWNHVTZJRndpZEdWNGRDOWpjM05jSWlCOUtUdGNibHh1WEhSMllYSWdiMnhrVTNKaklEMGdiR2x1YXk1b2NtVm1PMXh1WEc1Y2RHeHBibXN1YUhKbFppQTlJRlZTVEM1amNtVmhkR1ZQWW1wbFkzUlZVa3dvWW14dllpazdYRzVjYmx4MGFXWW9iMnhrVTNKaktTQlZVa3d1Y21WMmIydGxUMkpxWldOMFZWSk1LRzlzWkZOeVl5azdYRzU5WEc0aUxDSmNiaThxS2x4dUlDb2dWMmhsYmlCemIzVnlZMlVnYldGd2N5QmhjbVVnWlc1aFlteGxaQ3dnWUhOMGVXeGxMV3h2WVdSbGNtQWdkWE5sY3lCaElHeHBibXNnWld4bGJXVnVkQ0IzYVhSb0lHRWdaR0YwWVMxMWNta2dkRzljYmlBcUlHVnRZbVZrSUhSb1pTQmpjM01nYjI0Z2RHaGxJSEJoWjJVdUlGUm9hWE1nWW5KbFlXdHpJR0ZzYkNCeVpXeGhkR2wyWlNCMWNteHpJR0psWTJGMWMyVWdibTkzSUhSb1pYa2dZWEpsSUhKbGJHRjBhWFpsSUhSdklHRmNiaUFxSUdKMWJtUnNaU0JwYm5OMFpXRmtJRzltSUhSb1pTQmpkWEp5Wlc1MElIQmhaMlV1WEc0Z0tseHVJQ29nVDI1bElITnZiSFYwYVc5dUlHbHpJSFJ2SUc5dWJIa2dkWE5sSUdaMWJHd2dkWEpzY3l3Z1luVjBJSFJvWVhRZ2JXRjVJR0psSUdsdGNHOXpjMmxpYkdVdVhHNGdLbHh1SUNvZ1NXNXpkR1ZoWkN3Z2RHaHBjeUJtZFc1amRHbHZiaUJjSW1acGVHVnpYQ0lnZEdobElISmxiR0YwYVhabElIVnliSE1nZEc4Z1ltVWdZV0p6YjJ4MWRHVWdZV05qYjNKa2FXNW5JSFJ2SUhSb1pTQmpkWEp5Wlc1MElIQmhaMlVnYkc5allYUnBiMjR1WEc0Z0tseHVJQ29nUVNCeWRXUnBiV1Z1ZEdGeWVTQjBaWE4wSUhOMWFYUmxJR2x6SUd4dlkyRjBaV1FnWVhRZ1lIUmxjM1F2Wm1sNFZYSnNjeTVxYzJBZ1lXNWtJR05oYmlCaVpTQnlkVzRnZG1saElIUm9aU0JnYm5CdElIUmxjM1JnSUdOdmJXMWhibVF1WEc0Z0tseHVJQ292WEc1Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0Z0tHTnpjeWtnZTF4dUlDQXZMeUJuWlhRZ1kzVnljbVZ1ZENCc2IyTmhkR2x2Ymx4dUlDQjJZWElnYkc5allYUnBiMjRnUFNCMGVYQmxiMllnZDJsdVpHOTNJQ0U5UFNCY0luVnVaR1ZtYVc1bFpGd2lJQ1ltSUhkcGJtUnZkeTVzYjJOaGRHbHZianRjYmx4dUlDQnBaaUFvSVd4dlkyRjBhVzl1S1NCN1hHNGdJQ0FnZEdoeWIzY2dibVYzSUVWeWNtOXlLRndpWm1sNFZYSnNjeUJ5WlhGMWFYSmxjeUIzYVc1a2IzY3ViRzlqWVhScGIyNWNJaWs3WEc0Z0lIMWNibHh1WEhRdkx5QmliR0Z1YXlCdmNpQnVkV3hzUDF4dVhIUnBaaUFvSVdOemN5QjhmQ0IwZVhCbGIyWWdZM056SUNFOVBTQmNJbk4wY21sdVoxd2lLU0I3WEc1Y2RDQWdjbVYwZFhKdUlHTnpjenRjYmlBZ2ZWeHVYRzRnSUhaaGNpQmlZWE5sVlhKc0lEMGdiRzlqWVhScGIyNHVjSEp2ZEc5amIyd2dLeUJjSWk4dlhDSWdLeUJzYjJOaGRHbHZiaTVvYjNOME8xeHVJQ0IyWVhJZ1kzVnljbVZ1ZEVScGNpQTlJR0poYzJWVmNtd2dLeUJzYjJOaGRHbHZiaTV3WVhSb2JtRnRaUzV5WlhCc1lXTmxLQzljWEM5YlhseGNMMTBxSkM4c0lGd2lMMXdpS1R0Y2JseHVYSFF2THlCamIyNTJaWEowSUdWaFkyZ2dkWEpzS0M0dUxpbGNibHgwTHlwY2JseDBWR2hwY3lCeVpXZDFiR0Z5SUdWNGNISmxjM05wYjI0Z2FYTWdhblZ6ZENCaElIZGhlU0IwYnlCeVpXTjFjbk5wZG1Wc2VTQnRZWFJqYUNCaWNtRmphMlYwY3lCM2FYUm9hVzVjYmx4MFlTQnpkSEpwYm1jdVhHNWNibHgwSUM5MWNteGNYSE1xWEZ3b0lDQTlJRTFoZEdOb0lHOXVJSFJvWlNCM2IzSmtJRndpZFhKc1hDSWdkMmwwYUNCaGJua2dkMmhwZEdWemNHRmpaU0JoWm5SbGNpQnBkQ0JoYm1RZ2RHaGxiaUJoSUhCaGNtVnVjMXh1WEhRZ0lDQW9JQ0E5SUZOMFlYSjBJR0VnWTJGd2RIVnlhVzVuSUdkeWIzVndYRzVjZENBZ0lDQWdLRDg2SUNBOUlGTjBZWEowSUdFZ2JtOXVMV05oY0hSMWNtbHVaeUJuY205MWNGeHVYSFFnSUNBZ0lDQWdJQ0JiWGlrb1hTQWdQU0JOWVhSamFDQmhibmwwYUdsdVp5QjBhR0YwSUdsemJpZDBJR0VnY0dGeVpXNTBhR1Z6WlhOY2JseDBJQ0FnSUNBZ0lDQWdmQ0FnUFNCUFVseHVYSFFnSUNBZ0lDQWdJQ0JjWENnZ0lEMGdUV0YwWTJnZ1lTQnpkR0Z5ZENCd1lYSmxiblJvWlhObGMxeHVYSFFnSUNBZ0lDQWdJQ0FnSUNBZ0tEODZJQ0E5SUZOMFlYSjBJR0Z1YjNSb1pYSWdibTl1TFdOaGNIUjFjbWx1WnlCbmNtOTFjSE5jYmx4MElDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCYlhpa29YU3NnSUQwZ1RXRjBZMmdnWVc1NWRHaHBibWNnZEdoaGRDQnBjMjRuZENCaElIQmhjbVZ1ZEdobGMyVnpYRzVjZENBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZkNBZ1BTQlBVbHh1WEhRZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUZ4Y0tDQWdQU0JOWVhSamFDQmhJSE4wWVhKMElIQmhjbVZ1ZEdobGMyVnpYRzVjZENBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lGdGVLU2hkS2lBZ1BTQk5ZWFJqYUNCaGJubDBhR2x1WnlCMGFHRjBJR2x6YmlkMElHRWdjR0Z5Wlc1MGFHVnpaWE5jYmx4MElDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY1hDa2dJRDBnVFdGMFkyZ2dZU0JsYm1RZ2NHRnlaVzUwYUdWelpYTmNibHgwSUNBZ0lDQWdJQ0FnSUNBZ0lDa2dJRDBnUlc1a0lFZHliM1Z3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ3BjWENrZ1BTQk5ZWFJqYUNCaGJubDBhR2x1WnlCaGJtUWdkR2hsYmlCaElHTnNiM05sSUhCaGNtVnVjMXh1SUNBZ0lDQWdJQ0FnSUNrZ0lEMGdRMnh2YzJVZ2JtOXVMV05oY0hSMWNtbHVaeUJuY205MWNGeHVJQ0FnSUNBZ0lDQWdJQ29nSUQwZ1RXRjBZMmdnWVc1NWRHaHBibWRjYmlBZ0lDQWdJQ0FwSUNBOUlFTnNiM05sSUdOaGNIUjFjbWx1WnlCbmNtOTFjRnh1WEhRZ1hGd3BJQ0E5SUUxaGRHTm9JR0VnWTJ4dmMyVWdjR0Z5Wlc1elhHNWNibHgwSUM5bmFTQWdQU0JIWlhRZ1lXeHNJRzFoZEdOb1pYTXNJRzV2ZENCMGFHVWdabWx5YzNRdUlDQkNaU0JqWVhObElHbHVjMlZ1YzJsMGFYWmxMbHh1WEhRZ0tpOWNibHgwZG1GeUlHWnBlR1ZrUTNOeklEMGdZM056TG5KbGNHeGhZMlVvTDNWeWJGeGNjeXBjWENnb0tEODZXMTRwS0YxOFhGd29LRDg2VzE0cEtGMHJmRnhjS0Z0ZUtTaGRLbHhjS1NrcVhGd3BLU29wWEZ3cEwyZHBMQ0JtZFc1amRHbHZiaWhtZFd4c1RXRjBZMmdzSUc5eWFXZFZjbXdwSUh0Y2JseDBYSFF2THlCemRISnBjQ0J4ZFc5MFpYTWdLR2xtSUhSb1pYa2daWGhwYzNRcFhHNWNkRngwZG1GeUlIVnVjWFZ2ZEdWa1QzSnBaMVZ5YkNBOUlHOXlhV2RWY214Y2JseDBYSFJjZEM1MGNtbHRLQ2xjYmx4MFhIUmNkQzV5WlhCc1lXTmxLQzllWENJb0xpb3BYQ0lrTHl3Z1puVnVZM1JwYjI0b2J5d2dKREVwZXlCeVpYUjFjbTRnSkRFN0lIMHBYRzVjZEZ4MFhIUXVjbVZ3YkdGalpTZ3ZYaWNvTGlvcEp5UXZMQ0JtZFc1amRHbHZiaWh2TENBa01TbDdJSEpsZEhWeWJpQWtNVHNnZlNrN1hHNWNibHgwWEhRdkx5QmhiSEpsWVdSNUlHRWdablZzYkNCMWNtdy9JRzV2SUdOb1lXNW5aVnh1WEhSY2RHbG1JQ2d2WGlnamZHUmhkR0U2ZkdoMGRIQTZYRnd2WEZ3dmZHaDBkSEJ6T2x4Y0wxeGNMM3htYVd4bE9seGNMMXhjTDF4Y0wzeGNYSE1xSkNrdmFTNTBaWE4wS0hWdWNYVnZkR1ZrVDNKcFoxVnliQ2twSUh0Y2JseDBYSFFnSUhKbGRIVnliaUJtZFd4c1RXRjBZMmc3WEc1Y2RGeDBmVnh1WEc1Y2RGeDBMeThnWTI5dWRtVnlkQ0IwYUdVZ2RYSnNJSFJ2SUdFZ1puVnNiQ0IxY214Y2JseDBYSFIyWVhJZ2JtVjNWWEpzTzF4dVhHNWNkRngwYVdZZ0tIVnVjWFZ2ZEdWa1QzSnBaMVZ5YkM1cGJtUmxlRTltS0Z3aUx5OWNJaWtnUFQwOUlEQXBJSHRjYmx4MFhIUWdJRngwTHk5VVQwUlBPaUJ6YUc5MWJHUWdkMlVnWVdSa0lIQnliM1J2WTI5c1AxeHVYSFJjZEZ4MGJtVjNWWEpzSUQwZ2RXNXhkVzkwWldSUGNtbG5WWEpzTzF4dVhIUmNkSDBnWld4elpTQnBaaUFvZFc1eGRXOTBaV1JQY21sblZYSnNMbWx1WkdWNFQyWW9YQ0l2WENJcElEMDlQU0F3S1NCN1hHNWNkRngwWEhRdkx5QndZWFJvSUhOb2IzVnNaQ0JpWlNCeVpXeGhkR2wyWlNCMGJ5QjBhR1VnWW1GelpTQjFjbXhjYmx4MFhIUmNkRzVsZDFWeWJDQTlJR0poYzJWVmNtd2dLeUIxYm5GMWIzUmxaRTl5YVdkVmNtdzdJQzh2SUdGc2NtVmhaSGtnYzNSaGNuUnpJSGRwZEdnZ0p5OG5YRzVjZEZ4MGZTQmxiSE5sSUh0Y2JseDBYSFJjZEM4dklIQmhkR2dnYzJodmRXeGtJR0psSUhKbGJHRjBhWFpsSUhSdklHTjFjbkpsYm5RZ1pHbHlaV04wYjNKNVhHNWNkRngwWEhSdVpYZFZjbXdnUFNCamRYSnlaVzUwUkdseUlDc2dkVzV4ZFc5MFpXUlBjbWxuVlhKc0xuSmxjR3hoWTJVb0wxNWNYQzVjWEM4dkxDQmNJbHdpS1RzZ0x5OGdVM1J5YVhBZ2JHVmhaR2x1WnlBbkxpOG5YRzVjZEZ4MGZWeHVYRzVjZEZ4MEx5OGdjMlZ1WkNCaVlXTnJJSFJvWlNCbWFYaGxaQ0IxY213b0xpNHVLVnh1WEhSY2RISmxkSFZ5YmlCY0luVnliQ2hjSWlBcklFcFRUMDR1YzNSeWFXNW5hV1o1S0c1bGQxVnliQ2tnS3lCY0lpbGNJanRjYmx4MGZTazdYRzVjYmx4MEx5OGdjMlZ1WkNCaVlXTnJJSFJvWlNCbWFYaGxaQ0JqYzNOY2JseDBjbVYwZFhKdUlHWnBlR1ZrUTNOek8xeHVmVHRjYmlJc0ltTnNZWE56SUVOdmIydGliMjlySUh0Y2JpQWdZMjl1YzNSeWRXTjBiM0lvWkdGMFlTa2dlMXh1SUNBZ0lIUm9hWE11Y21WamFYQmxjeUE5SUdSaGRHRTdYRzRnSUgxY2JseHVJQ0JtYVc1a1VtVmphWEJsY3loelpXRnlZMmhVWlhoMEtTQjdYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTXVjbVZqYVhCbGN5NW1hV3gwWlhJb0tISmxZMmx3WlNrOVBudGNiaUFnSUNBZ0lHeGxkQ0JwYm1keVpXUnBaVzUwVG1GdFpYTWdQU0J5WldOcGNHVXVhVzVuY21Wa2FXVnVkSE11YldGd0tDaHBibWR5WldScFpXNTBLVDArZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYVc1bmNtVmthV1Z1ZEM1dVlXMWxYRzRnSUNBZ0lDQjlLVnh1SUNBZ0lDQWdjbVYwZFhKdUlISmxZMmx3WlM1dVlXMWxMblJ2VEc5M1pYSkRZWE5sS0NrdWFXNWpiSFZrWlhNb2MyVmhjbU5vVkdWNGRDa2dmSHhjYmlBZ0lDQWdJSEpsWTJsd1pTNTBZV2R6TG1sdVkyeDFaR1Z6S0hObFlYSmphRlJsZUhRcElIeDhYRzRnSUNBZ0lDQnBibWR5WldScFpXNTBUbUZ0WlhNdWFXNWpiSFZrWlhNb2MyVmhjbU5vVkdWNGRDbGNiaUFnSUNCOUtWeHVJQ0I5WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElFTnZiMnRpYjI5ck8xeHVJaXdpWEc1MllYSWdZMjl1ZEdWdWRDQTlJSEpsY1hWcGNtVW9YQ0loSVM0dUx5NHVMMjV2WkdWZmJXOWtkV3hsY3k5amMzTXRiRzloWkdWeUwyUnBjM1F2WTJwekxtcHpJUzR1THk0dUwyNXZaR1ZmYlc5a2RXeGxjeTl6WVhOekxXeHZZV1JsY2k5c2FXSXZiRzloWkdWeUxtcHpJUzR2YzNSNWJHVnpMbk5qYzNOY0lpazdYRzVjYm1sbUtIUjVjR1Z2WmlCamIyNTBaVzUwSUQwOVBTQW5jM1J5YVc1bkp5a2dZMjl1ZEdWdWRDQTlJRnRiYlc5a2RXeGxMbWxrTENCamIyNTBaVzUwTENBbkoxMWRPMXh1WEc1MllYSWdkSEpoYm5ObWIzSnRPMXh1ZG1GeUlHbHVjMlZ5ZEVsdWRHODdYRzVjYmx4dVhHNTJZWElnYjNCMGFXOXVjeUE5SUh0Y0ltaHRjbHdpT25SeWRXVjlYRzVjYm05d2RHbHZibk11ZEhKaGJuTm1iM0p0SUQwZ2RISmhibk5tYjNKdFhHNXZjSFJwYjI1ekxtbHVjMlZ5ZEVsdWRHOGdQU0IxYm1SbFptbHVaV1E3WEc1Y2JuWmhjaUIxY0dSaGRHVWdQU0J5WlhGMWFYSmxLRndpSVM0dUx5NHVMMjV2WkdWZmJXOWtkV3hsY3k5emRIbHNaUzFzYjJGa1pYSXZiR2xpTDJGa1pGTjBlV3hsY3k1cWMxd2lLU2hqYjI1MFpXNTBMQ0J2Y0hScGIyNXpLVHRjYmx4dWFXWW9ZMjl1ZEdWdWRDNXNiMk5oYkhNcElHMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1kyOXVkR1Z1ZEM1c2IyTmhiSE03WEc1Y2JtbG1LRzF2WkhWc1pTNW9iM1FwSUh0Y2JseDBiVzlrZFd4bExtaHZkQzVoWTJObGNIUW9YQ0loSVM0dUx5NHVMMjV2WkdWZmJXOWtkV3hsY3k5amMzTXRiRzloWkdWeUwyUnBjM1F2WTJwekxtcHpJUzR1THk0dUwyNXZaR1ZmYlc5a2RXeGxjeTl6WVhOekxXeHZZV1JsY2k5c2FXSXZiRzloWkdWeUxtcHpJUzR2YzNSNWJHVnpMbk5qYzNOY0lpd2dablZ1WTNScGIyNG9LU0I3WEc1Y2RGeDBkbUZ5SUc1bGQwTnZiblJsYm5RZ1BTQnlaWEYxYVhKbEtGd2lJU0V1TGk4dUxpOXViMlJsWDIxdlpIVnNaWE12WTNOekxXeHZZV1JsY2k5a2FYTjBMMk5xY3k1cWN5RXVMaTh1TGk5dWIyUmxYMjF2WkhWc1pYTXZjMkZ6Y3kxc2IyRmtaWEl2YkdsaUwyeHZZV1JsY2k1cWN5RXVMM04wZVd4bGN5NXpZM056WENJcE8xeHVYRzVjZEZ4MGFXWW9kSGx3Wlc5bUlHNWxkME52Ym5SbGJuUWdQVDA5SUNkemRISnBibWNuS1NCdVpYZERiMjUwWlc1MElEMGdXMXR0YjJSMWJHVXVhV1FzSUc1bGQwTnZiblJsYm5Rc0lDY25YVjA3WEc1Y2JseDBYSFIyWVhJZ2JHOWpZV3h6SUQwZ0tHWjFibU4wYVc5dUtHRXNJR0lwSUh0Y2JseDBYSFJjZEhaaGNpQnJaWGtzSUdsa2VDQTlJREE3WEc1Y2JseDBYSFJjZEdadmNpaHJaWGtnYVc0Z1lTa2dlMXh1WEhSY2RGeDBYSFJwWmlnaFlpQjhmQ0JoVzJ0bGVWMGdJVDA5SUdKYmEyVjVYU2tnY21WMGRYSnVJR1poYkhObE8xeHVYSFJjZEZ4MFhIUnBaSGdyS3p0Y2JseDBYSFJjZEgxY2JseHVYSFJjZEZ4MFptOXlLR3RsZVNCcGJpQmlLU0JwWkhndExUdGNibHh1WEhSY2RGeDBjbVYwZFhKdUlHbGtlQ0E5UFQwZ01EdGNibHgwWEhSOUtHTnZiblJsYm5RdWJHOWpZV3h6TENCdVpYZERiMjUwWlc1MExteHZZMkZzY3lrcE8xeHVYRzVjZEZ4MGFXWW9JV3h2WTJGc2N5a2dkR2h5YjNjZ2JtVjNJRVZ5Y205eUtDZEJZbTl5ZEdsdVp5QkRVMU1nU0UxU0lHUjFaU0IwYnlCamFHRnVaMlZrSUdOemN5MXRiMlIxYkdWeklHeHZZMkZzY3k0bktUdGNibHh1WEhSY2RIVndaR0YwWlNodVpYZERiMjUwWlc1MEtUdGNibHgwZlNrN1hHNWNibHgwYlc5a2RXeGxMbWh2ZEM1a2FYTndiM05sS0daMWJtTjBhVzl1S0NrZ2V5QjFjR1JoZEdVb0tUc2dmU2s3WEc1OUlpd2lhVzF3YjNKMElGQmhiblJ5ZVNCbWNtOXRJQ2N1TDNCaGJuUnllU2M3WEc1cGJYQnZjblFnVW1WamFYQmxJR1p5YjIwZ0p5NHZjbVZqYVhCbEp6dGNibWx0Y0c5eWRDQlZjMlZ5SUdaeWIyMGdKeTR2ZFhObGNpYzdYRzVwYlhCdmNuUWdRMjl2YTJKdmIyc2dabkp2YlNBbkxpOWpiMjlyWW05dmF5YzdYRzVjYmx4dWJHVjBJR1J2YlZWd1pHRjBaWE1nUFNCN1hHNWNiaUFnZFhObGNuTTZJRnQ3ZlYwc1hHNGdJSEpsWTJsd1pVUmhkR0U2SUZ0N2ZWMHNYRzRnSUdsdVozSmxaR2xsYm5SelJHRjBZVG9nVzN0OVhTeGNiaUFnZFhObGNqb2dlMzBzWEc0Z0lHTnZiMnRpYjI5ck9pQnVkV3hzTEZ4dVhHNGdJR2RsZEZkb1lYUnpRMjl2YTJsdVowUmhkR0U2SUNncElEMCtJSHRjYmlBZ0lDQlFjbTl0YVhObExtRnNiQ2hiWEc0Z0lDQWdJQ0JtWlhSamFDZ25hSFIwY0hNNkx5OW1aUzFoY0hCekxtaGxjbTlyZFdGd2NDNWpiMjB2WVhCcEwzWXhMM2RvWVhSekxXTnZiMnRwYmk4eE9URXhMM1Z6WlhKekwzZGpWWE5sY25ORVlYUmhKeWtzWEc0Z0lDQWdJQ0JtWlhSamFDZ25hSFIwY0hNNkx5OW1aUzFoY0hCekxtaGxjbTlyZFdGd2NDNWpiMjB2WVhCcEwzWXhMM2RvWVhSekxXTnZiMnRwYmk4eE9URXhMM0psWTJsd1pYTXZjbVZqYVhCbFJHRjBZU2NwTEZ4dUlDQWdJQ0FnWm1WMFkyZ29KMmgwZEhCek9pOHZabVV0WVhCd2N5NW9aWEp2YTNWaGNIQXVZMjl0TDJGd2FTOTJNUzkzYUdGMGN5MWpiMjlyYVc0dk1Ua3hNUzlwYm1keVpXUnBaVzUwY3k5cGJtZHlaV1JwWlc1MGMwUmhkR0VuS1Z4dUlDQWdJRjBwWEc0Z0lDQWdJQ0F1ZEdobGJpaHlaWE53YjI1elpYTWdQVDRnVUhKdmJXbHpaUzVoYkd3b2NtVnpjRzl1YzJWekxtMWhjQ2h5WlhOd2IyNXpaU0E5UGlCeVpYTndiMjV6WlM1cWMyOXVLQ2twS1NsY2JpQWdJQ0FnSUM1MGFHVnVLSEpsYzNCdmJuTmxjeUE5UGlCN1hHNGdJQ0FnSUNBZ0lHUnZiVlZ3WkdGMFpYTXVkWE5sY25NZ1BTQnlaWE53YjI1elpYTmJNRjB1ZDJOVmMyVnljMFJoZEdFN1hHNGdJQ0FnSUNBZ0lHUnZiVlZ3WkdGMFpYTXVjbVZqYVhCbFJHRjBZU0E5SUhKbGMzQnZibk5sYzFzeFhTNXlaV05wY0dWRVlYUmhPMXh1SUNBZ0lDQWdJQ0JrYjIxVmNHUmhkR1Z6TG1sdVozSmxaR2xsYm5SelJHRjBZU0E5SUhKbGMzQnZibk5sYzFzeVhTNXBibWR5WldScFpXNTBjMFJoZEdFN1hHNGdJQ0FnSUNBZ0lHUnZiVlZ3WkdGMFpYTXVZM0psWVhSbFJHRjBZVTF2WkdWc0tDazdYRzRnSUNBZ0lDQWdJR1J2YlZWd1pHRjBaWE11ZFhCa1lYUmxSR2x6Y0d4aGVTZ3BPMXh1SUNBZ0lDQWdmU2xjYmlBZ0lDQWdJQzVqWVhSamFDaGxjbkp2Y2lBOVBpQmpiMjV6YjJ4bExteHZaeWhsY25KdmNpa3BYRzRnSUgwc1hHNWNiaUFnWTNKbFlYUmxSR0YwWVUxdlpHVnNPaUFvS1NBOVBpQjdYRzRnSUNBZ2JHVjBJSEJoYm5SeWVTQTlJRzVsZHlCUVlXNTBjbmtvWkc5dFZYQmtZWFJsY3k1MWMyVnljMXN3WFM1d1lXNTBjbmtwTzF4dUlDQWdJR1J2YlZWd1pHRjBaWE11ZFhObGNpQTlJRzVsZHlCVmMyVnlLR1J2YlZWd1pHRjBaWE11ZFhObGNuTmJNRjBzSUhCaGJuUnllU3dnWkc5dFZYQmtZWFJsY3k1cGJtZHlaV1JwWlc1MGMwUmhkR0VwTzF4dUlDQWdJR3hsZENCeVpXTnBjR1ZFWldOcklEMGdaRzl0VlhCa1lYUmxjeTV5WldOcGNHVkVZWFJoTG0xaGNDaHlaV05wY0dVZ1BUNGdlMXh1SUNBZ0lDQWdjbVYwZFhKdUlISmxZMmx3WlNBOUlHNWxkeUJTWldOcGNHVW9jbVZqYVhCbExDQmtiMjFWY0dSaGRHVnpMbWx1WjNKbFpHbGxiblJ6UkdGMFlTazdYRzRnSUNBZ2ZTbGNiaUFnSUNCa2IyMVZjR1JoZEdWekxtTnZiMnRpYjI5cklEMGdibVYzSUVOdmIydGliMjlyS0hKbFkybHdaVVJsWTJzcE8xeHVJQ0I5TEZ4dVhHNGdJSFZ3WkdGMFpVUnBjM0JzWVhrNklDZ3BJRDArSUh0Y2JpQWdJQ0JrYjIxVmNHUmhkR1Z6TG1keVpXVjBWWE5sY2lncE8xeHVJQ0FnSUdSdmJWVndaR0YwWlhNdWNHOXdkV3hoZEdWRFlYSmtjeWhrYjIxVmNHUmhkR1Z6TG1OdmIydGliMjlyTG5KbFkybHdaWE1wTzF4dUlDQjlMRnh1WEc0Z0lHZHlaV1YwVlhObGNqb2dLQ2tnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJSGRsYkdOdmJXVk5aWE56WVdkbElEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkxtZHlaV1YwYVc1bkp5azdYRzRnSUNBZ2QyVnNZMjl0WlUxbGMzTmhaMlV1YVc1dVpYSlVaWGgwSUQwZ1lGZGxiR052YldVZ0pIdGtiMjFWY0dSaGRHVnpMblZ6WlhJdWJtRnRaWDBoWUR0Y2JpQWdmU3hjYmx4dUlDQndiM0IxYkdGMFpVTmhjbVJ6T2lBb2NtVmphWEJsY3lrZ1BUNGdlMXh1SUNBZ0lHTnZibk4wSUdOaGNtUkJjbVZoSUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduSTIxaGFXNHRjMlZqZEdsdmJpY3BPMXh1SUNBZ0lHTmhjbVJCY21WaExtTnNZWE56VEdsemRDQTlJQ2RoYkd3dFkyRnlaSE1uTzF4dUlDQWdJR05oY21SQmNtVmhMbWx1Ym1WeVNGUk5UQ0E5SUNjbk8xeHVJQ0FnSUhKbFkybHdaWE11Wm05eVJXRmphQ2h5WldOcGNHVWdQVDRnZTF4dUlDQWdJQ0FnWTJGeVpFRnlaV0V1YVc1elpYSjBRV1JxWVdObGJuUklWRTFNS0NkaFpuUmxjbUpsWjJsdUp5d2daRzl0VlhCa1lYUmxjeTVqYjI1emRISjFZM1JEWVhKa0tISmxZMmx3WlNrcFhHNGdJQ0FnZlNrN1hHNGdJSDBzWEc1Y2JpQWdZMjl1YzNSeWRXTjBRMkZ5WkRvZ0tISmxZMmx3WlNrZ1BUNGdlMXh1SUNBZ0lHeGxkQ0JqYkdGemMweHBjM1JjYmlBZ0lDQnBaaUFvWkc5dFZYQmtZWFJsY3k1MWMyVnlMbVpoZG05eWFYUmxVbVZqYVhCbGN5NXBibU5zZFdSbGN5aHlaV05wY0dVcEtTQjdYRzRnSUNBZ0lDQmpiR0Z6YzB4cGMzUWdQU0FuWm1GMmIzSnBkR1VnWTJGeVpDMWlkWFIwYjI0Z1ptRjJiM0pwZEdVdFlXTjBhWFpsSjF4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQmpiR0Z6YzB4cGMzUWdQU0FuWm1GMmIzSnBkR1VnWTJGeVpDMWlkWFIwYjI0blhHNGdJQ0FnZlZ4dUlDQWdJSEpsZEhWeWJpQmdQR1JwZGlCamJHRnpjejBuWTJGeVpDQWtlM0psWTJsd1pTNXBaSDBuUGx4dUlDQWdJRHhvWldGa1pYSWdZMnhoYzNNOUoyTmhjbVF0YUdWaFpHVnlJQ1I3Y21WamFYQmxMbWxrZlNjK1hHNGdJQ0FnSUNBOGJHRmlaV3dnWm05eVBTZGhaR1F0WW5WMGRHOXVKeUJqYkdGemN6MG5hR2xrWkdWdUp6NURiR2xqYXlCMGJ5QmhaR1FnY21WamFYQmxQQzlzWVdKbGJENWNiaUFnSUNBZ0lEeGlkWFIwYjI0Z1lYSnBZUzFzWVdKbGJEMG5ZV1JrTFdKMWRIUnZiaWNnWTJ4aGMzTTlKMkZrWkMxaWRYUjBiMjRnWTJGeVpDMWlkWFIwYjI0Z0pIdHlaV05wY0dVdWFXUjlKejVjYmlBZ0lDQWdJQ0FnUEdsdFp5QmpiR0Z6Y3owbllXUmtJQ1I3Y21WamFYQmxMbWxrZlNCaFpHUXRZblYwZEc5dUp5QnpjbU05SjJoMGRIQnpPaTh2YVcxaFoyVXVabXhoZEdsamIyNHVZMjl0TDJsamIyNXpMM04yWnk4ek1pOHpNak16T1M1emRtY25JR0ZzZEQwblFXUmtJSFJ2WEc0Z0lDQWdJQ0FnSUhKbFkybHdaWE1nZEc4Z1kyOXZheWMrWEc0Z0lDQWdJQ0E4TDJKMWRIUnZiajVjYmlBZ0lDQWdJRHhzWVdKbGJDQm1iM0k5SjJaaGRtOXlhWFJsTFdKMWRIUnZiaWNnWTJ4aGMzTTlKMmhwWkdSbGJpYytRMnhwWTJzZ2RHOGdabUYyYjNKcGRHVWdjbVZqYVhCbFBDOXNZV0psYkQ1Y2JpQWdJQ0FnSUR4aWRYUjBiMjRnWVhKcFlTMXNZV0psYkQwblptRjJiM0pwZEdVdFluVjBkRzl1SnlCamJHRnpjejBuSkh0amJHRnpjMHhwYzNSOUlHWmhkbTl5YVhSbEpIdHlaV05wY0dVdWFXUjlJQ1I3Y21WamFYQmxMbWxrZlNjK1hHNGdJQ0FnSUNBOEwySjFkSFJ2Ymo1Y2JpQWdJQ0E4TDJobFlXUmxjajVjYmlBZ0lDQThjM0JoYmlCamJHRnpjejBuY21WamFYQmxMVzVoYldVZ0pIdHlaV05wY0dVdWFXUjlKejRrZTNKbFkybHdaUzV1WVcxbGZUd3ZjM0JoYmo1Y2JpQWdJQ0FnSUR4aWRYUjBiMjRnWVhKcFlTMXNZV0psYkQwbmNtVmphWEJsTFdsdVptOG5JR05zWVhOelBTZGpZWEprTFhCcFkzUjFjbVVnSkh0eVpXTnBjR1V1YVdSOUlIZHlZWEFuUGx4dUlDQWdJQ0FnSUNBOGFXMW5JSFJoWW1sdVpHVjRQU2N3SnlCamJHRnpjejBuWTJGeVpDMXdhV04wZFhKbElDUjdjbVZqYVhCbExtbGtmU2R6Y21NOUp5UjdjbVZqYVhCbExtbHRZV2RsZlNjZ1lXeDBQU2RHYjI5a0lHWnliMjBnY21WamFYQmxKejVjYmlBZ0lDQWdJRHd2WW5WMGRHOXVQbHh1SUNBZ0lEd3ZaR2wyUG1CY2JpQWdmU3hjYmx4dUlDQm1hVzVrVTNCbFkybG1hV05TWldOcGNHVTZJQ2hsZG1WdWRDa2dQVDRnZTF4dUlDQWdJSEpsZEhWeWJpQmtiMjFWY0dSaGRHVnpMbU52YjJ0aWIyOXJMbkpsWTJsd1pYTXVabWx1WkNoeVpXTnBjR1VnUFQ0Z2UxeHVJQ0FnSUNBZ2FXWWdLR1YyWlc1MExuUmhjbWRsZEM1amJHRnpjMHhwYzNRdVkyOXVkR0ZwYm5Nb2NtVmphWEJsTG1sa0tTa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdjbVZqYVhCbE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwcFhHNGdJSDBzWEc1Y2JpQWdabUYyYjNKcGRHVkRZWEprT2lBb1pYWmxiblFwSUQwK0lIdGNiaUFnSUNCamIyNXpkQ0J6YUc5M1JtRjJiM0pwZEdWelFuVjBkRzl1SUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduTG5acFpYY3RabUYyYjNKcGRHVnpKeWs3WEc0Z0lDQWdiR1YwSUhOd1pXTnBabWxqVW1WamFYQmxJRDBnWkc5dFZYQmtZWFJsY3k1bWFXNWtVM0JsWTJsbWFXTlNaV05wY0dVb1pYWmxiblFwTzF4dUlDQWdJR2xtSUNnaFpYWmxiblF1ZEdGeVoyVjBMbU5zWVhOelRHbHpkQzVqYjI1MFlXbHVjeWduWm1GMmIzSnBkR1V0WVdOMGFYWmxKeWtwSUh0Y2JpQWdJQ0FnSUhOb2IzZEdZWFp2Y21sMFpYTkNkWFIwYjI0dWFXNXVaWEpJVkUxTUlEMGdKMVpwWlhjZ1JtRjJiM0pwZEdWekp6dGNiaUFnSUNBZ0lHUnZiVlZ3WkdGMFpYTXVkWE5sY2k1aFpHUlViMFpoZG05eWFYUmxjeWh6Y0dWamFXWnBZMUpsWTJsd1pTazdYRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDaGxkbVZ1ZEM1MFlYSm5aWFF1WTJ4aGMzTk1hWE4wTG1OdmJuUmhhVzV6S0NkbVlYWnZjbWwwWlMxaFkzUnBkbVVuS1NrZ2UxeHVJQ0FnSUNBZ1pHOXRWWEJrWVhSbGN5NTFjMlZ5TG5KbGJXOTJaVVp5YjIxR1lYWnZjbWwwWlhNb2MzQmxZMmxtYVdOU1pXTnBjR1VwWEc0Z0lDQWdmVnh1SUNBZ0lHVjJaVzUwTG5SaGNtZGxkQzVqYkdGemMweHBjM1F1ZEc5bloyeGxLQ2RtWVhadmNtbDBaUzFoWTNScGRtVW5LVHRjYmlBZ2ZTeGNibHh1SUNCMmFXVjNSbUYyYjNKcGRHVnpPaUFvS1NBOVBpQjdYRzRnSUNBZ1kyOXVjM1FnYzJWaGNtTm9RbUZ5SUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduTG5ObFlYSmphQzFoY21WaEp5azdYRzRnSUNBZ2MyVmhjbU5vUW1GeUxtTnNZWE56VEdsemRDNWhaR1FvSjJocFpHUmxiaWNwWEc0Z0lDQWdZMjl1YzNRZ2MyaHZkMFpoZG05eWFYUmxjMEoxZEhSdmJpQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5NTJhV1YzTFdaaGRtOXlhWFJsY3ljcE8xeHVJQ0FnSUdOdmJuTjBJR05oY21SQmNtVmhJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25JMjFoYVc0dGMyVmpkR2x2YmljcE8xeHVJQ0FnSUdOaGNtUkJjbVZoTG1Oc1lYTnpUR2x6ZENBOUlDZGhiR3d0WTJGeVpITW5PMXh1SUNBZ0lHbG1JQ2doWkc5dFZYQmtZWFJsY3k1MWMyVnlMbVpoZG05eWFYUmxVbVZqYVhCbGN5NXNaVzVuZEdncElIdGNiaUFnSUNBZ0lITm9iM2RHWVhadmNtbDBaWE5DZFhSMGIyNHVhVzV1WlhKSVZFMU1JRDBnSjFsdmRTQm9ZWFpsSUc1dklHWmhkbTl5YVhSbGN5RW5PMXh1SUNBZ0lDQWdaRzl0VlhCa1lYUmxjeTV3YjNCMWJHRjBaVU5oY21SektHUnZiVlZ3WkdGMFpYTXVZMjl2YTJKdmIyc3VjbVZqYVhCbGN5azdYRzRnSUNBZ0lDQnlaWFIxY201Y2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdjMmh2ZDBaaGRtOXlhWFJsYzBKMWRIUnZiaTVwYm01bGNraFVUVXdnUFNBblVtVm1jbVZ6YUNCR1lYWnZjbWwwWlhNblhHNGdJQ0FnSUNCallYSmtRWEpsWVM1cGJtNWxja2hVVFV3Z1BTQW5KenRjYmlBZ0lDQWdJR1J2YlZWd1pHRjBaWE11ZFhObGNpNW1ZWFp2Y21sMFpWSmxZMmx3WlhNdVptOXlSV0ZqYUNoeVpXTnBjR1VnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQmpZWEprUVhKbFlTNXBibk5sY25SQlpHcGhZMlZ1ZEVoVVRVd29KMkZtZEdWeVltVm5hVzRuTENCa2IyMVZjR1JoZEdWekxtTnZibk4wY25WamRFTmhjbVFvY21WamFYQmxLU2xjYmlBZ0lDQWdJSDBwWEc0Z0lDQWdmVnh1SUNCOUxGeHVYRzRnSUdGa1pGUnZWRzlEYjI5ck9pQW9aWFpsYm5RcElEMCtJSHRjYmlBZ0lDQmpiMjV6ZENCemFHOTNWRzlEYjI5clFuVjBkRzl1SUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduTG5SdkxXTnZiMnNuS1R0Y2JpQWdJQ0JzWlhRZ2MzQmxZMmxtYVdOU1pXTnBjR1VnUFNCa2IyMVZjR1JoZEdWekxtWnBibVJUY0dWamFXWnBZMUpsWTJsd1pTaGxkbVZ1ZENrN1hHNGdJQ0FnYVdZZ0tDRmxkbVZ1ZEM1MFlYSm5aWFF1WTJ4aGMzTk1hWE4wTG1OdmJuUmhhVzV6S0NkaFpHUXRZV04wYVhabEp5a3BJSHRjYmlBZ0lDQWdJSE5vYjNkVWIwTnZiMnRDZFhSMGIyNHVhVzV1WlhKVVpYaDBJRDBnSjFSdklFTnZiMnNuWEc0Z0lDQWdJQ0JoYkdWeWRDaGtiMjFWY0dSaGRHVnpMblZ6WlhJdVkyaGxZMnRRWVc1MGNubEpibWR5WldScFpXNTBjeWh6Y0dWamFXWnBZMUpsWTJsd1pTa3BPMXh1SUNBZ0lDQWdaRzl0VlhCa1lYUmxjeTUxYzJWeUxtRmtaRlJ2VW1WamFYQmxjMVJ2UTI5dmF5aHpjR1ZqYVdacFkxSmxZMmx3WlNrN1hHNGdJQ0FnZlNCbGJITmxJR2xtSUNobGRtVnVkQzUwWVhKblpYUXVZMnhoYzNOTWFYTjBMbU52Ym5SaGFXNXpLQ2RoWkdRdFlXTjBhWFpsSnlrcElIdGNiaUFnSUNBZ0lHUnZiVlZ3WkdGMFpYTXVkWE5sY2k1eVpXMXZkbVZHY205dFVtVmphWEJsYzFSdlEyOXZheWh6Y0dWamFXWnBZMUpsWTJsd1pTbGNiaUFnSUNCOVhHNGdJQ0FnWlhabGJuUXVkR0Z5WjJWMExtTnNZWE56VEdsemRDNTBiMmRuYkdVb0oyRmtaQzFoWTNScGRtVW5LVHRjYmlBZ2ZTeGNibHh1SUNCa2FYTndiR0Y1Vkc5RGIyOXJRMkZ5WkhNNklDZ3BJRDArSUh0Y2JpQWdJQ0JqYjI1emRDQnpaV0Z5WTJoQ1lYSWdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtDY3VjMlZoY21Ob0xXRnlaV0VuS1R0Y2JpQWdJQ0J6WldGeVkyaENZWEl1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25hR2xrWkdWdUp5bGNiaUFnSUNCamIyNXpkQ0JqWVhKa1FYSmxZU0E5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9KeU50WVdsdUxYTmxZM1JwYjI0bktUdGNiaUFnSUNCallYSmtRWEpsWVM1amJHRnpjMHhwYzNRZ1BTQW5KenRjYmlBZ0lDQmpZWEprUVhKbFlTNXBibTVsY2toVVRVd2dQVnh1SUNBZ0lDQWdZRHh6WldOMGFXOXVJR05zWVhOelBTZDBieTFqYjI5ckp6NWNiaUFnSUNBZ0lDQWdQR2d4SUdOc1lYTnpQU2QwYnkxamIyOXJMV2R5WldWMGFXNW5KejVTWldOcGNHVnpJRlJ2SUVOdmIyczhMMmd4UGx4dUlDQWdJQ0FnSUNBOFpHbDJJR05zWVhOelBTZGpZWEprTFhObFkzUnBiMjRnWVd4c0xXTmhjbVJ6Sno1Y2JpQWdJQ0FnSUNBZ1BDOWthWFkrWEc0Z0lDQWdJQ0E4TDNObFkzUnBiMjQrWUZ4dUlDQWdJR3hsZENCallYSmtVMlZqZEdsdmJpQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5NWpZWEprTFhObFkzUnBiMjRuS1Z4dUlDQWdJR1J2YlZWd1pHRjBaWE11ZFhObGNpNXlaV05wY0dWelZHOURiMjlyTG1admNrVmhZMmdvY21WamFYQmxJRDArSUh0Y2JpQWdJQ0FnSUd4bGRDQjJZV3gxWlhNZ1BTQmtiMjFWY0dSaGRHVnpMblZ6WlhJdVkyaGxZMnRJYjNkTmRXTm9UVzl5WlNoeVpXTnBjR1VwTG0xaGNDaHZZbW9nUFQ0Z2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1lDUjdiMkpxTG5GMVlXNTBhWFI1VG1WbFpHVmtmU0FrZTI5aWFpNTFibWwwZlNCdGIzSmxJQ1I3YjJKcUxtNWhiV1Y5WUR0Y2JpQWdJQ0FnSUgwcE8xeHVJQ0FnSUNBZ2JHVjBJRzVsWldSbFpFTnZjM1FnUFNCa2IyMVZjR1JoZEdWekxuVnpaWEl1WTJobFkydEliM2ROZFdOb1RXOXlaU2h5WldOcGNHVXBMbkpsWkhWalpTZ29kRzkwWVd3c0lHbHVaM0psWkdsbGJuUXBJRDArSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSdmRHRnNJQ3M5SUdsdVozSmxaR2xsYm5RdVkyOXpkRHRjYmlBZ0lDQWdJSDBzSURBcE8xeHVJQ0FnSUNBZ1kyRnlaRk5sWTNScGIyNHVhVzV6WlhKMFFXUnFZV05sYm5SSVZFMU1LQ2RpWldadmNtVmxibVFuTENCZ1BHUnBkaUJqYkdGemN6MG5ZMkZ5WkNBa2UzSmxZMmx3WlM1cFpIMG5QbHh1SUNBZ0lEeG9aV0ZrWlhJZ1kyeGhjM005SjJOaGNtUXRhR1ZoWkdWeUlDUjdjbVZqYVhCbExtbGtmU2MrWEc0Z0lDQWdJQ0E4YkdGaVpXd2dabTl5UFNkamJHOXpaUzFpZFhSMGIyNG5JR05zWVhOelBTZG9hV1JrWlc0blBqd3ZiR0ZpWld3K1hHNGdJQ0FnSUNBOFluVjBkRzl1SUdGeWFXRXRiR0ZpWld3OUoyTnNiM05sTFdKMWRIUnZiaWNnWTJ4aGMzTTlKMk5zYjNObExXSjFkSFJ2YmlCallYSmtMV0oxZEhSdmJpQWtlM0psWTJsd1pTNXBaSDBuUGx4dUlDQWdJQ0FnSUNBOGFXMW5JR05zWVhOelBTZGpiRzl6WlMxaWRYUjBiMjRnSkh0eVpXTnBjR1V1YVdSOUp5QnpjbU05SjJoMGRIQnpPaTh2ZDNkM0xtWnNZWFJwWTI5dUxtTnZiUzl6ZG1jdmMzUmhkR2xqTDJsamIyNXpMM04yWnk4ME5EWXZORFEyTURreExuTjJaeWNnWVd4MFBTZHlaVzF2ZG1VZ1puSnZiU0J5WldOcGNHVnpJSFJ2SUdOdmIyc25QbHh1SUNBZ0lDQWdQQzlpZFhSMGIyNCtYRzRnSUNBZ0lDQThiR0ZpWld3Z1ptOXlQU2RtWVhadmNtbDBaUzFpZFhSMGIyNG5JR05zWVhOelBTZG9hV1JrWlc0blBrTnNhV05ySUhSdklHWmhkbTl5YVhSbElISmxZMmx3WlR3dmJHRmlaV3crWEc0Z0lDQWdJQ0E4WW5WMGRHOXVJR0Z5YVdFdGJHRmlaV3c5SjJaaGRtOXlhWFJsTFdKMWRIUnZiaWNnWTJ4aGMzTTlKMlpoZG05eWFYUmxJR05oY21RdFluVjBkRzl1SUdaaGRtOXlhWFJsSkh0eVpXTnBjR1V1YVdSOUlDUjdjbVZqYVhCbExtbGtmU2MrWEc0Z0lDQWdJQ0E4TDJKMWRIUnZiajVjYmlBZ0lDQThMMmhsWVdSbGNqNWNiaUFnSUNBZ0lEeG9NejRrZTNKbFkybHdaUzV1WVcxbGZUd3ZhRE0rWEc0Z0lDQWdJQ0E4YVcxbklIUmhZbWx1WkdWNFBTY3dKeUJqYkdGemN6MG5ZMkZ5WkMxd2FXTjBkWEpsSUNSN2NtVmphWEJsTG1sa2ZTZGNiaUFnSUNBZ0lITnlZejBuSkh0eVpXTnBjR1V1YVcxaFoyVjlKeUJoYkhROUowWnZiMlFnWm5KdmJTQnlaV05wY0dVblBseHVJQ0FnSUNBZ1BHUnBkaUJqYkdGemN5QTlJRndpY0dGdWRISjVMV0oxZEhSdmJuTmNJajVjYmlBZ0lDQWdJQ0FnUEdKMWRIUnZiaUIwZVhCbFBWd2lZblYwZEc5dVhDSWdibUZ0WlQxY0lrRmtaQ0JPWldWa1pXUWdTVzVuY21Wa2FXVnVkSE5jSWlCamJHRnpjejFjSW1KdmRXZG9kQzFwYm1keVpXUnBaVzUwY3lCaWIzVm5hSFF0YVc1bmNtVmthV1Z1ZEhNa2UzSmxZMmx3WlM1cFpIMGdKSHR5WldOcGNHVXVhV1I5WENJK1FXUmtJRTVsWldSbFpDQkpibWR5WldScFpXNTBjend2WW5WMGRHOXVQbHh1SUNBZ0lDQWdJQ0E4WW5WMGRHOXVJSFI1Y0dVOVhDSmlkWFIwYjI1Y0lpQnVZVzFsUFZ3aVNHRjJaU0JEYjI5clpXUmNJaUJqYkdGemN6MWNJbWhoZG1VdFkyOXZhMlZrSUdoaGRtVXRZMjl2YTJWa0pIdHlaV05wY0dVdWFXUjlJQ1I3Y21WamFYQmxMbWxrZlZ3aVBraGhkbVVnUTI5dmEyVmtQQzlpZFhSMGIyNCtYRzRnSUNBZ0lDQThMMlJwZGo1Y2JpQWdJQ0FnSUR4d0lHTnNZWE56UFNkdVpXVmtaV1F0YVc1bmN5YytTVzVuY21Wa2FXVnVkSE1nVTNScGJHd2dUbVZsWkdWa09qd3ZjRDVjYmlBZ0lDQWdJRHgxYkNBK1hHNGdJQ0FnSUNBOGJHaytKSHQyWVd4MVpYTXVhbTlwYmlnblBDOXNhVDQ4YkdrK0p5bDlQQzlzYVQ1Y2JpQWdJQ0FnSUR3dmRXdytYRzRnSUNBZ0lDQThjQ0JqYkdGemN6MG5hVzVuTFdOdmMzUW5Qa052YzNRZ2RHOGdVM1JwYkd3Z1IyVjBPaVFrZTI1bFpXUmxaRU52YzNSOVBDOXdQbHh1SUNBZ0lEd3ZaR2wyUG1BcE8xeHVJQ0FnSUgwcE8xeHVJQ0I5TEZ4dVhHNGdJSE5vYjNkVWIwTnZiMnRTWldOcGNHVnpPaUFvS1NBOVBpQjdYRzRnSUNBZ1kyOXVjM1FnYzJodmQxUnZRMjl2YTBKMWRIUnZiaUE5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9KeTUwYnkxamIyOXJKeWs3WEc0Z0lDQWdhV1lnS0NGa2IyMVZjR1JoZEdWekxuVnpaWEl1Y21WamFYQmxjMVJ2UTI5dmF5NXNaVzVuZEdncElIdGNiaUFnSUNBZ0lITm9iM2RVYjBOdmIydENkWFIwYjI0dWFXNXVaWEpVWlhoMElEMGdKMWx2ZFNCb1lYWmxJRzV2SUhOaGRtVmtJRkpsWTJsd1pYTWhKenRjYmlBZ0lDQWdJR1J2YlZWd1pHRjBaWE11Y0c5d2RXeGhkR1ZEWVhKa2N5aGtiMjFWY0dSaGRHVnpMbU52YjJ0aWIyOXJMbkpsWTJsd1pYTXBPMXh1SUNBZ0lDQWdjbVYwZFhKdVhHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJR1J2YlZWd1pHRjBaWE11WkdsemNHeGhlVlJ2UTI5dmEwTmhjbVJ6S0NrN1hHNGdJQ0FnZlZ4dUlDQjlMRnh1WEc0Z0lISmxiVzkyWlVaeWIyMVViME52YjJzNklDZ3BJRDArSUh0Y2JpQWdJQ0JzWlhRZ2MzQmxZMmxtYVdOU1pXTnBjR1VnUFNCa2IyMVZjR1JoZEdWekxtTnZiMnRpYjI5ckxuSmxZMmx3WlhNdVptbHVaQ2h5WldOcGNHVWdQVDRnZTF4dUlDQWdJQ0FnYVdZZ0tHVjJaVzUwTG5SaGNtZGxkQzVqYkdGemMweHBjM1F1WTI5dWRHRnBibk1vY21WamFYQmxMbWxrS1NrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2NtVmphWEJsTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDBwWEc0Z0lDQWdaRzl0VlhCa1lYUmxjeTUxYzJWeUxuSmxiVzkyWlVaeWIyMVNaV05wY0dWelZHOURiMjlyS0hOd1pXTnBabWxqVW1WamFYQmxLVHRjYmlBZ0lDQmtiMjFWY0dSaGRHVnpMbVJwYzNCc1lYbFViME52YjJ0RFlYSmtjeWdwTzF4dUlDQjlMRnh1WEc0Z0lHUnBjM0JzWVhsRWFYSmxZM1JwYjI1ek9pQW9aWFpsYm5RcElEMCtJSHRjYmlBZ0lDQmpiMjV6ZENCelpXRnlZMmhDWVhJZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0NjdWMyVmhjbU5vTFdGeVpXRW5LVHRjYmlBZ0lDQnpaV0Z5WTJoQ1lYSXVZMnhoYzNOTWFYTjBMbUZrWkNnbmFHbGtaR1Z1SnlsY2JpQWdJQ0JqYjI1emRDQmpZWEprUVhKbFlTQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5TnRZV2x1TFhObFkzUnBiMjRuS1R0Y2JpQWdJQ0JqWVhKa1FYSmxZUzVqYkdGemMweHBjM1FnUFNBbmNtVmphWEJsTFdScGNtVmpkR2x2Ym5Nbk8xeHVJQ0FnSUd4bGRDQnpjR1ZqYVdacFkxSmxZMmx3WlNBOUlHUnZiVlZ3WkdGMFpYTXVabWx1WkZOd1pXTnBabWxqVW1WamFYQmxLR1YyWlc1MEtUdGNiaUFnSUNCc1pYUWdZMjl6ZENBOUlITndaV05wWm1salVtVmphWEJsTG1OaGJHTjFiR0YwWlVOdmMzUW9LVHRjYmlBZ0lDQmpZWEprUVhKbFlTNXBibTVsY2toVVRVd2dQU0FuSnp0Y2JpQWdJQ0JzWlhRZ2JtVmxaR1ZrU1c1bmNtVmthV1Z1ZEhNZ1BTQmJYVHRjYmlBZ0lDQnpjR1ZqYVdacFkxSmxZMmx3WlM1cGJtZHlaV1JwWlc1MGN5NW1iM0pGWVdOb0tHbHVaM0psWkdsbGJuUWdQVDRnZTF4dUlDQWdJQ0FnYkdWMElHNWhiV1VnUFNCemNHVmphV1pwWTFKbFkybHdaUzVwYm1keVpXUnBaVzUwYzBSaGRHRXVabWx1WkNocGRHVnRJRDArSUdsMFpXMHVhV1FnUFQwOUlHbHVaM0psWkdsbGJuUXVhV1FwTG01aGJXVmNiaUFnSUNBZ0lHNWxaV1JsWkVsdVozSmxaR2xsYm5SekxuQjFjMmdvWUNSN2FXNW5jbVZrYVdWdWRDNXhkV0Z1ZEdsMGVTNWhiVzkxYm5RdWRHOUdhWGhsWkNneUtYMGdKSHRwYm1keVpXUnBaVzUwTG5GMVlXNTBhWFI1TG5WdWFYUjlJQ1I3Ym1GdFpYMWdLVnh1SUNBZ0lIMHBYRzRnSUNBZ2JHVjBJRzVsWldSbFpGTjBaWEJ6SUQwZ1cxMDdYRzRnSUNBZ2MzQmxZMmxtYVdOU1pXTnBjR1V1YVc1emRISjFZM1JwYjI1ekxtWnZja1ZoWTJnb2MzUmxjQ0E5UGlCN1hHNGdJQ0FnSUNCdVpXVmtaV1JUZEdWd2N5NXdkWE5vS0dBa2UzTjBaWEF1Ym5WdFltVnlmUzRnSkh0emRHVndMbWx1YzNSeWRXTjBhVzl1ZlNCZ0tWeHVJQ0FnSUgwcFhHNGdJQ0FnWTJGeVpFRnlaV0V1YVc1dVpYSklWRTFNSUQwZ1lEeHpaV04wYVc5dUlHTnNZWE56UFNka2FYTndiR0Y1TFhKbFkybHdaU2MrWEc0Z0lDQWdQR1JwZGlCamJHRnpjejBuWkdsemNHeGhlUzF5WldOcGNHVXRhVzVtYnljK1hHNGdJQ0FnSUNBOGFETStKSHR6Y0dWamFXWnBZMUpsWTJsd1pTNXVZVzFsZlR3dmFETStYRzRnSUNBZ0lDQThhVzFuSUdOc1lYTnpQU2RqWVhKa0xYQnBZM1IxY21VbklITnlZejBuSkh0emNHVmphV1pwWTFKbFkybHdaUzVwYldGblpYMG5JR0ZzZEQwblVtVmphWEJsSUdsdFlXZGxJR1p2Y2lBa2UzTndaV05wWm1salVtVmphWEJsTG01aGJXVjlKejVjYmlBZ0lDQThMMlJwZGo1Y2JpQWdJQ0E4WkdsMklHTnNZWE56UFNkeVpXTnBjR1V0YVc1bmNtVmthV1Z1ZEhNblBseHVJQ0FnSUR4b05TQmpiR0Z6Y3owbmNtVmphWEJsTFdsdVozSmxaR2xsYm5SekxYUnBkR3hsSno1WmIzVWdkMmxzYkNCdVpXVmtPaUE4TDJnMVBseHVJQ0FnSUR4MWJENWNiaUFnSUNBOGJHaytKSHR1WldWa1pXUkpibWR5WldScFpXNTBjeTVxYjJsdUtDYzhMMnhwUGp4c2FUNG5LWDA4TDJ4cFBseHVJQ0FnSUR3dmRXdytYRzRnSUNBZ1BDOWthWFkrWEc0Z0lDQWdQR1JwZGlCamJHRnpjejBuY21WamFYQmxMV2x1YzNSeWRXTjBhVzl1Y3ljK1hHNGdJQ0FnUEdnMVBrbHVjM1J5ZFdOMGFXOXVjem9nUEM5b05UNWNiaUFnSUNBOGRXd2dZMnhoYzNNOUoybHVjM1J5ZFdOMGFXOXVMV3hwYzNRbklITjBlV3hsUFNkc2FYTjBMWE4wZVd4bExYUjVjR1U2Ym05dVpUc25QbHh1SUNBZ0lEeHNhVDRrZTI1bFpXUmxaRk4wWlhCekxtcHZhVzRvSnp3dmJHaytQR3hwUGljcGZUd3ZiR2srWEc0Z0lDQWdQQzkxYkQ1Y2JpQWdJQ0E4YURVK1ZHaHBjeUJ5WldOcGNHVWdaMlZ1WlhKaGJHeDVJR052YzNSek9pQWtKSHRqYjNOMGZTQThMMmcxUGx4dUlDQWdJRHd2WkdsMlBseHVJQ0FnSUR3dmMyVmpkR2x2Ymo1Z08xeHVJQ0I5TEZ4dVhHNGdJR1pwYkhSbGNsSmxZMmx3WlhNNklDZ3BJRDArSUh0Y2JpQWdJQ0JqYjI1emRDQmpZWEprUVhKbFlTQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5NWhiR3d0WTJGeVpITW5LVHRjYmlBZ0lDQjJZWElnYzJWaGNtTm9WR1Z5YlNBOUlHVjJaVzUwTG5SaGNtZGxkQzUyWVd4MVpTNTBiMHh2ZDJWeVEyRnpaU2dwTzF4dUlDQWdJR2xtSUNoelpXRnlZMmhVWlhKdElDRTlQU0FuSnlrZ2UxeHVJQ0FnSUNBZ1kyRnlaRUZ5WldFdWFXNXVaWEpJVkUxTUlEMGdKeWM3WEc0Z0lDQWdJQ0JrYjIxVmNHUmhkR1Z6TG1ScGMzQnNZWGxHYVd4MFpYSmxaRkpsWTJsd1pYTW9jMlZoY21Ob1ZHVnliU2s3WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lHUnZiVlZ3WkdGMFpYTXVjRzl3ZFd4aGRHVkRZWEprY3loa2IyMVZjR1JoZEdWekxtTnZiMnRpYjI5ckxuSmxZMmx3WlhNcE8xeHVJQ0FnSUgxY2JpQWdmU3hjYmx4dUlDQmthWE53YkdGNVJtbHNkR1Z5WldSU1pXTnBjR1Z6T2lBb2MyVmhjbU5vVkdWeWJTa2dQVDRnZTF4dUlDQWdJR1J2YlZWd1pHRjBaWE11Y0c5d2RXeGhkR1ZEWVhKa2N5aGtiMjFWY0dSaGRHVnpMbU52YjJ0aWIyOXJMbVpwYm1SU1pXTnBjR1Z6S0hObFlYSmphRlJsY20wcEtUdGNiaUFnZlN4Y2JseHVJQ0JvWVhabFEyOXZhMlZrVW1WamFYQmxPaUFvWlhabGJuUXBJRDArSUh0Y2JpQWdJQ0JzWlhRZ2MzQmxZMmxtYVdOU1pXTnBjR1VnUFNCa2IyMVZjR1JoZEdWekxtWnBibVJUY0dWamFXWnBZMUpsWTJsd1pTaGxkbVZ1ZENrN1hHNGdJQ0FnWTI5dWMzUWdhR0YyWlVOdmIydGxaRUoxZEhSdmJpQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb1lDNW9ZWFpsTFdOdmIydGxaQ1I3YzNCbFkybG1hV05TWldOcGNHVXVhV1I5WUNrN1hHNGdJQ0FnYVdZZ0tHUnZiVlZ3WkdGMFpYTXVkWE5sY2k1amFHVmphMUJoYm5SeWVVbHVaM0psWkdsbGJuUnpLSE53WldOcFptbGpVbVZqYVhCbEtTQWhQVDBnSjFsdmRTQm9ZWFpsSUhSb1pTQnBibWR5WldScFpXNTBjeUVuS1NCN1hHNGdJQ0FnSUNCaGJHVnlkQ2hjSWxsdmRTQmtiMjRuZENCb1lYWmxJSGRvWVhRZ2VXOTFJRzVsWldRZ2VXVjBYQ0lwWEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lHUnZiVlZ3WkdGMFpYTXVkWE5sY2k1eVpXMXZkbVZRWVc1MGNubEpibWR5YVdScFpXNTBjeWh6Y0dWamFXWnBZMUpsWTJsd1pTbGNiaUFnSUNBZ0lHaGhkbVZEYjI5clpXUkNkWFIwYjI0dVpHbHpZV0pzWldRZ1BTQjBjblZsTzF4dUlDQWdJSDFjYmlBZ2ZTeGNibHh1SUNCaWRYbEpibWR5WldScFpXNTBjem9nS0dWMlpXNTBLU0E5UGlCN1hHNGdJQ0FnYkdWMElITndaV05wWm1salVtVmphWEJsSUQwZ1pHOXRWWEJrWVhSbGN5NW1hVzVrVTNCbFkybG1hV05TWldOcGNHVW9aWFpsYm5RcE8xeHVJQ0FnSUdOdmJuTjBJR0oxZVVKMWRIUnZiaUE5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9ZQzVpYjNWbmFIUXRhVzVuY21Wa2FXVnVkSE1rZTNOd1pXTnBabWxqVW1WamFYQmxMbWxrZldBcFhHNGdJQ0FnWkc5dFZYQmtZWFJsY3k1MWMyVnlMbUZrWkU1bFpXUmxaRkJoYm5SeWVVbHVaM0pwWkdsbGJuUnpLSE53WldOcFptbGpVbVZqYVhCbEtWeHVJQ0FnSUdKMWVVSjFkSFJ2Ymk1a2FYTmhZbXhsWkNBOUlIUnlkV1U3WEc0Z0lIMHNYRzVjYm4wN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElDQmtiMjFWY0dSaGRHVnpPMXh1SWl3aVkyeGhjM01nVUdGdWRISjVJSHRjYmlBZ1kyOXVjM1J5ZFdOMGIzSW9kWE5sY2xCaGJuUnllU2tnZTF4dUlDQWdJSFJvYVhNdWRYTmxjbEJoYm5SeWVTQTlJSFZ6WlhKUVlXNTBjbms3WEc0Z0lDQWdkR2hwY3k1MWMyVnlTVzVuY21Wa2FXVnVkSE1nUFNCN2ZUdGNiaUFnZlZ4dVhHNGdJR052YlhCcGJHVlFZVzUwY25rb0tTQjdYRzRnSUNBZ2RHaHBjeTUxYzJWeVNXNW5jbVZrYVdWdWRITWdQU0IwYUdsekxuVnpaWEpRWVc1MGNua3VjbVZrZFdObEtDaHdZVzUwY25rc0lHbHVaM0psWkdsbGJuUXBJRDArSUh0Y2JpQWdJQ0FnSUdsbUlDZ2hjR0Z1ZEhKNVcybHVaM0psWkdsbGJuUXVhVzVuY21Wa2FXVnVkRjBwSUh0Y2JpQWdJQ0FnSUNBZ2NHRnVkSEo1VzJsdVozSmxaR2xsYm5RdWFXNW5jbVZrYVdWdWRGMGdQU0JwYm1keVpXUnBaVzUwTG1GdGIzVnVkRHRjYmlBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJSEJoYm5SeWVWdHBibWR5WldScFpXNTBMbWx1WjNKbFpHbGxiblJkSUNzOUlHbHVaM0psWkdsbGJuUXVZVzF2ZFc1ME8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2NtVjBkWEp1SUhCaGJuUnllVHRjYmlBZ0lDQjlMQ0I3ZlNrN1hHNGdJSDFjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1VHRnVkSEo1TzF4dUlpd2lZMnhoYzNNZ1VtVmphWEJsSUh0Y2JpQWdZMjl1YzNSeWRXTjBiM0lvY21WamFYQmxMQ0JwYm1keVpXUnBaVzUwYzBSaGRHRXBJSHRjYmlBZ0lDQjBhR2x6TG01aGJXVWdQU0J5WldOcGNHVXVibUZ0WlR0Y2JpQWdJQ0IwYUdsekxtbGtJRDBnY21WamFYQmxMbWxrTzF4dUlDQWdJSFJvYVhNdWFXNW5jbVZrYVdWdWRITWdQU0J5WldOcGNHVXVhVzVuY21Wa2FXVnVkSE03WEc0Z0lDQWdkR2hwY3k1cGJuTjBjblZqZEdsdmJuTWdQU0J5WldOcGNHVXVhVzV6ZEhKMVkzUnBiMjV6TzF4dUlDQWdJSFJvYVhNdWRHRm5jeUE5SUhKbFkybHdaUzUwWVdkek8xeHVJQ0FnSUhSb2FYTXVhVzVuY21Wa2FXVnVkSE5FWVhSaElEMGdhVzVuY21Wa2FXVnVkSE5FWVhSaE8xeHVJQ0FnSUhSb2FYTXVhVzFoWjJVZ1BTQnlaV05wY0dVdWFXMWhaMlU3WEc0Z0lIMWNibHh1SUNCallXeGpkV3hoZEdWRGIzTjBLQ2tnZTF4dUlDQWdJR3hsZENCamIzTjBRMjkxYm5SbGNpQTlJREE3WEc0Z0lDQWdkR2hwY3k1cGJtZHlaV1JwWlc1MGN5NW1iM0pGWVdOb0tHbHVaM0psWkdsbGJuUWdQVDRnZTF4dUlDQWdJQ0FnZEdocGN5NXBibWR5WldScFpXNTBjMFJoZEdFdVptbHVaQ2h6Y0dWamFXWnBZMGx1WjNKbFpHbGxiblFnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQnBaaUFvYzNCbFkybG1hV05KYm1keVpXUnBaVzUwTG1sa0lEMDlQU0JwYm1keVpXUnBaVzUwTG1sa0tTQjdYRzRnSUNBZ0lDQWdJQ0FnWTI5emRFTnZkVzUwWlhJZ0t6MGdLRTUxYldKbGNpaHpjR1ZqYVdacFkwbHVaM0psWkdsbGJuUXVaWE4wYVcxaGRHVmtRMjl6ZEVsdVEyVnVkSE1wSUNwY2JpQWdJQ0FnSUNBZ0lDQk9kVzFpWlhJb2FXNW5jbVZrYVdWdWRDNXhkV0Z1ZEdsMGVTNWhiVzkxYm5RcEtWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQjlLVnh1SUNBZ0lIMHBPMXh1SUNBZ0lISmxkSFZ5YmlCd1lYSnpaVVpzYjJGMEtDaGpiM04wUTI5MWJuUmxjaUF2SURFd01Da3VkRzlHYVhobFpDZ3lLU2s3WEc0Z0lIMWNibHh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCU1pXTnBjR1U3WEc0aUxDSnBiWEJ2Y25RZ0p5NHZZM056TDNOMGVXeGxjeTV6WTNOekp6dGNibHh1YVcxd2IzSjBJR1J2YlZWd1pHRjBaWE1nWm5KdmJTQW5MaTlrYjIxVmNHUmhkR1Z6Snp0Y2JseHVZMjl1YzNRZ2MyaHZkMFpoZG05eWFYUmxjMEoxZEhSdmJpQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5NTJhV1YzTFdaaGRtOXlhWFJsY3ljcE8xeHVZMjl1YzNRZ2FHOXRaVUoxZEhSdmJpQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5NW9iMjFsSnlsY2JtTnZibk4wSUdOaGNtUkJjbVZoSUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduTG1Gc2JDMWpZWEprY3ljcE8xeHVZMjl1YzNRZ2MyVmhjbU5vUW1GeUlEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkxuTmxZWEpqYUMxcGJuQjFkQ2NwTzF4dVkyOXVjM1FnYzJodmQxUnZRMjl2YTBKMWRIUnZiaUE5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9KeTUwYnkxamIyOXJKeWs3WEc1Y2JtTnZibk4wSUdOaGNtUkNkWFIwYjI1RGIyNWthWFJwYjI1aGJITWdQU0FvWlhabGJuUXBJRDArSUh0Y2JpQWdhV1lnS0dWMlpXNTBMblJoY21kbGRDNWpiR0Z6YzB4cGMzUXVZMjl1ZEdGcGJuTW9KMlpoZG05eWFYUmxKeWtwSUh0Y2JpQWdJQ0JrYjIxVmNHUmhkR1Z6TG1aaGRtOXlhWFJsUTJGeVpDaGxkbVZ1ZENrN1hHNGdJSDBnWld4elpTQnBaaUFvWlhabGJuUXVkR0Z5WjJWMExtTnNZWE56VEdsemRDNWpiMjUwWVdsdWN5Z25ZV1JrTFdKMWRIUnZiaWNwS1NCN1hHNGdJQ0FnWkc5dFZYQmtZWFJsY3k1aFpHUlViMVJ2UTI5dmF5aGxkbVZ1ZENrN1hHNGdJSDBnWld4elpTQnBaaUFvWlhabGJuUXVkR0Z5WjJWMExtTnNZWE56VEdsemRDNWpiMjUwWVdsdWN5Z25ZMkZ5WkMxd2FXTjBkWEpsSnlrcElIdGNiaUFnSUNCa2IyMVZjR1JoZEdWekxtUnBjM0JzWVhsRWFYSmxZM1JwYjI1ektHVjJaVzUwS1R0Y2JpQWdmU0JsYkhObElHbG1JQ2hsZG1WdWRDNTBZWEpuWlhRdVkyeGhjM05NYVhOMExtTnZiblJoYVc1ektDZG9iMjFsSnlrcElIdGNiaUFnSUNCamIyNXpkQ0J6WldGeVkyaENZWElnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2N1YzJWaGNtTm9MV0Z5WldFbktUdGNiaUFnSUNCelpXRnlZMmhDWVhJdVkyeGhjM05NYVhOMExuSmxiVzkyWlNnbmFHbGtaR1Z1SnlsY2JpQWdJQ0J6YUc5M1ZHOURiMjlyUW5WMGRHOXVMbWx1Ym1WeVNGUk5UQ0E5SUNkVWJ5QkRiMjlySnp0Y2JpQWdJQ0J6YUc5M1JtRjJiM0pwZEdWelFuVjBkRzl1TG1sdWJtVnlTRlJOVENBOUlDZFdhV1YzSUVaaGRtOXlhWFJsY3ljN1hHNGdJQ0FnWkc5dFZYQmtZWFJsY3k1d2IzQjFiR0YwWlVOaGNtUnpLR1J2YlZWd1pHRjBaWE11WTI5dmEySnZiMnN1Y21WamFYQmxjeWs3WEc0Z0lIMGdaV3h6WlNCcFppQW9aWFpsYm5RdWRHRnlaMlYwTG1Oc1lYTnpUR2x6ZEM1amIyNTBZV2x1Y3lnblkyeHZjMlV0WW5WMGRHOXVKeWtwSUh0Y2JpQWdJQ0JrYjIxVmNHUmhkR1Z6TG5KbGJXOTJaVVp5YjIxVWIwTnZiMnNvWlhabGJuUXBPMXh1SUNCOUlHVnNjMlVnYVdZZ0tHVjJaVzUwTG5SaGNtZGxkQzVqYkdGemMweHBjM1F1WTI5dWRHRnBibk1vSjJoaGRtVXRZMjl2YTJWa0p5a3BJSHRjYmlBZ0lDQmtiMjFWY0dSaGRHVnpMbWhoZG1WRGIyOXJaV1JTWldOcGNHVW9aWFpsYm5RcE8xeHVJQ0I5SUdWc2MyVWdhV1lnS0dWMlpXNTBMblJoY21kbGRDNWpiR0Z6YzB4cGMzUXVZMjl1ZEdGcGJuTW9KMkp2ZFdkb2RDMXBibWR5WldScFpXNTBjeWNwS1NCN1hHNGdJQ0FnWkc5dFZYQmtZWFJsY3k1aWRYbEpibWR5WldScFpXNTBjeWhsZG1WdWRDazdYRzRnSUgxY2JuMWNibHh1ZDJsdVpHOTNMbTl1Ykc5aFpDQTlJR1J2YlZWd1pHRjBaWE11WjJWMFYyaGhkSE5EYjI5cmFXNW5SR0YwWVNncFhHNW9iMjFsUW5WMGRHOXVMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMk5zYVdOckp5d2dZMkZ5WkVKMWRIUnZia052Ym1ScGRHbHZibUZzY3lrN1hHNWpZWEprUVhKbFlTNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZGpiR2xqYXljc0lHTmhjbVJDZFhSMGIyNURiMjVrYVhScGIyNWhiSE1wTzF4dWMyaHZkMFpoZG05eWFYUmxjMEoxZEhSdmJpNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZGpiR2xqYXljc0lHUnZiVlZ3WkdGMFpYTXVkbWxsZDBaaGRtOXlhWFJsY3lrN1hHNXphRzkzVkc5RGIyOXJRblYwZEc5dUxtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0oyTnNhV05ySnl3Z1pHOXRWWEJrWVhSbGN5NXphRzkzVkc5RGIyOXJVbVZqYVhCbGN5azdYRzV6WldGeVkyaENZWEl1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduYTJWNWRYQW5MQ0JrYjIxVmNHUmhkR1Z6TG1acGJIUmxjbEpsWTJsd1pYTXBPMXh1SWl3aWFXMXdiM0owSUZCaGJuUnllU0JtY205dElDY3VMM0JoYm5SeWVTYzdYRzVjYm1Oc1lYTnpJRlZ6WlhJZ2UxeHVJQ0JqYjI1emRISjFZM1J2Y2loMWMyVnlMQ0J3WVc1MGNua3NJR2x1WjNKbFpHbGxiblJ6UkdGMFlTa2dlMXh1SUNBZ0lIUm9hWE11YVdRZ1BTQjFjMlZ5TG1sa08xeHVJQ0FnSUhSb2FYTXVibUZ0WlNBOUlIVnpaWEl1Ym1GdFpUdGNiaUFnSUNCMGFHbHpMbkJoYm5SeWVTQTlJSEJoYm5SeWVUdGNiaUFnSUNCMGFHbHpMbVpoZG05eWFYUmxVbVZqYVhCbGN5QTlJRnRkTzF4dUlDQWdJSFJvYVhNdWNtVmphWEJsYzFSdlEyOXZheUE5SUZ0ZE8xeHVJQ0FnSUhSb2FYTXVhVzVuY21Wa2FXVnVkSE5FWVhSaElEMGdhVzVuY21Wa2FXVnVkSE5FWVhSaE8xeHVJQ0I5WEc1Y2JpQWdZV1JrVkc5R1lYWnZjbWwwWlhNb2NtVmphWEJsS1NCN1hHNGdJQ0FnYVdZZ0tDRjBhR2x6TG1aaGRtOXlhWFJsVW1WamFYQmxjeTVwYm1Oc2RXUmxjeWh5WldOcGNHVXBLU0I3WEc0Z0lDQWdJQ0IwYUdsekxtWmhkbTl5YVhSbFVtVmphWEJsY3k1d2RYTm9LSEpsWTJsd1pTazdYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdZV1JrVkc5U1pXTnBjR1Z6Vkc5RGIyOXJLSEpsWTJsd1pTa2dlMXh1SUNBZ0lHbG1JQ2doZEdocGN5NXlaV05wY0dWelZHOURiMjlyTG1sdVkyeDFaR1Z6S0hKbFkybHdaU2twSUh0Y2JpQWdJQ0FnSUhSb2FYTXVjbVZqYVhCbGMxUnZRMjl2YXk1d2RYTm9LSEpsWTJsd1pTazdYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdjbVZ0YjNabFJuSnZiVkpsWTJsd1pYTlViME52YjJzb2NtVmphWEJsS1NCN1hHNGdJQ0FnWTI5dWMzUWdhU0E5SUhSb2FYTXVjbVZqYVhCbGMxUnZRMjl2YXk1cGJtUmxlRTltS0hKbFkybHdaU2s3WEc0Z0lDQWdkR2hwY3k1eVpXTnBjR1Z6Vkc5RGIyOXJMbk53YkdsalpTaHBMQ0F4S1R0Y2JpQWdmVnh1WEc0Z0lISmxiVzkyWlZCaGJuUnllVWx1WjNKcFpHbGxiblJ6S0hKbFkybHdaU2tnZTF4dUlDQWdJSEpsWTJsd1pTNXBibWR5WldScFpXNTBjeTVtYjNKRllXTm9LQ2hwZEdWdEtTQTlQaUI3WEc0Z0lDQWdJQ0JtWlhSamFDZ25hSFIwY0hNNkx5OW1aUzFoY0hCekxtaGxjbTlyZFdGd2NDNWpiMjB2WVhCcEwzWXhMM2RvWVhSekxXTnZiMnRwYmk4eE9URXhMM1Z6WlhKekwzZGpWWE5sY25ORVlYUmhKeXdnZTF4dUlDQWdJQ0FnSUNCdFpYUm9iMlE2SUNkUVQxTlVKeXhjYmlBZ0lDQWdJQ0FnYUdWaFpHVnljem9nZTF4dUlDQWdJQ0FnSUNBZ0lDZERiMjUwWlc1MExWUjVjR1VuT2lBbllYQndiR2xqWVhScGIyNHZhbk52YmlkY2JpQWdJQ0FnSUNBZ2ZTeGNiaUFnSUNBZ0lDQWdZbTlrZVRvZ1NsTlBUaTV6ZEhKcGJtZHBabmtvZTF4dUlDQWdJQ0FnSUNBZ0lGd2lkWE5sY2tsRVhDSTZJSFJvYVhNdWFXUXNYRzRnSUNBZ0lDQWdJQ0FnWENKcGJtZHlaV1JwWlc1MFNVUmNJam9nYVhSbGJTNXBaQ3hjYmlBZ0lDQWdJQ0FnSUNCY0ltbHVaM0psWkdsbGJuUk5iMlJwWm1sallYUnBiMjVjSWpvZ0xTaHBkR1Z0TG5GMVlXNTBhWFI1TG1GdGIzVnVkQ2xjYmlBZ0lDQWdJQ0FnZlNsY2JpQWdJQ0FnSUgwcFhHNGdJQ0FnSUNBZ0lDNTBhR1Z1S0hKbGMzQnZibk5sSUQwK0lISmxjM0J2Ym5ObExtcHpiMjRvS1NsY2JpQWdJQ0FnSUNBZ0xuUm9aVzRvZEdocGN5NTFjR1JoZEdWVmMyVnlVR0Z1ZEhKNUtDa3BYRzRnSUNBZ0lDQWdJQzVqWVhSamFDaGxjbkp2Y2lBOVBpQmpiMjV6YjJ4bExteHZaeWhsY25KdmNpa3BPMXh1SUNBZ0lDQWdjMlYwVkdsdFpXOTFkQ2gwYUdsekxuVndaR0YwWlZWelpYSlFZVzUwY25rb0tTd2dOREF3TUNsY2JpQWdJQ0I5S1R0Y2JseHVJQ0I5WEc1Y2JpQWdZV1JrVG1WbFpHVmtVR0Z1ZEhKNVNXNW5jbWxrYVdWdWRITW9jbVZqYVhCbEtTQjdYRzRnSUNBZ2RHaHBjeTVqYUdWamEwaHZkMDExWTJoTmIzSmxLSEpsWTJsd1pTa3VabTl5UldGamFDZ29hWFJsYlNrZ1BUNGdlMXh1SUNBZ0lDQWdabVYwWTJnb0oyaDBkSEJ6T2k4dlptVXRZWEJ3Y3k1b1pYSnZhM1ZoY0hBdVkyOXRMMkZ3YVM5Mk1TOTNhR0YwY3kxamIyOXJhVzR2TVRreE1TOTFjMlZ5Y3k5M1kxVnpaWEp6UkdGMFlTY3NJSHRjYmlBZ0lDQWdJQ0FnYldWMGFHOWtPaUFuVUU5VFZDY3NYRzRnSUNBZ0lDQWdJR2hsWVdSbGNuTTZJSHRjYmlBZ0lDQWdJQ0FnSUNBblEyOXVkR1Z1ZEMxVWVYQmxKem9nSjJGd2NHeHBZMkYwYVc5dUwycHpiMjRuWEc0Z0lDQWdJQ0FnSUgwc1hHNGdJQ0FnSUNBZ0lHSnZaSGs2SUVwVFQwNHVjM1J5YVc1bmFXWjVLSHRjYmlBZ0lDQWdJQ0FnSUNCY0luVnpaWEpKUkZ3aU9pQjBhR2x6TG1sa0xGeHVJQ0FnSUNBZ0lDQWdJRndpYVc1bmNtVmthV1Z1ZEVsRVhDSTZJR2wwWlcwdWFXUXNYRzRnSUNBZ0lDQWdJQ0FnWENKcGJtZHlaV1JwWlc1MFRXOWthV1pwWTJGMGFXOXVYQ0k2SUdsMFpXMHVjWFZoYm5ScGRIbE9aV1ZrWldSY2JpQWdJQ0FnSUNBZ2ZTbGNiaUFnSUNBZ0lIMHBYRzRnSUNBZ0lDQWdJQzUwYUdWdUtISmxjM0J2Ym5ObElEMCtJSEpsYzNCdmJuTmxMbXB6YjI0b0tTbGNiaUFnSUNBZ0lDQWdMblJvWlc0b2RHaHBjeTUxY0dSaGRHVlZjMlZ5VUdGdWRISjVLQ2twWEc0Z0lDQWdJQ0FnSUM1allYUmphQ2hsY25KdmNpQTlQaUJqYjI1emIyeGxMbXh2WnlobGNuSnZjaWtwTzF4dUlDQWdJSDBwTzF4dUlDQjlYRzVjYmlBZ2RYQmtZWFJsVlhObGNsQmhiblJ5ZVNncElIdGNiaUFnSUNCbVpYUmphQ2duYUhSMGNITTZMeTltWlMxaGNIQnpMbWhsY205cmRXRndjQzVqYjIwdllYQnBMM1l4TDNkb1lYUnpMV052YjJ0cGJpOHhPVEV4TDNWelpYSnpMM2RqVlhObGNuTkVZWFJoSnlsY2JpQWdJQ0FnSUM1MGFHVnVLSEpsYzNCdmJuTmxJRDArSUhKbGMzQnZibk5sTG1wemIyNG9LU2xjYmlBZ0lDQWdJQzUwYUdWdUtISmxjM0J2Ym5ObElEMCtJSHRjYmlBZ0lDQWdJQ0FnYkdWMElIQmhiblJ5ZVNBOUlHNWxkeUJRWVc1MGNua29jbVZ6Y0c5dWMyVXVkMk5WYzJWeWMwUmhkR0ZiZEdocGN5NXBaQ0F0SURGZExuQmhiblJ5ZVNsY2JpQWdJQ0FnSUNBZ2RHaHBjeTV3WVc1MGNua2dQU0J3WVc1MGNubGNiaUFnSUNBZ0lDQWdkR2hwY3k1d1lXNTBjbmt1WTI5dGNHbHNaVkJoYm5SeWVTaDBhR2x6TG1sdVozSmxaR2xsYm5SelJHRjBZU2xjYmlBZ0lDQWdJSDBwWEc0Z0lDQWdJQ0F1WTJGMFkyZ29aWEp5YjNJZ1BUNGdZMjl1YzI5c1pTNXNiMmNvWlhKeWIzSXBLVnh1SUNCOVhHNWNiaUFnY21WdGIzWmxSbkp2YlVaaGRtOXlhWFJsY3loeVpXTnBjR1VwSUh0Y2JpQWdJQ0JqYjI1emRDQnBJRDBnZEdocGN5NW1ZWFp2Y21sMFpWSmxZMmx3WlhNdWFXNWtaWGhQWmloeVpXTnBjR1VwTzF4dUlDQWdJSFJvYVhNdVptRjJiM0pwZEdWU1pXTnBjR1Z6TG5Od2JHbGpaU2hwTENBeEtUdGNiaUFnZlZ4dVhHNGdJR1pwYkhSbGNrWmhkbTl5YVhSbGN5aDBZV2NwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1bVlYWnZjbWwwWlZKbFkybHdaWE11Wm1sc2RHVnlLSEpsWTJsd1pTQTlQaUI3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdjbVZqYVhCbExuUmhaM011YVc1amJIVmtaWE1vZEdGbktUdGNiaUFnSUNCOUtUdGNiaUFnZlZ4dVhHNGdJR1pwYm1SR1lYWnZjbWwwWlhNb2MzUnlaMVJ2VTNKamFDa2dlMXh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbVpoZG05eWFYUmxVbVZqYVhCbGN5NW1hV3gwWlhJb2NtVmphWEJsSUQwK0lIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCeVpXTnBjR1V1Ym1GdFpTNXBibU5zZFdSbGN5aHpkSEpuVkc5VGNtTm9LU0I4ZkZ4dUlDQWdJQ0FnSUNCeVpXTnBjR1V1YVc1bmNtVmthV1Z1ZEhNdVptbHVaQ2hwYm1keVpXUnBaVzUwSUQwK0lIdGNiaUFnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdhVzVuY21Wa2FXVnVkQzV1WVcxbExtbHVZMngxWkdWektITjBjbWRVYjFOeVkyZ3BYRzRnSUNBZ0lDQWdJSDBwTzF4dUlDQWdJSDBwTzF4dUlDQjlYRzVjYmlBZ1ptbHVaRTFwYzNOcGJtZEpibWR5WldScFpXNTBjeWh5WldOcGNHVXBJSHRjYmlBZ0lDQnlaWFIxY200Z2NtVmphWEJsTG1sdVozSmxaR2xsYm5SekxuSmxaSFZqWlNnb2JtOTBVSEpsYzJWdWRDd2dhVzVuY21Wa2FXVnVkQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ2FXWWdLQ0YwYUdsekxuQmhiblJ5ZVM1MWMyVnlTVzVuY21Wa2FXVnVkSE5iYVc1bmNtVmthV1Z1ZEM1cFpGMGdmSHdnYVc1bmNtVmthV1Z1ZEM1eGRXRnVkR2wwZVM1aGJXOTFiblFnUGlCMGFHbHpMbkJoYm5SeWVTNTFjMlZ5U1c1bmNtVmthV1Z1ZEhOYmFXNW5jbVZrYVdWdWRDNXBaRjBwSUh0Y2JpQWdJQ0FnSUNBZ2JtOTBVSEpsYzJWdWRDNXdkWE5vS0dsdVozSmxaR2xsYm5RcE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2NtVjBkWEp1SUc1dmRGQnlaWE5sYm5RN1hHNGdJQ0FnZlN3Z1cxMHBPMXh1SUNCOVhHNWNiaUFnWTJobFkydFFZVzUwY25sSmJtZHlaV1JwWlc1MGN5aHlaV05wY0dVcElIdGNiaUFnSUNCMGFHbHpMbkJoYm5SeWVTNWpiMjF3YVd4bFVHRnVkSEo1S0hSb2FYTXVhVzVuY21Wa2FXVnVkSE5FWVhSaEtUdGNiaUFnSUNCc1pYUWdiV2x6YzJsdVowbHVaM0psWkdsbGJuUnpJRDBnZEdocGN5NW1hVzVrVFdsemMybHVaMGx1WjNKbFpHbGxiblJ6S0hKbFkybHdaU2xjYmlBZ0lDQnBaaUFvYldsemMybHVaMGx1WjNKbFpHbGxiblJ6TG14bGJtZDBhQ0E5UFQwZ01Da2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlDZFpiM1VnYUdGMlpTQjBhR1VnYVc1bmNtVmthV1Z1ZEhNaEp6dGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnYkdWMElHMXBjM05wYm1jZ1BTQnRhWE56YVc1blNXNW5jbVZrYVdWdWRITXViR1Z1WjNSb08xeHVJQ0FnSUNBZ2NtVjBkWEp1SUdCWmIzVWdjM1JwYkd3Z2JtVmxaQ0FrZTIxcGMzTnBibWQ5SUcxdmNtVWdhVzVuY21Wa2FXVnVkSE11WUR0Y2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNCamFHVmphMGh2ZDAxMVkyaE5iM0psS0hKbFkybHdaU2tnZTF4dUlDQWdJR3hsZENCdGFYTnphVzVuU1c1bmNtVmthV1Z1ZEhNZ1BTQjBhR2x6TG1acGJtUk5hWE56YVc1blNXNW5jbVZrYVdWdWRITW9jbVZqYVhCbEtUdGNiaUFnSUNCc1pYUWdaR2xtWm1WeVpXNWpaU0E5SUcxcGMzTnBibWRKYm1keVpXUnBaVzUwY3k1dFlYQW9hVzVuY21Wa2FXVnVkQ0E5UGlCN1hHNGdJQ0FnSUNCc1pYUWdibUZ0WlNBOUlISmxZMmx3WlM1cGJtZHlaV1JwWlc1MGMwUmhkR0V1Wm1sdVpDaHBkR1Z0SUQwK0lHbDBaVzB1YVdRZ1BUMDlJR2x1WjNKbFpHbGxiblF1YVdRcE8xeHVJQ0FnSUNBZ2JHVjBJRzVsWldSbFpFbHVaeUE5SUh0Y2JpQWdJQ0FnSUNBZ2FXUTZJR2x1WjNKbFpHbGxiblF1YVdRc1hHNGdJQ0FnSUNBZ0lHTnZjM1E2SURBc1hHNGdJQ0FnSUNBZ0lHNWhiV1U2SUc1aGJXVXVibUZ0WlN4Y2JpQWdJQ0FnSUNBZ2RXNXBkRG9nYVc1bmNtVmthV1Z1ZEM1eGRXRnVkR2wwZVM1MWJtbDBMRnh1SUNBZ0lDQWdJQ0J4ZFdGdWRHbDBlVTVsWldSbFpEb2djR0Z5YzJWR2JHOWhkQ2hwYm1keVpXUnBaVzUwTG5GMVlXNTBhWFI1TG1GdGIzVnVkQzUwYjBacGVHVmtLRElwS1Z4dUlDQWdJQ0FnZlZ4dUlDQWdJQ0FnYVdZZ0tIUm9hWE11Y0dGdWRISjVMblZ6WlhKSmJtZHlaV1JwWlc1MGMxdHBibWR5WldScFpXNTBMbWxrWFNrZ2UxeHVJQ0FnSUNBZ0lDQnVaV1ZrWldSSmJtY3VjWFZoYm5ScGRIbE9aV1ZrWldRZ1BTQndZWEp6WlVac2IyRjBLR2x1WjNKbFpHbGxiblF1Y1hWaGJuUnBkSGt1WVcxdmRXNTBJQzBnZEdocGN5NXdZVzUwY25rdWRYTmxja2x1WjNKbFpHbGxiblJ6VzJsdVozSmxaR2xsYm5RdWFXUmRMblJ2Um1sNFpXUW9NaWtwWEc0Z0lDQWdJQ0I5WEc0Z0lDQWdJQ0JzWlhRZ2FXNW5jbVZrYVdWdWRFbDBaVzBnUFNCeVpXTnBjR1V1YVc1bmNtVmthV1Z1ZEhORVlYUmhMbVpwYm1Rb2FYUmxiU0E5UGlCcGJtZHlaV1JwWlc1MExtbGtJRDA5UFNCcGRHVnRMbWxrS1Z4dUlDQWdJQ0FnYm1WbFpHVmtTVzVuTG1OdmMzUWdQU0FvYm1WbFpHVmtTVzVuTG5GMVlXNTBhWFI1VG1WbFpHVmtJQ29nYVc1bmNtVmthV1Z1ZEVsMFpXMHVaWE4wYVcxaGRHVmtRMjl6ZEVsdVEyVnVkSE1wSUM4Z01UQXdPMXh1SUNBZ0lDQWdjbVYwZFhKdUlHNWxaV1JsWkVsdVp6dGNiaUFnSUNCOUtWeHVJQ0FnSUhKbGRIVnliaUJrYVdabVpYSmxibU5sTzF4dUlDQjlYRzU5WEc1Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1ZYTmxjanRjYmlKZExDSnpiM1Z5WTJWU2IyOTBJam9pSW4wPSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc1MTVDO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7IH1cXG5cXG5ib2R5IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IGF1dG87IH1cXG5cXG5tYWluIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzUxNUM7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcblxcbi5tYWluLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VCRjVFRTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7IH1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDI1NSU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgd2lkdGg6IDMwJTsgfVxcblxcbm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMTBweDsgfVxcblxcbi5uYXZCdXR0b24ge1xcbiAgZm9udC1zaXplOiAxMzAlO1xcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFQkY1RUU7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMwMDA7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMDAwO1xcbiAgbWFyZ2luOiAxJSAyMHB4IDElIDElOyB9XFxuICAubmF2QnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NmZjJkYTsgfVxcbiAgLm5hdkJ1dHRvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzNDMkM2OyB9XFxuXFxuLmxvd2VyLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdzsgfVxcblxcbi5ncmVldGluZyB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBjb2xvcjogI0VCRjVFRTtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7IH1cXG5cXG4uc2VhcmNoLWFyZWEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XFxuXFxuLnNlYXJjaC1iYXIge1xcbiAgbWF4LWhlaWdodDogNnZoO1xcbiAgbWFyZ2luOiA1cHg7XFxuICBwYWRkaW5nOiAzcHg7IH1cXG5cXG4uc2VhcmNoLWltYWdlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFQkY1RUU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgd2lkdGg6IDIwJTtcXG4gIG1hcmdpbi1yaWdodDogMDsgfVxcbiAgLnNlYXJjaC1pbWFnZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZmYyZGE7IH1cXG4gIC5zZWFyY2gtaW1hZ2U6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0MzQzJDNjsgfVxcblxcbi5zZWFyY2gtaW5wdXQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIG1pbi13aWR0aDogOTAlOyB9XFxuXFxuLmFsbC1jYXJkcyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1nYXA6IDMwcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgcGFkZGluZzogMzBweDtcXG4gIHdpZHRoOiA5NS41dnc7IH1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG5pbWcge1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLmNhcmQtYnV0dG9uIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICBoZWlnaHQ6IDI3cHg7XFxuICBtYXJnaW46IDNweDtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgLmNhcmQtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NmZjJkYTsgfVxcbiAgLmNhcmQtYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDM0MyQzY7IH1cXG5cXG4uYWRkLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJGNUVFO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMiU7IH1cXG5cXG4uYWRkIHtcXG4gIHdpZHRoOiA5MCU7IH1cXG5cXG4uZmF2b3JpdGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VCRjVFRTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICB3aWR0aDogMTMlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMTQ5LzE0OTIyMi5zdmdcXFwiKTsgfVxcblxcbi5jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNEN0YyRkU7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjMDAwO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uY2FyZC1oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VCRjVFRTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7IH1cXG5cXG4uYWxsIHtcXG4gIGdyaWQtZ2FwOiAwO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTsgfVxcblxcbi5hbGwtcmVjaXBlLWluZm8sXFxub2wge1xcbiAgZm9udC1zaXplOiAxNTAlO1xcbiAgY29sb3I6ICNFQkY1RUU7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogMTUwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFQkY1RUU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDVweDsgfVxcblxcbi5yZWNpcGUtbmFtZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJGNUVFO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZm9udC1zaXplOiAxNTAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLmNhcmQtcGljdHVyZSB7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgd2lkdGg6IDk0JTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICBtYXJnaW46IDEwcHggMyUgOHB4IDIuNiU7IH1cXG4gIC5jYXJkLXBpY3R1cmU6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAwLjc7IH1cXG4gIC5jYXJkLXBpY3R1cmU6YWN0aXZlIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDsgfVxcblxcbi53cmFwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxuICBib3JkZXI6IDA7IH1cXG5cXG4uZmF2b3JpdGUtYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzE0OC8xNDg4NDEuc3ZnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyB9XFxuXFxuLmRpc3BsYXktcmVjaXBlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWdhcDogN3B4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjZmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnI7XFxuICBtYXJnaW46IDE1cHg7IH1cXG5cXG4uZGlzcGxheS1yZWNpcGUtaW5mbyB7XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIGdyaWQtcm93OiAwLjU7IH1cXG5cXG4ucmVjaXBlLWluZ3JlZGllbnRzIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxuICBncmlkLXJvdzogMTtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBjb2xvcjogI0VCRjVFRTsgfVxcblxcbi5yZWNpcGUtaW5ncmVkaWVudHMtdGl0bGUge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIGZvbnQtc2l6ZTogMjBweDsgfVxcblxcbi5yZWNpcGUtaW5zdHJ1Y3Rpb25zIHtcXG4gIGdyaWQtY29sdW1uOiAxL3NwYW4gMjtcXG4gIGdyaWQtcm93OiAyO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6ICNFQkY1RUU7XFxuICBtYXgtd2lkdGg6IDkwdnc7XFxuICBtYXJnaW4tdG9wOiAxMDBweDsgfVxcblxcbi50by1jb29rLWdyZWV0aW5nIHtcXG4gIGNvbG9yOiAjRUJGNUVFOyB9XFxuXFxuLmNsb3NlLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJGNUVFO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMyU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9zdmcvc3RhdGljL2ljb25zL3N2Zy80NDYvNDQ2MDkxLnN2Z1xcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG4uaW5nLWNvc3QsXFxuLm5lZWRlZC1pbmdzLFxcbi5wYW50cnktYnV0dG9ucyB7XFxuICBtYXJnaW4tbGVmdDogMTBweDsgfVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MjVweCkge1xcbiAgbWFpbiB7XFxuICAgIHdpZHRoOiA5NSU7IH1cXG4gIC5hbGwtY2FyZHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWdhcDogMzBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gICAgcGFkZGluZzogMzBweCAwIDMwcHggMzBweDtcXG4gICAgd2lkdGg6IDk1LjV2dzsgfVxcbiAgLmRpc3BsYXktcmVjaXBlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gIC5yZWNpcGUtaW5zdHJ1Y3Rpb25zIHtcXG4gICAgbWFyZ2luLXRvcDogMDsgfSB9XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuYWxsLWNhcmRzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1nYXA6IDMwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIHBhZGRpbmc6IDMwcHggMCAzMHB4IDMwcHg7XFxuICAgIHdpZHRoOiA5NS41dnc7IH1cXG4gIC5kaXNwbGF5LXJlY2lwZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAuc2VhcmNoLWltYWdlIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfSB9XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XFxuICAubG93ZXItaGVhZGVyLFxcbiAgLm1haW4taGVhZGVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgLnNlYXJjaC1pbnB1dCB7XFxuICAgIG1pbi13aWR0aDogODB2dzsgfVxcbiAgLmFsbC1jYXJkcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtZ2FwOiAzMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xcbiAgICBwYWRkaW5nOiAzMHB4IDAgMzBweCAzMHB4O1xcbiAgICB3aWR0aDogOTUuNXZ3OyB9XFxuICAuY2FyZC1idXR0b24ge1xcbiAgICBoZWlnaHQ6IGF1dG87IH1cXG4gIC50by1jb29rIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgLmNhcmQge1xcbiAgICBtYXgtd2lkdGg6IDk1JTsgfSB9XFxuXCIsIFwiXCJdKTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuICdAbWVkaWEgJyArIGl0ZW1bMl0gKyAneycgKyBjb250ZW50ICsgJ30nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9ICcoJyArIGl0ZW1bMl0gKyAnKSBhbmQgKCcgKyBtZWRpYVF1ZXJ5ICsgJyknO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuICByZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufSIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsImNsYXNzIENvb2tib29rIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMucmVjaXBlcyA9IGRhdGE7XG4gIH1cblxuICBmaW5kUmVjaXBlcyhzZWFyY2hUZXh0KSB7XG4gICAgcmV0dXJuIHRoaXMucmVjaXBlcy5maWx0ZXIoKHJlY2lwZSk9PntcbiAgICAgIGxldCBpbmdyZWRpZW50TmFtZXMgPSByZWNpcGUuaW5ncmVkaWVudHMubWFwKChpbmdyZWRpZW50KT0+e1xuICAgICAgICByZXR1cm4gaW5ncmVkaWVudC5uYW1lXG4gICAgICB9KVxuICAgICAgcmV0dXJuIHJlY2lwZS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGV4dCkgfHxcbiAgICAgIHJlY2lwZS50YWdzLmluY2x1ZGVzKHNlYXJjaFRleHQpIHx8XG4gICAgICBpbmdyZWRpZW50TmFtZXMuaW5jbHVkZXMoc2VhcmNoVGV4dClcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvb2tib29rO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGVzLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGVzLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IFBhbnRyeSBmcm9tICcuL3BhbnRyeSc7XG5pbXBvcnQgUmVjaXBlIGZyb20gJy4vcmVjaXBlJztcbmltcG9ydCBVc2VyIGZyb20gJy4vdXNlcic7XG5pbXBvcnQgQ29va2Jvb2sgZnJvbSAnLi9jb29rYm9vayc7XG5cblxubGV0IGRvbVVwZGF0ZXMgPSB7XG5cbiAgdXNlcnM6IFt7fV0sXG4gIHJlY2lwZURhdGE6IFt7fV0sXG4gIGluZ3JlZGllbnRzRGF0YTogW3t9XSxcbiAgdXNlcjoge30sXG4gIGNvb2tib29rOiBudWxsLFxuXG4gIGdldFdoYXRzQ29va2luZ0RhdGE6ICgpID0+IHtcbiAgICBQcm9taXNlLmFsbChbXG4gICAgICBmZXRjaCgnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL3doYXRzLWNvb2tpbi8xOTExL3VzZXJzL3djVXNlcnNEYXRhJyksXG4gICAgICBmZXRjaCgnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL3doYXRzLWNvb2tpbi8xOTExL3JlY2lwZXMvcmVjaXBlRGF0YScpLFxuICAgICAgZmV0Y2goJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS93aGF0cy1jb29raW4vMTkxMS9pbmdyZWRpZW50cy9pbmdyZWRpZW50c0RhdGEnKVxuICAgIF0pXG4gICAgICAudGhlbihyZXNwb25zZXMgPT4gUHJvbWlzZS5hbGwocmVzcG9uc2VzLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpKSlcbiAgICAgIC50aGVuKHJlc3BvbnNlcyA9PiB7XG4gICAgICAgIGRvbVVwZGF0ZXMudXNlcnMgPSByZXNwb25zZXNbMF0ud2NVc2Vyc0RhdGE7XG4gICAgICAgIGRvbVVwZGF0ZXMucmVjaXBlRGF0YSA9IHJlc3BvbnNlc1sxXS5yZWNpcGVEYXRhO1xuICAgICAgICBkb21VcGRhdGVzLmluZ3JlZGllbnRzRGF0YSA9IHJlc3BvbnNlc1syXS5pbmdyZWRpZW50c0RhdGE7XG4gICAgICAgIGRvbVVwZGF0ZXMuY3JlYXRlRGF0YU1vZGVsKCk7XG4gICAgICAgIGRvbVVwZGF0ZXMudXBkYXRlRGlzcGxheSgpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXG4gIH0sXG5cbiAgY3JlYXRlRGF0YU1vZGVsOiAoKSA9PiB7XG4gICAgbGV0IHBhbnRyeSA9IG5ldyBQYW50cnkoZG9tVXBkYXRlcy51c2Vyc1swXS5wYW50cnkpO1xuICAgIGRvbVVwZGF0ZXMudXNlciA9IG5ldyBVc2VyKGRvbVVwZGF0ZXMudXNlcnNbMF0sIHBhbnRyeSwgZG9tVXBkYXRlcy5pbmdyZWRpZW50c0RhdGEpO1xuICAgIGxldCByZWNpcGVEZWNrID0gZG9tVXBkYXRlcy5yZWNpcGVEYXRhLm1hcChyZWNpcGUgPT4ge1xuICAgICAgcmV0dXJuIHJlY2lwZSA9IG5ldyBSZWNpcGUocmVjaXBlLCBkb21VcGRhdGVzLmluZ3JlZGllbnRzRGF0YSk7XG4gICAgfSlcbiAgICBkb21VcGRhdGVzLmNvb2tib29rID0gbmV3IENvb2tib29rKHJlY2lwZURlY2spO1xuICB9LFxuXG4gIHVwZGF0ZURpc3BsYXk6ICgpID0+IHtcbiAgICBkb21VcGRhdGVzLmdyZWV0VXNlcigpO1xuICAgIGRvbVVwZGF0ZXMucG9wdWxhdGVDYXJkcyhkb21VcGRhdGVzLmNvb2tib29rLnJlY2lwZXMpO1xuICB9LFxuXG4gIGdyZWV0VXNlcjogKCkgPT4ge1xuICAgIGNvbnN0IHdlbGNvbWVNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyZWV0aW5nJyk7XG4gICAgd2VsY29tZU1lc3NhZ2UuaW5uZXJUZXh0ID0gYFdlbGNvbWUgJHtkb21VcGRhdGVzLnVzZXIubmFtZX0hYDtcbiAgfSxcblxuICBwb3B1bGF0ZUNhcmRzOiAocmVjaXBlcykgPT4ge1xuICAgIGNvbnN0IGNhcmRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tc2VjdGlvbicpO1xuICAgIGNhcmRBcmVhLmNsYXNzTGlzdCA9ICdhbGwtY2FyZHMnO1xuICAgIGNhcmRBcmVhLmlubmVySFRNTCA9ICcnO1xuICAgIHJlY2lwZXMuZm9yRWFjaChyZWNpcGUgPT4ge1xuICAgICAgY2FyZEFyZWEuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgZG9tVXBkYXRlcy5jb25zdHJ1Y3RDYXJkKHJlY2lwZSkpXG4gICAgfSk7XG4gIH0sXG5cbiAgY29uc3RydWN0Q2FyZDogKHJlY2lwZSkgPT4ge1xuICAgIGxldCBjbGFzc0xpc3RcbiAgICBpZiAoZG9tVXBkYXRlcy51c2VyLmZhdm9yaXRlUmVjaXBlcy5pbmNsdWRlcyhyZWNpcGUpKSB7XG4gICAgICBjbGFzc0xpc3QgPSAnZmF2b3JpdGUgY2FyZC1idXR0b24gZmF2b3JpdGUtYWN0aXZlJ1xuICAgIH0gZWxzZSB7XG4gICAgICBjbGFzc0xpc3QgPSAnZmF2b3JpdGUgY2FyZC1idXR0b24nXG4gICAgfVxuICAgIHJldHVybiBgPGRpdiBjbGFzcz0nY2FyZCAke3JlY2lwZS5pZH0nPlxuICAgIDxoZWFkZXIgY2xhc3M9J2NhcmQtaGVhZGVyICR7cmVjaXBlLmlkfSc+XG4gICAgICA8bGFiZWwgZm9yPSdhZGQtYnV0dG9uJyBjbGFzcz0naGlkZGVuJz5DbGljayB0byBhZGQgcmVjaXBlPC9sYWJlbD5cbiAgICAgIDxidXR0b24gYXJpYS1sYWJlbD0nYWRkLWJ1dHRvbicgY2xhc3M9J2FkZC1idXR0b24gY2FyZC1idXR0b24gJHtyZWNpcGUuaWR9Jz5cbiAgICAgICAgPGltZyBjbGFzcz0nYWRkICR7cmVjaXBlLmlkfSBhZGQtYnV0dG9uJyBzcmM9J2h0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8zMi8zMjMzOS5zdmcnIGFsdD0nQWRkIHRvXG4gICAgICAgIHJlY2lwZXMgdG8gY29vayc+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxsYWJlbCBmb3I9J2Zhdm9yaXRlLWJ1dHRvbicgY2xhc3M9J2hpZGRlbic+Q2xpY2sgdG8gZmF2b3JpdGUgcmVjaXBlPC9sYWJlbD5cbiAgICAgIDxidXR0b24gYXJpYS1sYWJlbD0nZmF2b3JpdGUtYnV0dG9uJyBjbGFzcz0nJHtjbGFzc0xpc3R9IGZhdm9yaXRlJHtyZWNpcGUuaWR9ICR7cmVjaXBlLmlkfSc+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2hlYWRlcj5cbiAgICA8c3BhbiBjbGFzcz0ncmVjaXBlLW5hbWUgJHtyZWNpcGUuaWR9Jz4ke3JlY2lwZS5uYW1lfTwvc3Bhbj5cbiAgICAgIDxidXR0b24gYXJpYS1sYWJlbD0ncmVjaXBlLWluZm8nIGNsYXNzPSdjYXJkLXBpY3R1cmUgJHtyZWNpcGUuaWR9IHdyYXAnPlxuICAgICAgICA8aW1nIHRhYmluZGV4PScwJyBjbGFzcz0nY2FyZC1waWN0dXJlICR7cmVjaXBlLmlkfSdzcmM9JyR7cmVjaXBlLmltYWdlfScgYWx0PSdGb29kIGZyb20gcmVjaXBlJz5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PmBcbiAgfSxcblxuICBmaW5kU3BlY2lmaWNSZWNpcGU6IChldmVudCkgPT4ge1xuICAgIHJldHVybiBkb21VcGRhdGVzLmNvb2tib29rLnJlY2lwZXMuZmluZChyZWNpcGUgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMocmVjaXBlLmlkKSkge1xuICAgICAgICByZXR1cm4gcmVjaXBlO1xuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgZmF2b3JpdGVDYXJkOiAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBzaG93RmF2b3JpdGVzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpZXctZmF2b3JpdGVzJyk7XG4gICAgbGV0IHNwZWNpZmljUmVjaXBlID0gZG9tVXBkYXRlcy5maW5kU3BlY2lmaWNSZWNpcGUoZXZlbnQpO1xuICAgIGlmICghZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZmF2b3JpdGUtYWN0aXZlJykpIHtcbiAgICAgIHNob3dGYXZvcml0ZXNCdXR0b24uaW5uZXJIVE1MID0gJ1ZpZXcgRmF2b3JpdGVzJztcbiAgICAgIGRvbVVwZGF0ZXMudXNlci5hZGRUb0Zhdm9yaXRlcyhzcGVjaWZpY1JlY2lwZSk7XG4gICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYXZvcml0ZS1hY3RpdmUnKSkge1xuICAgICAgZG9tVXBkYXRlcy51c2VyLnJlbW92ZUZyb21GYXZvcml0ZXMoc3BlY2lmaWNSZWNpcGUpXG4gICAgfVxuICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdmYXZvcml0ZS1hY3RpdmUnKTtcbiAgfSxcblxuICB2aWV3RmF2b3JpdGVzOiAoKSA9PiB7XG4gICAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1hcmVhJyk7XG4gICAgc2VhcmNoQmFyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgY29uc3Qgc2hvd0Zhdm9yaXRlc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aWV3LWZhdm9yaXRlcycpO1xuICAgIGNvbnN0IGNhcmRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tc2VjdGlvbicpO1xuICAgIGNhcmRBcmVhLmNsYXNzTGlzdCA9ICdhbGwtY2FyZHMnO1xuICAgIGlmICghZG9tVXBkYXRlcy51c2VyLmZhdm9yaXRlUmVjaXBlcy5sZW5ndGgpIHtcbiAgICAgIHNob3dGYXZvcml0ZXNCdXR0b24uaW5uZXJIVE1MID0gJ1lvdSBoYXZlIG5vIGZhdm9yaXRlcyEnO1xuICAgICAgZG9tVXBkYXRlcy5wb3B1bGF0ZUNhcmRzKGRvbVVwZGF0ZXMuY29va2Jvb2sucmVjaXBlcyk7XG4gICAgICByZXR1cm5cbiAgICB9IGVsc2Uge1xuICAgICAgc2hvd0Zhdm9yaXRlc0J1dHRvbi5pbm5lckhUTUwgPSAnUmVmcmVzaCBGYXZvcml0ZXMnXG4gICAgICBjYXJkQXJlYS5pbm5lckhUTUwgPSAnJztcbiAgICAgIGRvbVVwZGF0ZXMudXNlci5mYXZvcml0ZVJlY2lwZXMuZm9yRWFjaChyZWNpcGUgPT4ge1xuICAgICAgICBjYXJkQXJlYS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBkb21VcGRhdGVzLmNvbnN0cnVjdENhcmQocmVjaXBlKSlcbiAgICAgIH0pXG4gICAgfVxuICB9LFxuXG4gIGFkZFRvVG9Db29rOiAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBzaG93VG9Db29rQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWNvb2snKTtcbiAgICBsZXQgc3BlY2lmaWNSZWNpcGUgPSBkb21VcGRhdGVzLmZpbmRTcGVjaWZpY1JlY2lwZShldmVudCk7XG4gICAgaWYgKCFldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGQtYWN0aXZlJykpIHtcbiAgICAgIHNob3dUb0Nvb2tCdXR0b24uaW5uZXJUZXh0ID0gJ1RvIENvb2snXG4gICAgICBhbGVydChkb21VcGRhdGVzLnVzZXIuY2hlY2tQYW50cnlJbmdyZWRpZW50cyhzcGVjaWZpY1JlY2lwZSkpO1xuICAgICAgZG9tVXBkYXRlcy51c2VyLmFkZFRvUmVjaXBlc1RvQ29vayhzcGVjaWZpY1JlY2lwZSk7XG4gICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGQtYWN0aXZlJykpIHtcbiAgICAgIGRvbVVwZGF0ZXMudXNlci5yZW1vdmVGcm9tUmVjaXBlc1RvQ29vayhzcGVjaWZpY1JlY2lwZSlcbiAgICB9XG4gICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2FkZC1hY3RpdmUnKTtcbiAgfSxcblxuICBkaXNwbGF5VG9Db29rQ2FyZHM6ICgpID0+IHtcbiAgICBjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWFyZWEnKTtcbiAgICBzZWFyY2hCYXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICBjb25zdCBjYXJkQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLXNlY3Rpb24nKTtcbiAgICBjYXJkQXJlYS5jbGFzc0xpc3QgPSAnJztcbiAgICBjYXJkQXJlYS5pbm5lckhUTUwgPVxuICAgICAgYDxzZWN0aW9uIGNsYXNzPSd0by1jb29rJz5cbiAgICAgICAgPGgxIGNsYXNzPSd0by1jb29rLWdyZWV0aW5nJz5SZWNpcGVzIFRvIENvb2s8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkLXNlY3Rpb24gYWxsLWNhcmRzJz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+YFxuICAgIGxldCBjYXJkU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLXNlY3Rpb24nKVxuICAgIGRvbVVwZGF0ZXMudXNlci5yZWNpcGVzVG9Db29rLmZvckVhY2gocmVjaXBlID0+IHtcbiAgICAgIGxldCB2YWx1ZXMgPSBkb21VcGRhdGVzLnVzZXIuY2hlY2tIb3dNdWNoTW9yZShyZWNpcGUpLm1hcChvYmogPT4ge1xuICAgICAgICByZXR1cm4gYCR7b2JqLnF1YW50aXR5TmVlZGVkfSAke29iai51bml0fSBtb3JlICR7b2JqLm5hbWV9YDtcbiAgICAgIH0pO1xuICAgICAgbGV0IG5lZWRlZENvc3QgPSBkb21VcGRhdGVzLnVzZXIuY2hlY2tIb3dNdWNoTW9yZShyZWNpcGUpLnJlZHVjZSgodG90YWwsIGluZ3JlZGllbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIHRvdGFsICs9IGluZ3JlZGllbnQuY29zdDtcbiAgICAgIH0sIDApO1xuICAgICAgY2FyZFNlY3Rpb24uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgPGRpdiBjbGFzcz0nY2FyZCAke3JlY2lwZS5pZH0nPlxuICAgIDxoZWFkZXIgY2xhc3M9J2NhcmQtaGVhZGVyICR7cmVjaXBlLmlkfSc+XG4gICAgICA8bGFiZWwgZm9yPSdjbG9zZS1idXR0b24nIGNsYXNzPSdoaWRkZW4nPjwvbGFiZWw+XG4gICAgICA8YnV0dG9uIGFyaWEtbGFiZWw9J2Nsb3NlLWJ1dHRvbicgY2xhc3M9J2Nsb3NlLWJ1dHRvbiBjYXJkLWJ1dHRvbiAke3JlY2lwZS5pZH0nPlxuICAgICAgICA8aW1nIGNsYXNzPSdjbG9zZS1idXR0b24gJHtyZWNpcGUuaWR9JyBzcmM9J2h0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9zdmcvc3RhdGljL2ljb25zL3N2Zy80NDYvNDQ2MDkxLnN2ZycgYWx0PSdyZW1vdmUgZnJvbSByZWNpcGVzIHRvIGNvb2snPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8bGFiZWwgZm9yPSdmYXZvcml0ZS1idXR0b24nIGNsYXNzPSdoaWRkZW4nPkNsaWNrIHRvIGZhdm9yaXRlIHJlY2lwZTwvbGFiZWw+XG4gICAgICA8YnV0dG9uIGFyaWEtbGFiZWw9J2Zhdm9yaXRlLWJ1dHRvbicgY2xhc3M9J2Zhdm9yaXRlIGNhcmQtYnV0dG9uIGZhdm9yaXRlJHtyZWNpcGUuaWR9ICR7cmVjaXBlLmlkfSc+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2hlYWRlcj5cbiAgICAgIDxoMz4ke3JlY2lwZS5uYW1lfTwvaDM+XG4gICAgICA8aW1nIHRhYmluZGV4PScwJyBjbGFzcz0nY2FyZC1waWN0dXJlICR7cmVjaXBlLmlkfSdcbiAgICAgIHNyYz0nJHtyZWNpcGUuaW1hZ2V9JyBhbHQ9J0Zvb2QgZnJvbSByZWNpcGUnPlxuICAgICAgPGRpdiBjbGFzcyA9IFwicGFudHJ5LWJ1dHRvbnNcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgbmFtZT1cIkFkZCBOZWVkZWQgSW5ncmVkaWVudHNcIiBjbGFzcz1cImJvdWdodC1pbmdyZWRpZW50cyBib3VnaHQtaW5ncmVkaWVudHMke3JlY2lwZS5pZH0gJHtyZWNpcGUuaWR9XCI+QWRkIE5lZWRlZCBJbmdyZWRpZW50czwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBuYW1lPVwiSGF2ZSBDb29rZWRcIiBjbGFzcz1cImhhdmUtY29va2VkIGhhdmUtY29va2VkJHtyZWNpcGUuaWR9ICR7cmVjaXBlLmlkfVwiPkhhdmUgQ29va2VkPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwIGNsYXNzPSduZWVkZWQtaW5ncyc+SW5ncmVkaWVudHMgU3RpbGwgTmVlZGVkOjwvcD5cbiAgICAgIDx1bCA+XG4gICAgICA8bGk+JHt2YWx1ZXMuam9pbignPC9saT48bGk+Jyl9PC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8cCBjbGFzcz0naW5nLWNvc3QnPkNvc3QgdG8gU3RpbGwgR2V0OiQke25lZWRlZENvc3R9PC9wPlxuICAgIDwvZGl2PmApO1xuICAgIH0pO1xuICB9LFxuXG4gIHNob3dUb0Nvb2tSZWNpcGVzOiAoKSA9PiB7XG4gICAgY29uc3Qgc2hvd1RvQ29va0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1jb29rJyk7XG4gICAgaWYgKCFkb21VcGRhdGVzLnVzZXIucmVjaXBlc1RvQ29vay5sZW5ndGgpIHtcbiAgICAgIHNob3dUb0Nvb2tCdXR0b24uaW5uZXJUZXh0ID0gJ1lvdSBoYXZlIG5vIHNhdmVkIFJlY2lwZXMhJztcbiAgICAgIGRvbVVwZGF0ZXMucG9wdWxhdGVDYXJkcyhkb21VcGRhdGVzLmNvb2tib29rLnJlY2lwZXMpO1xuICAgICAgcmV0dXJuXG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbVVwZGF0ZXMuZGlzcGxheVRvQ29va0NhcmRzKCk7XG4gICAgfVxuICB9LFxuXG4gIHJlbW92ZUZyb21Ub0Nvb2s6ICgpID0+IHtcbiAgICBsZXQgc3BlY2lmaWNSZWNpcGUgPSBkb21VcGRhdGVzLmNvb2tib29rLnJlY2lwZXMuZmluZChyZWNpcGUgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMocmVjaXBlLmlkKSkge1xuICAgICAgICByZXR1cm4gcmVjaXBlO1xuICAgICAgfVxuICAgIH0pXG4gICAgZG9tVXBkYXRlcy51c2VyLnJlbW92ZUZyb21SZWNpcGVzVG9Db29rKHNwZWNpZmljUmVjaXBlKTtcbiAgICBkb21VcGRhdGVzLmRpc3BsYXlUb0Nvb2tDYXJkcygpO1xuICB9LFxuXG4gIGRpc3BsYXlEaXJlY3Rpb25zOiAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWFyZWEnKTtcbiAgICBzZWFyY2hCYXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICBjb25zdCBjYXJkQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLXNlY3Rpb24nKTtcbiAgICBjYXJkQXJlYS5jbGFzc0xpc3QgPSAncmVjaXBlLWRpcmVjdGlvbnMnO1xuICAgIGxldCBzcGVjaWZpY1JlY2lwZSA9IGRvbVVwZGF0ZXMuZmluZFNwZWNpZmljUmVjaXBlKGV2ZW50KTtcbiAgICBsZXQgY29zdCA9IHNwZWNpZmljUmVjaXBlLmNhbGN1bGF0ZUNvc3QoKTtcbiAgICBjYXJkQXJlYS5pbm5lckhUTUwgPSAnJztcbiAgICBsZXQgbmVlZGVkSW5ncmVkaWVudHMgPSBbXTtcbiAgICBzcGVjaWZpY1JlY2lwZS5pbmdyZWRpZW50cy5mb3JFYWNoKGluZ3JlZGllbnQgPT4ge1xuICAgICAgbGV0IG5hbWUgPSBzcGVjaWZpY1JlY2lwZS5pbmdyZWRpZW50c0RhdGEuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGluZ3JlZGllbnQuaWQpLm5hbWVcbiAgICAgIG5lZWRlZEluZ3JlZGllbnRzLnB1c2goYCR7aW5ncmVkaWVudC5xdWFudGl0eS5hbW91bnQudG9GaXhlZCgyKX0gJHtpbmdyZWRpZW50LnF1YW50aXR5LnVuaXR9ICR7bmFtZX1gKVxuICAgIH0pXG4gICAgbGV0IG5lZWRlZFN0ZXBzID0gW107XG4gICAgc3BlY2lmaWNSZWNpcGUuaW5zdHJ1Y3Rpb25zLmZvckVhY2goc3RlcCA9PiB7XG4gICAgICBuZWVkZWRTdGVwcy5wdXNoKGAke3N0ZXAubnVtYmVyfS4gJHtzdGVwLmluc3RydWN0aW9ufSBgKVxuICAgIH0pXG4gICAgY2FyZEFyZWEuaW5uZXJIVE1MID0gYDxzZWN0aW9uIGNsYXNzPSdkaXNwbGF5LXJlY2lwZSc+XG4gICAgPGRpdiBjbGFzcz0nZGlzcGxheS1yZWNpcGUtaW5mbyc+XG4gICAgICA8aDM+JHtzcGVjaWZpY1JlY2lwZS5uYW1lfTwvaDM+XG4gICAgICA8aW1nIGNsYXNzPSdjYXJkLXBpY3R1cmUnIHNyYz0nJHtzcGVjaWZpY1JlY2lwZS5pbWFnZX0nIGFsdD0nUmVjaXBlIGltYWdlIGZvciAke3NwZWNpZmljUmVjaXBlLm5hbWV9Jz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPSdyZWNpcGUtaW5ncmVkaWVudHMnPlxuICAgIDxoNSBjbGFzcz0ncmVjaXBlLWluZ3JlZGllbnRzLXRpdGxlJz5Zb3Ugd2lsbCBuZWVkOiA8L2g1PlxuICAgIDx1bD5cbiAgICA8bGk+JHtuZWVkZWRJbmdyZWRpZW50cy5qb2luKCc8L2xpPjxsaT4nKX08L2xpPlxuICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz0ncmVjaXBlLWluc3RydWN0aW9ucyc+XG4gICAgPGg1Pkluc3RydWN0aW9uczogPC9oNT5cbiAgICA8dWwgY2xhc3M9J2luc3RydWN0aW9uLWxpc3QnIHN0eWxlPSdsaXN0LXN0eWxlLXR5cGU6bm9uZTsnPlxuICAgIDxsaT4ke25lZWRlZFN0ZXBzLmpvaW4oJzwvbGk+PGxpPicpfTwvbGk+XG4gICAgPC91bD5cbiAgICA8aDU+VGhpcyByZWNpcGUgZ2VuZXJhbGx5IGNvc3RzOiAkJHtjb3N0fSA8L2g1PlxuICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5gO1xuICB9LFxuXG4gIGZpbHRlclJlY2lwZXM6ICgpID0+IHtcbiAgICBjb25zdCBjYXJkQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtY2FyZHMnKTtcbiAgICB2YXIgc2VhcmNoVGVybSA9IGV2ZW50LnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChzZWFyY2hUZXJtICE9PSAnJykge1xuICAgICAgY2FyZEFyZWEuaW5uZXJIVE1MID0gJyc7XG4gICAgICBkb21VcGRhdGVzLmRpc3BsYXlGaWx0ZXJlZFJlY2lwZXMoc2VhcmNoVGVybSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbVVwZGF0ZXMucG9wdWxhdGVDYXJkcyhkb21VcGRhdGVzLmNvb2tib29rLnJlY2lwZXMpO1xuICAgIH1cbiAgfSxcblxuICBkaXNwbGF5RmlsdGVyZWRSZWNpcGVzOiAoc2VhcmNoVGVybSkgPT4ge1xuICAgIGRvbVVwZGF0ZXMucG9wdWxhdGVDYXJkcyhkb21VcGRhdGVzLmNvb2tib29rLmZpbmRSZWNpcGVzKHNlYXJjaFRlcm0pKTtcbiAgfSxcblxuICBoYXZlQ29va2VkUmVjaXBlOiAoZXZlbnQpID0+IHtcbiAgICBsZXQgc3BlY2lmaWNSZWNpcGUgPSBkb21VcGRhdGVzLmZpbmRTcGVjaWZpY1JlY2lwZShldmVudCk7XG4gICAgY29uc3QgaGF2ZUNvb2tlZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5oYXZlLWNvb2tlZCR7c3BlY2lmaWNSZWNpcGUuaWR9YCk7XG4gICAgaWYgKGRvbVVwZGF0ZXMudXNlci5jaGVja1BhbnRyeUluZ3JlZGllbnRzKHNwZWNpZmljUmVjaXBlKSAhPT0gJ1lvdSBoYXZlIHRoZSBpbmdyZWRpZW50cyEnKSB7XG4gICAgICBhbGVydChcIllvdSBkb24ndCBoYXZlIHdoYXQgeW91IG5lZWQgeWV0XCIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbVVwZGF0ZXMudXNlci5yZW1vdmVQYW50cnlJbmdyaWRpZW50cyhzcGVjaWZpY1JlY2lwZSlcbiAgICAgIGhhdmVDb29rZWRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgfSxcblxuICBidXlJbmdyZWRpZW50czogKGV2ZW50KSA9PiB7XG4gICAgbGV0IHNwZWNpZmljUmVjaXBlID0gZG9tVXBkYXRlcy5maW5kU3BlY2lmaWNSZWNpcGUoZXZlbnQpO1xuICAgIGNvbnN0IGJ1eUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5ib3VnaHQtaW5ncmVkaWVudHMke3NwZWNpZmljUmVjaXBlLmlkfWApXG4gICAgZG9tVXBkYXRlcy51c2VyLmFkZE5lZWRlZFBhbnRyeUluZ3JpZGllbnRzKHNwZWNpZmljUmVjaXBlKVxuICAgIGJ1eUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gIH0sXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0ICBkb21VcGRhdGVzO1xuIiwiY2xhc3MgUGFudHJ5IHtcbiAgY29uc3RydWN0b3IodXNlclBhbnRyeSkge1xuICAgIHRoaXMudXNlclBhbnRyeSA9IHVzZXJQYW50cnk7XG4gICAgdGhpcy51c2VySW5ncmVkaWVudHMgPSB7fTtcbiAgfVxuXG4gIGNvbXBpbGVQYW50cnkoKSB7XG4gICAgdGhpcy51c2VySW5ncmVkaWVudHMgPSB0aGlzLnVzZXJQYW50cnkucmVkdWNlKChwYW50cnksIGluZ3JlZGllbnQpID0+IHtcbiAgICAgIGlmICghcGFudHJ5W2luZ3JlZGllbnQuaW5ncmVkaWVudF0pIHtcbiAgICAgICAgcGFudHJ5W2luZ3JlZGllbnQuaW5ncmVkaWVudF0gPSBpbmdyZWRpZW50LmFtb3VudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhbnRyeVtpbmdyZWRpZW50LmluZ3JlZGllbnRdICs9IGluZ3JlZGllbnQuYW1vdW50O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHBhbnRyeTtcbiAgICB9LCB7fSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFudHJ5O1xuIiwiY2xhc3MgUmVjaXBlIHtcbiAgY29uc3RydWN0b3IocmVjaXBlLCBpbmdyZWRpZW50c0RhdGEpIHtcbiAgICB0aGlzLm5hbWUgPSByZWNpcGUubmFtZTtcbiAgICB0aGlzLmlkID0gcmVjaXBlLmlkO1xuICAgIHRoaXMuaW5ncmVkaWVudHMgPSByZWNpcGUuaW5ncmVkaWVudHM7XG4gICAgdGhpcy5pbnN0cnVjdGlvbnMgPSByZWNpcGUuaW5zdHJ1Y3Rpb25zO1xuICAgIHRoaXMudGFncyA9IHJlY2lwZS50YWdzO1xuICAgIHRoaXMuaW5ncmVkaWVudHNEYXRhID0gaW5ncmVkaWVudHNEYXRhO1xuICAgIHRoaXMuaW1hZ2UgPSByZWNpcGUuaW1hZ2U7XG4gIH1cblxuICBjYWxjdWxhdGVDb3N0KCkge1xuICAgIGxldCBjb3N0Q291bnRlciA9IDA7XG4gICAgdGhpcy5pbmdyZWRpZW50cy5mb3JFYWNoKGluZ3JlZGllbnQgPT4ge1xuICAgICAgdGhpcy5pbmdyZWRpZW50c0RhdGEuZmluZChzcGVjaWZpY0luZ3JlZGllbnQgPT4ge1xuICAgICAgICBpZiAoc3BlY2lmaWNJbmdyZWRpZW50LmlkID09PSBpbmdyZWRpZW50LmlkKSB7XG4gICAgICAgICAgY29zdENvdW50ZXIgKz0gKE51bWJlcihzcGVjaWZpY0luZ3JlZGllbnQuZXN0aW1hdGVkQ29zdEluQ2VudHMpICpcbiAgICAgICAgICBOdW1iZXIoaW5ncmVkaWVudC5xdWFudGl0eS5hbW91bnQpKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pO1xuICAgIHJldHVybiBwYXJzZUZsb2F0KChjb3N0Q291bnRlciAvIDEwMCkudG9GaXhlZCgyKSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWNpcGU7XG4iLCJpbXBvcnQgJy4vY3NzL3N0eWxlcy5zY3NzJztcblxuaW1wb3J0IGRvbVVwZGF0ZXMgZnJvbSAnLi9kb21VcGRhdGVzJztcblxuY29uc3Qgc2hvd0Zhdm9yaXRlc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aWV3LWZhdm9yaXRlcycpO1xuY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lJylcbmNvbnN0IGNhcmRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1jYXJkcycpO1xuY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1pbnB1dCcpO1xuY29uc3Qgc2hvd1RvQ29va0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1jb29rJyk7XG5cbmNvbnN0IGNhcmRCdXR0b25Db25kaXRpb25hbHMgPSAoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Zhdm9yaXRlJykpIHtcbiAgICBkb21VcGRhdGVzLmZhdm9yaXRlQ2FyZChldmVudCk7XG4gIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWRkLWJ1dHRvbicpKSB7XG4gICAgZG9tVXBkYXRlcy5hZGRUb1RvQ29vayhldmVudCk7XG4gIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2FyZC1waWN0dXJlJykpIHtcbiAgICBkb21VcGRhdGVzLmRpc3BsYXlEaXJlY3Rpb25zKGV2ZW50KTtcbiAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdob21lJykpIHtcbiAgICBjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWFyZWEnKTtcbiAgICBzZWFyY2hCYXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICBzaG93VG9Db29rQnV0dG9uLmlubmVySFRNTCA9ICdUbyBDb29rJztcbiAgICBzaG93RmF2b3JpdGVzQnV0dG9uLmlubmVySFRNTCA9ICdWaWV3IEZhdm9yaXRlcyc7XG4gICAgZG9tVXBkYXRlcy5wb3B1bGF0ZUNhcmRzKGRvbVVwZGF0ZXMuY29va2Jvb2sucmVjaXBlcyk7XG4gIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2xvc2UtYnV0dG9uJykpIHtcbiAgICBkb21VcGRhdGVzLnJlbW92ZUZyb21Ub0Nvb2soZXZlbnQpO1xuICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2hhdmUtY29va2VkJykpIHtcbiAgICBkb21VcGRhdGVzLmhhdmVDb29rZWRSZWNpcGUoZXZlbnQpO1xuICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2JvdWdodC1pbmdyZWRpZW50cycpKSB7XG4gICAgZG9tVXBkYXRlcy5idXlJbmdyZWRpZW50cyhldmVudCk7XG4gIH1cbn1cblxud2luZG93Lm9ubG9hZCA9IGRvbVVwZGF0ZXMuZ2V0V2hhdHNDb29raW5nRGF0YSgpXG5ob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FyZEJ1dHRvbkNvbmRpdGlvbmFscyk7XG5jYXJkQXJlYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhcmRCdXR0b25Db25kaXRpb25hbHMpO1xuc2hvd0Zhdm9yaXRlc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRvbVVwZGF0ZXMudmlld0Zhdm9yaXRlcyk7XG5zaG93VG9Db29rQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZG9tVXBkYXRlcy5zaG93VG9Db29rUmVjaXBlcyk7XG5zZWFyY2hCYXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBkb21VcGRhdGVzLmZpbHRlclJlY2lwZXMpO1xuIiwiaW1wb3J0IFBhbnRyeSBmcm9tICcuL3BhbnRyeSc7XG5cbmNsYXNzIFVzZXIge1xuICBjb25zdHJ1Y3Rvcih1c2VyLCBwYW50cnksIGluZ3JlZGllbnRzRGF0YSkge1xuICAgIHRoaXMuaWQgPSB1c2VyLmlkO1xuICAgIHRoaXMubmFtZSA9IHVzZXIubmFtZTtcbiAgICB0aGlzLnBhbnRyeSA9IHBhbnRyeTtcbiAgICB0aGlzLmZhdm9yaXRlUmVjaXBlcyA9IFtdO1xuICAgIHRoaXMucmVjaXBlc1RvQ29vayA9IFtdO1xuICAgIHRoaXMuaW5ncmVkaWVudHNEYXRhID0gaW5ncmVkaWVudHNEYXRhO1xuICB9XG5cbiAgYWRkVG9GYXZvcml0ZXMocmVjaXBlKSB7XG4gICAgaWYgKCF0aGlzLmZhdm9yaXRlUmVjaXBlcy5pbmNsdWRlcyhyZWNpcGUpKSB7XG4gICAgICB0aGlzLmZhdm9yaXRlUmVjaXBlcy5wdXNoKHJlY2lwZSk7XG4gICAgfVxuICB9XG5cbiAgYWRkVG9SZWNpcGVzVG9Db29rKHJlY2lwZSkge1xuICAgIGlmICghdGhpcy5yZWNpcGVzVG9Db29rLmluY2x1ZGVzKHJlY2lwZSkpIHtcbiAgICAgIHRoaXMucmVjaXBlc1RvQ29vay5wdXNoKHJlY2lwZSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlRnJvbVJlY2lwZXNUb0Nvb2socmVjaXBlKSB7XG4gICAgY29uc3QgaSA9IHRoaXMucmVjaXBlc1RvQ29vay5pbmRleE9mKHJlY2lwZSk7XG4gICAgdGhpcy5yZWNpcGVzVG9Db29rLnNwbGljZShpLCAxKTtcbiAgfVxuXG4gIHJlbW92ZVBhbnRyeUluZ3JpZGllbnRzKHJlY2lwZSkge1xuICAgIHJlY2lwZS5pbmdyZWRpZW50cy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBmZXRjaCgnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL3doYXRzLWNvb2tpbi8xOTExL3VzZXJzL3djVXNlcnNEYXRhJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIFwidXNlcklEXCI6IHRoaXMuaWQsXG4gICAgICAgICAgXCJpbmdyZWRpZW50SURcIjogaXRlbS5pZCxcbiAgICAgICAgICBcImluZ3JlZGllbnRNb2RpZmljYXRpb25cIjogLShpdGVtLnF1YW50aXR5LmFtb3VudClcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4odGhpcy51cGRhdGVVc2VyUGFudHJ5KCkpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICAgICAgc2V0VGltZW91dCh0aGlzLnVwZGF0ZVVzZXJQYW50cnkoKSwgNDAwMClcbiAgICB9KTtcblxuICB9XG5cbiAgYWRkTmVlZGVkUGFudHJ5SW5ncmlkaWVudHMocmVjaXBlKSB7XG4gICAgdGhpcy5jaGVja0hvd011Y2hNb3JlKHJlY2lwZSkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgZmV0Y2goJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS93aGF0cy1jb29raW4vMTkxMS91c2Vycy93Y1VzZXJzRGF0YScsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBcInVzZXJJRFwiOiB0aGlzLmlkLFxuICAgICAgICAgIFwiaW5ncmVkaWVudElEXCI6IGl0ZW0uaWQsXG4gICAgICAgICAgXCJpbmdyZWRpZW50TW9kaWZpY2F0aW9uXCI6IGl0ZW0ucXVhbnRpdHlOZWVkZWRcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4odGhpcy51cGRhdGVVc2VyUGFudHJ5KCkpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlVXNlclBhbnRyeSgpIHtcbiAgICBmZXRjaCgnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL3doYXRzLWNvb2tpbi8xOTExL3VzZXJzL3djVXNlcnNEYXRhJylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgbGV0IHBhbnRyeSA9IG5ldyBQYW50cnkocmVzcG9uc2Uud2NVc2Vyc0RhdGFbdGhpcy5pZCAtIDFdLnBhbnRyeSlcbiAgICAgICAgdGhpcy5wYW50cnkgPSBwYW50cnlcbiAgICAgICAgdGhpcy5wYW50cnkuY29tcGlsZVBhbnRyeSh0aGlzLmluZ3JlZGllbnRzRGF0YSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxuICB9XG5cbiAgcmVtb3ZlRnJvbUZhdm9yaXRlcyhyZWNpcGUpIHtcbiAgICBjb25zdCBpID0gdGhpcy5mYXZvcml0ZVJlY2lwZXMuaW5kZXhPZihyZWNpcGUpO1xuICAgIHRoaXMuZmF2b3JpdGVSZWNpcGVzLnNwbGljZShpLCAxKTtcbiAgfVxuXG4gIGZpbHRlckZhdm9yaXRlcyh0YWcpIHtcbiAgICByZXR1cm4gdGhpcy5mYXZvcml0ZVJlY2lwZXMuZmlsdGVyKHJlY2lwZSA9PiB7XG4gICAgICByZXR1cm4gcmVjaXBlLnRhZ3MuaW5jbHVkZXModGFnKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZpbmRGYXZvcml0ZXMoc3RyZ1RvU3JjaCkge1xuICAgIHJldHVybiB0aGlzLmZhdm9yaXRlUmVjaXBlcy5maWx0ZXIocmVjaXBlID0+IHtcbiAgICAgIHJldHVybiByZWNpcGUubmFtZS5pbmNsdWRlcyhzdHJnVG9TcmNoKSB8fFxuICAgICAgICByZWNpcGUuaW5ncmVkaWVudHMuZmluZChpbmdyZWRpZW50ID0+IHtcbiAgICAgICAgICByZXR1cm4gaW5ncmVkaWVudC5uYW1lLmluY2x1ZGVzKHN0cmdUb1NyY2gpXG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZmluZE1pc3NpbmdJbmdyZWRpZW50cyhyZWNpcGUpIHtcbiAgICByZXR1cm4gcmVjaXBlLmluZ3JlZGllbnRzLnJlZHVjZSgobm90UHJlc2VudCwgaW5ncmVkaWVudCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnBhbnRyeS51c2VySW5ncmVkaWVudHNbaW5ncmVkaWVudC5pZF0gfHwgaW5ncmVkaWVudC5xdWFudGl0eS5hbW91bnQgPiB0aGlzLnBhbnRyeS51c2VySW5ncmVkaWVudHNbaW5ncmVkaWVudC5pZF0pIHtcbiAgICAgICAgbm90UHJlc2VudC5wdXNoKGluZ3JlZGllbnQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5vdFByZXNlbnQ7XG4gICAgfSwgW10pO1xuICB9XG5cbiAgY2hlY2tQYW50cnlJbmdyZWRpZW50cyhyZWNpcGUpIHtcbiAgICB0aGlzLnBhbnRyeS5jb21waWxlUGFudHJ5KHRoaXMuaW5ncmVkaWVudHNEYXRhKTtcbiAgICBsZXQgbWlzc2luZ0luZ3JlZGllbnRzID0gdGhpcy5maW5kTWlzc2luZ0luZ3JlZGllbnRzKHJlY2lwZSlcbiAgICBpZiAobWlzc2luZ0luZ3JlZGllbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuICdZb3UgaGF2ZSB0aGUgaW5ncmVkaWVudHMhJztcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IG1pc3NpbmcgPSBtaXNzaW5nSW5ncmVkaWVudHMubGVuZ3RoO1xuICAgICAgcmV0dXJuIGBZb3Ugc3RpbGwgbmVlZCAke21pc3Npbmd9IG1vcmUgaW5ncmVkaWVudHMuYDtcbiAgICB9XG4gIH1cblxuICBjaGVja0hvd011Y2hNb3JlKHJlY2lwZSkge1xuICAgIGxldCBtaXNzaW5nSW5ncmVkaWVudHMgPSB0aGlzLmZpbmRNaXNzaW5nSW5ncmVkaWVudHMocmVjaXBlKTtcbiAgICBsZXQgZGlmZmVyZW5jZSA9IG1pc3NpbmdJbmdyZWRpZW50cy5tYXAoaW5ncmVkaWVudCA9PiB7XG4gICAgICBsZXQgbmFtZSA9IHJlY2lwZS5pbmdyZWRpZW50c0RhdGEuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGluZ3JlZGllbnQuaWQpO1xuICAgICAgbGV0IG5lZWRlZEluZyA9IHtcbiAgICAgICAgaWQ6IGluZ3JlZGllbnQuaWQsXG4gICAgICAgIGNvc3Q6IDAsXG4gICAgICAgIG5hbWU6IG5hbWUubmFtZSxcbiAgICAgICAgdW5pdDogaW5ncmVkaWVudC5xdWFudGl0eS51bml0LFxuICAgICAgICBxdWFudGl0eU5lZWRlZDogcGFyc2VGbG9hdChpbmdyZWRpZW50LnF1YW50aXR5LmFtb3VudC50b0ZpeGVkKDIpKVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMucGFudHJ5LnVzZXJJbmdyZWRpZW50c1tpbmdyZWRpZW50LmlkXSkge1xuICAgICAgICBuZWVkZWRJbmcucXVhbnRpdHlOZWVkZWQgPSBwYXJzZUZsb2F0KGluZ3JlZGllbnQucXVhbnRpdHkuYW1vdW50IC0gdGhpcy5wYW50cnkudXNlckluZ3JlZGllbnRzW2luZ3JlZGllbnQuaWRdLnRvRml4ZWQoMikpXG4gICAgICB9XG4gICAgICBsZXQgaW5ncmVkaWVudEl0ZW0gPSByZWNpcGUuaW5ncmVkaWVudHNEYXRhLmZpbmQoaXRlbSA9PiBpbmdyZWRpZW50LmlkID09PSBpdGVtLmlkKVxuICAgICAgbmVlZGVkSW5nLmNvc3QgPSAobmVlZGVkSW5nLnF1YW50aXR5TmVlZGVkICogaW5ncmVkaWVudEl0ZW0uZXN0aW1hdGVkQ29zdEluQ2VudHMpIC8gMTAwO1xuICAgICAgcmV0dXJuIG5lZWRlZEluZztcbiAgICB9KVxuICAgIHJldHVybiBkaWZmZXJlbmNlO1xuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=