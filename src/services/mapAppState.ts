import _pick from "lodash/pick";
import { highlightsStateType } from "./fakeWeatherService";

import { WeatherData } from "../../types/api-types";

export const mapState = (data: WeatherData) => {
  const mainStateObj = {
    temp: Math.round(data.list[0].main.temp),
    weatherState: data.list[0].weather[0].main,
    dateString: data.list[0].dt_txt,
    location: data.city.name,
    icon: data.list[0].weather[0].icon,
  };

  const filtered = data.list.filter((_, index) => index % 8 === 0);
  console.log(filtered);

  const forecastsStateArr = data.list
    .filter((_, index) => index % 8 === 0)
    .map((item) => ({
      min_temp: Math.round(item.main.temp_min),
      max_temp: Math.round(item.main.temp_max),
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
