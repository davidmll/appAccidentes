import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { AuthService } from 'src/app/services/auth.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {

  titulo: string = 'Login';

  usuario: Usuario = new Usuario();

  constructor(private authService: AuthService,private router:Router) { }

  ngOnInit(): void {

    if(this.authService.token){
      swal("Aviso","Ya estas autenticado!","info");
      this.router.navigate(['/']);
    }
  }

  create(){
    if(this.usuario.username == null || this.usuario.password == null){
      swal('Error Login','Username o password Vacias!','error');
      return;
    }

    this.authService.login(this.usuario).subscribe(
      response => {
        this.authService.guardarUsuario(response.access_token);
        this.authService.guardarToken(response.access_token);
        let usuario = this.authService.usuario;
        this.router.navigate(['/']);
        swal('Login',`Hola ${usuario.username}, ha iniciado sesión con exito`,'success');
      },
      err =>{
        if(err.status == 400){
          swal('Error login',"Usuario o clave incorrecta!",'error');
        }
      }
    );

  }

}
