import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/sevice/educacion.service';

import { TokenService } from 'src/app/sevice/token.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit {
  edu: Educacion[] = [];

  imgE: string = '';
  institucionE: string = '';
  tituloE: string = '';
  anioE: number = 0;
  condicionE: string = '';
  constructor(
    private sEducacion: EducacionService,
    private tokenService: TokenService
  ) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  cargarEducacion(): void {
    this.sEducacion.lista().subscribe((data) => {
      this.edu = data;
    });
  }

  delete(id?: number) {
    if (id != undefined) {
      Swal.fire({
        title: 'Esta Seguro',
        text: 'Esta accion es irreversible',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'SI, BORRAR',
      }).then((result) => {
        if (result.value) {
          this.sEducacion.delete(id).subscribe(
            (data) => {
              this.cargarEducacion();
              Swal.fire('BORRADO', 'Educacion ha sido eliminada', 'success');
            },
            (err) => {
              Swal.fire({
                icon: 'error',

                text: 'No se pudo borrar la educacion!',
              });
            }
          );
        }
      });
    }
  }
}
