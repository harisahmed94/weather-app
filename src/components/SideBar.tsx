import { FC, useState } from "react";
import block from "bem-css-modules";

import { Units, SidebarData } from "../services/app-types";
import { dateParser } from "../utils/day-date";
import Search from "./Search";
import SidebarLoader from "./SidebarLoader";

import s from "./Sidebar.module.scss";
const b = block(s);

type Props = {
  sidebarData?: SidebarData;
  unit: Units;
  loading: boolean;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
};

const Sidebar: FC<Props> = ({ sidebarData, unit, setLocation, loading }) => {
  const [searchVisible, setSearchVisible] = useState(false);

  const displayContent = () => {
    if (sidebarData) {
      const { temp, weatherState, dateString, location, icon } = sidebarData;
      const [day, date, month] = dateParser(dateString);
      return (
        <>
          <div className={b("search")}>
            {!searchVisible && (
              <button
                onClick={() => setSearchVisible(true)}
                className={b("btn")}
              >
                Search for places
              </button>
            )}
          </div>
          <div className={b("image")}>
            <img
              className={b("img")}
              src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
            />
          </div>
          <div className={b("summary")}>
            <div className={b("temp")}>
              <span className={b("value")}>{temp[unit]}</span>{" "}
              <span className={b("unit")}>&#176;{unit}</span>
            </div>
            <span className={b("condition")}>{weatherState}</span>
            <div className={b("meta")}>
              <div className={b("dayDate")}>
                <span className={b("day")}>Today</span> -
                <span className={b("date")}>{` ${day}, ${date} ${month}`}</span>
              </div>
              <span className={b("location")}>{location}</span>
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
    <aside className={b()}>
      {loading ? <SidebarLoader /> : displayContent()}
    </aside>
  );
};

export default Sidebar;
