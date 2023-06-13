import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';
import { CreateAsistenciaComponent } from '../../Forms/create-asistencia/create-asistencia.component';
import { CreateEventoComponent } from '../../Forms/create-evento/create-evento.component';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css'],
})
export class EventoComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  data: any[]
  component: any
  IdTableDrop: string;
  Controller: string

  constructor(public api: ApiService) {
    this.dataSource = new MatTableDataSource();
    this.IdTableDrop = "idEventos"
    this.Controller = "Eventoes"
  }

  ngOnInit(): void {
    this.GetEvento();
  }

  public async GetEvento() {
    this.api.Get(this.Controller).then((res) => {
      console.log(res)
      this.dataSource.data = res;
      this.data = res
    });
    this.component = CreateEventoComponent

  }
}
