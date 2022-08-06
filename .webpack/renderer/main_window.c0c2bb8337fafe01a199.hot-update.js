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

/***/ "./src/components/FileCard.tsx":
/*!*************************************!*\
  !*** ./src/components/FileCard.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst React = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nfunction FileCard({ track }) {\n    return React.createElement(\"div\", null, \"FileCard\");\n}\nexports[\"default\"] = FileCard;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9GaWxlQ2FyZC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOEZBQStCO0FBRS9CLFNBQXdCLFFBQVEsQ0FBQyxFQUFFLEtBQUssRUFBRTtJQUN4QyxPQUFPLDRDQUFtQixDQUFDO0FBQzdCLENBQUM7QUFGRCw4QkFFQyIsInNvdXJjZXMiOlsid2VicGFjazovL21iLWFwcC8uL3NyYy9jb21wb25lbnRzL0ZpbGVDYXJkLnRzeD9lOTQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaWxlQ2FyZCh7IHRyYWNrIH0pIHtcbiAgcmV0dXJuIDxkaXY+RmlsZUNhcmQ8L2Rpdj47XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/FileCard.tsx\n");

/***/ }),

/***/ "./src/components/FileList.tsx":
/*!*************************************!*\
  !*** ./src/components/FileList.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst FileCard_1 = __importDefault(__webpack_require__(/*! ./FileCard */ \"./src/components/FileCard.tsx\"));\nfunction FileList({ tracks }) {\n    function sortByDate(a, b) {\n        const dateA = a.createDate;\n        const dateB = b.createDate;\n        return dateA > dateB ? -1 : dateA < dateB ? 1 : 0;\n    }\n    const renderList = () => {\n    };\n    return (react_1.default.createElement(\"div\", { className: \"row tab-content bg-transparent note-has-grid\" }, tracks.map((track) => {\n        return react_1.default.createElement(FileCard_1.default, { track: track, key: track.id });\n    })));\n}\nexports[\"default\"] = FileList;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9GaWxlTGlzdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtR0FBd0M7QUFDeEMsMkdBQWtDO0FBT2xDLFNBQXdCLFFBQVEsQ0FBQyxFQUFFLE1BQU0sRUFBVTtJQUNqRCxTQUFTLFVBQVUsQ0FBQyxDQUFNLEVBQUUsQ0FBTTtRQUNoQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDO1FBQzNCLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7UUFDM0IsT0FBTyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELE1BQU0sVUFBVSxHQUFHLEdBQUcsRUFBRTtJQUV4QixDQUFDO0lBQ0QsT0FBTyxDQUNMLHVDQUFLLFNBQVMsRUFBQyw4Q0FBOEMsSUFDMUQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQ3BCLE9BQU8sOEJBQUMsa0JBQVEsSUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxHQUFJLENBQUM7SUFDbkQsQ0FBQyxDQUFDLENBQ0UsQ0FDUCxDQUFDO0FBQ0osQ0FBQztBQWpCRCw4QkFpQkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYi1hcHAvLi9zcmMvY29tcG9uZW50cy9GaWxlTGlzdC50c3g/NDczYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGaWxlQ2FyZCBmcm9tIFwiLi9GaWxlQ2FyZFwiO1xuaW1wb3J0IHsgSVN0YXRlIGFzIFByb3BzIH0gZnJvbSBcIi4uL0FwcFwiO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgdHJhY2tzOiBQcm9wc1tcInRyYWNrc1wiXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmlsZUxpc3QoeyB0cmFja3MgfTogSVByb3BzKTogSlNYLkVsZW1lbnQge1xuICBmdW5jdGlvbiBzb3J0QnlEYXRlKGE6IGFueSwgYjogYW55KTogMSB8IC0xIHwgMCB7XG4gICAgY29uc3QgZGF0ZUEgPSBhLmNyZWF0ZURhdGU7XG4gICAgY29uc3QgZGF0ZUIgPSBiLmNyZWF0ZURhdGU7XG4gICAgcmV0dXJuIGRhdGVBID4gZGF0ZUIgPyAtMSA6IGRhdGVBIDwgZGF0ZUIgPyAxIDogMDtcbiAgfVxuXG4gIGNvbnN0IHJlbmRlckxpc3QgPSAoKSA9PiB7XG4gICAgXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyB0YWItY29udGVudCBiZy10cmFuc3BhcmVudCBub3RlLWhhcy1ncmlkXCI+XG4gICAgICB7dHJhY2tzLm1hcCgodHJhY2spID0+IHtcbiAgICAgICAgcmV0dXJuIDxGaWxlQ2FyZCB0cmFjaz17dHJhY2t9IGtleT17dHJhY2suaWR9IC8+O1xuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/FileList.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("eb07c8640b33e843a49a")
/******/ })();
/******/ 
/******/ }
);