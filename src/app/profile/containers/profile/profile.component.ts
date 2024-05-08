import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TemperatureUnit } from 'src/app/shared/models/weather';
import { UserPreferencesService } from 'src/app/shared/services/user-preferences.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
  constructor(private userPreferencesService: UserPreferencesService) {}

  setTemperatureUnit(unit: TemperatureUnit): void {
    this.userPreferencesService.updateUserPreferences({ temperatureUnit: unit });
  }
}
