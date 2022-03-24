import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeRouteModule } from 'src/app/prime-route/prime-route.module';
import { UsuariosComponent } from './usuarios.component';
import { FormUsuarioComponent } from './form-usuario/form-usuario.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    UsuariosComponent,
    FormUsuarioComponent
  ],
  imports: [
    CommonModule,PrimeRouteModule,FormsModule,RouterModule
  ],
  exports:[
    UsuariosComponent,FormUsuarioComponent
  ]
})
export class UsuariosModule { }
