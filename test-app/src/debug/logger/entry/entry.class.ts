import { LogEntry, LogEntryFormatted, LogEntryPlain, LogArgs, LogFormat, Formatted, Simple } from './interfaces'
import { isLogEntryPlain, isLogEntryFormatted } from './typechecks'


export class SimpleEntry implements Simple {
  
  constructor ( readonly format:any ) {

  }

  toLogEntry ():LogEntry {
    return [this.format]
  }
}

export const SEP = ' '

export class FormattedEntry extends SimpleEntry implements Formatted {

  public static from ( value:any|FormattedEntry|SimpleEntry|LogEntryFormatted|LogEntryPlain ):FormattedEntry {
    if ( value instanceof FormattedEntry ) {
      return value
    } else if ( value instanceof SimpleEntry ) {
      return new FormattedEntry ( '%s', [value.format] )
    } else if ( isLogEntryFormatted(value) ) {
      return new FormattedEntry ( value[0], value[1] )
    } else if ( isLogEntryPlain(value) ) {
      return this.from ( new SimpleEntry(value[0]) )
    }
    return this.from ( new SimpleEntry ( value ) )
  }

  constructor ( format:string ) 
  constructor ( format:string, args:any[] ) 
  constructor ( format:string, previousEntry:FormattedEntry ) 
  constructor ( format:string, args:any[], previousEntry:FormattedEntry ) 
  constructor ( readonly format:string, args?:FormattedEntry|any[], previousEntry?:FormattedEntry ) 
  {
    super ( format )
    if ( args instanceof FormattedEntry ) {
      previousEntry = args
      args = []
    }
    this.args = args.slice()
    this.previousEntry = previousEntry
  }

  readonly args:any[]
  readonly previousEntry:FormattedEntry

  public append ( otherEntry:string|FormattedEntry|SimpleEntry|LogEntryFormatted|LogEntryPlain ) {
    if ( otherEntry instanceof FormattedEntry ) {
      return new FormattedEntry ( otherEntry.format, otherEntry.args.slice(), this )
    }
    return this.append ( FormattedEntry.from(otherEntry) )
  }

  public merge ( otherEntry:any|FormattedEntry ) {
    if ( !(otherEntry instanceof FormattedEntry) ) {
      return this.merge ( FormattedEntry.from(otherEntry) )
    }
    return new FormattedEntry ( otherEntry.format + SEP + this.format, otherEntry.args.concat(this.args) )
  }


  toLogEntry ():LogEntryFormatted {
    return [this.format,this.args]
  }

  resolve () {
    if ( this.previousEntry ) {
      return this.merge ( this.previousEntry.resolve() )
    } else {
      return this
    }
  }

}