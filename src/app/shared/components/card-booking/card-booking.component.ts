import { Component,Input, OnInit } from '@angular/core';
import { SpaModel } from '@core/models/spa.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-booking',
  templateUrl: './card-booking.component.html',
  styleUrls: ['./card-booking.component.css']
})
export class CardBookingComponent implements OnInit{

  @Input() booking: SpaModel = {
    id: 0,
    name: '',
    description: '',
    imageUrl: ''
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToForm(): void {
    this.router.navigate(['/reservation/form'], { state: { spaId: this.booking.id } });
  }

}
