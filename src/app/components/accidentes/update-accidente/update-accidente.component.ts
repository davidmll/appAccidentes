import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Accidente } from 'src/app/interfaces/accidente';
import { Zona } from 'src/app/interfaces/zona';
import { AccidentesService } from 'src/app/services/accidentes.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-update-accidente',
  templateUrl: './update-accidente.component.html',
  styleUrls: ['./update-accidente.component.css'],
})
export class UpdateAccidenteComponent implements OnInit {
  dataUpdateAccidentes: any;

  data: any;

  zonas!: Zona[];

  constructor(
    private route: Router,
    private accidenteService: AccidentesService,
    private activate: ActivatedRoute
  ) {
    this.data = this.route.getCurrentNavigation()?.extras.state;
  }

  ngOnInit(): void {
    this.accidenteService.getZonas().subscribe((data) => (this.zonas = data));

    this.activate.paramMap.subscribe((params) => {
      let idZona = +params.get('idZona')!;
      if (idZona) {
        this.accidenteService
          .getAccidente(idZona)
          .subscribe((resp) => (this.dataUpdateAccidentes = resp));
      }
    });

    this.dataUpdateAccidentes = new FormGroup({
      idAccidente: new FormControl(this.data.idAccidente, Validators.required),
      titulo: new FormControl(this.data.titulo, Validators.required),
      localizacion: new FormControl(
        this.data.localizacion,
        Validators.required
      ),
      tipo: new FormControl(this.data.tipo, Validators.required),
      asunto: new FormControl(this.data.asunto, Validators.required),
      fecha: new FormControl(this.data.fecha, Validators.required),
    });
  }

  actualizar(){
    this.accidenteService.updateAccidente(this.dataUpdateAccidentes.value).subscribe(
      ()=>{
        swal('Registro Actualizado:',`${this.data.titulo}`,'success');
        this.route.navigate(['/accidentes']);
      },
      (err) => {
        swal('Error',`${err}`,'error');
        console.log(this.dataUpdateAccidentes.value);
      }
    );
  }
}
