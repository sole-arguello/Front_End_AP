
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Redes } from 'src/app/model/redes';
import { RedesService } from 'src/app/sevice/redes.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-newred',
  templateUrl: './newred.component.html',
  styleUrls: ['./newred.component.css'],
})
export class NewredComponent implements OnInit {
  imgRed!: string;
  linkRed!: string;

  constructor(private sRed: RedesService, private router: Router) {}

  ngOnInit(): void {}

  onCreate(): void {
    const red = new Redes(this.imgRed, this.linkRed);
    this.sRed.save(red).subscribe(
      (data) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Red Social añadida',
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigate(['']);
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          text: 'No se pudo añadir red social!',
        });
        this.router.navigate(['']);
      }
    );
  }

  cancelar(): void {
    this.router.navigate(['']);
  }
}
