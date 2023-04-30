import { FC } from "react";
import block from "bem-css-modules";

import { Forecast, Units } from "../services/app-types";
import { dateParser } from "../utils/day-date";

import s from "./ForecastCard.module.scss";
const b = block(s);

interface Props {
  forecast: Forecast;
  index: number;
  unit: Units;
}

const ForecastCard: FC<Props> = ({ forecast, index, unit }) => {
  return (
    <div key={index} className={b("card")}>
      <span className={b("day")}>
        {renderForecastDay(forecast.applicable_date, index)}
      </span>

      <img
        className={b("image")}
        src={`https://openweathermap.org/img/wn/${forecast.icon}@4x.png`}
      />
      <div>
        <span className={b("value")}>
          {forecast.max_temp[unit]}&#176;{unit}
        </span>
        <span className={b("value", { min: true })}>
          {forecast.min_temp[unit]}&#176;{unit}
        </span>
      </div>
    </div>
  );
};

export default ForecastCard;

const renderForecastDay = (dateString: string, index: number) => {
  if (index === 0) {
    return "Today";
  }
  const [day, date, month] = dateParser(dateString);
  const monthAbbr = month.substring(0, 3);
  return `${day}, ${date} ${monthAbbr}`;
};
