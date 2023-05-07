import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsistenciaComponent } from './Components/asistencia/asistencia.component';
import { EjerciciosComponent } from './Components/ejercicios/ejercicios.component';
import { EventoComponent } from './Components/evento/evento.component';
import { FormularioComponent } from './Components/formulario/formulario.component';
import { HerramientaComponent } from './Components/herramienta/herramienta.component';
import { LoginComponent } from './Components/login/login.component';
import { PersonaComponent } from './Components/persona/persona.component';
import { RutinaComponent } from './Components/rutina/rutina.component';
import { UsuarioComponent } from './Components/usuario/usuario.component';
import { CreateAsistenciaComponent } from './Components/Forms/create-asistencia/create-asistencia.component';
import { CreateRutinaComponent } from './Components/Forms/create-rutina/create-rutina.component';
import { CreateUsuarioComponent } from './Components/Forms/create-usuario/create-usuario.component';
import { CreatePersonaComponent } from './Components/Forms/create-persona/create-persona.component';
import { CreateHerramientaComponent } from './Components/Forms/create-herramienta/create-herramienta.component';
import { CreateEventoComponent } from './Components/Forms/create-evento/create-evento.component';
import { CreateEjerciciosComponent } from './Components/Forms/create-ejercicios/create-ejercicios.component';


const routes: Routes = [

{path:"Persona", component:PersonaComponent},
{path:"Asistencia", component:AsistenciaComponent},
{path:"Ejercicios", component:EjerciciosComponent},
{path:"Evento", component:EventoComponent},
{path:"Formulario", component:FormularioComponent},
{path:"Herramienta", component:HerramientaComponent},
{path:"login", component:LoginComponent},
{path:"Rutina", component:RutinaComponent},
{path:"Usuario", component:UsuarioComponent},
{path:"create-asistencia", component:CreateAsistenciaComponent},
{path:"create-ejercicios", component:CreateEjerciciosComponent},
{path:"create-evento", component:CreateEventoComponent},
{path:"create-herramienta", component:CreateHerramientaComponent},
{path:"create-persona", component:CreatePersonaComponent},
{path:"create-rutina", component:CreateRutinaComponent},
{path:"create-usuario", component:CreateUsuarioComponent},
{ path: 'login', component: LoginComponent, canActivate: [] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
