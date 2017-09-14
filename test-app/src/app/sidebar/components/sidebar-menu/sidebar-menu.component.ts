import { Component, Optional, OnInit, Input, Inject, ViewEncapsulation } from '@angular/core';
import { LocaleService } from '../../../i18n/module'
import { SitemapService, SitemapChapterService, LocalizedChapter, Config, ChapterConfig } from '../../../sitemap/module'
import { Menu, MenuItem } from '../../interfaces/menu'

import { SitemapLoader } from '../../interfaces/loader'
import { SITEMAP_LOADER } from '../../injection/loader.token'
import { SidebarService } from '../../services/sidebar.service'

import { SitemapNavigation } from '../../interfaces/sitemap-navigation'
import { SITEMAP_NAVIGATION } from '../../config/token'


export enum SidebarMenuTheme {
  main=0,
  sidebar=1
}

export interface MenuSlug {
  [key:string]: string;
}

@Component({
  selector: 'sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss'],
  encapsulation: ViewEncapsulation.None  
})
export class SidebarMenuComponent implements OnInit {

  constructor(
    private localeService:LocaleService, 
    private sitemapChapterService:SitemapChapterService,
    private sidebarService:SidebarService,
    @Optional() @Inject(SITEMAP_LOADER) private sitemapLoader:SitemapLoader
  ) { }

  locale:string=this.localeService.currentLocale
  lang:string=this.localeService.currentLocale.substr(0,2)
  //slugs:MenuSlug[]=this.sitemapService.sitemap.items.map ( item => item.slug )

  navigationItems:LocalizedChapter[]=[]

  protected logger=window.afkm.logger.cloneToScope(this)
  
  @Input() theme:SidebarMenuTheme=SidebarMenuTheme.main

  onClick(event:Event,navigationItem:LocalizedChapter){
    //console.log('navigate to: ', navigationItem)
    event.preventDefault()
    event.stopPropagation()
    this.navigateToNavigationItem(navigationItem)
    return false
  }

  protected navigateToNavigationItem ( navigationItem:LocalizedChapter ) {
    if ( this.sitemapLoader ) {
      const t0 = Date.now()
      this.sitemapLoader.gotoChapter(navigationItem)
      .flatMap ( result => this.sidebarService.close() )
      .subscribe ( (result) => {}, error => {
        console.error(`Failed to go to chapter "${navigationItem.cuid}": ${error}`)
      })
    }
  }

  private navSubscription=this.sitemapChapterService.allModels.subscribe ( models => {
    this.navigationItems = []
  } )
  private chapterNavSubscription = this.sitemapChapterService.navigation.filter( chapter => chapter.locale === this.localeService.currentLocale )
  .subscribe ( chapter => {
    this.navigationItems.push(chapter)
  } )
  
  ngOnInit() {
    this.localeService.changes.subscribe((locale)=>{
      this.locale = locale
      this.lang = locale.substr(0,2)
    })

  }

}
