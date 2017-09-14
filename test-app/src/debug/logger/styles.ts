import { LogEntry, LogEntryFormatted } from './interfaces'

export const defaultColors = [
  '#004557',
  '#a200ff',
  '#f47835',
  '#d41243',
  '#8ec127'
]

let colorCnt = 0

export function nextColor ( ) {
  const idx = (colorCnt++ % defaultColors.length)
  return defaultColors[idx]
}

export type StyleConfig = {
  [K in keyof CSSStyleDeclaration]?: CSSStyleDeclaration[K]
}

export function createStyle ( ...styles:StyleConfig[] ):StyleConfig {
  return Object.assign({},...styles)
}

const STYLES_CACHE:WeakMap<StyleConfig,string> = new WeakMap()

export function render ( styles:StyleConfig={} ) {
  if ( !STYLES_CACHE.has(styles) ) {
    const el = document.createElement('div')
    Object.keys(styles).forEach ( key => {
      el.style[key] = styles[key]
    } )
    STYLES_CACHE.set(styles,el.getAttribute('style'))
  }
  return STYLES_CACHE.get(styles)  
}

export function createLog ( styles:StyleConfig, text?:string, clear:boolean=true ):LogEntryFormatted {
  let entryFormat = '%c'
  let entryArgs = [ render(styles) ]
  if ( text ) {
    entryFormat += '%s'
    entryArgs.push(text)
    if ( clear !== false ) {
      entryFormat += '%c'
      entryArgs.push('')
    }
  }
  return [ entryFormat, entryArgs ]
}

export module error {
  export const normal = createStyle ( {
    color: 'red'    
  } )
}

export module label {  
  
  export const normal = createStyle ( {
    fontWeight: 'bold'
  } )
  
  export const large = createStyle ( {
    fontWeight: 'bold',
    fontSize: 'large'
  } )

}