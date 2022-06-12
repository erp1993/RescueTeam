import { City } from 'src/app/models/city';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-data-table',
  templateUrl: './weather-data-table.component.html',
  styleUrls: ['./weather-data-table.component.scss']
})
export class WeatherDataTableComponent implements OnInit {

  columnElements: any[]
  columns: any[]

  displayedColumns: string[]

  @Input()
  dataSource: City[];

  constructor() {
    this.columnElements = [
      { position: 1, name: 'temperature' },
      { position: 2, name: 'weatherConditions.minTemp' },
      { position: 3, name: 'weatherConditions.maxTemp' },
      { position: 4, name: 'humidity' }
    ]

    this.columns = [
      {
        columnDef: 'temperature',
        header: 'Temperature',
        cell: (element: any) => `${element.temperature}`,
      },
      {
        columnDef: 'weatherConditions.minTemp',
        header: 'Min Temperature',
        cell: (element: any) => `${element.weatherConditions.minTemp}`,
      },
      {
        columnDef: 'weatherConditions.maxTemp',
        header: 'Max Temperature',
        cell: (element: any) => `${element.weatherConditions.maxTemp}`,
      },
      {
        columnDef: 'humidity',
        header: 'Humidity',
        cell: (element: any) => `${element.humidity}`,
      }
    ];

    this.displayedColumns = ['temperature', 'weatherConditions.minTemp', 'weatherConditions.maxTemp', 'humidity'];

    this.dataSource = [
      {
        name: '',
        temperature: 0,
        humidity: 0
      }
    ]
   }

  ngOnInit(): void {
  }

}
