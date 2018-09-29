import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { SigninComponent } from './auth/signin/signin.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './auth/auth-guard.service';

const appRoutes: Routes = [
	{ path: '', component: SigninComponent },
	{ path: 'user', component: UserComponent, canActivate: [AuthGuard]}
];
@NgModule({
	imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
	exports: [RouterModule]
	})

export class AppRoutingModule {

}