import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.css']
})
export class AsistenciaComponent implements OnInit {

  constructor(public api:ApiService){} 
    ngOnInit(): void {
      var response=this.api.getAll("Asistenciums")
      console.log(response);
    }
  
}
