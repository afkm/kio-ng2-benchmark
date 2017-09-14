import { CommonModule } from '@angular/common'
import { NgModule, ModuleWithProviders, Provider } from '@angular/core'
import { BenchmarkService } from './services/benchmark.service'
import { DOCUMENT } from './dom/document.token'
export { DOCUMENT } from './dom/document.token'
export { BenchmarkService } from './services/benchmark.service'

@NgModule({
  imports: [CommonModule],
  //declarations: [BenchmarkSession],
  providers: [ 
    BenchmarkService,
    {
      provide: DOCUMENT,
      useValue: window.document
    }
  ],
  //entryComponents: [],
  exports: [CommonModule]
})
export class KioNg2BenchmarkModule {

  public static forRoot ():ModuleWithProviders {
    return {
      ngModule: KioNg2BenchmarkModule,
      providers: []
    }
  }
}
