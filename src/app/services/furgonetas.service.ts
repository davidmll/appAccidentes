import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Empresa } from '../interfaces/empresa';
import { Furgoneta } from '../interfaces/furgoneta';
import { Zona } from '../interfaces/zona';

@Injectable({
  providedIn: 'root'
})
export class FurgonetasService {

  urlFurgonetas = environment.apiFurgoneta;
  urlPostFurgonetas = environment.apiFurgonetaPost;

  constructor(private http:HttpClient) { }

  getAllFurgonetas():Observable<Furgoneta[]>{
    return this.http.get<Furgoneta[]>(this.urlFurgonetas);
  }

  getZonas():Observable<Zona[]>{
    return this.http.get<Zona[]>(`${this.urlPostFurgonetas}/zonas`);
  }

  getEmpresas():Observable<Empresa[]>{
    return this.http.get<Empresa[]>(`${this.urlPostFurgonetas}/empresas`);
  }

  getFurgoneta(id:number):Observable<Furgoneta>{
    return this.http.get<Furgoneta>(`${this.urlPostFurgonetas}/${id}`);
  }

  addFurgoneta(furgoneta:Furgoneta):Observable<Furgoneta[]>{
    return this.http.post<Furgoneta[]>(`${this.urlPostFurgonetas}/save`,furgoneta);
  }

  deleteFurgoneta(id:number):Observable<Furgoneta[]>{
    return this.http.delete<Furgoneta[]>(`${this.urlPostFurgonetas}/${id}`);
  }

  updateFurgoneta(furgoneta:Furgoneta):Observable<Furgoneta[]>{
    return this.http.put<Furgoneta[]>(`${this.urlPostFurgonetas}/update`,furgoneta);
  }
}
