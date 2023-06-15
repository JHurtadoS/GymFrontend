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


  Personas:Persona[]



  public async GetPersonas() {
    this.api.Get('Personas').then((res: Array<Persona>) => {
       return this.Personas = res;
      //console.log(this.Usuarios)
    });
  }

  constructor(private api: ApiService, public forms:FormsService) { }
  
  accion: "put" | "post"
  id?: any
  idName = "idEventos"

  ngOnInit(): void {
    this.GetPersonas()
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
        this.form.setControl('PersonaId', new FormControl(res.PersonaId));

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
      validationMessage = 'Validacion Correcta';
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
        console.log(this.form.value)
        console.log(this.id)
        const prubea = this.id
        const value ={id:prubea,...this.form.value}
        this.api.Put('Eventoes', this.id, value).then(() => {

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
 