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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/andres/src/understanding-gutenberg/webpack-config/src/index.js: Unexpected token (20:20)\n\n\u001b[0m \u001b[90m 18 | \u001b[39m            \u001b[36mif\u001b[39m ( props\u001b[33m.\u001b[39misSelected ) {\u001b[0m\n\u001b[0m \u001b[90m 19 | \u001b[39m                \u001b[36mreturn\u001b[39m (\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 20 | \u001b[39m                    \u001b[33m<\u001b[39m\u001b[33minput\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m                    \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 21 | \u001b[39m                        onChange\u001b[33m=\u001b[39m{ onChangeHandler( props ) }\u001b[0m\n\u001b[0m \u001b[90m 22 | \u001b[39m                        value\u001b[33m=\u001b[39m{ props\u001b[33m.\u001b[39mattributes\u001b[33m.\u001b[39mactivity \u001b[33m||\u001b[39m \u001b[32m''\u001b[39m }\u001b[0m\n\u001b[0m \u001b[90m 23 | \u001b[39m                        \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n    at Parser.raise (/home/andres/src/understanding-gutenberg/webpack-config/node_modules/@babel/parser/lib/index.js:3831:17)\n    at Parser.unexpected (/home/andres/src/understanding-gutenberg/webpack-config/node_modules/@babel/parser/lib/index.js:5143:16)\n    at Parser.parseExprAtom (/home/andres/src/understanding-gutenberg/webpack-config/node_modules/@babel/parser/lib/index.js:6283:20)\n    at Parser.parseExprSubscripts (/home/andres/src/understanding-gutenberg/webpack-config/node_modules/@babel/parser/lib/index.js:5862:23)\n    at Parser.parseMaybeUnary (/home/andres/src/understanding-gutenberg/webpack-config/node_modules/@babel/parser/lib/index.js:5842:21)\n    at Parser.parseExprOps (/home/andres/src/understanding-gutenberg/webpack-config/node_modules/@babel/parser/lib/index.js:5729:23)\n    at Parser.parseMaybeConditional (/home/andres/src/understanding-gutenberg/webpack-config/node_modules/@babel/parser/lib/index.js:5702:23)\n    at Parser.parseMaybeAssign (/home/andres/src/understanding-gutenberg/webpack-config/node_modules/@babel/parser/lib/index.js:5647:21)\n    at Parser.parseParenAndDistinguishExpression (/home/andres/src/understanding-gutenberg/webpack-config/node_modules/@babel/parser/lib/index.js:6435:28)\n    at Parser.parseExprAtom (/home/andres/src/understanding-gutenberg/webpack-config/node_modules/@babel/parser/lib/index.js:6215:21)\n    at Parser.parseExprSubscripts (/home/andres/src/understanding-gutenberg/webpack-config/node_modules/@babel/parser/lib/index.js:5862:23)\n    at Parser.parseMaybeUnary (/home/andres/src/understanding-gutenberg/webpack-config/node_modules/@babel/parser/lib/index.js:5842:21)\n    at Parser.parseExprOps (/home/andres/src/understanding-gutenberg/webpack-config/node_modules/@babel/parser/lib/index.js:5729:23)\n    at Parser.parseMaybeConditional (/home/andres/src/understanding-gutenberg/webpack-config/node_modules/@babel/parser/lib/index.js:5702:23)\n    at Parser.parseMaybeAssign (/home/andres/src/understanding-gutenberg/webpack-config/node_modules/@babel/parser/lib/index.js:5647:21)\n    at Parser.parseExpression (/home/andres/src/understanding-gutenberg/webpack-config/node_modules/@babel/parser/lib/index.js:5595:23)\n    at Parser.parseReturnStatement (/home/andres/src/understanding-gutenberg/webpack-config/node_modules/@babel/parser/lib/index.js:7617:28)\n    at Parser.parseStatementContent (/home/andres/src/understanding-gutenberg/webpack-config/node_modules/@babel/parser/lib/index.js:7295:21)\n    at Parser.parseStatement (/home/andres/src/understanding-gutenberg/webpack-config/node_modules/@babel/parser/lib/index.js:7243:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/andres/src/understanding-gutenberg/webpack-config/node_modules/@babel/parser/lib/index.js:7810:25)\n    at Parser.parseBlockBody (/home/andres/src/understanding-gutenberg/webpack-config/node_modules/@babel/parser/lib/index.js:7797:10)\n    at Parser.parseBlock (/home/andres/src/understanding-gutenberg/webpack-config/node_modules/@babel/parser/lib/index.js:7786:10)\n    at Parser.parseStatementContent (/home/andres/src/understanding-gutenberg/webpack-config/node_modules/@babel/parser/lib/index.js:7319:21)\n    at Parser.parseStatement (/home/andres/src/understanding-gutenberg/webpack-config/node_modules/@babel/parser/lib/index.js:7243:17)\n    at Parser.parseIfStatement (/home/andres/src/understanding-gutenberg/webpack-config/node_modules/@babel/parser/lib/index.js:7602:28)\n    at Parser.parseStatementContent (/home/andres/src/understanding-gutenberg/webpack-config/node_modules/@babel/parser/lib/index.js:7292:21)\n    at Parser.parseStatement (/home/andres/src/understanding-gutenberg/webpack-config/node_modules/@babel/parser/lib/index.js:7243:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/andres/src/understanding-gutenberg/webpack-config/node_modules/@babel/parser/lib/index.js:7810:25)\n    at Parser.parseBlockBody (/home/andres/src/understanding-gutenberg/webpack-config/node_modules/@babel/parser/lib/index.js:7797:10)\n    at Parser.parseBlock (/home/andres/src/understanding-gutenberg/webpack-config/node_modules/@babel/parser/lib/index.js:7786:10)");

/***/ })

/******/ });
//# sourceMappingURL=main.js.map