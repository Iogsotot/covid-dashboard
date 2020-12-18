import React from 'react';
import './global-statistic.scss';

const GlobalStatistic = () => (
  <div className="global-statistic">
    <h4 className="global-statistic__title">title</h4>
    <div className="global-statistic__value">00 000 000</div>
    <div className="global-statistic__region">&quot;Region&quot;</div>
    <div className="toggles-wrapper">
      <button type="button">prev</button>
      <span>value</span>
      <button type="button">next</button>
    </div>
  </div>
);

export default GlobalStatistic;
