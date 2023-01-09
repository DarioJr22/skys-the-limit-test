import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-openscreen',
  templateUrl: './openscreen.component.html',
  styleUrls: ['./openscreen.component.css']
})
export class OpenscreenComponent {

secondElm:boolean = false
InicialElm:boolean = false
continue:boolean = true


/*  */
constructor(private router:Router){}


  
  telasIniciais_Passagem(){
    this.InicialElm = true
        setTimeout(() => {
            this.secondElm = true
          }, 800);

        setTimeout(()=>{
          this.router.navigate(['/login'])
        }, 5000)
  }
}
