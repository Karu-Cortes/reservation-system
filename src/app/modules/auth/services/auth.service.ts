import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable, tap, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userInfo$: any;
  logout() {
    throw new Error('Method not implemented.');
  }

  private readonly URL = environment.api;

  constructor(private http: HttpClient, private cookies:CookieService, private router:Router) { }
  sendCredential(email: string,password:string ):Observable<any>
  {
    const user  ={email ,password}
    return this.http.post(`${this.URL}/auth/authenticate`,user,{responseType:'text'})
    .pipe(
      tap((responseOK:string) => {
          this.cookies.set('token', responseOK,  1, '/')  
          this.router.navigate(['reservation']);       
      })
    )
  }
  
}
