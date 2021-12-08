import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PagoComponent } from './pago/pago.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { PantallaInicioComponent } from './pantalla-inicio/pantalla-inicio.component';
import { PantallaPedidoComponent } from './pantalla-pedido/pantalla-pedido.component';
import { LoginComponent } from './login/login.component';i



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PagoComponent,
    ComentariosComponent,
    CatalogoComponent,
    SeleccionMesaComponent,
    PantallaInicioComponent,
    PantallaPedidoComponent
=======
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
