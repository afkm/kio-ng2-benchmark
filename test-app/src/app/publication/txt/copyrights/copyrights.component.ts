import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RoutableComponent, DataComponent, ContentDataComponent } from '../../../component-routing/module'


@RoutableComponent({
  queryable: {
    type: 'txt',
    modifiers: ['copyrights']
  },
  selector: 'publication-copyrights',
  templateUrl: './copyrights.component.html',
  styleUrls: ['./copyrights.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CopyrightsComponent extends ContentDataComponent {

  show:boolean = false

  onNodeUpdate(){
    super.onNodeUpdate()
  }


  showCopyrights() {

    this.show = true

    let timeout = setTimeout(function() {

      let copyrightsBody = <HTMLElement>document.querySelector('#copyrights')

      let offsetY = copyrightsBody.offsetTop;

      window.scrollTo(0, offsetY)

    }, 100)

  }
}
