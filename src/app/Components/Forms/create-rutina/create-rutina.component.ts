import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/Services/api.service';
import { FormsService } from 'src/app/services/forms.service';
import Swal from 'sweetalert2';

@Component({
  templateUrl: './create-rutina.component.html',
  selector: 'app-create-rutina',
  styleUrls: ['./create-rutina.component.scss']
})
export class CreateRutinaComponent implements OnInit {
  form: FormGroup = new FormGroup({
    cantCalorias: new FormControl('', [Validators.required, Validators.max(80)]),
    tipRutina: new FormControl('', [Validators.required, Validators.max(80)]),
  });

  constructor(private api: ApiService, public forms: FormsService) { }

  ngOnInit(): void {
    this.forms.element.subscribe((res: any) => {
      if (res != null) {
        this.form.setControl('tipRutina', new FormControl(res.tipRutina));
        this.form.setControl('cantCalorias', new FormControl(res.cantCalorias));
      }
    })
  }

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
