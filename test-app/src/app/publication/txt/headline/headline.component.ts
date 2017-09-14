import { Component, OnInit } from '@angular/core';
import { RoutableComponent, ContentDataComponent } from '../../../component-routing/module'
import { KioContentModel, KioFragmentModel } from 'kio-ng2-data'
import { Criteria } from './headline.component.criteria'
@RoutableComponent({
  queryable: Criteria,
  selector: 'kio-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.scss']
})
export class HeadlineComponent extends ContentDataComponent {

  
}
