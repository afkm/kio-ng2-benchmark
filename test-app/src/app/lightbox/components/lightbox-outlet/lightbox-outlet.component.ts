import { Subscription } from 'rxjs/Subscription'
import {
  Component, ViewChild, ViewChildren, QueryList, ElementRef,
  EventEmitter,
  Inject,
  OnDestroy, AfterViewInit
} from '@angular/core';
import { KioFragmentModel, KioContentModel } from 'kio-ng2-data'

import { LightboxService } from '../../services/lightbox.service'
import { LightboxDataGroup } from '../../classes/lightbox-data-group'
import { LightboxState } from '../../enums/lightbox-state.enum'


@Component({
  selector: 'lightbox-outlet',
  templateUrl: './lightbox-outlet.component.html',
  styleUrls: ['./lightbox-outlet.component.scss']
})
export class LightboxOutletComponent implements OnDestroy {

  constructor(
    @Inject(LightboxService) protected lightboxService:LightboxService
  ) { }

  public lightboxState:LightboxState=LightboxState.closed
  public group:LightboxDataGroup
  public contentNodes:(KioFragmentModel|KioContentModel)[]

  public index:number=-1

  @ViewChild('content') contentElement:ElementRef
  @ViewChildren('lightboxItem') itemElements:QueryList<ElementRef>//=new QueryList<ElementRef>()

  ngOnDestroy () {
    this._lightboxStateSubscription.unsubscribe()
  }

  public close ( event:Event ) {
    event.preventDefault()
    event.stopPropagation()
    this.lightboxService.close ()
  }

  /** called when group index has changed; peform any transitions here */
  public updateIndex ( nextIndex:number ) {
    this.index = nextIndex

    /** deprecated, a 'current' class is used instead */
    // this.updateSpacerIndex ( nextIndex )
  }

  private _lightboxStateSubscription:Subscription=this.lightboxService.stateChanges
  .distinctUntilChanged()
  .subscribe ( (lightboxState:LightboxState) => {
    this.lightboxState = lightboxState
  } )

  private _lightboxGroupSubscription:Subscription=this.lightboxService.dataGroup.subscribe ( group => {
    this.group = group
    this.contentNodes = group.items

    const indexSource:EventEmitter<number> = group.indexChange

    this.itemElements.changes.take(1).flatMap(
      items => {
        return indexSource.startWith(group.index)
      }
    ).distinctUntilChanged().subscribe ( groupIndex => {
      this.updateIndex(groupIndex)
    } )
  } )



  // deprecated

  private _getOffsetPaddingSize ( ) {
    return this.itemElements.first.nativeElement.clientHeight
  }

  private updateSpacerIndex ( nextIndex:number ) {
    if ( !this.contentElement ) {
      return undefined
    }

    const paddingSize:number = this._getOffsetPaddingSize()
    this.contentElement.nativeElement.style.top = `${Math.round(nextIndex * paddingSize * -1)}px`
  }


}
