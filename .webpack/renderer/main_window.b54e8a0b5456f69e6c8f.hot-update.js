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

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst React = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst styles_1 = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\nconst react_bootstrap_1 = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\nconst Favorite_1 = __importDefault(__webpack_require__(/*! @mui/icons-material/Favorite */ \"./node_modules/@mui/icons-material/Favorite.js\"));\nconst Chip_1 = __importDefault(__webpack_require__(/*! @mui/material/Chip */ \"./node_modules/@mui/material/Chip/index.js\"));\nconst material_1 = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\nconst ListItem = (0, styles_1.styled)(\"li\")(({ theme }) => ({\n    margin: theme.spacing(0.5),\n}));\nfunction FileCard({ track }) {\n    const [anchorEl, setAnchorEl] = React.useState(null);\n    const open = Boolean(anchorEl);\n    const handleClick = (event) => {\n        setAnchorEl(event.currentTarget);\n    };\n    const handleClose = () => {\n        setAnchorEl(null);\n    };\n    const [chipData, setChipData] = React.useState([\n        { key: 0, label: \"Hip Hop\" },\n        { key: 1, label: \"Soul\" },\n        { key: 2, label: \"Jazz\" },\n        { key: 3, label: \"Classics\" },\n        { key: 4, label: \"Indie\" },\n    ]);\n    const handleDelete = (chipToDelete) => () => {\n        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));\n    };\n    return (React.createElement(react_bootstrap_1.Col, { md: 4 },\n        React.createElement(material_1.Card, { id: \"trackCard\", className: \"p-0 mb-3\" },\n            React.createElement(material_1.Box, { component: \"div\", className: \"position-relative\", id: \"track-media-card\" },\n                React.createElement(material_1.IconButton, { \"aria-label\": \"add to favorites\", className: \"track-favorite-button position-absolute\" },\n                    React.createElement(Favorite_1.default, null)),\n                React.createElement(material_1.CardMedia, { component: \"img\", image: track.image, alt: \"Live from space album cover\" })),\n            React.createElement(material_1.CardContent, { className: \"track-media-content\" },\n                React.createElement(material_1.Typography, { sx: { fontSize: 14 }, color: \"text.secondary\", gutterBottom: true }, track.artist),\n                React.createElement(material_1.Typography, { variant: \"h3\", sx: { fontSize: 18 }, component: \"div\" }, track.title)),\n            React.createElement(\"div\", null, chipData.map((data) => {\n                let icon;\n                return (React.createElement(ListItem, { key: data.key },\n                    React.createElement(Chip_1.default, { icon: icon, label: data.label, onDelete: data.label === \"React\" ? undefined : handleDelete(data) })));\n            })))));\n}\nexports[\"default\"] = FileCard;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsRUFBRSxTQUFTLEVBQUMsS0FBSyxJQUMzRCxLQUFLLENBQUMsS0FBSyxDQUNELENBQ0Q7WUFDZCxpQ0FDRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQ3JCLElBQUksSUFBSSxDQUFDO2dCQUNULE9BQU8sQ0FDTCxvQkFBQyxRQUFRLElBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO29CQUNyQixvQkFBQyxjQUFJLElBQ0gsSUFBSSxFQUFFLElBQUksRUFDVixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFDakIsUUFBUSxFQUNOLElBQUksQ0FBQyxLQUFLLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FFekQsQ0FDTyxDQUNaLENBQUM7WUFDSixDQUFDLENBQUMsQ0FDRSxDQUNELENBQ0gsQ0FDUCxDQUFDO0FBQ0osQ0FBQztBQXJFRCw4QkFxRUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYi1hcHAvLi9zcmMvY29tcG9uZW50cy9GaWxlQ2FyZC50c3g/ZTk0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tIFwiQG11aS9tYXRlcmlhbC9zdHlsZXNcIjtcbmltcG9ydCB7IHRyYWNrTWV0YSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzXCI7XG5pbXBvcnQgeyBDb2wgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5pbXBvcnQgRmF2b3JpdGVJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Zhdm9yaXRlXCI7XG5pbXBvcnQgQ2hpcCBmcm9tIFwiQG11aS9tYXRlcmlhbC9DaGlwXCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIFR5cG9ncmFwaHksXG4gIENhcmQsXG4gIENhcmRNZWRpYSxcbiAgQ2FyZENvbnRlbnQsXG4gIEljb25CdXR0b24sXG4gIEZhYlxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuXG50eXBlIFRSQUNLID0ge1xuICB0cmFjazogdHJhY2tNZXRhO1xufTtcblxuaW50ZXJmYWNlIENoaXBEYXRhIHtcbiAga2V5OiBudW1iZXI7XG4gIGxhYmVsOiBzdHJpbmc7XG59XG5cbmNvbnN0IExpc3RJdGVtID0gc3R5bGVkKFwibGlcIikoKHsgdGhlbWUgfSkgPT4gKHtcbiAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDAuNSksXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpbGVDYXJkKHsgdHJhY2sgfTogVFJBQ0spIHtcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZTxudWxsIHwgSFRNTEVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBvcGVuID0gQm9vbGVhbihhbmNob3JFbCk7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50PikgPT4ge1xuICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICB9O1xuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICBzZXRBbmNob3JFbChudWxsKTtcbiAgfTtcbiAgY29uc3QgW2NoaXBEYXRhLCBzZXRDaGlwRGF0YV0gPSBSZWFjdC51c2VTdGF0ZTxyZWFkb25seSBDaGlwRGF0YVtdPihbXG4gICAgeyBrZXk6IDAsIGxhYmVsOiBcIkhpcCBIb3BcIiB9LFxuICAgIHsga2V5OiAxLCBsYWJlbDogXCJTb3VsXCIgfSxcbiAgICB7IGtleTogMiwgbGFiZWw6IFwiSmF6elwiIH0sXG4gICAgeyBrZXk6IDMsIGxhYmVsOiBcIkNsYXNzaWNzXCIgfSxcbiAgICB7IGtleTogNCwgbGFiZWw6IFwiSW5kaWVcIiB9LFxuICBdKTtcblxuICBjb25zdCBoYW5kbGVEZWxldGUgPSAoY2hpcFRvRGVsZXRlOiBDaGlwRGF0YSkgPT4gKCkgPT4ge1xuICAgIHNldENoaXBEYXRhKChjaGlwcykgPT5cbiAgICAgIGNoaXBzLmZpbHRlcigoY2hpcCkgPT4gY2hpcC5rZXkgIT09IGNoaXBUb0RlbGV0ZS5rZXkpXG4gICAgKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8Q29sIG1kPXs0fT5cbiAgICAgIDxDYXJkIGlkPVwidHJhY2tDYXJkXCIgY2xhc3NOYW1lPVwicC0wIG1iLTNcIj5cbiAgICAgICAgPEJveFxuICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmVcIlxuICAgICAgICAgIGlkPVwidHJhY2stbWVkaWEtY2FyZFwiXG4gICAgICAgID5cbiAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cImFkZCB0byBmYXZvcml0ZXNcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidHJhY2stZmF2b3JpdGUtYnV0dG9uIHBvc2l0aW9uLWFic29sdXRlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RmF2b3JpdGVJY29uIC8+XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgIDxDYXJkTWVkaWFcbiAgICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXG4gICAgICAgICAgICBpbWFnZT17dHJhY2suaW1hZ2V9XG4gICAgICAgICAgICBhbHQ9XCJMaXZlIGZyb20gc3BhY2UgYWxidW0gY292ZXJcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwidHJhY2stbWVkaWEtY29udGVudFwiPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IGZvbnRTaXplOiAxNCB9fSBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgICAge3RyYWNrLmFydGlzdH1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgc3g9e3sgZm9udFNpemU6IDE4IH19IGNvbXBvbmVudD1cImRpdlwiPlxuICAgICAgICAgICAge3RyYWNrLnRpdGxlfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7Y2hpcERhdGEubWFwKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBsZXQgaWNvbjtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxMaXN0SXRlbSBrZXk9e2RhdGEua2V5fT5cbiAgICAgICAgICAgICAgICA8Q2hpcFxuICAgICAgICAgICAgICAgICAgaWNvbj17aWNvbn1cbiAgICAgICAgICAgICAgICAgIGxhYmVsPXtkYXRhLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgb25EZWxldGU9e1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmxhYmVsID09PSBcIlJlYWN0XCIgPyB1bmRlZmluZWQgOiBoYW5kbGVEZWxldGUoZGF0YSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NhcmQ+XG4gICAgPC9Db2w+XG4gICk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/FileCard.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b3c05cf8a981c346c6e7")
/******/ })();
/******/ 
/******/ }
);