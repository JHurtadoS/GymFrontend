import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';
import { CreateAsistenciaComponent } from '../../Forms/create-asistencia/create-asistencia.component';
import { CreateHerramientaComponent } from '../../Forms/create-herramienta/create-herramienta.component';

@Component({
  selector: 'app-herramienta',
  templateUrl: './herramienta.component.html',
  styleUrls: ['./herramienta.component.css']
})

export class HerramientaComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  data: any[]
  component:any

  constructor(public api: ApiService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.GetAsistencia();
  }

  public async GetAsistencia() {
    this.api.Get('Herramientums').then((res) => {
      console.log(res)
      this.dataSource.data = res;
      this.data = res

    });
    this.component=CreateHerramientaComponent
  }
}
