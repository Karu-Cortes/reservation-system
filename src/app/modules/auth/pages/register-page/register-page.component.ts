import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit{

  formRegister : FormGroup = new FormGroup({});

  constructor() {
    
  }
  ngOnInit(): void {
    this.formRegister = new FormGroup(
      {
        name: new FormControl('',[
          Validators.required, //exista el campo
          Validators.minLength(3),
          Validators.maxLength(50)

      ]),

        email: new FormControl('',[

            Validators.required, //exista el campo
            Validators.email //se ingrese un email

          
        ]),
        password:new FormControl('',[
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)
        ])
      }
    );

  }

  sendRegister(): void {
    const body = this.formRegister.value
    console.log(body);
  }
}
