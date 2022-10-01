import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/sevice/persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent implements OnInit {

  Persona: persona = new persona('', '', '', '', '', '', '');

  constructor(private personas:PersonaService, 
    private activateRouter: ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
    const id=this.activateRouter.snapshot.params['id'];
    console.log(id)
    console.log(persona)

    this.personas.getPersona().subscribe(
      data =>{
        this.Persona = data;
        console.log(data)
      }, err =>{
        Swal.fire({
          icon: 'error',
          text: 'Error al modificar la persona',
        })
        this.router.navigate([''])
      }
    )
  }
  onUpdate(): void{
    const id = this.activateRouter.snapshot.params['id'];
    console.log(id)
    this.personas.editPersona(id, this.Persona).subscribe(
      data =>{
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Persona Actualizada',
          showConfirmButton: false,
          timer: 1500,
        })
        this.router.navigate([''])
      }, err =>{
        Swal.fire({
          icon: 'error',
  
          text: 'error al modificar los datos de la persona!',
        })
        this.router.navigate(['']);
      }
    )
  }
  
  cancelar(): void{
    this.router.navigate([''])
  }

}
