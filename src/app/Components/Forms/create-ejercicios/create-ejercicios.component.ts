import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/Services/api.service';
import { FormsService } from 'src/app/services/forms.service';
import Swal from 'sweetalert2';

export interface Herramienta {
  id: number;
  nombre: string;
  descripcion: string;
  imagenAsociada: string;
  ejercicios: Ejercicio[];
  ejerciciosHasRutinas: any;
}

export interface Ejercicio {
  id: number;
  nombre: string;
  tipo: string;
  videoAsociado: string;
  ncalorias: number;
  maquina: string;
  herramienta: Herramienta;
}

@Component({
  selector: 'app-create-ejercicios',
  templateUrl: './create-ejercicios.component.html',
  styleUrls: ['./create-ejercicios.component.scss']
})
export class CreateEjerciciosComponent implements OnInit {
  form: FormGroup = new FormGroup({
    videoAsociado: new FormControl(null, [Validators.required, Validators.max(80)]),
    nombre: new FormControl(null, [Validators.required, Validators.max(80)]),
    tipo: new FormControl(null, [Validators.required, Validators.max(80)]),
    ncalorias: new FormControl(null, [Validators.required, Validators.max(80)]),
    maquina: new FormControl(null, [Validators.required, Validators.max(80)]),
    ejercicioIdHerramienta: new FormControl(null, [Validators.required]),
  }

  );



  dataHerramientas: Array<Herramienta>;

  public async GetHerramienta() {
    this.api.Get('Herramientums').then((res: Array<Herramienta>) => {
      this.dataHerramientas = res;
      console.log(this.dataHerramientas)
    });
  }

  constructor(private api: ApiService, public forms: FormsService) { }
  accion: "put" | "post"
  id?: any
  idName = "id"
  
  ngOnInit(): void {
    this.GetHerramienta();
    this.forms.element.subscribe((res: any) => {
      this.accion = res.length == 0 ? "post" : "put";
      console.log(this.accion)
      this.id = this.accion == "put" ? res[this.idName] : undefined;

      if (res != null) {
        this.form.setControl('videoAsociado', new FormControl(res.videoAsociado));
        this.form.setControl('nombre', new FormControl(res.nombre));
        this.form.setControl('tipo', new FormControl(res.tipo));
        this.form.setControl('ncalorias', new FormControl(res.ncalorias));
        this.form.setControl('maquina', new FormControl(res.maquina));
        //this.form.setControl('ejercicioIdHerramienta', new FormControl(res.ejercicioIdHerramienta));

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

        this.api.Post2('Ejercicios', value).then(() => {
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
        this.api.Put('Ejercicios', this.id, value).then(() => {

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
