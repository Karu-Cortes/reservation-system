import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import { ReservationPageComponent } from './pages/reservation-page/reservation-page.component';
import { SharedModule } from '@shared/shared.module';
import { FormBookingPageComponent } from './pages/form-booking-page/form-booking-page.component';
import { ReservationListPageComponent } from './pages/reservation-list-page/reservation-list-page.component';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    ReservationPageComponent,
    FormBookingPageComponent,
    ReservationListPageComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    ReservationRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatTableModule

  ]
})
export class ReservationModule { }
