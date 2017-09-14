import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { KioNg2i18nModule, LocaleService } from './i18n/module'
import { KioCtnModule, BackendService, CTN_CONFIG } from './ctn'
import { KioNg2SitemapModule, Config as SitemapConfig } from './sitemap/module'
import { KioNg2ImageModule } from './image/module'
import { KioNg2UIUXModule } from './uiux/module'
import { KioNg2SidebarModule } from './sidebar/module'
import { KioNg2MockingModule } from './mocking'
import { KioNg2NavigationModule } from './navigation/module'
import { KioNg2NewsletterModule } from './newsletter/newsletter.module'
import { KioNg2GlobalsModule } from './globals/module'
import { KioNg2PublicationComponents } from './publication/module'
import { KioNg2ComponentRoutingModule } from './component-routing/module'
import { LightboxModule } from './lightbox/lightbox.module'
import { Ng2PageScrollModule } from 'ng2-page-scroll'
import { Angulartics2Module, Angulartics2GoogleAnalytics } from 'angulartics2';
import { KioNg2BenchmarkModule } from 'kio-ng2-benchmark'

import { AppComponent } from './app.component';
import { AppSitemapConfig } from './app.sitemap'

export { AppSitemapConfig } from './app.sitemap'

export function ctnConfigProviderFactory ( localeService:LocaleService ) {
    return {
        localeProvider: localeService
    }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    //KioNg2MockingModule,
    KioNg2UIUXModule,
    KioNg2NewsletterModule.forRoot ( {
      method: 'POST',
      formAction: 'https://mbqhu4xi9d.execute-api.eu-central-1.amazonaws.com/live/signup',
      //formAction: 'http://localhost:8080',
      metadata: {
        client: 'schirn',
        digitorial: 'Weimar'        
      },
      locales: [ 'de_DE', 'en_US' ]
    } ),
    KioNg2ImageModule,
    KioNg2PublicationComponents,
    KioNg2i18nModule,
    KioNg2ComponentRoutingModule,
    KioNg2SidebarModule,
    KioNg2SitemapModule.forRoot (AppSitemapConfig),
    KioNg2NavigationModule,
    KioNg2GlobalsModule.forRoot ( {
      mapping: {
        intro: 'cj5xt5dod001fjks91cdaljch',
        hint: "cj5xt5dod001hjks9oqbgvevk",
        share: "cj5xt5dod001ijks9thqhk6c1",
        nba: "cj5xt5dod001jjks95gwwmum4",
        social: "cj5xt5dod001kjks9n6asrf7k",
        sponsoring: "cj5xt5dod001ljks9h3v6nudz",
        copyrights: "cj5xt5dod001mjks9wvd5xl9l"
        }
    } ),
    KioCtnModule.forRoot({
      localeProvider: {
        current: 'de_DE'
      }
    }),
    LightboxModule,
    RouterModule,
    Ng2PageScrollModule.forRoot(),
    Angulartics2Module.forRoot([ Angulartics2GoogleAnalytics ]),
    KioNg2BenchmarkModule
  ],
  providers: [
      BackendService,
      {
          provide: CTN_CONFIG,
          useFactory: ctnConfigProviderFactory,
          deps: [ LocaleService ]
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
