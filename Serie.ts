class Serie {
    id: number;
    nombre: string;
    plataforma: string;
    temporadas: number;
    sinopsis: string;
    link: string;
    imagen: string;
    

    constructor(id: number, nombre: string, plataforma: string, temporadas: number, sinopsis: string, link: string, imagen: string) {
        this.id = id;
        this.nombre = nombre;
        this.plataforma = plataforma;
        this.temporadas = temporadas;
        this.sinopsis = sinopsis;
        this.link = link;
        this.imagen = imagen;
    }
}