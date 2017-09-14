import { Component, OnInit } from '@angular/core';
import { RoutableComponent, FragmentDataComponent } from '../../../component-routing/module'
import { Criteria } from './hint.component.criteria'

import { KioContentModel, KioFragmentModel } from 'kio-ng2-data'

@RoutableComponent({
  queryable: Criteria,
  selector: 'kio-hint',
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.scss']
})
export class HintComponent extends FragmentDataComponent {


  titleNode:KioContentModel
  imageNode:KioFragmentModel
  textNode:KioContentModel

  onNodeUpdate(){
    super.onNodeUpdate()

    if (this.node) {

      this.setupChildren()
    }
  }

  setupChildren() {

    this.titleNode = this.node.childAt(0)
    this.imageNode = <KioFragmentModel>this.node.childAt(1)
    this.textNode = this.node.childAt(2)

  }
}
