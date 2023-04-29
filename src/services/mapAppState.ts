import { highlightsStateType } from "./fakeWeatherService";

import { WeatherData } from "../../types/api-types";
import { units } from "./fakeWeatherService";

const mapAppState = (data: WeatherData) => {
  const mainStateObj = {
    temp: {
      [units.C]: Math.round(data.list[0].main.temp),
      [units.F]: unitConverter(data.list[0].main.temp),
    },
    weatherState: data.list[0].weather[0].main,
    dateString: data.list[0].dt_txt,
    location: data.city.name,
    icon: data.list[0].weather[0].icon,
  };

  const forecastsStateArr = data.list
    .filter((_, index) => index % 8 === 0)
    .map((item) => ({
      min_temp: {
        [units.C]: Math.round(item.main.temp_min),
        [units.F]: unitConverter(item.main.temp_min),
      },
      max_temp: {
        [units.C]: Math.round(item.main.temp_max),
        [units.F]: unitConverter(item.main.temp_max),
      },
      applicable_date: item.dt_txt,
      icon: item.weather[0].icon,
    }));

  const highlightsStateArr: highlightsStateType = [
    {
      value: [Math.round(data.list[0].wind.speed), data.list[0].wind.deg],
    },
    { value: Math.round(data.list[0].main.humidity) },
    // { value: Math.round(data.list[0].visibility / 1000) },
    { value: data.list[0].visibility / 1000 },
    { value: Math.round(data.list[0].main.pressure) },
  ];

  return { mainStateObj, forecastsStateArr, highlightsStateArr };
};

export default mapAppState;

const unitConverter = (temp: number) => Math.round(temp * 1.8 + 32);
