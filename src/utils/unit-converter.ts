import { unitsType, units } from "../services/fakeWeatherService";

export const unitConverter = (
  temp: number,
  unit: unitsType,
  prevUnit: unitsType | undefined
) => {
  if (prevUnit) {
    if (unit === units.F) {
      return Math.round(temp * 1.8 + 32);
    }
    return Math.round((temp - 32) / 1.8);
  }
  return temp;
};
