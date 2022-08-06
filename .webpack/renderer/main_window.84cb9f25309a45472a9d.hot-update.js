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

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst FileCard_1 = __importDefault(__webpack_require__(/*! ./FileCard */ \"./src/components/FileCard.tsx\"));\nfunction FileList() {\n    const tracksData = [\n        {\n            id: \"4\",\n            title: \"Example\",\n            size: 908778,\n            filename: \"filename\",\n            artist: \"Artist\",\n            bpm: \"90\",\n            contentGroup: \"contentGroup\",\n            genre: \"genre\",\n            remixArtist: \"remixArtist\",\n            composer: \"composer\",\n            initialKey: \"initalKey\",\n            label: \"label\",\n            year: \"1988\",\n            comment: { text: \"comments thats new\" },\n        },\n    ];\n    function sortByDate(a, b) {\n        const dateA = a.createDate;\n        const dateB = b.createDate;\n        return dateA > dateB ? -1 : dateA < dateB ? 1 : 0;\n    }\n    return (react_1.default.createElement(\"div\", { className: \"row tab-content bg-transparent note-has-grid\" }, tracksData.map((track) => {\n        return react_1.default.createElement(FileCard_1.default, { track: track, key: track.id });\n    })));\n}\nexports[\"default\"] = FileList;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9GaWxlTGlzdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtR0FBMEI7QUFDMUIsMkdBQWtDO0FBT2xDLFNBQXdCLFFBQVE7SUFDNUIsTUFBTSxVQUFVLEdBQWdCO1FBQzlCO1lBQ0UsRUFBRSxFQUFFLEdBQUc7WUFDUCxLQUFLLEVBQUUsU0FBUztZQUNoQixJQUFJLEVBQUUsTUFBTTtZQUNaLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLEdBQUcsRUFBRSxJQUFJO1lBQ1QsWUFBWSxFQUFFLGNBQWM7WUFDNUIsS0FBSyxFQUFFLE9BQU87WUFDZCxXQUFXLEVBQUUsYUFBYTtZQUMxQixRQUFRLEVBQUUsVUFBVTtZQUNwQixVQUFVLEVBQUUsV0FBVztZQUN2QixLQUFLLEVBQUUsT0FBTztZQUNkLElBQUksRUFBRSxNQUFNO1lBQ1osT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFO1NBQ3hDO0tBQ0YsQ0FBQztJQUNKLFNBQVMsVUFBVSxDQUFDLENBQU0sRUFBRSxDQUFNO1FBQ2hDLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7UUFDM0IsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztRQUMzQixPQUFPLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBQ0QsT0FBTyxDQUNMLHVDQUFLLFNBQVMsRUFBQyw4Q0FBOEMsSUFDMUQsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQ3hCLE9BQU8sOEJBQUMsa0JBQVEsSUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxHQUFJLENBQUM7SUFDbkQsQ0FBQyxDQUFDLENBQ0UsQ0FDUCxDQUFDO0FBQ0osQ0FBQztBQS9CRCw4QkErQkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYi1hcHAvLi9zcmMvY29tcG9uZW50cy9GaWxlTGlzdC50c3g/NDczYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRmlsZUNhcmQgZnJvbSBcIi4vRmlsZUNhcmRcIjtcbmltcG9ydCB7IHRyYWNrTWV0YSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2luZGV4XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRlIHtcbiAgcGVvcGxlOiBbXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmlsZUxpc3QoKSB7XG4gICAgY29uc3QgdHJhY2tzRGF0YTogdHJhY2tNZXRhW10gPSBbXG4gICAgICB7XG4gICAgICAgIGlkOiBcIjRcIixcbiAgICAgICAgdGl0bGU6IFwiRXhhbXBsZVwiLFxuICAgICAgICBzaXplOiA5MDg3NzgsXG4gICAgICAgIGZpbGVuYW1lOiBcImZpbGVuYW1lXCIsXG4gICAgICAgIGFydGlzdDogXCJBcnRpc3RcIixcbiAgICAgICAgYnBtOiBcIjkwXCIsXG4gICAgICAgIGNvbnRlbnRHcm91cDogXCJjb250ZW50R3JvdXBcIixcbiAgICAgICAgZ2VucmU6IFwiZ2VucmVcIixcbiAgICAgICAgcmVtaXhBcnRpc3Q6IFwicmVtaXhBcnRpc3RcIixcbiAgICAgICAgY29tcG9zZXI6IFwiY29tcG9zZXJcIixcbiAgICAgICAgaW5pdGlhbEtleTogXCJpbml0YWxLZXlcIixcbiAgICAgICAgbGFiZWw6IFwibGFiZWxcIixcbiAgICAgICAgeWVhcjogXCIxOTg4XCIsXG4gICAgICAgIGNvbW1lbnQ6IHsgdGV4dDogXCJjb21tZW50cyB0aGF0cyBuZXdcIiB9LFxuICAgICAgfSxcbiAgICBdO1xuICBmdW5jdGlvbiBzb3J0QnlEYXRlKGE6IGFueSwgYjogYW55KTogMSB8IC0xIHwgMCB7XG4gICAgY29uc3QgZGF0ZUEgPSBhLmNyZWF0ZURhdGU7XG4gICAgY29uc3QgZGF0ZUIgPSBiLmNyZWF0ZURhdGU7XG4gICAgcmV0dXJuIGRhdGVBID4gZGF0ZUIgPyAtMSA6IGRhdGVBIDwgZGF0ZUIgPyAxIDogMDtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHRhYi1jb250ZW50IGJnLXRyYW5zcGFyZW50IG5vdGUtaGFzLWdyaWRcIj5cbiAgICAgIHt0cmFja3NEYXRhLm1hcCgodHJhY2spID0+IHtcbiAgICAgICAgcmV0dXJuIDxGaWxlQ2FyZCB0cmFjaz17dHJhY2t9IGtleT17dHJhY2suaWR9IC8+O1xuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/FileList.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b53649c1ec7e74c44b7a")
/******/ })();
/******/ 
/******/ }
);