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

class Main extends React.PureComponent {
  // eslint-disable-next-line class-methods-use-this
  handleSwitchAbsolutePer100K(value) {
    // do magic here
    // maybe call some method that change state inside your component
    // please don't set state here
    console.log('handleSwitchAbsolutePer100K', value);
  }

  // eslint-disable-next-line class-methods-use-this
  handleSwitchAllToday(value) {
    // do magic here
    // maybe call some method that change state inside your component
    // please don't set state here
    console.log('handleSwitchAllToday', value);
  }

  render() {
    return (
      <main className="main">
        <Map
          className="map"
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
