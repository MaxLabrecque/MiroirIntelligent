import React from 'react';

/**
 * This component displays the current time in the format HH:MM:SS
 * @returns {JSX.Element}
 * @constructor
 */
function Calendar(props) {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const date = props.current.getDate();
  const dayOfTheWeek = days[props.current.getDay()];
  const month = props.current.getMonth() + 1;
  const year = props.current.getFullYear();

  /**
   * Return the actual time as JSX
   * @returns {JSX.Element}
   */
  return (
      <div id={'dateBox'} className={'border-light_blue border-2'}>
        <div className={"p-4 flex flex-col items-center"}>
          <div className={"text-4xl"}>
            {dayOfTheWeek < 10 ? '0' : ''}
            {dayOfTheWeek}
          </div>
          <div className={"text-3xl"}>
            {date < 10 ? '0' : ''}
            {date}
          </div>
          <div className={"text-3xl"}>
            {month < 10 ? '0' : ''}
            {month}
          </div>
          <div className={"text-2xl"}>
            {year}
          </div>
        </div>

      </div>
  );
}

export default Calendar;
