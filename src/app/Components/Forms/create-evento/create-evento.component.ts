import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/Services/api.service';
import { FormsService } from 'src/app/services/forms.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-evento',
  templateUrl: './create-evento.component.html',
  styleUrls: ['./create-evento.component.scss']
})
export class    CreateEventoComponent implements OnInit{
  form: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    fecha: new FormControl('', [Validators.required]),
    horaInicio: new FormControl('', [Validators.required]),
    horaSalida: new FormControl('', [Validators.required])
  });

  constructor(private api: ApiService, public forms:FormsService) { }
  
  accion: "put" | "post"
  id?: any
  idName = "idEventos"
  
  ngOnInit(): void {
    this.forms.element.subscribe((res: any)=>{
      this.accion = res.length == 0 ? "post" : "put";
      console.log(this.accion)
      this.id = this.accion == "put" ? res[this.idName] : undefined;
      if(res!=null){
        this.form.setControl('idEventos', new FormControl(res.idEventos));
        this.form.setControl('nombre', new FormControl(res.nombre));
        this.form.setControl('fecha', new FormControl(res.fecha));
        this.form.setControl('horaInicio', new FormControl(res.horaInicio));
        this.form.setControl('horaSalida', new FormControl(res.horaSalida));
      }
    })
  }
  submit() {
    console.log(this.accion)
    let validationMessage: string;
    const formData = new FormData();
    const { idEventos, ...value } = this.form.value;
    
    console.log(this.form.value)
    if (this.form.valid) {
      validationMessage = 'La validación fue correcta';
      if (this.accion == "post") {

        this.api.Post2('Eventoes', value).then(() => {
          // Éxito en la llamada POST
          this.submitEM.emit();
          window.location.reload()
        }, (error) => {
          // Error en la llamada POST
          this.error = error.message;
        });
      } else {
        this.api.Put('Eventoes', this.id, this.form.value).then(() => {

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
 


