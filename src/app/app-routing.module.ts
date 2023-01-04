import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenscreenComponent } from './initialscreens/openscreen/openscreen.component';

const routes: Routes = [
//Tás tentando configurar o lazy load 

//https://angular.io/guide/lazy-loading-ngmodules#config-routes
    { 
      path:'',
      component:OpenscreenComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    enableTracing:false,
    useHash:false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
