import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { RoutableComponent, FragmentDataComponent } from '../../../component-routing/module'
import { Criteria } from './single-column.component.criteria'

import { KioContentModel, KioFragmentModel } from 'kio-ng2-data'

@RoutableComponent({
  queryable: Criteria,
  selector: 'kio-single-column',
  templateUrl: './single-column.component.html',
  styleUrls: ['./single-column.component.scss']
})
export class SingleColumnComponent extends FragmentDataComponent {

  textNode:KioContentModel

  onNodeUpdate(){
    super.onNodeUpdate()

    if (this.node) {
      this.setupChildren()
    }
  }

  setupChildren() {
    this.textNode = this.node.childAt(0)
  }
}
