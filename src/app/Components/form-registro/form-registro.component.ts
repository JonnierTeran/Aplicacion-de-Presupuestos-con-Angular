import { Component, OnInit } from '@angular/core';
import { EgresosModel } from 'src/app/Models/EgresosModel.models.ts';
import { IngresosModel } from 'src/app/Models/IngresosModel.models.ts';
import { EgresoService } from 'src/app/Services/Egresos.service';
import { IngresoService } from 'src/app/Services/Ingresos.service';

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css']
})
export class FormRegistroComponent implements OnInit {
  
  Tipo:string;
  DescriptionInput:string;
  ValueInput:number;

  Valid:String;

  constructor(private _IngresoService:IngresoService,
                private _EgresoService:EgresoService) { 
                    this.Tipo= 'ingreso'
                    this.DescriptionInput = ''
                    this.DescriptionInput = ''
                    this.ValueInput=null;
                    this.Valid='Llenar Campos correctamente'
  }

  public TipoOp(event){
    this.Tipo = event.target.value;
  }

  RegistroNuevo(){
    if(this.Tipo === 'ingreso'){
        let Obj = new IngresosModel(this.DescriptionInput , this.ValueInput)
        this._IngresoService.getNuevoRegistro(Obj)
        this.DescriptionInput = ''
        this.ValueInput=null;
        //this.Valid=''
    }else if(this.Tipo === 'egreso'){
        let Obj = new EgresosModel(this.DescriptionInput , this.ValueInput)
        this._EgresoService.getNuevoRegistro(Obj)
        this.DescriptionInput = ''
        this.ValueInput=null;
        //this.Valid=''
    }
    else{
        this.Valid = 'Llenar Campos correctamente'
    }

  }


  ngOnInit(): void {
  }

}
