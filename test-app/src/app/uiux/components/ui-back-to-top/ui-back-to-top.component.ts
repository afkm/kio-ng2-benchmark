import { Component } from '@angular/core';

@Component({
  selector: 'ui-back-to-top',
  templateUrl: './ui-back-to-top.component.html',
  styleUrls: ['./ui-back-to-top.component.scss']
})
export class UiBackToTopComponent {

  constructor() { 
    setTimeout(()=>{
      this.hidden = false
    },5000)
  }

  hidden:boolean=true

}
