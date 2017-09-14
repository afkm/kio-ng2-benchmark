import { Component, OnInit } from '@angular/core';
import { RoutableComponent, FragmentDataComponent } from '../../../component-routing/module'
import { Criteria } from './chapter-cover.component.criteria'

import { KioContentModel, KioFragmentModel } from 'kio-ng2-data'

@RoutableComponent({
  queryable: Criteria,
  selector: 'kio-chapter-cover',
  templateUrl: './chapter-cover.component.html',
  styleUrls: ['./chapter-cover.component.scss']
})
export class ChapterCoverComponent extends FragmentDataComponent {

  imageNode:KioContentModel
  titleNode1:KioContentModel
  titleNode2:KioContentModel
  introNode:KioContentModel

  appliedMods:string[]

  hasStarted:boolean = true
  hasEnded:boolean = false

  onNodeUpdate () {

    super.onNodeUpdate()

    if(this.node) {

      this.setupChildren()
    }
  }

  ngOnInit() {
    super.ngOnInit()

    if(this.node) {
      this.setupMods()
    }
  }


  setupChildren() {
    this.imageNode = this.node.childAt(0);
    this.titleNode1 = this.node.childAt(1);
    this.titleNode2 = this.node.childAt(2);
    this.introNode = this.node.childAt(3);
  }

  setupMods() {

    const availableMods = ['reverse','invert','flip']
    this.appliedMods = []
    for (let mod of this.node.modifiers) {
      if (availableMods.indexOf(mod) > -1) {
        this.appliedMods.push(mod);
      }
    }
  }
}
