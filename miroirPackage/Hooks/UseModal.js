import { useContext } from "react";
import { ConfigContext } from "../Contexts/ConfigContext";
import WebSocket from '../WebSocket/WebSocket';

/**
 * This hook is used to update the config state and send the new value to the API.
 * @returns {{updateValueSliderEnd: updateValueSliderEnd, updateTimeMode: updateTimeMode, updateValueSliderStart: updateValueSliderStart, updatebrightnessIdle: updatebrightnessIdle, updateTimezone: updateTimezone}} - Config from the modal
 */
export default function useModal() {
  const { is12h, setIs12h } = useContext(ConfigContext);
  const { setTimezone } = useContext(ConfigContext);
  const { setBrightnessTimeStart } = useContext(ConfigContext);
  const { setBrightnessTimeEnd } = useContext(ConfigContext);
  const { setBrightnessIdle } = useContext(ConfigContext);

  /**
   * This function update the time mode state between 12h/24
   * and send the new value to the API.
   */
  const updateTimeMode = () => {
    WebSocket.sendConfig(JSON.stringify({ "configName": "timeMode", "configValue": !is12h }));
    setIs12h(!is12h);
  }

  /**
   * This function update the timezone value
   * and send the new value to the API.
   * @param {string} value the new string value.
   */
  const updateTimezone = (value) => {
    WebSocket.sendConfig(JSON.stringify({ "configName": "timezone", "configValue": value }));
    setTimezone(value);
  }

  /**
   * This function update the value of the start night time slider
   * and send the new value to the API.
   * @param {Number} value the new start time value.
   */
  const updateValueSliderStart = (value) => {
    WebSocket.sendConfig(JSON.stringify({ "configName": "brightnessStart", "configValue": value }));
    setBrightnessTimeStart(value);
  }

  /**
   * This function update the value of the end night time slider
   * and send the new value to the API.
   * @param {Number} value the new end time value.
   */
  const updateValueSliderEnd = (value) => {
    WebSocket.sendConfig(JSON.stringify({ "configName": "brightnessEnd", "configValue": value }));
    setBrightnessTimeEnd(value);
  }

  /**
   * This function update the value of the brightness idle time
   * and send the new value to the API.
   * @param {Number} value the new idle time delay value.
   */
  const updatebrightnessIdle = (value) => {
    WebSocket.sendConfig(JSON.stringify({ "configName": "brightnessIdle", "configValue": value }));
    setBrightnessIdle(value);
  }

  return { updateTimeMode, updateTimezone, updateValueSliderStart, updateValueSliderEnd, updatebrightnessIdle }
}
