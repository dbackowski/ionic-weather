export interface Forecast {
  currently: ForecastData;
  hourly: {
    summary: string;
    icon: string;
    data: ForecastData[];
  }
  daily: {
    summary: string;
    icon: string;
    data: ForecastData[];
  }
}

interface ForecastData {
  summary: string;
  icon: string;
  temperature: number;
  temperatureMin: number;
  temperatureMax: number;
  apparentTemperature: number;
  dewPoint: number;
  humidity: number;
  windSpeed: number;
  windGust: number;
  windBearing: number;
  cloudCover: number;
  pressure: number;
  ozone: number;
}