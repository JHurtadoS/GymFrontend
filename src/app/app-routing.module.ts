import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsistenciaComponent } from './Components/tablas/asistencia/asistencia.component';
import { EjerciciosComponent } from './Components/tablas/ejercicios/ejercicios.component';
import { EventoComponent } from './Components/tablas/evento/evento.component';
import { FormularioComponent } from './Components/formulario/formulario.component';
import { HerramientaComponent } from './Components/tablas/herramienta/herramienta.component';
import { PersonaComponent } from './Components/tablas/persona/persona.component';
import { RutinaComponent } from './Components/tablas/rutina/rutina.component';
import { UsuarioComponent } from './Components/tablas/usuario/usuario.component';
import { UsuarioCreateFormComponent } from './Components/Forms/usuario-create-form/usuario-create-form.component';
import { CreateRutinaComponent } from './Components/Forms/create-rutina/create-rutina.component';
import { CreateEjerciciosComponent } from './Components/Forms/create-ejercicios/create-ejercicios.component';
import { CreateHerramientaComponent } from './Components/Forms/create-herramienta/create-herramienta.component';
import { LoginComponent } from './Components/login/login.component';
<<<<<<< HEAD
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

=======
import { AuthGuard } from './guards/auth.guard';
import { PruebaAdminComponent } from './components/prueba-admin/prueba-admin.component';
import { NavBarTitleComponent } from './components/nav-bar-title/nav-bar-title.component';
import { CreateAsistenciaComponent } from './Components/Forms/create-asistencia/create-asistencia.component';
import { CreateEventoComponent } from './Components/Forms/create-evento/create-evento.component';
import { CreatePersonaComponent } from './Components/Forms/create-persona/create-persona.component';
>>>>>>> GymFront/main

const routes: Routes = [
  { path: 'Persona', component: PersonaComponent, canActivate: [AuthGuard] },
  { path: 'Asistencia', component: AsistenciaComponent, canActivate: [AuthGuard] },
  { path: 'Ejercicios', component: EjerciciosComponent, canActivate: [AuthGuard] },
  { path: 'Evento', component: EventoComponent, canActivate: [AuthGuard] },
  { path: 'Herramienta', component: HerramientaComponent, canActivate: [AuthGuard] },
  { path: 'Rutina', component: RutinaComponent, canActivate: [AuthGuard] },
  { path: 'Usuario', component: UsuarioComponent, canActivate: [AuthGuard] },

<<<<<<< HEAD
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
=======
  { path: 'createUser', component: UsuarioCreateFormComponent, canActivate: [AuthGuard] },
  { path: 'createRutina', component: CreateRutinaComponent, canActivate: [AuthGuard] },
  { path: 'createEjercicio', component: CreateEjerciciosComponent, canActivate: [AuthGuard] },
  { path: 'createHerramienta', component: CreateHerramientaComponent, canActivate: [AuthGuard] },

  { path: 'CreateAsistenciaComponent', component: CreateAsistenciaComponent, canActivate: [AuthGuard] },
  { path: 'CreateEventoComponent', component: CreateEventoComponent, canActivate: [AuthGuard] },
  { path: 'CreatePersonaComponent', component: CreatePersonaComponent, canActivate: [AuthGuard] },


  { path: '', component: NavBarTitleComponent },

  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: PruebaAdminComponent, canActivate: [AuthGuard] }

>>>>>>> GymFront/main
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
