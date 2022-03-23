import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empresa } from 'src/app/interfaces/empresa';
import { EmpresasService } from 'src/app/services/empresas.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-show-empresa',
  templateUrl: './show-empresa.component.html',
  styleUrls: ['./show-empresa.component.css']
})
export class ShowEmpresaComponent implements OnInit {

  empresas!: Empresa[];

  first = 0;

  rows = 5;

  constructor(private empresaService:EmpresasService,private route:Router) {}

  ngOnInit(): void {
    this.empresaService.getAllEmpresas().subscribe(
      data => {this.empresas = data,console.log(data);
      }
    );

    console.log(this.empresas)


  }

  actualizarEmpresa(empresa:Empresa){
    this.route.navigate(['/editarEmpresa'],{
      state:{
        idEmpresa: empresa.idempresa,
        nombre: empresa.nombre,
        accidentes: empresa.accidentes
      }
    });
    console.log(empresa);

  }

  eliminarEmpresa(empresa: Empresa) {
    swal({
      title: 'Estas seguro?',
      text: `Seguro que desea eliminar la empresa?: ${empresa.nombre}`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      confirmButtonClass: 'btn btn-warning ',
      cancelButtonClass: 'btn btn-danger mx-4',
      reverseButtons: true,
      buttonsStyling: false,
    }).then((resul) => {
      if (resul.value) {
        this.empresaService
          .deleteEmpresa(empresa.idempresa)
          .subscribe((resp) => {
            this.empresas = this.empresas.filter(
              (res) => res !== empresa
            );
            swal(
              'Empresa eliminada.',
              `${empresa.nombre} eliminado con éxito`,
              'success'
            );
            this.route.navigate(['/empresas']);
          });
      }
    });
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.empresas
      ? this.first === this.empresas.length - this.rows
      : true;
  }

  isFirstPage(): boolean {
    return this.empresas ? this.first === 0 : true;
  }

}
