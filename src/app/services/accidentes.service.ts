import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Accidente } from '../interfaces/accidente';
import { Zona } from '../interfaces/zona';

@Injectable({
  providedIn: 'root'
})
export class AccidentesService {

  urlAccidentes = environment.apiAccidente;
  urlPostAccidentes = environment.apiAccidentePost;

  constructor(private http:HttpClient) { }

  getAllAccidentes():Observable<Accidente[]>{
    return this.http.get<Accidente[]>(this.urlAccidentes);
  }

  getZonas():Observable<Zona[]>{
    return this.http.get<Zona[]>(`${this.urlPostAccidentes}/zonas`);
  }

  getAccidente(id:number):Observable<Zona>{
    return this.http.get<Zona>(`${this.urlPostAccidentes}/${id}`);
  }

  addAccidente(accidente:Accidente):Observable<Accidente[]>{
    return this.http.post<Accidente[]>(`${this.urlPostAccidentes}/save`,accidente);
  }

  deleteAccidente(id:number):Observable<Accidente[]>{
    return this.http.delete<Accidente[]>(`${this.urlPostAccidentes}/${id}`);
  }

  updateAccidente(accidente:Accidente):Observable<Accidente[]>{
    return this.http.put<Accidente[]>(`${this.urlPostAccidentes}/update`,accidente);
  }
}
