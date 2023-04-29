import ContentLoader from "react-content-loader";

import "./WeatherForecastLoader.scss";

const WeatherForecastLoader = () => (
  <ContentLoader
    className="forecast-box"
    height={170}
    backgroundColor="#1e213a"
    foregroundColor="#585676"
  >
    <rect x="0" y="0" rx="0" ry="0" style={{ width: "100%" }} height="170" />
  </ContentLoader>
);

export default WeatherForecastLoader;
