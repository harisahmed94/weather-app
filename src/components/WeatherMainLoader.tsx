import ContentLoader from "react-content-loader";

import "./WeatherMainLoader.scss";

const WeatherMainLoader = () => (
  <ContentLoader
    className="loader-sidebar"
    height={750}
    width={270}
    backgroundColor="#100e1d"
    foregroundColor="#585676"
  >
    <rect x="50" y="40" rx="0" ry="0" width="170" height="45" />
    <circle cx="133" cy="210" r="79" />
    <rect x="67" y="330" rx="0" ry="0" width="135" height="140" />
    <rect x="40" y="520" rx="0" ry="0" width="186" height="40" />
    <rect x="60" y="620" rx="0" ry="0" width="150" height="30" />
    <rect x="70" y="670" rx="0" ry="0" width="130" height="30" />
  </ContentLoader>
);

export default WeatherMainLoader;
