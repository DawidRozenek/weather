import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WeatherService } from '../../shared/weather.service';
import { UserPreferencesService } from 'src/app/shared/services/user-preferences.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherComponent {
  weather$ = this.weatherService.getWeatherForecast();
  userPreferences$ = this.userPreferencesService.userPreferences$;

  constructor(
    private weatherService: WeatherService,
    private userPreferencesService: UserPreferencesService,
  ) {}
}
