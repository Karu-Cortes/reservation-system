import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import { ReservationPageComponent } from './pages/reservation-page/reservation-page.component';
import { SharedModule } from '@shared/shared.module';
import { FormBookingPageComponent } from './pages/form-booking-page/form-booking-page.component';
import { ReservationListPageComponent } from './pages/reservation-list-page/reservation-list-page.component';





@NgModule({
  declarations: [
    ReservationPageComponent,
    FormBookingPageComponent,
    ReservationListPageComponent,

  ],
  imports: [
    CommonModule,
    ReservationRoutingModule,
    SharedModule
   
  ]
})
export class ReservationModule { }
