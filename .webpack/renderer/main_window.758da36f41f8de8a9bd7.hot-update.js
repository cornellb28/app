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

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst React = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst react_bootstrap_1 = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\nconst Favorite_1 = __importDefault(__webpack_require__(/*! @mui/icons-material/Favorite */ \"./node_modules/@mui/icons-material/Favorite.js\"));\nconst Edit_1 = __importDefault(__webpack_require__(/*! @mui/icons-material/Edit */ \"./node_modules/@mui/icons-material/Edit.js\"));\nconst material_1 = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\nfunction FileCard({ track }) {\n    const [anchorEl, setAnchorEl] = React.useState(null);\n    const open = Boolean(anchorEl);\n    const handleClick = (event) => {\n        setAnchorEl(event.currentTarget);\n    };\n    const handleClose = () => {\n        setAnchorEl(null);\n    };\n    return (React.createElement(react_bootstrap_1.Col, { md: 4 },\n        React.createElement(material_1.Card, { id: \"trackCard\", className: \"p-0 mb-3\" },\n            React.createElement(material_1.Box, { component: \"div\", className: \"position-relative\", id: \"track-media-card\" },\n                React.createElement(material_1.IconButton, { \"aria-label\": \"add to favorites\", className: \"track-favorite-button position-absolute\" },\n                    React.createElement(Favorite_1.default, null)),\n                React.createElement(material_1.CardMedia, { component: \"img\", image: track.image, alt: \"Live from space album cover\" })),\n            React.createElement(material_1.CardContent, { className: \"track-media-content\" },\n                React.createElement(material_1.Typography, { sx: { fontSize: 14 }, color: \"text.secondary\", gutterBottom: true }, track.artist),\n                React.createElement(material_1.Typography, { variant: \"h3\", sx: { fontSize: 18 }, component: \"div\" }, track.title)),\n            React.createElement(material_1.Fab, { size: \"small\", color: \"secondary\", \"aria-label\": \"edit\", color: \"info\" },\n                React.createElement(Edit_1.default, null)))));\n}\nexports[\"default\"] = FileCard;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9GaWxlQ2FyZC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOEZBQStCO0FBRy9CLG9IQUFzQztBQUN0Qyw4SUFBd0Q7QUFDeEQsa0lBQWdEO0FBQ2hELHFHQVF1QjtBQU12QixTQUF3QixRQUFRLENBQUMsRUFBRSxLQUFLLEVBQVM7SUFDL0MsTUFBTSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFxQixJQUFJLENBQUMsQ0FBQztJQUN6RSxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0IsTUFBTSxXQUFXLEdBQUcsQ0FBQyxLQUFvQyxFQUFFLEVBQUU7UUFDM0QsV0FBVyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNuQyxDQUFDLENBQUM7SUFDRixNQUFNLFdBQVcsR0FBRyxHQUFHLEVBQUU7UUFDdkIsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLENBQUMsQ0FBQztJQUNGLE9BQU8sQ0FDTCxvQkFBQyxxQkFBRyxJQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ1Isb0JBQUMsZUFBSSxJQUFDLEVBQUUsRUFBQyxXQUFXLEVBQUMsU0FBUyxFQUFDLFVBQVU7WUFDdkMsb0JBQUMsY0FBRyxJQUNGLFNBQVMsRUFBQyxLQUFLLEVBQ2YsU0FBUyxFQUFDLG1CQUFtQixFQUM3QixFQUFFLEVBQUMsa0JBQWtCO2dCQUVyQixvQkFBQyxxQkFBVSxrQkFDRSxrQkFBa0IsRUFDN0IsU0FBUyxFQUFDLHlDQUF5QztvQkFFbkQsb0JBQUMsa0JBQVksT0FBRyxDQUNMO2dCQUNiLG9CQUFDLG9CQUFTLElBQ1IsU0FBUyxFQUFDLEtBQUssRUFDZixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFDbEIsR0FBRyxFQUFDLDZCQUE2QixHQUNqQyxDQUNFO1lBQ04sb0JBQUMsc0JBQVcsSUFBQyxTQUFTLEVBQUMscUJBQXFCO2dCQUMxQyxvQkFBQyxxQkFBVSxJQUFDLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUMsZ0JBQWdCLEVBQUMsWUFBWSxVQUNsRSxLQUFLLENBQUMsTUFBTSxDQUNGO2dCQUNiLG9CQUFDLHFCQUFVLElBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFDLEtBQUssSUFDM0QsS0FBSyxDQUFDLEtBQUssQ0FDRCxDQUNEO1lBQ2Qsb0JBQUMsY0FBRyxJQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsS0FBSyxFQUFDLFdBQVcsZ0JBQVksTUFBTSxFQUFDLEtBQUssRUFBQyxNQUFNO2dCQUNoRSxvQkFBQyxjQUFRLE9BQUcsQ0FDUixDQUNELENBQ0gsQ0FDUCxDQUFDO0FBQ0osQ0FBQztBQTNDRCw4QkEyQ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYi1hcHAvLi9zcmMvY29tcG9uZW50cy9GaWxlQ2FyZC50c3g/ZTk0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB0cmFja01ldGEgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlc1wiO1xuaW1wb3J0IHsgQ29sIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuaW1wb3J0IEZhdm9yaXRlSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9GYXZvcml0ZVwiO1xuaW1wb3J0IEVkaXRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0VkaXRcIjtcbmltcG9ydCB7XG4gIEJveCxcbiAgVHlwb2dyYXBoeSxcbiAgQ2FyZCxcbiAgQ2FyZE1lZGlhLFxuICBDYXJkQ29udGVudCxcbiAgSWNvbkJ1dHRvbixcbiAgRmFiXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5cbnR5cGUgVFJBQ0sgPSB7XG4gIHRyYWNrOiB0cmFja01ldGE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaWxlQ2FyZCh7IHRyYWNrIH06IFRSQUNLKSB7XG4gIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gUmVhY3QudXNlU3RhdGU8bnVsbCB8IEhUTUxFbGVtZW50PihudWxsKTtcbiAgY29uc3Qgb3BlbiA9IEJvb2xlYW4oYW5jaG9yRWwpO1xuICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudD4pID0+IHtcbiAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPENvbCBtZD17NH0+XG4gICAgICA8Q2FyZCBpZD1cInRyYWNrQ2FyZFwiIGNsYXNzTmFtZT1cInAtMCBtYi0zXCI+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInBvc2l0aW9uLXJlbGF0aXZlXCJcbiAgICAgICAgICBpZD1cInRyYWNrLW1lZGlhLWNhcmRcIlxuICAgICAgICA+XG4gICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJhZGQgdG8gZmF2b3JpdGVzXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyYWNrLWZhdm9yaXRlLWJ1dHRvbiBwb3NpdGlvbi1hYnNvbHV0ZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZhdm9yaXRlSWNvbiAvPlxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8Q2FyZE1lZGlhXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxuICAgICAgICAgICAgaW1hZ2U9e3RyYWNrLmltYWdlfVxuICAgICAgICAgICAgYWx0PVwiTGl2ZSBmcm9tIHNwYWNlIGFsYnVtIGNvdmVyXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInRyYWNrLW1lZGlhLWNvbnRlbnRcIj5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBmb250U2l6ZTogMTQgfX0gY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIGd1dHRlckJvdHRvbT5cbiAgICAgICAgICAgIHt0cmFjay5hcnRpc3R9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiIHN4PXt7IGZvbnRTaXplOiAxOCB9fSBjb21wb25lbnQ9XCJkaXZcIj5cbiAgICAgICAgICAgIHt0cmFjay50aXRsZX1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgIDxGYWIgc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJzZWNvbmRhcnlcIiBhcmlhLWxhYmVsPVwiZWRpdFwiIGNvbG9yPVwiaW5mb1wiPlxuICAgICAgICAgIDxFZGl0SWNvbiAvPlxuICAgICAgICA8L0ZhYj5cbiAgICAgIDwvQ2FyZD5cbiAgICA8L0NvbD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/FileCard.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2087aa6b01a5bbc8230f")
/******/ })();
/******/ 
/******/ }
);