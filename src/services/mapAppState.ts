import { HighlightsData } from "./app-types";
import { WeatherData } from "./api-types";
import { UnitsEnum } from "./app-types";

const mapAppState = (data: WeatherData) => {
  const sidebarMapped = {
    temp: {
      [UnitsEnum.C]: Math.round(data.list[0].main.temp),
      [UnitsEnum.F]: unitConverter(data.list[0].main.temp),
    },
    weatherState: data.list[0].weather[0].main,
    dateString: data.list[0].dt_txt,
    location: data.city.name,
    icon: data.list[0].weather[0].icon,
  };

  const forecastsMapped = data.list
    .filter((_, index) => index % 8 === 0)
    .map((item) => ({
      min_temp: {
        [UnitsEnum.C]: Math.round(item.main.temp_min),
        [UnitsEnum.F]: unitConverter(item.main.temp_min),
      },
      max_temp: {
        [UnitsEnum.C]: Math.round(item.main.temp_max),
        [UnitsEnum.F]: unitConverter(item.main.temp_max),
      },
      applicable_date: item.dt_txt,
      icon: item.weather[0].icon,
    }));

  const highlightsMapped: HighlightsData = [
    {
      value: [Math.round(data.list[0].wind.speed), data.list[0].wind.deg],
    },
    { value: Math.round(data.list[0].main.humidity) },
    { value: data.list[0].visibility / 1000 },
    { value: Math.round(data.list[0].main.pressure) },
  ];

  return { sidebarMapped, forecastsMapped, highlightsMapped };
};

export default mapAppState;

const unitConverter = (temp: number) => Math.round(temp * 1.8 + 32);
