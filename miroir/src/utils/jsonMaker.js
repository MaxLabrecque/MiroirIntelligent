/**
 * This function take the data of the config and the config name 
 * and build a JSON object.
 * @param {*} configName 
 * @param {*} configValue 
 * @returns a JSON object in the good format for the API
 */
export function jsonMaker(configName, configValue) {
    const jsonObj = {
        "configName": configName,
        "configValue": configValue
    }

    return jsonObj;
}