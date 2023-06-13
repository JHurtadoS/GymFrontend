import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/Services/api.service';
import { FormsService } from 'src/app/services/forms.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-create-asistencia',
  templateUrl: './create-asistencia.component.html',
  styleUrls: ['./create-asistencia.component.scss']
})
export class CreateAsistenciaComponent implements OnInit{
  form: FormGroup = new FormGroup({
    idCita: new FormControl(),
    fechaHora: new FormControl('', [Validators.required]),
  });

   
  constructor(private api: ApiService, public forms:FormsService) { }
  
  accion:"put" | "post"
  id?:any
  idName = "idCita"

  
  ngOnInit(): void {
    this.forms.element.subscribe((res: any) => {
      this.accion = res.length == 0 ? "post" : "put";
      console.log(this.accion)
      this.id = this.accion == "put" ? res[this.idName] : undefined;
      if (res != null) {
        this.form.setControl('idCita', new FormControl(res.idCita));
        this.form.setControl('fechaHora', new FormControl(res.fechaHora));
      }
    })
  }


  submit() {
    console.log(this.accion)
    let validationMessage: string;
    const formData = new FormData();
    const { idCita, ...value } = this.form.value;


    console.log(this.form.value)
    if (this.form.valid) {
      validationMessage = 'La validación fue correcta';
      if (this.accion == "post") {

        this.api.Post2('Asistenciums', value).then(() => {
          // Éxito en la llamada POST
          this.submitEM.emit();
          window.location.reload()
        }, (error) => {
          // Error en la llamada POST
          this.error = error.message;
        });
      } else {
        this.api.Put('Asistenciums', this.id, this.form.value).then(() => {

          // Éxito en la llamada POST
          this.submitEM.emit();
          window.location.reload()
        }, (error) => {
          // Error en la llamada POST
          this.error = error.message;
        });
      }
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
 
