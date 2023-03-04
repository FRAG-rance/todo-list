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

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _todoItems_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoItems.js */ \"./src/todoItems.js\");\n\r\n\r\n\r\nclass UI {\r\n    test = () => {\r\n        console.log(\"ufcki\");\r\n    }\r\n    static loadProjectPreview() {\r\n        const projectPreview = document.querySelector('#project-preview');\r\n        projectPreview.innerHTML += `\r\n        <button class=\"button-add-task\" id=\"button-add-task\">\r\n            <i class=\"fas fa-plus\"></i>\r\n                Add Task\r\n        </button>\r\n        <div class=\"add-task-popup\" id=\"add-task-popup\">\r\n            <input\r\n            class=\"input-add-task-popup\"\r\n            id=\"input-add-task-popup\"\r\n            type=\"text\"\r\n            />\r\n            <div class=\"add-task-popup-buttons\">\r\n            <button class=\"button-add-task-popup\" id=\"button-add-task-popup\">\r\n                Add\r\n            </button>\r\n            <button\r\n                class=\"button-cancel-task-popup\"\r\n                id=\"button-cancel-task-popup\"\r\n            >\r\n                Cancel\r\n            </button>\r\n            </div>\r\n        </div>`\r\n    }\r\n};\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/UI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI.js */ \"./src/UI.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _todoItems_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoItems.js */ \"./src/todoItems.js\");\n/* harmony import */ var _todoList_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoList.js */ \"./src/todoList.js\");\n\r\n\r\n\r\n\r\n\r\nconsole.log(\"debug1\");\r\n\r\n_UI_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadProjectPreview();\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _todoItems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItems.js */ \"./src/todoItems.js\");\n\r\n\r\nclass Project {\r\n    constructor(name, tasks){\r\n        this.name = name;\r\n        this.tasks = [];\r\n    }\r\n    \r\n    setName = (newName) => {\r\n        this.name = newName;\r\n    }\r\n\r\n    setTasks = (tasks) => {\r\n        this.tasks = tasks;\r\n    }\r\n\r\n    getName = () => {\r\n        return this.name;\r\n    } \r\n\r\n    getTasks = () => { \r\n        return this.tasks;\r\n    }\r\n\r\n    addTask = (newTask) => {\r\n        if(this.tasks.find((task) => task.getTitle() == newTask.name)) return;\r\n        this.tasks.push(newTask);\r\n    } \r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/todoItems.js":
/*!**************************!*\
  !*** ./src/todoItems.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Item)\n/* harmony export */ });\nclass Item {\r\n    constructor(title, description, prio) {\r\n        this.title = title;\r\n        this.description = description;\r\n        this.prio = prio;\r\n    }\r\n    \r\n\r\n    setTitle = (title) => {\r\n        this.title = title;\r\n    }\r\n\r\n    setDescription = (description) => {\r\n        this.description = description;\r\n    }\r\n\r\n    setPrio = (prio) => {\r\n        this.prio = prio;\r\n    }    \r\n\r\n    getTitle = () => {\r\n        return this.title;\r\n    }\r\n\r\n    getDescription = () => {\r\n        return this.description;\r\n    }\r\n\r\n    getPrio = () => { \r\n        return this.prio;\r\n    }\r\n};\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/todoItems.js?");

/***/ }),

/***/ "./src/todoList.js":
/*!*************************!*\
  !*** ./src/todoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ List)\n/* harmony export */ });\n/* harmony import */ var _todoItems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItems.js */ \"./src/todoItems.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n \r\n\r\n\r\nclass List  {\r\n    constructor(List) {\r\n        this.List = [];\r\n        this.List.push((0,_project_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"ALL\"));\r\n        this.List.push((0,_project_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"TODAY\"));\r\n        this.List.push((0,_project_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"PLANNED\"));\r\n    }\r\n    \r\n\r\n    getList = () => {\r\n        return this.List;\r\n    } \r\n\r\n    setList = (List) => { \r\n        this.List = List;\r\n    }\r\n\r\n    addList = (newProject) =>\r\n    {\r\n        if(this.List.find((project) => project.name == newProject.name)) return;\r\n        this.List.push(newProject);\r\n    }\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/todoList.js?");

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