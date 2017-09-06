import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map';

import { Location } from '../interfaces/location';

@Injectable()
export class LocationServiceProvider {
  apiUrl = 'http://maps.googleapis.com/maps/api/geocode/json';
  
  constructor(public http: Http) {}

  load(latitude: number, longtude: number): Observable<Location> {
    return this.http.get(`${this.apiUrl}?latlng=${latitude},${longtude}`)
      .map(res => <Location>res.json());
  }
}
