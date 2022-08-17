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

/***/ "./src/components/Uploader.tsx":
/*!*************************************!*\
  !*** ./src/components/Uploader.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst React = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nconst tracks_1 = __importDefault(__webpack_require__(/*! ../../api/tracks */ \"./api/tracks.ts\"));\nconst Box_1 = __importDefault(__webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\"));\nconst react_bootstrap_1 = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\nconst scanDirectory_1 = __webpack_require__(/*! ../lib/scanDirectory */ \"./src/lib/scanDirectory.ts\");\nconst PermMedia_1 = __importDefault(__webpack_require__(/*! @mui/icons-material/PermMedia */ \"./node_modules/@mui/icons-material/PermMedia.js\"));\nfunction Uploader() {\n    //State\n    const [tracksData, setTrackData] = (0, react_1.useState)();\n    // Retrieve Tracks\n    const retreiveTracks = async () => {\n        const response = await tracks_1.default.get(\"/tracks\");\n        return response.data;\n    };\n    // fetch directory path\n    const uploadButton = async () => {\n        await (0, scanDirectory_1.scanDirectory)();\n        //console.log(getData);\n    };\n    return (React.createElement(React.Fragment, null,\n        React.createElement(react_bootstrap_1.Row, { className: \"mb-4\" },\n            React.createElement(react_bootstrap_1.Col, null,\n                React.createElement(Box_1.default, { id: \"dropzone\", component: \"div\", sx: { border: \"1px dashed grey\" } },\n                    React.createElement(\"h3\", null, \"Upload you Files\"),\n                    React.createElement(\"div\", { className: \"drag-area\" },\n                        React.createElement(\"div\", null,\n                            React.createElement(PermMedia_1.default, { fontSize: \"large\" })),\n                        React.createElement(\"span\", { className: \"\" },\n                            \"Drag & Drop or\",\n                            \" \",\n                            React.createElement(\"a\", { href: \"#\", onClick: () => uploadButton(), className: \"button\" }, \"browse\")),\n                        React.createElement(\"span\", null, \"Supports: MP3, WAV, Folders\")))))));\n}\nexports[\"default\"] = Uploader;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9VcGxvYWRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOEZBQStCO0FBQy9CLGtGQUE0QztBQUM1QyxpR0FBbUM7QUFDbkMseUhBQW9DO0FBQ3BDLG9IQUEyQztBQUMzQyxzR0FBcUQ7QUFDckQsaUpBQTBEO0FBRTFELFNBQXdCLFFBQVE7SUFDOUIsT0FBTztJQUNQLE1BQU0sQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDLEdBQUcsb0JBQVEsR0FBRSxDQUFDO0lBRTlDLGtCQUFrQjtJQUNsQixNQUFNLGNBQWMsR0FBRyxLQUFLLElBQUksRUFBRTtRQUNoQyxNQUFNLFFBQVEsR0FBRyxNQUFNLGdCQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFDLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztJQUN2QixDQUFDLENBQUM7SUFFRix1QkFBdUI7SUFDdkIsTUFBTSxZQUFZLEdBQUcsS0FBSyxJQUFJLEVBQUU7UUFDOUIsTUFBTSxpQ0FBYSxHQUFFLENBQUM7UUFDdEIsdUJBQXVCO0lBQ3pCLENBQUMsQ0FBQztJQUVGLE9BQU8sQ0FDTDtRQUNFLG9CQUFDLHFCQUFHLElBQUMsU0FBUyxFQUFDLE1BQU07WUFDbkIsb0JBQUMscUJBQUc7Z0JBQ0Ysb0JBQUMsYUFBRyxJQUFDLEVBQUUsRUFBQyxVQUFVLEVBQUMsU0FBUyxFQUFDLEtBQUssRUFBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUU7b0JBQ2xFLG1EQUF5QjtvQkFDekIsNkJBQUssU0FBUyxFQUFDLFdBQVc7d0JBQ3hCOzRCQUNFLG9CQUFDLG1CQUFhLElBQUMsUUFBUSxFQUFDLE9BQU8sR0FBRyxDQUM5Qjt3QkFDTiw4QkFBTSxTQUFTLEVBQUMsRUFBRTs7NEJBQ0csR0FBRzs0QkFDdEIsMkJBQUcsSUFBSSxFQUFDLEdBQUcsRUFBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsWUFBWSxFQUFFLEVBQUUsU0FBUyxFQUFDLFFBQVEsYUFFekQsQ0FDQzt3QkFFUCxnRUFBd0MsQ0FDcEMsQ0FDRixDQUNGLENBQ0YsQ0FDTCxDQUNKLENBQUM7QUFDSixDQUFDO0FBeENELDhCQXdDQyIsInNvdXJjZXMiOlsid2VicGFjazovL21iLWFwcC8uL3NyYy9jb21wb25lbnRzL1VwbG9hZGVyLnRzeD9mYTI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGFwaSBmcm9tIFwiLi4vLi4vYXBpL3RyYWNrc1wiO1xuaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIjtcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuaW1wb3J0IHsgc2NhbkRpcmVjdG9yeSB9IGZyb20gXCIuLi9saWIvc2NhbkRpcmVjdG9yeVwiO1xuaW1wb3J0IFBlcm1NZWRpYUljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvUGVybU1lZGlhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVwbG9hZGVyKCkge1xuICAvL1N0YXRlXG4gIGNvbnN0IFt0cmFja3NEYXRhLCBzZXRUcmFja0RhdGFdID0gdXNlU3RhdGUoKTtcblxuICAvLyBSZXRyaWV2ZSBUcmFja3NcbiAgY29uc3QgcmV0cmVpdmVUcmFja3MgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KFwiL3RyYWNrc1wiKTtcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgfTtcblxuICAvLyBmZXRjaCBkaXJlY3RvcnkgcGF0aFxuICBjb25zdCB1cGxvYWRCdXR0b24gPSBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgc2NhbkRpcmVjdG9yeSgpO1xuICAgIC8vY29uc29sZS5sb2coZ2V0RGF0YSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFJvdyBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgIDxDb2w+XG4gICAgICAgICAgPEJveCBpZD1cImRyb3B6b25lXCIgY29tcG9uZW50PVwiZGl2XCIgc3g9e3sgYm9yZGVyOiBcIjFweCBkYXNoZWQgZ3JleVwiIH19PlxuICAgICAgICAgICAgPGgzPlVwbG9hZCB5b3UgRmlsZXM8L2gzPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcmFnLWFyZWFcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8UGVybU1lZGlhSWNvbiBmb250U2l6ZT1cImxhcmdlXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgIERyYWcgJmFtcDsgRHJvcCBvcntcIiBcIn1cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eygpID0+IHVwbG9hZEJ1dHRvbigpfSBjbGFzc05hbWU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgIGJyb3dzZVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICAgIDxzcGFuPlN1cHBvcnRzOiBNUDMsIFdBViwgRm9sZGVyczwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Uploader.tsx\n");

/***/ }),

/***/ "./src/lib/scanDirectory.ts":
/*!**********************************!*\
  !*** ./src/lib/scanDirectory.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.scanDirectory = void 0;\nasync function scanDirectory() {\n    const returnedTracks = await window.api.uploadFiles();\n    console.log(returnedTracks);\n}\nexports.scanDirectory = scanDirectory;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL3NjYW5EaXJlY3RvcnkudHMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQU8sS0FBSyxVQUFVLGFBQWE7SUFDakMsTUFBTSxjQUFjLEdBQUcsTUFBTSxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDOUIsQ0FBQztBQUhELHNDQUdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWItYXBwLy4vc3JjL2xpYi9zY2FuRGlyZWN0b3J5LnRzPzgzZWMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNjYW5EaXJlY3RvcnkoKSB7XG4gIGNvbnN0IHJldHVybmVkVHJhY2tzID0gYXdhaXQgd2luZG93LmFwaS51cGxvYWRGaWxlcygpO1xuICBjb25zb2xlLmxvZyhyZXR1cm5lZFRyYWNrcyk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/scanDirectory.ts\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3a9ca08ede7cbbb6d75c")
/******/ })();
/******/ 
/******/ }
);