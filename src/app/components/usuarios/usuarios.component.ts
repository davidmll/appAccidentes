import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios!: Usuario[];

  constructor() { }

  ngOnInit(): void {
  }

  editarUsuario(){}

  eliminarUsuario(){}

}
