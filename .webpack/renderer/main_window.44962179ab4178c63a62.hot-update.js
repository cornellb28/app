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

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst Sidebar_1 = __importDefault(__webpack_require__(/*! ./components/Sidebar */ \"./src/components/Sidebar.tsx\"));\nconst FileList_1 = __importDefault(__webpack_require__(/*! ./components/FileList */ \"./src/components/FileList.tsx\"));\nconst compo_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './compo'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));\nconst Container_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\"));\nconst Row_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/esm/Row.js\"));\nconst Col_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/esm/Col.js\"));\nconst FolderList_1 = __importDefault(__webpack_require__(/*! ./components/FolderList */ \"./src/components/FolderList.tsx\"));\nfunction App() {\n    return (react_1.default.createElement(Container_1.default, { fluid: true, className: \"main-app\" },\n        react_1.default.createElement(Row_1.default, { className: \"vh-100\" },\n            react_1.default.createElement(Col_1.default, { xs: 2, id: \"sidebar-wrapper\", className: \"d-flex bg-dark text-white flex-shrink flex-column p-3\" },\n                react_1.default.createElement(Sidebar_1.default, null)),\n            react_1.default.createElement(Col_1.default, { xs: 10, id: \"page-content-wrapper\" },\n                react_1.default.createElement(compo_1.default, null),\n                react_1.default.createElement(FolderList_1.default, null),\n                react_1.default.createElement(\"hr\", null),\n                react_1.default.createElement(FileList_1.default, null)))));\n}\nexports[\"default\"] = App;\n// https://stackoverflow.com/questions/60482018/make-a-sidebar-from-react-bootstrap\n// https://stackoverflow.com/questions/38486660/how-to-add-a-classname-id-to-react-bootstrap-component\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1HQUFtRDtBQUNuRCxtSEFBMkM7QUFDM0Msc0hBQTZDO0FBQzdDLDZMQUE4QjtBQUM5Qiw2SUFBa0Q7QUFDbEQsMkhBQXNDO0FBQ3RDLDJIQUFzQztBQUN0Qyw0SEFBaUQ7QUFJakQsU0FBd0IsR0FBRztJQUN6QixPQUFPLENBQ0wsOEJBQUMsbUJBQVMsSUFBQyxLQUFLLFFBQUMsU0FBUyxFQUFDLFVBQVU7UUFDbkMsOEJBQUMsYUFBRyxJQUFDLFNBQVMsRUFBQyxRQUFRO1lBQ3JCLDhCQUFDLGFBQUcsSUFDRixFQUFFLEVBQUUsQ0FBQyxFQUNMLEVBQUUsRUFBQyxpQkFBaUIsRUFDcEIsU0FBUyxFQUFDLHVEQUF1RDtnQkFFakUsOEJBQUMsaUJBQU8sT0FBRyxDQUNQO1lBQ04sOEJBQUMsYUFBRyxJQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFDLHNCQUFzQjtnQkFDcEMsOEJBQUMsZUFBUSxPQUFHO2dCQUNaLDhCQUFDLG9CQUFVLE9BQUc7Z0JBQ2QseUNBQU07Z0JBQ04sOEJBQUMsa0JBQVEsT0FBRyxDQUNSLENBQ0YsQ0FDSSxDQUNiLENBQUM7QUFDSixDQUFDO0FBcEJELHlCQW9CQztBQUNELG1GQUFtRjtBQUNuRixzR0FBc0ciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYi1hcHAvLi9zcmMvQXBwLnRzeD8xYzZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi9jb21wb25lbnRzL1NpZGViYXJcIjtcbmltcG9ydCBGaWxlTGlzdCBmcm9tIFwiLi9jb21wb25lbnRzL0ZpbGVMaXN0XCI7XG5pbXBvcnQgVXBsb2FkZXIgZnJvbSAnLi9jb21wbydcbmltcG9ydCBDb250YWluZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db250YWluZXJcIjtcbmltcG9ydCBSb3cgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Sb3dcIjtcbmltcG9ydCBDb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db2xcIjtcbmltcG9ydCBGb2xkZXJMaXN0IGZyb20gXCIuL2NvbXBvbmVudHMvRm9sZGVyTGlzdFwiO1xuaW1wb3J0IHsgdHJhY2tNZXRhIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvaW5kZXhcIjtcbmltcG9ydCB0cmFja3MgZnJvbSBcIi4vZGF0YS90cmFja3MuanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBmbHVpZCBjbGFzc05hbWU9XCJtYWluLWFwcFwiPlxuICAgICAgPFJvdyBjbGFzc05hbWU9XCJ2aC0xMDBcIj5cbiAgICAgICAgPENvbFxuICAgICAgICAgIHhzPXsyfVxuICAgICAgICAgIGlkPVwic2lkZWJhci13cmFwcGVyXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggYmctZGFyayB0ZXh0LXdoaXRlIGZsZXgtc2hyaW5rIGZsZXgtY29sdW1uIHAtM1wiXG4gICAgICAgID5cbiAgICAgICAgICA8U2lkZWJhciAvPlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCB4cz17MTB9IGlkPVwicGFnZS1jb250ZW50LXdyYXBwZXJcIj5cbiAgICAgICAgICA8VXBsb2FkZXIgLz5cbiAgICAgICAgICA8Rm9sZGVyTGlzdCAvPlxuICAgICAgICAgIDxociAvPlxuICAgICAgICAgIDxGaWxlTGlzdCAvPlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNjA0ODIwMTgvbWFrZS1hLXNpZGViYXItZnJvbS1yZWFjdC1ib290c3RyYXBcbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM4NDg2NjYwL2hvdy10by1hZGQtYS1jbGFzc25hbWUtaWQtdG8tcmVhY3QtYm9vdHN0cmFwLWNvbXBvbmVudFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/App.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("81698d80555bf069d403")
/******/ })();
/******/ 
/******/ }
);