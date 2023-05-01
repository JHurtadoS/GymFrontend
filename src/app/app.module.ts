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
import { MenuComponent } from './Components/menu/menu.component';
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
import { LoginComponent } from './Components/login/login.component';
import { HerramientaComponent } from './Components/herramienta/herramienta.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RutinaComponent } from './Components/rutina/rutina.component';
import { UsuarioCreateFormComponent } from './Components/usuario-create-form/usuario-create-form.component';
import { CreateRutinaComponent } from './Components/create-rutina/create-rutina.component';
import { CreateEjerciciosComponent } from './components/create-ejercicios/create-ejercicios.component';
import { CreateHerramientaComponent } from './components/create-herramienta/create-herramienta.component';
import { PruebaAdminComponent } from './components/prueba-admin/prueba-admin.component';
import { AuthGuard } from './guards/auth.guard';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.reducer';
import { TablaComponent } from './Components/tabla/tabla.component';



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
    LoginComponent,
    RutinaComponent,
    MenuComponent,
    CreateRutinaComponent,
    CreateEjerciciosComponent,
    CreateHerramientaComponent,
    PruebaAdminComponent,
    TablaComponent,
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
    MatInputModule,
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
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  exports: [
    TablaComponent
  ],
})
export class AppModule { }
