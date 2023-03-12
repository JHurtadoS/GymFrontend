import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';

import { AdminComponent } from './components/pages/admin/admin.component';
import { RutinaComponent } from './components/admin/rutina/rutina.component';
import { AsistenciaComponent } from './components/admin/asistencia/asistencia.component';
import { EjercicioComponent } from './components/admin/ejercicio/ejercicio.component';
import { RutinasEjecicioComponent } from './components/admin/rutinas-ejecicio/rutinas-ejecicio.component';
import { RutinaspersonaComponent } from './components/admin/rutinaspersona/rutinaspersona.component';
import { UsuarioComponent } from './components/admin/usuario/usuario.component';
import { HerramientaComponent } from './components/admin/herramienta/herramienta.component';
import { PersonaComponent } from './components/admin/persona/persona.component';
import { EventoComponent } from './components/admin/evento/evento.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'rutinas', component: RutinaComponent },
      { path: 'asistencia', component: AsistenciaComponent },
      { path: 'ejercicio', component: EjercicioComponent },
      { path: 'persona', component: PersonaComponent },
      { path: 'rutinas-ejercicio', component: RutinasEjecicioComponent },
      { path: 'rutinas-persona', component: RutinaspersonaComponent },
      { path: 'evento', component: EventoComponent },
      { path: 'usuario', component: UsuarioComponent },
      { path: 'herramienta', component: HerramientaComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
