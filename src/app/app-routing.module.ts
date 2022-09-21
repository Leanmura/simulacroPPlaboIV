import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './componentes/peliculas/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './componentes/peliculas/pelicula-listado/pelicula-listado.component';

const routes: Routes = [
  {
    path: "", component: BusquedaComponent
  },
  {
    path: "bienvenido", component: ActorAltaComponent
  },
  {
    path: "busqueda", component: BusquedaComponent
  },
  {
    path: "peliculas/alta", component: PeliculaAltaComponent
  },
  {
    path: "actor/alta", component: ActorAltaComponent
  },
  {
    path: "actor/listado", component: ActorListadoComponent
  },
  {
    path: "peliculas/listado", component: PeliculaListadoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
