/* eslint-disable */
import React, { useState } from 'react';
import StatusToggles from '../../StatusToggles'
import FullScreenToggle from '../../FullScreenToggle'
import './countriesList.scss';

const RegionStatistic = ({ perCountryData, setStatusToggle, statusToggle, statusTogglePopulation, setStatusTogglePopulation, setChosenCountry }) => {
  const [isFullScreen, setIsFullScreen] = useState('')
  const [isItemActive, setItemActive] = useState(-1)
  perCountryData.sort((a, b) => b.cases - a.cases)
  perCountryData.map((it, i, arr) => {
    it['active'] = ''
    if(isItemActive >= 0) return arr[isItemActive]['active'] = 'active'
  })
  return (
    <div className={`${isFullScreen} countries`}>
      <FullScreenToggle
        setIsFullScreen={setIsFullScreen}
      />
      <h4 className="countries__title">All stats by country</h4>
      <input className="country-search" type="text" placeholder="country..." />
      <ul className="countries__list">
        {perCountryData.map((it, i) => (
          <li className={`${it.active} countries__item`} onClick={() => {
            setChosenCountry(it.country)
            setItemActive(i)
          }}>
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
