import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';
import { CreateRutinaComponent } from '../../Forms/create-rutina/create-rutina.component';

//import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-rutina',
  templateUrl: './rutina.component.html',
  styleUrls: ['./rutina.component.css'],
})
export class RutinaComponent implements OnInit {
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
    this.api.Get('Rutinas').then((res) => {
      this.dataSource.data = res;
      this.data = res
    });
    this.component=CreateRutinaComponent
  }
}
