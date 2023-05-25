import { ChangeDetectionStrategy, Input, NgModule, SimpleChanges } from '@angular/core';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CreatePersonaComponent } from '../Forms/create-persona/create-persona.component';
import { FormGroup } from '@angular/forms';
import { FormsService } from 'src/app/services/forms.service';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TablaComponent implements AfterViewInit {

  @Input() dataSource: MatTableDataSource<any>;
  displayedColumns: string[];
  @Input() data: any[]
  @Input() component: any
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(public api: ApiService, public dialog: MatDialog, public forms:FormsService) {
    this.dataSource = new MatTableDataSource();
  }

  updateElement(element: any) {
    this.forms.element.next(element)
    this.dialog.open(this.component)
  }

  deleteElement(element: any) {
    // Lógica para eliminar el elemento
    console.log('Elemento eliminar:', element);

    const dialogRef = this.dialog.open(dialogDelete);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.api.Delete(this.component, element.id)
      window.location.reload();
    });
  }



  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(this.data)
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] && this.data) {
      this.loadTable();
    }
  }

  public loadTable() {
    this.displayedColumns = [];
    let objeto = this.data[0];

    for (let nombre of Object.keys(objeto)) {
      this.displayedColumns.push(nombre);
    }
    this.displayedColumns.push('acciones')
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



}

@Component({
  selector: 'dialogDelete',
  template: `<h1 mat-dialog-title>Delete</h1>
<div mat-dialog-content>
  <p>Are you sure you want to delete?</p>
</div>
<div mat-dialog-actions>
  <button mat-button [mat-dialog-close]="false">No</button>
  <button mat-button [mat-dialog-close]="true" cdkFocusInitial>Yes</button>
</div>`,
})

export class dialogDelete { }






