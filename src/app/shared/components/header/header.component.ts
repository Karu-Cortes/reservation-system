import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  mainMenu: {
    defaulOptions: Array<any>;
    accessLink: Array<any>;
  } = { defaulOptions: [], accessLink: [] };

  customOptions: Array<any> = [];

  ConstructorParameters() {}

  //ciclo inicial llamado de servicios o url
  ngOnInit(): void {
    this.mainMenu.defaulOptions = [
      {
        name: 'Home',
        icon: 'uil uil-home',
        router: ['/'],
      },

      {
        name: 'reservas',
        icon: 'uil uil-clipboard-notes',
        router: ['/'],
      },

      {
        name: 'Información Spa afiliados',
        icon: 'uil uil-yin-yang',
        router: ['/'],
      },

      {
        name: 'Nosotros',
        icon: 'uil uil-grin-tongue-wink-alt',
        router: ['/'],
      },
    ];

    this.mainMenu.accessLink = [
      {
        name: 'Iniciar Sesión',
      },
      { name: 'Registrarse' },
    ];
  }
}
