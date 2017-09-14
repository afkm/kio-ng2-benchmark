import { NgModule } from '@angular/core'
import { KioNg2i18nModule } from '../i18n/module'
import { InlineSVGModule } from 'ng-inline-svg'

import { UiButtonComponent } from './components/ui-button/ui-button.component'
import { UiSharingDropdown } from './components/ui-sharing-dropdown/ui-sharing-dropdown.component'
import { UiBackToTopComponent } from './components/ui-back-to-top/ui-back-to-top.component'
import { GColComponent } from './components/g-col/g-col.component'
import { GRowComponent } from './components/g-row/g-row.component'
import { SHARING_CONFIG, Sharings, SharingConfig } from './config'

import { SharingService } from './services/sharing.service'

import { Ng2PageScrollModule } from 'ng2-page-scroll'

export let UIUXComponents = [ UiButtonComponent, UiSharingDropdown, UiBackToTopComponent, GRowComponent, GColComponent ]

@NgModule({
  imports:[
    InlineSVGModule,
    KioNg2i18nModule,
    Ng2PageScrollModule
  ],
  declarations: [
    ...UIUXComponents
  ],
  providers: [
    {
      provide: SHARING_CONFIG,
      useValue: Sharings
    },
    SharingService
  ],
  entryComponents: [
    ...UIUXComponents
  ],
  exports: [
    KioNg2i18nModule,
    ...UIUXComponents
  ]
})
export class KioNg2UIUXModule {}
