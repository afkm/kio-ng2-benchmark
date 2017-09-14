import { AFKMDebug } from './interfaces'
import * as flags from './flags'
import { logger, styles } from './logger'
import { addControls, DebugControls } from './controls'
import { version, components } from './version'
import * as options from './options'
import { Logger } from './logger/logger.class'

declare global {
  
  type AFKMLoggerConstructor = typeof Logger
  type AFKMLogger = Logger

  interface Window {
    afkm: AFKMDebug
  }
}

window.afkm = {
  flags,
  styles,
  logger,
  Logger,
  options,
  build: {
    version, 
    components
  },
  controls: DebugControls,
  addControls
}