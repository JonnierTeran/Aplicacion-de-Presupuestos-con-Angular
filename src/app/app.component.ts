import { Component } from '@angular/core';
import { EgresosModel } from './Models/EgresosModel.models.ts';
import { IngresosModel } from './Models/IngresosModel.models.ts';
import { EgresoService } from './Services/Egresos.service';

import { IngresoService } from './Services/Ingresos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  /**Arreglos para almacenar los arreglos creados y registrados en los servicio */
  Ingresos: IngresosModel[];
  Egresos: EgresosModel[];

  /**Injectamos los servicios en el constructor e inicializamos los arreglos */
  constructor(
    private _IngresosServices: IngresoService,
    private _EgresosServices: EgresoService
  ) {
    this.Ingresos = this._IngresosServices.Ingresos;
    this.Egresos = this._EgresosServices.Egresos;
  }

  /**Creamos el metodo para Calcular el Ingreso total
   * de todos los Objetos registrados
   */
  public getIngresoTotal(): number {
    let IngresoTotal: number;
    IngresoTotal = 0;
    this.Ingresos.forEach((element) => {
      IngresoTotal += element.getValue();
    });
    return IngresoTotal;
  }

  /**Creamos el metodo para Calcular el Egreso total
   * de todos los Objetos registrados
   */
  public getEgresoTotal(): number {
    let EgresoTotal: number;
    EgresoTotal = 0;
    this.Egresos.forEach((Egresos, index) => {
      EgresoTotal = Egresos.Value;
    });
    return EgresoTotal;
  }

  /**Metodo para Calcular el procentaje Total */
  public getPorcentajeTotalEgreso(): number {
    if (this.getIngresoTotal() > 0) {
      return this.getEgresoTotal() / this.getIngresoTotal();
    } else if (this.getEgresoTotal() > 0) {
      return this.getEgresoTotal() / this.getIngresoTotal();
    } else {
      return 0;
    }
  }

  /**Metodo para calcular el Presupuesto total */
  public getPresupuestoTotal(): number {
    return this.getIngresoTotal() - this.getEgresoTotal();
  }
}
