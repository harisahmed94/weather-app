import { FC } from "react";
import { highlightsStateWind } from "../services/fakeWeatherService";
import "./HighlightBox.scss";

interface HighlightBoxProps {
  title: string;
  unit: string;
  data: highlightsStateWind | number;
}

const MAX_PROGRESS = 100;

const HighlightBox: FC<HighlightBoxProps> = ({ data, title, unit }) => {
  const renderBoxData = () => {
    // const isWind = title === "Wind status";
    if (Array.isArray(data)) {
      return (
        <>
          <span className="highlight-box__name">{title}</span>
          <span className="highlight-box__value">
            <span className="highlight-box__number">{Math.round(data[0])}</span>{" "}
            {unit}
          </span>
          <span className="highlight-box__details">{data[1]}</span>
        </>
      );
    }

    const isHumidity = title === "Humidity";

    return (
      <>
        <span className="highlight-box__name">{title}</span>
        <span className="highlight-box__value">
          <span className="highlight-box__number">{Math.round(data)}</span>{" "}
          {unit}
        </span>
        {isHumidity && (
          <>
            <div className="highlight-box__label">
              <span className="highlight-box__label-text">0</span>
              <span className="highlight-box__label-text">50</span>
              <span className="highlight-box__label-text">100</span>
            </div>
            <progress
              className="highlight-box__progress"
              max={MAX_PROGRESS}
              value={data}
            ></progress>
          </>
        )}
      </>
    );
  };
  return <div className="highlight-box">{renderBoxData()}</div>;
};

export default HighlightBox;
