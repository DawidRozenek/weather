interface Location {
  city: string;
  country: string;
  latitude: number;
  longitude: number;
}

export interface CurrentWeather {
  temperature: number;
  weather: string;
  humidity: number;
  wind_speed: number;
}

export interface DailyForecast {
  date: string;
  temperature: {
    min: number;
    max: number;
  };
  weather: string;
}

export interface Weather {
  location: Location;
  current: CurrentWeather;
  forecast: DailyForecast[];
}

export enum WeatherType {
  Sunny = 'Sunny',
  Cloudy = 'Cloudy',
  PartlyCloudy = 'Partly Cloudy',
  Rainy = 'Rainy',
}

export enum TemperatureUnit {
  Celsius = 'Celsius',
  Fahrenheit = 'Fahrenheit',
}
