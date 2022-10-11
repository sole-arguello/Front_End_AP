
import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/sevice/proyecto.service';
import { TokenService } from 'src/app/sevice/token.service';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent implements OnInit {
  pro: Proyecto[] = [];

  constructor(
    private sProyecto: ProyectoService,
    private tokenService: TokenService
  ) {}
  isLogged = false;
  ngOnInit(): void {
    this.cargarProyecto();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  cargarProyecto(): void {
    this.sProyecto.lista().subscribe((data) => {
      this.pro = data;
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
          this.sProyecto.delete(id).subscribe(
            (data) => {
              this.cargarProyecto();
              Swal.fire('BORRADO', 'El proyecto ha sido eliminado', 'success');
            },
            (err) => {
              Swal.fire({
                icon: 'error',

                text: 'No se pudo borrar el proyecto!',
              });
            }
          );
        }
      });
    }
  }
}
