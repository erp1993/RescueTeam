import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { City } from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient
  ) { }

  getCityWeather(city: City) {
    return this.http.get<any>('https://api.openweathermap.org/data/2.5/weather?units=metric&q=' + city.name + '&appid=' + environment.owApiKey);
  }
}
