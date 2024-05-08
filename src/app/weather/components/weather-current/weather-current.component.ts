import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UserPreferences } from 'src/app/shared/models/user';
import { Weather } from 'src/app/shared/models/weather';

@Component({
  selector: 'app-weather-current',
  templateUrl: `./weather-current.component.html`,
  styleUrls: ['./weather-current.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherCurrentComponent {
  @Input() weather!: Weather;
  @Input() userPreferences!: UserPreferences;
}
