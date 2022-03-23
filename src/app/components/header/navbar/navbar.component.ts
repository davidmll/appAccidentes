import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  items!: MenuItem[];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Accidentes',
        items: [
          {
            label: 'Nuevo Accidente',
            routerLink: ['nuevoAccidente']
          },
          {
            label: 'Listado Accidentes',
            routerLink: ['accidentes']

          },
        ],
      },
      {
        label: 'Empresas',
        items: [
          {
            label: 'Nueva Empresa',
            routerLink:['nuevaEmpresa']

          },
          {
            label: 'Listado Empresas',
            routerLink:['empresas']
          },
        ],
      },
      {
        label: 'Vehiculos',
        items: [
          {
            label: 'Nuevo Vehiculo',
            routerLink: ['nuevoVehiculo']
          },
          {
            label: 'Listado Vehiculos',
            routerLink: ['vehiculos']
          },
        ],
      },

    ];
  }
}
