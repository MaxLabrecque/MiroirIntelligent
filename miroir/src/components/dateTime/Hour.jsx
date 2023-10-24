import React, {useContext} from 'react'
import {ConfigContext} from 'miroirPackage/Contexts/ConfigContext';

/**
 * This component displays the current time in the format HH:MM:SS
 * @returns {JSX.Element}
 * @constructor
 */
function Hour(props) {
  const {is12h} = useContext(ConfigContext)
  const hours = is12h ? props.current.getHours() % 12 || 12 : props.current.getHours()
  const minutes=  props.current.getMinutes()
  const seconds=  props.current.getSeconds()
  /**
   * Return the actual time as JSX
   * @returns {JSX.Element}
   */
  return (
      <div className={"text-6xl font-archivo"}>
        <div>
          {hours < 10 ? '0' : ''}
          {hours}
        </div>
        <div>
          {minutes < 10 ? '0': ''}
          {minutes}
        </div>
        <div>
          {seconds < 10 ? '0': ''}
          {seconds}
        </div>
        <div className={'text-4xl flex justify-center'}>
          {is12h ? props.current.getHours() < 12 ? 'AM' : 'PM' : ''}
        </div>
      </div>
  )
}

export default Hour
