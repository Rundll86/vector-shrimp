import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("closeWindow", () => {
    ipcRenderer.send("close-window");
});
contextBridge.exposeInMainWorld("minimizeWindow", () => {
    ipcRenderer.send("minimize-window");
});
