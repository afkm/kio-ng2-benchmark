import { 
  StoredLogEntry
} from '../store/interfaces'
import * as Typechecks from '../typechecks'
import * as format from './format'
import { api as consoleApi } from './console'


export function renderStack ( stack:string[], label:string='stack' ) {
  consoleApi.groupCollapsed(label)
  stack.forEach ( row => {
    consoleApi.log('%s',row)
  } )
  consoleApi.groupEnd()
}


function timePrefix ( timestamp?:Date ):string {
  if ( window.afkm.logger.options['timeprefix'] !== false )
  {
    return `${format.date(timestamp||new Date(),false)} - `
  }
  return ''
}
/*
export function renderStoredEntry ( storedEntry:StoredLogEntry, index?:number ) {
  const logEntry = storedEntry.entry
  const prefix = timePrefix(storedEntry.timestamp)
  if ( Typechecks.isLogEntryFormatted(logEntry) )
  {
    const [ formatString, args ] = logEntry 
    consoleApi.log ( prefix+formatString, ...args )
  }
  else 
  {
    const [ formatString ] = logEntry 
    consoleApi.log ( prefix+formatString )
  }
}

const _renderScope = ( collapsed:boolean=false, scope:any, logEntries?:StoredLogEntry[], trace:boolean=false ):void => {
  let groupTitle = `${format.nameOf(scope,true)} - ${format.typeOf(scope)}`
  if ( logEntries )
    groupTitle += ` - ${logEntries.length} entries`

  collapsed ? consoleApi.groupCollapsed ( groupTitle ) : consoleApi.group ( groupTitle )
    if ( Array.isArray(logEntries) )
    {
      logEntries.forEach ( ( entry:StoredLogEntry, index:number ) => {
        renderStoredEntry ( entry, index )
        if ( trace && entry.stack )
          renderStack ( entry.stack )
      } )
    }
  consoleApi.groupEnd()
}


export const renderScope = _renderScope.bind(null,false)
export const renderScopeCollapsed = _renderScope.bind(null,true)*/