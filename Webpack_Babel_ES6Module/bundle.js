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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Çıkan yeni özellikler bazı araçlarla kullanılmaktadır.\r\n// Webpack, Babel ve ES6 Module\r\n// node yapısı sayesinde js kodları tarayıcı dışında da çalıştırılabilmektedir.\r\n// npm ile 3. parti yazılımları kullanılabiliyor. Sadece kütüphaneler değil, framework ya da tool da olabilir.\r\n\r\n// Babel ES6/7 ile yazılmış kodları ES5'e çevirmektedir.\r\n// Webpack ile farklı modüldeki yapılar birleştirilerek tek bir yapı oluşturulur.\r\n\r\n\r\n// Mevcut konfigürasyonu her js uygulamasında başlarken tekrar tekrar kullanabiliriz.\r\n// npm init --yes (package.json kurulumu)\r\n\r\n// Global olarak bilgisayara paket kurulumu yapılırsa, başka bilgisayara projeyi taşırken o bilgisayara da kurulumun yapılması gerekir.\r\n\r\n// npm install webpack --save-dev  ile yerel kurulum..\r\n// npm install webpack-cli --save-dev // komutları içeren paket kurulumu..\r\n\r\n// webpack konfigürasyonları için webpack.config.js dosyasını eklemek gerekmektedir.\r\n// webpack.config.js bir module geriye döndürmektedir.\r\nconsole.log(__webpack_require__(/*! ./people */ \"./people.js\"));\r\n//console.log(\"hello\")\r\n\r\n// npm run dev ile webpack \r\n// npm run build ile bundle.js yayınlama modunda çalıştırılmaktadır.\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./people.js":
/*!*******************!*\
  !*** ./people.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = [\r\n    {name: 'Arda Atılgan'},\r\n    {name: 'Atakan'}\r\n]\n\n//# sourceURL=webpack:///./people.js?");

/***/ })

/******/ });