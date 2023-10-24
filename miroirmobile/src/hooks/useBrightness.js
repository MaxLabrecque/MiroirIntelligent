import { useState, useEffect, useContext } from "react";
import { startTimer, resetTimer } from "../brightness";
import Brightness from "../brightness";
import { ConfigContext } from "miroirPackage/Contexts/ConfigContext";

/**
 * Custom hook to manage the brightness of the screen.
 * @returns {Object} opacity and handleTouchStart
 */
export default function useBrightness() {
  const [opacity, setOpacity] = useState("0");
  const {brightnessIdle} = useContext(ConfigContext);

  useEffect(() => {
    startTimer(brightnessIdle);
    Brightness.change = change;
  }, []);

  /**
   * Reset the timer when the user touch the screen.
   */
  const handleTouchStart = () => {
    resetTimer(brightnessIdle);
  }

  /**
   * Change the opacity of the screen.
   * @param {Number} opacity
   */
  function change(opacity) {
    setOpacity(opacity);
  }

  return { opacity, handleTouchStart };
}
