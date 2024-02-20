import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormService } from '@modules/reservation/services/form.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-form-booking-page',
  templateUrl: './form-booking-page.component.html',
  styleUrls: ['./form-booking-page.component.css'],
})
export class FormBookingPageComponent implements OnInit {
  formBooking: FormGroup;
  spaId: number; // Asegúrate de establecer este valor basado en la selección de la spa

  constructor(
    private formService: FormService,
    private cookies: CookieService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.spaId = (navigation?.extras.state as { spaId: number }).spaId;
    this.formBooking = new FormGroup({
      date: new FormControl('', [Validators.required]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13),
      ]),
    });
  }

  ngOnInit(): void {}

  sedForm(): void {
    if (this.formBooking.valid) {
      const formValue = this.formBooking.value;
  
      // La fecha y hora vienen en formato 'YYYY-MM-DDTHH:MM' directamente del input 'datetime-local'
      const dateTimeString = formValue.date;
  
      // Para cumplir con el formato requerido por el backend 'YYYY-MM-DDTHH:MM:SS.sssZ',
      // agregamos ':00.000Z' al final para representar los segundos y milisegundos en UTC.
      const formattedDateTime = `${dateTimeString}:00.000Z`;
  
      const userId = parseInt(this.cookies.get('userId'), 10);
  
      if (!isNaN(userId)) {
        // Preparar los datos para enviar
        const bookingData = {
          date: formattedDateTime,
          phone: formValue.phone,
          spa: { id: this.spaId },
          user: { id: userId },
        };
  
        // Llamar al servicio para enviar la información
        this.formService.sendInformation(
          bookingData.date,
          bookingData.phone,
          bookingData.spa.id,
          bookingData.user.id
        ).subscribe({
          next: (response) => {
            console.log('Reserva realizada con éxito', response);
            this.router.navigate(['/reservation/list'])
            // Aquí puedes añadir lógica para manejar una reserva exitosa, como redirigir al usuario
          },
          error: (error) => {
            console.error('Error al realizar la reserva:', error);
          },
        });
      } else {
        console.error('El ID de usuario obtenido no es un número válido.');
      }
    } else {
      alert('Por favor, completa todos los campos requeridos.');
    }
  }

  updateDate(event: any): void {
    const date: Date = event.value; // Asumiendo que `event.value` es un objeto `Date`
    const formattedDate = formatDate(date, 'yyyy-MM-ddTHH:mm', 'en-US');
    this.formBooking.get('date')!.setValue(formattedDate);
  }
}
