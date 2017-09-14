
const DISABLED = process.env.NODE_ENV === 'production'

const apiOverrides = {
  log: ( format:string, ...args:any[] ) => (DISABLED ? void 0 : console.log ( format, ...args ) ),
  group: ( groupTitle?:string ) => (DISABLED ? void 0 : console.group ( groupTitle ) ),
  groupCollapsed: ( groupTitle?:string ) => (DISABLED ? void 0 : console.groupCollapsed ( groupTitle ) ),
  groupEnd: ( ) => (DISABLED ? void 0 : console.groupEnd ( ) ),
  trace: ( format:string, ...args:any[] ) => (DISABLED ? void 0 : console.trace ( format, ...args ) ),
  table: ( format:string, ...args:any[] ) => (DISABLED ? void 0 : console.table ( format, ...args ) )
}

const apiObj:any = {}
Object.keys(console).forEach ( key => {
  if ( 'function' === typeof console[key] )
  {
    apiObj[key] = apiOverrides[key] || console[key].bind(console)
  }
} )

export const api:typeof console = apiObj