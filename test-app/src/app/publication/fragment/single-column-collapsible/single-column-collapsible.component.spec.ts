import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleColumnCollapsibleComponent } from './single-column-collapsible.component';

describe('SingleColumnCollapsibleComponent', () => {
  let component: SingleColumnCollapsibleComponent;
  let fixture: ComponentFixture<SingleColumnCollapsibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleColumnCollapsibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleColumnCollapsibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
