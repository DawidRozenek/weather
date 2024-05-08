import { TemperatureUnit } from "./weather";

export enum DisplayMode {
  Light = 'Light',
  Dark = 'Dark',
}

export interface UserPreferences {
  location: string;
  temperatureUnit: TemperatureUnit;
  displayMode: DisplayMode;
}
