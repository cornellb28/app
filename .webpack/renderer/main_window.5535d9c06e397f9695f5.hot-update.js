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

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst React = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nconst FileCard_1 = __importDefault(__webpack_require__(/*! ./FileCard */ \"./src/components/FileCard.tsx\"));\nconst tracks_1 = __importDefault(__webpack_require__(/*! ../../api/tracks */ \"./api/tracks.ts\"));\nconst react_bootstrap_1 = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\nfunction FileList({ tracks }) {\n    // Retrieve Tracks\n    const retreiveTracks = async () => {\n        const response = await tracks_1.default.get(\"/tracks\");\n        return response.data;\n    };\n    (0, react_1.useEffect)(() => {\n        const getAllTracks = async () => {\n            const allTracks = await retreiveTracks();\n            if (!allTracks)\n                return;\n            set;\n        };\n    }, []);\n    const renderList = () => {\n        return tracks.map((track) => {\n            return React.createElement(FileCard_1.default, { track: track, key: track.id });\n        });\n    };\n    return React.createElement(react_bootstrap_1.Row, null, renderList());\n}\nexports[\"default\"] = FileList;\n// https://www.youtube.com/watch?v=jrKcJxF0lAU&t=2019s\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9GaWxlTGlzdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOEZBQStCO0FBQy9CLGtGQUE0QztBQUM1QywyR0FBa0M7QUFDbEMsaUdBQW1DO0FBR25DLG9IQUFzQztBQU10QyxTQUF3QixRQUFRLENBQUMsRUFBRSxNQUFNLEVBQVU7SUFDakQsa0JBQWtCO0lBQ2xCLE1BQU0sY0FBYyxHQUFHLEtBQUssSUFBSSxFQUFFO1FBQ2hDLE1BQU0sUUFBUSxHQUFHLE1BQU0sZ0JBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDMUMsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQ3ZCLENBQUMsQ0FBQztJQUVGLHFCQUFTLEVBQUMsR0FBRyxFQUFFO1FBQ2IsTUFBTSxZQUFZLEdBQUcsS0FBSyxJQUFJLEVBQUU7WUFDOUIsTUFBTSxTQUFTLEdBQUcsTUFBTSxjQUFjLEVBQUUsQ0FBQztZQUN6QyxJQUFJLENBQUMsU0FBUztnQkFBRSxPQUFPO1lBQ3ZCLEdBQUc7UUFDTCxDQUFDLENBQUM7SUFDSixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxNQUFNLFVBQVUsR0FBRyxHQUFrQixFQUFFO1FBQ3JDLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQzFCLE9BQU8sb0JBQUMsa0JBQVEsSUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxHQUFJLENBQUM7UUFDbkQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7SUFDRixPQUFPLG9CQUFDLHFCQUFHLFFBQUUsVUFBVSxFQUFFLENBQU8sQ0FBQztBQUNuQyxDQUFDO0FBckJELDhCQXFCQztBQUVELHNEQUFzRCIsInNvdXJjZXMiOlsid2VicGFjazovL21iLWFwcC8uL3NyYy9jb21wb25lbnRzL0ZpbGVMaXN0LnRzeD80NzNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZpbGVDYXJkIGZyb20gXCIuL0ZpbGVDYXJkXCI7XG5pbXBvcnQgYXBpIGZyb20gXCIuLi8uLi9hcGkvdHJhY2tzXCI7XG5pbXBvcnQgeyBzb3J0QnlEYXRlIH0gZnJvbSBcIi4uLy4uL3NyYy9oZWxwZXJzL2hlbHBlclwiO1xuaW1wb3J0IHsgSVN0YXRlIGFzIFByb3BzIH0gZnJvbSBcIi4uL0FwcFwiO1xuaW1wb3J0IHsgUm93IH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgdHJhY2tzOiBQcm9wc1tcInRyYWNrc1wiXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmlsZUxpc3QoeyB0cmFja3MgfTogSVByb3BzKTogSlNYLkVsZW1lbnQge1xuICAvLyBSZXRyaWV2ZSBUcmFja3NcbiAgY29uc3QgcmV0cmVpdmVUcmFja3MgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KFwiL3RyYWNrc1wiKTtcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGdldEFsbFRyYWNrcyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGFsbFRyYWNrcyA9IGF3YWl0IHJldHJlaXZlVHJhY2tzKCk7XG4gICAgICBpZiAoIWFsbFRyYWNrcykgcmV0dXJuO1xuICAgICAgc2V0XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHJlbmRlckxpc3QgPSAoKTogSlNYLkVsZW1lbnRbXSA9PiB7XG4gICAgcmV0dXJuIHRyYWNrcy5tYXAoKHRyYWNrKSA9PiB7XG4gICAgICByZXR1cm4gPEZpbGVDYXJkIHRyYWNrPXt0cmFja30ga2V5PXt0cmFjay5pZH0gLz47XG4gICAgfSk7XG4gIH07XG4gIHJldHVybiA8Um93PntyZW5kZXJMaXN0KCl9PC9Sb3c+O1xufVxuXG4vLyBodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWpyS2NKeEYwbEFVJnQ9MjAxOXNcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/FileList.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e0cc7db8f83d5008c0e3")
/******/ })();
/******/ 
/******/ }
);