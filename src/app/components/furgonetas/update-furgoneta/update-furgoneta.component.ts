import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from 'src/app/interfaces/empresa';
import { Zona } from 'src/app/interfaces/zona';
import { AccidentesService } from 'src/app/services/accidentes.service';
import { AuthService } from 'src/app/services/auth.service';
import { FurgonetasService } from 'src/app/services/furgonetas.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-update-furgoneta',
  templateUrl: './update-furgoneta.component.html',
  styleUrls: ['./update-furgoneta.component.css'],
})
export class UpdateFurgonetaComponent implements OnInit {
  dataUpdateFurgonetas: any;

  data: any;

  zonas!: Zona[];

  empresas!: Empresa[];

  constructor(
    private route: Router,
    private furgonetaService: FurgonetasService,
    private activate: ActivatedRoute,
    private auth: AuthService
  ) {
    this.data = this.route.getCurrentNavigation()?.extras.state;
  }

  ngOnInit(): void {
    if (
      this.auth.isAuthenticated() &&
      this.auth.usuario.roles[0] == 'ROLE_ADMIN'
    ) {
      this.furgonetaService.getZonas().subscribe((data) => (this.zonas = data));

      this.activate.paramMap.subscribe((params) => {
        let idZona = +params.get('idZona')!;
        if (idZona) {
          this.furgonetaService
            .getFurgoneta(idZona)
            .subscribe((resp) => (this.dataUpdateFurgonetas = resp));
        }
      });

      this.furgonetaService
        .getEmpresas()
        .subscribe((data) => (this.empresas = data));

      this.activate.paramMap.subscribe((params) => {
        let idempresa = +params.get('idempresa')!;
        if (idempresa) {
          this.furgonetaService
            .getFurgoneta(idempresa)
            .subscribe((resp) => (this.dataUpdateFurgonetas = resp));
        }
      });

      this.dataUpdateFurgonetas = new FormGroup({
        idFurgoneta: new FormControl(
          this.data.idFurgoneta,
          Validators.required
        ),
        identificacion: new FormControl(
          this.data.identificacion,
          Validators.required
        ),
        zonas: new FormControl(this.data.zonas, Validators.required),
        empresas: new FormControl(this.data.empresas, Validators.required),
      });
    } else {
      this.route.navigate(['/']);
    }
  }

  actualizar() {
    this.furgonetaService
      .updateFurgoneta(this.dataUpdateFurgonetas.value)
      .subscribe(
        () => {
          swal(
            'Registro Actualizado:',
            `${this.data.identificacion}`,
            'success'
          );
          this.route.navigate(['/vehiculos']);
        },
        (err) => {
          swal('Error', `${err}`, 'error');
        }
      );
  }
}
