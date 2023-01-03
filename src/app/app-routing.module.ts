import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

    { path:'',
      loadChildren:() => import('./initialscreens/openscreen/openscreen.module').then( m => m.OpenScreenModule),
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
