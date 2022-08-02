import { contextBridge, ipcRenderer } from "electron";

export type ContextBridgeApi = {
  uploadFiles: () => Promise<void>;
};

const uploads: string = "upload-files";
const exposedApi: ContextBridgeApi = {
  uploadFiles: async () => {
    const filePath = await ipcRenderer.invoke(uploads);
    console.log("preload:", filePath);
  },
};

contextBridge.exposeInMainWorld("api", exposedApi);

// https://blog.totominc.io/blog/how-to-handle-electron-ipc-events-with-typescript
// https://blog.totominc.io/blog/electron-process-model
// https://stackoverflow.com/questions/69059668/enableremotemodule-is-missing-from-electron-v14-typescript-type-definitions
// https://www.pluralsight.com/guides/javascript-promise-typeerror:-cannot-read-then-of-undefined
