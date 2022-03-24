import { Component, OnInit } from '@angular/core';
import { AccidentesService } from 'src/app/services/accidentes.service';

@Component({
  selector: 'app-vista-accidentes',
  templateUrl: './vista-accidentes.component.html',
  styleUrls: ['./vista-accidentes.component.css']
})
export class VistaAccidentesComponent implements OnInit {

  accidentes:any;
  mostrar: boolean = false;
  mostrar2: boolean = false;
  mostrar3: boolean = false;

  constructor(private accidenteService:AccidentesService) { }

  ngOnInit(): void {
    this.accidenteService.getAllAccidentes().subscribe(data =>  this.accidentes = data

    );
  }

}
