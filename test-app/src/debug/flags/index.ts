import { isDevMode } from '@angular/core'
const PREFIX = 'afkm_debug_'

let flags

export const read = ():string[] => {
  if (!isDevMode())
    return []
  flags = flags || JSON.parse(localStorage.getItem(PREFIX+'flags') || JSON.stringify([]))
  return flags
}

export const write = ( flags:string[] ) => {
  if (!isDevMode())
    return
  localStorage.setItem(PREFIX+'flags',JSON.stringify(flags))
}


export const add = ( flag:string ) => {
  flags = [...read(),flag]
  write(flags)
}

export const has = ( flag:string ) => {
  return read().indexOf(flag) > -1
}

export const remove = ( flag:string ) => {
  flags = flags.filter ( f => f !== flag )
  write(flags)
}
