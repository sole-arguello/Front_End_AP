export class persona {
  id?: number;
  nombre: string;
  apellido: string;
  titulo: string;
  localidad: string;
  sobremi: string;
  img: string;
  banner: string;

  constructor(
    nombre: string,
    apellido: string,
    titulo: string,
    localidad: string,
    sobremi: string,
    img: string,
    banner: string,

  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.titulo = titulo;
    this.localidad = localidad;
    this.sobremi = sobremi;
    this.img = img;
    this.banner = banner;
    
  }
}
