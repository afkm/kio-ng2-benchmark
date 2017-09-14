import { Injectable, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'
import { SHARING_CONFIG, SharingConfig } from '../config'

@Injectable()
export class SharingService {


  translate:TranslateService


  //private _sharings = Sharings


  constructor(
    translate: TranslateService,
    @Inject(SHARING_CONFIG) private _sharings:SharingConfig[]
  ) {

    this.translate = translate

    this.setupSharings();

    translate.onLangChange.subscribe(() => {

      this.setupSharings();
    });

  }


  setupSharings = function() {


    for (let share of this._sharings) {

      let url:string = ""
      let text:string = ""
      let subject:string = ""
      let shareUrl:string = ""
      let image:string = ""

      this.translate.get('sharing_url').subscribe((res: string) => {

        url = encodeURIComponent(res);
      })

      this.translate.get('opengraph_image').subscribe((res: string) => {

        image = encodeURIComponent(res);
      })

      if (share.textKey) {
        this.translate.get(share.textKey).subscribe((res: string) => {

          text = encodeURIComponent(res)
        })
      }

      if (share.subjectKey) {
        this.translate.get(share.subjectKey).subscribe((res: string) => {

          subject = encodeURIComponent(res)
        })
      }

      shareUrl = share.url

      shareUrl = shareUrl.replace('{{url}}', url)
      shareUrl = shareUrl.replace('{{text}}', text)
      shareUrl = shareUrl.replace('{{subject}}', subject)
      shareUrl = shareUrl.replace('{{image}}', image)

      share.composedUrl = shareUrl;
    }
  }


  get sharings() {

      return this._sharings
  }

}
