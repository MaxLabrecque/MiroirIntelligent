import React, {useState, createContext, useEffect, useCallback} from 'react';
import WebSocket from '../WebSocket/WebSocket';
import ApiCall from '../Api/ApiCall';

/**
 * Context for the config
 * @type {React.Context}
 */
export const ConfigContext = createContext()

/**
 * Default config
 * @type {{is12h: boolean, brightnessIdle: string, timezone: string, brightnessStart: string, timeMode: string, brightnessEnd: string}}
 */
const defaultConfig = {
  "timezone": "US/Eastern",
  "timeMode": "true",
  "is12h": true,
  "brightnessStart": "7",
  "brightnessEnd": "19",
  "brightnessIdle": "3",
}

/**
 * Provider for the config
 * @param props - Set children
 * @returns {JSX.Element} - Passing provider access to childrens
 * @constructor - Provider for the config
 */
const ConfigProvider = (props) => {
  // States
  const [showModal, setModalState] = useState(false);
  const [timezone, setTimezone] = useState(defaultConfig.timezone);
  const [is12h, setIs12h] = useState(defaultConfig.is12h);
  const [brightnessTimeStart, setBrightnessTimeStart] = useState(defaultConfig.brightnessStart);
  const [brightnessTimeEnd, setBrightnessTimeEnd] = useState(defaultConfig.brightnessEnd);
  const [brightnessIdle, setBrightnessIdle] = useState(defaultConfig.brightnessIdle);
  // End States

  /**
   * Data to pass to the children
   * @type {{brightnessTimeStart: string, is12h: boolean, brightnessIdle: string, setIs12h: (value: (((prevState: boolean) => boolean) | boolean)) => void, setBrightnessIdle: (value: (((prevState: string) => string) | string)) => void, timezone: string, brightnessTimeEnd: string, setTimezone: (value: (((prevState: string) => string) | string)) => void, setBrightnessTimeStart: (value: (((prevState: string) => string) | string)) => void, showModal: boolean, setModalState: (value: (((prevState: boolean) => boolean) | boolean)) => void, setBrightnessTimeEnd: (value: (((prevState: string) => string) | string)) => void}}
   */
  const data = {
    timezone, setTimezone,
    is12h, setIs12h,
    brightnessTimeStart, setBrightnessTimeStart,
    brightnessTimeEnd, setBrightnessTimeEnd,
    brightnessIdle, setBrightnessIdle,
    showModal, setModalState,
    InitConnection
  };

  function InitConnection() {
    WebSocket.setFc(setConfigHooks);
    loadConfig();
  }

  /**
   * Load config from the API
   * @type {(function(): void)|*}
   */
  const loadConfig = useCallback(() => {
    ApiCall.getAllConfig().then((res) => {
      Object.keys(res).forEach((key) => {
        setConfigHooks(JSON.stringify({"configName" : key, "configValue" : res[key]}));
      });
    });
    }, []);

  /**
   * Set the config hooks
   * @param config - Config to set
   */
  const setConfigHooks = (config) => {
    config = JSON.parse(config);
    switch (config.configName) {
      case ('timeMode'):
        setIs12h(config.configValue === 'true');
        break;
      case ('timezone'):
        setTimezone(config.configValue);
        break;
      case ('brightnessStart'):
        setBrightnessTimeStart(config.configValue);
        break;
      case ('brightnessEnd'):
        setBrightnessTimeEnd(config.configValue);
        break;
      case ('brightnessIdle'):
        setBrightnessIdle(config.configValue);
        break;
      default:
        console.error('Invalid config name');
    }
  }

  return (
      <ConfigContext.Provider value={data}>
        {props.children}
      </ConfigContext.Provider>
  )
}

export default ConfigProvider;
