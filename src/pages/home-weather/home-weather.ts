import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@IonicPage()
@Component({
  selector: 'page-home-weather',
  templateUrl: 'home-weather.html',
})
export class HomeWeatherPage {
  public location: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    this.geolocation.getCurrentPosition().then((location) => {
      this.location = location;
    }).catch((error) => {
      console.log('Error getting location', error);
    });    
  }
}
