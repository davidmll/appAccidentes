import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Zona } from 'src/app/interfaces/zona';
import { AccidentesService } from 'src/app/services/accidentes.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-add-accidente',
  templateUrl: './add-accidente.component.html',
  styleUrls: ['./add-accidente.component.css'],
})
export class AddAccidenteComponent implements OnInit {
  dataAccidente: any;
  zonas!: Zona[];

  constructor(
    private accidenteService: AccidentesService,
    private activate: ActivatedRoute,
    private route:Router
  ) {}

  ngOnInit(): void {
    this.accidenteService.getZonas().subscribe((data) => (this.zonas = data));

    this.activate.paramMap.subscribe((params) => {
      let idZona = +params.get('idZona')!;
      if (idZona) {
        this.accidenteService
          .getAccidente(idZona)
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
        this.route.navigate(['/accidentes']);
      },
      (err) => {
        swal('Error',`${err}`,'error');
        console.log(this.dataAccidente.value);
      }
    );
  }
}
