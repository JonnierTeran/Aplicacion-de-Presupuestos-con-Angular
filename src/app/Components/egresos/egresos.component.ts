import { Component, OnInit, Input } from '@angular/core';
import { EgresosModel } from 'src/app/Models/EgresosModel.models.ts';
import { EgresoService } from 'src/app/Services/Egresos.service';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {

  InfoEgresos:EgresosModel[];

  @Input('IngresoT') IngresoT:number;

  constructor(private _EgresoService:EgresoService) {
    this.InfoEgresos= this._EgresoService.Egresos;
   }

  ngOnInit(): void {
  }

  public Eliminar(i:number){
    this._EgresoService.getEliminarEgreso(i);
  }

  public PorcentajeEgreso(i:number):number{
    return this.InfoEgresos[i].getValue() / this.IngresoT;
  }
}
