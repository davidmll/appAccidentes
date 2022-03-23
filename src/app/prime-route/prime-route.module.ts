import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { MultiSelectModule } from 'primeng/multiselect';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {PaginatorModule} from 'primeng/paginator';
import {MenubarModule} from 'primeng/menubar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    CalendarModule,
    CascadeSelectModule,
    MultiSelectModule,
    DropdownModule,
    InputTextareaModule,
    PaginatorModule,
    MenubarModule
  ],
  exports: [
    TableModule,
    InputTextModule,
    ButtonModule,
    CalendarModule,
    CascadeSelectModule,
    MultiSelectModule,
    DropdownModule,
    InputTextareaModule,
    PaginatorModule,
    MenubarModule
  ],
})
export class PrimeRouteModule {}
