import { Component, OnInit } from '@angular/core';
import { RoutableComponent, FragmentDataComponent } from '../../../component-routing/module'
import { Criteria } from './two-columns-and-image.component.criteria'

import { KioContentModel, KioFragmentModel } from 'kio-ng2-data'

@RoutableComponent({
  queryable: Criteria,
  selector: 'kio-two-columns-and-image',
  templateUrl: './two-columns-and-image.component.html',
  styleUrls: ['./two-columns-and-image.component.scss']
})
export class TwoColumnsAndImageComponent extends FragmentDataComponent {


  firstNode:any
  secondNode:any

  appliedMods:string[]=[]

  imageRatio:number

  ngOnInit() {
    super.ngOnInit()

    if(this.node) {
      this.setupMods()
    }
  }

  onNodeUpdate () {

    super.onNodeUpdate()

    if(this.node) {

      this.setupChildren()
    }
  }

  setupMods() {

    const availableMods = ['reverse']
    this.appliedMods = []
    for (let mod of this.node.modifiers) {
      if (availableMods.indexOf(mod) > -1) {
        this.appliedMods.push(mod);
      }
    }
  }

  setupChildren() {

    this.firstNode = this.node.childAt(0);
    this.secondNode = this.node.childAt(1);

    if(this.firstNode.type !== 'txt') {

      this.imageRatio = this.firstNode.childAt(0).headers.ratio
    }

    if(this.secondNode.type !== 'txt') {

      this.imageRatio = this.secondNode.childAt(0).headers.ratio
    }
  }

}
