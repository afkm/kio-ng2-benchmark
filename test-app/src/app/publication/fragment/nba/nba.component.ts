import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { RoutableComponent, FragmentDataComponent } from '../../../component-routing/module'
import { Criteria } from './nba.component.criteria'

import { KioContentModel, KioFragmentModel } from 'kio-ng2-data'

@RoutableComponent({
  queryable: Criteria,
  selector: 'kio-nba',
  templateUrl: './nba.component.html',
  styleUrls: ['./nba.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NbaComponent extends FragmentDataComponent {

  @Output() onHide = new EventEmitter<any>()

  onNodeUpdate(){
    super.onNodeUpdate()

    if ( this.node )
    {
      this.linkTxtNode = this.node.childAt(4)
    }

  }

  linkTxtNode:KioContentModel
  linkUrl:string

  onLinkData(data:any) {
    process.nextTick(()=>this.linkUrl = data.text)
  }
}
