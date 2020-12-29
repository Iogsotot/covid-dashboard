import React, { Component } from 'react';
import propTypes from 'prop-types';
import FullScreenToggle from '../../FullScreenToggle';
import createMap from './createMap';
import './Map.scss';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFullScreen: '',
    };
  }

  componentDidMount() {
    const {
      countryData,
      handleSwitchAbsolutePer100K,
      handleSwitchAllToday,
    } = this.props;

    const {
      map, absolutePerCapitaSwitch, allTodaySwitch, polygonSeries,
    } = createMap({
      countryData,
      handleSwitchAbsolutePer100K,
      handleSwitchAllToday,
    });

    this.map = map;
    this.absolutePerCapitaSwitch = absolutePerCapitaSwitch;
    this.allTodaySwitch = allTodaySwitch;
    this.polygonSeries = polygonSeries;
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

  render() {
    const { isFullScreen } = this.state;

    return (
      <div className={`${isFullScreen} map__chrtdiv`}>
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

Map.defaultProps = {
  countryData: [],
  isPer100K: false,
  isToday: false,
};

Map.propTypes = {
  countryData: propTypes.arrayOf(propTypes.object),
  isPer100K: propTypes.bool,
  isToday: propTypes.bool,
  handleSwitchAbsolutePer100K: propTypes.func.isRequired,
  handleSwitchAllToday: propTypes.func.isRequired,
};

export default Map;
