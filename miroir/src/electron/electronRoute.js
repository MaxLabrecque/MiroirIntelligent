export function sendConfigToMain(config) {
  window.electronAPI.sendConfigToMain(config);
}