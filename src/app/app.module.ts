import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './Components/formulario/formulario.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AsistenciaComponent } from './Components/asistencia/asistencia.component';
import { EjerciciosComponent } from './Components/ejercicios/ejercicios.component';
import { EventoComponent } from './Components/evento/evento.component';
import { PersonaComponent } from './Components/persona/persona.component';
import { UsuarioComponent } from './Components/usuario/usuario.component';
import { HerramientaComponent } from './Components/herramienta/herramienta.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './Components/table/table.component';
import { CreateAsistenciaComponent } from './Components/Forms/create-asistencia/create-asistencia.component';
import { CreateEjerciciosComponent } from './Components/Forms/create-ejercicios/create-ejercicios.component';
import { CreateEventoComponent } from './Components/Forms/create-evento/create-evento.component';
import { CreateHerramientaComponent } from './Components/Forms/create-herramienta/create-herramienta.component';
import { CreatePersonaComponent } from './Components/Forms/create-persona/create-persona.component';
import { CreateRutinaComponent } from './Components/Forms/create-rutina/create-rutina.component';
import { CreateUsuarioComponent } from './Components/Forms/create-usuario/create-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    HerramientaComponent,
    AsistenciaComponent,
    EjerciciosComponent,
    EventoComponent,
    PersonaComponent,
    UsuarioComponent,
    TableComponent,
    CreateAsistenciaComponent,
    CreateEjerciciosComponent,
    CreateEventoComponent,
    CreateHerramientaComponent,
    CreatePersonaComponent,
    CreateRutinaComponent,
    CreateUsuarioComponent,
    //LoginComponent,
    //MenuComponent
  ],

  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatTableModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatSortModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
  exports: [TableComponent],
})
export class AppModule { }
