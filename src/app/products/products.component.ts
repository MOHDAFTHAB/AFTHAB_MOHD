
import { Component, OnInit} from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { ProductAddComponent } from '../product-add/product-add.component';
import { ProductDeleteComponent } from '../product-delete/product-delete.component';
import { ProducteditComponent } from '../productedit/productedit.component';

export interface PeriodicElement {
    title: string;
    position: number;
    status: string;
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, title: 'anshi',status: 'passed'},
  
  ];

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
  })

export class ProductsComponent implements OnInit {

  displayedColumns: string[] = ['position', 'title', 'status','edit','delete'];
   dataSource = ELEMENT_DATA;

  constructor(
    public dialog: MatDialog, ) { }
 
  ngOnInit(): void {
  }

 
 
  openDialog() {
    const dialogRef = this.dialog.open(ProducteditComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      
    });
  }

  openDialogdel() {
    const dialogRef = this.dialog.open(ProductDeleteComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      
    });
  }
  openDialogadd() {
    const dialogRef = this.dialog.open(ProductAddComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      
    });
  }
}