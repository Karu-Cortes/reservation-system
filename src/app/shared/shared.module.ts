import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardBookingComponent } from './components/card-booking/card-booking.component';
import { CardSpaComponent } from './components/card-spa/card-spa.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { RouterModule } from '@angular/router';
import { OrderListPipe } from './pipe/order-list.pipe';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CardBookingComponent,
    CardSpaComponent,
    SectionGenericComponent,
    OrderListPipe,
    
  ],
  imports: [
    CommonModule,
    RouterModule //para poder acceder al routerlink
    
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    CardBookingComponent,
    CardSpaComponent,
    SectionGenericComponent,
    OrderListPipe,
  
  ]
})
export class SharedModule { }
