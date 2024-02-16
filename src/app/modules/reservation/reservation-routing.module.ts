import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationPageComponent } from './pages/reservation-page/reservation-page.component';

const routes: Routes = [

  //enrutando la página de reservación.
  {
    path:'',
    component: ReservationPageComponent,
    outlet: 'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }
