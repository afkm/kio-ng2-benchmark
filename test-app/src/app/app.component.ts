import { Component } from '@angular/core';
import { LocaleService } from './i18n/module'
import { BackendService } from './ctn/module'
import { PageScrollConfig } from 'ng2-page-scroll';
import { SitemapService, SitemapChapterService, SitemapChapter } from './sitemap/module'
import { BenchmarkService } from 'kio-ng2-benchmark'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'app';

  currentLocale:string=this.localeService.currentLocale

  sitemapChapters:SitemapChapter[]=[]

  chapterUrl:string


  public onButtonClick () {
    const idx = this.localeService.localesSupported.indexOf(this.currentLocale)
    const nextIdx = idx + 1 < this.localeService.localesSupported.length ? idx + 1 : 0
    const nextLocale = this.localeService.localesSupported[nextIdx]
    this.sitemapService.switchToLocale(nextLocale).subscribe ( locale => {
      console.log('switched locale to "%s"', locale )
    } )
  }

  public onNextButtonClick () {
    
  }


  constructor(
    protected localeService:LocaleService, 
    protected backendService:BackendService,
    protected sitemapService:SitemapService,
    protected sitemapChapterService:SitemapChapterService,
    protected benchmarkService:BenchmarkService
  ){
    PageScrollConfig.defaultDuration = 2000;
    PageScrollConfig.defaultEasingLogic = {
        ease: (t: number, b: number, c: number, d: number): number => {
            // easeInOutExpo easing
            if (t === 0) return b;
            if (t === d) return b + c;
            if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        }
    };
    
  }

  private _benchmarkElementsSubscription=this.benchmarkService.elements.subscribe ( el => {
    console.log('element', el)
  } )

  protected localeServiceSub=this.localeService.changes.subscribe ( locale => {
    this.currentLocale = locale
    this.sitemapChapters = []
  })

  protected sitemapServiceSub=this.sitemapChapterService.models.subscribe ( chapters => {
    if ( Array.isArray(chapters) ) {
      this.sitemapChapters = chapters
    } else {
      this.sitemapChapters.push ( chapters )
    }
  } )

  protected currentChapterUrlSub=this.sitemapService.sitemapChapter.subscribe ( currentChapter => {
    this.chapterUrl = JSON.stringify(currentChapter,null,'  ')
  } )
}
