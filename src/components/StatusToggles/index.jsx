/* eslint-disable */
import React from 'react';
import StatusToggle from './StatusToggle';
import './index.scss';

const StatusToggles = () => (
  <div className="global-stats__toggles">
    <StatusToggle 
    className={'total-today__toggle'}
    statusFirst={'All'} 
    statusSecond={'Today'} />
    <StatusToggle 
    className={'all-per__toggle'}
    statusFirst={'Absolute'} 
    statusSecond={'per 100K'} />
  </div>
);

export default StatusToggles;
