import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpaRoutingModule } from './spa-routing.module';
import { SpaPageComponent } from './pages/spa-page/spa-page.component';


@NgModule({
  declarations: [
    SpaPageComponent
  ],
  imports: [
    CommonModule,
    SpaRoutingModule
  ]
})
export class SpaModule { }
