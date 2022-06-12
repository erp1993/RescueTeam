import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { City } from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient
  ) { }

  getElements(city: City): Observable<any[]>{

    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
    };

    return this.http.get<any[]>('https://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=' + environment.owApiKey), httpOptions);

  }

}
