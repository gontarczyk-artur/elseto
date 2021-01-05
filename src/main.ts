import { app, BrowserWindow } from 'electron';

function createWindow() {
    const mainWindow: BrowserWindow = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 800,
        minHeight: 600
    });

    mainWindow.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('activate', (): void => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

app.on('window-all-closed', (): void => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
