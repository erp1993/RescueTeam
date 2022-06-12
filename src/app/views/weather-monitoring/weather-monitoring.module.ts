import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherMonitoringRoutingModule } from './weather-monitoring-routing.module';
import { WeatherMonitoringComponent } from './weather-monitoring.component';

import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    WeatherMonitoringComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    WeatherMonitoringRoutingModule,
    MatCardModule
  ]
})
export class WeatherMonitoringModule { }
