/* eslint-disable */
import React, { useState } from 'react';
import StatusToggles from '../../StatusToggles'
import FullScreenToggle from '../../FullScreenToggle'
import './countriesList.scss';

const RegionStatistic = ({ totalData, perCountryData, setStatusToggle, statusToggle, statusTogglePopulation, setStatusTogglePopulation, setChosenCountry }) => {
  const casesPer100k = () => Math.round(totalData.casesPerOneMillion / 10)
  const displayCases = () => !statusToggle ? totalData.cases : totalData.todayCases
  const displayWorldRecover = () => !statusToggle ? totalData.recovered : totalData.todayRecovered
  const worldRecoverPer100k = () => Math.round(totalData.recoveredPerOneMillion / 10)
  const displayWorldDeath = () => !statusToggle ? totalData.deaths : totalData.todayDeaths
  const WorldDeathPer100k = () => Math.round(totalData.deathsPerOneMillion / 10)
  
  const [isFullScreen, setIsFullScreen] = useState('')
  const [isItemActive, setItemActive] = useState(-1)
  const [isWorldItem, setWorldItem] = useState('active')
  const [searchValue, setSearchValue] = useState('')
  
  const onChangeToggle = (event) => {
    const target = event.target.value
    setSearchValue(target)
    console.log(target)
  }

  perCountryData.sort((a, b) => b.cases - a.cases)
  perCountryData.map((it, i, arr) => {
    it['active'] = ''
    if (isItemActive >= 0) return arr[isItemActive]['active'] = 'active'
  })

  return (
    <div className={`${isFullScreen} countries`}>
      <FullScreenToggle
        setIsFullScreen={setIsFullScreen}
      />
      <h4 className="countries__title">All stats by country</h4>
      <input className="country-search" value={searchValue} onChange={onChangeToggle} type="text" placeholder="country..." />
      <ul className="countries__list">
          <li className={`${isWorldItem} countries__item`} onClick={() => {
            setChosenCountry('Global')
            setItemActive(-1)
            setWorldItem('active')
          }}>
            <span className="item__value">{ !statusTogglePopulation ? displayCases() : casesPer100k() }</span>
            <span className="item__name">World Cases</span>
            <span className="item__addition-wrap">
              <span className="item__addition"> Recovers: <span className="recover">{!statusTogglePopulation ? displayWorldRecover() : worldRecoverPer100k()}</span></span>
              <span className="item__addition"> Death: <span className="death">{!statusTogglePopulation ? displayWorldDeath() : WorldDeathPer100k()}</span></span>
            </span>
            <span className="item__planet">🌏</span>
          </li>
        {perCountryData.filter((it) => {
          if (searchValue.length > 0) return it.country.toLowerCase().includes(searchValue.toLowerCase())
          else return it
        }).map((it, i) => (
          <li className={`${it.active} countries__item`} onClick={() => {
            setChosenCountry(it.country)
            setItemActive(i)
            setWorldItem('')
          }}>
            <span className="item__value">{ !statusToggle ? it.cases : it.todayCases }</span>
            <span className="item__name">{ it.country }</span>
            <span className="item__addition-wrap">
              <span className="item__addition"> Recovers: <span className="recover">{ !statusToggle ? it.recovered : it.todayRecovered }</span></span>
              <span className="item__addition"> Death: <span className="death">{ !statusToggle ? it.deaths : it.todayDeaths }</span></span>
            </span>
            <img src={it.countryInfo.flag} width="25" className="item__flag" />
          </li>
        ))}
      </ul>
      <div className="toggles-wrapper">
        <StatusToggles
          setStatusToggle={setStatusToggle}
          statusToggle={statusToggle}
          statusTogglePopulation={statusTogglePopulation}
          setStatusTogglePopulation={setStatusTogglePopulation}
        />
      </div>
    </div>
  );
};

export default RegionStatistic;
