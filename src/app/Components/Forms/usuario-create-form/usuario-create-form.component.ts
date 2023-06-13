import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/Services/api.service';
import { FormsService } from 'src/app/services/forms.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-usuario-create-form',
  templateUrl: './usuario-create-form.component.html',
  styleUrls: ['./usuario-create-form.component.scss']
})
export class UsuarioCreateFormComponent implements OnInit {
  form: FormGroup = new FormGroup({
    idUsuario: new FormControl(),
    correo: new FormControl(null, [Validators.required]),
    contraseña: new FormControl(null, [Validators.required]),
  });

  constructor(private api: ApiService, public forms: FormsService) { }

  accion: "put" | "post"
  id?: any
  idName = "idUsuario"

  ngOnInit(): void {
    this.forms.element.subscribe((res: any) => {
      this.accion = res.length == 0 ? "post" : "put";
      console.log(this.accion)
      this.id = this.accion == "put" ? res[this.idName] : undefined;
      if (res != null) {
        this.form.setControl('idUsuario', new FormControl(res.idUsuario));
        this.form.setControl('correo', new FormControl(res.correo));
        this.form.setControl('contraseña', new FormControl(res.contraseña));
      }
    })
  }

  submit() {
    console.log(this.accion)
    let validationMessage: string;
    const formData = new FormData();
    const { idUsuario, ...value } = this.form.value;

    // const value = { idUsuario,...this.form.value,idUsuario }

    console.log(this.form.value)
    if (this.form.valid) {
      validationMessage = 'La validación fue correcta';
      validationMessage = 'La validación fue correcta';
      if (this.accion == "post") {

        this.api.Post2('Usuarios', value).then(() => {
          // Éxito en la llamada POST
          this.submitEM.emit();
          window.location.reload()
        }, (error) => {
          // Error en la llamada POST
          this.error = error.message;
        });
      } else {
        this.api.Put('Usuarios', this.id, this.form.value).then(() => {

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
