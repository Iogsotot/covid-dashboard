/* eslint-disable */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
/* eslint-disable no-console */
// import PropTypes from 'prop-types';
import Map from './Map';
import CountriesList from './CountriesList/countriesList';
import Table from './Table/table';
import './Main.scss';
// import { render } from '@testing-library/react';

const Main = ({ perCountryData, totalData }) => {
  const [statusToggle, setStatusToggle] = useState(false);
  const [statusTogglePopulation, setStatusTogglePopulation] = useState(false);
  return (
    <main className="main">
      <h1 className="visually-hidden">Covid-19 Dasboard</h1>
      <Map className="map" />
      <div className="tables">
        <Table totalData={totalData}
          setStatusToggle={setStatusToggle}
          statusToggle={statusToggle}
          statusTogglePopulation={statusTogglePopulation}
          setStatusTogglePopulation={setStatusTogglePopulation}
        />
        <CountriesList
          perCountryData={perCountryData}
          setStatusToggle={setStatusToggle}
          statusToggle={statusToggle}
          statusTogglePopulation={statusTogglePopulation}
          setStatusTogglePopulation={setStatusTogglePopulation}
        />
      </div>
    </main>
  );
};
// class Main extends React.PureComponent {
//   render() {
//     return (
//       <main className="main">
//         <Map className="map" />
//         <div className="tables">
//           <Table
//             countriesList={this.props.countriesList}
//             globalTotalCases={this.props.globalTotalCases}
//             globalTotalDeaths={this.props.globalTotalDeaths}
//             globalTotalRecovered={this.props.globalTotalRecovered}
//             globalTotalPer100Cases={this.props.globalTotalPer100Cases}
//             globalTotalPer100Deaths={this.props.globalTotalPer100Deaths}
//             globalTotalPer100Recovered={this.props.globalTotalPer100Recovered}
//             globalTodayCases={this.props.globalTodayCases}
//             globalTodayDeaths={this.props.globalTodayDeaths}
//             globalTodayRecovered={this.props.globalTodayRecovered}
//             globalTodayPer100Cases={this.props.globalTodayPer100Cases}
//             globalTodayPer100Deaths={this.props.globalTodayPer100Deaths}
//             globalTodayPer100Recovered={this.props.globalTodayPer100Recovered}
//           />
//           <CountriesList />
//         </div>
//       </main>
//     );
//   }
// }

export default Main;
