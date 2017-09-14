import { LocaleProvider } from '../interfaces/LocaleProvider'
import { InjectionToken } from '@angular/core'

export let LOCALE_PROVIDER:InjectionToken<LocaleProvider> = new InjectionToken<LocaleProvider>('locale_provider')
