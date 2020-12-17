/* eslint-disable */
import React, { Component } from 'react';
// import Stats from '../../Stats';
import './table.scss';

class Cases extends Component {

  render () {
    console.log('In cases: ', this.props.countriesList);
    return (
    <section className="cases">
      <div className="global-cases">
        <h3 className="global-cases__title">Global Cases:</h3>
        <div className="global-cases__value">00 000 000</div>
      </div>
      <div className="region">
        <h4 className="region__title">Cases by Country</h4>
        <ul className="region-list">
          
        </ul>
      </div>
    </section>
    )
  }
}

export default Cases;
