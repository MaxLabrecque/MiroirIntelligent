import {contextBridge, ipcMain, ipcRenderer} from 'electron';

/**
 * Expose protected methods that allow the renderer process to use
 */
contextBridge.exposeInMainWorld('electronAPI', {
  desktopMode: (callback) => ipcRenderer.on('desktop-mode', callback),
  kioskMode: (callback) => ipcRenderer.on('kiosk-mode', callback),

  sendConfigToMain: (config) => {
    ipcRenderer.send('send-config-to-main', config)
  },
});
