import {Stomp} from '@stomp/stompjs';
import SockJS from 'sockjs-client';

/**
 * WebSocket class
 */
class WebSocket {
  // Client object
  static #client = null;
  // URL to connect to
  static #url = 'http://localhost:8080/';
  // URL to subscribe to
  static #subUrl = '/config/public';
  // URL to send to
  static #sendUrl = '/app/send';
  static #fc = null;

  /**
   * Set URL
   * @param url - Url to connect to
   */
  static setUrl(url) {
    this.#url = url;
  }

  /**
   * Set subUrl
   * @param subUrl - Url to subscribe to
   */
  static setSubUrl(subUrl) {
    this.#subUrl = subUrl;
  }

  /**
   * Set sendUrl
   * @param sendUrl - Url to send to
   */
  static setSendUrl(sendUrl) {
    this.#sendUrl = sendUrl;
  }

  static setFc(fc) {
    this.#fc = fc;
  }

  /**
   * Init WebSocket connection
   */
  static initWsConnection(fc = null) {
    if (fc != null)
      this.#fc = fc;

    const sock = new SockJS(this.#url + 'ws');
    this.#client = Stomp.over(function() {return sock});
    this.#client.debug = function(str) {};
    this.#client.connect({}, (frame) => {
      this.subscribe()
    });
  }

  static subscribe() {
    if (this.#fc == null) {
      console.error('No function to call on message');
      return;
    }
    this.#client.subscribe(this.#subUrl, (message) => {
      if (message.body !== 'Invalid config values')
        this.#fc(message.body);
    });
  }

  /**
   * Send config
   * @param jsonData
   */
  static sendConfig(jsonData) {
    if (this.#client != null) {
      this.#client.send(this.#sendUrl, {}, jsonData);
    }
  }
}

export default WebSocket;
