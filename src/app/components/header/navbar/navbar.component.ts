import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  items!: MenuItem[];

  constructor(public authService:AuthService,private route:Router) {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        routerLink: ['home']
      },
      {
        label: 'Accidentes',
        items: [
          {
            label: 'Nuevo Accidente',
            routerLink:['nuevoAccidente']

          },
          {
            label: 'Accidentes',
            routerLink:['vistaAccidentes']

          }
        ],
      }
    ];
  }

  logout():void{
    let username = this.authService.usuario.username;
    this.authService.logout();
    swal('Logout',`El usuario ${username} ha cerrado sesión`,'success');

    this.route.navigate(['/'])
  }
}
