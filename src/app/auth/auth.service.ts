import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class AuthService {

	username: string= ''
	private user;
	public auth = new Subject<boolean>();
	public trfUserData = new Subject<any>();
	public isAuthenticated = false;

	constructor(private router: Router, private http: HttpClient) {}

	token: string;
	signupUser(username : string, email: string, password: string){
		let model = {
			username, email, password
		}

		return this.http.post(`https://still-cove-74270.herokuapp.com/api/user/create`, model)
	}

	signinUser(email: string, password: string){
		let model = {  
			email, password
		}
		return this.http.post(`https://still-cove-74270.herokuapp.com/api/user/create`, model)
	}

	setAuth(value) {
		this.isAuthenticated = value;
		this.auth.next(this.isAuthenticated);
	}

	setUser(user) {
		this.user = user;
	}
	
	getUser() {
		this.trfUserData.next(this.user);
	}

	logout(){
		this.setAuth(false);
		this.router.navigate(['signin'])
	}

	getAuth() {
		return this.isAuthenticated;
	}

}