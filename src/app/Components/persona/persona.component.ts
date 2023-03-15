import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  constructor(public api:ApiService){} 
    ngOnInit(): void {
      var response=this.api.getAll("Personas")
      console.log(response);
    }
  
}
