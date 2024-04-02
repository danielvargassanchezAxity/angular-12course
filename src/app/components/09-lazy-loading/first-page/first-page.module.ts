import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstPageRoutingModule } from './first-page-routing.module';
import { FirstPageComponent } from './first-page.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    FirstPageComponent
  ],
  imports: [
    CommonModule,
    FirstPageRoutingModule,
    MatSelectModule,
  ]
})
export class FirstPageModule { }
