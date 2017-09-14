
export interface DebugControls {
  [key: string]: any
}


export const DebugControls:DebugControls = {}

export function addControls<T> ( key:string, controls:T ):T {
  DebugControls[key] = controls
  return controls
}