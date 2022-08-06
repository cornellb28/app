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

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst FileCard_1 = __importDefault(__webpack_require__(/*! ./FileCard */ \"./src/components/FileCard.tsx\"));\nfunction FileList(props) {\n    function sortByDate(a, b) {\n        const dateA = a.createDate;\n        const dateB = b.createDate;\n        return dateA > dateB ? -1 : dateA < dateB ? 1 : 0;\n    }\n    return (react_1.default.createElement(\"div\", { className: \"row tab-content bg-transparent note-has-grid\" }, tracks.map((track) => {\n        return react_1.default.createElement(FileCard_1.default, { track: track, key: track.id });\n    })));\n}\nexports[\"default\"] = FileList;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9GaWxlTGlzdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtR0FBd0M7QUFDeEMsMkdBQWtDO0FBT2xDLFNBQXdCLFFBQVEsQ0FBQyxLQUFZO0lBQzNDLFNBQVMsVUFBVSxDQUFDLENBQU0sRUFBRSxDQUFNO1FBQ2hDLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7UUFDM0IsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztRQUMzQixPQUFPLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBQ0QsT0FBTyxDQUNMLHVDQUFLLFNBQVMsRUFBQyw4Q0FBOEMsSUFDMUQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQ3BCLE9BQU8sOEJBQUMsa0JBQVEsSUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxHQUFJLENBQUM7SUFDbkQsQ0FBQyxDQUFDLENBQ0UsQ0FDUCxDQUFDO0FBQ0osQ0FBQztBQWJELDhCQWFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWItYXBwLy4vc3JjL2NvbXBvbmVudHMvRmlsZUxpc3QudHN4PzQ3M2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRmlsZUNhcmQgZnJvbSBcIi4vRmlsZUNhcmRcIjtcbmltcG9ydCB7IElTdGF0ZSBhcyBQcm9wcyB9IGZyb20gXCIuLi9BcHBcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHRyYWNrczogUHJvcHNbXCJ0cmFja3NcIl07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpbGVMaXN0KHByb3BzOiBJUHJvcCkge1xuICBmdW5jdGlvbiBzb3J0QnlEYXRlKGE6IGFueSwgYjogYW55KTogMSB8IC0xIHwgMCB7XG4gICAgY29uc3QgZGF0ZUEgPSBhLmNyZWF0ZURhdGU7XG4gICAgY29uc3QgZGF0ZUIgPSBiLmNyZWF0ZURhdGU7XG4gICAgcmV0dXJuIGRhdGVBID4gZGF0ZUIgPyAtMSA6IGRhdGVBIDwgZGF0ZUIgPyAxIDogMDtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHRhYi1jb250ZW50IGJnLXRyYW5zcGFyZW50IG5vdGUtaGFzLWdyaWRcIj5cbiAgICAgIHt0cmFja3MubWFwKCh0cmFjaykgPT4ge1xuICAgICAgICByZXR1cm4gPEZpbGVDYXJkIHRyYWNrPXt0cmFja30ga2V5PXt0cmFjay5pZH0gLz47XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/FileList.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("48ff2ba102ffaefe423f")
/******/ })();
/******/ 
/******/ }
);