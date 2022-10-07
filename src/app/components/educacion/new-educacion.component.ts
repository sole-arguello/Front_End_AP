import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/sevice/educacion.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css'],
})
export class NewEducacionComponent implements OnInit {
  imgE!: string;
  tituloE!: string;
  condicionE!: string;
  anioE!: number;
  institucionE!: string;

  constructor(private sEducacion: EducacionService, private router: Router) {}

  ngOnInit(): void {}

  onCreate(): void {
    const expe = new Educacion(
      this.imgE,
      this.institucionE,
      this.tituloE,
      this.anioE,
      this.condicionE
    );
    this.sEducacion.save(expe).subscribe(
      (data) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Educacion añadida',
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigate(['']);
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          text: 'No se pudo añadir educacion!',
        });
        this.router.navigate(['']);
      }
    );
  }
  cancelar(): void {
    this.router.navigate(['']);
  }
}
