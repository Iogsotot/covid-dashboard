import React from 'react';
import './tests-statistic.scss';

function RegionStatistic() {
  const countries = new Array(10).fill('Country');
  const listItem = countries.map((country, index) => (
    <li className="tests-list__item" key={index.toString()}>
      <span className="tests-value">00 000 000</span>
      tests
      <span className="country-name">{ country }</span>
    </li>
  ));
  return (
    <div className="tests-statistic">
      <h4 className="tests-statistic__title">title</h4>
      <div className="tests-statistic__value">00 000 000</div>
      <ul className="tests-list">
        { listItem }
      </ul>
      <div className="toggles-wrapper">
        <button type="button">prev</button>
        <span>value</span>
        <button type="button">next</button>
      </div>
    </div>
  );
}

export default RegionStatistic;
