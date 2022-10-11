
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/sevice/proyecto.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css'],
})
export class NewProyectoComponent implements OnInit {
  imgP!: string;
  nombreP!: string;
  descripcionP!: string;
  paginaP!: string;
  repositorioP!: string;

  constructor(private sProyecto: ProyectoService, private router: Router) {}

  ngOnInit(): void {}

  onCreate(): void {
    const expe = new Proyecto(
      this.imgP,
      this.nombreP,
      this.descripcionP,
      this.paginaP,
      this.repositorioP
    );
    this.sProyecto.save(expe).subscribe(
      (data) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Proyecto Añadido',
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigate(['']);
      },
      (err) => {
        Swal.fire({
          icon: 'error',

          text: 'No se pudo añadir el proyecto!',
        });
        this.router.navigate(['']);
      }
    );
  }
  cancelar(): void {
    this.router.navigate(['']);
  }
}
