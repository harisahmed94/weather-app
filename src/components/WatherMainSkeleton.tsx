import Skeleton from "react-loading-skeleton";

import "./WeatherMain.scss";

const WeatherMainSkeleton = () => {
  return (
    <aside className="weather-main">
      <div className="weather-main__search">
        <Skeleton />
      </div>
      <div className="weather-main__image">
        <Skeleton />
      </div>
      <div className="weather-main__summary">
        <div className="weather-main__temp">
          <Skeleton />
        </div>
        <span className="weather-main__condition">
          <Skeleton />
        </span>
        <div className="weather-main__meta">
          <div className="weather-main__dayDate">
            <span className="weather-main__day">Today</span> -
            <span className="weather-main__date">
              <Skeleton />
            </span>
          </div>
          <span className="weather-main__location">
            <Skeleton />
          </span>
        </div>
      </div>
      <Skeleton />
    </aside>
  );
};

export default WeatherMainSkeleton;
