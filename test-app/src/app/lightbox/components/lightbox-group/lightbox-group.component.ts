import { Component, Inject, OnInit } from '@angular/core';
import { LightboxService } from '../../services/lightbox.service'
import { LightboxDataGroup } from '../../classes/lightbox-data-group'

import { KioFragmentModel, KioContentModel } from 'kio-ng2-data'


@Component({
  selector: 'app-lightbox-group',
  templateUrl: './lightbox-group.component.html',
  styleUrls: ['./lightbox-group.component.css']
})
export class LightboxGroupComponent implements OnInit {

  constructor(
      @Inject(LightboxService) protected lightboxService:LightboxService
    ) { }

  public items:any[]=[]
  public index:number=-1

  ngOnInit() {
    this.lightboxService.dataGroup.subscribe ( dataGroup => {
      this.items = dataGroup.items.slice()      
    } )
  }

}
