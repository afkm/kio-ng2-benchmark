import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { RoutableComponent, FragmentDataComponent } from '../../../component-routing/module'
import { Criteria } from './single-column-collapsible.component.criteria'

import { KioContentModel, KioFragmentModel } from 'kio-ng2-data'

@RoutableComponent({
  queryable: Criteria,
  selector: 'kio-single-column-collapsible',
  templateUrl: './single-column-collapsible.component.html',
  styleUrls: ['./single-column-collapsible.component.scss']
})
export class SingleColumnCollapsibleComponent extends FragmentDataComponent {

  textNode:KioContentModel
  isCollapsible:boolean
  containerHeight:number
  isCollapsed:boolean = true

  onNodeUpdate(){
    super.onNodeUpdate()

    if (this.node) {
      this.setupChildren()
    }
  }

  setupChildren() {
    this.textNode = this.node.childAt(0)
  }


  @ViewChild('collapsibleInner') collapsibleInner:ElementRef


  toggleCollapse() {

    if(this.isCollapsed) {

      let innerHeight = this.collapsibleInner.nativeElement.offsetHeight
      this.containerHeight = innerHeight
    }

    else {

      this.containerHeight = 0
    }

    this.isCollapsed = !this.isCollapsed
  }
}
