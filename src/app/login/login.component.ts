import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  hide = true;

  constructor(private form:FormBuilder,private router:Router) { this.login()}

  ngOnInit(): void {
    
  }
  login(){
    this.loginForm=this.form.group({
      email:[''],
      password:['']
    })
  }
  get f() { return this.loginForm.controls; }
 
  onSubmit() {
   

    // stop here if form is invalid
    // if (this.loginForm.invalid) {
    //     return;
    // }
    console.log(this.f.email.value);
    console.log(this.f.password.value);
    
    
   
 
      
  
        
}

}
