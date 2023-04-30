import { FC, useState } from "react";
import block from "bem-css-modules";

import { Units, UnitsEnum } from "../services/app-types";
import Sidebar from "./SideBar";
import useFetch from "../hooks/useFetch";
import UnitSwitch from "./UnitSwitch";
import Footer from "./Footer";
import Forecasts from "./Forecasts";
import Highlights from "./Highlights";
import { WeatherData } from "../services/api-types";
import useMappedState from "../hooks/useMappedState";
import Error from "./Error";

import s from "./Main.module.scss";
const b = block(s);

const INITIAL_LOCATION = "tallinn";

const Main: FC = () => {
  const [location, setLocation] = useState(INITIAL_LOCATION);
  const [unit, setUnit] = useState<Units>(UnitsEnum.C);
  const { data, loading, error } = useFetch<WeatherData>(location);
  const { sidebarData, forecastsData, highlightsData } = useMappedState(data);

  const handleUnitChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    setUnit(e.currentTarget.value as Units);
  };

  return (
    <div>
      {error && <Error message={error} />}
      <div className={b()}>
        <Sidebar
          sidebarData={sidebarData}
          unit={unit}
          setLocation={setLocation}
          loading={loading}
        />
        <div className={b("details")}>
          <UnitSwitch unit={unit} unitChangeHandler={handleUnitChange} />
          <Forecasts
            loading={loading}
            unit={unit}
            forecastsState={forecastsData}
          />
          <Highlights loading={loading} highlightsState={highlightsData} />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Main;
