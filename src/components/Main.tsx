import { FC, useState } from "react";
import block from "bem-css-modules";

import { unitsType, units } from "../services/app-types";
import Sidebar from "./SideBar";
import useFetch from "../hooks/useFetch";
import UnitSwitch from "./UnitSwitch";
import Footer from "./Footer";
import Forecasts from "./Forecasts";
import Highlights from "./Highlights";
import { WeatherData } from "../services/api-types";
import useMappedState from "../hooks/useMappedState";

import s from "./Main.module.scss";
const b = block(s);

const INITIAL_LOCATION = "tallinn";

const Main: FC = () => {
  const [location, setLocation] = useState(INITIAL_LOCATION);
  const [unit, setUnit] = useState<unitsType>(units.C);
  const { data, loading } = useFetch<WeatherData>(location);
  const { mainState, forecastsState, highlightsState } = useMappedState(data);

  const handleUnitChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    setUnit(e.currentTarget.value as unitsType);
  };

  return (
    <div className={b()}>
      <Sidebar
        mainState={mainState}
        unit={unit}
        setLocation={setLocation}
        loading={loading}
      />
      <div className={b("details")}>
        <UnitSwitch unit={unit} unitChangeHandler={handleUnitChange} />
        <Forecasts
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
