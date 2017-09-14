import { Component, OnInit } from '@angular/core';
import { RoutableComponent, FragmentDataComponent } from '../../../component-routing/module'
import { Criteria } from './big-pic.component.criteria'

import { KioContentModel, KioFragmentModel } from 'kio-ng2-data'

@RoutableComponent({
  queryable: Criteria,
  selector: 'kio-big-pic',
  templateUrl: './big-pic.component.html',
  styleUrls: ['./big-pic.component.scss']
})
export class BigPicComponent extends FragmentDataComponent {


  dateNode:KioContentModel
  headingNode:KioContentModel
  subHeadingNode:KioContentModel

  headingAsImageNode:KioContentModel

  imageNodeBack:KioContentModel
  imageNodeFront:KioContentModel


  onNodeUpdate () {

    super.onNodeUpdate()

    if(this.node) {

      this.setupChildren()
    }
  }

  setupChildren() {

    this.dateNode = this.node.childAt(0)
    this.headingNode = this.node.childAt(1)
    this.subHeadingNode = this.node.childAt(2)

    this.headingAsImageNode = this.node.childAt(3)

    this.imageNodeBack = this.node.childAt(4)
    this.imageNodeFront = this.node.childAt(5)
  }
}
