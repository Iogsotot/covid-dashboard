import React from 'react';
import propTypes from 'prop-types';
import Map from './Map';
import Graph from '../Graph/graph';
import './index.scss';

class MapContainer extends React.PureComponent {
  render() {
    const {
      perCountryData,
      isPer100K,
      isToday,
      handleSwitchAbsolutePer100K,
      handleSwitchAllToday,
      worldTimeline,
    } = this.props;

    const countcasesPer100K = (value) => Math.floor(value / 10);

    const countryData = perCountryData.map((el) => ({
      id: el.countryInfo.iso2,
      casesPer100K: countcasesPer100K(el.casesPerOneMillion),
      todayCasesPer100K: countcasesPer100K(el.todayCases),
      ...el,
    }));

    return (
      <div className="charts-wrapper">
        <Map
          countryData={countryData}
          isPer100K={isPer100K}
          isToday={isToday}
          handleSwitchAbsolutePer100K={handleSwitchAbsolutePer100K}
          handleSwitchAllToday={handleSwitchAllToday}
        />
        <Graph
          worldTimeline={worldTimeline}
        />
      </div>
    );
  }
}

MapContainer.propTypes = {
  perCountryData: propTypes.arrayOf(propTypes.object).isRequired,
  isPer100K: propTypes.bool.isRequired,
  isToday: propTypes.bool.isRequired,
  handleSwitchAbsolutePer100K: propTypes.func.isRequired,
  handleSwitchAllToday: propTypes.func.isRequired,
  worldTimeline: propTypes.objectOf(propTypes.object).isRequired,
};

export default MapContainer;
