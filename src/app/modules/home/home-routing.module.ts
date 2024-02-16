import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [

  //llamado de modulos renderizados en el home.
  {
    path:'reservation',
    loadChildren: () => import('@modules/reservation/reservation.module').then(m => m.ReservationModule)
  },
  {
    path:'spa',
    loadChildren: () => import('@modules/spa/spa.module').then(m => m.SpaModule)
  },
  {
    path:'about-us',
    loadChildren: () => import('@modules/about-us/about-us.module').then(m => m.AboutUsModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
