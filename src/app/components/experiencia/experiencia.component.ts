import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/sevice/s-experiencia.service';
import { TokenService } from 'src/app/sevice/token.service';

import Swal from 'sweetalert2';

declare var window: any;

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {
  //ventana modal
  toggle: boolean = true;
  title = 'ang13-bootstrap5-modal-demo';
  formModal: any;

  expe: Experiencia[] = [];
  //Para cargar exp

  img: string = '';
  nombreE: string = '';
  descripcionE: string = '';

  constructor(
    private sExperiencia: SExperienciaService,
    private tokenService: TokenService
  ) {}

  isLogged = false;

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('ventanaexperiencia')
    );

    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe((data) => {
      this.expe = data;

      console.log(data);
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
          this.sExperiencia.delete(id).subscribe(
            (data) => {
              this.cargarExperiencia();
              Swal.fire('BORRADO', 'Experiencia ha sido eliminada', 'success');
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
  openVentana() {
    this.formModal.show();
  }

  onCreate(): void {
    const expe = new Experiencia(this.img, this.nombreE, this.descripcionE);
    this.sExperiencia.save(expe).subscribe(
      (data) => {
        this.exitModal();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Experiencia Laboral añadida',
          showConfirmButton: false,
          timer: 1500,
        });
      },
      (err) => {
        Swal.fire({
          icon: 'error',

          text: 'No se pudo añadir experiencia!',
        });
      }
    );
  }
  exitModal() {
    this.formModal.hide();
  }
}
