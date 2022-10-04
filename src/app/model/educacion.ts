export class Educacion {
  id?: number;
  imgE: string;
  institucionE: string;
  tituloE: string;
  anioE: number;
  condicionE: string;

  constructor(
    imgE: string,
    institucionE: string,
    tituloE: string,
    anioE: number,
    condicionE: string
  ) {
    this.imgE = imgE;
    this.institucionE = institucionE;
    this.tituloE = tituloE;
    this.anioE = anioE;
    this.condicionE = condicionE;
  }
}
