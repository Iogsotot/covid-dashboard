import React from 'react';
import Cases from './Cases/cases';
import Map from './Map/map';
import Statistic from './Statistic/statistic';
import './index.scss';

const Main = () => (
  <main className="main">
    <Cases />
    <Map />
    <Statistic />
  </main>
);

export default Main;
