import React, { useState } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
// import { fetchSeries } from '../modules/viaplayService'
const ListOfMovies = () => {
  const [series, setSeries] = useState([]);
  const apiURL = 'https://content.viaplay.se/pc-se/serier/samtliga';
  const fetchData = async () => {
    const response = await axios.get(apiURL);
    setSeries(
      response.data._embedded['viaplay:blocks'][0]._embedded['viaplay:products']
    );
  };

  // useEffect(() => {
  //   fetchSeries(setSeries, setError)
  // }, [])

  const listOfSeries = series.map((serie, index) => {
    return (
      <div data-cy='serie-card' className='display-show' key={index}>
        <img src={serie.content.images.landscape.url} alt={serie.publicPath} />
      </div>
    );
  });

  return (
    <div className='container'>
      <div className='block'>
        <img
          data-cy='logo'
          className='logo'
          alt='viaplay-logo'
          src='https://kundservice.viaplay.se/wp-content/themes/viaplaycs/assets/dist/images/viaplay_white.svg'
        />
      </div>
      <button className='fetch-button' onClick={() => fetchData()}>
        Fetch Data
      </button>
      <div className='series-container'>{listOfSeries}</div>
    </div>
  );
};
export default ListOfMovies;
