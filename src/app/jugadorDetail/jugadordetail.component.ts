import { Component, OnInit } from '@angular/core';
import { Partido } from './partido';
import { JugadordetailService } from './jugadordetail.service';
import {Router, ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-jugador-detail',
  templateUrl: './jugadordetail.component.html',
  styleUrls: ['./jugadordetail.component.css']
})
export class JugadorDetailComponent implements OnInit {

  private partido: Partido = new Partido()
 partidos: Partido[];
  constructor(private jugadordetailService: JugadordetailService,private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarDetalle()
  }
    cargarDetalle(): void{
      this.activatedRoute.params.subscribe(params =>{
        let email = params['email']
          this.jugadordetailService.getPartidos(email).subscribe( (partido) => this.partidos= partido)
    }
)
}
}
