/* tslint:disable:no-unused-variable */
import { RouterModule } from '@angular/router'
import { TestBed, fakeAsync, async, inject } from '@angular/core/testing';
import { SidebarState } from '../enums/sidebar-state.enum';
import { SidebarService } from './sidebar.service';
import { KioNg2SidebarModule } from '../module';

describe('SidebarService', () => {
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [KioNg2SidebarModule],
      providers: [SidebarService]
    });
  });

  it('should have last sidebar state "closed"', inject([SidebarService], (service: SidebarService) => {
    expect(service.lastSidebarState).toEqual(SidebarState.closed)
  }));

  it('should open', inject([SidebarService], async(service: SidebarService) => {
    const state = await service.open()
    console.log('state',state)
    expect(state).toEqual(SidebarState.opened)
  }));


});
