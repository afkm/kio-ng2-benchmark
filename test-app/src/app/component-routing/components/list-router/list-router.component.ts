import { 
  Component, ComponentFactoryResolver, Input, ViewEncapsulation,
  OnChanges, SimpleChanges, SimpleChange
} from '@angular/core';
import { KioFragmentModel, KioPublicationModel, KioContentModel } from 'kio-ng2-data'

import { DataComponent, FragmentDataComponent, ContentDataComponent } from '../base'
import { getComponentIndexForNode, getComponentAt } from 'kio-ng2-component-routing'


@Component({
  selector: 'list-component-router',
  templateUrl: './list-router.component.html',
  styleUrls: ['./list-router.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListComponentRouter extends DataComponent<KioFragmentModel|KioPublicationModel> {

  private componentFactoryResolver:ComponentFactoryResolver=this.injector.get(ComponentFactoryResolver)
  
  protected node:KioFragmentModel|KioPublicationModel

  childNodes:(KioContentModel|KioFragmentModel)[]=[]

  protected onNodeUpdate(){
    this.applyChildNodes()
    super.onNodeUpdate()
  }

  protected applyChildNodes(){
    if ( this.node instanceof KioPublicationModel ) {
      this.childNodes = this.node.content
    } else {
      this.childNodes = this.node.children
    }
  }

}
