import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skills';
import { SkillsService } from 'src/app/sevice/skills.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-skills',
  templateUrl: './new-skills.component.html',
  styleUrls: ['./new-skills.component.css'],
})
export class NewSkillsComponent implements OnInit {
  imgS!: string;
  nombreS!: string;
  porcentajeS!: number;

  constructor(private sSkill: SkillsService, private router: Router) {}

  ngOnInit(): void {}

  onCreate(): void {
    const skil = new Skill(this.imgS, this.nombreS, this.porcentajeS);
    this.sSkill.save(skil).subscribe(
      (data) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Skill añadida',
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigate(['']);
      },
      (err) => {
        Swal.fire({
          icon: 'error',

          text: 'No se pudo añadir la Skill!',
        });
        this.router.navigate(['']);
      }
    );
  }

  cancelar(): void {
    this.router.navigate(['']);
  }
}
