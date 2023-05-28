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
import Swal from 'sweetalert2';


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
  @Input() desahabiltado: boolean = false
  @Input() IdTableDrop: string
  @Input() Controller: string



  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(public api: ApiService, public dialog: MatDialog, public forms: FormsService) {
    this.dataSource = new MatTableDataSource();
  }

  updateElement(element: any) {
    this.forms.element.next(element)
    this.dialog.open(this.component)
  }

  deleteElement(element: any) {
    // Lógica para eliminar el elemento
    console.log(this.IdTableDrop)

    const disable = { "desahabilitado": false }


    const id = element[this.IdTableDrop]
    console.log('Elemento eliminar:', id);
    console.log('Elemento eliminar:', element);

    console.log(this.IdTableDrop)
    console.log(this.desahabiltado)

    Swal.fire({
      title: `¿Seguro que quiere eliminar el elemento con el id ${id}?`,

      showCancelButton: true,
      confirmButtonText: 'Si',

    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        try {

          if (this.desahabiltado) {
            this.api.Put(this.Controller, id, disable)
          } else {
            this.api.Delete(this.Controller, id)
          }
          Swal.fire('Saved!', '', 'success')
          //this.loadTable();
          //this.eliminarElementoPorId(id)
        } catch (e) {
          console.log(e)
          Swal.fire('Error', '', 'error')
        }
      } else if (result.isDenied) {
        console.log(element)
        Swal.fire('Changes are not saved', '', 'info')
      }
    })

  }


  /*eliminarElementoPorId(id: string) {
    const indice = this.data.findIndex(elemento => elemento.id === id);
    if (indice !== -1) {
      this.data.splice(indice, 1);
    }
  }*/

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






