import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RoutableComponent, FragmentDataComponent } from '../../../component-routing/module'
import { Criteria } from './nba-group.component.criteria'

import { KioContentModel, KioFragmentModel } from 'kio-ng2-data'

@RoutableComponent({
  queryable: Criteria,
  selector: 'kio-nba-group',
  templateUrl: './nba-group.component.html',
  styleUrls: ['./nba-group.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NbaGroupComponent extends FragmentDataComponent {


  onNodeUpdate(){
    super.onNodeUpdate()

    this.assignChildNodes()
  }

  nbaList:KioContentModel[]

  // protected localeSubscription=this.localeService.changes.subscribe ( nextLocale => {
  //   this.assignChildNodes()
  // } )

  protected assignChildNodes() {
    if ( this.node )
    {
      this.nbaList = this.node.children.filter ( childNode => {
        // const hideOnLang = childNode.modifiers.find ( m => /^hide\-on\-/.test(m) )
        // return !hideOnLang || hideOnLang.slice(-2) !== this.localeService.currentLang
        return true
      } )
    }
  }

}
