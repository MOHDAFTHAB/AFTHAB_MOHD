import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators} from '@angular/forms';



@Component({
  selector: 'app-productedit',
  templateUrl: './productedit.component.html',
  styleUrls: ['./productedit.component.scss']
})
export class ProducteditComponent implements OnInit {
  editProduct: FormGroup;
 
  constructor(
    private fb: FormBuilder,

  
    ) {
      this.createForm();
     }

  ngOnInit(): void {
 
  }
  // complete form
  createForm(){
    this.editProduct = this.fb.group({
      strTitle:['',Validators.required],
      strDescription:['',Validators.required],
      strProductid:['',Validators.required],
     
      strKeyword:[''],
     
    
    });
  }
  get formcontrols() { return this.editProduct.controls; }



  }
