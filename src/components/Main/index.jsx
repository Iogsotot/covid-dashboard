import React from 'react';
import Cases from './components/Cases/cases';
import Map from './components/Map/map';
import Statistic from './components/Statistic/statistic';
import './index.scss';

const Main = () => (
  <main className="main">
    <Cases />
    <Map />
    <Statistic />
  </main>
);

export default Main;
