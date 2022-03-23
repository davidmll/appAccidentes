import { Empresa } from "./empresa";
import { Zona } from "./zona";

export class Furgoneta{
  idFurgoneta!:number;
  identificacion!:string;
  zonas!:Zona;
  empresas!:Empresa;
}
