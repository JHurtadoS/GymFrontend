import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/Services/api.service';
import { FormsService } from 'src/app/services/forms.service';
import Swal from 'sweetalert2';

interface Persona {
  correoUsuario:  string;
  id:             number;
  documento:      number;
  nombre:         string;
  apellidos:      string;
  celular:        number;
  genero:         string;
  rh:             string;
  rol:            string;
  desahabilitado: boolean;
}


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

  Personas:Persona[]



  public async GetPersonas() {
    this.api.Get('Personas').then((res: Array<Persona>) => {
       return this.Personas = res;
      //console.log(this.Usuarios)
    });
  }


   
  constructor(private api: ApiService, public forms:FormsService) { }
  
  accion:"put" | "post"
  id?:any
  idName = "idCita"

  
  ngOnInit(): void {
    this.GetPersonas()
    this.forms.element.subscribe((res: any) => {
     

      this.accion = res.length == 0 ? "post" : "put";
      console.log(this.accion)
      this.id = this.accion == "put" ? res[this.idName] : undefined;
      if (res != null) {
        this.form.setControl('idCita', new FormControl(res.idCita));
        this.form.setControl('fechaHora', new FormControl(res.fechaHora));
        this.form.setControl('PersonaId', new FormControl(res.PersonaId));
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
      validationMessage = 'Validacion Correcta';
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
        console.log(this.form.value)
        console.log(this.id)
        const prubea = this.id
        const value ={id:prubea,...this.form.value}
        this.api.Put('Asistenciums', this.id, value).then(() => {

          // Éxito en la llamada POST
          this.submitEM.emit();
          //window.location.reload()
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
 
