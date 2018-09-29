import { Component }from '@angular/core';
import { Response } from '@angular/http';
import { HttpEvent } from '@angular/common/http'

import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html'
	})
export class HeaderComponent{

	private isAuth;
	private authSub : Subscription;

	constructor(private authService: AuthService) {}


	ngOnInit() {
		this.authSub = this.authService.auth.subscribe(res => {
			this.isAuth = res;
		})

		this.authService.setAuth(false);
	}

	onLogout(){
		this.authService.logout()
	}

}