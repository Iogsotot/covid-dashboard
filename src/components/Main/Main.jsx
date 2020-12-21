/* eslint-disable */
import React, { useState } from 'react';
import Map from './Map';
import CountriesList from './CountriesList/countriesList';
import Table from './Table/table';
import './Main.scss';

const Main = ({ perCountryData, totalData }) => {
  const [statusToggle, setStatusToggle] = useState(false);
  const [statusTogglePopulation, setStatusTogglePopulation] = useState(false);

  const [chosenCountry, setChosenCountry] = useState('Global')
  console.log(chosenCountry)
  return (
    <main className="main">
      <h1 className="visually-hidden">Covid-19 Dasboard</h1>
      <Map
        className="map"
        // isPer100K={this.state.isPer100K}
        // isToday={this.state.isToday}
        isPer100K={statusTogglePopulation}
        isToday={statusToggle}
        handleSwitchAbsolutePer100K={setStatusTogglePopulation}
        handleSwitchAllToday={setStatusToggle}
      // handleSwitchAbsolutePer100K={(value) => this.handleSwitchAbsolutePer100K(value)}
      // handleSwitchAllToday={(value) => this.handleSwitchAllToday(value)}

      />
      <div className="tables">
        <Table 
          totalData={totalData}
          perCountryData={perCountryData}
          setStatusToggle={setStatusToggle}
          statusToggle={statusToggle}
          statusTogglePopulation={statusTogglePopulation}
          setStatusTogglePopulation={setStatusTogglePopulation}
          chosenCountry={chosenCountry}
        />
        <CountriesList
          perCountryData={perCountryData}
          setStatusToggle={setStatusToggle}
          statusToggle={statusToggle}
          statusTogglePopulation={statusTogglePopulation}
          setStatusTogglePopulation={setStatusTogglePopulation}
          setChosenCountry={setChosenCountry}
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
