import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GRowComponent } from './g-row.component';

describe('GRowComponent', () => {
  let component: GRowComponent;
  let fixture: ComponentFixture<GRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
