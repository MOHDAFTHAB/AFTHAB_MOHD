import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators} from '@angular/forms';



@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  addProduct: FormGroup;
 
  constructor(
    private fb: FormBuilder,

  
    ) {
      this.createForm();
     }

  ngOnInit(): void {
 
  }
  // complete form
  createForm(){
    this.addProduct = this.fb.group({
      strTitle:['',Validators.required],
      strDescription:['',Validators.required],
      strProductid:['',Validators.required],
     
      strKeyword:[''],
     
    
    });
  }
  get formcontrols() { return this.addProduct.controls; }



  }
