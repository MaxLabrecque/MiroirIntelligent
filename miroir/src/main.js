const {app, BrowserWindow, Menu, Tray, session, ipcMain, ipcRenderer} = require(
  'electron');

const path = require('path');
const os = require('os');
const {powerMonitor} = require('electron');
const trayImagePath = require('../assets/miroir.png');
const iconImagePath = require('../assets/icon.png');
import { defaultLink } from './defaultLink';

let mainWindow = null;
let tray = null;
let idleTime = 30;

const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor: '#2E3440',
    icon: path.resolve(__dirname, iconImagePath),
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  mainWindow.removeMenu();

  if (os.version().includes('Ubuntu')) {
    mainWindow.kiosk = true;
  }

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
};

const createTray = () => {
  tray = new Tray(path.resolve(__dirname, trayImagePath));

  const trayMenu = new Menu.buildFromTemplate([{role: 'quit'}]);

  tray.setToolTip(app.getName());
  tray.on('click', () => {
    mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show();
  });
  tray.setContextMenu(trayMenu);
};

const createIdleTimer = () => {
  let isIdle = false;
  setInterval(() => {
    const time = powerMonitor.getSystemIdleTime();

    if (!isIdle && time >= idleTime) {
      isIdle = true;
      mainWindow.webContents.send('desktop-mode', isIdle);
    } else if (isIdle && time < idleTime) {
      isIdle = false;
      mainWindow.webContents.send('desktop-mode', isIdle);
    }
  }, 500);
};


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  createWindow();
  createTray();
  ipcMain.on('send-config-to-main', (event, config) => {
    receivedConfig(event, config);
  });
  session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
    callback({
      responseHeaders: {
        ...details.responseHeaders,
        'Content-Security-Policy': [`default-src 'self' ${defaultLink.api}; style-src 'self' 'unsafe-inline';`],
      },
    });
  });
  mainWindow.webContents.on('did-finish-load', async () => {
    if (mainWindow.kiosk) {
      mainWindow.webContents.send('kiosk-mode');
    } else {
      createIdleTimer();
    }
  });
});

const receivedConfig = (_, config) => {
  if (config.configName === 'brightnessIdle') {
    idleTime = parseInt(config.configValue);
  }

};

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
