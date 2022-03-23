import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAccidenteComponent } from './components/accidentes/add-accidente/add-accidente.component';
import { ShowAccidenteComponent } from './components/accidentes/show-accidente/show-accidente.component';
import { UpdateAccidenteComponent } from './components/accidentes/update-accidente/update-accidente.component';
import { AddEmpresaComponent } from './components/empresas/add-empresa/add-empresa.component';
import { ShowEmpresaComponent } from './components/empresas/show-empresa/show-empresa.component';
import { UpdateEmpresaComponent } from './components/empresas/update-empresa/update-empresa.component';
import { AddFurgonetaComponent } from './components/furgonetas/add-furgoneta/add-furgoneta.component';
import { ShowFurgonetaComponent } from './components/furgonetas/show-furgoneta/show-furgoneta.component';
import { UpdateFurgonetaComponent } from './components/furgonetas/update-furgoneta/update-furgoneta.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path:'accidentes',
    component: ShowAccidenteComponent
  },
  {
    path:'nuevoAccidente',
    component: AddAccidenteComponent
  },
  {
    path:'editarAccidente',
    component: UpdateAccidenteComponent
  },
  {
    path:'empresas',
    component: ShowEmpresaComponent
  },
  {
    path:'nuevaEmpresa',
    component: AddEmpresaComponent
  },
  {
    path:'editarEmpresa',
    component: UpdateEmpresaComponent
  },
  {
    path:'vehiculos',
    component: ShowFurgonetaComponent
  },
  {
    path:'nuevoVehiculo',
    component: AddFurgonetaComponent
  },
  {
    path:'editarVehiculo',
    component: UpdateFurgonetaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
