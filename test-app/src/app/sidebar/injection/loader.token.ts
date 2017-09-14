import { InjectionToken } from '@angular/core'
import { SitemapLoader } from '../interfaces/loader'

export let SITEMAP_LOADER = new InjectionToken<SitemapLoader>('sitemap_loader')
