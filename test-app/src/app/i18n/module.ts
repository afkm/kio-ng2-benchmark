import { CommonModule } from '@angular/common'
import { NgModule, ModuleWithProviders, Provider } from '@angular/core'
import { DEFAULT_LOCALE } from './injection/DefaultLocale.token'
import { LOCALES } from './injection/Locale.token'
import { LOCALE_PROVIDER } from './injection/LocaleProvider.token'
import { LocaleProvider } from './interfaces/LocaleProvider' 
import { LocaleService } from './services/locale.service' 
import { i18nModule } from './translate.module'
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

export { LocaleService }
export { DEFAULT_LOCALE, LOCALES, LOCALE_PROVIDER }

@NgModule({
  imports: [CommonModule,i18nModule],
  declarations: [],
  providers: [ 
    {
      provide: LOCALES,
      useValue: ['en_US', 'de_DE']
    },
    {
      provide: DEFAULT_LOCALE,
      useValue: 'de_DE'
    },
    LocaleService    
  ],
  entryComponents: [],
  exports: [CommonModule,TranslateModule]
})
export class KioNg2i18nModule {

}
