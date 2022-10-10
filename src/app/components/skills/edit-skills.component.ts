import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skills';
import { SkillsService } from 'src/app/sevice/skills.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css'],
})
export class EditSkillsComponent implements OnInit {
  
  skill: Skill = new Skill('', '', 0);

  constructor(
    private skillS: SkillsService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.skillS.detail(id).subscribe(
      (data) => {
        this.skill = data;
      },
      (err) => {
        Swal.fire({
          icon: 'error',

          text: 'Se produzco un error!',
        });
        this.router.navigate(['']);
      }
    );
  }
  onUpdate(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.skillS.update(id, this.skill).subscribe(
      (data) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Skill Actualizada',
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigate(['']);
      },
      (err) => {
        Swal.fire({
          icon: 'error',

          text: 'Error al modificar Skill!',
        });
        this.router.navigate(['']);
      }
    );
  }

  cancelar(): void {
    this.router.navigate(['']);
  }
}
