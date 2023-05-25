import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';
import { UsuarioCreateFormComponent } from '../../Forms/usuario-create-form/usuario-create-form.component';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
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
    this.api.Get('Usuarios').then((res) => {
      this.dataSource.data = res;
      this.data = res
    });
    this.component=UsuarioCreateFormComponent
  }
}


