import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddFurgonetaComponent } from './add-furgoneta/add-furgoneta.component';
import { ShowFurgonetaComponent } from './show-furgoneta/show-furgoneta.component';
import { UpdateFurgonetaComponent } from './update-furgoneta/update-furgoneta.component';
import { PrimeRouteModule } from 'src/app/prime-route/prime-route.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddFurgonetaComponent,
    ShowFurgonetaComponent,
    UpdateFurgonetaComponent
  ],
  imports: [
    CommonModule,PrimeRouteModule,HttpClientModule,ReactiveFormsModule,BrowserAnimationsModule
  ],
  exports:[
    AddFurgonetaComponent,
    ShowFurgonetaComponent,
    UpdateFurgonetaComponent
  ]
})
export class FurgonetasModule { }
