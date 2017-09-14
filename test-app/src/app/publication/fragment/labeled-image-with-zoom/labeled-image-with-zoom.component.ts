import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { RoutableComponent, FragmentDataComponent } from '../../../component-routing/module'
import { Criteria } from './labeled-image-with-zoom.component.criteria'

import { KioContentModel, KioFragmentModel } from 'kio-ng2-data'

import { MarginPosition } from '../../../scrolling'

@RoutableComponent({
  queryable: Criteria,
  selector: 'kio-labeled-image-with-zoom',
  templateUrl: './labeled-image-with-zoom.component.html',
  styleUrls: ['./labeled-image-with-zoom.component.scss']
})
export class LabeledImageWithZoomComponent extends FragmentDataComponent {


  imageNode:KioContentModel
  captionNode:KioContentModel
  metaNode:KioContentModel

  appliedThemeMods:string[]

  imageRatio:number

  hasMeta:boolean = false
  showMeta:boolean = false

  isZoomed:boolean = false
  zoomCoords:number[]

  imageMultiplier:number

  transformOrigin:string
  transform:string


  breakPointMobile = 767


  onNodeUpdate(){
    super.onNodeUpdate()

    if(this.node) {
      this.setupChildren()
      this.setupCoords()

      // start
      process.nextTick( () => {
        this.zoomIn()
      })

    }
  }



  setupCoords() {

    const x_mod = this.node.modifiers.find ( mod => mod.startsWith ( 'x-' ) );
    const y_mod = this.node.modifiers.find ( mod => mod.startsWith ( 'y-' ) );
    const z_mod = this.node.modifiers.find ( mod => mod.startsWith ( 'z-' ) );

    let x = 50
    let y = 50
    let z = 150

    if (x_mod) {
      x = parseInt(x_mod.split('-')[1])
    }
    if (y_mod) {
      y = parseInt(y_mod.split('-')[1])
    }
    if (z_mod) {
      z = parseInt(z_mod.split('-')[1])
    }

    this.zoomCoords = [x, y, z];

    this.updateMultiplier()
    this.updateOriginStyles()
  }



  setupChildren() {

    this.imageNode = this.node.childAt(0)
    this.captionNode = this.node.childAt(1)
    this.metaNode = this.node.childAt(2)

    this.imageRatio = this.imageNode.headers.ratio
  }

  setupMeta(data) {

    if(data && data.text && data.text !== '') {

      this.hasMeta = true
    }
  }

  toggleZoom() {
    this.isZoomed = !this.isZoomed

    let c = this.zoomCoords

    if (this.isZoomed) {
      this.transform = 'scale(' + c[2] / 100 + ')'
    }
    else {
      this.transform = 'scale(1)'
    }
  }

  zoomIn() {
    let c = this.zoomCoords

    this.transform = 'scale(' + c[2] / 100 + ')'
    this.isZoomed = true
  }

  zoomOut() {

    this.transform = 'scale(1)'
    this.isZoomed = false
  }


  updateOriginStyles() {

    let c = this.zoomCoords

    // setup first origins
    this.transformOrigin = c[0] + '% ' + c[1] + '% '
  }

  updateMultiplier() {

    let c = this.zoomCoords

    this.imageMultiplier = Math.floor(c[2] / 100)
  }


  /** Scrolling */

  isInViewport:boolean = false
  @ViewChild('scrollTarget') scrollTarget:ElementRef



  onScrollMarginUpdates(positions:number[]){

    if ( this.canAnimateContent )
    {
      this.toggleState(positions, 0.25);
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

    if (window.innerWidth > this.breakPointMobile) {

      if (positions[0] < threshold) {
        this.zoomOut()
      }
      else {
        this.zoomIn()
      }
    }
  }

}
