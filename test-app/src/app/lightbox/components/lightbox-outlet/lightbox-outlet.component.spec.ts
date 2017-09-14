import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightboxOutletComponent } from './lightbox-outlet.component';

describe('LightboxOutletComponent', () => {
  let component: LightboxOutletComponent;
  let fixture: ComponentFixture<LightboxOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightboxOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightboxOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
