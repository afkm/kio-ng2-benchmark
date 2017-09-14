import { Component, OnInit } from '@angular/core';
import { RoutableComponent, FragmentDataComponent } from '../../../component-routing/module'
import { Criteria } from './audioplayer.component.criteria'
import { AudioState } from 'kio-ng2-audio'

import { KioContentModel, KioFragmentModel } from 'kio-ng2-data'

@RoutableComponent({
  queryable: Criteria,
  selector: 'kio-audioplayer',
  templateUrl: './audioplayer.component.html',
  styleUrls: ['./audioplayer.component.scss']
})
export class AudioplayerComponent extends FragmentDataComponent {

  onNodeUpdate(){
    super.onNodeUpdate()

    if(this.node) {
      this.setupChildren()
    }
  }

  titleNode:KioContentModel
  descNode:KioContentModel
  audioNode:KioContentModel

  play:boolean = false
  ready:boolean = false

  time:number = 0
  duration:number = 0
  progress:number = 0

  audioState:AudioState = AudioState.idle

  appliedThemeMods:string[]

  updateState(state:AudioState){

    this.ready = ( state >= AudioState.ready )
    this.audioState = state
    if ( state === AudioState.finished )
    {
      this.play = false
    }

  }

  updateProgress([time,duration]) {

    this.time = time||0
    this.duration = duration
    this.progress = this.time/this.duration
  }

  updateMetadata(props) {

    this.duration = props.duration
  }

  setupChildren(){

    this.titleNode = this.node.childAt(0)
    this.audioNode = this.node.childAt(1)
    this.descNode = this.node.childAt(2)
  }

}
