import ContentLoader from "react-content-loader";

import "./HighlightBoxLoader.scss";

const HighlightBoxLoader = () => (
  <ContentLoader
    className="highlight-box"
    height={201}
    backgroundColor="#1e213a"
    foregroundColor="#fff"
  >
    <rect x="22" width={90} />
    <rect x="0" y="0" rx="0" ry="0" style={{ width: "100%", height: "100%" }} />
  </ContentLoader>
);

export default HighlightBoxLoader;
