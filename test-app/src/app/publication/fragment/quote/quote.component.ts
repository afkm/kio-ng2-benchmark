import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RoutableComponent, FragmentDataComponent } from '../../../component-routing/module'
import { Criteria } from './quote.component.criteria'

import { KioContentModel, KioFragmentModel } from 'kio-ng2-data'

import { MarginPosition } from '../../../scrolling'


@RoutableComponent({
  queryable: Criteria,
  selector: 'kio-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent extends FragmentDataComponent {

  quoteNode:KioContentModel
  citeNode:KioContentModel
  metaNode:KioContentModel

  hasMeta:boolean = false
  showMeta:boolean = false


  onNodeUpdate(){
    super.onNodeUpdate()

    if(this.node) {
      this.setupChildren();
    }
  }


  setupChildren() {

    this.quoteNode = this.node.childAt(0);
    this.citeNode = this.node.childAt(1);
    this.metaNode = this.node.childAt(2);
  }

  setupMeta(data) {

    if(data && data.text && data.text !== '') {

      this.hasMeta = true
    }
  }



  /** Scrolling */

  isInViewport:boolean = false
  @ViewChild('scrollTarget') scrollTarget:ElementRef



  onScrollMarginUpdates(positions:number[]){

    if ( this.canAnimateContent )
    {
      this.toggleState(positions, 0.7);
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


  ngOnInit(){
    super.ngOnInit()
    this._setupScrolling()
  }


  toggleState(positions, threshold:number=1) {

    if (positions[0] < threshold) {
      this.isInViewport = true
    }
    else {
      this.isInViewport = false
    }
  }

}
