import { 
  Component, ElementRef, ViewChild, AfterViewInit, Input, Output, EventEmitter, OnChanges,
  SimpleChange, OnDestroy
} from '@angular/core';
import { RoutableComponent, DataComponent, ContentDataComponent } from '../../../component-routing/module'
import { LocaleService } from '../../../i18n/module'
import { BackendService } from '../../../ctn/module'

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AudioPlayer, AudioSource, AudioState } from 'kio-ng2-audio'
import { Criteria } from './audio.component.criteria'


@RoutableComponent({
  selector: 'publication-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss'],
  queryable: Criteria
})
export class AudioComponent extends ContentDataComponent implements AfterViewInit, OnChanges, OnDestroy {

  public sanitizer:DomSanitizer=this.injector.get(DomSanitizer)
  protected localeService:LocaleService=this.injector.get(LocaleService)
  
  set inputNode ( node:any ) {
    this.updateNode ( node )
  }

  get inputNode ():any {
    return this.node
  }
  
  //sanitizer:DomSanitizer=this.injector.get(DomSanitizer)
  audioSrcs:AudioSource[]
  //private _html5audio:AudioInterface
  private _audioPlayer=new AudioPlayer()

  isPlaying:boolean = false

  @Input() play:boolean=false
  @Output() onReady = new EventEmitter<boolean>()
  @Output() onProgress = new EventEmitter<[number,number]>()
  @Output() onMetadata = new EventEmitter<number>()
  @Output() onStateChange = new EventEmitter<AudioState>()


  private _playerStateSubscription=this._audioPlayer.audioStates.subscribe( nextState => {
    this.onStateChange.emit(nextState)
  } )


  private _playerProgressSubscription=this._audioPlayer.progress.subscribe( progress => {
    this.onProgress.emit(progress)
  } )


  getSourceURL ( locale:string=this.localeService.current ) {
    return `https://kioget.37x.io/audio/${this.node.cuid}/${locale}?format=mp3`
  }

  protected updateSource(locale:string=this.localeService.current) {
    const url = this.getSourceURL(locale)
    const source = {
      url: url,
      mimeType: 'audio/mpeg'
    }
    this.audioSrcs = [source]
    this._audioPlayer.setSource(source) 
  }

  onNodeUpdate(){
    super.onNodeUpdate()
    this.updateSource()
  }

  getContentParams():any {
    return { mimeType: 'audio/mpeg' }
  }
  
  loadNodeContent(){
    //super.loadNodeContent()
  }

  setData ( data:any ) {
    super.setData(data)
  }

  setError ( error ) {
    super.setError(error)
  }

  //@ViewChild('myAudio') myAudio:ElementRef;


  ngAfterViewInit() {

    //@TODO: this has to go to onNodeUpdate()

    //this.initAudio();
  }

  startAudio = function() {
    this._audioPlayer.play()
  }

  stopAudio = function() {
    this._audioPlayer.pause()
  }

  resetAudio = function() {
    this._audioPlayer.reset()    
  }

  // listen to play and pause from outside

  ngOnChanges(changes) {

    if(changes.play) {

      const playChange:SimpleChange = changes.play

      if(playChange.currentValue === true) {

          this.startAudio();
      }
      else if ( playChange.previousValue === true && !playChange.currentValue ) {
        this.stopAudio();
      }
    }

  }

  ngOnDestroy() {
    this._localeChangeSubscription.unsubscribe()
  }

  private _localeChangeSubscription=this.localeService.changes.distinctUntilChanged().subscribe ( nextLocale => {
    this.stopAudio()
    this.updateSource(nextLocale)
  } )
}
