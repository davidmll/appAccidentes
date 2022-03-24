import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Furgoneta } from 'src/app/interfaces/furgoneta';
import { AuthService } from 'src/app/services/auth.service';
import { FurgonetasService } from 'src/app/services/furgonetas.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-show-furgoneta',
  templateUrl: './show-furgoneta.component.html',
  styleUrls: ['./show-furgoneta.component.css']
})
export class ShowFurgonetaComponent implements OnInit {
  furgonetas!: Furgoneta[];

  first = 0;

  rows = 5;

  constructor(private furgonetaService: FurgonetasService,private route:Router,private auth:AuthService) {}

  ngOnInit(): void {


      if (
        this.auth.isAuthenticated() &&
        this.auth.usuario.roles[0] == 'ROLE_ADMIN'
      ) {
        this.furgonetaService
        .getAllFurgonetas()
        .subscribe((data) => (this.furgonetas = data));
      } else {
        this.route.navigate(['/']);
      }
  }

  actualizarFurgoneta(furgoneta:Furgoneta){
    this.route.navigate(['/editarVehiculo'],{
      state:{
        idFurgoneta: furgoneta.idFurgoneta,
        identificacion: furgoneta.identificacion,
        zonas: furgoneta.zonas,
        empresas: furgoneta.empresas
      }
    });
  }

  eliminarFurgoneta(furgoneta: Furgoneta) {
    swal({
      title: 'Estas seguro?',
      text: `Seguro que desea eliminar el vehiculo con identificacion:: ${furgoneta.identificacion}`,
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
        this.furgonetaService
          .deleteFurgoneta(furgoneta.idFurgoneta)
          .subscribe((resp) => {
            this.furgonetas = this.furgonetas.filter(
              (res) => res !== furgoneta
            );
            swal(
              'Registro eliminado.',
              `${furgoneta.identificacion} eliminado con éxito`,
              'success'
            );
            this.route.navigate(['/vehiculos']);
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
    return this.furgonetas
      ? this.first === this.furgonetas.length - this.rows
      : true;
  }

  isFirstPage(): boolean {
    return this.furgonetas ? this.first === 0 : true;
  }

}
