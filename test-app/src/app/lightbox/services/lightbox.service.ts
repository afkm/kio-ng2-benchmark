import { Injectable, EventEmitter } from '@angular/core';
import { LightboxState } from '../enums/lightbox-state.enum'
import { KioFragmentModel, KioContentModel } from 'kio-ng2-data'
import { LightboxDataGroup } from '../classes/lightbox-data-group'

@Injectable()
export class LightboxService {

  public static GetNodeGroupName ( node:KioFragmentModel|KioContentModel ):string {
    return node.modifiers.find ( m => m.startsWith('lb-') )
  }

  constructor() { 
    (<any>window).lbService = this
  }

  public stateChanges:EventEmitter<LightboxState>=new EventEmitter()

  public dataGroup:EventEmitter<LightboxDataGroup>=new EventEmitter()

  public displayNode ( node:KioFragmentModel|KioContentModel, groupName:string ) {
    this.stateChanges.emit(LightboxState.open)
    const group:LightboxDataGroup = this.groupByName(groupName)
    this.dataGroup.emit(group)
    group.index = group.indexOf ( node )
  }
  
  public open () {
    this.stateChanges.emit(LightboxState.open)
  }
  
  public close () {
    this.stateChanges.emit(LightboxState.closed)
  }

  public registerNode ( node:KioFragmentModel|KioContentModel, groupName:string=LightboxService.GetNodeGroupName (node) ) {
    if ( groupName ) {
      return this.groupByName(groupName).addItem(node)
    }
    return -1
  }

  public unregisterNode ( node:KioFragmentModel|KioContentModel, groupName:string=LightboxService.GetNodeGroupName (node) ) {
    if ( groupName ) {
      return this.groupByName(groupName).removeItem(node)
    }
    return -1
  }

  protected groupByNode ( node:KioContentModel|KioFragmentModel ):LightboxDataGroup {
    const groupName = LightboxService.GetNodeGroupName ( node )
    return this.groupByName ( groupName )
  }

  protected groupByName ( name:string ):LightboxDataGroup {
    let group:LightboxDataGroup = this._dataGroups.find ( g => g.name === name )
    if ( !group ) {
      group = new LightboxDataGroup(name)
      this._dataGroups.push ( group )
    }
    return group
  }

  private _dataGroups:LightboxDataGroup[]=[]

}
