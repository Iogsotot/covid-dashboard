import React from 'react';
import GlobalStatistic from '../../GlobalStatistic/global-statistic';
import TestsStatistic from '../../Countries_list/countries_list';
// import Graph from '../../Graph/graph';
// import './statistic.scss';

const Statistic = () => (
  <section className="statistic">
    <GlobalStatistic />
    <TestsStatistic />
    {/* <Graph /> */}
  </section>
);

export default Statistic;
