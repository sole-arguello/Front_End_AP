import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/sevice/persona.service';
import { TokenService } from 'src/app/sevice/token.service';
import { persona } from '../../model/persona.model';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css'],
})
export class SobreMiComponent implements OnInit {
  persona: persona = new persona('', '', '', '', '', '', '');

  constructor(
    public personaService: PersonaService,
    private tokenService: TokenService
  ) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarPersona();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarPersona(): void {
    this.personaService.getPersona().subscribe((data) => {
      this.persona = data;
      console.log(data);
    });
  }
}
