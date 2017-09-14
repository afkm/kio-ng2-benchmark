import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/mergeMap'
import { Injectable, EventEmitter } from '@angular/core'
import { SidebarState } from '../enums/sidebar-state.enum'

@Injectable()
export class SidebarService {

  constructor ( ) {
    
    
  }

  readonly sidebarStateEmitter:EventEmitter<SidebarState> = new EventEmitter()
  
  public sidebarState = this.sidebarStateEmitter.asObservable().startWith(SidebarState.closed).shareReplay(1)
  public lastSidebarState:SidebarState

  private _lastSidebarStarteSub=this.sidebarState.subscribe ( nextState => {
    this.lastSidebarState = nextState
  } )


  public open ():Promise<SidebarState> {
    return this.updateState(SidebarState.opened).toPromise()
  }

  public close ():Promise<SidebarState> {
    return this.updateState(SidebarState.closed).toPromise()
  }

  protected updateState(nextState:SidebarState){
    return Observable.merge(
        this.sidebarStateEmitter.asObservable(),
        Observable.defer(()=>{
          this.sidebarStateEmitter.emit(nextState)
          return Observable.empty()
        })
      ).filter ( state => nextState === state ).take(1)
  }

}