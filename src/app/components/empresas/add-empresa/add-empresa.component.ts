import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Accidente } from 'src/app/interfaces/accidente';
import { EmpresasService } from 'src/app/services/empresas.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-add-empresa',
  templateUrl: './add-empresa.component.html',
  styleUrls: ['./add-empresa.component.css']
})
export class AddEmpresaComponent implements OnInit {

  dataEmpresa: any;
  accidentes!: Accidente[];

  constructor(
    private empresaService:EmpresasService,
    private activate: ActivatedRoute,
    private route:Router
  ) {}

  ngOnInit(): void {
    this.empresaService.getAccidentes().subscribe(
      (data) => (this.accidentes = data));

    this.activate.paramMap.subscribe((params) => {
      let idAccidente = +params.get('idAccidente')!;
      if (idAccidente) {
        this.empresaService
          .getEmpresa(idAccidente)
          .subscribe((resp) => (this.dataEmpresa = resp));
      }
    });

    this.dataEmpresa= new FormGroup({
      nombre: new FormControl('', Validators.required),
      accidentes: new FormControl('', Validators.required),
    });
  }

  add() {
    const data = this.dataEmpresa.value;
    console.log(data);

    this.empresaService.addEmpresa(data).subscribe(
      () => {
        swal('Nueva empresa',`${data.nombre} creada con éxito`,'success');
        this.route.navigate(['/empresas']);
        console.log(data);

      },
      (err) => {
        swal('Error',`${err}`,'error');
      }
    );
  }

}
