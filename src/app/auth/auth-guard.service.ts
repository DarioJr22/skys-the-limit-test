import { Injectable, TemplateRef } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { AuthService } from '../signup/auth.service';
import { UserData } from '../signup/user-data';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  
  user:UserData= new UserData()

  constructor(private auth:AuthService,
              private route:Router,
              private modal:NgbModal) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {

    if (this.auth.userAuthenticated()){
      return true
    }else{
      this.route.navigate(['/signup'])
      return false
      

    }
   }


}
