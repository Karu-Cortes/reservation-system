import { Component, OnInit } from '@angular/core';
import { AuthService } from '@modules/auth/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean = false;
  fullName?: string;
  initials?: string;
  private userInfoSubscription?: Subscription;
  private authSubscription?: Subscription;

  
  mainMenu: {
    defaulOptions: Array<any>;
    accessLink: Array<any>;
  } = { defaulOptions: [], accessLink: [] };

  customOptions: Array<any> = [];

  constructor(public authService: AuthService){}

  //ciclo inicial llamado de servicios o url
  ngOnInit(): void {
    
    this.authSubscription = this.authService.isLoggedIn$.subscribe(
      (loggedIn) => {
        this.isLoggedIn = loggedIn;
      }
    );

    this.mainMenu.defaulOptions = [
      {
        name: 'Home',
        icon: 'uil uil-home',
        router: ['/'],
      },

      {
        name: 'reservas',
        icon: 'uil uil-clipboard-notes',
        router: ['/',"reservation"],
      },
      {
        name: 'Spas afiliados',
        icon: 'uil uil-yin-yang',
        router: ['/',"spa"],
      },

      {
        name: 'Nosotros',
        icon: 'uil uil-grin-tongue-wink-alt',
        router: ['/',"about-us"],
      },
    ];
  }

  ngOnDestroy(): void {
    // Limpieza al destruir el componente
    this.authSubscription?.unsubscribe();
  }
}
