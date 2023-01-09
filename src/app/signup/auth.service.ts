import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserData } from './user-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userAuthenticate:boolean = false
  constructor(private router:Router,
    private modal:NgbModal) { }

  signUp(user:UserData,contentErr:any){
    if (user.email == 'usuario@email.com'&&
        user.password == '12345') {
          this.userAuthenticate = true
          this.router.navigate(['/preferences'])
    }else{
          this.userAuthenticate = false
          this.modal.open(contentErr,{size:'sm'})

    }
  }

  userAuthenticated(){
    return this.userAuthenticate
  }
}
