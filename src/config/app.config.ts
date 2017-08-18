import { Injectable } from '@angular/core';

declare var process: any;

@Injectable()
export class AppConfig {  
  public darkSkyApiKey: string;
  public googleMapApiKey: string;
  
  constructor() {
    this.darkSkyApiKey = this._readString('DARK_SKY_API_KEY', '');
    this.googleMapApiKey = this._readString('GOOGLE_MAP_API_KEY', '');
  }
  
  private _readString(key: string, defaultValue?: string): string {
    const v = process.env[key];
    return v === undefined ? defaultValue : String(v);
  }
}