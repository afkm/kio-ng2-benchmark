import { InjectionToken } from '@angular/core'
import { SidebarConfig, SitemapNavigation } from './interfaces'

export const SIDEBAR_CONFIG = new InjectionToken<SidebarConfig>('sidebar_config')

export const SITEMAP_NAVIGATION = new InjectionToken<SitemapNavigation>('sitemap_navigation')