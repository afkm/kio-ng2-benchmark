import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionHeadlineComponent } from './section-headline.component';

describe('SectionHeadlineComponent', () => {
  let component: SectionHeadlineComponent;
  let fixture: ComponentFixture<SectionHeadlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionHeadlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
