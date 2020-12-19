import React from 'react';
import Map from './Map';

class MapContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      dataField: 'cases',
      // countryData: [],
    };
  }

  componentDidMount() {
    this.getCountriesData();
  }

  // getDataByField(field) {

  // }

  getCountriesData() {
    const { dataField } = this.state;

    fetch('https://corona.lmao.ninja/v2/countries')
      .then((res) => res.json())
      .then((data) => {
        const countryData = [];

        data.forEach((el) => {
          // filter items with no data
          if (el[dataField] > 0) {
            countryData.push({
              id: el.countryInfo.iso2,
              value: el[dataField],
            });
          }
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
          {isLoaded ? <Map countryData={countryData} /> : 'Loading...'}
        </div>
      </section>
    );
  }
}

export default MapContainer;
