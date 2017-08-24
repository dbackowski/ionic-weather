import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { ForecastServiceProvider } from '../../providers/forecast.service';
import { Forecast } from '../../interfaces/forecast';

@IonicPage()
@Component({
  selector: 'page-home-weather',
  templateUrl: 'home-weather.html',
})
export class HomeWeatherPage {
  public location: any;
  public skycons: any;
  public forecast: Forecast;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public geolocation: Geolocation, 
    private forecastServiceProvider: ForecastServiceProvider) {
  }

  ionViewDidLoad() {
    this.geolocation.getCurrentPosition().then((location) => {
      this.location = location;
      this.forecastServiceProvider.load(this.location.coords.latitude, this.location.coords.longitude).subscribe(
        forecast => {
          this.forecast = forecast;
          console.log(this.forecast);
        }
      )
    }).catch((error) => {
      console.log('Error getting location', error);
    });    
  }
}
