import { Component, OnInit } from '@angular/core';
import { RoutableComponent, FragmentDataComponent } from '../../../component-routing/module'
import { Criteria } from './section-headline.component.criteria'

import { KioContentModel, KioFragmentModel } from 'kio-ng2-data'

@RoutableComponent({
  queryable: Criteria,
  selector: 'kio-section-headline',
  templateUrl: './section-headline.component.html',
  styleUrls: ['./section-headline.component.scss']
})
export class SectionHeadlineComponent extends FragmentDataComponent {

  line1:KioContentModel
  line2:KioContentModel

  onNodeUpdate(){
    super.onNodeUpdate()

    if (this.node) {

      this.setupChildren()
    }
  }

  setupChildren() {

    if(this.node.children) {

      this.line1 = this.node.childAt(0)
      this.line2 = this.node.childAt(1)
    }
  }
}
