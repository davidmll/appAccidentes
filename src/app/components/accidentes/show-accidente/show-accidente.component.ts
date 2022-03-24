import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Accidente } from 'src/app/interfaces/accidente';
import { AccidentesService } from 'src/app/services/accidentes.service';
import { AuthService } from 'src/app/services/auth.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-show-accidente',
  templateUrl: './show-accidente.component.html',
  styleUrls: ['./show-accidente.component.css'],
})
export class ShowAccidenteComponent implements OnInit {
  accidentes!: Accidente[];

  first = 0;

  rows = 5;

  constructor(private accidenteService: AccidentesService,private route:Router,private auth:AuthService) {}

  ngOnInit(): void {
        this.accidenteService
        .getAllAccidentes()
        .subscribe((data) => (this.accidentes = data));
  }

  actualizarAccidente(accidente:Accidente){
    this.route.navigate(['/editarAccidente'],{
      state:{
        idAccidente: accidente.idAccidente,
        titulo: accidente.titulo,
        localizacion: accidente.localizacion,
        tipo: accidente.tipo,
        asunto: accidente.asunto,
        fecha: accidente.fecha
      }
    });
  }

  eliminarAccidente(accidente: Accidente) {
    swal({
      title: 'Estas seguro?',
      text: `Seguro que desea eliminar el registro: ${accidente.titulo}`,
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
        this.accidenteService
          .deleteAccidente(accidente.idAccidente)
          .subscribe((resp) => {
            this.accidentes = this.accidentes.filter(
              (res) => res !== accidente
            );
            swal(
              'Registro eliminado.',
              `${accidente.titulo} eliminado con éxito`,
              'success'
            );
            this.route.navigate(['/accidentes']);
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
    return this.accidentes
      ? this.first === this.accidentes.length - this.rows
      : true;
  }

  isFirstPage(): boolean {
    return this.accidentes ? this.first === 0 : true;
  }
}
