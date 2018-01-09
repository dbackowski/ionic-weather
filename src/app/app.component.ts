import { Component } from '@angular/core';
import { AlertController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Network } from "@ionic-native/network";

import { HomeWeatherPage } from '../pages/home-weather/home-weather';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomeWeatherPage;
  private networkDisconnected: boolean = false;

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private alertCtrl: AlertController,
    private network: Network
  ) {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.network.onDisconnect().subscribe(() => {
      this.noNetworkConnectionAlert();
      this.networkDisconnected = true;
    });

    this.network.onConnect().subscribe(() => {
      this.networkDisconnected = false;
    });
  }

  private noNetworkConnectionAlert() {
    const networkAlert = this.alertCtrl.create({
      buttons: [
        {
          handler: () => {
            if (this.networkDisconnected) {
              this.noNetworkConnectionAlert();
            }
          },
          text: "OK",
        },
      ],
      message: "Please check your internet connection.",
      title: "No Internet Connection",
    });

    networkAlert.present();
  }
}

