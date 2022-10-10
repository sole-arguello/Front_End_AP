export class Proyecto {
  id?: number;
  imgP: string;
  nombreP: string;
  descripcionP: string;
  paginaP: string;
  repositorioP: string;

  constructor(
    imgP: string,
    nombreP: string,
    descripcionP: string,
    paginaP: string,
    repositorioP: string
  ) {
    this.imgP = imgP;
    this.nombreP = nombreP;
    this.descripcionP = descripcionP;
    this.paginaP = paginaP;
    this.repositorioP = repositorioP;
  }
}
