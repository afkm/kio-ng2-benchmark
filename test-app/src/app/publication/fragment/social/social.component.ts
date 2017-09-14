import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RoutableComponent, FragmentDataComponent } from '../../../component-routing/module'
import { Criteria } from './social.component.criteria'

import { KioContentModel, KioFragmentModel } from 'kio-ng2-data'

@RoutableComponent({
  queryable: Criteria,
  selector: 'kio-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SocialComponent extends FragmentDataComponent {

  onNodeUpdate(){
    super.onNodeUpdate()
  }


  socials =  [
    {
      urlKey : "href_youtube",
      icon : 'youtube-flat'
    },
    {
      urlKey : "href_facebook",
      icon : 'facebook-flat'
    },
    {
      urlKey : "href_instagram",
      icon : 'instagram-flat'
    },
    {
      urlKey : "href_twitter",
      icon : 'twitter-flat'
    },
    {
      urlKey : "href_pinterest",
      icon : 'pinterest-flat'
    },
    {
      urlKey : "href_snapchat",
      icon : 'snapchat-flat'
    }
  ]

}
