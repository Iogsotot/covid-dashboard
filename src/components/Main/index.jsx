/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Cases from './Cases/cases';
import Map from '../Map';
import Statistic from './Statistic/statistic';
import './index.scss';
// import { render } from '@testing-library/react';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countriesList: props.countriesList,
    };
    console.log('Main: ', this.state.countriesList);
    console.log('Main state: ', this.state);
  }

  render() {
    return (
      <main className="main">
        <Cases countriesList={this.state.countriesList} />
        <Map />
        <Statistic />
      </main>
    );
  }
}

// Main.propTypes = {
//   countriesList: PropTypes.arrayOf(PropTypes.string),
// };

export default Main;
