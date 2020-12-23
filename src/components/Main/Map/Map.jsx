/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import React, { Component } from 'react';
import FullScreenToggle from '../../FullScreenToggle';
import './Map.scss';

const COLOR_PRIMARY = '#ff0000';
const COLOR_SECONDARY = '#ffffff';
const COLOR_HOVER = 'rgba(125,125,125,0.9)';

const COLOR_CASES = am4core.color('#ff8726');
const COLOR_RECOVERED = am4core.color('#45d21a');
const COLOR_DEATHS = am4core.color('#1c5fe5');
// for an easier access by key
const colors = {
  active: COLOR_CASES,
  recovered: COLOR_RECOVERED,
  deaths: COLOR_DEATHS,
};

am4core.useTheme(am4themes_animated);

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFullScreen: '',
    };
  }

  componentDidMount() {
    this.createMap();
  }

  componentDidUpdate(oldProps) {
    const { countryData, isPer100K, isToday } = this.props;

    const selectDataField = () => {
      if (isPer100K && !isToday) {
        this.polygonSeries.dataFields.value = 'casesPer100K';
      } else if (isPer100K && isToday) {
        this.polygonSeries.dataFields.value = 'todayCasesPer100K';
      } else if (!isPer100K && isToday) {
        this.polygonSeries.dataFields.value = 'todayCases';
      } else {
        this.polygonSeries.dataFields.value = 'cases';
      }
    };

    if (oldProps.isPer100K !== isPer100K) {
      this.absolutePerCapitaSwitch.isActive = isPer100K;
      selectDataField();
    }
    if (oldProps.isToday !== isToday) {
      this.allTodaySwitch.isActive = isToday;
      selectDataField();
    }
    if (oldProps.countryData !== countryData) {
      this.polygonSeries.data = countryData;
    }
  }

  componentWillUnmount() {
    if (this.map) {
      this.map.dispose();
    }
  }

  setIsFullScreen(value) {
    const newValue = value === '' ? 'full-screen' : '';

    this.setState({
      isFullScreen: newValue,
    });
  }

  createMap() {
    const {
      countryData,
      handleSwitchAbsolutePer100K,
      handleSwitchAllToday,
    } = this.props;

    const map = am4core.create('mapchartdiv', am4maps.MapChart);
    map.geodata = am4geodata_worldLow;
    map.projection = new am4maps.projections.Miller();
    map.width = am4core.percent(100);
    map.height = am4core.percent(100);
    map.padding(0, 5, 5, 5);

    // header title
    const header = map.chartContainer.createChild(am4core.Label);
    header.text = 'COVID-19 Dashboard';
    header.color = am4core.color(COLOR_SECONDARY);
    header.marginLeft = 20;
    header.paddingBottom = 10;
    header.y = 10;
    header.align = 'left';
    header.fontSize = '1.5em';
    header.fill = COLOR_SECONDARY;

    // switch between Absolute and Per 100K
    const absolutePerCapitaSwitch = map.createChild(am4core.SwitchButton);
    absolutePerCapitaSwitch.align = 'right';
    absolutePerCapitaSwitch.valign = 'bottom';
    absolutePerCapitaSwitch.marginRight = 0;
    // absolutePerCapitaSwitch.marginBottom = 10;
    absolutePerCapitaSwitch.leftLabel.text = 'Absolute';
    absolutePerCapitaSwitch.leftLabel.fill = am4core.color(COLOR_SECONDARY);
    absolutePerCapitaSwitch.rightLabel.fill = am4core.color(COLOR_SECONDARY);
    absolutePerCapitaSwitch.rightLabel.text = 'Per 100K';
    absolutePerCapitaSwitch.rightLabel.interactionsEnabled = true;
    absolutePerCapitaSwitch.rightLabel.tooltipText = 'When calculating max value, countries with population less than 100.000 are not included.';
    // absolutePerCapitaSwitch.verticalCenter = 'bottom';
    absolutePerCapitaSwitch.events.on('toggled', () => {
      handleSwitchAbsolutePer100K(absolutePerCapitaSwitch.isActive);
    });
    this.absolutePerCapitaSwitch = absolutePerCapitaSwitch;

    // switch between All and today cases
    const allTodaySwitch = map.createChild(am4core.SwitchButton);
    allTodaySwitch.align = 'right';
    allTodaySwitch.valign = 'bottom';
    allTodaySwitch.marginRight = 190;
    // allTodaySwitch.marginBottom = 10;
    allTodaySwitch.leftLabel.text = 'All';
    allTodaySwitch.leftLabel.fill = am4core.color(COLOR_SECONDARY);
    allTodaySwitch.rightLabel.fill = am4core.color(COLOR_SECONDARY);
    allTodaySwitch.rightLabel.text = 'Today';
    allTodaySwitch.rightLabel.interactionsEnabled = true;
    allTodaySwitch.verticalCenter = 'bottom';
    allTodaySwitch.events.on('toggled', () => {
      handleSwitchAllToday(allTodaySwitch.isActive);
    });
    this.allTodaySwitch = allTodaySwitch;

    map.tooltip = new am4core.Tooltip();
    map.tooltip.background.fill = am4core.color('#000000');
    map.tooltip.background.stroke = colors.active;
    map.tooltip.fontSize = '0.9em';
    map.tooltip.getFillFromObject = false;
    map.tooltip.getStrokeFromObject = false;

    map.deltaLongitude = -10;
    // map.homeGeoPoint = { longitude: 0, latitude: -2 };

    const polygonSeries = map.series.push(new am4maps.MapPolygonSeries());
    this.polygonSeries = polygonSeries;
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
    hs.properties.fill = am4core.color(COLOR_HOVER);

    polygonSeries.heatRules.push({
      property: 'fill',
      target: polygonSeries.mapPolygons.template,
      min: am4core.color(COLOR_SECONDARY).brighten(1),
      max: am4core.color(COLOR_PRIMARY).brighten(-0.5),
      logarithmic: true,
    });

    // Remove Antarctica
    polygonSeries.exclude = ['AQ'];

    // Set real-world API data
    polygonSeries.data = countryData;
    polygonSeries.dataFields.value = 'cases';
    map.zoomControl = new am4maps.ZoomControl();
    // map.zoomControl.marginBottom = 50;
    map.zoomControl.slider.height = 100;
    map.zoomControl.valign = 'middle';

    const heatLegend = map.createChild(am4maps.HeatLegend);
    heatLegend.id = 'heatLegend';
    heatLegend.series = polygonSeries;
    heatLegend.align = 'left';
    heatLegend.valign = 'bottom';
    heatLegend.marginBottom = 30;
    heatLegend.orientation = 'vertical';
    heatLegend.width = am4core.percent(7);
    heatLegend.height = am4core.percent(50);
    heatLegend.fill = am4core.color(COLOR_SECONDARY);
    heatLegend.color = am4core.color(COLOR_SECONDARY);
    heatLegend.padding(5, 5, 5, 5);
    heatLegend.valueAxis.fontSize = 14;
    heatLegend.valueAxis.logarithmic = true;

    // Set up custom heat map legend labels using axis ranges
    const minRange = heatLegend.valueAxis.axisRanges.create();
    minRange.label.horizontalCenter = 'left';

    const maxRange = heatLegend.valueAxis.axisRanges.create();
    maxRange.label.horizontalCenter = 'right';

    // Blank out internal heat legend value axis labels
    // eslint-disable-next-line no-unused-vars
    heatLegend.valueAxis.renderer.labels.template.adapter.add('text', (labelText) => '');

    // Configure series tooltip
    polygonTemplate.tooltipText = '{name}: {value}';
    polygonTemplate.nonScalingStroke = true;
    polygonTemplate.strokeWidth = 0.5;

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

    function handleHover(column) {
      if (!Number.isNaN(column.dataItem.value)) {
        heatLegend.valueAxis.showTooltipAt(column.dataItem.value);
      } else {
        heatLegend.valueAxis.hideTooltip();
      }
    }

    polygonSeries.mapPolygons.template.events.on('out', () => {
      heatLegend.valueAxis.hideTooltip();
    });

    // heat legend behavior
    polygonSeries.mapPolygons.template.events.on('over', (event) => {
      handleHover(event.target);
    });

    polygonSeries.mapPolygons.template.events.on('hit', (event) => {
      handleHover(event.target);
    });

    this.map = map;
  }

  render() {
    const { isFullScreen } = this.state;

    return (
      <div className={`${isFullScreen} map__chrtdiv`} ref={this.divRef}>
        <div className="full-screen-toggle__wrapper">
          <FullScreenToggle
            setIsFullScreen={() => this.setIsFullScreen(isFullScreen)}
          />
        </div>
        <div
          id="mapchartdiv"
          style={{
            width: '100%', height: '100%', minHeight: '225px',
          }}
        />
      </div>
    );
  }
}

export default Map;
