/* eslint-disable */
import React from 'react';
import StatusToggle from './StatusToggle';
import './index.scss';

const StatusToggles = ({ setStatusToggle, statusToggle, statusTogglePopulation, setStatusTogglePopulation }) => (
  <div className="global-stats__toggles">
    <StatusToggle
    className={'total-today__toggle'}
    statusFirst={'All'} 
    statusSecond={'Today'}
    setStatusToggle={setStatusToggle}
    statusToggle={statusToggle}
    />
    <StatusToggle 
    className={'all-per__toggle'}
    statusFirst={'Absolute'} 
    statusSecond={'Per 100K'}
    statusTogglePopulation={statusTogglePopulation}
    setStatusTogglePopulation={setStatusTogglePopulation}
    />
  </div>
);

export default StatusToggles;
