import React, { FC, useState } from "react";
import { unitsType, mainStateType } from "../services/fakeWeatherService";
import { dateParser } from "../utils/day-date";
import Search from "./Search";
import WeatherMainLoader from "./WeatherMainLoader";

import "./WeatherMain.scss";

type mainStateProps = {
  mainState?: mainStateType;
};

type WeatherMainProps = mainStateProps & {
  unit: unitsType;
  loading: boolean;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
};

const WeatherMain: FC<WeatherMainProps> = ({
  mainState,
  unit,
  setLocation,
  loading,
}) => {
  const [searchVisible, setSearchVisible] = useState(false);

  const displayContent = () => {
    if (mainState) {
      const { temp, weatherState, dateString, location, icon } = mainState;
      const [day, date, month] = dateParser(dateString);
      return (
        <>
          <div className="weather-main__search">
            {!searchVisible && (
              <button
                onClick={() => setSearchVisible(true)}
                className="weather-main__btn"
              >
                Search for places
              </button>
            )}
          </div>
          <div className="weather-main__image">
            <img
              className="weather-main__img"
              src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
            />
          </div>
          <div className="weather-main__summary">
            <div className="weather-main__temp">
              <span className="weather-main__value">{temp[unit]}</span>{" "}
              <span className="weather-main__unit">&#176;{unit}</span>
            </div>
            <span className="weather-main__condition">{weatherState}</span>
            <div className="weather-main__meta">
              <div className="weather-main__dayDate">
                <span className="weather-main__day">Today</span> -
                <span className="weather-main__date">
                  {` ${day}, ${date} ${month}`}
                </span>
              </div>
              <span className="weather-main__location">{location}</span>
            </div>
          </div>
          {searchVisible && (
            <Search handleClose={setSearchVisible} setLocation={setLocation} />
          )}
        </>
      );
    }
  };
  return (
    <aside className="weather-main">
      {loading ? <WeatherMainLoader /> : displayContent()}
    </aside>
  );
};

export default WeatherMain;
