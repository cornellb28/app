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

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst React = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst react_bootstrap_1 = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\nconst MoreVert_1 = __importDefault(__webpack_require__(/*! @mui/icons-material/MoreVert */ \"./node_modules/@mui/icons-material/MoreVert.js\"));\nconst IconButton_1 = __importDefault(__webpack_require__(/*! @mui/material/IconButton */ \"./node_modules/@mui/material/IconButton/index.js\"));\nconst Menu_1 = __importDefault(__webpack_require__(/*! @mui/material/Menu */ \"./node_modules/@mui/material/Menu/index.js\"));\nconst CardMedia_1 = __importDefault(__webpack_require__(/*! @mui/material/CardMedia */ \"./node_modules/@mui/material/CardMedia/index.js\"));\nconst MenuItem_1 = __importDefault(__webpack_require__(/*! @mui/material/MenuItem */ \"./node_modules/@mui/material/MenuItem/index.js\"));\nconst ListItemText_1 = __importDefault(__webpack_require__(/*! @mui/material/ListItemText */ \"./node_modules/@mui/material/ListItemText/index.js\"));\nconst ListItemIcon_1 = __importDefault(__webpack_require__(/*! @mui/material/ListItemIcon */ \"./node_modules/@mui/material/ListItemIcon/index.js\"));\nconst ContentCut_1 = __importDefault(__webpack_require__(/*! @mui/icons-material/ContentCut */ \"./node_modules/@mui/icons-material/ContentCut.js\"));\nconst Typography_1 = __importDefault(__webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\"));\nfunction FileCard({ track }) {\n    const [anchorEl, setAnchorEl] = React.useState(null);\n    const open = Boolean(anchorEl);\n    const handleClick = (event) => {\n        setAnchorEl(event.currentTarget);\n    };\n    const handleClose = () => {\n        setAnchorEl(null);\n    };\n    const ITEM_HEIGHT = 48;\n    return (React.createElement(react_bootstrap_1.Col, { md: 3 },\n        React.createElement(react_bootstrap_1.Card, { id: \"trackCard\", className: \"p-0 mb-3\" },\n            React.createElement(react_bootstrap_1.Card.Header, { className: \"d-flex flex-row-reverse\" },\n                React.createElement(\"div\", null,\n                    React.createElement(IconButton_1.default, { \"aria-label\": \"more\", id: \"long-button\", \"aria-controls\": open ? \"long-menu\" : undefined, \"aria-expanded\": open ? \"true\" : undefined, \"aria-haspopup\": \"true\", onClick: handleClick },\n                        React.createElement(MoreVert_1.default, { fontSize: \"small\" })),\n                    React.createElement(Menu_1.default, { id: \"long-menu\", MenuListProps: {\n                            \"aria-labelledby\": \"long-button\",\n                        }, anchorEl: anchorEl, open: open, onClose: handleClose, PaperProps: {\n                            style: {\n                                maxHeight: ITEM_HEIGHT * 4.5,\n                                width: \"20ch\",\n                            },\n                        } },\n                        React.createElement(MenuItem_1.default, { onClick: handleClose },\n                            React.createElement(ListItemIcon_1.default, null,\n                                React.createElement(ContentCut_1.default, { fontSize: \"small\" })),\n                            React.createElement(ListItemText_1.default, null, \"Edit\"),\n                            React.createElement(Typography_1.default, { variant: \"body2\", color: \"text.secondary\" }, \"\\u2318X\"))))),\n            React.createElement(CardMedia_1.default, { component: \"img\", image: track.image, alt: \"Live from space album cover\" }),\n            React.createElement(react_bootstrap_1.Card.Footer, null,\n                React.createElement(react_bootstrap_1.Row, null,\n                    React.createElement(react_bootstrap_1.Col, null, \"Buttons\"))))));\n}\nexports[\"default\"] = FileCard;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9GaWxlQ2FyZC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOEZBQStCO0FBRy9CLG9IQUF3RDtBQUN4RCw4SUFBd0Q7QUFDeEQsOElBQWtEO0FBQ2xELDRIQUFzQztBQUN0QywySUFBZ0Q7QUFDaEQsd0lBQThDO0FBQzlDLG9KQUFzRDtBQUN0RCxvSkFBc0Q7QUFDdEQsb0pBQXdEO0FBQ3hELDhJQUFrRDtBQU1sRCxTQUF3QixRQUFRLENBQUMsRUFBRSxLQUFLLEVBQVM7SUFDL0MsTUFBTSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFxQixJQUFJLENBQUMsQ0FBQztJQUN6RSxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0IsTUFBTSxXQUFXLEdBQUcsQ0FBQyxLQUFvQyxFQUFFLEVBQUU7UUFDM0QsV0FBVyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNuQyxDQUFDLENBQUM7SUFDRixNQUFNLFdBQVcsR0FBRyxHQUFHLEVBQUU7UUFDdkIsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLENBQUMsQ0FBQztJQUVGLE1BQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUN2QixPQUFPLENBQ0wsb0JBQUMscUJBQUcsSUFBQyxFQUFFLEVBQUUsQ0FBQztRQUNSLG9CQUFDLHNCQUFJLElBQUMsRUFBRSxFQUFDLFdBQVcsRUFBQyxTQUFTLEVBQUMsVUFBVTtZQUN2QyxvQkFBQyxzQkFBSSxDQUFDLE1BQU0sSUFBQyxTQUFTLEVBQUMseUJBQXlCO2dCQUM5QztvQkFDRSxvQkFBQyxvQkFBVSxrQkFDRSxNQUFNLEVBQ2pCLEVBQUUsRUFBQyxhQUFhLG1CQUNELElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTLG1CQUM5QixJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxtQkFDMUIsTUFBTSxFQUNwQixPQUFPLEVBQUUsV0FBVzt3QkFFcEIsb0JBQUMsa0JBQVksSUFBQyxRQUFRLEVBQUMsT0FBTyxHQUFHLENBQ3RCO29CQUNiLG9CQUFDLGNBQUksSUFDSCxFQUFFLEVBQUMsV0FBVyxFQUNkLGFBQWEsRUFBRTs0QkFDYixpQkFBaUIsRUFBRSxhQUFhO3lCQUNqQyxFQUNELFFBQVEsRUFBRSxRQUFRLEVBQ2xCLElBQUksRUFBRSxJQUFJLEVBQ1YsT0FBTyxFQUFFLFdBQVcsRUFDcEIsVUFBVSxFQUFFOzRCQUNWLEtBQUssRUFBRTtnQ0FDTCxTQUFTLEVBQUUsV0FBVyxHQUFHLEdBQUc7Z0NBQzVCLEtBQUssRUFBRSxNQUFNOzZCQUNkO3lCQUNGO3dCQUVELG9CQUFDLGtCQUFRLElBQUMsT0FBTyxFQUFFLFdBQVc7NEJBQzVCLG9CQUFDLHNCQUFZO2dDQUNYLG9CQUFDLG9CQUFVLElBQUMsUUFBUSxFQUFDLE9BQU8sR0FBRyxDQUNsQjs0QkFDZixvQkFBQyxzQkFBWSxlQUFvQjs0QkFDakMsb0JBQUMsb0JBQVUsSUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLEtBQUssRUFBQyxnQkFBZ0IsY0FFckMsQ0FDSixDQUNOLENBQ0gsQ0FDTTtZQUNkLG9CQUFDLG1CQUFTLElBQ1IsU0FBUyxFQUFDLEtBQUssRUFDZixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFDbEIsR0FBRyxFQUFDLDZCQUE2QixHQUNqQztZQUVGLG9CQUFDLHNCQUFJLENBQUMsTUFBTTtnQkFDVixvQkFBQyxxQkFBRztvQkFDRixvQkFBQyxxQkFBRyxrQkFBYyxDQUNkLENBQ00sQ0FDVCxDQUNILENBQ1AsQ0FBQztBQUNKLENBQUM7QUFuRUQsOEJBbUVDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWItYXBwLy4vc3JjL2NvbXBvbmVudHMvRmlsZUNhcmQudHN4P2U5NDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdHJhY2tNZXRhIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXNcIjtcbmltcG9ydCB7IENvbCwgUm93LCBDYXJkLCBJbWFnZSB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcbmltcG9ydCBNb3JlVmVydEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvTW9yZVZlcnRcIjtcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0ljb25CdXR0b25cIjtcbmltcG9ydCBNZW51IGZyb20gXCJAbXVpL21hdGVyaWFsL01lbnVcIjtcbmltcG9ydCBDYXJkTWVkaWEgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ2FyZE1lZGlhXCI7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvTWVudUl0ZW1cIjtcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1UZXh0XCI7XG5pbXBvcnQgTGlzdEl0ZW1JY29uIGZyb20gXCJAbXVpL21hdGVyaWFsL0xpc3RJdGVtSWNvblwiO1xuaW1wb3J0IENvbnRlbnRDdXQgZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQ29udGVudEN1dFwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiO1xuXG50eXBlIFRSQUNLID0ge1xuICB0cmFjazogdHJhY2tNZXRhO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmlsZUNhcmQoeyB0cmFjayB9OiBUUkFDSykge1xuICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlPG51bGwgfCBIVE1MRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IG9wZW4gPSBCb29sZWFuKGFuY2hvckVsKTtcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIHNldEFuY2hvckVsKG51bGwpO1xuICB9O1xuXG4gIGNvbnN0IElURU1fSEVJR0hUID0gNDg7XG4gIHJldHVybiAoXG4gICAgPENvbCBtZD17M30+XG4gICAgICA8Q2FyZCBpZD1cInRyYWNrQ2FyZFwiIGNsYXNzTmFtZT1cInAtMCBtYi0zXCI+XG4gICAgICAgIDxDYXJkLkhlYWRlciBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3ctcmV2ZXJzZVwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwibW9yZVwiXG4gICAgICAgICAgICAgIGlkPVwibG9uZy1idXR0b25cIlxuICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPXtvcGVuID8gXCJsb25nLW1lbnVcIiA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD17b3BlbiA/IFwidHJ1ZVwiIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TW9yZVZlcnRJY29uIGZvbnRTaXplPVwic21hbGxcIiAvPlxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgPE1lbnVcbiAgICAgICAgICAgICAgaWQ9XCJsb25nLW1lbnVcIlxuICAgICAgICAgICAgICBNZW51TGlzdFByb3BzPXt7XG4gICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJsb25nLWJ1dHRvblwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XG4gICAgICAgICAgICAgIG9wZW49e29wZW59XG4gICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxuICAgICAgICAgICAgICBQYXBlclByb3BzPXt7XG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogSVRFTV9IRUlHSFQgKiA0LjUsXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIyMGNoXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgPENvbnRlbnRDdXQgZm9udFNpemU9XCJzbWFsbFwiIC8+XG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dD5FZGl0PC9MaXN0SXRlbVRleHQ+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAg4oyYWFxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9DYXJkLkhlYWRlcj5cbiAgICAgICAgPENhcmRNZWRpYVxuICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXG4gICAgICAgICAgaW1hZ2U9e3RyYWNrLmltYWdlfVxuICAgICAgICAgIGFsdD1cIkxpdmUgZnJvbSBzcGFjZSBhbGJ1bSBjb3ZlclwiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPENhcmQuRm9vdGVyPlxuICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICA8Q29sPkJ1dHRvbnM8L0NvbD5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgPC9DYXJkLkZvb3Rlcj5cbiAgICAgIDwvQ2FyZD5cbiAgICA8L0NvbD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/FileCard.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("accae14234cd8c264512")
/******/ })();
/******/ 
/******/ }
);