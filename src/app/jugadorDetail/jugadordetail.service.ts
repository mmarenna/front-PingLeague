import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Partido } from './partido';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class JugadordetailService {
private urlEndPoint: string ='https://pingpongleague.herokuapp.com/pingpongleague/match/getMatchsByPlayer';

  private httpHeaders = new HttpHeaders({'Content-type': 'application/json'})

constructor(private http: HttpClient) { }

getPartidos(email): Observable<Partido[]> {

  return this.http.get<Partido[]>(`${this.urlEndPoint}/${email}`, {headers: this.httpHeaders})
}

}
