import { Component, Input } from '@angular/core';

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
InicialBg:boolean = false
InicialElm:boolean = true

//Transição de saída dessa tela e fazer entrada da próxima nesse mesmo componente de preferência
//Falar com o cliente  3-1 |9# 8#8 -58-- 0177

  
  teste(){

  }
}
