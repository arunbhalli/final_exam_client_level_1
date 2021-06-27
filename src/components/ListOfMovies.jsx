import React, { useState } from 'react';
import axios from 'axios';
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

  // This code if we use modules 
  // useEffect(() => {
  //   fetchSeries(setSeries, setError)
  // }, [])

  const listOfSeries = series.map((serie, index) => {
    return (
        <div data-cy='series-length' className='display-show' key={index}>
        <div data-cy='img-of-series'>
           <img
            src={serie.content.images.landscape.url}
            alt={serie.publicPath}
          />
        </div>
         
          <div>
            <p data-cy='title'>Name: {serie.content.series.title}</p>
            <p data-cy='no-of-series'>Total rleased series:{serie.content.series.seasons}</p>
          </div>
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
      <button
        className='fetch-button'
        data-cy='fetch-data'
        onClick={() => fetchData()}>
        Fetch Data
      </button>
      <div className='series-container' data-cy='list-of-series'>
        {listOfSeries}
      </div>
    </div>
  );
};
export default ListOfMovies;
