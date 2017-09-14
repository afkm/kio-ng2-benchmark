import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GColComponent } from './g-col.component';

describe('GColComponent', () => {
  let component: GColComponent;
  let fixture: ComponentFixture<GColComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GColComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
