/* eslint-disable react/prop-types */
import React from 'react';
import Map from './Map';
import Graph from '../../Graph/graph';

class MapContainer extends React.PureComponent {
  render() {
    const {
      perCountryData,
      isPer100K,
      isToday,
      handleSwitchAbsolutePer100K,
      handleSwitchAllToday,
    } = this.props;

    const countcasesPer100K = (value) => Math.floor(value / 10);

    const countryData = perCountryData.map((el) => ({
      id: el.countryInfo.iso2,
      casesPer100K: countcasesPer100K(el.casesPerOneMillion),
      todayCasesPer100K: countcasesPer100K(el.todayCases),
      ...el,
    }));

    return (
      <section className="map">
        <div className="map__chrtdiv">
          <Map
            countryData={countryData}
            isPer100K={isPer100K}
            isToday={isToday}
            handleSwitchAbsolutePer100K={handleSwitchAbsolutePer100K}
            handleSwitchAllToday={handleSwitchAllToday}
          />
          <Graph />
        </div>
      </section>
    );
  }
}

export default MapContainer;
