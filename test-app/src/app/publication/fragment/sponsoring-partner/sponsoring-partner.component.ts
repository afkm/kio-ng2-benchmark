import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RoutableComponent, FragmentDataComponent } from '../../../component-routing/module'
import { Criteria } from './sponsoring-partner.component.criteria'

import { KioContentModel, KioFragmentModel } from 'kio-ng2-data'

@RoutableComponent({
  queryable: Criteria,
  selector: 'kio-sponsoring-partner',
  templateUrl: './sponsoring-partner.component.html',
  styleUrls: ['./sponsoring-partner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SponsoringPartnerComponent extends FragmentDataComponent {

  textNode:KioContentModel
  imageNode:KioContentModel

  onNodeUpdate () {

    super.onNodeUpdate()
    this.setupChildren()
  }


  setupChildren() {

    this.textNode = this.node.childAt(0);
    this.imageNode = this.node.childAt(1);

  }

}
