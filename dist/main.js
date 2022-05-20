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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/cart */ \"./src/module/cart.js\");\n/* harmony import */ var _module_catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/catalog */ \"./src/module/catalog.js\");\n/* harmony import */ var _module_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/filter */ \"./src/module/filter.js\");\n/* harmony import */ var _module_load__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/load */ \"./src/module/load.js\");\n/* harmony import */ var _module_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/search */ \"./src/module/search.js\");\n\n\n\n\n\n\n(0,_module_load__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_module_cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_module_search__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_module_catalog__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_module_filter__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n//# sourceURL=webpack://glo-ozon/./src/index.js?");

/***/ }),

/***/ "./src/module/cart.js":
/*!****************************!*\
  !*** ./src/module/cart.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _render_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render_cart */ \"./src/module/render_cart.js\");\n/* harmony import */ var _post_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post_data */ \"./src/module/post_data.js\");\n/* harmony import */ var _render_counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render_counter */ \"./src/module/render_counter.js\");\n\n\n\n\nconst cart = () => {\n  const cartBtn = document.getElementById('cart'),\n    cartModal = document.querySelector('.cart'),\n    cartClose = cartModal.querySelector('.cart-close'),\n    goodsWrapper = document.querySelector('.goods'),\n    cartWrapper = cartModal.querySelector('.cart-wrapper'),\n    cartConfirm = cartModal.querySelector('.cart-confirm');\n\n  const openCart = () => {\n    const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];\n    cartModal.style.display = 'flex';\n    (0,_render_cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cart);\n  };\n\n  const closeCart = () => cartModal.style.display = 'none';\n\n  cartBtn.addEventListener('click', openCart);\n  cartClose.addEventListener('click', closeCart);\n\n  goodsWrapper.addEventListener('click', event => {\n    const key = event.target.classList.contains('btn-primary') ? event.target.closest('.card').dataset.key : '';\n    const goods = JSON.parse(localStorage.getItem('goods'));\n    const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];\n    localStorage.setItem('cart', JSON.stringify([ ...cart, goods.find(item => item.id === +key) ]));\n    (0,_render_counter__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  });\n\n  cartWrapper.addEventListener('click', event => {\n    const key = event.target.classList.contains('btn-primary') ? event.target.closest('.card').dataset.key : '';\n    const cart = JSON.parse(localStorage.getItem('cart'));\n    const index = cart.findIndex(item => item.id === +key);\n\n    cart.splice(index, 1);\n    localStorage.setItem('cart', JSON.stringify(cart));\n    (0,_render_cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cart);\n    (0,_render_counter__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  });\n\n  cartConfirm.addEventListener('click', () => {\n    const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];\n    (0,_post_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cart).then(() => {\n      localStorage.removeItem('cart');\n      (0,_render_counter__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n      (0,_render_cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([]);\n    });\n  });\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\n\n//# sourceURL=webpack://glo-ozon/./src/module/cart.js?");

/***/ }),

/***/ "./src/module/catalog.js":
/*!*******************************!*\
  !*** ./src/module/catalog.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filters */ \"./src/module/filters.js\");\n/* harmony import */ var _get_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get_data */ \"./src/module/get_data.js\");\n/* harmony import */ var _render_goods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render_goods */ \"./src/module/render_goods.js\");\n\n\n\n\nconst catalog = () => {\n  const btn = document.querySelector('.catalog-button > button'),\n        modal = document.querySelector('.catalog');\n\n  let isOpen = false;\n\n  btn.addEventListener('click', () => {\n    modal.style.display = isOpen ? '' : 'block';\n    modal.querySelectorAll('li').forEach(item => item.addEventListener('click', event => {\n      (0,_get_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().then(goods => (0,_render_goods__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_0__.categoryFilter)(goods, event.target.textContent)));\n    }));\n    isOpen = !isOpen;\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalog);\n\n//# sourceURL=webpack://glo-ozon/./src/module/catalog.js?");

/***/ }),

/***/ "./src/module/filter.js":
/*!******************************!*\
  !*** ./src/module/filter.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _get_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get_data */ \"./src/module/get_data.js\");\n/* harmony import */ var _render_goods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render_goods */ \"./src/module/render_goods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/module/filters.js\");\n\n\n\n\nconst filter = goods => {\n  const minInput = document.getElementById('min'),\n        maxInput = document.getElementById('max'),\n        discoutChecked = document.getElementById('discount-checkbox'),\n        filterCheck = document.querySelector('.filter-check_checkmark');\n\n  minInput.addEventListener('input', () => (0,_get_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n    .then(data => (0,_render_goods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.discountFilter)(data, discoutChecked.checked), minInput.value, maxInput.value))));\n\n  maxInput.addEventListener('input', () => (0,_get_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n    .then(data => (0,_render_goods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.discountFilter)(data, discoutChecked.checked), minInput.value, maxInput.value))));\n\n  discoutChecked.addEventListener('change', () => {\n    discoutChecked.checked ? filterCheck.classList.add('checked') : filterCheck.classList.remove('checked');\n    (0,_get_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(data => (0,_render_goods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.discountFilter)(data, discoutChecked.checked), minInput.value, maxInput.value)));\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filter);\n\n//# sourceURL=webpack://glo-ozon/./src/module/filter.js?");

