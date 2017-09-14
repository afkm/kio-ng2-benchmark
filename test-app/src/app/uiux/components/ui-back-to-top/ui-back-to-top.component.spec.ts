import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiBackToTopComponent } from './ui-back-to-top.component';

describe('UiBackToTopComponent', () => {
  let component: UiBackToTopComponent;
  let fixture: ComponentFixture<UiBackToTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiBackToTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiBackToTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
