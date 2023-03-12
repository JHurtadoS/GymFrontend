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

const routes: Routes = [

{path:"Persona", component:PersonaComponent},
{path:"Asistencia", component:AsistenciaComponent},
{path:"Ejercicios", component:EjerciciosComponent},
{path:"Evento", component:EventoComponent},
{path:"Formulario", component:FormularioComponent},
{path:"Herramienta", component:HerramientaComponent},
{path:"login", component:LoginComponent},
{path:"Rutina", component:RutinaComponent},
{path:"Usuario", component:UsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
