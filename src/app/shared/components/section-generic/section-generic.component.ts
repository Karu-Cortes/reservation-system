import { Component, Input, OnInit } from '@angular/core';
import { InfSpaModel } from '@core/models/infSpa.model';

@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrls: ['./section-generic.component.css']
})
export class SectionGenericComponent implements OnInit{

  @Input() title:string = '' //titulo para el manejo de section generic 
  @Input() dataSpa:Array<InfSpaModel>=[] //lista de tarjetas del spa
  @Input() welcomeSpa: string='';

  constructor() {
    
  }

  ngOnInit(): void {
  }

}
