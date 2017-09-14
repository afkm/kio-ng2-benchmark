import { Component, OnInit } from '@angular/core';
import { RoutableComponent, FragmentDataComponent } from '../../../component-routing/module'
import { Criteria } from './newsticker.component.criteria'

import { KioContentModel, KioFragmentModel } from 'kio-ng2-data'

@RoutableComponent({
  queryable: Criteria,
  selector: 'kio-newsticker',
  templateUrl: './newsticker.component.html',
  styleUrls: ['./newsticker.component.scss']
})
export class NewstickerComponent extends FragmentDataComponent {

  line1:KioContentModel
  line2:KioContentModel
  line3:KioContentModel

  loadedNodes = []

  onNodeUpdate(){
    super.onNodeUpdate()

    if(this.node) {

      this.setupChildren()
    }
  }

  setupChildren() {

    this.line1 = this.node.childAt(0);
    this.line2 = this.node.childAt(1);
    this.line3 = this.node.childAt(2);
  }

}
