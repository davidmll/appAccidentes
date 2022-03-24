import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Accidente } from '../interfaces/accidente';
import { Estado } from '../interfaces/estado';
import { Zona } from '../interfaces/zona';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AccidentesService {

  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  urlAccidentes = environment.apiAccidente;
  urlPostAccidentes = environment.apiAccidentePost;

  constructor(private http:HttpClient,private authService:AuthService) { }

  agregarAuthorizationHeader() {
    let token = this.authService.token;
    if (token != null) {
      return this.httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    return this.httpHeaders;
  }

  getAllAccidentes():Observable<Accidente[]>{
    return this.http.get<Accidente[]>(this.urlAccidentes);
  }

  getZonas():Observable<Zona[]>{
    return this.http.get<Zona[]>(`${this.urlPostAccidentes}/zonas`);
  }

  getEstados():Observable<Estado[]>{
    return this.http.get<Estado[]>(`${this.urlPostAccidentes}/estados`);
  }

  getAccidente(id:number):Observable<Zona>{
    return this.http.get<Zona>(`${this.urlPostAccidentes}/${id}`,{headers: this.agregarAuthorizationHeader()});
  }

  addAccidente(accidente:Accidente):Observable<Accidente[]>{
    return this.http.post<Accidente[]>(`${this.urlPostAccidentes}/save`,accidente);
  }

  deleteAccidente(id:number):Observable<Accidente[]>{
    return this.http.delete<Accidente[]>(`${this.urlPostAccidentes}/${id}`,{headers: this.agregarAuthorizationHeader()});
  }

  updateAccidente(accidente:Accidente):Observable<Accidente[]>{
    return this.http.put<Accidente[]>(`${this.urlPostAccidentes}/update`,accidente,{headers: this.agregarAuthorizationHeader()});
  }
}
