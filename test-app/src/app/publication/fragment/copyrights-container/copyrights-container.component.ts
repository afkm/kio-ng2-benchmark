import { Component, OnInit } from '@angular/core';
import { RoutableComponent, FragmentDataComponent } from '../../../component-routing/module'
import { Criteria } from './copyrights-container.component.criteria'

import { KioContentModel, KioFragmentModel } from 'kio-ng2-data'

@RoutableComponent({
  queryable: Criteria,
  selector: 'kio-copyrights-container',
  templateUrl: './copyrights-container.component.html',
  styleUrls: ['./copyrights-container.component.scss']
})
export class CopyrightsContainerComponent extends FragmentDataComponent {


}
