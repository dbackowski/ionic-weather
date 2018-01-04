import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Forecast } from '../interfaces/forecast';
import { AppConfig } from '../config/app.config';

@Injectable()
export class ForecastServiceProvider {
  apiUrl = '/api/forecast';

  constructor(public http: HttpClient, private appConfig: AppConfig) {}

  load(latitude: number, longtude: number): Observable<Forecast> {
    return this.http.get<Forecast>(`${this.appConfig.darkSkyApiUrl()}/${this.appConfig.darkSkyApiKey}/${latitude},${longtude}?units=si`);
  }
}
