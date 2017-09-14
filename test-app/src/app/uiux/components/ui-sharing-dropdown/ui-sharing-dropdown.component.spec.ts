import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSharingDropdown } from './ui-sharing-dropdown.component';

describe('UiSharingDropdown', () => {
  let component: UiSharingDropdown;
  let fixture: ComponentFixture<UiSharingDropdown>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiSharingDropdown ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiSharingDropdown);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
