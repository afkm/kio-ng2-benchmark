import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RoutableComponent, FragmentDataComponent } from '../../../component-routing/module'
//import { VideoState } from '../../../video/video.module'
import { Criteria } from './video.component.criteria'

import { KioContentModel, KioFragmentModel, KioOEmbed, KioOEmbedData } from 'kio-ng2-data'

import { MarginPosition } from '../../../scrolling'


@RoutableComponent({
  queryable: Criteria,
  selector: 'kio-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent extends FragmentDataComponent {

  headingNode:KioContentModel
  videoNode:KioContentModel


  playing:boolean=false
  fitToBox:boolean

  defaultRatio:number = (640/360)

  updateVideoState ( state ) {
    console.log('video component state changes to: ', state)
    if ( state === 4 ) {
      this.playing = false
    } else if ( state === 2 ) {
      this.playing = true
    }
  }

  startPlaying ( event ) {
    this.playing = true
  }

  onUpdate () {
    super.onUpdate()
    this.updateEmbedData ( this.node.data.oEmbed )

    if (this.node && this.node.modifiers) {
      this.fitToBox = this.node.modifiers.indexOf('fit-to-box') !== -1
    }
  }

  onNodeUpdate(){
    super.onNodeUpdate()

    if(this.node) {
      this.setupChildren()
    }
  }

  setupChildren() {
    this.videoNode = this.node.childAt(0);
    this.headingNode = this.node.childAt(1);
  }

  /** Scrolling */

  isInViewport:boolean = false
  @ViewChild('scrollTarget') scrollTarget:ElementRef

  /**
   * reference to container element in template
   * @param {ElementRef} 'container' container element
   */
  @ViewChild('container') container:ElementRef
  @ViewChild('iframe') iframe:ElementRef


  updateEmbedData(embed?:KioOEmbed){
    if ( embed )
    {
      this.updateIFrame(embed.data)
    }
  }

  getRatio ():number {
    if ( (<KioContentModel>this.node).headers )
    {
      return (<KioContentModel>this.node).headers.ratio || this.defaultRatio
    }
    return this.defaultRatio
  }

  protected updateIFrame ( embedData : KioOEmbedData ) {
    const iframe:HTMLIFrameElement = this.iframe.nativeElement
    for ( let key in embedData.attributes )
    {
      iframe.setAttribute ( key , embedData.attributes[key] )
    }
    this.resizeContent()
  }

  resizeContent () {
    const bounds = this.container.nativeElement.getBoundingClientRect()
    this.iframe.nativeElement.setAttribute ( 'width' , bounds.width + 'px' )
    this.iframe.nativeElement.setAttribute ( 'height' , (bounds.width / this.getRatio()) + 'px' )
  }

  protected onResize () {
    this.resizeContent()
  }

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
