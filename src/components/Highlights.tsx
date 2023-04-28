import { FC } from "react";
import { highlightsStateType } from "../services/fakeWeatherService";
import HighlightBox from "./HighlightBox";
import "./Highlights.scss";

type HighlightsProps = {
  highlightsState: highlightsStateType;
};

const Highlights: FC<HighlightsProps> = ({ highlightsState }) => {
  const supportedHighlights1 = [
    {
      title: "Wind status",
      unit: "ms",
    },
    { title: "Humidity", unit: "%" },
    { title: "Visibility", unit: "km" },
    { title: "Air Pressure", unit: "mb" },
  ];
  return (
    <div className="highlights">
      <h2 className="highlights__heading">Today's highlights</h2>
      <div className="highlights__highlights-container">
        {highlightsState.map((highlight, index) => {
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
