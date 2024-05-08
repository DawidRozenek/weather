import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { take, takeUntil } from 'rxjs';
import { TemperatureUnit } from 'src/app/shared/models/weather';
import { UserPreferencesService } from 'src/app/shared/services/user-preferences.service';
import { Unsubscribe } from 'src/app/shared/utils/unsubscribe';
import { ProfileDynamicComponent } from '../../components/profile-dynamic.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent extends Unsubscribe implements OnInit {
  units = Object.values(TemperatureUnit);
  temperatureUnitControl = new FormControl();

  constructor(
    private userPreferencesService: UserPreferencesService,
    private router: Router
  ) {
    super();
  }

  ngOnInit(): void {
    this.userPreferencesService.userPreferences$
      .pipe(take(1))
      .subscribe(preferences => this.temperatureUnitControl.setValue(preferences.temperatureUnit));

    this.temperatureUnitControl.valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(val => this.setTemperatureUnit(val));


    // Dynamically registered route with component
    debugger;
    const dynamicRoute: Route = { path: 'dynamic-route', component: ProfileDynamicComponent };
    this.router.config.unshift(dynamicRoute);
  }

  setTemperatureUnit(unit: TemperatureUnit): void {
    this.userPreferencesService.updateUserPreferences({ temperatureUnit: unit });
  }
}
