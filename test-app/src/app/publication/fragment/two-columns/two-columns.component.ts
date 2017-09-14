import { Component, OnInit } from '@angular/core';
import { RoutableComponent, FragmentDataComponent } from '../../../component-routing/module'
import { Criteria } from './two-columns.component.criteria'

import { KioContentModel, KioFragmentModel } from 'kio-ng2-data'

@RoutableComponent({
  queryable: Criteria,
  selector: 'kio-two-columns',
  templateUrl: './two-columns.component.html',
  styleUrls: ['./two-columns.component.scss']
})
export class TwoColumnsComponent extends FragmentDataComponent {


  col1:KioContentModel
  col2:KioContentModel

  onNodeUpdate(){
    super.onNodeUpdate()

    if (this.node) {

      this.setupChildren()
    }
  }

  setupChildren() {

    if(this.node.children && this.node.children.length > 1) {

      this.col1 = this.node.childAt(0)
      this.col2 = this.node.childAt(1)
    }
  }
}
