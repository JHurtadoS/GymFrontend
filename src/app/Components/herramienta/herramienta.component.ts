import {  Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-herramienta',
  templateUrl: './herramienta.component.html',
  styleUrls: ['./herramienta.component.css']
})

export class HerramientaComponent implements OnInit{
  dataSource: MatTableDataSource<any>;
  data: any[]

  constructor(public api: ApiService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.GetHerramienta();
  }

  public async GetHerramienta() {
    this.api.Get('Herramientums').then((res) => {
      this.dataSource.data = res;
      this.data = res
    });
  }
}