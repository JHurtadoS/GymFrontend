import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {

  constructor(public api:ApiService){} 
    ngOnInit(): void {
      var response=this.api.getAll("Eventoes")
      console.log(response);
    }
  
}
