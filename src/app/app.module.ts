import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PagoComponent } from './pago/pago.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { SeleccionMesaComponent } from './seleccion-mesa/seleccion-mesa.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PagoComponent,
    ComentariosComponent,
    CatalogoComponent,
    SeleccionMesaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
