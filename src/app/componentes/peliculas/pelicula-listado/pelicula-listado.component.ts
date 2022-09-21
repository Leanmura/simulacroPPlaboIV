import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.css']
})
export class PeliculaListadoComponent implements OnInit {
  @Input() peliculas?: any[];
  @Output() seleccionePelicula: EventEmitter<any> = new EventEmitter<any>();
  @Input() tipo?: string;
  constructor() { }

  ngOnInit(): void {
  }

  seleccionarPelicula(pelicula: any) {
    this.seleccionePelicula.emit(pelicula);
  }

}
