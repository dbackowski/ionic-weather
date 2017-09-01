import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weatherIcon'
})
export class WeatherIcon implements PipeTransform {
  private icons = {
    'clear-day' : 'sunny',
    'clear-night' : 'moon',
    'rain' : 'rainy',
    'snow' : 'snow',
    'sleet' : 'snow',
    'wind' : 'cloudy',
    'fog' : 'cloudy',
    'cloudy' : 'cloudy',
    'partly-cloudy-day' : 'partly-sunny',
    'partly-cloudy-night' : 'cloudy-night'
  }

  transform(value) {
    return this.icons[value];
  }
}
