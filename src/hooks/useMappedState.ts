import { useState, useEffect } from "react";

import {
  ForecastsData,
  HighlightsData,
  SidebarData,
} from "../services/app-types";
import mapAppState from "../services/mapAppState";
import { WeatherData } from "../services/api-types";

const useMappedState = (data?: WeatherData) => {
  const [sidebarData, setSidebarData] = useState<SidebarData>();
  const [forecastsData, setForecastsData] = useState<ForecastsData>();
  const [highlightsData, setHighlightsData] = useState<HighlightsData>();

  useEffect(() => {
    if (data) {
      const { mainStateObj, forecastsStateArr, highlightsStateArr } =
        mapAppState(data);
      setSidebarData(mainStateObj);
      setForecastsData(forecastsStateArr);
      setHighlightsData(highlightsStateArr);
    }
  }, [data]);

  return {
    sidebarData,
    forecastsData,
    highlightsData,
  };
};

export default useMappedState;
