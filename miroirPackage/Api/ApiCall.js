import axios from 'axios';

/**
 * Class ApiCall - Class for calling API
 */
class ApiCall {
  // Url to connect to
  static #url = 'http://localhost:8080/';

  /**
   * Set URL
   * @param url - Url to connect to
   */
  static setUrl(url) {
    this.#url = url;
    this.#axiosInst = axios.create({
      baseURL: this.#url,
    })
  }

  /**
   * Get URL
   * @returns {string} - The Url
   */
  static getUrl() {
    return this.#url;
  }

  /**
   * Axios instance
   * @type {AxiosInstance} Axios instance
   */
  static #axiosInst = axios.create({
    baseURL: this.#url,
  });

  /**
   * Get all config from API
   * @returns {Promise<{}>} - Array of received config
   */
  static async getAllConfig() {
    let configList = {};
    await this.#axiosInst.get('/config').then((res) => {

      res.data.forEach(element => {
        configList[element.configName] = element.configValue;
      });
    }).catch((err) => {
      console.log(err);
    });
    return configList;
  }
}

export default ApiCall;
