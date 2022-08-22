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

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst Sidebar_1 = __importDefault(__webpack_require__(/*! ./components/Sidebar */ \"./src/components/Sidebar.tsx\"));\nconst FileList_1 = __importDefault(__webpack_require__(/*! ./components/FileList */ \"./src/components/FileList.tsx\"));\nconst Container_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\"));\nconst Row_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/esm/Row.js\"));\nconst Col_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/esm/Col.js\"));\nconst FolderList_1 = __importDefault(__webpack_require__(/*! ./components/FolderList */ \"./src/components/FolderList.tsx\"));\nfunction App() {\n    return (react_1.default.createElement(Container_1.default, { fluid: true, className: \"main-app\" },\n        react_1.default.createElement(Row_1.default, { className: \"vh-100\" },\n            react_1.default.createElement(Col_1.default, { xs: 2, id: \"sidebar-wrapper\", className: \"d-flex bg-dark text-white flex-shrink flex-column p-3\" },\n                react_1.default.createElement(Sidebar_1.default, null)),\n            react_1.default.createElement(Col_1.default, { xs: 10, id: \"page-content-wrapper\" },\n                react_1.default.createElement(FolderList_1.default, null),\n                react_1.default.createElement(\"hr\", null),\n                react_1.default.createElement(FileList_1.default, null)))));\n}\nexports[\"default\"] = App;\n// https://stackoverflow.com/questions/60482018/make-a-sidebar-from-react-bootstrap\n// https://stackoverflow.com/questions/38486660/how-to-add-a-classname-id-to-react-bootstrap-component\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1HQUFtRDtBQUNuRCxtSEFBMkM7QUFDM0Msc0hBQTZDO0FBQzdDLDZJQUFrRDtBQUNsRCwySEFBc0M7QUFDdEMsMkhBQXNDO0FBQ3RDLDRIQUFpRDtBQUlqRCxTQUF3QixHQUFHO0lBQ3pCLE9BQU8sQ0FDTCw4QkFBQyxtQkFBUyxJQUFDLEtBQUssUUFBQyxTQUFTLEVBQUMsVUFBVTtRQUNuQyw4QkFBQyxhQUFHLElBQUMsU0FBUyxFQUFDLFFBQVE7WUFDckIsOEJBQUMsYUFBRyxJQUNGLEVBQUUsRUFBRSxDQUFDLEVBQ0wsRUFBRSxFQUFDLGlCQUFpQixFQUNwQixTQUFTLEVBQUMsdURBQXVEO2dCQUVqRSw4QkFBQyxpQkFBTyxPQUFHLENBQ1A7WUFDTiw4QkFBQyxhQUFHLElBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUMsc0JBQXNCO2dCQUVwQyw4QkFBQyxvQkFBVSxPQUFHO2dCQUNkLHlDQUFNO2dCQUNOLDhCQUFDLGtCQUFRLE9BQUcsQ0FDUixDQUNGLENBQ0ksQ0FDYixDQUFDO0FBQ0osQ0FBQztBQXBCRCx5QkFvQkM7QUFDRCxtRkFBbUY7QUFDbkYsc0dBQXNHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWItYXBwLy4vc3JjL0FwcC50c3g/MWM2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4vY29tcG9uZW50cy9TaWRlYmFyXCI7XG5pbXBvcnQgRmlsZUxpc3QgZnJvbSBcIi4vY29tcG9uZW50cy9GaWxlTGlzdFwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lclwiO1xuaW1wb3J0IFJvdyBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1Jvd1wiO1xuaW1wb3J0IENvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NvbFwiO1xuaW1wb3J0IEZvbGRlckxpc3QgZnJvbSBcIi4vY29tcG9uZW50cy9Gb2xkZXJMaXN0XCI7XG5pbXBvcnQgeyB0cmFja01ldGEgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pbmRleFwiO1xuaW1wb3J0IHRyYWNrcyBmcm9tIFwiLi9kYXRhL3RyYWNrcy5qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGZsdWlkIGNsYXNzTmFtZT1cIm1haW4tYXBwXCI+XG4gICAgICA8Um93IGNsYXNzTmFtZT1cInZoLTEwMFwiPlxuICAgICAgICA8Q29sXG4gICAgICAgICAgeHM9ezJ9XG4gICAgICAgICAgaWQ9XCJzaWRlYmFyLXdyYXBwZXJcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBiZy1kYXJrIHRleHQtd2hpdGUgZmxleC1zaHJpbmsgZmxleC1jb2x1bW4gcC0zXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxTaWRlYmFyIC8+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIHhzPXsxMH0gaWQ9XCJwYWdlLWNvbnRlbnQtd3JhcHBlclwiPlxuICAgICAgICAgIFxuICAgICAgICAgIDxGb2xkZXJMaXN0IC8+XG4gICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgPEZpbGVMaXN0IC8+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy82MDQ4MjAxOC9tYWtlLWEtc2lkZWJhci1mcm9tLXJlYWN0LWJvb3RzdHJhcFxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzg0ODY2NjAvaG93LXRvLWFkZC1hLWNsYXNzbmFtZS1pZC10by1yZWFjdC1ib290c3RyYXAtY29tcG9uZW50XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/App.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("21786ec01cf1701803eb")
/******/ })();
/******/ 
/******/ }
);