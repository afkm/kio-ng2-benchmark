import { NgModule } from '@angular/core'


import { AudioplayerComponent } from './fragment/audioplayer/audioplayer.component'
import { BigPicComponent } from './fragment/big-pic/big-pic.component'
import { ChapterCoverComponent } from './fragment/chapter-cover/chapter-cover.component'
import { CopyrightsContainerComponent } from './fragment/copyrights-container/copyrights-container.component'
import { GalleryGridComponent } from './fragment/gallery-grid/gallery-grid.component'
import { HeadlineComponent } from './fragment/headline/headline.component'
import { HintComponent } from './fragment/hint/hint.component'
import { LabeledImageComponent } from './fragment/labeled-image/labeled-image.component'
import { LabeledImageWithZoomComponent } from './fragment/labeled-image-with-zoom/labeled-image-with-zoom.component'
import { MetaBoxComponent } from './fragment/meta-box/meta-box.component'
import { MetaImageComponent } from './fragment/meta-image/meta-image.component'
import { MetaImagesComponent } from './fragment/meta-images/meta-images.component'
import { NbaComponent } from './fragment/nba/nba.component'
import { NbaGroupComponent } from './fragment/nba-group/nba-group.component'
import { NewstickerComponent } from './fragment/newsticker/newsticker.component'
import { QuoteComponent } from './fragment/quote/quote.component'
import { SectionHeadlineComponent } from './fragment/section-headline/section-headline.component'
import { ShareComponent } from './fragment/share/share.component'
import { SingleColumnComponent } from './fragment/single-column/single-column.component'
import { SingleColumnCollapsibleComponent } from './fragment/single-column-collapsible/single-column-collapsible.component'
import { SocialComponent } from './fragment/social/social.component'
import { SponsoringPartnerComponent } from './fragment/sponsoring-partner/sponsoring-partner.component'
import { TwoColumnsComponent } from './fragment/two-columns/two-columns.component'
import { TwoColumnsAndImageComponent } from './fragment/two-columns-and-image/two-columns-and-image.component'
import { VideoComponent } from './fragment/video/video.component'
import { AudioComponent } from './src/audio/audio.component'
import { CopyrightsComponent } from './txt/copyrights/copyrights.component'
import { FormattedTextComponent } from './txt/formatted-text/formatted-text.component'
import { IntroTextComponent } from './txt/intro-text/intro-text.component'
import { SimpleTextComponent } from './txt/simple-text/simple-text.component'


import { FormatTimePipe } from './pipes/format-time.pipe'
import { KioNg2ImageModule } from '../image/module'
import { LightboxModule } from '../lightbox/lightbox.module'
import { VideoModule } from '../video/video.module'

import { KioNg2MarkdownModule, KioNg2MarkdownService } from 'kio-ng2-markdown'
import { kioFootnotes } from 'kio-ng2-markdown-footnotes'

import { KioNg2UIUXModule } from '../uiux/module'

import { SwiperModule } from 'angular2-useful-swiper';
import { Ng2PageScrollModule } from 'ng2-page-scroll'

import { Nl2BrPipe } from "nl2br-pipe";


export const PublicationComponents = [ AudioplayerComponent, BigPicComponent, ChapterCoverComponent, CopyrightsContainerComponent, GalleryGridComponent, HeadlineComponent, HintComponent, LabeledImageComponent, LabeledImageWithZoomComponent, MetaBoxComponent, MetaImageComponent, MetaImagesComponent, NbaComponent, NbaGroupComponent, NewstickerComponent, QuoteComponent, SectionHeadlineComponent, ShareComponent, SingleColumnComponent, SingleColumnCollapsibleComponent, SocialComponent, SponsoringPartnerComponent, TwoColumnsComponent, TwoColumnsAndImageComponent, VideoComponent, AudioComponent, CopyrightsComponent, FormattedTextComponent, IntroTextComponent, SimpleTextComponent ]
@NgModule({
  imports: [
    KioNg2UIUXModule,
    KioNg2ImageModule,
    LightboxModule,
    Ng2PageScrollModule,
    VideoModule,
    KioNg2MarkdownModule.forRoot({
        converter: {
            extensions: [ <any>kioFootnotes ]
        }
    }),
    SwiperModule
  ],
  providers: [
    FormatTimePipe
  ],
  declarations: [
    FormatTimePipe,
    Nl2BrPipe,
    ...PublicationComponents
  ],
  entryComponents: [
    ...PublicationComponents
  ],
  exports: [
    KioNg2UIUXModule,
    ...PublicationComponents
  ]
})
export class KioNg2PublicationComponents {

}
