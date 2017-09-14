import { Formatted, Simple, isFormatted } from '../entry'
import { FormatElement, FormatPlaceholder } from './interfaces'

export class LogRenderer {

  constructor (
    readonly options:{
      space?: string,
      lineBreak?: string
    }={}
    ) {
    this.options = Object.assign({
      lineBreak: '\n',
      space: ' '
    },options)
  }

  parse ( source:Formatted ) {
    const {
      format ,
      args 
    } = source

    const items:(FormatElement|FormatPlaceholder<any>)[] = []
    const rg = /\%{1}([isof]|\d{1,}f|1\.\d{1,}f)/gm

    let m:RegExpExecArray
    let pos:number = 0

    while ( (m = rg.exec(format)) && m !== undefined ) {
      const prefix = m.index > pos ? format.substr(pos,m.index-pos) : undefined
      const [ value ] = m
      pos = m.index + value.length
      items.push({
        value,
        parameter: args.shift(),
        prefix
      })
    }
    const rest = format.substr(pos)
    if ( rest ) {
      items.push({
        value: rest
      })
    }

    return items.concat(
      args.map ( arg => this.wrapValue(arg) )
    )
  }

  wrapValue <T> ( param:T ):FormatPlaceholder<T> {
    let value = '%o'
    let parameter:any = param
    if ( 'undefined' === typeof param ) {
      parameter = 'undefined'
    }
    return {
      parameter ,
      value: '%o',
      prefix: this.options.space
    }
  }

  renderElements ( elements:(FormatElement|FormatPlaceholder<any>)[] ) {
    const formatChunks:string[] = []
    const formatArgs:any[] = []
    elements.forEach ( element => {
      if ( element.prefix ) {
        formatChunks.push(element.prefix)
      }
      if ( 'parameter' in element ) {
        formatChunks.push(element.value)
        formatArgs.push((<any>element).parameter)
      } else {
        formatChunks.push(element.value)
      }
    } )
    const format:string = formatChunks.join('')
    this.render(format,...formatArgs)
  }

  render ( format:Formatted ) 
  render ( format:string, ...args:any[] ) 
  render ( format:string|Formatted, ...args:any[] ) 
  {
    if ( isFormatted(format) ) {
      return this.renderElements ( this.parse(format) )
    }
    console.log(format, ...args)
  }


}