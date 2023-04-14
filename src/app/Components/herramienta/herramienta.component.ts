import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-herramienta',
  templateUrl: './herramienta.component.html',
  styleUrls: ['./herramienta.component.css']
})

export class HerramientaComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] ;

  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(public api:ApiService){
    this.dataSource = new MatTableDataSource();
  } 
  
    ngOnInit(): void {
      this.GetHerramienta();
    }

    ngAfterViewInit(): void {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }

    public async GetHerramienta() {
      this.api.Get('Herramientums').then((res) => {
        this.loadTable(res);
        this.dataSource.data = res;
      });
    }
  
    public loadTable(data: any[]) {
      this.displayedColumns = [];
      let objeto = data[0];
  
      for(let nombre of Object.keys(objeto)) {
        this.displayedColumns.push(nombre);
      }
    }
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  }