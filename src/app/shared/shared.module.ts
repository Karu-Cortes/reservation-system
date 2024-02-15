import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardBookingComponent } from './components/card-booking/card-booking.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CardBookingComponent,
    SectionGenericComponent
  ],
  imports: [
    CommonModule
    
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    CardBookingComponent,
    SectionGenericComponent
  ]
})
export class SharedModule { }
