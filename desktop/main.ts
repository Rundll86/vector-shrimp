import { app, ipcMain } from "electron";
import { BrowserWindow } from "electron";
import { Menu } from "electron/main";
import path from "path";

function createWindow(): void {
    const mainWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        title: "矢量虾",
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        },
        frame: false
    });
    mainWindow.loadURL("http://localhost:25565");
    Menu.setApplicationMenu(null);
}
app.whenReady().then(() => {
    createWindow();
    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
ipcMain.on("close-window", () => {
    BrowserWindow.getAllWindows().forEach((window) => {
        window.close();
    });
});
ipcMain.on("minimize-window", () => {
    BrowserWindow.getAllWindows().forEach((window) => {
        window.minimize();
    });
});
