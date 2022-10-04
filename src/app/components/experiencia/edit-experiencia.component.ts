import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/sevice/s-experiencia.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css'],
})
export class EditExperienciaComponent implements OnInit {
  //para edicion
  expLab: Experiencia = new Experiencia('', '', '');//soluciono cambiando el null

  constructor(
    private sExperiencia: SExperienciaService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(
      (data) => {
        this.expLab = data;
      },
      (err) => {
        Swal.fire({
          icon: 'error',

          text: 'Error al modificar experiencia',
        });

        this.router.navigate(['']);
      }
    );
  }
  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.update(id, this.expLab).subscribe(
      (data) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Experiencia laboral actualizada',
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigate(['']);
      },
      (err) => {
        Swal.fire({
          icon: 'error',

          text: 'No se pudo modificar experiencia!',
        });
      }
    );
  }

  cancelar(): void {
    this.router.navigate(['']);
  }
}
