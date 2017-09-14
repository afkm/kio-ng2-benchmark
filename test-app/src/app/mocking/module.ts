import { CommonModule } from '@angular/common'
import { HttpModule } from '@angular/http'
import { NgModule, ModuleWithProviders, Provider } from '@angular/core'
import { ContentMockingService } from './service/content-mocking.service'

@NgModule({
  imports: [CommonModule],
  //declarations: [],
  providers: [ ContentMockingService ],
  //entryComponents: [],
  exports: [CommonModule]
})
export class KioNg2MockingModule {}
