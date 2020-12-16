/* eslint-disable no-console */
export default class Stats {
  constructor() {
    this.urls = {
      perCountryData: 'https://corona.lmao.ninja/v2/countries',
      totalData: 'https://corona.lmao.ninja/v2/all',
    };
  }

  // eslint-disable-next-line class-methods-use-this
  async getDataFromUrl(url) {
    let covidData = null;
    const promise = await fetch(url);
    if (promise.ok) {
      covidData = await promise.json();
    } if (promise.status === 404) {
      console.log(404);
    } else {
      console.log('other errors');
    }
    return covidData;
  }

  async getPerCountryStats(countryName = 'Angola') {
    const url = this.urls.perCountryData;
    const covidData = await this.getDataFromUrl(url);
    const countries = [];
    function getCountries() {
      for (let i = 0; i < Object.keys(covidData).length; i += 1) {
        countries[i] = covidData[i].country;
      }
      return countries;
    }

    const countryIndex = getCountries().indexOf(countryName);
    // console.log('++++++++++++++++++++++++++++++++++++++++++++++');
    // console.log(countryName);
    // console.log(countryIndex);
    // console.log(getCountries());
    // console.log('++++++++++++++++++++++++++++++++++++++++++++++');

    const covidDataPerCountries = {
      countryName: covidData[countryIndex].country,
      flag: covidData[countryIndex].countryInfo.flag,
      cases: covidData[countryIndex].cases,
      deaths: covidData[countryIndex].deaths,
      recovered: covidData[countryIndex].recovered,
      casesPerOneHundredThousand: Math.round(covidData[countryIndex].casesPerOneMillion / 10),
      deathsPerOneHundredThousand: Math.round(covidData[countryIndex].deathsPerOneMillion / 10),
      recoveredPerOneHundredThousand: Math.round(covidData[countryIndex].recoveredPerOneMillion
        / 10),
      todayCases: covidData[countryIndex].todayCases,
      todayDeaths: covidData[countryIndex].todayDeaths,
      todayRecovered: covidData[countryIndex].todayRecovered,
      todayCasesPerOneHundredThousand: ((covidData[countryIndex].todayCases
        / covidData[countryIndex].population) * 100000).toFixed(3),
      todayDeathsPerOneHundredThousand: ((covidData[countryIndex].todayDeaths
        / covidData[countryIndex].population) * 100000).toFixed(3),
      todayRecoveredPerOneHundredThousand: ((covidData[countryIndex].todayRecovered
        / covidData[countryIndex].population) * 100000).toFixed(3),
      updated: (new Date(covidData[countryIndex].updated)).toDateString(),
    };
    // weight = 128KB
    return covidDataPerCountries;
  }

  async getTotalStats(forYesterday = false) {
    let url = this.urls.totalData;
    if (forYesterday) {
      url += '?yesterday';
    }
    const covidData = await this.getDataFromUrl(url);
    const TotalCovidData = {
      cases: covidData.cases,
      deaths: covidData.deaths,
      recovered: covidData.recovered,
      casesPerOneHundredThousand: Math.round(covidData.casesPerOneMillion / 10),
      deathsPerOneHundredThousand: Math.round(covidData.deathsPerOneMillion / 10),
      recoveredPerOneHundredThousand: Math.round(covidData.recoveredPerOneMillion / 10),
      todayCases: covidData.todayCases,
      todayDeaths: covidData.todayDeaths,
      todayRecovered: covidData.todayRecovered,
      todayCasesPerOneHundredThousand: Math.round((covidData.todayCases
        / covidData.population) * 100000),
      todayDeathsPerOneHundredThousand: Math.round((covidData.todayDeaths
        / covidData.population) * 100000),
      todayRecoveredPerOneHundredThousand: Math.round((covidData.todayRecovered
        / covidData.population) * 100000),
      updated: (new Date(covidData.updated)).toDateString(),
    };
    // weight = 553B
    return TotalCovidData;
  }
}
