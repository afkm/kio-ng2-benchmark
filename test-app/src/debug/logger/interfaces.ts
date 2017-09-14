import * as Rx from 'rxjs'
import { EventEmitter } from '@angular/core'
import { KioContentState } from 'kio-ng2-data'
import { Descriptor } from './render/interfaces'

import { 
  LogFormat,  LogArgs,  LogEntryPlain,  LogEntryFormatted, LogEntry,
  LogFormatter, EntryIterator, EntryFilter,  
  RXSubject,
  StoredLogEntry,
  ScopeFilter,
  LogStore
} from './store'

export { 
  LogFormat,  LogArgs,  LogEntryPlain,  LogEntryFormatted, LogEntry,
  LogFormatter, EntryIterator, EntryFilter,  
  RXSubject,
  StoredLogEntry
}

export interface AFKMLoggerOptions {
  enabled:boolean
  trace:boolean
  timeprefix:boolean
}
/*
export interface AFKMLogger {

  options: AFKMLoggerOptions

  add( scope:any, logEntry:LogEntry, stack?:string[] ):StoredLogEntry

  observe <K> ( target:RXSubject<K>, key:string, label?:string|Descriptor<K> ):Rx.Subscription

  renderScope( scope:any, stack?:boolean ):void

  findScope( filter:ScopeFilter ):any

  store: LogStore

  cloneToScope ( scope:any ):this
}*/