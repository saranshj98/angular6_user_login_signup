import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public isErr: boolean = false;
  public errMessage;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    
  }

  onSignin(form: NgForm){
    form.form.setErrors({incorrect: true});

  	const email = form.value.email;
  	const password = form.value.password;
    this.authService.signinUser(email, password)
      .subscribe((res: any) => {
        form.form.setErrors({incorrect: false});
        if(!res.error) {

          this.authService.setAuth(true);
          this.authService.setUser(res.userDoc);
          this.router.navigate(['user'])
        } else {
          this.isErr = true;
          this.errMessage = res.message;
        }
      })
  }

}
