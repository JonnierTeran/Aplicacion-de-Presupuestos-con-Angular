//Modulos del proyecto
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//Componentes del Proyecto
import { AppComponent } from './app.component';
import { CabeceraComponent } from './Components/cabecera/cabecera.component';
import { FormRegistroComponent } from './Components/form-registro/form-registro.component';
import { IngresosComponent } from './Components/ingresos/ingresos.component';
import { EgresosComponent } from './Components/egresos/egresos.component';

//servicios del proyecto
import { IngresoService } from './Services/Ingresos.service';
import { EgresoService } from './Services/Egresos.service';

//Declaracion De Componentes del proyecto
@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FormRegistroComponent,
    IngresosComponent,
    EgresosComponent,
  ],
  //Declaracion de modulos del proyecto
  imports: [BrowserModule, FormsModule],
  //Declaracion de los servicios del proyecto
  providers: [IngresoService, EgresoService],
  //Declaracion del Componente principal
  bootstrap: [AppComponent],
})
//Exportamos la clase
export class AppModule {}
