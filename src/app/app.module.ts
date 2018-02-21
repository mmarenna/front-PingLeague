import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent} from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { JugadoresComponent } from './jugadores/jugadores.component';
import { JugadoresService } from './jugadores/jugadores.service';
import {listjugadoresService} from './listjugadores/listjugadores.service';
import {JugadordetailService} from './jugadorDetail/jugadordetail.service';
import {PartidodetailService} from './partidodetail/partidodetail.service';
import { HttpClientModule } from '@angular/common/http'
//IMPORTO LO NECESARIO PARA HACER EL RUTEO
import  {RouterModule, Routes} from '@angular/router';
//import { FormComponent } from './jugadores/form.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ListjugadoresComponent } from './listjugadores/listjugadores.component';
import { JugadorDetailComponent } from './jugadorDetail/jugadordetail.component';
import { PartidoDetailComponent } from './partidodetail/partidodetail.component';
// EN ESTA CONSTANTE DECLARO TODOS LOS DISTINTOS RUTEOS
const routes: Routes=[
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'listjugadores', component: ListjugadoresComponent},
  {path: 'jugadores', component: JugadoresComponent},
  {path: 'home', component: HomeComponent},
  {path: 'jugador/detalle/:email', component: JugadorDetailComponent},
  {path: 'partido/detalle/:id', component: PartidoDetailComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    JugadoresComponent,
    ListjugadoresComponent,
    JugadorDetailComponent,
    PartidoDetailComponent
    //FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    //IMPORTO EL MODULO DE RUTEO Y LE PASO LA CONSTANTE QUE SETEE ANTES
    RouterModule.forRoot(routes)
  ],
  providers: [JugadoresService,listjugadoresService,JugadordetailService,PartidodetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
