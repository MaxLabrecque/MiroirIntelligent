import { useState, useEffect, useContext } from "react";
import { ConfigContext } from "../Contexts/ConfigContext";
import moment from 'moment-timezone';

/**
 * Custom hook to get the current date and time
 * @returns {{date: Date, startTimer: (function(): function(): void)}}
 */
export default function useDateTime() {
  const { timezone, is12h } = useContext(ConfigContext);
  const [date, setDate] = useState(updateDate());

  // Timer interval to update the date every second
  let interval;

  /**
   * Updates the date
   * @returns {Date} - The current date
   */
  function updateDate() {
    const formattedDate = moment().tz(timezone).format('YYYY-MM-DD HH:mm:ss');
    const date = moment(formattedDate, 'YYYY-MM-DD HH:mm:ss').toDate();
    return date;
  }

  useEffect(() => {
    startTimer();

    return () => {
      clearInterval(interval);
    };
  }, [timezone, is12h]);

  /**
   * Starts the timer
   * @returns {(function(): void)|*}
   */
  const startTimer = () => {
    if (interval) {
      clearInterval(interval);
    }

    interval = setInterval(() => {
      setDate(updateDate());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  };

  return { startTimer, date };
}
