import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UserPreferences } from 'src/app/shared/models/user';
import { DailyForecast } from 'src/app/shared/models/weather';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherForecastComponent {
  @Input() forecast: DailyForecast[] = [];
  @Input() userPreferences!: UserPreferences;
}
