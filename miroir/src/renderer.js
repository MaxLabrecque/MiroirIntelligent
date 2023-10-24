import './index.css';
import './app.jsx';
import { idleTimer, kioskBrightness } from './brightness';
import { updateKioskState } from './utils/kioskState';

/**
 * Electron API functions
 */

electronAPI.desktopMode((_, isIdle) => {
    idleTimer(isIdle);
})

electronAPI.kioskMode(() => {
    updateKioskState();
    kioskBrightness();
})
