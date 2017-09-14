import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyrightsContainerComponent } from './copyrights-container.component';

describe('CopyrightsContainerComponent', () => {
  let component: CopyrightsContainerComponent;
  let fixture: ComponentFixture<CopyrightsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopyrightsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyrightsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
