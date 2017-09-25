import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomeWeatherPage } from '../pages/home-weather/home-weather';
import { ForecastServiceProvider } from '../providers/forecast.service';
import { AppConfig }    from '../config/app.config';
import { FormatDate } from '../pipes/format-date';
import { WeatherIcon } from '../pipes/weather-icon';
import { LocationServiceProvider } from '../providers/location.service';
import { LoadingServiceProvider } from '../providers/loading.service';
import { ToastServiceProvider } from '../providers/toast.service';

@NgModule({
  declarations: [
    MyApp,
    HomeWeatherPage,
    FormatDate,
    WeatherIcon
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomeWeatherPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ForecastServiceProvider,
    AppConfig,
    LocationServiceProvider,
    ToastServiceProvider,
    LoadingServiceProvider
  ]
})
export class AppModule {}
