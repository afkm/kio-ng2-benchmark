import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './components/video/video.component';
import { KioNg2ComponentRoutingModule } from '../component-routing/module'
import { KioCtnModule } from '../ctn/module'

//export { VideoState } from './enums/video-state.enum'

@NgModule({
  imports: [
    CommonModule, KioNg2ComponentRoutingModule, KioCtnModule
  ],
  declarations: [VideoComponent],
  entryComponents: [VideoComponent],
  exports: [VideoComponent, KioNg2ComponentRoutingModule, KioCtnModule]
})
export class VideoModule { }
