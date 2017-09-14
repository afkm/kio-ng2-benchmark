import { 
  LogEntry, LogEntryFormatted, LogEntryPlain, LogArgs, LogFormat,
  Formatted
} from './interfaces'

export function isLogFormat ( other:any ):other is LogFormat {
  return 'string' === typeof other
}

export function isLogArgs ( other:any ):other is LogArgs {
  return Array.isArray(other)
}

export function isLogEntryPlain ( other:any ):other is LogEntryPlain {
  return Array.isArray(other) && other.length === 1 && isLogFormat(other[0])
}

export function isLogEntryFormatted ( other:any ):other is LogEntryFormatted {
  return Array.isArray(other) && other.length === 2 && isLogFormat(other[0]) && isLogArgs(other[1])
}

export function isLogEntry ( other:any ):other is LogEntry {
  return isLogEntryFormatted(other) || isLogEntryPlain(other)
}

export function isFormatted ( other:any ):other is Formatted {
  return ( 
    'object' === typeof other
    &&
    'format' in other 
    &&
    'args' in other 
  )
}