import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselModule, NgbModal, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-preferences-signup',
  templateUrl: './preferences-signup.component.html',
  styleUrls: ['./preferences-signup.component.css']
})
export class PreferencesSignupComponent implements OnInit{
	learnaboutBussiness:any[] = ['Marketing','Biz Strategy','Acquistion','Franchising', 'Biz Development','Leadership', 'Human Resources', 'Logistics','Finances','E-Commerce']
	botaoAtivado1:boolean =true
	botaoAtivado2:boolean =false
	botaoAtivado3:boolean =false
	botaoAtivado4:boolean =false
	botaoAtivado5:boolean =false
	botaoAtivado6:boolean =false
	botaoAtivado7:boolean =false
	botaoAtivado8:boolean =false

	
	variableDeTexto:string = ''
	col = ''

	constructor(private modal:NgbModal){

	}
	
	ngOnInit(): void {
		setTimeout(()=>{
		
		},3000)
	}

	mudarCorElements(event:any){

		console.log(event);
		if (event == 'btnCaroussel1') {
			this.botaoAtivado1 = true
			this.botaoAtivado2 =false
			this.botaoAtivado3 =false
			this.botaoAtivado4 =false
			this.botaoAtivado5 =false
			this.botaoAtivado6 =false
			this.botaoAtivado7 =false
			this.botaoAtivado8 =false
		}if (event == 'btnCaroussel2') {
			this.botaoAtivado1 = true
			this.botaoAtivado2 = true
			this.botaoAtivado3 =false
			this.botaoAtivado4 =false
			this.botaoAtivado5 =false
			this.botaoAtivado6 =false
			this.botaoAtivado7 =false
			this.botaoAtivado8 =false
		}if (event == 'btnCaroussel3') {
			this.botaoAtivado1 = true
			this.botaoAtivado2 = true
			this.botaoAtivado3 = true
			this.botaoAtivado4 = false
			this.botaoAtivado5 =false
			this.botaoAtivado6 =false
			this.botaoAtivado7 =false
			this.botaoAtivado8 =false
		}if (event == 'btnCaroussel4') {
			this.botaoAtivado1 = true
			this.botaoAtivado2 = true
			this.botaoAtivado3 = true
			this.botaoAtivado4 = true
			this.botaoAtivado5 =false
			this.botaoAtivado6 =false
			this.botaoAtivado7 =false
			this.botaoAtivado8 =false
		}if (event == 'btnCaroussel5') {
			this.botaoAtivado1 = true
			this.botaoAtivado2 = true
			this.botaoAtivado3 = true
			this.botaoAtivado4 = true
			this.botaoAtivado5 = true
			this.botaoAtivado6 =false
			this.botaoAtivado7 =false
			this.botaoAtivado8 =false
		}if (event == 'btnCaroussel6') {
			this.botaoAtivado1 = true
			this.botaoAtivado2 = true
			this.botaoAtivado3 = true
			this.botaoAtivado4 =true
			this.botaoAtivado5 =true
			this.botaoAtivado6 =true
			this.botaoAtivado7 =false
			this.botaoAtivado8 =false
		}
		if (event == 'btnCaroussel7') {
			this.botaoAtivado1 = true
			this.botaoAtivado2 = true
			this.botaoAtivado3 = true
			this.botaoAtivado4 = true
			this.botaoAtivado5 = true
			this.botaoAtivado6 = true
			this.botaoAtivado7 = true
			this.botaoAtivado8 =false
		}if (event == 'btnCaroussel8' || event == 'skip') {
			this.botaoAtivado1 = true
			this.botaoAtivado2 = true
			this.botaoAtivado3 = true
			this.botaoAtivado4 = true
			this.botaoAtivado5 = true
			this.botaoAtivado6 = true
			this.botaoAtivado7 = true
			this.botaoAtivado8 = true
		}
	}

	mudarCorElementsPrevious(event:any){

		console.log(event);
		if (this.botaoAtivado1) {
			this.botaoAtivado1 = false
			this.botaoAtivado2 =false
			this.botaoAtivado3 =false
			this.botaoAtivado4 =false
			this.botaoAtivado5 =false
			this.botaoAtivado6 =false
			this.botaoAtivado7 =false
			this.botaoAtivado8 =false
		} if (this.botaoAtivado2) {
			this.botaoAtivado1 = true
			this.botaoAtivado2 = false
			this.botaoAtivado3 =false
			this.botaoAtivado4 =false
			this.botaoAtivado5 =false
			this.botaoAtivado6 =false
			this.botaoAtivado7 =false
			this.botaoAtivado8 =false
		}if (this.botaoAtivado3) {
			this.botaoAtivado1 = true
			this.botaoAtivado2 = true
			this.botaoAtivado3 = false
			this.botaoAtivado4 = false
			this.botaoAtivado5 =false
			this.botaoAtivado6 =false
			this.botaoAtivado7 =false
			this.botaoAtivado8 =false
		}if (this.botaoAtivado4) {
			this.botaoAtivado1 = true
			this.botaoAtivado2 = true
			this.botaoAtivado3 = true
			this.botaoAtivado4 = false
			this.botaoAtivado5 =false
			this.botaoAtivado6 =false
			this.botaoAtivado7 =false
			this.botaoAtivado8 =false
		}if (this.botaoAtivado5) {
			this.botaoAtivado1 = true
			this.botaoAtivado2 = true
			this.botaoAtivado3 = true
			this.botaoAtivado4 = true
			this.botaoAtivado5 = false
			this.botaoAtivado6 =false
			this.botaoAtivado7 =false
			this.botaoAtivado8 =false
		}if (this.botaoAtivado6) {
			this.botaoAtivado1 = true
			this.botaoAtivado2 = true
			this.botaoAtivado3 = true
			this.botaoAtivado4 =true
			this.botaoAtivado5 =true
			this.botaoAtivado6 =false
			this.botaoAtivado7 =false
			this.botaoAtivado8 =false
		}
		if (this.botaoAtivado7) {
			this.botaoAtivado1 = true
			this.botaoAtivado2 = true
			this.botaoAtivado3 = true
			this.botaoAtivado4 = true
			this.botaoAtivado5 = true
			this.botaoAtivado6 = true
			this.botaoAtivado7 = false
			this.botaoAtivado8 =false
		}if (this.botaoAtivado8) {
			this.botaoAtivado1 = true
			this.botaoAtivado2 = true
			this.botaoAtivado3 = true
			this.botaoAtivado4 = true
			this.botaoAtivado5 = true
			this.botaoAtivado6 = true
			this.botaoAtivado7 = true
			this.botaoAtivado8 = false
		}
	}

	modalFinalizacao(content:any){
		this.modal.open(content,{size:'sm'})
	}
}
