import { Component, OnInit } from '@angular/core';
import { SpaModel } from '@core/models/spa.model';
import { CardBookingService } from '@shared/services/card-booking.service';



@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.component.html',
  styleUrls: ['./reservation-page.component.css'],
})
export class ReservationPageComponent implements OnInit {
  mockSpabList: Array<SpaModel> = [];


  constructor(private cardBookingService: CardBookingService) {
  }

  ngOnInit(): void {
    this.loadSpas();
  }

  loadSpas(): void {
    this.cardBookingService.getSpas().subscribe({
      next: (spas) => {
        this.mockSpabList = spas;
      },
      error: (error) => {
        console.error('Error al obtener la lista de spas:', error);
      }
    });
  }
}
