import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from 'src/app/interfaces/empresa';
import { Zona } from 'src/app/interfaces/zona';
import { AuthService } from 'src/app/services/auth.service';
import { FurgonetasService } from 'src/app/services/furgonetas.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-add-furgoneta',
  templateUrl: './add-furgoneta.component.html',
  styleUrls: ['./add-furgoneta.component.css'],
})
export class AddFurgonetaComponent implements OnInit {
  dataFurgoneta: any;
  zonas!: Zona[];
  empresas!: Empresa[];

  constructor(
    private furgonetaService: FurgonetasService,
    private activate: ActivatedRoute,
    private route: Router,
    private auth: AuthService
  ) {}

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
            .subscribe((resp) => (this.dataFurgoneta = resp));
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
            .subscribe((resp) => (this.dataFurgoneta = resp));
        }
      });

      this.dataFurgoneta = new FormGroup({
        identificacion: new FormControl('', Validators.required),
        zonas: new FormControl('', Validators.required),
        empresas: new FormControl('', Validators.required),
      });
    } else {
      this.route.navigate(['/']);
    }
  }

  add() {
    const data = this.dataFurgoneta.value;
    this.furgonetaService.addFurgoneta(data).subscribe(
      () => {
        swal(
          'Nuevo registro',
          `${data.identificacion} creado con éxito`,
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
