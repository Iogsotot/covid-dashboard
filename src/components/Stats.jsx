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

  async getPerCountryStats(countryName = 'Uganda') {
    const url = this.urls.perCountryData;
    const covidData = await this.getDataFromUrl(url);
    const countries = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla',
      'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria',
      'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium',
      'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia', 'Botswana', 'Brazil',
      'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde',
      'Cambodia', 'Cameroon', 'Canada', 'Caribbean Netherlands', 'Cayman Islands',
      'Central African Republic', 'Chad', 'Channel Islands', 'Chile', 'China', 'Colombia',
      'Comoros', 'Congo', 'Costa Rica', 'Croatia', 'Cuba', 'Curaçao', 'Cyprus', 'Czechia',
      "Côte d'Ivoire", 'DRC', 'Denmark', 'Diamond Princess', 'Djibouti', 'Dominica',
      'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea',
      'Estonia', 'Ethiopia', 'Falkland Islands (Malvinas)', 'Faroe Islands', 'Fiji', 'Finland',
      'France', 'French Guiana', 'French Polynesia', 'Gabon', 'Gambia', 'Georgia', 'Germany',
      'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guatemala', 'Guinea',
      'Guinea-Bissau', 'Guyana', 'Haiti', 'Holy See (Vatican City State)', 'Honduras',
      'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland',
      'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya',
      'Kuwait', 'Kyrgyzstan', "Lao People's Democratic Republic", 'Latvia', 'Lebanon',
      'Lesotho', 'Liberia', 'Libyan Arab Jamahiriya', 'Liechtenstein', 'Lithuania', 'Luxembourg',
      'MS Zaandam', 'Macao', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali',
      'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico',
      'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique',
      'Myanmar', 'Namibia', 'Nepal', 'Netherlands', 'New Caledonia', 'New Zealand', 'Nicaragua',
      'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea',
      'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia',
      'Rwanda', 'Réunion', 'S. Korea', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Martin',
      'Saint Pierre Miquelon', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino',
      'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone',
      'Singapore', 'Sint Maarten', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia',
      'South Africa', 'South Sudan', 'Spain', 'Sri Lanka', 'St. Barth', 'Sudan', 'Suriname',
      'Swaziland', 'Sweden', 'Switzerland', 'Syrian Arab Republic', 'Taiwan', 'Tajikistan',
      'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Trinidad and Tobago', 'Tunisia', 'Turkey',
      'Turks and Caicos Islands', 'UAE', 'UK', 'USA', 'Uganda', 'Ukraine', 'Uruguay',
      'Uzbekistan', 'Vanuatu', 'Venezuela', 'Vietnam', 'Wallis and Futuna', 'Western Sahara',
      'Yemen', 'Zambia', 'Zimbabwe'];
    const currentCountry = countries.indexOf(countryName);
    const covidDataPerCountries = {
      flag: covidData[currentCountry].countryInfo.flag,
      cases: covidData[currentCountry].cases,
      deaths: covidData[currentCountry].deaths,
      recovered: covidData[currentCountry].recovered,
      casesPerOneHundredThousand: Math.round(covidData[currentCountry].casesPerOneMillion / 10),
      deathsPerOneHundredThousand: Math.round(covidData[currentCountry].deathsPerOneMillion / 10),
      recoveredPerOneHundredThousand: Math.round(covidData[currentCountry].recoveredPerOneMillion
        / 10),
      todayCases: covidData[currentCountry].todayCases,
      todayDeaths: covidData[currentCountry].todayDeaths,
      todayRecovered: covidData[currentCountry].todayRecovered,
      todayCasesPerOneHundredThousand: ((covidData[currentCountry].todayCases
        / covidData[currentCountry].population) * 100000).toFixed(3),
      todayDeathsPerOneHundredThousand: ((covidData[currentCountry].todayDeaths
        / covidData[currentCountry].population) * 100000).toFixed(3),
      todayRecoveredPerOneHundredThousand: ((covidData[currentCountry].todayRecovered
        / covidData[currentCountry].population) * 100000).toFixed(3),
      updated: (new Date(covidData[currentCountry].updated)).toDateString(),
    };
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
    return TotalCovidData;
  }
}
