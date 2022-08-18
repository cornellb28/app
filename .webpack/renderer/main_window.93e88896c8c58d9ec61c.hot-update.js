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

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst React = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nconst FileCard_1 = __importDefault(__webpack_require__(/*! ./FileCard */ \"./src/components/FileCard.tsx\"));\nconst tracks_1 = __importDefault(__webpack_require__(/*! ../../api/tracks */ \"./api/tracks.ts\"));\nconst react_bootstrap_1 = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\nfunction FileList({ tracks }) {\n    // Retrieve Tracks\n    const retreiveTracks = async () => {\n        const response = await tracks_1.default.get(\"/tracks\");\n        return response.data;\n    };\n    react_1.useEffect;\n    const renderList = () => {\n        return tracks.map((track) => {\n            return React.createElement(FileCard_1.default, { track: track, key: track.id });\n        });\n    };\n    return React.createElement(react_bootstrap_1.Row, null, renderList());\n}\nexports[\"default\"] = FileList;\n// https://www.youtube.com/watch?v=jrKcJxF0lAU&t=2019s\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9GaWxlTGlzdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOEZBQStCO0FBQy9CLGtGQUE0QztBQUM1QywyR0FBa0M7QUFDbEMsaUdBQW1DO0FBR25DLG9IQUFzQztBQU10QyxTQUF3QixRQUFRLENBQUMsRUFBRSxNQUFNLEVBQVU7SUFDakQsa0JBQWtCO0lBQ2xCLE1BQU0sY0FBYyxHQUFHLEtBQUssSUFBSSxFQUFFO1FBQ2hDLE1BQU0sUUFBUSxHQUFHLE1BQU0sZ0JBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDMUMsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsQ0FBQztJQUVGLGlCQUFTO0lBRVQsTUFBTSxVQUFVLEdBQUcsR0FBa0IsRUFBRTtRQUNyQyxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUMxQixPQUFPLG9CQUFDLGtCQUFRLElBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsR0FBSSxDQUFDO1FBQ25ELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0lBQ0YsT0FBTyxvQkFBQyxxQkFBRyxRQUFFLFVBQVUsRUFBRSxDQUFPLENBQUM7QUFDbkMsQ0FBQztBQWZELDhCQWVDO0FBRUQsc0RBQXNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWItYXBwLy4vc3JjL2NvbXBvbmVudHMvRmlsZUxpc3QudHN4PzQ3M2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRmlsZUNhcmQgZnJvbSBcIi4vRmlsZUNhcmRcIjtcbmltcG9ydCBhcGkgZnJvbSBcIi4uLy4uL2FwaS90cmFja3NcIjtcbmltcG9ydCB7IHNvcnRCeURhdGUgfSBmcm9tIFwiLi4vLi4vc3JjL2hlbHBlcnMvaGVscGVyXCI7XG5pbXBvcnQgeyBJU3RhdGUgYXMgUHJvcHMgfSBmcm9tIFwiLi4vQXBwXCI7XG5pbXBvcnQgeyBSb3cgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICB0cmFja3M6IFByb3BzW1widHJhY2tzXCJdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaWxlTGlzdCh7IHRyYWNrcyB9OiBJUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIC8vIFJldHJpZXZlIFRyYWNrc1xuICBjb25zdCByZXRyZWl2ZVRyYWNrcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQoXCIvdHJhY2tzXCIpO1xuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICB9O1xuXG4gIHVzZUVmZmVjdFxuXG4gIGNvbnN0IHJlbmRlckxpc3QgPSAoKTogSlNYLkVsZW1lbnRbXSA9PiB7XG4gICAgcmV0dXJuIHRyYWNrcy5tYXAoKHRyYWNrKSA9PiB7XG4gICAgICByZXR1cm4gPEZpbGVDYXJkIHRyYWNrPXt0cmFja30ga2V5PXt0cmFjay5pZH0gLz47XG4gICAgfSk7XG4gIH07XG4gIHJldHVybiA8Um93PntyZW5kZXJMaXN0KCl9PC9Sb3c+O1xufVxuXG4vLyBodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWpyS2NKeEYwbEFVJnQ9MjAxOXNcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/FileList.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a33f7c0581cba2f1e41c")
/******/ })();
/******/ 
/******/ }
);