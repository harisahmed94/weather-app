import { FC } from "react";

import { forecastsStateType, unitsType } from "../services/fakeWeatherService";
import { dateParser } from "../utils/day-date";

import "./WeatherForecasts.scss";

interface WeatherForecastsProps {
  forecastsState: forecastsStateType;
  unit: unitsType;
}

const WeatherForecasts: FC<WeatherForecastsProps> = ({
  forecastsState,
  unit,
}) => {
  const renderForecastDay = (dateString: string, index: number) => {
    if (index === 0) {
      return "Today";
    }
    const [day, date, month] = dateParser(dateString);
    const monthAbbr = month.substring(0, 3);
    return `${day}, ${date} ${monthAbbr}`;
  };

  return (
    <div className="weather-details__forecasts">
      {forecastsState.map((forecast, index) => {
        return (
          <div key={index} className="weather-details__forecast">
            <span className="weather-details__forecast-day">
              {renderForecastDay(forecast.applicable_date, index)}
            </span>
            <img
              className="weather-details__forecast-image"
              src={`https://openweathermap.org/img/wn/${forecast.icon}@4x.png`}
            />
            <div className="weather-details__forecast-temp">
              <span className="weather-details__forecast-value">
                {forecast.max_temp}&#176;{unit}
              </span>
              <span className="weather-details__forecast-value  weather-details__forecast-value--min">
                {forecast.min_temp}&#176;{unit}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WeatherForecasts;
