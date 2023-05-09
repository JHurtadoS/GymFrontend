import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/Services/api.service';
import Swal from 'sweetalert2';

@Component({
  templateUrl: './create-persona.component.html',
  styleUrls: ['./create-persona.component.scss']
})
export class CreatePersonaComponent {
  form: FormGroup = new FormGroup({
    documento: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required, Validators.max(80)]),
    nombre: new FormControl('', [Validators.required, Validators.max(80)]),
    celular: new FormControl('', [Validators.required, Validators.max(80)]),
    genero: new FormControl('', [Validators.required, Validators.max(9999999)]),
    rh: new FormControl('', [Validators.required, Validators.max(80)]),
    rol: new FormControl('', [Validators.required, Validators.max(80)]),
  });

  constructor(private api: ApiService) { }

  submit() {
    let validationMessage: string;
    console.log(this.form)
    if (this.form.valid) {
      console.log("hola2")
      validationMessage = 'La validación fue correcta';
      this.api.Post('Personas', this.form.value).then(() => {
        // Éxito en la llamada POST
        this.submitEM.emit();
      }, (error) => {
        // Error en la llamada POST
        this.error = error.message;
      });
    } else {
      console.log("hola")
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

