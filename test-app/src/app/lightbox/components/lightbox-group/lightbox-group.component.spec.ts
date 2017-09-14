import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightboxGroupComponent } from './lightbox-group.component';

describe('LightboxGroupComponent', () => {
  let component: LightboxGroupComponent;
  let fixture: ComponentFixture<LightboxGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightboxGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightboxGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
