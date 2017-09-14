import { Directive, Inject } from '@angular/core';
import { LightboxService } from '../services/lightbox.service'

@Directive({
  selector: '[lightbox]'
})
export class LightboxDirective {

  constructor( @Inject(LightboxService) private lightboxService:LightboxService ) {
    console.log('hello image')
  }

}
