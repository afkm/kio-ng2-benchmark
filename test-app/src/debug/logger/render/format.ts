/// <reference types="node" />

function getConstructor ( other:any|Function ):Function {
  if ( 'function' === typeof other )
    return other.prototype.constructor
  return other.constructor
}  

function ConstructorPath ( other:any|Function ):Function[] {
  const currentConstructor = getConstructor(other)
  const parentConstructor = Object.getPrototypeOf(currentConstructor.prototype).constructor
  if ( parentConstructor === Object )
    return [ currentConstructor ]
  return [ ...ConstructorPath(parentConstructor), currentConstructor ]
}

function isComponentConstructor (other:any) {
  return (other instanceof Object) && ( 'node' in other )
}


const margeNames = ( ...names:string[] ) => {
  names = names.filter ( name => !!name )
  return `[${names.join(' ')}]`
}


export const nameOfComponent = ( target:any ) => {
  const name:string[] = []
  name.push ( `${target.constructor.name}` )
  if ( 'node' in target && !!target['node'] )
  {
    name.push(target.node.type)
    name.push(target.node.cuid)
  }
  else {
    const parent = Object.getPrototypeOf(target).constructor
    name.push(`::${parent.name}`)
  }
  return `[${name.join('|')}]`
}


export const nameOf = ( target:any, recursive:boolean=false ) => {
  const nameKeys = ['name','id','cuid','node']
  let name:string


  if ( isComponentConstructor(target) )
  {
    return nameOfComponent(target)
  }
  else if ( 'object' === typeof target )
  {
    return nameOf(target.constructor,recursive)
  }
  if ( 'function' === typeof target )
  {
    const parentPrototype = Object.getPrototypeOf(target)
    const superConstructor = parentPrototype.constructor
    if ( recursive && superConstructor !== Object )
    {
      return `${nameOf(superConstructor,false)}::${target.name}`
    }
    return target.name
  }
  return typeof target
}

export const typeOf = ( value:any ) => {
  const nativeType = typeof value
  if ( 'function' === nativeType )
    return nameOf(value)
  if ( 'object' === nativeType )
    return nameOf(value)
  return nativeType
}


export const date = ( value:Date|number|string, withDate:boolean=true, withTime:boolean=true ):string => {
  if ( 'string' === typeof value )
    return date ( new Date(value) )
  if ( 'number' === typeof value )
    return date ( new Date(value) )

  const parts = [
    withDate && value.toDateString(),
    withTime && value.toTimeString()
  ].filter(v=>!!v)
  return parts.join(' ')
}

export const seconds = ( value:number|Date, dec:number=3 ) => {
  if ( value instanceof Date )
    return seconds ( value.getTime() )
  const ms = value % 1000
  const s = Math.floor((value-ms)/1000)
  if ( !dec )
    return `${s}sec`
  return `${s}sec ${(ms+"").substr(0,dec)}`
}

export const timeSince = ( since:Date ) => {
  const t0 = since.getTime()
  return ( tNow:number=Date.now() ) => seconds ( tNow-t0 )
}