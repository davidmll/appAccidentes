import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit {

  items!: MenuItem[];

  constructor(public authService:AuthService,private route:Router) {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Accidentes',
        items: [
          {
            label: 'Nuevo Accidente',
            routerLink: ['nuevoAccidente'],
            command:()=>{
            }
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

  logout():void{
    let username = this.authService.usuario.username;
    this.authService.logout();
    swal('Logout',`El usuario ${username} ha cerrado sesión`,'success');

    this.route.navigate(['home'])
  }
}
