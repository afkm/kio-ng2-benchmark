import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterCoverComponent } from './chapter-cover.component';

describe('ChapterCoverComponent', () => {
  let component: ChapterCoverComponent;
  let fixture: ComponentFixture<ChapterCoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterCoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
