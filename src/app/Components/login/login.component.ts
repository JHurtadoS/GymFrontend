import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ApiService } from 'src/app/Services/api.service';
import { AuthService } from 'src/app/services/auth-service.service';
import { login } from 'src/app/store/app.actions';
import { AppState } from 'src/app/store/app.reducer';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup = new FormGroup({
    correo: new FormControl('', [Validators.required]),
    contraseña: new FormControl('', [Validators.required]),
  });


  constructor(private http: HttpClient, private authService: AuthService, public api: ApiService,
    private store: Store<{ app: AppState }>,
    private router: Router) {
  }
  submit() {
    let validationMessage: string;

    if (this.form.valid) {
      validationMessage = 'La validación fue correcta';

      this.api.Post('Auth/login', this.form.value).then((response: any) => {
        // console.log(response.token);
        this.authService.setToken(response.token);
        this.store.dispatch(login(response.token));
        this.router.navigateByUrl('/admin');

        this.submitEM.emit();
      })
        .catch((error: any) => {
          console.error(error);
          Swal.fire(
            'error',
            'No autorizado',
            'error'

          )
        });
    } else {
      validationMessage = 'Por favor, complete todos los campos';
    }

    Swal.fire(
      'Succes',
      validationMessage,
      'success'

    )
  }
  @Input() error: string | null;
  @Output() submitEM = new EventEmitter();
}