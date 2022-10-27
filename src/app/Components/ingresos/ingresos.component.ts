import { Component, OnInit } from '@angular/core';
import { IngresosModel } from 'src/app/Models/IngresosModel.models.ts';
import { IngresoService } from 'src/app/Services/Ingresos.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {
  
  InfoIngresos:IngresosModel[];
  constructor(private _IngresosService:IngresoService) {

    this.InfoIngresos = this._IngresosService.Ingresos;
   }

  ngOnInit(): void {

  }

  public Eliminar(i:number){
    this._IngresosService.getEliminarIngreso(i);

  }

}
