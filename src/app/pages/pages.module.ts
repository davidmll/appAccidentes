import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { VistaAccidentesComponent } from './vista-accidentes/vista-accidentes.component';
import { PrimeRouteModule } from '../prime-route/prime-route.module';



@NgModule({
  declarations: [
    HomeComponent,
    VistaAccidentesComponent
  ],
  imports: [
    CommonModule,PrimeRouteModule
  ],
  exports:[
    HomeComponent,
    VistaAccidentesComponent
  ]
})
export class PagesModule { }
