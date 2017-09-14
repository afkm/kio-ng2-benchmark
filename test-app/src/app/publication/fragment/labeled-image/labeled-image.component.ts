import { Component, OnInit, Input, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { RoutableComponent, FragmentDataComponent } from '../../../component-routing/module'
import { Criteria } from './labeled-image.component.criteria'

import { LightboxService } from '../../../lightbox/lightbox.module'

import { KioContentModel, KioFragmentModel } from 'kio-ng2-data'

import { MarginPosition } from '../../../scrolling'

@RoutableComponent({
  queryable: Criteria,
  selector: 'kio-labeled-image',
  templateUrl: './labeled-image.component.html',
  styleUrls: ['./labeled-image.component.scss']
})
export class LabeledImageComponent extends FragmentDataComponent {

  protected lightboxService:LightboxService=this.injector.get(LightboxService)

  imageNode:KioContentModel
  captionNode:KioContentModel
  metaNode:KioContentModel

  imageRatio:number

  hasMeta:boolean = false
  showMeta:boolean = false

  appliedThemeMods:string[]

  @Input('lbGroup') lightboxGroup:string

  @Input() stripStyles:boolean = false
  @Input() lightbox:boolean = false

  @Input() viewParams = {}

  @Output() imageLoad:EventEmitter<any>=new EventEmitter<any>()

  onImageLoad() {
    this.imageLoad.emit()
  }

  onNodeUpdate(){
    super.onNodeUpdate()

    if(this.node) {
      this.setupChildren()

      if ( this.lightboxGroup ) {
        this.lightboxService.registerNode ( this.node, this.lightboxGroup )
      }
    }
  }


  setupChildren() {

    this.imageNode = this.node.childAt(0)
    this.captionNode = this.node.childAt(1)
    this.metaNode = this.node.childAt(2)

    this.imageRatio = this.imageNode.headers.ratio
  }

  setupMeta(data) {

    if(data && data.text && data.text !== '') {

      process.nextTick(()=>this.hasMeta = true)
    }
  }

  /** Scrolling */

  ngOnInit(){
    super.ngOnInit()
    this._setupScrolling()
  }


  isInViewport:boolean = false

  @ViewChild('scrollTarget') scrollTarget:ElementRef


  onScrollMarginUpdates(positions:number[]){

    if ( this.canAnimateContent ) {

      if (positions[0] < 0.5) {

        this.isInViewport = true
      }
      else {

        this.isInViewport = false
      }
    }
  }

  private _setupScrolling(){
    this.startScrollTracking(
      [
        {
          position: MarginPosition.top
        }
      ],
      this.scrollTarget
    )
  }

}
