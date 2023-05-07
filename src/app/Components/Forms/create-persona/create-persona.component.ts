import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/Services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-persona',
  templateUrl: './create-persona.component.html',
  styleUrls: ['./create-persona.component.sass']
})
export class CreatePersonaComponent {
  form: FormGroup = new FormGroup({
    documento: new FormControl('', [Validators.required]),
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    celular: new FormControl('', [Validators.required]),
    genero: new FormControl('', [Validators.required]),
    rh: new FormControl('', [Validators.required]),
    rol: new FormControl('', [Validators.required]),
  });

  constructor(private api: ApiService) { }

  submit() {
    let validationMessage: string;
    console.log(this.form.value)
    if (this.form.valid) {
      validationMessage = 'La validación fue correcta';
      this.api.Post('Personas', this.form.value).then(() => {
        // Éxito en la llamada POST
        this.submitEM.emit();
      }, (error) => {
        // Error en la llamada POST
        this.error = error.message;
      });
    } else {
      validationMessage = 'Por favor, complete todos los campos';
    }

    validationMessage == "Validacion incorrecta" ? Swal.fire(
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

