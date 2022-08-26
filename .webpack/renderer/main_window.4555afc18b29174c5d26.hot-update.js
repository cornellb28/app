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

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst React = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst react_bootstrap_1 = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\nconst Favorite_1 = __importDefault(__webpack_require__(/*! @mui/icons-material/Favorite */ \"./node_modules/@mui/icons-material/Favorite.js\"));\nconst material_1 = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\nconst ListItem = styled(\"li\")(({ theme }) => ({\n    margin: theme.spacing(0.5),\n}));\nfunction FileCard({ track }) {\n    const [anchorEl, setAnchorEl] = React.useState(null);\n    const open = Boolean(anchorEl);\n    const handleClick = (event) => {\n        setAnchorEl(event.currentTarget);\n    };\n    const handleClose = () => {\n        setAnchorEl(null);\n    };\n    const [chipData, setChipData] = React.useState([\n        { key: 0, label: \"Angular\" },\n        { key: 1, label: \"jQuery\" },\n        { key: 2, label: \"Polymer\" },\n        { key: 3, label: \"React\" },\n        { key: 4, label: \"Vue.js\" },\n    ]);\n    const handleDelete = (chipToDelete) => () => {\n        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));\n    };\n    return (React.createElement(react_bootstrap_1.Col, { md: 4 },\n        React.createElement(material_1.Card, { id: \"trackCard\", className: \"p-0 mb-3\" },\n            React.createElement(material_1.Box, { component: \"div\", className: \"position-relative\", id: \"track-media-card\" },\n                React.createElement(material_1.IconButton, { \"aria-label\": \"add to favorites\", className: \"track-favorite-button position-absolute\" },\n                    React.createElement(Favorite_1.default, null)),\n                React.createElement(material_1.CardMedia, { component: \"img\", image: track.image, alt: \"Live from space album cover\" })),\n            React.createElement(material_1.CardContent, { className: \"track-media-content\" },\n                React.createElement(material_1.Typography, { sx: { fontSize: 14 }, color: \"text.secondary\", gutterBottom: true }, track.artist),\n                React.createElement(material_1.Typography, { variant: \"h3\", sx: { fontSize: 18 }, component: \"div\" }, track.title)))));\n}\nexports[\"default\"] = FileCard;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxLQUFLLENBQUMsS0FBSyxDQUNELENBQ0QsQ0FDVCxDQUNILENBQ1AsQ0FBQztBQUNKLENBQUM7QUFyREQsOEJBcURDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWItYXBwLy4vc3JjL2NvbXBvbmVudHMvRmlsZUNhcmQudHN4P2U5NDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdHJhY2tNZXRhIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXNcIjtcbmltcG9ydCB7IENvbCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcbmltcG9ydCBGYXZvcml0ZUljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvRmF2b3JpdGVcIjtcbmltcG9ydCBDaGlwIGZyb20gXCJAbXVpL21hdGVyaWFsL0NoaXBcIjtcbmltcG9ydCB7XG4gIEJveCxcbiAgVHlwb2dyYXBoeSxcbiAgQ2FyZCxcbiAgQ2FyZE1lZGlhLFxuICBDYXJkQ29udGVudCxcbiAgSWNvbkJ1dHRvbixcbiAgRmFiXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5cbnR5cGUgVFJBQ0sgPSB7XG4gIHRyYWNrOiB0cmFja01ldGE7XG59O1xuXG5pbnRlcmZhY2UgQ2hpcERhdGEge1xuICBrZXk6IG51bWJlcjtcbiAgbGFiZWw6IHN0cmluZztcbn1cblxuY29uc3QgTGlzdEl0ZW0gPSBzdHlsZWQoXCJsaVwiKSgoeyB0aGVtZSB9KSA9PiAoe1xuICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMC41KSxcbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmlsZUNhcmQoeyB0cmFjayB9OiBUUkFDSykge1xuICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlPG51bGwgfCBIVE1MRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IG9wZW4gPSBCb29sZWFuKGFuY2hvckVsKTtcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIHNldEFuY2hvckVsKG51bGwpO1xuICB9O1xuICBjb25zdCBbY2hpcERhdGEsIHNldENoaXBEYXRhXSA9IFJlYWN0LnVzZVN0YXRlPHJlYWRvbmx5IENoaXBEYXRhW10+KFtcbiAgICB7IGtleTogMCwgbGFiZWw6IFwiQW5ndWxhclwiIH0sXG4gICAgeyBrZXk6IDEsIGxhYmVsOiBcImpRdWVyeVwiIH0sXG4gICAgeyBrZXk6IDIsIGxhYmVsOiBcIlBvbHltZXJcIiB9LFxuICAgIHsga2V5OiAzLCBsYWJlbDogXCJSZWFjdFwiIH0sXG4gICAgeyBrZXk6IDQsIGxhYmVsOiBcIlZ1ZS5qc1wiIH0sXG4gIF0pO1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IChjaGlwVG9EZWxldGU6IENoaXBEYXRhKSA9PiAoKSA9PiB7XG4gICAgc2V0Q2hpcERhdGEoKGNoaXBzKSA9PlxuICAgICAgY2hpcHMuZmlsdGVyKChjaGlwKSA9PiBjaGlwLmtleSAhPT0gY2hpcFRvRGVsZXRlLmtleSlcbiAgICApO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxDb2wgbWQ9ezR9PlxuICAgICAgPENhcmQgaWQ9XCJ0cmFja0NhcmRcIiBjbGFzc05hbWU9XCJwLTAgbWItM1wiPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZVwiXG4gICAgICAgICAgaWQ9XCJ0cmFjay1tZWRpYS1jYXJkXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiYWRkIHRvIGZhdm9yaXRlc1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0cmFjay1mYXZvcml0ZS1idXR0b24gcG9zaXRpb24tYWJzb2x1dGVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxGYXZvcml0ZUljb24gLz5cbiAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgPENhcmRNZWRpYVxuICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcbiAgICAgICAgICAgIGltYWdlPXt0cmFjay5pbWFnZX1cbiAgICAgICAgICAgIGFsdD1cIkxpdmUgZnJvbSBzcGFjZSBhbGJ1bSBjb3ZlclwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJ0cmFjay1tZWRpYS1jb250ZW50XCI+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgZm9udFNpemU6IDE0IH19IGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBndXR0ZXJCb3R0b20+XG4gICAgICAgICAgICB7dHJhY2suYXJ0aXN0fVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIiBzeD17eyBmb250U2l6ZTogMTggfX0gY29tcG9uZW50PVwiZGl2XCI+XG4gICAgICAgICAgICB7dHJhY2sudGl0bGV9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgPC9DYXJkPlxuICAgIDwvQ29sPlxuICApO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/FileCard.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f5d80a689d5233711a28")
/******/ })();
/******/ 
/******/ }
);