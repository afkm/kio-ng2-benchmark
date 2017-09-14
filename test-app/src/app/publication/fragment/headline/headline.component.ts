import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RoutableComponent, FragmentDataComponent } from '../../../component-routing/module'
import { Criteria } from './headline.component.criteria'

import { KioContentModel, KioFragmentModel } from 'kio-ng2-data'

import { MarginPosition } from '../../../scrolling'


@RoutableComponent({
  queryable: Criteria,
  selector: 'kio-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.scss']
})
export class HeadlineComponent extends FragmentDataComponent {

  text:KioContentModel

  onNodeUpdate(){
    super.onNodeUpdate()

    if (this.node) {

      this.setupChildren()
    }
  }

  setupChildren() {

    if(this.node.children) {

      this.text = this.node.childAt(0)
    }
  }

  /** Scrolling */

  isInViewport:boolean = false
  @ViewChild('scrollTarget') scrollTarget:ElementRef



  onScrollMarginUpdates(positions:number[]){

    if ( this.canAnimateContent )
    {
      this.toggleState(positions, 0.5);
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
