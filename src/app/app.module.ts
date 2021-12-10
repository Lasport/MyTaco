import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Rutas

import { APP_ROUTING } from './app-routing.module';


//Components

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PagoComponent } from './components/pago/pago.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { PantallaInicioComponent } from './components/pantalla-inicio/pantalla-inicio.component';
import { PantallaPedidoComponent } from './components/pantalla-pedido/pantalla-pedido.component';
import { LoginComponent } from './components/login/login.component';
import { SeleccionMesaComponent } from './components/seleccion-mesa/seleccion-mesa.component';
import { CarritoComponent } from './components/carrito/carrito.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PagoComponent,
    ComentariosComponent,
    CatalogoComponent,
    SeleccionMesaComponent,
    PantallaInicioComponent,
    PantallaPedidoComponent,
    LoginComponent,
    CarritoComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
