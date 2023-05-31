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
    idUsuario: new FormControl(),
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
  idName = "idUsuario"
  id?: any
  Usuarios: Usuario[]

  public async GetUsuario() {
    this.api.Get('Usuarios').then((res: Array<Usuario>) => {
      this.Usuarios = res;
      console.log(this.Usuarios)
    });
  }



  constructor(private api: ApiService, public forms: FormsService) { }
  ngOnInit(): void {
    this.forms.element.subscribe((res: any) => {
      this.GetUsuario()
      console.log(res.lengt)
      this.accion = res.length == 0 ? "post" : "put";
      console.log(this.accion)
      this.id = this.accion == "put" ? res[this.idName] : undefined;
      if (res != null) {

        //this.form.setControl('idUsuario', new FormControl(res.idUsuario));
        //this.form.setControl('idUsuario', new FormControl(res.idUsuario));
        console.log(res)
        this.form.setControl('idUsuario', new FormControl(res.idUsuario));
        this.form.setControl('personaIdUsuario', new FormControl(res.idUsuario));
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
    let validationMessage: string;
    // console.log(this.form.value)
    const value = { ...this.form.value, }
    console.log(value)
    if (this.form.valid) {
      validationMessage = 'La validación fue correcta';
      if (this.accion == "post") {
        const disable = { "desahabilitado": true }
        const value = { ...this.form.value, ...disable }

        this.api.Post('Personas', value).then(() => {
          // Éxito en la llamada POST
          this.submitEM.emit();
        }, (error) => {
          // Error en la llamada POST
          this.error = error.message;
        });
      } else {
        this.api.Put('Personas', this.id, this.form.value).then(() => {
          // Éxito en la llamada POST
          this.submitEM.emit();
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
