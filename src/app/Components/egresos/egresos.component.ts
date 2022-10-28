//Se importan los modulos necesarios
import { Component,  Input } from '@angular/core';

//se importan los modelos necesarios
import { EgresosModel } from 'src/app/Models/EgresosModel.models.ts';
//Se importan los Servicios Necesarios
import { EgresoService } from 'src/app/Services/Egresos.service';

//Se define el decorador del componente
@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})

//Se crea y exporta la clase
export class EgresosComponent {
  
  //Se define un arreglo de tipo ingresoModel
  InfoEgresos:EgresosModel[];
  
  //Se Recibe por medio de input un atributo que trae un valor desde el componente padre
  @Input('IngresoT') IngresoT:number;

  // Se define y/o inicializan los atributos y servicios necesarios
  constructor(private _EgresoService:EgresoService) {
  
    //el arreglo creado obtiene la informacion del arreglo creado en el servicio
    this.InfoEgresos= this._EgresoService.Egresos;
   }

  //metodo para eliminar un registro
  public Eliminar(i:number){
     //Se obtiene el indice y se envia por medio del servicio hacia el metodo eliminar
    this._EgresoService.getEliminarEgreso(i);
  }

  //por medio del valor obtenido por input desde el componente padre Realizamos el metodo que calcula El porcentaje de cada egreso
  //tambien recibe el indice
  public PorcentajeEgreso(i:number):number{
    return this.InfoEgresos[i].getValue() / this.IngresoT;
  }
}
