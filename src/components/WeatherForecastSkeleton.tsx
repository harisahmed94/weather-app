import Skeleton from "react-loading-skeleton";

import "./WeatherForecasts.scss";

const WeatherForecastSkeleton = () => {
  return (
    <div className="weather-details__forecast">
      <Skeleton containerClassName="flex-1" height={20} />

      <Skeleton
        className="weather-details__forecast-image"
        containerClassName="flex-1"
        height={50}
      />
      <div className="weather-details__forecast-temp">
        <span className="weather-details__forecast-value">
          <Skeleton width={40} inline />
        </span>
        <span className="weather-details__forecast-value  weather-details__forecast-value--min">
          <Skeleton width={40} inline />
        </span>
      </div>
    </div>
  );
};

export default WeatherForecastSkeleton;
