import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightboxLinkComponent } from './lightbox-link.component';

describe('LightboxLinkComponent', () => {
  let component: LightboxLinkComponent;
  let fixture: ComponentFixture<LightboxLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightboxLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightboxLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
