import axios from 'axios'

const apiUrl = 'https://content.viaplay.se/pc-se/serier/samtliga'

const fetchSeries = async (setSeries, setError) => {
  try {
    let response = await axios.get(apiUrl)
    setSeries(
      response.data._embedded['viaplay:blocks'][0]._embedded['viaplay:products']
    )
    setError(false)
  } catch (error) {
    setError(true)
  }
}

export { fetchSeries }