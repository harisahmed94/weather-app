export enum units {
  C = "C",
  F = "F",
}

export type unitsType = keyof typeof units;

export enum supportedHighlights {
  "wind" = "wind",
  "humidity" = "humidity",
  "visibility" = "visibility",
  "air" = "air",
}

type Temperature = { [units.C]: number; [units.F]: number };

export type forecastObjType = {
  applicable_date: string;
  min_temp: Temperature;
  max_temp: Temperature;
  icon: string;
};

export type forecastsStateType = forecastObjType[];

export type highlightsStateWind = [number, number];
export type highlightsStateOther = { value: number };

export type highlightsStateType = [
  { value: highlightsStateWind },
  highlightsStateOther,
  highlightsStateOther,
  highlightsStateOther
];

export type highlightsStateKeys = keyof typeof supportedHighlights;

export type mainStateType = {
  temp: Temperature;
  weatherState: string;
  dateString: string;
  location: string;
  icon: string;
};
