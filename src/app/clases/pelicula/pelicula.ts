export class Pelicula {
    id: number;
    nombre: string;
    tipo: Tipo;
    fechaEstreno: Date;
    cantPublico: number;
    foto: string;
    constructor(id: number, nombre: string, tipo: Tipo, fechaEstreno: Date, cantPublico: number, foto: string) {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.fechaEstreno = fechaEstreno;
        this.cantPublico = cantPublico;
        this.foto = foto;
    }
}

export enum Tipo {
    'Terror',
    'Comedia',
    'Amor',
    'Otros'
}
