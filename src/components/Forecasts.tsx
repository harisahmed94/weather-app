import { FC } from "react";
import block from "bem-css-modules";

import { forecastsStateType, unitsType } from "../services/app-types";
import ForecastCard from "./ForecastCard";
import ForecastCardLoader from "./ForecastCardLoader";

import s from "./Forecasts.module.scss";
const b = block(s);

interface WeatherForecastsProps {
  forecastsState?: forecastsStateType;
  unit: unitsType;
  loading: boolean;
}

const Forecasts: FC<WeatherForecastsProps> = ({
  forecastsState,
  unit,
  loading,
}) => {
  const skeleton = [1, 2, 3, 4, 5];

  return (
    <div className={b()}>
      {loading
        ? skeleton.map((value) => <ForecastCardLoader key={value} />)
        : forecastsState?.map((forecast, index) => {
            return (
              <ForecastCard forecast={forecast} index={index} unit={unit} />
            );
          })}
    </div>
  );
};

export default Forecasts;
