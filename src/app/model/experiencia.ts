export class Experiencia {
  id?: number;
  img: string;
  nombreE: string;
  descripcionE: string;

  constructor(img: string, nombreE: string, descripcionE: string) {
    this.img = img;
    this.nombreE = nombreE;
    this.descripcionE = descripcionE;
    console.log(nombreE, descripcionE, img, this.id);
  }
}
