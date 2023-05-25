import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/Services/api.service';
import { FormsService } from 'src/app/services/forms.service';
import Swal from 'sweetalert2';

@Component({
  templateUrl: './create-evento.component.html',
  styleUrls: ['./create-evento.component.scss']
})
export class CreateEventoComponent implements OnInit{
  form: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    fecha: new FormControl('', [Validators.required]),
    horaInicio: new FormControl('', [Validators.required]),
    horaSalida: new FormControl('', [Validators.required])
  });

  constructor(private api: ApiService, public forms:FormsService) { }
  ngOnInit(): void {
    this.forms.element.subscribe((res: any)=>{
      if(res!=null){
        this.form.setControl('nombre', new FormControl(res.nombre));
        this.form.setControl('fecha', new FormControl(res.fecha));
        this.form.setControl('horaInicio', new FormControl(res.horaInicio));
        this.form.setControl('horaSalida', new FormControl(res.horaSalida));
      }
    })
  }
  submit() {
    let validationMessage: string;
    console.log(this.form.value)
    if (this.form.valid) {
      validationMessage = 'La validación fue correcta';
      this.api.Post('Eventoes', this.form.value).then(() => {
        // Éxito en la llamada POST
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
