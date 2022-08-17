import { contextBridge, ipcRenderer } from "electron";

export type ContextBridgeApi = {
  uploadFiles: () => Promise<void>;
};

const uploads: string = "upload-files";
const exposedApi: ContextBridgeApi = {
  uploadFiles: async () => {
    // returns the filepath to scan
    const filePath = await ipcRenderer.invoke(uploads);

    /*
      this is where I want the data to be added the JSON, and Database      
    */
    
  },
};

contextBridge.exposeInMainWorld("api", exposedApi);

// https://blog.totominc.io/blog/how-to-handle-electron-ipc-events-with-typescript
// https://blog.totominc.io/blog/electron-process-model
// https://stackoverflow.com/questions/69059668/enableremotemodule-is-missing-from-electron-v14-typescript-type-definitions
// https://www.pluralsight.com/guides/javascript-promise-typeerror:-cannot-read-then-of-undefined
