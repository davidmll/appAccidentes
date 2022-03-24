import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Empresa } from '../interfaces/empresa';
import { Furgoneta } from '../interfaces/furgoneta';
import { Zona } from '../interfaces/zona';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FurgonetasService {
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  urlFurgonetas = environment.apiFurgoneta;
  urlPostFurgonetas = environment.apiFurgonetaPost;

  constructor(private http:HttpClient,private authService:AuthService) { }

  agregarAuthorizationHeader() {
    let token = this.authService.token;
    if (token != null) {
      return this.httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    return this.httpHeaders;
  }
  getAllFurgonetas():Observable<Furgoneta[]>{
    return this.http.get<Furgoneta[]>(this.urlFurgonetas,{headers: this.agregarAuthorizationHeader()});
  }

  getZonas():Observable<Zona[]>{
    return this.http.get<Zona[]>(`${this.urlPostFurgonetas}/zonas`,{headers: this.agregarAuthorizationHeader()});
  }

  getEmpresas():Observable<Empresa[]>{
    return this.http.get<Empresa[]>(`${this.urlPostFurgonetas}/empresas`,{headers: this.agregarAuthorizationHeader()});
  }

  getFurgoneta(id:number):Observable<Furgoneta>{
    return this.http.get<Furgoneta>(`${this.urlPostFurgonetas}/${id}`,{headers: this.agregarAuthorizationHeader()});
  }

  addFurgoneta(furgoneta:Furgoneta):Observable<Furgoneta[]>{
    return this.http.post<Furgoneta[]>(`${this.urlPostFurgonetas}/save`,furgoneta,{headers: this.agregarAuthorizationHeader()});
  }

  deleteFurgoneta(id:number):Observable<Furgoneta[]>{
    return this.http.delete<Furgoneta[]>(`${this.urlPostFurgonetas}/${id}`,{headers: this.agregarAuthorizationHeader()});
  }

  updateFurgoneta(furgoneta:Furgoneta):Observable<Furgoneta[]>{
    return this.http.put<Furgoneta[]>(`${this.urlPostFurgonetas}/update`,furgoneta,{headers: this.agregarAuthorizationHeader()});
  }
}
