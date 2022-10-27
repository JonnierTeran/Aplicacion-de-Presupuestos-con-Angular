import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  
  @Input('Presupuesto') Presupuesto:number;
  @Input('Ingresos') Ingresos:number;
  @Input('Egresos') Egresos:number;
  @Input('Porcentaje') Porcentaje:number;
  
  
  constructor() { }

  ngOnInit(): void {
    
    
  }

}
