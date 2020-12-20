/* eslint-disable */
// import React, { Component } from 'react';
import React from 'react';
import StatusToggles from '../../StatusToggles'
import './table.scss';

const Table = ({ totalData, setStatusToggle, statusToggle, statusTogglePopulation, setStatusTogglePopulation }) => {
  const displayCases = () => !statusToggle ? totalData.cases : totalData.todayCases 
  const displayDeath = () => !statusToggle ? totalData.deaths : totalData.todayDeaths
  const recovered = () => !statusToggle ? totalData.recovered : totalData.todayRecovered
  const casesPer100k = () => totalData.casesPerOneMillion / 10
  const deathPer100k = () => totalData.deathsPerOneMillion / 10
  const recoveredPer100k = () => totalData.recoveredPerOneMillion / 10
  return (
    <section className="global-stats">
      <div className="global-stats__data">
        <h3 className="global-stats__title">{!statusToggle ? 'Global Cases:' : 'Today Cases:'}</h3>
        <div className="global-cases">{!statusTogglePopulation ? displayCases() : casesPer100k() }</div>
        <div className="global-deaths">deaths: <span>{!statusTogglePopulation ? displayDeath() : deathPer100k()}</span></div>
        <div className="global-recovered">recovered: <span>{!statusTogglePopulation ? recovered() : recoveredPer100k()}</span></div>
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
          <p className="update-info__date">{`${new Date().getFullYear()} ${new Date().getMonth()} ${new Date().getDate()}`}</p>
        </div>
      </div>
    </section>
  );
};

// class Table extends Component {

//   render() {
//     // console.log('In table: ', this.props.countriesList);
//     return (
//       <section className="global-stats">
//         <div className="global-stats__data">
//           <h3 className="global-stats__title">Global Cases:</h3>
//           <div className="global-cases">00 000 000</div>
//           <div className="global-deaths">00 000 000</div>
//           <div className="global-recovered">00 000 000</div>
//           <div className="global-stats__toggles">
//             <div className="total-today__toggle">All O~~~| Today</div>
//             <div className="all-per__toggle">Absolute O~~~| per 100K</div>
//           </div>
//         </div>
//         <div className="update-info">
//           <h4 className="update-info__title">Last Update at: </h4>
//           <p className="update-info__date">Fri Dec 18 2020</p>
//         </div>
//       </section>
//     )
//   }
// }

export default Table;
