import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/Services/api.service';
import { FormsService } from 'src/app/services/forms.service';
import Swal from 'sweetalert2';

interface Usuario {
  idUsuario: number;
  correo: string;
  contraseña: string;
  personas: any[];
}


@Component({
  templateUrl: './create-persona.component.html',
  styleUrls: ['./create-persona.component.scss']
})





export class CreatePersonaComponent implements OnInit {

  form: FormGroup = new FormGroup({
    id: new FormControl(),
    personaIdUsuario: new FormControl('', [Validators.required]),
    documento: new FormControl('', [Validators.required]),
    apellidos: new FormControl('', [Validators.required, Validators.max(80)]),
    nombre: new FormControl('', [Validators.required, Validators.max(80)]),
    celular: new FormControl('', [Validators.required, Validators.max(80)]),
    genero: new FormControl('', [Validators.required, Validators.max(9999999)]),
    rh: new FormControl('', [Validators.required, Validators.max(80)]),
    rol: new FormControl('', [Validators.required, Validators.max(80)]),
    desahabilitado: new FormControl('', [Validators.required, Validators.max(80)]),

  });




  accion: "put" | "post"
  idName = "id"
  id?: any
  Usuarios: Usuario[]
  idUsuario:number

  public async GetUsuario() {
    this.api.Get('Usuarios').then((res: Array<Usuario>) => {
       return this.Usuarios = res;
      //console.log(this.Usuarios)
    });
  }


  public getIdUsuario(correo:string){
    console.log(this.Usuarios)

    if(this.Usuarios)
    return this.Usuarios.find((e)=>e.correo==correo).idUsuario
    else return null
  }



  constructor(private api: ApiService, public forms: FormsService) { }
  ngOnInit(): void {
    this.forms.element.subscribe((res: any) => {
      this.GetUsuario()
      console.log(this.Usuarios)
      console.log(res.lengt)
      this.accion = res.length == 0 ? "post" : "put";
      console.log(this.accion)
      this.id = this.accion == "put" ? res[this.idName] : undefined;



      if (res != null) {

        const prueba= this.getIdUsuario(res.correoUsuario)
        console.log(prueba)

        this.form.setControl('id', new FormControl(res.id));
        
        if(this.idUsuario){
        console.log(this.idUsuario)
        this.form.setControl('personaIdUsuario', new FormControl(this.idUsuario));}else{
          console.log(this.idUsuario)
        }

        this.form.setControl('documento', new FormControl(res.documento));
        this.form.setControl('apellidos', new FormControl(res.apellidos));
        this.form.setControl('nombre', new FormControl(res.nombre));
        this.form.setControl('celular', new FormControl(res.celular));
        this.form.setControl('genero', new FormControl(res.genero));
        this.form.setControl('rh', new FormControl(res.rh));
        this.form.setControl('rol', new FormControl(res.rol));
        this.form.setControl('desahabilitado', new FormControl(res.desahabilitado));

      }
    })
  }
  submit() {
    console.log(this.accion)
    let validationMessage: string;
    // console.log(this.form.value)
    const value = { ...this.form.value, }
    value.desahabilitado=true
    delete value.id
    console.log(value)
    if (this.form.valid) {
      validationMessage = 'La validación fue correcta';
      if (this.accion == "post") {

        this.api.Post2('Personas', value).then(() => {
          // Éxito en la llamada POST
          this.submitEM.emit();
          window.location.reload()
        }, (error) => {
          // Error en la llamada POST
          this.error = error.message;
        });
      } else {
        this.api.Put('Personas', this.id, this.form.value).then(() => {

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
