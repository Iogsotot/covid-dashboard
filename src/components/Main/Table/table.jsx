/* eslint-disable */
import React from 'react';
import StatusToggles from '../../StatusToggles'
import FullScreenToggle from '../../FullScreenToggle'
import './table.scss';

const Table = ({ totalData, perCountryData, setStatusToggle, statusToggle, statusTogglePopulation, setStatusTogglePopulation, chosenCountry }) => {
  const [isFullScreen, setIsFullScreen] = React.useState('')
  const title = () => {
    if (chosenCountry === 'Global') return !statusToggle ? 'World Global Cases:' : 'World Today Cases:'
    else return !statusToggle ? `${chosenCountry} Global Cases:` : `${chosenCountry} Today Cases:`
  }
  const chosenCountryData = chosenCountry !== 'Global' ? perCountryData.find((it) => it.country === chosenCountry) : null
  const displayCases = () => {
    if (chosenCountry === 'Global') return !statusToggle ? totalData.cases : totalData.todayCases
    else return !statusToggle ? chosenCountryData.cases : chosenCountryData.todayCases
  }
  const displayDeath = () => {
    if (chosenCountry === 'Global') return !statusToggle ? totalData.deaths : totalData.todayDeaths
    else return !statusToggle ? chosenCountryData.deaths : chosenCountryData.todayDeaths
  }
  const recovered = () => {
    if (chosenCountry === 'Global') return !statusToggle ? totalData.recovered : totalData.todayRecovered
    else return !statusToggle ? chosenCountryData.recovered : chosenCountryData.todayRecovered
  }
  const casesPer100k = () => {
    if (chosenCountry === 'Global') return !statusToggle ? Math.round(totalData.casesPerOneMillion / 10) : Math.round(100000 / totalData.population * totalData.todayCases * 10) / 10
    else return !statusToggle ? Math.round(chosenCountryData.casesPerOneMillion / 10) : Math.round(100000 / chosenCountryData.population * chosenCountryData.todayCases * 10) / 10
  }
  const deathPer100k = () => {
    if (chosenCountry === 'Global') return !statusToggle ? Math.round(totalData.deathsPerOneMillion / 10) : Math.round(100000 / totalData.population * totalData.todayDeaths * 10) / 10
    else return !statusToggle ? Math.round(chosenCountryData.deathsPerOneMillion / 10) : Math.round(100000 / chosenCountryData.population * chosenCountryData.todayDeaths * 100) / 100
  }
  const recoveredPer100k = () => {
    if (chosenCountry === 'Global') return !statusToggle ? Math.round(totalData.recoveredPerOneMillion / 10) : Math.round(100000 / totalData.population * totalData.todayRecovered * 10) / 10
    else return !statusToggle ? Math.round(chosenCountryData.recoveredPerOneMillion / 10) : Math.round(100000 / chosenCountryData.population * chosenCountryData.todayRecovered * 100) / 100
  }
  return (
    <section className={`${isFullScreen} global-stats`}>
      <FullScreenToggle
        setIsFullScreen={setIsFullScreen}
      />
      <div className="global-stats__data">
        <h3 className="global-stats__title">{title()}</h3>
        <div class="global-stats__wrapper">
          <div className="global-cases">{!statusTogglePopulation ? displayCases() : casesPer100k()}</div>
          <div className="global-deaths">deaths: <span>{!statusTogglePopulation ? displayDeath() : deathPer100k()}</span></div>
          <div className="global-recovered">recovered: <span>{!statusTogglePopulation ? recovered() : recoveredPer100k()}</span></div>
        </div>
        <div className="global-stats__toggles">
          <StatusToggles
            setStatusToggle={setStatusToggle}
            statusToggle={statusToggle}
            statusTogglePopulation={statusTogglePopulation}
            setStatusTogglePopulation={setStatusTogglePopulation}
          />
        </div>
        <div className="update-info">
          <h4 className="update-info__title">Last Update at: </h4>
          <p className="update-info__date">{`${new Date().getFullYear()} ${new Date().getMonth()} ${new Date().getDate()}, ${new Date().getHours()}:${new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes()}`}</p>
        </div>
      </div>
    </section>
  );
};

export default Table;