
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  opened: boolean;
  master:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  masterOnclick(){
    this.master=!this.master
  }

}
