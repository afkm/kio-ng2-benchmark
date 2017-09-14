import { Observable } from 'rxjs/Observable'
import { NgModule, ModuleWithProviders, Provider } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes, ROUTES } from '@angular/router'
import { SidebarService } from './services/sidebar.service'
import { KioNg2SitemapModule, SITEMAP_CONFIG } from '../sitemap/module'
import { KioNg2UIUXModule } from '../uiux/module'

import { SIDEBAR_CONFIG, SITEMAP_NAVIGATION } from './config/token'
import { SitemapNavigation, SidebarConfig  } from './config/interfaces'

import { SidebarMenuComponent, SidebarMenuTheme } from './components/sidebar-menu/sidebar-menu.component'
import { SidebarComponent } from './components/sidebar/sidebar.component'
import { InlineSVGModule } from 'ng-inline-svg'

export { SIDEBAR_CONFIG, SITEMAP_NAVIGATION } from './config/token'
export { SitemapNavigation, SidebarConfig  } from './config/interfaces'

export { SidebarMenuTheme }

export { SITEMAP_LOADER } from './injection/loader.token'
export { MenuItem, Menu } from './interfaces/menu'
export { SitemapLoader } from './interfaces/loader'
export const SidebarComponents = [ SidebarMenuComponent, SidebarComponent ]
//export const SidebarComponents = []

export function sidebarConfigFactory ( sitemapNavigation:SitemapNavigation ):SidebarConfig {
  return {
    sitemapNavigation
  }
}

@NgModule({
  imports: [
    KioNg2SitemapModule,
    InlineSVGModule,
    KioNg2UIUXModule,
    CommonModule,
  ],
  declarations: [
    ...SidebarComponents
  ],
  entryComponents: [ ...SidebarComponents ],
  providers: [
    {
      provide: SITEMAP_NAVIGATION,
      useValue: {
        gotoChapter(chapter:any){
          return Observable.throw(new Error(`gotoChapter is not implemented.`))
        }
      }
    },
    {
      provide: SIDEBAR_CONFIG,
      useFactory: sidebarConfigFactory,
      deps: [SITEMAP_NAVIGATION]
    },
    SidebarService
  ],
  exports: [
    ...SidebarComponents,
    CommonModule,
    KioNg2SitemapModule,
    KioNg2UIUXModule,
    InlineSVGModule
  ]
})
export class KioNg2SidebarModule {
  public static forRoot ( sidebarConfig:SidebarConfig ):ModuleWithProviders {
    return {
      ngModule: KioNg2SidebarModule,
      providers: [
        {
          provide: SIDEBAR_CONFIG,
          useValue: sidebarConfig
        },
        {
          provide: SITEMAP_NAVIGATION,
          useValue: sidebarConfig.sitemapNavigation
        }
      ]
    }
  }
}