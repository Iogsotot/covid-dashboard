import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
// eslint-disable-next-line camelcase
import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow';
import React, { Component } from 'react';
// import Stats from '../Stats';
import './Map.scss';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryData: [],
    };
  }

  componentDidMount() {
    this.createMap();
  }

  componentWillUnmount() {
    if (this.map) {
      this.map.dispose();
    }
  }

  createMap() {
    const { countryData } = this.state;

    const map = am4core.create('chartdiv', am4maps.MapChart);
    // eslint-disable-next-line camelcase
    map.geodata = am4geodata_worldLow;
    map.projection = new am4maps.projections.Miller();

    const polygonSeries = map.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.useGeodata = true;
    polygonSeries.mapPolygons.template.events.on('hit', (ev) => {
      map.zoomToMapObject(ev.target);
    });

    // Configure series
    const polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = '{name}';
    polygonTemplate.fill = am4core.color('#999');

    // Create hover state and set alternative fill color
    const hs = polygonTemplate.states.create('hover');
    hs.properties.fill = am4core.color('#367B25');

    polygonSeries.heatRules.push({
      property: 'fill',
      target: polygonSeries.mapPolygons.template,
      min: am4core.color('#ff0000'),
      max: am4core.color('#ffffff'),
      logarithmic: true,
    });

    // Remove Antarctica
    polygonSeries.exclude = ['AQ'];

    // TODO replace dummy data by real-world API
    polygonSeries.data = countryData;
    map.zoomControl = new am4maps.ZoomControl();
    map.zoomControl.slider.height = 100;

    // const label = map.chartContainer.createChild(am4core.Label);
    // label.text = 'worldLow';

    const heatLegend = map.createChild(am4maps.HeatLegend);
    heatLegend.id = 'heatLegend';
    heatLegend.series = polygonSeries;
    heatLegend.align = 'right';
    heatLegend.valign = 'bottom';
    heatLegend.width = am4core.percent(35);
    heatLegend.marginRight = am4core.percent(4);
    heatLegend.background.fill = am4core.color('#fff');
    heatLegend.background.fillOpacity = 0.05;
    heatLegend.padding(5, 5, 5, 5);

    // Set up custom heat map legend labels using axis ranges
    const minRange = heatLegend.valueAxis.axisRanges.create();
    minRange.label.horizontalCenter = 'left';

    const maxRange = heatLegend.valueAxis.axisRanges.create();
    maxRange.label.horizontalCenter = 'right';

    // Blank out internal heat legend value axis labels
    // eslint-disable-next-line no-unused-vars
    heatLegend.valueAxis.renderer.labels.template.adapter.add('text', (labelText) => '');

    // Update heat legend value labels
    polygonSeries.events.on('datavalidated', (ev) => {
      const heatLegendKey = ev.target.map.getKey('heatLegend');

      const min = heatLegendKey.series.dataItem.values.value.low;
      const minRangeIndex = heatLegendKey.valueAxis.axisRanges.getIndex(0);
      minRangeIndex.value = min;
      minRangeIndex.label.text = `${heatLegendKey.numberFormatter.format(min)}`;

      const max = heatLegendKey.series.dataItem.values.value.high;
      const maxRangeIndex = heatLegendKey.valueAxis.axisRanges.getIndex(1);
      maxRangeIndex.value = max;
      maxRangeIndex.label.text = `${heatLegendKey.numberFormatter.format(max)}`;
    });

    this.map = map;
  }

  render() {
    return (
      <section className="map">
        <div
          id="chartdiv"
          className="map__chartdiv"
          style={{
            width: '100%', height: '550px',
          }}
        />
      </section>
    );
  }
}

export default Map;
