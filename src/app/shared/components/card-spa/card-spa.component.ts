import { Component, Input, OnInit } from '@angular/core';
import { InfSpaModel } from '@core/models/infSpa.model';

@Component({
  selector: 'app-card-spa',
  templateUrl: './card-spa.component.html',
  styleUrls: ['./card-spa.component.css']
})
export class CardSpaComponent implements OnInit{

  @Input() spa:InfSpaModel={_id:0,img:'',name:'',description:'',link:''}

 // @Input() dataSpa:Array<InfSpaModel>=[]


  constructor(){
    
  }
  ngOnInit(): void {
    
  }

}
