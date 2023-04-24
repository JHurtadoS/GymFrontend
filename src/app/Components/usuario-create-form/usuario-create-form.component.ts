import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/Services/api.service';


@Component({
  selector: 'app-usuario-create-form',
  templateUrl: './usuario-create-form.component.html',
  styleUrls: ['./usuario-create-form.component.scss']
})
export class UsuarioCreateFormComponent  {
  form: FormGroup = new FormGroup({
    correo: new FormControl('', [Validators.required]),
    contraseña: new FormControl('', [Validators.required]),
  });

  constructor(private api: ApiService) {}

  submit() {
    let validationMessage: string;

    if (this.form.valid) {
      validationMessage = 'La validación fue correcta';
      this.api.Post('usuario', this.form.value).then(() => {
        // Éxito en la llamada POST
        this.submitEM.emit();
      }, (error) => {
        // Error en la llamada POST
        this.error = error.message;
      });
    } else {
      validationMessage = 'Por favor, complete todos los campos';
    }

    alert(validationMessage);
  }

  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();
}
