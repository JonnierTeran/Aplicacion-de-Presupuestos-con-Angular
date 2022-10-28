//Se importan los modulos necesarios
import { Component } from '@angular/core';

//se importan los modelos necesarios
import { IngresosModel } from 'src/app/Models/IngresosModel.models.ts';
//Se importan los Servicios Necesarios
import { IngresoService } from 'src/app/Services/Ingresos.service';

//Se define el decorador del componente
@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})

//Se crea y exporta la clase
export class IngresosComponent {
  
  //Se define un arreglo de tipo ingresoModel
  InfoIngresos:IngresosModel[];
  
  // Se define y/o inicializan los atributos y servicios necesarios
  constructor(private _IngresosService:IngresoService) {
  
    //el arreglo creado obtiene la informacion del arreglo creado en el servicio
    this.InfoIngresos = this._IngresosService.Ingresos;
   }

  //metodo para eliminar un registro
  public Eliminar(i:number){
    //Se obtiene el indice y se envia por medio del servicio hacia el metodo eliminar
    this._IngresosService.getEliminarIngreso(i);

  }
}
