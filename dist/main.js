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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/cart */ \"./src/module/cart.js\");\n/* harmony import */ var _module_catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/catalog */ \"./src/module/catalog.js\");\n/* harmony import */ var _module_load__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/load */ \"./src/module/load.js\");\n/* harmony import */ var _module_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/search */ \"./src/module/search.js\");\n\n\n\n\n\n(0,_module_load__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_module_cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_module_search__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_module_catalog__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://glo-ozon/./src/index.js?");

/***/ }),

/***/ "./src/module/cart.js":
/*!****************************!*\
  !*** ./src/module/cart.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst cart = () => {\n  const cartBtn = document.getElementById('cart'),\n    cartModal = document.querySelector('.cart'),\n    cartClose = cartModal.querySelector('.cart-close');\n\n  const openCart = () => cartModal.style.display = 'flex';\n  const closeCart = () => cartModal.style.display = 'none';\n\n  cartBtn.addEventListener('click', openCart);\n  cartClose.addEventListener('click', closeCart);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\n\n//# sourceURL=webpack://glo-ozon/./src/module/cart.js?");

/***/ }),

/***/ "./src/module/catalog.js":
/*!*******************************!*\
  !*** ./src/module/catalog.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filters */ \"./src/module/filters.js\");\n/* harmony import */ var _get_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get_data */ \"./src/module/get_data.js\");\n/* harmony import */ var _render_goods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render_goods */ \"./src/module/render_goods.js\");\n\n\n\n\nconst catalog = () => {\n  const btn = document.querySelector('.catalog-button > button'),\n        modal = document.querySelector('.catalog');\n\n  let isOpen = false;\n\n  btn.addEventListener('click', () => {\n    modal.style.display = isOpen ? '' : 'block';\n    modal.querySelectorAll('li').forEach(item => item.addEventListener('click', event => {\n      (0,_get_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().then(goods => (0,_render_goods__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_0__.categoryFilter)(goods, event.target.textContent)));\n    }));\n    isOpen = !isOpen;\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalog);\n\n//# sourceURL=webpack://glo-ozon/./src/module/catalog.js?");

/***/ }),

/***/ "./src/module/filters.js":
/*!*******************************!*\
  !*** ./src/module/filters.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"categoryFilter\": () => (/* binding */ categoryFilter),\n/* harmony export */   \"searchFilter\": () => (/* binding */ searchFilter)\n/* harmony export */ });\n/* harmony import */ var _get_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get_data */ \"./src/module/get_data.js\");\n\n\nconst searchFilter = (goods, value) => {\n  return goods.filter(item => item.title.toLowerCase().includes(value.toLowerCase()));\n};\n\nconst categoryFilter = (goods, category) => {\n  return goods.filter(item => item.category.includes(category));\n};\n\n\n//# sourceURL=webpack://glo-ozon/./src/module/filters.js?");

/***/ }),

/***/ "./src/module/get_data.js":
/*!********************************!*\
  !*** ./src/module/get_data.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData = () => {\n  return fetch(`https://glo-ozon-app-default-rtdb.europe-west1.firebasedatabase.app/goods.json`)\n    .then(response => response.json());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n\n\n//# sourceURL=webpack://glo-ozon/./src/module/get_data.js?");

/***/ }),

/***/ "./src/module/load.js":
/*!****************************!*\
  !*** ./src/module/load.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _get_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get_data */ \"./src/module/get_data.js\");\n/* harmony import */ var _render_goods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render_goods */ \"./src/module/render_goods.js\");\n\n\n\nconst load = () => {\n  (0,_get_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(data => (0,_render_goods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);\n\n//# sourceURL=webpack://glo-ozon/./src/module/load.js?");

/***/ }),

/***/ "./src/module/render_goods.js":
/*!************************************!*\
  !*** ./src/module/render_goods.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderGoods = goods => {\n  const goodsWrapper = document.querySelector('.goods');\n  goodsWrapper.innerHTML = '';\n  goods.forEach(good => {\n    goodsWrapper.insertAdjacentHTML('beforeend', `\n      <div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">\n        <div class=\"card\">\n          ${good.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\n          <div class=\"card-img-wrapper\">\n            <span class=\"card-img-top\"\n              style=\"background-image: url(${ good.img })\"></span>\n          </div>\n          <div class=\"card-body justify-content-between\">\n            <div class=\"card-price\">${ good.price } ₽</div>\n            <h5 class=\"card-title\">${ good.title }</h5>\n            <button class=\"btn btn-primary\">В корзину</button>\n          </div>\n        </div>\n      </div>\n    `);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGoods);\n\n//# sourceURL=webpack://glo-ozon/./src/module/render_goods.js?");

/***/ }),

/***/ "./src/module/search.js":
/*!******************************!*\
  !*** ./src/module/search.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filters */ \"./src/module/filters.js\");\n/* harmony import */ var _get_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get_data */ \"./src/module/get_data.js\");\n/* harmony import */ var _render_goods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render_goods */ \"./src/module/render_goods.js\");\n\n\n\n\nconst search = () => {\n  const searchInput = document.querySelector('.search-wrapper_input');\n  searchInput.addEventListener('input', event => {\n    const value = event.target.value;\n    (0,_get_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().then(data => (0,_render_goods__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_0__.searchFilter)(data, value)));\n  });\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\n\n//# sourceURL=webpack://glo-ozon/./src/module/search.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;