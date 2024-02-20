import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '@modules/auth/services/register.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit{

  formRegister : FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private  registerService: RegisterService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.formRegister = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],

    });
  }
  guardarUsuario() {
    if (this.formRegister.valid) {
      const usuario = this.formRegister.value;
      this.registerService.registerUser(usuario.name,usuario.email,usuario.password)
        .subscribe({
          next: (response) => {
            console.log('Registro exitoso', response);
            // La navegación al login ya se maneja en el servicio, no es necesario repetirla aquí.
            // Si decides manejarla aquí, asegúrate de no tener un conflicto con el servicio.
          },
          error: (error) => {
            // Ahora manejamos el error de manera específica basándonos en el código de estado HTTP.
            console.log('Error durante el registro', error);
            if (error.status === 403) {
              alert('Las contraseñas no son válidas.');
            } else {
              alert('Hubo un error al registrar el usuario.');
            }
          }
        });
    } else {
      alert('Por favor, completa el formulario correctamente.');
    }
  }
}
