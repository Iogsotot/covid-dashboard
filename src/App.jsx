/* eslint-disable no-console */
import React, { Component } from 'react';
import Stats from './components/Stats';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.scss';

class App extends Component {
  async componentDidMount() {
    const stats = new Stats();
    // const covidPerCountriesStats = await stats.getPerCountryStats(true);
    const covidTotalStats = await stats.getTotalStats(false);
    // console.log(covidPerCountriesStats);
    console.log(covidTotalStats);
    // Дата последнего обновления данных:
    console.log(`Last update: ${(new Date(covidTotalStats.updated)).toDateString()}`);
    // ~~~~~~~~ данные по всему миру на текущий день ~~~~~~~~~~~
    // в абсолютных величинах :
    console.log(`Total cases: ${covidTotalStats.cases}`);
    console.log(`Total deaths: ${covidTotalStats.deaths}`);
    console.log(`Total recovered: ${covidTotalStats.recovered}`);
    // в относительных (на 100 000):
    console.log(`Total cases Per One Hundred Thousand: 
    ${Math.round(covidTotalStats.casesPerOneMillion / 10)}`);
    console.log(`Total deaths Per One Hundred Thousand: 
    ${Math.round(covidTotalStats.deathsPerOneMillion / 10)}`);
    console.log(`Total recovered Per One Hundred Thousand: 
    ${Math.round(covidTotalStats.recoveredPerOneMillion / 10)}`);

    // ~~~~~~~~ данные по всему миру за последний день ~~~~~~~~~~~
    // в абсолютных величинах :
    console.log(`Total cases today: ${covidTotalStats.todayCases}`);
    console.log(`Total deaths today: ${covidTotalStats.todayDeaths}`);
    console.log(`Total recovered today: ${covidTotalStats.todayRecovered}`);
    // в относительных (на 100 000):
    console.log(`Total cases Per One Hundred Thousand today: 
    ${Math.round((covidTotalStats.todayCases / covidTotalStats.population) * 100000)}`);
    console.log(`Total deaths Per One Hundred Thousand today: 
    ${Math.round((covidTotalStats.todayDeaths / covidTotalStats.population) * 100000)}`);
    console.log(`Total recovered Per One Hundred Thousand today: 
    ${Math.round((covidTotalStats.todayRecovered / covidTotalStats.population) * 100000)}`);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

// function App() {
//   const stats = new Stats();
//   const covidPerCountriesStats = stats.getPerCountryStats(true);
//   const covidTotalStats = stats.getTotalStats(false);
//   console.log(covidPerCountriesStats);
//   console.log(covidTotalStats);
//   return (
//     <div className="App">
//       <Header />
//       <Main />
//       <Footer />
//     </div>
//   );
// }

export default App;
