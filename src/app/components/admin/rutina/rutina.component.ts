import { Component } from '@angular/core';
import { RutinasService } from 'src/app/services/rutinas/rutinas.service';

@Component({
  selector: 'app-rutina',
  templateUrl: './rutina.component.html',
  styleUrls: ['./rutina.component.scss'],
})
export class RutinaComponent {
  constructor(public api: RutinasService) {}

  ngOnInit(): void {
    const response = this.api.getall('Rutinas');
    console.log(response);
  }
}
