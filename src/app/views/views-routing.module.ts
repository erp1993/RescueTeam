import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainViewComponent } from './main-view.component';

const routes: Routes = [
  {
    path: '',
    component: MainViewComponent,
    children: [
      {
        path: 'weather-monitoring',
        pathMatch: 'full',
        loadChildren: () => import('./weather-monitoring/weather-monitoring.module').then(m => m.WeatherMonitoringModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'weather-monitoring'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
