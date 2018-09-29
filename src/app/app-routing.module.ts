import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { SigninComponent } from './auth/signin/signin.component';

const appRoutes: Routes = [
	{path: '', component: SigninComponent},
];
@NgModule({
	imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
	exports: [RouterModule]
	})

export class AppRoutingModule {

}