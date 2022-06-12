import { WeatherAlertComponent } from './../../shared/weather-alert/weather-alert.component';
import { WeatherService } from './../../service/weather.service';
import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/models/city';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-weather-monitoring',
  templateUrl: './weather-monitoring.component.html',
  styleUrls: ['./weather-monitoring.component.scss']
})
export class WeatherMonitoringComponent implements OnInit {

  cities!: City[];

  cityNumber!: number;

  currentCity!: City;

  constructor(
    private weatherService: WeatherService,
    private dialog: MatDialog
  ) {
    this.cities = [
      {
        name: "Madrid",
        temperature: 0,
        humidity: 0
      },
      {
        name: "Toledo",
        temperature: 0,
        humidity: 0
      },
      {
        name: "Barcelona",
        temperature: 0,
        humidity: 0
      },
      {
        name: "Bilbao",
        temperature: 0,
        humidity: 0
      },
      {
        name: "Macapa",
        temperature: 0,
        humidity: 0
      }
    ];
  }

  ngOnInit(): void {
    this.cityNumber = (Math.floor(Math.random() * (this.cities.length - 1 + 1)) + 1) - 1;

    this.currentCity = this.cities[this.cityNumber];

    this.weatherService.getCityWeather(this.currentCity).subscribe(
      {
        next: (data) => this.setCityData(data),
        error: () => {

        }
      }
    )

    setInterval(()=> { this.changeCity() }, environment.reloadInterval * 1000);
  }

  changeCity(): void {

    let previousCityNumber = this.cityNumber;
    while (previousCityNumber === this.cityNumber) {
      this.cityNumber = (Math.floor(Math.random() * (this.cities.length - 1 + 1)) + 1) - 1;
    }
    this.currentCity = this.cities[this.cityNumber];

    this.weatherService.getCityWeather(this.currentCity).subscribe(
      {
        next: (data) => this.setCityData(data),
        error: () => {

        }
      }
    )
  }

  setCityData(data: any): void {
    this.dialog.closeAll();
    this.currentCity.temperature = data.main.temp;
    this.currentCity.humidity = data.main.humidity;

    this.currentCity.weatherConditions = {
      description: data.weather[0].main,
      icon:  data.weather[0].icon,
      feelsLike: data.main.feels_like,
      minTemp: data.main.temp_min,
      maxTemp: data.main.temp_max,
      pressure: data.main.pressure,
      wind: {
        speed: data.wind.speed,
        degrees: data.wind.degrees
      }
    }

    this.currentCity.sunProps = {
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset,
    }

    if (
      (
        this.currentCity.temperature > environment.alerts.temperature.min ||
        this.currentCity.temperature < environment.alerts.temperature.max
      ) && this.currentCity.humidity > environment.alerts.humidity.max ) {
        this.dialog.open(WeatherAlertComponent)
      }
  }

}
