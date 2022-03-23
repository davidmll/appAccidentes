import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { PrimeRouteModule } from 'src/app/prime-route/prime-route.module';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,PrimeRouteModule
  ],
  exports:[
    NavbarComponent
  ]
})
export class HeaderModule { }
