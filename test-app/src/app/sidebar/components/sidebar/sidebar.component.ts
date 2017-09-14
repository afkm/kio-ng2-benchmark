import { Component, OnInit, Input, Inject, ViewEncapsulation } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service'
import { SidebarState } from '../../enums/sidebar-state.enum'


@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None  
})
export class SidebarComponent {

  constructor(
    protected sidebarService:SidebarService
  ) { }

  isOpen:boolean=false;

  sidebarState:SidebarState=SidebarState.closed


  anchorSubscription=this.sidebarService.sidebarState.subscribe ( nextState => {
    this.sidebarState = nextState
    this.isOpen = nextState > SidebarState.closing
  } )

  toggleSidebarState(event){
    this.isOpen = !this.isOpen
  }  

}
