import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { WeatherAlertComponent } from './weather-alert/weather-alert.component';
import { WeatherDataTableComponent } from './weather-data-table/weather-data-table.component';

@NgModule({
  declarations: [
    WeatherAlertComponent,
    WeatherDataTableComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule
  ],
  exports: [
    WeatherAlertComponent,
    WeatherDataTableComponent
  ]
})
export class SharedModule { }
