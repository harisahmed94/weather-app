import ContentLoader from "react-content-loader";

const HighlightBoxLoader = () => (
  <ContentLoader
    style={{ width: "100%" }}
    height={201}
    backgroundColor="#1e213a"
    foregroundColor="#585676"
  >
    <rect x="0" y="0" rx="0" ry="0" style={{ width: "100%" }} height={201} />
  </ContentLoader>
);

export default HighlightBoxLoader;
