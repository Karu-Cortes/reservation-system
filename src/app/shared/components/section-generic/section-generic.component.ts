import { Component, Input, OnInit } from '@angular/core';
import { InfSpaModel } from '@core/models/infSpa.model';
import { SpaModel } from '@core/models/spa.model';

@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrls: ['./section-generic.component.css']
})
export class SectionGenericComponent implements OnInit{

  @Input() dataSpa:Array<InfSpaModel>=[] //lista de tarjetas del spa

  @Input() dataBooking:Array<SpaModel>=[] //lista de tarjetas del booking
  

  constructor() {
    
  }

  ngOnInit(): void {
  }

}
