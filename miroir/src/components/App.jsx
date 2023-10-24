import React, { useContext, useEffect, useState } from 'react';
import DateTime from './dateTime/DateTime.jsx';
import BtnConfigPanel from './configPanel/BtnConfigPanel.jsx';
import Modal from './configPanel/Modal.jsx';
import { ConfigContext } from 'miroirPackage/Contexts/ConfigContext';
import { sendConfigToMain } from '../electron/electronRoute.js';
import { jsonMaker } from '../utils/jsonMaker.js';
import { kioskState } from '../utils/kioskState.js';
import ApiCall from 'miroirPackage/Api/ApiCall';
import {defaultLink} from '../defaultLink';
import WebSocket from 'miroirPackage/WebSocket/WebSocket';


function App() {
  const {brightnessIdle, InitConnection} = useContext(ConfigContext);
  const [isKiosk, setIsKiosk] = useState(false);

  useEffect(() => {
    ApiCall.setUrl(defaultLink.api)
    WebSocket.setUrl(defaultLink.api)
    InitConnection()
  }, []);

  useEffect(() => {
    sendConfigToMain(jsonMaker("brightnessIdle", brightnessIdle));
  }, [brightnessIdle]);

  useEffect(() => {
    setTimeout(checkKioskState, 500);
  }, []);

  function checkKioskState() {
    if (kioskState) {
      setIsKiosk(true);
    }
  }

  return (
    <div>
      <DateTime />
      {!isKiosk ? (
        <BtnConfigPanel />
      ) : (
        null
      )}
      <Modal />
    </div>
  );
}

export default App;
