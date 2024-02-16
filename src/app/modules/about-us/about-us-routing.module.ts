import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';

const routes: Routes = [

   //enrutando la página de about-us.
   {
    path:'',
    component: AboutUsPageComponent,
    outlet: 'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule { }
