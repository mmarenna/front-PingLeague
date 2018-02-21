import { Component, OnInit } from '@angular/core';
import {PartidoDto} from './partidoDto'
import {PartidodetailService} from './partidodetail.service'
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-partido.detail',
  templateUrl: './partidodetail.component.html',
  styleUrls: ['./partidodetail.component.css']
})
export class PartidoDetailComponent implements OnInit {
 partido: PartidoDto;
  constructor(private partidodetailService: PartidodetailService,private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarPartido();
  }
  cargarPartido(): void{

      this.activatedRoute.params.subscribe(params =>{
        let id= params['id']
          this.partidodetailService.getPartido(id).subscribe((partido) => this.partido= partido)
      })


  }

}
