import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import { Jugador } from './jugador';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { JUGADOR } from './jugador.json';
@Injectable()
export class listjugadoresService {
  private urlEndPoint: string ='https://pingpongleague.herokuapp.com/pingpongleague/player/getAllPlayersRegisters';

  private httpHeaders = new HttpHeaders({'Content-type': 'application/json'})

  constructor(private http: HttpClient) { }

  getJugadores(): Observable<Jugador[]> {
    //return of(JUGADOR);
    return this.http.get<Jugador[]>(this.urlEndPoint);
  }
//METODO CREAR JUGADORES
create(jugadores: Jugador) : Observable<Jugador>{
  return this.http.post<Jugador>(this.urlEndPoint, jugadores, {headers: this.httpHeaders})
}

}
