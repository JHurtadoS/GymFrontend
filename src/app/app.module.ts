import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './Components/formulario/formulario.component';
//import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
//import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
<<<<<<< HEAD
import { AsistenciaComponent } from './Components/asistencia/asistencia.component';
import { EjerciciosComponent } from './Components/ejercicios/ejercicios.component';
import { EventoComponent } from './Components/evento/evento.component';
import { PersonaComponent } from './Components/persona/persona.component';
import { UsuarioComponent } from './Components/usuario/usuario.component';
import { HerramientaComponent } from './Components/herramienta/herramienta.component';
=======
import { AsistenciaComponent } from './Components/tablas/asistencia/asistencia.component';
import { EjerciciosComponent } from './Components/tablas/ejercicios/ejercicios.component';
import { EventoComponent } from './Components/tablas/evento/evento.component';
import { PersonaComponent } from './Components/tablas/persona/persona.component';
import { UsuarioComponent } from './Components/tablas/usuario/usuario.component';
import { LoginComponent } from './Components/login/login.component';
import { HerramientaComponent } from './Components/tablas/herramienta/herramienta.component';
>>>>>>> GymFront/main
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


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RutinaComponent } from './Components/tablas/rutina/rutina.component';
import { UsuarioCreateFormComponent } from './Components/Forms/usuario-create-form/usuario-create-form.component';
import { CreateRutinaComponent } from './Components/Forms/create-rutina/create-rutina.component';
import { CreateEjerciciosComponent } from './Components/Forms/create-ejercicios/create-ejercicios.component';
import { CreateHerramientaComponent } from './Components/Forms/create-herramienta/create-herramienta.component';
import { PruebaAdminComponent } from './components/prueba-admin/prueba-admin.component';
import { AuthGuard } from './guards/auth.guard';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.reducer';
import { TablaComponent } from './Components/tabla/tabla.component';
import { NavBarTitleComponent } from './components/nav-bar-title/nav-bar-title.component';
import { CreateAsistenciaComponent } from './Components/Forms/create-asistencia/create-asistencia.component';
import { CreateEventoComponent } from './Components/Forms/create-evento/create-evento.component';
import { CreatePersonaComponent } from './Components/Forms/create-persona/create-persona.component';



@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    HerramientaComponent,
    AsistenciaComponent,
    UsuarioCreateFormComponent,
    EjerciciosComponent,
    EventoComponent,
    PersonaComponent,
    UsuarioComponent,
<<<<<<< HEAD
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
=======
    LoginComponent,
    RutinaComponent,
    MenuComponent,
    CreateRutinaComponent,
    CreateEjerciciosComponent,
    CreateHerramientaComponent,
    PruebaAdminComponent,
    TablaComponent,
    NavBarTitleComponent,
    CreateAsistenciaComponent,
    CreateEventoComponent,
    CreatePersonaComponent,
>>>>>>> GymFront/main
  ],

  imports: [
    StoreModule.forRoot({ app: appReducer }),
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatTableModule,
<<<<<<< HEAD
=======
    MatInputModule,
>>>>>>> GymFront/main
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
<<<<<<< HEAD
  ],

  providers: [],
  bootstrap: [AppComponent],
  exports: [TableComponent],
=======
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  exports: [
    TablaComponent
  ],
>>>>>>> GymFront/main
})
export class AppModule { }
