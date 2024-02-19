import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [

  //llamado de modulos renderizados en el home.
  {
    path:'home-main',
    loadChildren: () => import('@modules/home-main/home-main.module').then(m => m.HomeMainModule)
  },
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
  },
  {
    path:'**',
    redirectTo:'home-main' //para que siempre redireccione home main
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
