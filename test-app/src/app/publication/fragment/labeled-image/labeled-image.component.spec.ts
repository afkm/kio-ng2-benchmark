import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabeledImageComponent } from './labeled-image.component';

describe('LabeledImageComponent', () => {
  let component: LabeledImageComponent;
  let fixture: ComponentFixture<LabeledImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabeledImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabeledImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
