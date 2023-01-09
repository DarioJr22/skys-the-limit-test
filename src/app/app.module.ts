import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbAlertModule, NgbCarouselModule, NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { OpenscreenComponent } from './initialscreens/openscreen/openscreen.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PreferencesSignupComponent } from './preferences-signup/preferences-signup.component';
import { AuthService } from './signup/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
/* import { AuthGuardComponent } from './auth/auth-guard.component';
 */
@NgModule({
  
  declarations: [
    AppComponent,
    OpenscreenComponent,
    LoginComponent,
    SignupComponent,
    PreferencesSignupComponent

  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    NgbModule,
    NgbCarouselModule,
    NgbAlertModule,
    NgbModalModule
  ],
  
  exports:[AppComponent,          
          FormsModule,
          NgbModule,
          AppRoutingModule
  ],
  providers: [AuthService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
