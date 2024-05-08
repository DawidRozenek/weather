import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { take, takeUntil } from 'rxjs';
import { TemperatureUnit } from 'src/app/shared/models/weather';
import { UserPreferencesService } from 'src/app/shared/services/user-preferences.service';
import { Unsubscribe } from 'src/app/shared/utils/unsubscribe';

@Component({
  selector: 'app-profile-dynamic',
  template: '<p>Dynamic component</p>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileDynamicComponent {}
