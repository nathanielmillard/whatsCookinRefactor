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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb29rYm9vay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3N0eWxlcy5zY3NzPzEzYjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbVVwZGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVjaXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy91c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FB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QSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0EsS0FBSyxLQUF3QyxFQUFFLEVBRTdDOztBQUVGLFFBQVEsc0JBQWlCO0FBQ3pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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XHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3NTE1QztcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3OyB9XFxuXFxuYm9keSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiBhdXRvOyB9XFxuXFxubWFpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc1MTVDO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG5cXG4ubWFpbi1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFQkY1RUU7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwOyB9XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyNTUlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIHdpZHRoOiAzMCU7IH1cXG5cXG5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDEwcHg7IH1cXG5cXG4ubmF2QnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMTMwJTtcXG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJGNUVFO1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDAwO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzAwMDtcXG4gIG1hcmdpbjogMSUgMjBweCAxJSAxJTsgfVxcbiAgLm5hdkJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZmYyZGE7IH1cXG4gIC5uYXZCdXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0MzQzJDNjsgfVxcblxcbi5sb3dlci1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7IH1cXG5cXG4uZ3JlZXRpbmcge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgY29sb3I6ICNFQkY1RUU7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4OyB9XFxuXFxuLnNlYXJjaC1hcmVhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdzsgfVxcblxcbi5zZWFyY2gtYmFyIHtcXG4gIG1heC1oZWlnaHQ6IDZ2aDtcXG4gIG1hcmdpbjogNXB4O1xcbiAgcGFkZGluZzogM3B4OyB9XFxuXFxuLnNlYXJjaC1pbWFnZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJGNUVFO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gIHdpZHRoOiAyMCU7XFxuICBtYXJnaW4tcmlnaHQ6IDA7IH1cXG4gIC5zZWFyY2gtaW1hZ2U6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZmMmRhOyB9XFxuICAuc2VhcmNoLWltYWdlOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDM0MyQzY7IH1cXG5cXG4uc2VhcmNoLWlucHV0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBtaW4td2lkdGg6IDkwJTsgfVxcblxcbi5hbGwtY2FyZHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtZ2FwOiAzMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICB3aWR0aDogOTUuNXZ3OyB9XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuaW1nIHtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5jYXJkLWJ1dHRvbiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgaGVpZ2h0OiAyN3B4O1xcbiAgbWFyZ2luOiAzcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gIC5jYXJkLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZmYyZGE7IH1cXG4gIC5jYXJkLWJ1dHRvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzNDMkM2OyB9XFxuXFxuLmFkZC1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VCRjVFRTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTIlOyB9XFxuXFxuLmFkZCB7XFxuICB3aWR0aDogOTAlOyB9XFxuXFxuLmZhdm9yaXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFQkY1RUU7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgd2lkdGg6IDEzJTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzE0OS8xNDkyMjIuc3ZnXFxcIik7IH1cXG5cXG4uY2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDdGMkZFO1xcbiAgYm9yZGVyOiAzcHggc29saWQgIzAwMDtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLmNhcmQtaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFQkY1RUU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XFxuXFxuLmFsbCB7XFxuICBncmlkLWdhcDogMDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7IH1cXG5cXG4uYWxsLXJlY2lwZS1pbmZvLFxcbm9sIHtcXG4gIGZvbnQtc2l6ZTogMTUwJTtcXG4gIGNvbG9yOiAjRUJGNUVFO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG5oMyB7XFxuICBmb250LXNpemU6IDE1MCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJGNUVFO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7IH1cXG5cXG4ucmVjaXBlLW5hbWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VCRjVFRTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZvbnQtc2l6ZTogMTUwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5jYXJkLXBpY3R1cmUge1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIHdpZHRoOiA5NCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgbWFyZ2luOiAxMHB4IDMlIDhweCAyLjYlOyB9XFxuICAuY2FyZC1waWN0dXJlOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMC43OyB9XFxuICAuY2FyZC1waWN0dXJlOmFjdGl2ZSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7IH1cXG5cXG4ud3JhcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgYm9yZGVyOiAwOyB9XFxuXFxuLmZhdm9yaXRlLWFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xNDgvMTQ4ODQxLnN2Z1xcXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgfVxcblxcbi5kaXNwbGF5LXJlY2lwZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1nYXA6IDdweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC42ZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyO1xcbiAgbWFyZ2luOiAxNXB4OyB9XFxuXFxuLmRpc3BsYXktcmVjaXBlLWluZm8ge1xcbiAgZ3JpZC1jb2x1bW46IDE7XFxuICBncmlkLXJvdzogMC41OyB9XFxuXFxuLnJlY2lwZS1pbmdyZWRpZW50cyB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbiAgZ3JpZC1yb3c6IDE7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgY29sb3I6ICNFQkY1RUU7IH1cXG5cXG4ucmVjaXBlLWluZ3JlZGllbnRzLXRpdGxlIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBmb250LXNpemU6IDIwcHg7IH1cXG5cXG4ucmVjaXBlLWluc3RydWN0aW9ucyB7XFxuICBncmlkLWNvbHVtbjogMS9zcGFuIDI7XFxuICBncmlkLXJvdzogMjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiAjRUJGNUVFO1xcbiAgbWF4LXdpZHRoOiA5MHZ3O1xcbiAgbWFyZ2luLXRvcDogMTAwcHg7IH1cXG5cXG4udG8tY29vay1ncmVldGluZyB7XFxuICBjb2xvcjogI0VCRjVFRTsgfVxcblxcbi5jbG9zZS1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VCRjVFRTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICB3aWR0aDogMTMlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL3d3dy5mbGF0aWNvbi5jb20vc3ZnL3N0YXRpYy9pY29ucy9zdmcvNDQ2LzQ0NjA5MS5zdmdcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuLmluZy1jb3N0LFxcbi5uZWVkZWQtaW5ncyxcXG4ucGFudHJ5LWJ1dHRvbnMge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7IH1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogODI1cHgpIHtcXG4gIG1haW4ge1xcbiAgICB3aWR0aDogOTUlOyB9XFxuICAuYWxsLWNhcmRzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1nYXA6IDMwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgIHBhZGRpbmc6IDMwcHggMCAzMHB4IDMwcHg7XFxuICAgIHdpZHRoOiA5NS41dnc7IH1cXG4gIC5kaXNwbGF5LXJlY2lwZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAucmVjaXBlLWluc3RydWN0aW9ucyB7XFxuICAgIG1hcmdpbi10b3A6IDA7IH0gfVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmFsbC1jYXJkcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtZ2FwOiAzMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBwYWRkaW5nOiAzMHB4IDAgMzBweCAzMHB4O1xcbiAgICB3aWR0aDogOTUuNXZ3OyB9XFxuICAuZGlzcGxheS1yZWNpcGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgLnNlYXJjaC1pbWFnZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xcbiAgLmxvd2VyLWhlYWRlcixcXG4gIC5tYWluLWhlYWRlciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gIC5zZWFyY2gtaW5wdXQge1xcbiAgICBtaW4td2lkdGg6IDgwdnc7IH1cXG4gIC5hbGwtY2FyZHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWdhcDogMzBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcXG4gICAgcGFkZGluZzogMzBweCAwIDMwcHggMzBweDtcXG4gICAgd2lkdGg6IDk1LjV2dzsgfVxcbiAgLmNhcmQtYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiBhdXRvOyB9XFxuICAudG8tY29vayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gIC5jYXJkIHtcXG4gICAgbWF4LXdpZHRoOiA5NSU7IH0gfVxcblwiLCBcIlwiXSk7XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiAnQG1lZGlhICcgKyBpdGVtWzJdICsgJ3snICsgY29udGVudCArICd9JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSAnKCcgKyBpdGVtWzJdICsgJykgYW5kICgnICsgbWVkaWFRdWVyeSArICcpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJztcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcbiAgcmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn0iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJjbGFzcyBDb29rYm9vayB7XG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICB0aGlzLnJlY2lwZXMgPSBkYXRhO1xuICB9XG5cbiAgZmluZFJlY2lwZXMoc2VhcmNoVGV4dCkge1xuICAgIHJldHVybiB0aGlzLnJlY2lwZXMuZmlsdGVyKChyZWNpcGUpPT57XG4gICAgICBsZXQgaW5ncmVkaWVudE5hbWVzID0gcmVjaXBlLmluZ3JlZGllbnRzLm1hcCgoaW5ncmVkaWVudCk9PntcbiAgICAgICAgcmV0dXJuIGluZ3JlZGllbnQubmFtZVxuICAgICAgfSlcbiAgICAgIHJldHVybiByZWNpcGUubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRleHQpIHx8XG4gICAgICByZWNpcGUudGFncy5pbmNsdWRlcyhzZWFyY2hUZXh0KSB8fFxuICAgICAgaW5ncmVkaWVudE5hbWVzLmluY2x1ZGVzKHNlYXJjaFRleHQpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb29rYm9vaztcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlcy5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZXMuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBQYW50cnkgZnJvbSAnLi9wYW50cnknO1xuaW1wb3J0IFJlY2lwZSBmcm9tICcuL3JlY2lwZSc7XG5pbXBvcnQgVXNlciBmcm9tICcuL3VzZXInO1xuaW1wb3J0IENvb2tib29rIGZyb20gJy4vY29va2Jvb2snO1xuXG5cbmxldCBkb21VcGRhdGVzID0ge1xuXG4gIHVzZXJzOiBbe31dLFxuICByZWNpcGVEYXRhOiBbe31dLFxuICBpbmdyZWRpZW50c0RhdGE6IFt7fV0sXG4gIHVzZXI6IHt9LFxuICBjb29rYm9vazogbnVsbCxcblxuICBnZXRXaGF0c0Nvb2tpbmdEYXRhOiAoKSA9PiB7XG4gICAgUHJvbWlzZS5hbGwoW1xuICAgICAgZmV0Y2goJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS93aGF0cy1jb29raW4vMTkxMS91c2Vycy93Y1VzZXJzRGF0YScpLFxuICAgICAgZmV0Y2goJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS93aGF0cy1jb29raW4vMTkxMS9yZWNpcGVzL3JlY2lwZURhdGEnKSxcbiAgICAgIGZldGNoKCdodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvd2hhdHMtY29va2luLzE5MTEvaW5ncmVkaWVudHMvaW5ncmVkaWVudHNEYXRhJylcbiAgICBdKVxuICAgICAgLnRoZW4ocmVzcG9uc2VzID0+IFByb21pc2UuYWxsKHJlc3BvbnNlcy5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKSkpXG4gICAgICAudGhlbihyZXNwb25zZXMgPT4ge1xuICAgICAgICBkb21VcGRhdGVzLnVzZXJzID0gcmVzcG9uc2VzWzBdLndjVXNlcnNEYXRhO1xuICAgICAgICBkb21VcGRhdGVzLnJlY2lwZURhdGEgPSByZXNwb25zZXNbMV0ucmVjaXBlRGF0YTtcbiAgICAgICAgZG9tVXBkYXRlcy5pbmdyZWRpZW50c0RhdGEgPSByZXNwb25zZXNbMl0uaW5ncmVkaWVudHNEYXRhO1xuICAgICAgICBkb21VcGRhdGVzLmNyZWF0ZURhdGFNb2RlbCgpO1xuICAgICAgICBkb21VcGRhdGVzLnVwZGF0ZURpc3BsYXkoKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxuICB9LFxuXG4gIGNyZWF0ZURhdGFNb2RlbDogKCkgPT4ge1xuICAgIGxldCBwYW50cnkgPSBuZXcgUGFudHJ5KGRvbVVwZGF0ZXMudXNlcnNbMF0ucGFudHJ5KTtcbiAgICBkb21VcGRhdGVzLnVzZXIgPSBuZXcgVXNlcihkb21VcGRhdGVzLnVzZXJzWzBdLCBwYW50cnksIGRvbVVwZGF0ZXMuaW5ncmVkaWVudHNEYXRhKTtcbiAgICBsZXQgcmVjaXBlRGVjayA9IGRvbVVwZGF0ZXMucmVjaXBlRGF0YS5tYXAocmVjaXBlID0+IHtcbiAgICAgIHJldHVybiByZWNpcGUgPSBuZXcgUmVjaXBlKHJlY2lwZSwgZG9tVXBkYXRlcy5pbmdyZWRpZW50c0RhdGEpO1xuICAgIH0pXG4gICAgZG9tVXBkYXRlcy5jb29rYm9vayA9IG5ldyBDb29rYm9vayhyZWNpcGVEZWNrKTtcbiAgfSxcblxuICB1cGRhdGVEaXNwbGF5OiAoKSA9PiB7XG4gICAgZG9tVXBkYXRlcy5ncmVldFVzZXIoKTtcbiAgICBkb21VcGRhdGVzLnBvcHVsYXRlQ2FyZHMoZG9tVXBkYXRlcy5jb29rYm9vay5yZWNpcGVzKTtcbiAgfSxcblxuICBncmVldFVzZXI6ICgpID0+IHtcbiAgICBjb25zdCB3ZWxjb21lTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmVldGluZycpO1xuICAgIHdlbGNvbWVNZXNzYWdlLmlubmVyVGV4dCA9IGBXZWxjb21lICR7ZG9tVXBkYXRlcy51c2VyLm5hbWV9IWA7XG4gIH0sXG5cbiAgcG9wdWxhdGVDYXJkczogKHJlY2lwZXMpID0+IHtcbiAgICBjb25zdCBjYXJkQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLXNlY3Rpb24nKTtcbiAgICBjYXJkQXJlYS5jbGFzc0xpc3QgPSAnYWxsLWNhcmRzJztcbiAgICBjYXJkQXJlYS5pbm5lckhUTUwgPSAnJztcbiAgICByZWNpcGVzLmZvckVhY2gocmVjaXBlID0+IHtcbiAgICAgIGNhcmRBcmVhLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGRvbVVwZGF0ZXMuY29uc3RydWN0Q2FyZChyZWNpcGUpKVxuICAgIH0pO1xuICB9LFxuXG4gIGNvbnN0cnVjdENhcmQ6IChyZWNpcGUpID0+IHtcbiAgICBsZXQgY2xhc3NMaXN0XG4gICAgaWYgKGRvbVVwZGF0ZXMudXNlci5mYXZvcml0ZVJlY2lwZXMuaW5jbHVkZXMocmVjaXBlKSkge1xuICAgICAgY2xhc3NMaXN0ID0gJ2Zhdm9yaXRlIGNhcmQtYnV0dG9uIGZhdm9yaXRlLWFjdGl2ZSdcbiAgICB9IGVsc2Uge1xuICAgICAgY2xhc3NMaXN0ID0gJ2Zhdm9yaXRlIGNhcmQtYnV0dG9uJ1xuICAgIH1cbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9J2NhcmQgJHtyZWNpcGUuaWR9Jz5cbiAgICA8aGVhZGVyIGNsYXNzPSdjYXJkLWhlYWRlciAke3JlY2lwZS5pZH0nPlxuICAgICAgPGxhYmVsIGZvcj0nYWRkLWJ1dHRvbicgY2xhc3M9J2hpZGRlbic+Q2xpY2sgdG8gYWRkIHJlY2lwZTwvbGFiZWw+XG4gICAgICA8YnV0dG9uIGFyaWEtbGFiZWw9J2FkZC1idXR0b24nIGNsYXNzPSdhZGQtYnV0dG9uIGNhcmQtYnV0dG9uICR7cmVjaXBlLmlkfSc+XG4gICAgICAgIDxpbWcgY2xhc3M9J2FkZCAke3JlY2lwZS5pZH0gYWRkLWJ1dHRvbicgc3JjPSdodHRwczovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMzIvMzIzMzkuc3ZnJyBhbHQ9J0FkZCB0b1xuICAgICAgICByZWNpcGVzIHRvIGNvb2snPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8bGFiZWwgZm9yPSdmYXZvcml0ZS1idXR0b24nIGNsYXNzPSdoaWRkZW4nPkNsaWNrIHRvIGZhdm9yaXRlIHJlY2lwZTwvbGFiZWw+XG4gICAgICA8YnV0dG9uIGFyaWEtbGFiZWw9J2Zhdm9yaXRlLWJ1dHRvbicgY2xhc3M9JyR7Y2xhc3NMaXN0fSBmYXZvcml0ZSR7cmVjaXBlLmlkfSAke3JlY2lwZS5pZH0nPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9oZWFkZXI+XG4gICAgPHNwYW4gY2xhc3M9J3JlY2lwZS1uYW1lICR7cmVjaXBlLmlkfSc+JHtyZWNpcGUubmFtZX08L3NwYW4+XG4gICAgICA8YnV0dG9uIGFyaWEtbGFiZWw9J3JlY2lwZS1pbmZvJyBjbGFzcz0nY2FyZC1waWN0dXJlICR7cmVjaXBlLmlkfSB3cmFwJz5cbiAgICAgICAgPGltZyB0YWJpbmRleD0nMCcgY2xhc3M9J2NhcmQtcGljdHVyZSAke3JlY2lwZS5pZH0nc3JjPScke3JlY2lwZS5pbWFnZX0nIGFsdD0nRm9vZCBmcm9tIHJlY2lwZSc+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5gXG4gIH0sXG5cbiAgZmluZFNwZWNpZmljUmVjaXBlOiAoZXZlbnQpID0+IHtcbiAgICByZXR1cm4gZG9tVXBkYXRlcy5jb29rYm9vay5yZWNpcGVzLmZpbmQocmVjaXBlID0+IHtcbiAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKHJlY2lwZS5pZCkpIHtcbiAgICAgICAgcmV0dXJuIHJlY2lwZTtcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIGZhdm9yaXRlQ2FyZDogKGV2ZW50KSA9PiB7XG4gICAgY29uc3Qgc2hvd0Zhdm9yaXRlc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aWV3LWZhdm9yaXRlcycpO1xuICAgIGxldCBzcGVjaWZpY1JlY2lwZSA9IGRvbVVwZGF0ZXMuZmluZFNwZWNpZmljUmVjaXBlKGV2ZW50KTtcbiAgICBpZiAoIWV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Zhdm9yaXRlLWFjdGl2ZScpKSB7XG4gICAgICBzaG93RmF2b3JpdGVzQnV0dG9uLmlubmVySFRNTCA9ICdWaWV3IEZhdm9yaXRlcyc7XG4gICAgICBkb21VcGRhdGVzLnVzZXIuYWRkVG9GYXZvcml0ZXMoc3BlY2lmaWNSZWNpcGUpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZmF2b3JpdGUtYWN0aXZlJykpIHtcbiAgICAgIGRvbVVwZGF0ZXMudXNlci5yZW1vdmVGcm9tRmF2b3JpdGVzKHNwZWNpZmljUmVjaXBlKVxuICAgIH1cbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnZmF2b3JpdGUtYWN0aXZlJyk7XG4gIH0sXG5cbiAgdmlld0Zhdm9yaXRlczogKCkgPT4ge1xuICAgIGNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYXJlYScpO1xuICAgIHNlYXJjaEJhci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgIGNvbnN0IHNob3dGYXZvcml0ZXNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmlldy1mYXZvcml0ZXMnKTtcbiAgICBjb25zdCBjYXJkQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLXNlY3Rpb24nKTtcbiAgICBjYXJkQXJlYS5jbGFzc0xpc3QgPSAnYWxsLWNhcmRzJztcbiAgICBpZiAoIWRvbVVwZGF0ZXMudXNlci5mYXZvcml0ZVJlY2lwZXMubGVuZ3RoKSB7XG4gICAgICBzaG93RmF2b3JpdGVzQnV0dG9uLmlubmVySFRNTCA9ICdZb3UgaGF2ZSBubyBmYXZvcml0ZXMhJztcbiAgICAgIGRvbVVwZGF0ZXMucG9wdWxhdGVDYXJkcyhkb21VcGRhdGVzLmNvb2tib29rLnJlY2lwZXMpO1xuICAgICAgcmV0dXJuXG4gICAgfSBlbHNlIHtcbiAgICAgIHNob3dGYXZvcml0ZXNCdXR0b24uaW5uZXJIVE1MID0gJ1JlZnJlc2ggRmF2b3JpdGVzJ1xuICAgICAgY2FyZEFyZWEuaW5uZXJIVE1MID0gJyc7XG4gICAgICBkb21VcGRhdGVzLnVzZXIuZmF2b3JpdGVSZWNpcGVzLmZvckVhY2gocmVjaXBlID0+IHtcbiAgICAgICAgY2FyZEFyZWEuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgZG9tVXBkYXRlcy5jb25zdHJ1Y3RDYXJkKHJlY2lwZSkpXG4gICAgICB9KVxuICAgIH1cbiAgfSxcblxuICBhZGRUb1RvQ29vazogKGV2ZW50KSA9PiB7XG4gICAgY29uc3Qgc2hvd1RvQ29va0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1jb29rJyk7XG4gICAgbGV0IHNwZWNpZmljUmVjaXBlID0gZG9tVXBkYXRlcy5maW5kU3BlY2lmaWNSZWNpcGUoZXZlbnQpO1xuICAgIGlmICghZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWRkLWFjdGl2ZScpKSB7XG4gICAgICBzaG93VG9Db29rQnV0dG9uLmlubmVyVGV4dCA9ICdUbyBDb29rJ1xuICAgICAgYWxlcnQoZG9tVXBkYXRlcy51c2VyLmNoZWNrUGFudHJ5SW5ncmVkaWVudHMoc3BlY2lmaWNSZWNpcGUpKTtcbiAgICAgIGRvbVVwZGF0ZXMudXNlci5hZGRUb1JlY2lwZXNUb0Nvb2soc3BlY2lmaWNSZWNpcGUpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWRkLWFjdGl2ZScpKSB7XG4gICAgICBkb21VcGRhdGVzLnVzZXIucmVtb3ZlRnJvbVJlY2lwZXNUb0Nvb2soc3BlY2lmaWNSZWNpcGUpXG4gICAgfVxuICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdhZGQtYWN0aXZlJyk7XG4gIH0sXG5cbiAgZGlzcGxheVRvQ29va0NhcmRzOiAoKSA9PiB7XG4gICAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1hcmVhJyk7XG4gICAgc2VhcmNoQmFyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgY29uc3QgY2FyZEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1zZWN0aW9uJyk7XG4gICAgY2FyZEFyZWEuY2xhc3NMaXN0ID0gJyc7XG4gICAgY2FyZEFyZWEuaW5uZXJIVE1MID1cbiAgICAgIGA8c2VjdGlvbiBjbGFzcz0ndG8tY29vayc+XG4gICAgICAgIDxoMSBjbGFzcz0ndG8tY29vay1ncmVldGluZyc+UmVjaXBlcyBUbyBDb29rPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzcz0nY2FyZC1zZWN0aW9uIGFsbC1jYXJkcyc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPmBcbiAgICBsZXQgY2FyZFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1zZWN0aW9uJylcbiAgICBkb21VcGRhdGVzLnVzZXIucmVjaXBlc1RvQ29vay5mb3JFYWNoKHJlY2lwZSA9PiB7XG4gICAgICBsZXQgdmFsdWVzID0gZG9tVXBkYXRlcy51c2VyLmNoZWNrSG93TXVjaE1vcmUocmVjaXBlKS5tYXAob2JqID0+IHtcbiAgICAgICAgcmV0dXJuIGAke29iai5xdWFudGl0eU5lZWRlZH0gJHtvYmoudW5pdH0gbW9yZSAke29iai5uYW1lfWA7XG4gICAgICB9KTtcbiAgICAgIGxldCBuZWVkZWRDb3N0ID0gZG9tVXBkYXRlcy51c2VyLmNoZWNrSG93TXVjaE1vcmUocmVjaXBlKS5yZWR1Y2UoKHRvdGFsLCBpbmdyZWRpZW50KSA9PiB7XG4gICAgICAgIHJldHVybiB0b3RhbCArPSBpbmdyZWRpZW50LmNvc3Q7XG4gICAgICB9LCAwKTtcbiAgICAgIGNhcmRTZWN0aW9uLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYDxkaXYgY2xhc3M9J2NhcmQgJHtyZWNpcGUuaWR9Jz5cbiAgICA8aGVhZGVyIGNsYXNzPSdjYXJkLWhlYWRlciAke3JlY2lwZS5pZH0nPlxuICAgICAgPGxhYmVsIGZvcj0nY2xvc2UtYnV0dG9uJyBjbGFzcz0naGlkZGVuJz48L2xhYmVsPlxuICAgICAgPGJ1dHRvbiBhcmlhLWxhYmVsPSdjbG9zZS1idXR0b24nIGNsYXNzPSdjbG9zZS1idXR0b24gY2FyZC1idXR0b24gJHtyZWNpcGUuaWR9Jz5cbiAgICAgICAgPGltZyBjbGFzcz0nY2xvc2UtYnV0dG9uICR7cmVjaXBlLmlkfScgc3JjPSdodHRwczovL3d3dy5mbGF0aWNvbi5jb20vc3ZnL3N0YXRpYy9pY29ucy9zdmcvNDQ2LzQ0NjA5MS5zdmcnIGFsdD0ncmVtb3ZlIGZyb20gcmVjaXBlcyB0byBjb29rJz5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGxhYmVsIGZvcj0nZmF2b3JpdGUtYnV0dG9uJyBjbGFzcz0naGlkZGVuJz5DbGljayB0byBmYXZvcml0ZSByZWNpcGU8L2xhYmVsPlxuICAgICAgPGJ1dHRvbiBhcmlhLWxhYmVsPSdmYXZvcml0ZS1idXR0b24nIGNsYXNzPSdmYXZvcml0ZSBjYXJkLWJ1dHRvbiBmYXZvcml0ZSR7cmVjaXBlLmlkfSAke3JlY2lwZS5pZH0nPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9oZWFkZXI+XG4gICAgICA8aDM+JHtyZWNpcGUubmFtZX08L2gzPlxuICAgICAgPGltZyB0YWJpbmRleD0nMCcgY2xhc3M9J2NhcmQtcGljdHVyZSAke3JlY2lwZS5pZH0nXG4gICAgICBzcmM9JyR7cmVjaXBlLmltYWdlfScgYWx0PSdGb29kIGZyb20gcmVjaXBlJz5cbiAgICAgIDxkaXYgY2xhc3MgPSBcInBhbnRyeS1idXR0b25zXCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG5hbWU9XCJBZGQgTmVlZGVkIEluZ3JlZGllbnRzXCIgY2xhc3M9XCJib3VnaHQtaW5ncmVkaWVudHMgYm91Z2h0LWluZ3JlZGllbnRzJHtyZWNpcGUuaWR9ICR7cmVjaXBlLmlkfVwiPkFkZCBOZWVkZWQgSW5ncmVkaWVudHM8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgbmFtZT1cIkhhdmUgQ29va2VkXCIgY2xhc3M9XCJoYXZlLWNvb2tlZCBoYXZlLWNvb2tlZCR7cmVjaXBlLmlkfSAke3JlY2lwZS5pZH1cIj5IYXZlIENvb2tlZDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8cCBjbGFzcz0nbmVlZGVkLWluZ3MnPkluZ3JlZGllbnRzIFN0aWxsIE5lZWRlZDo8L3A+XG4gICAgICA8dWwgPlxuICAgICAgPGxpPiR7dmFsdWVzLmpvaW4oJzwvbGk+PGxpPicpfTwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPHAgY2xhc3M9J2luZy1jb3N0Jz5Db3N0IHRvIFN0aWxsIEdldDokJHtuZWVkZWRDb3N0fTwvcD5cbiAgICA8L2Rpdj5gKTtcbiAgICB9KTtcbiAgfSxcblxuICBzaG93VG9Db29rUmVjaXBlczogKCkgPT4ge1xuICAgIGNvbnN0IHNob3dUb0Nvb2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tY29vaycpO1xuICAgIGlmICghZG9tVXBkYXRlcy51c2VyLnJlY2lwZXNUb0Nvb2subGVuZ3RoKSB7XG4gICAgICBzaG93VG9Db29rQnV0dG9uLmlubmVyVGV4dCA9ICdZb3UgaGF2ZSBubyBzYXZlZCBSZWNpcGVzISc7XG4gICAgICBkb21VcGRhdGVzLnBvcHVsYXRlQ2FyZHMoZG9tVXBkYXRlcy5jb29rYm9vay5yZWNpcGVzKTtcbiAgICAgIHJldHVyblxuICAgIH0gZWxzZSB7XG4gICAgICBkb21VcGRhdGVzLmRpc3BsYXlUb0Nvb2tDYXJkcygpO1xuICAgIH1cbiAgfSxcblxuICByZW1vdmVGcm9tVG9Db29rOiAoKSA9PiB7XG4gICAgbGV0IHNwZWNpZmljUmVjaXBlID0gZG9tVXBkYXRlcy5jb29rYm9vay5yZWNpcGVzLmZpbmQocmVjaXBlID0+IHtcbiAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKHJlY2lwZS5pZCkpIHtcbiAgICAgICAgcmV0dXJuIHJlY2lwZTtcbiAgICAgIH1cbiAgICB9KVxuICAgIGRvbVVwZGF0ZXMudXNlci5yZW1vdmVGcm9tUmVjaXBlc1RvQ29vayhzcGVjaWZpY1JlY2lwZSk7XG4gICAgZG9tVXBkYXRlcy5kaXNwbGF5VG9Db29rQ2FyZHMoKTtcbiAgfSxcblxuICBkaXNwbGF5RGlyZWN0aW9uczogKGV2ZW50KSA9PiB7XG4gICAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1hcmVhJyk7XG4gICAgc2VhcmNoQmFyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgY29uc3QgY2FyZEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1zZWN0aW9uJyk7XG4gICAgY2FyZEFyZWEuY2xhc3NMaXN0ID0gJ3JlY2lwZS1kaXJlY3Rpb25zJztcbiAgICBsZXQgc3BlY2lmaWNSZWNpcGUgPSBkb21VcGRhdGVzLmZpbmRTcGVjaWZpY1JlY2lwZShldmVudCk7XG4gICAgbGV0IGNvc3QgPSBzcGVjaWZpY1JlY2lwZS5jYWxjdWxhdGVDb3N0KCk7XG4gICAgY2FyZEFyZWEuaW5uZXJIVE1MID0gJyc7XG4gICAgbGV0IG5lZWRlZEluZ3JlZGllbnRzID0gW107XG4gICAgc3BlY2lmaWNSZWNpcGUuaW5ncmVkaWVudHMuZm9yRWFjaChpbmdyZWRpZW50ID0+IHtcbiAgICAgIGxldCBuYW1lID0gc3BlY2lmaWNSZWNpcGUuaW5ncmVkaWVudHNEYXRhLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBpbmdyZWRpZW50LmlkKS5uYW1lXG4gICAgICBuZWVkZWRJbmdyZWRpZW50cy5wdXNoKGAke2luZ3JlZGllbnQucXVhbnRpdHkuYW1vdW50LnRvRml4ZWQoMil9ICR7aW5ncmVkaWVudC5xdWFudGl0eS51bml0fSAke25hbWV9YClcbiAgICB9KVxuICAgIGxldCBuZWVkZWRTdGVwcyA9IFtdO1xuICAgIHNwZWNpZmljUmVjaXBlLmluc3RydWN0aW9ucy5mb3JFYWNoKHN0ZXAgPT4ge1xuICAgICAgbmVlZGVkU3RlcHMucHVzaChgJHtzdGVwLm51bWJlcn0uICR7c3RlcC5pbnN0cnVjdGlvbn0gYClcbiAgICB9KVxuICAgIGNhcmRBcmVhLmlubmVySFRNTCA9IGA8c2VjdGlvbiBjbGFzcz0nZGlzcGxheS1yZWNpcGUnPlxuICAgIDxkaXYgY2xhc3M9J2Rpc3BsYXktcmVjaXBlLWluZm8nPlxuICAgICAgPGgzPiR7c3BlY2lmaWNSZWNpcGUubmFtZX08L2gzPlxuICAgICAgPGltZyBjbGFzcz0nY2FyZC1waWN0dXJlJyBzcmM9JyR7c3BlY2lmaWNSZWNpcGUuaW1hZ2V9JyBhbHQ9J1JlY2lwZSBpbWFnZSBmb3IgJHtzcGVjaWZpY1JlY2lwZS5uYW1lfSc+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz0ncmVjaXBlLWluZ3JlZGllbnRzJz5cbiAgICA8aDUgY2xhc3M9J3JlY2lwZS1pbmdyZWRpZW50cy10aXRsZSc+WW91IHdpbGwgbmVlZDogPC9oNT5cbiAgICA8dWw+XG4gICAgPGxpPiR7bmVlZGVkSW5ncmVkaWVudHMuam9pbignPC9saT48bGk+Jyl9PC9saT5cbiAgICA8L3VsPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9J3JlY2lwZS1pbnN0cnVjdGlvbnMnPlxuICAgIDxoNT5JbnN0cnVjdGlvbnM6IDwvaDU+XG4gICAgPHVsIGNsYXNzPSdpbnN0cnVjdGlvbi1saXN0JyBzdHlsZT0nbGlzdC1zdHlsZS10eXBlOm5vbmU7Jz5cbiAgICA8bGk+JHtuZWVkZWRTdGVwcy5qb2luKCc8L2xpPjxsaT4nKX08L2xpPlxuICAgIDwvdWw+XG4gICAgPGg1PlRoaXMgcmVjaXBlIGdlbmVyYWxseSBjb3N0czogJCR7Y29zdH0gPC9oNT5cbiAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+YDtcbiAgfSxcblxuICBmaWx0ZXJSZWNpcGVzOiAoKSA9PiB7XG4gICAgY29uc3QgY2FyZEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLWNhcmRzJyk7XG4gICAgdmFyIHNlYXJjaFRlcm0gPSBldmVudC50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoc2VhcmNoVGVybSAhPT0gJycpIHtcbiAgICAgIGNhcmRBcmVhLmlubmVySFRNTCA9ICcnO1xuICAgICAgZG9tVXBkYXRlcy5kaXNwbGF5RmlsdGVyZWRSZWNpcGVzKHNlYXJjaFRlcm0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb21VcGRhdGVzLnBvcHVsYXRlQ2FyZHMoZG9tVXBkYXRlcy5jb29rYm9vay5yZWNpcGVzKTtcbiAgICB9XG4gIH0sXG5cbiAgZGlzcGxheUZpbHRlcmVkUmVjaXBlczogKHNlYXJjaFRlcm0pID0+IHtcbiAgICBkb21VcGRhdGVzLnBvcHVsYXRlQ2FyZHMoZG9tVXBkYXRlcy5jb29rYm9vay5maW5kUmVjaXBlcyhzZWFyY2hUZXJtKSk7XG4gIH0sXG5cbiAgaGF2ZUNvb2tlZFJlY2lwZTogKGV2ZW50KSA9PiB7XG4gICAgbGV0IHNwZWNpZmljUmVjaXBlID0gZG9tVXBkYXRlcy5maW5kU3BlY2lmaWNSZWNpcGUoZXZlbnQpO1xuICAgIGNvbnN0IGhhdmVDb29rZWRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuaGF2ZS1jb29rZWQke3NwZWNpZmljUmVjaXBlLmlkfWApO1xuICAgIGlmIChkb21VcGRhdGVzLnVzZXIuY2hlY2tQYW50cnlJbmdyZWRpZW50cyhzcGVjaWZpY1JlY2lwZSkgIT09ICdZb3UgaGF2ZSB0aGUgaW5ncmVkaWVudHMhJykge1xuICAgICAgYWxlcnQoXCJZb3UgZG9uJ3QgaGF2ZSB3aGF0IHlvdSBuZWVkIHlldFwiKVxuICAgIH0gZWxzZSB7XG4gICAgICBkb21VcGRhdGVzLnVzZXIucmVtb3ZlUGFudHJ5SW5ncmlkaWVudHMoc3BlY2lmaWNSZWNpcGUpXG4gICAgICBoYXZlQ29va2VkQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0sXG5cbiAgYnV5SW5ncmVkaWVudHM6IChldmVudCkgPT4ge1xuICAgIGxldCBzcGVjaWZpY1JlY2lwZSA9IGRvbVVwZGF0ZXMuZmluZFNwZWNpZmljUmVjaXBlKGV2ZW50KTtcbiAgICBjb25zdCBidXlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYm91Z2h0LWluZ3JlZGllbnRzJHtzcGVjaWZpY1JlY2lwZS5pZH1gKVxuICAgIGRvbVVwZGF0ZXMudXNlci5hZGROZWVkZWRQYW50cnlJbmdyaWRpZW50cyhzcGVjaWZpY1JlY2lwZSlcbiAgICBidXlCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICB9LFxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCAgZG9tVXBkYXRlcztcbiIsImNsYXNzIFBhbnRyeSB7XG4gIGNvbnN0cnVjdG9yKHVzZXJQYW50cnkpIHtcbiAgICB0aGlzLnVzZXJQYW50cnkgPSB1c2VyUGFudHJ5O1xuICAgIHRoaXMudXNlckluZ3JlZGllbnRzID0ge307XG4gIH1cblxuICBjb21waWxlUGFudHJ5KCkge1xuICAgIHRoaXMudXNlckluZ3JlZGllbnRzID0gdGhpcy51c2VyUGFudHJ5LnJlZHVjZSgocGFudHJ5LCBpbmdyZWRpZW50KSA9PiB7XG4gICAgICBpZiAoIXBhbnRyeVtpbmdyZWRpZW50LmluZ3JlZGllbnRdKSB7XG4gICAgICAgIHBhbnRyeVtpbmdyZWRpZW50LmluZ3JlZGllbnRdID0gaW5ncmVkaWVudC5hbW91bnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYW50cnlbaW5ncmVkaWVudC5pbmdyZWRpZW50XSArPSBpbmdyZWRpZW50LmFtb3VudDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwYW50cnk7XG4gICAgfSwge30pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhbnRyeTtcbiIsImNsYXNzIFJlY2lwZSB7XG4gIGNvbnN0cnVjdG9yKHJlY2lwZSwgaW5ncmVkaWVudHNEYXRhKSB7XG4gICAgdGhpcy5uYW1lID0gcmVjaXBlLm5hbWU7XG4gICAgdGhpcy5pZCA9IHJlY2lwZS5pZDtcbiAgICB0aGlzLmluZ3JlZGllbnRzID0gcmVjaXBlLmluZ3JlZGllbnRzO1xuICAgIHRoaXMuaW5zdHJ1Y3Rpb25zID0gcmVjaXBlLmluc3RydWN0aW9ucztcbiAgICB0aGlzLnRhZ3MgPSByZWNpcGUudGFncztcbiAgICB0aGlzLmluZ3JlZGllbnRzRGF0YSA9IGluZ3JlZGllbnRzRGF0YTtcbiAgICB0aGlzLmltYWdlID0gcmVjaXBlLmltYWdlO1xuICB9XG5cbiAgY2FsY3VsYXRlQ29zdCgpIHtcbiAgICBsZXQgY29zdENvdW50ZXIgPSAwO1xuICAgIHRoaXMuaW5ncmVkaWVudHMuZm9yRWFjaChpbmdyZWRpZW50ID0+IHtcbiAgICAgIHRoaXMuaW5ncmVkaWVudHNEYXRhLmZpbmQoc3BlY2lmaWNJbmdyZWRpZW50ID0+IHtcbiAgICAgICAgaWYgKHNwZWNpZmljSW5ncmVkaWVudC5pZCA9PT0gaW5ncmVkaWVudC5pZCkge1xuICAgICAgICAgIGNvc3RDb3VudGVyICs9IChOdW1iZXIoc3BlY2lmaWNJbmdyZWRpZW50LmVzdGltYXRlZENvc3RJbkNlbnRzKSAqXG4gICAgICAgICAgTnVtYmVyKGluZ3JlZGllbnQucXVhbnRpdHkuYW1vdW50KSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KTtcbiAgICByZXR1cm4gcGFyc2VGbG9hdCgoY29zdENvdW50ZXIgLyAxMDApLnRvRml4ZWQoMikpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVjaXBlO1xuIiwiaW1wb3J0ICcuL2Nzcy9zdHlsZXMuc2Nzcyc7XG5cbmltcG9ydCBkb21VcGRhdGVzIGZyb20gJy4vZG9tVXBkYXRlcyc7XG5cbmNvbnN0IHNob3dGYXZvcml0ZXNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmlldy1mYXZvcml0ZXMnKTtcbmNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZScpXG5jb25zdCBjYXJkQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtY2FyZHMnKTtcbmNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtaW5wdXQnKTtcbmNvbnN0IHNob3dUb0Nvb2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tY29vaycpO1xuXG5jb25zdCBjYXJkQnV0dG9uQ29uZGl0aW9uYWxzID0gKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYXZvcml0ZScpKSB7XG4gICAgZG9tVXBkYXRlcy5mYXZvcml0ZUNhcmQoZXZlbnQpO1xuICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZC1idXR0b24nKSkge1xuICAgIGRvbVVwZGF0ZXMuYWRkVG9Ub0Nvb2soZXZlbnQpO1xuICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NhcmQtcGljdHVyZScpKSB7XG4gICAgZG9tVXBkYXRlcy5kaXNwbGF5RGlyZWN0aW9ucyhldmVudCk7XG4gIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaG9tZScpKSB7XG4gICAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1hcmVhJyk7XG4gICAgc2VhcmNoQmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgc2hvd1RvQ29va0J1dHRvbi5pbm5lckhUTUwgPSAnVG8gQ29vayc7XG4gICAgc2hvd0Zhdm9yaXRlc0J1dHRvbi5pbm5lckhUTUwgPSAnVmlldyBGYXZvcml0ZXMnO1xuICAgIGRvbVVwZGF0ZXMucG9wdWxhdGVDYXJkcyhkb21VcGRhdGVzLmNvb2tib29rLnJlY2lwZXMpO1xuICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Nsb3NlLWJ1dHRvbicpKSB7XG4gICAgZG9tVXBkYXRlcy5yZW1vdmVGcm9tVG9Db29rKGV2ZW50KTtcbiAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdoYXZlLWNvb2tlZCcpKSB7XG4gICAgZG9tVXBkYXRlcy5oYXZlQ29va2VkUmVjaXBlKGV2ZW50KTtcbiAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdib3VnaHQtaW5ncmVkaWVudHMnKSkge1xuICAgIGRvbVVwZGF0ZXMuYnV5SW5ncmVkaWVudHMoZXZlbnQpO1xuICB9XG59XG5cbndpbmRvdy5vbmxvYWQgPSBkb21VcGRhdGVzLmdldFdoYXRzQ29va2luZ0RhdGEoKVxuaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhcmRCdXR0b25Db25kaXRpb25hbHMpO1xuY2FyZEFyZWEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYXJkQnV0dG9uQ29uZGl0aW9uYWxzKTtcbnNob3dGYXZvcml0ZXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkb21VcGRhdGVzLnZpZXdGYXZvcml0ZXMpO1xuc2hvd1RvQ29va0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRvbVVwZGF0ZXMuc2hvd1RvQ29va1JlY2lwZXMpO1xuc2VhcmNoQmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZG9tVXBkYXRlcy5maWx0ZXJSZWNpcGVzKTtcbiIsImltcG9ydCBQYW50cnkgZnJvbSAnLi9wYW50cnknO1xuXG5jbGFzcyBVc2VyIHtcbiAgY29uc3RydWN0b3IodXNlciwgcGFudHJ5LCBpbmdyZWRpZW50c0RhdGEpIHtcbiAgICB0aGlzLmlkID0gdXNlci5pZDtcbiAgICB0aGlzLm5hbWUgPSB1c2VyLm5hbWU7XG4gICAgdGhpcy5wYW50cnkgPSBwYW50cnk7XG4gICAgdGhpcy5mYXZvcml0ZVJlY2lwZXMgPSBbXTtcbiAgICB0aGlzLnJlY2lwZXNUb0Nvb2sgPSBbXTtcbiAgICB0aGlzLmluZ3JlZGllbnRzRGF0YSA9IGluZ3JlZGllbnRzRGF0YTtcbiAgfVxuXG4gIGFkZFRvRmF2b3JpdGVzKHJlY2lwZSkge1xuICAgIGlmICghdGhpcy5mYXZvcml0ZVJlY2lwZXMuaW5jbHVkZXMocmVjaXBlKSkge1xuICAgICAgdGhpcy5mYXZvcml0ZVJlY2lwZXMucHVzaChyZWNpcGUpO1xuICAgIH1cbiAgfVxuXG4gIGFkZFRvUmVjaXBlc1RvQ29vayhyZWNpcGUpIHtcbiAgICBpZiAoIXRoaXMucmVjaXBlc1RvQ29vay5pbmNsdWRlcyhyZWNpcGUpKSB7XG4gICAgICB0aGlzLnJlY2lwZXNUb0Nvb2sucHVzaChyZWNpcGUpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUZyb21SZWNpcGVzVG9Db29rKHJlY2lwZSkge1xuICAgIGNvbnN0IGkgPSB0aGlzLnJlY2lwZXNUb0Nvb2suaW5kZXhPZihyZWNpcGUpO1xuICAgIHRoaXMucmVjaXBlc1RvQ29vay5zcGxpY2UoaSwgMSk7XG4gIH1cblxuICByZW1vdmVQYW50cnlJbmdyaWRpZW50cyhyZWNpcGUpIHtcbiAgICByZWNpcGUuaW5ncmVkaWVudHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgZmV0Y2goJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS93aGF0cy1jb29raW4vMTkxMS91c2Vycy93Y1VzZXJzRGF0YScsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBcInVzZXJJRFwiOiB0aGlzLmlkLFxuICAgICAgICAgIFwiaW5ncmVkaWVudElEXCI6IGl0ZW0uaWQsXG4gICAgICAgICAgXCJpbmdyZWRpZW50TW9kaWZpY2F0aW9uXCI6IC0oaXRlbS5xdWFudGl0eS5hbW91bnQpXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKHRoaXMudXBkYXRlVXNlclBhbnRyeSgpKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAgICAgIHNldFRpbWVvdXQodGhpcy51cGRhdGVVc2VyUGFudHJ5KCksIDQwMDApXG4gICAgfSk7XG5cbiAgfVxuXG4gIGFkZE5lZWRlZFBhbnRyeUluZ3JpZGllbnRzKHJlY2lwZSkge1xuICAgIHRoaXMuY2hlY2tIb3dNdWNoTW9yZShyZWNpcGUpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGZldGNoKCdodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvd2hhdHMtY29va2luLzE5MTEvdXNlcnMvd2NVc2Vyc0RhdGEnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgXCJ1c2VySURcIjogdGhpcy5pZCxcbiAgICAgICAgICBcImluZ3JlZGllbnRJRFwiOiBpdGVtLmlkLFxuICAgICAgICAgIFwiaW5ncmVkaWVudE1vZGlmaWNhdGlvblwiOiBpdGVtLnF1YW50aXR5TmVlZGVkXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKHRoaXMudXBkYXRlVXNlclBhbnRyeSgpKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZVVzZXJQYW50cnkoKSB7XG4gICAgZmV0Y2goJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS93aGF0cy1jb29raW4vMTkxMS91c2Vycy93Y1VzZXJzRGF0YScpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGxldCBwYW50cnkgPSBuZXcgUGFudHJ5KHJlc3BvbnNlLndjVXNlcnNEYXRhW3RoaXMuaWQgLSAxXS5wYW50cnkpXG4gICAgICAgIHRoaXMucGFudHJ5ID0gcGFudHJ5XG4gICAgICAgIHRoaXMucGFudHJ5LmNvbXBpbGVQYW50cnkodGhpcy5pbmdyZWRpZW50c0RhdGEpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcbiAgfVxuXG4gIHJlbW92ZUZyb21GYXZvcml0ZXMocmVjaXBlKSB7XG4gICAgY29uc3QgaSA9IHRoaXMuZmF2b3JpdGVSZWNpcGVzLmluZGV4T2YocmVjaXBlKTtcbiAgICB0aGlzLmZhdm9yaXRlUmVjaXBlcy5zcGxpY2UoaSwgMSk7XG4gIH1cblxuICBmaWx0ZXJGYXZvcml0ZXModGFnKSB7XG4gICAgcmV0dXJuIHRoaXMuZmF2b3JpdGVSZWNpcGVzLmZpbHRlcihyZWNpcGUgPT4ge1xuICAgICAgcmV0dXJuIHJlY2lwZS50YWdzLmluY2x1ZGVzKHRhZyk7XG4gICAgfSk7XG4gIH1cblxuICBmaW5kRmF2b3JpdGVzKHN0cmdUb1NyY2gpIHtcbiAgICByZXR1cm4gdGhpcy5mYXZvcml0ZVJlY2lwZXMuZmlsdGVyKHJlY2lwZSA9PiB7XG4gICAgICByZXR1cm4gcmVjaXBlLm5hbWUuaW5jbHVkZXMoc3RyZ1RvU3JjaCkgfHxcbiAgICAgICAgcmVjaXBlLmluZ3JlZGllbnRzLmZpbmQoaW5ncmVkaWVudCA9PiB7XG4gICAgICAgICAgcmV0dXJuIGluZ3JlZGllbnQubmFtZS5pbmNsdWRlcyhzdHJnVG9TcmNoKVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZpbmRNaXNzaW5nSW5ncmVkaWVudHMocmVjaXBlKSB7XG4gICAgcmV0dXJuIHJlY2lwZS5pbmdyZWRpZW50cy5yZWR1Y2UoKG5vdFByZXNlbnQsIGluZ3JlZGllbnQpID0+IHtcbiAgICAgIGlmICghdGhpcy5wYW50cnkudXNlckluZ3JlZGllbnRzW2luZ3JlZGllbnQuaWRdIHx8IGluZ3JlZGllbnQucXVhbnRpdHkuYW1vdW50ID4gdGhpcy5wYW50cnkudXNlckluZ3JlZGllbnRzW2luZ3JlZGllbnQuaWRdKSB7XG4gICAgICAgIG5vdFByZXNlbnQucHVzaChpbmdyZWRpZW50KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBub3RQcmVzZW50O1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIGNoZWNrUGFudHJ5SW5ncmVkaWVudHMocmVjaXBlKSB7XG4gICAgdGhpcy5wYW50cnkuY29tcGlsZVBhbnRyeSh0aGlzLmluZ3JlZGllbnRzRGF0YSk7XG4gICAgbGV0IG1pc3NpbmdJbmdyZWRpZW50cyA9IHRoaXMuZmluZE1pc3NpbmdJbmdyZWRpZW50cyhyZWNpcGUpXG4gICAgaWYgKG1pc3NpbmdJbmdyZWRpZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAnWW91IGhhdmUgdGhlIGluZ3JlZGllbnRzISc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBtaXNzaW5nID0gbWlzc2luZ0luZ3JlZGllbnRzLmxlbmd0aDtcbiAgICAgIHJldHVybiBgWW91IHN0aWxsIG5lZWQgJHttaXNzaW5nfSBtb3JlIGluZ3JlZGllbnRzLmA7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tIb3dNdWNoTW9yZShyZWNpcGUpIHtcbiAgICBsZXQgbWlzc2luZ0luZ3JlZGllbnRzID0gdGhpcy5maW5kTWlzc2luZ0luZ3JlZGllbnRzKHJlY2lwZSk7XG4gICAgbGV0IGRpZmZlcmVuY2UgPSBtaXNzaW5nSW5ncmVkaWVudHMubWFwKGluZ3JlZGllbnQgPT4ge1xuICAgICAgbGV0IG5hbWUgPSByZWNpcGUuaW5ncmVkaWVudHNEYXRhLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBpbmdyZWRpZW50LmlkKTtcbiAgICAgIGxldCBuZWVkZWRJbmcgPSB7XG4gICAgICAgIGlkOiBpbmdyZWRpZW50LmlkLFxuICAgICAgICBjb3N0OiAwLFxuICAgICAgICBuYW1lOiBuYW1lLm5hbWUsXG4gICAgICAgIHVuaXQ6IGluZ3JlZGllbnQucXVhbnRpdHkudW5pdCxcbiAgICAgICAgcXVhbnRpdHlOZWVkZWQ6IHBhcnNlRmxvYXQoaW5ncmVkaWVudC5xdWFudGl0eS5hbW91bnQudG9GaXhlZCgyKSlcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnBhbnRyeS51c2VySW5ncmVkaWVudHNbaW5ncmVkaWVudC5pZF0pIHtcbiAgICAgICAgbmVlZGVkSW5nLnF1YW50aXR5TmVlZGVkID0gcGFyc2VGbG9hdChpbmdyZWRpZW50LnF1YW50aXR5LmFtb3VudCAtIHRoaXMucGFudHJ5LnVzZXJJbmdyZWRpZW50c1tpbmdyZWRpZW50LmlkXS50b0ZpeGVkKDIpKVxuICAgICAgfVxuICAgICAgbGV0IGluZ3JlZGllbnRJdGVtID0gcmVjaXBlLmluZ3JlZGllbnRzRGF0YS5maW5kKGl0ZW0gPT4gaW5ncmVkaWVudC5pZCA9PT0gaXRlbS5pZClcbiAgICAgIG5lZWRlZEluZy5jb3N0ID0gKG5lZWRlZEluZy5xdWFudGl0eU5lZWRlZCAqIGluZ3JlZGllbnRJdGVtLmVzdGltYXRlZENvc3RJbkNlbnRzKSAvIDEwMDtcbiAgICAgIHJldHVybiBuZWVkZWRJbmc7XG4gICAgfSlcbiAgICByZXR1cm4gZGlmZmVyZW5jZTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb29rYm9vay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3N0eWxlcy5zY3NzPzEzYjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbVVwZGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVjaXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy91c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtR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QUNGOztBQUVBO0FBQ0EsWUFBWSxFQUFFOztBQUVkO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztB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O0FBRUE7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUssSUFBSTtBQUNUO0FBQ0E7O0FBRUE7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxL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QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5WUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFB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QUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLCtDQUFNO0FBQy9CO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwrQkFBK0IsUUFBUTtBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7QUFHZSxtRUFBSSxFQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4vKioqKioqLyBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vKioqKioqLyBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuLyoqKioqKi8gXHRcdHJldHVybiBucztcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovICh7XG5cbi8qKiovIFwiLi9kaXN0L2J1bmRsZS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vZGlzdC9idW5kbGUuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL2Nzcy9zdHlsZXMuc2Nzc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NyYy9jc3Mvc3R5bGVzLnNjc3MgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzICovIFwiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaSwgXCJodG1sIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzUxNUM7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dzsgfVxcblxcbmJvZHkge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogYXV0bzsgfVxcblxcbm1haW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3NTE1QztcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuXFxuLm1haW4taGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJGNUVFO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDsgfVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMjU1JTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICB3aWR0aDogMzAlOyB9XFxuXFxubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAxMHB4OyB9XFxuXFxuLm5hdkJ1dHRvbiB7XFxuICBmb250LXNpemU6IDEzMCU7XFxuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VCRjVFRTtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzAwMDtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMwMDA7XFxuICBtYXJnaW46IDElIDIwcHggMSUgMSU7IH1cXG4gIC5uYXZCdXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZmMmRhOyB9XFxuICAubmF2QnV0dG9uOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDM0MyQzY7IH1cXG5cXG4ubG93ZXItaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XFxuXFxuLmdyZWV0aW5nIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGNvbG9yOiAjRUJGNUVFO1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDsgfVxcblxcbi5zZWFyY2gtYXJlYSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7IH1cXG5cXG4uc2VhcmNoLWJhciB7XFxuICBtYXgtaGVpZ2h0OiA2dmg7XFxuICBtYXJnaW46IDVweDtcXG4gIHBhZGRpbmc6IDNweDsgfVxcblxcbi5zZWFyY2gtaW1hZ2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VCRjVFRTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICB3aWR0aDogMjAlO1xcbiAgbWFyZ2luLXJpZ2h0OiAwOyB9XFxuICAuc2VhcmNoLWltYWdlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NmZjJkYTsgfVxcbiAgLnNlYXJjaC1pbWFnZTphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzNDMkM2OyB9XFxuXFxuLnNlYXJjaC1pbnB1dCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgbWluLXdpZHRoOiA5MCU7IH1cXG5cXG4uYWxsLWNhcmRzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWdhcDogMzBweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgd2lkdGg6IDk1LjV2dzsgfVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbmltZyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4uY2FyZC1idXR0b24ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gIGhlaWdodDogMjdweDtcXG4gIG1hcmdpbjogM3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAuY2FyZC1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZmMmRhOyB9XFxuICAuY2FyZC1idXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0MzQzJDNjsgfVxcblxcbi5hZGQtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFQkY1RUU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEyJTsgfVxcblxcbi5hZGQge1xcbiAgd2lkdGg6IDkwJTsgfVxcblxcbi5mYXZvcml0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJGNUVFO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMyU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xNDkvMTQ5MjIyLnN2Z1xcXCIpOyB9XFxuXFxuLmNhcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q3RjJGRTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICMwMDA7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5jYXJkLWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJGNUVFO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdzsgfVxcblxcbi5hbGwge1xcbiAgZ3JpZC1nYXA6IDA7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpOyB9XFxuXFxuLmFsbC1yZWNpcGUtaW5mbyxcXG5vbCB7XFxuICBmb250LXNpemU6IDE1MCU7XFxuICBjb2xvcjogI0VCRjVFRTtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuaDMge1xcbiAgZm9udC1zaXplOiAxNTAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VCRjVFRTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4OyB9XFxuXFxuLnJlY2lwZS1uYW1lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFQkY1RUU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmb250LXNpemU6IDE1MCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4uY2FyZC1waWN0dXJlIHtcXG4gIGhlaWdodDogMjAwcHg7XFxuICB3aWR0aDogOTQlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gIG1hcmdpbjogMTBweCAzJSA4cHggMi42JTsgfVxcbiAgLmNhcmQtcGljdHVyZTpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDAuNzsgfVxcbiAgLmNhcmQtcGljdHVyZTphY3RpdmUge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwOyB9XFxuXFxuLndyYXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGhlaWdodDogaW5oZXJpdDtcXG4gIGJvcmRlcjogMDsgfVxcblxcbi5mYXZvcml0ZS1hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMTQ4LzE0ODg0MS5zdmdcXFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IH1cXG5cXG4uZGlzcGxheS1yZWNpcGUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtZ2FwOiA3cHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNmZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmcjtcXG4gIG1hcmdpbjogMTVweDsgfVxcblxcbi5kaXNwbGF5LXJlY2lwZS1pbmZvIHtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgZ3JpZC1yb3c6IDAuNTsgfVxcblxcbi5yZWNpcGUtaW5ncmVkaWVudHMge1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBncmlkLWNvbHVtbjogMjtcXG4gIGdyaWQtcm93OiAxO1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIGhlaWdodDogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGNvbG9yOiAjRUJGNUVFOyB9XFxuXFxuLnJlY2lwZS1pbmdyZWRpZW50cy10aXRsZSB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgZm9udC1zaXplOiAyMHB4OyB9XFxuXFxuLnJlY2lwZS1pbnN0cnVjdGlvbnMge1xcbiAgZ3JpZC1jb2x1bW46IDEvc3BhbiAyO1xcbiAgZ3JpZC1yb3c6IDI7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogI0VCRjVFRTtcXG4gIG1heC13aWR0aDogOTB2dztcXG4gIG1hcmdpbi10b3A6IDEwMHB4OyB9XFxuXFxuLnRvLWNvb2stZ3JlZXRpbmcge1xcbiAgY29sb3I6ICNFQkY1RUU7IH1cXG5cXG4uY2xvc2UtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFQkY1RUU7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgd2lkdGg6IDEzJTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL3N2Zy9zdGF0aWMvaWNvbnMvc3ZnLzQ0Ni80NDYwOTEuc3ZnXFxcIik7XFxuICBmb250LXdlaWdodDogYm9sZDsgfVxcblxcbi5pbmctY29zdCxcXG4ubmVlZGVkLWluZ3MsXFxuLnBhbnRyeS1idXR0b25zIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4OyB9XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDgyNXB4KSB7XFxuICBtYWluIHtcXG4gICAgd2lkdGg6IDk1JTsgfVxcbiAgLmFsbC1jYXJkcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtZ2FwOiAzMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBwYWRkaW5nOiAzMHB4IDAgMzBweCAzMHB4O1xcbiAgICB3aWR0aDogOTUuNXZ3OyB9XFxuICAuZGlzcGxheS1yZWNpcGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgLnJlY2lwZS1pbnN0cnVjdGlvbnMge1xcbiAgICBtYXJnaW4tdG9wOiAwOyB9IH1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5hbGwtY2FyZHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWdhcDogMzBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgcGFkZGluZzogMzBweCAwIDMwcHggMzBweDtcXG4gICAgd2lkdGg6IDk1LjV2dzsgfVxcbiAgLmRpc3BsYXktcmVjaXBlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gIC5zZWFyY2gtaW1hZ2Uge1xcbiAgICBkaXNwbGF5OiBub25lOyB9IH1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcXG4gIC5sb3dlci1oZWFkZXIsXFxuICAubWFpbi1oZWFkZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAuc2VhcmNoLWlucHV0IHtcXG4gICAgbWluLXdpZHRoOiA4MHZ3OyB9XFxuICAuYWxsLWNhcmRzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1nYXA6IDMwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XFxuICAgIHBhZGRpbmc6IDMwcHggMCAzMHB4IDMwcHg7XFxuICAgIHdpZHRoOiA5NS41dnc7IH1cXG4gIC5jYXJkLWJ1dHRvbiB7XFxuICAgIGhlaWdodDogYXV0bzsgfVxcbiAgLnRvLWNvb2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAuY2FyZCB7XFxuICAgIG1heC13aWR0aDogOTUlOyB9IH1cXG5cIiwgXCJcIl0pO1xuXG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuICdAbWVkaWEgJyArIGl0ZW1bMl0gKyAneycgKyBjb250ZW50ICsgJ30nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9ICcoJyArIGl0ZW1bMl0gKyAnKSBhbmQgKCcgKyBtZWRpYVF1ZXJ5ICsgJyknO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuICByZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3VybHMgKi8gXCIuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAoZmFsc2UpIHt9XG5cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ubmM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvY29va2Jvb2suanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvY29va2Jvb2suanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbmNsYXNzIENvb2tib29rIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMucmVjaXBlcyA9IGRhdGE7XG4gIH1cblxuICBmaW5kUmVjaXBlcyhzZWFyY2hUZXh0KSB7XG4gICAgcmV0dXJuIHRoaXMucmVjaXBlcy5maWx0ZXIoKHJlY2lwZSk9PntcbiAgICAgIGxldCBpbmdyZWRpZW50TmFtZXMgPSByZWNpcGUuaW5ncmVkaWVudHMubWFwKChpbmdyZWRpZW50KT0+e1xuICAgICAgICByZXR1cm4gaW5ncmVkaWVudC5uYW1lXG4gICAgICB9KVxuICAgICAgcmV0dXJuIHJlY2lwZS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGV4dCkgfHxcbiAgICAgIHJlY2lwZS50YWdzLmluY2x1ZGVzKHNlYXJjaFRleHQpIHx8XG4gICAgICBpbmdyZWRpZW50TmFtZXMuaW5jbHVkZXMoc2VhcmNoVGV4dClcbiAgICB9KVxuICB9XG59XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAoQ29va2Jvb2spO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2Nzcy9zdHlsZXMuc2Nzc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvY3NzL3N0eWxlcy5zY3NzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cbnZhciBjb250ZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGVzLnNjc3MgKi8gXCIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zcmMvY3NzL3N0eWxlcy5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMgKi8gXCIuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKGZhbHNlKSB7fVxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9kb21VcGRhdGVzLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvZG9tVXBkYXRlcy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3BhbnRyeV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9wYW50cnkgKi8gXCIuL3NyYy9wYW50cnkuanNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3JlY2lwZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9yZWNpcGUgKi8gXCIuL3NyYy9yZWNpcGUuanNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3VzZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vdXNlciAqLyBcIi4vc3JjL3VzZXIuanNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2Nvb2tib29rX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2Nvb2tib29rICovIFwiLi9zcmMvY29va2Jvb2suanNcIik7XG5cblxuXG5cblxuXG5sZXQgZG9tVXBkYXRlcyA9IHtcblxuICB1c2VyczogW3t9XSxcbiAgcmVjaXBlRGF0YTogW3t9XSxcbiAgaW5ncmVkaWVudHNEYXRhOiBbe31dLFxuICB1c2VyOiB7fSxcbiAgY29va2Jvb2s6IG51bGwsXG5cbiAgZ2V0V2hhdHNDb29raW5nRGF0YTogKCkgPT4ge1xuICAgIFByb21pc2UuYWxsKFtcbiAgICAgIGZldGNoKCdodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvd2hhdHMtY29va2luLzE5MTEvdXNlcnMvd2NVc2Vyc0RhdGEnKSxcbiAgICAgIGZldGNoKCdodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvd2hhdHMtY29va2luLzE5MTEvcmVjaXBlcy9yZWNpcGVEYXRhJyksXG4gICAgICBmZXRjaCgnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL3doYXRzLWNvb2tpbi8xOTExL2luZ3JlZGllbnRzL2luZ3JlZGllbnRzRGF0YScpXG4gICAgXSlcbiAgICAgIC50aGVuKHJlc3BvbnNlcyA9PiBQcm9taXNlLmFsbChyZXNwb25zZXMubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkpKVxuICAgICAgLnRoZW4ocmVzcG9uc2VzID0+IHtcbiAgICAgICAgZG9tVXBkYXRlcy51c2VycyA9IHJlc3BvbnNlc1swXS53Y1VzZXJzRGF0YTtcbiAgICAgICAgZG9tVXBkYXRlcy5yZWNpcGVEYXRhID0gcmVzcG9uc2VzWzFdLnJlY2lwZURhdGE7XG4gICAgICAgIGRvbVVwZGF0ZXMuaW5ncmVkaWVudHNEYXRhID0gcmVzcG9uc2VzWzJdLmluZ3JlZGllbnRzRGF0YTtcbiAgICAgICAgZG9tVXBkYXRlcy5jcmVhdGVEYXRhTW9kZWwoKTtcbiAgICAgICAgZG9tVXBkYXRlcy51cGRhdGVEaXNwbGF5KCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcbiAgfSxcblxuICBjcmVhdGVEYXRhTW9kZWw6ICgpID0+IHtcbiAgICBsZXQgcGFudHJ5ID0gbmV3IF9wYW50cnlfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImRlZmF1bHRcIl0oZG9tVXBkYXRlcy51c2Vyc1swXS5wYW50cnkpO1xuICAgIGRvbVVwZGF0ZXMudXNlciA9IG5ldyBfdXNlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fW1wiZGVmYXVsdFwiXShkb21VcGRhdGVzLnVzZXJzWzBdLCBwYW50cnksIGRvbVVwZGF0ZXMuaW5ncmVkaWVudHNEYXRhKTtcbiAgICBsZXQgcmVjaXBlRGVjayA9IGRvbVVwZGF0ZXMucmVjaXBlRGF0YS5tYXAocmVjaXBlID0+IHtcbiAgICAgIHJldHVybiByZWNpcGUgPSBuZXcgX3JlY2lwZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fW1wiZGVmYXVsdFwiXShyZWNpcGUsIGRvbVVwZGF0ZXMuaW5ncmVkaWVudHNEYXRhKTtcbiAgICB9KVxuICAgIGRvbVVwZGF0ZXMuY29va2Jvb2sgPSBuZXcgX2Nvb2tib29rX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX19bXCJkZWZhdWx0XCJdKHJlY2lwZURlY2spO1xuICB9LFxuXG4gIHVwZGF0ZURpc3BsYXk6ICgpID0+IHtcbiAgICBkb21VcGRhdGVzLmdyZWV0VXNlcigpO1xuICAgIGRvbVVwZGF0ZXMucG9wdWxhdGVDYXJkcyhkb21VcGRhdGVzLmNvb2tib29rLnJlY2lwZXMpO1xuICB9LFxuXG4gIGdyZWV0VXNlcjogKCkgPT4ge1xuICAgIGNvbnN0IHdlbGNvbWVNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyZWV0aW5nJyk7XG4gICAgd2VsY29tZU1lc3NhZ2UuaW5uZXJUZXh0ID0gYFdlbGNvbWUgJHtkb21VcGRhdGVzLnVzZXIubmFtZX0hYDtcbiAgfSxcblxuICBwb3B1bGF0ZUNhcmRzOiAocmVjaXBlcykgPT4ge1xuICAgIGNvbnN0IGNhcmRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tc2VjdGlvbicpO1xuICAgIGNhcmRBcmVhLmNsYXNzTGlzdCA9ICdhbGwtY2FyZHMnO1xuICAgIGNhcmRBcmVhLmlubmVySFRNTCA9ICcnO1xuICAgIHJlY2lwZXMuZm9yRWFjaChyZWNpcGUgPT4ge1xuICAgICAgY2FyZEFyZWEuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgZG9tVXBkYXRlcy5jb25zdHJ1Y3RDYXJkKHJlY2lwZSkpXG4gICAgfSk7XG4gIH0sXG5cbiAgY29uc3RydWN0Q2FyZDogKHJlY2lwZSkgPT4ge1xuICAgIGxldCBjbGFzc0xpc3RcbiAgICBpZiAoZG9tVXBkYXRlcy51c2VyLmZhdm9yaXRlUmVjaXBlcy5pbmNsdWRlcyhyZWNpcGUpKSB7XG4gICAgICBjbGFzc0xpc3QgPSAnZmF2b3JpdGUgY2FyZC1idXR0b24gZmF2b3JpdGUtYWN0aXZlJ1xuICAgIH0gZWxzZSB7XG4gICAgICBjbGFzc0xpc3QgPSAnZmF2b3JpdGUgY2FyZC1idXR0b24nXG4gICAgfVxuICAgIHJldHVybiBgPGRpdiBjbGFzcz0nY2FyZCAke3JlY2lwZS5pZH0nPlxuICAgIDxoZWFkZXIgY2xhc3M9J2NhcmQtaGVhZGVyICR7cmVjaXBlLmlkfSc+XG4gICAgICA8bGFiZWwgZm9yPSdhZGQtYnV0dG9uJyBjbGFzcz0naGlkZGVuJz5DbGljayB0byBhZGQgcmVjaXBlPC9sYWJlbD5cbiAgICAgIDxidXR0b24gYXJpYS1sYWJlbD0nYWRkLWJ1dHRvbicgY2xhc3M9J2FkZC1idXR0b24gY2FyZC1idXR0b24gJHtyZWNpcGUuaWR9Jz5cbiAgICAgICAgPGltZyBjbGFzcz0nYWRkICR7cmVjaXBlLmlkfSBhZGQtYnV0dG9uJyBzcmM9J2h0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8zMi8zMjMzOS5zdmcnIGFsdD0nQWRkIHRvXG4gICAgICAgIHJlY2lwZXMgdG8gY29vayc+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxsYWJlbCBmb3I9J2Zhdm9yaXRlLWJ1dHRvbicgY2xhc3M9J2hpZGRlbic+Q2xpY2sgdG8gZmF2b3JpdGUgcmVjaXBlPC9sYWJlbD5cbiAgICAgIDxidXR0b24gYXJpYS1sYWJlbD0nZmF2b3JpdGUtYnV0dG9uJyBjbGFzcz0nJHtjbGFzc0xpc3R9IGZhdm9yaXRlJHtyZWNpcGUuaWR9ICR7cmVjaXBlLmlkfSc+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2hlYWRlcj5cbiAgICA8c3BhbiBjbGFzcz0ncmVjaXBlLW5hbWUgJHtyZWNpcGUuaWR9Jz4ke3JlY2lwZS5uYW1lfTwvc3Bhbj5cbiAgICAgIDxidXR0b24gYXJpYS1sYWJlbD0ncmVjaXBlLWluZm8nIGNsYXNzPSdjYXJkLXBpY3R1cmUgJHtyZWNpcGUuaWR9IHdyYXAnPlxuICAgICAgICA8aW1nIHRhYmluZGV4PScwJyBjbGFzcz0nY2FyZC1waWN0dXJlICR7cmVjaXBlLmlkfSdzcmM9JyR7cmVjaXBlLmltYWdlfScgYWx0PSdGb29kIGZyb20gcmVjaXBlJz5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PmBcbiAgfSxcblxuICBmaW5kU3BlY2lmaWNSZWNpcGU6IChldmVudCkgPT4ge1xuICAgIHJldHVybiBkb21VcGRhdGVzLmNvb2tib29rLnJlY2lwZXMuZmluZChyZWNpcGUgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMocmVjaXBlLmlkKSkge1xuICAgICAgICByZXR1cm4gcmVjaXBlO1xuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgZmF2b3JpdGVDYXJkOiAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBzaG93RmF2b3JpdGVzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpZXctZmF2b3JpdGVzJyk7XG4gICAgbGV0IHNwZWNpZmljUmVjaXBlID0gZG9tVXBkYXRlcy5maW5kU3BlY2lmaWNSZWNpcGUoZXZlbnQpO1xuICAgIGlmICghZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZmF2b3JpdGUtYWN0aXZlJykpIHtcbiAgICAgIHNob3dGYXZvcml0ZXNCdXR0b24uaW5uZXJIVE1MID0gJ1ZpZXcgRmF2b3JpdGVzJztcbiAgICAgIGRvbVVwZGF0ZXMudXNlci5hZGRUb0Zhdm9yaXRlcyhzcGVjaWZpY1JlY2lwZSk7XG4gICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYXZvcml0ZS1hY3RpdmUnKSkge1xuICAgICAgZG9tVXBkYXRlcy51c2VyLnJlbW92ZUZyb21GYXZvcml0ZXMoc3BlY2lmaWNSZWNpcGUpXG4gICAgfVxuICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdmYXZvcml0ZS1hY3RpdmUnKTtcbiAgfSxcblxuICB2aWV3RmF2b3JpdGVzOiAoKSA9PiB7XG4gICAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1hcmVhJyk7XG4gICAgc2VhcmNoQmFyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgY29uc3Qgc2hvd0Zhdm9yaXRlc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aWV3LWZhdm9yaXRlcycpO1xuICAgIGNvbnN0IGNhcmRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tc2VjdGlvbicpO1xuICAgIGNhcmRBcmVhLmNsYXNzTGlzdCA9ICdhbGwtY2FyZHMnO1xuICAgIGlmICghZG9tVXBkYXRlcy51c2VyLmZhdm9yaXRlUmVjaXBlcy5sZW5ndGgpIHtcbiAgICAgIHNob3dGYXZvcml0ZXNCdXR0b24uaW5uZXJIVE1MID0gJ1lvdSBoYXZlIG5vIGZhdm9yaXRlcyEnO1xuICAgICAgZG9tVXBkYXRlcy5wb3B1bGF0ZUNhcmRzKGRvbVVwZGF0ZXMuY29va2Jvb2sucmVjaXBlcyk7XG4gICAgICByZXR1cm5cbiAgICB9IGVsc2Uge1xuICAgICAgc2hvd0Zhdm9yaXRlc0J1dHRvbi5pbm5lckhUTUwgPSAnUmVmcmVzaCBGYXZvcml0ZXMnXG4gICAgICBjYXJkQXJlYS5pbm5lckhUTUwgPSAnJztcbiAgICAgIGRvbVVwZGF0ZXMudXNlci5mYXZvcml0ZVJlY2lwZXMuZm9yRWFjaChyZWNpcGUgPT4ge1xuICAgICAgICBjYXJkQXJlYS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBkb21VcGRhdGVzLmNvbnN0cnVjdENhcmQocmVjaXBlKSlcbiAgICAgIH0pXG4gICAgfVxuICB9LFxuXG4gIGFkZFRvVG9Db29rOiAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBzaG93VG9Db29rQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWNvb2snKTtcbiAgICBsZXQgc3BlY2lmaWNSZWNpcGUgPSBkb21VcGRhdGVzLmZpbmRTcGVjaWZpY1JlY2lwZShldmVudCk7XG4gICAgaWYgKCFldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGQtYWN0aXZlJykpIHtcbiAgICAgIHNob3dUb0Nvb2tCdXR0b24uaW5uZXJUZXh0ID0gJ1RvIENvb2snXG4gICAgICBhbGVydChkb21VcGRhdGVzLnVzZXIuY2hlY2tQYW50cnlJbmdyZWRpZW50cyhzcGVjaWZpY1JlY2lwZSkpO1xuICAgICAgZG9tVXBkYXRlcy51c2VyLmFkZFRvUmVjaXBlc1RvQ29vayhzcGVjaWZpY1JlY2lwZSk7XG4gICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGQtYWN0aXZlJykpIHtcbiAgICAgIGRvbVVwZGF0ZXMudXNlci5yZW1vdmVGcm9tUmVjaXBlc1RvQ29vayhzcGVjaWZpY1JlY2lwZSlcbiAgICB9XG4gICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2FkZC1hY3RpdmUnKTtcbiAgfSxcblxuICBkaXNwbGF5VG9Db29rQ2FyZHM6ICgpID0+IHtcbiAgICBjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWFyZWEnKTtcbiAgICBzZWFyY2hCYXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICBjb25zdCBjYXJkQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLXNlY3Rpb24nKTtcbiAgICBjYXJkQXJlYS5jbGFzc0xpc3QgPSAnJztcbiAgICBjYXJkQXJlYS5pbm5lckhUTUwgPVxuICAgICAgYDxzZWN0aW9uIGNsYXNzPSd0by1jb29rJz5cbiAgICAgICAgPGgxIGNsYXNzPSd0by1jb29rLWdyZWV0aW5nJz5SZWNpcGVzIFRvIENvb2s8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkLXNlY3Rpb24gYWxsLWNhcmRzJz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+YFxuICAgIGxldCBjYXJkU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLXNlY3Rpb24nKVxuICAgIGRvbVVwZGF0ZXMudXNlci5yZWNpcGVzVG9Db29rLmZvckVhY2gocmVjaXBlID0+IHtcbiAgICAgIGxldCB2YWx1ZXMgPSBkb21VcGRhdGVzLnVzZXIuY2hlY2tIb3dNdWNoTW9yZShyZWNpcGUpLm1hcChvYmogPT4ge1xuICAgICAgICByZXR1cm4gYCR7b2JqLnF1YW50aXR5TmVlZGVkfSAke29iai51bml0fSBtb3JlICR7b2JqLm5hbWV9YDtcbiAgICAgIH0pO1xuICAgICAgbGV0IG5lZWRlZENvc3QgPSBkb21VcGRhdGVzLnVzZXIuY2hlY2tIb3dNdWNoTW9yZShyZWNpcGUpLnJlZHVjZSgodG90YWwsIGluZ3JlZGllbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIHRvdGFsICs9IGluZ3JlZGllbnQuY29zdDtcbiAgICAgIH0sIDApO1xuICAgICAgY2FyZFNlY3Rpb24uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgPGRpdiBjbGFzcz0nY2FyZCAke3JlY2lwZS5pZH0nPlxuICAgIDxoZWFkZXIgY2xhc3M9J2NhcmQtaGVhZGVyICR7cmVjaXBlLmlkfSc+XG4gICAgICA8bGFiZWwgZm9yPSdjbG9zZS1idXR0b24nIGNsYXNzPSdoaWRkZW4nPjwvbGFiZWw+XG4gICAgICA8YnV0dG9uIGFyaWEtbGFiZWw9J2Nsb3NlLWJ1dHRvbicgY2xhc3M9J2Nsb3NlLWJ1dHRvbiBjYXJkLWJ1dHRvbiAke3JlY2lwZS5pZH0nPlxuICAgICAgICA8aW1nIGNsYXNzPSdjbG9zZS1idXR0b24gJHtyZWNpcGUuaWR9JyBzcmM9J2h0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9zdmcvc3RhdGljL2ljb25zL3N2Zy80NDYvNDQ2MDkxLnN2ZycgYWx0PSdyZW1vdmUgZnJvbSByZWNpcGVzIHRvIGNvb2snPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8bGFiZWwgZm9yPSdmYXZvcml0ZS1idXR0b24nIGNsYXNzPSdoaWRkZW4nPkNsaWNrIHRvIGZhdm9yaXRlIHJlY2lwZTwvbGFiZWw+XG4gICAgICA8YnV0dG9uIGFyaWEtbGFiZWw9J2Zhdm9yaXRlLWJ1dHRvbicgY2xhc3M9J2Zhdm9yaXRlIGNhcmQtYnV0dG9uIGZhdm9yaXRlJHtyZWNpcGUuaWR9ICR7cmVjaXBlLmlkfSc+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2hlYWRlcj5cbiAgICAgIDxoMz4ke3JlY2lwZS5uYW1lfTwvaDM+XG4gICAgICA8aW1nIHRhYmluZGV4PScwJyBjbGFzcz0nY2FyZC1waWN0dXJlICR7cmVjaXBlLmlkfSdcbiAgICAgIHNyYz0nJHtyZWNpcGUuaW1hZ2V9JyBhbHQ9J0Zvb2QgZnJvbSByZWNpcGUnPlxuICAgICAgPGRpdiBjbGFzcyA9IFwicGFudHJ5LWJ1dHRvbnNcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgbmFtZT1cIkFkZCBOZWVkZWQgSW5ncmVkaWVudHNcIiBjbGFzcz1cImJvdWdodC1pbmdyZWRpZW50cyBib3VnaHQtaW5ncmVkaWVudHMke3JlY2lwZS5pZH0gJHtyZWNpcGUuaWR9XCI+QWRkIE5lZWRlZCBJbmdyZWRpZW50czwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBuYW1lPVwiSGF2ZSBDb29rZWRcIiBjbGFzcz1cImhhdmUtY29va2VkIGhhdmUtY29va2VkJHtyZWNpcGUuaWR9ICR7cmVjaXBlLmlkfVwiPkhhdmUgQ29va2VkPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwIGNsYXNzPSduZWVkZWQtaW5ncyc+SW5ncmVkaWVudHMgU3RpbGwgTmVlZGVkOjwvcD5cbiAgICAgIDx1bCA+XG4gICAgICA8bGk+JHt2YWx1ZXMuam9pbignPC9saT48bGk+Jyl9PC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8cCBjbGFzcz0naW5nLWNvc3QnPkNvc3QgdG8gU3RpbGwgR2V0OiQke25lZWRlZENvc3R9PC9wPlxuICAgIDwvZGl2PmApO1xuICAgIH0pO1xuICB9LFxuXG4gIHNob3dUb0Nvb2tSZWNpcGVzOiAoKSA9PiB7XG4gICAgY29uc3Qgc2hvd1RvQ29va0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1jb29rJyk7XG4gICAgaWYgKCFkb21VcGRhdGVzLnVzZXIucmVjaXBlc1RvQ29vay5sZW5ndGgpIHtcbiAgICAgIHNob3dUb0Nvb2tCdXR0b24uaW5uZXJUZXh0ID0gJ1lvdSBoYXZlIG5vIHNhdmVkIFJlY2lwZXMhJztcbiAgICAgIGRvbVVwZGF0ZXMucG9wdWxhdGVDYXJkcyhkb21VcGRhdGVzLmNvb2tib29rLnJlY2lwZXMpO1xuICAgICAgcmV0dXJuXG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbVVwZGF0ZXMuZGlzcGxheVRvQ29va0NhcmRzKCk7XG4gICAgfVxuICB9LFxuXG4gIHJlbW92ZUZyb21Ub0Nvb2s6ICgpID0+IHtcbiAgICBsZXQgc3BlY2lmaWNSZWNpcGUgPSBkb21VcGRhdGVzLmNvb2tib29rLnJlY2lwZXMuZmluZChyZWNpcGUgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMocmVjaXBlLmlkKSkge1xuICAgICAgICByZXR1cm4gcmVjaXBlO1xuICAgICAgfVxuICAgIH0pXG4gICAgZG9tVXBkYXRlcy51c2VyLnJlbW92ZUZyb21SZWNpcGVzVG9Db29rKHNwZWNpZmljUmVjaXBlKTtcbiAgICBkb21VcGRhdGVzLmRpc3BsYXlUb0Nvb2tDYXJkcygpO1xuICB9LFxuXG4gIGRpc3BsYXlEaXJlY3Rpb25zOiAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWFyZWEnKTtcbiAgICBzZWFyY2hCYXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICBjb25zdCBjYXJkQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLXNlY3Rpb24nKTtcbiAgICBjYXJkQXJlYS5jbGFzc0xpc3QgPSAncmVjaXBlLWRpcmVjdGlvbnMnO1xuICAgIGxldCBzcGVjaWZpY1JlY2lwZSA9IGRvbVVwZGF0ZXMuZmluZFNwZWNpZmljUmVjaXBlKGV2ZW50KTtcbiAgICBsZXQgY29zdCA9IHNwZWNpZmljUmVjaXBlLmNhbGN1bGF0ZUNvc3QoKTtcbiAgICBjYXJkQXJlYS5pbm5lckhUTUwgPSAnJztcbiAgICBsZXQgbmVlZGVkSW5ncmVkaWVudHMgPSBbXTtcbiAgICBzcGVjaWZpY1JlY2lwZS5pbmdyZWRpZW50cy5mb3JFYWNoKGluZ3JlZGllbnQgPT4ge1xuICAgICAgbGV0IG5hbWUgPSBzcGVjaWZpY1JlY2lwZS5pbmdyZWRpZW50c0RhdGEuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGluZ3JlZGllbnQuaWQpLm5hbWVcbiAgICAgIG5lZWRlZEluZ3JlZGllbnRzLnB1c2goYCR7aW5ncmVkaWVudC5xdWFudGl0eS5hbW91bnQudG9GaXhlZCgyKX0gJHtpbmdyZWRpZW50LnF1YW50aXR5LnVuaXR9ICR7bmFtZX1gKVxuICAgIH0pXG4gICAgbGV0IG5lZWRlZFN0ZXBzID0gW107XG4gICAgc3BlY2lmaWNSZWNpcGUuaW5zdHJ1Y3Rpb25zLmZvckVhY2goc3RlcCA9PiB7XG4gICAgICBuZWVkZWRTdGVwcy5wdXNoKGAke3N0ZXAubnVtYmVyfS4gJHtzdGVwLmluc3RydWN0aW9ufSBgKVxuICAgIH0pXG4gICAgY2FyZEFyZWEuaW5uZXJIVE1MID0gYDxzZWN0aW9uIGNsYXNzPSdkaXNwbGF5LXJlY2lwZSc+XG4gICAgPGRpdiBjbGFzcz0nZGlzcGxheS1yZWNpcGUtaW5mbyc+XG4gICAgICA8aDM+JHtzcGVjaWZpY1JlY2lwZS5uYW1lfTwvaDM+XG4gICAgICA8aW1nIGNsYXNzPSdjYXJkLXBpY3R1cmUnIHNyYz0nJHtzcGVjaWZpY1JlY2lwZS5pbWFnZX0nIGFsdD0nUmVjaXBlIGltYWdlIGZvciAke3NwZWNpZmljUmVjaXBlLm5hbWV9Jz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPSdyZWNpcGUtaW5ncmVkaWVudHMnPlxuICAgIDxoNSBjbGFzcz0ncmVjaXBlLWluZ3JlZGllbnRzLXRpdGxlJz5Zb3Ugd2lsbCBuZWVkOiA8L2g1PlxuICAgIDx1bD5cbiAgICA8bGk+JHtuZWVkZWRJbmdyZWRpZW50cy5qb2luKCc8L2xpPjxsaT4nKX08L2xpPlxuICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz0ncmVjaXBlLWluc3RydWN0aW9ucyc+XG4gICAgPGg1Pkluc3RydWN0aW9uczogPC9oNT5cbiAgICA8dWwgY2xhc3M9J2luc3RydWN0aW9uLWxpc3QnIHN0eWxlPSdsaXN0LXN0eWxlLXR5cGU6bm9uZTsnPlxuICAgIDxsaT4ke25lZWRlZFN0ZXBzLmpvaW4oJzwvbGk+PGxpPicpfTwvbGk+XG4gICAgPC91bD5cbiAgICA8aDU+VGhpcyByZWNpcGUgZ2VuZXJhbGx5IGNvc3RzOiAkJHtjb3N0fSA8L2g1PlxuICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5gO1xuICB9LFxuXG4gIGZpbHRlclJlY2lwZXM6ICgpID0+IHtcbiAgICBjb25zdCBjYXJkQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtY2FyZHMnKTtcbiAgICB2YXIgc2VhcmNoVGVybSA9IGV2ZW50LnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChzZWFyY2hUZXJtICE9PSAnJykge1xuICAgICAgY2FyZEFyZWEuaW5uZXJIVE1MID0gJyc7XG4gICAgICBkb21VcGRhdGVzLmRpc3BsYXlGaWx0ZXJlZFJlY2lwZXMoc2VhcmNoVGVybSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbVVwZGF0ZXMucG9wdWxhdGVDYXJkcyhkb21VcGRhdGVzLmNvb2tib29rLnJlY2lwZXMpO1xuICAgIH1cbiAgfSxcblxuICBkaXNwbGF5RmlsdGVyZWRSZWNpcGVzOiAoc2VhcmNoVGVybSkgPT4ge1xuICAgIGRvbVVwZGF0ZXMucG9wdWxhdGVDYXJkcyhkb21VcGRhdGVzLmNvb2tib29rLmZpbmRSZWNpcGVzKHNlYXJjaFRlcm0pKTtcbiAgfSxcblxuICBoYXZlQ29va2VkUmVjaXBlOiAoZXZlbnQpID0+IHtcbiAgICBsZXQgc3BlY2lmaWNSZWNpcGUgPSBkb21VcGRhdGVzLmZpbmRTcGVjaWZpY1JlY2lwZShldmVudCk7XG4gICAgY29uc3QgaGF2ZUNvb2tlZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5oYXZlLWNvb2tlZCR7c3BlY2lmaWNSZWNpcGUuaWR9YCk7XG4gICAgaWYgKGRvbVVwZGF0ZXMudXNlci5jaGVja1BhbnRyeUluZ3JlZGllbnRzKHNwZWNpZmljUmVjaXBlKSAhPT0gJ1lvdSBoYXZlIHRoZSBpbmdyZWRpZW50cyEnKSB7XG4gICAgICBhbGVydChcIllvdSBkb24ndCBoYXZlIHdoYXQgeW91IG5lZWQgeWV0XCIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbVVwZGF0ZXMudXNlci5yZW1vdmVQYW50cnlJbmdyaWRpZW50cyhzcGVjaWZpY1JlY2lwZSlcbiAgICAgIGhhdmVDb29rZWRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgfSxcblxuICBidXlJbmdyZWRpZW50czogKGV2ZW50KSA9PiB7XG4gICAgbGV0IHNwZWNpZmljUmVjaXBlID0gZG9tVXBkYXRlcy5maW5kU3BlY2lmaWNSZWNpcGUoZXZlbnQpO1xuICAgIGNvbnN0IGJ1eUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5ib3VnaHQtaW5ncmVkaWVudHMke3NwZWNpZmljUmVjaXBlLmlkfWApXG4gICAgZG9tVXBkYXRlcy51c2VyLmFkZE5lZWRlZFBhbnRyeUluZ3JpZGllbnRzKHNwZWNpZmljUmVjaXBlKVxuICAgIGJ1eUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gIH0sXG5cbn07XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAoZG9tVXBkYXRlcyk7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvcGFudHJ5LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9wYW50cnkuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG5jbGFzcyBQYW50cnkge1xuICBjb25zdHJ1Y3Rvcih1c2VyUGFudHJ5KSB7XG4gICAgdGhpcy51c2VyUGFudHJ5ID0gdXNlclBhbnRyeTtcbiAgICB0aGlzLnVzZXJJbmdyZWRpZW50cyA9IHt9O1xuICB9XG5cbiAgY29tcGlsZVBhbnRyeSgpIHtcbiAgICB0aGlzLnVzZXJJbmdyZWRpZW50cyA9IHRoaXMudXNlclBhbnRyeS5yZWR1Y2UoKHBhbnRyeSwgaW5ncmVkaWVudCkgPT4ge1xuICAgICAgaWYgKCFwYW50cnlbaW5ncmVkaWVudC5pbmdyZWRpZW50XSkge1xuICAgICAgICBwYW50cnlbaW5ncmVkaWVudC5pbmdyZWRpZW50XSA9IGluZ3JlZGllbnQuYW1vdW50O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFudHJ5W2luZ3JlZGllbnQuaW5ncmVkaWVudF0gKz0gaW5ncmVkaWVudC5hbW91bnQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gcGFudHJ5O1xuICAgIH0sIHt9KTtcbiAgfVxufVxuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIF9fd2VicGFja19leHBvcnRzX19bXCJkZWZhdWx0XCJdID0gKFBhbnRyeSk7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvcmVjaXBlLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9yZWNpcGUuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG5jbGFzcyBSZWNpcGUge1xuICBjb25zdHJ1Y3RvcihyZWNpcGUsIGluZ3JlZGllbnRzRGF0YSkge1xuICAgIHRoaXMubmFtZSA9IHJlY2lwZS5uYW1lO1xuICAgIHRoaXMuaWQgPSByZWNpcGUuaWQ7XG4gICAgdGhpcy5pbmdyZWRpZW50cyA9IHJlY2lwZS5pbmdyZWRpZW50cztcbiAgICB0aGlzLmluc3RydWN0aW9ucyA9IHJlY2lwZS5pbnN0cnVjdGlvbnM7XG4gICAgdGhpcy50YWdzID0gcmVjaXBlLnRhZ3M7XG4gICAgdGhpcy5pbmdyZWRpZW50c0RhdGEgPSBpbmdyZWRpZW50c0RhdGE7XG4gICAgdGhpcy5pbWFnZSA9IHJlY2lwZS5pbWFnZTtcbiAgfVxuXG4gIGNhbGN1bGF0ZUNvc3QoKSB7XG4gICAgbGV0IGNvc3RDb3VudGVyID0gMDtcbiAgICB0aGlzLmluZ3JlZGllbnRzLmZvckVhY2goaW5ncmVkaWVudCA9PiB7XG4gICAgICB0aGlzLmluZ3JlZGllbnRzRGF0YS5maW5kKHNwZWNpZmljSW5ncmVkaWVudCA9PiB7XG4gICAgICAgIGlmIChzcGVjaWZpY0luZ3JlZGllbnQuaWQgPT09IGluZ3JlZGllbnQuaWQpIHtcbiAgICAgICAgICBjb3N0Q291bnRlciArPSAoTnVtYmVyKHNwZWNpZmljSW5ncmVkaWVudC5lc3RpbWF0ZWRDb3N0SW5DZW50cykgKlxuICAgICAgICAgIE51bWJlcihpbmdyZWRpZW50LnF1YW50aXR5LmFtb3VudCkpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSk7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQoKGNvc3RDb3VudGVyIC8gMTAwKS50b0ZpeGVkKDIpKTtcbiAgfVxuXG59XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAoUmVjaXBlKTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9zY3JpcHRzLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvc2NyaXB0cy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIGV4cG9ydHMgcHJvdmlkZWQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2Nzc19zdHlsZXNfc2Nzc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9jc3Mvc3R5bGVzLnNjc3MgKi8gXCIuL3NyYy9jc3Mvc3R5bGVzLnNjc3NcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2Nzc19zdHlsZXNfc2Nzc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKF9jc3Nfc3R5bGVzX3Njc3NfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2RvbVVwZGF0ZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vZG9tVXBkYXRlcyAqLyBcIi4vc3JjL2RvbVVwZGF0ZXMuanNcIik7XG5cblxuXG5cbmNvbnN0IHNob3dGYXZvcml0ZXNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmlldy1mYXZvcml0ZXMnKTtcbmNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZScpXG5jb25zdCBjYXJkQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtY2FyZHMnKTtcbmNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtaW5wdXQnKTtcbmNvbnN0IHNob3dUb0Nvb2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tY29vaycpO1xuXG5jb25zdCBjYXJkQnV0dG9uQ29uZGl0aW9uYWxzID0gKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYXZvcml0ZScpKSB7XG4gICAgX2RvbVVwZGF0ZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImRlZmF1bHRcIl0uZmF2b3JpdGVDYXJkKGV2ZW50KTtcbiAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGQtYnV0dG9uJykpIHtcbiAgICBfZG9tVXBkYXRlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fW1wiZGVmYXVsdFwiXS5hZGRUb1RvQ29vayhldmVudCk7XG4gIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2FyZC1waWN0dXJlJykpIHtcbiAgICBfZG9tVXBkYXRlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fW1wiZGVmYXVsdFwiXS5kaXNwbGF5RGlyZWN0aW9ucyhldmVudCk7XG4gIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaG9tZScpKSB7XG4gICAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1hcmVhJyk7XG4gICAgc2VhcmNoQmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgc2hvd1RvQ29va0J1dHRvbi5pbm5lckhUTUwgPSAnVG8gQ29vayc7XG4gICAgc2hvd0Zhdm9yaXRlc0J1dHRvbi5pbm5lckhUTUwgPSAnVmlldyBGYXZvcml0ZXMnO1xuICAgIF9kb21VcGRhdGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkZWZhdWx0XCJdLnBvcHVsYXRlQ2FyZHMoX2RvbVVwZGF0ZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImRlZmF1bHRcIl0uY29va2Jvb2sucmVjaXBlcyk7XG4gIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2xvc2UtYnV0dG9uJykpIHtcbiAgICBfZG9tVXBkYXRlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fW1wiZGVmYXVsdFwiXS5yZW1vdmVGcm9tVG9Db29rKGV2ZW50KTtcbiAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdoYXZlLWNvb2tlZCcpKSB7XG4gICAgX2RvbVVwZGF0ZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImRlZmF1bHRcIl0uaGF2ZUNvb2tlZFJlY2lwZShldmVudCk7XG4gIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYm91Z2h0LWluZ3JlZGllbnRzJykpIHtcbiAgICBfZG9tVXBkYXRlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fW1wiZGVmYXVsdFwiXS5idXlJbmdyZWRpZW50cyhldmVudCk7XG4gIH1cbn1cblxud2luZG93Lm9ubG9hZCA9IF9kb21VcGRhdGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkZWZhdWx0XCJdLmdldFdoYXRzQ29va2luZ0RhdGEoKVxuaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhcmRCdXR0b25Db25kaXRpb25hbHMpO1xuY2FyZEFyZWEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYXJkQnV0dG9uQ29uZGl0aW9uYWxzKTtcbnNob3dGYXZvcml0ZXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfZG9tVXBkYXRlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fW1wiZGVmYXVsdFwiXS52aWV3RmF2b3JpdGVzKTtcbnNob3dUb0Nvb2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfZG9tVXBkYXRlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fW1wiZGVmYXVsdFwiXS5zaG93VG9Db29rUmVjaXBlcyk7XG5zZWFyY2hCYXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBfZG9tVXBkYXRlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fW1wiZGVmYXVsdFwiXS5maWx0ZXJSZWNpcGVzKTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy91c2VyLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvdXNlci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3BhbnRyeV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9wYW50cnkgKi8gXCIuL3NyYy9wYW50cnkuanNcIik7XG5cblxuY2xhc3MgVXNlciB7XG4gIGNvbnN0cnVjdG9yKHVzZXIsIHBhbnRyeSwgaW5ncmVkaWVudHNEYXRhKSB7XG4gICAgdGhpcy5pZCA9IHVzZXIuaWQ7XG4gICAgdGhpcy5uYW1lID0gdXNlci5uYW1lO1xuICAgIHRoaXMucGFudHJ5ID0gcGFudHJ5O1xuICAgIHRoaXMuZmF2b3JpdGVSZWNpcGVzID0gW107XG4gICAgdGhpcy5yZWNpcGVzVG9Db29rID0gW107XG4gICAgdGhpcy5pbmdyZWRpZW50c0RhdGEgPSBpbmdyZWRpZW50c0RhdGE7XG4gIH1cblxuICBhZGRUb0Zhdm9yaXRlcyhyZWNpcGUpIHtcbiAgICBpZiAoIXRoaXMuZmF2b3JpdGVSZWNpcGVzLmluY2x1ZGVzKHJlY2lwZSkpIHtcbiAgICAgIHRoaXMuZmF2b3JpdGVSZWNpcGVzLnB1c2gocmVjaXBlKTtcbiAgICB9XG4gIH1cblxuICBhZGRUb1JlY2lwZXNUb0Nvb2socmVjaXBlKSB7XG4gICAgaWYgKCF0aGlzLnJlY2lwZXNUb0Nvb2suaW5jbHVkZXMocmVjaXBlKSkge1xuICAgICAgdGhpcy5yZWNpcGVzVG9Db29rLnB1c2gocmVjaXBlKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVGcm9tUmVjaXBlc1RvQ29vayhyZWNpcGUpIHtcbiAgICBjb25zdCBpID0gdGhpcy5yZWNpcGVzVG9Db29rLmluZGV4T2YocmVjaXBlKTtcbiAgICB0aGlzLnJlY2lwZXNUb0Nvb2suc3BsaWNlKGksIDEpO1xuICB9XG5cbiAgcmVtb3ZlUGFudHJ5SW5ncmlkaWVudHMocmVjaXBlKSB7XG4gICAgcmVjaXBlLmluZ3JlZGllbnRzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGZldGNoKCdodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvd2hhdHMtY29va2luLzE5MTEvdXNlcnMvd2NVc2Vyc0RhdGEnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgXCJ1c2VySURcIjogdGhpcy5pZCxcbiAgICAgICAgICBcImluZ3JlZGllbnRJRFwiOiBpdGVtLmlkLFxuICAgICAgICAgIFwiaW5ncmVkaWVudE1vZGlmaWNhdGlvblwiOiAtKGl0ZW0ucXVhbnRpdHkuYW1vdW50KVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbih0aGlzLnVwZGF0ZVVzZXJQYW50cnkoKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gICAgICBzZXRUaW1lb3V0KHRoaXMudXBkYXRlVXNlclBhbnRyeSgpLCA0MDAwKVxuICAgIH0pO1xuXG4gIH1cblxuICBhZGROZWVkZWRQYW50cnlJbmdyaWRpZW50cyhyZWNpcGUpIHtcbiAgICB0aGlzLmNoZWNrSG93TXVjaE1vcmUocmVjaXBlKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBmZXRjaCgnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL3doYXRzLWNvb2tpbi8xOTExL3VzZXJzL3djVXNlcnNEYXRhJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIFwidXNlcklEXCI6IHRoaXMuaWQsXG4gICAgICAgICAgXCJpbmdyZWRpZW50SURcIjogaXRlbS5pZCxcbiAgICAgICAgICBcImluZ3JlZGllbnRNb2RpZmljYXRpb25cIjogaXRlbS5xdWFudGl0eU5lZWRlZFxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbih0aGlzLnVwZGF0ZVVzZXJQYW50cnkoKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVVc2VyUGFudHJ5KCkge1xuICAgIGZldGNoKCdodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvd2hhdHMtY29va2luLzE5MTEvdXNlcnMvd2NVc2Vyc0RhdGEnKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBsZXQgcGFudHJ5ID0gbmV3IF9wYW50cnlfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImRlZmF1bHRcIl0ocmVzcG9uc2Uud2NVc2Vyc0RhdGFbdGhpcy5pZCAtIDFdLnBhbnRyeSlcbiAgICAgICAgdGhpcy5wYW50cnkgPSBwYW50cnlcbiAgICAgICAgdGhpcy5wYW50cnkuY29tcGlsZVBhbnRyeSh0aGlzLmluZ3JlZGllbnRzRGF0YSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxuICB9XG5cbiAgcmVtb3ZlRnJvbUZhdm9yaXRlcyhyZWNpcGUpIHtcbiAgICBjb25zdCBpID0gdGhpcy5mYXZvcml0ZVJlY2lwZXMuaW5kZXhPZihyZWNpcGUpO1xuICAgIHRoaXMuZmF2b3JpdGVSZWNpcGVzLnNwbGljZShpLCAxKTtcbiAgfVxuXG4gIGZpbHRlckZhdm9yaXRlcyh0YWcpIHtcbiAgICByZXR1cm4gdGhpcy5mYXZvcml0ZVJlY2lwZXMuZmlsdGVyKHJlY2lwZSA9PiB7XG4gICAgICByZXR1cm4gcmVjaXBlLnRhZ3MuaW5jbHVkZXModGFnKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZpbmRGYXZvcml0ZXMoc3RyZ1RvU3JjaCkge1xuICAgIHJldHVybiB0aGlzLmZhdm9yaXRlUmVjaXBlcy5maWx0ZXIocmVjaXBlID0+IHtcbiAgICAgIHJldHVybiByZWNpcGUubmFtZS5pbmNsdWRlcyhzdHJnVG9TcmNoKSB8fFxuICAgICAgICByZWNpcGUuaW5ncmVkaWVudHMuZmluZChpbmdyZWRpZW50ID0+IHtcbiAgICAgICAgICByZXR1cm4gaW5ncmVkaWVudC5uYW1lLmluY2x1ZGVzKHN0cmdUb1NyY2gpXG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZmluZE1pc3NpbmdJbmdyZWRpZW50cyhyZWNpcGUpIHtcbiAgICByZXR1cm4gcmVjaXBlLmluZ3JlZGllbnRzLnJlZHVjZSgobm90UHJlc2VudCwgaW5ncmVkaWVudCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnBhbnRyeS51c2VySW5ncmVkaWVudHNbaW5ncmVkaWVudC5pZF0gfHwgaW5ncmVkaWVudC5xdWFudGl0eS5hbW91bnQgPiB0aGlzLnBhbnRyeS51c2VySW5ncmVkaWVudHNbaW5ncmVkaWVudC5pZF0pIHtcbiAgICAgICAgbm90UHJlc2VudC5wdXNoKGluZ3JlZGllbnQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5vdFByZXNlbnQ7XG4gICAgfSwgW10pO1xuICB9XG5cbiAgY2hlY2tQYW50cnlJbmdyZWRpZW50cyhyZWNpcGUpIHtcbiAgICB0aGlzLnBhbnRyeS5jb21waWxlUGFudHJ5KHRoaXMuaW5ncmVkaWVudHNEYXRhKTtcbiAgICBsZXQgbWlzc2luZ0luZ3JlZGllbnRzID0gdGhpcy5maW5kTWlzc2luZ0luZ3JlZGllbnRzKHJlY2lwZSlcbiAgICBpZiAobWlzc2luZ0luZ3JlZGllbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuICdZb3UgaGF2ZSB0aGUgaW5ncmVkaWVudHMhJztcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IG1pc3NpbmcgPSBtaXNzaW5nSW5ncmVkaWVudHMubGVuZ3RoO1xuICAgICAgcmV0dXJuIGBZb3Ugc3RpbGwgbmVlZCAke21pc3Npbmd9IG1vcmUgaW5ncmVkaWVudHMuYDtcbiAgICB9XG4gIH1cblxuICBjaGVja0hvd011Y2hNb3JlKHJlY2lwZSkge1xuICAgIGxldCBtaXNzaW5nSW5ncmVkaWVudHMgPSB0aGlzLmZpbmRNaXNzaW5nSW5ncmVkaWVudHMocmVjaXBlKTtcbiAgICBsZXQgZGlmZmVyZW5jZSA9IG1pc3NpbmdJbmdyZWRpZW50cy5tYXAoaW5ncmVkaWVudCA9PiB7XG4gICAgICBsZXQgbmFtZSA9IHJlY2lwZS5pbmdyZWRpZW50c0RhdGEuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGluZ3JlZGllbnQuaWQpO1xuICAgICAgbGV0IG5lZWRlZEluZyA9IHtcbiAgICAgICAgaWQ6IGluZ3JlZGllbnQuaWQsXG4gICAgICAgIGNvc3Q6IDAsXG4gICAgICAgIG5hbWU6IG5hbWUubmFtZSxcbiAgICAgICAgdW5pdDogaW5ncmVkaWVudC5xdWFudGl0eS51bml0LFxuICAgICAgICBxdWFudGl0eU5lZWRlZDogcGFyc2VGbG9hdChpbmdyZWRpZW50LnF1YW50aXR5LmFtb3VudC50b0ZpeGVkKDIpKVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMucGFudHJ5LnVzZXJJbmdyZWRpZW50c1tpbmdyZWRpZW50LmlkXSkge1xuICAgICAgICBuZWVkZWRJbmcucXVhbnRpdHlOZWVkZWQgPSBwYXJzZUZsb2F0KGluZ3JlZGllbnQucXVhbnRpdHkuYW1vdW50IC0gdGhpcy5wYW50cnkudXNlckluZ3JlZGllbnRzW2luZ3JlZGllbnQuaWRdLnRvRml4ZWQoMikpXG4gICAgICB9XG4gICAgICBsZXQgaW5ncmVkaWVudEl0ZW0gPSByZWNpcGUuaW5ncmVkaWVudHNEYXRhLmZpbmQoaXRlbSA9PiBpbmdyZWRpZW50LmlkID09PSBpdGVtLmlkKVxuICAgICAgbmVlZGVkSW5nLmNvc3QgPSAobmVlZGVkSW5nLnF1YW50aXR5TmVlZGVkICogaW5ncmVkaWVudEl0ZW0uZXN0aW1hdGVkQ29zdEluQ2VudHMpIC8gMTAwO1xuICAgICAgcmV0dXJuIG5lZWRlZEluZztcbiAgICB9KVxuICAgIHJldHVybiBkaWZmZXJlbmNlO1xuICB9XG59XG5cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9IChVc2VyKTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gMDpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIG11bHRpIC4vc3JjL3NjcmlwdHMuanMgLi9kaXN0L2J1bmRsZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgL1VzZXJzL25hdGhhbmllbG1pbGxhcmQvVHVyaW5nL01vZF8yL3doYXRjaGFDb29raW4vc3JjL3NjcmlwdHMuanMgKi9cIi4vc3JjL3NjcmlwdHMuanNcIik7XG5tb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC9Vc2Vycy9uYXRoYW5pZWxtaWxsYXJkL1R1cmluZy9Nb2RfMi93aGF0Y2hhQ29va2luL2Rpc3QvYnVuZGxlLmpzICovXCIuL2Rpc3QvYnVuZGxlLmpzXCIpO1xuXG5cbi8qKiovIH0pXG5cbi8qKioqKiovIH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk4dmQyVmljR0ZqYXk5aWIyOTBjM1J5WVhBaUxDSjNaV0p3WVdOck9pOHZMeTR2YzNKakwyTnpjeTl6ZEhsc1pYTXVjMk56Y3lJc0luZGxZbkJoWTJzNkx5OHZMaTl1YjJSbFgyMXZaSFZzWlhNdlkzTnpMV3h2WVdSbGNpOWthWE4wTDNKMWJuUnBiV1V2WVhCcExtcHpJaXdpZDJWaWNHRmphem92THk4dUwyNXZaR1ZmYlc5a2RXeGxjeTl6ZEhsc1pTMXNiMkZrWlhJdmJHbGlMMkZrWkZOMGVXeGxjeTVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl1YjJSbFgyMXZaSFZzWlhNdmMzUjViR1V0Ykc5aFpHVnlMMnhwWWk5MWNteHpMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMM055WXk5amIyOXJZbTl2YXk1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5emNtTXZZM056TDNOMGVXeGxjeTV6WTNOelB6RXpZakVpTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDJSdmJWVndaR0YwWlhNdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmMzSmpMM0JoYm5SeWVTNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXpjbU12Y21WamFYQmxMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMM055WXk5elkzSnBjSFJ6TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDNOeVl5OTFjMlZ5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1VVRkJRVHRSUVVOQk96dFJRVVZCTzFGQlEwRTdPMUZCUlVFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN08xRkJSVUU3VVVGRFFUczdVVUZGUVR0UlFVTkJPenRSUVVWQk8xRkJRMEU3VVVGRFFUczdPMUZCUjBFN1VVRkRRVHM3VVVGRlFUdFJRVU5CT3p0UlFVVkJPMUZCUTBFN1VVRkRRVHRSUVVOQkxEQkRRVUV3UXl4blEwRkJaME03VVVGRE1VVTdVVUZEUVRzN1VVRkZRVHRSUVVOQk8xRkJRMEU3VVVGRFFTeDNSRUZCZDBRc2EwSkJRV3RDTzFGQlF6RkZPMUZCUTBFc2FVUkJRV2xFTEdOQlFXTTdVVUZETDBRN08xRkJSVUU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTEhsRFFVRjVReXhwUTBGQmFVTTdVVUZETVVVc1owaEJRV2RJTEcxQ1FVRnRRaXhGUVVGRk8xRkJRM0pKTzFGQlEwRTdPMUZCUlVFN1VVRkRRVHRSUVVOQk8xRkJRMEVzTWtKQlFUSkNMREJDUVVFd1FpeEZRVUZGTzFGQlEzWkVMR2xEUVVGcFF5eGxRVUZsTzFGQlEyaEVPMUZCUTBFN1VVRkRRVHM3VVVGRlFUdFJRVU5CTEhORVFVRnpSQ3dyUkVGQkswUTdPMUZCUlhKSU8xRkJRMEU3T3p0UlFVZEJPMUZCUTBFN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMEZEYkVaQkxESkNRVUV5UWl4dFFrRkJUeXhEUVVGRExIZEhRVUZ0UkR0QlFVTjBSanRCUVVOQkxHTkJRV01zVVVGQlV5eFRRVUZUTERoQ1FVRTRRaXd5UWtGQk1rSXNhMEpCUVd0Q0xHbENRVUZwUWl4RlFVRkZMRlZCUVZVc01rSkJRVEpDTEhsRFFVRjVReXhwUWtGQmFVSXNSVUZCUlN4VlFVRlZMRGhDUVVFNFFpeHBRa0ZCYVVJc1owSkJRV2RDTEd0Q1FVRnJRaXcwUWtGQk5FSXNSVUZCUlN4clFrRkJhMElzYTBKQlFXdENMRzFEUVVGdFF5eDNRa0ZCZDBJc2FVSkJRV2xDTEdkQ1FVRm5RaXc0UWtGQk9FSXNNa0pCUVRKQ0xFVkJRVVVzVVVGQlVTeHZRa0ZCYjBJc2RVSkJRWFZDTEd0Q1FVRnJRaXh4UWtGQmNVSXNjMEpCUVhOQ0xHVkJRV1VzUlVGQlJTeFRRVUZUTEd0Q1FVRnJRaXhyUWtGQmEwSXNSVUZCUlN4blFrRkJaMElzYjBKQlFXOUNMREpDUVVFeVFpdzRRa0ZCT0VJc1owTkJRV2RETEdsRFFVRnBReXd3UWtGQk1FSXNSVUZCUlN4elFrRkJjMElzWjBOQlFXZERMRVZCUVVVc2RVSkJRWFZDTEdkRFFVRm5ReXhGUVVGRkxHMUNRVUZ0UWl4clFrRkJhMElzYlVOQlFXMURMSGRDUVVGM1FpeEZRVUZGTEdWQlFXVXNiMEpCUVc5Q0xHMUNRVUZ0UWl4MVFrRkJkVUlzY1VKQlFYRkNMRVZCUVVVc2EwSkJRV3RDTEd0Q1FVRnJRaXc0UWtGQk9FSXNkMEpCUVhkQ0xFVkJRVVVzYVVKQlFXbENMRzlDUVVGdlFpeG5Ra0ZCWjBJc2FVSkJRV2xDTEVWQlFVVXNiVUpCUVcxQ0xEaENRVUU0UWl3eVFrRkJNa0lzWlVGQlpTeHZRa0ZCYjBJc1JVRkJSU3g1UWtGQmVVSXNaME5CUVdkRExFVkJRVVVzTUVKQlFUQkNMR2REUVVGblF5eEZRVUZGTEcxQ1FVRnRRaXd5UWtGQk1rSXNiMEpCUVc5Q0xHMUNRVUZ0UWl4RlFVRkZMR2RDUVVGblFpeHJRa0ZCYTBJc2JVSkJRVzFDTERCRFFVRXdReXhyUWtGQmEwSXNhMEpCUVd0Q0xFVkJRVVVzWVVGQllTeHJRa0ZCYTBJc1JVRkJSU3hUUVVGVExHOUNRVUZ2UWl4RlFVRkZMR3RDUVVGclFpd3lRa0ZCTWtJc2FVSkJRV2xDTEdkQ1FVRm5RaXh2UWtGQmIwSXNSVUZCUlN4M1FrRkJkMElzWjBOQlFXZERMRVZCUVVVc2VVSkJRWGxDTEdkRFFVRm5ReXhGUVVGRkxHbENRVUZwUWl3NFFrRkJPRUlzYTBKQlFXdENMR1ZCUVdVc1JVRkJSU3hWUVVGVkxHVkJRV1VzUlVGQlJTeGxRVUZsTERoQ1FVRTRRaXhwUTBGQmFVTXNaME5CUVdkRExHVkJRV1VzYlVaQlFXMUdMRVZCUVVVc1YwRkJWeXc0UWtGQk9FSXNNa0pCUVRKQ0xHZENRVUZuUWl4RlFVRkZMR3RDUVVGclFpdzRRa0ZCT0VJc2EwTkJRV3RETEd0Q1FVRnJRaXh0UTBGQmJVTXNkMEpCUVhkQ0xFVkJRVVVzVlVGQlZTeG5Ra0ZCWjBJc01FTkJRVEJETEVWQlFVVXNNa0pCUVRKQ0xHOUNRVUZ2UWl4dFFrRkJiVUlzWjBKQlFXZENMRVZCUVVVc1VVRkJVU3h2UWtGQmIwSXNkVUpCUVhWQ0xEaENRVUU0UWl4clEwRkJhME1zWTBGQll5eDNRa0ZCZDBJc2NVSkJRWEZDTEhkQ1FVRjNRaXhGUVVGRkxHdENRVUZyUWl3NFFrRkJPRUlzYTBOQlFXdERMR3RDUVVGclFpdzBRa0ZCTkVJc2QwSkJRWGRDTEc5Q1FVRnZRaXgxUWtGQmRVSXNSVUZCUlN4dFFrRkJiVUlzYTBKQlFXdENMR1ZCUVdVc01rSkJRVEpDTERaQ1FVRTJRaXhGUVVGRkxIbENRVUY1UWl4dFFrRkJiVUlzUlVGQlJTd3dRa0ZCTUVJc05rSkJRVFpDTEVWQlFVVXNWMEZCVnl3NFFrRkJPRUlzYjBKQlFXOUNMR05CUVdNc1JVRkJSU3h6UWtGQmMwSXNiVVpCUVcxR0xHbERRVUZwUXl4RlFVRkZMSEZDUVVGeFFpeHJRa0ZCYTBJc2EwSkJRV3RDTEhGRFFVRnhReXhuUTBGQlowTXNhVUpCUVdsQ0xFVkJRVVVzTUVKQlFUQkNMRzFDUVVGdFFpeHJRa0ZCYTBJc1JVRkJSU3g1UWtGQmVVSXNlVUpCUVhsQ0xHMUNRVUZ0UWl4blFrRkJaMElzY1VKQlFYRkNMRzlDUVVGdlFpeHZRa0ZCYjBJc2JVSkJRVzFDTEVWQlFVVXNLMEpCUVN0Q0xHdENRVUZyUWl4dlFrRkJiMElzUlVGQlJTd3dRa0ZCTUVJc01FSkJRVEJDTEdkQ1FVRm5RaXh2UWtGQmIwSXNiVUpCUVcxQ0xHOUNRVUZ2UWl4elFrRkJjMElzUlVGQlJTeDFRa0ZCZFVJc2JVSkJRVzFDTEVWQlFVVXNiVUpCUVcxQ0xEaENRVUU0UWl4cFEwRkJhVU1zWjBOQlFXZERMR1ZCUVdVc05FWkJRVFJHTEhOQ1FVRnpRaXhGUVVGRkxHZEVRVUZuUkN4elFrRkJjMElzUlVGQlJTd3JRa0ZCSzBJc1ZVRkJWU3hwUWtGQmFVSXNSVUZCUlN4blFrRkJaMElzYjBKQlFXOUNMSEZDUVVGeFFpdzBRMEZCTkVNc1owTkJRV2RETEc5Q1FVRnZRaXhGUVVGRkxIRkNRVUZ4UWl4dlFrRkJiMElzYjBOQlFXOURMRFpDUVVFMlFpd3dRa0ZCTUVJc1JVRkJSU3d3UWtGQk1FSXNiMEpCUVc5Q0xFVkJRVVVzUlVGQlJTd3JRa0ZCSzBJc1owSkJRV2RDTEc5Q1FVRnZRaXh4UWtGQmNVSXNORU5CUVRSRExHZERRVUZuUXl4dlFrRkJiMElzUlVGQlJTeHhRa0ZCY1VJc2IwSkJRVzlDTERoQ1FVRTRRaXcyUWtGQk5rSXNNRUpCUVRCQ0xFVkJRVVVzYlVKQlFXMUNMRzlDUVVGdlFpeEZRVUZGTEVWQlFVVXNLMEpCUVN0Q0xHOURRVUZ2UXl3MlFrRkJOa0lzTUVKQlFUQkNMRVZCUVVVc2JVSkJRVzFDTEhOQ1FVRnpRaXhGUVVGRkxHZENRVUZuUWl4dlFrRkJiMElzY1VKQlFYRkNMRFJEUVVFMFF5eG5RMEZCWjBNc2IwSkJRVzlDTEVWQlFVVXNhMEpCUVd0Q0xHMUNRVUZ0UWl4RlFVRkZMR05CUVdNc2IwSkJRVzlDTERaQ1FVRTJRaXd3UWtGQk1FSXNSVUZCUlN4WFFVRlhMSEZDUVVGeFFpeEZRVUZGTEVWQlFVVTdPenM3T3pzN096czdPenM3TzBGRFJpOXpURHM3UVVGRllqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3huUWtGQlowSTdPMEZCUldoQ08wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMSFZEUVVGMVF5eG5Ra0ZCWjBJN1FVRkRka1FzVDBGQlR6dEJRVU5RTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3c1NVRkJTVHM3TzBGQlIwbzdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRXNiVUpCUVcxQ0xHbENRVUZwUWp0QlFVTndRenM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRU3hsUVVGbExHOUNRVUZ2UWp0QlFVTnVReXcwUWtGQk5FSTdRVUZETlVJN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRk5CUVZNN1FVRkRWRHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CT3p0QlFVVkJPMEZCUTBFc1EwRkJRenM3TzBGQlIwUTdRVUZEUVR0QlFVTkJPMEZCUTBFc2NVUkJRWEZFTEdOQlFXTTdRVUZEYmtVN1FVRkRRU3hET3pzN096czdPenM3T3p0QlEzQkdRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hEUVVGRE96dEJRVVZFTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzT0VOQlFUaERPMEZCUXpsRE8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEV0QlFVczdRVUZEVER0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVOQlFVTTdPMEZCUlVRN1FVRkRRVHRCUVVOQk96dEJRVVZCTEdOQlFXTXNiVUpCUVU4c1EwRkJReXgxUkVGQlVUczdRVUZGT1VJN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJMR2xDUVVGcFFpeHRRa0ZCYlVJN1FVRkRjRU03UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFc2FVSkJRV2xDTEhOQ1FVRnpRanRCUVVOMlF6czdRVUZGUVR0QlFVTkJMRzFDUVVGdFFpd3lRa0ZCTWtJN08wRkJSVGxETzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFTeG5Ra0ZCWjBJc2JVSkJRVzFDTzBGQlEyNURPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVN4cFFrRkJhVUlzTWtKQlFUSkNPMEZCUXpWRE8wRkJRMEU3TzBGQlJVRXNVVUZCVVN4MVFrRkJkVUk3UVVGREwwSTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHM3UVVGRlFTeHBRa0ZCYVVJc2RVSkJRWFZDTzBGQlEzaERPMEZCUTBFN08wRkJSVUVzTWtKQlFUSkNPMEZCUXpOQ08wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUVzWjBKQlFXZENMR2xDUVVGcFFqdEJRVU5xUXp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzWTBGQll6czdRVUZGWkN4clJFRkJhMFFzYzBKQlFYTkNPMEZCUTNoRk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFUdEJRVU5CTzBGQlEwRXNSVUZCUlR0QlFVTkdPMEZCUTBFc1JVRkJSVHRCUVVOR08wRkJRMEU3UVVGRFFTeEZRVUZGTzBGQlEwWTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSVUZCUlR0QlFVTkdPenRCUVVWQk8wRkJRMEVzUzBGQlN5eExRVUYzUXl4RlFVRkZMRVZCUlRkRE96dEJRVVZHTEZGQlFWRXNjMEpCUVdsQ08wRkJRM3BDT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEUxQlFVMDdRVUZEVGp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFc1JVRkJSVHRCUVVOR08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRVZCUVVVN1FVRkRSanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNRMEZCUXpzN1FVRkZSRHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4RlFVRkZPMEZCUTBZN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxFVkJRVVU3UVVGRFJqdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMSFZFUVVGMVJEdEJRVU4yUkRzN1FVRkZRU3cyUWtGQk5rSXNiVUpCUVcxQ096dEJRVVZvUkRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CT3pzN096czdPenM3T3pzN08wRkRPVmxCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMSGREUVVGM1F5eFhRVUZYTEVWQlFVVTdRVUZEY2tRc2QwTkJRWGRETEZkQlFWY3NSVUZCUlRzN1FVRkZja1E3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRU3h6UTBGQmMwTTdRVUZEZEVNc1IwRkJSenRCUVVOSU8wRkJRMEVzT0VSQlFUaEVPMEZCUXpsRU96dEJRVVZCTzBGQlEwRTdRVUZEUVN4RlFVRkZPenRCUVVWR08wRkJRMEU3UVVGRFFUczdPenM3T3pzN096czdPenRCUTNoR1FUdEJRVUZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNUMEZCVHp0QlFVTlFPMEZCUTBFN1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CT3p0QlFVVmxMSFZGUVVGUkxFVkJRVU03T3pzN096czdPenM3T3pzN1FVTm9RbmhDTEdOQlFXTXNiVUpCUVU4c1EwRkJReXh0VGtGQmQwYzdPMEZCUlRsSUxEUkRRVUUwUXl4UlFVRlRPenRCUVVWeVJEdEJRVU5CT3pzN08wRkJTVUVzWlVGQlpUczdRVUZGWmp0QlFVTkJPenRCUVVWQkxHRkJRV0VzYlVKQlFVOHNRMEZCUXl4elIwRkJiVVE3TzBGQlJYaEZPenRCUVVWQkxFZEJRVWNzUzBGQlZTeEZRVUZGTEVVN096czdPenM3T3pzN096dEJRMjVDWmp0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVGhDTzBGQlEwRTdRVUZEU2p0QlFVTlJPenM3UVVGSGJFTTdPMEZCUlVFc1dVRkJXVHRCUVVOYUxHbENRVUZwUWp0QlFVTnFRaXh6UWtGQmMwSTdRVUZEZEVJc1ZVRkJWVHRCUVVOV096dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1QwRkJUenRCUVVOUU8wRkJRMEVzUjBGQlJ6czdRVUZGU0R0QlFVTkJMSEZDUVVGeFFpd3JRMEZCVFR0QlFVTXpRaXd3UWtGQk1FSXNOa05CUVVrN1FVRkRPVUk3UVVGRFFTd3dRa0ZCTUVJc0swTkJRVTA3UVVGRGFFTXNTMEZCU3p0QlFVTk1MRGhDUVVFNFFpeHBSRUZCVVR0QlFVTjBReXhIUVVGSE96dEJRVVZJTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN08wRkJSVWc3UVVGRFFUdEJRVU5CTERCRFFVRXdReXh4UWtGQmNVSTdRVUZETDBRc1IwRkJSenM3UVVGRlNEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hMUVVGTE8wRkJRMHdzUjBGQlJ6czdRVUZGU0R0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRXNLMEpCUVN0Q0xGVkJRVlU3UVVGRGVrTXNhVU5CUVdsRExGVkJRVlU3UVVGRE0wTTdRVUZEUVN4elJVRkJjMFVzVlVGQlZUdEJRVU5vUml3d1FrRkJNRUlzVlVGQlZUdEJRVU53UXp0QlFVTkJPMEZCUTBFN1FVRkRRU3h2UkVGQmIwUXNWVUZCVlN4WFFVRlhMRlZCUVZVc1IwRkJSeXhWUVVGVk8wRkJRMmhITzBGQlEwRTdRVUZEUVN3clFrRkJLMElzVlVGQlZTeEpRVUZKTEZsQlFWazdRVUZEZWtRc05rUkJRVFpFTEZWQlFWVTdRVUZEZGtVc1owUkJRV2RFTEZWQlFWVXNVVUZCVVN4aFFVRmhPMEZCUXk5Rk8wRkJRMEU3UVVGRFFTeEhRVUZIT3p0QlFVVklPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeExRVUZMTzBGQlEwd3NSMEZCUnpzN1FVRkZTRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6czdRVUZGU0R0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRXRCUVVzN1FVRkRURHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEU5QlFVODdRVUZEVUR0QlFVTkJMRWRCUVVjN08wRkJSVWc3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hMUVVGTE8wRkJRMHc3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnpzN1FVRkZTRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNhMEpCUVd0Q0xHMUNRVUZ0UWl4SFFVRkhMRk5CUVZNc1VVRkJVU3hUUVVGVE8wRkJRMnhGTEU5QlFVODdRVUZEVUR0QlFVTkJPMEZCUTBFc1QwRkJUenRCUVVOUUxITkZRVUZ6UlN4VlFVRlZPMEZCUTJoR0xHbERRVUZwUXl4VlFVRlZPMEZCUXpORE8wRkJRMEVzTUVWQlFUQkZMRlZCUVZVN1FVRkRjRVlzYlVOQlFXMURMRlZCUVZVN1FVRkROME03UVVGRFFUdEJRVU5CTEdsR1FVRnBSaXhWUVVGVkxFZEJRVWNzVlVGQlZUdEJRVU40Unp0QlFVTkJPMEZCUTBFc1dVRkJXU3haUVVGWk8wRkJRM2hDTERoRFFVRTRReXhWUVVGVk8wRkJRM2hFTEdGQlFXRXNZVUZCWVR0QlFVTXhRanRCUVVOQkxEQkhRVUV3Unl4VlFVRlZMRWRCUVVjc1ZVRkJWVHRCUVVOcVNTeHBSa0ZCYVVZc1ZVRkJWU3hIUVVGSExGVkJRVlU3UVVGRGVFYzdRVUZEUVR0QlFVTkJPMEZCUTBFc1dVRkJXU3g1UWtGQmVVSTdRVUZEY2tNN1FVRkRRU3dyUTBGQkswTXNWMEZCVnp0QlFVTXhSRHRCUVVOQkxFdEJRVXM3UVVGRFRDeEhRVUZIT3p0QlFVVklPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEV0QlFVczdRVUZEVER0QlFVTkJPMEZCUTBFc1IwRkJSenM3UVVGRlNEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1MwRkJTenRCUVVOTU8wRkJRMEU3UVVGRFFTeEhRVUZIT3p0QlFVVklPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3huUTBGQlowTXNjME5CUVhORExFZEJRVWNzZVVKQlFYbENMRWRCUVVjc1MwRkJTenRCUVVNeFJ5eExRVUZMTzBGQlEwdzdRVUZEUVR0QlFVTkJMREJDUVVFd1FpeFpRVUZaTEVsQlFVa3NhVUpCUVdsQ08wRkJRek5FTEV0QlFVczdRVUZEVER0QlFVTkJPMEZCUTBFc1dVRkJXU3h2UWtGQmIwSTdRVUZEYUVNc2RVTkJRWFZETEhGQ1FVRnhRaXd3UWtGQk1FSXNiMEpCUVc5Q08wRkJRekZITzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1ZVRkJWU3h2UTBGQmIwTTdRVUZET1VNN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTdzJSRUZCTmtRN1FVRkROMFFzVlVGQlZTdzRRa0ZCT0VJN1FVRkRlRU03UVVGRFFTeDNRMEZCZDBNc1MwRkJTenRCUVVNM1F6dEJRVU5CTzBGQlEwRXNSMEZCUnpzN1FVRkZTRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRVHRCUVVOQkxFZEJRVWM3TzBGQlJVZzdRVUZEUVR0QlFVTkJMRWRCUVVjN08wRkJSVWc3UVVGRFFUdEJRVU5CTEcxRlFVRnRSU3hyUWtGQmEwSTdRVUZEY2tZN1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPenRCUVVWSU8wRkJRMEU3UVVGRFFTeHRSVUZCYlVVc2EwSkJRV3RDTzBGQlEzSkdPMEZCUTBFN1FVRkRRU3hIUVVGSE96dEJRVVZJT3p0QlFVVm5RaXg1UlVGQlZTeEZRVUZET3pzN096czdPenM3T3pzN08wRkRibEl6UWp0QlFVRkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hQUVVGUE8wRkJRMUE3UVVGRFFUdEJRVU5CTzBGQlEwRXNTMEZCU3l4SlFVRkpPMEZCUTFRN1FVRkRRVHM3UVVGRlpTeHhSVUZCVFN4RlFVRkRPenM3T3pzN096czdPenM3TzBGRGJFSjBRanRCUVVGQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFBRVUZQTzBGQlExQXNTMEZCU3p0QlFVTk1PMEZCUTBFN08wRkJSVUU3TzBGQlJXVXNjVVZCUVUwc1JVRkJRenM3T3pzN096czdPenM3T3p0QlF6RkNkRUk3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCTWtJN08wRkJSVmM3TzBGQlJYUkRPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRWxCUVVrc2JVUkJRVlU3UVVGRFpDeEhRVUZITzBGQlEwZ3NTVUZCU1N4dFJFRkJWVHRCUVVOa0xFZEJRVWM3UVVGRFNDeEpRVUZKTEcxRVFVRlZPMEZCUTJRc1IwRkJSenRCUVVOSU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNTVUZCU1N4dFJFRkJWU3hsUVVGbExHMUVRVUZWTzBGQlEzWkRMRWRCUVVjN1FVRkRTQ3hKUVVGSkxHMUVRVUZWTzBGQlEyUXNSMEZCUnp0QlFVTklMRWxCUVVrc2JVUkJRVlU3UVVGRFpDeEhRVUZITzBGQlEwZ3NTVUZCU1N4dFJFRkJWVHRCUVVOa08wRkJRMEU3TzBGQlJVRXNaMEpCUVdkQ0xHMUVRVUZWTzBGQlF6RkNPMEZCUTBFN1FVRkRRU3c0UTBGQk9FTXNiVVJCUVZVN1FVRkRlRVFzTWtOQlFUSkRMRzFFUVVGVk8wRkJRM0pFTEc5RFFVRnZReXh0UkVGQlZUczdPenM3T3pzN096czdPenRCUTNKRE9VTTdRVUZCUVR0QlFVRTRRanM3UVVGRk9VSTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4VFFVRlRPMEZCUTFRN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFRRVUZUTzBGQlExUXNUMEZCVHp0QlFVTlFPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUzBGQlN6czdRVUZGVERzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4VFFVRlRPMEZCUTFRN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFRRVUZUTzBGQlExUXNUMEZCVHp0QlFVTlFPMEZCUTBFN1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFREczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxIbENRVUY1UWl3clEwRkJUVHRCUVVNdlFqdEJRVU5CTzBGQlEwRXNUMEZCVHp0QlFVTlFPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUzBGQlN6dEJRVU5NT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFRRVUZUTzBGQlExUXNTMEZCU3p0QlFVTk1PenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRXRCUVVzN1FVRkRURHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1MwRkJTenRCUVVOTU8wRkJRMEVzSzBKQlFTdENMRkZCUVZFN1FVRkRka003UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNTMEZCU3p0QlFVTk1PMEZCUTBFN1FVRkRRVHM3TzBGQlIyVXNiVVZCUVVrc1JVRkJReUlzSW1acGJHVWlPaUppZFc1a2JHVXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJZ1hIUXZMeUJVYUdVZ2JXOWtkV3hsSUdOaFkyaGxYRzRnWEhSMllYSWdhVzV6ZEdGc2JHVmtUVzlrZFd4bGN5QTlJSHQ5TzF4dVhHNGdYSFF2THlCVWFHVWdjbVZ4ZFdseVpTQm1kVzVqZEdsdmJseHVJRngwWm5WdVkzUnBiMjRnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlodGIyUjFiR1ZKWkNrZ2UxeHVYRzRnWEhSY2RDOHZJRU5vWldOcklHbG1JRzF2WkhWc1pTQnBjeUJwYmlCallXTm9aVnh1SUZ4MFhIUnBaaWhwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYU2tnZTF4dUlGeDBYSFJjZEhKbGRIVnliaUJwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYUzVsZUhCdmNuUnpPMXh1SUZ4MFhIUjlYRzRnWEhSY2RDOHZJRU55WldGMFpTQmhJRzVsZHlCdGIyUjFiR1VnS0dGdVpDQndkWFFnYVhRZ2FXNTBieUIwYUdVZ1kyRmphR1VwWEc0Z1hIUmNkSFpoY2lCdGIyUjFiR1VnUFNCcGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFNBOUlIdGNiaUJjZEZ4MFhIUnBPaUJ0YjJSMWJHVkpaQ3hjYmlCY2RGeDBYSFJzT2lCbVlXeHpaU3hjYmlCY2RGeDBYSFJsZUhCdmNuUnpPaUI3ZlZ4dUlGeDBYSFI5TzF4dVhHNGdYSFJjZEM4dklFVjRaV04xZEdVZ2RHaGxJRzF2WkhWc1pTQm1kVzVqZEdsdmJseHVJRngwWEhSdGIyUjFiR1Z6VzIxdlpIVnNaVWxrWFM1allXeHNLRzF2WkhWc1pTNWxlSEJ2Y25SekxDQnRiMlIxYkdVc0lHMXZaSFZzWlM1bGVIQnZjblJ6TENCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktUdGNibHh1SUZ4MFhIUXZMeUJHYkdGbklIUm9aU0J0YjJSMWJHVWdZWE1nYkc5aFpHVmtYRzRnWEhSY2RHMXZaSFZzWlM1c0lEMGdkSEoxWlR0Y2JseHVJRngwWEhRdkx5QlNaWFIxY200Z2RHaGxJR1Y0Y0c5eWRITWdiMllnZEdobElHMXZaSFZzWlZ4dUlGeDBYSFJ5WlhSMWNtNGdiVzlrZFd4bExtVjRjRzl5ZEhNN1hHNGdYSFI5WEc1Y2JseHVJRngwTHk4Z1pYaHdiM05sSUhSb1pTQnRiMlIxYkdWeklHOWlhbVZqZENBb1gxOTNaV0p3WVdOclgyMXZaSFZzWlhOZlh5bGNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJTQTlJRzF2WkhWc1pYTTdYRzVjYmlCY2RDOHZJR1Y0Y0c5elpTQjBhR1VnYlc5a2RXeGxJR05oWTJobFhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1NZ1BTQnBibk4wWVd4c1pXUk5iMlIxYkdWek8xeHVYRzRnWEhRdkx5QmtaV1pwYm1VZ1oyVjBkR1Z5SUdaMWJtTjBhVzl1SUdadmNpQm9ZWEp0YjI1NUlHVjRjRzl5ZEhOY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WkNBOUlHWjFibU4wYVc5dUtHVjRjRzl5ZEhNc0lHNWhiV1VzSUdkbGRIUmxjaWtnZTF4dUlGeDBYSFJwWmlnaFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXZLR1Y0Y0c5eWRITXNJRzVoYldVcEtTQjdYRzRnWEhSY2RGeDBUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dWNGNHOXlkSE1zSUc1aGJXVXNJSHNnWlc1MWJXVnlZV0pzWlRvZ2RISjFaU3dnWjJWME9pQm5aWFIwWlhJZ2ZTazdYRzRnWEhSY2RIMWNiaUJjZEgwN1hHNWNiaUJjZEM4dklHUmxabWx1WlNCZlgyVnpUVzlrZFd4bElHOXVJR1Y0Y0c5eWRITmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWNpQTlJR1oxYm1OMGFXOXVLR1Y0Y0c5eWRITXBJSHRjYmlCY2RGeDBhV1lvZEhsd1pXOW1JRk41YldKdmJDQWhQVDBnSjNWdVpHVm1hVzVsWkNjZ0ppWWdVM2x0WW05c0xuUnZVM1J5YVc1blZHRm5LU0I3WEc0Z1hIUmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lGTjViV0p2YkM1MGIxTjBjbWx1WjFSaFp5d2dleUIyWVd4MVpUb2dKMDF2WkhWc1pTY2dmU2s3WEc0Z1hIUmNkSDFjYmlCY2RGeDBUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dWNGNHOXlkSE1zSUNkZlgyVnpUVzlrZFd4bEp5d2dleUIyWVd4MVpUb2dkSEoxWlNCOUtUdGNiaUJjZEgwN1hHNWNiaUJjZEM4dklHTnlaV0YwWlNCaElHWmhhMlVnYm1GdFpYTndZV05sSUc5aWFtVmpkRnh1SUZ4MEx5OGdiVzlrWlNBbUlERTZJSFpoYkhWbElHbHpJR0VnYlc5a2RXeGxJR2xrTENCeVpYRjFhWEpsSUdsMFhHNGdYSFF2THlCdGIyUmxJQ1lnTWpvZ2JXVnlaMlVnWVd4c0lIQnliM0JsY25ScFpYTWdiMllnZG1Gc2RXVWdhVzUwYnlCMGFHVWdibk5jYmlCY2RDOHZJRzF2WkdVZ0ppQTBPaUJ5WlhSMWNtNGdkbUZzZFdVZ2QyaGxiaUJoYkhKbFlXUjVJRzV6SUc5aWFtVmpkRnh1SUZ4MEx5OGdiVzlrWlNBbUlEaDhNVG9nWW1Wb1lYWmxJR3hwYTJVZ2NtVnhkV2x5WlZ4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTUwSUQwZ1puVnVZM1JwYjI0b2RtRnNkV1VzSUcxdlpHVXBJSHRjYmlCY2RGeDBhV1lvYlc5a1pTQW1JREVwSUhaaGJIVmxJRDBnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHloMllXeDFaU2s3WEc0Z1hIUmNkR2xtS0cxdlpHVWdKaUE0S1NCeVpYUjFjbTRnZG1Gc2RXVTdYRzRnWEhSY2RHbG1LQ2h0YjJSbElDWWdOQ2tnSmlZZ2RIbHdaVzltSUhaaGJIVmxJRDA5UFNBbmIySnFaV04wSnlBbUppQjJZV3gxWlNBbUppQjJZV3gxWlM1ZlgyVnpUVzlrZFd4bEtTQnlaWFIxY200Z2RtRnNkV1U3WEc0Z1hIUmNkSFpoY2lCdWN5QTlJRTlpYW1WamRDNWpjbVZoZEdVb2JuVnNiQ2s3WEc0Z1hIUmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y2lodWN5azdYRzRnWEhSY2RFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2h1Y3l3Z0oyUmxabUYxYkhRbkxDQjdJR1Z1ZFcxbGNtRmliR1U2SUhSeWRXVXNJSFpoYkhWbE9pQjJZV3gxWlNCOUtUdGNiaUJjZEZ4MGFXWW9iVzlrWlNBbUlESWdKaVlnZEhsd1pXOW1JSFpoYkhWbElDRTlJQ2R6ZEhKcGJtY25LU0JtYjNJb2RtRnlJR3RsZVNCcGJpQjJZV3gxWlNrZ1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWtLRzV6TENCclpYa3NJR1oxYm1OMGFXOXVLR3RsZVNrZ2V5QnlaWFIxY200Z2RtRnNkV1ZiYTJWNVhUc2dmUzVpYVc1a0tHNTFiR3dzSUd0bGVTa3BPMXh1SUZ4MFhIUnlaWFIxY200Z2JuTTdYRzRnWEhSOU8xeHVYRzRnWEhRdkx5Qm5aWFJFWldaaGRXeDBSWGh3YjNKMElHWjFibU4wYVc5dUlHWnZjaUJqYjIxd1lYUnBZbWxzYVhSNUlIZHBkR2dnYm05dUxXaGhjbTF2Ym5rZ2JXOWtkV3hsYzF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV1SUQwZ1puVnVZM1JwYjI0b2JXOWtkV3hsS1NCN1hHNGdYSFJjZEhaaGNpQm5aWFIwWlhJZ1BTQnRiMlIxYkdVZ0ppWWdiVzlrZFd4bExsOWZaWE5OYjJSMWJHVWdQMXh1SUZ4MFhIUmNkR1oxYm1OMGFXOXVJR2RsZEVSbFptRjFiSFFvS1NCN0lISmxkSFZ5YmlCdGIyUjFiR1ZiSjJSbFptRjFiSFFuWFRzZ2ZTQTZYRzRnWEhSY2RGeDBablZ1WTNScGIyNGdaMlYwVFc5a2RXeGxSWGh3YjNKMGN5Z3BJSHNnY21WMGRYSnVJRzF2WkhWc1pUc2dmVHRjYmlCY2RGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVrS0dkbGRIUmxjaXdnSjJFbkxDQm5aWFIwWlhJcE8xeHVJRngwWEhSeVpYUjFjbTRnWjJWMGRHVnlPMXh1SUZ4MGZUdGNibHh1SUZ4MEx5OGdUMkpxWldOMExuQnliM1J2ZEhsd1pTNW9ZWE5QZDI1UWNtOXdaWEowZVM1allXeHNYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtOGdQU0JtZFc1amRHbHZiaWh2WW1wbFkzUXNJSEJ5YjNCbGNuUjVLU0I3SUhKbGRIVnliaUJQWW1wbFkzUXVjSEp2ZEc5MGVYQmxMbWhoYzA5M2JsQnliM0JsY25SNUxtTmhiR3dvYjJKcVpXTjBMQ0J3Y205d1pYSjBlU2s3SUgwN1hHNWNiaUJjZEM4dklGOWZkMlZpY0dGamExOXdkV0pzYVdOZmNHRjBhRjlmWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbkFnUFNCY0lsd2lPMXh1WEc1Y2JpQmNkQzh2SUV4dllXUWdaVzUwY25rZ2JXOWtkV3hsSUdGdVpDQnlaWFIxY200Z1pYaHdiM0owYzF4dUlGeDBjbVYwZFhKdUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOG9YMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV6SUQwZ01DazdYRzRpTENKbGVIQnZjblJ6SUQwZ2JXOWtkV3hsTG1WNGNHOXlkSE1nUFNCeVpYRjFhWEpsS0Z3aUxpNHZMaTR2Ym05a1pWOXRiMlIxYkdWekwyTnpjeTFzYjJGa1pYSXZaR2x6ZEM5eWRXNTBhVzFsTDJGd2FTNXFjMXdpS1NobVlXeHpaU2s3WEc0dkx5Qk5iMlIxYkdWY2JtVjRjRzl5ZEhNdWNIVnphQ2hiYlc5a2RXeGxMbWxrTENCY0ltaDBiV3dnZTF4Y2JpQWdZbUZqYTJkeWIzVnVaQzFqYjJ4dmNqb2dJek0zTlRFMVF6dGNYRzRnSUdKdmNtUmxjam9nTW5CNElITnZiR2xrSUNNd01EQTdYRnh1SUNCb1pXbG5hSFE2SURFd01IWm9PMXhjYmlBZ2QybGtkR2c2SURFd01IWjNPeUI5WEZ4dVhGeHVZbTlrZVNCN1hGeHVJQ0JpYjNndGMybDZhVzVuT2lCaWIzSmtaWEl0WW05NE8xeGNiaUFnWm05dWRDMW1ZVzFwYkhrNklDZFBjR1Z1SUZOaGJuTW5MQ0J6WVc1ekxYTmxjbWxtTzF4Y2JpQWdiV0Z5WjJsdU9pQmhkWFJ2T3lCOVhGeHVYRnh1YldGcGJpQjdYRnh1SUNCaVlXTnJaM0p2ZFc1a0xXTnZiRzl5T2lBak16YzFNVFZETzF4Y2JpQWdhR1ZwWjJoME9pQXhNREFsTzF4Y2JpQWdkMmxrZEdnNklERXdNQ1U3WEZ4dUlDQmthWE53YkdGNU9pQm1iR1Y0TzF4Y2JpQWdhblZ6ZEdsbWVTMWpiMjUwWlc1ME9pQmpaVzUwWlhJN0lIMWNYRzVjWEc0dWJXRnBiaTFvWldGa1pYSWdlMXhjYmlBZ1pHbHpjR3hoZVRvZ1pteGxlRHRjWEc0Z0lHcDFjM1JwWm5rdFkyOXVkR1Z1ZERvZ2MzQmhZMlV0WW1WMGQyVmxianRjWEc0Z0lHWnNaWGd0WkdseVpXTjBhVzl1T2lCeWIzYzdYRnh1SUNCb1pXbG5hSFE2SUdGMWRHODdYRnh1SUNCM2FXUjBhRG9nTVRBd0pUdGNYRzRnSUdKaFkydG5jbTkxYm1RdFkyOXNiM0k2SUNORlFrWTFSVVU3WEZ4dUlDQmliM0prWlhJNklESndlQ0J6YjJ4cFpDQWpNREF3T3lCOVhGeHVYRnh1YURFZ2UxeGNiaUFnWm05dWRDMXphWHBsT2lBeU5UVWxPMXhjYmlBZ2RHVjRkQzFoYkdsbmJqb2dZMlZ1ZEdWeU8xeGNiaUFnYldGeVoybHVMWFJ2Y0RvZ01EdGNYRzRnSUcxaGNtZHBiaTFpYjNSMGIyMDZJREE3WEZ4dUlDQndZV1JrYVc1bkxYUnZjRG9nTVRCd2VEdGNYRzRnSUhkcFpIUm9PaUF6TUNVN0lIMWNYRzVjWEc1dVlYWWdlMXhjYmlBZ1pHbHpjR3hoZVRvZ1pteGxlRHRjWEc0Z0lIQmhaR1JwYm1jNklERXdjSGc3SUgxY1hHNWNYRzR1Ym1GMlFuVjBkRzl1SUh0Y1hHNGdJR1p2Ym5RdGMybDZaVG9nTVRNd0pUdGNYRzRnSUdOdmJHOXlPaUFqTURBd0lDRnBiWEJ2Y25SaGJuUTdYRnh1SUNCaVlXTnJaM0p2ZFc1a0xXTnZiRzl5T2lBalJVSkdOVVZGTzF4Y2JpQWdZbTl5WkdWeUxXeGxablE2SURGd2VDQnpiMnhwWkNBak1EQXdPMXhjYmlBZ1ltOXlaR1Z5TFhKcFoyaDBPaUF4Y0hnZ2MyOXNhV1FnSXpBd01EdGNYRzRnSUcxaGNtZHBiam9nTVNVZ01qQndlQ0F4SlNBeEpUc2dmVnhjYmlBZ0xtNWhka0oxZEhSdmJqcG9iM1psY2lCN1hGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdFkyOXNiM0k2SUNOalptWXlaR0U3SUgxY1hHNGdJQzV1WVhaQ2RYUjBiMjQ2WVdOMGFYWmxJSHRjWEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzFqYjJ4dmNqb2dJME16UXpKRE5qc2dmVnhjYmx4Y2JpNXNiM2RsY2kxb1pXRmtaWElnZTF4Y2JpQWdaR2x6Y0d4aGVUb2dabXhsZUR0Y1hHNGdJR3AxYzNScFpua3RZMjl1ZEdWdWREb2djM0JoWTJVdFltVjBkMlZsYmp0Y1hHNGdJR1pzWlhndFpHbHlaV04wYVc5dU9pQnliM2M3SUgxY1hHNWNYRzR1WjNKbFpYUnBibWNnZTF4Y2JpQWdabTl1ZEMxemFYcGxPaUF6TUhCNE8xeGNiaUFnWTI5c2IzSTZJQ05GUWtZMVJVVTdYRnh1SUNCd1lXUmthVzVuTFd4bFpuUTZJREUxY0hnN1hGeHVJQ0J0WVhKbmFXNHRkRzl3T2lBeE1IQjRPeUI5WEZ4dVhGeHVMbk5sWVhKamFDMWhjbVZoSUh0Y1hHNGdJR1JwYzNCc1lYazZJR1pzWlhnN1hGeHVJQ0JxZFhOMGFXWjVMV052Ym5SbGJuUTZJR1pzWlhndFpXNWtPMXhjYmlBZ1pteGxlQzFrYVhKbFkzUnBiMjQ2SUhKdmR6c2dmVnhjYmx4Y2JpNXpaV0Z5WTJndFltRnlJSHRjWEc0Z0lHMWhlQzFvWldsbmFIUTZJRFoyYUR0Y1hHNGdJRzFoY21kcGJqb2dOWEI0TzF4Y2JpQWdjR0ZrWkdsdVp6b2dNM0I0T3lCOVhGeHVYRnh1TG5ObFlYSmphQzFwYldGblpTQjdYRnh1SUNCaVlXTnJaM0p2ZFc1a0xXTnZiRzl5T2lBalJVSkdOVVZGTzF4Y2JpQWdZbTl5WkdWeU9pQXhjSGdnYzI5c2FXUWdJekF3TUR0Y1hHNGdJSGRwWkhSb09pQXlNQ1U3WEZ4dUlDQnRZWEpuYVc0dGNtbG5hSFE2SURBN0lIMWNYRzRnSUM1elpXRnlZMmd0YVcxaFoyVTZhRzkyWlhJZ2UxeGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xXTnZiRzl5T2lBalkyWm1NbVJoT3lCOVhGeHVJQ0F1YzJWaGNtTm9MV2x0WVdkbE9tRmpkR2wyWlNCN1hGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdFkyOXNiM0k2SUNORE0wTXlRelk3SUgxY1hHNWNYRzR1YzJWaGNtTm9MV2x1Y0hWMElIdGNYRzRnSUdKdmNtUmxjam9nTVhCNElITnZiR2xrSUNNd01EQTdYRnh1SUNCbWIyNTBMWE5wZW1VNklERXdNQ1U3WEZ4dUlDQnRhVzR0ZDJsa2RHZzZJRGt3SlRzZ2ZWeGNibHhjYmk1aGJHd3RZMkZ5WkhNZ2UxeGNiaUFnWkdsemNHeGhlVG9nWjNKcFpEdGNYRzRnSUdkeWFXUXRaMkZ3T2lBek1IQjRPMXhjYmlBZ1ozSnBaQzEwWlcxd2JHRjBaUzFqYjJ4MWJXNXpPaUJ5WlhCbFlYUW9OQ3dnTVdaeUtUdGNYRzRnSUhCaFpHUnBibWM2SURNd2NIZzdYRnh1SUNCM2FXUjBhRG9nT1RVdU5YWjNPeUI5WEZ4dVhGeHVMbWhwWkdSbGJpQjdYRnh1SUNCa2FYTndiR0Y1T2lCdWIyNWxPeUI5WEZ4dVhGeHVhVzFuSUh0Y1hHNGdJR04xY25OdmNqb2djRzlwYm5SbGNqc2dmVnhjYmx4Y2JpNWpZWEprTFdKMWRIUnZiaUI3WEZ4dUlDQmliM0prWlhJNklERndlQ0J6YjJ4cFpDQWpNREF3TzF4Y2JpQWdhR1ZwWjJoME9pQXlOM0I0TzF4Y2JpQWdiV0Z5WjJsdU9pQXpjSGc3WEZ4dUlDQmpkWEp6YjNJNklIQnZhVzUwWlhJN0lIMWNYRzRnSUM1allYSmtMV0oxZEhSdmJqcG9iM1psY2lCN1hGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdFkyOXNiM0k2SUNOalptWXlaR0U3SUgxY1hHNGdJQzVqWVhKa0xXSjFkSFJ2YmpwaFkzUnBkbVVnZTF4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFdOdmJHOXlPaUFqUXpORE1rTTJPeUI5WEZ4dVhGeHVMbUZrWkMxaWRYUjBiMjRnZTF4Y2JpQWdZbUZqYTJkeWIzVnVaQzFqYjJ4dmNqb2dJMFZDUmpWRlJUdGNYRzRnSUdScGMzQnNZWGs2SUdac1pYZzdYRnh1SUNCM2FXUjBhRG9nTVRJbE95QjlYRnh1WEZ4dUxtRmtaQ0I3WEZ4dUlDQjNhV1IwYURvZ09UQWxPeUI5WEZ4dVhGeHVMbVpoZG05eWFYUmxJSHRjWEc0Z0lHSmhZMnRuY205MWJtUXRZMjlzYjNJNklDTkZRa1kxUlVVN1hGeHVJQ0JpWVdOclozSnZkVzVrTFhKbGNHVmhkRG9nYm04dGNtVndaV0YwTzF4Y2JpQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nWTJWdWRHVnlPMXhjYmlBZ2QybGtkR2c2SURFekpUdGNYRzRnSUdKaFkydG5jbTkxYm1RdGFXMWhaMlU2SUhWeWJDaGNYRndpYUhSMGNITTZMeTlwYldGblpTNW1iR0YwYVdOdmJpNWpiMjB2YVdOdmJuTXZjM1puTHpFME9TOHhORGt5TWpJdWMzWm5YRnhjSWlrN0lIMWNYRzVjWEc0dVkyRnlaQ0I3WEZ4dUlDQmlZV05yWjNKdmRXNWtMV052Ykc5eU9pQWpSRGRHTWtaRk8xeGNiaUFnWW05eVpHVnlPaUF6Y0hnZ2MyOXNhV1FnSXpBd01EdGNYRzRnSUhkcFpIUm9PaUF4TURBbE95QjlYRnh1WEZ4dUxtTmhjbVF0YUdWaFpHVnlJSHRjWEc0Z0lHSmhZMnRuY205MWJtUXRZMjlzYjNJNklDTkZRa1kxUlVVN1hGeHVJQ0JpYjNKa1pYSXRZbTkwZEc5dE9pQXhjSGdnYzI5c2FXUWdJekF3TUR0Y1hHNGdJR1JwYzNCc1lYazZJR1pzWlhnN1hGeHVJQ0JxZFhOMGFXWjVMV052Ym5SbGJuUTZJSE53WVdObExXSmxkSGRsWlc0N1hGeHVJQ0JtYkdWNExXUnBjbVZqZEdsdmJqb2djbTkzT3lCOVhGeHVYRnh1TG1Gc2JDQjdYRnh1SUNCbmNtbGtMV2RoY0RvZ01EdGNYRzRnSUdkeWFXUXRkR1Z0Y0d4aGRHVXRZMjlzZFcxdWN6b2djbVZ3WldGMEtERXNJREZtY2lrN0lIMWNYRzVjWEc0dVlXeHNMWEpsWTJsd1pTMXBibVp2TEZ4Y2JtOXNJSHRjWEc0Z0lHWnZiblF0YzJsNlpUb2dNVFV3SlR0Y1hHNGdJR052Ykc5eU9pQWpSVUpHTlVWRk8xeGNiaUFnZDJsa2RHZzZJREV3TUNVN0lIMWNYRzVjWEc1b015QjdYRnh1SUNCbWIyNTBMWE5wZW1VNklERTFNQ1U3WEZ4dUlDQjBaWGgwTFdGc2FXZHVPaUJqWlc1MFpYSTdYRnh1SUNCaVlXTnJaM0p2ZFc1a0xXTnZiRzl5T2lBalJVSkdOVVZGTzF4Y2JpQWdZbTl5WkdWeUxXSnZkSFJ2YlRvZ01YQjRJSE52Ykdsa0lDTXdNREE3WEZ4dUlDQnRZWEpuYVc0NklEQTdYRnh1SUNCbWIyNTBMWGRsYVdkb2REb2dibTl5YldGc08xeGNiaUFnY0dGa1pHbHVaeTEwYjNBNklEVndlRHRjWEc0Z0lIQmhaR1JwYm1jdFltOTBkRzl0T2lBMWNIZzdJSDFjWEc1Y1hHNHVjbVZqYVhCbExXNWhiV1VnZTF4Y2JpQWdZbUZqYTJkeWIzVnVaQzFqYjJ4dmNqb2dJMFZDUmpWRlJUdGNYRzRnSUdKdmNtUmxjaTFpYjNSMGIyMDZJREZ3ZUNCemIyeHBaQ0FqTURBd08xeGNiaUFnWkdsemNHeGhlVG9nWm14bGVEdGNYRzRnSUdwMWMzUnBabmt0WTI5dWRHVnVkRG9nWTJWdWRHVnlPMXhjYmlBZ1pteGxlQzFrYVhKbFkzUnBiMjQ2SUhKdmR6dGNYRzRnSUdadmJuUXRjMmw2WlRvZ01UVXdKVHRjWEc0Z0lIUmxlSFF0WVd4cFoyNDZJR05sYm5SbGNqc2dmVnhjYmx4Y2JpNWpZWEprTFhCcFkzUjFjbVVnZTF4Y2JpQWdhR1ZwWjJoME9pQXlNREJ3ZUR0Y1hHNGdJSGRwWkhSb09pQTVOQ1U3WEZ4dUlDQmliM0prWlhJNklERndlQ0J6YjJ4cFpDQWpNREF3TzF4Y2JpQWdiV0Z5WjJsdU9pQXhNSEI0SURNbElEaHdlQ0F5TGpZbE95QjlYRnh1SUNBdVkyRnlaQzF3YVdOMGRYSmxPbWh2ZG1WeUlIdGNYRzRnSUNBZ2IzQmhZMmwwZVRvZ01DNDNPeUI5WEZ4dUlDQXVZMkZ5WkMxd2FXTjBkWEpsT21GamRHbDJaU0I3WEZ4dUlDQWdJR0p2Y21SbGNqb2dNbkI0SUhOdmJHbGtJQ013TURBN0lIMWNYRzVjWEc0dWQzSmhjQ0I3WEZ4dUlDQmlZV05yWjNKdmRXNWtMV052Ykc5eU9pQnBibWhsY21sME8xeGNiaUFnYUdWcFoyaDBPaUJwYm1obGNtbDBPMXhjYmlBZ1ltOXlaR1Z5T2lBd095QjlYRnh1WEZ4dUxtWmhkbTl5YVhSbExXRmpkR2wyWlNCN1hGeHVJQ0JpWVdOclozSnZkVzVrTFdsdFlXZGxPaUIxY213b1hGeGNJbWgwZEhCek9pOHZhVzFoWjJVdVpteGhkR2xqYjI0dVkyOXRMMmxqYjI1ekwzTjJaeTh4TkRndk1UUTRPRFF4TG5OMloxeGNYQ0lwTzF4Y2JpQWdZbUZqYTJkeWIzVnVaQzF5WlhCbFlYUTZJRzV2TFhKbGNHVmhkRHNnZlZ4Y2JseGNiaTVrYVhOd2JHRjVMWEpsWTJsd1pTQjdYRnh1SUNCa2FYTndiR0Y1T2lCbmNtbGtPMXhjYmlBZ1ozSnBaQzFuWVhBNklEZHdlRHRjWEc0Z0lHZHlhV1F0ZEdWdGNHeGhkR1V0WTI5c2RXMXVjem9nTUM0MlpuSWdNV1p5TzF4Y2JpQWdaM0pwWkMxMFpXMXdiR0YwWlMxeWIzZHpPaUF4Wm5JZ00yWnlPMXhjYmlBZ2JXRnlaMmx1T2lBeE5YQjRPeUI5WEZ4dVhGeHVMbVJwYzNCc1lYa3RjbVZqYVhCbExXbHVabThnZTF4Y2JpQWdaM0pwWkMxamIyeDFiVzQ2SURFN1hGeHVJQ0JuY21sa0xYSnZkem9nTUM0MU95QjlYRnh1WEZ4dUxuSmxZMmx3WlMxcGJtZHlaV1JwWlc1MGN5QjdYRnh1SUNCcWRYTjBhV1o1TFhObGJHWTZJR05sYm5SbGNqdGNYRzRnSUdkeWFXUXRZMjlzZFcxdU9pQXlPMXhjYmlBZ1ozSnBaQzF5YjNjNklERTdYRnh1SUNCdmRtVnlabXh2ZHpvZ2MyTnliMnhzTzF4Y2JpQWdhR1ZwWjJoME9pQnBibWhsY21sME8xeGNiaUFnWm05dWRDMXphWHBsT2lBeE5YQjRPMXhjYmlBZ1kyOXNiM0k2SUNORlFrWTFSVVU3SUgxY1hHNWNYRzR1Y21WamFYQmxMV2x1WjNKbFpHbGxiblJ6TFhScGRHeGxJSHRjWEc0Z0lHMWhjbWRwYmkxMGIzQTZJREE3WEZ4dUlDQm1iMjUwTFhOcGVtVTZJREl3Y0hnN0lIMWNYRzVjWEc0dWNtVmphWEJsTFdsdWMzUnlkV04wYVc5dWN5QjdYRnh1SUNCbmNtbGtMV052YkhWdGJqb2dNUzl6Y0dGdUlESTdYRnh1SUNCbmNtbGtMWEp2ZHpvZ01qdGNYRzRnSUdadmJuUXRjMmw2WlRvZ01qQndlRHRjWEc0Z0lHTnZiRzl5T2lBalJVSkdOVVZGTzF4Y2JpQWdiV0Y0TFhkcFpIUm9PaUE1TUhaM08xeGNiaUFnYldGeVoybHVMWFJ2Y0RvZ01UQXdjSGc3SUgxY1hHNWNYRzR1ZEc4dFkyOXZheTFuY21WbGRHbHVaeUI3WEZ4dUlDQmpiMnh2Y2pvZ0kwVkNSalZGUlRzZ2ZWeGNibHhjYmk1amJHOXpaUzFpZFhSMGIyNGdlMXhjYmlBZ1ltRmphMmR5YjNWdVpDMWpiMnh2Y2pvZ0kwVkNSalZGUlR0Y1hHNGdJR0poWTJ0bmNtOTFibVF0Y21Wd1pXRjBPaUJ1YnkxeVpYQmxZWFE3WEZ4dUlDQmlZV05yWjNKdmRXNWtMWEJ2YzJsMGFXOXVPaUJqWlc1MFpYSTdYRnh1SUNCM2FXUjBhRG9nTVRNbE8xeGNiaUFnWW1GamEyZHliM1Z1WkMxcGJXRm5aVG9nZFhKc0tGeGNYQ0pvZEhSd2N6b3ZMM2QzZHk1bWJHRjBhV052Ymk1amIyMHZjM1puTDNOMFlYUnBZeTlwWTI5dWN5OXpkbWN2TkRRMkx6UTBOakE1TVM1emRtZGNYRndpS1R0Y1hHNGdJR1p2Ym5RdGQyVnBaMmgwT2lCaWIyeGtPeUI5WEZ4dVhGeHVMbWx1WnkxamIzTjBMRnhjYmk1dVpXVmtaV1F0YVc1bmN5eGNYRzR1Y0dGdWRISjVMV0oxZEhSdmJuTWdlMXhjYmlBZ2JXRnlaMmx1TFd4bFpuUTZJREV3Y0hnN0lIMWNYRzVjWEc1QWJXVmthV0VnS0cxaGVDMTNhV1IwYURvZ09ESTFjSGdwSUh0Y1hHNGdJRzFoYVc0Z2UxeGNiaUFnSUNCM2FXUjBhRG9nT1RVbE95QjlYRnh1SUNBdVlXeHNMV05oY21SeklIdGNYRzRnSUNBZ1pHbHpjR3hoZVRvZ1ozSnBaRHRjWEc0Z0lDQWdaM0pwWkMxbllYQTZJRE13Y0hnN1hGeHVJQ0FnSUdkeWFXUXRkR1Z0Y0d4aGRHVXRZMjlzZFcxdWN6b2djbVZ3WldGMEtETXNJREZtY2lrN1hGeHVJQ0FnSUhCaFpHUnBibWM2SURNd2NIZ2dNQ0F6TUhCNElETXdjSGc3WEZ4dUlDQWdJSGRwWkhSb09pQTVOUzQxZG5jN0lIMWNYRzRnSUM1a2FYTndiR0Y1TFhKbFkybHdaU0I3WEZ4dUlDQWdJR1JwYzNCc1lYazZJR1pzWlhnN1hGeHVJQ0FnSUdwMWMzUnBabmt0WTI5dWRHVnVkRG9nYzNCaFkyVXRZWEp2ZFc1a08xeGNiaUFnSUNCbWJHVjRMV1JwY21WamRHbHZiam9nWTI5c2RXMXVPMXhjYmlBZ0lDQmhiR2xuYmkxcGRHVnRjem9nWTJWdWRHVnlPeUI5WEZ4dUlDQXVjbVZqYVhCbExXbHVjM1J5ZFdOMGFXOXVjeUI3WEZ4dUlDQWdJRzFoY21kcGJpMTBiM0E2SURBN0lIMGdmVnhjYmx4Y2JrQnRaV1JwWVNBb2JXRjRMWGRwWkhSb09pQTJNREJ3ZUNrZ2UxeGNiaUFnTG1Gc2JDMWpZWEprY3lCN1hGeHVJQ0FnSUdScGMzQnNZWGs2SUdkeWFXUTdYRnh1SUNBZ0lHZHlhV1F0WjJGd09pQXpNSEI0TzF4Y2JpQWdJQ0JuY21sa0xYUmxiWEJzWVhSbExXTnZiSFZ0Ym5NNklISmxjR1ZoZENneUxDQXhabklwTzF4Y2JpQWdJQ0J3WVdSa2FXNW5PaUF6TUhCNElEQWdNekJ3ZUNBek1IQjRPMXhjYmlBZ0lDQjNhV1IwYURvZ09UVXVOWFozT3lCOVhGeHVJQ0F1WkdsemNHeGhlUzF5WldOcGNHVWdlMXhjYmlBZ0lDQmthWE53YkdGNU9pQm1iR1Y0TzF4Y2JpQWdJQ0JxZFhOMGFXWjVMV052Ym5SbGJuUTZJR05sYm5SbGNqdGNYRzRnSUNBZ1pteGxlQzFrYVhKbFkzUnBiMjQ2SUdOdmJIVnRianRjWEc0Z0lDQWdZV3hwWjI0dGFYUmxiWE02SUdObGJuUmxjanNnZlZ4Y2JpQWdMbk5sWVhKamFDMXBiV0ZuWlNCN1hGeHVJQ0FnSUdScGMzQnNZWGs2SUc1dmJtVTdJSDBnZlZ4Y2JseGNia0J0WldScFlTQW9iV0Y0TFhkcFpIUm9PaUEwTlRCd2VDa2dlMXhjYmlBZ0xteHZkMlZ5TFdobFlXUmxjaXhjWEc0Z0lDNXRZV2x1TFdobFlXUmxjaUI3WEZ4dUlDQWdJR1pzWlhndFpHbHlaV04wYVc5dU9pQmpiMngxYlc0N1hGeHVJQ0FnSUdGc2FXZHVMV2wwWlcxek9pQmpaVzUwWlhJN0lIMWNYRzRnSUM1elpXRnlZMmd0YVc1d2RYUWdlMXhjYmlBZ0lDQnRhVzR0ZDJsa2RHZzZJRGd3ZG5jN0lIMWNYRzRnSUM1aGJHd3RZMkZ5WkhNZ2UxeGNiaUFnSUNCa2FYTndiR0Y1T2lCbmNtbGtPMXhjYmlBZ0lDQm5jbWxrTFdkaGNEb2dNekJ3ZUR0Y1hHNGdJQ0FnWjNKcFpDMTBaVzF3YkdGMFpTMWpiMngxYlc1ek9pQnlaWEJsWVhRb01Td2dNV1p5S1R0Y1hHNGdJQ0FnY0dGa1pHbHVaem9nTXpCd2VDQXdJRE13Y0hnZ016QndlRHRjWEc0Z0lDQWdkMmxrZEdnNklEazFMalYyZHpzZ2ZWeGNiaUFnTG1OaGNtUXRZblYwZEc5dUlIdGNYRzRnSUNBZ2FHVnBaMmgwT2lCaGRYUnZPeUI5WEZ4dUlDQXVkRzh0WTI5dmF5QjdYRnh1SUNBZ0lHUnBjM0JzWVhrNklHWnNaWGc3WEZ4dUlDQWdJR1pzWlhndFpHbHlaV04wYVc5dU9pQmpiMngxYlc0N1hGeHVJQ0FnSUdGc2FXZHVMV2wwWlcxek9pQmpaVzUwWlhJN0lIMWNYRzRnSUM1allYSmtJSHRjWEc0Z0lDQWdiV0Y0TFhkcFpIUm9PaUE1TlNVN0lIMGdmVnhjYmx3aUxDQmNJbHdpWFNrN1hHNWNiaUlzSWx3aWRYTmxJSE4wY21samRGd2lPMXh1WEc0dktseHVJQ0JOU1ZRZ1RHbGpaVzV6WlNCb2RIUndPaTh2ZDNkM0xtOXdaVzV6YjNWeVkyVXViM0puTDJ4cFkyVnVjMlZ6TDIxcGRDMXNhV05sYm5ObExuQm9jRnh1SUNCQmRYUm9iM0lnVkc5aWFXRnpJRXR2Y0hCbGNuTWdRSE52YTNKaFhHNHFMMXh1THk4Z1kzTnpJR0poYzJVZ1kyOWtaU3dnYVc1cVpXTjBaV1FnWW5rZ2RHaGxJR056Y3kxc2IyRmtaWEpjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRnS0hWelpWTnZkWEpqWlUxaGNDa2dlMXh1SUNCMllYSWdiR2x6ZENBOUlGdGRPeUF2THlCeVpYUjFjbTRnZEdobElHeHBjM1FnYjJZZ2JXOWtkV3hsY3lCaGN5QmpjM01nYzNSeWFXNW5YRzVjYmlBZ2JHbHpkQzUwYjFOMGNtbHVaeUE5SUdaMWJtTjBhVzl1SUhSdlUzUnlhVzVuS0NrZ2UxeHVJQ0FnSUhKbGRIVnliaUIwYUdsekxtMWhjQ2htZFc1amRHbHZiaUFvYVhSbGJTa2dlMXh1SUNBZ0lDQWdkbUZ5SUdOdmJuUmxiblFnUFNCamMzTlhhWFJvVFdGd2NHbHVaMVJ2VTNSeWFXNW5LR2wwWlcwc0lIVnpaVk52ZFhKalpVMWhjQ2s3WEc1Y2JpQWdJQ0FnSUdsbUlDaHBkR1Z0V3pKZEtTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQW5RRzFsWkdsaElDY2dLeUJwZEdWdFd6SmRJQ3NnSjNzbklDc2dZMjl1ZEdWdWRDQXJJQ2Q5Snp0Y2JpQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJqYjI1MFpXNTBPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMHBMbXB2YVc0b0p5Y3BPMXh1SUNCOU95QXZMeUJwYlhCdmNuUWdZU0JzYVhOMElHOW1JRzF2WkhWc1pYTWdhVzUwYnlCMGFHVWdiR2x6ZEZ4dVhHNWNiaUFnYkdsemRDNXBJRDBnWm5WdVkzUnBiMjRnS0cxdlpIVnNaWE1zSUcxbFpHbGhVWFZsY25rcElIdGNiaUFnSUNCcFppQW9kSGx3Wlc5bUlHMXZaSFZzWlhNZ1BUMDlJQ2R6ZEhKcGJtY25LU0I3WEc0Z0lDQWdJQ0J0YjJSMWJHVnpJRDBnVzF0dWRXeHNMQ0J0YjJSMWJHVnpMQ0FuSjExZE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhaaGNpQmhiSEpsWVdSNVNXMXdiM0owWldSTmIyUjFiR1Z6SUQwZ2UzMDdYRzVjYmlBZ0lDQm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJSFJvYVhNdWJHVnVaM1JvT3lCcEt5c3BJSHRjYmlBZ0lDQWdJSFpoY2lCcFpDQTlJSFJvYVhOYmFWMWJNRjA3WEc1Y2JpQWdJQ0FnSUdsbUlDaHBaQ0FoUFNCdWRXeHNLU0I3WEc0Z0lDQWdJQ0FnSUdGc2NtVmhaSGxKYlhCdmNuUmxaRTF2WkhWc1pYTmJhV1JkSUQwZ2RISjFaVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQm1iM0lnS0drZ1BTQXdPeUJwSUR3Z2JXOWtkV3hsY3k1c1pXNW5kR2c3SUdrckt5a2dlMXh1SUNBZ0lDQWdkbUZ5SUdsMFpXMGdQU0J0YjJSMWJHVnpXMmxkT3lBdkx5QnphMmx3SUdGc2NtVmhaSGtnYVcxd2IzSjBaV1FnYlc5a2RXeGxYRzRnSUNBZ0lDQXZMeUIwYUdseklHbHRjR3hsYldWdWRHRjBhVzl1SUdseklHNXZkQ0F4TURBbElIQmxjbVpsWTNRZ1ptOXlJSGRsYVhKa0lHMWxaR2xoSUhGMVpYSjVJR052YldKcGJtRjBhVzl1YzF4dUlDQWdJQ0FnTHk4Z2QyaGxiaUJoSUcxdlpIVnNaU0JwY3lCcGJYQnZjblJsWkNCdGRXeDBhWEJzWlNCMGFXMWxjeUIzYVhSb0lHUnBabVpsY21WdWRDQnRaV1JwWVNCeGRXVnlhV1Z6TGx4dUlDQWdJQ0FnTHk4Z1NTQm9iM0JsSUhSb2FYTWdkMmxzYkNCdVpYWmxjaUJ2WTJOMWNpQW9TR1Y1SUhSb2FYTWdkMkY1SUhkbElHaGhkbVVnYzIxaGJHeGxjaUJpZFc1a2JHVnpLVnh1WEc0Z0lDQWdJQ0JwWmlBb2FYUmxiVnN3WFNBOVBTQnVkV3hzSUh4OElDRmhiSEpsWVdSNVNXMXdiM0owWldSTmIyUjFiR1Z6VzJsMFpXMWJNRjFkS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2h0WldScFlWRjFaWEo1SUNZbUlDRnBkR1Z0V3pKZEtTQjdYRzRnSUNBZ0lDQWdJQ0FnYVhSbGJWc3lYU0E5SUcxbFpHbGhVWFZsY25rN1hHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCcFppQW9iV1ZrYVdGUmRXVnllU2tnZTF4dUlDQWdJQ0FnSUNBZ0lHbDBaVzFiTWwwZ1BTQW5LQ2NnS3lCcGRHVnRXekpkSUNzZ0p5a2dZVzVrSUNnbklDc2diV1ZrYVdGUmRXVnllU0FySUNjcEp6dGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUd4cGMzUXVjSFZ6YUNocGRHVnRLVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUgwN1hHNWNiaUFnY21WMGRYSnVJR3hwYzNRN1hHNTlPMXh1WEc1bWRXNWpkR2x2YmlCamMzTlhhWFJvVFdGd2NHbHVaMVJ2VTNSeWFXNW5LR2wwWlcwc0lIVnpaVk52ZFhKalpVMWhjQ2tnZTF4dUlDQjJZWElnWTI5dWRHVnVkQ0E5SUdsMFpXMWJNVjBnZkh3Z0p5YzdYRzRnSUhaaGNpQmpjM05OWVhCd2FXNW5JRDBnYVhSbGJWc3pYVHRjYmx4dUlDQnBaaUFvSVdOemMwMWhjSEJwYm1jcElIdGNiaUFnSUNCeVpYUjFjbTRnWTI5dWRHVnVkRHRjYmlBZ2ZWeHVYRzRnSUdsbUlDaDFjMlZUYjNWeVkyVk5ZWEFnSmlZZ2RIbHdaVzltSUdKMGIyRWdQVDA5SUNkbWRXNWpkR2x2YmljcElIdGNiaUFnSUNCMllYSWdjMjkxY21ObFRXRndjR2x1WnlBOUlIUnZRMjl0YldWdWRDaGpjM05OWVhCd2FXNW5LVHRjYmlBZ0lDQjJZWElnYzI5MWNtTmxWVkpNY3lBOUlHTnpjMDFoY0hCcGJtY3VjMjkxY21ObGN5NXRZWEFvWm5WdVkzUnBiMjRnS0hOdmRYSmpaU2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJQ2N2S2lNZ2MyOTFjbU5sVlZKTVBTY2dLeUJqYzNOTllYQndhVzVuTG5OdmRYSmpaVkp2YjNRZ0t5QnpiM1Z5WTJVZ0t5QW5JQ292Snp0Y2JpQWdJQ0I5S1R0Y2JpQWdJQ0J5WlhSMWNtNGdXMk52Ym5SbGJuUmRMbU52Ym1OaGRDaHpiM1Z5WTJWVlVreHpLUzVqYjI1allYUW9XM052ZFhKalpVMWhjSEJwYm1kZEtTNXFiMmx1S0NkY1hHNG5LVHRjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUJiWTI5dWRHVnVkRjB1YW05cGJpZ25YRnh1SnlrN1hHNTlJQzh2SUVGa1lYQjBaV1FnWm5KdmJTQmpiMjUyWlhKMExYTnZkWEpqWlMxdFlYQWdLRTFKVkNsY2JseHVYRzVtZFc1amRHbHZiaUIwYjBOdmJXMWxiblFvYzI5MWNtTmxUV0Z3S1NCN1hHNGdJQzh2SUdWemJHbHVkQzFrYVhOaFlteGxMVzVsZUhRdGJHbHVaU0J1YnkxMWJtUmxabHh1SUNCMllYSWdZbUZ6WlRZMElEMGdZblJ2WVNoMWJtVnpZMkZ3WlNobGJtTnZaR1ZWVWtsRGIyMXdiMjVsYm5Rb1NsTlBUaTV6ZEhKcGJtZHBabmtvYzI5MWNtTmxUV0Z3S1NrcEtUdGNiaUFnZG1GeUlHUmhkR0VnUFNBbmMyOTFjbU5sVFdGd2NHbHVaMVZTVEQxa1lYUmhPbUZ3Y0d4cFkyRjBhVzl1TDJwemIyNDdZMmhoY25ObGREMTFkR1l0T0R0aVlYTmxOalFzSnlBcklHSmhjMlUyTkR0Y2JpQWdjbVYwZFhKdUlDY3ZLaU1nSnlBcklHUmhkR0VnS3lBbklDb3ZKenRjYm4waUxDSXZLbHh1WEhSTlNWUWdUR2xqWlc1elpTQm9kSFJ3T2k4dmQzZDNMbTl3Wlc1emIzVnlZMlV1YjNKbkwyeHBZMlZ1YzJWekwyMXBkQzFzYVdObGJuTmxMbkJvY0Z4dVhIUkJkWFJvYjNJZ1ZHOWlhV0Z6SUV0dmNIQmxjbk1nUUhOdmEzSmhYRzRxTDF4dVhHNTJZWElnYzNSNWJHVnpTVzVFYjIwZ1BTQjdmVHRjYmx4dWRtRnlYSFJ0WlcxdmFYcGxJRDBnWm5WdVkzUnBiMjRnS0dadUtTQjdYRzVjZEhaaGNpQnRaVzF2TzF4dVhHNWNkSEpsZEhWeWJpQm1kVzVqZEdsdmJpQW9LU0I3WEc1Y2RGeDBhV1lnS0hSNWNHVnZaaUJ0WlcxdklEMDlQU0JjSW5WdVpHVm1hVzVsWkZ3aUtTQnRaVzF2SUQwZ1ptNHVZWEJ3Ykhrb2RHaHBjeXdnWVhKbmRXMWxiblJ6S1R0Y2JseDBYSFJ5WlhSMWNtNGdiV1Z0Ynp0Y2JseDBmVHRjYm4wN1hHNWNiblpoY2lCcGMwOXNaRWxGSUQwZ2JXVnRiMmw2WlNobWRXNWpkR2x2YmlBb0tTQjdYRzVjZEM4dklGUmxjM1FnWm05eUlFbEZJRHc5SURrZ1lYTWdjSEp2Y0c5elpXUWdZbmtnUW5KdmQzTmxjbWhoWTJ0elhHNWNkQzh2SUVCelpXVWdhSFIwY0RvdkwySnliM2R6WlhKb1lXTnJjeTVqYjIwdkkyaGhZMnN0WlRjeFpEZzJPVEptTmpVek16UXhOek5tWldVM01UVmpNakl5WTJJNE1EVmNibHgwTHk4Z1ZHVnpkSE1nWm05eUlHVjRhWE4wWlc1alpTQnZaaUJ6ZEdGdVpHRnlaQ0JuYkc5aVlXeHpJR2x6SUhSdklHRnNiRzkzSUhOMGVXeGxMV3h2WVdSbGNseHVYSFF2THlCMGJ5QnZjR1Z5WVhSbElHTnZjbkpsWTNSc2VTQnBiblJ2SUc1dmJpMXpkR0Z1WkdGeVpDQmxiblpwY205dWJXVnVkSE5jYmx4MEx5OGdRSE5sWlNCb2RIUndjem92TDJkcGRHaDFZaTVqYjIwdmQyVmljR0ZqYXkxamIyNTBjbWxpTDNOMGVXeGxMV3h2WVdSbGNpOXBjM04xWlhNdk1UYzNYRzVjZEhKbGRIVnliaUIzYVc1a2IzY2dKaVlnWkc5amRXMWxiblFnSmlZZ1pHOWpkVzFsYm5RdVlXeHNJQ1ltSUNGM2FXNWtiM2N1WVhSdllqdGNibjBwTzF4dVhHNTJZWElnWjJWMFZHRnlaMlYwSUQwZ1puVnVZM1JwYjI0Z0tIUmhjbWRsZEN3Z2NHRnlaVzUwS1NCN1hHNGdJR2xtSUNod1lYSmxiblFwZTF4dUlDQWdJSEpsZEhWeWJpQndZWEpsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWgwWVhKblpYUXBPMXh1SUNCOVhHNGdJSEpsZEhWeWJpQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0hSaGNtZGxkQ2s3WEc1OU8xeHVYRzUyWVhJZ1oyVjBSV3hsYldWdWRDQTlJQ2htZFc1amRHbHZiaUFvWm00cElIdGNibHgwZG1GeUlHMWxiVzhnUFNCN2ZUdGNibHh1WEhSeVpYUjFjbTRnWm5WdVkzUnBiMjRvZEdGeVoyVjBMQ0J3WVhKbGJuUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2THlCSlppQndZWE56YVc1bklHWjFibU4wYVc5dUlHbHVJRzl3ZEdsdmJuTXNJSFJvWlc0Z2RYTmxJR2wwSUdadmNpQnlaWE52YkhabElGd2lhR1ZoWkZ3aUlHVnNaVzFsYm5RdVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OGdWWE5sWm5Wc0lHWnZjaUJUYUdGa2IzY2dVbTl2ZENCemRIbHNaU0JwTG1WY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdkx5QjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeThnSUNCcGJuTmxjblJKYm5Sdk9pQm1kVzVqZEdsdmJpQW9LU0I3SUhKbGRIVnliaUJrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtGd2lJMlp2YjF3aUtTNXphR0ZrYjNkU2IyOTBJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2THlCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFI1Y0dWdlppQjBZWEpuWlhRZ1BUMDlJQ2RtZFc1amRHbHZiaWNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUIwWVhKblpYUW9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIUjVjR1Z2WmlCdFpXMXZXM1JoY21kbGRGMGdQVDA5SUZ3aWRXNWtaV1pwYm1Wa1hDSXBJSHRjYmx4MFhIUmNkSFpoY2lCemRIbHNaVlJoY21kbGRDQTlJR2RsZEZSaGNtZGxkQzVqWVd4c0tIUm9hWE1zSUhSaGNtZGxkQ3dnY0dGeVpXNTBLVHRjYmx4MFhIUmNkQzh2SUZOd1pXTnBZV3dnWTJGelpTQjBieUJ5WlhSMWNtNGdhR1ZoWkNCdlppQnBabkpoYldVZ2FXNXpkR1ZoWkNCdlppQnBabkpoYldVZ2FYUnpaV3htWEc1Y2RGeDBYSFJwWmlBb2QybHVaRzkzTGtoVVRVeEpSbkpoYldWRmJHVnRaVzUwSUNZbUlITjBlV3hsVkdGeVoyVjBJR2x1YzNSaGJtTmxiMllnZDJsdVpHOTNMa2hVVFV4SlJuSmhiV1ZGYkdWdFpXNTBLU0I3WEc1Y2RGeDBYSFJjZEhSeWVTQjdYRzVjZEZ4MFhIUmNkRngwTHk4Z1ZHaHBjeUIzYVd4c0lIUm9jbTkzSUdGdUlHVjRZMlZ3ZEdsdmJpQnBaaUJoWTJObGMzTWdkRzhnYVdaeVlXMWxJR2x6SUdKc2IyTnJaV1JjYmx4MFhIUmNkRngwWEhRdkx5QmtkV1VnZEc4Z1kzSnZjM010YjNKcFoybHVJSEpsYzNSeWFXTjBhVzl1YzF4dVhIUmNkRngwWEhSY2RITjBlV3hsVkdGeVoyVjBJRDBnYzNSNWJHVlVZWEpuWlhRdVkyOXVkR1Z1ZEVSdlkzVnRaVzUwTG1obFlXUTdYRzVjZEZ4MFhIUmNkSDBnWTJGMFkyZ29aU2tnZTF4dVhIUmNkRngwWEhSY2RITjBlV3hsVkdGeVoyVjBJRDBnYm5Wc2JEdGNibHgwWEhSY2RGeDBmVnh1WEhSY2RGeDBmVnh1WEhSY2RGeDBiV1Z0YjF0MFlYSm5aWFJkSUQwZ2MzUjViR1ZVWVhKblpYUTdYRzVjZEZ4MGZWeHVYSFJjZEhKbGRIVnliaUJ0WlcxdlczUmhjbWRsZEYxY2JseDBmVHRjYm4wcEtDazdYRzVjYm5aaGNpQnphVzVuYkdWMGIyNGdQU0J1ZFd4c08xeHVkbUZ5WEhSemFXNW5iR1YwYjI1RGIzVnVkR1Z5SUQwZ01EdGNiblpoY2x4MGMzUjViR1Z6U1c1elpYSjBaV1JCZEZSdmNDQTlJRnRkTzF4dVhHNTJZWEpjZEdacGVGVnliSE1nUFNCeVpYRjFhWEpsS0Z3aUxpOTFjbXh6WENJcE8xeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVLR3hwYzNRc0lHOXdkR2x2Ym5NcElIdGNibHgwYVdZZ0tIUjVjR1Z2WmlCRVJVSlZSeUFoUFQwZ1hDSjFibVJsWm1sdVpXUmNJaUFtSmlCRVJVSlZSeWtnZTF4dVhIUmNkR2xtSUNoMGVYQmxiMllnWkc5amRXMWxiblFnSVQwOUlGd2liMkpxWldOMFhDSXBJSFJvY205M0lHNWxkeUJGY25KdmNpaGNJbFJvWlNCemRIbHNaUzFzYjJGa1pYSWdZMkZ1Ym05MElHSmxJSFZ6WldRZ2FXNGdZU0J1YjI0dFluSnZkM05sY2lCbGJuWnBjbTl1YldWdWRGd2lLVHRjYmx4MGZWeHVYRzVjZEc5d2RHbHZibk1nUFNCdmNIUnBiMjV6SUh4OElIdDlPMXh1WEc1Y2RHOXdkR2x2Ym5NdVlYUjBjbk1nUFNCMGVYQmxiMllnYjNCMGFXOXVjeTVoZEhSeWN5QTlQVDBnWENKdlltcGxZM1JjSWlBL0lHOXdkR2x2Ym5NdVlYUjBjbk1nT2lCN2ZUdGNibHh1WEhRdkx5QkdiM0pqWlNCemFXNW5iR1V0ZEdGbklITnZiSFYwYVc5dUlHOXVJRWxGTmkwNUxDQjNhR2xqYUNCb1lYTWdZU0JvWVhKa0lHeHBiV2wwSUc5dUlIUm9aU0FqSUc5bUlEeHpkSGxzWlQ1Y2JseDBMeThnZEdGbmN5QnBkQ0IzYVd4c0lHRnNiRzkzSUc5dUlHRWdjR0ZuWlZ4dVhIUnBaaUFvSVc5d2RHbHZibk11YzJsdVoyeGxkRzl1SUNZbUlIUjVjR1Z2WmlCdmNIUnBiMjV6TG5OcGJtZHNaWFJ2YmlBaFBUMGdYQ0ppYjI5c1pXRnVYQ0lwSUc5d2RHbHZibk11YzJsdVoyeGxkRzl1SUQwZ2FYTlBiR1JKUlNncE8xeHVYRzVjZEM4dklFSjVJR1JsWm1GMWJIUXNJR0ZrWkNBOGMzUjViR1UrSUhSaFozTWdkRzhnZEdobElEeG9aV0ZrUGlCbGJHVnRaVzUwWEc0Z0lDQWdJQ0FnSUdsbUlDZ2hiM0IwYVc5dWN5NXBibk5sY25SSmJuUnZLU0J2Y0hScGIyNXpMbWx1YzJWeWRFbHVkRzhnUFNCY0ltaGxZV1JjSWp0Y2JseHVYSFF2THlCQ2VTQmtaV1poZFd4MExDQmhaR1FnUEhOMGVXeGxQaUIwWVdkeklIUnZJSFJvWlNCaWIzUjBiMjBnYjJZZ2RHaGxJSFJoY21kbGRGeHVYSFJwWmlBb0lXOXdkR2x2Ym5NdWFXNXpaWEowUVhRcElHOXdkR2x2Ym5NdWFXNXpaWEowUVhRZ1BTQmNJbUp2ZEhSdmJWd2lPMXh1WEc1Y2RIWmhjaUJ6ZEhsc1pYTWdQU0JzYVhOMFZHOVRkSGxzWlhNb2JHbHpkQ3dnYjNCMGFXOXVjeWs3WEc1Y2JseDBZV1JrVTNSNWJHVnpWRzlFYjIwb2MzUjViR1Z6TENCdmNIUnBiMjV6S1R0Y2JseHVYSFJ5WlhSMWNtNGdablZ1WTNScGIyNGdkWEJrWVhSbElDaHVaWGRNYVhOMEtTQjdYRzVjZEZ4MGRtRnlJRzFoZVZKbGJXOTJaU0E5SUZ0ZE8xeHVYRzVjZEZ4MFptOXlJQ2gyWVhJZ2FTQTlJREE3SUdrZ1BDQnpkSGxzWlhNdWJHVnVaM1JvT3lCcEt5c3BJSHRjYmx4MFhIUmNkSFpoY2lCcGRHVnRJRDBnYzNSNWJHVnpXMmxkTzF4dVhIUmNkRngwZG1GeUlHUnZiVk4wZVd4bElEMGdjM1I1YkdWelNXNUViMjFiYVhSbGJTNXBaRjA3WEc1Y2JseDBYSFJjZEdSdmJWTjBlV3hsTG5KbFpuTXRMVHRjYmx4MFhIUmNkRzFoZVZKbGJXOTJaUzV3ZFhOb0tHUnZiVk4wZVd4bEtUdGNibHgwWEhSOVhHNWNibHgwWEhScFppaHVaWGRNYVhOMEtTQjdYRzVjZEZ4MFhIUjJZWElnYm1WM1UzUjViR1Z6SUQwZ2JHbHpkRlJ2VTNSNWJHVnpLRzVsZDB4cGMzUXNJRzl3ZEdsdmJuTXBPMXh1WEhSY2RGeDBZV1JrVTNSNWJHVnpWRzlFYjIwb2JtVjNVM1I1YkdWekxDQnZjSFJwYjI1ektUdGNibHgwWEhSOVhHNWNibHgwWEhSbWIzSWdLSFpoY2lCcElEMGdNRHNnYVNBOElHMWhlVkpsYlc5MlpTNXNaVzVuZEdnN0lHa3JLeWtnZTF4dVhIUmNkRngwZG1GeUlHUnZiVk4wZVd4bElEMGdiV0Y1VW1WdGIzWmxXMmxkTzF4dVhHNWNkRngwWEhScFppaGtiMjFUZEhsc1pTNXlaV1p6SUQwOVBTQXdLU0I3WEc1Y2RGeDBYSFJjZEdadmNpQW9kbUZ5SUdvZ1BTQXdPeUJxSUR3Z1pHOXRVM1I1YkdVdWNHRnlkSE11YkdWdVozUm9PeUJxS3lzcElHUnZiVk4wZVd4bExuQmhjblJ6VzJwZEtDazdYRzVjYmx4MFhIUmNkRngwWkdWc1pYUmxJSE4wZVd4bGMwbHVSRzl0VzJSdmJWTjBlV3hsTG1sa1hUdGNibHgwWEhSY2RIMWNibHgwWEhSOVhHNWNkSDA3WEc1OU8xeHVYRzVtZFc1amRHbHZiaUJoWkdSVGRIbHNaWE5VYjBSdmJTQW9jM1I1YkdWekxDQnZjSFJwYjI1ektTQjdYRzVjZEdadmNpQW9kbUZ5SUdrZ1BTQXdPeUJwSUR3Z2MzUjViR1Z6TG14bGJtZDBhRHNnYVNzcktTQjdYRzVjZEZ4MGRtRnlJR2wwWlcwZ1BTQnpkSGxzWlhOYmFWMDdYRzVjZEZ4MGRtRnlJR1J2YlZOMGVXeGxJRDBnYzNSNWJHVnpTVzVFYjIxYmFYUmxiUzVwWkYwN1hHNWNibHgwWEhScFppaGtiMjFUZEhsc1pTa2dlMXh1WEhSY2RGeDBaRzl0VTNSNWJHVXVjbVZtY3lzck8xeHVYRzVjZEZ4MFhIUm1iM0lvZG1GeUlHb2dQU0F3T3lCcUlEd2daRzl0VTNSNWJHVXVjR0Z5ZEhNdWJHVnVaM1JvT3lCcUt5c3BJSHRjYmx4MFhIUmNkRngwWkc5dFUzUjViR1V1Y0dGeWRITmJhbDBvYVhSbGJTNXdZWEowYzF0cVhTazdYRzVjZEZ4MFhIUjlYRzVjYmx4MFhIUmNkR1p2Y2lnN0lHb2dQQ0JwZEdWdExuQmhjblJ6TG14bGJtZDBhRHNnYWlzcktTQjdYRzVjZEZ4MFhIUmNkR1J2YlZOMGVXeGxMbkJoY25SekxuQjFjMmdvWVdSa1UzUjViR1VvYVhSbGJTNXdZWEowYzF0cVhTd2diM0IwYVc5dWN5a3BPMXh1WEhSY2RGeDBmVnh1WEhSY2RIMGdaV3h6WlNCN1hHNWNkRngwWEhSMllYSWdjR0Z5ZEhNZ1BTQmJYVHRjYmx4dVhIUmNkRngwWm05eUtIWmhjaUJxSUQwZ01Ec2dhaUE4SUdsMFpXMHVjR0Z5ZEhNdWJHVnVaM1JvT3lCcUt5c3BJSHRjYmx4MFhIUmNkRngwY0dGeWRITXVjSFZ6YUNoaFpHUlRkSGxzWlNocGRHVnRMbkJoY25SelcycGRMQ0J2Y0hScGIyNXpLU2s3WEc1Y2RGeDBYSFI5WEc1Y2JseDBYSFJjZEhOMGVXeGxjMGx1Ukc5dFcybDBaVzB1YVdSZElEMGdlMmxrT2lCcGRHVnRMbWxrTENCeVpXWnpPaUF4TENCd1lYSjBjem9nY0dGeWRITjlPMXh1WEhSY2RIMWNibHgwZlZ4dWZWeHVYRzVtZFc1amRHbHZiaUJzYVhOMFZHOVRkSGxzWlhNZ0tHeHBjM1FzSUc5d2RHbHZibk1wSUh0Y2JseDBkbUZ5SUhOMGVXeGxjeUE5SUZ0ZE8xeHVYSFIyWVhJZ2JtVjNVM1I1YkdWeklEMGdlMzA3WEc1Y2JseDBabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0JzYVhOMExteGxibWQwYURzZ2FTc3JLU0I3WEc1Y2RGeDBkbUZ5SUdsMFpXMGdQU0JzYVhOMFcybGRPMXh1WEhSY2RIWmhjaUJwWkNBOUlHOXdkR2x2Ym5NdVltRnpaU0EvSUdsMFpXMWJNRjBnS3lCdmNIUnBiMjV6TG1KaGMyVWdPaUJwZEdWdFd6QmRPMXh1WEhSY2RIWmhjaUJqYzNNZ1BTQnBkR1Z0V3pGZE8xeHVYSFJjZEhaaGNpQnRaV1JwWVNBOUlHbDBaVzFiTWwwN1hHNWNkRngwZG1GeUlITnZkWEpqWlUxaGNDQTlJR2wwWlcxYk0xMDdYRzVjZEZ4MGRtRnlJSEJoY25RZ1BTQjdZM056T2lCamMzTXNJRzFsWkdsaE9pQnRaV1JwWVN3Z2MyOTFjbU5sVFdGd09pQnpiM1Z5WTJWTllYQjlPMXh1WEc1Y2RGeDBhV1lvSVc1bGQxTjBlV3hsYzF0cFpGMHBJSE4wZVd4bGN5NXdkWE5vS0c1bGQxTjBlV3hsYzF0cFpGMGdQU0I3YVdRNklHbGtMQ0J3WVhKMGN6b2dXM0JoY25SZGZTazdYRzVjZEZ4MFpXeHpaU0J1WlhkVGRIbHNaWE5iYVdSZExuQmhjblJ6TG5CMWMyZ29jR0Z5ZENrN1hHNWNkSDFjYmx4dVhIUnlaWFIxY200Z2MzUjViR1Z6TzF4dWZWeHVYRzVtZFc1amRHbHZiaUJwYm5ObGNuUlRkSGxzWlVWc1pXMWxiblFnS0c5d2RHbHZibk1zSUhOMGVXeGxLU0I3WEc1Y2RIWmhjaUIwWVhKblpYUWdQU0JuWlhSRmJHVnRaVzUwS0c5d2RHbHZibk11YVc1elpYSjBTVzUwYnlsY2JseHVYSFJwWmlBb0lYUmhjbWRsZENrZ2UxeHVYSFJjZEhSb2NtOTNJRzVsZHlCRmNuSnZjaWhjSWtOdmRXeGtiaWQwSUdacGJtUWdZU0J6ZEhsc1pTQjBZWEpuWlhRdUlGUm9hWE1nY0hKdlltRmliSGtnYldWaGJuTWdkR2hoZENCMGFHVWdkbUZzZFdVZ1ptOXlJSFJvWlNBbmFXNXpaWEowU1c1MGJ5Y2djR0Z5WVcxbGRHVnlJR2x6SUdsdWRtRnNhV1F1WENJcE8xeHVYSFI5WEc1Y2JseDBkbUZ5SUd4aGMzUlRkSGxzWlVWc1pXMWxiblJKYm5ObGNuUmxaRUYwVkc5d0lEMGdjM1I1YkdWelNXNXpaWEowWldSQmRGUnZjRnR6ZEhsc1pYTkpibk5sY25SbFpFRjBWRzl3TG14bGJtZDBhQ0F0SURGZE8xeHVYRzVjZEdsbUlDaHZjSFJwYjI1ekxtbHVjMlZ5ZEVGMElEMDlQU0JjSW5SdmNGd2lLU0I3WEc1Y2RGeDBhV1lnS0NGc1lYTjBVM1I1YkdWRmJHVnRaVzUwU1c1elpYSjBaV1JCZEZSdmNDa2dlMXh1WEhSY2RGeDBkR0Z5WjJWMExtbHVjMlZ5ZEVKbFptOXlaU2h6ZEhsc1pTd2dkR0Z5WjJWMExtWnBjbk4wUTJocGJHUXBPMXh1WEhSY2RIMGdaV3h6WlNCcFppQW9iR0Z6ZEZOMGVXeGxSV3hsYldWdWRFbHVjMlZ5ZEdWa1FYUlViM0F1Ym1WNGRGTnBZbXhwYm1jcElIdGNibHgwWEhSY2RIUmhjbWRsZEM1cGJuTmxjblJDWldadmNtVW9jM1I1YkdVc0lHeGhjM1JUZEhsc1pVVnNaVzFsYm5SSmJuTmxjblJsWkVGMFZHOXdMbTVsZUhSVGFXSnNhVzVuS1R0Y2JseDBYSFI5SUdWc2MyVWdlMXh1WEhSY2RGeDBkR0Z5WjJWMExtRndjR1Z1WkVOb2FXeGtLSE4wZVd4bEtUdGNibHgwWEhSOVhHNWNkRngwYzNSNWJHVnpTVzV6WlhKMFpXUkJkRlJ2Y0M1d2RYTm9LSE4wZVd4bEtUdGNibHgwZlNCbGJITmxJR2xtSUNodmNIUnBiMjV6TG1sdWMyVnlkRUYwSUQwOVBTQmNJbUp2ZEhSdmJWd2lLU0I3WEc1Y2RGeDBkR0Z5WjJWMExtRndjR1Z1WkVOb2FXeGtLSE4wZVd4bEtUdGNibHgwZlNCbGJITmxJR2xtSUNoMGVYQmxiMllnYjNCMGFXOXVjeTVwYm5ObGNuUkJkQ0E5UFQwZ1hDSnZZbXBsWTNSY0lpQW1KaUJ2Y0hScGIyNXpMbWx1YzJWeWRFRjBMbUpsWm05eVpTa2dlMXh1WEhSY2RIWmhjaUJ1WlhoMFUybGliR2x1WnlBOUlHZGxkRVZzWlcxbGJuUW9iM0IwYVc5dWN5NXBibk5sY25SQmRDNWlaV1p2Y21Vc0lIUmhjbWRsZENrN1hHNWNkRngwZEdGeVoyVjBMbWx1YzJWeWRFSmxabTl5WlNoemRIbHNaU3dnYm1WNGRGTnBZbXhwYm1jcE8xeHVYSFI5SUdWc2MyVWdlMXh1WEhSY2RIUm9jbTkzSUc1bGR5QkZjbkp2Y2loY0lsdFRkSGxzWlNCTWIyRmtaWEpkWEZ4dVhGeHVJRWx1ZG1Gc2FXUWdkbUZzZFdVZ1ptOXlJSEJoY21GdFpYUmxjaUFuYVc1elpYSjBRWFFuSUNnbmIzQjBhVzl1Y3k1cGJuTmxjblJCZENjcElHWnZkVzVrTGx4Y2JpQk5kWE4wSUdKbElDZDBiM0FuTENBblltOTBkRzl0Snl3Z2IzSWdUMkpxWldOMExseGNiaUFvYUhSMGNITTZMeTluYVhSb2RXSXVZMjl0TDNkbFluQmhZMnN0WTI5dWRISnBZaTl6ZEhsc1pTMXNiMkZrWlhJamFXNXpaWEowWVhRcFhGeHVYQ0lwTzF4dVhIUjlYRzU5WEc1Y2JtWjFibU4wYVc5dUlISmxiVzkyWlZOMGVXeGxSV3hsYldWdWRDQW9jM1I1YkdVcElIdGNibHgwYVdZZ0tITjBlV3hsTG5CaGNtVnVkRTV2WkdVZ1BUMDlJRzUxYkd3cElISmxkSFZ5YmlCbVlXeHpaVHRjYmx4MGMzUjViR1V1Y0dGeVpXNTBUbTlrWlM1eVpXMXZkbVZEYUdsc1pDaHpkSGxzWlNrN1hHNWNibHgwZG1GeUlHbGtlQ0E5SUhOMGVXeGxjMGx1YzJWeWRHVmtRWFJVYjNBdWFXNWtaWGhQWmloemRIbHNaU2s3WEc1Y2RHbG1LR2xrZUNBK1BTQXdLU0I3WEc1Y2RGeDBjM1I1YkdWelNXNXpaWEowWldSQmRGUnZjQzV6Y0d4cFkyVW9hV1I0TENBeEtUdGNibHgwZlZ4dWZWeHVYRzVtZFc1amRHbHZiaUJqY21WaGRHVlRkSGxzWlVWc1pXMWxiblFnS0c5d2RHbHZibk1wSUh0Y2JseDBkbUZ5SUhOMGVXeGxJRDBnWkc5amRXMWxiblF1WTNKbFlYUmxSV3hsYldWdWRDaGNJbk4wZVd4bFhDSXBPMXh1WEc1Y2RHbG1LRzl3ZEdsdmJuTXVZWFIwY25NdWRIbHdaU0E5UFQwZ2RXNWtaV1pwYm1Wa0tTQjdYRzVjZEZ4MGIzQjBhVzl1Y3k1aGRIUnljeTUwZVhCbElEMGdYQ0owWlhoMEwyTnpjMXdpTzF4dVhIUjlYRzVjYmx4MGFXWW9iM0IwYVc5dWN5NWhkSFJ5Y3k1dWIyNWpaU0E5UFQwZ2RXNWtaV1pwYm1Wa0tTQjdYRzVjZEZ4MGRtRnlJRzV2Ym1ObElEMGdaMlYwVG05dVkyVW9LVHRjYmx4MFhIUnBaaUFvYm05dVkyVXBJSHRjYmx4MFhIUmNkRzl3ZEdsdmJuTXVZWFIwY25NdWJtOXVZMlVnUFNCdWIyNWpaVHRjYmx4MFhIUjlYRzVjZEgxY2JseHVYSFJoWkdSQmRIUnljeWh6ZEhsc1pTd2diM0IwYVc5dWN5NWhkSFJ5Y3lrN1hHNWNkR2x1YzJWeWRGTjBlV3hsUld4bGJXVnVkQ2h2Y0hScGIyNXpMQ0J6ZEhsc1pTazdYRzVjYmx4MGNtVjBkWEp1SUhOMGVXeGxPMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQmpjbVZoZEdWTWFXNXJSV3hsYldWdWRDQW9iM0IwYVc5dWN5a2dlMXh1WEhSMllYSWdiR2x1YXlBOUlHUnZZM1Z0Wlc1MExtTnlaV0YwWlVWc1pXMWxiblFvWENKc2FXNXJYQ0lwTzF4dVhHNWNkR2xtS0c5d2RHbHZibk11WVhSMGNuTXVkSGx3WlNBOVBUMGdkVzVrWldacGJtVmtLU0I3WEc1Y2RGeDBiM0IwYVc5dWN5NWhkSFJ5Y3k1MGVYQmxJRDBnWENKMFpYaDBMMk56YzF3aU8xeHVYSFI5WEc1Y2RHOXdkR2x2Ym5NdVlYUjBjbk11Y21Wc0lEMGdYQ0p6ZEhsc1pYTm9aV1YwWENJN1hHNWNibHgwWVdSa1FYUjBjbk1vYkdsdWF5d2diM0IwYVc5dWN5NWhkSFJ5Y3lrN1hHNWNkR2x1YzJWeWRGTjBlV3hsUld4bGJXVnVkQ2h2Y0hScGIyNXpMQ0JzYVc1cktUdGNibHh1WEhSeVpYUjFjbTRnYkdsdWF6dGNibjFjYmx4dVpuVnVZM1JwYjI0Z1lXUmtRWFIwY25NZ0tHVnNMQ0JoZEhSeWN5a2dlMXh1WEhSUFltcGxZM1F1YTJWNWN5aGhkSFJ5Y3lrdVptOXlSV0ZqYUNobWRXNWpkR2x2YmlBb2EyVjVLU0I3WEc1Y2RGeDBaV3d1YzJWMFFYUjBjbWxpZFhSbEtHdGxlU3dnWVhSMGNuTmJhMlY1WFNrN1hHNWNkSDBwTzF4dWZWeHVYRzVtZFc1amRHbHZiaUJuWlhST2IyNWpaU2dwSUh0Y2JseDBhV1lnS0hSNWNHVnZaaUJmWDNkbFluQmhZMnRmYm05dVkyVmZYeUE5UFQwZ0ozVnVaR1ZtYVc1bFpDY3BJSHRjYmx4MFhIUnlaWFIxY200Z2JuVnNiRHRjYmx4MGZWeHVYRzVjZEhKbGRIVnliaUJmWDNkbFluQmhZMnRmYm05dVkyVmZYenRjYm4xY2JseHVablZ1WTNScGIyNGdZV1JrVTNSNWJHVWdLRzlpYWl3Z2IzQjBhVzl1Y3lrZ2UxeHVYSFIyWVhJZ2MzUjViR1VzSUhWd1pHRjBaU3dnY21WdGIzWmxMQ0J5WlhOMWJIUTdYRzVjYmx4MEx5OGdTV1lnWVNCMGNtRnVjMlp2Y20wZ1puVnVZM1JwYjI0Z2QyRnpJR1JsWm1sdVpXUXNJSEoxYmlCcGRDQnZiaUIwYUdVZ1kzTnpYRzVjZEdsbUlDaHZjSFJwYjI1ekxuUnlZVzV6Wm05eWJTQW1KaUJ2WW1vdVkzTnpLU0I3WEc1Y2RDQWdJQ0J5WlhOMWJIUWdQU0IwZVhCbGIyWWdiM0IwYVc5dWN5NTBjbUZ1YzJadmNtMGdQVDA5SUNkbWRXNWpkR2x2YmlkY2JseDBYSFFnUHlCdmNIUnBiMjV6TG5SeVlXNXpabTl5YlNodlltb3VZM056S1NCY2JseDBYSFFnT2lCdmNIUnBiMjV6TG5SeVlXNXpabTl5YlM1a1pXWmhkV3gwS0c5aWFpNWpjM01wTzF4dVhHNWNkQ0FnSUNCcFppQW9jbVZ6ZFd4MEtTQjdYRzVjZENBZ0lDQmNkQzh2SUVsbUlIUnlZVzV6Wm05eWJTQnlaWFIxY201eklHRWdkbUZzZFdVc0lIVnpaU0IwYUdGMElHbHVjM1JsWVdRZ2IyWWdkR2hsSUc5eWFXZHBibUZzSUdOemN5NWNibHgwSUNBZ0lGeDBMeThnVkdocGN5QmhiR3h2ZDNNZ2NuVnVibWx1WnlCeWRXNTBhVzFsSUhSeVlXNXpabTl5YldGMGFXOXVjeUJ2YmlCMGFHVWdZM056TGx4dVhIUWdJQ0FnWEhSdlltb3VZM056SUQwZ2NtVnpkV3gwTzF4dVhIUWdJQ0FnZlNCbGJITmxJSHRjYmx4MElDQWdJRngwTHk4Z1NXWWdkR2hsSUhSeVlXNXpabTl5YlNCbWRXNWpkR2x2YmlCeVpYUjFjbTV6SUdFZ1ptRnNjM2tnZG1Gc2RXVXNJR1J2YmlkMElHRmtaQ0IwYUdseklHTnpjeTVjYmx4MElDQWdJRngwTHk4Z1ZHaHBjeUJoYkd4dmQzTWdZMjl1WkdsMGFXOXVZV3dnYkc5aFpHbHVaeUJ2WmlCamMzTmNibHgwSUNBZ0lGeDBjbVYwZFhKdUlHWjFibU4wYVc5dUtDa2dlMXh1WEhRZ0lDQWdYSFJjZEM4dklHNXZiM0JjYmx4MElDQWdJRngwZlR0Y2JseDBJQ0FnSUgxY2JseDBmVnh1WEc1Y2RHbG1JQ2h2Y0hScGIyNXpMbk5wYm1kc1pYUnZiaWtnZTF4dVhIUmNkSFpoY2lCemRIbHNaVWx1WkdWNElEMGdjMmx1WjJ4bGRHOXVRMjkxYm5SbGNpc3JPMXh1WEc1Y2RGeDBjM1I1YkdVZ1BTQnphVzVuYkdWMGIyNGdmSHdnS0hOcGJtZHNaWFJ2YmlBOUlHTnlaV0YwWlZOMGVXeGxSV3hsYldWdWRDaHZjSFJwYjI1ektTazdYRzVjYmx4MFhIUjFjR1JoZEdVZ1BTQmhjSEJzZVZSdlUybHVaMnhsZEc5dVZHRm5MbUpwYm1Rb2JuVnNiQ3dnYzNSNWJHVXNJSE4wZVd4bFNXNWtaWGdzSUdaaGJITmxLVHRjYmx4MFhIUnlaVzF2ZG1VZ1BTQmhjSEJzZVZSdlUybHVaMnhsZEc5dVZHRm5MbUpwYm1Rb2JuVnNiQ3dnYzNSNWJHVXNJSE4wZVd4bFNXNWtaWGdzSUhSeWRXVXBPMXh1WEc1Y2RIMGdaV3h6WlNCcFppQW9YRzVjZEZ4MGIySnFMbk52ZFhKalpVMWhjQ0FtSmx4dVhIUmNkSFI1Y0dWdlppQlZVa3dnUFQwOUlGd2lablZ1WTNScGIyNWNJaUFtSmx4dVhIUmNkSFI1Y0dWdlppQlZVa3d1WTNKbFlYUmxUMkpxWldOMFZWSk1JRDA5UFNCY0ltWjFibU4wYVc5dVhDSWdKaVpjYmx4MFhIUjBlWEJsYjJZZ1ZWSk1MbkpsZG05clpVOWlhbVZqZEZWU1RDQTlQVDBnWENKbWRXNWpkR2x2Ymx3aUlDWW1YRzVjZEZ4MGRIbHdaVzltSUVKc2IySWdQVDA5SUZ3aVpuVnVZM1JwYjI1Y0lpQW1KbHh1WEhSY2RIUjVjR1Z2WmlCaWRHOWhJRDA5UFNCY0ltWjFibU4wYVc5dVhDSmNibHgwS1NCN1hHNWNkRngwYzNSNWJHVWdQU0JqY21WaGRHVk1hVzVyUld4bGJXVnVkQ2h2Y0hScGIyNXpLVHRjYmx4MFhIUjFjR1JoZEdVZ1BTQjFjR1JoZEdWTWFXNXJMbUpwYm1Rb2JuVnNiQ3dnYzNSNWJHVXNJRzl3ZEdsdmJuTXBPMXh1WEhSY2RISmxiVzkyWlNBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmx4MFhIUmNkSEpsYlc5MlpWTjBlV3hsUld4bGJXVnVkQ2h6ZEhsc1pTazdYRzVjYmx4MFhIUmNkR2xtS0hOMGVXeGxMbWh5WldZcElGVlNUQzV5WlhadmEyVlBZbXBsWTNSVlVrd29jM1I1YkdVdWFISmxaaWs3WEc1Y2RGeDBmVHRjYmx4MGZTQmxiSE5sSUh0Y2JseDBYSFJ6ZEhsc1pTQTlJR055WldGMFpWTjBlV3hsUld4bGJXVnVkQ2h2Y0hScGIyNXpLVHRjYmx4MFhIUjFjR1JoZEdVZ1BTQmhjSEJzZVZSdlZHRm5MbUpwYm1Rb2JuVnNiQ3dnYzNSNWJHVXBPMXh1WEhSY2RISmxiVzkyWlNBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmx4MFhIUmNkSEpsYlc5MlpWTjBlV3hsUld4bGJXVnVkQ2h6ZEhsc1pTazdYRzVjZEZ4MGZUdGNibHgwZlZ4dVhHNWNkSFZ3WkdGMFpTaHZZbW9wTzF4dVhHNWNkSEpsZEhWeWJpQm1kVzVqZEdsdmJpQjFjR1JoZEdWVGRIbHNaU0FvYm1WM1QySnFLU0I3WEc1Y2RGeDBhV1lnS0c1bGQwOWlhaWtnZTF4dVhIUmNkRngwYVdZZ0tGeHVYSFJjZEZ4MFhIUnVaWGRQWW1vdVkzTnpJRDA5UFNCdlltb3VZM056SUNZbVhHNWNkRngwWEhSY2RHNWxkMDlpYWk1dFpXUnBZU0E5UFQwZ2IySnFMbTFsWkdsaElDWW1YRzVjZEZ4MFhIUmNkRzVsZDA5aWFpNXpiM1Z5WTJWTllYQWdQVDA5SUc5aWFpNXpiM1Z5WTJWTllYQmNibHgwWEhSY2RDa2dlMXh1WEhSY2RGeDBYSFJ5WlhSMWNtNDdYRzVjZEZ4MFhIUjlYRzVjYmx4MFhIUmNkSFZ3WkdGMFpTaHZZbW9nUFNCdVpYZFBZbW9wTzF4dVhIUmNkSDBnWld4elpTQjdYRzVjZEZ4MFhIUnlaVzF2ZG1Vb0tUdGNibHgwWEhSOVhHNWNkSDA3WEc1OVhHNWNiblpoY2lCeVpYQnNZV05sVkdWNGRDQTlJQ2htZFc1amRHbHZiaUFvS1NCN1hHNWNkSFpoY2lCMFpYaDBVM1J2Y21VZ1BTQmJYVHRjYmx4dVhIUnlaWFIxY200Z1puVnVZM1JwYjI0Z0tHbHVaR1Y0TENCeVpYQnNZV05sYldWdWRDa2dlMXh1WEhSY2RIUmxlSFJUZEc5eVpWdHBibVJsZUYwZ1BTQnlaWEJzWVdObGJXVnVkRHRjYmx4dVhIUmNkSEpsZEhWeWJpQjBaWGgwVTNSdmNtVXVabWxzZEdWeUtFSnZiMnhsWVc0cExtcHZhVzRvSjF4Y2JpY3BPMXh1WEhSOU8xeHVmU2tvS1R0Y2JseHVablZ1WTNScGIyNGdZWEJ3YkhsVWIxTnBibWRzWlhSdmJsUmhaeUFvYzNSNWJHVXNJR2x1WkdWNExDQnlaVzF2ZG1Vc0lHOWlhaWtnZTF4dVhIUjJZWElnWTNOeklEMGdjbVZ0YjNabElEOGdYQ0pjSWlBNklHOWlhaTVqYzNNN1hHNWNibHgwYVdZZ0tITjBlV3hsTG5OMGVXeGxVMmhsWlhRcElIdGNibHgwWEhSemRIbHNaUzV6ZEhsc1pWTm9aV1YwTG1OemMxUmxlSFFnUFNCeVpYQnNZV05sVkdWNGRDaHBibVJsZUN3Z1kzTnpLVHRjYmx4MGZTQmxiSE5sSUh0Y2JseDBYSFIyWVhJZ1kzTnpUbTlrWlNBOUlHUnZZM1Z0Wlc1MExtTnlaV0YwWlZSbGVIUk9iMlJsS0dOemN5azdYRzVjZEZ4MGRtRnlJR05vYVd4a1RtOWtaWE1nUFNCemRIbHNaUzVqYUdsc1pFNXZaR1Z6TzF4dVhHNWNkRngwYVdZZ0tHTm9hV3hrVG05a1pYTmJhVzVrWlhoZEtTQnpkSGxzWlM1eVpXMXZkbVZEYUdsc1pDaGphR2xzWkU1dlpHVnpXMmx1WkdWNFhTazdYRzVjYmx4MFhIUnBaaUFvWTJocGJHUk9iMlJsY3k1c1pXNW5kR2dwSUh0Y2JseDBYSFJjZEhOMGVXeGxMbWx1YzJWeWRFSmxabTl5WlNoamMzTk9iMlJsTENCamFHbHNaRTV2WkdWelcybHVaR1Y0WFNrN1hHNWNkRngwZlNCbGJITmxJSHRjYmx4MFhIUmNkSE4wZVd4bExtRndjR1Z1WkVOb2FXeGtLR056YzA1dlpHVXBPMXh1WEhSY2RIMWNibHgwZlZ4dWZWeHVYRzVtZFc1amRHbHZiaUJoY0hCc2VWUnZWR0ZuSUNoemRIbHNaU3dnYjJKcUtTQjdYRzVjZEhaaGNpQmpjM01nUFNCdlltb3VZM056TzF4dVhIUjJZWElnYldWa2FXRWdQU0J2WW1vdWJXVmthV0U3WEc1Y2JseDBhV1lvYldWa2FXRXBJSHRjYmx4MFhIUnpkSGxzWlM1elpYUkJkSFJ5YVdKMWRHVW9YQ0p0WldScFlWd2lMQ0J0WldScFlTbGNibHgwZlZ4dVhHNWNkR2xtS0hOMGVXeGxMbk4wZVd4bFUyaGxaWFFwSUh0Y2JseDBYSFJ6ZEhsc1pTNXpkSGxzWlZOb1pXVjBMbU56YzFSbGVIUWdQU0JqYzNNN1hHNWNkSDBnWld4elpTQjdYRzVjZEZ4MGQyaHBiR1VvYzNSNWJHVXVabWx5YzNSRGFHbHNaQ2tnZTF4dVhIUmNkRngwYzNSNWJHVXVjbVZ0YjNabFEyaHBiR1FvYzNSNWJHVXVabWx5YzNSRGFHbHNaQ2s3WEc1Y2RGeDBmVnh1WEc1Y2RGeDBjM1I1YkdVdVlYQndaVzVrUTJocGJHUW9aRzlqZFcxbGJuUXVZM0psWVhSbFZHVjRkRTV2WkdVb1kzTnpLU2s3WEc1Y2RIMWNibjFjYmx4dVpuVnVZM1JwYjI0Z2RYQmtZWFJsVEdsdWF5QW9iR2x1YXl3Z2IzQjBhVzl1Y3l3Z2IySnFLU0I3WEc1Y2RIWmhjaUJqYzNNZ1BTQnZZbW91WTNOek8xeHVYSFIyWVhJZ2MyOTFjbU5sVFdGd0lEMGdiMkpxTG5OdmRYSmpaVTFoY0R0Y2JseHVYSFF2S2x4dVhIUmNkRWxtSUdOdmJuWmxjblJVYjBGaWMyOXNkWFJsVlhKc2N5QnBjMjRuZENCa1pXWnBibVZrTENCaWRYUWdjMjkxY21ObGJXRndjeUJoY21VZ1pXNWhZbXhsWkZ4dVhIUmNkR0Z1WkNCMGFHVnlaU0JwY3lCdWJ5QndkV0pzYVdOUVlYUm9JR1JsWm1sdVpXUWdkR2hsYmlCc1pYUnpJSFIxY200Z1kyOXVkbVZ5ZEZSdlFXSnpiMngxZEdWVmNteHpYRzVjZEZ4MGIyNGdZbmtnWkdWbVlYVnNkQzRnSUU5MGFHVnlkMmx6WlNCa1pXWmhkV3gwSUhSdklIUm9aU0JqYjI1MlpYSjBWRzlCWW5OdmJIVjBaVlZ5YkhNZ2IzQjBhVzl1WEc1Y2RGeDBaR2x5WldOMGJIbGNibHgwS2k5Y2JseDBkbUZ5SUdGMWRHOUdhWGhWY214eklEMGdiM0IwYVc5dWN5NWpiMjUyWlhKMFZHOUJZbk52YkhWMFpWVnliSE1nUFQwOUlIVnVaR1ZtYVc1bFpDQW1KaUJ6YjNWeVkyVk5ZWEE3WEc1Y2JseDBhV1lnS0c5d2RHbHZibk11WTI5dWRtVnlkRlJ2UVdKemIyeDFkR1ZWY214eklIeDhJR0YxZEc5R2FYaFZjbXh6S1NCN1hHNWNkRngwWTNOeklEMGdabWw0VlhKc2N5aGpjM01wTzF4dVhIUjlYRzVjYmx4MGFXWWdLSE52ZFhKalpVMWhjQ2tnZTF4dVhIUmNkQzh2SUdoMGRIQTZMeTl6ZEdGamEyOTJaWEptYkc5M0xtTnZiUzloTHpJMk5qQXpPRGMxWEc1Y2RGeDBZM056SUNzOUlGd2lYRnh1THlvaklITnZkWEpqWlUxaGNIQnBibWRWVWt3OVpHRjBZVHBoY0hCc2FXTmhkR2x2Ymk5cWMyOXVPMkpoYzJVMk5DeGNJaUFySUdKMGIyRW9kVzVsYzJOaGNHVW9aVzVqYjJSbFZWSkpRMjl0Y0c5dVpXNTBLRXBUVDA0dWMzUnlhVzVuYVdaNUtITnZkWEpqWlUxaGNDa3BLU2tnS3lCY0lpQXFMMXdpTzF4dVhIUjlYRzVjYmx4MGRtRnlJR0pzYjJJZ1BTQnVaWGNnUW14dllpaGJZM056WFN3Z2V5QjBlWEJsT2lCY0luUmxlSFF2WTNOelhDSWdmU2s3WEc1Y2JseDBkbUZ5SUc5c1pGTnlZeUE5SUd4cGJtc3VhSEpsWmp0Y2JseHVYSFJzYVc1ckxtaHlaV1lnUFNCVlVrd3VZM0psWVhSbFQySnFaV04wVlZKTUtHSnNiMklwTzF4dVhHNWNkR2xtS0c5c1pGTnlZeWtnVlZKTUxuSmxkbTlyWlU5aWFtVmpkRlZTVENodmJHUlRjbU1wTzF4dWZWeHVJaXdpWEc0dktpcGNiaUFxSUZkb1pXNGdjMjkxY21ObElHMWhjSE1nWVhKbElHVnVZV0pzWldRc0lHQnpkSGxzWlMxc2IyRmtaWEpnSUhWelpYTWdZU0JzYVc1cklHVnNaVzFsYm5RZ2QybDBhQ0JoSUdSaGRHRXRkWEpwSUhSdlhHNGdLaUJsYldKbFpDQjBhR1VnWTNOeklHOXVJSFJvWlNCd1lXZGxMaUJVYUdseklHSnlaV0ZyY3lCaGJHd2djbVZzWVhScGRtVWdkWEpzY3lCaVpXTmhkWE5sSUc1dmR5QjBhR1Y1SUdGeVpTQnlaV3hoZEdsMlpTQjBieUJoWEc0Z0tpQmlkVzVrYkdVZ2FXNXpkR1ZoWkNCdlppQjBhR1VnWTNWeWNtVnVkQ0J3WVdkbExseHVJQ3BjYmlBcUlFOXVaU0J6YjJ4MWRHbHZiaUJwY3lCMGJ5QnZibXg1SUhWelpTQm1kV3hzSUhWeWJITXNJR0oxZENCMGFHRjBJRzFoZVNCaVpTQnBiWEJ2YzNOcFlteGxMbHh1SUNwY2JpQXFJRWx1YzNSbFlXUXNJSFJvYVhNZ1puVnVZM1JwYjI0Z1hDSm1hWGhsYzF3aUlIUm9aU0J5Wld4aGRHbDJaU0IxY214eklIUnZJR0psSUdGaWMyOXNkWFJsSUdGalkyOXlaR2x1WnlCMGJ5QjBhR1VnWTNWeWNtVnVkQ0J3WVdkbElHeHZZMkYwYVc5dUxseHVJQ3BjYmlBcUlFRWdjblZrYVcxbGJuUmhjbmtnZEdWemRDQnpkV2wwWlNCcGN5QnNiMk5oZEdWa0lHRjBJR0IwWlhOMEwyWnBlRlZ5YkhNdWFuTmdJR0Z1WkNCallXNGdZbVVnY25WdUlIWnBZU0IwYUdVZ1lHNXdiU0IwWlhOMFlDQmpiMjF0WVc1a0xseHVJQ3BjYmlBcUwxeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVJQ2hqYzNNcElIdGNiaUFnTHk4Z1oyVjBJR04xY25KbGJuUWdiRzlqWVhScGIyNWNiaUFnZG1GeUlHeHZZMkYwYVc5dUlEMGdkSGx3Wlc5bUlIZHBibVJ2ZHlBaFBUMGdYQ0oxYm1SbFptbHVaV1JjSWlBbUppQjNhVzVrYjNjdWJHOWpZWFJwYjI0N1hHNWNiaUFnYVdZZ0tDRnNiMk5oZEdsdmJpa2dlMXh1SUNBZ0lIUm9jbTkzSUc1bGR5QkZjbkp2Y2loY0ltWnBlRlZ5YkhNZ2NtVnhkV2x5WlhNZ2QybHVaRzkzTG14dlkyRjBhVzl1WENJcE8xeHVJQ0I5WEc1Y2JseDBMeThnWW14aGJtc2diM0lnYm5Wc2JEOWNibHgwYVdZZ0tDRmpjM01nZkh3Z2RIbHdaVzltSUdOemN5QWhQVDBnWENKemRISnBibWRjSWlrZ2UxeHVYSFFnSUhKbGRIVnliaUJqYzNNN1hHNGdJSDFjYmx4dUlDQjJZWElnWW1GelpWVnliQ0E5SUd4dlkyRjBhVzl1TG5CeWIzUnZZMjlzSUNzZ1hDSXZMMXdpSUNzZ2JHOWpZWFJwYjI0dWFHOXpkRHRjYmlBZ2RtRnlJR04xY25KbGJuUkVhWElnUFNCaVlYTmxWWEpzSUNzZ2JHOWpZWFJwYjI0dWNHRjBhRzVoYldVdWNtVndiR0ZqWlNndlhGd3ZXMTVjWEM5ZEtpUXZMQ0JjSWk5Y0lpazdYRzVjYmx4MEx5OGdZMjl1ZG1WeWRDQmxZV05vSUhWeWJDZ3VMaTRwWEc1Y2RDOHFYRzVjZEZSb2FYTWdjbVZuZFd4aGNpQmxlSEJ5WlhOemFXOXVJR2x6SUdwMWMzUWdZU0IzWVhrZ2RHOGdjbVZqZFhKemFYWmxiSGtnYldGMFkyZ2dZbkpoWTJ0bGRITWdkMmwwYUdsdVhHNWNkR0VnYzNSeWFXNW5MbHh1WEc1Y2RDQXZkWEpzWEZ4ektseGNLQ0FnUFNCTllYUmphQ0J2YmlCMGFHVWdkMjl5WkNCY0luVnliRndpSUhkcGRHZ2dZVzU1SUhkb2FYUmxjM0JoWTJVZ1lXWjBaWElnYVhRZ1lXNWtJSFJvWlc0Z1lTQndZWEpsYm5OY2JseDBJQ0FnS0NBZ1BTQlRkR0Z5ZENCaElHTmhjSFIxY21sdVp5Qm5jbTkxY0Z4dVhIUWdJQ0FnSUNnL09pQWdQU0JUZEdGeWRDQmhJRzV2YmkxallYQjBkWEpwYm1jZ1ozSnZkWEJjYmx4MElDQWdJQ0FnSUNBZ1cxNHBLRjBnSUQwZ1RXRjBZMmdnWVc1NWRHaHBibWNnZEdoaGRDQnBjMjRuZENCaElIQmhjbVZ1ZEdobGMyVnpYRzVjZENBZ0lDQWdJQ0FnSUh3Z0lEMGdUMUpjYmx4MElDQWdJQ0FnSUNBZ1hGd29JQ0E5SUUxaGRHTm9JR0VnYzNSaGNuUWdjR0Z5Wlc1MGFHVnpaWE5jYmx4MElDQWdJQ0FnSUNBZ0lDQWdJQ2cvT2lBZ1BTQlRkR0Z5ZENCaGJtOTBhR1Z5SUc1dmJpMWpZWEIwZFhKcGJtY2daM0p2ZFhCelhHNWNkQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdXMTRwS0YwcklDQTlJRTFoZEdOb0lHRnVlWFJvYVc1bklIUm9ZWFFnYVhOdUozUWdZU0J3WVhKbGJuUm9aWE5sYzF4dVhIUWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lId2dJRDBnVDFKY2JseDBJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmNYQ2dnSUQwZ1RXRjBZMmdnWVNCemRHRnlkQ0J3WVhKbGJuUm9aWE5sYzF4dVhIUWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JiWGlrb1hTb2dJRDBnVFdGMFkyZ2dZVzU1ZEdocGJtY2dkR2hoZENCcGMyNG5kQ0JoSUhCaGNtVnVkR2hsYzJWelhHNWNkQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYRndwSUNBOUlFMWhkR05vSUdFZ1pXNWtJSEJoY21WdWRHaGxjMlZ6WEc1Y2RDQWdJQ0FnSUNBZ0lDQWdJQ0FwSUNBOUlFVnVaQ0JIY205MWNGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBcVhGd3BJRDBnVFdGMFkyZ2dZVzU1ZEdocGJtY2dZVzVrSUhSb1pXNGdZU0JqYkc5elpTQndZWEpsYm5OY2JpQWdJQ0FnSUNBZ0lDQXBJQ0E5SUVOc2IzTmxJRzV2YmkxallYQjBkWEpwYm1jZ1ozSnZkWEJjYmlBZ0lDQWdJQ0FnSUNBcUlDQTlJRTFoZEdOb0lHRnVlWFJvYVc1blhHNGdJQ0FnSUNBZ0tTQWdQU0JEYkc5elpTQmpZWEIwZFhKcGJtY2daM0p2ZFhCY2JseDBJRnhjS1NBZ1BTQk5ZWFJqYUNCaElHTnNiM05sSUhCaGNtVnVjMXh1WEc1Y2RDQXZaMmtnSUQwZ1IyVjBJR0ZzYkNCdFlYUmphR1Z6TENCdWIzUWdkR2hsSUdacGNuTjBMaUFnUW1VZ1kyRnpaU0JwYm5ObGJuTnBkR2wyWlM1Y2JseDBJQ292WEc1Y2RIWmhjaUJtYVhobFpFTnpjeUE5SUdOemN5NXlaWEJzWVdObEtDOTFjbXhjWEhNcVhGd29LQ2cvT2x0ZUtTaGRmRnhjS0NnL09sdGVLU2hkSzN4Y1hDaGJYaWtvWFNwY1hDa3BLbHhjS1NrcUtWeGNLUzluYVN3Z1puVnVZM1JwYjI0b1puVnNiRTFoZEdOb0xDQnZjbWxuVlhKc0tTQjdYRzVjZEZ4MEx5OGdjM1J5YVhBZ2NYVnZkR1Z6SUNocFppQjBhR1Y1SUdWNGFYTjBLVnh1WEhSY2RIWmhjaUIxYm5GMWIzUmxaRTl5YVdkVmNtd2dQU0J2Y21sblZYSnNYRzVjZEZ4MFhIUXVkSEpwYlNncFhHNWNkRngwWEhRdWNtVndiR0ZqWlNndlhsd2lLQzRxS1Z3aUpDOHNJR1oxYm1OMGFXOXVLRzhzSUNReEtYc2djbVYwZFhKdUlDUXhPeUI5S1Z4dVhIUmNkRngwTG5KbGNHeGhZMlVvTDE0bktDNHFLU2NrTHl3Z1puVnVZM1JwYjI0b2J5d2dKREVwZXlCeVpYUjFjbTRnSkRFN0lIMHBPMXh1WEc1Y2RGeDBMeThnWVd4eVpXRmtlU0JoSUdaMWJHd2dkWEpzUHlCdWJ5QmphR0Z1WjJWY2JseDBYSFJwWmlBb0wxNG9JM3hrWVhSaE9ueG9kSFJ3T2x4Y0wxeGNMM3hvZEhSd2N6cGNYQzljWEM5OFptbHNaVHBjWEM5Y1hDOWNYQzk4WEZ4ektpUXBMMmt1ZEdWemRDaDFibkYxYjNSbFpFOXlhV2RWY213cEtTQjdYRzVjZEZ4MElDQnlaWFIxY200Z1puVnNiRTFoZEdOb08xeHVYSFJjZEgxY2JseHVYSFJjZEM4dklHTnZiblpsY25RZ2RHaGxJSFZ5YkNCMGJ5QmhJR1oxYkd3Z2RYSnNYRzVjZEZ4MGRtRnlJRzVsZDFWeWJEdGNibHh1WEhSY2RHbG1JQ2gxYm5GMWIzUmxaRTl5YVdkVmNtd3VhVzVrWlhoUFppaGNJaTh2WENJcElEMDlQU0F3S1NCN1hHNWNkRngwSUNCY2RDOHZWRTlFVHpvZ2MyaHZkV3hrSUhkbElHRmtaQ0J3Y205MGIyTnZiRDljYmx4MFhIUmNkRzVsZDFWeWJDQTlJSFZ1Y1hWdmRHVmtUM0pwWjFWeWJEdGNibHgwWEhSOUlHVnNjMlVnYVdZZ0tIVnVjWFZ2ZEdWa1QzSnBaMVZ5YkM1cGJtUmxlRTltS0Z3aUwxd2lLU0E5UFQwZ01Da2dlMXh1WEhSY2RGeDBMeThnY0dGMGFDQnphRzkxYkdRZ1ltVWdjbVZzWVhScGRtVWdkRzhnZEdobElHSmhjMlVnZFhKc1hHNWNkRngwWEhSdVpYZFZjbXdnUFNCaVlYTmxWWEpzSUNzZ2RXNXhkVzkwWldSUGNtbG5WWEpzT3lBdkx5QmhiSEpsWVdSNUlITjBZWEowY3lCM2FYUm9JQ2N2SjF4dVhIUmNkSDBnWld4elpTQjdYRzVjZEZ4MFhIUXZMeUJ3WVhSb0lITm9iM1ZzWkNCaVpTQnlaV3hoZEdsMlpTQjBieUJqZFhKeVpXNTBJR1JwY21WamRHOXllVnh1WEhSY2RGeDBibVYzVlhKc0lEMGdZM1Z5Y21WdWRFUnBjaUFySUhWdWNYVnZkR1ZrVDNKcFoxVnliQzV5WlhCc1lXTmxLQzllWEZ3dVhGd3ZMeXdnWENKY0lpazdJQzh2SUZOMGNtbHdJR3hsWVdScGJtY2dKeTR2SjF4dVhIUmNkSDFjYmx4dVhIUmNkQzh2SUhObGJtUWdZbUZqYXlCMGFHVWdabWw0WldRZ2RYSnNLQzR1TGlsY2JseDBYSFJ5WlhSMWNtNGdYQ0oxY213b1hDSWdLeUJLVTA5T0xuTjBjbWx1WjJsbWVTaHVaWGRWY213cElDc2dYQ0lwWENJN1hHNWNkSDBwTzF4dVhHNWNkQzh2SUhObGJtUWdZbUZqYXlCMGFHVWdabWw0WldRZ1kzTnpYRzVjZEhKbGRIVnliaUJtYVhobFpFTnpjenRjYm4wN1hHNGlMQ0pqYkdGemN5QkRiMjlyWW05dmF5QjdYRzRnSUdOdmJuTjBjblZqZEc5eUtHUmhkR0VwSUh0Y2JpQWdJQ0IwYUdsekxuSmxZMmx3WlhNZ1BTQmtZWFJoTzF4dUlDQjlYRzVjYmlBZ1ptbHVaRkpsWTJsd1pYTW9jMlZoY21Ob1ZHVjRkQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TG5KbFkybHdaWE11Wm1sc2RHVnlLQ2h5WldOcGNHVXBQVDU3WEc0Z0lDQWdJQ0JzWlhRZ2FXNW5jbVZrYVdWdWRFNWhiV1Z6SUQwZ2NtVmphWEJsTG1sdVozSmxaR2xsYm5SekxtMWhjQ2dvYVc1bmNtVmthV1Z1ZENrOVBudGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHbHVaM0psWkdsbGJuUXVibUZ0WlZ4dUlDQWdJQ0FnZlNsY2JpQWdJQ0FnSUhKbGRIVnliaUJ5WldOcGNHVXVibUZ0WlM1MGIweHZkMlZ5UTJGelpTZ3BMbWx1WTJ4MVpHVnpLSE5sWVhKamFGUmxlSFFwSUh4OFhHNGdJQ0FnSUNCeVpXTnBjR1V1ZEdGbmN5NXBibU5zZFdSbGN5aHpaV0Z5WTJoVVpYaDBLU0I4ZkZ4dUlDQWdJQ0FnYVc1bmNtVmthV1Z1ZEU1aGJXVnpMbWx1WTJ4MVpHVnpLSE5sWVhKamFGUmxlSFFwWEc0Z0lDQWdmU2xjYmlBZ2ZWeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JEYjI5clltOXZhenRjYmlJc0lseHVkbUZ5SUdOdmJuUmxiblFnUFNCeVpYRjFhWEpsS0Z3aUlTRXVMaTh1TGk5dWIyUmxYMjF2WkhWc1pYTXZZM056TFd4dllXUmxjaTlrYVhOMEwyTnFjeTVxY3lFdUxpOHVMaTl1YjJSbFgyMXZaSFZzWlhNdmMyRnpjeTFzYjJGa1pYSXZiR2xpTDJ4dllXUmxjaTVxY3lFdUwzTjBlV3hsY3k1elkzTnpYQ0lwTzF4dVhHNXBaaWgwZVhCbGIyWWdZMjl1ZEdWdWRDQTlQVDBnSjNOMGNtbHVaeWNwSUdOdmJuUmxiblFnUFNCYlcyMXZaSFZzWlM1cFpDd2dZMjl1ZEdWdWRDd2dKeWRkWFR0Y2JseHVkbUZ5SUhSeVlXNXpabTl5YlR0Y2JuWmhjaUJwYm5ObGNuUkpiblJ2TzF4dVhHNWNibHh1ZG1GeUlHOXdkR2x2Ym5NZ1BTQjdYQ0pvYlhKY0lqcDBjblZsZlZ4dVhHNXZjSFJwYjI1ekxuUnlZVzV6Wm05eWJTQTlJSFJ5WVc1elptOXliVnh1YjNCMGFXOXVjeTVwYm5ObGNuUkpiblJ2SUQwZ2RXNWtaV1pwYm1Wa08xeHVYRzUyWVhJZ2RYQmtZWFJsSUQwZ2NtVnhkV2x5WlNoY0lpRXVMaTh1TGk5dWIyUmxYMjF2WkhWc1pYTXZjM1I1YkdVdGJHOWhaR1Z5TDJ4cFlpOWhaR1JUZEhsc1pYTXVhbk5jSWlrb1kyOXVkR1Z1ZEN3Z2IzQjBhVzl1Y3lrN1hHNWNibWxtS0dOdmJuUmxiblF1Ykc5allXeHpLU0J0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR052Ym5SbGJuUXViRzlqWVd4ek8xeHVYRzVwWmlodGIyUjFiR1V1YUc5MEtTQjdYRzVjZEcxdlpIVnNaUzVvYjNRdVlXTmpaWEIwS0Z3aUlTRXVMaTh1TGk5dWIyUmxYMjF2WkhWc1pYTXZZM056TFd4dllXUmxjaTlrYVhOMEwyTnFjeTVxY3lFdUxpOHVMaTl1YjJSbFgyMXZaSFZzWlhNdmMyRnpjeTFzYjJGa1pYSXZiR2xpTDJ4dllXUmxjaTVxY3lFdUwzTjBlV3hsY3k1elkzTnpYQ0lzSUdaMWJtTjBhVzl1S0NrZ2UxeHVYSFJjZEhaaGNpQnVaWGREYjI1MFpXNTBJRDBnY21WeGRXbHlaU2hjSWlFaExpNHZMaTR2Ym05a1pWOXRiMlIxYkdWekwyTnpjeTFzYjJGa1pYSXZaR2x6ZEM5amFuTXVhbk1oTGk0dkxpNHZibTlrWlY5dGIyUjFiR1Z6TDNOaGMzTXRiRzloWkdWeUwyeHBZaTlzYjJGa1pYSXVhbk1oTGk5emRIbHNaWE11YzJOemMxd2lLVHRjYmx4dVhIUmNkR2xtS0hSNWNHVnZaaUJ1WlhkRGIyNTBaVzUwSUQwOVBTQW5jM1J5YVc1bkp5a2dibVYzUTI5dWRHVnVkQ0E5SUZ0YmJXOWtkV3hsTG1sa0xDQnVaWGREYjI1MFpXNTBMQ0FuSjExZE8xeHVYRzVjZEZ4MGRtRnlJR3h2WTJGc2N5QTlJQ2htZFc1amRHbHZiaWhoTENCaUtTQjdYRzVjZEZ4MFhIUjJZWElnYTJWNUxDQnBaSGdnUFNBd08xeHVYRzVjZEZ4MFhIUm1iM0lvYTJWNUlHbHVJR0VwSUh0Y2JseDBYSFJjZEZ4MGFXWW9JV0lnZkh3Z1lWdHJaWGxkSUNFOVBTQmlXMnRsZVYwcElISmxkSFZ5YmlCbVlXeHpaVHRjYmx4MFhIUmNkRngwYVdSNEt5czdYRzVjZEZ4MFhIUjlYRzVjYmx4MFhIUmNkR1p2Y2loclpYa2dhVzRnWWlrZ2FXUjRMUzA3WEc1Y2JseDBYSFJjZEhKbGRIVnliaUJwWkhnZ1BUMDlJREE3WEc1Y2RGeDBmU2hqYjI1MFpXNTBMbXh2WTJGc2N5d2dibVYzUTI5dWRHVnVkQzVzYjJOaGJITXBLVHRjYmx4dVhIUmNkR2xtS0NGc2IyTmhiSE1wSUhSb2NtOTNJRzVsZHlCRmNuSnZjaWduUVdKdmNuUnBibWNnUTFOVElFaE5VaUJrZFdVZ2RHOGdZMmhoYm1kbFpDQmpjM010Ylc5a2RXeGxjeUJzYjJOaGJITXVKeWs3WEc1Y2JseDBYSFIxY0dSaGRHVW9ibVYzUTI5dWRHVnVkQ2s3WEc1Y2RIMHBPMXh1WEc1Y2RHMXZaSFZzWlM1b2IzUXVaR2x6Y0c5elpTaG1kVzVqZEdsdmJpZ3BJSHNnZFhCa1lYUmxLQ2s3SUgwcE8xeHVmU0lzSW1sdGNHOXlkQ0JRWVc1MGNua2dabkp2YlNBbkxpOXdZVzUwY25rbk8xeHVhVzF3YjNKMElGSmxZMmx3WlNCbWNtOXRJQ2N1TDNKbFkybHdaU2M3WEc1cGJYQnZjblFnVlhObGNpQm1jbTl0SUNjdUwzVnpaWEluTzF4dWFXMXdiM0owSUVOdmIydGliMjlySUdaeWIyMGdKeTR2WTI5dmEySnZiMnNuTzF4dVhHNWNibXhsZENCa2IyMVZjR1JoZEdWeklEMGdlMXh1WEc0Z0lIVnpaWEp6T2lCYmUzMWRMRnh1SUNCeVpXTnBjR1ZFWVhSaE9pQmJlMzFkTEZ4dUlDQnBibWR5WldScFpXNTBjMFJoZEdFNklGdDdmVjBzWEc0Z0lIVnpaWEk2SUh0OUxGeHVJQ0JqYjI5clltOXZhem9nYm5Wc2JDeGNibHh1SUNCblpYUlhhR0YwYzBOdmIydHBibWRFWVhSaE9pQW9LU0E5UGlCN1hHNGdJQ0FnVUhKdmJXbHpaUzVoYkd3b1cxeHVJQ0FnSUNBZ1ptVjBZMmdvSjJoMGRIQnpPaTh2Wm1VdFlYQndjeTVvWlhKdmEzVmhjSEF1WTI5dEwyRndhUzkyTVM5M2FHRjBjeTFqYjI5cmFXNHZNVGt4TVM5MWMyVnljeTkzWTFWelpYSnpSR0YwWVNjcExGeHVJQ0FnSUNBZ1ptVjBZMmdvSjJoMGRIQnpPaTh2Wm1VdFlYQndjeTVvWlhKdmEzVmhjSEF1WTI5dEwyRndhUzkyTVM5M2FHRjBjeTFqYjI5cmFXNHZNVGt4TVM5eVpXTnBjR1Z6TDNKbFkybHdaVVJoZEdFbktTeGNiaUFnSUNBZ0lHWmxkR05vS0Nkb2RIUndjem92TDJabExXRndjSE11YUdWeWIydDFZWEJ3TG1OdmJTOWhjR2t2ZGpFdmQyaGhkSE10WTI5dmEybHVMekU1TVRFdmFXNW5jbVZrYVdWdWRITXZhVzVuY21Wa2FXVnVkSE5FWVhSaEp5bGNiaUFnSUNCZEtWeHVJQ0FnSUNBZ0xuUm9aVzRvY21WemNHOXVjMlZ6SUQwK0lGQnliMjFwYzJVdVlXeHNLSEpsYzNCdmJuTmxjeTV0WVhBb2NtVnpjRzl1YzJVZ1BUNGdjbVZ6Y0c5dWMyVXVhbk52YmlncEtTa3BYRzRnSUNBZ0lDQXVkR2hsYmloeVpYTndiMjV6WlhNZ1BUNGdlMXh1SUNBZ0lDQWdJQ0JrYjIxVmNHUmhkR1Z6TG5WelpYSnpJRDBnY21WemNHOXVjMlZ6V3pCZExuZGpWWE5sY25ORVlYUmhPMXh1SUNBZ0lDQWdJQ0JrYjIxVmNHUmhkR1Z6TG5KbFkybHdaVVJoZEdFZ1BTQnlaWE53YjI1elpYTmJNVjB1Y21WamFYQmxSR0YwWVR0Y2JpQWdJQ0FnSUNBZ1pHOXRWWEJrWVhSbGN5NXBibWR5WldScFpXNTBjMFJoZEdFZ1BTQnlaWE53YjI1elpYTmJNbDB1YVc1bmNtVmthV1Z1ZEhORVlYUmhPMXh1SUNBZ0lDQWdJQ0JrYjIxVmNHUmhkR1Z6TG1OeVpXRjBaVVJoZEdGTmIyUmxiQ2dwTzF4dUlDQWdJQ0FnSUNCa2IyMVZjR1JoZEdWekxuVndaR0YwWlVScGMzQnNZWGtvS1R0Y2JpQWdJQ0FnSUgwcFhHNGdJQ0FnSUNBdVkyRjBZMmdvWlhKeWIzSWdQVDRnWTI5dWMyOXNaUzVzYjJjb1pYSnliM0lwS1Z4dUlDQjlMRnh1WEc0Z0lHTnlaV0YwWlVSaGRHRk5iMlJsYkRvZ0tDa2dQVDRnZTF4dUlDQWdJR3hsZENCd1lXNTBjbmtnUFNCdVpYY2dVR0Z1ZEhKNUtHUnZiVlZ3WkdGMFpYTXVkWE5sY25OYk1GMHVjR0Z1ZEhKNUtUdGNiaUFnSUNCa2IyMVZjR1JoZEdWekxuVnpaWElnUFNCdVpYY2dWWE5sY2loa2IyMVZjR1JoZEdWekxuVnpaWEp6V3pCZExDQndZVzUwY25rc0lHUnZiVlZ3WkdGMFpYTXVhVzVuY21Wa2FXVnVkSE5FWVhSaEtUdGNiaUFnSUNCc1pYUWdjbVZqYVhCbFJHVmpheUE5SUdSdmJWVndaR0YwWlhNdWNtVmphWEJsUkdGMFlTNXRZWEFvY21WamFYQmxJRDArSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUJ5WldOcGNHVWdQU0J1WlhjZ1VtVmphWEJsS0hKbFkybHdaU3dnWkc5dFZYQmtZWFJsY3k1cGJtZHlaV1JwWlc1MGMwUmhkR0VwTzF4dUlDQWdJSDBwWEc0Z0lDQWdaRzl0VlhCa1lYUmxjeTVqYjI5clltOXZheUE5SUc1bGR5QkRiMjlyWW05dmF5aHlaV05wY0dWRVpXTnJLVHRjYmlBZ2ZTeGNibHh1SUNCMWNHUmhkR1ZFYVhOd2JHRjVPaUFvS1NBOVBpQjdYRzRnSUNBZ1pHOXRWWEJrWVhSbGN5NW5jbVZsZEZWelpYSW9LVHRjYmlBZ0lDQmtiMjFWY0dSaGRHVnpMbkJ2Y0hWc1lYUmxRMkZ5WkhNb1pHOXRWWEJrWVhSbGN5NWpiMjlyWW05dmF5NXlaV05wY0dWektUdGNiaUFnZlN4Y2JseHVJQ0JuY21WbGRGVnpaWEk2SUNncElEMCtJSHRjYmlBZ0lDQmpiMjV6ZENCM1pXeGpiMjFsVFdWemMyRm5aU0E5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9KeTVuY21WbGRHbHVaeWNwTzF4dUlDQWdJSGRsYkdOdmJXVk5aWE56WVdkbExtbHVibVZ5VkdWNGRDQTlJR0JYWld4amIyMWxJQ1I3Wkc5dFZYQmtZWFJsY3k1MWMyVnlMbTVoYldWOUlXQTdYRzRnSUgwc1hHNWNiaUFnY0c5d2RXeGhkR1ZEWVhKa2N6b2dLSEpsWTJsd1pYTXBJRDArSUh0Y2JpQWdJQ0JqYjI1emRDQmpZWEprUVhKbFlTQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5TnRZV2x1TFhObFkzUnBiMjRuS1R0Y2JpQWdJQ0JqWVhKa1FYSmxZUzVqYkdGemMweHBjM1FnUFNBbllXeHNMV05oY21Sekp6dGNiaUFnSUNCallYSmtRWEpsWVM1cGJtNWxja2hVVFV3Z1BTQW5KenRjYmlBZ0lDQnlaV05wY0dWekxtWnZja1ZoWTJnb2NtVmphWEJsSUQwK0lIdGNiaUFnSUNBZ0lHTmhjbVJCY21WaExtbHVjMlZ5ZEVGa2FtRmpaVzUwU0ZSTlRDZ25ZV1owWlhKaVpXZHBiaWNzSUdSdmJWVndaR0YwWlhNdVkyOXVjM1J5ZFdOMFEyRnlaQ2h5WldOcGNHVXBLVnh1SUNBZ0lIMHBPMXh1SUNCOUxGeHVYRzRnSUdOdmJuTjBjblZqZEVOaGNtUTZJQ2h5WldOcGNHVXBJRDArSUh0Y2JpQWdJQ0JzWlhRZ1kyeGhjM05NYVhOMFhHNGdJQ0FnYVdZZ0tHUnZiVlZ3WkdGMFpYTXVkWE5sY2k1bVlYWnZjbWwwWlZKbFkybHdaWE11YVc1amJIVmtaWE1vY21WamFYQmxLU2tnZTF4dUlDQWdJQ0FnWTJ4aGMzTk1hWE4wSUQwZ0oyWmhkbTl5YVhSbElHTmhjbVF0WW5WMGRHOXVJR1poZG05eWFYUmxMV0ZqZEdsMlpTZGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnWTJ4aGMzTk1hWE4wSUQwZ0oyWmhkbTl5YVhSbElHTmhjbVF0WW5WMGRHOXVKMXh1SUNBZ0lIMWNiaUFnSUNCeVpYUjFjbTRnWUR4a2FYWWdZMnhoYzNNOUoyTmhjbVFnSkh0eVpXTnBjR1V1YVdSOUp6NWNiaUFnSUNBOGFHVmhaR1Z5SUdOc1lYTnpQU2RqWVhKa0xXaGxZV1JsY2lBa2UzSmxZMmx3WlM1cFpIMG5QbHh1SUNBZ0lDQWdQR3hoWW1Wc0lHWnZjajBuWVdSa0xXSjFkSFJ2YmljZ1kyeGhjM005SjJocFpHUmxiaWMrUTJ4cFkyc2dkRzhnWVdSa0lISmxZMmx3WlR3dmJHRmlaV3crWEc0Z0lDQWdJQ0E4WW5WMGRHOXVJR0Z5YVdFdGJHRmlaV3c5SjJGa1pDMWlkWFIwYjI0bklHTnNZWE56UFNkaFpHUXRZblYwZEc5dUlHTmhjbVF0WW5WMGRHOXVJQ1I3Y21WamFYQmxMbWxrZlNjK1hHNGdJQ0FnSUNBZ0lEeHBiV2NnWTJ4aGMzTTlKMkZrWkNBa2UzSmxZMmx3WlM1cFpIMGdZV1JrTFdKMWRIUnZiaWNnYzNKalBTZG9kSFJ3Y3pvdkwybHRZV2RsTG1ac1lYUnBZMjl1TG1OdmJTOXBZMjl1Y3k5emRtY3ZNekl2TXpJek16a3VjM1puSnlCaGJIUTlKMEZrWkNCMGIxeHVJQ0FnSUNBZ0lDQnlaV05wY0dWeklIUnZJR052YjJzblBseHVJQ0FnSUNBZ1BDOWlkWFIwYjI0K1hHNGdJQ0FnSUNBOGJHRmlaV3dnWm05eVBTZG1ZWFp2Y21sMFpTMWlkWFIwYjI0bklHTnNZWE56UFNkb2FXUmtaVzRuUGtOc2FXTnJJSFJ2SUdaaGRtOXlhWFJsSUhKbFkybHdaVHd2YkdGaVpXdytYRzRnSUNBZ0lDQThZblYwZEc5dUlHRnlhV0V0YkdGaVpXdzlKMlpoZG05eWFYUmxMV0oxZEhSdmJpY2dZMnhoYzNNOUp5UjdZMnhoYzNOTWFYTjBmU0JtWVhadmNtbDBaU1I3Y21WamFYQmxMbWxrZlNBa2UzSmxZMmx3WlM1cFpIMG5QbHh1SUNBZ0lDQWdQQzlpZFhSMGIyNCtYRzRnSUNBZ1BDOW9aV0ZrWlhJK1hHNGdJQ0FnUEhOd1lXNGdZMnhoYzNNOUozSmxZMmx3WlMxdVlXMWxJQ1I3Y21WamFYQmxMbWxrZlNjK0pIdHlaV05wY0dVdWJtRnRaWDA4TDNOd1lXNCtYRzRnSUNBZ0lDQThZblYwZEc5dUlHRnlhV0V0YkdGaVpXdzlKM0psWTJsd1pTMXBibVp2SnlCamJHRnpjejBuWTJGeVpDMXdhV04wZFhKbElDUjdjbVZqYVhCbExtbGtmU0IzY21Gd0p6NWNiaUFnSUNBZ0lDQWdQR2x0WnlCMFlXSnBibVJsZUQwbk1DY2dZMnhoYzNNOUoyTmhjbVF0Y0dsamRIVnlaU0FrZTNKbFkybHdaUzVwWkgwbmMzSmpQU2NrZTNKbFkybHdaUzVwYldGblpYMG5JR0ZzZEQwblJtOXZaQ0JtY205dElISmxZMmx3WlNjK1hHNGdJQ0FnSUNBOEwySjFkSFJ2Ymo1Y2JpQWdJQ0E4TDJScGRqNWdYRzRnSUgwc1hHNWNiaUFnWm1sdVpGTndaV05wWm1salVtVmphWEJsT2lBb1pYWmxiblFwSUQwK0lIdGNiaUFnSUNCeVpYUjFjbTRnWkc5dFZYQmtZWFJsY3k1amIyOXJZbTl2YXk1eVpXTnBjR1Z6TG1acGJtUW9jbVZqYVhCbElEMCtJSHRjYmlBZ0lDQWdJR2xtSUNobGRtVnVkQzUwWVhKblpYUXVZMnhoYzNOTWFYTjBMbU52Ym5SaGFXNXpLSEpsWTJsd1pTNXBaQ2twSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhKbFkybHdaVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlLVnh1SUNCOUxGeHVYRzRnSUdaaGRtOXlhWFJsUTJGeVpEb2dLR1YyWlc1MEtTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ2MyaHZkMFpoZG05eWFYUmxjMEoxZEhSdmJpQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5NTJhV1YzTFdaaGRtOXlhWFJsY3ljcE8xeHVJQ0FnSUd4bGRDQnpjR1ZqYVdacFkxSmxZMmx3WlNBOUlHUnZiVlZ3WkdGMFpYTXVabWx1WkZOd1pXTnBabWxqVW1WamFYQmxLR1YyWlc1MEtUdGNiaUFnSUNCcFppQW9JV1YyWlc1MExuUmhjbWRsZEM1amJHRnpjMHhwYzNRdVkyOXVkR0ZwYm5Nb0oyWmhkbTl5YVhSbExXRmpkR2wyWlNjcEtTQjdYRzRnSUNBZ0lDQnphRzkzUm1GMmIzSnBkR1Z6UW5WMGRHOXVMbWx1Ym1WeVNGUk5UQ0E5SUNkV2FXVjNJRVpoZG05eWFYUmxjeWM3WEc0Z0lDQWdJQ0JrYjIxVmNHUmhkR1Z6TG5WelpYSXVZV1JrVkc5R1lYWnZjbWwwWlhNb2MzQmxZMmxtYVdOU1pXTnBjR1VwTzF4dUlDQWdJSDBnWld4elpTQnBaaUFvWlhabGJuUXVkR0Z5WjJWMExtTnNZWE56VEdsemRDNWpiMjUwWVdsdWN5Z25abUYyYjNKcGRHVXRZV04wYVhabEp5a3BJSHRjYmlBZ0lDQWdJR1J2YlZWd1pHRjBaWE11ZFhObGNpNXlaVzF2ZG1WR2NtOXRSbUYyYjNKcGRHVnpLSE53WldOcFptbGpVbVZqYVhCbEtWeHVJQ0FnSUgxY2JpQWdJQ0JsZG1WdWRDNTBZWEpuWlhRdVkyeGhjM05NYVhOMExuUnZaMmRzWlNnblptRjJiM0pwZEdVdFlXTjBhWFpsSnlrN1hHNGdJSDBzWEc1Y2JpQWdkbWxsZDBaaGRtOXlhWFJsY3pvZ0tDa2dQVDRnZTF4dUlDQWdJR052Ym5OMElITmxZWEpqYUVKaGNpQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5NXpaV0Z5WTJndFlYSmxZU2NwTzF4dUlDQWdJSE5sWVhKamFFSmhjaTVqYkdGemMweHBjM1F1WVdSa0tDZG9hV1JrWlc0bktWeHVJQ0FnSUdOdmJuTjBJSE5vYjNkR1lYWnZjbWwwWlhOQ2RYUjBiMjRnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2N1ZG1sbGR5MW1ZWFp2Y21sMFpYTW5LVHRjYmlBZ0lDQmpiMjV6ZENCallYSmtRWEpsWVNBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvSnlOdFlXbHVMWE5sWTNScGIyNG5LVHRjYmlBZ0lDQmpZWEprUVhKbFlTNWpiR0Z6YzB4cGMzUWdQU0FuWVd4c0xXTmhjbVJ6Snp0Y2JpQWdJQ0JwWmlBb0lXUnZiVlZ3WkdGMFpYTXVkWE5sY2k1bVlYWnZjbWwwWlZKbFkybHdaWE11YkdWdVozUm9LU0I3WEc0Z0lDQWdJQ0J6YUc5M1JtRjJiM0pwZEdWelFuVjBkRzl1TG1sdWJtVnlTRlJOVENBOUlDZFpiM1VnYUdGMlpTQnVieUJtWVhadmNtbDBaWE1oSnp0Y2JpQWdJQ0FnSUdSdmJWVndaR0YwWlhNdWNHOXdkV3hoZEdWRFlYSmtjeWhrYjIxVmNHUmhkR1Z6TG1OdmIydGliMjlyTG5KbFkybHdaWE1wTzF4dUlDQWdJQ0FnY21WMGRYSnVYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUhOb2IzZEdZWFp2Y21sMFpYTkNkWFIwYjI0dWFXNXVaWEpJVkUxTUlEMGdKMUpsWm5KbGMyZ2dSbUYyYjNKcGRHVnpKMXh1SUNBZ0lDQWdZMkZ5WkVGeVpXRXVhVzV1WlhKSVZFMU1JRDBnSnljN1hHNGdJQ0FnSUNCa2IyMVZjR1JoZEdWekxuVnpaWEl1Wm1GMmIzSnBkR1ZTWldOcGNHVnpMbVp2Y2tWaFkyZ29jbVZqYVhCbElEMCtJSHRjYmlBZ0lDQWdJQ0FnWTJGeVpFRnlaV0V1YVc1elpYSjBRV1JxWVdObGJuUklWRTFNS0NkaFpuUmxjbUpsWjJsdUp5d2daRzl0VlhCa1lYUmxjeTVqYjI1emRISjFZM1JEWVhKa0tISmxZMmx3WlNrcFhHNGdJQ0FnSUNCOUtWeHVJQ0FnSUgxY2JpQWdmU3hjYmx4dUlDQmhaR1JVYjFSdlEyOXZhem9nS0dWMlpXNTBLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdjMmh2ZDFSdlEyOXZhMEoxZEhSdmJpQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5NTBieTFqYjI5ckp5azdYRzRnSUNBZ2JHVjBJSE53WldOcFptbGpVbVZqYVhCbElEMGdaRzl0VlhCa1lYUmxjeTVtYVc1a1UzQmxZMmxtYVdOU1pXTnBjR1VvWlhabGJuUXBPMXh1SUNBZ0lHbG1JQ2doWlhabGJuUXVkR0Z5WjJWMExtTnNZWE56VEdsemRDNWpiMjUwWVdsdWN5Z25ZV1JrTFdGamRHbDJaU2NwS1NCN1hHNGdJQ0FnSUNCemFHOTNWRzlEYjI5clFuVjBkRzl1TG1sdWJtVnlWR1Y0ZENBOUlDZFVieUJEYjI5ckoxeHVJQ0FnSUNBZ1lXeGxjblFvWkc5dFZYQmtZWFJsY3k1MWMyVnlMbU5vWldOclVHRnVkSEo1U1c1bmNtVmthV1Z1ZEhNb2MzQmxZMmxtYVdOU1pXTnBjR1VwS1R0Y2JpQWdJQ0FnSUdSdmJWVndaR0YwWlhNdWRYTmxjaTVoWkdSVWIxSmxZMmx3WlhOVWIwTnZiMnNvYzNCbFkybG1hV05TWldOcGNHVXBPMXh1SUNBZ0lIMGdaV3h6WlNCcFppQW9aWFpsYm5RdWRHRnlaMlYwTG1Oc1lYTnpUR2x6ZEM1amIyNTBZV2x1Y3lnbllXUmtMV0ZqZEdsMlpTY3BLU0I3WEc0Z0lDQWdJQ0JrYjIxVmNHUmhkR1Z6TG5WelpYSXVjbVZ0YjNabFJuSnZiVkpsWTJsd1pYTlViME52YjJzb2MzQmxZMmxtYVdOU1pXTnBjR1VwWEc0Z0lDQWdmVnh1SUNBZ0lHVjJaVzUwTG5SaGNtZGxkQzVqYkdGemMweHBjM1F1ZEc5bloyeGxLQ2RoWkdRdFlXTjBhWFpsSnlrN1hHNGdJSDBzWEc1Y2JpQWdaR2x6Y0d4aGVWUnZRMjl2YTBOaGNtUnpPaUFvS1NBOVBpQjdYRzRnSUNBZ1kyOXVjM1FnYzJWaGNtTm9RbUZ5SUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduTG5ObFlYSmphQzFoY21WaEp5azdYRzRnSUNBZ2MyVmhjbU5vUW1GeUxtTnNZWE56VEdsemRDNWhaR1FvSjJocFpHUmxiaWNwWEc0Z0lDQWdZMjl1YzNRZ1kyRnlaRUZ5WldFZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0NjamJXRnBiaTF6WldOMGFXOXVKeWs3WEc0Z0lDQWdZMkZ5WkVGeVpXRXVZMnhoYzNOTWFYTjBJRDBnSnljN1hHNGdJQ0FnWTJGeVpFRnlaV0V1YVc1dVpYSklWRTFNSUQxY2JpQWdJQ0FnSUdBOGMyVmpkR2x2YmlCamJHRnpjejBuZEc4dFkyOXZheWMrWEc0Z0lDQWdJQ0FnSUR4b01TQmpiR0Z6Y3owbmRHOHRZMjl2YXkxbmNtVmxkR2x1WnljK1VtVmphWEJsY3lCVWJ5QkRiMjlyUEM5b01UNWNiaUFnSUNBZ0lDQWdQR1JwZGlCamJHRnpjejBuWTJGeVpDMXpaV04wYVc5dUlHRnNiQzFqWVhKa2N5YytYRzRnSUNBZ0lDQWdJRHd2WkdsMlBseHVJQ0FnSUNBZ1BDOXpaV04wYVc5dVBtQmNiaUFnSUNCc1pYUWdZMkZ5WkZObFkzUnBiMjRnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2N1WTJGeVpDMXpaV04wYVc5dUp5bGNiaUFnSUNCa2IyMVZjR1JoZEdWekxuVnpaWEl1Y21WamFYQmxjMVJ2UTI5dmF5NW1iM0pGWVdOb0tISmxZMmx3WlNBOVBpQjdYRzRnSUNBZ0lDQnNaWFFnZG1Gc2RXVnpJRDBnWkc5dFZYQmtZWFJsY3k1MWMyVnlMbU5vWldOclNHOTNUWFZqYUUxdmNtVW9jbVZqYVhCbEtTNXRZWEFvYjJKcUlEMCtJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR0FrZTI5aWFpNXhkV0Z1ZEdsMGVVNWxaV1JsWkgwZ0pIdHZZbW91ZFc1cGRIMGdiVzl5WlNBa2UyOWlhaTV1WVcxbGZXQTdYRzRnSUNBZ0lDQjlLVHRjYmlBZ0lDQWdJR3hsZENCdVpXVmtaV1JEYjNOMElEMGdaRzl0VlhCa1lYUmxjeTUxYzJWeUxtTm9aV05yU0c5M1RYVmphRTF2Y21Vb2NtVmphWEJsS1M1eVpXUjFZMlVvS0hSdmRHRnNMQ0JwYm1keVpXUnBaVzUwS1NBOVBpQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBiM1JoYkNBclBTQnBibWR5WldScFpXNTBMbU52YzNRN1hHNGdJQ0FnSUNCOUxDQXdLVHRjYmlBZ0lDQWdJR05oY21SVFpXTjBhVzl1TG1sdWMyVnlkRUZrYW1GalpXNTBTRlJOVENnblltVm1iM0psWlc1a0p5d2dZRHhrYVhZZ1kyeGhjM005SjJOaGNtUWdKSHR5WldOcGNHVXVhV1I5Sno1Y2JpQWdJQ0E4YUdWaFpHVnlJR05zWVhOelBTZGpZWEprTFdobFlXUmxjaUFrZTNKbFkybHdaUzVwWkgwblBseHVJQ0FnSUNBZ1BHeGhZbVZzSUdadmNqMG5ZMnh2YzJVdFluVjBkRzl1SnlCamJHRnpjejBuYUdsa1pHVnVKejQ4TDJ4aFltVnNQbHh1SUNBZ0lDQWdQR0oxZEhSdmJpQmhjbWxoTFd4aFltVnNQU2RqYkc5elpTMWlkWFIwYjI0bklHTnNZWE56UFNkamJHOXpaUzFpZFhSMGIyNGdZMkZ5WkMxaWRYUjBiMjRnSkh0eVpXTnBjR1V1YVdSOUp6NWNiaUFnSUNBZ0lDQWdQR2x0WnlCamJHRnpjejBuWTJ4dmMyVXRZblYwZEc5dUlDUjdjbVZqYVhCbExtbGtmU2NnYzNKalBTZG9kSFJ3Y3pvdkwzZDNkeTVtYkdGMGFXTnZiaTVqYjIwdmMzWm5MM04wWVhScFl5OXBZMjl1Y3k5emRtY3ZORFEyTHpRME5qQTVNUzV6ZG1jbklHRnNkRDBuY21WdGIzWmxJR1p5YjIwZ2NtVmphWEJsY3lCMGJ5QmpiMjlySno1Y2JpQWdJQ0FnSUR3dlluVjBkRzl1UGx4dUlDQWdJQ0FnUEd4aFltVnNJR1p2Y2owblptRjJiM0pwZEdVdFluVjBkRzl1SnlCamJHRnpjejBuYUdsa1pHVnVKejVEYkdsamF5QjBieUJtWVhadmNtbDBaU0J5WldOcGNHVThMMnhoWW1Wc1BseHVJQ0FnSUNBZ1BHSjFkSFJ2YmlCaGNtbGhMV3hoWW1Wc1BTZG1ZWFp2Y21sMFpTMWlkWFIwYjI0bklHTnNZWE56UFNkbVlYWnZjbWwwWlNCallYSmtMV0oxZEhSdmJpQm1ZWFp2Y21sMFpTUjdjbVZqYVhCbExtbGtmU0FrZTNKbFkybHdaUzVwWkgwblBseHVJQ0FnSUNBZ1BDOWlkWFIwYjI0K1hHNGdJQ0FnUEM5b1pXRmtaWEkrWEc0Z0lDQWdJQ0E4YURNK0pIdHlaV05wY0dVdWJtRnRaWDA4TDJnelBseHVJQ0FnSUNBZ1BHbHRaeUIwWVdKcGJtUmxlRDBuTUNjZ1kyeGhjM005SjJOaGNtUXRjR2xqZEhWeVpTQWtlM0psWTJsd1pTNXBaSDBuWEc0Z0lDQWdJQ0J6Y21NOUp5UjdjbVZqYVhCbExtbHRZV2RsZlNjZ1lXeDBQU2RHYjI5a0lHWnliMjBnY21WamFYQmxKejVjYmlBZ0lDQWdJRHhrYVhZZ1kyeGhjM01nUFNCY0luQmhiblJ5ZVMxaWRYUjBiMjV6WENJK1hHNGdJQ0FnSUNBZ0lEeGlkWFIwYjI0Z2RIbHdaVDFjSW1KMWRIUnZibHdpSUc1aGJXVTlYQ0pCWkdRZ1RtVmxaR1ZrSUVsdVozSmxaR2xsYm5SelhDSWdZMnhoYzNNOVhDSmliM1ZuYUhRdGFXNW5jbVZrYVdWdWRITWdZbTkxWjJoMExXbHVaM0psWkdsbGJuUnpKSHR5WldOcGNHVXVhV1I5SUNSN2NtVmphWEJsTG1sa2ZWd2lQa0ZrWkNCT1pXVmtaV1FnU1c1bmNtVmthV1Z1ZEhNOEwySjFkSFJ2Ymo1Y2JpQWdJQ0FnSUNBZ1BHSjFkSFJ2YmlCMGVYQmxQVndpWW5WMGRHOXVYQ0lnYm1GdFpUMWNJa2hoZG1VZ1EyOXZhMlZrWENJZ1kyeGhjM005WENKb1lYWmxMV052YjJ0bFpDQm9ZWFpsTFdOdmIydGxaQ1I3Y21WamFYQmxMbWxrZlNBa2UzSmxZMmx3WlM1cFpIMWNJajVJWVhabElFTnZiMnRsWkR3dlluVjBkRzl1UGx4dUlDQWdJQ0FnUEM5a2FYWStYRzRnSUNBZ0lDQThjQ0JqYkdGemN6MG5ibVZsWkdWa0xXbHVaM01uUGtsdVozSmxaR2xsYm5SeklGTjBhV3hzSUU1bFpXUmxaRG84TDNBK1hHNGdJQ0FnSUNBOGRXd2dQbHh1SUNBZ0lDQWdQR3hwUGlSN2RtRnNkV1Z6TG1wdmFXNG9Kend2YkdrK1BHeHBQaWNwZlR3dmJHaytYRzRnSUNBZ0lDQThMM1ZzUGx4dUlDQWdJQ0FnUEhBZ1kyeGhjM005SjJsdVp5MWpiM04wSno1RGIzTjBJSFJ2SUZOMGFXeHNJRWRsZERva0pIdHVaV1ZrWldSRGIzTjBmVHd2Y0Q1Y2JpQWdJQ0E4TDJScGRqNWdLVHRjYmlBZ0lDQjlLVHRjYmlBZ2ZTeGNibHh1SUNCemFHOTNWRzlEYjI5clVtVmphWEJsY3pvZ0tDa2dQVDRnZTF4dUlDQWdJR052Ym5OMElITm9iM2RVYjBOdmIydENkWFIwYjI0Z1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0NjdWRHOHRZMjl2YXljcE8xeHVJQ0FnSUdsbUlDZ2haRzl0VlhCa1lYUmxjeTUxYzJWeUxuSmxZMmx3WlhOVWIwTnZiMnN1YkdWdVozUm9LU0I3WEc0Z0lDQWdJQ0J6YUc5M1ZHOURiMjlyUW5WMGRHOXVMbWx1Ym1WeVZHVjRkQ0E5SUNkWmIzVWdhR0YyWlNCdWJ5QnpZWFpsWkNCU1pXTnBjR1Z6SVNjN1hHNGdJQ0FnSUNCa2IyMVZjR1JoZEdWekxuQnZjSFZzWVhSbFEyRnlaSE1vWkc5dFZYQmtZWFJsY3k1amIyOXJZbTl2YXk1eVpXTnBjR1Z6S1R0Y2JpQWdJQ0FnSUhKbGRIVnlibHh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNCa2IyMVZjR1JoZEdWekxtUnBjM0JzWVhsVWIwTnZiMnREWVhKa2N5Z3BPMXh1SUNBZ0lIMWNiaUFnZlN4Y2JseHVJQ0J5WlcxdmRtVkdjbTl0Vkc5RGIyOXJPaUFvS1NBOVBpQjdYRzRnSUNBZ2JHVjBJSE53WldOcFptbGpVbVZqYVhCbElEMGdaRzl0VlhCa1lYUmxjeTVqYjI5clltOXZheTV5WldOcGNHVnpMbVpwYm1Rb2NtVmphWEJsSUQwK0lIdGNiaUFnSUNBZ0lHbG1JQ2hsZG1WdWRDNTBZWEpuWlhRdVkyeGhjM05NYVhOMExtTnZiblJoYVc1ektISmxZMmx3WlM1cFpDa3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSEpsWTJsd1pUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOUtWeHVJQ0FnSUdSdmJWVndaR0YwWlhNdWRYTmxjaTV5WlcxdmRtVkdjbTl0VW1WamFYQmxjMVJ2UTI5dmF5aHpjR1ZqYVdacFkxSmxZMmx3WlNrN1hHNGdJQ0FnWkc5dFZYQmtZWFJsY3k1a2FYTndiR0Y1Vkc5RGIyOXJRMkZ5WkhNb0tUdGNiaUFnZlN4Y2JseHVJQ0JrYVhOd2JHRjVSR2x5WldOMGFXOXVjem9nS0dWMlpXNTBLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdjMlZoY21Ob1FtRnlJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25Mbk5sWVhKamFDMWhjbVZoSnlrN1hHNGdJQ0FnYzJWaGNtTm9RbUZ5TG1Oc1lYTnpUR2x6ZEM1aFpHUW9KMmhwWkdSbGJpY3BYRzRnSUNBZ1kyOXVjM1FnWTJGeVpFRnlaV0VnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2NqYldGcGJpMXpaV04wYVc5dUp5azdYRzRnSUNBZ1kyRnlaRUZ5WldFdVkyeGhjM05NYVhOMElEMGdKM0psWTJsd1pTMWthWEpsWTNScGIyNXpKenRjYmlBZ0lDQnNaWFFnYzNCbFkybG1hV05TWldOcGNHVWdQU0JrYjIxVmNHUmhkR1Z6TG1acGJtUlRjR1ZqYVdacFkxSmxZMmx3WlNobGRtVnVkQ2s3WEc0Z0lDQWdiR1YwSUdOdmMzUWdQU0J6Y0dWamFXWnBZMUpsWTJsd1pTNWpZV3hqZFd4aGRHVkRiM04wS0NrN1hHNGdJQ0FnWTJGeVpFRnlaV0V1YVc1dVpYSklWRTFNSUQwZ0p5YzdYRzRnSUNBZ2JHVjBJRzVsWldSbFpFbHVaM0psWkdsbGJuUnpJRDBnVzEwN1hHNGdJQ0FnYzNCbFkybG1hV05TWldOcGNHVXVhVzVuY21Wa2FXVnVkSE11Wm05eVJXRmphQ2hwYm1keVpXUnBaVzUwSUQwK0lIdGNiaUFnSUNBZ0lHeGxkQ0J1WVcxbElEMGdjM0JsWTJsbWFXTlNaV05wY0dVdWFXNW5jbVZrYVdWdWRITkVZWFJoTG1acGJtUW9hWFJsYlNBOVBpQnBkR1Z0TG1sa0lEMDlQU0JwYm1keVpXUnBaVzUwTG1sa0tTNXVZVzFsWEc0Z0lDQWdJQ0J1WldWa1pXUkpibWR5WldScFpXNTBjeTV3ZFhOb0tHQWtlMmx1WjNKbFpHbGxiblF1Y1hWaGJuUnBkSGt1WVcxdmRXNTBMblJ2Um1sNFpXUW9NaWw5SUNSN2FXNW5jbVZrYVdWdWRDNXhkV0Z1ZEdsMGVTNTFibWwwZlNBa2UyNWhiV1Y5WUNsY2JpQWdJQ0I5S1Z4dUlDQWdJR3hsZENCdVpXVmtaV1JUZEdWd2N5QTlJRnRkTzF4dUlDQWdJSE53WldOcFptbGpVbVZqYVhCbExtbHVjM1J5ZFdOMGFXOXVjeTVtYjNKRllXTm9LSE4wWlhBZ1BUNGdlMXh1SUNBZ0lDQWdibVZsWkdWa1UzUmxjSE11Y0hWemFDaGdKSHR6ZEdWd0xtNTFiV0psY24wdUlDUjdjM1JsY0M1cGJuTjBjblZqZEdsdmJuMGdZQ2xjYmlBZ0lDQjlLVnh1SUNBZ0lHTmhjbVJCY21WaExtbHVibVZ5U0ZSTlRDQTlJR0E4YzJWamRHbHZiaUJqYkdGemN6MG5aR2x6Y0d4aGVTMXlaV05wY0dVblBseHVJQ0FnSUR4a2FYWWdZMnhoYzNNOUoyUnBjM0JzWVhrdGNtVmphWEJsTFdsdVptOG5QbHh1SUNBZ0lDQWdQR2d6UGlSN2MzQmxZMmxtYVdOU1pXTnBjR1V1Ym1GdFpYMDhMMmd6UGx4dUlDQWdJQ0FnUEdsdFp5QmpiR0Z6Y3owblkyRnlaQzF3YVdOMGRYSmxKeUJ6Y21NOUp5UjdjM0JsWTJsbWFXTlNaV05wY0dVdWFXMWhaMlY5SnlCaGJIUTlKMUpsWTJsd1pTQnBiV0ZuWlNCbWIzSWdKSHR6Y0dWamFXWnBZMUpsWTJsd1pTNXVZVzFsZlNjK1hHNGdJQ0FnUEM5a2FYWStYRzRnSUNBZ1BHUnBkaUJqYkdGemN6MG5jbVZqYVhCbExXbHVaM0psWkdsbGJuUnpKejVjYmlBZ0lDQThhRFVnWTJ4aGMzTTlKM0psWTJsd1pTMXBibWR5WldScFpXNTBjeTEwYVhSc1pTYytXVzkxSUhkcGJHd2dibVZsWkRvZ1BDOW9OVDVjYmlBZ0lDQThkV3crWEc0Z0lDQWdQR3hwUGlSN2JtVmxaR1ZrU1c1bmNtVmthV1Z1ZEhNdWFtOXBiaWduUEM5c2FUNDhiR2srSnlsOVBDOXNhVDVjYmlBZ0lDQThMM1ZzUGx4dUlDQWdJRHd2WkdsMlBseHVJQ0FnSUR4a2FYWWdZMnhoYzNNOUozSmxZMmx3WlMxcGJuTjBjblZqZEdsdmJuTW5QbHh1SUNBZ0lEeG9OVDVKYm5OMGNuVmpkR2x2Ym5NNklEd3ZhRFUrWEc0Z0lDQWdQSFZzSUdOc1lYTnpQU2RwYm5OMGNuVmpkR2x2Ymkxc2FYTjBKeUJ6ZEhsc1pUMG5iR2x6ZEMxemRIbHNaUzEwZVhCbE9tNXZibVU3Sno1Y2JpQWdJQ0E4YkdrK0pIdHVaV1ZrWldSVGRHVndjeTVxYjJsdUtDYzhMMnhwUGp4c2FUNG5LWDA4TDJ4cFBseHVJQ0FnSUR3dmRXdytYRzRnSUNBZ1BHZzFQbFJvYVhNZ2NtVmphWEJsSUdkbGJtVnlZV3hzZVNCamIzTjBjem9nSkNSN1kyOXpkSDBnUEM5b05UNWNiaUFnSUNBOEwyUnBkajVjYmlBZ0lDQThMM05sWTNScGIyNCtZRHRjYmlBZ2ZTeGNibHh1SUNCbWFXeDBaWEpTWldOcGNHVnpPaUFvS1NBOVBpQjdYRzRnSUNBZ1kyOXVjM1FnWTJGeVpFRnlaV0VnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2N1WVd4c0xXTmhjbVJ6SnlrN1hHNGdJQ0FnZG1GeUlITmxZWEpqYUZSbGNtMGdQU0JsZG1WdWRDNTBZWEpuWlhRdWRtRnNkV1V1ZEc5TWIzZGxja05oYzJVb0tUdGNiaUFnSUNCcFppQW9jMlZoY21Ob1ZHVnliU0FoUFQwZ0p5Y3BJSHRjYmlBZ0lDQWdJR05oY21SQmNtVmhMbWx1Ym1WeVNGUk5UQ0E5SUNjbk8xeHVJQ0FnSUNBZ1pHOXRWWEJrWVhSbGN5NWthWE53YkdGNVJtbHNkR1Z5WldSU1pXTnBjR1Z6S0hObFlYSmphRlJsY20wcE8xeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0JrYjIxVmNHUmhkR1Z6TG5CdmNIVnNZWFJsUTJGeVpITW9aRzl0VlhCa1lYUmxjeTVqYjI5clltOXZheTV5WldOcGNHVnpLVHRjYmlBZ0lDQjlYRzRnSUgwc1hHNWNiaUFnWkdsemNHeGhlVVpwYkhSbGNtVmtVbVZqYVhCbGN6b2dLSE5sWVhKamFGUmxjbTBwSUQwK0lIdGNiaUFnSUNCa2IyMVZjR1JoZEdWekxuQnZjSFZzWVhSbFEyRnlaSE1vWkc5dFZYQmtZWFJsY3k1amIyOXJZbTl2YXk1bWFXNWtVbVZqYVhCbGN5aHpaV0Z5WTJoVVpYSnRLU2s3WEc0Z0lIMHNYRzVjYmlBZ2FHRjJaVU52YjJ0bFpGSmxZMmx3WlRvZ0tHVjJaVzUwS1NBOVBpQjdYRzRnSUNBZ2JHVjBJSE53WldOcFptbGpVbVZqYVhCbElEMGdaRzl0VlhCa1lYUmxjeTVtYVc1a1UzQmxZMmxtYVdOU1pXTnBjR1VvWlhabGJuUXBPMXh1SUNBZ0lHTnZibk4wSUdoaGRtVkRiMjlyWldSQ2RYUjBiMjRnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLR0F1YUdGMlpTMWpiMjlyWldRa2UzTndaV05wWm1salVtVmphWEJsTG1sa2ZXQXBPMXh1SUNBZ0lHbG1JQ2hrYjIxVmNHUmhkR1Z6TG5WelpYSXVZMmhsWTJ0UVlXNTBjbmxKYm1keVpXUnBaVzUwY3loemNHVmphV1pwWTFKbFkybHdaU2tnSVQwOUlDZFpiM1VnYUdGMlpTQjBhR1VnYVc1bmNtVmthV1Z1ZEhNaEp5a2dlMXh1SUNBZ0lDQWdZV3hsY25Rb1hDSlpiM1VnWkc5dUozUWdhR0YyWlNCM2FHRjBJSGx2ZFNCdVpXVmtJSGxsZEZ3aUtWeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0JrYjIxVmNHUmhkR1Z6TG5WelpYSXVjbVZ0YjNabFVHRnVkSEo1U1c1bmNtbGthV1Z1ZEhNb2MzQmxZMmxtYVdOU1pXTnBjR1VwWEc0Z0lDQWdJQ0JvWVhabFEyOXZhMlZrUW5WMGRHOXVMbVJwYzJGaWJHVmtJRDBnZEhKMVpUdGNiaUFnSUNCOVhHNGdJSDBzWEc1Y2JpQWdZblY1U1c1bmNtVmthV1Z1ZEhNNklDaGxkbVZ1ZENrZ1BUNGdlMXh1SUNBZ0lHeGxkQ0J6Y0dWamFXWnBZMUpsWTJsd1pTQTlJR1J2YlZWd1pHRjBaWE11Wm1sdVpGTndaV05wWm1salVtVmphWEJsS0dWMlpXNTBLVHRjYmlBZ0lDQmpiMjV6ZENCaWRYbENkWFIwYjI0Z1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0dBdVltOTFaMmgwTFdsdVozSmxaR2xsYm5SekpIdHpjR1ZqYVdacFkxSmxZMmx3WlM1cFpIMWdLVnh1SUNBZ0lHUnZiVlZ3WkdGMFpYTXVkWE5sY2k1aFpHUk9aV1ZrWldSUVlXNTBjbmxKYm1keWFXUnBaVzUwY3loemNHVmphV1pwWTFKbFkybHdaU2xjYmlBZ0lDQmlkWGxDZFhSMGIyNHVaR2x6WVdKc1pXUWdQU0IwY25WbE8xeHVJQ0I5TEZ4dVhHNTlPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FnWkc5dFZYQmtZWFJsY3p0Y2JpSXNJbU5zWVhOeklGQmhiblJ5ZVNCN1hHNGdJR052Ym5OMGNuVmpkRzl5S0hWelpYSlFZVzUwY25rcElIdGNiaUFnSUNCMGFHbHpMblZ6WlhKUVlXNTBjbmtnUFNCMWMyVnlVR0Z1ZEhKNU8xeHVJQ0FnSUhSb2FYTXVkWE5sY2tsdVozSmxaR2xsYm5SeklEMGdlMzA3WEc0Z0lIMWNibHh1SUNCamIyMXdhV3hsVUdGdWRISjVLQ2tnZTF4dUlDQWdJSFJvYVhNdWRYTmxja2x1WjNKbFpHbGxiblJ6SUQwZ2RHaHBjeTUxYzJWeVVHRnVkSEo1TG5KbFpIVmpaU2dvY0dGdWRISjVMQ0JwYm1keVpXUnBaVzUwS1NBOVBpQjdYRzRnSUNBZ0lDQnBaaUFvSVhCaGJuUnllVnRwYm1keVpXUnBaVzUwTG1sdVozSmxaR2xsYm5SZEtTQjdYRzRnSUNBZ0lDQWdJSEJoYm5SeWVWdHBibWR5WldScFpXNTBMbWx1WjNKbFpHbGxiblJkSUQwZ2FXNW5jbVZrYVdWdWRDNWhiVzkxYm5RN1hHNGdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNCd1lXNTBjbmxiYVc1bmNtVmthV1Z1ZEM1cGJtZHlaV1JwWlc1MFhTQXJQU0JwYm1keVpXUnBaVzUwTG1GdGIzVnVkRHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQWdJSEpsZEhWeWJpQndZVzUwY25rN1hHNGdJQ0FnZlN3Z2UzMHBPMXh1SUNCOVhHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRkJoYm5SeWVUdGNiaUlzSW1Oc1lYTnpJRkpsWTJsd1pTQjdYRzRnSUdOdmJuTjBjblZqZEc5eUtISmxZMmx3WlN3Z2FXNW5jbVZrYVdWdWRITkVZWFJoS1NCN1hHNGdJQ0FnZEdocGN5NXVZVzFsSUQwZ2NtVmphWEJsTG01aGJXVTdYRzRnSUNBZ2RHaHBjeTVwWkNBOUlISmxZMmx3WlM1cFpEdGNiaUFnSUNCMGFHbHpMbWx1WjNKbFpHbGxiblJ6SUQwZ2NtVmphWEJsTG1sdVozSmxaR2xsYm5Sek8xeHVJQ0FnSUhSb2FYTXVhVzV6ZEhKMVkzUnBiMjV6SUQwZ2NtVmphWEJsTG1sdWMzUnlkV04wYVc5dWN6dGNiaUFnSUNCMGFHbHpMblJoWjNNZ1BTQnlaV05wY0dVdWRHRm5jenRjYmlBZ0lDQjBhR2x6TG1sdVozSmxaR2xsYm5SelJHRjBZU0E5SUdsdVozSmxaR2xsYm5SelJHRjBZVHRjYmlBZ0lDQjBhR2x6TG1sdFlXZGxJRDBnY21WamFYQmxMbWx0WVdkbE8xeHVJQ0I5WEc1Y2JpQWdZMkZzWTNWc1lYUmxRMjl6ZENncElIdGNiaUFnSUNCc1pYUWdZMjl6ZEVOdmRXNTBaWElnUFNBd08xeHVJQ0FnSUhSb2FYTXVhVzVuY21Wa2FXVnVkSE11Wm05eVJXRmphQ2hwYm1keVpXUnBaVzUwSUQwK0lIdGNiaUFnSUNBZ0lIUm9hWE11YVc1bmNtVmthV1Z1ZEhORVlYUmhMbVpwYm1Rb2MzQmxZMmxtYVdOSmJtZHlaV1JwWlc1MElEMCtJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tITndaV05wWm1salNXNW5jbVZrYVdWdWRDNXBaQ0E5UFQwZ2FXNW5jbVZrYVdWdWRDNXBaQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lHTnZjM1JEYjNWdWRHVnlJQ3M5SUNoT2RXMWlaWElvYzNCbFkybG1hV05KYm1keVpXUnBaVzUwTG1WemRHbHRZWFJsWkVOdmMzUkpia05sYm5SektTQXFYRzRnSUNBZ0lDQWdJQ0FnVG5WdFltVnlLR2x1WjNKbFpHbGxiblF1Y1hWaGJuUnBkSGt1WVcxdmRXNTBLU2xjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlNsY2JpQWdJQ0I5S1R0Y2JpQWdJQ0J5WlhSMWNtNGdjR0Z5YzJWR2JHOWhkQ2dvWTI5emRFTnZkVzUwWlhJZ0x5QXhNREFwTG5SdlJtbDRaV1FvTWlrcE8xeHVJQ0I5WEc1Y2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdVbVZqYVhCbE8xeHVJaXdpYVcxd2IzSjBJQ2N1TDJOemN5OXpkSGxzWlhNdWMyTnpjeWM3WEc1Y2JtbHRjRzl5ZENCa2IyMVZjR1JoZEdWeklHWnliMjBnSnk0dlpHOXRWWEJrWVhSbGN5YzdYRzVjYm1OdmJuTjBJSE5vYjNkR1lYWnZjbWwwWlhOQ2RYUjBiMjRnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2N1ZG1sbGR5MW1ZWFp2Y21sMFpYTW5LVHRjYm1OdmJuTjBJR2h2YldWQ2RYUjBiMjRnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2N1YUc5dFpTY3BYRzVqYjI1emRDQmpZWEprUVhKbFlTQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5NWhiR3d0WTJGeVpITW5LVHRjYm1OdmJuTjBJSE5sWVhKamFFSmhjaUE5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9KeTV6WldGeVkyZ3RhVzV3ZFhRbktUdGNibU52Ym5OMElITm9iM2RVYjBOdmIydENkWFIwYjI0Z1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0NjdWRHOHRZMjl2YXljcE8xeHVYRzVqYjI1emRDQmpZWEprUW5WMGRHOXVRMjl1WkdsMGFXOXVZV3h6SUQwZ0tHVjJaVzUwS1NBOVBpQjdYRzRnSUdsbUlDaGxkbVZ1ZEM1MFlYSm5aWFF1WTJ4aGMzTk1hWE4wTG1OdmJuUmhhVzV6S0NkbVlYWnZjbWwwWlNjcEtTQjdYRzRnSUNBZ1pHOXRWWEJrWVhSbGN5NW1ZWFp2Y21sMFpVTmhjbVFvWlhabGJuUXBPMXh1SUNCOUlHVnNjMlVnYVdZZ0tHVjJaVzUwTG5SaGNtZGxkQzVqYkdGemMweHBjM1F1WTI5dWRHRnBibk1vSjJGa1pDMWlkWFIwYjI0bktTa2dlMXh1SUNBZ0lHUnZiVlZ3WkdGMFpYTXVZV1JrVkc5VWIwTnZiMnNvWlhabGJuUXBPMXh1SUNCOUlHVnNjMlVnYVdZZ0tHVjJaVzUwTG5SaGNtZGxkQzVqYkdGemMweHBjM1F1WTI5dWRHRnBibk1vSjJOaGNtUXRjR2xqZEhWeVpTY3BLU0I3WEc0Z0lDQWdaRzl0VlhCa1lYUmxjeTVrYVhOd2JHRjVSR2x5WldOMGFXOXVjeWhsZG1WdWRDazdYRzRnSUgwZ1pXeHpaU0JwWmlBb1pYWmxiblF1ZEdGeVoyVjBMbU5zWVhOelRHbHpkQzVqYjI1MFlXbHVjeWduYUc5dFpTY3BLU0I3WEc0Z0lDQWdZMjl1YzNRZ2MyVmhjbU5vUW1GeUlEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkxuTmxZWEpqYUMxaGNtVmhKeWs3WEc0Z0lDQWdjMlZoY21Ob1FtRnlMbU5zWVhOelRHbHpkQzV5WlcxdmRtVW9KMmhwWkdSbGJpY3BYRzRnSUNBZ2MyaHZkMVJ2UTI5dmEwSjFkSFJ2Ymk1cGJtNWxja2hVVFV3Z1BTQW5WRzhnUTI5dmF5YzdYRzRnSUNBZ2MyaHZkMFpoZG05eWFYUmxjMEoxZEhSdmJpNXBibTVsY2toVVRVd2dQU0FuVm1sbGR5QkdZWFp2Y21sMFpYTW5PMXh1SUNBZ0lHUnZiVlZ3WkdGMFpYTXVjRzl3ZFd4aGRHVkRZWEprY3loa2IyMVZjR1JoZEdWekxtTnZiMnRpYjI5ckxuSmxZMmx3WlhNcE8xeHVJQ0I5SUdWc2MyVWdhV1lnS0dWMlpXNTBMblJoY21kbGRDNWpiR0Z6YzB4cGMzUXVZMjl1ZEdGcGJuTW9KMk5zYjNObExXSjFkSFJ2YmljcEtTQjdYRzRnSUNBZ1pHOXRWWEJrWVhSbGN5NXlaVzF2ZG1WR2NtOXRWRzlEYjI5cktHVjJaVzUwS1R0Y2JpQWdmU0JsYkhObElHbG1JQ2hsZG1WdWRDNTBZWEpuWlhRdVkyeGhjM05NYVhOMExtTnZiblJoYVc1ektDZG9ZWFpsTFdOdmIydGxaQ2NwS1NCN1hHNGdJQ0FnWkc5dFZYQmtZWFJsY3k1b1lYWmxRMjl2YTJWa1VtVmphWEJsS0dWMlpXNTBLVHRjYmlBZ2ZTQmxiSE5sSUdsbUlDaGxkbVZ1ZEM1MFlYSm5aWFF1WTJ4aGMzTk1hWE4wTG1OdmJuUmhhVzV6S0NkaWIzVm5hSFF0YVc1bmNtVmthV1Z1ZEhNbktTa2dlMXh1SUNBZ0lHUnZiVlZ3WkdGMFpYTXVZblY1U1c1bmNtVmthV1Z1ZEhNb1pYWmxiblFwTzF4dUlDQjlYRzU5WEc1Y2JuZHBibVJ2ZHk1dmJteHZZV1FnUFNCa2IyMVZjR1JoZEdWekxtZGxkRmRvWVhSelEyOXZhMmx1WjBSaGRHRW9LVnh1YUc5dFpVSjFkSFJ2Ymk1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkamJHbGpheWNzSUdOaGNtUkNkWFIwYjI1RGIyNWthWFJwYjI1aGJITXBPMXh1WTJGeVpFRnlaV0V1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduWTJ4cFkyc25MQ0JqWVhKa1FuVjBkRzl1UTI5dVpHbDBhVzl1WVd4ektUdGNibk5vYjNkR1lYWnZjbWwwWlhOQ2RYUjBiMjR1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduWTJ4cFkyc25MQ0JrYjIxVmNHUmhkR1Z6TG5acFpYZEdZWFp2Y21sMFpYTXBPMXh1YzJodmQxUnZRMjl2YTBKMWRIUnZiaTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RqYkdsamF5Y3NJR1J2YlZWd1pHRjBaWE11YzJodmQxUnZRMjl2YTFKbFkybHdaWE1wTzF4dWMyVmhjbU5vUW1GeUxtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0oydGxlWFZ3Snl3Z1pHOXRWWEJrWVhSbGN5NW1hV3gwWlhKU1pXTnBjR1Z6S1R0Y2JpSXNJbWx0Y0c5eWRDQlFZVzUwY25rZ1puSnZiU0FuTGk5d1lXNTBjbmtuTzF4dVhHNWpiR0Z6Y3lCVmMyVnlJSHRjYmlBZ1kyOXVjM1J5ZFdOMGIzSW9kWE5sY2l3Z2NHRnVkSEo1TENCcGJtZHlaV1JwWlc1MGMwUmhkR0VwSUh0Y2JpQWdJQ0IwYUdsekxtbGtJRDBnZFhObGNpNXBaRHRjYmlBZ0lDQjBhR2x6TG01aGJXVWdQU0IxYzJWeUxtNWhiV1U3WEc0Z0lDQWdkR2hwY3k1d1lXNTBjbmtnUFNCd1lXNTBjbms3WEc0Z0lDQWdkR2hwY3k1bVlYWnZjbWwwWlZKbFkybHdaWE1nUFNCYlhUdGNiaUFnSUNCMGFHbHpMbkpsWTJsd1pYTlViME52YjJzZ1BTQmJYVHRjYmlBZ0lDQjBhR2x6TG1sdVozSmxaR2xsYm5SelJHRjBZU0E5SUdsdVozSmxaR2xsYm5SelJHRjBZVHRjYmlBZ2ZWeHVYRzRnSUdGa1pGUnZSbUYyYjNKcGRHVnpLSEpsWTJsd1pTa2dlMXh1SUNBZ0lHbG1JQ2doZEdocGN5NW1ZWFp2Y21sMFpWSmxZMmx3WlhNdWFXNWpiSFZrWlhNb2NtVmphWEJsS1NrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVtWVhadmNtbDBaVkpsWTJsd1pYTXVjSFZ6YUNoeVpXTnBjR1VwTzF4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUdGa1pGUnZVbVZqYVhCbGMxUnZRMjl2YXloeVpXTnBjR1VwSUh0Y2JpQWdJQ0JwWmlBb0lYUm9hWE11Y21WamFYQmxjMVJ2UTI5dmF5NXBibU5zZFdSbGN5aHlaV05wY0dVcEtTQjdYRzRnSUNBZ0lDQjBhR2x6TG5KbFkybHdaWE5VYjBOdmIyc3VjSFZ6YUNoeVpXTnBjR1VwTzF4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUhKbGJXOTJaVVp5YjIxU1pXTnBjR1Z6Vkc5RGIyOXJLSEpsWTJsd1pTa2dlMXh1SUNBZ0lHTnZibk4wSUdrZ1BTQjBhR2x6TG5KbFkybHdaWE5VYjBOdmIyc3VhVzVrWlhoUFppaHlaV05wY0dVcE8xeHVJQ0FnSUhSb2FYTXVjbVZqYVhCbGMxUnZRMjl2YXk1emNHeHBZMlVvYVN3Z01TazdYRzRnSUgxY2JseHVJQ0J5WlcxdmRtVlFZVzUwY25sSmJtZHlhV1JwWlc1MGN5aHlaV05wY0dVcElIdGNiaUFnSUNCeVpXTnBjR1V1YVc1bmNtVmthV1Z1ZEhNdVptOXlSV0ZqYUNnb2FYUmxiU2tnUFQ0Z2UxeHVJQ0FnSUNBZ1ptVjBZMmdvSjJoMGRIQnpPaTh2Wm1VdFlYQndjeTVvWlhKdmEzVmhjSEF1WTI5dEwyRndhUzkyTVM5M2FHRjBjeTFqYjI5cmFXNHZNVGt4TVM5MWMyVnljeTkzWTFWelpYSnpSR0YwWVNjc0lIdGNiaUFnSUNBZ0lDQWdiV1YwYUc5a09pQW5VRTlUVkNjc1hHNGdJQ0FnSUNBZ0lHaGxZV1JsY25NNklIdGNiaUFnSUNBZ0lDQWdJQ0FuUTI5dWRHVnVkQzFVZVhCbEp6b2dKMkZ3Y0d4cFkyRjBhVzl1TDJwemIyNG5YRzRnSUNBZ0lDQWdJSDBzWEc0Z0lDQWdJQ0FnSUdKdlpIazZJRXBUVDA0dWMzUnlhVzVuYVdaNUtIdGNiaUFnSUNBZ0lDQWdJQ0JjSW5WelpYSkpSRndpT2lCMGFHbHpMbWxrTEZ4dUlDQWdJQ0FnSUNBZ0lGd2lhVzVuY21Wa2FXVnVkRWxFWENJNklHbDBaVzB1YVdRc1hHNGdJQ0FnSUNBZ0lDQWdYQ0pwYm1keVpXUnBaVzUwVFc5a2FXWnBZMkYwYVc5dVhDSTZJQzBvYVhSbGJTNXhkV0Z1ZEdsMGVTNWhiVzkxYm5RcFhHNGdJQ0FnSUNBZ0lIMHBYRzRnSUNBZ0lDQjlLVnh1SUNBZ0lDQWdJQ0F1ZEdobGJpaHlaWE53YjI1elpTQTlQaUJ5WlhOd2IyNXpaUzVxYzI5dUtDa3BYRzRnSUNBZ0lDQWdJQzUwYUdWdUtIUm9hWE11ZFhCa1lYUmxWWE5sY2xCaGJuUnllU2dwS1Z4dUlDQWdJQ0FnSUNBdVkyRjBZMmdvWlhKeWIzSWdQVDRnWTI5dWMyOXNaUzVzYjJjb1pYSnliM0lwS1R0Y2JpQWdJQ0FnSUhObGRGUnBiV1Z2ZFhRb2RHaHBjeTUxY0dSaGRHVlZjMlZ5VUdGdWRISjVLQ2tzSURRd01EQXBYRzRnSUNBZ2ZTazdYRzVjYmlBZ2ZWeHVYRzRnSUdGa1pFNWxaV1JsWkZCaGJuUnllVWx1WjNKcFpHbGxiblJ6S0hKbFkybHdaU2tnZTF4dUlDQWdJSFJvYVhNdVkyaGxZMnRJYjNkTmRXTm9UVzl5WlNoeVpXTnBjR1VwTG1admNrVmhZMmdvS0dsMFpXMHBJRDArSUh0Y2JpQWdJQ0FnSUdabGRHTm9LQ2RvZEhSd2N6b3ZMMlpsTFdGd2NITXVhR1Z5YjJ0MVlYQndMbU52YlM5aGNHa3ZkakV2ZDJoaGRITXRZMjl2YTJsdUx6RTVNVEV2ZFhObGNuTXZkMk5WYzJWeWMwUmhkR0VuTENCN1hHNGdJQ0FnSUNBZ0lHMWxkR2h2WkRvZ0oxQlBVMVFuTEZ4dUlDQWdJQ0FnSUNCb1pXRmtaWEp6T2lCN1hHNGdJQ0FnSUNBZ0lDQWdKME52Ym5SbGJuUXRWSGx3WlNjNklDZGhjSEJzYVdOaGRHbHZiaTlxYzI5dUoxeHVJQ0FnSUNBZ0lDQjlMRnh1SUNBZ0lDQWdJQ0JpYjJSNU9pQktVMDlPTG5OMGNtbHVaMmxtZVNoN1hHNGdJQ0FnSUNBZ0lDQWdYQ0oxYzJWeVNVUmNJam9nZEdocGN5NXBaQ3hjYmlBZ0lDQWdJQ0FnSUNCY0ltbHVaM0psWkdsbGJuUkpSRndpT2lCcGRHVnRMbWxrTEZ4dUlDQWdJQ0FnSUNBZ0lGd2lhVzVuY21Wa2FXVnVkRTF2WkdsbWFXTmhkR2x2Ymx3aU9pQnBkR1Z0TG5GMVlXNTBhWFI1VG1WbFpHVmtYRzRnSUNBZ0lDQWdJSDBwWEc0Z0lDQWdJQ0I5S1Z4dUlDQWdJQ0FnSUNBdWRHaGxiaWh5WlhOd2IyNXpaU0E5UGlCeVpYTndiMjV6WlM1cWMyOXVLQ2twWEc0Z0lDQWdJQ0FnSUM1MGFHVnVLSFJvYVhNdWRYQmtZWFJsVlhObGNsQmhiblJ5ZVNncEtWeHVJQ0FnSUNBZ0lDQXVZMkYwWTJnb1pYSnliM0lnUFQ0Z1kyOXVjMjlzWlM1c2IyY29aWEp5YjNJcEtUdGNiaUFnSUNCOUtUdGNiaUFnZlZ4dVhHNGdJSFZ3WkdGMFpWVnpaWEpRWVc1MGNua29LU0I3WEc0Z0lDQWdabVYwWTJnb0oyaDBkSEJ6T2k4dlptVXRZWEJ3Y3k1b1pYSnZhM1ZoY0hBdVkyOXRMMkZ3YVM5Mk1TOTNhR0YwY3kxamIyOXJhVzR2TVRreE1TOTFjMlZ5Y3k5M1kxVnpaWEp6UkdGMFlTY3BYRzRnSUNBZ0lDQXVkR2hsYmloeVpYTndiMjV6WlNBOVBpQnlaWE53YjI1elpTNXFjMjl1S0NrcFhHNGdJQ0FnSUNBdWRHaGxiaWh5WlhOd2IyNXpaU0E5UGlCN1hHNGdJQ0FnSUNBZ0lHeGxkQ0J3WVc1MGNua2dQU0J1WlhjZ1VHRnVkSEo1S0hKbGMzQnZibk5sTG5kalZYTmxjbk5FWVhSaFczUm9hWE11YVdRZ0xTQXhYUzV3WVc1MGNua3BYRzRnSUNBZ0lDQWdJSFJvYVhNdWNHRnVkSEo1SUQwZ2NHRnVkSEo1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjR0Z1ZEhKNUxtTnZiWEJwYkdWUVlXNTBjbmtvZEdocGN5NXBibWR5WldScFpXNTBjMFJoZEdFcFhHNGdJQ0FnSUNCOUtWeHVJQ0FnSUNBZ0xtTmhkR05vS0dWeWNtOXlJRDArSUdOdmJuTnZiR1V1Ykc5bktHVnljbTl5S1NsY2JpQWdmVnh1WEc0Z0lISmxiVzkyWlVaeWIyMUdZWFp2Y21sMFpYTW9jbVZqYVhCbEtTQjdYRzRnSUNBZ1kyOXVjM1FnYVNBOUlIUm9hWE11Wm1GMmIzSnBkR1ZTWldOcGNHVnpMbWx1WkdWNFQyWW9jbVZqYVhCbEtUdGNiaUFnSUNCMGFHbHpMbVpoZG05eWFYUmxVbVZqYVhCbGN5NXpjR3hwWTJVb2FTd2dNU2s3WEc0Z0lIMWNibHh1SUNCbWFXeDBaWEpHWVhadmNtbDBaWE1vZEdGbktTQjdYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTXVabUYyYjNKcGRHVlNaV05wY0dWekxtWnBiSFJsY2loeVpXTnBjR1VnUFQ0Z2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUhKbFkybHdaUzUwWVdkekxtbHVZMngxWkdWektIUmhaeWs3WEc0Z0lDQWdmU2s3WEc0Z0lIMWNibHh1SUNCbWFXNWtSbUYyYjNKcGRHVnpLSE4wY21kVWIxTnlZMmdwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1bVlYWnZjbWwwWlZKbFkybHdaWE11Wm1sc2RHVnlLSEpsWTJsd1pTQTlQaUI3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdjbVZqYVhCbExtNWhiV1V1YVc1amJIVmtaWE1vYzNSeVoxUnZVM0pqYUNrZ2ZIeGNiaUFnSUNBZ0lDQWdjbVZqYVhCbExtbHVaM0psWkdsbGJuUnpMbVpwYm1Rb2FXNW5jbVZrYVdWdWRDQTlQaUI3WEc0Z0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdsdVozSmxaR2xsYm5RdWJtRnRaUzVwYm1Oc2RXUmxjeWh6ZEhKblZHOVRjbU5vS1Z4dUlDQWdJQ0FnSUNCOUtUdGNiaUFnSUNCOUtUdGNiaUFnZlZ4dVhHNGdJR1pwYm1STmFYTnphVzVuU1c1bmNtVmthV1Z1ZEhNb2NtVmphWEJsS1NCN1hHNGdJQ0FnY21WMGRYSnVJSEpsWTJsd1pTNXBibWR5WldScFpXNTBjeTV5WldSMVkyVW9LRzV2ZEZCeVpYTmxiblFzSUdsdVozSmxaR2xsYm5RcElEMCtJSHRjYmlBZ0lDQWdJR2xtSUNnaGRHaHBjeTV3WVc1MGNua3VkWE5sY2tsdVozSmxaR2xsYm5SelcybHVaM0psWkdsbGJuUXVhV1JkSUh4OElHbHVaM0psWkdsbGJuUXVjWFZoYm5ScGRIa3VZVzF2ZFc1MElENGdkR2hwY3k1d1lXNTBjbmt1ZFhObGNrbHVaM0psWkdsbGJuUnpXMmx1WjNKbFpHbGxiblF1YVdSZEtTQjdYRzRnSUNBZ0lDQWdJRzV2ZEZCeVpYTmxiblF1Y0hWemFDaHBibWR5WldScFpXNTBLVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQWdJSEpsZEhWeWJpQnViM1JRY21WelpXNTBPMXh1SUNBZ0lIMHNJRnRkS1R0Y2JpQWdmVnh1WEc0Z0lHTm9aV05yVUdGdWRISjVTVzVuY21Wa2FXVnVkSE1vY21WamFYQmxLU0I3WEc0Z0lDQWdkR2hwY3k1d1lXNTBjbmt1WTI5dGNHbHNaVkJoYm5SeWVTaDBhR2x6TG1sdVozSmxaR2xsYm5SelJHRjBZU2s3WEc0Z0lDQWdiR1YwSUcxcGMzTnBibWRKYm1keVpXUnBaVzUwY3lBOUlIUm9hWE11Wm1sdVpFMXBjM05wYm1kSmJtZHlaV1JwWlc1MGN5aHlaV05wY0dVcFhHNGdJQ0FnYVdZZ0tHMXBjM05wYm1kSmJtZHlaV1JwWlc1MGN5NXNaVzVuZEdnZ1BUMDlJREFwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUFuV1c5MUlHaGhkbVVnZEdobElHbHVaM0psWkdsbGJuUnpJU2M3WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lHeGxkQ0J0YVhOemFXNW5JRDBnYldsemMybHVaMGx1WjNKbFpHbGxiblJ6TG14bGJtZDBhRHRjYmlBZ0lDQWdJSEpsZEhWeWJpQmdXVzkxSUhOMGFXeHNJRzVsWldRZ0pIdHRhWE56YVc1bmZTQnRiM0psSUdsdVozSmxaR2xsYm5SekxtQTdYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdZMmhsWTJ0SWIzZE5kV05vVFc5eVpTaHlaV05wY0dVcElIdGNiaUFnSUNCc1pYUWdiV2x6YzJsdVowbHVaM0psWkdsbGJuUnpJRDBnZEdocGN5NW1hVzVrVFdsemMybHVaMGx1WjNKbFpHbGxiblJ6S0hKbFkybHdaU2s3WEc0Z0lDQWdiR1YwSUdScFptWmxjbVZ1WTJVZ1BTQnRhWE56YVc1blNXNW5jbVZrYVdWdWRITXViV0Z3S0dsdVozSmxaR2xsYm5RZ1BUNGdlMXh1SUNBZ0lDQWdiR1YwSUc1aGJXVWdQU0J5WldOcGNHVXVhVzVuY21Wa2FXVnVkSE5FWVhSaExtWnBibVFvYVhSbGJTQTlQaUJwZEdWdExtbGtJRDA5UFNCcGJtZHlaV1JwWlc1MExtbGtLVHRjYmlBZ0lDQWdJR3hsZENCdVpXVmtaV1JKYm1jZ1BTQjdYRzRnSUNBZ0lDQWdJR2xrT2lCcGJtZHlaV1JwWlc1MExtbGtMRnh1SUNBZ0lDQWdJQ0JqYjNOME9pQXdMRnh1SUNBZ0lDQWdJQ0J1WVcxbE9pQnVZVzFsTG01aGJXVXNYRzRnSUNBZ0lDQWdJSFZ1YVhRNklHbHVaM0psWkdsbGJuUXVjWFZoYm5ScGRIa3VkVzVwZEN4Y2JpQWdJQ0FnSUNBZ2NYVmhiblJwZEhsT1pXVmtaV1E2SUhCaGNuTmxSbXh2WVhRb2FXNW5jbVZrYVdWdWRDNXhkV0Z1ZEdsMGVTNWhiVzkxYm5RdWRHOUdhWGhsWkNneUtTbGNiaUFnSUNBZ0lIMWNiaUFnSUNBZ0lHbG1JQ2gwYUdsekxuQmhiblJ5ZVM1MWMyVnlTVzVuY21Wa2FXVnVkSE5iYVc1bmNtVmthV1Z1ZEM1cFpGMHBJSHRjYmlBZ0lDQWdJQ0FnYm1WbFpHVmtTVzVuTG5GMVlXNTBhWFI1VG1WbFpHVmtJRDBnY0dGeWMyVkdiRzloZENocGJtZHlaV1JwWlc1MExuRjFZVzUwYVhSNUxtRnRiM1Z1ZENBdElIUm9hWE11Y0dGdWRISjVMblZ6WlhKSmJtZHlaV1JwWlc1MGMxdHBibWR5WldScFpXNTBMbWxrWFM1MGIwWnBlR1ZrS0RJcEtWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2JHVjBJR2x1WjNKbFpHbGxiblJKZEdWdElEMGdjbVZqYVhCbExtbHVaM0psWkdsbGJuUnpSR0YwWVM1bWFXNWtLR2wwWlcwZ1BUNGdhVzVuY21Wa2FXVnVkQzVwWkNBOVBUMGdhWFJsYlM1cFpDbGNiaUFnSUNBZ0lHNWxaV1JsWkVsdVp5NWpiM04wSUQwZ0tHNWxaV1JsWkVsdVp5NXhkV0Z1ZEdsMGVVNWxaV1JsWkNBcUlHbHVaM0psWkdsbGJuUkpkR1Z0TG1WemRHbHRZWFJsWkVOdmMzUkpia05sYm5SektTQXZJREV3TUR0Y2JpQWdJQ0FnSUhKbGRIVnliaUJ1WldWa1pXUkpibWM3WEc0Z0lDQWdmU2xjYmlBZ0lDQnlaWFIxY200Z1pHbG1abVZ5Wlc1alpUdGNiaUFnZlZ4dWZWeHVYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRlZ6WlhJN1hHNGlYU3dpYzI5MWNtTmxVbTl2ZENJNklpSjkiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3NTE1QztcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3OyB9XFxuXFxuYm9keSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiBhdXRvOyB9XFxuXFxubWFpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc1MTVDO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG5cXG4ubWFpbi1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFQkY1RUU7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwOyB9XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyNTUlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIHdpZHRoOiAzMCU7IH1cXG5cXG5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDEwcHg7IH1cXG5cXG4ubmF2QnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMTMwJTtcXG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJGNUVFO1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDAwO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzAwMDtcXG4gIG1hcmdpbjogMSUgMjBweCAxJSAxJTsgfVxcbiAgLm5hdkJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZmYyZGE7IH1cXG4gIC5uYXZCdXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0MzQzJDNjsgfVxcblxcbi5sb3dlci1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7IH1cXG5cXG4uZ3JlZXRpbmcge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgY29sb3I6ICNFQkY1RUU7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4OyB9XFxuXFxuLnNlYXJjaC1hcmVhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdzsgfVxcblxcbi5zZWFyY2gtYmFyIHtcXG4gIG1heC1oZWlnaHQ6IDZ2aDtcXG4gIG1hcmdpbjogNXB4O1xcbiAgcGFkZGluZzogM3B4OyB9XFxuXFxuLnNlYXJjaC1pbWFnZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJGNUVFO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gIHdpZHRoOiAyMCU7XFxuICBtYXJnaW4tcmlnaHQ6IDA7IH1cXG4gIC5zZWFyY2gtaW1hZ2U6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZmMmRhOyB9XFxuICAuc2VhcmNoLWltYWdlOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDM0MyQzY7IH1cXG5cXG4uc2VhcmNoLWlucHV0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBtaW4td2lkdGg6IDkwJTsgfVxcblxcbi5hbGwtY2FyZHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtZ2FwOiAzMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICB3aWR0aDogOTUuNXZ3OyB9XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuaW1nIHtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5jYXJkLWJ1dHRvbiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgaGVpZ2h0OiAyN3B4O1xcbiAgbWFyZ2luOiAzcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gIC5jYXJkLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZmYyZGE7IH1cXG4gIC5jYXJkLWJ1dHRvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzNDMkM2OyB9XFxuXFxuLmFkZC1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VCRjVFRTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTIlOyB9XFxuXFxuLmFkZCB7XFxuICB3aWR0aDogOTAlOyB9XFxuXFxuLmZhdm9yaXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFQkY1RUU7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgd2lkdGg6IDEzJTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzE0OS8xNDkyMjIuc3ZnXFxcIik7IH1cXG5cXG4uY2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDdGMkZFO1xcbiAgYm9yZGVyOiAzcHggc29saWQgIzAwMDtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLmNhcmQtaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFQkY1RUU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XFxuXFxuLmFsbCB7XFxuICBncmlkLWdhcDogMDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7IH1cXG5cXG4uYWxsLXJlY2lwZS1pbmZvLFxcbm9sIHtcXG4gIGZvbnQtc2l6ZTogMTUwJTtcXG4gIGNvbG9yOiAjRUJGNUVFO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG5oMyB7XFxuICBmb250LXNpemU6IDE1MCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJGNUVFO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7IH1cXG5cXG4ucmVjaXBlLW5hbWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VCRjVFRTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZvbnQtc2l6ZTogMTUwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5jYXJkLXBpY3R1cmUge1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIHdpZHRoOiA5NCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgbWFyZ2luOiAxMHB4IDMlIDhweCAyLjYlOyB9XFxuICAuY2FyZC1waWN0dXJlOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMC43OyB9XFxuICAuY2FyZC1waWN0dXJlOmFjdGl2ZSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7IH1cXG5cXG4ud3JhcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgYm9yZGVyOiAwOyB9XFxuXFxuLmZhdm9yaXRlLWFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xNDgvMTQ4ODQxLnN2Z1xcXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgfVxcblxcbi5kaXNwbGF5LXJlY2lwZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1nYXA6IDdweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC42ZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyO1xcbiAgbWFyZ2luOiAxNXB4OyB9XFxuXFxuLmRpc3BsYXktcmVjaXBlLWluZm8ge1xcbiAgZ3JpZC1jb2x1bW46IDE7XFxuICBncmlkLXJvdzogMC41OyB9XFxuXFxuLnJlY2lwZS1pbmdyZWRpZW50cyB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbiAgZ3JpZC1yb3c6IDE7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgY29sb3I6ICNFQkY1RUU7IH1cXG5cXG4ucmVjaXBlLWluZ3JlZGllbnRzLXRpdGxlIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBmb250LXNpemU6IDIwcHg7IH1cXG5cXG4ucmVjaXBlLWluc3RydWN0aW9ucyB7XFxuICBncmlkLWNvbHVtbjogMS9zcGFuIDI7XFxuICBncmlkLXJvdzogMjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiAjRUJGNUVFO1xcbiAgbWF4LXdpZHRoOiA5MHZ3O1xcbiAgbWFyZ2luLXRvcDogMTAwcHg7IH1cXG5cXG4udG8tY29vay1ncmVldGluZyB7XFxuICBjb2xvcjogI0VCRjVFRTsgfVxcblxcbi5jbG9zZS1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VCRjVFRTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICB3aWR0aDogMTMlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL3d3dy5mbGF0aWNvbi5jb20vc3ZnL3N0YXRpYy9pY29ucy9zdmcvNDQ2LzQ0NjA5MS5zdmdcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuLmluZy1jb3N0LFxcbi5uZWVkZWQtaW5ncyxcXG4ucGFudHJ5LWJ1dHRvbnMge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7IH1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogODI1cHgpIHtcXG4gIG1haW4ge1xcbiAgICB3aWR0aDogOTUlOyB9XFxuICAuYWxsLWNhcmRzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1nYXA6IDMwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgIHBhZGRpbmc6IDMwcHggMCAzMHB4IDMwcHg7XFxuICAgIHdpZHRoOiA5NS41dnc7IH1cXG4gIC5kaXNwbGF5LXJlY2lwZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAucmVjaXBlLWluc3RydWN0aW9ucyB7XFxuICAgIG1hcmdpbi10b3A6IDA7IH0gfVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmFsbC1jYXJkcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtZ2FwOiAzMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBwYWRkaW5nOiAzMHB4IDAgMzBweCAzMHB4O1xcbiAgICB3aWR0aDogOTUuNXZ3OyB9XFxuICAuZGlzcGxheS1yZWNpcGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgLnNlYXJjaC1pbWFnZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xcbiAgLmxvd2VyLWhlYWRlcixcXG4gIC5tYWluLWhlYWRlciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gIC5zZWFyY2gtaW5wdXQge1xcbiAgICBtaW4td2lkdGg6IDgwdnc7IH1cXG4gIC5hbGwtY2FyZHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWdhcDogMzBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcXG4gICAgcGFkZGluZzogMzBweCAwIDMwcHggMzBweDtcXG4gICAgd2lkdGg6IDk1LjV2dzsgfVxcbiAgLmNhcmQtYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiBhdXRvOyB9XFxuICAudG8tY29vayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gIC5jYXJkIHtcXG4gICAgbWF4LXdpZHRoOiA5NSU7IH0gfVxcblwiLCBcIlwiXSk7XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiAnQG1lZGlhICcgKyBpdGVtWzJdICsgJ3snICsgY29udGVudCArICd9JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSAnKCcgKyBpdGVtWzJdICsgJykgYW5kICgnICsgbWVkaWFRdWVyeSArICcpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJztcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcbiAgcmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn0iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJjbGFzcyBDb29rYm9vayB7XG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICB0aGlzLnJlY2lwZXMgPSBkYXRhO1xuICB9XG5cbiAgZmluZFJlY2lwZXMoc2VhcmNoVGV4dCkge1xuICAgIHJldHVybiB0aGlzLnJlY2lwZXMuZmlsdGVyKChyZWNpcGUpPT57XG4gICAgICBsZXQgaW5ncmVkaWVudE5hbWVzID0gcmVjaXBlLmluZ3JlZGllbnRzLm1hcCgoaW5ncmVkaWVudCk9PntcbiAgICAgICAgcmV0dXJuIGluZ3JlZGllbnQubmFtZVxuICAgICAgfSlcbiAgICAgIHJldHVybiByZWNpcGUubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRleHQpIHx8XG4gICAgICByZWNpcGUudGFncy5pbmNsdWRlcyhzZWFyY2hUZXh0KSB8fFxuICAgICAgaW5ncmVkaWVudE5hbWVzLmluY2x1ZGVzKHNlYXJjaFRleHQpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb29rYm9vaztcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlcy5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZXMuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBQYW50cnkgZnJvbSAnLi9wYW50cnknO1xuaW1wb3J0IFJlY2lwZSBmcm9tICcuL3JlY2lwZSc7XG5pbXBvcnQgVXNlciBmcm9tICcuL3VzZXInO1xuaW1wb3J0IENvb2tib29rIGZyb20gJy4vY29va2Jvb2snO1xuXG5cbmxldCBkb21VcGRhdGVzID0ge1xuXG4gIHVzZXJzOiBbe31dLFxuICByZWNpcGVEYXRhOiBbe31dLFxuICBpbmdyZWRpZW50c0RhdGE6IFt7fV0sXG4gIHVzZXI6IHt9LFxuICBjb29rYm9vazogbnVsbCxcblxuICBnZXRXaGF0c0Nvb2tpbmdEYXRhOiAoKSA9PiB7XG4gICAgUHJvbWlzZS5hbGwoW1xuICAgICAgZmV0Y2goJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS93aGF0cy1jb29raW4vMTkxMS91c2Vycy93Y1VzZXJzRGF0YScpLFxuICAgICAgZmV0Y2goJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS93aGF0cy1jb29raW4vMTkxMS9yZWNpcGVzL3JlY2lwZURhdGEnKSxcbiAgICAgIGZldGNoKCdodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvd2hhdHMtY29va2luLzE5MTEvaW5ncmVkaWVudHMvaW5ncmVkaWVudHNEYXRhJylcbiAgICBdKVxuICAgICAgLnRoZW4ocmVzcG9uc2VzID0+IFByb21pc2UuYWxsKHJlc3BvbnNlcy5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKSkpXG4gICAgICAudGhlbihyZXNwb25zZXMgPT4ge1xuICAgICAgICBkb21VcGRhdGVzLnVzZXJzID0gcmVzcG9uc2VzWzBdLndjVXNlcnNEYXRhO1xuICAgICAgICBkb21VcGRhdGVzLnJlY2lwZURhdGEgPSByZXNwb25zZXNbMV0ucmVjaXBlRGF0YTtcbiAgICAgICAgZG9tVXBkYXRlcy5pbmdyZWRpZW50c0RhdGEgPSByZXNwb25zZXNbMl0uaW5ncmVkaWVudHNEYXRhO1xuICAgICAgICBkb21VcGRhdGVzLmNyZWF0ZURhdGFNb2RlbCgpO1xuICAgICAgICBkb21VcGRhdGVzLnVwZGF0ZURpc3BsYXkoKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxuICB9LFxuXG4gIGNyZWF0ZURhdGFNb2RlbDogKCkgPT4ge1xuICAgIGxldCBwYW50cnkgPSBuZXcgUGFudHJ5KGRvbVVwZGF0ZXMudXNlcnNbMF0ucGFudHJ5KTtcbiAgICBkb21VcGRhdGVzLnVzZXIgPSBuZXcgVXNlcihkb21VcGRhdGVzLnVzZXJzWzBdLCBwYW50cnksIGRvbVVwZGF0ZXMuaW5ncmVkaWVudHNEYXRhKTtcbiAgICBsZXQgcmVjaXBlRGVjayA9IGRvbVVwZGF0ZXMucmVjaXBlRGF0YS5tYXAocmVjaXBlID0+IHtcbiAgICAgIHJldHVybiByZWNpcGUgPSBuZXcgUmVjaXBlKHJlY2lwZSwgZG9tVXBkYXRlcy5pbmdyZWRpZW50c0RhdGEpO1xuICAgIH0pXG4gICAgZG9tVXBkYXRlcy5jb29rYm9vayA9IG5ldyBDb29rYm9vayhyZWNpcGVEZWNrKTtcbiAgfSxcblxuICB1cGRhdGVEaXNwbGF5OiAoKSA9PiB7XG4gICAgZG9tVXBkYXRlcy5ncmVldFVzZXIoKTtcbiAgICBkb21VcGRhdGVzLnBvcHVsYXRlQ2FyZHMoZG9tVXBkYXRlcy5jb29rYm9vay5yZWNpcGVzKTtcbiAgfSxcblxuICBncmVldFVzZXI6ICgpID0+IHtcbiAgICBjb25zdCB3ZWxjb21lTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmVldGluZycpO1xuICAgIHdlbGNvbWVNZXNzYWdlLmlubmVyVGV4dCA9IGBXZWxjb21lICR7ZG9tVXBkYXRlcy51c2VyLm5hbWV9IWA7XG4gIH0sXG5cbiAgcG9wdWxhdGVDYXJkczogKHJlY2lwZXMpID0+IHtcbiAgICBjb25zdCBjYXJkQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLXNlY3Rpb24nKTtcbiAgICBjYXJkQXJlYS5jbGFzc0xpc3QgPSAnYWxsLWNhcmRzJztcbiAgICBjYXJkQXJlYS5pbm5lckhUTUwgPSAnJztcbiAgICByZWNpcGVzLmZvckVhY2gocmVjaXBlID0+IHtcbiAgICAgIGNhcmRBcmVhLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGRvbVVwZGF0ZXMuY29uc3RydWN0Q2FyZChyZWNpcGUpKVxuICAgIH0pO1xuICB9LFxuXG4gIGNvbnN0cnVjdENhcmQ6IChyZWNpcGUpID0+IHtcbiAgICBsZXQgY2xhc3NMaXN0XG4gICAgaWYgKGRvbVVwZGF0ZXMudXNlci5mYXZvcml0ZVJlY2lwZXMuaW5jbHVkZXMocmVjaXBlKSkge1xuICAgICAgY2xhc3NMaXN0ID0gJ2Zhdm9yaXRlIGNhcmQtYnV0dG9uIGZhdm9yaXRlLWFjdGl2ZSdcbiAgICB9IGVsc2Uge1xuICAgICAgY2xhc3NMaXN0ID0gJ2Zhdm9yaXRlIGNhcmQtYnV0dG9uJ1xuICAgIH1cbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9J2NhcmQgJHtyZWNpcGUuaWR9Jz5cbiAgICA8aGVhZGVyIGNsYXNzPSdjYXJkLWhlYWRlciAke3JlY2lwZS5pZH0nPlxuICAgICAgPGxhYmVsIGZvcj0nYWRkLWJ1dHRvbicgY2xhc3M9J2hpZGRlbic+Q2xpY2sgdG8gYWRkIHJlY2lwZTwvbGFiZWw+XG4gICAgICA8YnV0dG9uIGFyaWEtbGFiZWw9J2FkZC1idXR0b24nIGNsYXNzPSdhZGQtYnV0dG9uIGNhcmQtYnV0dG9uICR7cmVjaXBlLmlkfSc+XG4gICAgICAgIDxpbWcgY2xhc3M9J2FkZCAke3JlY2lwZS5pZH0gYWRkLWJ1dHRvbicgc3JjPSdodHRwczovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMzIvMzIzMzkuc3ZnJyBhbHQ9J0FkZCB0b1xuICAgICAgICByZWNpcGVzIHRvIGNvb2snPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8bGFiZWwgZm9yPSdmYXZvcml0ZS1idXR0b24nIGNsYXNzPSdoaWRkZW4nPkNsaWNrIHRvIGZhdm9yaXRlIHJlY2lwZTwvbGFiZWw+XG4gICAgICA8YnV0dG9uIGFyaWEtbGFiZWw9J2Zhdm9yaXRlLWJ1dHRvbicgY2xhc3M9JyR7Y2xhc3NMaXN0fSBmYXZvcml0ZSR7cmVjaXBlLmlkfSAke3JlY2lwZS5pZH0nPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9oZWFkZXI+XG4gICAgPHNwYW4gY2xhc3M9J3JlY2lwZS1uYW1lICR7cmVjaXBlLmlkfSc+JHtyZWNpcGUubmFtZX08L3NwYW4+XG4gICAgICA8YnV0dG9uIGFyaWEtbGFiZWw9J3JlY2lwZS1pbmZvJyBjbGFzcz0nY2FyZC1waWN0dXJlICR7cmVjaXBlLmlkfSB3cmFwJz5cbiAgICAgICAgPGltZyB0YWJpbmRleD0nMCcgY2xhc3M9J2NhcmQtcGljdHVyZSAke3JlY2lwZS5pZH0nc3JjPScke3JlY2lwZS5pbWFnZX0nIGFsdD0nRm9vZCBmcm9tIHJlY2lwZSc+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5gXG4gIH0sXG5cbiAgZmluZFNwZWNpZmljUmVjaXBlOiAoZXZlbnQpID0+IHtcbiAgICByZXR1cm4gZG9tVXBkYXRlcy5jb29rYm9vay5yZWNpcGVzLmZpbmQocmVjaXBlID0+IHtcbiAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKHJlY2lwZS5pZCkpIHtcbiAgICAgICAgcmV0dXJuIHJlY2lwZTtcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIGZhdm9yaXRlQ2FyZDogKGV2ZW50KSA9PiB7XG4gICAgY29uc3Qgc2hvd0Zhdm9yaXRlc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aWV3LWZhdm9yaXRlcycpO1xuICAgIGxldCBzcGVjaWZpY1JlY2lwZSA9IGRvbVVwZGF0ZXMuZmluZFNwZWNpZmljUmVjaXBlKGV2ZW50KTtcbiAgICBpZiAoIWV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Zhdm9yaXRlLWFjdGl2ZScpKSB7XG4gICAgICBzaG93RmF2b3JpdGVzQnV0dG9uLmlubmVySFRNTCA9ICdWaWV3IEZhdm9yaXRlcyc7XG4gICAgICBkb21VcGRhdGVzLnVzZXIuYWRkVG9GYXZvcml0ZXMoc3BlY2lmaWNSZWNpcGUpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZmF2b3JpdGUtYWN0aXZlJykpIHtcbiAgICAgIGRvbVVwZGF0ZXMudXNlci5yZW1vdmVGcm9tRmF2b3JpdGVzKHNwZWNpZmljUmVjaXBlKVxuICAgIH1cbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnZmF2b3JpdGUtYWN0aXZlJyk7XG4gIH0sXG5cbiAgdmlld0Zhdm9yaXRlczogKCkgPT4ge1xuICAgIGNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYXJlYScpO1xuICAgIHNlYXJjaEJhci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgIGNvbnN0IHNob3dGYXZvcml0ZXNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmlldy1mYXZvcml0ZXMnKTtcbiAgICBjb25zdCBjYXJkQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLXNlY3Rpb24nKTtcbiAgICBjYXJkQXJlYS5jbGFzc0xpc3QgPSAnYWxsLWNhcmRzJztcbiAgICBpZiAoIWRvbVVwZGF0ZXMudXNlci5mYXZvcml0ZVJlY2lwZXMubGVuZ3RoKSB7XG4gICAgICBzaG93RmF2b3JpdGVzQnV0dG9uLmlubmVySFRNTCA9ICdZb3UgaGF2ZSBubyBmYXZvcml0ZXMhJztcbiAgICAgIGRvbVVwZGF0ZXMucG9wdWxhdGVDYXJkcyhkb21VcGRhdGVzLmNvb2tib29rLnJlY2lwZXMpO1xuICAgICAgcmV0dXJuXG4gICAgfSBlbHNlIHtcbiAgICAgIHNob3dGYXZvcml0ZXNCdXR0b24uaW5uZXJIVE1MID0gJ1JlZnJlc2ggRmF2b3JpdGVzJ1xuICAgICAgY2FyZEFyZWEuaW5uZXJIVE1MID0gJyc7XG4gICAgICBkb21VcGRhdGVzLnVzZXIuZmF2b3JpdGVSZWNpcGVzLmZvckVhY2gocmVjaXBlID0+IHtcbiAgICAgICAgY2FyZEFyZWEuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgZG9tVXBkYXRlcy5jb25zdHJ1Y3RDYXJkKHJlY2lwZSkpXG4gICAgICB9KVxuICAgIH1cbiAgfSxcblxuICBhZGRUb1RvQ29vazogKGV2ZW50KSA9PiB7XG4gICAgY29uc3Qgc2hvd1RvQ29va0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1jb29rJyk7XG4gICAgbGV0IHNwZWNpZmljUmVjaXBlID0gZG9tVXBkYXRlcy5maW5kU3BlY2lmaWNSZWNpcGUoZXZlbnQpO1xuICAgIGlmICghZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWRkLWFjdGl2ZScpKSB7XG4gICAgICBzaG93VG9Db29rQnV0dG9uLmlubmVyVGV4dCA9ICdUbyBDb29rJ1xuICAgICAgYWxlcnQoZG9tVXBkYXRlcy51c2VyLmNoZWNrUGFudHJ5SW5ncmVkaWVudHMoc3BlY2lmaWNSZWNpcGUpKTtcbiAgICAgIGRvbVVwZGF0ZXMudXNlci5hZGRUb1JlY2lwZXNUb0Nvb2soc3BlY2lmaWNSZWNpcGUpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWRkLWFjdGl2ZScpKSB7XG4gICAgICBkb21VcGRhdGVzLnVzZXIucmVtb3ZlRnJvbVJlY2lwZXNUb0Nvb2soc3BlY2lmaWNSZWNpcGUpXG4gICAgfVxuICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdhZGQtYWN0aXZlJyk7XG4gIH0sXG5cbiAgZGlzcGxheVRvQ29va0NhcmRzOiAoKSA9PiB7XG4gICAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1hcmVhJyk7XG4gICAgc2VhcmNoQmFyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgY29uc3QgY2FyZEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1zZWN0aW9uJyk7XG4gICAgY2FyZEFyZWEuY2xhc3NMaXN0ID0gJyc7XG4gICAgY2FyZEFyZWEuaW5uZXJIVE1MID1cbiAgICAgIGA8c2VjdGlvbiBjbGFzcz0ndG8tY29vayc+XG4gICAgICAgIDxoMSBjbGFzcz0ndG8tY29vay1ncmVldGluZyc+UmVjaXBlcyBUbyBDb29rPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzcz0nY2FyZC1zZWN0aW9uIGFsbC1jYXJkcyc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPmBcbiAgICBsZXQgY2FyZFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1zZWN0aW9uJylcbiAgICBkb21VcGRhdGVzLnVzZXIucmVjaXBlc1RvQ29vay5mb3JFYWNoKHJlY2lwZSA9PiB7XG4gICAgICBsZXQgdmFsdWVzID0gZG9tVXBkYXRlcy51c2VyLmNoZWNrSG93TXVjaE1vcmUocmVjaXBlKS5tYXAob2JqID0+IHtcbiAgICAgICAgcmV0dXJuIGAke29iai5xdWFudGl0eU5lZWRlZH0gJHtvYmoudW5pdH0gbW9yZSAke29iai5uYW1lfWA7XG4gICAgICB9KTtcbiAgICAgIGxldCBuZWVkZWRDb3N0ID0gZG9tVXBkYXRlcy51c2VyLmNoZWNrSG93TXVjaE1vcmUocmVjaXBlKS5yZWR1Y2UoKHRvdGFsLCBpbmdyZWRpZW50KSA9PiB7XG4gICAgICAgIHJldHVybiB0b3RhbCArPSBpbmdyZWRpZW50LmNvc3Q7XG4gICAgICB9LCAwKTtcbiAgICAgIGNhcmRTZWN0aW9uLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYDxkaXYgY2xhc3M9J2NhcmQgJHtyZWNpcGUuaWR9Jz5cbiAgICA8aGVhZGVyIGNsYXNzPSdjYXJkLWhlYWRlciAke3JlY2lwZS5pZH0nPlxuICAgICAgPGxhYmVsIGZvcj0nY2xvc2UtYnV0dG9uJyBjbGFzcz0naGlkZGVuJz48L2xhYmVsPlxuICAgICAgPGJ1dHRvbiBhcmlhLWxhYmVsPSdjbG9zZS1idXR0b24nIGNsYXNzPSdjbG9zZS1idXR0b24gY2FyZC1idXR0b24gJHtyZWNpcGUuaWR9Jz5cbiAgICAgICAgPGltZyBjbGFzcz0nY2xvc2UtYnV0dG9uICR7cmVjaXBlLmlkfScgc3JjPSdodHRwczovL3d3dy5mbGF0aWNvbi5jb20vc3ZnL3N0YXRpYy9pY29ucy9zdmcvNDQ2LzQ0NjA5MS5zdmcnIGFsdD0ncmVtb3ZlIGZyb20gcmVjaXBlcyB0byBjb29rJz5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGxhYmVsIGZvcj0nZmF2b3JpdGUtYnV0dG9uJyBjbGFzcz0naGlkZGVuJz5DbGljayB0byBmYXZvcml0ZSByZWNpcGU8L2xhYmVsPlxuICAgICAgPGJ1dHRvbiBhcmlhLWxhYmVsPSdmYXZvcml0ZS1idXR0b24nIGNsYXNzPSdmYXZvcml0ZSBjYXJkLWJ1dHRvbiBmYXZvcml0ZSR7cmVjaXBlLmlkfSAke3JlY2lwZS5pZH0nPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9oZWFkZXI+XG4gICAgICA8aDM+JHtyZWNpcGUubmFtZX08L2gzPlxuICAgICAgPGltZyB0YWJpbmRleD0nMCcgY2xhc3M9J2NhcmQtcGljdHVyZSAke3JlY2lwZS5pZH0nXG4gICAgICBzcmM9JyR7cmVjaXBlLmltYWdlfScgYWx0PSdGb29kIGZyb20gcmVjaXBlJz5cbiAgICAgIDxkaXYgY2xhc3MgPSBcInBhbnRyeS1idXR0b25zXCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG5hbWU9XCJBZGQgTmVlZGVkIEluZ3JlZGllbnRzXCIgY2xhc3M9XCJib3VnaHQtaW5ncmVkaWVudHMgYm91Z2h0LWluZ3JlZGllbnRzJHtyZWNpcGUuaWR9ICR7cmVjaXBlLmlkfVwiPkFkZCBOZWVkZWQgSW5ncmVkaWVudHM8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgbmFtZT1cIkhhdmUgQ29va2VkXCIgY2xhc3M9XCJoYXZlLWNvb2tlZCBoYXZlLWNvb2tlZCR7cmVjaXBlLmlkfSAke3JlY2lwZS5pZH1cIj5IYXZlIENvb2tlZDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8cCBjbGFzcz0nbmVlZGVkLWluZ3MnPkluZ3JlZGllbnRzIFN0aWxsIE5lZWRlZDo8L3A+XG4gICAgICA8dWwgPlxuICAgICAgPGxpPiR7dmFsdWVzLmpvaW4oJzwvbGk+PGxpPicpfTwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPHAgY2xhc3M9J2luZy1jb3N0Jz5Db3N0IHRvIFN0aWxsIEdldDokJHtuZWVkZWRDb3N0fTwvcD5cbiAgICA8L2Rpdj5gKTtcbiAgICB9KTtcbiAgfSxcblxuICBzaG93VG9Db29rUmVjaXBlczogKCkgPT4ge1xuICAgIGNvbnN0IHNob3dUb0Nvb2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tY29vaycpO1xuICAgIGlmICghZG9tVXBkYXRlcy51c2VyLnJlY2lwZXNUb0Nvb2subGVuZ3RoKSB7XG4gICAgICBzaG93VG9Db29rQnV0dG9uLmlubmVyVGV4dCA9ICdZb3UgaGF2ZSBubyBzYXZlZCBSZWNpcGVzISc7XG4gICAgICBkb21VcGRhdGVzLnBvcHVsYXRlQ2FyZHMoZG9tVXBkYXRlcy5jb29rYm9vay5yZWNpcGVzKTtcbiAgICAgIHJldHVyblxuICAgIH0gZWxzZSB7XG4gICAgICBkb21VcGRhdGVzLmRpc3BsYXlUb0Nvb2tDYXJkcygpO1xuICAgIH1cbiAgfSxcblxuICByZW1vdmVGcm9tVG9Db29rOiAoKSA9PiB7XG4gICAgbGV0IHNwZWNpZmljUmVjaXBlID0gZG9tVXBkYXRlcy5jb29rYm9vay5yZWNpcGVzLmZpbmQocmVjaXBlID0+IHtcbiAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKHJlY2lwZS5pZCkpIHtcbiAgICAgICAgcmV0dXJuIHJlY2lwZTtcbiAgICAgIH1cbiAgICB9KVxuICAgIGRvbVVwZGF0ZXMudXNlci5yZW1vdmVGcm9tUmVjaXBlc1RvQ29vayhzcGVjaWZpY1JlY2lwZSk7XG4gICAgZG9tVXBkYXRlcy5kaXNwbGF5VG9Db29rQ2FyZHMoKTtcbiAgfSxcblxuICBkaXNwbGF5RGlyZWN0aW9uczogKGV2ZW50KSA9PiB7XG4gICAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1hcmVhJyk7XG4gICAgc2VhcmNoQmFyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgY29uc3QgY2FyZEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1zZWN0aW9uJyk7XG4gICAgY2FyZEFyZWEuY2xhc3NMaXN0ID0gJ3JlY2lwZS1kaXJlY3Rpb25zJztcbiAgICBsZXQgc3BlY2lmaWNSZWNpcGUgPSBkb21VcGRhdGVzLmZpbmRTcGVjaWZpY1JlY2lwZShldmVudCk7XG4gICAgbGV0IGNvc3QgPSBzcGVjaWZpY1JlY2lwZS5jYWxjdWxhdGVDb3N0KCk7XG4gICAgY2FyZEFyZWEuaW5uZXJIVE1MID0gJyc7XG4gICAgbGV0IG5lZWRlZEluZ3JlZGllbnRzID0gW107XG4gICAgc3BlY2lmaWNSZWNpcGUuaW5ncmVkaWVudHMuZm9yRWFjaChpbmdyZWRpZW50ID0+IHtcbiAgICAgIGxldCBuYW1lID0gc3BlY2lmaWNSZWNpcGUuaW5ncmVkaWVudHNEYXRhLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBpbmdyZWRpZW50LmlkKS5uYW1lXG4gICAgICBuZWVkZWRJbmdyZWRpZW50cy5wdXNoKGAke2luZ3JlZGllbnQucXVhbnRpdHkuYW1vdW50LnRvRml4ZWQoMil9ICR7aW5ncmVkaWVudC5xdWFudGl0eS51bml0fSAke25hbWV9YClcbiAgICB9KVxuICAgIGxldCBuZWVkZWRTdGVwcyA9IFtdO1xuICAgIHNwZWNpZmljUmVjaXBlLmluc3RydWN0aW9ucy5mb3JFYWNoKHN0ZXAgPT4ge1xuICAgICAgbmVlZGVkU3RlcHMucHVzaChgJHtzdGVwLm51bWJlcn0uICR7c3RlcC5pbnN0cnVjdGlvbn0gYClcbiAgICB9KVxuICAgIGNhcmRBcmVhLmlubmVySFRNTCA9IGA8c2VjdGlvbiBjbGFzcz0nZGlzcGxheS1yZWNpcGUnPlxuICAgIDxkaXYgY2xhc3M9J2Rpc3BsYXktcmVjaXBlLWluZm8nPlxuICAgICAgPGgzPiR7c3BlY2lmaWNSZWNpcGUubmFtZX08L2gzPlxuICAgICAgPGltZyBjbGFzcz0nY2FyZC1waWN0dXJlJyBzcmM9JyR7c3BlY2lmaWNSZWNpcGUuaW1hZ2V9JyBhbHQ9J1JlY2lwZSBpbWFnZSBmb3IgJHtzcGVjaWZpY1JlY2lwZS5uYW1lfSc+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz0ncmVjaXBlLWluZ3JlZGllbnRzJz5cbiAgICA8aDUgY2xhc3M9J3JlY2lwZS1pbmdyZWRpZW50cy10aXRsZSc+WW91IHdpbGwgbmVlZDogPC9oNT5cbiAgICA8dWw+XG4gICAgPGxpPiR7bmVlZGVkSW5ncmVkaWVudHMuam9pbignPC9saT48bGk+Jyl9PC9saT5cbiAgICA8L3VsPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9J3JlY2lwZS1pbnN0cnVjdGlvbnMnPlxuICAgIDxoNT5JbnN0cnVjdGlvbnM6IDwvaDU+XG4gICAgPHVsIGNsYXNzPSdpbnN0cnVjdGlvbi1saXN0JyBzdHlsZT0nbGlzdC1zdHlsZS10eXBlOm5vbmU7Jz5cbiAgICA8bGk+JHtuZWVkZWRTdGVwcy5qb2luKCc8L2xpPjxsaT4nKX08L2xpPlxuICAgIDwvdWw+XG4gICAgPGg1PlRoaXMgcmVjaXBlIGdlbmVyYWxseSBjb3N0czogJCR7Y29zdH0gPC9oNT5cbiAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+YDtcbiAgfSxcblxuICBmaWx0ZXJSZWNpcGVzOiAoKSA9PiB7XG4gICAgY29uc3QgY2FyZEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLWNhcmRzJyk7XG4gICAgdmFyIHNlYXJjaFRlcm0gPSBldmVudC50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoc2VhcmNoVGVybSAhPT0gJycpIHtcbiAgICAgIGNhcmRBcmVhLmlubmVySFRNTCA9ICcnO1xuICAgICAgZG9tVXBkYXRlcy5kaXNwbGF5RmlsdGVyZWRSZWNpcGVzKHNlYXJjaFRlcm0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb21VcGRhdGVzLnBvcHVsYXRlQ2FyZHMoZG9tVXBkYXRlcy5jb29rYm9vay5yZWNpcGVzKTtcbiAgICB9XG4gIH0sXG5cbiAgZGlzcGxheUZpbHRlcmVkUmVjaXBlczogKHNlYXJjaFRlcm0pID0+IHtcbiAgICBkb21VcGRhdGVzLnBvcHVsYXRlQ2FyZHMoZG9tVXBkYXRlcy5jb29rYm9vay5maW5kUmVjaXBlcyhzZWFyY2hUZXJtKSk7XG4gIH0sXG5cbiAgaGF2ZUNvb2tlZFJlY2lwZTogKGV2ZW50KSA9PiB7XG4gICAgbGV0IHNwZWNpZmljUmVjaXBlID0gZG9tVXBkYXRlcy5maW5kU3BlY2lmaWNSZWNpcGUoZXZlbnQpO1xuICAgIGNvbnN0IGhhdmVDb29rZWRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuaGF2ZS1jb29rZWQke3NwZWNpZmljUmVjaXBlLmlkfWApO1xuICAgIGlmIChkb21VcGRhdGVzLnVzZXIuY2hlY2tQYW50cnlJbmdyZWRpZW50cyhzcGVjaWZpY1JlY2lwZSkgIT09ICdZb3UgaGF2ZSB0aGUgaW5ncmVkaWVudHMhJykge1xuICAgICAgYWxlcnQoXCJZb3UgZG9uJ3QgaGF2ZSB3aGF0IHlvdSBuZWVkIHlldFwiKVxuICAgIH0gZWxzZSB7XG4gICAgICBkb21VcGRhdGVzLnVzZXIucmVtb3ZlUGFudHJ5SW5ncmlkaWVudHMoc3BlY2lmaWNSZWNpcGUpXG4gICAgICBoYXZlQ29va2VkQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0sXG5cbiAgYnV5SW5ncmVkaWVudHM6IChldmVudCkgPT4ge1xuICAgIGxldCBzcGVjaWZpY1JlY2lwZSA9IGRvbVVwZGF0ZXMuZmluZFNwZWNpZmljUmVjaXBlKGV2ZW50KTtcbiAgICBjb25zdCBidXlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYm91Z2h0LWluZ3JlZGllbnRzJHtzcGVjaWZpY1JlY2lwZS5pZH1gKVxuICAgIGRvbVVwZGF0ZXMudXNlci5hZGROZWVkZWRQYW50cnlJbmdyaWRpZW50cyhzcGVjaWZpY1JlY2lwZSlcbiAgICBidXlCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICB9LFxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCAgZG9tVXBkYXRlcztcbiIsImNsYXNzIFBhbnRyeSB7XG4gIGNvbnN0cnVjdG9yKHVzZXJQYW50cnkpIHtcbiAgICB0aGlzLnVzZXJQYW50cnkgPSB1c2VyUGFudHJ5O1xuICAgIHRoaXMudXNlckluZ3JlZGllbnRzID0ge307XG4gIH1cblxuICBjb21waWxlUGFudHJ5KCkge1xuICAgIHRoaXMudXNlckluZ3JlZGllbnRzID0gdGhpcy51c2VyUGFudHJ5LnJlZHVjZSgocGFudHJ5LCBpbmdyZWRpZW50KSA9PiB7XG4gICAgICBpZiAoIXBhbnRyeVtpbmdyZWRpZW50LmluZ3JlZGllbnRdKSB7XG4gICAgICAgIHBhbnRyeVtpbmdyZWRpZW50LmluZ3JlZGllbnRdID0gaW5ncmVkaWVudC5hbW91bnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYW50cnlbaW5ncmVkaWVudC5pbmdyZWRpZW50XSArPSBpbmdyZWRpZW50LmFtb3VudDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwYW50cnk7XG4gICAgfSwge30pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhbnRyeTtcbiIsImNsYXNzIFJlY2lwZSB7XG4gIGNvbnN0cnVjdG9yKHJlY2lwZSwgaW5ncmVkaWVudHNEYXRhKSB7XG4gICAgdGhpcy5uYW1lID0gcmVjaXBlLm5hbWU7XG4gICAgdGhpcy5pZCA9IHJlY2lwZS5pZDtcbiAgICB0aGlzLmluZ3JlZGllbnRzID0gcmVjaXBlLmluZ3JlZGllbnRzO1xuICAgIHRoaXMuaW5zdHJ1Y3Rpb25zID0gcmVjaXBlLmluc3RydWN0aW9ucztcbiAgICB0aGlzLnRhZ3MgPSByZWNpcGUudGFncztcbiAgICB0aGlzLmluZ3JlZGllbnRzRGF0YSA9IGluZ3JlZGllbnRzRGF0YTtcbiAgICB0aGlzLmltYWdlID0gcmVjaXBlLmltYWdlO1xuICB9XG5cbiAgY2FsY3VsYXRlQ29zdCgpIHtcbiAgICBsZXQgY29zdENvdW50ZXIgPSAwO1xuICAgIHRoaXMuaW5ncmVkaWVudHMuZm9yRWFjaChpbmdyZWRpZW50ID0+IHtcbiAgICAgIHRoaXMuaW5ncmVkaWVudHNEYXRhLmZpbmQoc3BlY2lmaWNJbmdyZWRpZW50ID0+IHtcbiAgICAgICAgaWYgKHNwZWNpZmljSW5ncmVkaWVudC5pZCA9PT0gaW5ncmVkaWVudC5pZCkge1xuICAgICAgICAgIGNvc3RDb3VudGVyICs9IChOdW1iZXIoc3BlY2lmaWNJbmdyZWRpZW50LmVzdGltYXRlZENvc3RJbkNlbnRzKSAqXG4gICAgICAgICAgTnVtYmVyKGluZ3JlZGllbnQucXVhbnRpdHkuYW1vdW50KSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KTtcbiAgICByZXR1cm4gcGFyc2VGbG9hdCgoY29zdENvdW50ZXIgLyAxMDApLnRvRml4ZWQoMikpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVjaXBlO1xuIiwiaW1wb3J0ICcuL2Nzcy9zdHlsZXMuc2Nzcyc7XG5cbmltcG9ydCBkb21VcGRhdGVzIGZyb20gJy4vZG9tVXBkYXRlcyc7XG5cbmNvbnN0IHNob3dGYXZvcml0ZXNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmlldy1mYXZvcml0ZXMnKTtcbmNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZScpXG5jb25zdCBjYXJkQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtY2FyZHMnKTtcbmNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtaW5wdXQnKTtcbmNvbnN0IHNob3dUb0Nvb2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tY29vaycpO1xuXG5jb25zdCBjYXJkQnV0dG9uQ29uZGl0aW9uYWxzID0gKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYXZvcml0ZScpKSB7XG4gICAgZG9tVXBkYXRlcy5mYXZvcml0ZUNhcmQoZXZlbnQpO1xuICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZC1idXR0b24nKSkge1xuICAgIGRvbVVwZGF0ZXMuYWRkVG9Ub0Nvb2soZXZlbnQpO1xuICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NhcmQtcGljdHVyZScpKSB7XG4gICAgZG9tVXBkYXRlcy5kaXNwbGF5RGlyZWN0aW9ucyhldmVudCk7XG4gIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaG9tZScpKSB7XG4gICAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1hcmVhJyk7XG4gICAgc2VhcmNoQmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgc2hvd1RvQ29va0J1dHRvbi5pbm5lckhUTUwgPSAnVG8gQ29vayc7XG4gICAgc2hvd0Zhdm9yaXRlc0J1dHRvbi5pbm5lckhUTUwgPSAnVmlldyBGYXZvcml0ZXMnO1xuICAgIGRvbVVwZGF0ZXMucG9wdWxhdGVDYXJkcyhkb21VcGRhdGVzLmNvb2tib29rLnJlY2lwZXMpO1xuICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Nsb3NlLWJ1dHRvbicpKSB7XG4gICAgZG9tVXBkYXRlcy5yZW1vdmVGcm9tVG9Db29rKGV2ZW50KTtcbiAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdoYXZlLWNvb2tlZCcpKSB7XG4gICAgZG9tVXBkYXRlcy5oYXZlQ29va2VkUmVjaXBlKGV2ZW50KTtcbiAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdib3VnaHQtaW5ncmVkaWVudHMnKSkge1xuICAgIGRvbVVwZGF0ZXMuYnV5SW5ncmVkaWVudHMoZXZlbnQpO1xuICB9XG59XG5cbndpbmRvdy5vbmxvYWQgPSBkb21VcGRhdGVzLmdldFdoYXRzQ29va2luZ0RhdGEoKVxuaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhcmRCdXR0b25Db25kaXRpb25hbHMpO1xuY2FyZEFyZWEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYXJkQnV0dG9uQ29uZGl0aW9uYWxzKTtcbnNob3dGYXZvcml0ZXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkb21VcGRhdGVzLnZpZXdGYXZvcml0ZXMpO1xuc2hvd1RvQ29va0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRvbVVwZGF0ZXMuc2hvd1RvQ29va1JlY2lwZXMpO1xuc2VhcmNoQmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZG9tVXBkYXRlcy5maWx0ZXJSZWNpcGVzKTtcbiIsImltcG9ydCBQYW50cnkgZnJvbSAnLi9wYW50cnknO1xuXG5jbGFzcyBVc2VyIHtcbiAgY29uc3RydWN0b3IodXNlciwgcGFudHJ5LCBpbmdyZWRpZW50c0RhdGEpIHtcbiAgICB0aGlzLmlkID0gdXNlci5pZDtcbiAgICB0aGlzLm5hbWUgPSB1c2VyLm5hbWU7XG4gICAgdGhpcy5wYW50cnkgPSBwYW50cnk7XG4gICAgdGhpcy5mYXZvcml0ZVJlY2lwZXMgPSBbXTtcbiAgICB0aGlzLnJlY2lwZXNUb0Nvb2sgPSBbXTtcbiAgICB0aGlzLmluZ3JlZGllbnRzRGF0YSA9IGluZ3JlZGllbnRzRGF0YTtcbiAgfVxuXG4gIGFkZFRvRmF2b3JpdGVzKHJlY2lwZSkge1xuICAgIGlmICghdGhpcy5mYXZvcml0ZVJlY2lwZXMuaW5jbHVkZXMocmVjaXBlKSkge1xuICAgICAgdGhpcy5mYXZvcml0ZVJlY2lwZXMucHVzaChyZWNpcGUpO1xuICAgIH1cbiAgfVxuXG4gIGFkZFRvUmVjaXBlc1RvQ29vayhyZWNpcGUpIHtcbiAgICBpZiAoIXRoaXMucmVjaXBlc1RvQ29vay5pbmNsdWRlcyhyZWNpcGUpKSB7XG4gICAgICB0aGlzLnJlY2lwZXNUb0Nvb2sucHVzaChyZWNpcGUpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUZyb21SZWNpcGVzVG9Db29rKHJlY2lwZSkge1xuICAgIGNvbnN0IGkgPSB0aGlzLnJlY2lwZXNUb0Nvb2suaW5kZXhPZihyZWNpcGUpO1xuICAgIHRoaXMucmVjaXBlc1RvQ29vay5zcGxpY2UoaSwgMSk7XG4gIH1cblxuICByZW1vdmVQYW50cnlJbmdyaWRpZW50cyhyZWNpcGUpIHtcbiAgICByZWNpcGUuaW5ncmVkaWVudHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgZmV0Y2goJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS93aGF0cy1jb29raW4vMTkxMS91c2Vycy93Y1VzZXJzRGF0YScsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBcInVzZXJJRFwiOiB0aGlzLmlkLFxuICAgICAgICAgIFwiaW5ncmVkaWVudElEXCI6IGl0ZW0uaWQsXG4gICAgICAgICAgXCJpbmdyZWRpZW50TW9kaWZpY2F0aW9uXCI6IC0oaXRlbS5xdWFudGl0eS5hbW91bnQpXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKHRoaXMudXBkYXRlVXNlclBhbnRyeSgpKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAgICAgIHNldFRpbWVvdXQodGhpcy51cGRhdGVVc2VyUGFudHJ5KCksIDQwMDApXG4gICAgfSk7XG5cbiAgfVxuXG4gIGFkZE5lZWRlZFBhbnRyeUluZ3JpZGllbnRzKHJlY2lwZSkge1xuICAgIHRoaXMuY2hlY2tIb3dNdWNoTW9yZShyZWNpcGUpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGZldGNoKCdodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvd2hhdHMtY29va2luLzE5MTEvdXNlcnMvd2NVc2Vyc0RhdGEnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgXCJ1c2VySURcIjogdGhpcy5pZCxcbiAgICAgICAgICBcImluZ3JlZGllbnRJRFwiOiBpdGVtLmlkLFxuICAgICAgICAgIFwiaW5ncmVkaWVudE1vZGlmaWNhdGlvblwiOiBpdGVtLnF1YW50aXR5TmVlZGVkXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKHRoaXMudXBkYXRlVXNlclBhbnRyeSgpKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZVVzZXJQYW50cnkoKSB7XG4gICAgZmV0Y2goJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS93aGF0cy1jb29raW4vMTkxMS91c2Vycy93Y1VzZXJzRGF0YScpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGxldCBwYW50cnkgPSBuZXcgUGFudHJ5KHJlc3BvbnNlLndjVXNlcnNEYXRhW3RoaXMuaWQgLSAxXS5wYW50cnkpXG4gICAgICAgIHRoaXMucGFudHJ5ID0gcGFudHJ5XG4gICAgICAgIHRoaXMucGFudHJ5LmNvbXBpbGVQYW50cnkodGhpcy5pbmdyZWRpZW50c0RhdGEpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcbiAgfVxuXG4gIHJlbW92ZUZyb21GYXZvcml0ZXMocmVjaXBlKSB7XG4gICAgY29uc3QgaSA9IHRoaXMuZmF2b3JpdGVSZWNpcGVzLmluZGV4T2YocmVjaXBlKTtcbiAgICB0aGlzLmZhdm9yaXRlUmVjaXBlcy5zcGxpY2UoaSwgMSk7XG4gIH1cblxuICBmaWx0ZXJGYXZvcml0ZXModGFnKSB7XG4gICAgcmV0dXJuIHRoaXMuZmF2b3JpdGVSZWNpcGVzLmZpbHRlcihyZWNpcGUgPT4ge1xuICAgICAgcmV0dXJuIHJlY2lwZS50YWdzLmluY2x1ZGVzKHRhZyk7XG4gICAgfSk7XG4gIH1cblxuICBmaW5kRmF2b3JpdGVzKHN0cmdUb1NyY2gpIHtcbiAgICByZXR1cm4gdGhpcy5mYXZvcml0ZVJlY2lwZXMuZmlsdGVyKHJlY2lwZSA9PiB7XG4gICAgICByZXR1cm4gcmVjaXBlLm5hbWUuaW5jbHVkZXMoc3RyZ1RvU3JjaCkgfHxcbiAgICAgICAgcmVjaXBlLmluZ3JlZGllbnRzLmZpbmQoaW5ncmVkaWVudCA9PiB7XG4gICAgICAgICAgcmV0dXJuIGluZ3JlZGllbnQubmFtZS5pbmNsdWRlcyhzdHJnVG9TcmNoKVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZpbmRNaXNzaW5nSW5ncmVkaWVudHMocmVjaXBlKSB7XG4gICAgcmV0dXJuIHJlY2lwZS5pbmdyZWRpZW50cy5yZWR1Y2UoKG5vdFByZXNlbnQsIGluZ3JlZGllbnQpID0+IHtcbiAgICAgIGlmICghdGhpcy5wYW50cnkudXNlckluZ3JlZGllbnRzW2luZ3JlZGllbnQuaWRdIHx8IGluZ3JlZGllbnQucXVhbnRpdHkuYW1vdW50ID4gdGhpcy5wYW50cnkudXNlckluZ3JlZGllbnRzW2luZ3JlZGllbnQuaWRdKSB7XG4gICAgICAgIG5vdFByZXNlbnQucHVzaChpbmdyZWRpZW50KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBub3RQcmVzZW50O1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIGNoZWNrUGFudHJ5SW5ncmVkaWVudHMocmVjaXBlKSB7XG4gICAgdGhpcy5wYW50cnkuY29tcGlsZVBhbnRyeSh0aGlzLmluZ3JlZGllbnRzRGF0YSk7XG4gICAgbGV0IG1pc3NpbmdJbmdyZWRpZW50cyA9IHRoaXMuZmluZE1pc3NpbmdJbmdyZWRpZW50cyhyZWNpcGUpXG4gICAgaWYgKG1pc3NpbmdJbmdyZWRpZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAnWW91IGhhdmUgdGhlIGluZ3JlZGllbnRzISc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBtaXNzaW5nID0gbWlzc2luZ0luZ3JlZGllbnRzLmxlbmd0aDtcbiAgICAgIHJldHVybiBgWW91IHN0aWxsIG5lZWQgJHttaXNzaW5nfSBtb3JlIGluZ3JlZGllbnRzLmA7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tIb3dNdWNoTW9yZShyZWNpcGUpIHtcbiAgICBsZXQgbWlzc2luZ0luZ3JlZGllbnRzID0gdGhpcy5maW5kTWlzc2luZ0luZ3JlZGllbnRzKHJlY2lwZSk7XG4gICAgbGV0IGRpZmZlcmVuY2UgPSBtaXNzaW5nSW5ncmVkaWVudHMubWFwKGluZ3JlZGllbnQgPT4ge1xuICAgICAgbGV0IG5hbWUgPSByZWNpcGUuaW5ncmVkaWVudHNEYXRhLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBpbmdyZWRpZW50LmlkKTtcbiAgICAgIGxldCBuZWVkZWRJbmcgPSB7XG4gICAgICAgIGlkOiBpbmdyZWRpZW50LmlkLFxuICAgICAgICBjb3N0OiAwLFxuICAgICAgICBuYW1lOiBuYW1lLm5hbWUsXG4gICAgICAgIHVuaXQ6IGluZ3JlZGllbnQucXVhbnRpdHkudW5pdCxcbiAgICAgICAgcXVhbnRpdHlOZWVkZWQ6IHBhcnNlRmxvYXQoaW5ncmVkaWVudC5xdWFudGl0eS5hbW91bnQudG9GaXhlZCgyKSlcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnBhbnRyeS51c2VySW5ncmVkaWVudHNbaW5ncmVkaWVudC5pZF0pIHtcbiAgICAgICAgbmVlZGVkSW5nLnF1YW50aXR5TmVlZGVkID0gcGFyc2VGbG9hdChpbmdyZWRpZW50LnF1YW50aXR5LmFtb3VudCAtIHRoaXMucGFudHJ5LnVzZXJJbmdyZWRpZW50c1tpbmdyZWRpZW50LmlkXS50b0ZpeGVkKDIpKVxuICAgICAgfVxuICAgICAgbGV0IGluZ3JlZGllbnRJdGVtID0gcmVjaXBlLmluZ3JlZGllbnRzRGF0YS5maW5kKGl0ZW0gPT4gaW5ncmVkaWVudC5pZCA9PT0gaXRlbS5pZClcbiAgICAgIG5lZWRlZEluZy5jb3N0ID0gKG5lZWRlZEluZy5xdWFudGl0eU5lZWRlZCAqIGluZ3JlZGllbnRJdGVtLmVzdGltYXRlZENvc3RJbkNlbnRzKSAvIDEwMDtcbiAgICAgIHJldHVybiBuZWVkZWRJbmc7XG4gICAgfSlcbiAgICByZXR1cm4gZGlmZmVyZW5jZTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9