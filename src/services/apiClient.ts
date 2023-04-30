import axios from "axios";

const WEATHER_API_KEY = `${import.meta.env.VITE_WEATHER_API_KEY}`;

const apiClient = axios.create({
  baseURL: `https://api.openweathermap.org/data/2.5`,
  params: {
    appid: WEATHER_API_KEY,
    units: "metric",
  },
});

export default apiClient;
