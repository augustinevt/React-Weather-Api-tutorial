import axios from 'axios';
const API_KEY = '22814b230f946fb50136c451e992a59f';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);



  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
