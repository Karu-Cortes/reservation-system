import { Component } from '@angular/core';
import { FormService } from '@modules/reservation/services/form.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-reservation-list-page',
  templateUrl: './reservation-list-page.component.html',
  styleUrls: ['./reservation-list-page.component.css']
})
export class ReservationListPageComponent {
  user: any; // Asumiendo que tienes los datos del usuario aquí
  displayedColumns: string[] = ['date', 'phone', 'state', 'spaName', 'description', 'image'];
  constructor(private formService: FormService, private cookies: CookieService) {}

  ngOnInit(): void {
    const userId = parseInt(this.cookies.get('userId'), 10);
    if (!isNaN(userId)) {
      this.formService.getUserReservations(userId).subscribe({
        next: (userData) => {
          this.user = userData;
          // No es necesario asignar hasReservations aquí, el getter se encarga de ello
        },
        error: (error) => console.error('Error fetching user reservations:', error),
      });
    } else {
      console.error('Invalid user ID');
    }
  }

  // El getter se calcula basado en el estado actual de `this.user`
  get hasReservations(): boolean {
    return this.user && this.user.bookings && this.user.bookings.length > 0;
  }
}
