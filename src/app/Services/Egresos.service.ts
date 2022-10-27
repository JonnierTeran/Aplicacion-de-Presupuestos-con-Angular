import { EgresosModel } from '../Models/EgresosModel.models.ts';

export class EgresoService {
  Egresos: EgresosModel[];

  constructor() {
    this.Egresos = [
      new EgresosModel('Ropa', 200),
    ];
  }

  getEliminarEgreso(indice:number){
    this.Egresos.splice(indice,1);
  }
  getNuevoRegistro(Obj:EgresosModel){
    this.Egresos.push(Obj)
  }
}
