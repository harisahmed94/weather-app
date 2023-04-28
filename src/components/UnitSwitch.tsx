import React, { FC } from "react";
import classNames from "classnames";
import { units, unitsType } from "../services/fakeWeatherService";
import "./UnitSwitch.scss";

interface UnitSwitchProps {
  unit: unitsType;
  unitChangeHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const UnitSwitch: FC<UnitSwitchProps> = ({ unit, unitChangeHandler }) => {
  const isCelsius = unit === units.C;
  return (
    <div className="unit-switch">
      <button
        className={classNames("unit-switch__unit", {
          "unit-switch__unit--selected": isCelsius,
        })}
        value={units.C}
        onClick={unitChangeHandler}
      >
        &#176;{units.C}
      </button>
      <button
        className={classNames("unit-switch__unit", {
          "unit-switch__unit--selected": !isCelsius,
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
