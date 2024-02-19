import { Component, OnInit } from '@angular/core';
import * as dataspaBJson from '../../../../data/spa.json'; //mock
import { SpaModel } from '@core/models/spa.model';


@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.component.html',
  styleUrls: ['./reservation-page.component.css'],
})
export class ReservationPageComponent implements OnInit {
  mockSpabList: Array<SpaModel> = [];

  constructor() {
  }



  ngOnInit(): void {
    const { data }: any = (dataspaBJson as any).default;
    //listado del json de infSpa
    this.mockSpabList = data;
  }
}
