import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RoutableComponent, FragmentDataComponent } from '../../../component-routing/module'
import { Criteria } from './meta-box.component.criteria'

import { KioContentModel, KioFragmentModel } from 'kio-ng2-data'

@RoutableComponent({
  queryable: Criteria,
  selector: 'kio-meta-box',
  templateUrl: './meta-box.component.html',
  styleUrls: ['./meta-box.component.scss']
})
export class MetaBoxComponent extends FragmentDataComponent {

  isOpen = false
  titleNode:KioContentModel
  textNode:KioContentModel
  textNode2:KioContentModel
  imageNode:KioContentModel
  bodyHeight:number = 0


  onNodeUpdate(){

    super.onNodeUpdate()

    if(this.node) {
      this.setupChildren();
    }
  }


  setupChildren() {

    // schema: txt, txt, (txt), (fragment)

    this.titleNode = this.node.childAt(0)
    this.textNode = this.node.childAt(1)

    let additionalNode1:any
    let additionalNode2:any

    if (this.node.children.length > 2) {

      additionalNode1 = this.node.childAt(2);
    }
    if (this.node.children.length > 3) {

      additionalNode2 = this.node.childAt(3);
    }


    if (additionalNode1) {

      if (additionalNode1.type === 'txt') {
        this.textNode2 = additionalNode1
      }
      else {
        this.imageNode = additionalNode1
      }
    }

    if (additionalNode2) {

      if (additionalNode2.type === 'txt') {
        this.textNode2 = additionalNode2
      }
      else {
        this.imageNode = additionalNode2
      }
    }
  }


  @ViewChild('metaboxInner') metaboxInner:ElementRef


  toggleOpen() {

    if(!this.isOpen) {

      let innerHeight = this.metaboxInner.nativeElement.offsetHeight
      this.bodyHeight = innerHeight
    }
    else {

      this.bodyHeight = 0
    }

    this.isOpen = !this.isOpen
  }


}
