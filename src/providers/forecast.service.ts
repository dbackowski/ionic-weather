import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map';

import { Forecast } from '../interfaces/forecast';
import { AppConfig } from '../config/app.config';

@Injectable()
export class ForecastServiceProvider {
  apiUrl = '/api/forecast';
  
  constructor(public http: Http, private appConfig: AppConfig) {}

  load(latitude: number, longtude: number): Observable<Forecast> {
    return this.http.get(`${this.apiUrl}/${this.appConfig.darkSkyApiKey}/${latitude},${longtude}?units=si`)
      .map(res => <Forecast>res.json());
  }
}
