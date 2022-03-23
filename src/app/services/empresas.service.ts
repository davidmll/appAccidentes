import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Accidente } from '../interfaces/accidente';
import { Empresa } from '../interfaces/empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  urlEmpresas = environment.apiEmpresa;
  urlPostEmpresa = environment.apiEmpresaPost;

  constructor(private http:HttpClient) { }

  getAllEmpresas():Observable<Empresa[]>{
    return this.http.get<Empresa[]>(this.urlEmpresas);
  }

  getAccidentes():Observable<Accidente[]>{
    return this.http.get<Accidente[]>(`${this.urlPostEmpresa}/accidentes`);
  }

  getEmpresa(id:number):Observable<Empresa>{
    return this.http.get<Empresa>(`${this.urlPostEmpresa}/${id}`);
  }

  addEmpresa(empresa:Empresa):Observable<Empresa[]>{
    return this.http.post<Empresa[]>(`${this.urlPostEmpresa}/save`,empresa);
  }

  deleteEmpresa(id:number):Observable<Empresa[]>{
    return this.http.delete<Empresa[]>(`${this.urlPostEmpresa}/${id}`);
  }

  updateEmpresa(empresa:Empresa):Observable<Empresa[]>{
    return this.http.put<Empresa[]>(`${this.urlPostEmpresa}/update`,empresa);
  }
}
