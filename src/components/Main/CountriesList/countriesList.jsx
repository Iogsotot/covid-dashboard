/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './countriesList.scss';

function RegionStatistic() {
  const countries = new Array(195).fill('Country');
  const listItem = countries.map((country, index) => (
    <li className="countries__item" key={index.toString()}>
      <span className="item__value">00 000 000</span>
      tests
      <span className="item__name">{ country }</span>
    </li>
  ));
  return (
    <div className="countries">
      <input className="country-search" type="text" placeholder="country..." />
      <h4 className="countries__title">all stats by country</h4>
      <ul className="countries__list">
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
