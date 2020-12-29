import React, { useEffect, useState, Suspense } from 'react';
import axios from 'axios';
import Main from './components/Main/Main';
import Footer from './components/Footer/footer';
import Loader from './components/Loader/loader';
import './App.scss';

const App = () => {
  const [perCountryData, setPerCountryData] = useState([]);
  const [totalData, setTotalData] = useState([]);
  const [worldTimeline, setWorldTimeline] = useState({});
  const [loaderWaitCountryData, setLoaderWaitCountryData] = useState(true);
  const [loaderWaitTotalData, setLoaderWaitTotalData] = useState(true);

  useEffect(() => {
    axios('https://corona.lmao.ninja/v2/countries')
      .then(({ data }) => setPerCountryData(data));
    axios('https://corona.lmao.ninja/v2/all')
      .then(({ data }) => setTotalData(data), setLoaderWaitCountryData(false));
    axios('https://disease.sh/v3/covid-19/historical/all?lastdays=all')
      .then(({ data }) => setWorldTimeline(data), setLoaderWaitTotalData(false));
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <div className="App">
        {loaderWaitCountryData || loaderWaitTotalData
          ? <Loader />
          : (
            <Main
              perCountryData={perCountryData}
              totalData={totalData}
              worldTimeline={worldTimeline}
            />
          )}
        <Footer />
      </div>
    </Suspense>
  );
};

export default App;
