import ContentLoader from "react-content-loader";
import block from "bem-css-modules";

import s from "./ForecastCardLoader.module.scss";
const b = block(s);

const ForecastCardLoader = () => (
  <ContentLoader
    className={b()}
    height={170}
    backgroundColor="#1e213a"
    foregroundColor="#585676"
  >
    <rect x="0" y="0" rx="0" ry="0" style={{ width: "100%" }} height="170" />
  </ContentLoader>
);

export default ForecastCardLoader;
