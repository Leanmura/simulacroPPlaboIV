import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {
  @Input() peliculas?: Pelicula[];
  @Output() seleccionePelicula: EventEmitter<Pelicula> = new EventEmitter<Pelicula>();
  @Output() pulseLista: EventEmitter<any> = new EventEmitter<any>();
  tipo?: string = "Tabla";
  peliculaSeleccionada?: Pelicula;

  constructor() { }

  ngOnInit(): void {
  }

  pulsarLista() {
    if (this.tipo == "Tabla") this.tipo = "Lista";
    else this.tipo = "Tabla";
    this.pulseLista.emit(this.tipo);
  }

  seleccionarPelicula(pelicula: Pelicula) {
    this.seleccionePelicula.emit(pelicula)
  }
}
