import { 
  LogEntry,
  isLogEntry
} from './entry'
import { StoredLogEntry } from './interfaces'

export function isStoredLogEntry ( other:any ):other is StoredLogEntry {
  return (
      'entry' in other && isLogEntry(other.entry)
      &&
      'timestamp' in other
    )
}