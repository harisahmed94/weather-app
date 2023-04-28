import React, { FC, useEffect, useState } from "react";
import { produce } from "immer";

import {
  forecastsStateType,
  highlightsStateType,
  unitsType,
  units,
  mainStateType,
} from "../services/fakeWeatherService";
import WeatherMain from "./WeatherMain";
import { unitConverter } from "../utils/unit-converter";
import usePrevious from "../hooks/usePrevious";
import useFetch from "../hooks/useFetch";
import { mapState } from "../services/mapAppState";
import UnitSwitch from "./UnitSwitch";
import Footer from "./Footer";
import WeatherForecasts from "./WeatherForecasts";
import Highlights from "./Highlights";
import { WeatherData } from "../../types/api-types";
import WeatherMainSkeleton from "./WatherMainSkeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Main.scss";

const INITIAL_LOCATION = "tallinn";

const Main: FC = () => {
  const [location, setLocation] = useState(INITIAL_LOCATION);
  const [unit, setUnit] = useState<unitsType>(units.C);
  const { data } = useFetch<WeatherData>(location);

  const [mainState, setMainState] = useState<mainStateType>();
  const [forecastsState, setForecastsState] =
    useState<forecastsStateType | null>(null);
  const [highlightsState, setHighlightsState] =
    useState<highlightsStateType | null>(null);
  const prevUnit = usePrevious(unit);

  useEffect(() => {
    if (data) {
      const { mainStateObj, forecastsStateArr, highlightsStateArr } =
        mapState(data);
      setMainState(mainStateObj);
      setForecastsState(forecastsStateArr);
      console.log(forecastsStateArr);
      setHighlightsState(highlightsStateArr);
    }
  }, [data]);

  useEffect(() => {
    if (mainState && forecastsState) {
      console.log(prevUnit);

      setMainState(
        produce((draft) => {
          draft!.temp = unitConverter(draft!.temp, unit, prevUnit);
        })
      );
      setForecastsState(
        produce((draft) => {
          draft!.map((forecast) => {
            forecast.max_temp = unitConverter(
              forecast.max_temp,
              unit,
              prevUnit
            );
            forecast.min_temp = unitConverter(
              forecast.min_temp,
              unit,
              prevUnit
            );
            return forecast;
          });
        })
      );
    }
  }, [unit]);

  const handleUnitChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    setUnit(e.currentTarget.value as unitsType);
  };

  return (
    <div className="container">
      {mainState && (
        <WeatherMain
          mainState={mainState}
          unit={unit}
          setLocation={setLocation}
        />
      )}
      {/* <WeatherMainSkeleton /> */}
      <div className="weather-details">
        <UnitSwitch unit={unit} unitChangeHandler={handleUnitChange} />
        {forecastsState && (
          <WeatherForecasts unit={unit} forecastsState={forecastsState} />
        )}
        {highlightsState && <Highlights highlightsState={highlightsState} />}
        <Footer />
      </div>
    </div>
  );
};

export default Main;
