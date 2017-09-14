import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/from'
import 'rxjs/add/observable/defer'
import 'rxjs/add/operator/shareReplay'
import { Injectable, Inject } from '@angular/core'
import { DOCUMENT } from '../dom/document.token'
import { findInDocument } from '../dom/document.parser'
import { KioDOMNode } from '../dom/interfaces'


@Injectable()
export class BenchmarkService {

  constructor(
    @Inject(DOCUMENT) private rootDocument:Document=window.document
    ){

  }

  public elements:Observable<KioDOMNode>=Observable.defer(()=>{
    return Observable.from(findInDocument(this.rootDocument))
  })

}