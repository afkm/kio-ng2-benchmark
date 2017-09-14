import { Component, OnInit, Output, Input, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { RoutableComponent, FragmentDataComponent } from '../../../component-routing/module'
import { Criteria } from './meta-image.component.criteria'

import { KioContentModel, KioFragmentModel } from 'kio-ng2-data'

@RoutableComponent({
  queryable: Criteria,
  selector: 'kio-meta-image',
  templateUrl: './meta-image.component.html',
  styleUrls: ['./meta-image.component.scss']
})
export class MetaImageComponent extends FragmentDataComponent {


  @Output() innerHeightUpdate = new EventEmitter<any>()
  @Input() minBodyHeight:number
  @ViewChild('metaImageInner') metaImageInner:ElementRef

  @Input() stripStyles:boolean = false

  onNodeUpdate(){
    super.onNodeUpdate()

    if (this.node) {
      this.setupChildren()
    }
  }

  isOpen:boolean = false
  bodyHeight:number = 0
  innerHeight:number = 0


  imageNode:KioContentModel
  headingNode:KioContentModel
  textNode:KioContentModel
  metaNode:KioContentModel


  hasMeta:boolean = false
  showMeta:boolean = false


  setupChildren() {

    this.imageNode = this.node.childAt(0);
    this.headingNode = this.node.childAt(1);
    this.metaNode = this.node.childAt(2);
    this.textNode = this.node.childAt(3);
  }


  updateInnerHeight() {

    setTimeout( () => {

      this.innerHeight = this.metaImageInner.nativeElement.offsetHeight
      this.innerHeightUpdate.emit(this.innerHeight)

    }, 0);

  }



  toggleOpen() {

    this.innerHeight = this.metaImageInner.nativeElement.offsetHeight

    if(!this.isOpen) {

      this.bodyHeight = this.innerHeight
    }
    else {

      this.bodyHeight = 0
    }

    this.isOpen = !this.isOpen
  }



  setupMeta(data) {

    if(data && data.text && data.text !== '') {

      this.hasMeta = true
    }
  }


}
