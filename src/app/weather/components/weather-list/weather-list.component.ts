import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '../../shared/weather.service';
import { Observable } from 'rxjs';
import { Weather } from 'src/app/shared/models/weather';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherListComponent {
  @Input() weather: Weather[] = [];
}
