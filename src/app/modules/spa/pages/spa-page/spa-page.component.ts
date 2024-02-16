import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spa-page',
  templateUrl: './spa-page.component.html',
  styleUrls: ['./spa-page.component.css']
})
export class SpaPageComponent implements OnInit{
//el mock es para confirmar que esta funcionando el servicio de conexión de componentes
mockSpaList = [
  {
    name: 'spa prueba'
  },
  {
    name: 'spa prueba'
  },
  {
    name: 'spa prueba'
  }
]

constructor() {
  
}
  
  ngOnInit(): void {
  
  }

}
