import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TemperatureUnit } from '../models/weather';
import { DisplayMode, UserPreferences } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserPreferencesService {
  private userPreferencesSubject$ = new BehaviorSubject<UserPreferences>({
    location: 'New York, USA',
    temperatureUnit: TemperatureUnit.Celcius,
    displayMode: DisplayMode.Dark,
  });

  userPreferences$ = this.userPreferencesSubject$.asObservable();

  constructor() { }

  updateUserPreferences(preferences: Partial<UserPreferences>): void {
    this.userPreferencesSubject$.next({
      ...this.userPreferencesSubject$.getValue(),
      ...preferences,
    });
  }
}
