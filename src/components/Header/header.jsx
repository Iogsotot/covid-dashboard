import React from 'react';
import './header.scss';

const Header = () => (
  <header className="header">
    <div className="section-inner">
      <h1 className="header__title">COVID-19 Dashboard</h1>
      <button type="button" className="header__button">
        <span className="visually-hidden">menu</span>
      </button>
    </div>
  </header>
);

export default Header;
