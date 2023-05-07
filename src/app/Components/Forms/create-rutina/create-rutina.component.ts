import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/Services/api.service';
import Swal from 'sweetalert2';
<<<<<<< HEAD
@Component({
  selector: 'app-create-rutina',
  templateUrl: './create-rutina.component.html',
  styleUrls: ['./create-rutina.component.sass']
=======

@Component({
  templateUrl: './create-rutina.component.html',
  selector: 'app-create-rutina',
  styleUrls: ['./create-rutina.component.scss']
>>>>>>> GymFront/main
})
export class CreateRutinaComponent {
  form: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.max(80)]),
    tipRutina: new FormControl('', [Validators.required, Validators.max(80)]),
  }

  );

  constructor(private api: ApiService) { }

  submit() {
    let validationMessage: string;
    console.log(this.form.value)
    if (this.form.valid) {
      validationMessage = 'La validación fue correcta';
      this.api.Post('Rutinas', this.form.value).then(() => {
        // Éxito en la llamada POST
        this.submitEM.emit();
      }, (error) => {
        // Error en la llamada POST
        this.error = error.message;
      });
    } else {
      validationMessage = 'Validacion incorrecta';
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
