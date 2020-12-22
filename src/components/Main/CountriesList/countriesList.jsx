/* eslint-disable */
import React, { useState } from 'react';
import StatusToggles from '../../StatusToggles'
import FullScreenToggle from '../../FullScreenToggle'
import './countriesList.scss';

const RegionStatistic = ({ totalData, perCountryData, setStatusToggle, statusToggle, statusTogglePopulation, setStatusTogglePopulation, setChosenCountry }) => {
  
  const casesPer100k = () => Math.round(totalData.casesPerOneMillion / 10)
  const displayCases = () => !statusToggle ? totalData.cases : totalData.todayCases
  const displayWorldRecover = () => !statusToggle ? totalData.recovered : totalData.todayRecovered
  const worldRecoverPer100k = () => !statusToggle ? Math.round(totalData.recoveredPerOneMillion / 10) : Math.round(100000 / totalData.population * totalData.todayRecovered * 10) / 10
  const displayWorldDeath = () => !statusToggle ? totalData.deaths : totalData.todayDeaths
  const worldDeathPer100k = () => !statusToggle ? Math.round(totalData.deathsPerOneMillion / 10) : Math.round(100000 / totalData.population * totalData.todayDeaths * 10) / 10

  const [isFullScreen, setIsFullScreen] = useState('')
  const [isItemActive, setItemActive] = useState(-1)
  const [isWorldItem, setWorldItem] = useState('active')
  const [searchValue, setSearchValue] = useState('')
  
  const onChangeToggle = (event) => {
    const target = event.target.value
    setSearchValue(target)
  }
  // perCountryData.sort((a, b) => b.cases - a.cases)
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
              <span className="item__addition"> Deaths: <span className="death">{!statusTogglePopulation ? displayWorldDeath() : worldDeathPer100k()}</span></span>
            </span>
            <span className="item__planet">🌏</span>
          </li>
        {perCountryData.sort((a, b) => {
          if (statusToggle) return b.todayCases - a.todayCases
          if (statusTogglePopulation) return b.casesPerOneMillion - a.casesPerOneMillion
          else return b.cases - a.cases
        }).filter((it) => {
          if (searchValue.length > 0) return it.country.toLowerCase().includes(searchValue.toLowerCase())
          else return it
        }).map((it, i) => {
          const countryRecoverPer100k = () => !statusToggle ? Math.round(it.recoveredPerOneMillion / 10) : Math.round(100000 / it.population * it.todayRecovered * 10) / 10
          const countryRecover = () => !statusToggle ? it.recovered : it.todayRecovered
          return (
          <li className={`${it.active} countries__item`} key={i.toString()} onClick={() => {
            setChosenCountry(it.country)
            setItemActive(i)
            setWorldItem('')
          }}>
            <span className="item__value">{ !statusTogglePopulation && !statusToggle ? it.cases : !statusTogglePopulation && statusToggle ? it.todayCases : !statusTogglePopulation && !statusToggle ? Math.round(it.casesPerOneMillion / 10) * 10 : Math.round(100000 / it.population * it.todayCases * 100) / 100 }</span>
            <span className="item__name">{ it.country }</span>
            <span className="item__addition-wrap">
              <span className="item__addition"> Recovers: <span className="recover">{ !statusTogglePopulation && !statusToggle ? it.recovered : !statusTogglePopulation && statusToggle ? it.todayRecovered : !statusTogglePopulation && !statusToggle ? Math.round(it.recoveredPerOneMillion / 10) * 10 : Math.round(100000 / it.population * it.recovered * 100) / 100 }</span></span>
              <span className="item__addition"> Death: <span className="death">{ !statusTogglePopulation && !statusToggle ? it.deaths : !statusTogglePopulation && statusToggle ? it.todayDeaths : !statusTogglePopulation && !statusToggle ? Math.round(it.deathsPerOneMillion / 10) * 10 : Math.round(100000 / it.population * it.deaths * 100) / 100 }</span></span>
            </span>
            <img src={it.countryInfo.flag} width="25" className="item__flag" />
          </li>
        )})}
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
