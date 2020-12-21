/* eslint-disable */
import React, {useCallback} from 'react';
import './index.scss';

const StatusToggle = ({ setStatusToggle, statusToggle, className, statusFirst, statusSecond, statusTogglePopulation, setStatusTogglePopulation }) => {
  const onChangeToggle = () => {
    if (typeof statusToggle !== 'undefined') setStatusToggle(prev => !prev)
    if (typeof setStatusTogglePopulation !== 'undefined') setStatusTogglePopulation(prev => !prev)
  }
  const statusToggleFirst = () => !statusToggle ? 'active' : ''
  const statusToggleSecond = () => statusToggle ? 'active' : ''
  return (
    <div className={className, 'status-toggle'}>
      <button className={statusToggleFirst()} type="button" onClick={onChangeToggle}>
        {statusFirst}
      </button>
      <label className="switch">
        <input type="checkbox" 
        checked={statusToggle || statusTogglePopulation}
        onClick={onChangeToggle}
      />
      <span className="slider round" />
      </label>
      <button className={statusToggleSecond()} type="button" onClick={onChangeToggle}>
        {statusSecond}
      </button>
    </div>
  )
};

export default StatusToggle;
