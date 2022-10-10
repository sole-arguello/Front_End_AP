import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Redes } from 'src/app/model/redes';
import { RedesService } from 'src/app/sevice/redes.service';
import { TokenService } from 'src/app/sevice/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-logo-ap',
  templateUrl: './logo-ap.component.html',
  styleUrls: ['./logo-ap.component.css'],
})
export class LogoAPComponent implements OnInit {
  isLogged = false;
  red: Redes[] = [];
  imgRed: string = '';
  linkRed: string = '';

  constructor(
    private router: Router,
    private tokenService: TokenService,
    private sRedes: RedesService
  ) {}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    this.cargarRedes();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  cargarRedes(): void {
    this.sRedes.lista().subscribe((data) => {
      this.red = data;
      console.log(data);
    });
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

  login() {
    this.router.navigate(['/login']);
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
          this.sRedes.delete(id).subscribe(
            (data) => {
              this.cargarRedes();
              Swal.fire('BORRADO', 'Red Eliminada', 'success');
            },
            (err) => {
              Swal.fire({
                icon: 'error',

                text: 'No se pudo borrar la experiencia!',
              });
            }
          );
        }
      });
    }
  }
}
