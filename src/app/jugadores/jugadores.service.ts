import { Injectable } from '@angular/core';
import { JUGADORES } from './jugadores.json';
import { Jugadores } from './jugadores';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class JugadoresService {
  private urlEndPoint: string ='https://pingpongleague.herokuapp.com/pingpongleague/ranking/getTournamentRanking';

  private httpHeaders = new HttpHeaders({'Content-type': 'application/json'})

  constructor(private http: HttpClient) { }
//METODO GET CLIENTES
  getRanking(): Observable<Jugadores[]> {
    //return of(JUGADORES);
    //OPCION 1
    return this.http.get<Jugadores[]>(this.urlEndPoint);
    //OPCION 2
    // return this.http.get(this.urlEndPoint).pipe(
    //map((response) => response as Cliente[])
    //)
  }
//METODO CREAR JUGADORES
create(jugadores: Jugadores) : Observable<Jugadores>{
  return this.http.post<Jugadores>(this.urlEndPoint, jugadores, {headers: this.httpHeaders})
}



}
