import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Accidente } from '../interfaces/accidente';
import { Empresa } from '../interfaces/empresa';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  urlEmpresas = environment.apiEmpresa;
  urlPostEmpresa = environment.apiEmpresaPost;

  constructor(private http:HttpClient,private authService:AuthService) { }

  agregarAuthorizationHeader() {
    let token = this.authService.token;
    if (token != null) {
      return this.httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    return this.httpHeaders;
  }

  getAllEmpresas():Observable<Empresa[]>{
    return this.http.get<Empresa[]>(this.urlEmpresas,{headers: this.agregarAuthorizationHeader()});
  }

  getAccidentes():Observable<Accidente[]>{
    return this.http.get<Accidente[]>(`${this.urlPostEmpresa}/accidentes`,{headers: this.agregarAuthorizationHeader()});
  }

  getEmpresa(id:number):Observable<Empresa>{
    return this.http.get<Empresa>(`${this.urlPostEmpresa}/${id}`,{headers: this.agregarAuthorizationHeader()});
  }

  addEmpresa(empresa:Empresa):Observable<Empresa[]>{
    return this.http.post<Empresa[]>(`${this.urlPostEmpresa}/save`,empresa,{headers: this.agregarAuthorizationHeader()});
  }

  deleteEmpresa(id:number):Observable<Empresa[]>{
    return this.http.delete<Empresa[]>(`${this.urlPostEmpresa}/${id}`,{headers: this.agregarAuthorizationHeader()});
  }

  updateEmpresa(empresa:Empresa):Observable<Empresa[]>{
    return this.http.put<Empresa[]>(`${this.urlPostEmpresa}/update`,empresa,{headers: this.agregarAuthorizationHeader()});
  }
}
