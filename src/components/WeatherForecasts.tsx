import { FC } from "react";

import { forecastsStateType, unitsType } from "../services/fakeWeatherService";

import "./WeatherForecasts.scss";
import WeatherForecastCard from "./WeatherForecastCard";
import WeatherForecastLoader from "./WeatherForecastLoader";

interface WeatherForecastsProps {
  forecastsState?: forecastsStateType;
  unit: unitsType;
  loading: boolean;
}

const WeatherForecasts: FC<WeatherForecastsProps> = ({
  forecastsState,
  unit,
  loading,
}) => {
  const skeleton = [1, 2, 3, 4, 5];

  return (
    <div className="weather-details__forecasts">
      {loading
        ? skeleton.map((value) => <WeatherForecastLoader key={value} />)
        : forecastsState?.map((forecast, index) => {
            return (
              <WeatherForecastCard
                forecast={forecast}
                // loading={loading}
                index={index}
                unit={unit}
              />
            );
          })}
    </div>
  );
};

export default WeatherForecasts;
