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

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst FileCard_1 = __importDefault(__webpack_require__(/*! ./FileCard */ \"./src/components/FileCard.tsx\"));\nfunction FileList({ tracks }) {\n    function sortByDate(a, b) {\n        const dateA = a.createDate;\n        const dateB = b.createDate;\n        return dateA > dateB ? -1 : dateA < dateB ? 1 : 0;\n    }\n    const renderList = () => {\n        return tracks.map((track) => {\n            return react_1.default.createElement(FileCard_1.default, { track: track, key: track.id });\n        });\n    };\n    return (react_1.default.createElement(\"div\", { className: \"row tab-content bg-transparent note-has-grid\" }, renderList()));\n}\nexports[\"default\"] = FileList;\n// https://www.youtube.com/watch?v=jrKcJxF0lAU&t=2019s\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9GaWxlTGlzdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtR0FBd0M7QUFDeEMsMkdBQWtDO0FBT2xDLFNBQXdCLFFBQVEsQ0FBQyxFQUFFLE1BQU0sRUFBVTtJQUNqRCxTQUFTLFVBQVUsQ0FBQyxDQUFNLEVBQUUsQ0FBTTtRQUNoQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDO1FBQzNCLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7UUFDM0IsT0FBTyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELE1BQU0sVUFBVSxHQUFHLEdBQWtCLEVBQUU7UUFDckMsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDMUIsT0FBTyw4QkFBQyxrQkFBUSxJQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLEdBQUksQ0FBQztRQUNuRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztJQUNGLE9BQU8sQ0FDTCx1Q0FBSyxTQUFTLEVBQUMsOENBQThDLElBQzFELFVBQVUsRUFBRSxDQUNULENBQ1AsQ0FBQztBQUNKLENBQUM7QUFqQkQsOEJBaUJDO0FBRUQsc0RBQXNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWItYXBwLy4vc3JjL2NvbXBvbmVudHMvRmlsZUxpc3QudHN4PzQ3M2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRmlsZUNhcmQgZnJvbSBcIi4vRmlsZUNhcmRcIjtcbmltcG9ydCB7IElTdGF0ZSBhcyBQcm9wcyB9IGZyb20gXCIuLi9BcHBcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHRyYWNrczogUHJvcHNbXCJ0cmFja3NcIl07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpbGVMaXN0KHsgdHJhY2tzIH06IElQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgZnVuY3Rpb24gc29ydEJ5RGF0ZShhOiBhbnksIGI6IGFueSk6IDEgfCAtMSB8IDAge1xuICAgIGNvbnN0IGRhdGVBID0gYS5jcmVhdGVEYXRlO1xuICAgIGNvbnN0IGRhdGVCID0gYi5jcmVhdGVEYXRlO1xuICAgIHJldHVybiBkYXRlQSA+IGRhdGVCID8gLTEgOiBkYXRlQSA8IGRhdGVCID8gMSA6IDA7XG4gIH1cblxuICBjb25zdCByZW5kZXJMaXN0ID0gKCk6IEpTWC5FbGVtZW50W10gPT4ge1xuICAgIHJldHVybiB0cmFja3MubWFwKCh0cmFjaykgPT4ge1xuICAgICAgcmV0dXJuIDxGaWxlQ2FyZCB0cmFjaz17dHJhY2t9IGtleT17dHJhY2suaWR9IC8+O1xuICAgIH0pO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHRhYi1jb250ZW50IGJnLXRyYW5zcGFyZW50IG5vdGUtaGFzLWdyaWRcIj5cbiAgICAgIHtyZW5kZXJMaXN0KCl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbi8vIGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9anJLY0p4RjBsQVUmdD0yMDE5c1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/FileList.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("575f007eaf9f1313108f")
/******/ })();
/******/ 
/******/ }
);