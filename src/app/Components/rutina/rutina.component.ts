import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-rutina',
  templateUrl: './rutina.component.html',
  styleUrls: ['./rutina.component.css']
})
export class RutinaComponent implements OnInit {

  constructor(public api:ApiService){} 
  ngOnInit(): void {
    var response=this.api.getAll("Rutinas")
    console.log(response);
  }
  
}