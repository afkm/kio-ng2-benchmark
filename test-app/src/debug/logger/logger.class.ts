import { EventEmitter } from 'events'
import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription'
import 'rxjs/add/operator/mergeMap'
import { RXSubject } from './interfaces'
import { 
  LogEntry, LogEntryFormatted, 
  isLogEntry, isLogEntryFormatted, isLogEntryPlain, 
  FormattedEntry, SimpleEntry, 
  LoggerStore
} from './entry'
import { LogStore, StoredLogEntry, ScopeFilter, mergeFormat, mergeLogs, wrapLog, toFormatted } from './store'

import { Descriptor, renderStack, format, LogRenderer } from './render'
import { getStack } from './stack'
//import * as moment from 'moment'
import * as cuid from 'cuid'

import * as styles from './styles'

export type Optional<T> = {
  [K in keyof T]?: T[K]
}

const rg_url = /(https?:\/\/localhost(\:\d+)?([\/|\w|\.]*)\:(\d+)\:(\d+))/g

export function parseUrl ( source:string ) {
  const m = source.match(rg_url)
  if ( m ) {
    return m[0]
  }
}

export class Logger {

  readonly label:LogEntryFormatted
  readonly id:string=cuid.slug()
  readonly store=new LoggerStore<FormattedEntry|SimpleEntry>()
  readonly renderer:LogRenderer=new LogRenderer()

  public static Styles=styles

  constructor ( 
    readonly __store:LogStore,
    readonly options:{
      enabled: boolean,
      trace: boolean,
      timeprefix: boolean,
      sourceUrl?:boolean,
      time?: false|string|Date,
      labelStyle?: styles.StyleConfig,
      label?:string|LogEntry
    },
    readonly scope:any,
    parent?:Logger
    ) {
    
    const labelColor = (options.labelStyle && options.labelStyle.color) || styles.nextColor()
    this.options.labelStyle = styles.createStyle(styles.label.normal,this.options.labelStyle)
    this.options.labelStyle.color = labelColor
    this.label = [ '%c[%s|%s]%c', [ styles.render(this.options.labelStyle), this.id, format.nameOf(this.scope), '' ] ]
    if ( this.options.label ) {
      this.label = mergeLogs ( this.label, this.options.label )
    }

  }

  log ( format:any, ...args:any[] ) {

    while ( args.length > 0 && typeof args.slice(-1).pop() === 'undefined' ) {
      args.pop()
    }
    const log = FormattedEntry.from ( [format,args] )
    this.add ( log )    
  }


  add ( entry:LogEntry|FormattedEntry, stack?:string[] ) {
    if ( !this.options.enabled ) {
      return undefined
    }
    if ( !(entry instanceof FormattedEntry) ) {
      return this.add ( FormattedEntry.from ( entry ), stack )
    }
    this.store.add(entry, stack || getStack(2) )
    
    this.renderLog ( entry, stack )
    return entry
  }

  renderTime ( t:number|Date=new Date() ) {
    if ( 'number' === typeof t ) {
      return this.renderTime ( new Date(t) )
    }
    //if ( this.options.time === false ) {
      return undefined
    //}
    /* else if ( 'string' === typeof this.options.time ) {
      return moment(t).format(this.options.time)
    } else if( this.options.time instanceof Date ) {
      return moment(this.options.time).format()
    } else {
      return moment(t).format('HH:mm:ss.SSS')
    }*/
  }

  renderLog ( entry:FormattedEntry, stack?:string[] ) {
    const out = entry.merge(this.label)
    this.renderer.render(out)    
  }

  renderStackLine ( stackLine:string ):LogEntryFormatted {
    stackLine = parseUrl(stackLine)
    return styles.createLog({fontWeight: 'light', fontSize: 'small'},stackLine)
  }

  render ( logEntry:FormattedEntry, stack:string[] ) {
    if ( !this.options.enabled ) {
      return undefined
    }
    stack = stack || getStack(3)
    let appendix:string = ''
    if ( this.options.sourceUrl === true ) {
      appendix = parseUrl(stack[4])
    }
    this.renderLog(logEntry)
    //console.log(logEntry[0],...logEntry[1],appendix)
  }

  observe <K> ( target:RXSubject<K>, key:string, labelFormatter?:string|Descriptor<K> ):Subscription {

    if ( !this.options.enabled ) {
      return Observable.never().subscribe ( () => {} )
    }

    const sourceName:string = `${format.nameOf(target,true)} - ${key}`
    if ( 'string' === typeof labelFormatter )
    {
      return this.observe ( target, key, (target:any, key:string, value:K) => `${labelFormatter} ${sourceName}` )
    }
    else if ( 'undefined' === typeof labelFormatter )
    {
      return this.observe ( target, key, (target:any, key:string, value:K) => sourceName )
    }

    const entryStack = getStack(1)
    let valueCount = 0
    const source = target[key]
    const targetLogger = target.logger || this
    const observerCallbacks = [
      (value:K) => {
        targetLogger.log ( `"${key}" emitted ${format.typeOf(value)} value %s`, valueCount++, value  )
      }, 
      (error) => {
        const label = labelFormatter(target,key,error,valueCount)
        targetLogger.log ( `"${key}" %cemitted error on item %s: %s`, styles.render(styles.error.normal), valueCount++, error, error.stack , entryStack )
      }, 
      () => {
        targetLogger.log ( `"${key}"  completed after emitting ${valueCount} values` )
      }
    ]
    const subscribeTo = ( src:any ) => src.subscribe ( observerCallbacks[0], observerCallbacks[1], observerCallbacks[2] )

    if ( source instanceof EventEmitter )
    {
      return subscribeTo(source)
    }
    if ( source instanceof Observable )
    {
      return subscribeTo(source)
    }
    if ( 'undefined' === typeof source )
      return subscribeTo(Observable.throw(new Error(`${sourceName} does not have an observable prop with name "${key}"`)))
    return subscribeTo(Observable.of(source))    
  }


  findScope ( filter:ScopeFilter ) {
    //return this.store.findScope ( filter )
  }

  cloneToScope ( scope:any, options?:Optional<typeof Logger.prototype.options> ):AFKMLogger {
    const childOptions = Object.assign({},this.options,options)
    childOptions.labelStyle.color = styles.nextColor()
    const child = new Logger(undefined,childOptions,scope,this)
    return child
  }
}
