import React, { Component } from 'react';
import propTypes from 'prop-types';
import FullScreenToggle from '../FullScreenToggle';
import createGraph from './createGraph';
import './graph.scss';

const createTimelineData = (data) => {
  const timelineData = [];
  const { cases } = data;
  if (cases) {
    Object.entries(cases)
      .forEach(([key, value]) => timelineData.push({ date: new Date(key), value }));
  }
  return timelineData;
};

class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFullScreen: '',
    };
  }

  componentDidMount() {
    const { worldTimeline } = this.props;
    const timelineData = createTimelineData(worldTimeline);
    const { chart } = createGraph({ timelineData });

    this.chart = chart;
  }

  componentDidUpdate(oldProps) {
    const { worldTimeline } = this.props;

    if (oldProps.worldTimeline !== worldTimeline) {
      const timelineData = createTimelineData(worldTimeline);
      this.chart.data = timelineData;
    }
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  setIsFullScreen(value) {
    const newValue = value === '' ? 'full-screen' : '';

    this.setState({
      isFullScreen: newValue,
    });
  }

  render() {
    const { isFullScreen } = this.state;

    return (
      <div className={`${isFullScreen} graph__chartdiv`}>
        <div className="full-screen-toggle__wrapper">
          <FullScreenToggle
            setIsFullScreen={() => this.setIsFullScreen(isFullScreen)}
          />
        </div>
        <div
          id="chartdiv"
          style={{ width: '100%', height: '100%', minHeight: '100px' }}
        />
      </div>
    );
  }
}

Graph.propTypes = {
  worldTimeline: propTypes.objectOf(propTypes.object).isRequired,
};

export default Graph;
