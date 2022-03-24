import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Estado } from 'src/app/interfaces/estado';
import { Zona } from 'src/app/interfaces/zona';
import { AccidentesService } from 'src/app/services/accidentes.service';
import swal from 'sweetalert2';


export enum Tipo{
  aprobado = 'aprobado',
  pendiente = 'pendiente',
  cancelado = 'cancelado'
}
@Component({
  selector: 'app-add-accidente',
  templateUrl: './add-accidente.component.html',
  styleUrls: ['./add-accidente.component.css'],
})
export class AddAccidenteComponent implements OnInit {
  dataAccidente: any;
  zonas!: Zona[];
  estados!:Estado[];

  constructor(
    private accidenteService: AccidentesService,
    private activate: ActivatedRoute,
    private route:Router
  ) {}

  ngOnInit(): void {

    this.accidenteService.getZonas().subscribe((data) => (this.zonas = data));
    this.accidenteService.getEstados().subscribe(res => this.estados = res);

    this.activate.paramMap.subscribe((params) => {
      let idZona = +params.get('idZona')!;
      if (idZona) {
        this.accidenteService
          .getAccidente(idZona)
          .subscribe((resp) => (this.dataAccidente = resp));
      }
    });

    this.activate.paramMap.subscribe((params) => {
      let idEstado = +params.get('idEstado')!;
      if (idEstado) {
        this.accidenteService
          .getAccidente(idEstado)
          .subscribe((resp) => (this.dataAccidente = resp));
      }
    });

    this.dataAccidente = new FormGroup({
      titulo: new FormControl('', Validators.required),
      localizacion: new FormControl('', Validators.required),
      tipo: new FormControl('', Validators.required),
      asunto: new FormControl('', Validators.required),
      fecha: new FormControl('', Validators.required),
    });
  }

  add() {
    const data = this.dataAccidente.value;
    this.accidenteService.addAccidente(data).subscribe(
      () => {
        swal('Nuevo registro',`${data.titulo} creado con éxito`,'success');
        this.route.navigate(['/home']);
      },
      (err) => {
        swal('Error',`${err}`,'error');
      }
    );
  }
}
