import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeMainRoutingModule } from './home-main-routing.module';
import { HomeMainPageComponent } from './page/home-main-page/home-main-page.component';


@NgModule({
  declarations: [
    HomeMainPageComponent
  ],
  imports: [
    CommonModule,
    HomeMainRoutingModule
  ]
})
export class HomeMainModule { }
