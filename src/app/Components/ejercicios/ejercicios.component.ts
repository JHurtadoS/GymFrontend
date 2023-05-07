import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent implements OnInit{
  dataSource: MatTableDataSource<any>;
  data: any[]

  constructor(public api: ApiService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.GetEjercicios();
  }

  public async GetEjercicios() {
    this.api.Get('Ejercicios').then((res) => {
      this.dataSource.data = res;
      this.data = res
    });
  }
}