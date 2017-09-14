import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UiButtonComponent implements OnInit {

  @Input() icon: string = "default"

  constructor() { }

  ngOnInit() {
  }

}
