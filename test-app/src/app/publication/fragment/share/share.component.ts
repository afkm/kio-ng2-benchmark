import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { RoutableComponent, FragmentDataComponent } from '../../../component-routing/module'
import { Criteria } from './share.component.criteria'
import { SharingService } from '../../../uiux/services/sharing.service'
import { DomSanitizer } from '@angular/platform-browser'

import { KioContentModel, KioFragmentModel } from 'kio-ng2-data'

@RoutableComponent({
  queryable: Criteria,
  selector: 'kio-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class ShareComponent extends FragmentDataComponent {

    sharings: Array<any> = []

    private DigitSharing:SharingService=this.injector.get(SharingService)
    private sanitizer:DomSanitizer=this.injector.get(DomSanitizer)

    onNodeUpdate(){
      super.onNodeUpdate()
    }

    ngOnInit() {
      this.sharings = this.DigitSharing.sharings;
    }

    sanitize(url:string){
      return this.sanitizer.bypassSecurityTrustUrl(url)
    }


    // deprecated: mapping hinders sharing-service to refresh after language-switch
    // sharings:any[]=this.sharing.sharings.map ( sharing => ({...sharing, composedUrl: this.sanitize(sharing.composedUrl)}) )


}
