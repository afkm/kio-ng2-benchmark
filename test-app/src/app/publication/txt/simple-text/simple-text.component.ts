import { Component, OnInit, AfterContentInit } from '@angular/core';
import { RoutableComponent, ContentLoaderDirective, TextDataComponent } from '../../../component-routing/module'

@RoutableComponent({
  selector: 'publication-simple-text',
  templateUrl: './simple-text.component.html',
  styleUrls: ['./simple-text.component.scss'],
  queryable: {
    type: 'txt' ,
    modifiers: [ 'simple' ]
  }
})
export class SimpleTextComponent extends TextDataComponent {

  stateChangeTimeout:number=5000

}
