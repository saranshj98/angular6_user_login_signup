import { Component }from '@angular/core';
import { Response } from '@angular/http';
import { HttpEvent } from '@angular/common/http'

import { AuthService } from '../../auth/auth.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html'
	})
export class HeaderComponent{

	constructor(private authService: AuthService) {}

	onSave(){
		// this.dataStorageService.storeRecipes()
		// .subscribe(
		// 	(response: HttpEvent<any>) => {
		// 		console.log(response);
		// 	}
		// )
	}

	onFetchData(){
		// this.dataStorageService.getRecipes();
	}

	onLogout(){
		this.authService.logout()
	}

	isAuthenticated() {
    	return this.authService.isAuthenticated();
  }

}