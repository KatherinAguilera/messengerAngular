// Mostar en desktio con electron
const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win;

function createWindow() {
  win = new BrowserWindow({width: 800, height: 600});
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'dist/platzinger/index.html'),
    protocol: 'file:',
    slashes: true
  }));
  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);
// si es mac o windows
app.on('window-all-closed', () => {
  if(process.platform !== 'win32') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});