import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skills';
import { SkillsService } from 'src/app/sevice/skills.service';
import { TokenService } from 'src/app/sevice/token.service';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillComponent implements OnInit {
  ski: Skill[] = [];

  constructor(
    private sSkills: SkillsService,
    private tokenService: TokenService
  ) {}
  isLogged = false;

  ngOnInit(): void {
    this.cargarSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  cargarSkills(): void {
    this.sSkills.lista().subscribe((data) => {
      this.ski = data
    })
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
          this.sSkills.delete(id).subscribe(
            (data) => {
              this.cargarSkills();
              Swal.fire('BORRADO', 'Skill ha sido eliminada', 'success');
            },
            (err) => {
              Swal.fire({
                icon: 'error',

                text: 'No se pudo borrar la Skill!',
              });
            }
          );
        }
      });
    }
  }
}
