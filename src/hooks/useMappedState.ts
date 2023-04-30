import { useState, useEffect } from "react";

import {
  forecastsStateType,
  highlightsStateType,
  mainStateType,
} from "../services/app-types";
import mapAppState from "../services/mapAppState";
import { WeatherData } from "../services/api-types";

const useMappedState = (data?: WeatherData) => {
  const [mainState, setMainState] = useState<mainStateType>();
  const [forecastsState, setForecastsState] = useState<forecastsStateType>();
  const [highlightsState, setHighlightsState] = useState<highlightsStateType>();

  useEffect(() => {
    if (data) {
      const { mainStateObj, forecastsStateArr, highlightsStateArr } =
        mapAppState(data);
      setMainState(mainStateObj);
      setForecastsState(forecastsStateArr);
      setHighlightsState(highlightsStateArr);
    }
  }, [data]);

  return { mainState, forecastsState, highlightsState };
};

export default useMappedState;
