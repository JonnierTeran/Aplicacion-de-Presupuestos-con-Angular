/**Import de los modulos necesarios */
import { Component } from '@angular/core';
/**Import de los modelos necesarios */
import { EgresosModel } from 'src/app/Models/EgresosModel.models.ts';
import { IngresosModel } from 'src/app/Models/IngresosModel.models.ts';
/**Import de los servicios Necesarios */
import { EgresoService } from 'src/app/Services/Egresos.service';
import { IngresoService } from 'src/app/Services/Ingresos.service';

//Se define el decorador Del componente 
@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css'],
})

//Se crea y exporta la clase
export class FormRegistroComponent {

  //Definicion de atributos
  //Tipo de Accion (+/-)
  Tipo: string;
  //Descripcion de la accion (+/-)
  DescriptionInput: string;
  //Valor de la accion (+/-)
  ValueInput: number;

 
  //Inicializamos nuestros atributos y declaramos nuestros servicios a implementar
  constructor(
    private _IngresoService: IngresoService,
    private _EgresoService: EgresoService
  ) {
    this.Tipo = 'ingreso';
    this.DescriptionInput = '';
    this.ValueInput = null;
    
  }

  //Leemos el evento change y guardamos el dato obtenido
  //y lo asignamos a la variable Tipo
  public TipoOp(event):void {
    this.Tipo = event.target.value;
  }

  //Metodo de Registro
  RegistroNuevo(form):void {
    /**Validamos la Variable tipo
     * Si es de tipo Ingreso Aplica el registro en los Ingresos
     * Creando un nuevo objeto y enviandolo al metodo de registro 
     * del servicio de ingresos
     * y por ultimo Resetea el formulario
    */
    if (this.Tipo === 'ingreso') {
      let Obj = new IngresosModel(this.DescriptionInput, this.ValueInput);
      this._IngresoService.getNuevoRegistro(Obj);
      form.reset();
    }
    
    /**Validamos la Variable tipo
     * Si es de tipo Egreso Aplica el registro en los Egresos
     * Creando un nuevo objeto y enviandolo al metodo de registro 
     * del servicio de Egresos
     * y por ultimo Resetea el formulario
    */
    if (this.Tipo === 'egreso') {
      let Obj = new EgresosModel(this.DescriptionInput, this.ValueInput);
      this._EgresoService.getNuevoRegistro(Obj);
      form.reset();
    } 

  }

}
