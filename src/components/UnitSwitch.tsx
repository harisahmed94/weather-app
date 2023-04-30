import { FC } from "react";
import block from "bem-css-modules";

import { UnitsEnum, Units } from "../services/app-types";

import s from "./UnitSwitch.module.scss";
const b = block(s);

interface Props {
  unit: Units;
  unitChangeHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const UnitSwitch: FC<Props> = ({ unit, unitChangeHandler }) => {
  const isCelsius = unit === UnitsEnum.C;
  return (
    <div className={b()}>
      <button
        className={b("unit", {
          selected: isCelsius,
        })}
        value={UnitsEnum.C}
        onClick={unitChangeHandler}
      >
        &#176;{UnitsEnum.C}
      </button>
      <button
        className={b("unit", {
          selected: !isCelsius,
        })}
        value={UnitsEnum.F}
        onClick={unitChangeHandler}
      >
        &#176;{UnitsEnum.F}
      </button>
    </div>
  );
};

export default UnitSwitch;
