import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable, tap, BehaviorSubject } from 'rxjs';
import { CustomJwtPayload } from '@core/models/CustomJwtPayload.model';
import { jwtDecode } from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = new BehaviorSubject<boolean>(this.hasToken());
  isLoggedIn$ = this.isLoggedIn.asObservable();
  userInfo$: any;


  private readonly URL = environment.api;

  constructor(private http: HttpClient, private cookies:CookieService, private router:Router) { }
  sendCredential(email: string,password:string ):Observable<any>
  {
    const user  ={email ,password}
    console.log('user: ', user)
    return this.http.post(`${this.URL}/auth/authenticate`,user,{responseType:'text'})
    .pipe(
      tap((responseOK:string) => {
          this.cookies.set('token', responseOK,  1, '/')  
          this.isLoggedIn.next(true);
          this.router.navigate(['reservation']);       
      })
    )
  }

  getTokenClaims(): any {
    const token = this.cookies.get('token');
    if (token) {
      try {
        const decodedToken = jwtDecode<CustomJwtPayload>(token);
  
        // Asegurarse de que nameString sea siempre un string
        const nameString = decodedToken.name || ''; // Valor predeterminado como string vacío
        this.cookies.set('userName', nameString, 1, '/');
  
        // Convertir el id del usuario a una cadena y asignarlo a otra cookie
        const idUser = String(decodedToken.id || ''); // Convertir el id a String o usar string vacío como predeterminado
        this.cookies.set('userId', idUser, 1, '/');
  
      } catch (Error) {
        console.error('Error decodificando el token:', Error);
        return null;
      }
    }
    return null;
  }
  
  
  logout(): void {
    this.cookies.delete('token', '/');
    this.isLoggedIn.next(false); 
    this.router.navigate(['home']);
  }
  private hasToken(): boolean {
    return !!this.cookies.get('token');
  } 
}
