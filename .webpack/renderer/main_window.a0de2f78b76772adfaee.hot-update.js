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

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst Uploader_1 = __importDefault(__webpack_require__(/*! ./components/Uploader */ \"./src/components/Uploader.tsx\"));\nconst FileList_1 = __importDefault(__webpack_require__(/*! ./components/FileList */ \"./src/components/FileList.tsx\"));\nfunction App() {\n    const [tracks, setTracks] = useState([\n        {\n            id: \"4\",\n            title: \"Example\",\n            size: 908778,\n            filename: \"filename\",\n            artist: \"Artist\",\n            bpm: \"90\",\n            contentGroup: \"contentGroup\",\n            genre: \"genre\",\n            remixArtist: \"remixArtist\",\n            composer: \"composer\",\n            initialKey: \"initalKey\",\n            label: \"label\",\n            year: \"1988\",\n            comment: { text: \"comments thats new\" },\n        },\n    ]);\n    if (tracksDataError) {\n        return react_1.default.createElement(\"div\", { className: \"container\" },\n            \"error: \",\n            tracksDataError);\n    }\n    if (!tracksData) {\n        return react_1.default.createElement(\"div\", { className: \"container\" }, \"...loading\");\n    }\n    return (react_1.default.createElement(react_1.default.Fragment, null,\n        react_1.default.createElement(Uploader_1.default, null),\n        react_1.default.createElement(FileList_1.default, null)));\n}\nexports[\"default\"] = App;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1HQUEwQjtBQUMxQixzSEFBNkM7QUFDN0Msc0hBQTZDO0FBUTdDLFNBQXdCLEdBQUc7SUFDekIsTUFBTSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsR0FBRyxRQUFRLENBQWlCO1FBQ25EO1lBQ0UsRUFBRSxFQUFFLEdBQUc7WUFDUCxLQUFLLEVBQUUsU0FBUztZQUNoQixJQUFJLEVBQUUsTUFBTTtZQUNaLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLEdBQUcsRUFBRSxJQUFJO1lBQ1QsWUFBWSxFQUFFLGNBQWM7WUFDNUIsS0FBSyxFQUFFLE9BQU87WUFDZCxXQUFXLEVBQUUsYUFBYTtZQUMxQixRQUFRLEVBQUUsVUFBVTtZQUNwQixVQUFVLEVBQUUsV0FBVztZQUN2QixLQUFLLEVBQUUsT0FBTztZQUNkLElBQUksRUFBRSxNQUFNO1lBQ1osT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFO1NBQ3hDO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsSUFBSSxlQUFlLEVBQUU7UUFDbkIsT0FBTyx1Q0FBSyxTQUFTLEVBQUMsV0FBVzs7WUFBUyxlQUFlLENBQU8sQ0FBQztLQUNsRTtJQUNELElBQUksQ0FBQyxVQUFVLEVBQUU7UUFDZixPQUFPLHVDQUFLLFNBQVMsRUFBQyxXQUFXLGlCQUFpQixDQUFDO0tBQ3BEO0lBQ0QsT0FBTyxDQUNMO1FBQ0UsOEJBQUMsa0JBQVEsT0FBRztRQUNaLDhCQUFDLGtCQUFRLE9BQUcsQ0FDWCxDQUNKLENBQUM7QUFDSixDQUFDO0FBaENELHlCQWdDQyIsInNvdXJjZXMiOlsid2VicGFjazovL21iLWFwcC8uL3NyYy9BcHAudHN4PzFjNmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFVwbG9hZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvVXBsb2FkZXJcIjtcbmltcG9ydCBGaWxlTGlzdCBmcm9tIFwiLi9jb21wb25lbnRzL0ZpbGVMaXN0XCI7XG5pbXBvcnQgdXNlVHJhY2tzIGZyb20gXCIuL2hvb2tzL3VzZVRyYWNrc1wiO1xuaW1wb3J0IHsgdHJhY2tNZXRhIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvaW5kZXhcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJU3RhdGUge1xuICBkYXRhOiB0cmFja01ldGFbXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBbdHJhY2tzLCBzZXRUcmFja3NdID0gdXNlU3RhdGU8SVN0YXRlW1wiZGF0YVwiXT4oW1xuICAgIHtcbiAgICAgIGlkOiBcIjRcIixcbiAgICAgIHRpdGxlOiBcIkV4YW1wbGVcIixcbiAgICAgIHNpemU6IDkwODc3OCxcbiAgICAgIGZpbGVuYW1lOiBcImZpbGVuYW1lXCIsXG4gICAgICBhcnRpc3Q6IFwiQXJ0aXN0XCIsXG4gICAgICBicG06IFwiOTBcIixcbiAgICAgIGNvbnRlbnRHcm91cDogXCJjb250ZW50R3JvdXBcIixcbiAgICAgIGdlbnJlOiBcImdlbnJlXCIsXG4gICAgICByZW1peEFydGlzdDogXCJyZW1peEFydGlzdFwiLFxuICAgICAgY29tcG9zZXI6IFwiY29tcG9zZXJcIixcbiAgICAgIGluaXRpYWxLZXk6IFwiaW5pdGFsS2V5XCIsXG4gICAgICBsYWJlbDogXCJsYWJlbFwiLFxuICAgICAgeWVhcjogXCIxOTg4XCIsXG4gICAgICBjb21tZW50OiB7IHRleHQ6IFwiY29tbWVudHMgdGhhdHMgbmV3XCIgfSxcbiAgICB9LFxuICBdKTtcblxuICBpZiAodHJhY2tzRGF0YUVycm9yKSB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+ZXJyb3I6IHt0cmFja3NEYXRhRXJyb3J9PC9kaXY+O1xuICB9XG4gIGlmICghdHJhY2tzRGF0YSkge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPi4uLmxvYWRpbmc8L2Rpdj47XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFVwbG9hZGVyIC8+XG4gICAgICA8RmlsZUxpc3QgLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/App.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e39055c8e1e211611b35")
/******/ })();
/******/ 
/******/ }
);