import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CurrentWeather, TemperatureUnit } from 'src/app/shared/models/weather';

@Component({
  selector: 'app-weather-current-header',
  templateUrl: `./weather-current-header.component.html`,
  styleUrls: ['./weather-current-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherCurrentHeaderComponent {
  @Input() weather!: CurrentWeather;
  @Input() temperatureUnit!: TemperatureUnit;

  TemperatureUnit = TemperatureUnit;
}
 