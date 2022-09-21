import { Component, OnInit } from '@angular/core';
import { Pelicula, Tipo } from 'src/app/clases/pelicula/pelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  peliculas: any[];
  peliculaSeleccionada: Pelicula | undefined;
  constructor() {
    this.peliculas = [{ "id": 1, "nombre": "I Bought a Vampire Motorcycle", "tipo": "Comedy|Horror", "fechaEstreno": "4/19/2022", "cantPublico": 50, "foto": "https://robohash.org/etquiaid.png?size=50x50&set=set1" },
    { "id": 2, "nombre": "Congress, The", "tipo": "Documentary", "fechaEstreno": "3/12/2022", "cantPublico": 43, "foto": "https://robohash.org/sedhicveritatis.png?size=50x50&set=set1" },
    { "id": 3, "nombre": "My Mother and Her Guest (Sarangbang sonnimgwa eomeoni)", "tipo": "Drama", "fechaEstreno": "1/9/2022", "cantPublico": 16, "foto": "https://robohash.org/voluptateerrorpossimus.png?size=50x50&set=set1" },
    { "id": 4, "nombre": "Gospel of John, The", "tipo": "Drama", "fechaEstreno": "10/7/2021", "cantPublico": 49, "foto": "https://robohash.org/aspernaturquieum.png?size=50x50&set=set1" },
    { "id": 5, "nombre": "First Love (Primo Amore)", "tipo": "Drama|Romance", "fechaEstreno": "7/23/2022", "cantPublico": 10, "foto": "https://robohash.org/autadipisciblanditiis.png?size=50x50&set=set1" },
    { "id": 6, "nombre": "Ken Park", "tipo": "Drama", "fechaEstreno": "7/2/2022", "cantPublico": 83, "foto": "https://robohash.org/autdoloresest.png?size=50x50&set=set1" },
    { "id": 7, "nombre": "First Target", "tipo": "Action", "fechaEstreno": "9/26/2021", "cantPublico": 35, "foto": "https://robohash.org/repellenduscommodiofficiis.png?size=50x50&set=set1" },
    { "id": 8, "nombre": "Wanda Nevada", "tipo": "Comedy|Mystery|Romance|Western", "fechaEstreno": "8/14/2022", "cantPublico": 80, "foto": "https://robohash.org/accusantiummagnammaiores.png?size=50x50&set=set1" },
    { "id": 9, "nombre": "Alien Nation", "tipo": "Crime|Drama|Sci-Fi|Thriller", "fechaEstreno": "12/3/2021", "cantPublico": 69, "foto": "https://robohash.org/numquamvelitconsequatur.png?size=50x50&set=set1" },
    { "id": 10, "nombre": "Quiet American, The", "tipo": "Drama|Thriller|War", "fechaEstreno": "8/13/2022", "cantPublico": 86, "foto": "https://robohash.org/utdignissimosqui.png?size=50x50&set=set1" }]
  }

  ngOnInit(): void {
  }

  tomoPeliculaSeleccionada($event: Pelicula) {
    this.peliculaSeleccionada = $event;
  }
}
