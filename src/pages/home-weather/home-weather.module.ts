import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeWeatherPage } from './home-weather';

@NgModule({
  declarations: [
    HomeWeatherPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeWeatherPage),
  ],
  exports: [
    HomeWeatherPage
  ]
})
export class HomeWeatherPageModule {}
