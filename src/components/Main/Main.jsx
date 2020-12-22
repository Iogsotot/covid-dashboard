/* eslint-disable */
import React, { useState } from 'react';
import Map from './Map';
import CountriesList from './CountriesList/countriesList';
import Table from './Table/table';
import './Main.scss';

const Main = ({ perCountryData, totalData, worldTimeline }) => {
  const [statusToggle, setStatusToggle] = useState(false);
  const [statusTogglePopulation, setStatusTogglePopulation] = useState(false);
  const [chosenCountry, setChosenCountry] = useState('Global');

  return (
    <main className="main">
      <h1 className="visually-hidden">Covid-19 Dasboard</h1>
      <section className="map">
        <Map
          perCountryData={perCountryData}
          isPer100K={statusTogglePopulation}
          isToday={statusToggle}
          handleSwitchAbsolutePer100K={setStatusTogglePopulation}
          handleSwitchAllToday={setStatusToggle}
          worldTimeline={worldTimeline}
        />
      </section>
      <div className="tables">
        <Table
          totalData={totalData}
          perCountryData={perCountryData}
          setStatusToggle={setStatusToggle}
          statusToggle={statusToggle}
          statusTogglePopulation={statusTogglePopulation}
          setStatusTogglePopulation={setStatusTogglePopulation}
          chosenCountry={chosenCountry}
        />
        <CountriesList
          totalData={totalData}
          perCountryData={perCountryData}
          setStatusToggle={setStatusToggle}
          statusToggle={statusToggle}
          statusTogglePopulation={statusTogglePopulation}
          setStatusTogglePopulation={setStatusTogglePopulation}
          setChosenCountry={setChosenCountry}
        />
      </div>
    </main>
  );
};

export default Main;
