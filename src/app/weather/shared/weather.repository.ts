import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Weather } from "src/app/shared/models/weather";

@Injectable()
export class WeatherRepository {
  constructor() {}

  getWeatherForecast(): Observable<Weather[]> {
    return of(
      [
        {
          "location": {
            "city": "New York",
            "country": "USA",
            "latitude": 40.7128,
            "longitude": -74.0060
          },
          "current": {
            "temperature": 22,
            "weather": "Cloudy",
            "humidity": 75,
            "wind_speed": 10
          },
          "forecast": [
            {
              "date": "2024-04-24",
              "temperature": {
                "min": 18,
                "max": 25
              },
              "weather": "Partly Cloudy"
            },
            {
              "date": "2024-04-25",
              "temperature": {
                "min": 17,
                "max": 24
              },
              "weather": "Sunny"
            },
            {
              "date": "2024-04-26",
              "temperature": {
                "min": 16,
                "max": 23
              },
              "weather": "Rainy"
            }
          ]
        }
      ]
    );
  }
}
