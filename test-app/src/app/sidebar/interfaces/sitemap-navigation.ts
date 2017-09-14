import { Observable } from 'rxjs/Observable'
import { Menu, MenuItem } from './menu'

export interface SitemapNavigation {
  gotoChapter<T extends MenuItem>(menuItem:T):Observable<T>
}