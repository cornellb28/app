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

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst Uploader_1 = __importDefault(__webpack_require__(/*! ./components/Uploader */ \"./src/components/Uploader.tsx\"));\nconst FileList_1 = __importDefault(__webpack_require__(/*! ./components/FileList */ \"./src/components/FileList.tsx\"));\nfunction App() {\n    const [tracks, setTracks] = useState([\n        {\n            id: \"4\",\n            title: \"Example\",\n            size: 908778,\n            filename: \"filename\",\n            artist: \"Artist\",\n            bpm: \"90\",\n            contentGroup: \"contentGroup\",\n            genre: \"genre\",\n            remixArtist: \"remixArtist\",\n            composer: \"composer\",\n            initialKey: \"initalKey\",\n            label: \"label\",\n            year: \"1988\",\n            comment: { text: \"comments thats new\" },\n        },\n    ]);\n    if (tracksDataError) {\n        return react_1.default.createElement(\"div\", { className: \"container\" },\n            \"error: \",\n            tracksDataError);\n    }\n    if (!tracksData) {\n        return react_1.default.createElement(\"div\", { className: \"container\" }, \"...loading\");\n    }\n    return (react_1.default.createElement(react_1.default.Fragment, null,\n        react_1.default.createElement(Uploader_1.default, null),\n        react_1.default.createElement(FileList_1.default, null)));\n}\nexports[\"default\"] = App;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1HQUEwQjtBQUMxQixzSEFBNkM7QUFDN0Msc0hBQTZDO0FBTzdDLFNBQXdCLEdBQUc7SUFDekIsTUFBTSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsR0FBRyxRQUFRLENBQWlCO1FBQ25EO1lBQ0UsRUFBRSxFQUFFLEdBQUc7WUFDUCxLQUFLLEVBQUUsU0FBUztZQUNoQixJQUFJLEVBQUUsTUFBTTtZQUNaLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLEdBQUcsRUFBRSxJQUFJO1lBQ1QsWUFBWSxFQUFFLGNBQWM7WUFDNUIsS0FBSyxFQUFFLE9BQU87WUFDZCxXQUFXLEVBQUUsYUFBYTtZQUMxQixRQUFRLEVBQUUsVUFBVTtZQUNwQixVQUFVLEVBQUUsV0FBVztZQUN2QixLQUFLLEVBQUUsT0FBTztZQUNkLElBQUksRUFBRSxNQUFNO1lBQ1osT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFO1NBQ3hDO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsSUFBSSxlQUFlLEVBQUU7UUFDbkIsT0FBTyx1Q0FBSyxTQUFTLEVBQUMsV0FBVzs7WUFBUyxlQUFlLENBQU8sQ0FBQztLQUNsRTtJQUNELElBQUksQ0FBQyxVQUFVLEVBQUU7UUFDZixPQUFPLHVDQUFLLFNBQVMsRUFBQyxXQUFXLGlCQUFpQixDQUFDO0tBQ3BEO0lBQ0QsT0FBTyxDQUNMO1FBQ0UsOEJBQUMsa0JBQVEsT0FBRztRQUNaLDhCQUFDLGtCQUFRLE9BQUcsQ0FDWCxDQUNKLENBQUM7QUFDSixDQUFDO0FBaENELHlCQWdDQyIsInNvdXJjZXMiOlsid2VicGFjazovL21iLWFwcC8uL3NyYy9BcHAudHN4PzFjNmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFVwbG9hZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvVXBsb2FkZXJcIjtcbmltcG9ydCBGaWxlTGlzdCBmcm9tIFwiLi9jb21wb25lbnRzL0ZpbGVMaXN0XCI7XG5pbXBvcnQgdXNlVHJhY2tzIGZyb20gXCIuL2hvb2tzL3VzZVRyYWNrc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0ZSB7XG4gIGRhdGE6IHRyYWNrTWV0YVtdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IFt0cmFja3MsIHNldFRyYWNrc10gPSB1c2VTdGF0ZTxJU3RhdGVbXCJkYXRhXCJdPihbXG4gICAge1xuICAgICAgaWQ6IFwiNFwiLFxuICAgICAgdGl0bGU6IFwiRXhhbXBsZVwiLFxuICAgICAgc2l6ZTogOTA4Nzc4LFxuICAgICAgZmlsZW5hbWU6IFwiZmlsZW5hbWVcIixcbiAgICAgIGFydGlzdDogXCJBcnRpc3RcIixcbiAgICAgIGJwbTogXCI5MFwiLFxuICAgICAgY29udGVudEdyb3VwOiBcImNvbnRlbnRHcm91cFwiLFxuICAgICAgZ2VucmU6IFwiZ2VucmVcIixcbiAgICAgIHJlbWl4QXJ0aXN0OiBcInJlbWl4QXJ0aXN0XCIsXG4gICAgICBjb21wb3NlcjogXCJjb21wb3NlclwiLFxuICAgICAgaW5pdGlhbEtleTogXCJpbml0YWxLZXlcIixcbiAgICAgIGxhYmVsOiBcImxhYmVsXCIsXG4gICAgICB5ZWFyOiBcIjE5ODhcIixcbiAgICAgIGNvbW1lbnQ6IHsgdGV4dDogXCJjb21tZW50cyB0aGF0cyBuZXdcIiB9LFxuICAgIH0sXG4gIF0pO1xuXG4gIGlmICh0cmFja3NEYXRhRXJyb3IpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5lcnJvcjoge3RyYWNrc0RhdGFFcnJvcn08L2Rpdj47XG4gIH1cbiAgaWYgKCF0cmFja3NEYXRhKSB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+Li4ubG9hZGluZzwvZGl2PjtcbiAgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8VXBsb2FkZXIgLz5cbiAgICAgIDxGaWxlTGlzdCAvPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/App.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("13d47a13b4981aeb1124")
/******/ })();
/******/ 
/******/ }
);