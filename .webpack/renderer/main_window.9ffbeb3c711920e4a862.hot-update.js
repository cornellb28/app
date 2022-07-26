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

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst React = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst Box_1 = __importDefault(__webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\"));\nconst material_1 = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\nconst renderer_1 = __webpack_require__(/*! ../renderer */ \"./src/renderer.ts\");\nfunction Uploader() {\n    const uploadButton = async () => {\n        await (0, renderer_1.upload)();\n    };\n    return (React.createElement(Box_1.default, { component: \"span\", sx: { border: \"1px dashed grey\" } },\n        React.createElement(material_1.Button, { onClick: () => uploadButton() }, \"Upload Files\")));\n}\nexports[\"default\"] = Uploader;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9VcGxvYWRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOEZBQStCO0FBQy9CLHlIQUFvQztBQUNwQyxxR0FBdUM7QUFDdkMsK0VBQXFDO0FBRXJDLFNBQXdCLFFBQVE7SUFDOUIsTUFBTSxZQUFZLEdBQUcsS0FBSyxJQUFJLEVBQUU7UUFDOUIsTUFBTSxxQkFBTSxHQUFFLENBQUM7SUFDakIsQ0FBQyxDQUFDO0lBRUYsT0FBTyxDQUNMLG9CQUFDLGFBQUcsSUFBQyxTQUFTLEVBQUMsTUFBTSxFQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRTtRQUNyRCxvQkFBQyxpQkFBTSxJQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxZQUFZLEVBQUUsbUJBQXVCLENBQ3hELENBQ1AsQ0FBQztBQUNKLENBQUM7QUFWRCw4QkFVQyIsInNvdXJjZXMiOlsid2VicGFjazovL21iLWFwcC8uL3NyYy9jb21wb25lbnRzL1VwbG9hZGVyLnRzeD9mYTI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyB1cGxvYWQgfSBmcm9tIFwiLi4vcmVuZGVyZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXBsb2FkZXIoKSB7XG4gIGNvbnN0IHVwbG9hZEJ1dHRvbiA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCB1cGxvYWQoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxCb3ggY29tcG9uZW50PVwic3BhblwiIHN4PXt7IGJvcmRlcjogXCIxcHggZGFzaGVkIGdyZXlcIiB9fT5cbiAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gdXBsb2FkQnV0dG9uKCl9PlVwbG9hZCBGaWxlczwvQnV0dG9uPlxuICAgIDwvQm94PlxuICApO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Uploader.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b6543e50916978816f05")
/******/ })();
/******/ 
/******/ }
);