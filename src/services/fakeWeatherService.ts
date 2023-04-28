export enum units {
  "C" = "C",
  "F" = "F",
}

export type unitsType = keyof typeof units;

export enum supportedHighlights {
  "wind" = "wind",
  "humidity" = "humidity",
  "visibility" = "visibility",
  "air" = "air",
}

export type forecastObjType = {
  applicable_date: string;
  min_temp: number;
  max_temp: number;
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
  temp: number;
  weatherState: string;
  dateString: string;
  location: string;
  icon: string;
};
