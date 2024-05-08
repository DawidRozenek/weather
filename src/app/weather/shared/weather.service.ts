import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Weather } from "src/app/shared/models/weather";
import { WeatherRepository } from "./weather.repository";

@Injectable()
export class WeatherService {
  constructor(private weatherRepository: WeatherRepository) {}

  getWeatherForecast(): Observable<Weather[]> {
    return this.weatherRepository.getWeatherForecast();
  }
}
