import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './containers/weather/weather.component';
import { WeatherRepository } from './shared/weather.repository';
import { WeatherService } from './shared/weather.service';
import { WeatherForecastComponent } from './components/weather-forecast/weather-forecast.component';
import { WeatherIconComponent } from './components/weather-icon/weather-icon.component';
import { WeatherCurrentComponent } from './components/weather-current/weather-current.component';
import { WeatherCurrentHeaderComponent } from './components/weather-current-header/weather-current-header.component';
import { WeatherForecastItemComponent } from './components/weather-forecast-item/weather-forecast-item.component';
import { CelsiusToFahrenheitPipe } from '../shared/pipes/celcius-to-fahrenheits.pipe';

@NgModule({
  declarations: [
    WeatherComponent,
    WeatherForecastComponent,
    WeatherIconComponent,
    WeatherCurrentComponent,
    WeatherCurrentHeaderComponent,
    WeatherForecastItemComponent,
    CelsiusToFahrenheitPipe,
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    MatIconModule
  ],
  providers: [
    WeatherRepository,
    WeatherService
  ],
})
export class WeatherModule { }
