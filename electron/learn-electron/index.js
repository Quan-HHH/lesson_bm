const { app, BrowserWindow } = require('electron');

// exe  c/s结构

let win

app.on('ready', () => {
    win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    })
    // win.loadFile("index.html")
    win.loadURL('http://localhost:3000/')
})