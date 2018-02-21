import { Component, OnInit } from '@angular/core';
import { Jugador } from './jugador';
import { listjugadoresService } from './listjugadores.service';
@Component({
  selector: 'app-listjugadores',
  templateUrl: './listjugadores.component.html'

})
export class ListjugadoresComponent implements OnInit {
  jugadores: Jugador[];
  constructor(private JugadorService: listjugadoresService) { }

  ngOnInit() {
    this.JugadorService.getJugadores().subscribe(
      jugadores => this.jugadores = jugadores
    )
  }

}
