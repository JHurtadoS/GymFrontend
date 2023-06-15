import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/Services/api.service';
import { FormsService } from 'src/app/services/forms.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-herramienta',
  templateUrl: './create-herramienta.component.html',
  styleUrls: ['./create-herramienta.component.scss']
})
export class CreateHerramientaComponent implements OnInit {
  form: FormGroup = new FormGroup({

    nombre: new FormControl(null, [Validators.required, Validators.max(80)]),
    descripcion: new FormControl(null, [Validators.required]),
    imagenAsociada: new FormControl(null, [Validators.required]),
  });

  constructor(private api: ApiService, public forms: FormsService) { }
  
  accion: "put" | "post"
  id?: any
  idName = "id"
  
  ngOnInit(): void {
    this.forms.element.subscribe((res: any)=>{
      this.accion = res.length == 0 ? "post" : "put";
      console.log(this.accion)
      this.id = this.accion == "put" ? res[this.idName] : undefined;
      if(res!=null){
       
        this.form.setControl('nombre', new FormControl(res.nombre));
        this.form.setControl('descripcion', new FormControl(res.descripcion));
        this.form.setControl('imagenAsociada', new FormControl(res.imagenAsociada));
      }
    })
  }

  submit() {
    console.log(this.accion)
    let validationMessage: string;
    const formData = new FormData();
    const { id, ...value } = this.form.value;

    console.log(this.form.value)
    if (this.form.valid) {
      validationMessage = 'La validación fue correcta';
      if (this.accion == "post") {

        this.api.Post2('Herramientums', value).then(() => {
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
        console.log(this.form.value)
        console.log(this.id)
      
        this.api.Put('Herramientums', this.id, value).then(() => {

          // Éxito en la llamada POST
          this.submitEM.emit();
          
          window.location.reload()
        }, (error) => {
          // Error en la llamada POST
        
          this.error = error.message;
          console.log(error)
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
 


