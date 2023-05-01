import { createReducer, on } from '@ngrx/store';
import { login, logout } from './app.actions';

export interface AppState {
  loggedIn: boolean;
}


export const initialState: AppState = {
  loggedIn: false
};

export const appReducer = createReducer(
  initialState,
  on(login, (state) => ({ ...state, loggedIn: true })),
  on(logout, (state) => ({ ...state, loggedIn: false }))
);
