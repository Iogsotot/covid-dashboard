/* eslint-disable camelcase */
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

export default function createGraph({ timelineData }) {
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

  return {
    chart,
  };
}
