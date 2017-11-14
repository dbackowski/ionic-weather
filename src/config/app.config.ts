import { Injectable } from '@angular/core';

declare var process: any;
declare var isProd: any;

@Injectable()
export class AppConfig {
  public darkSkyApiKey: string;
  public googleMapApiKey: string;

  constructor() {
    this.darkSkyApiKey = this._readString('DARK_SKY_API_KEY', '');
    this.googleMapApiKey = this._readString('GOOGLE_MAP_API_KEY', '');
  }

  public darkSkyApiUrl() {
    return isProd ? 'https://api.darksky.net/forecast' : '/api/forecast';
  }

  private _readString(key: string, defaultValue?: string): string {
    const v = process.env[key];
    return v === undefined ? defaultValue : String(v);
  }
}
