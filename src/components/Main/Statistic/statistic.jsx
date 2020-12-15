import React from 'react';
import GlobalStatistic from './components/GlobalStatistic/global-statistic';
import TestsStatistic from './components/TestsStatistic/tests-statistic';
import Graph from './components/Graph/graph';
import './statistic.scss';

const Statistic = () => (
  <section className="statistic">
    <GlobalStatistic />
    <TestsStatistic />
    <Graph />
  </section>
);

export default Statistic;
