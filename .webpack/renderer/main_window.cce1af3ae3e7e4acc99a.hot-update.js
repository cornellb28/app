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

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst FileCard_1 = __importDefault(__webpack_require__(/*! ./FileCard */ \"./src/components/FileCard.tsx\"));\nfunction FileList({ tracks }) {\n    function sortByDate(a, b) {\n        const dateA = a.createDate;\n        const dateB = b.createDate;\n        return dateA > dateB ? -1 : dateA < dateB ? 1 : 0;\n    }\n    const renderList = () => {\n        return tracks.map((track) => {\n            return react_1.default.createElement(FileCard_1.default, { track: track, key: track.id });\n        });\n    };\n    return react_1.default.createElement(\"div\", { className: \"row tab-content bg-transparent note-has-grid\" }, r);\n}\nexports[\"default\"] = FileList;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9GaWxlTGlzdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtR0FBd0M7QUFDeEMsMkdBQWtDO0FBT2xDLFNBQXdCLFFBQVEsQ0FBQyxFQUFFLE1BQU0sRUFBVTtJQUNqRCxTQUFTLFVBQVUsQ0FBQyxDQUFNLEVBQUUsQ0FBTTtRQUNoQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDO1FBQzNCLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7UUFDM0IsT0FBTyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELE1BQU0sVUFBVSxHQUFHLEdBQUcsRUFBRTtRQUN0QixPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUMxQixPQUFPLDhCQUFDLGtCQUFRLElBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsR0FBSSxDQUFDO1FBQ25ELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0lBQ0YsT0FBTyx1Q0FBSyxTQUFTLEVBQUMsOENBQThDLElBQUUsQ0FBQyxDQUFPLENBQUM7QUFDakYsQ0FBQztBQWJELDhCQWFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWItYXBwLy4vc3JjL2NvbXBvbmVudHMvRmlsZUxpc3QudHN4PzQ3M2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRmlsZUNhcmQgZnJvbSBcIi4vRmlsZUNhcmRcIjtcbmltcG9ydCB7IElTdGF0ZSBhcyBQcm9wcyB9IGZyb20gXCIuLi9BcHBcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHRyYWNrczogUHJvcHNbXCJ0cmFja3NcIl07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpbGVMaXN0KHsgdHJhY2tzIH06IElQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgZnVuY3Rpb24gc29ydEJ5RGF0ZShhOiBhbnksIGI6IGFueSk6IDEgfCAtMSB8IDAge1xuICAgIGNvbnN0IGRhdGVBID0gYS5jcmVhdGVEYXRlO1xuICAgIGNvbnN0IGRhdGVCID0gYi5jcmVhdGVEYXRlO1xuICAgIHJldHVybiBkYXRlQSA+IGRhdGVCID8gLTEgOiBkYXRlQSA8IGRhdGVCID8gMSA6IDA7XG4gIH1cblxuICBjb25zdCByZW5kZXJMaXN0ID0gKCkgPT4ge1xuICAgIHJldHVybiB0cmFja3MubWFwKCh0cmFjaykgPT4ge1xuICAgICAgcmV0dXJuIDxGaWxlQ2FyZCB0cmFjaz17dHJhY2t9IGtleT17dHJhY2suaWR9IC8+O1xuICAgIH0pO1xuICB9O1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJyb3cgdGFiLWNvbnRlbnQgYmctdHJhbnNwYXJlbnQgbm90ZS1oYXMtZ3JpZFwiPntyfTwvZGl2Pjtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/FileList.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fcc45470a11aaaa8ca6b")
/******/ })();
/******/ 
/******/ }
);