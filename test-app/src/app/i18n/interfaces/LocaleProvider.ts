import { Observable } from 'rxjs/Observable'

export interface LocaleProvider {
  localesSupported: string[]
  currentLocale: string
  changes?:Observable<string>
  updateLocale?(locale:string):Observable<string>
}