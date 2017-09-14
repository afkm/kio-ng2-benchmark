import { 
  StoredLogEntry,
  LogEntry,
  EntryIterator, 
  StoredEntryFilter, StoredEntryIterator,
  EntryFilter 
} from './interfaces'

import { getStack } from '../stack'

export interface ScopeFilter {
  (scope:any,idx:number):boolean
}

export class LogStore {

  constructor(
    readonly scopes:Set<any>=new Set(),
    readonly scopeMap:WeakMap<any,StoredLogEntry[]>=new WeakMap()
  )
  {}

  eachScope <I1 extends EntryFilter,I2 extends EntryIterator<any>> ( filter:I1, iterator:I2 ) 
  eachScope <I1 extends EntryIterator<any>> ( iterator:I1 ) 
  eachScope ( filterOrIterator:any, iterator?:any ) 
  {
    let iterate:EntryIterator<any>
    let filter:EntryFilter

    if ( typeof iterator === 'undefined' )
    {
      iterate = filterOrIterator  
      filter = (v)=>true
    }
    else
    {
      iterate = iterator
      filter = filterOrIterator
    }
    let item:IteratorResult<any>
    let index:number = 0
    const valuesIterator = this.scopes.values()
    while ( (item = valuesIterator.next()) && !item.done )
    {
      if ( filter(item.value,index) === true )
      {
        const rv = iterate(item.value,index)
        if ( rv === false )
          break;
      }
      index++
    }
  }

  scopeAt ( index:number ) {
    let found:any
    this.eachScope((value,idx) => {
      found = value
      return idx !== index
    } )
    return found
  }
  
  addEntry ( scope:any, entry:LogEntry ) {
    if ( !this.scopes.has(scope) )
    {
      this.scopes.add(scope)
      this.scopeMap.set(scope,[])
    }
    const entries:StoredLogEntry[] = this.scopeMap.get(scope)
    const storedEntry = {
      timestamp: new Date(),
      stack: getStack(),
      entry
    }
    entries.push(storedEntry)
    return storedEntry
  }

  filter ( scope:any, filter:{(entry:LogEntry,timestamp?:Date,index?:number):boolean}=(v)=>true ):StoredLogEntry[] {
    return this.scopeMap.get(scope).filter ( (entry:StoredLogEntry,index:number) => filter ( entry.entry, entry.timestamp, index ) )
  }

  findScope ( scopeFilter:ScopeFilter ):any {
    let found:any
    this.eachScope( scopeFilter, scope => {
      found = scope
      return false
    } )
    return found
  }

}