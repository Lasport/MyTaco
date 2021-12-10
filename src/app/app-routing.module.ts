import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppModule } from './app.module';
import { CarritoComponent } from './components/carrito/carrito.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PagoComponent } from './components/pago/pago.component';
import { PantallaInicioComponent } from './components/pantalla-inicio/pantalla-inicio.component';
import { PantallaPedidoComponent } from './components/pantalla-pedido/pantalla-pedido.component';
import { SeleccionMesaComponent } from './components/seleccion-mesa/seleccion-mesa.component';



const APP_ROUTES: Routes = [

  { path:'carrito', component:CarritoComponent },
  { path:'catalogo', component:CatalogoComponent },
  { path:'comentarios', component:ComentariosComponent },
  { path:'login', component:LoginComponent },
  { path:'nav-bar', component:NavBarComponent },
  { path:'pago', component:PagoComponent },
  { path:'pantalla-inicio', component:PantallaInicioComponent },
  { path:'pantalla-pedido', component:PantallaPedidoComponent },
  { path:'seleccion-mesa', component:SeleccionMesaComponent },
  { path:'**',pathMatch:'full',redirectTo:'pantalla-inicio' }

];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true});
