import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DailyForecast, TemperatureUnit } from 'src/app/shared/models/weather';

@Component({
  selector: 'app-weather-forecast-item',
  templateUrl: './weather-forecast-item.component.html',
  styleUrls: ['./weather-forecast-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherForecastItemComponent {
  @Input() forecast!: DailyForecast;
  @Input() temperatureUnit!: TemperatureUnit;

  TemperatureUnit = TemperatureUnit;
}
