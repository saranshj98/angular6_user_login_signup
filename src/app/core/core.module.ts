import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from '../app-routing.module';

import { AuthService } from '../auth/auth.service';
import { CommonModule } from '@angular/common';


@NgModule({
	declarations: [
		HeaderComponent,
		HomeComponent
	],
	imports: [
		CommonModule,
		AppRoutingModule
	],
	exports: [
		AppRoutingModule,
		HeaderComponent
	],
	providers: [AuthService]
})
export class CoreModule {

}