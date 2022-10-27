import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './Components/cabecera/cabecera.component';
import { FormRegistroComponent } from './Components/form-registro/form-registro.component';
import { IngresosComponent } from './Components/ingresos/ingresos.component';
import { EgresosComponent } from './Components/egresos/egresos.component';

import { IngresoService } from './Services/Ingresos.service';
import { EgresoService } from './Services/Egresos.service';


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FormRegistroComponent,
    IngresosComponent,
    EgresosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [IngresoService, EgresoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
