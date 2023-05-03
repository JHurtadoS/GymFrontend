import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsistenciaComponent } from './Components/asistencia/asistencia.component';
import { EjerciciosComponent } from './Components/ejercicios/ejercicios.component';
import { EventoComponent } from './Components/evento/evento.component';
import { FormularioComponent } from './Components/formulario/formulario.component';
import { HerramientaComponent } from './Components/herramienta/herramienta.component';
import { PersonaComponent } from './Components/persona/persona.component';
import { RutinaComponent } from './Components/rutina/rutina.component';
import { UsuarioComponent } from './Components/usuario/usuario.component';
import { UsuarioCreateFormComponent } from './Components/usuario-create-form/usuario-create-form.component';
import { CreateRutinaComponent } from './Components/create-rutina/create-rutina.component';
import { CreateEjerciciosComponent } from './components/create-ejercicios/create-ejercicios.component';
import { CreateHerramientaComponent } from './components/create-herramienta/create-herramienta.component';
import { LoginComponent } from './Components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { PruebaAdminComponent } from './components/prueba-admin/prueba-admin.component';

const routes: Routes = [
  { path: 'Persona', component: PersonaComponent, canActivate: [AuthGuard] },
  { path: 'Asistencia', component: AsistenciaComponent, canActivate: [AuthGuard] },
  { path: 'Ejercicios', component: EjerciciosComponent, canActivate: [AuthGuard] },
  { path: 'Evento', component: EventoComponent, canActivate: [AuthGuard] },
  { path: 'Herramienta', component: HerramientaComponent, canActivate: [AuthGuard] },
  { path: 'Rutina', component: RutinaComponent, canActivate: [AuthGuard] },
  { path: 'Usuario', component: UsuarioComponent, canActivate: [AuthGuard] },
  { path: 'createUser', component: UsuarioCreateFormComponent, canActivate: [AuthGuard] },
  { path: 'createRutina', component: CreateRutinaComponent, canActivate: [AuthGuard] },
  { path: 'createEjercicio', component: CreateEjerciciosComponent, canActivate: [AuthGuard] },
  { path: 'createHerramienta', component: CreateHerramientaComponent, canActivate: [AuthGuard] },

  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: PruebaAdminComponent, canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
