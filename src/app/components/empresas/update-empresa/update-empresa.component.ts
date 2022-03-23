import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Accidente } from 'src/app/interfaces/accidente';
import { EmpresasService } from 'src/app/services/empresas.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-update-empresa',
  templateUrl: './update-empresa.component.html',
  styleUrls: ['./update-empresa.component.css']
})
export class UpdateEmpresaComponent implements OnInit {

  dataUpdateEmpresa: any;
  accidentes!: Accidente[];
  data:any;

  constructor(
    private empresaService:EmpresasService,
    private activate: ActivatedRoute,
    private route:Router
  ) {
    this.data = this.route.getCurrentNavigation()?.extras.state;
  }

  ngOnInit(): void {
    this.empresaService.getAccidentes().subscribe(
      (data) => (this.accidentes = data));

    this.activate.paramMap.subscribe((params) => {
      let idempresa = +params.get('idempresa')!;
      if (idempresa) {
        this.empresaService
          .getEmpresa(idempresa)
          .subscribe((resp) => (this.dataUpdateEmpresa = resp));
      }
    });

    this.dataUpdateEmpresa= new FormGroup({
      idempresa: new FormControl(this.data.idempresa,Validators.required),
      nombre: new FormControl(this.data.nombre, Validators.required),
      accidentes: new FormControl(this.data.accidentes, Validators.required),
    });
  }

  actualizar(){
    this.empresaService.updateEmpresa(this.dataUpdateEmpresa.value).subscribe(
      ()=>{
        swal('Registro Actualizado:',`${this.data.titulo}`,'success');
        this.route.navigate(['/accidentes']);
      },
      (err) => {
        swal('Error',`${err}`,'error');
      }
    );
  }

}
