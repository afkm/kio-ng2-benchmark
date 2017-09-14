import { EventEmitter } from '@angular/core'
import { KioFragmentModel, KioContentModel } from 'kio-ng2-data'

export class LightboxDataGroup {

  constructor(
      readonly name:string
    ) {

  }

  public indexChange:EventEmitter<number>=new EventEmitter()

  public get index ():number {
    return typeof this._currentIndex === 'undefined' ? -1 : this._currentIndex
  }

  public set index ( nextIndex:number ) {
    if ( nextIndex >= this._items.length ) {
      nextIndex = 0
    } else if ( nextIndex < 0 ) {
      nextIndex = this._items.length - 1
    }

    this._currentIndex = nextIndex
    this.indexChange.emit(this._currentIndex)
  }

  public removeItem ( item:KioFragmentModel|KioContentModel ) {
    const idx = this.indexOf ( item )
    if ( idx > -1 ) {
      this.removeItemAt ( idx )
    }
  }

  public removeItemAt ( itemIndex:number ) {
    this._items.splice(itemIndex,1)
  }

  public addItem ( item:KioFragmentModel|KioContentModel ) {
    return this._items.push ( item )
  }

  public indexOf ( item:KioFragmentModel|KioContentModel ):number {
    return this._items.findIndex ( i => i.cuid === item.cuid )
  }

  public get items ():(KioFragmentModel|KioContentModel)[] {
    return this._items.slice()
  }

  private _items:(KioFragmentModel|KioContentModel)[]=[]

  private _currentIndex:number
  

}
