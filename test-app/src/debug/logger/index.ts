import { EventEmitter } from '@angular/core'
import * as Rx from 'rxjs'
import { KioContentState } from 'kio-ng2-data'
import { 
  LogStore
} from './store'
import * as opts from '../options'
import { Logger } from './logger.class'

import * as styles from './styles'
export { styles, Logger }

const __LOG_STORE__ = new LogStore()

export const logger = new Logger(__LOG_STORE__,{
  enabled: opts.read('LOGGER_ENABLED',false),
  trace: opts.read('LOGGER_TRACE',false),
  timeprefix: opts.read('LOGGER_TIMEPREFIX',false)
},window)
