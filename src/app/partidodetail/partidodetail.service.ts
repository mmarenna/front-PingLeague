import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { PartidoDto } from './partidoDto';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable()
export class PartidodetailService {

private urlEndPoint: string ='https://pingpongleague.herokuapp.com/pingpongleague/match/getMatch';
private httpHeaders = new HttpHeaders({'Content-type': 'application/json'})


  constructor(private http: HttpClient) { }




  getPartido(id): Observable<PartidoDto>{
    return this.http.get<PartidoDto>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }

}
