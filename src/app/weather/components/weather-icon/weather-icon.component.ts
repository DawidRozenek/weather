import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { WeatherType } from 'src/app/shared/models/weather';

@Component({
  selector: 'app-weather-icon',
  templateUrl: `./weather-icon.component.html`,
  styleUrls: ['./weather-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherIconComponent {
  @Input() weatherType!: string;

  WeatherType = WeatherType;
}
