import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationPageComponent } from './pages/reservation-page/reservation-page.component';
import { FormBookingPageComponent } from './pages/form-booking-page/form-booking-page.component';
import { ReservationListPageComponent } from './pages/reservation-list-page/reservation-list-page.component';
import { SessionGuard } from '@core/guards/session.guard';


const routes: Routes = [
  //enrutando la página de reservación.
  {
    path: '',
    children:[
    {path:'', component: ReservationPageComponent},
    {path:'form', component: FormBookingPageComponent, canActivate:[SessionGuard]},
    {path:'list', component: ReservationListPageComponent, canActivate:[SessionGuard]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }
