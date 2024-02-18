import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import { ReservationPageComponent } from './pages/reservation-page/reservation-page.component';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [
    ReservationPageComponent
  ],
  imports: [
    CommonModule,
    ReservationRoutingModule,
    SharedModule
   
  ]
})
export class ReservationModule { }
