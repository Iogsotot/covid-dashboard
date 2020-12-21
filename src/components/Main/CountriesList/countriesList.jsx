/* eslint-disable */
import React, { useState } from 'react';
import StatusToggles from '../../StatusToggles'
import FullScreenToggle from '../../FullScreenToggle'
import './countriesList.scss';

const RegionStatistic = ({ perCountryData, setStatusToggle, statusToggle, statusTogglePopulation, setStatusTogglePopulation, setChosenCountry }) => {
  const [isFullScreen, setIsFullScreen] = useState('')
  perCountryData.sort((a, b) => b.cases - a.cases)
  return (
    <div className={`${isFullScreen} countries`}>
      <FullScreenToggle
        setIsFullScreen={setIsFullScreen}
      />
      <h4 className="countries__title">All stats by country</h4>
      <input className="country-search" type="text" placeholder="country..." />
      <ul className="countries__list">
        {perCountryData.map((it, i) => (
          <li className="countries__item" onClick={() => setChosenCountry(it.country)} key={i.toString()}>
            <span className="item__value">{!statusToggle ? it.cases : it.todayCases }</span>
            <span className="item__name">{it.country}</span>
            <img src={it.countryInfo.flag} width="25" className="item__flag" />
          </li>
        ))}
      </ul>
      <StatusToggles
        setStatusToggle={setStatusToggle}
        statusToggle={statusToggle}
        statusTogglePopulation={statusTogglePopulation}
        setStatusTogglePopulation={setStatusTogglePopulation}
      />
    </div>
  );
};

export default RegionStatistic;
