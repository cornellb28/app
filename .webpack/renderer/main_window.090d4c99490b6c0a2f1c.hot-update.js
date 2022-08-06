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

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst FileCard_1 = __importDefault(__webpack_require__(/*! ./FileCard */ \"./src/components/FileCard.tsx\"));\nfunction FileList() {\n    const tracksData = [\n        {\n            id: \"4\",\n            title: \"Example\",\n            size: 908778,\n            filename: \"filename\",\n            artist: \"Artist\",\n            bpm: \"90\",\n            contentGroup: \"contentGroup\",\n            genre: \"genre\",\n            remixArtist: \"remixArtist\",\n            composer: \"composer\",\n            initialKey: \"initalKey\",\n            label: \"label\",\n            year: \"1988\",\n            comment: { text: \"comments thats new\" },\n        },\n    ];\n    function sortByDate(a, b) {\n        const dateA = a.createDate;\n        const dateB = b.createDate;\n        return dateA > dateB ? -1 : dateA < dateB ? 1 : 0;\n    }\n    return (react_1.default.createElement(\"div\", { className: \"row tab-content bg-transparent note-has-grid\" }, tracksData.map((track) => {\n        return react_1.default.createElement(FileCard_1.default, { track: track, key: track.id });\n    })));\n}\nexports[\"default\"] = FileList;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9GaWxlTGlzdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtR0FBa0M7QUFFbEMsMkdBQWtDO0FBT2xDLFNBQXdCLFFBQVE7SUFDOUIsTUFBTSxVQUFVLEdBQWdCO1FBQzlCO1lBQ0UsRUFBRSxFQUFFLEdBQUc7WUFDUCxLQUFLLEVBQUUsU0FBUztZQUNoQixJQUFJLEVBQUUsTUFBTTtZQUNaLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLEdBQUcsRUFBRSxJQUFJO1lBQ1QsWUFBWSxFQUFFLGNBQWM7WUFDNUIsS0FBSyxFQUFFLE9BQU87WUFDZCxXQUFXLEVBQUUsYUFBYTtZQUMxQixRQUFRLEVBQUUsVUFBVTtZQUNwQixVQUFVLEVBQUUsV0FBVztZQUN2QixLQUFLLEVBQUUsT0FBTztZQUNkLElBQUksRUFBRSxNQUFNO1lBQ1osT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFO1NBQ3hDO0tBQ0YsQ0FBQztJQUNGLFNBQVMsVUFBVSxDQUFDLENBQU0sRUFBRSxDQUFNO1FBQ2hDLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7UUFDM0IsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztRQUMzQixPQUFPLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBQ0QsT0FBTyxDQUNMLHVDQUFLLFNBQVMsRUFBQyw4Q0FBOEMsSUFDMUQsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQ3hCLE9BQU8sOEJBQUMsa0JBQVEsSUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxHQUFJLENBQUM7SUFDbkQsQ0FBQyxDQUFDLENBQ0UsQ0FDUCxDQUFDO0FBQ0osQ0FBQztBQS9CRCw4QkErQkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYi1hcHAvLi9zcmMvY29tcG9uZW50cy9GaWxlTGlzdC50c3g/NDczYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEZpbGVDYXJkIGZyb20gXCIuL0ZpbGVDYXJkXCI7XG5pbXBvcnQgeyB0cmFja01ldGEgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9pbmRleFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0ZSB7XG4gIGRhdGE6IHRyYWNrTWV0YVtdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaWxlTGlzdCgpIHtcbiAgY29uc3QgdHJhY2tzRGF0YTogdHJhY2tNZXRhW10gPSBbXG4gICAge1xuICAgICAgaWQ6IFwiNFwiLFxuICAgICAgdGl0bGU6IFwiRXhhbXBsZVwiLFxuICAgICAgc2l6ZTogOTA4Nzc4LFxuICAgICAgZmlsZW5hbWU6IFwiZmlsZW5hbWVcIixcbiAgICAgIGFydGlzdDogXCJBcnRpc3RcIixcbiAgICAgIGJwbTogXCI5MFwiLFxuICAgICAgY29udGVudEdyb3VwOiBcImNvbnRlbnRHcm91cFwiLFxuICAgICAgZ2VucmU6IFwiZ2VucmVcIixcbiAgICAgIHJlbWl4QXJ0aXN0OiBcInJlbWl4QXJ0aXN0XCIsXG4gICAgICBjb21wb3NlcjogXCJjb21wb3NlclwiLFxuICAgICAgaW5pdGlhbEtleTogXCJpbml0YWxLZXlcIixcbiAgICAgIGxhYmVsOiBcImxhYmVsXCIsXG4gICAgICB5ZWFyOiBcIjE5ODhcIixcbiAgICAgIGNvbW1lbnQ6IHsgdGV4dDogXCJjb21tZW50cyB0aGF0cyBuZXdcIiB9LFxuICAgIH0sXG4gIF07XG4gIGZ1bmN0aW9uIHNvcnRCeURhdGUoYTogYW55LCBiOiBhbnkpOiAxIHwgLTEgfCAwIHtcbiAgICBjb25zdCBkYXRlQSA9IGEuY3JlYXRlRGF0ZTtcbiAgICBjb25zdCBkYXRlQiA9IGIuY3JlYXRlRGF0ZTtcbiAgICByZXR1cm4gZGF0ZUEgPiBkYXRlQiA/IC0xIDogZGF0ZUEgPCBkYXRlQiA/IDEgOiAwO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgdGFiLWNvbnRlbnQgYmctdHJhbnNwYXJlbnQgbm90ZS1oYXMtZ3JpZFwiPlxuICAgICAge3RyYWNrc0RhdGEubWFwKCh0cmFjaykgPT4ge1xuICAgICAgICByZXR1cm4gPEZpbGVDYXJkIHRyYWNrPXt0cmFja30ga2V5PXt0cmFjay5pZH0gLz47XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/FileList.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4a2ff34e51494108c4b0")
/******/ })();
/******/ 
/******/ }
);