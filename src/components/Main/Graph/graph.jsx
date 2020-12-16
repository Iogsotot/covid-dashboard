import React from 'react';
import './graph.scss';

const Graph = () => (
  <div className="graph">
    <div className="graph-container">
      graph is here
    </div>
    <div className="toggles-wrapper">
      <button type="button">prev</button>
      <span>value</span>
      <button type="button">next</button>
    </div>
  </div>
);

export default Graph;
