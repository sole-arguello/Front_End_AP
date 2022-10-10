import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditredComponent } from './components/logo-ap/editred.component';
import { NewredComponent } from './components/logo-ap/newred.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto.component';
import { EditSkillsComponent } from './components/skills/edit-skills.component';
import { NewSkillsComponent } from './components/skills/new-skills.component';
import { EditarPersonaComponent } from './components/sobre-mi/editar-persona.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },

  { path: 'editper/:id', component: EditarPersonaComponent },
  
  { path: 'editexp/:id', component: EditExperienciaComponent },

  { path: 'nuevaedu', component: NewEducacionComponent },
  { path: 'editedu/:id', component: EditEducacionComponent },
  
  { path: 'nuevaskil', component: NewSkillsComponent },
  { path: 'editskil/:id', component: EditSkillsComponent },

  { path:'nuevapro', component: NewProyectoComponent},
  { path:'editpro/:id', component: EditProyectoComponent},

  { path:'nuevared', component:NewredComponent },
  { path:'editred/:id', component:EditredComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
