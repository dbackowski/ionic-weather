import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { ForecastServiceProvider } from '../../providers/forecast.service';
import { Forecast } from '../../interfaces/forecast';
import { LocationServiceProvider } from '../../providers/location.service';
import { Observable } from 'rxjs/Rx'

@IonicPage()
@Component({
  selector: 'page-home-weather',
  templateUrl: 'home-weather.html',
})
export class HomeWeatherPage {
  public location: any;
  public skycons: any;
  public forecast: Forecast;
  public locationName: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public geolocation: Geolocation, 
    private forecastServiceProvider: ForecastServiceProvider,
    private locationServiceProvider: LocationServiceProvider) {
  }

  ionViewDidLoad() {
    this.geolocation.getCurrentPosition().then((location) => {
      this.location = location;

      let toLoad = [
        this.forecastServiceProvider.load(this.location.coords.latitude, this.location.coords.longitude),
        this.locationServiceProvider.load(this.location.coords.latitude, this.location.coords.longitude)
      ]

      Observable.forkJoin(toLoad).subscribe(
        (resources) => {
          this.forecast = resources[0];
          this.locationName = resources[1].results[2].formatted_address;
        }
      );
    }).catch((error) => {
      console.log('Error getting location', error);
    });    
  }
}
