import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccidentesModule } from './components/accidentes/accidentes.module';
import { EmpresasModule } from './components/empresas/empresas.module';
import { FurgonetasModule } from './components/furgonetas/furgonetas.module';
import { HeaderModule } from './components/header/header.module';
import { UsuariosModule } from './components/usuarios/usuarios.module';
import { PagesModule } from './pages/pages.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccidentesModule,
    HeaderModule,
    EmpresasModule,
    FurgonetasModule,
    UsuariosModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
