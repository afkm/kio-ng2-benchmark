import { InjectionToken } from '@angular/core'
import { SharingConfig } from './interfaces'

export let SHARING_CONFIG = new InjectionToken<SharingConfig[]>('sharing_config')