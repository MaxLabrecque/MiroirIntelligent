class Brightness {
  static hourStart = 7;
  static hourEnd = 20;
}

let bMin = 35;
let bMax = 76;

/**
 * Function that handles the timer.
 */
export function idleTimer(isIdle) {
  if (isIdle) {
    idle(35);
  }
  else {
    idle(76);
  }
}

/**
 * Function that handles the brightness level based on the time of the day.
 */
export function kioskBrightness() {
  const date = new Date();
  const hour = date.getHours();

  idle((Brightness.hourStart < hour || hour >= Brightness.hourEnd) ? bMin : bMax);

  setTimeout(kioskBrightness, 1000);
}

/**
 * Function that handles the brightness level.
 *
 * @param {number} bLevel The brightness level.
 */
function idle(bLevel) {
  document.documentElement.style.setProperty('--brightness', bLevel + '%');
}

export default Brightness;
