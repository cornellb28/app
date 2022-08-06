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

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst FileCard_1 = __importDefault(__webpack_require__(/*! ./FileCard */ \"./src/components/FileCard.tsx\"));\nfunction FileList() {\n    function sortByDate(a, b) {\n        const dateA = a.createDate;\n        const dateB = b.createDate;\n        return dateA > dateB ? -1 : dateA < dateB ? 1 : 0;\n    }\n    return (react_1.default.createElement(\"div\", { className: \"row tab-content bg-transparent note-has-grid\" }, tracksData.map((track) => {\n        return react_1.default.createElement(FileCard_1.default, { track: track, key: track.id });\n    })));\n}\nexports[\"default\"] = FileList;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9GaWxlTGlzdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtR0FBd0M7QUFFeEMsMkdBQWtDO0FBT2xDLFNBQXdCLFFBQVE7SUFFOUIsU0FBUyxVQUFVLENBQUMsQ0FBTSxFQUFFLENBQU07UUFDaEMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztRQUMzQixNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDO1FBQzNCLE9BQU8sS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDRCxPQUFPLENBQ0wsdUNBQUssU0FBUyxFQUFDLDhDQUE4QyxJQUMxRCxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7UUFDeEIsT0FBTyw4QkFBQyxrQkFBUSxJQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLEdBQUksQ0FBQztJQUNuRCxDQUFDLENBQUMsQ0FDRSxDQUNQLENBQUM7QUFDSixDQUFDO0FBZEQsOEJBY0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYi1hcHAvLi9zcmMvY29tcG9uZW50cy9GaWxlTGlzdC50c3g/NDczYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEZpbGVDYXJkIGZyb20gXCIuL0ZpbGVDYXJkXCI7XG5pbXBvcnQgeyB0cmFja01ldGEgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9pbmRleFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0ZSB7XG4gIGRhdGE6IHRyYWNrTWV0YVtdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaWxlTGlzdCgpIHtcbiAgXG4gIGZ1bmN0aW9uIHNvcnRCeURhdGUoYTogYW55LCBiOiBhbnkpOiAxIHwgLTEgfCAwIHtcbiAgICBjb25zdCBkYXRlQSA9IGEuY3JlYXRlRGF0ZTtcbiAgICBjb25zdCBkYXRlQiA9IGIuY3JlYXRlRGF0ZTtcbiAgICByZXR1cm4gZGF0ZUEgPiBkYXRlQiA/IC0xIDogZGF0ZUEgPCBkYXRlQiA/IDEgOiAwO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgdGFiLWNvbnRlbnQgYmctdHJhbnNwYXJlbnQgbm90ZS1oYXMtZ3JpZFwiPlxuICAgICAge3RyYWNrc0RhdGEubWFwKCh0cmFjaykgPT4ge1xuICAgICAgICByZXR1cm4gPEZpbGVDYXJkIHRyYWNrPXt0cmFja30ga2V5PXt0cmFjay5pZH0gLz47XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/FileList.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("37d7c54457373b5eefbb")
/******/ })();
/******/ 
/******/ }
);