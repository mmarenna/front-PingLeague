import { Component, OnInit } from '@angular/core';
import { Jugadores } from './jugadores'
import {JugadoresService} from './jugadores.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'

})
export class FormComponent implements OnInit {
  private cliente: Jugadores = new Jugadores()
  private titulo: string ="Crear cliente"
  constructor(private clienteService: JugadoresService, private router: Router) { }

  ngOnInit() {
  }

  public create(): void{
    //console.log("Clicked!")
    console.log(this.cliente);
    this.clienteService.create(this.cliente).subscribe(
      response => this.router.navigate(['/clientes'])
    )
  }

}
