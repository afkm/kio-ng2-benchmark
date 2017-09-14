import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabeledImageWithZoomComponent } from './labeled-image-with-zoom.component';

describe('LabeledImageWithZoomComponent', () => {
  let component: LabeledImageWithZoomComponent;
  let fixture: ComponentFixture<LabeledImageWithZoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabeledImageWithZoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabeledImageWithZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
