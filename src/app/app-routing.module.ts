import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsistenciaComponent } from './components/asistencia/asistencia.component';
import { EjerciciosComponent } from './components/ejercicios/ejercicios.component';
import { EventoComponent } from './components/evento/evento.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { HerramientaComponent } from './components/herramienta/herramienta.component';
import { LoginComponent } from './components/login/login.component';
import { PersonaComponent } from './components/persona/persona.component';
import { RutinaComponent } from './components/rutina/rutina.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

const routes: Routes = [
  { path: 'Persona', component: PersonaComponent },
  { path: 'Asistencia', component: AsistenciaComponent },
  { path: 'Ejercicios', component: EjerciciosComponent },
  { path: 'Evento', component: EventoComponent },
  { path: 'Formulario', component: FormularioComponent },
  { path: 'Herramienta', component: HerramientaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'Rutina', component: RutinaComponent },
  { path: 'Usuario', component: UsuarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
