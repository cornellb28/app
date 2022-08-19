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

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst React = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nconst tracks_1 = __importDefault(__webpack_require__(/*! ../../api/tracks */ \"./api/tracks.ts\"));\nconst Box_1 = __importDefault(__webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\"));\nconst react_bootstrap_1 = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\nconst scanDirectory_1 = __webpack_require__(/*! ../helpers/scanDirectory */ \"./src/helpers/scanDirectory.ts\");\nconst PermMedia_1 = __importDefault(__webpack_require__(/*! @mui/icons-material/PermMedia */ \"./node_modules/@mui/icons-material/PermMedia.js\"));\nfunction Uploader() {\n    //State\n    const [tracksData, setTrackData] = (0, react_1.useState)();\n    // Retrieve Tracks\n    const retreiveTracks = async () => {\n        const response = await tracks_1.default.get(\"/tracks\");\n        return response.data;\n    };\n    // fetch directory path\n    const uploadButton = async () => {\n        const getData = await (0, scanDirectory_1.scanDirectory)();\n        console.log(getData);\n    };\n    return (React.createElement(React.Fragment, null,\n        React.createElement(react_bootstrap_1.Row, { className: \"mb-4\" },\n            React.createElement(react_bootstrap_1.Col, null,\n                React.createElement(Box_1.default, { id: \"dropzone\", component: \"div\", sx: { border: \"1px dashed grey\" } },\n                    React.createElement(\"h3\", null, \"Upload you Files\"),\n                    React.createElement(\"div\", { className: \"drag-area\" },\n                        React.createElement(\"div\", null,\n                            React.createElement(PermMedia_1.default, { fontSize: \"large\" })),\n                        React.createElement(\"span\", { className: \"\" },\n                            \"Drag & Drop or\",\n                            \" \",\n                            React.createElement(\"a\", { href: \"#\", onClick: () => uploadButton(), className: \"button\" }, \"browse\")),\n                        React.createElement(\"span\", null, \"Supports: MP3, WAV, Folders\")))))));\n}\nexports[\"default\"] = Uploader;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9VcGxvYWRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOEZBQStCO0FBQy9CLGtGQUE0QztBQUM1QyxpR0FBbUM7QUFDbkMseUhBQW9DO0FBQ3BDLG9IQUEyQztBQUMzQyw4R0FBdUQ7QUFDdkQsaUpBQTBEO0FBRTFELFNBQXdCLFFBQVE7SUFDOUIsT0FBTztJQUNQLE1BQU0sQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDLEdBQUcsb0JBQVEsR0FBRSxDQUFDO0lBRTlDLGtCQUFrQjtJQUNsQixNQUFNLGNBQWMsR0FBRyxLQUFLLElBQUksRUFBRTtRQUNoQyxNQUFNLFFBQVEsR0FBRyxNQUFNLGdCQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFDLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztJQUN2QixDQUFDLENBQUM7SUFFRix1QkFBdUI7SUFDdkIsTUFBTSxZQUFZLEdBQUcsS0FBSyxJQUFJLEVBQUU7UUFDOUIsTUFBTSxPQUFPLEdBQUcsTUFBTSxpQ0FBYSxHQUFFLENBQUM7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QixDQUFDLENBQUM7SUFFRixPQUFPLENBQ0w7UUFDRSxvQkFBQyxxQkFBRyxJQUFDLFNBQVMsRUFBQyxNQUFNO1lBQ25CLG9CQUFDLHFCQUFHO2dCQUNGLG9CQUFDLGFBQUcsSUFBQyxFQUFFLEVBQUMsVUFBVSxFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFO29CQUNsRSxtREFBeUI7b0JBQ3pCLDZCQUFLLFNBQVMsRUFBQyxXQUFXO3dCQUN4Qjs0QkFDRSxvQkFBQyxtQkFBYSxJQUFDLFFBQVEsRUFBQyxPQUFPLEdBQUcsQ0FDOUI7d0JBQ04sOEJBQU0sU0FBUyxFQUFDLEVBQUU7OzRCQUNHLEdBQUc7NEJBQ3RCLDJCQUFHLElBQUksRUFBQyxHQUFHLEVBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLFlBQVksRUFBRSxFQUFFLFNBQVMsRUFBQyxRQUFRLGFBRXpELENBQ0M7d0JBRVAsZ0VBQXdDLENBQ3BDLENBQ0YsQ0FDRixDQUNGLENBQ0wsQ0FDSixDQUFDO0FBQ0osQ0FBQztBQXhDRCw4QkF3Q0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYi1hcHAvLi9zcmMvY29tcG9uZW50cy9VcGxvYWRlci50c3g/ZmEyNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBhcGkgZnJvbSBcIi4uLy4uL2FwaS90cmFja3NcIjtcbmltcG9ydCBCb3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQm94XCI7XG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcbmltcG9ydCB7IHNjYW5EaXJlY3RvcnkgfSBmcm9tIFwiLi4vaGVscGVycy9zY2FuRGlyZWN0b3J5XG5pbXBvcnQgUGVybU1lZGlhSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9QZXJtTWVkaWFcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXBsb2FkZXIoKSB7XG4gIC8vU3RhdGVcbiAgY29uc3QgW3RyYWNrc0RhdGEsIHNldFRyYWNrRGF0YV0gPSB1c2VTdGF0ZSgpO1xuXG4gIC8vIFJldHJpZXZlIFRyYWNrc1xuICBjb25zdCByZXRyZWl2ZVRyYWNrcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQoXCIvdHJhY2tzXCIpO1xuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICB9O1xuXG4gIC8vIGZldGNoIGRpcmVjdG9yeSBwYXRoXG4gIGNvbnN0IHVwbG9hZEJ1dHRvbiA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBnZXREYXRhID0gYXdhaXQgc2NhbkRpcmVjdG9yeSgpO1xuICAgIGNvbnNvbGUubG9nKGdldERhdGEpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxSb3cgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICA8Q29sPlxuICAgICAgICAgIDxCb3ggaWQ9XCJkcm9wem9uZVwiIGNvbXBvbmVudD1cImRpdlwiIHN4PXt7IGJvcmRlcjogXCIxcHggZGFzaGVkIGdyZXlcIiB9fT5cbiAgICAgICAgICAgIDxoMz5VcGxvYWQgeW91IEZpbGVzPC9oMz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJhZy1hcmVhXCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFBlcm1NZWRpYUljb24gZm9udFNpemU9XCJsYXJnZVwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICBEcmFnICZhbXA7IERyb3Agb3J7XCIgXCJ9XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoKSA9PiB1cGxvYWRCdXR0b24oKX0gY2xhc3NOYW1lPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICBicm93c2VcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgICA8c3Bhbj5TdXBwb3J0czogTVAzLCBXQVYsIEZvbGRlcnM8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Uploader.tsx\n");

/***/ }),

/***/ "./src/helpers/scanDirectory.ts":
/*!**************************************!*\
  !*** ./src/helpers/scanDirectory.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.scanDirectory = void 0;\nasync function scanDirectory() {\n    return await window.api.uploadFiles();\n}\nexports.scanDirectory = scanDirectory;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGVscGVycy9zY2FuRGlyZWN0b3J5LnRzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFPLEtBQUssVUFBVSxhQUFhO0lBQ2pDLE9BQU8sTUFBTSxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ3hDLENBQUM7QUFGRCxzQ0FFQyIsInNvdXJjZXMiOlsid2VicGFjazovL21iLWFwcC8uL3NyYy9oZWxwZXJzL3NjYW5EaXJlY3RvcnkudHM/NTgxMiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgYXN5bmMgZnVuY3Rpb24gc2NhbkRpcmVjdG9yeSgpIHtcbiAgcmV0dXJuIGF3YWl0IHdpbmRvdy5hcGkudXBsb2FkRmlsZXMoKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/helpers/scanDirectory.ts\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("defb66cdf7bf20a0bb88")
/******/ })();
/******/ 
/******/ }
);