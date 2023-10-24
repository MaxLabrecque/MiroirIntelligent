import React, { useContext, useState, useEffect } from "react";
import { ConfigContext } from "miroirPackage/Contexts/ConfigContext";
import SelectSearch from "react-select-search";
import '../configPanel/style.css'
import { timezonesList } from "miroirPackage/Timezones/TimezonesList";
import useModal from "miroirPackage/Hooks/UseModal";
import Brightness from "../../brightness";
import { sendConfigToMain } from "../../electron/electronRoute";
import { jsonMaker } from "../../utils/jsonMaker";

/**
 * This component display the confi panel modal when called.
 * @returns {JSX.Element}
 * @constructor
 */
function Modal() {

    const { updateTimeMode, updateTimezone, updateValueSliderEnd, updateValueSliderStart, updatebrightnessIdle } = useModal();
    const { showModal, setModalState } = useContext(ConfigContext);
    const { is12h } = useContext(ConfigContext);
    const { timezone } = useContext(ConfigContext);
    const { brightnessTimeStart } = useContext(ConfigContext);
    const { brightnessTimeEnd } = useContext(ConfigContext);
    const { brightnessIdle } = useContext(ConfigContext);

    useEffect(() => {
        Brightness.hourStart = brightnessTimeStart;
        Brightness.hourEnd = brightnessTimeEnd;

    }, [brightnessTimeStart, brightnessTimeEnd])

    const handleSliderStart = (value) => {
        Brightness.hourStart = value;
        updateValueSliderStart(value);
    }

    const handleSliderEnd = (value) => {
        Brightness.hourEnd = value;
        updateValueSliderEnd(value);
    }

    const handleBrightnessIdle = (value) => {
        if (value !== '') {
            updatebrightnessIdle(value)
            sendConfigToMain(jsonMaker("brightnessIdle", value));
        }
    }

    if (showModal) {
        /**
         * Return the modal component as JSX
         * @returns {JSX.Element}
         */
        return (
            <div className="absolute bg-transparent/50 flex h-full items-center justify-center top-0  w-full">
                <div className="bg-nord_black p-10 rounded-xl w-1/2">
                    <div className="flex justify-between items-center">
                        Affichage de l'heure: 12h/24h
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input checked={is12h} onChange={() => updateTimeMode()} type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                    <div className="flex justify-between items-center pt-5">
                        Fuseau horaire
                        <SelectSearch onChange={value => updateTimezone(value)} options={timezonesList} search="true" value={timezone} placeholder="Choisissez un fuseau horaire" />
                    </div>
                    <p className="pt-5">Heure mode nuit &#40; Kiosk seulement &#41;</p>
                    <div className="flex justify-between items-center pt-5">
                        Début:
                        <div className="flex justify-end items-center">
                            <input onChange={e => handleSliderStart(e.target.value)} value={brightnessTimeStart} id="nightModeStart" type="range" min="0.00" max="24.00" defaultValue={brightnessTimeStart} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                            <p className="ml-3 w-5">{brightnessTimeStart}</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center pt-5">
                        Fin:
                        <div className="flex justify-end items-center">
                            <input onChange={e => handleSliderEnd(e.target.value)} value={brightnessTimeEnd} id="nightModeEnd" type="range" min="0" max="24" defaultValue={brightnessTimeEnd} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                            <p className="ml-3 w-5">{brightnessTimeEnd}</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center pt-5">
                        Temps de mise en mode inactif
                        <div>
                            <input id={'brightnessIdle'} onChange={e => handleBrightnessIdle(e.target.value)}
                            value={brightnessIdle} placeholder="Timer mode inactif" type="number"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700
                            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
                        </div>
                    </div>
                    <div>
                        <button className="dark:bg-gray-700 mt-5 py-1 px-4 rounded-lg" onClick={() => setModalState(false)}>Close</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal
