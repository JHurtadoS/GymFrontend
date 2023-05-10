import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/Services/api.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-usuario-create-form',
  templateUrl: './usuario-create-form.component.html',
  styleUrls: ['./usuario-create-form.component.scss']
})
export class UsuarioCreateFormComponent {
  form: FormGroup = new FormGroup({
    correo: new FormControl(null, [Validators.required]),
    contraseña: new FormControl(null, [Validators.required]),
  });

  constructor(private api: ApiService) { }

  submit() {
    let validationMessage: string;
    const formData = new FormData();

    console.log(this.form.value)
    if (this.form.valid) {
      validationMessage = 'La validación fue correcta';
      formData.append('correo', this.form.get('nombre').value);
      formData.append('contraseña', this.form.get('descripcion').value);
      this.api.Post('Usuarios', this.form.value).then(() => {
        this.submitEM.emit();
      }, (error) => {
        // Error en la llamada POST
        this.error = error.message;
      });
    } else {
      validationMessage = 'Por favor, complete todos los campos';
    }

    validationMessage == "Por favor, complete todos los campos" ? Swal.fire(
      'Error',
      'Validacion incorrecta',
      'error'
    ) : Swal.fire(
      'Succes',
      'Validacion Correcta',
      'success'
    )
  }

  @Input() error: string | null;
  @Output() submitEM = new EventEmitter();
}
