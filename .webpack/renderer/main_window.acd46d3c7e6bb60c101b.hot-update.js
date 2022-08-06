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

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst FileCard_1 = __importDefault(__webpack_require__(/*! ./FileCard */ \"./src/components/FileCard.tsx\"));\nfunction FileList() {\n    function sortByDate(a, b) {\n        const dateA = a.createDate;\n        const dateB = b.createDate;\n        return dateA > dateB ? -1 : dateA < dateB ? 1 : 0;\n    }\n    return (react_1.default.createElement(\"div\", { className: \"row tab-content bg-transparent note-has-grid\" }, tracksData.map((track) => {\n        return react_1.default.createElement(FileCard_1.default, { track: track, key: track.id });\n    })));\n}\nexports[\"default\"] = FileList;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9GaWxlTGlzdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtR0FBd0M7QUFFeEMsMkdBQWtDO0FBS2xDLFNBQXdCLFFBQVE7SUFFOUIsU0FBUyxVQUFVLENBQUMsQ0FBTSxFQUFFLENBQU07UUFDaEMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztRQUMzQixNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDO1FBQzNCLE9BQU8sS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDRCxPQUFPLENBQ0wsdUNBQUssU0FBUyxFQUFDLDhDQUE4QyxJQUMxRCxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7UUFDeEIsT0FBTyw4QkFBQyxrQkFBUSxJQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLEdBQUksQ0FBQztJQUNuRCxDQUFDLENBQUMsQ0FDRSxDQUNQLENBQUM7QUFDSixDQUFDO0FBZEQsOEJBY0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYi1hcHAvLi9zcmMvY29tcG9uZW50cy9GaWxlTGlzdC50c3g/NDczYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEZpbGVDYXJkIGZyb20gXCIuL0ZpbGVDYXJkXCI7XG5pbXBvcnQgeyB0cmFja01ldGEgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9pbmRleFwiO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmlsZUxpc3QoKSB7XG4gIFxuICBmdW5jdGlvbiBzb3J0QnlEYXRlKGE6IGFueSwgYjogYW55KTogMSB8IC0xIHwgMCB7XG4gICAgY29uc3QgZGF0ZUEgPSBhLmNyZWF0ZURhdGU7XG4gICAgY29uc3QgZGF0ZUIgPSBiLmNyZWF0ZURhdGU7XG4gICAgcmV0dXJuIGRhdGVBID4gZGF0ZUIgPyAtMSA6IGRhdGVBIDwgZGF0ZUIgPyAxIDogMDtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHRhYi1jb250ZW50IGJnLXRyYW5zcGFyZW50IG5vdGUtaGFzLWdyaWRcIj5cbiAgICAgIHt0cmFja3NEYXRhLm1hcCgodHJhY2spID0+IHtcbiAgICAgICAgcmV0dXJuIDxGaWxlQ2FyZCB0cmFjaz17dHJhY2t9IGtleT17dHJhY2suaWR9IC8+O1xuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/FileList.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("51b539e9e303cebdd521")
/******/ })();
/******/ 
/******/ }
);