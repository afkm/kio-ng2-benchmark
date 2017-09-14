import { LogFormat, LogArgs, LogEntryPlain, LogEntryFormatted, LogEntry, LogFormatter } from '../entry/interfaces'
export { LogFormat, LogArgs, LogEntryPlain, LogEntryFormatted, LogEntry, LogFormatter }

import * as Rx from 'rxjs'
import { EventEmitter } from '@angular/core'

export interface ValueIterator <T,R> {
  ( value:T, index?:number ):R
}

export interface RXSubject <K> {
  [key:string]: Rx.Observable<K>|EventEmitter<K>|any
} 

export interface StoredLogEntry {
  timestamp: Date
  entry: LogEntry
  stack?:string[]
}

export type EntryFilter = ValueIterator<LogEntry,boolean>

export type EntryIterator<R> = ValueIterator<LogEntry,R>

export type StoredEntryFilter = ValueIterator<StoredLogEntry,boolean>

export type StoredEntryIterator<R> = ValueIterator<StoredLogEntry,R>