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

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Card_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Card */ \"./node_modules/react-bootstrap/esm/Card.js\"));\nconst Row_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/esm/Row.js\"));\nconst Col_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/esm/Col.js\"));\nconst Image_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Image */ \"./node_modules/react-bootstrap/esm/Image.js\"));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n// id: \"1\",\n//       title: \"Example\",\n//       size: 908778,\n//       filename: \"/80s/HipHop/filename.mp3\",\n//       artist: \"Artist\",\n//       bpm: \"90\",\n//       contentGroup: \"contentGroup\",\n//       genre: \"genre\",\n//       remixArtist: \"remixArtist\",\n//       composer: \"composer\",\n//       initialKey: \"initalKey\",\n//       label: \"label\",\n//       year: \"1988\",\n//       comment: { text: \"comments thats new\" },\nfunction FileCard({ track }) {\n    return (react_1.default.createElement(Card_1.default, { className: \"p-0 mb-3\" },\n        react_1.default.createElement(Card_1.default.Header, null, track.filename),\n        react_1.default.createElement(Row_1.default, null,\n            react_1.default.createElement(Col_1.default, { lg: \"2\" },\n                react_1.default.createElement(Image_1.default, { fluid: true, src: \"\" })),\n            react_1.default.createElement(Col_1.default, { md: \"8\" },\n                react_1.default.createElement(Card_1.default.Body, { className: \"d-flex p-0\" },\n                    react_1.default.createElement(\"div\", { className: \"attributes\" },\n                        react_1.default.createElement(\"div\", null,\n                            react_1.default.createElement(\"span\", { className: \"track-label\" }, \"BPM:\"),\n                            react_1.default.createElement(\"span\", { className: \"track-value\" }, track.bpm)),\n                        react_1.default.createElement(\"div\", null,\n                            react_1.default.createElement(\"span\", { className: \"track-label\" }, \"Artist:\"),\n                            react_1.default.createElement(\"span\", { className: \"track-value\" }, track.artist)),\n                        react_1.default.createElement(\"div\", null,\n                            react_1.default.createElement(\"span\", { className: \"track-label\" }, \"Year:\"),\n                            react_1.default.createElement(\"span\", { className: \"track-value\" }, track.year)),\n                        react_1.default.createElement(\"div\", null,\n                            react_1.default.createElement(\"span\", { className: \"track-label\" }, \"Genre:\"),\n                            react_1.default.createElement(\"span\", { className: \"track-value\" }, track.genre)),\n                        react_1.default.createElement(\"div\", null,\n                            react_1.default.createElement(\"span\", { className: \"track-label\" }, \"Size:\"),\n                            react_1.default.createElement(\"span\", { className: \"track-value\" }, track.size))))),\n            react_1.default.createElement(Col_1.default, { lg: \"2\" }, \"1 of 3\"))));\n}\nexports[\"default\"] = FileCard;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9GaWxlQ2FyZC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw4SEFBd0M7QUFDeEMsMkhBQXNDO0FBQ3RDLDJIQUFzQztBQUN0QyxpSUFBMEM7QUFDMUMsbUdBQTBCO0FBTTFCLFdBQVc7QUFDWCwwQkFBMEI7QUFDMUIsc0JBQXNCO0FBQ3RCLDhDQUE4QztBQUM5QywwQkFBMEI7QUFDMUIsbUJBQW1CO0FBQ25CLHNDQUFzQztBQUN0Qyx3QkFBd0I7QUFDeEIsb0NBQW9DO0FBQ3BDLDhCQUE4QjtBQUM5QixpQ0FBaUM7QUFDakMsd0JBQXdCO0FBQ3hCLHNCQUFzQjtBQUN0QixpREFBaUQ7QUFFakQsU0FBd0IsUUFBUSxDQUFDLEVBQUUsS0FBSyxFQUFTO0lBQy9DLE9BQU8sQ0FDTCw4QkFBQyxjQUFJLElBQUMsU0FBUyxFQUFDLFVBQVU7UUFDeEIsOEJBQUMsY0FBSSxDQUFDLE1BQU0sUUFBRSxLQUFLLENBQUMsUUFBUSxDQUFlO1FBQzNDLDhCQUFDLGFBQUc7WUFDRiw4QkFBQyxhQUFHLElBQUMsRUFBRSxFQUFDLEdBQUc7Z0JBQ1QsOEJBQUMsZUFBSyxJQUNKLEtBQUssUUFDTCxHQUFHLEVBQUMsRUFBRSxHQUNOLENBQ0U7WUFDTiw4QkFBQyxhQUFHLElBQUMsRUFBRSxFQUFDLEdBQUc7Z0JBQ1QsOEJBQUMsY0FBSSxDQUFDLElBQUksSUFBQyxTQUFTLEVBQUMsWUFBWTtvQkFDL0IsdUNBQUssU0FBUyxFQUFDLFlBQVk7d0JBQ3pCOzRCQUNFLHdDQUFNLFNBQVMsRUFBQyxhQUFhLFdBQVk7NEJBQ3pDLHdDQUFNLFNBQVMsRUFBQyxhQUFhLElBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBUSxDQUM1Qzt3QkFDTjs0QkFDRSx3Q0FBTSxTQUFTLEVBQUMsYUFBYSxjQUFlOzRCQUM1Qyx3Q0FBTSxTQUFTLEVBQUMsYUFBYSxJQUFFLEtBQUssQ0FBQyxNQUFNLENBQVEsQ0FDL0M7d0JBQ047NEJBQ0Usd0NBQU0sU0FBUyxFQUFDLGFBQWEsWUFBYTs0QkFDMUMsd0NBQU0sU0FBUyxFQUFDLGFBQWEsSUFBRSxLQUFLLENBQUMsSUFBSSxDQUFRLENBQzdDO3dCQUNOOzRCQUNFLHdDQUFNLFNBQVMsRUFBQyxhQUFhLGFBQWM7NEJBQzNDLHdDQUFNLFNBQVMsRUFBQyxhQUFhLElBQUUsS0FBSyxDQUFDLEtBQUssQ0FBUSxDQUM5Qzt3QkFDTjs0QkFDRSx3Q0FBTSxTQUFTLEVBQUMsYUFBYSxZQUFhOzRCQUMxQyx3Q0FBTSxTQUFTLEVBQUMsYUFBYSxJQUFFLEtBQUssQ0FBQyxJQUFJLENBQVEsQ0FDN0MsQ0FDRixDQUNJLENBQ1I7WUFDTiw4QkFBQyxhQUFHLElBQUMsRUFBRSxFQUFDLEdBQUcsYUFBYSxDQUNwQixDQUNELENBQ1IsQ0FBQztBQUNKLENBQUM7QUF6Q0QsOEJBeUNDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWItYXBwLy4vc3JjL2NvbXBvbmVudHMvRmlsZUNhcmQudHN4P2U5NDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdHJhY2tNZXRhIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXNcIjtcbmltcG9ydCBDYXJkIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ2FyZFwiO1xuaW1wb3J0IFJvdyBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1Jvd1wiO1xuaW1wb3J0IENvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NvbFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJyZWFjdC1ib290c3RyYXAvSW1hZ2VcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxudHlwZSBUUkFDSyA9IHtcbiAgdHJhY2s6IHRyYWNrTWV0YTtcbn07XG5cbi8vIGlkOiBcIjFcIixcbi8vICAgICAgIHRpdGxlOiBcIkV4YW1wbGVcIixcbi8vICAgICAgIHNpemU6IDkwODc3OCxcbi8vICAgICAgIGZpbGVuYW1lOiBcIi84MHMvSGlwSG9wL2ZpbGVuYW1lLm1wM1wiLFxuLy8gICAgICAgYXJ0aXN0OiBcIkFydGlzdFwiLFxuLy8gICAgICAgYnBtOiBcIjkwXCIsXG4vLyAgICAgICBjb250ZW50R3JvdXA6IFwiY29udGVudEdyb3VwXCIsXG4vLyAgICAgICBnZW5yZTogXCJnZW5yZVwiLFxuLy8gICAgICAgcmVtaXhBcnRpc3Q6IFwicmVtaXhBcnRpc3RcIixcbi8vICAgICAgIGNvbXBvc2VyOiBcImNvbXBvc2VyXCIsXG4vLyAgICAgICBpbml0aWFsS2V5OiBcImluaXRhbEtleVwiLFxuLy8gICAgICAgbGFiZWw6IFwibGFiZWxcIixcbi8vICAgICAgIHllYXI6IFwiMTk4OFwiLFxuLy8gICAgICAgY29tbWVudDogeyB0ZXh0OiBcImNvbW1lbnRzIHRoYXRzIG5ld1wiIH0sXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpbGVDYXJkKHsgdHJhY2sgfTogVFJBQ0spIHtcbiAgcmV0dXJuIChcbiAgICA8Q2FyZCBjbGFzc05hbWU9XCJwLTAgbWItM1wiPlxuICAgICAgPENhcmQuSGVhZGVyPnt0cmFjay5maWxlbmFtZX08L0NhcmQuSGVhZGVyPlxuICAgICAgPFJvdz5cbiAgICAgICAgPENvbCBsZz1cIjJcIj5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICBzcmM9XCJcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIG1kPVwiOFwiPlxuICAgICAgICAgIDxDYXJkLkJvZHkgY2xhc3NOYW1lPVwiZC1mbGV4IHAtMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdHRyaWJ1dGVzXCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHJhY2stbGFiZWxcIj5CUE06PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRyYWNrLXZhbHVlXCI+e3RyYWNrLmJwbX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRyYWNrLWxhYmVsXCI+QXJ0aXN0Ojwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0cmFjay12YWx1ZVwiPnt0cmFjay5hcnRpc3R9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0cmFjay1sYWJlbFwiPlllYXI6PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRyYWNrLXZhbHVlXCI+e3RyYWNrLnllYXJ9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0cmFjay1sYWJlbFwiPkdlbnJlOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0cmFjay12YWx1ZVwiPnt0cmFjay5nZW5yZX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRyYWNrLWxhYmVsXCI+U2l6ZTo8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHJhY2stdmFsdWVcIj57dHJhY2suc2l6ZX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9DYXJkLkJvZHk+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIGxnPVwiMlwiPjEgb2YgMzwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgPC9DYXJkPlxuICApO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/FileCard.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("81101e84164075a8f030")
/******/ })();
/******/ 
/******/ }
);