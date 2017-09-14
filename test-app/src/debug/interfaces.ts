import { AFKMFlags } from './flags/interfaces'
import { Logger, styles } from './logger'
import { DebugControls } from './controls'
import * as OPTIONS from './options/constants'

export type OptionKeys = keyof typeof OPTIONS

export interface AFKMOptions {
  read<T>( option:OptionKeys, defaultValue?:T ):T
  write<T>( option:OptionKeys, value:T ):T
  readonly keys:string[]
}

export interface AFKMDebugApi {
  flags: AFKMFlags
  logger: Logger
  controls: DebugControls
  Logger: typeof Logger
}

export interface AFKMDebug extends AFKMDebugApi {
  options: AFKMOptions
  styles: typeof styles
  build: {
    version: string
    components: any[]    
  }
  addControls( key:string, controls:any ):any
}
