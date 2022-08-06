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

/***/ "./src/components/FileList.tsx":
/*!*************************************!*\
  !*** ./src/components/FileList.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst FileCard_1 = __importDefault(__webpack_require__(/*! ./FileCard */ \"./src/components/FileCard.tsx\"));\nfunction FileList() {\n    const [tracks, setTracks] = (0, react_1.useState)([\n        {\n            id: \"4\",\n            title: \"Example\",\n            size: 908778,\n            filename: \"filename\",\n            artist: \"Artist\",\n            bpm: \"90\",\n            contentGroup: \"contentGroup\",\n            genre: \"genre\",\n            remixArtist: \"remixArtist\",\n            composer: \"composer\",\n            initialKey: \"initalKey\",\n            label: \"label\",\n            year: \"1988\",\n            comment: { text: \"comments thats new\" },\n        },\n    ]);\n    function sortByDate(a, b) {\n        const dateA = a.createDate;\n        const dateB = b.createDate;\n        return dateA > dateB ? -1 : dateA < dateB ? 1 : 0;\n    }\n    return (react_1.default.createElement(\"div\", { className: \"row tab-content bg-transparent note-has-grid\" }, tracksData.map((track) => {\n        return react_1.default.createElement(FileCard_1.default, { track: track, key: track.id });\n    })));\n}\nexports[\"default\"] = FileList;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9GaWxlTGlzdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0dBQXdDO0FBRXhDLDJHQUFrQztBQU9sQyxTQUF3QixRQUFRO0lBQzVCLE1BQU0sQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLEdBQUcsb0JBQVEsRUFBbUI7UUFDckQ7WUFDRSxFQUFFLEVBQUUsR0FBRztZQUNQLEtBQUssRUFBRSxTQUFTO1lBQ2hCLElBQUksRUFBRSxNQUFNO1lBQ1osUUFBUSxFQUFFLFVBQVU7WUFDcEIsTUFBTSxFQUFFLFFBQVE7WUFDaEIsR0FBRyxFQUFFLElBQUk7WUFDVCxZQUFZLEVBQUUsY0FBYztZQUM1QixLQUFLLEVBQUUsT0FBTztZQUNkLFdBQVcsRUFBRSxhQUFhO1lBQzFCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFVBQVUsRUFBRSxXQUFXO1lBQ3ZCLEtBQUssRUFBRSxPQUFPO1lBQ2QsSUFBSSxFQUFFLE1BQU07WUFDWixPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUU7U0FDeEM7S0FDRixDQUFDLENBQUM7SUFDTCxTQUFTLFVBQVUsQ0FBQyxDQUFNLEVBQUUsQ0FBTTtRQUNoQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDO1FBQzNCLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7UUFDM0IsT0FBTyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUNELE9BQU8sQ0FDTCx1Q0FBSyxTQUFTLEVBQUMsOENBQThDLElBQzFELFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtRQUN4QixPQUFPLDhCQUFDLGtCQUFRLElBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsR0FBSSxDQUFDO0lBQ25ELENBQUMsQ0FBQyxDQUNFLENBQ1AsQ0FBQztBQUNKLENBQUM7QUEvQkQsOEJBK0JDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWItYXBwLy4vc3JjL2NvbXBvbmVudHMvRmlsZUxpc3QudHN4PzQ3M2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBGaWxlQ2FyZCBmcm9tIFwiLi9GaWxlQ2FyZFwiO1xuaW1wb3J0IHsgdHJhY2tNZXRhIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvaW5kZXhcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJU3RhdGUge1xuICBkYXRhOiB0cmFja01ldGFbXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmlsZUxpc3QoKSB7XG4gICAgY29uc3QgW3RyYWNrcywgc2V0VHJhY2tzXSA9IHVzZVN0YXRlPElTdGF0ZVtcInBlb3BsZVwiXT4oW1xuICAgICAge1xuICAgICAgICBpZDogXCI0XCIsXG4gICAgICAgIHRpdGxlOiBcIkV4YW1wbGVcIixcbiAgICAgICAgc2l6ZTogOTA4Nzc4LFxuICAgICAgICBmaWxlbmFtZTogXCJmaWxlbmFtZVwiLFxuICAgICAgICBhcnRpc3Q6IFwiQXJ0aXN0XCIsXG4gICAgICAgIGJwbTogXCI5MFwiLFxuICAgICAgICBjb250ZW50R3JvdXA6IFwiY29udGVudEdyb3VwXCIsXG4gICAgICAgIGdlbnJlOiBcImdlbnJlXCIsXG4gICAgICAgIHJlbWl4QXJ0aXN0OiBcInJlbWl4QXJ0aXN0XCIsXG4gICAgICAgIGNvbXBvc2VyOiBcImNvbXBvc2VyXCIsXG4gICAgICAgIGluaXRpYWxLZXk6IFwiaW5pdGFsS2V5XCIsXG4gICAgICAgIGxhYmVsOiBcImxhYmVsXCIsXG4gICAgICAgIHllYXI6IFwiMTk4OFwiLFxuICAgICAgICBjb21tZW50OiB7IHRleHQ6IFwiY29tbWVudHMgdGhhdHMgbmV3XCIgfSxcbiAgICAgIH0sXG4gICAgXSk7XG4gIGZ1bmN0aW9uIHNvcnRCeURhdGUoYTogYW55LCBiOiBhbnkpOiAxIHwgLTEgfCAwIHtcbiAgICBjb25zdCBkYXRlQSA9IGEuY3JlYXRlRGF0ZTtcbiAgICBjb25zdCBkYXRlQiA9IGIuY3JlYXRlRGF0ZTtcbiAgICByZXR1cm4gZGF0ZUEgPiBkYXRlQiA/IC0xIDogZGF0ZUEgPCBkYXRlQiA/IDEgOiAwO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgdGFiLWNvbnRlbnQgYmctdHJhbnNwYXJlbnQgbm90ZS1oYXMtZ3JpZFwiPlxuICAgICAge3RyYWNrc0RhdGEubWFwKCh0cmFjaykgPT4ge1xuICAgICAgICByZXR1cm4gPEZpbGVDYXJkIHRyYWNrPXt0cmFja30ga2V5PXt0cmFjay5pZH0gLz47XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/FileList.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f2d4c76dd9aa96166554")
/******/ })();
/******/ 
/******/ }
);