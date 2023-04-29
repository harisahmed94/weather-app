import { FC } from "react";

import { forecastObjType, unitsType } from "../services/fakeWeatherService";
import { dateParser } from "../utils/day-date";

interface WeatherForecastCardProps {
  forecast: forecastObjType;
  index: number;
  unit: unitsType;
  // loading: boolean;
}

const WeatherForecastCard: FC<WeatherForecastCardProps> = ({
  forecast,
  index,
  unit,
  // loading,
}) => {
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
};

export default WeatherForecastCard;

const renderForecastDay = (dateString: string, index: number) => {
  if (index === 0) {
    return "Today";
  }
  const [day, date, month] = dateParser(dateString);
  const monthAbbr = month.substring(0, 3);
  return `${day}, ${date} ${monthAbbr}`;
};
