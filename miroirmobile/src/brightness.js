/**
 * Class Brightness
 */
class Brightness {
  static opacity;
  static change;
}

// Interval to change the opacity
let interval;

/**
 * Function that starts the timer.
 * @param {*} seconds
 */
export function startTimer(seconds) {
  if (interval)
    clearInterval(interval);

  interval = setInterval(() => {
    Brightness.change("0.5");
  }, seconds * 1000)
}

/**
 * Function that reset the timer.
 * @param {*} seconds
 */
export function resetTimer(seconds) {
  Brightness.change("0");
  startTimer(seconds);
}

export default Brightness;
