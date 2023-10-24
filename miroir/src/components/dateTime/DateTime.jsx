import React, {useContext, useEffect, useState} from 'react';
import Hour from './Hour.jsx';
import Calendar from './Calendar.jsx';
import useDateTime from 'miroirPackage/Hooks/UseDateTime';

/**
 * Components that contains the date and the time components.
 * @returns {JSX.Element}
 * @constructor
 */
function DateTime() {
  const {date} = useDateTime();

  return (
    <div id={'dateTime'}
         className={'flex justify-center items-center mt-40 space-x-10'}>
      <Hour current={date}/>
      <Calendar current={date}/>
    </div>
  );
}

export default DateTime;


