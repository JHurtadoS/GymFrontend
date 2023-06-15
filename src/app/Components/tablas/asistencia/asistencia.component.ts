import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';
import { CreateAsistenciaComponent } from '../../Forms/create-asistencia/create-asistencia.component';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.css']
})
export class AsistenciaComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  data: any[]
  component: any
  IdTableDrop: string;
  Controller: string

  constructor(public api: ApiService) {
    this.dataSource = new MatTableDataSource();
    this.IdTableDrop = "idCita"
    this.Controller = "Asistenciums"
  }

  ngOnInit(): void {
    this.GetAsistencia();
  }

  public async GetAsistencia() {
    this.api.Get(this.Controller).then((res) => {
      this.dataSource.data = res;
      this.data = res
    });
    this.component = CreateAsistenciaComponent
  }
}
