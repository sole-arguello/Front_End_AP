export class Skill {
  id?: number;
  imgS: string;
  nombreS: string;
  porcentajeS: number;

  constructor(imgS: string, nombreS: string, porcentajeS: number) {
    this.imgS = imgS;
    this.nombreS = nombreS;
    this.porcentajeS = porcentajeS;
  }
}
