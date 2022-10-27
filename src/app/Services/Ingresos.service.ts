/**Importamos el modelo necesitado para crear los objetos en este servicio */
import { IngresosModel } from '../Models/IngresosModel.models.ts';

/**Exportamos La clase del servicio */
export class IngresoService {
  /**Se define un Array de Tipo IngresoModel */
  Ingresos: IngresosModel[];

  /**Inicializamos el Arreglo con 2 objetos de Tipo IngresoModel */
  constructor() {
    this.Ingresos = [
      new IngresosModel('Salario Neto',1000),
      new IngresosModel('Salario ',1000)
    ];
  }

  getEliminarIngreso(indice:number){
    this.Ingresos.splice(indice,1);
  }
  
  getNuevoRegistro(Obj:IngresosModel){
    this.Ingresos.push(Obj)
  }

 
}
