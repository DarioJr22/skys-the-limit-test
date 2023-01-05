import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { OpenscreenComponent } from './initialscreens/openscreen/openscreen.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  
  declarations: [
    AppComponent,
    OpenscreenComponent,
    LoginComponent

  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    CommonModule,
    NgbModule,
    NgbCarouselModule
  ],
  
  exports:[AppComponent,          
          FormsModule,
          NgbModule,
          AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
