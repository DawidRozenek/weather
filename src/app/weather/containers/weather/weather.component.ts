import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { WeatherService } from '../../shared/weather.service';
import { Observable } from 'rxjs';
import { Weather } from 'src/app/shared/models/weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherComponent {
  weather$ = this.weatherService.getWeatherForecast();

  constructor(private weatherService: WeatherService) {}
}
