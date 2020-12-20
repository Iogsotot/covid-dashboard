/* eslint-disable react/prop-types */
import React from 'react';
import Map from './Map';

class MapContainer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      countryData: [],
    };
  }

  componentDidMount() {
    this.getCountriesData();
  }

  getCountriesData() {
    fetch('https://corona.lmao.ninja/v2/countries')
      .then((res) => res.json())
      .then((data) => {
        const countryData = [];

        data.forEach((el) => {
          countryData.push({
            id: el.countryInfo.iso2,
            value: el.cases,
            ...el,
          });
        });

        this.setState({
          isLoaded: true,
          countryData,
        });
      }, (error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      });
  }

  render() {
    const { isLoaded, error, countryData } = this.state;
    const {
      isPer100K,
      isToday,
      handleSwitchAbsolutePer100K,
      handleSwitchAllToday,
    } = this.props;

    if (error) {
      return (
        <div>
          Error:
          {error.message}
        </div>
      );
    }

    return (
      <section className="map">
        <div className="map__chrtdiv">
          {isLoaded ? (
            <Map
              countryData={countryData}
              isPer100K={isPer100K}
              isToday={isToday}
              handleSwitchAbsolutePer100K={handleSwitchAbsolutePer100K}
              handleSwitchAllToday={handleSwitchAllToday}
            />
          ) : 'Loading...'}
        </div>
      </section>
    );
  }
}

export default MapContainer;
