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

/***/ "./src/components/FileList.tsx":
/*!*************************************!*\
  !*** ./src/components/FileList.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst FileCard_1 = __importDefault(__webpack_require__(/*! ./FileCard */ \"./src/components/FileCard.tsx\"));\nfunction FileList({ tracks }) {\n    function sortByDate(a, b) {\n        const dateA = a.createDate;\n        const dateB = b.createDate;\n        return dateA > dateB ? -1 : dateA < dateB ? 1 : 0;\n    }\n    return (react_1.default.createElement(\"div\", { className: \"row tab-content bg-transparent note-has-grid\" }, tracksData.map((track) => {\n        return react_1.default.createElement(FileCard_1.default, { track: track, key: track.id });\n    })));\n}\nexports[\"default\"] = FileList;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9GaWxlTGlzdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtR0FBd0M7QUFDeEMsMkdBQWtDO0FBR2xDLFNBQXdCLFFBQVEsQ0FBQyxFQUFFLE1BQU0sRUFBRTtJQUN6QyxTQUFTLFVBQVUsQ0FBQyxDQUFNLEVBQUUsQ0FBTTtRQUNoQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDO1FBQzNCLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7UUFDM0IsT0FBTyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUNELE9BQU8sQ0FDTCx1Q0FBSyxTQUFTLEVBQUMsOENBQThDLElBQzFELFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtRQUN4QixPQUFPLDhCQUFDLGtCQUFRLElBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsR0FBSSxDQUFDO0lBQ25ELENBQUMsQ0FBQyxDQUNFLENBQ1AsQ0FBQztBQUNKLENBQUM7QUFiRCw4QkFhQyIsInNvdXJjZXMiOlsid2VicGFjazovL21iLWFwcC8uL3NyYy9jb21wb25lbnRzL0ZpbGVMaXN0LnRzeD80NzNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZpbGVDYXJkIGZyb20gXCIuL0ZpbGVDYXJkXCI7XG5pbXBvcnQgeyBJU3RhdGUgYXMgUHJvcHMgfSBmcm9tIFwiLi4vQXBwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpbGVMaXN0KHsgdHJhY2tzIH0pIHtcbiAgZnVuY3Rpb24gc29ydEJ5RGF0ZShhOiBhbnksIGI6IGFueSk6IDEgfCAtMSB8IDAge1xuICAgIGNvbnN0IGRhdGVBID0gYS5jcmVhdGVEYXRlO1xuICAgIGNvbnN0IGRhdGVCID0gYi5jcmVhdGVEYXRlO1xuICAgIHJldHVybiBkYXRlQSA+IGRhdGVCID8gLTEgOiBkYXRlQSA8IGRhdGVCID8gMSA6IDA7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyB0YWItY29udGVudCBiZy10cmFuc3BhcmVudCBub3RlLWhhcy1ncmlkXCI+XG4gICAgICB7dHJhY2tzRGF0YS5tYXAoKHRyYWNrKSA9PiB7XG4gICAgICAgIHJldHVybiA8RmlsZUNhcmQgdHJhY2s9e3RyYWNrfSBrZXk9e3RyYWNrLmlkfSAvPjtcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/FileList.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c038d79fd101ac586313")
/******/ })();
/******/ 
/******/ }
);