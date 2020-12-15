/* eslint-disable vars-on-top */
/* eslint-disable no-console */
// https://corona.lmao.ninja/v2/historical/:query?lastdays=347  - запрос на все кейсы с таймлайном

export default class Stats {
  constructor() {
    // this.totalData = 'https://corona.lmao.ninja/v2/historical?lastdays=347';
    // this.totalDeaths = 'https://corona.lmao.ninja/v2/all?yesterday';
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

  async getPerCountryStats(forYesterday = false) {
    let url = this.urls.perCountryData;
    if (forYesterday) {
      url += '?yesterday';
    }
    const covidData = await this.getDataFromUrl(url);
    // некие преобразования
    return covidData;
  }

  async getTotalStats(forYesterday = false) {
    let url = this.urls.totalData;
    if (forYesterday) {
      url += '?yesterday';
    }
    const covidData = await this.getDataFromUrl(url);
    // некие преобразования
    return covidData;
  }
}
