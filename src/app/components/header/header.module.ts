import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { PrimeRouteModule } from 'src/app/prime-route/prime-route.module';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';



@NgModule({
  declarations: [
    NavbarComponent,
    NavbarAdminComponent
  ],
  imports: [
    CommonModule,PrimeRouteModule
  ],
  exports:[
    NavbarComponent,
    NavbarAdminComponent
  ]
})
export class HeaderModule { }
