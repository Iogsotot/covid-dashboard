import React from 'react';
import './cases.scss';

function Cases() {
  const countries = new Array(100).fill('Country');
  const listItem = countries.map((country, index) => (
    <li className="region-list__item" key={index.toString()}>
      <span className="cases-value">00 000 000</span>
      { country }
    </li>
  ));
  return (
    <section className="cases">
      <div className="global-cases">
        <h3 className="global-cases__title">Global Cases:</h3>
        <div className="global-cases__value">00 000 000</div>
      </div>
      <div className="region">
        <h4 className="region__title">Cases by Country / Region</h4>
        <ul className="region-list">
          { listItem }
        </ul>
      </div>
    </section>
  );
}

export default Cases;
