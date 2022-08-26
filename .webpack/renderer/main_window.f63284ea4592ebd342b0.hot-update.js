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

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst React = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst react_bootstrap_1 = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\nconst CardMedia_1 = __importDefault(__webpack_require__(/*! @mui/material/CardMedia */ \"./node_modules/@mui/material/CardMedia/index.js\"));\nconst Card_1 = __importDefault(__webpack_require__(/*! @mui/material/Card */ \"./node_modules/@mui/material/Card/index.js\"));\nconst CardContent_1 = __importDefault(__webpack_require__(/*! @mui/material/CardContent */ \"./node_modules/@mui/material/CardContent/index.js\"));\nconst Typography_1 = __importDefault(__webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\"));\nconst Box_1 = __importDefault(__webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\"));\nfunction FileCard({ track }) {\n    const [anchorEl, setAnchorEl] = React.useState(null);\n    const open = Boolean(anchorEl);\n    const handleClick = (event) => {\n        setAnchorEl(event.currentTarget);\n    };\n    const handleClose = () => {\n        setAnchorEl(null);\n    };\n    const ITEM_HEIGHT = 48;\n    return (React.createElement(react_bootstrap_1.Col, { md: 4 },\n        React.createElement(Card_1.default, { id: \"trackCard\", className: \"p-0 mb-3\" },\n            React.createElement(Box_1.default, { component: \"div\", className: \"position-relative\", id: \"track-media-card\" },\n                React.createElement(CardMedia_1.default, { component: \"img\", image: track.image, alt: \"Live from space album cover\" }),\n                React.createElement(Box_1.default, { component: \"div\", className: \"track-media-bpm position-absolute d-flex flex-column p-2\" },\n                    React.createElement(\"span\", { className: \"bpm-label text-uppercase fw-bold fs-6\" }, \"bpm\"),\n                    React.createElement(\"span\", { className: \"bpm fw-bold fs-4\" }, track.bpm))),\n            React.createElement(CardContent_1.default, { className: \"track-media-content\" },\n                React.createElement(Typography_1.default, { sx: { fontSize: 14 }, color: \"text.secondary\", gutterBottom: true }, track.artist),\n                React.createElement(Typography_1.default, { variant: \"h3\", sx: { fontSize: 21 }, component: \"div\" }, track.title)))));\n}\nexports[\"default\"] = FileCard;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9GaWxlQ2FyZC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOEZBQStCO0FBRy9CLG9IQUFzQztBQUl0QywySUFBZ0Q7QUFDaEQsNEhBQXNDO0FBQ3RDLGlKQUFvRDtBQUtwRCw4SUFBa0Q7QUFDbEQseUhBQW9DO0FBT3BDLFNBQXdCLFFBQVEsQ0FBQyxFQUFFLEtBQUssRUFBUztJQUMvQyxNQUFNLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQXFCLElBQUksQ0FBQyxDQUFDO0lBQ3pFLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvQixNQUFNLFdBQVcsR0FBRyxDQUFDLEtBQW9DLEVBQUUsRUFBRTtRQUMzRCxXQUFXLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ25DLENBQUMsQ0FBQztJQUNGLE1BQU0sV0FBVyxHQUFHLEdBQUcsRUFBRTtRQUN2QixXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEIsQ0FBQyxDQUFDO0lBRUYsTUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLE9BQU8sQ0FDTCxvQkFBQyxxQkFBRyxJQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ1Isb0JBQUMsY0FBSSxJQUFDLEVBQUUsRUFBQyxXQUFXLEVBQUMsU0FBUyxFQUFDLFVBQVU7WUFDdkMsb0JBQUMsYUFBRyxJQUNGLFNBQVMsRUFBQyxLQUFLLEVBQ2YsU0FBUyxFQUFDLG1CQUFtQixFQUM3QixFQUFFLEVBQUMsa0JBQWtCO2dCQUVyQixvQkFBQyxtQkFBUyxJQUNSLFNBQVMsRUFBQyxLQUFLLEVBQ2YsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQ2xCLEdBQUcsRUFBQyw2QkFBNkIsR0FDakM7Z0JBQ0Ysb0JBQUMsYUFBRyxJQUNGLFNBQVMsRUFBQyxLQUFLLEVBQ2YsU0FBUyxFQUFDLDBEQUEwRDtvQkFFcEUsOEJBQU0sU0FBUyxFQUFDLHVDQUF1QyxVQUFXO29CQUNsRSw4QkFBTSxTQUFTLEVBQUMsa0JBQWtCLElBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBUSxDQUNqRCxDQUNGO1lBQ04sb0JBQUMscUJBQVcsSUFBQyxTQUFTLEVBQUMscUJBQXFCO2dCQUMxQyxvQkFBQyxvQkFBVSxJQUFDLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUMsZ0JBQWdCLEVBQUMsWUFBWSxVQUNsRSxLQUFLLENBQUMsTUFBTSxDQUNGO2dCQUNiLG9CQUFDLG9CQUFVLElBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFDLEtBQUssSUFDM0QsS0FBSyxDQUFDLEtBQUssQ0FDRCxDQUNELENBQ1QsQ0FDSCxDQUNQLENBQUM7QUFDSixDQUFDO0FBM0NELDhCQTJDQyIsInNvdXJjZXMiOlsid2VicGFjazovL21iLWFwcC8uL3NyYy9jb21wb25lbnRzL0ZpbGVDYXJkLnRzeD9lOTQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHRyYWNrTWV0YSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzXCI7XG5pbXBvcnQgeyBDb2wgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5pbXBvcnQgTW9yZVZlcnRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL01vcmVWZXJ0XCI7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9JY29uQnV0dG9uXCI7XG5pbXBvcnQgTWVudSBmcm9tIFwiQG11aS9tYXRlcmlhbC9NZW51XCI7XG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gXCJAbXVpL21hdGVyaWFsL0NhcmRNZWRpYVwiO1xuaW1wb3J0IENhcmQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ2FyZFwiO1xuaW1wb3J0IENhcmRDb250ZW50IGZyb20gXCJAbXVpL21hdGVyaWFsL0NhcmRDb250ZW50XCI7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvTWVudUl0ZW1cIjtcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1UZXh0XCI7XG5pbXBvcnQgTGlzdEl0ZW1JY29uIGZyb20gXCJAbXVpL21hdGVyaWFsL0xpc3RJdGVtSWNvblwiO1xuaW1wb3J0IENvbnRlbnRDdXQgZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQ29udGVudEN1dFwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIjtcbmltcG9ydCB7IENhcmRBY3Rpb25zIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcblxudHlwZSBUUkFDSyA9IHtcbiAgdHJhY2s6IHRyYWNrTWV0YTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpbGVDYXJkKHsgdHJhY2sgfTogVFJBQ0spIHtcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZTxudWxsIHwgSFRNTEVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBvcGVuID0gQm9vbGVhbihhbmNob3JFbCk7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50PikgPT4ge1xuICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICB9O1xuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICBzZXRBbmNob3JFbChudWxsKTtcbiAgfTtcblxuICBjb25zdCBJVEVNX0hFSUdIVCA9IDQ4O1xuICByZXR1cm4gKFxuICAgIDxDb2wgbWQ9ezR9PlxuICAgICAgPENhcmQgaWQ9XCJ0cmFja0NhcmRcIiBjbGFzc05hbWU9XCJwLTAgbWItM1wiPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZVwiXG4gICAgICAgICAgaWQ9XCJ0cmFjay1tZWRpYS1jYXJkXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxDYXJkTWVkaWFcbiAgICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXG4gICAgICAgICAgICBpbWFnZT17dHJhY2suaW1hZ2V9XG4gICAgICAgICAgICBhbHQ9XCJMaXZlIGZyb20gc3BhY2UgYWxidW0gY292ZXJcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyYWNrLW1lZGlhLWJwbSBwb3NpdGlvbi1hYnNvbHV0ZSBkLWZsZXggZmxleC1jb2x1bW4gcC0yXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicG0tbGFiZWwgdGV4dC11cHBlcmNhc2UgZnctYm9sZCBmcy02XCI+YnBtPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnBtIGZ3LWJvbGQgZnMtNFwiPnt0cmFjay5icG19PC9zcGFuPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInRyYWNrLW1lZGlhLWNvbnRlbnRcIj5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBmb250U2l6ZTogMTQgfX0gY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIGd1dHRlckJvdHRvbT5cbiAgICAgICAgICAgIHt0cmFjay5hcnRpc3R9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiIHN4PXt7IGZvbnRTaXplOiAyMSB9fSBjb21wb25lbnQ9XCJkaXZcIj5cbiAgICAgICAgICAgIHt0cmFjay50aXRsZX1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICA8L0NhcmQ+XG4gICAgPC9Db2w+XG4gICk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/FileCard.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("31e29862c8ecaf0f574d")
/******/ })();
/******/ 
/******/ }
);