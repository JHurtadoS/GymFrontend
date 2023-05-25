import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/Services/api.service';
import { FormsService } from 'src/app/services/forms.service';
import Swal from 'sweetalert2';

@Component({
  templateUrl: './create-herramienta.component.html',
  styleUrls: ['./create-herramienta.component.scss']
})
export class CreateHerramientaComponent implements OnInit {
  form: FormGroup = new FormGroup({
    nombre: new FormControl(null, [Validators.required, Validators.max(80)]),
    descripcion: new FormControl(null, [Validators.required, Validators.max(80)]),
    imagenAsociada: new FormControl(null, [Validators.required]),
  });

  constructor(private api: ApiService, public forms: FormsService) { }
  ngOnInit(): void {
    this.forms.element.subscribe((res: any)=>{
      if(res!=null){
        this.form.setControl('nombre', new FormControl(res.nombre));
        this.form.setControl('descripcion', new FormControl(res.descripcion));
      }
    })
  }

  submit() {
    let validationMessage: string;
    if (this.form.valid) {
      validationMessage = 'La validación fue correcta';
      const formData = new FormData();
      formData.append('nombre', this.form.get('nombre').value);
      formData.append('descripcion', this.form.get('descripcion').value);
      formData.append('imagenAsociada', this.form.get('imagenAsociada').value);
      console.log(formData.getAll("imagenAsociada"))
      this.api.Post('herramientums', formData).then(() => {
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
  onFileSelected(event): void {
    const file: File = event.target.files[0];
    if (file) {
      const ext = file.name.split('.')[1].toLowerCase();
      if (ext !== 'jpg' && ext !== 'jpeg' && ext !== 'png') {
        this.form.get('imagenAsociada').setErrors({ 'invalidFileType': true });
        this.form.get('imagenAsociada').setValue(null);
        return;
      }

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        const base64: string = e.target.result.toString()
        this.form.get('imagenAsociada').setValue(base64);
      };
    }
  }

  removeImage(): void {
    this.form.get('imagenAsociada').setValue(null);
  }

  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();
}
