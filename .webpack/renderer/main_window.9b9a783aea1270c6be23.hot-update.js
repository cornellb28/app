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

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst Sidebar_1 = __importDefault(__webpack_require__(/*! ./components/Sidebar */ \"./src/components/Sidebar.tsx\"));\nconst FileList_1 = __importDefault(__webpack_require__(/*! ./components/FileList */ \"./src/components/FileList.tsx\"));\nconst Container_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\"));\nconst Row_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/esm/Row.js\"));\nconst Col_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/esm/Col.js\"));\nconst FolderList_1 = __importDefault(__webpack_require__(/*! ./components/FolderList */ \"./src/components/FolderList.tsx\"));\nfunction App() {\n    return (react_1.default.createElement(Container_1.default, { fluid: true, className: \"main-app\" },\n        react_1.default.createElement(Row_1.default, { className: \"vh-100\" },\n            react_1.default.createElement(Col_1.default, { xs: 2, id: \"sidebar-wrapper\", className: \"d-flex bg-dark text-white flex-shrink flex-column p-3\" },\n                react_1.default.createElement(Sidebar_1.default, null)),\n            react_1.default.createElement(Col_1.default, { xs: 10, id: \"page-content-wrapper\" },\n                react_1.default.createElement(Row_1.default, null,\n                    react_1.default.createElement(Col_1.default, { md: 12 },\n                        react_1.default.createElement(FolderList_1.default, null),\n                        react_1.default.createElement(FileList_1.default, null)))))));\n}\nexports[\"default\"] = App;\n// https://stackoverflow.com/questions/60482018/make-a-sidebar-from-react-bootstrap\n// https://stackoverflow.com/questions/38486660/how-to-add-a-classname-id-to-react-bootstrap-component\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1HQUFtRDtBQUNuRCxtSEFBMkM7QUFDM0Msc0hBQTZDO0FBQzdDLDZJQUFrRDtBQUNsRCwySEFBc0M7QUFDdEMsMkhBQXNDO0FBQ3RDLDRIQUFpRDtBQUlqRCxTQUF3QixHQUFHO0lBQ3pCLE9BQU8sQ0FDTCw4QkFBQyxtQkFBUyxJQUFDLEtBQUssUUFBQyxTQUFTLEVBQUMsVUFBVTtRQUNuQyw4QkFBQyxhQUFHLElBQUMsU0FBUyxFQUFDLFFBQVE7WUFDckIsOEJBQUMsYUFBRyxJQUNGLEVBQUUsRUFBRSxDQUFDLEVBQ0wsRUFBRSxFQUFDLGlCQUFpQixFQUNwQixTQUFTLEVBQUMsdURBQXVEO2dCQUVqRSw4QkFBQyxpQkFBTyxPQUFHLENBQ1A7WUFDTiw4QkFBQyxhQUFHLElBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUMsc0JBQXNCO2dCQUNwQyw4QkFBQyxhQUFHO29CQUNGLDhCQUFDLGFBQUcsSUFBQyxFQUFFLEVBQUUsRUFBRTt3QkFDVCw4QkFBQyxvQkFBVSxPQUFHO3dCQUVkLDhCQUFDLGtCQUFRLE9BQUcsQ0FDUixDQUNGLENBQ0YsQ0FDRixDQUNJLENBQ2IsQ0FBQztBQUNKLENBQUM7QUF2QkQseUJBdUJDO0FBQ0QsbUZBQW1GO0FBQ25GLHNHQUFzRyIsInNvdXJjZXMiOlsid2VicGFjazovL21iLWFwcC8uL3NyYy9BcHAudHN4PzFjNmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuL2NvbXBvbmVudHMvU2lkZWJhclwiO1xuaW1wb3J0IEZpbGVMaXN0IGZyb20gXCIuL2NvbXBvbmVudHMvRmlsZUxpc3RcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db250YWluZXJcIjtcbmltcG9ydCBSb3cgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Sb3dcIjtcbmltcG9ydCBDb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db2xcIjtcbmltcG9ydCBGb2xkZXJMaXN0IGZyb20gXCIuL2NvbXBvbmVudHMvRm9sZGVyTGlzdFwiO1xuaW1wb3J0IHsgdHJhY2tNZXRhIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvaW5kZXhcIjtcbmltcG9ydCB0cmFja3MgZnJvbSBcIi4vZGF0YS90cmFja3MuanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBmbHVpZCBjbGFzc05hbWU9XCJtYWluLWFwcFwiPlxuICAgICAgPFJvdyBjbGFzc05hbWU9XCJ2aC0xMDBcIj5cbiAgICAgICAgPENvbFxuICAgICAgICAgIHhzPXsyfVxuICAgICAgICAgIGlkPVwic2lkZWJhci13cmFwcGVyXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggYmctZGFyayB0ZXh0LXdoaXRlIGZsZXgtc2hyaW5rIGZsZXgtY29sdW1uIHAtM1wiXG4gICAgICAgID5cbiAgICAgICAgICA8U2lkZWJhciAvPlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCB4cz17MTB9IGlkPVwicGFnZS1jb250ZW50LXdyYXBwZXJcIj5cbiAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgPENvbCBtZD17MTJ9PlxuICAgICAgICAgICAgICA8Rm9sZGVyTGlzdCAvPlxuXG4gICAgICAgICAgICAgIDxGaWxlTGlzdCAvPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy82MDQ4MjAxOC9tYWtlLWEtc2lkZWJhci1mcm9tLXJlYWN0LWJvb3RzdHJhcFxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzg0ODY2NjAvaG93LXRvLWFkZC1hLWNsYXNzbmFtZS1pZC10by1yZWFjdC1ib290c3RyYXAtY29tcG9uZW50XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/App.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("19b3f1b86b555fa78d9f")
/******/ })();
/******/ 
/******/ }
);