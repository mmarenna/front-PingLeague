import { Component, OnInit } from '@angular/core';
import { Jugadores } from './jugadores';
import { JugadoresService } from './jugadores.service';
@Component({
  selector: 'app-clientes',
  templateUrl: './jugadores.component.html'

})
export class JugadoresComponent implements OnInit {
  private count: number;
  jugadores: Jugadores[];
//DEFINO EL ATRIBUTO Y A LA VEZ INYECTO EL VALOR, INYECCION DE DEPENDENCIAS DEL SERVICE
  constructor(private JugadoresService: JugadoresService) { }

  ngOnInit() {
    //UTILIZO EL SERVICE INYECTADO PREVIAMENTE CON SU METODO GETCLIENTES
  this.JugadoresService.getRanking().subscribe(
    jugadores => this.jugadores = jugadores
  )
}

}
