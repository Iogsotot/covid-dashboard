/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import './graph.scss';

am4core.useTheme(am4themes_animated);

class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timelineData: [],
    };
  }

  componentDidMount() {
    const { worldTimeline } = this.props;
    const { timelineData } = this.state;

    const chart = am4core.create('chartdiv', am4charts.XYChart);

    chart.fontSize = '0.8em';
    chart.paddingRight = 20;
    chart.paddingLeft = 0;
    chart.maskBullets = false;
    chart.zoomOutButton.disabled = true;
    chart.paddingBottom = 5;
    chart.paddingTop = 3;

    chart.data = timelineData;

    const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;

    const series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = 'date';
    series.dataFields.valueY = 'value';

    series.tooltipText = '{valueY.value}';
    chart.cursor = new am4charts.XYCursor();

    const scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    chart.scrollbarX = scrollbarX;

    chart.scrollbarX.startGrip.background.fill = am4core.color('#CBA5A4');
    chart.scrollbarX.endGrip.background.fill = am4core.color('#CBA5A4');
    chart.scrollbarX.thumb.background.fill = am4core.color('#CBA5A4');

    chart.scrollbarX.startGrip.icon.stroke = am4core.color('#8A5658');
    chart.scrollbarX.endGrip.icon.stroke = am4core.color('#8A5658');

    this.chart = chart;
  }

  componentDidUpdate(oldProps) {
    const { worldTimeline } = this.props;

    const createTimelineData = () => {
      const timelineData = [];

      for (const [key, value] of Object.entries(worldTimeline.cases)) {
        timelineData.push({ date: new Date(key), value });
      }

      return timelineData;
    };

    if (oldProps.worldTimeline !== worldTimeline) {
      this.chart.data = createTimelineData();
    }
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
      <div className="graph__chartdiv">
        <div
          id="chartdiv"
          style={{ width: '100%', height: '100%', minHeight: '125px' }}
        />
      </div>
    );
  }
}

export default Graph;
