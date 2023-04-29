import React, { FC, useState } from "react";

import { unitsType, units } from "../services/fakeWeatherService";
import WeatherMain from "./WeatherMain";
import useFetch from "../hooks/useFetch";
import UnitSwitch from "./UnitSwitch";
import Footer from "./Footer";
import WeatherForecasts from "./WeatherForecasts";
import Highlights from "./Highlights";
import { WeatherData } from "../../types/api-types";
import useMappedState from "../hooks/useMappedState";

import "react-loading-skeleton/dist/skeleton.css";
import "./Main.scss";

const INITIAL_LOCATION = "tallinn";

const Main: FC = () => {
  const [location, setLocation] = useState(INITIAL_LOCATION);
  const [unit, setUnit] = useState<unitsType>(units.C);
  let { data, loading } = useFetch<WeatherData>(location);
  // loading = true;
  const { mainState, forecastsState, highlightsState } = useMappedState(data);

  const handleUnitChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    setUnit(e.currentTarget.value as unitsType);
  };

  return (
    <div className="container">
      <WeatherMain
        mainState={mainState}
        unit={unit}
        setLocation={setLocation}
        loading={loading}
      />
      <div className="weather-details">
        <UnitSwitch unit={unit} unitChangeHandler={handleUnitChange} />
        <WeatherForecasts
          loading={loading}
          unit={unit}
          forecastsState={forecastsState}
        />
        <Highlights loading={loading} highlightsState={highlightsState} />
        <Footer />
      </div>
    </div>
  );
};

export default Main;
