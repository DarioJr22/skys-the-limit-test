import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/* import { AuthGuardComponent } from './auth/auth-guard.component'; */
import { AuthGuardService } from './auth/auth-guard.service';
import { OpenscreenComponent } from './initialscreens/openscreen/openscreen.component';
import { LoginComponent } from './login/login.component';
import { PreferencesSignupComponent } from './preferences-signup/preferences-signup.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
//Tás tentando configurar o lazy load 

//https://angular.io/guide/lazy-loading-ngmodules#config-routes
    { 
      path:'',
      component:OpenscreenComponent
    },
    { 
      path:'login',
      component:LoginComponent
    },
    { 
      path:'signup',
      component:SignupComponent
    },
    { 
      path:'preferences',
      component:PreferencesSignupComponent,
      canActivate:[AuthGuardService]
    },
    {path:'**', 
    component:OpenscreenComponent
    }
 /*    { 
      path:'notAuth',
      component:AuthGuardComponent
    } */




];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    enableTracing:false,
    useHash:false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
