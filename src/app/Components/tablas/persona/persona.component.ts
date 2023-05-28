import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';
import { CreatePersonaComponent } from '../../Forms/create-persona/create-persona.component';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
})
export class PersonaComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  data: any[]
  component: any
  IdTableDrop: string;
  Controller: string
  desahabiltado: boolean

  constructor(public api: ApiService) {
    this.dataSource = new MatTableDataSource();
    this.IdTableDrop = "idUsuario"
    this.Controller = "Personas"
    this.desahabiltado = true
  }

  ngOnInit(): void {
    this.GetAsistencia();
  }

  public async GetAsistencia() {
    this.api.Get('Personas').then((res) => {
      this.dataSource.data = res;
      this.data = res
    });
    this.component = CreatePersonaComponent
  }
}
