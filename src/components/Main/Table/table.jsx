/* eslint-disable */
import React, { Component } from 'react';
import './table.scss';

class Cases extends Component {

  render () {
    // console.log('In table: ', this.props.countriesList);
    return (
    <section className="global-stats">
      <div className="global-stats__data">
        <h3 className="global-stats__title">Global Cases:</h3>
        <div className="global-cases">00 000 000</div>
        <div className="global-deaths">00 000 000</div>
        <div className="global-recovered">00 000 000</div>
        <div className="total-today__toggle">total O~~~| last day</div>
        <div className="all-per__toggle">all O~~~| per 100'000</div>
      </div>
      <div className="update-info">
        <h4 className="update-info__title">Last Update at: </h4>
        <p className="update-info__date">Fri Dec 18 2020</p>
      </div>
    </section>
    )
  }
}

export default Cases;
