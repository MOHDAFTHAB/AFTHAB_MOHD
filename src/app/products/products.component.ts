import { Component, OnInit } from '@angular/core';
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
  constructor() { }

  ngOnInit(): void {
  }

}
