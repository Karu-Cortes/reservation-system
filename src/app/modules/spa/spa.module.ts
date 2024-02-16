import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpaRoutingModule } from './spa-routing.module';
import { SpaPageComponent } from './pages/spa-page/spa-page.component';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [
    SpaPageComponent
  ],
  imports: [
    CommonModule,
    SpaRoutingModule,
    SharedModule
    
  ]
})
export class SpaModule { }
