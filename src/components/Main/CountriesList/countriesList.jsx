/* eslint-disable */
import React from 'react';
import StatusToggles from '../../StatusToggles'
import './countriesList.scss';

const RegionStatistic = ({ perCountryData, setStatusToggle, statusToggle, statusTogglePopulation, setStatusTogglePopulation }) => {
  const listItem = perCountryData
  .sort((a, b) => b.cases - a.cases)
  .map((it, i) => (
    <li className="countries__item" key={i.toString()}>
      <span className="item__value">{ it.cases }</span>
      <span className="item__name">{it.country}</span>
    </li>
  ));
  return (
    <div className="countries">
      <input className="country-search" type="text" placeholder="country..." />
      <h4 className="countries__title">all stats by country</h4>
      <ul className="countries__list">
        { listItem }
      </ul>
      <StatusToggles
        setStatusToggle={setStatusToggle}
        statusToggle={statusToggle}
        statusTogglePopulation={statusTogglePopulation}
        setStatusTogglePopulation={setStatusTogglePopulation}
      />
      {/* <div className="global-stats__toggles">
        <div className="total-today__toggle">
          All
            <input type="checkbox" />
          Today
        </div>
        <div className="all-per__toggle">
          Absolute 
            <input type="checkbox" />
          per 100K</div>
      </div> */}
    </div>
  );
};

export default RegionStatistic;
