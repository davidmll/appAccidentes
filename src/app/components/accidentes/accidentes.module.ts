import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowAccidenteComponent } from './show-accidente/show-accidente.component';
import { PrimeRouteModule } from 'src/app/prime-route/prime-route.module';
import { HttpClientModule} from '@angular/common/http';
import { AddAccidenteComponent } from './add-accidente/add-accidente.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateAccidenteComponent } from './update-accidente/update-accidente.component';



@NgModule({
  declarations: [
    ShowAccidenteComponent,
    AddAccidenteComponent,
    UpdateAccidenteComponent
  ],
  imports: [
    CommonModule,PrimeRouteModule,HttpClientModule,ReactiveFormsModule,BrowserAnimationsModule
  ],
  exports:[
    ShowAccidenteComponent,
    AddAccidenteComponent
  ]
})
export class AccidentesModule { }
