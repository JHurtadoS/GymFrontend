import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth-service.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.getToken()) {
      // Si el usuario está autorizado, permitir el acceso a la ruta solicitada
      return true;
    } else if (state.url !== '/login') {
      // Si el usuario no está autorizado y no está en la página de inicio de sesión, redirigirlo a la página de inicio de sesión y guardar la URL solicitada para redirigirlo después de iniciar sesión
      this.router.navigateByUrl('/login', { state: { url: state.url } });
      return false;
    } else {
      // Si el usuario no está autorizado y ya está en la página de inicio de sesión, no hay necesidad de redirigirlo de nuevo
      return true;
    }
  }
}
