import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/Services/api.service';
import { FormsService } from 'src/app/services/forms.service';
import Swal from 'sweetalert2';




@Component({
  templateUrl: './create-asistencia.component.html',
  styleUrls: ['./create-asistencia.component.scss']
})
export class CreateAsistenciaComponent implements OnInit{
  form: FormGroup = new FormGroup({
    fechaHora: new FormControl('', [Validators.required]),
  });

   

  accion:"put"|"post"
  idName = "idCita"
  id?:any


  constructor(private api: ApiService, public forms:FormsService) { }
  ngOnInit(): void {
    console.log(this.forms)
    this.forms.element.subscribe((res: any)=>{
      console.log(res.lengt)
      this.accion= res.length==0? "post":"put";
      console.log(this.accion)
      this.id= this.accion=="put"?res[this.idName]:undefined;
      if(res!=null){
        this.form.setControl('fechaHora', new FormControl(res.fechaHora));
      }
    })
  }


  submit() {
    let validationMessage: string;
    console.log(this.form.value)
    if (this.form.valid) {
      validationMessage = 'La validación fue correcta';
      //Asistemcius
      if(this.accion=="post"){
        this.api.Post ('Asistemcius', this.form.value).then(() => {
          // Éxito en la llamada POST
          this.submitEM.emit();
         }, (error) => {
           // Error en la llamada POST
           this.error = error.message;
         });
      }else{
        this.api.Put ('Asistemcius', this.id,this.form.value).then(() => {
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
 
