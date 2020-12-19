/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import Table from './Table/table';
import Map from './Map';
import CountriesList from './CountriesList/countriesList';
import './Main.scss';
// import { render } from '@testing-library/react';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPer100K: false, // isPer100K
      isToday: false, // isToday
    };
  }

  handleSwitchAbsolutePer100K(value) {
    console.log('handleSwitchAbsolutePer100K', value);
    this.setState({
      isPer100K: value,
    });
  }

  handleSwitchAllToday(value) {
    console.log('handleSwitchAllToday', value);
    this.setState({
      isToday: value,
    });
  }

  render() {
    return (
      <main className="main">
        <Map
          className="map"
          isPer100K={this.state.isPer100K}
          isToday={this.state.isToday}
          handleSwitchAbsolutePer100K={(value) => this.handleSwitchAbsolutePer100K(value)}
          handleSwitchAllToday={(value) => this.handleSwitchAllToday(value)}
        />
        <div className="tables">
          <Table
            countriesList={this.props.countriesList}
            globalTotalCases={this.props.globalTotalCases}
            globalTotalDeaths={this.props.globalTotalDeaths}
            globalTotalRecovered={this.props.globalTotalRecovered}
            globalTotalPer100Cases={this.props.globalTotalPer100Cases}
            globalTotalPer100Deaths={this.props.globalTotalPer100Deaths}
            globalTotalPer100Recovered={this.props.globalTotalPer100Recovered}
            globalTodayCases={this.props.globalTodayCases}
            globalTodayDeaths={this.props.globalTodayDeaths}
            globalTodayRecovered={this.props.globalTodayRecovered}
            globalTodayPer100Cases={this.props.globalTodayPer100Cases}
            globalTodayPer100Deaths={this.props.globalTodayPer100Deaths}
            globalTodayPer100Recovered={this.props.globalTodayPer100Recovered}
          />
          <CountriesList />
        </div>
      </main>
    );
  }
}

export default Main;
