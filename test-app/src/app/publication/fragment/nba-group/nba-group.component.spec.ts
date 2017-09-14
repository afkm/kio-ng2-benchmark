import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaGroupComponent } from './nba-group.component';

describe('NbaGroupComponent', () => {
  let component: NbaGroupComponent;
  let fixture: ComponentFixture<NbaGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbaGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbaGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
