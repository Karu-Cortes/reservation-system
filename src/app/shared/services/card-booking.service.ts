import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SpaModel } from '@core/models/spa.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CardBookingService {
  private readonly URL = environment.api;

  constructor(private http: HttpClient) { }

  getSpas(): Observable<SpaModel[]> {
    return this.http.get<SpaModel[]>(`${this.URL}/spa/0/20`);
  }
}
