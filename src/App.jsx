/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Stats from './components/Stats';
import Header from './components/Header/header';
import Main from './components/Main/Main';
import Footer from './components/Footer/footer';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countriesList: [],
    };
  }

  async componentDidMount() {
    // сюда передаём страну для таймлайна
    // const country = 'China';

    const stats = new Stats();
    // const statsByCountry = new Stats(country);

    const covidTotalStats = await stats.getTotalStats();

    // сюда передаём название выбранной пользователем страны
    const inputValue = 'Afghanistan';
    const covidPerCountriesStats = await stats.getPerCountryStats(inputValue);

    // общая статистика по миру за всё время
    // const covidWorldTimeline = await stats.getWorldTimeline();
    // статистика по конкретной стране за всё время
    // const covidCountryTimeline = await statsByCountry.getCountryTimeline();
    // статистика по всем странам за всё время, аргументом передается конкретная страна
    // const covidTotalTimeline = await stats.getTotalTimeline(inputValue);

    this.setState({
      countriesList: covidPerCountriesStats.countries,
      globalTotalCases: covidTotalStats.cases,
      globalTotalDeaths: covidTotalStats.deaths,
      globalTotalRecovered: covidTotalStats.recovered,
      globalTotalPer100Cases: covidTotalStats.casesPerOneHundredThousand,
      globalTotalPer100Deaths: covidTotalStats.deathsPerOneHundredThousand,
      globalTotalPer100Recovered: covidTotalStats.recoveredPerOneHundredThousand,
      globalTodayCases: covidTotalStats.todayCases,
      globalTodayDeaths: covidTotalStats.todayDeaths,
      globalTodayRecovered: covidTotalStats.todayRecovered,
      globalTodayPer100Cases: covidTotalStats.todayCasesPerOneHundredThousand,
      globalTodayPer100Deaths: covidTotalStats.todayDeathsPerOneHundredThousand,
      globalTodayPer100Recovered: covidTotalStats.todayRecoveredPerOneHundredThousand,
    });
  }

  render() {
    // console.log(this.props);
    // console.log(this.state.countriesList)
    return (
      <div className="App">
        <Header className="header" />
        <Main
          className="main"
          countriesList={this.state.countriesList}
          globalTotalCases={this.state.globalTotalCases}
          globalTotalDeaths={this.state.globalTotalDeaths}
          globalTotalRecovered={this.state.globalTotalRecovered}
          globalTotalPer100Cases={this.state.globalTotalPer100Cases}
          globalTotalPer100Deaths={this.state.globalTotalPer100Deaths}
          globalTotalPer100Recovered={this.state.globalTotalPer100Recovered}
          globalTodayCases={this.state.globalTodayCases}
          globalTodayDeaths={this.state.globalTodayDeaths}
          globalTodayRecovered={this.state.globalTodayRecovered}
          globalTodayPer100Cases={this.state.globalTodayPer100Cases}
          globalTodayPer100Deaths={this.state.globalTodayPer100Deaths}
          globalTodayPer100Recovered={this.state.globalTodayPer100Recovered}
        />
        <Footer className="footer" />
      </div>
    );
  }
}

export default App;
