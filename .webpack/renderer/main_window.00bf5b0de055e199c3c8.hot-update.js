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

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst FileCard_1 = __importDefault(__webpack_require__(/*! ./FileCard */ \"./src/components/FileCard.tsx\"));\nfunction FileList() {\n    const tracksData = [\n        {\n            id: \"4\",\n            title: \"Example\",\n            size: 908778,\n            filename: \"filename\",\n            artist: \"Artist\",\n            bpm: \"90\",\n            contentGroup: \"contentGroup\",\n            genre: \"genre\",\n            remixArtist: \"remixArtist\",\n            composer: \"composer\",\n            initialKey: \"initalKey\",\n            label: \"label\",\n            year: \"1988\",\n            comment: { text: \"comments thats new\" },\n        },\n    ];\n    function sortByDate(a, b) {\n        const dateA = a.createDate;\n        const dateB = b.createDate;\n        return dateA > dateB ? -1 : dateA < dateB ? 1 : 0;\n    }\n    return (react_1.default.createElement(\"div\", { className: \"row tab-content bg-transparent note-has-grid\" }, tracksData.map((track) => {\n        return react_1.default.createElement(FileCard_1.default, { track: track, key: track.id });\n    })));\n}\nexports[\"default\"] = FileList;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9GaWxlTGlzdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtR0FBMEI7QUFDMUIsMkdBQWtDO0FBT2xDLFNBQXdCLFFBQVE7SUFDNUIsTUFBTSxVQUFVLEdBQWdCO1FBQzlCO1lBQ0UsRUFBRSxFQUFFLEdBQUc7WUFDUCxLQUFLLEVBQUUsU0FBUztZQUNoQixJQUFJLEVBQUUsTUFBTTtZQUNaLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLEdBQUcsRUFBRSxJQUFJO1lBQ1QsWUFBWSxFQUFFLGNBQWM7WUFDNUIsS0FBSyxFQUFFLE9BQU87WUFDZCxXQUFXLEVBQUUsYUFBYTtZQUMxQixRQUFRLEVBQUUsVUFBVTtZQUNwQixVQUFVLEVBQUUsV0FBVztZQUN2QixLQUFLLEVBQUUsT0FBTztZQUNkLElBQUksRUFBRSxNQUFNO1lBQ1osT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFO1NBQ3hDO0tBQ0YsQ0FBQztJQUNKLFNBQVMsVUFBVSxDQUFDLENBQU0sRUFBRSxDQUFNO1FBQ2hDLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7UUFDM0IsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztRQUMzQixPQUFPLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBQ0QsT0FBTyxDQUNMLHVDQUFLLFNBQVMsRUFBQyw4Q0FBOEMsSUFDMUQsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQ3hCLE9BQU8sOEJBQUMsa0JBQVEsSUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxHQUFJLENBQUM7SUFDbkQsQ0FBQyxDQUFDLENBQ0UsQ0FDUCxDQUFDO0FBQ0osQ0FBQztBQS9CRCw4QkErQkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYi1hcHAvLi9zcmMvY29tcG9uZW50cy9GaWxlTGlzdC50c3g/NDczYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRmlsZUNhcmQgZnJvbSBcIi4vRmlsZUNhcmRcIjtcbmltcG9ydCB7IHRyYWNrTWV0YSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2luZGV4XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRlIHtcbiAgZGF0YTogdHJhY2tNZXRhW107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpbGVMaXN0KCkge1xuICAgIGNvbnN0IHRyYWNrc0RhdGE6IHRyYWNrTWV0YVtdID0gW1xuICAgICAge1xuICAgICAgICBpZDogXCI0XCIsXG4gICAgICAgIHRpdGxlOiBcIkV4YW1wbGVcIixcbiAgICAgICAgc2l6ZTogOTA4Nzc4LFxuICAgICAgICBmaWxlbmFtZTogXCJmaWxlbmFtZVwiLFxuICAgICAgICBhcnRpc3Q6IFwiQXJ0aXN0XCIsXG4gICAgICAgIGJwbTogXCI5MFwiLFxuICAgICAgICBjb250ZW50R3JvdXA6IFwiY29udGVudEdyb3VwXCIsXG4gICAgICAgIGdlbnJlOiBcImdlbnJlXCIsXG4gICAgICAgIHJlbWl4QXJ0aXN0OiBcInJlbWl4QXJ0aXN0XCIsXG4gICAgICAgIGNvbXBvc2VyOiBcImNvbXBvc2VyXCIsXG4gICAgICAgIGluaXRpYWxLZXk6IFwiaW5pdGFsS2V5XCIsXG4gICAgICAgIGxhYmVsOiBcImxhYmVsXCIsXG4gICAgICAgIHllYXI6IFwiMTk4OFwiLFxuICAgICAgICBjb21tZW50OiB7IHRleHQ6IFwiY29tbWVudHMgdGhhdHMgbmV3XCIgfSxcbiAgICAgIH0sXG4gICAgXTtcbiAgZnVuY3Rpb24gc29ydEJ5RGF0ZShhOiBhbnksIGI6IGFueSk6IDEgfCAtMSB8IDAge1xuICAgIGNvbnN0IGRhdGVBID0gYS5jcmVhdGVEYXRlO1xuICAgIGNvbnN0IGRhdGVCID0gYi5jcmVhdGVEYXRlO1xuICAgIHJldHVybiBkYXRlQSA+IGRhdGVCID8gLTEgOiBkYXRlQSA8IGRhdGVCID8gMSA6IDA7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyB0YWItY29udGVudCBiZy10cmFuc3BhcmVudCBub3RlLWhhcy1ncmlkXCI+XG4gICAgICB7dHJhY2tzRGF0YS5tYXAoKHRyYWNrKSA9PiB7XG4gICAgICAgIHJldHVybiA8RmlsZUNhcmQgdHJhY2s9e3RyYWNrfSBrZXk9e3RyYWNrLmlkfSAvPjtcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/FileList.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fa76935172fec1607eed")
/******/ })();
/******/ 
/******/ }
);