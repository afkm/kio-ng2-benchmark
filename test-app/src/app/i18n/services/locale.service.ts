import { Injectable, Inject, EventEmitter } from '@angular/core'
import { LocaleProvider } from '../interfaces/LocaleProvider'
import { DEFAULT_LOCALE } from '../injection/DefaultLocale.token'
import { LOCALES } from '../injection/Locale.token'
import { TranslateService } from '@ngx-translate/core'

@Injectable()
export class LocaleService {

  currentLocale:string
  changes:EventEmitter<string>=new EventEmitter()

  constructor(
      @Inject(DEFAULT_LOCALE) readonly defaultLocale:string,
      @Inject(LOCALES) readonly localesSupported:string[],
      protected translateService:TranslateService
    )
  {
    this.currentLocale = defaultLocale
  }

  updateLocale ( nextLocale:string ) {
    this.currentLocale = nextLocale
    this.changes.emit(nextLocale)
  }


  get current():string {
    return this.currentLocale
  }

  private translateSubscription=this.changes.startWith(this.defaultLocale).subscribe ( locale => {
    this.translateService.use(locale.substr(0,2))
  } )

}