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
  render() {
    return (
      <main className="main">
        <Map className="map" />
        <div className="tables">
          <Table countriesList={this.props.countriesList} />
          <CountriesList />
        </div>
      </main>
    );
  }
}

export default Main;
