import { CommonModule } from '@angular/common'
import { NgModule, ModuleWithProviders, Provider } from '@angular/core'

@NgModule({
  imports: [CommonModule],
  //declarations: [],
  //providers: [ ],
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
