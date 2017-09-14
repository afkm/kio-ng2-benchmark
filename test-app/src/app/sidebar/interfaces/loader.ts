import { Observable } from 'rxjs/Observable'
import { Menu, MenuItem } from './menu'

export interface SitemapLoader {
  gotoChapter<T extends MenuItem>(menuItem:T):Observable<T>
}