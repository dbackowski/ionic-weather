import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Location } from '../interfaces/location';

@Injectable()
export class LocationServiceProvider {
  apiUrl = 'http://maps.googleapis.com/maps/api/geocode/json';

  constructor(public http: HttpClient) {}

  load(latitude: number, longtude: number): Observable<Location> {
    return this.http.get<Location>(`${this.apiUrl}?latlng=${latitude},${longtude}`);
  }
}
