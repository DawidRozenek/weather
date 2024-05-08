import { Pipe, PipeTransform } from '@angular/core';
import { TemperatureUnit } from '../models/weather';

@Pipe({
  name: 'temperatureConverter'
})
export class TemperatureConverterPipe implements PipeTransform {
  transform(value: number, temperatureUnit: TemperatureUnit): string {
    let convertedValue: number;
    let unitSymbol: string;

    if (temperatureUnit === TemperatureUnit.Celsius) {
      convertedValue = value;
      unitSymbol = '°C';
    } else {
      convertedValue = (value * 9 / 5) + 32;
      unitSymbol = '°F';
    }

    return convertedValue.toFixed(1) + unitSymbol;
  }
}