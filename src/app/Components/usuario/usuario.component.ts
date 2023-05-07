import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';  

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  data: any[]

  constructor(public api: ApiService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.GetUsuario();
  }

  public async GetUsuario() {
    this.api.Get('Usuario').then((res) => {
      this.dataSource.data = res;
      this.data = res
    });
  }
}