import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightboxDirective } from './directives/lightbox.directive';
import { LightboxService } from './services/lightbox.service'
import { LightboxOutletComponent } from './components/lightbox-outlet/lightbox-outlet.component';
import { KioNg2ComponentRoutingModule } from '../component-routing/module';
import { LightboxLinkComponent } from './components/lightbox-link/lightbox-link.component';
import { LightboxGroupComponent } from './components/lightbox-group/lightbox-group.component'

export { LightboxService } from './services/lightbox.service'
export { LightboxDirective } from './directives/lightbox.directive';

import { KioNg2UIUXModule } from '../uiux/module'
import { KioNg2ImageModule } from '../image/module'



@NgModule({
  imports: [
    CommonModule,
    KioNg2ComponentRoutingModule,
    KioNg2UIUXModule,
    KioNg2ImageModule
  ],
  providers: [LightboxService],
  exports: [LightboxOutletComponent,LightboxLinkComponent],
  declarations: [LightboxDirective, LightboxOutletComponent, LightboxLinkComponent, LightboxGroupComponent],
  entryComponents: [LightboxOutletComponent,LightboxLinkComponent]
})
export class LightboxModule { }
