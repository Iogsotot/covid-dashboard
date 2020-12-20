/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
/* eslint-disable no-console */
// import PropTypes from 'prop-types';
import Map from './Map';
import CountriesList from './CountriesList/countriesList';
import Table from './Table/table';
import './Main.scss';
// import { render } from '@testing-library/react';

// const Main = ({ perCountryData, totalData }) => (
//   <main className="main">
//     <h1 className="visually-hidden">Covid-19 Dasboard</h1>
//     <Map className="map" />
//     <div className="tables">
//       <Table totalData={totalData} />
//       <CountriesList perCountryData={perCountryData} />
//     </div>
//   </main>
// );

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
    const { perCountryData, totalData } = this.props;
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
          <Table totalData={totalData} />
          <CountriesList perCountryData={perCountryData} />
        </div>
      </main>
    );
  }
}

export default Main;
