import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormService {
private readonly URL = environment.api
constructor(private http: HttpClient) { }

sendInformation(date: string, phone: string, spaId: number, userId: number): Observable<any> {
  const bookingInfo = {
    date,
    phone,
    state: "DISPONIBLE", 
    spa: { id: spaId },
    user: { id: userId }
  };
  console.log("datos prueba: ", bookingInfo);
  
  return this.http.post(`${this.URL}/booking`, bookingInfo);
}

getUserReservations(userId: number): Observable<any> {
  return this.http.get(`${this.URL}/user/${userId}`);
}
}
