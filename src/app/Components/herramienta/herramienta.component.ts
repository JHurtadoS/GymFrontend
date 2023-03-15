import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-herramienta',
  templateUrl: './herramienta.component.html',
  styleUrls: ['./herramienta.component.css']
})
export class HerramientaComponent implements OnInit {

  constructor(public api:ApiService){} 
    ngOnInit(): void {
      var response=this.api.getAll("Herramientums")
      console.log(response);
    }
  
}