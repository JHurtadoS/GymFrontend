import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';
import { CreateEjerciciosComponent } from '../../Forms/create-ejercicios/create-ejercicios.component';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css'],
})
export class EjerciciosComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  data: any[]
  component: any
  IdTableDrop: string;
  Controller: string

  constructor(public api: ApiService) {
    this.dataSource = new MatTableDataSource();
    this.IdTableDrop = "id"
    this.Controller = "Ejercicios"
  }

  ngOnInit(): void {
    this.GetAsistencia();
  }

  public async GetAsistencia() {
    this.api.Get('Ejercicios').then((res) => {
      this.dataSource.data = res;
      this.data = res
    });
    this.component = CreateEjerciciosComponent

  }
}
