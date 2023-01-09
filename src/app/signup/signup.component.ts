import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './auth.service';
import {SignupData } from './signup-data'
import { UserData } from './user-data';

interface Alert {
	type: string;
	message: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  alertWarning:boolean = false
  alertAuth:boolean = false
  campsNullList:string[] = []
  alert:Alert = {
    type:'',
    message:''
  };

  password = 'password'
  sgnUp:SignupData = {
    email:'',
    firstName: '',
    lastName: '',
    password: '',
    terms:false
  } 
  user:UserData = new UserData()

  constructor(private router:Router,
              private modal:NgbModal,
              private auth:AuthService){}

  ngOnInit(): void {
    
  }



  
  campsNull(){
      this.campsNullList = []
      if (!this.sgnUp.email) {
        if (this.campsNullList.indexOf('Email')!= -1) {

            this.campsNullList.push('Email')
        }
      }else {
        let indice = this.campsNullList.indexOf('Email')

      }

      if (!this.sgnUp.firstName) {
        this.campsNullList.push('First Name')
      }
      if (!this.sgnUp.lastName) {
        this.campsNullList.push('Last Name')
      }
      if (!this.sgnUp.password) {
        this.campsNullList.push('Password')
      }
      if (!this.sgnUp.terms) {
        this.campsNullList.push('Acept Terms')
      }
    
  }

  equalIntefaces(){
    this.user.email = this.sgnUp.email
    this.user.terms = this.sgnUp.terms
    this.user.firstName = this.sgnUp.firstName
    this.user.lastName = this.sgnUp.lastName
    this.user.password = this.sgnUp.password
  }

  validaForm(content:any){
    this.equalIntefaces()
    if(!this.sgnUp.email||
       !this.sgnUp.firstName||
       !this.sgnUp.lastName||
       !this.sgnUp.password||
       !this.sgnUp.terms){
        this.alertWarning = true
        this.openModalAlert(content)
        this.campsNull()
       

// Mensagem tal
    } else{
      this.alertWarning = false;
      this.alertAuth = true;
      this.auth.signUp(this.user,content)
     

/* 
      this.router.navigate(['/preferences'])
 */
    }

    setTimeout(() => {
      this.closeModalAlert()
    }, 3000);
    console.log(this.sgnUp);
    
  }


  changeType(){
    if (this.password == 'password') {
      this.password = 'text'
    }else{
      this.password = 'password'
    }
    console.log(this.sgnUp);
    
  }

  openModalAlert(content:any){
    this.modal.open(content,{size:'sm'})
  }

  closeModalAlert(){
    this.modal.dismissAll()
  }
}
