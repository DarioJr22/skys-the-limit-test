import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-openscreen',
  templateUrl: './openscreen.component.html',
  styleUrls: ['./openscreen.component.css']
})
export class OpenscreenComponent {
  /* variavelClasseInicialBg:string = 'd-flex justify-content-center backGround-initialScreen'
  variavelClasseTransicaoBg:string = ''
  variavelClasseInicialElm:string = 'd-flex justify-content-center w-100 formatacaoLogo-initialScreen'
variavelClasseTransicaoElm:string = '' */
secondElm:boolean = false
InicialElm:boolean = false


/*  */
constructor(private router:Router){}


//Transição de saída dessa tela e fazer entrada da próxima nesse mesmo componente de preferência
//Falar com o cliente  3-1 |9# 8#8 -58-- 0177

  
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
