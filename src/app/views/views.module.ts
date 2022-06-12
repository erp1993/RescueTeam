import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { MainViewComponent } from './main-view.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    MainViewComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SharedModule,
    MatToolbarModule,
    MatDialogModule
  ]
})
export class ViewsModule { }
