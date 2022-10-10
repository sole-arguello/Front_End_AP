
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Redes } from 'src/app/model/redes';
import { RedesService } from 'src/app/sevice/redes.service';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-editred',
  templateUrl: './editred.component.html',
  styleUrls: ['./editred.component.css'],
})
export class EditredComponent implements OnInit {
  redes: Redes = new Redes('', '');

  constructor(
    private redS: RedesService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.redS.detail(id).subscribe(
      (data) => {
        this.redes = data;
        console.log(data);
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          text: 'Error al modificar Red Social!',
        });
        this.router.navigate(['']);
      }
    );
  }
  onUpdate(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.redS.update(id, this.redes).subscribe(
      (data) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Red Social Actualizada',
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigate(['']);
      },
      (err) => {
        Swal.fire({
          icon: 'error',

          text: 'Error al modificar Red Social!',
        });
        this.router.navigate(['']);
      }
    );
  }
  cancelar(): void {
    this.router.navigate(['']);
  }
}
