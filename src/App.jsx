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
    const covidPerCountriesStats = await stats.getPerCountryStats(true);
    const covidTotalStats = await stats.getTotalStats(false);
    console.log(covidPerCountriesStats);
    console.log(covidTotalStats);
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
