import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { RutinaComponent } from './components/rutina/rutina.component';
import { AdminComponent } from './components/pages/admin/admin.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [{ path: 'rutinas', component: RutinaComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
