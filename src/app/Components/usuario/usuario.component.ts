import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(public api:ApiService){} 
    ngOnInit(): void {
      var response=this.api.getAll("Usuarios")
      console.log(response);
    }
  
}