/***/ }),

/***/ "./src/module/filters.js":
/*!*******************************!*\
  !*** ./src/module/filters.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"categoryFilter\": () => (/* binding */ categoryFilter),\n/* harmony export */   \"discountFilter\": () => (/* binding */ discountFilter),\n/* harmony export */   \"priceFilter\": () => (/* binding */ priceFilter),\n/* harmony export */   \"searchFilter\": () => (/* binding */ searchFilter)\n/* harmony export */ });\nconst searchFilter = (goods, value) => {\n  return goods.filter(item => item.title.toLowerCase().includes(value.toLowerCase()));\n};\n\nconst categoryFilter = (goods, category) => {\n  return goods.filter(item => item.category.includes(category));\n};\n\nconst priceFilter = (goods, min, max) => {\n  return goods.filter(item => {\n    if (min === '' && max === '') {\n      return item;\n    } else if (min !== '' && max !== '') {\n      return item.price > +min && item.price < +max;\n    } else if (min !== '' && max === '') {\n      return item.price > +min;\n    } else if (min === '' && max !== '') {\n      return item.price < +max;\n    }\n  });\n};\n\nconst discountFilter = (goods, value) => {\n  return goods.filter(item => value ? item.sale === true : item);\n};\n\n//# sourceURL=webpack://glo-ozon/./src/module/filters.js?");

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

/***/ "./src/module/post_data.js":
/*!*********************************!*\
  !*** ./src/module/post_data.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst postData = data => {\n  return fetch('https://glo-ozon-app-default-rtdb.europe-west1.firebasedatabase.app/cart.json', {\n    method: 'POST',\n    body: JSON.stringify(data),\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n  })\n    .then(response => response.json());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postData);\n\n\n\n//# sourceURL=webpack://glo-ozon/./src/module/post_data.js?");

/***/ }),

/***/ "./src/module/render_cart.js":
/*!***********************************!*\
  !*** ./src/module/render_cart.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderCart = goods => {\n  const cartWrapper = document.querySelector('.cart-wrapper'),\n        cartTotal = document.querySelector('.cart-total > span');\n\n  localStorage.setItem('cart', JSON.stringify(goods));\n  cartTotal.textContent = goods.reduce((sum, item) => sum + item.price, 0);\n\n  if (goods.length === 0) {\n    cartWrapper.innerHTML = `\n      <div id=\"cart-empty\">\n        Ваша корзина пока пуста\n      </div>\n    `;\n  } else {\n    cartWrapper.innerHTML = '';\n    goods.forEach(good => {\n      cartWrapper.insertAdjacentHTML('beforeend', `\n        <div class=\"card\" data-key=\"${good.id}\">\n          ${good.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\n          <div class=\"card-img-wrapper\">\n            <span class=\"card-img-top\"\n              style=\"background-image: url(${good.img})\"></span>\n          </div>\n          <div class=\"card-body justify-content-between\">\n            <div class=\"card-price\">${good.price} ₽</div>\n            <h5 class=\"card-title\">${good.title}</h5>\n            <button class=\"btn btn-primary\">Удалить</button>\n          </div>\n        </div>\n      `);\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCart);\n\n//# sourceURL=webpack://glo-ozon/./src/module/render_cart.js?");

/***/ }),

/***/ "./src/module/render_counter.js":
/*!**************************************!*\
  !*** ./src/module/render_counter.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderCounter = () => {\n  const counter = document.querySelector('.counter');\n  counter.textContent = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')).length : 0;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCounter);\n\n//# sourceURL=webpack://glo-ozon/./src/module/render_counter.js?");

/***/ }),

/***/ "./src/module/render_goods.js":
/*!************************************!*\
  !*** ./src/module/render_goods.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _render_counter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render_counter */ \"./src/module/render_counter.js\");\n\n\nconst renderGoods = goods => {\n  const goodsWrapper = document.querySelector('.goods');\n\n  localStorage.setItem('goods', JSON.stringify(goods));\n  (0,_render_counter__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  \n  goodsWrapper.innerHTML = '';\n  goods.forEach(good => {\n    goodsWrapper.insertAdjacentHTML('beforeend', `\n      <div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">\n        <div class=\"card\" data-key=\"${good.id}\">\n          ${good.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\n          <div class=\"card-img-wrapper\">\n            <span class=\"card-img-top\"\n              style=\"background-image: url(${ good.img })\"></span>\n          </div>\n          <div class=\"card-body justify-content-between\">\n            <div class=\"card-price\">${ good.price } ₽</div>\n            <h5 class=\"card-title\">${ good.title }</h5>\n            <button class=\"btn btn-primary\">В корзину</button>\n          </div>\n        </div>\n      </div>\n    `);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGoods);\n\n//# sourceURL=webpack://glo-ozon/./src/module/render_goods.js?");

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