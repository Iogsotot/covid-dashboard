/* eslint-disable */
import React, { Component } from 'react';
// import Stats from '../../Stats';
import './cases.scss';

class Cases extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     countriesList: props.countriesList,
  //   };
  //   console.log(this.state.countriesList);
  // }

  // countries = new Array(100).fill('Country');
  // listItem = countries.map((country, index) => (
  //   <li className="region-list__item" key={index.toString()}>
  //     <span className="cases-value">00 000 000</span>
  //     { country }
  //   </li>
  // ));
  render () {
    // console.log('In cases: ', this.state.countriesList);
    return (
    <section className="cases">
      <div className="global-cases">
        <h3 className="global-cases__title">Global Cases:</h3>
        <div className="global-cases__value">00 000 000</div>
      </div>
      <div className="region">
        <h4 className="region__title">Cases by Country / Region</h4>
        <ul className="region-list">
          
        </ul>
      </div>
    </section>
    )
  }
}

export default Cases;
