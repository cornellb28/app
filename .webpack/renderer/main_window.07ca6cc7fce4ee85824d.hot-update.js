"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatemb_app"]("main_window",{

/***/ "./src/helpers/helper.ts":
/*!*******************************!*\
  !*** ./src/helpers/helper.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.sortByDate = exports.scanDirectory = void 0;\nasync function scanDirectory() {\n    const selectedFiles = await window.api.uploadFiles();\n}\nexports.scanDirectory = scanDirectory;\nfunction sortByDate(a, b) {\n    const dateA = a.createDate;\n    const dateB = b.createDate;\n    return dateA > dateB ? -1 : dateA < dateB ? 1 : 0;\n}\nexports.sortByDate = sortByDate;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGVscGVycy9oZWxwZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQU8sS0FBSyxVQUFVLGFBQWE7SUFDakMsTUFBTSxhQUFhLEdBQUcsTUFBTSxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ3ZELENBQUM7QUFGRCxzQ0FFQztBQUVBLFNBQWdCLFVBQVUsQ0FBQyxDQUFNLEVBQUUsQ0FBTTtJQUN2QyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQzNCLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDM0IsT0FBTyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEQsQ0FBQztBQUpELGdDQUlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWItYXBwLy4vc3JjL2hlbHBlcnMvaGVscGVyLnRzP2VjYjIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNjYW5EaXJlY3RvcnkoKSB7XG4gIGNvbnN0IHNlbGVjdGVkRmlsZXMgPSBhd2FpdCB3aW5kb3cuYXBpLnVwbG9hZEZpbGVzKCk7XG59XG5cbiBleHBvcnQgZnVuY3Rpb24gc29ydEJ5RGF0ZShhOiBhbnksIGI6IGFueSk6IDEgfCAtMSB8IDAge1xuICAgY29uc3QgZGF0ZUEgPSBhLmNyZWF0ZURhdGU7XG4gICBjb25zdCBkYXRlQiA9IGIuY3JlYXRlRGF0ZTtcbiAgIHJldHVybiBkYXRlQSA+IGRhdGVCID8gLTEgOiBkYXRlQSA8IGRhdGVCID8gMSA6IDA7XG4gfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/helpers/helper.ts\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("aaa53fe692e95566cd3c")
/******/ })();
/******/ 
/******/ }
);