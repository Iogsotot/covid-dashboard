/* eslint-disable */
import React from 'react';
import './index.scss';

const StatusToggle = (props) => {
  let [status, setStatus] = React.useState(false);
  const firstDescriptionStatus = () => !status ? 'chosen' : 'not'
  const secondDescriptionStatus = () => status ? 'chosen' : 'not'
  return (
    <div className={props.className, 'status-toggle'}
      onClick={() => setStatus(status = !status)}>
      <span className={firstDescriptionStatus()}>{props.statusFirst}</span>
      <label className="switch">
        <input type="checkbox" checked={status}
        onClick={() => setStatus(status = !status)} />
        <span className="slider round"></span>
      </label>
      <span className={secondDescriptionStatus()}>{props.statusSecond}</span>
    </div>
  )
};

export default StatusToggle;