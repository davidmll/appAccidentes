import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmpresaComponent } from './add-empresa/add-empresa.component';
import { ShowEmpresaComponent } from './show-empresa/show-empresa.component';
import { UpdateEmpresaComponent } from './update-empresa/update-empresa.component';
import { PrimeRouteModule } from 'src/app/prime-route/prime-route.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddEmpresaComponent,
    ShowEmpresaComponent,
    UpdateEmpresaComponent
  ],
  imports: [
    CommonModule,PrimeRouteModule,HttpClientModule,ReactiveFormsModule,BrowserAnimationsModule
  ],
  exports:[
    AddEmpresaComponent,
    ShowEmpresaComponent,
    UpdateEmpresaComponent
  ]
})
export class EmpresasModule { }
