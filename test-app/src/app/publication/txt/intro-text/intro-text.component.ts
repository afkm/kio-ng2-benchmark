import { Component, OnInit } from '@angular/core';
import { RoutableComponent, ContentDataComponent } from '../../../component-routing/module'
import { KioContentModel, KioFragmentModel } from 'kio-ng2-data'
import { Criteria } from './intro-text.component.criteria'

@RoutableComponent({
  queryable: Criteria,
  selector: 'kio-intro-text',
  templateUrl: './intro-text.component.html',
  styleUrls: ['./intro-text.component.scss']
})
export class IntroTextComponent extends ContentDataComponent {

  
}
