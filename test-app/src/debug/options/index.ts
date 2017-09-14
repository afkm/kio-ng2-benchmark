import * as OPTIONS from './constants'

import { OptionKeys } from '../interfaces'


export function read<T> ( key:OptionKeys, defaultValue?:T ):T {
  let storedValue:string
  let error:any
  try{
    storedValue = localStorage.getItem(key)
  }catch(e)
  {
    error = e
  }
  if ( error )
    return defaultValue

  if ( null === typeof storedValue )
    return write(key,defaultValue)
  return JSON.parse(storedValue)
}

export function write<T> ( key:OptionKeys, value:T ) {
  let error:any
  try{
    localStorage.setItem(key,JSON.stringify(value))
  }catch(e)
  {
    error = e
  }
  
  return value
}

export const keys:string[] = Object.keys(OPTIONS)