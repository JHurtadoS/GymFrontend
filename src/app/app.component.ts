import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { logout } from './store/app.actions';
import { AppState } from './store/app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'GymApp';
  login = true;

  isLoggedIn = true;

  constructor(private store: Store<{ app: AppState }>) {
    store.select('app').subscribe(appState => {
      if (appState) {
        this.isLoggedIn = appState.loggedIn;
      }
    });
  }

  onLogout() {
    // remove token from localStorage
    localStorage.removeItem('auth_token');
    this.store.dispatch(logout());
  }

  removeTokenFromLocalStorage() {
    localStorage.removeItem('auth_token');
  }
}
