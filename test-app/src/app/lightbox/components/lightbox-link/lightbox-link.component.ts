import { Component, HostBinding, Inject, Input, OnInit, OnDestroy } from '@angular/core';
import { LightboxService } from '../../services/lightbox.service'
import { KioContentModel } from 'kio-ng2-data'

@Component({
  selector: 'lightbox-link',
  templateUrl: './lightbox-link.component.html',
  styleUrls: ['./lightbox-link.component.scss']
})
export class LightboxLinkComponent /*implements OnInit*/ {

  constructor(
      @Inject(LightboxService) protected lightboxService:LightboxService
    ) { }

  @Input('group') groupName:string
  @Input('node') hostNode:KioContentModel

  public onClick ( event ) {
    console.log('clicked on lightbox link', this)
    this.lightboxService.displayNode ( this.hostNode, this.groupName )
  }

  /*ngOnInit() {
    this.lightboxService.registerNode ( this.hostNode )
  }*/

  ngOnDestroy () {
    this.lightboxService.unregisterNode ( this.hostNode, this.groupName )
  }

}
