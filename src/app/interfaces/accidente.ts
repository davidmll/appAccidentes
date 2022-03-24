import { Estado } from "./estado";
import { Zona } from "./zona";

export class Accidente {
  idAccidente!:number;
  titulo!:string;
  localizacion!:Zona;
  tipo!:Estado;
  asunto!:string;
  fecha!:string;

}
