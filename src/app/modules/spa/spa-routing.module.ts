import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpaPageComponent } from './pages/spa-page/spa-page.component';

const routes: Routes = [
  //enrutando la página de spa.
  {
    path:'',
    component: SpaPageComponent,
    outlet: 'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpaRoutingModule { }
