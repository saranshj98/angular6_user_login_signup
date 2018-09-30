import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public isErr: boolean = false
  public errMessage;
  

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    form.form.setErrors({incorrect: true});   //to disable the submit button on function call
    this.isErr = false;                       // Resets the error value incase function is called again.
    const username = form.value.username;
  	const email = form.value.email;
    const password =  form.value.password;
    
    this.authService.signupUser(username, email, password)
        .subscribe((res: any) => {
          form.form.setErrors({incorrect: false});  //enables submit button on receiving response
          if(!res.error) {
            this.router.navigate(['signin']);
          } else {
            this.isErr = true;
            this.errMessage = res.message;
          }
        })
  }

}
