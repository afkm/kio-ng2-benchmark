
export type LogFormat = string
export type LogArgs = any[]

export type LogEntryPlain = [LogFormat]
export type LogEntryFormatted = [LogFormat,LogArgs]

export type LogEntry = LogEntryFormatted|LogEntryPlain

export interface LogFormatter <T> {
  ( value:T ):LogEntry
}


export interface Simple {
  readonly format:any
  toLogEntry ():LogEntry
}

export interface Formatted extends Simple {
  readonly format:string
  readonly args:any[]
  readonly previousEntry?:Formatted

  append(other:any):this
  merge(other:any):this

  toLogEntry():LogEntryFormatted

  resolve():this
}
