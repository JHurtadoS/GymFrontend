import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/Services/api.service';
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

  ngOnInit(): void {
    this.GetHerramienta()
    console.log(this.dataHerramientas)
  }

  dataHerramientas: Array<Herramienta>;

  public async GetHerramienta() {
    this.api.Get('Herramientums').then((res: Array<Herramienta>) => {
      this.dataHerramientas = res;
      console.log(this.dataHerramientas)
    });
  }

  constructor(private api: ApiService) { }

  submit() {
    let validationMessage: string;
    console.log(this.form.value)
    if (this.form.valid) {
      validationMessage = 'La validación fue correcta';
      this.api.Post('Ejercicios', this.form.value).then(() => {
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

  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();
}

