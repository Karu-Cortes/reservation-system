import { Component, OnInit } from '@angular/core';
import * as dataSpaJson from '../../../../data/infSpa.json' //mock
import { InfSpaModel } from '@core/models/infSpa.model';

@Component({
  selector: 'app-spa-page',
  templateUrl: './spa-page.component.html',
  styleUrls: ['./spa-page.component.css']
})
export class SpaPageComponent implements OnInit{
//el mock es para confirmar que esta funcionando el servicio de conexión de componentes
mockSpaList: Array<InfSpaModel>=[
  
]

constructor() {
  
}
  
  ngOnInit(): void {
    const {data}:any = (dataSpaJson as any).default //listado del json de infSpa
    this.mockSpaList = data;
  }

}
