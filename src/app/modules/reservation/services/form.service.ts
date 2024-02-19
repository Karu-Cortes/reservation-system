import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  sendInformation(date:string, phone:string):void{
    console.log(date,phone)
  }
}
