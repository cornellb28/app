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

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst React = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst Box_1 = __importDefault(__webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\"));\nconst material_1 = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\nconst renderer_1 = __webpack_require__(/*! ../renderer */ \"./src/renderer.ts\");\nfunction Uploader() {\n    const uploadButton = () => {\n        await (0, renderer_1.upload)();\n    };\n    return (React.createElement(Box_1.default, { component: \"span\", sx: { border: \"1px dashed grey\" } },\n        React.createElement(material_1.Button, { onClick: () => uploadButton() }, \"Upload Files\")));\n}\nexports[\"default\"] = Uploader;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9VcGxvYWRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOEZBQStCO0FBQy9CLHlIQUFvQztBQUNwQyxxR0FBdUM7QUFDdkMsK0VBQXFDO0FBRXJDLFNBQXdCLFFBQVE7SUFDOUIsTUFBTSxZQUFZLEdBQUcsR0FBRyxFQUFFO1FBQ3hCLE1BQU0scUJBQU0sR0FBRTtJQUNoQixDQUFDLENBQUM7SUFFRixPQUFPLENBQ0wsb0JBQUMsYUFBRyxJQUFDLFNBQVMsRUFBQyxNQUFNLEVBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFO1FBQ3JELG9CQUFDLGlCQUFNLElBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLFlBQVksRUFBRSxtQkFBdUIsQ0FDeEQsQ0FDUCxDQUFDO0FBQ0osQ0FBQztBQVZELDhCQVVDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWItYXBwLy4vc3JjL2NvbXBvbmVudHMvVXBsb2FkZXIudHN4P2ZhMjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQm94IGZyb20gXCJAbXVpL21hdGVyaWFsL0JveFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IHVwbG9hZCB9IGZyb20gXCIuLi9yZW5kZXJlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVcGxvYWRlcigpIHtcbiAgY29uc3QgdXBsb2FkQnV0dG9uID0gKCkgPT4ge1xuICAgIGF3YWl0IHVwbG9hZCgpXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGNvbXBvbmVudD1cInNwYW5cIiBzeD17eyBib3JkZXI6IFwiMXB4IGRhc2hlZCBncmV5XCIgfX0+XG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHVwbG9hZEJ1dHRvbigpfT5VcGxvYWQgRmlsZXM8L0J1dHRvbj5cbiAgICA8L0JveD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Uploader.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ff6e63e8402ac1ea0c00")
/******/ })();
/******/ 
/******/ }
);