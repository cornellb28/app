// src/preload.ts

// `contextBridge` expose an API to the renderer process.
// `ipcRenderer` is used for IPC (inter-process communication) with main process.
// We use it in the preload instead of renderer in order to expose only
// whitelisted wrappers to increase the security of our aplication.
import { contextBridge, ipcRenderer } from "electron";

// Create a type that should contain all the data we need to expose in the
// renderer process using `contextBridge`.
export type ContextBridgeApi = {
  uploadFiles: () => Promise<string>;
};

const uploads = "upload-files";
const exposedApi: ContextBridgeApi = {
  uploadFiles: () => {
    // Send IPC event to main process to read the file.;
    return Promise.resolve("hello");
  },
};

// Expose our functions in the `api` namespace of the renderer `Window`.
//
// If I want to call `readFile` from the renderer process, I can do it by
// calling the function `window.api.readFile()`.
contextBridge.exposeInMainWorld("api", exposedApi);

// https://blog.totominc.io/blog/how-to-handle-electron-ipc-events-with-typescript
// https://blog.totominc.io/blog/electron-process-model
// https://stackoverflow.com/questions/69059668/enableremotemodule-is-missing-from-electron-v14-typescript-type-definitions

// https://www.pluralsight.com/guides/javascript-promise-typeerror:-cannot-read-then-of-undefined
