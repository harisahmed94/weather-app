import { FC } from "react";
import { highlightsStateType } from "../services/fakeWeatherService";
import HighlightBox from "./HighlightBox";
import "./Highlights.scss";
import HighlightBoxLoader from "./HighlightBoxLoader";

type HighlightsProps = {
  highlightsState?: highlightsStateType;
  loading: boolean;
};

const Highlights: FC<HighlightsProps> = ({ highlightsState, loading }) => {
  const supportedHighlights1 = [
    {
      title: "Wind status",
      unit: "ms",
    },
    { title: "Humidity", unit: "%" },
    { title: "Visibility", unit: "km" },
    { title: "Air Pressure", unit: "mb" },
  ];
  const skeleton = [1, 2, 3, 5];
  return (
    <div className="highlights">
      <h2 className="highlights__heading">Today's highlights</h2>
      <div className="highlights__highlights-container">
        {loading
          ? skeleton.map((value) => <HighlightBoxLoader key={value} />)
          : highlightsState?.map((highlight, index) => {
              const { title, unit } = supportedHighlights1[index];
              return (
                <HighlightBox
                  key={title}
                  data={highlight.value}
                  title={title}
                  unit={unit}
                />
              );
            })}
      </div>
    </div>
  );
};

export default Highlights;
