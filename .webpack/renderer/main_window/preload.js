/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dev/preload.ts":
/*!************************!*\
  !*** ./dev/preload.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst electron_1 = __webpack_require__(/*! electron */ \"electron\");\nconst uploads = \"upload-files\";\nconst exposedApi = {\n    uploadFiles: async () => {\n        // returns the filepath to scan\n        const filePath = await electron_1.ipcRenderer.invoke(uploads);\n        /*\n          this is where I want the data to be added the JSON, and Database\n        */\n        // saveDataToJson(filePath);\n    },\n};\nelectron_1.contextBridge.exposeInMainWorld(\"api\", exposedApi);\n// https://blog.totominc.io/blog/how-to-handle-electron-ipc-events-with-typescript\n// https://blog.totominc.io/blog/electron-process-model\n// https://stackoverflow.com/questions/69059668/enableremotemodule-is-missing-from-electron-v14-typescript-type-definitions\n// https://www.pluralsight.com/guides/javascript-promise-typeerror:-cannot-read-then-of-undefined\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYvcHJlbG9hZC50cy5qcyIsIm1hcHBpbmdzIjoiOztBQUFBLG1FQUFzRDtBQU90RCxNQUFNLE9BQU8sR0FBVyxjQUFjLENBQUM7QUFDdkMsTUFBTSxVQUFVLEdBQXFCO0lBQ25DLFdBQVcsRUFBRSxLQUFLLElBQUksRUFBRTtRQUN0QiwrQkFBK0I7UUFDL0IsTUFBTSxRQUFRLEdBQUcsTUFBTSxzQkFBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuRDs7VUFFRTtRQUNGLDRCQUE0QjtJQUM5QixDQUFDO0NBQ0YsQ0FBQztBQUVGLHdCQUFhLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBRW5ELGtGQUFrRjtBQUNsRix1REFBdUQ7QUFDdkQsMkhBQTJIO0FBQzNILGlHQUFpRyIsInNvdXJjZXMiOlsid2VicGFjazovL21iLWFwcC8uL2Rldi9wcmVsb2FkLnRzP2NhMmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29udGV4dEJyaWRnZSwgaXBjUmVuZGVyZXIgfSBmcm9tIFwiZWxlY3Ryb25cIjtcbmltcG9ydCB7IHNhdmVEYXRhVG9Kc29uIH0gZnJvbSBcIi4uL3NyYy91dGlscy9pbmRleFwiO1xuXG5leHBvcnQgdHlwZSBDb250ZXh0QnJpZGdlQXBpID0ge1xuICB1cGxvYWRGaWxlczogKCkgPT4gUHJvbWlzZTx2b2lkPjtcbn07XG5cbmNvbnN0IHVwbG9hZHM6IHN0cmluZyA9IFwidXBsb2FkLWZpbGVzXCI7XG5jb25zdCBleHBvc2VkQXBpOiBDb250ZXh0QnJpZGdlQXBpID0ge1xuICB1cGxvYWRGaWxlczogYXN5bmMgKCkgPT4ge1xuICAgIC8vIHJldHVybnMgdGhlIGZpbGVwYXRoIHRvIHNjYW5cbiAgICBjb25zdCBmaWxlUGF0aCA9IGF3YWl0IGlwY1JlbmRlcmVyLmludm9rZSh1cGxvYWRzKTtcbiAgICAvKlxuICAgICAgdGhpcyBpcyB3aGVyZSBJIHdhbnQgdGhlIGRhdGEgdG8gYmUgYWRkZWQgdGhlIEpTT04sIGFuZCBEYXRhYmFzZSAgICAgIFxuICAgICovXG4gICAgLy8gc2F2ZURhdGFUb0pzb24oZmlsZVBhdGgpO1xuICB9LFxufTtcblxuY29udGV4dEJyaWRnZS5leHBvc2VJbk1haW5Xb3JsZChcImFwaVwiLCBleHBvc2VkQXBpKTtcblxuLy8gaHR0cHM6Ly9ibG9nLnRvdG9taW5jLmlvL2Jsb2cvaG93LXRvLWhhbmRsZS1lbGVjdHJvbi1pcGMtZXZlbnRzLXdpdGgtdHlwZXNjcmlwdFxuLy8gaHR0cHM6Ly9ibG9nLnRvdG9taW5jLmlvL2Jsb2cvZWxlY3Ryb24tcHJvY2Vzcy1tb2RlbFxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNjkwNTk2NjgvZW5hYmxlcmVtb3RlbW9kdWxlLWlzLW1pc3NpbmctZnJvbS1lbGVjdHJvbi12MTQtdHlwZXNjcmlwdC10eXBlLWRlZmluaXRpb25zXG4vLyBodHRwczovL3d3dy5wbHVyYWxzaWdodC5jb20vZ3VpZGVzL2phdmFzY3JpcHQtcHJvbWlzZS10eXBlZXJyb3I6LWNhbm5vdC1yZWFkLXRoZW4tb2YtdW5kZWZpbmVkXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./dev/preload.ts\n");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("electron");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./dev/preload.ts");
/******/ 	
/******/ })()
;