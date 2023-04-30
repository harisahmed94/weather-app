import { FC } from "react";
import block from "bem-css-modules";

import { highlightsStateType } from "../services/app-types";
import HighlightBox from "./HighlightBox";
import HighlightBoxLoader from "./HighlightBoxLoader";

import s from "./Highlights.module.scss";
const b = block(s);

type HighlightsProps = {
  highlightsState?: highlightsStateType;
  loading: boolean;
};

const Highlights: FC<HighlightsProps> = ({ highlightsState, loading }) => {
  const supportedHighlights = [
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
    <div className={b()}>
      <h2 className={b("heading")}>Today's highlights</h2>
      <div className={b("container")}>
        {loading
          ? skeleton.map((value) => <HighlightBoxLoader key={value} />)
          : highlightsState?.map((highlight, index) => {
              const { title, unit } = supportedHighlights[index];
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
