import { LogEntry, LogEntryFormatted, LogEntryPlain, isLogEntry, isLogEntryFormatted, isLogEntryPlain } from '../entry'

export const CHAR_SEP = ' '
export const CHAR_CR = '\n'

export function toFormatted ( entry:LogEntry|any ):LogEntryFormatted {
  if ( isLogEntryPlain (entry) ) {
    return ['%s',entry]
  } 
  if ( isLogEntryFormatted (entry) ) {
    return entry
  } 
  return ['%s',[entry]]
}

export function mergeFormat ( ...formats:string[] ) {
  if ( formats.length > 1 ) {
    return formats.reduce((p,c)=>{
      return p + CHAR_SEP + c
    })
  }
  return formats[0]
}

export function wrapLog ( entry:LogEntry|string, left:LogEntry|string, right:LogEntry|string ) {
  return mergeLogs ( toFormatted(left), entry, right )
}

export function mergeLogs ( entry:LogEntry, ...logEntries:(LogEntry|string)[] ):LogEntryFormatted {
  if ( !isLogEntryFormatted(entry) ) {
    return mergeLogs(toFormatted(entry), ...logEntries)
  }
  if ( logEntries.length > 0 ) {
    const [ nextEntry, ...entries ] = logEntries
    const next = toFormatted(nextEntry)
    const merged:LogEntryFormatted = [
      mergeFormat(entry[0],next[0]),
      [ ...entry[1], ...next[1] ]
    ]
    return mergeLogs(merged,...entries)
  }
  return entry
}