import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/pages/login/login.component';
import { MenuComponent } from './components/UiMaterial/menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AdminComponent } from './components/pages/admin/admin.component';
import { AsistenciaComponent } from './components/admin/asistencia/asistencia.component';
import { EjercicioComponent } from './components/admin/ejercicio/ejercicio.component';
import { EventoComponent } from './components/admin/evento/evento.component';
import { HerramientaComponent } from './components/admin/herramienta/herramienta.component';
import { PersonaComponent } from './components/admin/persona/persona.component';
import { RutinasEjecicioComponent } from './components/admin/rutinas-ejecicio/rutinas-ejecicio.component';
import { RutinaspersonaComponent } from './components/admin/rutinaspersona/rutinaspersona.component';
import { UsuarioComponent } from './components/admin/usuario/usuario.component';

import { HttpClientModule } from '@angular/common/http';
import { RutinaComponent } from './components/admin/rutina/rutina.component';

@NgModule({
  declarations: [
    AppComponent,
    RutinaComponent,
    LoginComponent,
    MenuComponent,
    AdminComponent,
    AsistenciaComponent,
    EjercicioComponent,
    EventoComponent,
    HerramientaComponent,
    PersonaComponent,
    RutinasEjecicioComponent,
    RutinaspersonaComponent,
    UsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
