import { FC } from "react";
import block from "bem-css-modules";

import { units, unitsType } from "../services/app-types";

import s from "./UnitSwitch.module.scss";
const b = block(s);

interface UnitSwitchProps {
  unit: unitsType;
  unitChangeHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const UnitSwitch: FC<UnitSwitchProps> = ({ unit, unitChangeHandler }) => {
  const isCelsius = unit === units.C;
  return (
    <div className={b()}>
      <button
        className={b("unit", {
          selected: isCelsius,
        })}
        value={units.C}
        onClick={unitChangeHandler}
      >
        &#176;{units.C}
      </button>
      <button
        className={b("unit", {
          selected: !isCelsius,
        })}
        value={units.F}
        onClick={unitChangeHandler}
      >
        &#176;{units.F}
      </button>
    </div>
  );
};

export default UnitSwitch;
