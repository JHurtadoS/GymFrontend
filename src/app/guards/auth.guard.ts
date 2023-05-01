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

    if (this.authService.getToken() && state.url !== '/admin') {
      // Si el usuario ya tiene un token y no está en la ruta /admin, redirige a la ruta /admin
      this.router.navigateByUrl('/admin');
      return false;
    } else if (!this.authService.getToken() && state.url !== '/login' && !this.redirected) {
      // Si el usuario no tiene un token y no está en la ruta /login, redirige a la ruta /login
      this.redirected = true;
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  }

  redirected = false; // flag para evitar redirigir en bucle
}



