import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormService } from '@modules/reservation/services/form.service'

@Component({
  selector: 'app-form-booking-page',
  templateUrl: './form-booking-page.component.html',
  styleUrls: ['./form-booking-page.component.css']
})
export class FormBookingPageComponent implements OnInit{

  formBooking: FormGroup = new FormGroup({});

  constructor( private formService: FormService) {
    
  }
  ngOnInit(): void {
    this.formBooking = new FormGroup(
      {
        date: new FormControl('',[
          Validators.required
        ]),
        phone: new FormControl('',[
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(13)
        ])

          })
  }

  sedForm():void {
    const {date, phone} = this.formBooking.value
    this.formService.sendInformation(date,phone)
  }

}
