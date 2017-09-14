import { Component, OnInit } from '@angular/core';
import { RoutableComponent, FragmentDataComponent } from '../../../component-routing/module'
import { Criteria } from './meta-images.component.criteria'

import { KioContentModel, KioFragmentModel } from 'kio-ng2-data'

@RoutableComponent({
  queryable: Criteria,
  selector: 'kio-meta-images',
  templateUrl: './meta-images.component.html',
  styleUrls: ['./meta-images.component.scss']
})
export class MetaImagesComponent extends FragmentDataComponent {

  onNodeUpdate() {
    super.onNodeUpdate()
  }

  minBodyHeight:number = 0
  minHeadingHeight:number = 0

  egalizeBodyHeights(height) {

    // if(height > this.minBodyHeight) {
    //
    //   this.minBodyHeight = height
    // }
  }

  egalizeHeadingHeights(height) {

    // if(height > this.minHeadingHeight) {
    //
    //   this.minHeadingHeight = height
    // }
  }

}
