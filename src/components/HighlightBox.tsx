import { FC } from "react";
import block from "bem-css-modules";

import { HighlightWind } from "../services/app-types";

import s from "./HighlightBox.module.scss";
const b = block(s);

interface Props {
  title: string;
  unit: string;
  data: HighlightWind | number;
}

const MAX_PROGRESS = 100;

const HighlightBox: FC<Props> = ({ data, title, unit }) => {
  const renderBoxData = () => {
    if (Array.isArray(data)) {
      return (
        <>
          <span className={b("name")}>{title}</span>
          <span className={b("value")}>
            <span className={b("number")}>{Math.round(data[0])}</span> {unit}
          </span>
          <span className={b("details")}>{data[1]}</span>
        </>
      );
    }

    const isHumidity = title === "Humidity";

    return (
      <>
        <span className={b("name")}>{title}</span>
        <span className={b("value")}>
          <span className={b("number")}>{Math.round(data)}</span> {unit}
        </span>
        {isHumidity && (
          <>
            <div className={b("label")}>
              <span className={b("label-text")}>0</span>
              <span className={b("label-text")}>50</span>
              <span className={b("label-text")}>100</span>
            </div>
            <progress
              className={b("progress")}
              max={MAX_PROGRESS}
              value={data}
            ></progress>
          </>
        )}
      </>
    );
  };
  return <div className={b()}>{renderBoxData()}</div>;
};

export default HighlightBox;
