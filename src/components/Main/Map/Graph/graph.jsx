import React from 'react';
import './graph.scss';

const Graph = () => (
  <section className="graph" />
);

export default Graph;

// // buttons & chart container
// const buttonsAndChartContainer = map.createChild(am4core.Container);
// buttonsAndChartContainer.layout = 'vertical';
// // make this bigger if you want more space for the chart
// buttonsAndChartContainer.height = am4core.percent(30);
// buttonsAndChartContainer.width = am4core.percent(100);
// buttonsAndChartContainer.valign = 'bottom';

// // country name and buttons container
// const nameAndButtonsContainer = buttonsAndChartContainer.createChild(am4core.Container);
// nameAndButtonsContainer.width = am4core.percent(100);
// nameAndButtonsContainer.padding(0, 10, 5, 20);
// nameAndButtonsContainer.layout = 'horizontal';

// // name of a country and date label
// const countryName = nameAndButtonsContainer.createChild(am4core.Label);
// countryName.fontSize = '1.1em';
// countryName.fill = am4core.color('#ffffff');
// countryName.valign = 'middle';

// // buttons container (active/confirmed/recovered/deaths)
// // const buttonsContainer = nameAndButtonsContainer.createChild(am4core.Container);
// // buttonsContainer.layout = 'grid';
// // buttonsContainer.width = am4core.percent(100);
// // buttonsContainer.x = 10;
// // buttonsContainer.contentAlign = 'right';

// // Chart & slider container
// const chartAndSliderContainer = buttonsAndChartContainer.createChild(am4core.Container);
// chartAndSliderContainer.layout = 'vertical';
// chartAndSliderContainer.height = am4core.percent(100);
// chartAndSliderContainer.width = am4core.percent(100);
// chartAndSliderContainer.background = new am4core.RoundedRectangle();
// chartAndSliderContainer.background.fill = am4core.color('#000000');
// chartAndSliderContainer.background.cornerRadius(30, 30, 0, 0);
// chartAndSliderContainer.background.fillOpacity = 0.25;
// chartAndSliderContainer.paddingTop = 12;
// chartAndSliderContainer.paddingBottom = 0;

// // Slider container
// // const sliderContainer = chartAndSliderContainer.createChild(am4core.Container);
// // sliderContainer.width = am4core.percent(100);
// // sliderContainer.padding(0, 15, 15, 10);
// // sliderContainer.layout = 'horizontal';

// // const slider = sliderContainer.createChild(am4core.Slider);
// // slider.width = am4core.percent(100);
// // slider.valign = 'middle';
// // slider.background.opacity = 0.4;
// // slider.opacity = 0.7;
// // slider.background.fill = am4core.color('#ffffff');
// // slider.marginLeft = 20;
// // slider.marginRight = 35;
// // slider.height = 15;
// // slider.start = 1;

// // BOTTOM CHART
// // https://www.amcharts.com/docs/v4/chart-types/xy-chart/
// const lineChart = chartAndSliderContainer.createChild(am4charts.XYChart);
// lineChart.fontSize = '0.8em';
// lineChart.paddingRight = 30;
// lineChart.paddingLeft = 30;
// lineChart.maskBullets = false;
// lineChart.zoomOutButton.disabled = true;
// lineChart.paddingBottom = 5;
// lineChart.paddingTop = 3;

// make a copy of data as we will be modifying it
// lineChart.data = JSON.parse(JSON.stringify(covid_total_timeline));
