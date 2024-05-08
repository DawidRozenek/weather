import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './containers/weather/weather.component';
import { WeatherRepository } from './shared/weather.repository';
import { WeatherService } from './shared/weather.service';
import { WeatherListComponent } from './components/weather-list/weather-list.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    WeatherComponent,
    WeatherListComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    HttpClientModule
  ],
  providers: [
    WeatherRepository,
    WeatherService
  ],
})
export class WeatherModule { }
