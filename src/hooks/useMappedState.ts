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
      const { sidebarMapped, forecastsMapped, highlightsMapped } =
        mapAppState(data);
      setSidebarData(sidebarMapped);
      setForecastsData(forecastsMapped);
      setHighlightsData(highlightsMapped);
    }
  }, [data]);

  return {
    sidebarData,
    forecastsData,
    highlightsData,
  };
};

export default useMappedState;
