import { Http } from '@angular/http'
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader'


/** i18n */

export function createTranslateLoader(http: Http) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


export const i18nModule = TranslateModule.forRoot(
  {
    loader: {
      provide: TranslateLoader,
      useFactory: createTranslateLoader,
      deps: [Http]
    }
  }
)