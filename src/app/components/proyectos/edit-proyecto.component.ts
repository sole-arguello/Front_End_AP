/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}*/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/sevice/proyecto.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css'],
})
export class EditProyectoComponent implements OnInit {
  proyecto: Proyecto = new Proyecto('', '', '', '', '');

  constructor(
    private proyectoS: ProyectoService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.proyectoS.detail(id).subscribe(
      (data) => {
        this.proyecto = data;
      },
      (err) => {
        Swal.fire({
          icon: 'error',

          text: 'Error al modificar el Proyecto!',
        });
        this.router.navigate(['']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.proyectoS.update(id, this.proyecto).subscribe(
      (data) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Proyecto Actualizado',
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigate(['']);
      },
      (err) => {
        Swal.fire({
          icon: 'error',

          text: 'Error al modificar el Proyecto!',
        });
        this.router.navigate(['']);
      }
    );
  }

  cancelar(): void {
    this.router.navigate(['']);
  }
}
