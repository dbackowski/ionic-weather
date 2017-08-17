import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map';

import { Forecast } from '../models/forecast';

@Injectable()
export class ForecastServiceProvider {
  apiUrl = '/api/forecast';
  
  constructor(public http: Http) {}

  load(latitude: number, longtude: number): Observable<Forecast> {
    return this.http.get(`${this.apiUrl}/${latitude},${longtude}`)
      .map(res => <Forecast>res.json());
  }
}
