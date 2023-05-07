import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  isWeb$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Web)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  loggedIn$: Observable<boolean>;

  onLogout() {
    console.log("borrando")
    this.router.navigateByUrl('/login');
    localStorage.removeItem('auth_token');

    this.store.dispatch(logout());
    // this.isLoggedIn = false;
  }

  constructor(private breakpointObserver: BreakpointObserver, private store: Store<AppState>, private router: Router) {

  }
  ngOnInit(): void {
    this.loggedIn$ = this.store.pipe(select(state => state.loggedIn));
    this.store.select(state => state.loggedIn).subscribe(loggedIn => {
      console.log('El valor de loggedIn ha cambiado:', loggedIn);
    });
  }
}
