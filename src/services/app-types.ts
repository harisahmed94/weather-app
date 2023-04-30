export enum UnitsEnum {
  C = "C",
  F = "F",
}

export type Units = keyof typeof UnitsEnum;

type Temperature = { [UnitsEnum.C]: number; [UnitsEnum.F]: number };

export type SidebarData = {
  temp: Temperature;
  weatherState: string;
  dateString: string;
  location: string;
  icon: string;
};

export type Forecast = {
  applicable_date: string;
  min_temp: Temperature;
  max_temp: Temperature;
  icon: string;
};

export type ForecastsData = Forecast[];

export type HighlightWind = [number, number];
export type HighlightOther = { value: number };

export type HighlightsData = [
  { value: HighlightWind },
  HighlightOther,
  HighlightOther,
  HighlightOther
];
